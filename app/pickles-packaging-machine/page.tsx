import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Pickles Packaging Machines | Starpac India',
  description: 'Airtight jar and pouch filling machines for pickles, preserved foods, and brined products.',
}

export default function PicklesPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Pickles Packaging Solutions"
      subtitle="Airtight sealing systems for pickles, chutneys, and preserved foods in jars and pouches."
      industry="Food Processing, Condiments"
      description="Pickles and preserved foods require airtight sealing with inert atmosphere packaging to prevent spoilage and maintain quality. Starpac's jar filling and sealing machines handle chunky, semi-solid pickle products with specialised piston fillers and particulate-friendly fill heads. Our JFS rotary and linear machines provide the gentle but precise filling needed for premium pickle products."
      highlights={[
        'Piston fillers handle chunky pickle pieces without damage',
        'Airtight cap sealing prevents air ingress and contamination',
        'Induction sealing option for tamper-evident closures',
        'CIP compatible for quick changeover between pickle varieties',
        'Handles glass and PET jars from 100g to 1kg',
        'Compatible with acidic and oil-based pickle mediums',
      ]}
      machines={[
        { name: 'JFS 1 Rotary Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'JFS 2 Linear Jar Filler', href: '/rotary-and-linear-jarcupcan-fill-and-close-machines' },
        { name: 'Orion PF Standalone Filler', href: '/standalone-fillers' },
      ]}
    />
  )
}
