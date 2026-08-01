import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started in MineGeon: Renegades', description: 'New to MineGeon? Master the basics — class selection, mining, combat, extraction, and avoiding common beginner mistakes.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-01' },
  { title: 'Classes Guide — Marshall, Trevor & Ari Explained', description: 'Complete breakdown of the three Renegades: Marshall the Tank, Trevor the Gunslinger, and Ari the Engineer. Roles, strengths, and which to pick.', slug: 'classes-guide', category: 'Classes', updated: '2026-08-01' },
  { title: 'Tier List — Class Comparison at Launch', description: 'Honest class comparison for solo and co-op play at launch. No fabricated weapon rankings — what we actually know about the meta so far.', slug: 'tier-list', category: 'Tier List', updated: '2026-08-01' },
  { title: 'Boss Guide — How to Beat Biome Bosses', description: 'Every biome in PAIMO ends in a boss battle. Preparation checklists, co-op roles, and general boss strategies, with confirmed details only.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-01' },
  { title: 'Co-op & Multiplayer Guide — Play With Friends', description: 'How online co-op works for up to 3 players, how to invite friends, best team compositions, and co-op strategies.', slug: 'coop-multiplayer-guide', category: 'Multiplayer', updated: '2026-08-01' },
  { title: 'Gadgets Guide — Grenades, Shields & Drones', description: '150+ gadgets including grenades, energy shields, and combat drones. How gadgets, weapons, and ultimates combine into builds.', slug: 'gadgets-guide', category: 'Gadgets', updated: '2026-08-01' },
];

const FAQ_ITEMS = [
  { question: 'What is MineGeon: Renegades?', answer: 'MineGeon: Renegades is a co-op sci-fi bullet-hell roguelite focused on resource gathering, developed by Kickstone Studio and released on Steam in July 2026. After a failed heist, your crew of Renegades crash-lands on the dying planet PAIMO and descends into its depths to mine minerals, fight the Scavengers, and uncover buried secrets. It supports solo play or online co-op with up to two friends.' },
  { question: 'What are the classes?', answer: 'There are three playable Renegades: Marshall (resilient Tank), Trevor (deadly DPS Gunslinger), and Ari (balanced Engineer). Each has its own stats and ultimate ability. The developer has not published detailed ability lists, so exact skills remain unconfirmed at launch.' },
  { question: 'How does co-op work?', answer: 'MineGeon: Renegades supports solo or online co-op with up to two friends (3 players total). Co-op is online-only through Steam — there is no local co-op or split-screen. Players can also visit each other\'s ships to see their customized interiors.' },
  { question: 'How many biomes are there?', answer: 'Six hand-crafted biomes, with procedurally generated "minegeons" inside them. Each biome culminates in a boss battle. The free demo covers the first biome. Biome names have not been officially published.' },
  { question: 'What happens when you die?', answer: 'The minerals you are carrying are lost for good when you die. That is the core risk/reward loop: push deeper for more valuable minerals, or retreat to the ship and trade what you have for permanent upgrades. Your ship, upgrades, and other long-term progression are not lost.' },
  { question: 'What is the best class for beginners?', answer: 'Marshall, the Tank, is the most forgiving class for new players — his resilient stats let you survive mistakes while you learn enemy patterns and extraction timing. Trevor and Ari are both viable, but reward more game knowledge.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">MineGeon <span className="text-amber-400">Wiki</span></h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">Complete guide hub for the co-op sci-fi bullet-hell mining roguelite — classes, bosses, gadgets, biomes, and more.</p>
        <p className="text-sm text-gray-600 mb-8">PC via Steam · Out now (released July 30, 2026)</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3227240/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">View on Steam</a>
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
