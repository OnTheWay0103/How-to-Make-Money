import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: How to Survive Your First Extraction',
    description: 'New to Mistfall Hunter? Learn the extraction loop, gear priorities, early mistakes to avoid, and how to get your first Soul of Return.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-07-04',
  },
  {
    title: 'All 6 Classes Guide: Which One to Pick',
    description: 'Complete breakdown of Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer, and Withered Knight. Best class for solo, PvP, and beginners.',
    slug: 'classes-guide',
    category: 'Classes',
    updated: '2026-07-04',
  },
  {
    title: 'Mercenary Build Guide: Best Sword & Shield Setup',
    description: 'The tankiest beginner class explained — block mechanics, Shield Dash combos, best talents, affixes, and gear priorities.',
    slug: 'mercenary-build-guide',
    category: 'Builds',
    updated: '2026-07-04',
  },
  {
    title: 'Extraction Guide: How the Returner Woodling Works',
    description: 'Master the extraction loop — find the Returner Woodling, secure the Soul of Return, survive the mist, and escape with your loot.',
    slug: 'extraction-guide',
    category: 'Mechanics',
    updated: '2026-07-04',
  },
  {
    title: 'Class Tier List (July 2026)',
    description: 'Current meta ranking for solo PvP, squad play, and PvE. S-tier to D-tier with detailed explanations for each class.',
    slug: 'tier-list-guide',
    category: 'Meta',
    updated: '2026-07-04',
  },
  {
    title: 'Camp Upgrades Guide: What to Build First',
    description: 'Priority order for Goddess Statue, Gyldenblod Pool, Shop, Warehouse, and Tavern. Maximize your camp progression from day one.',
    slug: 'camp-upgrades-guide',
    category: 'Progression',
    updated: '2026-07-04',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Mistfall Hunter?',
    answer: 'Mistfall Hunter is a dark fantasy PvPvE extraction ARPG launching July 29, 2026 on Steam, PS5, and Xbox Series X|S. You play as a Gyldhunter descending into mist-shrouded ruins to scavenge Gyldenblood and gear — but if you die, you lose everything.',
  },
  {
    question: 'How many classes are there?',
    answer: 'Six classes at launch: Mercenary (sword & shield tank), Sorcerer (ranged glass-cannon), Blackarrow (precision archer), Shadowstrix (stealth assassin), Seer (team support), and Withered Knight (greatsword counter-fighter).',
  },
  {
    question: 'Is Mistfall Hunter free to play?',
    answer: 'No. Mistfall Hunter is a paid title. The exact price has not been announced yet, but it will be available on Steam, PlayStation Store, and Xbox Store.',
  },
  {
    question: 'Can I play solo?',
    answer: 'Yes, Mistfall Hunter supports solo play as well as 3-player squads. Shadowstrix and Mercenary are particularly strong for solo players. Solo play is viable but you will face squads in the same extraction zones.',
  },
  {
    question: 'What happens when I die?',
    answer: 'You lose everything you are carrying — all gear, loot, and the Soul of Return. Items stored in your warehouse (stash) are safe. This is a core extraction mechanic: risk vs. reward.',
  },
  {
    question: 'When is the release date?',
    answer: 'Mistfall Hunter launches on July 29, 2026. An open beta with all 6 classes is expected before launch. The game had a popular demo during Steam Next Fest (June 2026).',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Mistfall Hunter <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the dark fantasy PvPvE extraction ARPG.
          Classes, builds, extraction tips, tier lists — everything you need to survive the mist.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/mistfall-hunter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Wishlist on Steam
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
