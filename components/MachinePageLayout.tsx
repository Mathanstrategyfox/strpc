import PageHero from './PageHero'
import SpecsTable from './SpecsTable'
import ContactCTA from './ContactCTA'
import Link from 'next/link'

interface SpecRow {
  label: string
  value: string
}

interface ModelSpec {
  headers: string[]
  rows: string[][]
}

interface MachinePageLayoutProps {
  title: string
  subtitle?: string
  breadcrumbParent?: string
  overview: string
  features: string[]
  specsTitle?: string
  specs?: SpecRow[]
  modelSpecs?: ModelSpec
  optional?: string[]
  applications: string[]
  techKnowHow?: string
}

export default function MachinePageLayout({
  title,
  subtitle,
  breadcrumbParent = 'Machines',
  overview,
  features,
  specsTitle,
  specs,
  modelSpecs,
  optional,
  applications,
  techKnowHow,
}: MachinePageLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: breadcrumbParent }, { label: title }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {techKnowHow && (
            <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <svg className="w-4 h-4 text-[#1a56db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-[#1a56db]">Technical Know-How: {techKnowHow}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">Overview</h2>
                <p className="text-[#6E6E73] leading-relaxed text-lg">{overview}</p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F5F7]">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#1D1D1F]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Extras */}
              {optional && optional.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Optional Add-ons</h2>
                  <div className="flex flex-wrap gap-2">
                    {optional.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-sm text-[#1a56db] bg-blue-50 border border-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs Table (key-value) */}
              {specs && specs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Technical Specifications</h2>
                  <SpecsTable title={specsTitle} rows={specs} />
                </div>
              )}

              {/* Model Specs Table */}
              {modelSpecs && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Model Specifications</h2>
                  <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="gradient-bg">
                          {modelSpecs.headers.map((h, i) => (
                            <th key={i} className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {modelSpecs.rows.map((row, ri) => (
                          <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F7]'}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={`px-5 py-4 whitespace-nowrap ${ci === 0 ? 'font-semibold text-[#1D1D1F]' : 'text-[#6E6E73]'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Applications */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="gradient-bg px-6 py-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Applications</h3>
                </div>
                <div className="p-6 space-y-2">
                  {applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a56db] flex-shrink-0" />
                      <span className="text-sm text-[#6E6E73]">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
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
                <a
                  href="tel:+917708067158"
                  className="block w-full text-center px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white border border-white/10 mt-3 transition-colors"
                >
                  +91-77080 67158
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
