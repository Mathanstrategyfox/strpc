import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Automatic Cup-Tray-Tub Fill and Seal | Starpac India',
  description: 'Fully automatic modular cup-tray-tub fill and seal machine with vacuum and modified atmosphere packaging — technical know-how from MP-Tech Italy.',
}

export default function CupTrayTubPage() {
  return (
    <MachinePageLayout
      title="Automatic Cup-Tray-Tub Fill and Seal"
      subtitle="Fully automatic modular fill and seal system with vacuum and modified atmosphere options."
      techKnowHow="MP-Tech Italy"
      features={[
        'Fully automatic modular design',
        'Vacuum + modified atmosphere packaging (MAP)',
        'Optional integrated tray forming unit',
        'Compact design with small footprint',
        'CIP (Clean-in-Place) compatible',
        'CE certified',
        'SS 304 construction',
        'Siemens PLC with Touch Screen HMI',
        'Tool-less format changeover',
        'Film heat sealing with precise temperature control',
        'High sealing pressure for hermetic seals',
        'Compatible with various tray materials (PP, PET, CPET, aluminium)',
      ]}
      specs={[
        { label: 'Structure', value: 'SS 304' },
        { label: 'Machine Dimensions', value: '3000×1054×1700 mm' },
        { label: 'Vacuum Pump', value: '100 m³/hr' },
        { label: 'Control System', value: 'Siemens PLC + Touch Screen HMI' },
        { label: 'Power Supply', value: '3-Phase 415V, 4/5 kW' },
        { label: 'Air Pressure', value: '6 kg/cm²' },
        { label: 'Max Film Width', value: '500 mm' },
        { label: 'Sealing Area', value: '400×300 mm' },
        { label: 'Max Tray Height', value: '150 mm' },
        { label: 'Speed (Seal Only)', value: '8–12 strokes/min' },
        { label: 'Speed (Vacuum + Gas)', value: '6–8 strokes/min' },
        { label: 'Machine Weight', value: '600 kg' },
      ]}
      optional={[
        'Integrated tray forming unit',
        'Loading belt conveyor',
        'Unloading belt conveyor',
        'Date coder (TTO)',
        'Gas flush monitoring',
        'Modified atmosphere options (N₂, CO₂)',
      ]}
      applications={[
        'Fresh produce (meat, poultry, fish)',
        'Dairy products (butter, cheese)',
        'Ready-to-eat meals',
        'Bakery and confectionery trays',
        'Fruits and vegetables',
        'Pharmaceutical trays',
        'Electronic components',
        'Medical devices',
      ]}
      overview="The Automatic Cup-Tray-Tub Fill and Seal machine, developed with technical know-how from MP-Tech Italy, offers a fully automatic modular solution for tray sealing with vacuum and modified atmosphere capabilities. The machine handles the complete cycle — tray loading, filling, vacuum/gas flushing, and hermetic sealing — in a compact, hygienic design that meets food industry standards."
    />
  )
}
