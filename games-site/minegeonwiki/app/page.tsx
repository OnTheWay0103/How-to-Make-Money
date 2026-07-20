import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started in MineGeon: Renegades', description: 'New to MineGeon? Master the basics — class selection, mining, combat, extraction, and avoiding common beginner mistakes.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-20' },
  { title: 'Classes Guide — All 3 Classes Explained', description: 'Complete breakdown of Tank, DPS Gunslinger, and Engineer. Abilities, playstyles, strengths, weaknesses, and which to pick.', slug: 'classes-guide', category: 'Classes', updated: '2026-07-20' },
  { title: 'Tier List — Best Classes, Weapons & Builds', description: 'Complete tier list for MineGeon. S-tier to C-tier rankings for solo and co-op, weapon rankings, and meta analysis.', slug: 'tier-list', category: 'Tier List', updated: '2026-07-20' },
  { title: 'Boss Guide — All 12+ Bosses & Strategies', description: 'Every boss in every biome with detailed attack patterns, weaknesses, strategies, and loot drops.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-20' },
  { title: 'Co-op & Multiplayer Guide — Play With Friends', description: 'How to host and join games, invite friends, best team compositions, co-op strategies, and revive mechanics.', slug: 'coop-multiplayer-guide', category: 'Multiplayer', updated: '2026-07-20' },
  { title: 'Crafting Guide — Recipes & Best Items to Craft', description: 'Complete crafting recipes, material requirements, crafting station upgrades, and efficient crafting strategies.', slug: 'crafting-guide', category: 'Crafting', updated: '2026-07-20' },
];

const FAQ_ITEMS = [
  { question: 'What is MineGeon: Renegades?', answer: 'MineGeon: Renegades is a 1-3 player co-op roguelite developed by WTF Studios, releasing July 28, 2026 on Steam. The game combines deep mining mechanics with fast-paced combat and a fully customizable base-building system. Dig through 6 biomes, fight 12+ bosses, and extract your loot before the mine collapses.' },
  { question: 'Is MineGeon: Renegades free to play?', answer: 'Pricing has not been officially announced. Based on similar indie roguelites, expect a paid title in the $15-$25 range on Steam.' },
  { question: 'How does co-op work?', answer: 'MineGeon supports 1-3 players. Host a game from the main menu, share the lobby code with friends, and you\'re in. Steam friends integration allows direct joining. Enemies scale with player count but loot quality improves with more players.' },
  { question: 'What are the classes?', answer: 'There are 3 classes: Tank (frontline bruiser, easiest for beginners), DPS Gunslinger (ranged damage dealer, highest DPS), and Engineer (turret/trap support, most complex). You can switch classes between runs.' },
  { question: 'How many biomes are there?', answer: '6 biomes: Shallow Mines, Fungal Caverns, Magma Chambers, Crystal Mines, Abandoned Mineshaft, and The Deep Core. Each biome has unique enemies, resources, environmental hazards, and a boss.' },
  { question: 'What is the best class for beginners?', answer: 'Tank is the most beginner-friendly class. High HP and defense mean you can make mistakes without dying. Start with Tank, learn enemy patterns, then try Gunslinger or Engineer.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">MineGeon <span className="text-amber-400">Wiki</span></h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">Complete guide hub for the 1-3 player co-op mining roguelite — classes, bosses, crafting, biomes, and more.</p>
        <p className="text-sm text-gray-600 mb-8">PC via Steam · Releases July 28, 2026</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3344910/MineGeon_Renegades/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">Wishlist on Steam</a>
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
