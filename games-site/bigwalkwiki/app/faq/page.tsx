import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Big Walk — release date, price, platforms, crossplay, co-op player count, tools, game length, combat, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Big Walk?', answer: 'Big Walk is a cooperative open world puzzle adventure developed by House House (creators of Untitled Goose Game) and published by Panic. It launched August 4, 2026 on Steam (PC and Mac), PS5, and Nintendo Switch 2. You and up to 11 friends explore a large island, solve co-op puzzles, and coordinate with proximity voice chat. There is no combat — it is a game about walking, talking and working together.' },
  { question: 'When did Big Walk release?', answer: 'Big Walk launched Tuesday, August 4, 2026, at 6am PDT / 9am EDT / 1pm UTC.' },
  { question: 'How much does Big Walk cost?', answer: 'Big Walk is $19.99 USD on Steam and Nintendo Switch 2, with a 25% launch discount. On PS5 it is a day-one PlayStation Plus Essential free game for August 2026 (available across all PS Plus tiers, August 4 - September 1).' },
  { question: 'What platforms is Big Walk on?', answer: 'Steam (PC and Mac), PlayStation 5, and Nintendo Switch 2.' },
  { question: 'Is Big Walk crossplay?', answer: 'Yes. Full cross-platform play across PC (Steam), Mac, PS5, and Nintendo Switch 2. Platform does not matter when you are inviting friends.' },
  { question: 'How many players can play Big Walk?', answer: '2 to 12 players. The game is designed for playing with friends — there is no matchmaking. Puzzles scale for groups of 2, 3, or 4+, and larger groups can split up across the island.' },
  { question: 'Can you play Big Walk solo?', answer: 'No. Big Walk is exclusively cooperative — there is no single-player mode. You need at least two players to progress.' },
  { question: 'Is there combat in Big Walk?', answer: 'No. There is no combat, no enemies, no health bars, no timers and no fail states. Big Walk is deliberately relaxed and pressure-free — the challenge comes from communication and coordination.' },
  { question: 'How does voice chat work in Big Walk?', answer: 'Big Walk uses proximity voice chat. Voices fade as distance grows, echo down corridors, muffle through walls and crackle through walkie-talkies. When you cannot talk, you can point, wave and gesture with your character (the devs call it "Arms!!").' },
  { question: 'What tools are in Big Walk?', answer: 'Confirmed tools and toys include walkie-talkies, binoculars, laser pointers, megaphones, flares, flashlights, whiteboards, cowbells, fireworks and a big golden head. The walkie-talkie is the communication workhorse — voices crackle through it over long distances.' },
  { question: 'Is there matchmaking?', answer: 'No. Big Walk has no matchmaking — it is designed for playing with your own friends, similar to a board game night. Invite 1-11 friends through your platform of choice.' },
  { question: 'How long is Big Walk?', answer: 'Official playtime estimates are not confirmed yet. Big Walk is a hand-crafted adventure with a beginning and an ending (not an endless sandbox). Previewers played several hours and the campaign continues well beyond that. We will update this page with community average playtimes.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Windows 10, Intel Core i7-7700K or AMD Ryzen 5 1600X, 12 GB RAM, GTX 750 Ti (2GB) / Radeon R7 370 (2GB) / Intel Arc A380. Recommended: Windows 11, Intel Core i5-10600K or Ryzen 7 3700X, 16 GB RAM, GTX 1070 (8GB) / Radeon RX 5600 XT (8GB) / Intel Arc A750.' },
  { question: 'Is Big Walk on Steam Deck?', answer: 'Not officially confirmed at launch. The minimum specs are modest, so it may run, but Steam Deck verification status is TBD. Check back — we will update this answer once it is verified or community-tested.' },
  { question: 'Who developed Big Walk?', answer: 'House House, a ~10-person studio in Melbourne, Australia, best known for Untitled Goose Game and Push Me Pull You. Big Walk was published by Panic (Firewatch, Thank Goodness You\'re Here!).' },
  { question: 'Is Big Walk on Xbox or Game Pass?', answer: 'No. Big Walk is not on Xbox or Game Pass — it is on Steam, PS5 (PS Plus day-one), and Nintendo Switch 2. It is also not on Nintendo Switch Online.' },
  { question: 'Is Big Walk family friendly?', answer: 'Yes — it carries a PEGI 3 rating and is appropriate for all ages. There is no combat or violence; the game is about cooperative exploration and puzzles.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Big Walk — gameplay, co-op, tools, platforms and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
