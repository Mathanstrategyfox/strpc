'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LifeBuoy, 
  MessageSquare, 
  Settings, 
  History, 
  ExternalLink,
  PlusCircle,
  FileText,
  AlertCircle,
  X,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import { submitTicket } from './actions'

export default function CustomerDashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; ticketNumber?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(e.currentTarget)
    const result = await submitTicket(formData)

    setIsSubmitting(false)
    if (result.success) {
      setSubmitResult({ 
        success: true, 
        message: 'Ticket created successfully!', 
        ticketNumber: result.ticketNumber 
      })
      // Reset form after success would be nice, but we show success state instead
    } else {
      setSubmitResult({ 
        success: false, 
        message: result.error || 'Failed to create ticket. Please try again.' 
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <PageHero
        title="Customer Dashboard"
        subtitle="Manage your machinery, track service requests, and raise support tickets via Zoho Desk."
        breadcrumbs={[{ label: 'Customer Dashboard' }]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Zoho CRM Ticket Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isFormOpen ? (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                        <LifeBuoy className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-[#0B0F19] tracking-tight mb-2">Raise an Issue Ticket</h2>
                        <p className="text-gray-500 font-medium max-w-md">
                          Report technical issues or request spare parts. Our support team will respond within 24 hours.
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B0F19] hover:bg-[#1F2937] text-white font-bold rounded-2xl transition-all shadow-lg shadow-black/10 group"
                    >
                      New Ticket
                      <PlusCircle className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-black text-[#0B0F19]">Submit Support Ticket</h2>
                      <button 
                        onClick={() => {
                          setIsFormOpen(false)
                          setSubmitResult(null)
                        }}
                        className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                      >
                        <X className="h-6 w-6 text-gray-400" />
                      </button>
                    </div>

                    {submitResult?.success ? (
                      <div className="py-12 text-center">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B0F19] mb-2">{submitResult.message}</h3>
                        <p className="text-gray-500 mb-8 font-medium">
                          Ticket ID: <span className="text-blue-600 font-bold">#{submitResult.ticketNumber}</span>
                        </p>
                        <button 
                          onClick={() => {
                            setIsFormOpen(false)
                            setSubmitResult(null)
                          }}
                          className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#0B0F19] font-bold rounded-xl transition-colors"
                        >
                          Back to Dashboard
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0B0F19]">First Name</label>
                            <input 
                              required
                              name="firstName"
                              placeholder="John"
                              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0B0F19]">Last Name</label>
                            <input 
                              required
                              name="lastName"
                              placeholder="Doe"
                              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0B0F19]">Email Address</label>
                            <input 
                              required
                              type="email"
                              name="email"
                              placeholder="john@example.com"
                              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-[#0B0F19]">Phone (Optional)</label>
                            <input 
                              name="phone"
                              placeholder="+91 98765 43210"
                              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0B0F19]">Subject</label>
                          <input 
                            required
                            name="subject"
                            placeholder="Issue with Machine XYZ"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0B0F19]">Description</label>
                          <textarea 
                            required
                            name="description"
                            rows={4}
                            placeholder="Please describe the issue in detail..."
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none"
                          />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                          <div className="flex items-center gap-4">
                            <label className="text-sm font-bold text-[#0B0F19]">Priority:</label>
                            <select 
                              name="priority"
                              className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-bold outline-none"
                            >
                              <option value="Low">Low</option>
                              <option value="Medium" selected>Medium</option>
                              <option value="High">High</option>
                              <option value="Urgent">Urgent</option>
                            </select>
                          </div>

                          <button 
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                Submit Ticket
                              </>
                            )}
                          </button>
                        </div>

                        {submitResult && !submitResult.success && (
                          <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 mt-4">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                            <p className="text-sm font-bold text-red-600">{submitResult.message}</p>
                          </div>
                        )}
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {!isFormOpen && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <AlertCircle className="h-5 w-5 text-orange-500 mb-3" />
                    <h4 className="text-[13px] font-bold text-[#0B0F19] uppercase tracking-wider mb-1">Response Time</h4>
                    <p className="text-xs text-gray-500 font-medium">Under 24 hours for standard requests.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <FileText className="h-5 w-5 text-blue-500 mb-3" />
                    <h4 className="text-[13px] font-bold text-[#0B0F19] uppercase tracking-wider mb-1">Documentation</h4>
                    <p className="text-xs text-gray-500 font-medium">Attach photos or videos of the issue.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <History className="h-5 w-5 text-emerald-500 mb-3" />
                    <h4 className="text-[13px] font-bold text-[#0B0F19] uppercase tracking-wider mb-1">Track History</h4>
                    <p className="text-xs text-gray-500 font-medium">View all past tickets in your portal.</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Machinery Section Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-[#0B0F19]">Registered Machinery</h3>
                <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline">
                  <PlusCircle className="h-4 w-4" /> Add Machine
                </button>
              </div>
              
              <div className="py-12 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                <p className="text-gray-400 font-medium">No machinery registered to this account yet.</p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0B0F19] rounded-[32px] p-8 text-white"
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-semibold">Service Manuals</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/30 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-semibold">Direct Support</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/30 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-purple-400" />
                    <span className="text-sm font-semibold">Account Settings</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/30 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-[#0B0F19] mb-4">Need Help?</h3>
              <p className="text-gray-500 text-sm font-medium mb-6">
                If you encounter any issues with the dashboard or Zoho portal, please contact our web team.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Support Email</span>
                  <span className="text-sm font-bold text-[#0B0F19]">service@starpacindia.com</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <ContactCTA />
    </div>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}
