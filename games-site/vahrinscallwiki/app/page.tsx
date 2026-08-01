import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide — Getting Started',
    description: "New to Vahrin's Call? The classless progression system, first-hour priorities, combat expectations, and what is — and isn't — confirmed about the game.",
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-08-01',
  },
  {
    title: 'Best Builds Guide — Confirmed Directions',
    description: 'Build advice grounded in confirmed systems: developer-endorsed archetypes and practical combinations of weapons, magic, traps, and alchemy.',
    slug: 'best-builds-guide',
    category: 'Builds',
    updated: '2026-08-01',
  },
  {
    title: 'Attributes & Stats Guide',
    description: 'What is confirmed about stats and progression: the use-based skill system, Spell Mastery, stamina, and which attribute claims are unverified.',
    slug: 'attributes-stats-guide',
    category: 'Mechanics',
    updated: '2026-08-01',
  },
  {
    title: 'All Weapons Guide — Confirmed Types',
    description: 'Confirmed weapon styles — melee, bows, magic, traps, thrown potions — and how the use-based skill system progresses them.',
    slug: 'weapons-guide',
    category: 'Gear',
    updated: '2026-08-01',
  },
  {
    title: 'Magic & Spells Complete Guide',
    description: 'How spells are learned and upgraded: Spell Mastery, Skill Books, and customisation of damage, range, and casting speed.',
    slug: 'magic-spells-guide',
    category: 'Magic',
    updated: '2026-08-01',
  },
  {
    title: 'Alchemy & Crafting Guide',
    description: 'The confirmed crafting systems: throwing potions at enemies, trap deployment while moving, and the alchemy skill path.',
    slug: 'alchemy-crafting-guide',
    category: 'Crafting',
    updated: '2026-08-01',
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Vahrin's Call?",
    answer: "Vahrin's Call is a narrative-driven, classless action-RPG developed by Titan Roc, a 7-person indie studio. Set in the war-torn city of Vahrin, you play as a mercenary fighting insect-like khraiax creatures. It launched on Steam on July 27, 2026, with full English voice acting and a handcrafted world.",
  },
  {
    question: "Is Vahrin's Call free to play?",
    answer: "No. Vahrin's Call is a paid title priced at $34.99 USD on Steam, with a 10% launch discount through early August 2026.",
  },
  {
    question: "Does Vahrin's Call have multiplayer or co-op?",
    answer: "No. Vahrin's Call is a single-player experience only. There is no co-op, multiplayer, or online component.",
  },
  {
    question: "How does the classless system work?",
    answer: "There are no preset classes. Skills improve through use — practice a weapon or school of magic and it grows, Elder Scrolls-style. Skill Books scattered across the world are needed for full upgrades, and spells upgrade via the 'Spell Mastery' system. You can switch playstyles at any point, per the official FAQ.",
  },
  {
    question: "What are the best builds for beginners?",
    answer: "There is no official tier list — any ranking online is invented. The developers' own examples point to hybrids: 'a nimble-footed archer flinging fireballs between arrows' and 'an axe-wielding whirlwind of death.' Since skills grow through use and nothing is permanent, pick a primary style you enjoy, add one secondary system, and commit. See the Best Builds Guide for details.",
  },
  {
    question: "How long is Vahrin's Call?",
    answer: "The official FAQ says an average playthrough is 15-30 hours. Launch aggregate data shows about 22 hours average playtime, with roughly 20% of players exceeding 35 hours through side content.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Vahrin&apos;s Call <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the classless action-RPG by Titan Roc.
          Best builds, weapons, magic, alchemy, bosses, skill books — everything you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/951770/Forsaken_Realms_Vahrins_Call/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Play on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm"
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
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a0a0a]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a0a0a] rounded-lg border border-[#2a1a1a]">
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
