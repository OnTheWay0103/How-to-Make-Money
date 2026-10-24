import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Cozy Game Restoration — release date, price, platforms, languages, timers, Steam Deck, demo scope, crossovers and what the full game includes.',
};

const FAQ_ITEMS = [
  { question: 'When does Cozy Game Restoration release?', answer: 'The current release date is November 4, 2026. The game was originally announced for September 24, 2026 and was later moved to November 4. It launches on Steam for Windows and macOS.' },
  { question: 'How much does Cozy Game Restoration cost?', answer: 'It is listed at $14.99 USD on Steam.' },
  { question: 'Who develops Cozy Game Restoration?', answer: 'Parasol Corp, the solo Melbourne-based studio of developer Adam Stormhardt. Parasol Corp is both developer and publisher.' },
  { question: 'Is there a timer or a fail state?', answer: 'No. The developer describes the game as having no timers and no fail states. Cartridges can be left partially cleaned and returned to later. Cleanliness affects resale value, so there is an incentive to clean well, but nothing punishes you for stopping.' },
  { question: 'What platforms is it on?', answer: 'Windows and macOS via Steam. The store page lists Steam Deck optimization, and the developer has described the game as built for desktop and Steam Deck. No PlayStation, Xbox or Switch versions have been announced.' },
  { question: 'How many languages does it support?', answer: 'The Steam store page lists 19 supported languages. Interface and subtitle support can differ by language, so check the language table on the store page before launch.' },
  { question: 'How many games are in the full version?', answer: '108 fictional titles inspired by games from the 1980s through the early 2000s. They span six fictional platforms, and each title has PAL and NTSC regional versions — 216 cartridge variants in total. Rarity and shell type add further variation.' },
  { question: 'How many quests are there?', answer: 'Around 300 quests are planned for launch. They are collection-based objectives that reward decorations and cosmetics for the collection room, rather than story missions with fail states.' },
  { question: 'What is in the demo?', answer: 'The Steam demo is a limited slice of the full loop. The demo store page describes it as limited to four in-game days of parcels. It includes the parcel opening, cleaning workbench and selling loop, but not the complete 108-title collection or the full collection room progression.' },
  { question: 'Is there multiplayer or online play?', answer: 'No. Cozy Game Restoration is a single-player game.' },
  { question: 'Are there crossovers?', answer: 'Yes. Crossover cartridges based on real indie games have been confirmed, including Abiotic Factor and CONSCRIPT, with more to be announced. They appear as collectible cartridges within the game.' },
  { question: 'Do I need to clean a cartridge to 100%?', answer: 'No. Cleaning does not have to reach 100%, and you can return to a cartridge later. A dirtier cartridge sells for less, and the UV torch helps reveal missed dirt if you want to finish a restoration properly.' },
  { question: 'Can I play with a controller?', answer: 'Yes, controller support is available and the game is Steam Deck optimized. For very precise cleaning, however, previews have found a mouse easier than an analog stick.' },
  { question: 'Is this an official wiki?', answer: 'No. Cozy Game Restoration Wiki is an unofficial fan resource. It is not affiliated with or endorsed by Parasol Corp.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-stone-400 mb-8">Everything we can confirm about Cozy Game Restoration — release date, price, platforms, demo scope, quests and collection systems.</p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
