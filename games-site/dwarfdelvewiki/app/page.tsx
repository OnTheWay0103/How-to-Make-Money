import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Your First Descent',
    description: 'New to Dwarf Delve? Learn the core loop — descend into mines, gather ores and relics, craft supports, fight dangers, and extract alive. Everything a new Delveling needs to know.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-07-25',
  },
  {
    title: 'Mining Strategies: How to Maximize Loot',
    description: 'Master the art of dwarven mining. Learn optimal depth strategies, rare ore locations, resource priorities, and when to push deeper versus extract with what you have.',
    slug: 'mining-strategies-guide',
    category: 'Mining',
    updated: '2026-07-25',
  },
  {
    title: 'Best Gear & Equipment Guide',
    description: 'Every tool and equipment upgrade ranked. Battlemallets, lanterns, flares, floodlights, support beams — which upgrades give you the best return on investment.',
    slug: 'best-gear-equipment-guide',
    category: 'Gear',
    updated: '2026-07-25',
  },
  {
    title: 'Perks & Skills Guide: Best Upgrades',
    description: 'Complete breakdown of every perk and skill tree. Learn which upgrades make you faster, hit harder, and carry more — and the optimal unlock order for new players.',
    slug: 'perks-skills-guide',
    category: 'Builds',
    updated: '2026-07-25',
  },
  {
    title: 'Extraction Guide: How to Escape Alive',
    description: 'Master the extraction loop — when to push deeper, when to bail, how to protect your loot, and how to handle collapsing tunnels and the elevator escape.',
    slug: 'extraction-guide',
    category: 'Extraction',
    updated: '2026-07-25',
  },
  {
    title: 'Crafting Guide: Beams, Platforms & Tools',
    description: 'Everything you can craft and when to craft it. Support beams, ladders, platforms, flares, and other survival tools that keep you alive in the deep mines.',
    slug: 'crafting-guide',
    category: 'Crafting',
    updated: '2026-07-25',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Dwarf Delve?',
    answer: 'Dwarf Delve is a first-person extraction roguelite developed by solo developer Gloom Box (Dante Knoxx) and published by indie.io. You play as a Delveling dwarf descending into procedurally generated mines to collect ores, treasures, and relics. The deeper you go, the richer the rewards — but if you stay too long, the tunnels collapse and you lose everything. It launches on Steam on July 27, 2026.',
  },
  {
    question: 'Is Dwarf Delve free to play?',
    answer: 'No. Dwarf Delve is a paid game launching on Steam. The exact price has not been announced yet, but similar indie roguelite games typically range from $14.99 to $19.99 USD. A free demo is currently available on Steam so you can try the core gameplay loop before buying.',
  },
  {
    question: 'Is there co-op or multiplayer?',
    answer: 'Dwarf Delve is primarily a single-player experience. The game focuses on the solo Delveling\'s journey into the deep mines, managing risk versus reward on your own. Co-op multiplayer has not been announced but may be considered based on community feedback post-launch.',
  },
  {
    question: 'What platforms is Dwarf Delve on?',
    answer: 'Dwarf Delve launches on PC via Steam on July 27, 2026. Console versions have not been confirmed. The game is developed by a solo developer, so the initial focus is on the PC Steam release.',
  },
  {
    question: 'Is there a demo available?',
    answer: 'Yes! A free demo is available now on Steam. It lets you experience the core extraction loop — descend into mines, gather resources, fight dangers, and extract. Try the Battlemallet combat, crafting system, and minecart building before the full game launches.',
  },
  {
    question: 'What makes Dwarf Delve different from other extraction games?',
    answer: 'Dwarf Delve combines Minecraft-style blocky visuals with Spelunky-like procedurally generated danger and extraction-roguelite progression. Unlike PvPvE extraction shooters, Dwarf Delve is purely PvE — the environment itself is your enemy. The unique minecart rail-building system and "greed as a survival mechanic" (push deeper for better rewards but risk total loss) set it apart from other games in the genre.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#3a2a0a] to-[#0f0f0f]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Dwarf Delve <span className="text-amber-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the first-person extraction roguelite by Gloom Box.
          Mining strategies, best gear, perks, crafting, enemies — everything you need to survive the deep.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/2237320/Dwarf_Delve/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Wishlist on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            View All Guides →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#3a2a0a]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1008] rounded-lg border border-[#4a3a1a]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">
                {item.question}
              </summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
