'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Play, Gem, Gauge, Zap, Headphones,
  Globe2, Factory, Users, Trophy,
  Wrench, Leaf, LifeBuoy, Quote, Star,
  Beef, Pill, Sparkles, Milk, Flame, Cookie,
} from 'lucide-react'
import Chatbot from '@/components/Chatbot'

/* ─── subtle fade-up on scroll ─── */
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── animated counter ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const t0 = performance.now()
          const dur = 1800
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(eased * to))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

/* ─── machine card with real product photo ─── */
function MachineCard({ title, href, img }: { title: string; href: string; img: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[20px] overflow-hidden border border-gray-200/70 hover:border-gray-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] transition-all duration-300 bg-white"
    >
      <div className="relative aspect-[4/5] bg-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-gray-100">
        <span className="text-[15px] font-semibold text-gray-900 leading-snug">{title}</span>
        <ArrowRight className="w-4 h-4 text-gray-400 shrink-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gray-900" />
      </div>
    </Link>
  )
}

/* ─── 5 machines using real Starpac product photos ─── */
const machines = [
  {
    title: 'Filling Machines',
    href: '/standalone-fillers',
    img: '/images/filling.png',
  },
  {
    title: 'Pouch Packaging Machines',
    href: '/single-lane-intermittent-motion-baggers',
    img: '/images/pouch.png',
  },
  {
    title: 'Capping Machines',
    href: '/rotary-and-linear-jarcupcan-fill-and-close-machines',
    img: '/images/capping.png',
  },
  {
    title: 'Carton Packaging Machines',
    href: '/intermittent-and-continuous-motion-flow-wrappers',
    img: '/images/carton.png',
  },
  {
    title: 'Labeling Machines',
    href: '/automatic-cup-tray-tub-fill-and-seal',
    img: '/images/labeling.png',
  },
]

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — full-bleed background photo
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#F2F4F7]">
        {/* full-bleed background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-machine.png"
          alt="Starpac packaging machine"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* white wash on the left for text legibility (stronger on mobile, fades on desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/40 lg:via-white/10 lg:to-transparent pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-14 pt-28 lg:pt-36 pb-14 lg:pb-20 min-h-[600px] lg:min-h-[720px] xl:min-h-[760px] flex items-center">
          <div className="max-w-[560px]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[1.02] tracking-[-0.034em] mb-7"
              style={{
                fontSize: 'clamp(36px, 4.4vw, 64px)',
              }}
            >
              <span className="block text-[#0B0F19] whitespace-nowrap">Packaging</span>
              <span className="block text-[#0B0F19] whitespace-nowrap">Machinery.</span>
              <span className="block text-[#B6BCC7] whitespace-nowrap">Built to Perform.</span>
              <span className="block text-[#B6BCC7] whitespace-nowrap">Designed to Last.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#4B5563] text-[16px] leading-[1.6] max-w-[400px] mb-9 font-medium"
            >
              Starpac India delivers innovative and reliable packaging
              solutions that empower businesses to pack better,
              faster and smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-7"
            >
              <Link
                href="/single-lane-intermittent-motion-baggers"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0B0F19] hover:bg-[#1F2937] text-white text-[16px] font-semibold transition-colors shadow-lg shadow-black/10"
              >
                Explore Machines
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="https://drive.google.com/file/d/15xaNpOkNtIkWjEKB-8OR8Uqrc-8lDdqq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#0B0F19] hover:text-gray-700 text-[16px] font-semibold transition-colors group"
              >
                Watch Video
                <span className="w-10 h-10 rounded-full border-[1.5px] border-[#0B0F19]/30 bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:border-[#0B0F19]/70 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <Chatbot placeholder="Ask the Starpac Assistant about our packaging solutions..." />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          FEATURE BAR
      ══════════════════════════════════════ */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {[
              { icon: Gem, title: 'Premium Quality', desc: 'Built with precision. Engineered for excellence.' },
              { icon: Gauge, title: 'High Performance', desc: 'Maximum efficiency. Minimal downtime.' },
              { icon: Zap, title: 'Smart Technology', desc: 'Intelligent systems for smarter operations.' },
              { icon: Headphones, title: 'Reliable Support', desc: 'Always here. Always committed.' },
            ].map((f, i) => {
              const Icon = f.icon
              return (
                <FadeUp key={f.title} delay={i * 0.07} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0F19] text-[16px] mb-1.5">{f.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-[1.55]">{f.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          MACHINES SECTION
      ══════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          <FadeUp className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end mb-14">
            <div>
              <span className="text-[12px] font-black text-blue-600 tracking-[0.22em] uppercase mb-4 block">
                Our Machines
              </span>
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-[#0B0F19] tracking-[-0.028em] leading-[1.04]">
                End-to-end Packaging
                <br />Solutions
              </h2>
            </div>
            <p className="text-gray-500 text-[17px] leading-[1.65] lg:mb-2 max-w-md">
              From filling to final seal — discover a wide range of packaging machines built to handle
              every need across industries.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {machines.map((m, i) => (
              <FadeUp key={m.title} delay={i * 0.05}>
                <MachineCard {...m} />
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center mt-12">
              <Link
                href="/single-lane-intermittent-motion-baggers"
                className="inline-flex items-center gap-2 text-[#0B0F19] hover:text-gray-600 text-[15px] font-semibold transition-colors group"
              >
                View All Machines{' '}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ══════════════════════════════════════
          INDUSTRIES WE SERVE
      ══════════════════════════════════════ */}
      <section className="bg-[#F2F4F7] py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          <FadeUp className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end mb-14">
            <div>
              <span className="text-[12px] font-black text-blue-600 tracking-[0.22em] uppercase mb-4 block">
                Industries We Serve
              </span>
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-[#0B0F19] tracking-[-0.028em] leading-[1.04]">
                Trusted across
                <br />every category.
              </h2>
            </div>
            <p className="text-gray-500 text-[17px] leading-[1.65] lg:mb-2 max-w-md">
              From food and pharma to personal care and beyond — Starpac machines power
              production lines for the world&apos;s most demanding industries.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                title: 'Food & Beverage',
                count: '450+ clients',
                icon: Beef,
                gradient: 'from-emerald-500 via-emerald-600 to-teal-700',
                img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&auto=format&fit=crop',
              },
              {
                title: 'Pharmaceuticals',
                count: '180+ clients',
                icon: Pill,
                gradient: 'from-blue-500 via-blue-600 to-indigo-700',
                img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=85&auto=format&fit=crop',
              },
              {
                title: 'Personal Care',
                count: '220+ clients',
                icon: Sparkles,
                gradient: 'from-rose-500 via-pink-600 to-fuchsia-700',
                img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=85&auto=format&fit=crop',
              },
              {
                title: 'Dairy Products',
                count: '120+ clients',
                icon: Milk,
                gradient: 'from-amber-500 via-orange-500 to-amber-700',
                img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=900&q=85&auto=format&fit=crop',
              },
              {
                title: 'Spices & Masala',
                count: '160+ clients',
                icon: Flame,
                gradient: 'from-orange-500 via-red-600 to-red-700',
                img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=85&auto=format&fit=crop',
              },
              {
                title: 'Confectionery',
                count: '90+ clients',
                icon: Cookie,
                gradient: 'from-violet-500 via-purple-600 to-purple-800',
                img: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=900&q=85&auto=format&fit=crop',
              },
            ].map((ind, i) => {
              const Icon = ind.icon
              return (
                <FadeUp key={ind.title} delay={i * 0.05}>
                  <div className="group relative h-[240px] rounded-[24px] overflow-hidden cursor-pointer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ind.img}
                      alt={ind.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-85 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    <div className="relative h-full flex flex-col justify-between p-7">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="text-white text-[26px] font-black leading-tight tracking-[-0.01em] mb-1.5">{ind.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-[13px] font-semibold">{ind.count}</span>
                          <ArrowRight className="w-4 h-4 text-white/85 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          STATS BAR — pure black, full width
      ══════════════════════════════════════ */}
      <section className="bg-[#000000] py-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
            {[
              { icon: Globe2, to: 40, suffix: '+', label: 'Countries Served' },
              { icon: Factory, to: 2000, suffix: '+', label: 'Machines Installed' },
              { icon: Users, to: 1000, suffix: '+', label: 'Happy Clients' },
              { icon: Trophy, to: 25, suffix: '+', label: 'Years of Excellence' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <FadeUp
                  key={s.label}
                  delay={i * 0.08}
                  className="flex flex-col items-center text-center py-6 px-4"
                >
                  <Icon className="w-7 h-7 text-white mb-3" strokeWidth={1.3} />
                  <div className="text-[44px] lg:text-[52px] font-black text-white leading-none mb-1.5 tracking-[-0.025em]">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-white/65 text-[13px] font-medium">{s.label}</div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ABOUT SECTION — real Starpac building
      ══════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <FadeUp>
              <span className="text-[12px] font-black text-blue-600 tracking-[0.22em] uppercase mb-4 block">
                About Starpac India
              </span>
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-[#0B0F19] tracking-[-0.028em] leading-[1.04] mb-7">
                Engineering Excellence.
                <br />Empowering Businesses.
              </h2>
              <p className="text-gray-500 text-[17px] leading-[1.65] mb-10 max-w-md">
                For over 25 years, Starpac India has been at the forefront of packaging innovation,
                delivering world-class machines that combine technology, performance and durability.
              </p>
              <Link
                href="/the-company"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0B0F19] hover:bg-[#1F2937] text-white text-[16px] font-semibold transition-colors"
              >
                Learn More About Us
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/building.png"
                  alt="Starpac India facility"
                  className="w-full h-auto"
                />
              </div>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pt-12 border-t border-gray-100">
            {[
              { icon: Gem, title: 'Made in India', desc: 'Proudly engineered for the world.' },
              { icon: Wrench, title: 'Custom Solutions', desc: 'Tailored to your product. Built for your business.' },
              { icon: LifeBuoy, title: 'End-to-End Support', desc: 'From installation to after-sales and beyond.' },
              { icon: Leaf, title: 'Sustainable Approach', desc: 'Responsible engineering for a better tomorrow.' },
            ].map((f, i) => {
              const Icon = f.icon
              return (
                <FadeUp key={f.title} delay={i * 0.07} className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center mb-4">
                    <Icon className="w-[18px] h-[18px] text-gray-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#0B0F19] text-[16px] mb-2">{f.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-[1.55]">{f.desc}</p>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="bg-[#F2F4F7] py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          <FadeUp className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[12px] font-black text-blue-600 tracking-[0.22em] uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-[#0B0F19] tracking-[-0.028em] leading-[1.04]">
              Loved by industry leaders.
            </h2>
            <p className="text-gray-500 text-[17px] leading-[1.65] mt-6">
              Hear from packaging heads at some of the world&apos;s most respected brands.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
            {[
              {
                quote: 'Starpac’s VFFS line cut our changeover time by 40%. Their engineering team understood our specs better than we did.',
                name: 'Rajiv Menon',
                role: 'Head of Packaging',
                company: 'Hindustan Unilever',
                initial: 'R',
                bg: 'from-blue-500 to-indigo-600',
              },
              {
                quote: 'Five machines installed across three plants — zero downtime in the first year. That’s the kind of reliability we need.',
                name: 'Priya Sharma',
                role: 'Operations Director',
                company: 'PepsiCo India',
                initial: 'P',
                bg: 'from-rose-500 to-fuchsia-600',
              },
              {
                quote: 'The level of customisation Starpac offers is unmatched. They built us a hybrid line nobody else would even quote.',
                name: 'Anil Kapoor',
                role: 'Plant Head',
                company: 'Dabur India',
                initial: 'A',
                bg: 'from-emerald-500 to-teal-600',
              },
            ].map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-[24px] border border-gray-200/70 bg-white p-8 hover:border-gray-300 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] transition-all duration-300">
                  <Quote className="w-8 h-8 text-blue-600 mb-5" strokeWidth={2} />

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-[#0B0F19] text-[17px] leading-[1.6] font-medium mb-8 min-h-[110px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-white text-[16px] font-black shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B0F19] leading-tight">{t.name}</div>
                      <div className="text-[13px] text-gray-500 mt-0.5">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="pt-10 border-t border-gray-200">
              <p className="text-center text-[12px] font-black text-gray-400 tracking-[0.22em] uppercase mb-8">
                Trusted by 1000+ brands worldwide
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  'Hindustan Unilever',
                  'PepsiCo',
                  'Dabur',
                  'Coca-Cola',
                  'Nestle',
                  'Reckitt',
                  'MTR Foods',
                ].map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center px-3 py-5 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[12px] font-bold text-gray-500 text-center leading-tight">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ══════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════ */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-[#0B0F19] tracking-[-0.028em] mb-5 leading-[1.05]">
              Ready to transform your packaging line?
            </h2>
            <p className="text-gray-500 text-[17px] mb-10 max-w-lg mx-auto leading-[1.65]">
              Talk to our engineering team — we&apos;ll find the right machine for your product, speed and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2.5 px-9 py-[18px] rounded-full bg-[#0B0F19] hover:bg-[#1F2937] text-white text-[16px] font-semibold transition-colors"
              >
                Get in Touch
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 px-9 py-[18px] rounded-full border-[1.5px] border-gray-300 text-[#0B0F19] hover:border-gray-500 text-[16px] font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
