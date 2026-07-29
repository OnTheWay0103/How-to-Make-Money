import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: First Descent into Bonehold', description: 'New to Bonehold? Master the core loop — choose your class, understand charge attacks, survive the fortress, and beat your first boss.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-30' },
  { title: 'All 7 Classes & Playstyles Guide', description: 'Complete breakdown of all seven classes — Knight, Barbarian, Scorcher, Spellblade, and three unlockable classes. Strengths, weaknesses, and playstyle recommendations.', slug: 'classes-guide', category: 'Classes', updated: '2026-07-30' },
  { title: 'Best Builds & Synergies Guide', description: 'Optimal weapon and class synergies, prefix stacking strategies, and how to create run-defining builds with cross-class hybridization.', slug: 'best-builds', category: 'Builds', updated: '2026-07-30' },
  { title: 'Weapons & Charge Attacks — Complete Guide', description: 'Every weapon type, charge mechanic deep-dive, legendary items, and how prefixes transform ordinary gear into run-defining tools.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-07-30' },
  { title: 'Boss Strategies — All Champions Guide', description: 'Attack patterns, punish windows, and positioning tips for every elite boss and champion in the Bonehold fortress.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-30' },
  { title: 'Combat & Survival — Advanced Tactics', description: 'Master dodging, blocking, parrying, trap manipulation, chokepoint baiting, and spatial awareness to survive deeper dungeon floors.', slug: 'combat-guide', category: 'Combat', updated: '2026-07-30' },
];

const FAQ_ITEMS = [
  { question: 'What is Bonehold?', answer: 'Bonehold is a 3D roguelike dungeon crawler ARPG developed by Pixel Jackal, released July 28, 2026 on Steam. You choose from 7 unique classes, collect procedurally generated weapons and spells, and fight through an ancient necromantic fortress filled with skeletons, ghosts, and magical abominations.' },
  { question: 'Is Bonehold single-player or multiplayer?', answer: 'Bonehold is a single-player game. There is no co-op or multiplayer mode. The entire experience is designed around solo dungeon delving.' },
  { question: 'How many classes are there in Bonehold?', answer: 'There are 7 unique classes: Knight, Barbarian, Scorcher, Spellblade, and three unlockable classes. Each class has distinct abilities and playstyles, and you can hybridize by mixing gear across classes.' },
  { question: 'What is the combat like?', answer: 'Combat is hack-and-slash ARPG style with a heavy emphasis on charge attacks. Most weapons use a charge mechanic — timing and positioning are critical. Combat also includes dodging, blocking, parrying, and using environmental traps to your advantage.' },
  { question: 'Are dungeons randomly generated?', answer: 'Yes. Dungeon layouts, weapons, armor, spells, and loot are all procedurally generated. Each run is unique, with different room arrangements, enemy placements, and item drops.' },
  { question: 'What happens when you die?', answer: 'Death is permanent for that run — you lose all items collected during that descent. However, meta-progression (unlocked classes, achievements, and some permanent upgrades) carries over between runs.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Bonehold <span className="text-amber-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the roguelike dungeon crawler ARPG by Pixel Jackal.
        </p>
        <p className="text-sm text-gray-600 mb-8">Released July 28, 2026 — Available on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3497800/Bonehold/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
