import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner\'s Guide: First Steps', description: 'New to Sephiria? Master the core roguelite loop — choose a weapon, climb the tower, collect artifacts, and survive.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-11' },
  { title: 'All Weapons Guide — Stats & Upgrades', description: 'Complete breakdown of Sword & Shield, Greatsword, Dagger, Katana, Crossbow, and Staff. Upgrade branches, mastery perks, and best use cases.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-08-11' },
  { title: 'Best Builds — Weapon & Artifact Synergies', description: 'Optimal builds for every weapon. Artifact combinations, inscription setups, and upgrade paths for solo and co-op.', slug: 'builds-guide', category: 'Builds', updated: '2026-08-11' },
  { title: 'Artifacts Guide — Catalog of ~300', description: 'Every artifact in Sephiria explained. How to unlock them, farming methods, and best synergies for your build.', slug: 'artifacts-guide', category: 'Artifacts', updated: '2026-08-11' },
  { title: 'Boss Guide — All 10+ Boss Strategies', description: 'Attack patterns, dodge timings, weak points, and optimal artifact setups for every boss encounter.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-11' },
  { title: 'Co-op Guide — 4-Player Team Strategies', description: 'Team composition, role assignments, revive tactics, and boss coordination for seamless multiplayer runs.', slug: 'coop-guide', category: 'Co-op', updated: '2026-08-11' },
];

const FAQ_ITEMS = [
  { question: 'What is Sephiria?', answer: 'Sephiria is a pixel-art action roguelite developed by TEAM HORAY (the Dungreed studio). You play as a rabbit warrior climbing the Tower of Sephiria through 6 chapters with 6 weapons and ~300 artifacts. It supports 1-4 player co-op and carries a Very Positive rating on Steam. Sephiria 1.0 launched on July 31, 2026.' },
  { question: 'Is it single-player or multiplayer?', answer: 'Both. You can play solo or in online co-op with up to 4 players. Enemy health and damage scale with player count, so solo is balanced and fully viable.' },
  { question: 'How many weapons are there?', answer: '6 weapon types: Sword & Shield, Greatsword, Dagger, Katana, Crossbow, and Staff. Each weapon branch has dozens of upgrades and unique mastery perks.' },
  { question: 'What are artifacts and inscriptions?', answer: 'Artifacts are per-run passive items (~300 at 1.0). Inscriptions are permanent socketable bonuses that persist between runs — like runes that permanently upgrade your character. The 1.0 launch adds Talents and Artifacts as new permanent progression systems.' },
  { question: 'How many chapters and bosses?', answer: '6 chapters with 10+ boss encounters. The story ends at Chapter 6, with a proper ending and credits.' },
  { question: 'What makes Sephiria different from other roguelites?', answer: 'The combo-driven combat with 6 highly distinct weapons, the permanent Inscription, Talent, and Artifact progression systems, ~300 artifacts with deep synergies, and 4-player co-op in a charming pixel-art world.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Sephiria <span className="text-purple-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the pixel-art action roguelite by TEAM HORAY.
        </p>
        <p className="text-sm text-gray-600 mb-8">1.0 Now Live — PC, Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Buy on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      {/* Game Features */}
      <section className="max-w-5xl mx-auto px-4 py-12 border-t border-[#2a1a4e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">⚔️</div>
            <h3 className="text-white font-semibold mb-1">6 Weapons</h3>
            <p className="text-gray-400 text-sm">Sword & Shield, Greatsword, Dagger, Katana, Crossbow & Staff — 200+ upgrades in 1.0</p>
          </div>
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">💎</div>
            <h3 className="text-white font-semibold mb-1">~300 Artifacts</h3>
            <p className="text-gray-400 text-sm">Deep artifact synergies that transform your build each run</p>
          </div>
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">🐰</div>
            <h3 className="text-white font-semibold mb-1">4-Player Co-op</h3>
            <p className="text-gray-400 text-sm">Climb the tower with friends — scaled difficulty, shared loot</p>
          </div>
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">🏛️</div>
            <h3 className="text-white font-semibold mb-1">6 Chapters</h3>
            <p className="text-gray-400 text-sm">The story ends at Chapter 6 with a proper ending — 10+ bosses</p>
          </div>
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">🔮</div>
            <h3 className="text-white font-semibold mb-1">Inscriptions</h3>
            <p className="text-gray-400 text-sm">Permanent socketable runes that carry between runs</p>
          </div>
          <div className="bg-[#1a0a2e] rounded-lg border border-[#2a1a4e] p-5 text-center">
            <div className="text-3xl mb-2">🎮</div>
            <h3 className="text-white font-semibold mb-1">Very Positive</h3>
            <p className="text-gray-400 text-sm">Very Positive on Steam</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#2a1a4e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a0a2e] rounded-lg border border-[#2a1a4e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-purple-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
