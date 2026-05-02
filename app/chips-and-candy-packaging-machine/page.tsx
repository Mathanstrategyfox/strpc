import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Chips & Candy Packaging Machines | Starpac India',
  description: 'High-speed VFFS machines with nitrogen flushing for chips, snacks, and candy packaging.',
}

export default function ChipsCandyPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Chips & Candy Packaging Solutions"
      subtitle="High-speed VFFS with nitrogen flushing for snack foods and confectionery — keeping your products fresh."
      industry="Snacks, Confectionery, FMCG"
      description="Snack foods require nitrogen flushing for freshness and protection against breakage during transit. Starpac's VFFS machines with integrated gas filling units and multihead weighers provide accurate, high-speed packaging. The gentle product handling system minimises chip breakage, while the hermetic seals and nitrogen atmosphere maximise shelf life."
      highlights={[
        'Gas filling units for nitrogen flushing — extended shelf life',
        'Multihead combination weigher for accurate portion control',
        'Gentle product handling — minimises chip breakage',
        'Pillow bag, gusseted, and standup pouch formats available',
        'High speed up to 100+ bags/min for small packs',
        'Compatible with metallised and clear snack films',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 190 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'PFS / HFFS Pouch Machine', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
        { name: 'Multihead Weigher', href: '/standalone-fillers' },
      ]}
    />
  )
}
