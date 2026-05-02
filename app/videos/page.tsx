'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'

const videos = [
  {
    title: 'Carton and Case Formers / Tapers as Retrofits for Packing Line Automation',
    category: 'Automation',
    duration: '3:24',
  },
  {
    title: 'Microwave Popcorn Packing Machine (single or twin head)',
    category: 'VFFS',
    duration: '2:15',
  },
  {
    title: 'Multitrack VFFS with Sachets in String Form bundling — Ideal for 3 side seal packs',
    category: 'Multitrack',
    duration: '4:10',
  },
  {
    title: 'Multi Track FFS machine for Liquids Four Side Seal Sachets — shampoo, honey, ketchup',
    category: 'Liquids',
    duration: '3:45',
  },
  {
    title: 'Milk Powder Packing Machine with Tendency control',
    category: 'VFFS',
    duration: '2:50',
  },
  {
    title: 'High Speed Flow wrapper integrated with third party equipment — cheese cubes, seasoning',
    category: 'Flow Wrapper',
    duration: '3:15',
  },
  {
    title: 'Multi-track Vertical FFS for Packing Spice Seasoning',
    category: 'Multitrack',
    duration: '2:30',
  },
  {
    title: 'Pouch Bundling as a retrofit for 3rd party machines',
    category: 'Automation',
    duration: '2:05',
  },
  {
    title: 'High Speed Multitrack for Instant Coffee with bundling — up to 1200 packs/minute',
    category: 'Multitrack',
    duration: '5:20',
  },
  {
    title: 'Welding Electrodes Packaging And Automation — complete line',
    category: 'Industrial',
    duration: '6:10',
  },
  {
    title: 'Multi-lane Vertical Packing for Multi-product Dosing — Powdered Soup, Spices',
    category: 'Multilane',
    duration: '3:55',
  },
]

const categoryColors: Record<string, string> = {
  'Automation': 'bg-purple-50 text-purple-600 border-purple-100',
  'VFFS': 'bg-blue-50 text-blue-600 border-blue-100',
  'Multitrack': 'bg-indigo-50 text-indigo-600 border-indigo-100',
  'Liquids': 'bg-cyan-50 text-cyan-600 border-cyan-100',
  'Flow Wrapper': 'bg-green-50 text-green-600 border-green-100',
  'Industrial': 'bg-orange-50 text-orange-600 border-orange-100',
  'Multilane': 'bg-pink-50 text-pink-600 border-pink-100',
}

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        subtitle="See Starpac machinery in action — real-world installations and production lines."
        breadcrumbs={[{ label: 'Videos' }]}
      />

      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">Machine Demos</div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">Watch Our Machines in Action</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail placeholder */}
                <div className="relative h-48 gradient-bg flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md font-mono">
                    {video.duration}
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 ${categoryColors[video.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                    {video.category}
                  </div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#1a56db] transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-[#6E6E73] mb-6">
              Want to see a specific machine in action? Contact us for a live demonstration.
            </p>
            <a
              href="mailto:sales@starpacindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              Request a Demo
            </a>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
