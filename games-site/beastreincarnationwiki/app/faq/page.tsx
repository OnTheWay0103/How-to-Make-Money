import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Beast of Reincarnation — release date, price, platforms, combat, Koo, game length, difficulty, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Beast of Reincarnation?', answer: 'Beast of Reincarnation is a single-player action RPG developed by Game Freak (creators of Pokémon) and published by Fictions. Set in post-apocalyptic Japan in 4026, you play as Emma the Sealer and her dog Koo, hunting giant Nushi creatures and absorbing their power. It launched August 4, 2026 on PC (Steam), PS5, and Xbox Series X|S for $59.99.' },
  { question: 'Is it multiplayer or co-op?', answer: 'No. Beast of Reincarnation is exclusively single-player. There is no co-op, multiplayer, or PvP. The entire game is built around the one-person, one-dog bond between Emma and Koo.' },
  { question: 'What platforms is it on?', answer: 'PC (Steam and Microsoft Store), PlayStation 5, and Xbox Series X|S. It is day-one on Xbox Game Pass Ultimate and PC Game Pass, and supports Xbox Play Anywhere and Cloud Gaming. Physical versions exist for PS5 and Xbox; PC is digital-only.' },
  { question: 'How much does it cost?', answer: 'The Standard Edition is $59.99 (includes a brown Shiba skin for Koo and 30,000 Amber). The Deluxe Edition is $69.99 and adds the Oni\'s Hat, the Big Dipper sword, black and brown Shiba skins, 100,000 Amber, and vegetable seedlings.' },
  { question: 'Is the game in English?', answer: 'Yes, full English support including English voice acting — but English audio is off by default and must be enabled from the main menu settings. Japanese voices (Yui Ishikawa as Emma) are the default.' },
  { question: 'How does the combat work?', answer: 'Hybrid combat: Emma fights in real time with a katana — attacking, parrying, perfect dodging, and executing — while Koo\'s Bloom Arts are commanded through a slow-motion menu. Successful parries generate FP (Florescence Points) that power Koo\'s abilities.' },
  { question: 'What is a Nushi?', answer: 'A Nushi is a giant boss creature that has grown massive from Blight corruption. You hunt them throughout the story, defeat them, and absorb their power to gain Nushi Skills — this hunt-absorb-advance loop is the core of the game.' },
  { question: 'How long is Beast of Reincarnation?', answer: 'Roughly 20 hours for a fast playthrough, 25–28 hours for an average playthrough, and 30–35 hours for completionists. The game has 13 chapters plus an epilogue.' },
  { question: 'How many chapters are there?', answer: '13 chapters plus an epilogue: Seedling, Creeping Tendrils, The Vessel, Stems, Branching Paths, Necrosis, Root Rot, Worm Food, Branching Out, Malefact, Budding Realization, The Firmament, To Bloom Then Fall, and Epilogue: Bearing Fruit.' },
  { question: 'Are there difficulty options?', answer: 'Yes. Story, Normal, and Hard are available from the start. Story Mode widens the parry window and reduces damage. You can change difficulty at any time with no penalty.' },
  { question: 'Is there a New Game+?', answer: 'Yes. New Game+ is available after completing the story on the Reincarnation+ difficulty, which is required for the Platinum/100% achievements (nothing is missable).' },
  { question: 'Can I respec my skills?', answer: 'Yes. Respeccing is possible at campsites after obtaining purification items, so you can experiment with builds without restarting.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10/11 64-bit, Intel Core i5-8400 or AMD Ryzen 5 3600, 16 GB RAM, GTX 1070 or RX 580 (8 GB), DirectX 12, SSD required, 45–60 GB storage. Steam Deck and controller support are listed.' },
  { question: 'Is there a demo or trial?', answer: 'The game is on Xbox Game Pass Ultimate and PC Game Pass day-one, which is the easiest way to try it without buying. No separate demo was announced at launch.' },
  { question: 'Are there microtransactions?', answer: 'No in-game microtransactions were reported at launch. The only purchase options are the Standard and Deluxe editions.' },
  { question: 'What are the achievements/trophies?', answer: '46 trophies on PS5 (1 Platinum, 2 Gold, 11 Silver, 32 Bronze) and 45 achievements on Xbox/Steam. None are missable and none are difficulty-locked, though the Platinum needs two playthroughs.' },
  { question: 'Is it a Soulslike?', answer: 'It has Soulslike elements — campsite checkpoints, parry-heavy combat, boss arenas — but it is more accessible, with multiple difficulty settings, no death penalty beyond lowered Koo rapport, and a Story Mode. Comparisons to Sekiro are common, but it is not a pure Soulslike.' },
  { question: 'How do reviews look?', answer: 'Metacritic is around 72–74 and OpenCritic around 76–77 (62% recommend). Critics praised the Emma–Koo bond, atmosphere, and parry combat; they criticized story pacing, camera issues, and launch performance on PC and Xbox (PS5 was the most stable). Steam user reviews are "Mixed" (about 52% positive) largely due to launch-day performance issues.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Beast of Reincarnation — gameplay, combat, Koo, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
