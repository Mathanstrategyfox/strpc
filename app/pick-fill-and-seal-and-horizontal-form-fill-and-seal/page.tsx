import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Pick Fill & Seal / Horizontal Form Fill & Seal | Starpac India',
  description: 'PFS series doy pack and standup pouch machines with servo-driven indexing — 25 to 100 ppm.',
}

export default function PFSPage() {
  return (
    <MachinePageLayout
      title="Pick Fill & Seal / Horizontal Form Fill & Seal"
      subtitle="Servo-driven standup pouch and doy pack machines with zip lock, spout, and profile seal options."
      features={[
        'Servo-driven indexing mechanism',
        'PLC control with Touch Screen HMI',
        'No pouch — no fill safety interlock',
        'Washdown stainless steel frame',
        'CE certified',
        'Linear operation — single and duplex options',
        'Compatible with doy packs (standup pouches)',
        'Zip lock and slider zip pouch handling',
        'Spout pouch filling capability',
        'Profile seal and flat bottom pouch support',
        'Gentle product handling',
        'Quick changeover between pouch sizes',
      ]}
      modelSpecs={{
        headers: ['Attribute', 'PFS-1', 'PFS-2'],
        rows: [
          ['Operation', 'Single', 'Duplex'],
          ['Speed', '25–45 ppm', '50–100 ppm'],
          ['Max Pouch Size', '200×350 mm', '200×350 mm'],
          ['Electrical Load', '4.5 kW', '4.5 kW'],
          ['Air Consumption', '300 L/min', '300 L/min'],
          ['Noise Level', '<70 dB', '<70 dB'],
        ],
      }}
      optional={[
        'Nitrogen flushing',
        'Spout applicator',
        'Date coder (TTO)',
        'Checkweigher',
        'Outfeed conveyor',
        'Vision system',
      ]}
      applications={[
        'Standup pouches (doy packs)',
        'Liquids and semi-liquids',
        'Detergents and home care',
        'Food — jams, ketchup, sauces',
        'Personal care products',
        'Ghee and edible oils',
        'Pet food',
        'Ready-to-eat products',
      ]}
      overview="The PFS series Pick Fill & Seal / Horizontal Form Fill & Seal machines are designed for the growing demand for convenient standup pouches. Servo-driven indexing ensures precise pouch positioning at each station — from opening through filling to sealing. The 'no pouch no fill' safety feature prevents product waste. Available in single (PFS-1) and duplex (PFS-2) configurations for outputs up to 100 pouches per minute."
    />
  )
}
