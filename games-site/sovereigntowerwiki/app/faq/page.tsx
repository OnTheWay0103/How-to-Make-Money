import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Sovereign Tower — release date, price, platforms, knights, romance, factions, system requirements, and more.',
};

const FAQ_ITEMS = [
  {
    question: 'What is Sovereign Tower?',
    answer:
      'Sovereign Tower is a story-rich, round-table management RPG developed by WILD WITS (Rennes, France) and published by Curve Games. You play the new Sovereign of a magical tower: recruit eccentric knights, assign them to quests, balance the factions of the realm, and rewind time with the help of a Demon in the crypts. It blends visual-novel storytelling with court management — reviewers have compared the knight-dispatch core to Dispatch and Reigns.',
  },
  {
    question: 'When did Sovereign Tower release?',
    answer:
      'Sovereign Tower launched on PC (Steam) on August 6, 2026. A free extended demo (Act 0 + Act 1) was available during Steam Next Fest from June 15, 2026, and an earlier demo was released on itch.io on January 16, 2026.',
  },
  {
    question: 'What does Sovereign Tower cost?',
    answer:
      'The game is $19.99 on Steam, with a 15% launch discount ($16.99) during the first week. A supporter bundle with the soundtrack (including two songs by Hildegard Von Blingin\') was also available at launch. Check the Steam store page for the current price.',
  },
  {
    question: 'Can I play solo?',
    answer:
      'Yes. Sovereign Tower is a single-player game. There is no co-op or multiplayer mode.',
  },
  {
    question: 'What platforms is it on?',
    answer:
      'Sovereign Tower is available on Windows and Linux via Steam, and is Steam Deck Verified. It does not support macOS. Console versions have not been announced.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'Per the Steam store page — Minimum: Windows 10, Intel Core i5-4670K, 4 GB RAM, GeForce GT 1030 (2 GB), DirectX 12, 3 GB storage. Linux/SteamOS is supported. See the Price, Platforms & System Requirements guide for details.',
  },
  {
    question: 'How long is the game?',
    answer:
      'Per IGN, the main story is roughly 8 hours and story plus side content around 18 hours. Gamalytic reported an average playtime of about 7.3 hours as of late August 2026, and reviewers note the time-rewind mechanic makes playthrough length vary considerably. New Game Plus is available.',
  },
  {
    question: 'How many knights can I recruit?',
    answer:
      'Community guides list 23–24 recruitable knights. The Round Table only holds 6 seats in Act 1, 8 in Act 2, and 10 in Act 3, and some recruits are mutually exclusive — so you cannot collect every knight in a single run.',
  },
  {
    question: 'Does Sovereign Tower have romance?',
    answer:
      'Yes. Knights who stay satisfied can develop into "deep friendships or even romances" (per the official feature list, which mentions "forbidden romances"). Romance is also a diplomatic tool — one reviewer describes a noble uprising avoided by marrying a recruited knight.',
  },
  {
    question: 'How does saving work?',
    answer:
      'The game saves your progress automatically, and Steam Cloud sync is available. Community players recommend saving often, especially before risky quest assignments. The exact save-file location on disk is [Unconfirmed] at the time of writing.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'The Steam Next Fest demo was localized in English, French, Simplified Chinese, German, Korean, and Japanese (6 languages), and the full game launched with the same set per store listings.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer:
      'The best channels are the Steam Community forums for Sovereign Tower and the official Sovereign Tower Discord (linked from the Steam store page).',
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}
