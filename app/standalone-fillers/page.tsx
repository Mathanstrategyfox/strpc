import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Standalone Fillers | Starpac India',
  description: 'Orion PF, Orion AF, ACF Servo, Load Cell Linear Weigher and Multihead Weigher standalone filling machines.',
}

export default function StandaloneFillerPage() {
  return (
    <MachinePageLayout
      title="Standalone Fillers"
      subtitle="A complete range of standalone filling machines for powders, granules, pastes, and liquids."
      features={[
        'PLC based control with Touch Screen HMI',
        'PID temperature controllers',
        'CE certified across all models',
        'SS 316 product contact parts',
        'Continuous rated motors',
        'Modular design for easy integration',
        'Auto-clean and CIP compatible',
        'Variable speed drives for precise dosing',
        'Overload protection',
        'Dust-proof electrical enclosure',
      ]}
      specs={[
        { label: 'Models', value: 'Orion PF, Orion AF, Orion PF Pastes, Load Cell Linear Weigher, ACF Servo, ACF Non-Servo, Multihead Weigher' },
        { label: 'Power Supply', value: '3-Phase 415V, 50Hz' },
        { label: 'Heater Supply', value: '230V, 500W' },
        { label: 'Air Pressure', value: '6–10 kg/cm²' },
        { label: 'Speed Range', value: '10–70 packs/min (varies by product and filler type)' },
        { label: 'Contact Parts', value: 'SS 316 throughout' },
        { label: 'Dosing Types', value: 'Auger, volumetric cup, piston, weigh-based' },
      ]}
      modelSpecs={{
        headers: ['Model', 'Product Type', 'Dosing Method', 'Typical Speed'],
        rows: [
          ['Orion PF', 'Free-flowing powders', 'Auger / Volumetric', '20–60 packs/min'],
          ['Orion AF', 'Granules, flakes', 'Volumetric Cup', '30–70 packs/min'],
          ['Orion PF Pastes', 'Pastes, semi-liquids', 'Piston', '15–40 packs/min'],
          ['Load Cell Linear Weigher', 'Any free-flowing', 'Net-weigh (load cell)', '20–50 packs/min'],
          ['ACF Servo', 'Granules, nuts, confectionery', 'Servo cup weigher', '30–60 packs/min'],
          ['ACF Non-Servo', 'Granules, pulses', 'Cup weigher', '25–50 packs/min'],
          ['Multihead Weigher', 'Any product', 'Combination weigher', '60–120 packs/min'],
        ],
      }}
      optional={[
        'Date coder integration',
        'Metal detector integration',
        'Checkweigher integration',
        'Hopper agitator',
        'Nitrogen flushing',
      ]}
      applications={[
        'Powders (spices, flour, milk powder)',
        'Granules (sugar, salt, cereals, nuts)',
        'Pastes (tomato, chili, tamarind)',
        'Liquids (oils, ghee)',
        'Confectionery',
        'Pharmaceutical granules',
        'Agro chemicals',
        'Pet food',
      ]}
      overview="Starpac's Standalone Fillers range provides precision dosing solutions that can be integrated into any packaging line. From simple volumetric cup fillers to sophisticated multi-head combination weighers, each filler is designed to deliver consistent fill weights with minimal giveaway. The range covers products from free-flowing powders to viscous pastes and liquids."
    />
  )
}
