import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Release Date & Early Access Guide', description: 'When does Delverium launch? EA date, platforms, price, system requirements and the roadmap — everything about the September 22, 2026 release.', slug: 'release-date-ea-guide', category: 'Release Info', updated: '2026-08-02' },
  { title: 'Demo Guide — Download & First Steps', description: 'How to download the free Delverium demo, what content it includes, what carries over, and first-hour tips for new players.', slug: 'demo-guide', category: 'Beginner', updated: '2026-08-02' },
  { title: 'Co-op Multiplayer Guide — 1-8 Players', description: 'Online co-op for up to 8 players, 4-player split-screen, hosting, joining friends and drop-in/drop-out explained.', slug: 'coop-multiplayer-guide', category: 'Co-op', updated: '2026-08-02' },
  { title: 'Crafting Recipes Reference', description: 'The crafting system explained — tool tiers, food, weapons, armor and building materials, with a recipe reference table.', slug: 'crafting-recipes-chart', category: 'Crafting', updated: '2026-08-02' },
  { title: 'Melee Combat Build Guide', description: 'Build the frontline fighter: melee weapons, armor priority, and combat tips for Delverium\'s dungeon-fighting core loop.', slug: 'melee-combat-build-guide', category: 'Builds', updated: '2026-08-02' },
  { title: 'Dungeons & Bosses Reference', description: 'What we know about Delverium dungeons, the demo\'s world boss, and boss strategies — plus what to expect at EA launch.', slug: 'dungeons-bosses-chart', category: 'Dungeons', updated: '2026-08-02' },
];

const FAQ_ITEMS = [
  { question: 'What is Delverium?', answer: 'Delverium is a 1-8 player co-op survival sandbox RPG developed and published by Sagestone Games. Explore a procedurally generated world, gather resources, build shelters, farm, craft, and descend into dangerous dungeons. It launches in Steam Early Access on September 22, 2026.' },
  { question: 'When is the Delverium release date?', answer: 'Delverium launches in Steam Early Access on September 22, 2026 for PC. The Early Access period is expected to last about two years, adding new biomes, bosses, NPCs and features based on player feedback.' },
  { question: 'Is Delverium free to play?', answer: 'No — Delverium is a paid Early Access game on Steam. The exact price has not been announced yet, but the developers have stated the Early Access price will be lower than the final 1.0 price. A free demo is available now.' },
  { question: 'How many players can play together?', answer: 'Up to 8 players in online co-op, with 4-player local split-screen co-op also supported. The game supports drop-in/drop-out play and can be played solo.' },
  { question: 'Is there a Delverium demo?', answer: 'Yes. A free demo has been on Steam since February 7, 2025. A major demo update (February 2026) added 8-player online co-op, a world boss, and more content. It offers roughly 1-2 hours of early-game content.' },
  { question: 'What platforms is Delverium on?', answer: 'Delverium is confirmed for PC via Steam. Steam Deck support is confirmed. Console versions (Switch, Xbox, PlayStation) and mobile have not been announced as of August 2026.' },
  { question: 'What makes Delverium different from Terraria or Core Keeper?', answer: 'It shares the gather-build-farm-craft-dungeon loop, but Delverium emphasizes 1-8 player online co-op plus 4-player split-screen couch play, a procedurally generated world, recruitable NPCs, and a mystery story around "the Faults" hidden in the dungeons.' },
  { question: 'Will my demo progress carry over?', answer: 'As of August 2026, save carry-over from the demo to the full game has not been officially confirmed. We will update this as soon as Sagestone Games announces details.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0a1a0f] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Delverium <span className="text-emerald-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the co-op survival sandbox RPG by Sagestone Games.
        </p>
        <p className="text-sm text-gray-600 mb-8">Steam Early Access — September 22, 2026</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2710040/Delverium/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/release-date-ea-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Read the Release Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-emerald-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
