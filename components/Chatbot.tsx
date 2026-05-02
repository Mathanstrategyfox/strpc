'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Send, Bot, User, Loader2, ExternalLink } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface Machine {
  name: string
  url: string
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  machines?: Machine[]
  timestamp: Date
}

export default function Chatbot({ placeholder }: { placeholder?: string }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'chat' | 'followup'>('chat')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your Starpac Packaging Assistant. How can I help you find the right machinery today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const modalInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  useEffect(() => {
    if (isOpen && modalInputRef.current) {
      modalInputRef.current.focus()
    }
  }, [isOpen])

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const saveToSupabase = async (userMsg: string, botResp: string, machines?: Machine[]) => {
    try {
      const machineNames = machines?.map(m => m.name) || []
      
      // Attempt to save to Supabase 'chat_history' table
      const { error } = await supabase.from('chat_history').insert([
        {
          user_message: userMsg,
          bot_response: botResp,
          machine_names: machineNames,
          timestamp: new Date().toISOString()
        }
      ])
      
      if (error) console.error('Supabase error:', error.message)
    } catch (err) {
      console.error('Failed to save chat to Supabase:', err)
    }
  }

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input
    if (!textToSend.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setIsOpen(true)

    try {
      const endpoint = mode === 'chat' ? '/chatbot-api/chat' : '/chatbot-api/followup'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      })

      if (!response.ok) throw new Error('API error')

      const data = await response.json()
      const machines = data.type === 'machines' ? data.machines || [] : []
      const botResponse = data.response || "I'm here to help!"

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botResponse,
        machines: machines,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setMode(data.type === 'followup' ? 'followup' : 'chat')

      // Save to Supabase
      saveToSupabase(textToSend, botResponse, machines)

    } catch (error: any) {
      console.error('Chatbot error:', error)
      
      let errorMessage = "Sorry, I'm having trouble connecting to the server."
      if (error.message === 'API error') {
        errorMessage = "The packaging assistant server is currently unreachable. Please verify the backend is running on port 8080."
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: errorMessage,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const renderContent = (content: string, machines?: Machine[]) => {
    // 1. Process machines and prepare text
    let processedText = content;
    const machinesToUse = machines || [];
    const matchedMachineIndices = new Set<number>();

    // Sort machines by length descending to match longer names first and avoid partial matches
    const sortedMachines = [...machinesToUse]
      .map((m, i) => ({ ...m, originalIndex: i }))
      .sort((a, b) => b.name.length - a.name.length);

    sortedMachines.forEach((m) => {
      const name = m.name.trim();
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Use 'i' flag instead of 'gi' to only match and replace the FIRST occurrence
      // This ensures that if a machine is mentioned multiple times, only the first one becomes a button.
      // Improved regex: optional asterisks, the escaped name, optional plurals, and optional trailing punctuation like colons
      const regex = new RegExp(`(\\*\\*)?${escapedName}(s|es)?(\\*\\*)?(:)?`, "i");
      
      if (regex.test(processedText)) {
        processedText = processedText.replace(regex, `__MACHINE_${m.originalIndex}__`);
        matchedMachineIndices.add(m.originalIndex);
      }
    });

    const unmatchedMachines = machinesToUse.filter((_, i) => !matchedMachineIndices.has(i));

    // 2. Split by machine placeholders to render buttons inline
    const parts = processedText.split(/(__MACHINE_\d+__)/);

    return (
      <div className="space-y-4">
        <div className="whitespace-pre-wrap leading-relaxed">
          {parts.map((part, i) => {
            const match = part.match(/__MACHINE_(\d+)__/);
            if (match) {
              const machine = machinesToUse[parseInt(match[1])];
              return (
                <button
                  key={i}
                  onClick={() => {
                    setIsOpen(false)
                    router.push(machine.url)
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 mx-1 rounded-lg bg-blue-600 text-white text-[13px] font-bold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-95 align-middle border border-blue-500/20"
                >
                  {machine.name}
                  <ExternalLink className="h-3 w-3" />
                </button>
              );
            }

            // 3. Handle general bolding for non-machine text
            // Matches **anything**
            const boldParts = part.split(/(\*\*.*?\*\*)/g);
            return (
              <span key={i}>
                {boldParts.map((bp, j) => {
                  if (bp.startsWith('**') && bp.endsWith('**')) {
                    return (
                      <strong key={j} className="font-extrabold text-gray-900">
                        {bp.slice(2, -2)}
                      </strong>
                    );
                  }
                  return bp;
                })}
              </span>
            );
          })}
        </div>

        {/* Fallback for machines that weren't matched in the text */}
        {unmatchedMachines.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-100">
            <p className="w-full text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Recommended Products:</p>
            {unmatchedMachines.map((m, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsOpen(false)
                  router.push(m.url)
                  }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-white text-[12px] font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 border border-emerald-400/20"
              >
                {m.name} <ExternalLink className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-[100]">
      
      {/* ── Trigger Search Bar (Always visible in hero) ── */}
      <div 
        onClick={() => setIsOpen(true)}
        className="relative cursor-text group"
      >
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <div className="w-full h-16 pl-14 pr-32 rounded-2xl bg-white border border-gray-200 flex items-center text-gray-500 text-[15px] shadow-sm group-hover:border-gray-300 transition-all">
          {placeholder || 'Search for machines or ask the Packaging Assistant...'}
        </div>
        <div className="absolute right-3 top-2.5">
          <div className="h-11 px-6 rounded-xl bg-blue-600 text-white text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-600/20">
            <Send className="h-4 w-4" />
            <span>Ask</span>
          </div>
        </div>
      </div>

      {/* ── Floating Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-[1001] flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div className="w-full max-w-4xl h-[80vh] bg-white rounded-[32px] shadow-[0_32px_128px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col pointer-events-auto">
                
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-gray-900 tracking-tight">Starpac Assistant</h2>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Expert Online</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-200 text-gray-400 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Chat Area */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth custom-scrollbar-light"
                >
                  {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex max-w-[85%] gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-blue-600' : 'bg-gray-100'}`}>
                          {m.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-gray-500" />}
                        </div>
                        <div className={`rounded-3xl px-6 py-4 text-[15px] leading-relaxed ${
                          m.role === 'user' 
                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 text-right' 
                            : 'bg-gray-100 text-gray-800 text-left'
                        }`}>
                          {m.role === 'assistant' ? renderContent(m.content, m.machines) : <p>{m.content}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-gray-50">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span className="text-[13px] font-medium text-gray-400">Assistant is thinking...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Input Area */}
                <div className="p-6 bg-gray-50/50 border-t border-gray-100">
                  <div className="max-w-3xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      ref={modalInputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={placeholder || 'Ask anything about our packaging machines...'}
                      className="w-full h-16 pl-14 pr-16 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
                    />
                    <button 
                      onClick={() => handleSend()}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-3 top-3 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 transition-all"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-center mt-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                    Powered by Starpac AI Engine
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar-light::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar-light::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-light::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar-light::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
    </div>
  )
}