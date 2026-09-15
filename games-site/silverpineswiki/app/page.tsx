import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const STEAM_URL = 'https://store.steampowered.com/app/2333000/Silver_Pines/';
const DEMO_URL = 'https://store.steampowered.com/app/4540100/Silver_Pines_Demo/';

const FEATURED_GUIDES = [
  {
    title: 'Release Date, Price and Platforms — Everything Confirmed',
    description:
      'Silver Pines releases October 8, 2026 on PC, PS5, Xbox Series X|S, Switch and Switch 2. The price had not been announced as of September 16, 2026 — everything that is actually confirmed, and everything that is not.',
    slug: 'silver-pines-release-date-price-platforms',
    category: 'Release Info',
    updated: '2026-09-16',
  },
  {
    title: 'Demo Guide — What the Free Steam Demo Contains',
    description:
      'A free Silver Pines demo has been on Steam since June 1, 2026 and sits at 95.9% Overwhelmingly Positive. What the demo covers, roughly how long it runs, and what it teaches you before October 8.',
    slug: 'silver-pines-demo-guide',
    category: 'Demo',
    updated: '2026-09-16',
  },
  {
    title: 'How Saving Works — Phone Booths and Save Coins',
    description:
      'Silver Pines has no autosave. Coin-operated phone booths are the only place you can save, and the same coins buy supplies from vending machines. How the system works and how to budget for it.',
    slug: 'silver-pines-save-system-phone-booths',
    category: 'Mechanics',
    updated: '2026-09-16',
  },
  {
    title: 'Beginner Guide — 12 Rules Before You Start',
    description:
      'The habits that keep Red Walker alive: save early, spend coins deliberately, fight or avoid on purpose, repair before you explore, and never open a menu with a monster in the room.',
    slug: 'silver-pines-beginner-guide',
    category: 'Beginner',
    updated: '2026-09-16',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Silver Pines?',
    answer:
      'Silver Pines is a survival horror metroidvania developed by Wych Elm and published by Team17. You play private investigator Red Walker, who arrives in a half-abandoned American town to track down a missing musician named Eddie Velvet. It combines classic fixed-resource survival horror — scarce ammunition, a limited inventory, a save system that costs currency — with metroidvania structure: locked doors, new tools, backtracking and shortcuts. It releases on October 8, 2026.',
  },
  {
    question: 'Is Silver Pines out yet?',
    answer:
      'No. Silver Pines releases on October 8, 2026 — that is the date on the official Steam store page (App ID 2333000), and Steam lists the game as coming soon. The release is 22 days away as of September 16, 2026.',
  },
  {
    question: 'Is there a Silver Pines demo?',
    answer:
      'Yes, and it is the best reason to be interested in the game. A free standalone Silver Pines Demo (App ID 4540100) has been on Steam since June 1, 2026. As of September 16, 2026 it holds 802 user reviews at 95.9% — an Overwhelmingly Positive rating, which is the strongest demand signal available for a game that has not launched yet.',
  },
  {
    question: 'How much will Silver Pines cost?',
    answer:
      'The price had not been announced as of September 16, 2026 [Unconfirmed]. Steam’s store data for Silver Pines contains no price information at all, which is normal for a game that is still a few weeks from launch. We will not guess at a number — this answer gets updated the moment a price appears.',
  },
  {
    question: 'What platforms is Silver Pines on?',
    answer:
      'PC (Steam and the Epic Games Store), PlayStation 5, Xbox Series X|S, Nintendo Switch and Nintendo Switch 2. The Steam version is Windows-only — Steam’s platform data lists Windows as supported and macOS and Linux as unsupported. No physical edition has been announced [Unconfirmed].',
  },
  {
    question: 'Is Silver Pines on Game Pass?',
    answer:
      'No Game Pass release has been announced as of September 16, 2026 [Unconfirmed]. Silver Pines is a paid release published by Team17, and no subscription service has been confirmed.',
  },
  {
    question: 'Is Silver Pines multiplayer or co-op?',
    answer:
      'No. Steam lists single-player as the only play mode for both Silver Pines and its demo. There is no co-op, no multiplayer and no PvP.',
  },
  {
    question: 'Who is making Silver Pines?',
    answer:
      'Silver Pines is developed by Wych Elm and published by Team17. Wych Elm is a small remote team; the studio’s members have previously worked on titles including Helldivers 2 and Yoku’s Island Express. Silver Pines is the studio’s debut release under its own name. (Note the split: Wych Elm develops, Team17 publishes.)',
  },
  {
    question: 'Does Silver Pines have autosave?',
    answer:
      'No. Silver Pines has no autosave. Coin-operated phone booths are the only save points in the game [Community-reported, not stated on the Steam store page]. If you die before reaching one, you lose everything since your last save. That single design decision shapes almost every other decision you make in the game.',
  },
  {
    question: 'What is the save coin system in Silver Pines?',
    answer:
      'Silver Pines uses one currency for two competing purposes: the spare change you scavenge buys supplies from vending machines, and the same coins are spent to save your progress at phone booths. Spending everything on healing items leaves you unable to bank your progress; hoarding coins for saves leaves you short on supplies. Budgeting between the two is the core resource tension.',
  },
  {
    question: 'What are the Silver Pines system requirements?',
    answer:
      'Official Windows minimum: a 64-bit processor and OS, Windows 10, an Intel Core i5-4460 or AMD Ryzen 3 1200, 8 GB RAM, an NVIDIA GeForce GTX 660 Ti or AMD Radeon R9 270X, DirectX 12 and 5 GB of available storage. Official recommended: Windows 11, an Intel Core i5-6600 or AMD Ryzen 5 1600, 8 GB RAM, an NVIDIA GeForce GTX 770 or AMD Radeon R9 380, DirectX 12 and 5 GB of storage. These are the developer’s published figures.',
  },
  {
    question: 'What languages does Silver Pines support?',
    answer:
      'Steam lists nine supported languages: English (with full audio), French, German, Spanish (Spain), Spanish (Latin America), Japanese, Simplified Chinese, Traditional Chinese, Portuguese (Brazil) and Russian. English is the only language marked as having full audio support; the rest are interface and subtitle translations.',
  },
  {
    question: 'Is Silver Pines Steam Deck verified?',
    answer:
      'Not as of September 16, 2026 [Unconfirmed] — no Steam Deck compatibility rating had been published. Note that the game has full controller support on Steam and supports DualShock and DualSense controllers, so a controller-first layout is clearly intended. Check the store page for a Deck rating closer to launch.',
  },
  {
    question: 'Is Silver Pines scary? How violent is it?',
    answer:
      'Silver Pines is a survival horror game with a mature rating. Steam’s content descriptors mark it for general mature content, with the official note: “This game contains blood, violence, horror themes and general mature themes unsuitable for younger players.” The demo’s descriptor is more specific — “violence, gore, blood, alcohol reference and bad language throughout.” There is no nudity or sexual content descriptor. If you are looking for a horror game without gore, this is not that.',
  },
  {
    question: 'Does Silver Pines have multiple endings?',
    answer:
      'Yes — and unusually, the endings are not gated behind irreversible branching choices. In a Game8 interview, Wych Elm developer Mattias Snygg explained that all endings can be reached on a single save file, and that they reward thoroughly exploring the town rather than replaying the game to pick a different door.',
  },
  {
    question: 'Is there an official Silver Pines wiki?',
    answer:
      'No organised wiki exists. As of September 16, 2026 there is no Fandom, wiki.gg, Game8 or other structured English, Chinese or Japanese wiki for Silver Pines — the one page that appears in search results is an automated template stub with no locations, items or walkthrough content. This site is an independent, unofficial fan resource and is not affiliated with Wych Elm or Team17.',
  },
  {
    question: 'Is this site official?',
    answer:
      'No. Silver Pines Wiki is an unofficial fan-made resource. All trademarks and game content belong to their respective owners. Because the game has not launched yet, anything not documented by an official source is marked [Unconfirmed] rather than guessed at.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0d1a1e] to-[#0b1417]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Silver Pines <span className="text-teal-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
          The survival horror metroidvania from Wych Elm and Team17 — a
          half-abandoned town, scarce ammunition, and a save system that costs
          coins.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Releasing October 8, 2026 — PC, PS5, Xbox Series X|S, Switch &amp; Switch 2. Free demo out now.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-teal-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Play the Free Demo
          </a>
        </div>
        <p className="text-xs text-gray-600 mt-6">
          Demo: 802 Steam reviews · 95.9% Overwhelmingly Positive (2026-09-16)
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1c3038]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#0f1c21] rounded-lg border border-[#1c3038]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-teal-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
