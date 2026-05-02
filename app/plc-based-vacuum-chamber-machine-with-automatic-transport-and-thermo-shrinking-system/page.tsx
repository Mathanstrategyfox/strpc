import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'PLC Vacuum Chamber with Auto Transport & Thermo Shrinking | Starpac India',
  description: 'Vacuum chamber machine with automatic transport belt and online thermo shrinking system for cryovac-type films — MP-Tech Italy technology.',
}

export default function VacuumChamberShrinkPage() {
  return (
    <MachinePageLayout
      title="PLC Based Vacuum Chamber Machine with Automatic Transport and Thermo Shrinking System"
      subtitle="Complete vacuum packaging line with online thermoshrinking for professional cryovac-type presentation."
      techKnowHow="MP-Tech Italy"
      features={[
        'All features of standard PLC Vacuum Chamber Machine',
        'Integrated online thermoshrinking system',
        'Automatic transport belt between chambers',
        'Compatible with cryovac-type barrier shrink films',
        'Double sealing bar for reliable closure',
        'Gas flushing option (N₂ / CO₂)',
        'Siemens PLC control with Touch Screen HMI',
        'SS 304 construction throughout',
        'Hygienic hot water or hot air shrink tunnel',
        'CE certified',
        'Programmable shrink parameters',
        'Continuous line operation capability',
      ]}
      specs={[
        { label: 'Machine Dimensions', value: '3100×1016×1660 mm (vacuum section)' },
        { label: 'Vacuum Pump Capacity', value: '200 m³/hr' },
        { label: 'Control System', value: 'Siemens PLC + Touch Screen HMI' },
        { label: 'Power Supply', value: '3-Phase 415V, 7/9 kW (vacuum) + shrink tunnel' },
        { label: 'Air Pressure', value: '6 kg/cm²' },
        { label: 'Sealing Area', value: '1100×250 mm' },
        { label: 'Shrink Film Type', value: 'Cryovac-type barrier shrink films' },
        { label: 'Shrink Tunnel Type', value: 'Hot water or hot air' },
        { label: 'Transport System', value: 'Automatic belt conveyor' },
        { label: 'Structure', value: 'SS 304' },
      ]}
      optional={[
        'Gas flushing system (N₂, CO₂)',
        'Cooling section after shrink tunnel',
        'Dryer for water-based shrink tunnels',
        'Extended sealing bar',
        'Vision system for pack inspection',
      ]}
      applications={[
        'Cryovac-packaged fresh meat',
        'Whole and portion cheese packs',
        'Smoked salmon and seafood',
        'Premium deli meats',
        'Fresh pasta',
        'High-value food retail packs',
        'Pharmaceutical blisterpacks',
        'Industrial component packaging',
      ]}
      overview="The PLC Based Vacuum Chamber Machine with Automatic Transport and Thermo Shrinking System combines the high-performance vacuum sealing of the standard chamber machine with an integrated thermoshrinking line. After vacuum sealing, products are automatically transported via conveyor belt into the shrink tunnel, where cryovac-type barrier films are tightly shrunk around the product for professional presentation and extended shelf life."
    />
  )
}
