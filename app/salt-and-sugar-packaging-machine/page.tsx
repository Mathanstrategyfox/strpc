import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Salt & Sugar Packaging Machines | Starpac India',
  description: 'Corrosion-resistant SS 316 salt and sugar packaging machines — sachets to bulk bags.',
}

export default function SaltSugarPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Salt & Sugar Packaging Solutions"
      subtitle="Corrosion-resistant machines purpose-built for abrasive salt and sugar products."
      industry="Food Processing, FMCG"
      description="Salt and sugar packaging demands corrosion-resistant construction due to the highly abrasive and hygroscopic nature of these products. Starpac machines are built with SS 316 contact parts and special sealing systems that maintain integrity even with these challenging materials. Our VFFS and sachet machines handle everything from 5g single-serve portions to 1kg retail bags."
      highlights={[
        'SS 316 contact parts — full corrosion resistance',
        'Special dosing screws for abrasive products',
        'Hermetic seals prevent moisture absorption in humid environments',
        'Handled at speeds up to 100 packs/min for small portions',
        'Suitable for iodised salt and fortified sugar',
        'Gas flushing available for extended shelf life',
      ]}
      machines={[
        { name: 'PS 360 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 550 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'PS 820 Single Lane VFFS', href: '/single-lane-intermittent-motion-baggers' },
        { name: 'HS 190 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 360 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'HS 550 Multilane VFFS', href: '/multilane-intermittent-motion-baggers' },
        { name: 'MT 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MT 1200 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MTD 600 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'MTD 1200 Multitrack', href: '/multitrack-intermittent-continuous-motion-baggers' },
        { name: 'PFS / HFFS Pouch Machine', href: '/pick-fill-and-seal-and-horizontal-form-fill-and-seal' },
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'ACF Servo/Non-Servo Filler', href: '/standalone-fillers' },
        { name: 'Orion AF Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
