'use client'

import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, MessageSquare, Shield, LogOut, 
  Clock, Package, Lock, Loader2,
  User, Bot, ChevronRight
} from 'lucide-react'
import Link from 'next/link'

interface ChatHistory {
  id: number
  user_message: string
  bot_response: string
  machine_names: string[]
  timestamp: string
}

export default function InternalDashboard() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [chats, setChats] = useState<ChatHistory[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) fetchChats()
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) fetchChats()
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchChats = async () => {
    const { data, error } = await supabase
      .from('chat_history')
      .select('*')
      .order('timestamp', { ascending: false })

    if (error) console.error('Fetch error:', error)
    else setChats(data || [])
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setAuthError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) setAuthError(error.message)
    setIsProcessing(false)
  }


  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setChats([])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F2F4F7] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#F2F4F7] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)]">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-2xl font-black text-[#0B0F19] tracking-tight mb-2">
                Admin Portal
              </h1>
              <p className="text-gray-500 text-sm font-medium">
                Access Starpac Chat Intelligence
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-5 text-[#0B0F19] placeholder:text-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                  placeholder="admin@starpacindia.com"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-5 text-[#0B0F19] placeholder:text-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              {authError && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-[13px] font-semibold">
                  {authError}
                </div>
              )}

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full h-14 bg-[#0B0F19] hover:bg-[#1F2937] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/5"
              >
                {isProcessing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5" />}
                Secure Login
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#0B0F19] flex flex-col">
      {/* Header */}
      <header className="h-[72px] border-b border-gray-200 bg-white flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B0F19] flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-[14px] font-black uppercase tracking-widest leading-none">Internal Hub</h1>
              <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Starpac Intelligence Console</p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[13px] font-bold text-[#0B0F19]">{session.user.email}</span>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Administrator</span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-red-600 transition-all"
            title="Log out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[12px] font-black text-blue-600 tracking-[0.22em] uppercase mb-3 block">
              Analytics & Logs
            </span>
            <h2 className="text-[40px] font-black tracking-tight leading-none mb-3">Chat Intelligence</h2>
            <p className="text-gray-500 font-medium max-w-lg">Monitoring real-time interactions between the Packaging Assistant and visitors to improve machine recommendations.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 px-7 py-5 shadow-sm flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Session Logs</span>
              <span className="text-3xl font-black">{chats.length}</span>
            </div>
          </div>
        </div>

        {/* Logs List */}
        <div className="space-y-5">
          {chats.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-[32px] border border-gray-200 border-dashed">
              <MessageSquare className="h-12 w-12 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[13px]">No interactions recorded yet</p>
            </div>
          ) : (
            chats.map((chat) => (
              <motion.div 
                key={chat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-[28px] overflow-hidden hover:border-gray-300 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.08)] transition-all group"
              >
                <div className="p-7 md:p-9">
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar: Metadata */}
                    <div className="lg:w-[280px] shrink-0 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Timestamp</p>
                          <span className="text-[13px] font-bold text-[#0B0F19]">
                            {new Date(chat.timestamp).toLocaleString(undefined, {
                              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>
                      
                      {chat.machine_names && chat.machine_names.length > 0 && (
                        <div className="space-y-3">
                          <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Recommended Units</p>
                          <div className="flex flex-wrap gap-2">
                            {chat.machine_names.map((name, i) => (
                              <span key={i} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-[11px] font-bold border border-blue-100">
                                {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Main: Dialogue */}
                    <div className="flex-1 flex flex-col gap-8 lg:border-l lg:border-gray-100 lg:pl-10">
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                            <User className="h-3 w-3 text-gray-500" />
                          </div>
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">User Query</span>
                        </div>
                        <p className="text-[#0B0F19] text-[17px] font-semibold leading-relaxed tracking-tight">
                          &ldquo;{chat.user_message}&rdquo;
                        </p>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
                            <Bot className="h-3 w-3 text-emerald-600" />
                          </div>
                          <span className="text-[10px] font-black text-emerald-600/60 uppercase tracking-[0.2em]">AI Assistant</span>
                        </div>
                        <div className="text-gray-600 text-[15px] leading-relaxed whitespace-pre-wrap bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                          {chat.bot_response}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
      
      <footer className="py-10 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">© 2024 Starpac India Limited — Private Administrator Console</p>
        </div>
      </footer>
    </div>
  )
}
