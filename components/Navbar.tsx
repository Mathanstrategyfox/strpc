'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const machinesLinks = [
  { label: 'Single Lane Baggers', href: '/single-lane-intermittent-motion-baggers', desc: 'PS 360, 550, 820' },
  { label: 'Multilane Baggers', href: '/multilane-intermittent-motion-baggers', desc: 'HS 190, 360, 550' },
  { label: 'Multitrack Baggers', href: '/multitrack-intermittent-continuous-motion-baggers', desc: 'MT & MTD series' },
  { label: 'Pick Fill & Seal / HFFS', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal', desc: 'Doy packs, standup pouches' },
  { label: 'Jar / Cup / Can Fill & Close', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines', desc: 'JFS 1 & JFS 2' },
  { label: 'Standalone Fillers', href: '/standalone-fillers', desc: 'Orion PF, AF, ACF series' },
  { label: 'Flow Wrappers', href: '/intermittent-and-continuous-motion-flow-wrappers', desc: 'MW & MCW series' },
  { label: 'Cup-Tray-Tub Fill & Seal', href: '/automatic-cup-tray-tub-fill-and-seal', desc: 'Vacuum & MAP' },
  { label: 'Double Chamber Fill & Seal', href: '/double-chamber-automatic-cup-tray-tub-fill-and-seal', desc: 'High-volume production' },
  { label: 'PLC Vacuum Chamber', href: '/plc-based-vacuum-chamber-machine', desc: 'Siemens PLC controlled' },
  { label: 'Vacuum + Thermo Shrinking', href: '/plc-based-vacuum-chamber-machine-with-automatic-transport-and-thermo-shrinking-system', desc: 'Cryovac compatible' },
]

const industriesLinks = [
  { label: 'Powder', href: '/powder-packaging-machine', icon: '🌫️' },
  { label: 'Granular', href: '/granular-packaging-machine', icon: '🌾' },
  { label: 'Salt & Sugar', href: '/salt-and-sugar-packaging-machine', icon: '🧂' },
  { label: 'Pickles', href: '/pickles-packaging-machine', icon: '🥒' },
  { label: 'Jams & Ketchup', href: '/jams-and-ketchup-packaging-machine', icon: '🍯' },
  { label: 'Paste', href: '/paste-packaging-machine', icon: '🥫' },
  { label: 'Chips & Candy', href: '/chips-and-candy-packaging-machine', icon: '🍪' },
  { label: 'Oils & Liquids', href: '/oils-and-liquids-packaging-machine', icon: '🫙' },
  { label: 'Ghee', href: '/ghee-packaging-machine', icon: '🧈' },
  { label: 'Biscuits & Cakes', href: '/biscuits-cakes-packaging-machine', icon: '🎂' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'shadow-[0_1px_8px_rgba(0,0,0,0.07)]'
          : 'border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="StarPac India"
              className="h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0">
            {[
              { label: 'Home', href: '/' },
              { label: 'Machines', dropdown: machinesLinks },
              { label: 'Industries', dropdown: industriesLinks },
              { label: 'About Us', href: '/the-company' },
              { label: 'Clients', href: '/clients' },
              { label: 'Service', href: '/contact-us' },
              { label: 'Customer Dashboard', href: '/customer-dashboard' },
              { label: 'Chat Logs', href: '/internal' },
            ].map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => 'dropdown' in item && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {'href' in item ? (
                  <Link
                    href={item.href!}
                    className="px-3.5 py-2 text-[13px] font-semibold text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-150"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-3.5 py-2 text-[13px] font-semibold text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-150 flex items-center gap-1">
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}

                {'dropdown' in item && item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] py-2 overflow-hidden"
                      >
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            className="group flex items-start gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                          >
                            {'icon' in d && <span className="text-lg mt-0.5">{d.icon}</span>}
                            <div>
                              <div className="text-[13px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {d.label}
                              </div>
                              {'desc' in d && d.desc && (
                                <div className="text-[11px] text-gray-400 mt-0.5">{d.desc}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/enquiry"
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-bold text-white bg-gray-900 hover:bg-gray-700 transition-colors"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="xl:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Machines', dropdown: machinesLinks },
                { label: 'Industries', dropdown: industriesLinks },
                { label: 'About Us', href: '/the-company' },
                { label: 'Clients', href: '/clients' },
                { label: 'Service', href: '/contact-us' },
                { label: 'Customer Dashboard', href: '/customer-dashboard' },
                { label: 'Chat Logs', href: '/internal' },
              ].map((item) => (
                <div key={item.label}>
                  {'href' in item ? (
                    <Link
                      href={item.href!}
                      className="block px-4 py-3 rounded-xl text-[14px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform ${
                            mobileExpanded === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pb-1 overflow-hidden"
                          >
                            {item.dropdown!.map((d) => (
                              <Link
                                key={d.href}
                                href={d.href}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              >
                                {'icon' in d && <span>{d.icon}</span>}
                                {d.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-2 pb-2">
                <Link
                  href="/enquiry"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-bold text-white bg-gray-900"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
