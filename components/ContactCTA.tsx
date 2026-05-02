'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ContactCTAProps {
  title?: string
  subtitle?: string
}

export default function ContactCTA({
  title = 'Ready to transform your packaging?',
  subtitle = 'Talk to our experts and find the right machine for your production needs.',
}: ContactCTAProps) {
  return (
    <section className="py-24 bg-[#0A0A1E] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#1a56db]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#7c3aed]/15 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg"
            >
              Get in Touch
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+917708067158"
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-77080 67158
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
