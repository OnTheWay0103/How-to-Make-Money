import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — First Days in Sengoku Japan', description: 'New to Expeditions: Samurai? Master the core loop — your crew, the world map, stealth vs. diplomacy vs. steel, and how to survive Act One.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-01' },
  { title: 'All Companions Guide — Recruitment & Loyalty', description: 'Complete breakdown of the 8 romanceable companions — recruitment locations, personal quest chains, loyalty, and who fills which role.', slug: 'companions-guide', category: 'Companions', updated: '2026-08-01' },
  { title: 'Best Builds Guide — Character Progression', description: 'Character builds for every class, stat priorities, weapon skill combos, and how to build around stealth, diplomacy, or direct combat.', slug: 'best-builds-guide', category: 'Builds', updated: '2026-08-01' },
  { title: 'Stealth Guide — Ambushes & Silent Takedowns', description: 'How the new stealth pillar works — splitting your party, firecracker distractions, smoke bombs, positioning, and opening combat with a devastating surprise attack.', slug: 'stealth-guide', category: 'Mechanics', updated: '2026-08-01' },
  { title: 'Classes Guide — All 4 Classes & Specializations', description: 'Every player class explained — combat roles, preferred weapons, and how your class choice shapes your approach to Sengoku Japan.', slug: 'classes-guide', category: 'Classes', updated: '2026-08-01' },
  { title: 'Co-op Guide — Play the Campaign Together', description: 'The series-first 2-player co-op mode: twin captains, shared dialogue checks, competing for decisions and companions, and coordinated combat.', slug: 'coop-multiplayer-guide', category: 'Co-op', updated: '2026-08-01' },
];

const FAQ_ITEMS = [
  { question: 'When does Expeditions: Samurai release?', answer: 'Expeditions: Samurai launches into Steam Early Access on August 7, 2026 on PC. Early Access includes Act One (~8 hours), with full combat, exploration, stealth, and world map travel plus several hours of fully voiced quests.' },
  { question: 'What is Expeditions: Samurai?', answer: 'Expeditions: Samurai is a party-based tactical CRPG set in Sengoku-era Japan (1600 AD) from Campfire Cabal, the studio behind Expeditions: Rome, Viking, and Conquistador. You play Captain Flynn, an English privateer who arrives in Japan aboard the Dutch frigate De Albatros and is swept into the final days of the civil war.' },
  { question: 'How many companions can you romance?', answer: 'All 8 companions are romanceable. Every companion has a personal story and a dedicated quest chain, and relationships can develop into friendship, rivalry, or romance depending on how you treat them.' },
  { question: 'Does Expeditions: Samurai have co-op?', answer: 'Yes — the series first. Full campaign 2-player online co-op with drop-in/drop-out. Both players play as twin captains, share dialogue scenes (both characters\' skills count), and can compete for control of decisions — or even a companion\'s affections.' },
  { question: 'Is there stealth?', answer: 'Stealth is a major new pillar for the series. You can sneak in real time, split your party, set up ambush positions, use firecrackers and smoke bombs to distract guards, perform silent takedowns, and open combat with a devastating surprise attack.' },
  { question: 'How long is the game?', answer: 'Early Access Act One is roughly 8 hours. The full 1.0 release in early 2027 will include four acts totaling ~60 hours, plus village management and additional content.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Expeditions: <span className="text-red-500">Samurai</span> Wiki
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the Sengoku-era CRPG by Campfire Cabal — the studio behind Expeditions: Rome.
        </p>
        <p className="text-sm text-gray-600 mb-8">Early Access August 7, 2026 — PC (Steam)</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2212910/Expeditions_Samurai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
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
