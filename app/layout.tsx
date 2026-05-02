import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Starpac India | Packaging Machinery Manufacturer',
  description:
    'Starpac India Limited — Engineering precision packaging machinery since 1996. 1300+ installations across 25+ countries. VFFS, Flow Wrappers, Jar Filling, Vacuum Chamber and more.',
  keywords:
    'packaging machinery, VFFS machines, flow wrappers, jar filling machines, multilane baggers, Starpac India, packaging solutions Chennai',
  authors: [{ name: 'Starpac India Limited' }],
  openGraph: {
    title: 'Starpac India | Packaging Machinery Manufacturer',
    description: 'Engineering precision packaging machinery since 1996. 1300+ installations across 25+ countries.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
