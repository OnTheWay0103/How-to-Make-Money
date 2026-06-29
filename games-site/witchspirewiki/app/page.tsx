import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: First 5 Hours',
    description: 'New to Witchspire? This guide covers the first 5 hours, resource priorities, common mistakes, and fastest progression path.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-06-29',
  },
  {
    title: 'Best Starting Coven Guide',
    description: 'Complete breakdown of all 6 Coven classes with solo and co-op rankings. Pick the right class for your playstyle.',
    slug: 'best-coven-guide',
    category: 'Classes',
    updated: '2026-06-29',
  },
  {
    title: 'How to Unlock Flight & Broom Guide',
    description: 'Step-by-step guide to unlocking your Broom and activating Flight Pillars across all regions.',
    slug: 'flight-unlock-guide',
    category: 'Exploration',
    updated: '2026-06-29',
  },
  {
    title: 'All Familiars Guide: Locations & Tips',
    description: 'Complete database of 25+ familiars with element types, spawn locations, rarity tiers, and catching strategies.',
    slug: 'all-familiars-guide',
    category: 'Familiars',
    updated: '2026-06-29',
  },
  {
    title: 'Hearth Upgrade Guide',
    description: 'Every Hearth tier unlock requirement, material checklist, and base building strategy explained.',
    slug: 'hearth-upgrade-guide',
    category: 'Building',
    updated: '2026-06-29',
  },
  {
    title: 'Main Quest Walkthrough (Act I & II)',
    description: 'Complete story walkthrough covering key collection, boss encounters, and region progression order.',
    slug: 'main-quest-walkthrough',
    category: 'Walkthrough',
    updated: '2026-06-29',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Witchspire?',
    answer: 'Witchspire is an open-world co-op survival RPG developed by Envar Games. You join a magical Coven, collect and train Familiars, build your base, and explore a hand-crafted fantasy world. It launched in Steam Early Access on June 10, 2026.',
  },
  {
    question: 'Is Witchspire free to play?',
    answer: 'No. Witchspire is a paid Early Access title priced at $22.99 USD on Steam, with a 15% launch discount currently available.',
  },
  {
    question: 'Can I play Witchspire solo?',
    answer: 'Yes. Witchspire is fully playable solo. Enemy scaling adapts to party size, and certain Covens like Wildroots and Cloudpiercers are particularly well-suited for solo play.',
  },
  {
    question: 'How many players can play co-op?',
    answer: 'Witchspire supports up to 4 players in online co-op by default, with some hosts able to support up to 6 depending on hardware. Progress is shared within the host\'s world.',
  },
  {
    question: 'What are the best Covens for beginners?',
    answer: 'Cloudpiercers (Spellblade + Lux) and Wildroots (Wand + Nature) are the most beginner-friendly. Cloudpiercers offer high damage with simple combos, while Wildroots provide healing and survivability.',
  },
  {
    question: 'When is the full release?',
    answer: 'Envar Games has announced a roadmap extending into 2027. The game is expected to remain in Early Access for approximately 12-18 months.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Witchspire <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the co-op survival RPG by Envar Games.
          Classes, familiars, bosses, crafting — everything you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/witchspire"
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
