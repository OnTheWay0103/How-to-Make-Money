import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Nivalis Nights — release date, price, platforms, system requirements, business mechanics, fishing, romance, and more.',
};

const FAQ_ITEMS = [
  { question: 'When does Nivalis Nights release?', answer: 'Nivalis Nights launches on September 29, 2026 on PC via Steam. An Epic Games Store release is planned for later. No console versions have been announced yet.' },
  { question: 'Is Nivalis Nights multiplayer?', answer: 'No — Nivalis Nights is a single-player experience. The city of Nivalis is populated by 135 AI-driven citizens with their own schedules, and your relationships with them evolve through single-player interactions.' },
  { question: 'How do I make money fast in Nivalis Nights?', answer: 'The core strategy is mastering your first noodle bar before expanding: watch your inventory, schedule staff around lunch and dinner rushes, set a signature dish, and reinvest profits into upgrades. Later, the energy black-market trade and high-margin nightclubs become the biggest earners. Check our Best Business Guide for the full breakdown.' },
  { question: 'What platforms is Nivalis Nights on?', answer: 'Nivalis Nights launches on PC (Steam) on September 29, 2026, with Epic Games Store support planned. No Nintendo Switch, PlayStation or Xbox versions have been announced.' },
  { question: 'Is there a Nivalis Nights wiki?', answer: 'Yes — you\'re on it! Nivalis Nights Wiki is an unofficial fan resource covering business guides, money-making strategies, NPC relationships, apartment customization, fishing, and the chess tournament. We\'re the most comprehensive guide hub for the game.' },
  { question: 'How much does Nivalis Nights cost?', answer: 'The official price has not been confirmed yet. Based on comparable indie life-sim titles from ION LANDS and 505 Games, expect a mid-range price (roughly $25–$40 USD range). We\'ll update this page as soon as the price is announced.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10/11 64-bit, AMD/Intel CPU, 16 GB RAM, dedicated GPU with 6 GB VRAM, DirectX 11, 30 GB storage. Recommended: Windows 10/11 64-bit, AMD/Intel CPU, 16 GB RAM, dedicated GPU with 8 GB VRAM (e.g., GTX 2070 or newer), DirectX 12, SSD, 30 GB storage.' },
  { question: 'How long is Nivalis Nights?', answer: 'No official playtime estimate has been given yet. Given the scope — seven business types, 135 NPCs, apartment customization, fishing, and a chess tournament — expect dozens of hours to build your empire and explore the city. We\'ll update this with verified estimates after launch.' },
  { question: 'What business types can I run?', answer: 'Seven: food stalls, noodle bars, ramen bars, stim stores, bars, restaurants, and nightclubs. You start with an inherited noodle bar and can expand to other venues as you earn Achievement Points.' },
  { question: 'Can I fish in Nivalis Nights?', answer: 'Yes. You own a private boat, and fishing from it is one of the main activities — catches can be sold, cooked into menu items, or given as gifts to NPCs. Weather affects which fish are available.' },
  { question: 'Is there romance in Nivalis Nights?', answer: 'Yes. The game\'s marketing promises you can "find love" in Nivalis. Romance is one branch of the broader relationship system, alongside friendships and rivalries, and can unlock new storylines and gameplay options.' },
  { question: 'Is there a demo?', answer: 'No public demo has been announced as of August 2026. We\'ll update this page immediately if ION LANDS or 505 Games releases one before the September 29 launch.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Everything you need to know about Nivalis Nights — release date, price, platforms, system requirements, business mechanics, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
