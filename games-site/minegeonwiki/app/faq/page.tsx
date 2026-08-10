import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MineGeon: Renegades — release date, platforms, price, co-op, classes, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'When does MineGeon: Renegades release?', answer: 'MineGeon: Renegades launched on Steam in July 2026 (the Steam store page lists July 30, 2026; the release was delayed once from an earlier July 14 target). It is a paid title — the store page lists a launch price with a 15% introductory discount that ended in early August.' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo or in online co-op with up to two friends (3 players total). Co-op is online-only through Steam; there is no local co-op or split-screen. The developer has not published exact enemy-scaling numbers.' },
  { question: 'How many classes are there?', answer: 'Three playable Renegades: Marshall (the resilient Tank), Trevor (the deadly DPS Gunslinger), and Ari (the balanced Engineer). Each has its own stats and ultimate ability. Detailed ability lists have not been published, so specifics are unconfirmed.' },
  { question: 'How many biomes are there?', answer: 'Six hand-crafted biomes with procedurally generated "minegeons" inside them. Each biome culminates in a boss battle. Biome names have not been officially published; the free demo covers the first biome.' },
  { question: 'How long is a run?', answer: 'No official figures have been published. Runs are roguelite expeditions whose length depends on how deep you push and whether you extract early or greed for more minerals. See our How Long to Beat guide for what we can estimate from the game\'s content.' },
  { question: 'What happens when you die in a run?', answer: 'You lose the minerals you were carrying — they are gone for good. That loss is the game\'s core risk/reward loop. Your ship, permanent upgrades, and long-term progression are not lost.' },
  { question: 'Is there permanent progression?', answer: 'Yes. Minerals you extract can be traded for permanent upgrades to your ship and to each Renegade\'s attributes, and leveling unlocks gadgets, weapons, and ultimate abilities across runs. Only minerals you are carrying are lost on death.' },
  { question: 'What platforms is it on?', answer: 'PC only at launch (Steam). No console releases have been announced. The Steam page does not list controller support; keyboard and mouse is the confirmed input.' },
  { question: 'Is there cross-play?', answer: 'Not applicable at launch — the game is Steam-only. If console versions are announced later, cross-play status would be up to the developer.' },
  { question: 'Can I play offline?', answer: 'Not officially confirmed. The game is single-player capable, but the Steam page lists a broadband connection as a requirement, so assume an internet connection is needed until the developer says otherwise.' },
  { question: 'Does it support Steam Deck?', answer: 'Not officially confirmed. Steam Deck support is not listed on the store page, and controller support is not listed either. Assume keyboard and mouse on desktop until verified.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo (Demo 2.0) is available on Steam. It covers the first of the six biomes and the first chapter of the story, with base and character upgrades. The demo was rated "Very Positive" on Steam at the time of writing.' },
  { question: 'Who is the developer?', answer: 'MineGeon: Renegades is developed and published by Kickstone Studio. It is not related to any earlier "MineGeon" game by another studio.' },
  { question: 'What are the system requirements?', answer: 'As listed on the official Steam store page: Minimum — Windows 10, 2.4 GHz CPU, 4 GB RAM, integrated GPU (1024 MB) or better, DirectX 10, broadband connection, 2 GB storage. Recommended — Windows 11, 3.2 GHz CPU, 8 GB RAM, GeForce GTX 480 / Radeon HD 5870 or better, DirectX 11, 2 GB storage. 1080p / 16:9 recommended.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about MineGeon: Renegades — gameplay, co-op, classes, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
