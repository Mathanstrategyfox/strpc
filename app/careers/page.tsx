'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'

const perks = [
  { title: 'Innovation Culture', description: 'Work on cutting-edge packaging technology used by global brands.' },
  { title: 'Learning & Growth', description: 'Continuous learning opportunities, technical training and mentorship.' },
  { title: 'Kaizen Philosophy', description: 'Be part of a team that constantly improves processes and products.' },
  { title: 'Global Exposure', description: 'Work with clients and partners across 25+ countries worldwide.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Starpac"
        subtitle="Join a team of passionate engineers building the future of packaging."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Join Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-4">Join Us</div>
              <h2 className="text-4xl font-black text-[#1D1D1F] mb-6">
                We&apos;re looking for curious, passionate and excited people
              </h2>
              <p className="text-[#6E6E73] leading-relaxed mb-6">
                At Starpac India, we believe that great machinery is built by great people. We&apos;re always on the
                lookout for talented engineers, technicians, and professionals who want to make a real impact in
                the packaging industry.
              </p>
              <p className="text-[#6E6E73] leading-relaxed">
                Whether you&apos;re a mechanical engineer with a passion for precision, a software engineer excited
                about PLC and automation, or a sales professional who loves connecting solutions to customer needs
                — there&apos;s a place for you here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {perks.map((perk, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F5F5F7] border border-gray-100">
                  <h3 className="text-base font-bold text-[#1D1D1F] mb-2">{perk.title}</h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-[#1D1D1F] mb-3">Apply Now</h2>
            <p className="text-[#6E6E73]">Send us your resume and tell us why you&apos;d be a great fit.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              encType="multipart/form-data"
              className="bg-white rounded-2xl p-8 space-y-5 shadow-sm border border-gray-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Full Name *</label>
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
                <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Position / Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g., Mechanical Engineer, Sales Executive"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Cover Letter / Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about yourself, your experience, and why you want to join Starpac..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-[#F5F5F7] resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Resume / CV</label>
                <div className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-200 bg-[#F5F5F7] text-center cursor-pointer hover:border-[#1a56db] transition-colors">
                  <svg className="w-8 h-8 text-[#6E6E73] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-[#6E6E73] mb-1">Upload your resume</p>
                  <p className="text-xs text-[#6E6E73]">PDF, DOC, DOCX up to 10MB</p>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" className="hidden" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
