import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Rotary & Linear Jar/Cup/Can Fill & Close Machines | Starpac India',
  description: 'JFS 1 Rotary and JFS 2 Linear jar fill and close machines for glass, PET, and paper containers — up to 80 cans/min.',
}

export default function JFSPage() {
  return (
    <MachinePageLayout
      title="Rotary & Linear Jar/Cup/Can Fill & Close Machines"
      subtitle="8-station rotary and 16-station duplex linear filling systems for glass, PET, and paper containers."
      features={[
        '8-station rotary (JFS 1) or 16-station duplex linear (JFS 2)',
        'Handles glass, PET, HDPE, and paper containers',
        'Servo-driven container transport',
        'Up to 4 different filler types on one machine',
        'PLC with 5.7" Touch Screen HMI',
        'IP 51 rated electrical enclosure',
        'CE certified',
        'No container — no fill interlock',
        'CIP (Clean-in-Place) compatible',
        'Height-adjustable for different container formats',
        'Auto capping / seaming option',
      ]}
      specs={[
        { label: 'Models', value: 'JFS 1 (Rotary 8-station), JFS 2 (Linear 16-station duplex)' },
        { label: 'Speed — JFS 1', value: '50 cans/min' },
        { label: 'Speed — JFS 2', value: '50–80 cans/min' },
        { label: 'Max Container Diameter', value: '108 mm' },
        { label: 'Max Container Height', value: '300 mm' },
        { label: 'Electrical Load', value: '7.5 kW' },
        { label: 'Air Consumption', value: '300 L/min' },
        { label: 'Noise Level', value: '<70 dB' },
        { label: 'Machine Dimensions', value: '3500×1200×1900 mm' },
        { label: 'Power Supply', value: '3-Phase 415V, 50Hz' },
      ]}
      optional={[
        'Auger filler (powders)',
        'Piston filler (pastes/viscous)',
        'Liquid filler (oils)',
        'Weigh filler',
        'Induction sealer',
        'Labelling machine',
        'Date coder',
      ]}
      applications={[
        'Pickles and preserved foods',
        'Jams and marmalades',
        'Peanut butter and tahini',
        'Ghee and edible oils',
        'Coffee and tea',
        'Pharmaceutical powders',
        'Spices and masalas',
        'Baby food',
        'Cosmetics and personal care',
      ]}
      overview="The JFS series Jar/Cup/Can Fill and Close machines from Starpac India are engineered for versatile container packaging. The JFS 1 Rotary features 8 stations in a compact circular layout, while the JFS 2 Linear provides a 16-station duplex system for higher throughputs. Both can accommodate up to 4 different filler types simultaneously, making them ideal for products that require multi-component dosing."
    />
  )
}
