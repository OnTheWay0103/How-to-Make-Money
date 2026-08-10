import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started', description: 'New to The Relic: First Guardian? Learn the basics — choose your first weapon, understand the relic system, and survive your first hours in Arsiltus.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-11' },
  { title: 'Weapons Guide — All 5 Families', description: 'Complete breakdown of Sword & Shield, Longsword, Dagger, Two-Handed, and Battle Staff — and the 12 skill trees (two per family). Find your playstyle.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-08-11' },
  { title: 'Best Builds — Top Builds for Every Weapon', description: 'Optimal relic combinations, artifact pairings, and skill tree synergies for maximum damage output across all 5 weapon families.', slug: 'builds-guide', category: 'Builds', updated: '2026-08-11' },
  { title: 'Boss Strategies — How to Fight the Brutals', description: 'The 70-80 Brutal boss fights, the parry-gate vs dodge-gate split, and the confirmed general strategies that win fights.', slug: 'boss-strategies', category: 'Bosses', updated: '2026-08-11' },
  { title: 'Runes & Relics Guide', description: 'The over-70 relic fragments that replace leveling. How relics work, slot unlocks via Shards of Awakening, and Relic Energy skills.', slug: 'runes-guide', category: 'Progression', updated: '2026-08-11' },
  { title: 'Combat Guide — Mechanics Deep Dive', description: 'The confirmed combat economy: zero-stamina attacks, defense-only stamina, cooldown skills, and the generous parry window.', slug: 'combat-guide', category: 'Combat', updated: '2026-08-11' },
];

const FAQ_ITEMS = [
  { question: 'What is The Relic: First Guardian?', answer: 'The Relic: First Guardian is a Korean dark-fantasy soulslike action RPG developed by Project Cloud Games and published by Perp Games. Set in the ruined world of Arsiltus, you play as the last Guardian tasked with recovering shattered relic fragments and sealing the encroaching Void. It released July 31, 2026 on PC (Steam) and PS5 for around $49.99.' },
  { question: 'Is it single-player or multiplayer?', answer: 'The Relic: First Guardian is a single-player-only experience. There is no co-op or multiplayer mode — it is a traditional solo soulslike, focused on mastering combat and exploration alone.' },
  { question: 'What are the weapon types?', answer: 'There are 5 weapon families: Sword & Shield (defensive), Longsword (balanced), Dagger / dual blades (fast), Two-Handed (heavy), and Battle Staff (skill-based). There are 12 skill trees total — two per weapon family — allowing deep build customization.' },
  { question: 'How does leveling work?', answer: 'There is no traditional leveling system. Character growth comes entirely from collecting relic fragments (runes) — 70+ unique passive effects that modify skills, combat behavior, and weapon performance, plus Relic Energy used to buy skills in weapon skill trees.' },
  { question: 'How does stamina work?', answer: 'Attacks cost zero stamina. Stamina is reserved exclusively for dodging, blocking, and parrying. Skills use cooldown timers rather than resource pools. This encourages aggressive play while maintaining defensive options.' },
  { question: 'Is there a difficulty setting?', answer: 'No difficulty options are confirmed in the launch build. The challenge is managed through the game itself — exploring for relics, buying HP/stamina skill nodes, collecting potion shards, and adapting your build to each boss.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The Relic: First Guardian <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the Korean dark-fantasy soulslike action RPG by Project Cloud Games.
        </p>
        <p className="text-sm text-gray-600 mb-8">Released July 31, 2026 — PC (Steam), PS5</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2827820/The_Relic_First_Guardian/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Buy on Steam
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
