import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: Your First Climb', description: 'New to Phantom Tower? Master the core loop — choose your class, understand elements, survive the floors, and beat your first boss.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-30' },
  { title: 'All Classes & Playstyles Guide', description: 'Complete breakdown of all 8 classes — strengths, weaknesses, elemental affinities, and playstyle recommendations for every adventurer.', slug: 'classes-guide', category: 'Classes', updated: '2026-07-30' },
  { title: 'Elemental System & Reactions Guide', description: 'Master IGNIS, AQUA, TERRA, and VENTI. All 16 elemental reactions explained with combo strategies and synergy tips.', slug: 'elements-guide', category: 'Elements', updated: '2026-07-30' },
  { title: 'Best Builds & Synergies Guide', description: 'Top-tier builds combining classes, weapons, elements, and Tower Blessings. Meta strategies for Climb and Survival modes.', slug: 'best-builds', category: 'Builds', updated: '2026-07-30' },
  { title: 'Weapons & Gear — Complete Guide', description: 'All 6 weapon types, 128 weapons, 200+ gear pieces, Soulbinder system, and how to forge and upgrade your equipment.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-07-30' },
  { title: 'Tower Blessings — All 47 Blessings Guide', description: 'Every Tower Blessing explained, tier-ranked, with synergy combinations that can transform your run.', slug: 'blessings-guide', category: 'Blessings', updated: '2026-07-30' },
];

const FAQ_ITEMS = [
  { question: 'What is Phantom Tower?', answer: 'Phantom Tower is a fast-paced roguelike action RPG developed by Horien Studio, released July 13, 2026 on Steam Early Access. You choose from 8 unique classes, master 4 elements (IGNIS, AQUA, TERRA, VENTI), collect 128 weapons and 200+ gear pieces, and climb a mysterious 100-floor tower that no one has ever reached the top of.' },
  { question: 'Is Phantom Tower single-player or multiplayer?', answer: 'Phantom Tower is currently single-player only. The developers are exploring the possibility of implementing multiplayer co-op during Early Access. Both Climb Mode and Survival Mode are solo experiences.' },
  { question: 'How many classes are in Phantom Tower?', answer: 'There are 8 unique classes, each with distinct abilities, combat styles, and elemental affinities. The free version (mobile) includes the Warrior class, with additional classes unlockable. On Steam, all 8 classes are available.' },
  { question: 'What are the elements in Phantom Tower?', answer: 'The four elements are IGNIS (Fire), AQUA (Water), TERRA (Earth), and VENTI (Wind). You can swap elements mid-battle to trigger 16 different elemental reactions, including freezing, erosion, chain attacks, and shockwaves.' },
  { question: 'What are Tower Blessings?', answer: 'Tower Blessings are powerful, game-changing abilities hidden across the tower floors. There are 47 unique blessings (like Artemis Descent and Chain Quake) that dramatically reshape each run. Stacking blessings creates powerful synergies.' },
  { question: 'What happens when you die?', answer: 'In Climb Mode, you keep your forged equipment and character progression between runs, but lose items collected during that specific run. In Survival Mode, death is permanent — it is a true permadeath mode where you face infinite hordes.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a1a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Phantom Tower <span className="text-purple-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the roguelike action RPG by Horien Studio.
        </p>
        <p className="text-sm text-gray-600 mb-8">Released July 13, 2026 — Available on Steam Early Access</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3988410/Phantom_Tower/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-purple-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
