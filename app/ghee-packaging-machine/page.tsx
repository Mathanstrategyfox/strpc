import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Ghee Packaging Machines | Starpac India',
  description: 'Temperature-controlled ghee filling and sealing machines for pouches, tins, and jars.',
}

export default function GheePackagingPage() {
  return (
    <ApplicationPageLayout
      title="Ghee Packaging Solutions"
      subtitle="Temperature-controlled filling and modified atmosphere packaging for premium ghee products."
      industry="Dairy, Food Processing"
      description="Ghee packaging requires temperature-controlled filling and modified atmosphere to preserve shelf life and prevent rancidity. Starpac offers complete solutions from pouches to tins. The machines feature heated hoppers and fill heads to maintain ghee at the optimal fill temperature, while nitrogen flushing removes oxygen to extend shelf life significantly."
      highlights={[
        'Heated hopper and fill head — maintain ghee at optimal fill temperature',
        'Nitrogen flushing eliminates oxygen — extends shelf life',
        'Handles both liquid (warm) and solid/semi-solid ghee',
        'Hermetic seals in sachet, pouch, tin, and jar formats',
        'Quick line changeover for different pack sizes',
        'Hygienic design with CIP compatibility',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 550 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'JFS 1 Rotary Jar/Can Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar/Can Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'PFS / HFFS Pouch Machine', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
        { name: 'Orion PF Standalone Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
