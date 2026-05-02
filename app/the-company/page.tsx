'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'

const values = [
  {
    title: 'Innovation',
    description: 'Continuously evolving our technology to stay ahead of packaging industry demands.',
    icon: '◆',
  },
  {
    title: 'Quality',
    description: 'ISO standards, cGMP and cGEP compliance — built into every machine we make.',
    icon: '◇',
  },
  {
    title: 'Service',
    description: 'Comprehensive after-sales support across India and international markets.',
    icon: '◈',
  },
  {
    title: 'Reliability',
    description: '1300+ installations running 24/7 across 25+ countries is testament to our durability.',
    icon: '◉',
  },
]

const regions = [
  { zone: 'North India', states: 'Delhi, Punjab, Haryana, Rajasthan, UP' },
  { zone: 'South India', states: 'Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana' },
  { zone: 'East India', states: 'West Bengal, Odisha, Bihar, Jharkhand' },
  { zone: 'West India', states: 'Maharashtra, Gujarat, Goa, MP' },
  { zone: 'International', states: 'Europe, Malaysia, Nepal, Saudi Arabia, UAE, Sri Lanka, Nigeria, Ghana, Malawi, Tanzania, Kenya' },
]

export default function TheCompanyPage() {
  return (
    <>
      <PageHero
        title="The Company"
        subtitle="Three decades of engineering excellence in packaging machinery"
        breadcrumbs={[{ label: 'The Company' }]}
      />

      {/* Company Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-4">Our Story</div>
              <h2 className="text-4xl font-black text-[#1D1D1F] mb-6">
                Built on Precision, Driven by Purpose
              </h2>
              <div className="space-y-4 text-[#6E6E73] leading-relaxed">
                <p>
                  Starpac India Limited was founded in 1996 in Chennai, India, with a singular vision: to deliver
                  world-class packaging machinery that meets the rigorous demands of global manufacturing.
                </p>
                <p>
                  Over three decades, we have grown from a single product line to a comprehensive portfolio of
                  packaging solutions — VFFS machines, flow wrappers, jar/can filling machines, vacuum chamber systems,
                  and bespoke standalone fillers — all engineered at our 45,000 sq ft manufacturing facility in the
                  Sidco Industrial Estate, Thirumudivakkam, Chennai.
                </p>
                <p>
                  With 1300+ successful installations across 25+ countries, Starpac machines run at the heart of
                  production lines for some of the world&apos;s most recognizable brands — from Hindustan Unilever and
                  Reckitt Benckiser to Coca-Cola, PepsiCo, and Dabur.
                </p>
                <p>
                  Our team of 100+ skilled engineers and technicians embraces the Kaizen philosophy — continuous
                  improvement — to ensure every machine that leaves our factory is better than the last.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1996', label: 'Year Founded' },
                  { value: '1300+', label: 'Installations' },
                  { value: '45,000', label: 'sq ft Facility' },
                  { value: '100+', label: 'Skilled Workers' },
                  { value: '25+', label: 'Countries' },
                  { value: '30+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#F5F5F7] border border-gray-100">
                    <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6E6E73]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-[#0A0A1E] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a56db]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-4">Our Vision</div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
              &ldquo;To be a reckoning force in the packaging domain by providing Standard and Customized products, globally&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-white/20" />
              <span className="text-white/50 text-sm font-medium">Mr. RR Kumar, Managing Director</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">Infrastructure</div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">World-Class Manufacturing</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '45,000 sq ft Facility',
                description: 'State-of-the-art manufacturing plant in Sidco Industrial Estate, Chennai with CNC machining, fabrication and assembly bays.',
              },
              {
                title: '100+ Skilled Engineers',
                description: 'A dedicated team of mechanical, electrical, and software engineers with deep expertise in packaging machinery design.',
              },
              {
                title: 'ISO Standards',
                description: 'All machines are built to ISO wiring standards with cGMP and cGEP compliance for food and pharmaceutical applications.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#F5F5F7] border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-[#6E6E73] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">Our Values</div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 text-center"
              >
                <div className="text-3xl gradient-text mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-[#1D1D1F] mb-3">{value.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest mb-3">Reach</div>
            <h2 className="text-4xl font-black text-[#1D1D1F]">Regional Presence</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${i === 4 ? 'gradient-bg text-white sm:col-span-2 lg:col-span-1' : 'bg-[#F5F5F7] border-gray-100'}`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${i === 4 ? 'text-white/60' : 'text-[#1a56db]'}`}>
                  {region.zone}
                </div>
                <p className={`text-sm leading-relaxed ${i === 4 ? 'text-white/80' : 'text-[#6E6E73]'}`}>
                  {region.states}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
