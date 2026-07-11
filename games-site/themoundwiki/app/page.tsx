import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: First Expeditions', description: 'New to The Mound? Master the core loop — accept contracts, equip wisely, manage sanity, extract alive.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-14' },
  { title: 'All Weapons Guide — Loadout & Strategy', description: 'Complete breakdown of Matchlock, Flintlock, Crossbow, Francesca Axe, Machete, and Oil Lamp. Best loadouts for every role.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-07-14' },
  { title: 'Sanity & Madness System — Complete Guide', description: 'How the insanity system works, all hallucination types, Mask of Nyarlathotep tactics, and team communication strategies.', slug: 'sanity-guide', category: 'Mechanics', updated: '2026-07-14' },
  { title: 'Enemy Guide — All Y\'m-bhi & Creature Types', description: 'Every enemy in the jungle: Y\'m-bhi variants, ghost-bats, vine creatures, and giant centipedes. Attack patterns and counters.', slug: 'enemy-guide', category: 'Enemies', updated: '2026-07-14' },
  { title: 'Contracts & Progression Guide', description: 'How contracts work, reward types, ox cart management, and how to maximize XP and Tokens per expedition.', slug: 'contracts-guide', category: 'Progression', updated: '2026-07-14' },
  { title: 'Co-op Strategy — 4-Player Team Guide', description: 'Optimal squad composition, loadout distribution, proximity chat tactics, and how to save teammates from madness.', slug: 'coop-strategy-guide', category: 'Co-op', updated: '2026-07-14' },
];

const FAQ_ITEMS = [
  { question: 'What is The Mound: Omen of Cthulhu?', answer: 'The Mound is a 1-4 player co-op PvE extraction horror game developed by ACE Team and published by NACON. Set in 1652 Chile, you play as conquistador treasure hunters descending into a cursed Lovecraftian jungle. It launches July 15, 2026 on PC (Steam), PS5, and Xbox Series X|S for $29.99.' },
  { question: 'Is it single-player or multiplayer?', answer: 'Both. You can play solo with AI companions (or true solo) or in online co-op with up to 4 players. Contracts are balanced for co-op, so solo play is "a considerable undertaking."' },
  { question: 'Do characters have different classes or skills?', answer: 'No. The four characters are purely cosmetic — like Left 4 Dead. Your role is defined entirely by the weapons and equipment you bring on each expedition.' },
  { question: 'What makes this different from other extraction games?', answer: 'The sanity/madness system. Each player experiences independent hallucinations — you may see a safe path while your teammate sees a spike pit. Proximity voice chat is your lifeline for distinguishing reality from madness.' },
  { question: 'Do guns work in the rain?', answer: 'No. Rain extinguishes matchlock and flintlock fuses, rendering firearms useless. You must find shelter or switch to melee/crossbow. Moisture also makes oil lamps flicker.' },
  { question: 'Is there crossplay?', answer: 'Yes. Full crossplay between PC, PS5, and Xbox Series X|S is supported.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The Mound <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the Lovecraftian co-op extraction horror by ACE Team.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launching July 15, 2026 — PC, PS5, Xbox Series X|S</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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
