import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: How to Play', description: 'New to the Iron Nest? Learn the core loop — read orders, plot targets, calculate ballistics, load shells, aim and fire — plus the six stations inside the turret.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-06' },
  { title: 'Tactical Map & Measurements Guide', description: 'The complete guide to the 20×10 tactical map: the grid and sub-grid system, map tokens, colored pencils, the drafting compass and how to read spotter reports.', slug: 'map-measurements-guide', category: 'Map', updated: '2026-08-06' },
  { title: 'How to Find Targets — Spotting & Triangulation', description: 'Pinpoint enemy positions from bearings, distances and vague intel: two-bearing triangulation, compass intersections and dead reckoning for blind fire.', slug: 'target-spotting-guide', category: 'Targeting', updated: '2026-08-06' },
  { title: 'Ballistic Calculator Guide', description: 'Every input on the ballistic calculator explained: distance, bearing, shell type, powder charges, target classification — and how to read the firing card.', slug: 'ballistic-calculator-guide', category: 'Ballistics', updated: '2026-08-06' },
  { title: 'All Shell Types — Full Ammo List', description: 'Every shell in the game: HE, HCHE, AP, S.T.A.R. illumination, smoke, phosgene and tear gas — with blast radii, costs and best use for each.', slug: 'shell-types-ammo-guide', category: 'Reference', updated: '2026-08-06' },
  { title: 'Requisition & Best Upgrade Path', description: 'How requisition credits work and the recommended upgrade order — build a machine you can trust before one that hits harder.', slug: 'requisition-upgrade-guide', category: 'Progression', updated: '2026-08-06' },
];

const FAQ_ITEMS = [
  { question: 'What is IRON NEST: Heavy Turret Simulator?', answer: 'IRON NEST is a first-person dieselpunk heavy-artillery simulator. You operate a 5,000-ton walking turret alone: decoding orders from teleprinters, plotting targets on a tactical map, calculating ballistics, manually loading shells and firing into an alternate-history Spanish civil war in the late 1920s. It launched on Steam on August 6, 2026.' },
  { question: 'Do I need to know math to play?', answer: 'No. The game does the hard math for you — the ballistic calculator converts range into elevation and powder charges, and the map tools display bearing and distance while you draw. The challenge is staying organized, not arithmetic.' },
  { question: 'Can I unload a shell after loading it?', answer: 'No. Once a shell and its powder charges are rammed into the gun, they cannot be unloaded. Load the wrong ammo and you must either adjust your firing solution around it or fire it off. Always double-check before you ram.' },
  { question: 'How do I know if I hit the target?', answer: 'You cannot see the explosion from inside the turret. Confirmation comes from radio feedback, red skull tokens appearing on your map for confirmed kills, and updated mission objectives. A blue skull means you hit a friendly unit.' },
  { question: 'How many shell types are there?', answer: 'The game features 30 unlockable ammo types and abilities. At launch the confirmed shells are HE, high-capacity HE, armor-piercing, S.T.A.R. illumination, smoke, phosgene gas and tear gas.' },
  { question: 'Is there multiplayer?', answer: 'No. IRON NEST is a strictly single-player experience — it is just you, the machine, and High Command. The challenge modes are solo runs for leaderboard scores.' },
  { question: 'How long is the game?', answer: 'The full campaign features 15 regions with a handcrafted story and newspaper reports, while objectives are procedurally generated for endless replayability. A full-clear playtime has not been confirmed yet.' },
  { question: 'Is there a free demo?', answer: 'Yes. The IRON NEST demo is available on Steam and received an Overwhelmingly Positive rating (99% positive) — it is one of the best-rated Steam Next Fest demos of the year.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Iron Nest <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the dieselpunk heavy-artillery simulator by Nick Nieuwoudt & Dominik Latos.
        </p>
        <p className="text-sm text-gray-600 mb-8">Out now — August 6, 2026 — Steam (PC)</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            IRON NEST on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
