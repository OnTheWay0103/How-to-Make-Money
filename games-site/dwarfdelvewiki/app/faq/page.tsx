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
      'Dwarf Delve is a first-person extraction roguelite developed by solo developer Gloom Box (Dante Knoxx) and published by indie.io. You play as a Delveling dwarf descending into procedurally generated mines to collect ores, treasures, and relics. The deeper you go, the richer the rewards — but if the tunnels collapse, you lose everything. It launches on Steam on July 27, 2026.',
  },
  {
    question: 'When does Dwarf Delve come out?',
    answer:
      'July 27, 2026 on Steam (PC). A free demo is available now. The game is developed by a solo developer, focusing entirely on the PC release.',
  },
  {
    question: 'Is Dwarf Delve free to play?',
    answer:
      'No. Dwarf Delve is a paid game. The exact price has not been announced but is expected to be $14.99-$19.99 USD. A free demo is available now on Steam so you can try the core gameplay before buying.',
  },
  {
    question: 'Is there multiplayer or co-op?',
    answer:
      'Dwarf Delve is a single-player experience. Co-op has not been announced but is the most requested feature. The developer may consider it post-launch if the game performs well.',
  },
  {
    question: 'What platforms is Dwarf Delve on?',
    answer:
      'PC (Steam) only at launch. Console versions have not been confirmed. Given the solo developer scope, the initial focus is entirely on the PC release.',
  },
  {
    question: 'Is there a demo available?',
    answer:
      'Yes! A free demo is available now on Steam. It includes the core gameplay loop — descend into mines, gather resources, fight enemies, craft supports, and extract. Try the Battlemallet combat, crafting system, and minecart building before the full game launches.',
  },
  {
    question: 'Does demo progress carry over?',
    answer:
      'Not confirmed. The developer has not stated whether demo progress will carry over to the full release. Assume it will not and be pleasantly surprised if it does.',
  },
  {
    question: 'How long is a typical run?',
    answer:
      'A safe run to the Upper or Middle Mines takes 15-25 minutes. Deep Mine and Abyss runs can take 30-60 minutes. The roguelite extraction structure means every run is different.',
  },
  {
    question: 'What makes Dwarf Delve unique?',
    answer:
      'Dwarf Delve combines Minecraft-style blocky visuals with Spelunky-like procedurally generated danger and extraction-roguelite progression. Unlike PvPvE extraction shooters, it\'s purely PvE — the environment is your enemy. The minecart rail-building system and "greed as a survival mechanic" set it apart.',
  },
  {
    question: 'Will there be post-launch content?',
    answer:
      'Yes. The developer has shared a rough roadmap including new biomes, community-requested features, and possibly co-op. All updates will be free — no microtransactions.',
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
