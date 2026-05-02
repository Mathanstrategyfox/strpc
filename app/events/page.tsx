'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'

const events = [
  {
    name: 'Indiapack Show',
    location: 'Mumbai',
    date: 'October 8–11, 2015',
    description: 'Starpac participated in Indiapack, India\'s premier packaging trade show, showcasing the latest range of VFFS machines and filling solutions.',
    highlight: 'Showcased complete VFFS range',
    tag: 'Trade Show',
  },
  {
    name: 'Packex Show',
    location: 'Pragati Maidan, New Delhi',
    date: 'September 12–14, 2015',
    description: 'At Packex New Delhi, Starpac displayed the Multilane VFFS bagger — demonstrating simultaneous multi-lane packaging with precision PLC control.',
    highlight: 'Displayed Multilane VFFS',
    tag: 'Exhibition',
  },
  {
    name: 'Packplus Show',
    location: 'Pragati Maidan, New Delhi',
    date: 'July 30 – August 2, 2015',
    description: 'Starpac showcased the JFS Rotary — an 8-station rotary jar fill and close machine — at Packplus, attracting significant interest from food and pharma sectors.',
    highlight: 'Displayed JFS Rotary',
    tag: 'Exhibition',
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Starpac at trade shows and industry exhibitions across India and beyond."
        breadcrumbs={[{ label: 'Events' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">Past Events</div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">Trade Shows & Exhibitions</h2>
          </motion.div>

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm"
              >
                {/* Left: Date */}
                <div className="gradient-bg p-8 flex flex-col justify-center">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{event.tag}</div>
                  <div className="text-white text-2xl font-black mb-1">{event.name}</div>
                  <div className="text-white/80 text-sm font-medium mb-3">{event.location}</div>
                  <div className="text-white/60 text-sm">{event.date}</div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2 p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                    <svg className="w-3.5 h-3.5 text-[#1a56db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs font-semibold text-[#1a56db]">{event.highlight}</span>
                  </div>
                  <p className="text-[#6E6E73] leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-[#F5F5F7] border border-gray-100 text-center"
          >
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">Meet Us at the Next Show</h3>
            <p className="text-[#6E6E73] mb-6">
              Starpac regularly participates in packaging industry exhibitions. Contact us to know when we&apos;ll be at an event near you.
            </p>
            <a
              href="mailto:sales@starpacindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              Get Event Updates
            </a>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
