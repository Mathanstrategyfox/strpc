import PageHero from './PageHero'
import ContactCTA from './ContactCTA'
import Link from 'next/link'

interface RecommendedMachine {
  name: string
  href: string
}

interface ApplicationPageLayoutProps {
  title: string
  subtitle?: string
  description: string
  machines: RecommendedMachine[]
  highlights?: string[]
  industry?: string
}

export default function ApplicationPageLayout({
  title,
  subtitle,
  description,
  machines,
  highlights,
  industry,
}: ApplicationPageLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: 'Applications' }, { label: title }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {industry && (
            <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
              <span className="text-sm font-medium text-[#7c3aed]">Industry: {industry}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">About This Application</h2>
                <p className="text-[#6E6E73] leading-relaxed text-lg">{description}</p>
              </div>

              {/* Highlights */}
              {highlights && highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Why Choose Starpac</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-[#F5F5F7]">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#1D1D1F] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Machines */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Recommended Machines</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {machines.map((machine, i) => (
                    <Link
                      key={i}
                      href={machine.href}
                      className="group flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-[#1a56db]/30 hover:bg-blue-50/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#1D1D1F] group-hover:text-[#1a56db] transition-colors">
                          {machine.name}
                        </span>
                      </div>
                      <svg className="w-4 h-4 text-[#6E6E73] group-hover:text-[#1a56db] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#0A0A1E] p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need a Custom Solution?</h3>
                <p className="text-sm text-white/60 mb-5">
                  Our engineers can tailor any machine to your specific requirements.
                </p>
                <Link
                  href="/enquiry"
                  className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-[#1D1D1F] uppercase tracking-widest mb-4">
                  Other Applications
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Powder', href: '/powder-packaging-machine' },
                    { label: 'Granular', href: '/granular-packaging-machine' },
                    { label: 'Salt & Sugar', href: '/salt-and-sugar-packaging-machine' },
                    { label: 'Pickles', href: '/pickles-packaging-machine' },
                    { label: 'Jams & Ketchup', href: '/jams-and-ketchup-packaging-machine' },
                    { label: 'Paste', href: '/paste-packaging-machine' },
                    { label: 'Chips & Candy', href: '/chips-and-candy-packaging-machine' },
                    { label: 'Oils & Liquids', href: '/oils-and-liquids-packaging-machine' },
                    { label: 'Ghee', href: '/ghee-packaging-machine' },
                    { label: 'Biscuits & Cakes', href: '/biscuits-cakes-packaging-machine' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-[#6E6E73] hover:text-[#1a56db] transition-colors py-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a56db]/40 flex-shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
