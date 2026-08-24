import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Getting Started',
    description: 'New to Sovereign Tower? Learn the daily cycle, your first audiences, and the mistakes that end a reign fast.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-08-25',
  },
  {
    title: 'How to Recruit All Knights',
    description: 'The 23–24 recruitable knights, Round Table seats per act, exclusive recruit routes, and which knights lock each other out.',
    slug: 'knight-recruitment-guide',
    category: 'Recruitment',
    updated: '2026-08-25',
  },
  {
    title: 'Romance Options & Relationships',
    description: 'How knight affinity, favourite meals, and romance actually work — and why marriage can be a diplomatic weapon.',
    slug: 'romance-guide',
    category: 'Romance',
    updated: '2026-08-25',
  },
  {
    title: 'Factions & Affinity Guide',
    description: 'Merchants, Mystics, Scholars, Nobles, the People and the Treasury — how every audience choice shifts the realm.',
    slug: 'factions-guide',
    category: 'Factions',
    updated: '2026-08-25',
  },
  {
    title: 'Time Rewind: How It Works',
    description: 'The Demon in the crypts rewinds time and keeps your knowledge. How to use the signature mechanic without ruining a good timeline.',
    slug: 'rewind-guide',
    category: 'Mechanics',
    updated: '2026-08-25',
  },
  {
    title: 'Knight Tier List',
    description: 'The honest state of knight rankings — community-collected stats for every knight, and why tier lists need play data.',
    slug: 'tier-list',
    category: 'Tier List',
    updated: '2026-08-25',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Sovereign Tower?',
    answer: 'Sovereign Tower is a story-rich, round-table management RPG developed by WILD WITS (Rennes, France) and published by Curve Games. You play the new Sovereign of a magical tower: recruit eccentric knights, assign them to quests, balance the factions of the realm, and rewind time with the help of a Demon in the crypts. It blends visual-novel storytelling with court management — reviewers have compared the knight-dispatch core to Dispatch and Reigns.',
  },
  {
    question: 'When was Sovereign Tower released?',
    answer: 'Sovereign Tower launched on PC (Steam) on August 6, 2026. A free extended demo (Act 0 + Act 1) was available during Steam Next Fest from June 15, 2026, and an earlier demo was released on itch.io on January 16, 2026.',
  },
  {
    question: 'What does Sovereign Tower cost?',
    answer: 'The game is $19.99 on Steam, with a 15% launch discount ($16.99) during the first week. A supporter bundle with the soundtrack (including two songs by Hildegard Von Blingin\') was also available at launch. Check the Steam store page for the current price.',
  },
  {
    question: 'What platforms is Sovereign Tower on?',
    answer: 'Sovereign Tower is available on Windows and Linux via Steam, and is Steam Deck Verified. It does not support macOS. Console versions have not been announced.',
  },
  {
    question: 'Is Sovereign Tower single-player?',
    answer: 'Yes. Sovereign Tower is a single-player game. There is no co-op or multiplayer mode.',
  },
  {
    question: 'How long is Sovereign Tower?',
    answer: 'Per IGN, the main story is roughly 8 hours, and story plus side content around 18 hours. The average playtime reported by Gamalytic was about 7.3 hours as of late August 2026, and reviewers note the time-rewind mechanic makes playthrough length vary considerably. New Game Plus is available.',
  },
  {
    question: 'How many knights can I recruit?',
    answer: 'Community guides list 23–24 recruitable knights. The Round Table only holds 6 seats in Act 1, 8 in Act 2, and 10 in Act 3, and some recruits are mutually exclusive — so you cannot collect every knight in a single run.',
  },
  {
    question: 'Does Sovereign Tower have romance?',
    answer: 'Yes. Knights who stay satisfied can develop into "deep friendships or even romances" (per the official feature list, which mentions "forbidden romances"). Romance is also a diplomatic tool — reviewers describe a noble uprising avoided by marrying a recruited knight.',
  },
  {
    question: 'What are the system requirements?',
    answer: 'Per the Steam store page — Minimum: Windows 10, Intel Core i5-4670K, 4 GB RAM, GeForce GT 1030 (2 GB), DirectX 12, 3 GB storage. Linux/SteamOS is supported. See our Price, Platforms & System Requirements guide for details.',
  },
  {
    question: 'How does saving work in Sovereign Tower?',
    answer: 'The game saves your progress automatically, and Steam Cloud sync is available. Community players recommend saving often, especially before risky quest assignments. The exact save-file location on disk is [Unconfirmed] at the time of writing.',
  },
  {
    question: 'What languages does Sovereign Tower support?',
    answer: 'The Steam Next Fest demo was localized in English, French, Simplified Chinese, German, Korean, and Japanese (6 languages), and the full game launched with the same set per store listings.',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer: 'The best channels are the Steam Community forums for Sovereign Tower and the official Sovereign Tower Discord (linked from the Steam store page).',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Sovereign Tower <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Guide hub for the round-table management RPG by WILD WITS / Curve Games.
          Knight recruitment, romance, factions, time rewind — everything you need to rule.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Play on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            View All Guides →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">
                {item.question}
              </summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
