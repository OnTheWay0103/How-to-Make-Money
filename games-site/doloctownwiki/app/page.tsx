import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Getting Started',
    description: 'New to Doloc Town? Learn the basics of farming, energy, and money in your first week after the 1.0 launch.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-08-22',
  },
  {
    title: 'How to Make Money Fast',
    description: 'Money-making strategies for every phase — Endyams, cooking, fishing, processing, and the April price spike.',
    slug: 'how-to-make-money',
    category: 'Money',
    updated: '2026-08-22',
  },
  {
    title: 'Fishing Guide: Rods, Fish & Locations',
    description: 'Every fishing rod, the 40+ fish, weather and time requirements, and where the Golden Fish actually spawns.',
    slug: 'fishing-guide',
    category: 'Fishing',
    updated: '2026-08-22',
  },
  {
    title: 'Crops & Seeds Guide',
    description: 'The 30+ crops, gene traits, acid-rain tolerance, and which crops are worth planting when.',
    slug: 'crops-guide',
    category: 'Farming',
    updated: '2026-08-22',
  },
  {
    title: 'Cooking & Recipe Guide',
    description: 'How to unlock the 80+ recipes — quests, mail, tavern cookbooks, traders, and the Tech Tree.',
    slug: 'cooking-recipes-guide',
    category: 'Cooking',
    updated: '2026-08-22',
  },
  {
    title: 'Automation & Drones Guide (1.0)',
    description: 'How the 1.0 drone automation system works — the Automation node, Mechanic Mody, and the two drone phases.',
    slug: 'automation-drone-guide',
    category: 'Endgame',
    updated: '2026-08-22',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Doloc Town?',
    answer: 'Doloc Town is a cozy, side-scrolling post-apocalyptic farming simulator developed by RedSaw Games and published by Logoi Games. You play a young scavenger who builds a vertical farm in the settlement of Doloc Town, growing crops, fishing, raising animals, and automating the farm while surviving acid rain, heat waves, and storms. It blends Stardew Valley-style farming with Fallout-inspired post-apocalyptic survival.',
  },
  {
    question: 'When was Doloc Town released?',
    answer: 'Doloc Town entered Steam Early Access on May 8, 2025, and launched its full 1.0 version on August 6, 2026. The 1.0 release added the Old City Ruins area, the conclusion of the main story, the farming automation (drone) system, new tools, and additional language support.',
  },
  {
    question: 'Is Doloc Town free to play?',
    answer: 'No. Doloc Town is a paid single-player game on Steam. Early Access purchasers received the full 1.0 release free. Check the Steam store page for the current price.',
  },
  {
    question: 'What platforms is Doloc Town on?',
    answer: 'Doloc Town is available on PC via Steam, and is rated "Playable" on Steam Deck (per the Steam store page). Console versions have not been announced.',
  },
  {
    question: 'Can I play Doloc Town solo?',
    answer: 'Yes. Doloc Town is a single-player game. There is no co-op or multiplayer mode.',
  },
  {
    question: 'How long is Doloc Town?',
    answer: 'Per the official press material, the main story offers 30+ hours of gameplay, with 100+ hours including side content. The game features 80 total achievements.',
  },
  {
    question: 'How many crops, recipes, and fish are in Doloc Town?',
    answer: 'Per the official 1.0 announcement: 30+ crops, 80+ recipes, and 40+ fish. The gene system lets you modify crop traits, and 80 achievements are in the game.',
  },
  {
    question: 'What are the system requirements?',
    answer: 'Per the official Steam store page — Minimum: Windows 10, Intel Core i3 6100, 8 GB RAM, GTX 460, 2 GB storage. See our Steam Deck & System Requirements guide for details.',
  },
  {
    question: 'How does saving work in Doloc Town?',
    answer: 'Doloc Town saves your progress as you play — you can close the game and continue where you left off. See the FAQ guide for details on how to save safely.',
  },
  {
    question: 'Does Doloc Town have mods?',
    answer: 'Yes. Steam Workshop integration was added during Early Access, so players can share and install mods through the Steam Workshop. See our Mods & Workshop guide.',
  },
  {
    question: 'What languages does Doloc Town support?',
    answer: 'At 1.0, the game supports English, Simplified Chinese, and Traditional Chinese, plus Japanese, Korean, Russian, French, German, and Brazilian Portuguese (per the 1.0 announcement).',
  },
  {
    question: 'How do I report bugs or give feedback?',
    answer: 'The best channels are the Steam Community forums for Doloc Town. The developers (RedSaw Games) have been active with community updates throughout Early Access.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Doloc Town <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Guide hub for the post-apocalyptic farming sim by RedSaw Games.
          Money-making strategies, crops, fishing, recipes, drone automation — everything you need.
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
