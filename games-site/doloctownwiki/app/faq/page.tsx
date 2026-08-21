import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Doloc Town — release date, platforms, price, save system, crops, fishing, drones, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Doloc Town?',
    answer:
      'Doloc Town is a cozy, side-scrolling post-apocalyptic farming simulator developed by RedSaw Games and published by Logoi Games. You play a young scavenger who builds a vertical farm in the settlement of Doloc Town, growing crops, fishing, raising animals, and automating the farm while surviving acid rain, heat waves, and storms. It has been described as a blend of Stardew Valley, Fallout, and Terraria.',
  },
  {
    question: 'When did Doloc Town release?',
    answer:
      'Doloc Town entered Steam Early Access on May 8, 2025. The full 1.0 version launched on August 6, 2026, adding the Old City Ruins area, the conclusion of the main story, the farming automation (drone) system, new tools, and additional language support (Japanese, Korean, Russian, French, German, and Brazilian Portuguese added to English, Simplified Chinese, and Traditional Chinese).',
  },
  {
    question: 'Is Doloc Town free to play?',
    answer:
      'No. Doloc Town is a paid single-player game on Steam. Early Access purchasers received the full 1.0 release free. The game was available at a 20% launch discount until August 20, 2026 — check the Steam store page for the current price.',
  },
  {
    question: 'Can I play solo?',
    answer:
      'Yes. Doloc Town is a single-player game. There is no co-op or multiplayer mode.',
  },
  {
    question: 'What platforms is it on?',
    answer:
      'Doloc Town is available on PC via Steam. The Steam store page rates it "Playable" on Steam Deck. Console versions have not been announced.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Per the official Steam store page — Minimum: Windows 10, Intel Core i3 6100, 8 GB RAM, GTX 460, 2 GB storage. See the Steam Deck & System Requirements guide for details.',
  },
  {
    question: 'How long is the game?',
    answer:
      'Per the official press material for the 1.0 release: 30+ hours of main story gameplay, and 100+ hours including additional content. The game has 80 total achievements.',
  },
  {
    question: 'How many crops, recipes, and fish are there?',
    answer:
      'Per the official 1.0 announcement: 30+ crops, 80+ recipes, and 40+ fish. The gene system lets you modify crop traits such as growth and yield. All 80 achievements are listed in the Steam achievements page.',
  },
  {
    question: 'How does saving work?',
    answer:
      'Doloc Town saves your progress automatically as you play. You can close the game and continue where you left off — including your farm layout, inventory, and story progress. See the FAQ guide for safe-save tips.',
  },
  {
    question: 'Does Doloc Town have mods?',
    answer:
      'Yes. Steam Workshop integration was added during Early Access (the "Steam Workshop" update), so players can share and install mods through the Steam Workshop.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'At 1.0 launch: English, Simplified Chinese, and Traditional Chinese, with Japanese, Korean, Russian, French, German, and Brazilian Portuguese added in the 1.0 release (per the official announcement).',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best channel is the Steam Community forums for Doloc Town. RedSaw Games has posted regular developer updates and announcements there throughout Early Access.',
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}
