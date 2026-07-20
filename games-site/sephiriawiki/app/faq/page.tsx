import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Sephiria — release date, price, co-op, solo, crossplay, game length, demo, relics, inscriptions, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Sephiria?', answer: 'Sephiria is a pixel-art action roguelite developed by Sephiria Studio (a 4-person independent team). You play as a rabbit warrior climbing the Tower of Sephiria through 6 chapters with 6 weapons and 150+ relics. It supports 1-4 player co-op and has a 94% positive rating on Steam. The full 1.0 launches July 31, 2026.' },
  { question: 'When is the full 1.0 release?', answer: 'The full 1.0 launch is July 31, 2026. The game has been in Early Access for over 1 year on Steam.' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo or in online co-op with up to 4 players. Enemy health and damage scale with player count, so solo play is fully balanced and viable.' },
  { question: 'Is there local co-op or couch co-op?', answer: 'No, Sephiria supports online co-op only. There is no split-screen or local multiplayer.' },
  { question: 'How many players can play?', answer: 'Up to 4 players in online co-op. Solo play is also fully supported.' },
  { question: 'How many weapons are there?', answer: '6 weapon types: Sword, Bow, Staff, Spear, Fist (Gauntlets), and Scythe. Each weapon has 50+ upgrade options and a unique mastery system.' },
  { question: 'What are relics?', answer: 'Relics are per-run passive items that modify your stats and abilities. There are over 150 relics across 5 rarity tiers (Common to Legendary). You can carry up to 6 relics at a time.' },
  { question: 'What is the Inscription system?', answer: 'Inscriptions are permanent socketable bonuses that persist between runs — unlike relics which reset. You socket them into weapon, helm, chest, and accessory slots. There are 40+ inscriptions across offensive, defensive, utility, and special categories.' },
  { question: 'Is there crossplay?', answer: 'Crossplay details are still being finalized for the 1.0 launch. Check the official Steam page for the latest information.' },
  { question: 'How long is a full run?', answer: 'A full run through all 6 chapters takes approximately 45-90 minutes, depending on exploration thoroughness and secret boss encounters.' },
  { question: 'How many chapters and bosses are there?', answer: '6 chapters with 10+ boss encounters. Mandatory bosses: 6 (one per chapter). Secret bosses: 4+ with unique relic drops.' },
  { question: 'What happens when you die?', answer: 'In solo, death ends the run. In co-op, teammates have 3 seconds to revive you while you are in a downed state. If fully killed, you are eliminated for the current room.' },
  { question: 'Are there microtransactions?', answer: 'No in-game microtransactions. The game is a single purchase on Steam.' },
  { question: 'What are the PC system requirements?', answer: 'Minimum: Intel i5-8400 / Ryzen 3 3300X, GTX 960 / RX 470, 8GB RAM. Recommended: Intel i7-9700 / Ryzen 5 5600X, GTX 1660 / RX 580, 16GB RAM, SSD.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is available on Steam. It includes the first chapter (The Rooted Depths) and provides an introduction to the core gameplay loop. Progress does not carry over to the full game.' },
  { question: 'How long is the demo?', answer: 'The free Steam demo includes the first chapter, which takes approximately 15-30 minutes to complete depending on exploration.' },
  { question: 'Is there progression between runs?', answer: 'Yes. Inscriptions, weapon mastery levels, and discovered relics are permanent unlocks that carry between runs. This makes each subsequent run easier even when you die.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Sephiria — gameplay, weapons, co-op, relics, inscriptions, and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
