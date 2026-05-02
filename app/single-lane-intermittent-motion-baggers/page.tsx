import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Single Lane Intermittent Motion Baggers | Starpac India',
  description: 'PLC-based single lane VFFS baggers — Models PS 360, PS 550, PS 820 — for powders, granules, salt, sugar, spices and more.',
}

export default function SingleLaneBaggersPage() {
  return (
    <MachinePageLayout
      title="Single Lane Intermittent Motion Baggers"
      subtitle="PLC-controlled VFFS baggers for precision packaging of powders, granules, and free-flowing products."
      features={[
        'PLC based control with Touch Screen HMI',
        'Independent drive synchronized with PLC',
        'ISO Standards Wiring throughout',
        'cGMP & cGEP Standards compliance',
        'Hermetic leak-proof seals',
        'Batch embossing & date coding',
        'Vertical form fill and seal technology',
        'Suitable for laminated & non-laminated films',
        'SS 316 product contact parts',
        'Servo-driven film unwinding',
      ]}
      modelSpecs={{
        headers: ['Model', 'Capacity', 'Speed', 'Bag Height', 'Bag Width'],
        rows: [
          ['PS 360', '1000 cc', '40–100 packs/min', '100–225 mm', '165–180 mm'],
          ['PS 550', '2000 cc', '30–80 packs/min', '150–300 mm', '240–250 mm'],
          ['PS 820', '10000 cc', '8–20 packs/min', '200–560 mm', '395 mm'],
        ],
      }}
      optional={[
        'Gas filling units',
        'Zipper attachments',
        'Dust extractors',
        'Holographic hot foil stamping',
        'Outfeed conveyors',
        'Hopper agitators',
      ]}
      applications={[
        'Powders (spices, milk, flour)',
        'Granules (sugar, salt, cereals)',
        'Salt',
        'Sugar',
        'Coffee & Tea',
        'Detergents',
        'Agro chemicals',
        'Pharmaceutical granules',
      ]}
      overview="The Single Lane Intermittent Motion VFFS Bagger from Starpac India is engineered for high-precision, high-reliability packaging of free-flowing products. Available in three models — PS 360, PS 550, and PS 820 — these machines cater to pack volumes from 5g sachets all the way to 10kg bags. The intermittent motion system ensures excellent seal integrity and consistent bag dimensions, making it ideal for food, pharma, and industrial applications."
    />
  )
}
