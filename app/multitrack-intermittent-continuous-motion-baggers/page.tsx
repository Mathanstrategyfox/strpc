import MachinePageLayout from '@/components/MachinePageLayout'

export const metadata = {
  title: 'Multitrack Intermittent & Continuous Motion Baggers | Starpac India',
  description: 'MT and MTD series multitrack VFFS baggers for sachets, stick packs and 3/4 side seal packs — up to 1200 packs/min.',
}

export default function MultitrackBaggersPage() {
  return (
    <MachinePageLayout
      title="Multitrack Intermittent and Continuous Motion Baggers"
      subtitle="Ultra-high-speed sachet and stick pack packaging with up to 10 tracks and 1200 packs/minute."
      features={[
        'PLC based control with Touch Screen HMI',
        'IP 51 rated electrical panel',
        'ISO Standards Wiring',
        'cGMP & cGEP Standards',
        'Batch embossing capability',
        'Up to 10 tracks on a single machine',
        'Intermittent & continuous motion options',
        '3-side seal, 4-side seal, and stick pack formats',
        'Integrated bundling conveyor option',
        'Auto film splice ready',
      ]}
      specs={[
        { label: 'Models', value: 'MT:600, MT:1200, MTD:600, MTD:1200' },
        { label: 'Max Web Width', value: '240 / 360 / 550 / 1000 / 1200 mm' },
        { label: 'Roll Diameter', value: '350–500 mm' },
        { label: 'Sachet Length', value: '40–1200 mm' },
        { label: 'Max Tracks', value: 'Up to 10 tracks' },
        { label: 'Speed', value: '40–90 strokes/min' },
        { label: 'Max Output', value: 'Up to 1200 packs/min (10 track at 120 spm)' },
        { label: 'Power Supply', value: '3-Phase 415V, 50Hz' },
        { label: 'Air Pressure', value: '6 kg/cm²' },
      ]}
      optional={[
        'Outfeed bundling system',
        'Inkjet / TTO date coders',
        'Auto film splicer',
        'Checkweigher integration',
        'Metal detector integration',
      ]}
      applications={[
        '3-side seal sachets',
        '4-side seal sachets',
        'Stick packs',
        'Spices and seasoning',
        'Coffee and instant beverages',
        'Pharmaceutical sachets',
        'Salt and sugar portion packs',
        'Shampoo and conditioner sachets',
        'Honey and ketchup sachets',
      ]}
      overview="The MT and MTD series Multitrack baggers represent the pinnacle of sachet packaging technology. With configurations from 600mm to 1200mm web width and up to 10 simultaneous tracks, these machines achieve throughputs of up to 1200 packs per minute. Available in both intermittent (MT) and continuous motion (MTD) versions to suit different product requirements and film types."
    />
  )
}
