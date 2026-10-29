import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Demon Bluff FAQ — release date, price, platforms, multiplayer support, and the questions that come up before buying.',
};

// TODO(per site): 4–10 verified Q&As. Same rules as guide pages — no answer
// without a source, and a claim that only the community supports is worded as
// such. Empty = the placeholder below renders instead of fabricated answers.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When does Demon Bluff come out?',
    answer:
      'November 2026. Valve\'s store data returns coming_soon: true with the date string "November 2026" and no day of the month as of 29 October 2026. A precise day is not published.',
  },
  {
    question: 'What platforms is Demon Bluff on?',
    answer:
      'Windows, macOS and Linux via Steam. The Steam API lists all three platform flags as true. There is no PlayStation, Xbox, Switch or mobile version announced.',
  },
  {
    question: 'How much does Demon Bluff cost?',
    answer:
      'Not announced. The Steam appdetails response returns price_overview: null and there is no pre-order page, so no price or discount exists yet.',
  },
  {
    question: 'Is there a Demon Bluff demo?',
    answer:
      'Yes. A free demo (Steam app 3803820) has been available since 27 May 2026, with 40+ villager cards and nine Relics. The full game is a separate app and releases in November 2026.',
  },
  {
    question: 'Is Demon Bluff multiplayer?',
    answer:
      'No. The Steam categories list Single-player and nothing else, and the store description calls it "this single-player social deduction game". The social element is the puzzle, not other players.',
  },
  {
    question: 'How many characters does Demon Bluff have?',
    answer:
      'The Steam page advertises "100+ unique character cards to collect". The community wiki documents 44 distinct roles — 25 Villagers, 7 Outcasts, 9 Minions and 3 Demons — so the rest of the 100+ is skins and card variants built on those roles.',
  },
  {
    question: 'Does Demon Bluff have codes?',
    answer:
      'No. There is no code redemption system described on the Steam page or the community wiki. Character cards are unlocked by saving villages in Standard mode, and cosmetics are collected through play.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Windows 7, 8/8.1, 10 or 11, 2 GB RAM, an NVIDIA GeForce 840M and 500 MB of storage. The store page lists the processor requirement as "Anything, really". No separate macOS or Linux requirement block is published.',
  },
  {
    question: 'How does a run work?',
    answer:
      'You reveal character cards in a village. Each reveal reports information, some of it deliberately false, and you execute the cards you believe are Demons. Executing an innocent costs about 5 of your 10 HP; losing all HP costs one of four hearts. Saving the required number of villages raises your Ascension level.',
  },
  {
    question: 'Is Demon Bluff on Steam Deck?',
    answer:
      'Not rated. Valve does not publish Deck compatibility for unreleased games. A Linux build is listed and the install is 500 MB, but that is not a Deck Verified badge.',
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
