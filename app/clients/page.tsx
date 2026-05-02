'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'

const clients = [
  'Hindustan Unilever',
  'Reckitt Benckiser',
  'Pepsi Co',
  'Coca Cola',
  'Everest',
  'Eastern',
  'GD Foods',
  'Indo Nissin Foods',
  'DS Group',
  "Nilon's",
  'Kaleesuwari Refinery',
  'Perfetti Van Melle',
  'GRB',
  'SKC',
  'Milky Mist Dairy Foods',
  'MTR',
  'Aachi Masala',
  'ConAgra Foods',
  "Mother's Recipe",
  'General Mills',
  'Dabur',
  'CavinKare',
  'Suhana Masale',
  'Excel Crop Care',
  'Bunge India',
]

const industries = [
  { label: 'Food & Beverages', count: 18 },
  { label: 'Personal Care', count: 4 },
  { label: 'Home Care', count: 2 },
  { label: 'Agricultural', count: 1 },
]

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Trusted by industry leaders across Food, Pharma, Personal Care, and more."
        breadcrumbs={[{ label: 'Clients' }]}
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'MNC Clients' },
              { value: '1300+', label: 'Machines Running' },
              { value: '25+', label: 'Countries' },
              { value: '30+', label: 'Years Trust' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[#6E6E73] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">
              Trusted by Industry Leaders
            </div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">Our Clients</h2>
            <p className="text-[#6E6E73] mt-4 max-w-xl mx-auto">
              From global MNCs to regional champions — Starpac machines are at the heart of their production lines.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-2xl p-5 flex items-center justify-center text-center border border-gray-100 hover:border-[#1a56db]/30 hover:shadow-md transition-all min-h-[80px]"
              >
                <span className="text-sm font-semibold text-[#6E6E73] leading-tight">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-black text-[#1D1D1F]">Industries Served</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-[#F5F5F7]"
              >
                <span className="text-sm font-semibold text-[#1D1D1F]">{ind.label}</span>
                <span className="text-xs text-white gradient-bg px-2 py-0.5 rounded-full font-bold">
                  {ind.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title="Become our next success story" subtitle="Join 1300+ installations running Starpac machinery worldwide." />
    </>
  )
}
