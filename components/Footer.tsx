import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

/* Inline brand SVGs (lucide removed brand icons) */
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 002.1-2.1c.4-1.9.5-3.8.5-5.8a31.3 31.3 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* ══ NEWSLETTER ══ */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <h3 className="text-[28px] sm:text-[32px] font-black text-[#0B0F19] tracking-[-0.02em] leading-[1.1] mb-3">
                Stay in the loop.
              </h3>
              <p className="text-gray-500 text-[14px] leading-[1.6] max-w-md">
                Get product launches, case studies and packaging insights delivered to your inbox. No spam, ever.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 text-[14px] text-[#0B0F19] placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors bg-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B0F19] hover:bg-[#1F2937] text-white text-[14px] font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ══ MAIN ══ */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Brand — 4 cols */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="StarPac India"
                className="h-11 w-auto"
              />
            </Link>

            <p className="text-gray-500 text-[14px] leading-[1.65] mb-7 max-w-xs">
              Engineering precision packaging machinery since 1996. Trusted by 1300+ installations across 25 countries.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+917708067158"
                className="flex items-center gap-2.5 text-gray-500 hover:text-[#0B0F19] text-[13px] transition-colors group"
              >
                <span className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                  <Phone className="w-3 h-3" />
                </span>
                +91 77080 67158
              </a>
              <a
                href="mailto:sales@starpacindia.com"
                className="flex items-center gap-2.5 text-gray-500 hover:text-[#0B0F19] text-[13px] transition-colors group"
              >
                <span className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                  <Mail className="w-3 h-3" />
                </span>
                sales@starpacindia.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-500 text-[13px] leading-[1.55]">
                <span className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </span>
                <span>
                  AC22B, Sidco Industrial Estate,
                  <br />
                  Thirumudivakkam, Chennai – 600 044
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-gray-400 tracking-[0.22em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/the-company' },
                { label: 'Clients', href: '/clients' },
                { label: 'Events', href: '/events' },
                { label: 'Videos', href: '/videos' },
                { label: 'Gallery', href: '/images' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact-us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-[#0B0F19] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Machines */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-gray-400 tracking-[0.22em] uppercase mb-5">Machines</h4>
            <ul className="space-y-3">
              {[
                { label: 'Single Lane Baggers', href: '/single-lane-intermittent-motion-baggers' },
                { label: 'Multilane Baggers', href: '/multilane-intermittent-motion-baggers' },
                { label: 'Multitrack Baggers', href: '/multitrack-intermittent-continuous-motion-baggers' },
                { label: 'Pick Fill & Seal', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
                { label: 'Jar / Can Fill & Close', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
                { label: 'Flow Wrappers', href: '/intermittent-and-continuous-motion-flow-wrappers' },
                { label: 'Standalone Fillers', href: '/standalone-fillers' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-[#0B0F19] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-gray-400 tracking-[0.22em] uppercase mb-5">Industries</h4>
            <ul className="space-y-3">
              {[
                { label: 'Powder', href: '/powder-packaging-machine' },
                { label: 'Granular', href: '/granular-packaging-machine' },
                { label: 'Salt & Sugar', href: '/salt-and-sugar-packaging-machine' },
                { label: 'Pickles', href: '/pickles-packaging-machine' },
                { label: 'Chips & Candy', href: '/chips-and-candy-packaging-machine' },
                { label: 'Oils & Liquids', href: '/oils-and-liquids-packaging-machine' },
                { label: 'Biscuits & Cakes', href: '/biscuits-cakes-packaging-machine' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-[#0B0F19] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[12px] text-gray-400 font-medium order-2 sm:order-1">
            © {new Date().getFullYear()} Starpac India Limited · All rights reserved
          </p>

          {/* social */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {[
              { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
              { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              { Icon: InstagramIcon, href: '#', label: 'Instagram' },
              { Icon: TwitterIcon, href: '#', label: 'Twitter' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0B0F19] hover:border-gray-400 transition-colors"
              >
                <s.Icon />
              </a>
            ))}
          </div>

          {/* legal */}
          <div className="flex items-center gap-5 order-3">
            <Link href="#" className="text-[12px] text-gray-400 hover:text-[#0B0F19] transition-colors">Privacy</Link>
            <Link href="#" className="text-[12px] text-gray-400 hover:text-[#0B0F19] transition-colors">Terms</Link>
            <Link href="#" className="text-[12px] text-gray-400 hover:text-[#0B0F19] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* tiny tagline strip */}
      <div className="bg-[#F2F4F7] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold">
            Kaizen — Continuous Improvement
          </span>
        </div>
      </div>
    </footer>
  )
}
