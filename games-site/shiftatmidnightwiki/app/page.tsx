import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Survive Your First Shift', description: 'New to Shift At Midnight? Learn the core loop — serve customers, check IDs, spot doppelgangers, and survive until dawn.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-29' },
  { title: 'Doppelganger Guide — Spot the Impostor', description: 'Complete breakdown of all doppelganger types, disguises, behavioral tells, and how to use the NET Database to expose them.', slug: 'doppelganger-guide', category: 'Monsters', updated: '2026-07-29' },
  { title: 'Co-op Strategy Guide — Team Up to Survive', description: 'Optimal team roles, communication tips, how to cover entrances, and how to save teammates from doppelganger attacks.', slug: 'coop-strategy-guide', category: 'Co-op', updated: '2026-07-29' },
  { title: 'Entity Survival Guide — Survive Monster Encounters', description: 'How to handle each entity type — escape tactics, safe rooms, entity spawn triggers, and when to fight vs. hide.', slug: 'entity-survival-guide', category: 'Survival', updated: '2026-07-29' },
  { title: 'Enemy Bestiary — All Monsters & Entities', description: 'Every doppelganger and entity type in Shift At Midnight. Attack patterns, weaknesses, detection methods, and lore.', slug: 'enemy-bestiary', category: 'Enemies', updated: '2026-07-29' },
  { title: 'Endings Guide — All Endings & How to Unlock Them', description: 'How to unlock every ending in the 13-night campaign. Choices, survivor outcomes, and hidden endings explained.', slug: 'endings-guide', category: 'Endings', updated: '2026-07-29' },
];

const FAQ_ITEMS = [
  { question: 'What is Shift At Midnight?', answer: 'Shift At Midnight is a 1-3 player co-op horror detective game developed by Fiddlesticks Games. Released July 22, 2026 on Steam and Xbox Game Pass, you work the night shift at a 1990s gas station — serving customers while identifying doppelgangers: shapeshifting monsters that mimic human appearance. The game features a 13-night story campaign and costs $12.99 (32% off launch discount).' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo (with AI assistance) or in online co-op with up to 3 players. The 13-night campaign is fully playable either way. Co-op is recommended for higher difficulty shifts where multiple doppelgangers appear simultaneously.' },
  { question: 'How do you spot doppelgangers?', answer: 'Doppelgangers have subtle behavioral tells: they fail ID checks in the NET Database, exhibit repetitive movements, have distorted reflections, and may flicker under fluorescent lights. You use the NET Database terminal to cross-reference customer identities. Advanced doppelgangers learn to mimic more behaviors, making later shifts increasingly challenging.' },
  { question: 'How many endings are there?', answer: 'There are 4 main endings and 2 secret endings. Your choices throughout the 13-night campaign — which survivors you help, how many doppelgangers you expose, and key story decisions — determine which ending you unlock. A single playthrough takes approximately 10-12 hours.' },
  { question: 'Is it on Xbox Game Pass?', answer: 'Yes. Shift At Midnight is available on Xbox Game Pass (Console and PC) from launch day, July 22, 2026. Game Pass subscribers can play the full game at no additional cost. The Steam version is $12.99 with a 32% launch discount.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Intel i5-8400 / AMD Ryzen 3 3300X, GTX 1060 6GB / RX 580 8GB, 12GB RAM, 25GB SSD. Recommended: Intel i7-10700 / AMD Ryzen 5 3600, RTX 2060 / RX 6600 XT, 16GB RAM, 25GB SSD. The game runs on Unreal Engine 5 with stylized retro-horror visuals.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Shift At Midnight <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the co-op horror detective game by Fiddlesticks Games.
        </p>
        <p className="text-sm text-gray-600 mb-8">Released July 22, 2026 — Steam & Xbox Game Pass</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/4050060/Shift_At_Midnight/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Play Now on Steam
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
