import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Granular Packaging Machines | Starpac India',
  description: 'Accurate weighing and packaging for granular products — pulses, grains, nuts, cereals, and more.',
}

export default function GranularPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Granular Packaging Solutions"
      subtitle="Precision multi-head weighing and cup-filling systems for granular products."
      industry="Food, Agriculture, Retail"
      description="Granular products like pulses, grains, nuts, and cereals require accurate weighing systems to minimise giveaway while maintaining high throughput. Starpac's multihead weighers and linear weighers ensure precision dosing within ±0.5g accuracy, while the VFFS machines provide leak-proof packaging formats from small sachets to 5kg bags."
      highlights={[
        'Multihead combination weigher for ±0.5g accuracy',
        'Linear weigher for medium speed, high accuracy applications',
        'ACF servo cup filler for small-to-medium granules',
        'Hermetic seals prevent moisture and pest ingress',
        'High throughput with low product damage',
        'Handles particle sizes from 1mm to 20mm',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 550 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'MT 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MT 1200 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'PFS / HFFS Pouch Machine', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'ACF Servo Filler', href: '/standalone-fillers' },
        { name: 'Load Cell Linear Weigher', href: '/standalone-fillers' },
        { name: 'Multihead Weigher', href: '/standalone-fillers' },
      ]}
    />
  )
}
