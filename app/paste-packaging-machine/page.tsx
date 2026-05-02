import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Paste Packaging Machines | Starpac India',
  description: 'Positive displacement filling machines for tomato paste, tahini, food pastes and similar viscous products.',
}

export default function PastePackagingPage() {
  return (
    <ApplicationPageLayout
      title="Paste Packaging Solutions"
      subtitle="Positive displacement filling technology for pastes of all viscosities — no dripping, precise fill weights."
      industry="Food Processing, FMCG"
      description="Pastes including tomato paste, tahini, chili paste, and food pastes need positive displacement filling technology. Starpac's paste-specific fillers ensure no dripping and accurate fill weights. The piston or rotary pump systems handle everything from thin pourable pastes to thick, high-viscosity products. Heated fill heads maintain optimal viscosity during filling for consistent results."
      highlights={[
        'Positive displacement piston filler for precise paste dosing',
        'No drip nozzle design — zero product waste',
        'Heated fill heads maintain flowability during filling',
        'Handles viscosities up to 100,000 cP',
        'SS 316 product wetted parts for food safety',
        'Quick-change nozzles for different pack sizes',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 550 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'MT 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MTD 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'Orion PF Pastes Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
