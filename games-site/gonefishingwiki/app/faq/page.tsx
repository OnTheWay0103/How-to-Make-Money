import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'GONE Fishing Horror Game FAQ — Price, Platforms, Co-op',
  description:
    'GONE Fishing horror game FAQ: release date, price, Windows-only platforms, 1–8 player co-op, the free demo, achievements, languages, and whether codes exist.',
};

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When did GONE Fishing release?',
    answer:
      'GONE Fishing entered early access on 16 June 2025 and left early access with its 1.0 release on 20 October 2026. The Steam store page currently lists 20 October 2026 as the release date, and the 1.0 announcement confirms the final boss, the MOBY rod and Jeremy Wade difficulty arrived with that update.',
  },
  {
    question: 'How much does GONE Fishing cost?',
    answer:
      'On 26 October 2026 the Steam store listed ¥32.99 as the base price in CNY, discounted 33% to ¥22.10. Steam prices are regional, so check your own store page; we do not convert currencies or quote a USD figure we could not verify.',
  },
  {
    question: 'What platforms is GONE Fishing on?',
    answer:
      'Windows PC only. The Steam store lists Windows support and no macOS or Linux support, and there is no console version. That also means crossplay is not a question: every player is on PC through Steam.',
  },
  {
    question: 'How many players can play co-op?',
    answer:
      'One to eight players in online co-op. The store lists Single-player, Multi-player, Co-op and Online Co-op categories. The lobby cap was raised to eight in the Alpha 4.0 update in December 2025, according to SteamDB patch history.',
  },
  {
    question: 'Can I play GONE Fishing solo?',
    answer:
      'Yes. Single-player is a listed Steam feature, and the daily loop is the same: fish, cook, deliver to the altar, sleep before dark. Solo is slower because nobody cooks while you fish, and less forgiving because a single death has no backup.',
  },
  {
    question: 'Does GONE Fishing have split-screen or LAN?',
    answer:
      'No. The store lists Online Co-op but no split-screen, shared-screen or LAN category. Each player needs their own copy and a Steam connection.',
  },
  {
    question: 'Is there a free demo?',
    answer:
      'Yes. A separate free demo app exists on Steam (app 3708980). We could not verify whether demo progress carries into the full game, so treat the demo as a trial rather than a head start.',
  },
  {
    question: 'Does GONE Fishing have codes?',
    answer:
      'We found no verified code system. Searches for "GONE Fishing codes" are dominated by the unrelated Roblox game Go Fishing, which is a different title. This site does not publish a codes page because we could not confirm that any redeemable codes exist.',
  },
  {
    question: 'What languages does GONE Fishing support?',
    answer:
      'Steam lists English, French, Italian, German, Spanish (Spain), Czech, Japanese, Korean, Polish, Portuguese (Brazil), Portuguese (Portugal), Russian, Simplified Chinese and Spanish (Latin America). English is the only language with full audio support; the rest are interface and subtitle localisations.',
  },
  {
    question: 'What is Hardcore mode?',
    answer:
      'Hardcore means permanent death, bait is destroyed when you reload a save, and you cannot reset the day. The official FAQ warns that Hardcore cannot be disabled on Jeremy Wade difficulty, which is also the mode that grants a +20% weight bonus.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">GONE Fishing Horror Game FAQ</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, co-op support, the demo and the questions that come up before buying — answered
        from the Steam store and the official FAQ, with the fetch date noted where a value can change.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
