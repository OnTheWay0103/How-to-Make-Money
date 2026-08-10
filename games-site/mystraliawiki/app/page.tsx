import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Getting Started',
    description: 'New to Echoes of Mystralia? Learn the basics of spell crafting, Memories, and what to do in your first hours of Early Access.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-08-11',
  },
  {
    title: 'Spell Crafting Guide: Complete System Breakdown',
    description: 'Master the spell crafting system — 7 elements, 16 starting spells, and 100+ Memories, and how to create millions of unique combinations.',
    slug: 'spell-crafting-guide',
    category: 'Combat',
    updated: '2026-08-11',
  },
  {
    title: 'Best Spell Builds & Combinations',
    description: 'Planning loadouts in Early Access — the confirmed crafting fundamentals, demo-tested combos, and a framework for evaluating builds as the meta forms.',
    slug: 'best-spell-builds',
    category: 'Builds',
    updated: '2026-08-11',
  },
  {
    title: 'Memories Guide: The Memory Economy',
    description: 'The 100+ Memories at launch (50 in the demo) — how harvesting, reordering, and combining works, confirmed facts only.',
    slug: 'memories-guide',
    category: 'Collection',
    updated: '2026-08-11',
  },
  {
    title: 'Relics Guide: Confirmed & TBD',
    description: '40+ Relics confirmed (per the official Steam page) — how passive items round out a build, and what stays TBD in Early Access.',
    slug: 'relics-guide',
    category: 'Systems',
    updated: '2026-08-11',
  },
  {
    title: 'Enemy & Guardian Boss Guide',
    description: 'Guardian and Elite encounters — Therakan\'s demo-verified patterns, elite pressure, and what\'s confirmed about region-heart bosses.',
    slug: 'boss-guide',
    category: 'Bosses',
    updated: '2026-08-11',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Echoes of Mystralia?',
    answer: 'Echoes of Mystralia is an action-heavy spellcrafting ARPG roguelite developed by Borealys Games. You play as Mazarim, a Watcher protecting the Cycle of Memories. The game features a unique spell crafting system where you combine the game\'s 7 elements with Memories harvested from enemies to create millions of spell combinations. It launched into Steam Early Access on August 11, 2026.',
  },
  {
    question: 'Is Echoes of Mystralia free to play?',
    answer: 'No. Echoes of Mystralia is a paid Early Access title on Steam, and its price is expected to rise at the 1.0 release (per the Steam page). A free demo is available on Steam featuring 4 core spells, 50 Memories, and the first region. 40+ Relics are confirmed — see the Relics Guide for what\'s verified and what stays TBD.',
  },
  {
    question: 'Can I play Echoes of Mystralia solo?',
    answer: 'Yes. Echoes of Mystralia is designed as a single-player experience. You control Mazarim throughout each run, customizing your spell loadout and progressing through regions solo.',
  },
  {
    question: 'How does the spell crafting system work?',
    answer: 'Spell crafting is the core mechanic. You start with 16 starting spells (base templates; 4 in the demo) and collect Memories from defeated enemies. Memories are reordered and combined to shape each spell — placement changes what the spell does, with fire next to ice becoming steam as the official example. With 7 elements and 100+ Memories, there are millions of possible spell combinations.',
  },
  {
    question: 'What are Memories and how do I get them?',
    answer: 'Memories are the components dropped by defeated enemies throughout your runs. Reordering and combining them changes what a spell does — official examples include fire next to ice becoming steam, and lightning behind a homing component chasing enemies. At Early Access launch there are 100+ Memories to collect across 3 regions (50 in the demo). You keep collected Memories between runs.',
  },
  {
    question: 'When is the full release?',
    answer: 'Echoes of Mystralia launched into Steam Early Access on August 11, 2026 with 100+ Memories, 3 regions, and 16 starting spells. Borealys Games has described an Early Access phase of about a year on the way to 1.0, with additional content added throughout, and the price expected to rise at 1.0 (per the Steam page).',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Echoes of Mystralia <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the spellcrafting ARPG roguelite by Borealys Games.
          Spell builds, 100+ Memories, Guardian boss strategies — everything you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com"
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
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
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
