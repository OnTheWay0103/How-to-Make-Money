import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MineGeon: Renegades — release date, platforms, price, co-op, classes, game length, and more.',
};

const FAQ_ITEMS = [
  { question: 'When does MineGeon: Renegades release?', answer: 'MineGeon: Renegades releases on July 28, 2026 on Steam (PC). Pricing has not been officially announced but is expected to be in the $15-$25 range.' },
  { question: 'Is it single-player or co-op?', answer: 'Both. You can play solo or in online co-op with up to 3 players. Enemies scale based on player count, and loot quality improves with more players.' },
  { question: 'How many classes are there?', answer: 'Three classes at launch: Tank (frontline melee), DPS Gunslinger (ranged damage), and Engineer (turret/trap support). You can switch between classes between runs.' },
  { question: 'How many biomes are there?', answer: 'Six biomes: Shallow Mines, Fungal Caverns, Magma Chambers, Crystal Mines, Abandoned Mineshaft, and The Deep Core. Each has unique enemies, resources, hazards, and a boss.' },
  { question: 'How long is a run?', answer: 'A single run typically takes 20-45 minutes depending on how deep you go. Full completion of all biomes and bosses can take 30-60+ hours.' },
  { question: 'What happens when you die in a run?', answer: 'If you fail to extract before the mine collapses, you lose all items gathered during that run. Your base, stored resources, crafted gear, and upgrades are permanent and never lost.' },
  { question: 'Is there permanent progression?', answer: 'Yes. Resources you extract, base upgrades, crafted gear, and Trophy Room bonuses all persist between runs. Only carried items are lost on a failed extraction.' },
  { question: 'What platforms is it on?', answer: 'PC only at launch (Steam). Console releases have not been announced. The game supports both keyboard & mouse and controller input.' },
  { question: 'Is there cross-play?', answer: 'Not applicable at launch — the game is Steam-only. If console versions are released later, cross-play may be added.' },
  { question: 'Can I play offline?', answer: 'Yes. Solo mode can be played offline. Internet is only required for co-op multiplayer.' },
  { question: 'Does it support Steam Deck?', answer: 'Not officially confirmed at launch, but expected to run well on Steam Deck given its indie scope and controller support.' },
  { question: 'Is there a demo?', answer: 'Check the Steam page for demo availability. The original MineGeon had a free version; MineGeon: Renegades may offer a demo or open beta before or at launch.' },
  { question: 'Who is the developer?', answer: 'MineGeon: Renegades is developed by WTF Studios, the team behind the original MineGeon.' },
  { question: 'What are the system requirements?', answer: 'Official requirements will be announced closer to launch. Minimum expected: Windows 10, Intel i5/AMD equivalent, 8GB RAM, GTX 960. Recommended: Windows 10/11, Intel i7/AMD equivalent, 16GB RAM, GTX 1060.' },
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
