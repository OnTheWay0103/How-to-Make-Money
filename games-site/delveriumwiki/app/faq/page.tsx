import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Delverium — release date, price, co-op, split-screen, demo, platforms, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'What is Delverium?', answer: 'Delverium is a 1-8 player co-op survival sandbox RPG developed and published by Sagestone Games. Set in a procedurally generated fantasy world, you gather resources, build shelters, farm, craft items, recruit NPCs, and descend into dangerous dungeons. It is often compared to Terraria, Stardew Valley, Core Keeper and Minecraft.' },
  { question: 'When is the Delverium release date?', answer: 'Delverium launches in Steam Early Access on September 22, 2026 for PC. The Early Access period is expected to last about two years, with new biomes, bosses, NPCs and features added based on player feedback.' },
  { question: 'How much will Delverium cost?', answer: 'The price has not been announced as of August 2026. The developers have confirmed the Early Access price will be lower than the final 1.0 price. The free demo is available now on Steam.' },
  { question: 'Is Delverium single-player or co-op?', answer: 'Both. Delverium supports solo play, online co-op for up to 8 players, and 4-player local split-screen co-op. It is designed around the co-op experience but fully playable solo.' },
  { question: 'How does 4-player split-screen work?', answer: 'Delverium supports local split-screen co-op for up to 4 players on one machine, with gamepad support. Online co-op expands that to 8 players total, with drop-in/drop-out play.' },
  { question: 'What platforms is Delverium on?', answer: 'Delverium is confirmed for PC (Steam). Steam Deck support is confirmed and full controller support is planned. Switch, Xbox, PlayStation and mobile versions have not been announced as of August 2026.' },
  { question: 'Is there a Delverium demo?', answer: 'Yes. A free demo has been live on Steam since February 7, 2025. It offers roughly 1-2 hours of early-game content — starting biomes, a dungeon, farming, building, combat and exploration — with solo or local split-screen play.' },
  { question: 'What was in the Delverium major demo update?', answer: 'The February 20, 2026 major demo update added 8-player online co-op, a new world boss, more biomes and dungeon content, a farming expansion, fast travel via Journey Shrines, lore and quest systems, control rebinding, world/character/difficulty customization, and a graphics and audio overhaul.' },
  { question: 'Will demo progress carry over to the full game?', answer: 'As of August 2026, save carry-over from the demo to the full game has not been officially confirmed. We will update this guide as soon as Sagestone Games announces details.' },
  { question: 'What are the system requirements?', answer: 'System requirements have not been published yet as of August 2026. The full Steam Early Access launch will list minimum and recommended specs. The pixel-art style keeps requirements modest, but Steam Deck support is confirmed.' },
  { question: 'Is Delverium like Terraria or Core Keeper?', answer: 'Yes — it shares the gather, build, farm, craft and dungeon-dive loop of those games. Delverium adds 1-8 player online co-op with 4-player split-screen, a procedurally generated world, recruitable NPCs, and a mystery storyline around "the Faults" hidden beneath the land.' },
  { question: 'Who develops Delverium?', answer: 'Delverium is developed and published by Sagestone Games, an independent Brisbane-based studio led by Scott Lowther, with music composed by BAFTA-winning composer Jeff van Dyck (Unpacking, Forts, Paint the Town Red). The game received funding from Screen Queensland and Screen Australia.' },
  { question: 'Is there crossplay?', answer: 'Crossplay between PC and other platforms cannot be confirmed until console versions are announced. PC players can play together via Steam online co-op, and local split-screen works on one machine.' },
  { question: 'Can I play Delverium on Steam Deck?', answer: 'Yes — Steam Deck support is confirmed for the full game, and the demo is playable on Steam Deck. Full controller support is planned for the Early Access launch.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">Common questions about Delverium — release date, co-op, split-screen, demo, platforms and more.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
