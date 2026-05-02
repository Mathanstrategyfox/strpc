import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Powder Packaging Machines | Starpac India',
  description: 'Complete range of powder packaging solutions — VFFS, sachet, jar fill — for spices, coffee, milk powder, detergents and more.',
}

export default function PowderPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Powder Packaging Solutions"
      subtitle="Precision dosing and hermetic sealing for all types of powdered products."
      industry="Food, Pharma, Home Care"
      description="Powder packaging requires precise dosing and hermetic sealing to prevent moisture ingress and maintain product quality. Starpac offers a comprehensive range of VFFS and filling machines for powders including spices, coffee, milk powder, detergent, and pharmaceutical powders. Our auger fillers and volumetric cup systems ensure consistent fill weights across a wide range of packaging formats."
      highlights={[
        'Auger fillers for precise powder dosing with ±0.5% accuracy',
        'Hermetic seals prevent moisture ingress and preserve freshness',
        'SS 316 contact parts for food and pharma grade compliance',
        'Dustproof enclosures protect electronics in powder environments',
        'Handles fine powders to coarse granular products',
        'Batch coding and date embossing built-in',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 550 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'MT 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MT 1200 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MTD 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MTD 1200 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'PFS / HFFS Pouch Machine', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'Orion AF Standalone Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
