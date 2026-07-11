import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about The Mound: Omen of Cthulhu — release date, price, co-op, solo, crossplay, game length, demo, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is The Mound: Omen of Cthulhu?', answer: 'The Mound is a 1-4 player co-op PvE extraction horror game developed by ACE Team and published by NACON. Set in 1652 Chile, you play as conquistador treasure hunters descending into a cursed Lovecraftian jungle. It launches July 15, 2026 on PC (Steam), PS5, and Xbox Series X|S for $29.99.' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo with AI companions (or true solo) or in online co-op with up to 4 players. Contracts are balanced for co-op, so solo play is a greater challenge.' },
  { question: 'Is there local co-op or couch co-op?', answer: 'No, The Mound does not support local/couch co-op. All multiplayer is online via Steam, PS5, and Xbox networks. Full crossplay is supported.' },
  { question: 'How many players can play?', answer: 'Up to 4 players in online co-op. You can also play solo with AI companions.' },
  { question: 'Do characters have classes?', answer: 'No. The four characters are purely cosmetic. Your role is defined entirely by the weapons and equipment you bring on each expedition — similar to Left 4 Dead.' },
  { question: 'What is the Sanity system?', answer: 'As you venture deeper, each player experiences independent hallucinations — visual distortions, phantom sounds, fake treasure, teammates appearing as monsters. Proximity voice chat is essential for distinguishing reality from madness.' },
  { question: 'Do guns work in the rain?', answer: 'No. Rain extinguishes matchlock and flintlock fuses. You must find shelter or rely on crossbows and melee weapons. Oil lamps also flicker in moisture.' },
  { question: 'Is there crossplay?', answer: 'Yes. Full crossplay between PC (Steam), PS5, and Xbox Series X|S.' },
  { question: 'How long is an expedition?', answer: 'Missions last approximately 20 minutes. A hidden timer governs the forest\'s awakening — the longer you stay, the more dangerous it becomes.' },
  { question: 'How long is The Mound: Omen of Cthulhu?', answer: 'The game launched on July 15, 2026 with approximately 15-20 hours of main content. A single expedition lasts roughly 20 minutes. The game will receive post-launch updates with additional content.' },
  { question: 'What happens when you die?', answer: 'If not revived in time, your body is swallowed by the forest and reborn as a corrupted, AI-controlled version that hunts your surviving teammates.' },
  { question: 'Are there microtransactions?', answer: 'No in-game microtransactions. The Standard Edition is $29.99. The Deluxe Edition ($39.99) includes the Fortune Hunters Character Pack with 2 additional characters.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: i7-8700k / Ryzen 5 1600x, GTX 1660 SUPER 6GB / RX 5600 XT 6GB, 16GB RAM. Recommended: i7-11700k / Ryzen 5 5500, RTX 3070 8GB / RX 6750 XT 12GB, 16GB RAM.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam. It lets you experience the core expedition loop before purchasing.' },
  { question: 'How long is the demo?', answer: 'The free Steam demo includes a limited number of expeditions. A typical demo session lasts 20-30 minutes. Progress does not carry over to the full game.' },
  { question: 'Can I play offline?', answer: 'The game requires an online connection for co-op play. Solo play may have different requirements — check official documentation at launch.' },
  { question: 'Is there progression between expeditions?', answer: 'Yes. Story progression is shared across your team. Individual rank, unlocked areas, and logbook entries carry over to your personal save.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about The Mound: Omen of Cthulhu — gameplay, co-op, sanity, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
