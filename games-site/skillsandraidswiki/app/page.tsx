import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started in Skills & Raids', description: 'New to Skills & Raids? Master the basics — team building, skill mixing, extraction mechanics, and avoiding common mistakes.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-14' },
  { title: 'Tier List — Best Skills & Builds Ranked', description: 'Complete Skills & Raids tier list for skills, builds, and team compositions. S-Tier to C-Tier with detailed explanations.', slug: 'tier-list', category: 'Tier List', updated: '2026-07-14' },
  { title: 'Builds Guide — Top Team Compositions', description: 'Best team builds for every playstyle — solo extraction, duo synergy, and full squad loadouts. Skill combinations that dominate.', slug: 'builds-guide', category: 'Builds', updated: '2026-07-14' },
  { title: 'Extraction Guide — How to Survive Every Raid', description: 'Master the extraction loop — when to fight, when to run, boss patterns, loot tiers, and securing your haul.', slug: 'extraction-guide', category: 'Gameplay', updated: '2026-07-14' },
  { title: 'Skills Guide — All Skills & Best Combinations', description: 'Complete database of every skill across all 5 rarity tiers. Learn which skills combo together for devastating synergy effects.', slug: 'skills-guide', category: 'Skills', updated: '2026-07-14' },
  { title: 'Crafting Guide — Full Crafting System Explained', description: 'How to craft weapons, armor, and consumables. Material farming routes, recipe unlocks, and maximizing rarity outcomes.', slug: 'crafting-guide', category: 'Crafting', updated: '2026-07-14' },
];

const FAQ_ITEMS = [
  { question: 'What is Skills & Raids?', answer: 'Skills & Raids is a party-based extraction RPG by solo developer Eddie H. Hinestroza, released on Steam on July 27, 2026. You command a fixed party of three animal heroes — Shelldon the turtle tank, Clawrk the tiger DPS, and Owlivia the owl healer — in real-time ability-driven combat. Fight, extract resources, and craft gear and skills between runs.' },
  { question: 'Is Skills & Raids free to play?', answer: 'No. It is a paid game on Steam (¥42.00, 20% intro discount until August 10, 2026). A free demo is available with 11 quests, 2 biomes, and 15 skills.' },
  { question: 'How does the extraction system work?', answer: 'You take your party into run-based expeditions, fight enemies, and collect resources — some enemies even drop their own skills. What you extract is used to craft equipment and skills or to complete quests. On a failed run, anything not kept in a safe pocket is lost forever.' },
  { question: 'What are the skill rarity tiers?', answer: 'Gear and skills come in 5 rarity tiers: Common, Uncommon, Rare, Epic, and Legendary. Higher rarities mean stronger gear and skills, and combining skills creates synergies — the game’s core build mechanic.' },
  { question: 'Is Skills & Raids single-player?', answer: 'Yes. The game is strictly single-player — you control the full party yourself. There is no multiplayer and no PvP. The game does support Steam Cloud and Family Sharing.' },
  { question: 'What is the best beginner team composition?', answer: 'The party is fixed: Shelldon (tank), Clawrk (DPS), and Owlivia (healer). The build game is about their two ability slots each. Start with a balanced loadout — mitigation on Shelldon, damage on Clawrk, heals on Owlivia — and build synergies as you collect skills.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Skills & Raids <span className="text-amber-400">Wiki</span></h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">Complete guide hub for the team-based extraction RPG — builds, skills, extraction tips, crafting, and more.</p>
        <p className="text-sm text-gray-600 mb-8">Now on Steam · Released July 27, 2026</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/4401370/Skills__Raids/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">Get it on Steam</a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">Start with Beginner Guide →</Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((g) => (<GuideCard key={g.slug} {...g} />))}
        </div>
        <div className="text-center mt-8"><Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link></div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a2e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (<details key={item.question} className="group bg-[#1a1a2e] rounded-lg border border-[#2a2a4e]"><summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary><div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div></details>))}
        </div>
      </section>
    </>
  );
}
