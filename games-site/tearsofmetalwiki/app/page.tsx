import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide', description: 'Getting started with Tears of Metal — heroes, combat, and your first expedition.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-22' },
  { title: 'Best Builds', description: 'Top builds for Vanguard, Berserker, and Marksman — physical, elemental, and emblem synergy.', slug: 'best-builds', category: 'Builds', updated: '2026-07-22' },
  { title: 'Heroes Tier List', description: 'All 3 heroes ranked — strengths, weaknesses, and best use cases for solo and co-op.', slug: 'heroes-tier-list', category: 'Heroes', updated: '2026-07-22' },
  { title: 'Village Upgrade Guide', description: 'Optimal upgrade priority for Armory, Recruitment Tent, Smithy, and more.', slug: 'village-upgrade-guide', category: 'Progression', updated: '2026-07-22' },
  { title: 'Boss Guide', description: 'Complete walkthrough for all 3 act bosses — Ironclad Commander, Excavation Juggernaut, and Corrupted Warlord.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-22' },
  { title: 'Emblem & Artifact Guide', description: 'All 18 emblems explained, best combinations, and artifact synergy strategies.', slug: 'emblem-artifact-guide', category: 'Mechanics', updated: '2026-07-22' },
];

const FAQ_ITEMS = [
  { question: 'What is Tears of Metal?', answer: 'Tears of Metal is a Scottish action roguelike hack-and-slash developed by Paper Cult. Build a village, forge weapons, collect emblems, and fight through procedurally generated expeditions in solo or 4-player co-op. Early Access launched July 22, 2026 on Steam for $24.99.' },
  { question: 'Is Tears of Metal free?', answer: 'No. Tears of Metal costs $24.99 on Steam. There is no free-to-play version or microtransaction system.' },
  { question: 'Is it on console?', answer: 'Currently Tears of Metal is PC-only via Steam. Console releases have not been announced.' },
  { question: 'Can I play solo?', answer: 'Yes. All 3 heroes (Vanguard, Berserker, Marksman) are viable solo. The Vanguard is especially recommended for new solo players due to its shield and survivability.' },
  { question: 'How does co-op work?', answer: 'Up to 4 players can team up in online co-op. Progression is shared between party members — village upgrades apply to all. There is no local/couch co-op.' },
  { question: 'How long is the game?', answer: 'A full run through all 3 acts takes 8-15 hours depending on difficulty and exploration. Village upgrades carry over between runs, so replay value is high.' },
  { question: 'Does progress save?', answer: 'Village upgrades are permanent across all runs. Expedition progress (hero level, items, artifacts) resets each run — this is a roguelike.' },
  { question: 'When is full release?', answer: 'Tears of Metal launched in Early Access on July 22, 2026. A full release date has not been announced yet.' },
  { question: 'What heroes are available?', answer: 'There are 3 heroes at launch: Vanguard (tank/defense, best for beginners), Berserker (highest DPS, fragile), and Marksman (ranged damage, essential in co-op).' },
  { question: 'What are emblems?', answer: 'Emblems are passive modifiers you equip to customize your hero\'s playstyle. There are 18 emblems covering physical builds, elemental damage, support, and defensive strategies.' },
  { question: 'Can I respec my village upgrades?', answer: 'Currently there is no respec system for village upgrades. Choose wisely or plan your upgrade path with the village upgrade guide.' },
  { question: 'Is there crossplay?', answer: 'Crossplay is not applicable since the game is currently PC-only. Steam users can play together regardless of region.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1111] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Tears of Metal <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the Scottish action roguelike by Paper Cult.
        </p>
        <p className="text-sm text-gray-600 mb-8">Out now in Early Access — $24.99 on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/tears-of-metal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Buy on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-red-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
