import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Dwarf Delve — release date, demo, price, platforms, gameplay, progression, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Dwarf Delve?',
    answer:
      'Dwarf Delve is a first-person extraction roguelite developed by solo developer Gloom Box (Dante Knoxx) and published by indie.io. You play as a Delveling dwarf descending into procedurally generated mines to collect ores, treasures, and relics. The deeper you go, the richer the rewards — but if the tunnels collapse, you lose everything. It released on Steam on July 27, 2026.',
  },
  {
    question: 'When does Dwarf Delve come out?',
    answer:
      'Dwarf Delve released July 27, 2026 on Steam (PC). A free demo is available now. The game is developed by a solo developer, focusing entirely on the PC release.',
  },
  {
    question: 'Is Dwarf Delve free to play?',
    answer:
      'No. Dwarf Delve is a paid game, released July 27, 2026 at $12.99 (with a 20% launch discount to $10.39 through August 10, 2026). A free demo is available now on Steam so you can try the core gameplay before buying.',
  },
  {
    question: 'Is there multiplayer or co-op?',
    answer:
      'No. Dwarf Delve is single-player only — confirmed by the Steam listing. There is no co-op or multiplayer, and the developer has made no announcement about adding any.',
  },
  {
    question: 'What platforms is Dwarf Delve on?',
    answer:
      'PC via Steam (released July 27, 2026); also listed on Epic Games Store and GOG. Console versions have not been confirmed. Given the solo developer scope, the initial focus is entirely on the PC release.',
  },
  {
    question: 'Is there a demo available?',
    answer:
      'Yes! A free demo is available now on Steam. It includes the core gameplay loop — descend into mines, gather resources, craft supports, and extract. Try the Battlemallet combat, crafting system, and minecart building before buying the full game.',
  },
  {
    question: 'Does demo progress carry over?',
    answer:
      'Not confirmed. The developer has not stated whether demo progress will carry over to the full release. Assume it will not and be pleasantly surprised if it does.',
  },
  {
    question: 'How long is a typical run?',
    answer:
      'No official data exists. Community reports are scarce and unverified — treat any specific run-length numbers you see elsewhere as unconfirmed. The roguelite extraction structure means every run is different.',
  },
  {
    question: 'What makes Dwarf Delve unique?',
    answer:
      'Dwarf Delve combines Minecraft-style blocky visuals with Spelunky-like procedurally generated danger and extraction-roguelite progression. Unlike PvPvE extraction shooters, it\'s purely PvE — the environment is your enemy. The minecart rail-building system and "greed as a survival mechanic" set it apart.',
  },
  {
    question: 'Will there be post-launch content?',
    answer:
      'Unconfirmed in detail. The developer (Gloom Box, a solo studio) has publicly committed to a multi-year content roadmap, but no specific features have been announced. Treat any specific roadmap claims (new biomes, co-op, and so on) as unconfirmed.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'Use the Steam Community forums for Dwarf Delve or the official indie.io Discord server. As a solo developer, Dante Knoxx reads and responds to community feedback directly.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Common questions about Dwarf Delve — gameplay, platforms, progression, and more.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
