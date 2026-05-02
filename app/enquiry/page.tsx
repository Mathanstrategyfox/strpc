'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'

const products = [
  'Biscuits', 'Candy', 'Chips', 'Coffee', 'Detergent Powder', 'Flakes', 'Ghee',
  'Granules', 'Liquids', 'Masala', 'Oats', 'Paste', 'Peanuts', 'Pesticide Powder',
  'Pulses', 'Rice', 'Salt', 'Sauce', 'Soaps', 'Spices', 'Sugar', 'Tea', 'Wafers', 'Any other',
]

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        title="Product Enquiry"
        subtitle="Fill in the details below and our team will get back to you with the best solution."
        breadcrumbs={[{ label: 'Enquiry' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-8">
              {/* Contact Info */}
              <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1D1D1F] mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      placeholder="e.g., Production Manager"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Website / Address</label>
                    <input
                      type="text"
                      name="website"
                      placeholder="www.company.com or address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1D1D1F] mb-6">Product Details</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">
                      Select Product to be Packed *
                    </label>
                    <select
                      name="product"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                    >
                      <option value="">-- Select a product --</option>
                      {products.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Package Size</label>
                      <input
                        type="text"
                        name="package_size"
                        placeholder="e.g., 100g, 500ml, 1kg"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Package Type</label>
                      <input
                        type="text"
                        name="package_type"
                        placeholder="e.g., Sachet, Pouch, Jar"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Grammage / Quantity</label>
                      <input
                        type="text"
                        name="grammage"
                        placeholder="e.g., 100g, 500ml"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Bulk Density</label>
                      <input
                        type="text"
                        name="bulk_density"
                        placeholder="e.g., 0.6 g/cc"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Speed Required</label>
                      <input
                        type="text"
                        name="speed"
                        placeholder="e.g., 60 packs/min, 100 packs/min"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1D1D1F] mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      rows={5}
                      placeholder="Any additional requirements, special features needed, current challenges..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:border-[#1a56db] transition-colors bg-white resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white gradient-bg hover:opacity-90 transition-opacity text-sm"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
