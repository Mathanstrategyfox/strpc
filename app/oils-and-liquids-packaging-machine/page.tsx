import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Oils & Liquids Packaging Machines | Starpac India',
  description: 'Leak-proof hermetic seal sachet and pouch machines for edible oils, liquids, and beverages.',
}

export default function OilsLiquidsPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Oils & Liquids Packaging Solutions"
      subtitle="Leak-proof hermetic sealing for edible oils, beverages, and industrial liquids in sachet and pouch formats."
      industry="Food & Beverage, Industrial"
      description="Liquid packaging demands leak-proof hermetic seals and precise fill volume control. Starpac's four-side seal sachet machines and liquid fillers handle edible oils, beverages, and industrial liquids. The machines feature gravity fillers, pump fillers, and flow meter filling options depending on viscosity and accuracy requirements. Anti-drip nozzles and bottom-up filling minimise foam and splashing."
      highlights={[
        'Four-side seal sachets for tamper-evident, leak-proof liquid packs',
        'Flow meter filling for accurate volume control (±1%)',
        'Bottom-up filling minimises foam formation in beverages',
        'Anti-drip nozzle design prevents waste and contamination',
        'Handles low-viscosity liquids (water, beverages) to oils',
        'Compatible with metallised, transparent, and laminated films',
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
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'Orion PF Standalone Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
