import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'DREADMOOR FAQ — release date, price, platforms, single-player status, demo vs Early Access, system requirements, languages, and combat.',
};

const FAQ_ITEMS = [
  {
    question: 'When does DREADMOOR release?',
    answer:
      'DREADMOOR enters Steam Early Access on Monday, November 9, 2026 on PC. The Early Access period is planned to run 6–12 months before the 1.0 release. A free demo launched on October 6, 2026.',
  },
  {
    question: 'How much does DREADMOOR cost?',
    answer:
      'Early Access is $19.99. The developers have stated that the price will increase for the 1.0 release, so the Early Access price is the cheapest the game will be.',
  },
  {
    question: 'What platforms is DREADMOOR on?',
    answer:
      'PC via Steam is the only confirmed platform. No PlayStation, Xbox, or Nintendo Switch version has been announced, and the official FAQ does not commit to a console release. The game is not on Epic Games Store, GOG, or mobile as of October 24, 2026.',
  },
  {
    question: 'Is DREADMOOR multiplayer or co-op?',
    answer:
      'No. DREADMOOR is a single-player game. The official Steam FAQ states that it does not support multiplayer, co-op, or crossplay. There is no PvP mode.',
  },
  {
    question: 'Is DREADMOOR a sequel to Dredge?',
    answer:
      'No. DREADMOOR is developed by Dream Dock and published by Digital Vortex Entertainment. It is not a Dredge sequel, spin-off, or licensed title. The comparison comes from the shared fishing-horror premise: a small boat, strange catches, and an ominous world.',
  },
  {
    question: 'What is the difference between the demo and Early Access?',
    answer:
      'The free demo is a vertical slice: it covers the opening at the Trading Post, the first fishing contracts, the Dry Dock upgrade chain, Angler’s Island, and ends when you open The Throat gate. Early Access is planned to include the complete core gameplay loop, one major region, the full story, multiple fish species and mutations, more boat upgrades, and free exploration after the story ends. Demo progress is not expected to carry over, and no save transfer has been announced.',
  },
  {
    question: 'Does DREADMOOR have combat?',
    answer:
      'Yes. The Early Access feature list describes real-time combat against mutated creatures on both sea and land, using harpoons and other tools. The demo is focused on fishing, salvage, and boat repair, so it shows very little of the combat sandbox. Do not expect a full weapon-tier system to be documented before launch.',
  },
  {
    question: 'How does fishing work in DREADMOOR?',
    answer:
      'You choose a rod and bait at a marked fishing spot, cast, wait for a bite, then fight the fish. Pull the rod opposite the fish’s movement to drain its Stamina. Reel when it tires, but stop if Line Tension climbs too high or the line snaps. Predatory fish such as Harpooners require a moving lure instead of a static bait.',
  },
  {
    question: 'What are the PC system requirements?',
    answer:
      'The Steam demo lists: Minimum — 64-bit Windows 10, Intel Core i5-8400 or AMD Ryzen 5 2600, 8 GB RAM, NVIDIA GTX 1060 (6 GB) or AMD RX 580 (8 GB), DirectX 12, 20 GB storage. Recommended — Intel Core i5-12400F or AMD Ryzen 5 5600, 16 GB RAM, NVIDIA RTX 4060 or AMD RX 7600, DirectX 12, 20 GB storage. These are demo specs; the Early Access build may revise them.',
  },
  {
    question: 'What languages does DREADMOOR support?',
    answer:
      'Twelve text languages: English, French, Italian, German, Spanish (Spain), Portuguese (Brazil), Traditional Chinese, Simplified Chinese, Korean, Polish, Russian, and Japanese. Interface and subtitles are available in all twelve. Full voice audio is listed only for English and Russian.',
  },
  {
    question: 'Is DREADMOOR on Steam Deck?',
    answer:
      'Not confirmed. Valve has not issued a Steam Deck compatibility rating for the game as of October 24, 2026, and the developers have not announced official Deck support. The demo’s minimum GPU (GTX 1060 / RX 580) suggests it is demanding for the original Deck, but that is an inference, not a benchmark.',
  },
  {
    question: 'Is there a DREADMOOR wiki?',
    answer:
      'Yes — you are on it. DREADMOOR Wiki is an unofficial fan resource covering fishing mechanics, bait, fish species, boat upgrades, survival, regions, combat, and Early Access details. We label unconfirmed information instead of presenting it as fact, and every guide lists its sources.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, single-player status, demo vs Early Access, system requirements, languages, and combat — answered from official sources and the October 2026 demo.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
