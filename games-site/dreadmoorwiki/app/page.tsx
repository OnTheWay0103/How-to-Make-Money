import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide — Your First Hours in the Submerged Lands',
    description: 'A spoiler-light opening route: reach the Trading Post, take the first contract, learn the fishing loop, and avoid the early mistakes that cost you cargo or materials.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-10-24',
  },
  {
    title: 'Fishing Guide — Casting, Bait, Stamina & Line Tension',
    description: 'How the fishing minigame actually works: reading a bite, pulling against the fish, managing line tension, and choosing bait for peaceful and predatory species.',
    slug: 'fishing-guide',
    category: 'Fishing',
    updated: '2026-10-24',
  },
  {
    title: 'Fish Species Guide — Confirmed Catches & Processing',
    description: 'Every fish verified in the demo, which bait each one takes, what processing produces, and which mutated species are still unconfirmed for Early Access.',
    slug: 'fish-species-guide',
    category: 'Fishing',
    updated: '2026-10-24',
  },
  {
    title: 'Boat Upgrades Guide — Dry Dock, Modules & Speed',
    description: 'A practical upgrade path for the trawler: unlocking the Dry Dock, crafting hull protection, installing the Upgraded Engine, and when a speed penalty is worth it.',
    slug: 'boat-upgrades-guide',
    category: 'Boat',
    updated: '2026-10-24',
  },
  {
    title: 'Survival Guide — Fuel, Hull Condition & Night Crossings',
    description: 'The survival loop that is actually confirmed: turning fish into fuel, repairing hull damage, packing for a crossing, and what the demo does not tell you about night sailing.',
    slug: 'survival-guide',
    category: 'Survival',
    updated: '2026-10-24',
  },
  {
    title: 'Early Access Roadmap — What Ships on November 9',
    description: 'What the $19.99 Early Access build includes, how it differs from the free demo, what the 6–12 month roadmap promises, and what is still unannounced.',
    slug: 'early-access-roadmap',
    category: 'Info',
    updated: '2026-10-24',
  },
];

const FAQ_ITEMS = [
  {
    question: 'When does DREADMOOR release?',
    answer: 'DREADMOOR enters Steam Early Access on November 9, 2026 for PC. The Early Access period is planned to last 6–12 months before the 1.0 release. A free demo has been available on Steam since October 6, 2026.',
  },
  {
    question: 'How much does DREADMOOR cost?',
    answer: 'Early Access is priced at $19.99. The developers have said the price will rise when the game leaves Early Access, so buying during Early Access is the cheaper option.',
  },
  {
    question: 'Is DREADMOOR multiplayer or co-op?',
    answer: 'No. DREADMOOR is a single-player game. The official FAQ states that it does not support multiplayer, co-op, or crossplay, and no console version has been confirmed.',
  },
  {
    question: 'Is DREADMOOR a Dredge sequel?',
    answer: 'No. DREADMOOR is a separate game from Dream Dock and Digital Vortex Entertainment, not a sequel to Dredge. The comparison comes from the shared fishing-horror premise, not from a shared story or developer.',
  },
  {
    question: 'What is the difference between the demo and Early Access?',
    answer: 'The demo is a short vertical slice set around the Trading Post, Dry Dock, Angler’s Island, and The Throat; it ends at a “Thank You for Playing” screen. Early Access is planned to include the complete core loop, one major region, the full story, more fish and mutations, and continued free exploration after the story.',
  },
  {
    question: 'Does DREADMOOR have combat?',
    answer: 'Yes. The Early Access feature list describes real-time combat against mutated creatures on land and at sea, with harpoons and other tools. The demo focuses on fishing and boat repair, so treat the demo as a preview of the survival loop rather than the full combat sandbox.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#041014] to-[#071013]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          DREADMOOR <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          Unofficial guide hub for the first-person fishing survival horror set in the flooded Submerged Lands — fishing mechanics, fish species, boat upgrades, survival, and Early Access details.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Steam Early Access — November 9, 2026 · $19.99 · PC · Single-player
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3629430/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Start Here</h2>
        <p className="text-sm text-gray-500 mb-8">
          Based on the official Early Access feature list and the October 2026 demo build. Unconfirmed systems are labelled as such in every guide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">New to the game?</h3>
            <p className="text-sm text-gray-400 mb-3">The first two hours decide whether you leave the starting lagoon with a working boat or a repair bill.</p>
            <Link href="/guides/beginner-guide" className="text-sm text-amber-400 hover:underline">Read the beginner guide →</Link>
          </div>
          <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">Losing fish?</h3>
            <p className="text-sm text-gray-400 mb-3">Line tension, not stamina, is the meter that ends most fights. Learn when to stop reeling.</p>
            <Link href="/guides/fishing-guide" className="text-sm text-amber-400 hover:underline">Fix your fishing →</Link>
          </div>
          <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">Planning a purchase?</h3>
            <p className="text-sm text-gray-400 mb-3">Our upgrade priority is an editorial recommendation, not a datamined tier list.</p>
            <Link href="/tier-list" className="text-sm text-amber-400 hover:underline">See upgrade priority →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1d3038]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#0e1b20] rounded-lg border border-[#1d3038]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-cyan-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Read the full FAQ →</Link>
        </div>
      </section>
    </>
  );
}
