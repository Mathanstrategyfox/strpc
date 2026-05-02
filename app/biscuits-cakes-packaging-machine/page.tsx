import ApplicationPageLayout from '@/components/ApplicationPageLayout'

export const metadata = {
  title: 'Biscuits & Cakes Packaging Machines | Starpac India',
  description: 'Horizontal flow wrappers for biscuits, cookies, cakes, and bakery products — gentle handling, high speed.',
}

export default function BiscuitsCakesPackagingPage() {
  return (
    <ApplicationPageLayout
      title="Biscuits & Cakes Packaging Solutions"
      subtitle="Horizontal flow wrappers for gentle, high-speed packaging of biscuits, cakes, and bakery products."
      industry="Bakery, Confectionery, FMCG"
      description="Flow wrappers are ideal for biscuits, cakes, and bakery products. Starpac's horizontal flow wrappers handle single and multi-count packs with gentle product handling to avoid breakage of delicate bakery items. The fin and end seal combination creates hermetic packs that preserve freshness, while the adjustable product guide system accommodates a wide range of shapes and sizes."
      highlights={[
        'Gentle horizontal flow — no vertical drop for delicate biscuits',
        'Single and multi-count packing (2-pack, 3-pack configurations)',
        'Hermetic fin and end seals preserve freshness',
        'Quick format changeover between biscuit varieties',
        'Handles round, square, rectangular, and irregular shapes',
        'Speed up to 200 packs/min (continuous motion MCW 300)',
      ]}
      machines={[
        { name: 'MW 820 Flow Wrapper', href: '/intermittent-and-continuous-motion-flow-wrappers' },
        { name: 'MW 550 Flow Wrapper', href: '/intermittent-and-continuous-motion-flow-wrappers' },
        { name: 'MW 240 Flow Wrapper', href: '/intermittent-and-continuous-motion-flow-wrappers' },
        { name: 'MCW 300 Continuous Flow Wrapper', href: '/intermittent-and-continuous-motion-flow-wrappers' },
      ]}
    />
  )
}
