import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Deadly Days: Roadtrip FAQ — Release Date, Price, Co-op',
  description:
    'Deadly Days: Roadtrip FAQ: 1.0 release date, price, PC and console platforms, two-player co-op, Steam Remote Play, demo status, and whether codes exist.',
};

// Every answer is backed by the Steam store page or an official Steam announcement.
// Community-only claims are worded as such, and unknown values are marked [Unconfirmed]
// instead of guessed.
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'What is Deadly Days: Roadtrip?',
    answer:
      'Deadly Days: Roadtrip is a bullet-heaven roguelite with inventory management, developed by Pixelsplit and published by Sidekick Publishing. You drive a bus through a zombie apocalypse, choose a route, loot and craft gear into a grid backpack, and fight a final boss at the end of each trip. The full 1.0 version launched on October 29, 2026.',
  },
  {
    question: 'When did Deadly Days: Roadtrip release?',
    answer:
      'It entered Early Access on September 22, 2025, and left Early Access with the 1.0 update on October 29, 2026. The 1.0 update is free for existing Early Access owners, and Early Access save games carry over.',
  },
  {
    question: 'Which platforms is it on?',
    answer:
      'Deadly Days: Roadtrip is available on PC via Steam, Xbox Series X|S, and PlayStation 5. The Xbox version supports Xbox Play Anywhere, so one purchase covers the console and Windows PC. We found no official announcement of a Nintendo Switch version.',
  },
  {
    question: 'How much does Deadly Days: Roadtrip cost?',
    answer:
      'The standard price is $14.99. At the time of writing (October 31, 2026) it was discounted 35% to $9.74. Prices and discounts change, so check the Steam page before buying. There is also a supporter pack on Steam, which is optional and not required for gameplay.',
  },
  {
    question: 'Is Deadly Days: Roadtrip on Xbox Game Pass?',
    answer:
      'We found no official announcement that Deadly Days: Roadtrip is included in Game Pass, PlayStation Plus, or any subscription catalogue. Treat claims that it is "free on Game Pass" as [Unconfirmed] until Microsoft or the publisher announces it.',
  },
  {
    question: 'Does Deadly Days: Roadtrip have co-op?',
    answer:
      'Yes. It supports two-player couch co-op on one shared screen, added in the 0.22 update and finished for 1.0. There is no four-player mode.',
  },
  {
    question: 'Can I play co-op online with a friend?',
    answer:
      'Yes, through Steam Remote Play. The host runs the game and streams it to a friend on their Steam friends list. The invited friend does not need to own Deadly Days: Roadtrip. One of the two players needs a controller. There is no matchmaking with strangers and no dedicated-server online mode.',
  },
  {
    question: 'Do both players need to own the game for Remote Play?',
    answer:
      'No. Only the host needs to own Deadly Days: Roadtrip. Steam Remote Play streams the host\'s session to the guest. The trade-off is that the host\'s PC does the rendering, so the host\'s connection and performance affect both players.',
  },
  {
    question: 'Is there a demo?',
    answer:
      'A demo existed during Early Access (separate Steam app 3102400). Whether it is still listed after the 1.0 launch is [Unconfirmed] — check the Steam store page for a "Download Demo" button. We could not confirm that demo save data transfers to the full game.',
  },
  {
    question: 'Are there codes or redeemable promo codes?',
    answer:
      'No. Deadly Days: Roadtrip is a buy-to-play game and has no promotional code system, no newsletter codes, and no redeemable item codes. The only known password is a built-in secret that unlocks the President survivor on the start menu; it is a community-reported cheat code, not a promotional redeem code.',
  },
  {
    question: 'How many playable survivors are there?',
    answer:
      'At least ten survivors are documented across official announcements and community guides, including Survivor, Bushy, Penny the Clown, Vampire, Banana Person, Sheriff, Chicken, Astronaut, Death, and the surfing survivor added in 0.22. The exact total in 1.0 is [Unconfirmed], and some names appear only in community documentation.',
  },
  {
    question: 'Does Early Access save data carry over to 1.0?',
    answer:
      'Yes. The 1.0 announcement confirms that existing save games work in 1.0. The developers warned that the first load may trigger a flood of achievement unlocks as old progress is re-evaluated.',
  },
  {
    question: 'How long is a run, and how long is the game?',
    answer:
      'A single run is a multi-day road trip that ends at a final boss, but the developer has not published an official run length or completion time. We mark both as [Unconfirmed] rather than guess. The Headquarters Run adds a multi-stage endgame after you have beaten the earlier final bosses.',
  },
  {
    question: 'Is there online matchmaking with random players?',
    answer:
      'No. The confirmed online option is Steam Remote Play with someone on your friends list. There is no public matchmaking, no lobby browser, and no dedicated-server mode in the official announcements.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {FAQ_ITEMS.length > 0 && <JsonLd data={faqPageSchema(FAQ_ITEMS)} />}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Release date, price, platforms, co-op, demo, and codes — answered from official Steam sources.
        Community-only claims are labelled, and anything we could not verify is marked [Unconfirmed].
      </p>
      <FAQ items={FAQ_ITEMS} />
      <p className="text-xs text-gray-600 mt-10">
        Last checked against version 1.0 on 2026-10-31. Found an error?{' '}
        <a href="/contact" className="text-amber-400 hover:underline">Let us know</a>.
      </p>
    </div>
  );
}
