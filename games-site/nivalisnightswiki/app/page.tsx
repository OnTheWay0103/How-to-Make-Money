import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started', description: 'New to Nivalis Nights? Learn the core loop — inherit the noodle bar, run your first service, hire staff, and survive your first week in the city of Nivalis.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-07' },
  { title: 'Best Business Guide — Types, Management & Money', description: 'Compare all seven business types — food stalls, noodle bars, stim stores, bars, restaurants and nightclubs — then master staff, upgrades, supply chains, and money-making strategies.', slug: 'best-business-guide', category: 'Business', updated: '2026-08-11' },
  { title: 'NPC Relationships — Friends, Rivals & Romance', description: 'Meet the key citizens of Nivalis, learn how friendships and rivalries shape your business, and how to pursue the game\'s romance options.', slug: 'npc-relationships-guide', category: 'Life Sim', updated: '2026-08-07' },
  { title: 'Fishing Guide — Spots & Best Catches', description: 'Take your private boat out on the canals — every fishing spot, the best catches for profit and gifts, weather effects, and fishing upgrades.', slug: 'fishing-guide', category: 'Activities', updated: '2026-08-07' },
  { title: 'Apartment Customization — Decorating & Upgrades', description: 'Buy and decorate apartments across the city — furniture, lighting, location choices, and how your home affects mood and social standing.', slug: 'apartment-customization-guide', category: 'Life Sim', updated: '2026-08-07' },
  { title: 'Day & Night Cycle & Weather — Time, Curfew & Climate', description: 'How time and climate shape the city — rush hours, the 2 AM curfew, all five weather types, energy price swings, and the optimal daily routine.', slug: 'day-night-cycle-guide', category: 'Life Sim', updated: '2026-08-11' },
];

const FAQ_ITEMS = [
  { question: 'When does Nivalis Nights release?', answer: 'Nivalis Nights launches on September 29, 2026 on PC via Steam. An Epic Games Store release is planned for later. No console versions have been announced yet.' },
  { question: 'Is Nivalis Nights multiplayer?', answer: 'No — Nivalis Nights is a single-player experience. The city of Nivalis is populated by AI-driven citizens with their own schedules, and your relationships with them evolve through single-player interactions.' },
  { question: 'How do I make money fast in Nivalis Nights?', answer: 'The core strategy is mastering your first noodle bar before expanding: watch your inventory, schedule staff around lunch and dinner rushes, set a signature dish, and reinvest profits into upgrades. Later, the energy black-market trade and high-margin nightclubs become the biggest earners. Check our Best Business Guide for the full breakdown.' },
  { question: 'What platforms is Nivalis Nights on?', answer: 'Nivalis Nights launches on PC (Steam) on September 29, 2026, with Epic Games Store support planned. No Nintendo Switch, PlayStation or Xbox versions have been announced.' },
  { question: 'Is there a Nivalis Nights wiki?', answer: 'Yes — you\'re on it! Nivalis Nights Wiki is an unofficial fan resource covering business guides, money-making strategies, NPC relationships, apartment customization, fishing, and the chess tournament. We\'re the most comprehensive guide hub for the game.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0a0f1e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Nivalis Nights <span className="text-cyan-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Unofficial guide hub — business strategies, money-making tips, NPC quests, apartment customization & fishing for the cyberpunk life sim.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launching September 29, 2026 — PC (Steam), Epic Games Store planned</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/1488490/Nivalis_Nights/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-cyan-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
