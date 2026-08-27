import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — First Steps in Gildenarch', description: 'New to Crimson Moon? Learn the core loop — choose your loadout, run Incursions, purify gear, and take on the Wards as a Nephilim.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-28' },
  { title: 'Co-op Complete Guide — Shared Life Pool, Revive & Crossplay', description: 'How co-op works in Crimson Moon: inviting a friend, the shared life pool, revive mechanics, dynamic difficulty, and whether you can solo.', slug: 'coop-multiplayer-guide', category: 'Co-op', updated: '2026-08-28' },
  { title: 'Release Date, Price & Editions — How to Buy', description: 'Crimson Moon launches September 1, 2026 for $19.99 ($29.99 Deluxe) on PC, PS5, and Xbox. Editions, platforms, Game Pass status, and where to buy.', slug: 'price-platforms', category: 'Info', updated: '2026-08-28' },
  { title: 'Builds Guide — No Classes, Boons + Weapon Arts', description: 'Crimson Moon has no classes. Learn how Equipment, Boons, and Weapon Arts combine into a build — and what the official Builds overview trailer revealed.', slug: 'builds-guide', category: 'Builds', updated: '2026-08-28' },
  { title: 'Dead Gods & World Bosses — All Bosses Overview', description: 'Three Wards, three world bosses, and the final Dead Gods encounter. Everything confirmed so far about Crimson Moon boss structure and its metal soundtrack.', slug: 'dead-gods-boss-guide', category: 'Bosses', updated: '2026-08-28' },
  { title: 'Incursions Guide — How 15–45 Minute Runs Work', description: 'Incursions are Crimson Moon\'s repeatable core loop: dynamic maps, enemy configurations, and the rewards that feed your permanent arsenal.', slug: 'incursions-guide', category: 'Mechanics', updated: '2026-08-28' },
];

const FAQ_ITEMS = [
  { question: 'What is Crimson Moon?', answer: 'Crimson Moon is a soulslike action RPG developed and published by ProbablyMonsters — the studio founded by Harold Ryan, former CEO of Bungie. Set in the fallen gothic city of Gildenarch, you play as a Nephilim clearing three Wards and taking on the Dead Gods. It launches September 1, 2026 on PC (Steam + Epic Games Store), PS5, and Xbox Series X|S.' },
  { question: 'How much does Crimson Moon cost?', answer: 'The Standard Edition is $19.99. The Deluxe Edition is $29.99 and includes the base game plus upcoming content expansions and two cosmetic/weapon DLC packs.' },
  { question: 'Can I play Crimson Moon solo?', answer: 'Yes. Co-op is fully optional — the game is designed to be played solo or with one partner. Difficulty scales dynamically with player count.' },
  { question: 'Is Crimson Moon co-op?', answer: 'Yes — Crimson Moon supports 2-player online co-op with a shared life pool and revive mechanics. Whether it supports local/couch co-op and crossplay had not been fully confirmed as of August 28, 2026 [Unconfirmed].' },
  { question: 'Does Crimson Moon have classes?', answer: 'No. There are no classes. Your build is defined entirely by the equipment, Boons, and Weapon Arts you combine — the official Builds overview trailer emphasized freedom of combination and co-op coordination of Weapon Arts.' },
  { question: 'What are Incursions?', answer: 'Incursions are Crimson Moon\'s repeatable mission type: 15–45 minute runs with dynamic maps and enemy configurations. Gear found in runs can be purified to become a permanent part of your arsenal.' },
  { question: 'Who is the final boss?', answer: 'The three Wards each hold a world boss; defeating all three unlocks the final boss encounter, the Dead Gods. The main antagonist is the vampire lord Solomon Moore, and a corrupting entity called Hellgrowth spreads through Gildenarch.' },
  { question: 'How long is Crimson Moon?', answer: 'Official playtime estimates had not been published as of August 28, 2026 [Unconfirmed]. Incursions are designed to be repeatable, so the core loop adds significant replay time beyond the main Ward progression.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Crimson Moon <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the soulslike action RPG by ProbablyMonsters — set in the fallen gothic city of Gildenarch.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launching September 1, 2026 — PC, PS5, Xbox Series X|S</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/4317690/Crimson_Moon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-red-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
