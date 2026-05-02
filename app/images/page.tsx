'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'

const categories = [
  {
    name: 'VFFS Machines',
    items: [
      { title: 'Single Lane PS 360', gradient: 'from-blue-500 to-indigo-600' },
      { title: 'PS 550 in Operation', gradient: 'from-indigo-500 to-purple-600' },
      { title: 'Multilane HS 190', gradient: 'from-blue-400 to-blue-700' },
      { title: 'Multilane HS 360', gradient: 'from-purple-500 to-blue-600' },
    ],
  },
  {
    name: 'Flow Wrappers & Fillers',
    items: [
      { title: 'MW 820 Flow Wrapper', gradient: 'from-teal-500 to-cyan-600' },
      { title: 'Orion PF Filler', gradient: 'from-cyan-500 to-blue-600' },
      { title: 'ACF Servo Filler', gradient: 'from-teal-400 to-teal-700' },
      { title: 'Multihead Weigher', gradient: 'from-green-500 to-teal-600' },
    ],
  },
  {
    name: 'Jar / Can Filling',
    items: [
      { title: 'JFS 1 Rotary Line', gradient: 'from-orange-500 to-red-600' },
      { title: 'JFS 2 Linear', gradient: 'from-red-400 to-orange-600' },
      { title: 'Can Filling Close-up', gradient: 'from-amber-500 to-orange-600' },
      { title: 'Glass Jar Sealing', gradient: 'from-orange-400 to-yellow-600' },
    ],
  },
  {
    name: 'Vacuum & Tray Sealing',
    items: [
      { title: 'Cup-Tray Seal Machine', gradient: 'from-violet-500 to-purple-700' },
      { title: 'Vacuum Chamber Unit', gradient: 'from-purple-400 to-violet-700' },
      { title: 'Double Chamber View', gradient: 'from-fuchsia-500 to-purple-600' },
      { title: 'Thermo Shrink Line', gradient: 'from-pink-500 to-fuchsia-600' },
    ],
  },
  {
    name: 'Manufacturing Facility',
    items: [
      { title: 'Assembly Bay', gradient: 'from-slate-500 to-gray-700' },
      { title: 'CNC Machining', gradient: 'from-gray-500 to-slate-700' },
      { title: 'Quality Control', gradient: 'from-zinc-500 to-gray-600' },
      { title: 'Dispatch Area', gradient: 'from-stone-500 to-slate-600' },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our machines, facilities, and installations from around the world."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <h2 className="text-xl font-bold text-[#1D1D1F]">{category.name}</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ii * 0.08 }}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                      ii === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${item.gradient} ${
                        ii === 0 ? 'h-64 sm:h-full' : 'h-40'
                      } flex items-end p-4 group-hover:opacity-90 transition-opacity`}
                    >
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div className="relative">
                        <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
