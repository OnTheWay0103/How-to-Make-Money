import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'REKA FAQ — release date, price, platforms, multiplayer support, and the questions that come up before buying.',
};

// Verified against the Steam store page (app 1737870) and Famitsu's 1.0
// release article, both fetched 2026-10-26. Items that no source supports are
// worded as [Unconfirmed] rather than guessed.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When did REKA release?',
    answer:
      'REKA left Early Access and launched version 1.0 on 26 October 2026. Early Access began on 12 September 2024. (Source: Steam store page, fetched 26 October 2026.)',
  },
  {
    question: 'Is REKA multiplayer or co-op?',
    answer:
      'No. The Steam store page lists Single-player only, alongside Steam Cloud and Family Sharing. No co-op or online mode is listed. (Source: Steam store page, fetched 26 October 2026.)',
  },
  {
    question: 'What platforms is REKA on?',
    answer:
      'PC via Steam, on Windows. No official console release has been announced, so PS5, Switch and Xbox versions are [Unconfirmed]. (Source: Steam store page and Famitsu, fetched 26 October 2026.)',
  },
  {
    question: 'How much does REKA cost?',
    answer:
      'The Chinese Steam store listed the base game at ¥76.00, reduced 35% to ¥49.40 during a daily deal ending 7 November. Famitsu lists the Japanese price as ¥2,300 including tax. The US dollar price is [Unconfirmed]. (Sources: Steam store page; Famitsu, 26 October 2026.)',
  },
  {
    question: 'Does REKA have redeem codes?',
    answer:
      'No. No redemption system or code list appears in official or community sources; search results for REKA codes contain only trainer and key-shop pages. Our cooking recipe page covers the closest equivalent content. (Source: six competitive queries recorded in selection-2026-10-26-round3.md.)',
  },
  {
    question: 'Is REKA combat-free?',
    answer:
      'Yes. The Steam store page lists "Cozy, Combat-Free Gameplay" as a core pillar and describes the loop as decorating, crafting, foraging and gentle questing. (Source: Steam store page, fetched 26 October 2026.)',
  },
  {
    question: 'Which languages does REKA support?',
    answer:
      'Nine: English, French, German, Spanish (Spain), Polish, Russian, Ukrainian, Japanese and Simplified Chinese. (Source: Steam store page, fetched 26 October 2026.)',
  },
  {
    question: 'What are the PC system requirements?',
    answer:
      'Minimum: Windows 10 64-bit, Intel Core i5-6400 or AMD Ryzen 5 1400, 16 GB RAM, GTX 1060 6GB or RX 580, DirectX 11, 10 GB storage. Recommended: i5-8400 or Ryzen 5 3600X with an RTX 2060 or RX 5700 XT. (Source: Steam store page, fetched 26 October 2026.)',
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
