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
  { question: 'What is Skills & Raids?', answer: 'Skills & Raids is a team-based extraction RPG developed by solo developer Lootsurvivor. It blends tactical turn-based combat with high-stakes raid extraction — build your squad, mix skills across 5 rarity tiers, craft gear, and extract alive. Available on Steam.' },
  { question: 'Is Skills & Raids free to play?', answer: 'Yes. Skills & Raids is free-to-play on Steam. The game is currently in Open Beta, with the full release expected in July 2026.' },
  { question: 'How does the extraction system work?', answer: 'You deploy a team into a raid map, fight enemies and bosses for loot, and must reach an extraction point to keep your haul. If your team wipes, you lose most items. High risk, high reward — the core loop of the game.' },
  { question: 'What are the skill rarity tiers?', answer: 'Skills come in 5 rarity tiers: Common (white), Uncommon (green), Rare (blue), Epic (purple), and Legendary (orange). Higher rarity skills have stronger effects and unlock unique synergy combos when paired with complementary skills.' },
  { question: 'Can I play solo?', answer: 'Yes. While Skills & Raids is designed around team combat, you can play solo by controlling a full squad yourself. Solo extraction is viable but requires careful team composition and skill management.' },
  { question: 'What is the best beginner team composition?', answer: 'A balanced trio works best: one tank (shield/taunt skills), one DPS (damage skills), and one support (heal/buff skills). Start with Common and Uncommon skills before chasing higher rarities — a synergistic low-rarity team beats a mismatched high-rarity one.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Skills & Raids <span className="text-amber-400">Wiki</span></h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">Complete guide hub for the team-based extraction RPG — builds, skills, extraction tips, crafting, and more.</p>
        <p className="text-sm text-gray-600 mb-8">Free-to-Play on Steam · Open Beta</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3357710/Skills__Raids/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">Play Free on Steam</a>
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
