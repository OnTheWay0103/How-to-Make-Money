import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Probably Stolen FAQ: Release Date, Price, Platforms',
  description:
    'Probably Stolen FAQ from official sources: release time, price and launch discount, platforms, demo status, languages, achievements, Workshop mods, and specs.',
};

// Every answer below is traceable to the Steam store page (app 4348910), the
// Steam AppDetails API, or a Questing Goose Studio / tinyBuild Steam
// announcement, all checked 2026-10-28 (A1–A5 in
// keyword-results/probablystolen-sources.md). Anything the studio has not
// stated is marked [Unconfirmed] rather than estimated.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'When does Probably Stolen release?',
    answer:
      'October 28, 2026, at 2:00 PM CET / 9:00 AM EDT / 6:00 AM PDT, which is 21:00 in Beijing. The date and the exact hour both come from the studio’s own release announcement on October 26, 2026, so there is no time-zone guesswork involved.',
  },
  {
    question: 'How much does Probably Stolen cost?',
    answer:
      'US$19.99 in the United States, with a 10% launch discount. The official announcement lists €19.99 in the EU, £16.99 in the UK, ¥55 in China, ¥1,999 in Japan, C$24.99 in Canada, A$24.99 in Australia and regional pricing for Russia, Poland, Brazil, MENA, CIS, LATAM and South Asia. A Supporter Edition pairs the game with the official soundtrack.',
  },
  {
    question: 'What platforms is Probably Stolen on?',
    answer:
      'Windows PC via Steam only. The store listing marks Windows as the sole supported platform and marks macOS and Linux as unsupported. No PlayStation 5, Xbox or Switch version has been announced, and the developer’s own site still describes the game as “coming to Steam”.',
  },
  {
    question: 'Is Probably Stolen multiplayer?',
    answer:
      'No. Single-player is the only mode listed on the store page, and nothing in the 1.0 announcement mentions co-op, PvP or online play. If you are looking for a shop sim to play with friends, this one is not it.',
  },
  {
    question: 'Is there a Probably Stolen demo?',
    answer:
      'A free demo ran from September 14, 2026 and was one of the most played demos at Steam Next Fest, but the studio states that once 1.0 releases the demo will no longer be available. Demo saves do carry over to the full game, though the studio recommends starting fresh to avoid bugs.',
  },
  {
    question: 'Do demo mods work in the full game?',
    answer:
      '[Unconfirmed], and the studio leans towards no: its release note says mods made for the demo will likely not be compatible with the main game. The 1.0 build adds Steam Workshop plus a modding API, so mods rebuilt against that API are the ones to expect.',
  },
  {
    question: 'Does Probably Stolen have Steam Workshop and mods?',
    answer:
      'Yes. The 1.0 announcement lists Steam Workshop support, a modding API and mod localization support. Workshop is the intended distribution route, so Nexus or manual installs are not officially described anywhere yet.',
  },
  {
    question: 'How many achievements does Probably Stolen have?',
    answer:
      '21 Steam Achievements at launch. The store listing confirms Steam Achievements as a category and the 1.0 announcement states the number. The individual achievement list has not been published in advance, so we do not guess at names or conditions.',
  },
  {
    question: 'What languages does Probably Stolen support?',
    answer:
      'Eight interface and subtitle languages: English, German, French, Spanish (Spain), Polish, Russian, Simplified Chinese and Japanese. The store page lists them as supported rather than partial, but check the store table after launch for full audio versus text-only splits.',
  },
  {
    question: 'What are the Probably Stolen system requirements?',
    answer:
      'Minimum: Windows 10 64-bit, an Intel Core i3 or equivalent, 8 GB of RAM, a GTX 650 Ti equivalent or better, DirectX 10 and 1 GB of disk space. A recommended tier has not been published, so [Unconfirmed] — the small footprint reflects a stylized shop sim rather than an open world.',
  },
  {
    question: 'Does Probably Stolen work on Steam Deck?',
    answer:
      '[Unconfirmed]. No Steam Deck compatibility rating has been published, and the store categories list a mouse-only option rather than full controller support, which is the main thing to watch. The listed minimum spec (8 GB RAM, GTX 650 Ti class) is well inside the Deck’s hardware.',
  },
  {
    question: 'Is there controller support?',
    answer:
      'Not per the store listing. The categories mention a mouse-only option and playability without timed input, but say nothing about full controller support. Plan on keyboard and mouse until the compatibility badge says otherwise.',
  },
  {
    question: 'How many starting scenarios are there in 1.0?',
    answer:
      'Nine: Apprentice, Water Merchant, Fence, Rock Bottom, Hydroponic Farmer, Gunsmith, Chemist, Rat Wrangler and Aquafarmer. After that you pick one of four difficulty options. Three further scenarios — Organ Trader, Junker and Street Food Vendor — are explicitly post-launch content.',
  },
  {
    question: 'What kind of game is Probably Stolen?',
    answer:
      'A cyberpunk shopkeeping simulator set on a dystopian space station. You craft, trade and smuggle goods of questionable origin, juggle faction loyalties, and try to buy out your own shop before rising rent forces you out. Developer Questing Goose Studio cites Space Station 13 and Papers, Please as inspirations.',
  },
  {
    question: 'Who makes Probably Stolen?',
    answer:
      'Questing Goose Studio developed it and tinyBuild publishes it. The game began as a solo project by developer Bei Ning Pan, who was later joined by four artists and three audio developers. It reached 500,000 wishlists and 100,000 playtest players before launch.',
  },
  {
    question: 'Is Probably Stolen on Game Pass or PS5?',
    answer:
      '[Unconfirmed] for Game Pass, and no for PS5. No subscription-service listing has been announced, and the store page marks Windows as the only platform. Any page claiming a console version is ahead of the developer.',
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
