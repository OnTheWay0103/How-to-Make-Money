import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Blind Descent FAQ: Release, Co-op, and Platforms',
  description:
    'Blind Descent FAQ answered from official sources: Early Access date, four-player co-op, crossplay between Steam, GOG and Epic, price, platforms, and specs.',
};

// Every answer below is traceable to the Steam store page (app 1209970) or the
// META Publishing release notes of 2025-07-30 and 2026-10-12, all checked
// 2026-10-28. Anything the studio has not stated is marked [Unconfirmed].
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'Is Blind Descent co-op?',
    answer:
      'Yes. The Steam store page describes an open-world survival adventure playable solo or with friends in four-player co-op, and lists online co-op and cross-platform multiplayer among its categories. The publisher confirmed crossplay between Steam, GOG and the Epic Games Store.',
  },
  {
    question: 'When does Blind Descent release?',
    answer:
      'Early Access begins on December 2, 2026. The publisher lists it for Steam, GOG and the Epic Games Store on that date. The store page showed a "coming soon" status with roughly five weeks to go when we last checked on October 28, 2026.',
  },
  {
    question: 'What platforms is Blind Descent on?',
    answer:
      'PC only at Early Access launch, through Steam, GOG and the Epic Games Store. PlayStation 5 and Xbox Series X|S are planned to arrive with the full 1.0 release, but no date has been announced. No PlayStation 4, Xbox One or Nintendo version has been announced.',
  },
  {
    question: 'Does Blind Descent have crossplay?',
    answer:
      'Yes. The October 2026 release note describes co-op for up to four players with crossplay between Steam, GOG and the Epic Games Store. Crossplay covers the three PC storefronts; console crossplay is not applicable yet because the console versions are not out.',
  },
  {
    question: 'Can you play the Blind Descent story in co-op?',
    answer:
      'Yes. The official site FAQ states that every story element within the single-player game will also be playable in multiplayer. The world and the quests are shared, so a crew progresses the main story together.',
  },
  {
    question: 'Do co-op players share an inventory?',
    answer:
      'No. The publisher describes co-op as shared quests and a shared world, but with separate inventory and separate mutations. Loot is per player, and the symbiosis-or-science choice is made by each player rather than by the group.',
  },
  {
    question: 'How much does Blind Descent cost?',
    answer:
      '[Unconfirmed]. The Early Access price has not been announced. The Steam listing shows no price because the game is not yet purchasable, and announcement coverage explicitly states the price is still unknown. Anyone quoting a figure is guessing.',
  },
  {
    question: 'Is there a Blind Descent demo?',
    answer:
      'A free demo entry point exists on the Steam store page. Whether the standalone demo supports co-op is [Unconfirmed]. The October 2026 playtest round did support four-player crossplay, but that was a separate, access-controlled test rather than the demo.',
  },
  {
    question: 'Does Blind Descent work on Steam Deck?',
    answer:
      '[Unconfirmed]. The Steam listing confirms full controller support, which is a good sign, but no Steam Deck compatibility rating has been published. The listed minimum is 16 GB of RAM and the recommendation is 32 GB, so check the compatibility badge on the store page after launch.',
  },
  {
    question: 'What are the Blind Descent system requirements?',
    answer:
      'Minimum: Windows 11 64-bit, Intel Core i3, 16 GB RAM, a DirectX 12 compatible GPU with 2 GB VRAM, and 40 GB of storage. Recommended: i5 or higher, 32 GB RAM, and a DirectX 12 GPU with 6 GB VRAM. Both tiers require a 64-bit processor and operating system.',
  },
  {
    question: 'Is there a mutation system in Blind Descent?',
    answer:
      'Yes. The store page frames the game around a choice between a scientific approach that preserves your humanity and joining the ecosystem through mutations. Symbiosis is described as unlocking powerful mutations such as telekinesis or wall running, while staying pure gives access to new technology.',
  },
  {
    question: 'Can your base be destroyed?',
    answer:
      'Yes, by neglect. The store page warns that vines, fungal growths and creeping alien organisms react quickly to neglect, and the publisher says bases can be overgrown, devoured or corrupted. The decay timer has not been published, so treat offline time as counting against you.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, multiplayer support, and the questions that come up before buying — answered from official sources.
      </p>
      {FAQ_ITEMS.length > 0 ? (
        <FAQ items={FAQ_ITEMS} />
      ) : (
        <p className="text-sm text-gray-500">The FAQ is being written. Guide pages are available in the meantime.</p>
      )}
    </div>
  );
}
