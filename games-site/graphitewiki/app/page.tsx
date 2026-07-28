import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: "Beginner's Guide", description: 'New to Graphite? Start here — learn the core mechanics, hero roles, timeline combat, and how to survive your first few runs.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-27' },
  { title: 'All Heroes Overview', description: 'Complete breakdown of all 7 heroes — Warrior, Rogue, Hunter, Monk, Mage, Bard, and Tamer. Abilities, playstyles, and role recommendations.', slug: 'heroes-guide', category: 'Heroes', updated: '2026-07-27' },
  { title: 'Best Builds & Artifacts', description: 'Optimized artifact builds for every hero. Learn unlimited artifact stacking strategies and synergy combinations for maximum power.', slug: 'builds-artifacts-guide', category: 'Builds', updated: '2026-07-27' },
  { title: 'Combat & Break System', description: 'Master timeline-based combat and the Break system. Learn turn order manipulation, Break windows, and how to chain devastating combos.', slug: 'combat-guide', category: 'Combat', updated: '2026-07-27' },
  { title: 'Boss Strategy Guide', description: 'Every boss in Graphite — attack patterns, Break timings, recommended team compositions, and loot tables for each act.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-27' },
  { title: 'Campaign Walkthrough', description: 'Complete 4-act campaign walkthrough. Best routes, key choices, secret encounters, and how to prepare for each act\'s challenge.', slug: 'walkthrough-guide', category: 'Walkthrough', updated: '2026-07-27' },
];

const FAQ_ITEMS = [
  { question: 'What is Graphite?', answer: 'Graphite is a pen-and-ink tactical roguelike RPG developed by RipRed and published by indie.io. Featuring 7 unique heroes, timeline-based combat, and a deep artifact stacking system, it launched on Steam on July 27, 2026.' },
  { question: 'How many heroes are in Graphite?', answer: 'Graphite features 7 heroes: Warrior (tank/defender), Rogue (single-target burst), Hunter (ranged damage), Monk (support/healer), Mage (AoE damage), Bard (buffer/controller), and Tamer (pet-based damage).' },
  { question: 'How does the Break system work?', answer: 'Every enemy in Graphite has a Break gauge displayed on the timeline. Attacking during Break windows deals bonus damage and can interrupt enemy actions. Managing Break timing is the core of tactical combat.' },
  { question: 'What is Timeline combat?', answer: 'Graphite uses a visual timeline showing turn order for both allies and enemies. Actions shift positions on the timeline — fast abilities move you earlier, heavy attacks move you later. Mastering the timeline is essential for success.' },
  { question: 'How do Artifacts and stacking work?', answer: 'Artifacts are equippable items that grant passive bonuses, active abilities, or modify hero stats. Unlike most games, Graphite allows unlimited artifact stacking — you can equip multiple copies of the same effect for compounding power.' },
  { question: 'What is the Bond system?', answer: 'The Bond system tracks relationships between heroes during a run. Bond levels unlock bonus effects — shared stats, combo attacks, and reaction abilities. Bonds carry through a run but reset between runs (roguelike progression).' },
  { question: 'What is the Tarot adventure deck?', answer: 'Between battles, the Tarot deck determines events, encounters, and rewards on the adventure map. Each Tarot card has unique outcomes — some offer power at a cost, others grant free blessings. Your choices shape each run differently.' },
  { question: 'How many acts are in the campaign?', answer: 'The campaign has 4 acts, each culminating in a boss fight. Acts increase in difficulty and introduce new enemy types, Tarot events, and environmental hazards. A single successful run takes 2-3 hours.' },
  { question: 'Can I play Graphite on Steam Deck?', answer: 'Yes. Graphite is verified on Steam Deck. The timeline interface and turn-based combat work well with controller input.' },
  { question: 'Is there a meta-progression system?', answer: 'Yes. Even when a run ends, you earn currency that unlocks permanent upgrades — new starting artifacts, hero passives, and Tarot card options for future runs.' },
  { question: 'Does Graphite have controller support?', answer: 'Yes, Graphite supports full controller input alongside keyboard and mouse.' },
  { question: 'What is the pen-and-ink art style?', answer: 'Graphite\'s visual identity is inspired by hand-drawn ink illustrations — all characters, enemies, and environments are rendered in a monochromatic pen-and-ink art style with subtle red accents. The aesthetic draws from classic fantasy sketchbooks.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Graphite <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the pen-and-ink tactical roguelike RPG by RipRed.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launched July 27, 2026 on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2788990/Graphite/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-red-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
