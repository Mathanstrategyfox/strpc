import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Intermittent & Continuous Motion Flow Wrappers | Starpac India',
  description: 'MW and MCW series flow wrappers for biscuits, candy, soap, bread, and solid food products — 6 to 100 ppm.',
}

export default function FlowWrappersPage() {
  return (
    <MachinePageLayout
      title="Flow Wrappers — Intermittent and Continuous Motion"
      subtitle="Horizontal flow wrapping machines for biscuits, bakery, confectionery, personal care, and medical products."
      features={[
        'PLC based control with Touch Screen HMI',
        'Hermetic fin and end seals',
        'cGMP & cGEP Standards compliance',
        'Servo-driven film and product transport',
        'No product — no film advance (intermittent)',
        'Auto film tension control',
        'Adjustable product guides',
        'SS 304 contact parts',
        'Quick format changeover',
        'Optional infeed conveyor integration',
      ]}
      modelSpecs={{
        headers: ['Model', 'Motion Type', 'Speed', 'Bag Width', 'Reel Width'],
        rows: [
          ['MW 240', 'Intermittent', '20–100 ppm', '35–110 mm', '110–240 mm'],
          ['MW 550', 'Intermittent', '8–60 ppm', 'Up to 220 mm', '200–550 mm'],
          ['MW 820', 'Intermittent', '6–30 ppm', 'Up to 380 mm', 'Up to 820 mm'],
          ['MCW 300', 'Continuous', '30–200 ppm', '35–130 mm', '110–300 mm'],
        ],
      }}
      specs={[
        { label: 'Power Supply', value: '3-Phase 415V, 50Hz' },
        { label: 'Control System', value: 'Siemens PLC + Touch Screen HMI' },
        { label: 'Film Types', value: 'OPP, CPP, BOPP, polyethylene, co-extruded films' },
        { label: 'Seal Type', value: 'Fin seal + end seal (crimped or rotary jaw)' },
      ]}
      optional={[
        'Date coder (inkjet / TTO)',
        'Metal detector',
        'Product spacing conveyor',
        'Infeed rotary cross-bar feeder',
        'Tear tape applicator',
        'Gas flushing',
      ]}
      applications={[
        'Biscuits and cookies',
        'Papad',
        'Soap bars',
        'Candy bars and chocolates',
        'Bread and bakery products',
        'Instant noodles',
        'Medical supplies',
        'Ice lolly and frozen products',
        'Stuffed food items',
        'Personal care products',
      ]}
      overview="The MW and MCW series Flow Wrappers from Starpac India deliver reliable, gentle horizontal wrapping for a wide range of solid and semi-solid products. The intermittent motion MW series is ideal for delicate products that need careful handling, while the continuous motion MCW 300 achieves speeds up to 200 packs per minute for high-volume lines. All models produce hermetic fin and end seals for superior product protection."
    />
  )
}
