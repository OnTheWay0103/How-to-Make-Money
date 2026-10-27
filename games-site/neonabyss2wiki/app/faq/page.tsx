import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Neon Abyss 2 FAQ: Quick Answers on Release Date and Price',
  description:
    'Neon Abyss 2 FAQ — release date, price, platforms, multiplayer support, achievements, languages, and the questions that come up before buying.',
};

// Answers are drawn from the Steam store listing (appid 2235200, fetched
// 2026-10-26) and Veewo's Steam announcements for the same app. Facts Veewo has
// not published carry [Unconfirmed] rather than a guess.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When did Neon Abyss 2 come out?',
    answer:
      'Veewo Games announced 1.0 for October 8, 2026 and published the 1.0 update notes on that date. Steam lists the release date as Oct 7, 2026, so the two official sources differ by one day; we record both rather than pick one. Before 1.0 the game was in Early Access.',
  },
  {
    question: 'How much does Neon Abyss 2 cost?',
    answer:
      'The Steam store lists $19.99 with no discount at the time of checking (2026-10-26). Three DLC appids are attached to the game. The Archenemy Returns pack was free for anyone who bought during Early Access and became paid after 1.0.',
  },
  {
    question: 'What platforms is Neon Abyss 2 on?',
    answer:
      'Steam on Windows is confirmed by the store API: Windows true, Mac false, Linux false. Veewo’s launch announcement says 1.0 came to "PC and consoles", but the official site and announcements do not list which console storefronts, so specific PlayStation, Xbox or Switch availability is [Unconfirmed] here.',
  },
  {
    question: 'Does Neon Abyss 2 have local co-op or split screen?',
    answer:
      'No. Steam’s feature categories list Online Co-op as the only multiplayer option — there is no Shared/Split Screen, split-screen, or Remote Play Together entry. Up to four players can play together online and may explore different rooms on the same map.',
  },
  {
    question: 'How many players can play Neon Abyss 2 together?',
    answer:
      'Four: one host plus up to three friends online. Free chat was removed on 2026-07-30 for age-rating and moderation reasons, so co-op communication is through preset emotes.',
  },
  {
    question: 'Is Neon Abyss 2 on Game Pass?',
    answer:
      'No Game Pass listing appears in the Steam store data or in any Veewo announcement we checked on 2026-10-26. That is a record of what official sources say today, not a promise about future availability.',
  },
  {
    question: 'Does Neon Abyss 2 run on Steam Deck?',
    answer:
      'Steam Deck compatibility is [Unconfirmed]. The store data we can read does not include a Deck rating, and the published minimum specs (Windows 10 64-bit, dual-core 2.4 GHz, 8 GB RAM, GTX 950-class graphics) describe a Windows PC rather than the Deck.',
  },
  {
    question: 'Does Neon Abyss 2 have achievements?',
    answer:
      'Yes — 32 Steam achievements. They were added with the 1.0 update and pop automatically if you already met the criteria. One achievement requirement was lowered from clearing the game with 10 different Agents to 3 in the October 10–16 patch.',
  },
  {
    question: 'What languages does Neon Abyss 2 support?',
    answer:
      'Twelve: English, French, Italian, German, Japanese, Korean, Russian, Simplified Chinese, Traditional Chinese, Polish, Portuguese (Brazil), and Spanish (Spain). The 1.0 update included a translation review pass across those languages.',
  },
  {
    question: 'Is there crossplay between PC and consoles?',
    answer:
      '[Unconfirmed]. Veewo has not published a crossplay statement, and nothing in the Steam listing or the 2026 announcements describes it. Players on different Steam branches (Beta vs default) cannot play together, which is a version issue rather than crossplay.',
  },
  {
    question: 'Does Early Access progress carry into 1.0?',
    answer:
      'The 1.0 notes include older-save compatibility work and paired Steam backup/restore of the save and its progression data, and the October patch added recovery for corrupted local saves. Finish any run in progress before patching — both official posts warn that updating can affect an in-progress run.',
  },
  {
    question: 'Can I play Neon Abyss 2 solo?',
    answer:
      'Yes. Single-player is listed as a Steam feature category, and co-op is optional: Classic mode is the same run, just without other Agents in the room.',
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
