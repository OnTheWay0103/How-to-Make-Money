import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Getting Started',
    description: 'New to Echoes of Mystralia? Learn the basics of spell crafting, Memories, Relics, Lotus progression, and what to do in your first few hours.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-07-22',
  },
  {
    title: 'Spell Crafting Guide: Complete System Breakdown',
    description: 'Master the spell crafting system — fire, ice, and lightning elements, spell forms, Memory modifiers, and how to create millions of unique combinations.',
    slug: 'spell-crafting-guide',
    category: 'Combat',
    updated: '2026-07-22',
  },
  {
    title: 'Best Spell Builds & Combinations',
    description: 'Top-tier spell combinations for maximum damage, crowd control, and survivability. Optimized builds for every playstyle and Guardian encounter.',
    slug: 'best-spell-builds',
    category: 'Builds',
    updated: '2026-07-22',
  },
  {
    title: 'All 110 Memories Guide',
    description: 'Complete catalog of all Memories — where to find them, what each Memory does, and how to combine them for the strongest spell effects.',
    slug: 'memories-guide',
    category: 'Collection',
    updated: '2026-07-22',
  },
  {
    title: 'Relics Guide: Best Relics & Effects',
    description: 'Every Relic cataloged with effects, rarity tiers, and build synergies. Learn which Relics to prioritize for your spell crafting build.',
    slug: 'relics-guide',
    category: 'Items',
    updated: '2026-07-22',
  },
  {
    title: 'Guardian Boss Guide: All Boss Strategies',
    description: 'Complete boss guide covering all 3 Guardians — Therakan of Ash Forest and more. Attack patterns, weaknesses, and spell loadout recommendations.',
    slug: 'boss-guide',
    category: 'Bosses',
    updated: '2026-07-22',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Echoes of Mystralia?',
    answer: 'Echoes of Mystralia is an action-heavy spellcrafting ARPG roguelite developed by Borealys Games. You play as Mazarim, a Watcher protecting the Cycle of Memories. The game features a unique spell crafting system where you combine fire, ice, and lightning elements with Memory modifiers to create millions of spell combinations. It enters Steam Early Access on August 11, 2026.',
  },
  {
    question: 'Is Echoes of Mystralia free to play?',
    answer: 'No. Echoes of Mystralia is a paid Early Access title on Steam. Pricing will be announced closer to the August 11, 2026 release date. A free demo is currently available on Steam featuring 4 core spells, 50 Memories, 15 Relics, and the first region.',
  },
  {
    question: 'Can I play Echoes of Mystralia solo?',
    answer: 'Yes. Echoes of Mystralia is designed as a single-player experience. You control Mazarim throughout each run, customizing your spell loadout and progressing through regions solo.',
  },
  {
    question: 'How does the spell crafting system work?',
    answer: 'Spell crafting is the core mechanic. You start with 12 spell forms (base templates) and collect Memories from defeated enemies. Memories act as modifiers — you slot them into spells to change behavior, damage type, and effects. The positioning of components determines the output. With fire, ice, and lightning elements plus 110+ Memories, there are millions of possible spell combinations.',
  },
  {
    question: 'What are Memories and how do I get them?',
    answer: 'Memories are spell modifiers dropped by defeated enemies throughout your runs. They can change a spell\'s element, add chain effects, increase area of effect, summon projectiles, and more. At Early Access launch, there are 110 Memories to collect across 3 regions. You keep collected Memories between runs for permanent spell customization.',
  },
  {
    question: 'When is the full release?',
    answer: 'Echoes of Mystralia enters Steam Early Access on August 11, 2026 with 110 Memories, 3 regions, 3 Guardians, and 12 spell forms. The full release is expected later in 2026. Borealys Games has confirmed additional content will be added throughout Early Access.',
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
          Spell builds, all 110 Memories, Relics, Guardian bosses — everything you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/974480/Echoes_of_Mystralia/"
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
