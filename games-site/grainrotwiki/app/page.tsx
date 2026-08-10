import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: First Hour in the Ruins',
    description: 'New to Grain Rot? Learn the core loop — possess vessels, scavenge loot, fight Corrupted, and extract alive. Everything a new Spark needs to know.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-08-11',
  },
  {
    title: 'All Enemies Guide: Every Corrupted Type',
    description: 'The Corrupted explained: the confirmed detection model, the 9 demo enemy types, and the combat principles that hold against any of them.',
    slug: 'all-enemies-guide',
    category: 'Enemies',
    updated: '2026-08-11',
  },
  {
    title: 'Best Vessels & Loadouts Guide',
    description: 'How to evaluate vessels and constructs without a verified tier list — the confirmed build framework and loadout principles.',
    slug: 'best-vessels-guide',
    category: 'Builds',
    updated: '2026-08-11',
  },
  {
    title: 'Co-op Guide: Team Strategies for Up to 4 Players',
    description: 'How to coordinate roles, share the haul, protect the Keeper, and survive the game\'s confirmed chaos mechanics — communication tips and team strategy.',
    slug: 'co-op-guide',
    category: 'Co-op',
    updated: '2026-08-11',
  },
  {
    title: 'Extraction Guide: How to Extract Successfully',
    description: 'Master the extraction loop — when to push deeper, when to bail, and how to protect the haul on the way out.',
    slug: 'extraction-guide',
    category: 'Extraction',
    updated: '2026-08-11',
  },
  {
    title: 'Outpost Guide: Base Building & Progression',
    description: 'What base building actually means in Grain Rot: the Sanctuary Outpost\'s confirmed systems — stat upgrades, rescued survivors, upgradeable rooms — and upgrade priorities.',
    slug: 'outpost-upgrade-guide',
    category: 'Building',
    updated: '2026-08-11',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Grain Rot?',
    answer: 'Grain Rot is a horror co-op extraction builder developed by Beck & Branch Games and published by Neem Interactive. You play as a "Living Spark" inhabiting fragile wooden vessels, descending into procedurally shifting underground ruins with up to 3 friends to scavenge loot, fight or avoid Corrupted enemies, and extract before the Rot consumes you. It launched on Steam on August 7, 2026.',
  },
  {
    question: 'Is Grain Rot free to play?',
    answer: 'No. Grain Rot is a paid game on Steam — $9.99, with a 10% launch-week discount to $8.99 at launch. A free demo is available on Steam with 20+ unlockable constructs and 3 biomes.',
  },
  {
    question: 'How many players can play co-op?',
    answer: 'Grain Rot supports up to 4 players in online co-op. You and your friends each control a Living Spark that can possess different wooden vessels. Teamwork is essential — but the game also encourages friendly chaos with physics-driven trolling mechanics.',
  },
  {
    question: 'Can I play Grain Rot solo?',
    answer: 'Yes. Grain Rot is fully playable solo — single-player is confirmed. The experience is designed around co-op chaos, but solo play emphasizes stealth and careful resource management rather than team tactics.',
  },
  {
    question: 'What platforms is Grain Rot on?',
    answer: 'Grain Rot launched on PC via Steam on August 7, 2026. Console versions (PS5, Xbox Series X|S) have not been announced.',
  },
  {
    question: 'Is there a demo available?',
    answer: 'Yes! A free demo is available on Steam. It includes 3 underground biomes, 9 enemy types, over 20 unlockable constructs and weapons, upgradeable Outpost rooms, dungeon modifiers, and cosmetics. Demo progress did not carry over to the full game.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#2a0a0a] to-[#0f0f0f]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Grain Rot <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the horror co-op extraction builder by Beck & Branch Games.
          Vessels, constructs, enemies, biomes — everything you need to survive the Rot.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/4450620/GRAIN_ROT/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get it on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm"
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
            className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
          >
            View All Guides →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#2a0a0a]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a0a0a] rounded-lg border border-[#3a1a1a]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-red-400 transition-colors select-none">
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
