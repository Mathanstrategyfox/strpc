import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Double Chamber Automatic Cup-Tray-Tub Fill and Seal | Starpac India',
  description: 'Double chamber tray sealing machine with vacuum and MAP for higher throughput — technical know-how from MP-Tech Italy.',
}

export default function DoubleChamberPage() {
  return (
    <MachinePageLayout
      title="Double Chamber Automatic Cup-Tray-Tub Fill and Seal"
      subtitle="Higher throughput double chamber tray sealing with vacuum and modified atmosphere — for demanding production lines."
      techKnowHow="MP-Tech Italy"
      features={[
        'Double chamber design for continuous operation',
        'Integrated loading and unloading belt conveyors',
        'Vacuum + modified atmosphere packaging (MAP)',
        'Fully automatic modular design',
        'Optional integrated tray forming unit',
        'Compact design with small footprint',
        'CIP (Clean-in-Place) compatible',
        'CE certified',
        'SS 304 construction',
        'Siemens PLC with Touch Screen HMI',
        'Tool-less format changeover',
        'Higher throughput vs single chamber',
        'Parallel operation for continuous production',
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
        { label: 'Speed (Seal Only)', value: '7–12 strokes/min' },
        { label: 'Speed (Vacuum + Gas)', value: '5–8 strokes/min' },
        { label: 'Loading/Unloading', value: 'Integrated belt conveyors (both ends)' },
      ]}
      optional={[
        'Integrated tray forming unit',
        'Date coder (TTO)',
        'Gas flush monitoring system',
        'Modified atmosphere (N₂, CO₂, O₂ mix)',
        'Vision system for seal integrity',
      ]}
      applications={[
        'High-volume fresh produce packaging',
        'Meat and poultry processing lines',
        'Cheese and dairy MAP packaging',
        'Ready meals in continuous production',
        'Seafood processing',
        'Pharmaceutical tray packaging',
        'Medical device packaging',
      ]}
      overview="The Double Chamber version of the Automatic Cup-Tray-Tub Fill and Seal machine doubles the throughput by operating two sealing chambers in parallel. While one chamber is cycling (vacuum, gas flush, seal), the other is being loaded — resulting in near-continuous operation. Developed with MP-Tech Italy technology, this machine is ideal for high-volume food processing lines where uptime and throughput are critical."
    />
  )
}
