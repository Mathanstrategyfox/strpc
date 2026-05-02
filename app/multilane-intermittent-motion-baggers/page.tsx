import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Multilane Intermittent Motion Baggers | Starpac India',
  description: 'High-speed multilane VFFS baggers — Models HS 190, HS 360, HS 550 — for simultaneous multi-SKU packaging.',
}

export default function MultilaneBaggersPage() {
  return (
    <MachinePageLayout
      title="Multilane Intermittent Motion Baggers"
      subtitle="Simultaneous multi-lane packaging with independent lane control for maximum throughput."
      features={[
        'PLC based control with Touch Screen HMI',
        'PID temperature controllers per lane',
        'Photocell registration for print-registered packs',
        'Mechanical draw bars for consistent film pull',
        'Simultaneous packaging of different SKUs per lane',
        'ISO Standards Wiring',
        'cGMP & cGEP Standards compliance',
        'SS 316 product contact parts',
        'Individual lane tension control',
        'Compact footprint for high output',
      ]}
      specs={[
        { label: 'Power Supply', value: '3-Phase 415V, 50Hz' },
        { label: 'Air Pressure', value: '6 kg/cm²' },
        { label: 'Control System', value: 'Siemens PLC + Touch Screen HMI' },
        { label: 'Film Type', value: 'Laminated polyester, BOPP, PE, metalized' },
      ]}
      modelSpecs={{
        headers: ['Model', 'Lanes', 'Capacity', 'Speed/Lane', 'Bag Height', 'Bag Width'],
        rows: [
          ['HS 190', '2–4', '200 cc', '50–110/lane', '50–170 mm', '18–110 mm'],
          ['HS 360', '2–4', '1000 cc', '40–80/min', '70–250 mm', '50–170 mm'],
          ['HS 550', '2', '2000 cc', '40–70/min', '100–350 mm', '100–260 mm'],
        ],
      }}
      optional={[
        'Outfeed conveyors',
        'Hopper feeders',
        'Batch printers (inkjet / TTO)',
        'Zipper devices',
        'Gas filling units',
        'Holographic hot foil stamping',
        'Vibration dosing systems',
      ]}
      applications={[
        'Sachets and stick packs',
        'Spices and masalas',
        'Coffee and tea',
        'Salt and sugar',
        'Pharmaceutical sachets',
        'Personal care sachets',
        'Condiments',
      ]}
      overview="The Multilane Intermittent Motion VFFS Bagger offers industry-leading throughput by packaging on multiple lanes simultaneously. Available in 2 to 4 lane configurations, the HS series enables packaging of the same or different SKUs concurrently. PID temperature control per sealing zone and photocell registration ensure consistent, branded packs at every lane."
    />
  )
}
