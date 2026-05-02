'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'

const contactDetails = [
  {
    label: 'Address',
    value: 'AC22B, Sidco Industrial Estate, Thirumudivakkam, Chennai – 600 044, India',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Mobile',
    value: '+91-77080 67158',
    href: 'tel:+917708067158',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Landline',
    value: '+91-44-4285 2080',
    href: 'tel:+914442852080',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'sales@starpacindia.com',
    href: 'mailto:sales@starpacindia.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team — we'd love to help you find the right packaging solution."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-[#1D1D1F] mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-10">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5F7]">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wider mb-1">
                        {detail.label}
                      </div>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-[#1D1D1F] font-medium hover:text-[#1a56db] transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-[#1D1D1F] font-medium">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 bg-[#F5F5F7] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">📍</div>
                  <div className="text-sm font-semibold text-[#1D1D1F]">Sidco Industrial Estate</div>
                  <div className="text-xs text-[#6E6E73]">Thirumudivakkam, Chennai – 600 044</div>
                  <a
                    href="https://maps.google.com/?q=Sidco+Industrial+Estate+Thirumudivakkam+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-[#1a56db] font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-[#1D1D1F] mb-8">Send a Message</h2>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
