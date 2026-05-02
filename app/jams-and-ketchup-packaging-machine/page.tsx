import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Jams & Ketchup Packaging Machines | Starpac India',
  description: 'Viscous product packaging solutions for jams, ketchup, sauces, and spreads — piston fillers and sachet machines.',
}

export default function JamsKetchupPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Jams & Ketchup Packaging Solutions"
      subtitle="Specialized pump and piston fillers for viscous products in sachets, pouches, and jars."
      industry="Food Processing, FMCG"
      description="Viscous products like jams and ketchup require specialized pump and piston fillers to ensure accurate dosing without dripping or stringing. Starpac's Orion PF Pastes filler and sachet machines handle these with precision dosing and heated fill heads where required. From single-serve sachets to large retail jars, we have the right solution for every viscosity."
      highlights={[
        'Positive displacement piston fillers for drip-free filling',
        'Heated fill heads for products needing elevated fill temperatures',
        'Anti-drip nozzles prevent product waste and contamination',
        'Handles viscosities from thin sauces to thick jams',
        'Sachet and stick pack formats for single-serve portions',
        'CIP compatible for easy cleaning between SKUs',
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
