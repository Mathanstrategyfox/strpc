import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'PLC Based Vacuum Chamber Machine | Starpac India',
  description: 'Heavy-duty PLC vacuum chamber machine with double sealing bar and gas flushing option — technical know-how from MP-Tech Italy.',
}

export default function VacuumChamberPage() {
  return (
    <MachinePageLayout
      title="PLC Based Vacuum Chamber Machine"
      subtitle="Heavy-duty vacuum chamber machine with PLC Siemens control and optional gas flushing for extended shelf life."
      techKnowHow="MP-Tech Italy"
      features={[
        'Heavy duty SS 304 construction',
        'Efficient high-capacity vacuum pump',
        'Double sealing bar for reliable closure',
        'Clean and hygienic table surface',
        'Gas flushing option (N₂ / CO₂)',
        'Siemens PLC control with Touch Screen HMI',
        'Programmable vacuum levels',
        'Automatic seal cycle with time control',
        'CE certified',
        'Easy-access chamber for cleaning',
        'Multiple simultaneous bag sealing',
      ]}
      specs={[
        { label: 'Machine Dimensions', value: '3100×1016×1660 mm' },
        { label: 'Vacuum Pump Capacity', value: '200 m³/hr' },
        { label: 'Control System', value: 'Siemens PLC + Touch Screen HMI' },
        { label: 'Power Supply', value: '3-Phase 415V, 7/9 kW' },
        { label: 'Air Pressure', value: '6 kg/cm²' },
        { label: 'Sealing Area', value: '1100×250 mm' },
        { label: 'Cycle Speed', value: '15–40 cycles/min' },
        { label: 'Structure', value: 'SS 304' },
      ]}
      optional={[
        'Gas flushing system (N₂, CO₂)',
        'Cryovac film compatibility',
        'Liquid collection tray',
        'Extended sealing bar',
        'Double vacuum pump',
      ]}
      applications={[
        'Vacuum packaging of meat and poultry',
        'Cheese and dairy vacuum packing',
        'Smoked fish and seafood',
        'Cooked meats and deli products',
        'Nuts and dried fruits',
        'Coffee vacuum bricks',
        'Pharmaceutical products',
        'Electronic components',
      ]}
      overview="The PLC Based Vacuum Chamber Machine from Starpac India, engineered with MP-Tech Italy technology, offers heavy-duty vacuum packaging with precision PLC control. The large 1100×250mm sealing area accommodates multiple bags per cycle, while the 200m³/hr pump achieves rapid, deep vacuum. The machine is ideal for extending the shelf life of fresh, processed, and specialty food products."
    />
  )
}
