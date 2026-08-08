import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: First 5 Hours', description: 'New to Beast of Reincarnation? Master parrying, FP generation, Koo commands, and the core hunt-absorb-advance loop.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-08' },
  { title: 'Nushi Boss Reference — All Bosses & Weaknesses', description: 'Every Nushi and Malefact fight with levels, weaknesses, elemental counters, and drops. Table format for quick scanning.', slug: 'nushi-boss-reference', category: 'Bosses', updated: '2026-08-08' },
  { title: 'Skill Tree Overview — Emma & Koo', description: 'Every skill branch for Emma and Koo: Bloom Arts, Roots (Incantation/Guard/Pounce), Nushi Skills, and attribute gating.', slug: 'skill-tree-overview', category: 'Skills', updated: '2026-08-08' },
  { title: 'Elemental Builds — Shock, Poison & Acid', description: 'Shock, Poison, and Acid build guides with full gear loadouts: swords, arrows, Spirit Stones, and Koo Bloom Arts.', slug: 'elemental-builds-guide', category: 'Builds', updated: '2026-08-08' },
  { title: 'Combat System Deep Dive', description: 'How the hybrid combat works: parry windows, Down Gauge, FP economy, Entanglement, and Koo\'s slow-motion commands.', slug: 'combat-system-guide', category: 'Mechanics', updated: '2026-08-08' },
  { title: 'Koo Skills & Rapport Guide', description: 'Rapport levels, treats, petting, and showering — plus every Bloom Art and Root passive, ranked for early game.', slug: 'koo-rapport-guide', category: 'Companion', updated: '2026-08-08' },
];

const FAQ_ITEMS = [
  { question: 'What is Beast of Reincarnation?', answer: 'Beast of Reincarnation is a single-player action RPG developed by Game Freak (creators of Pokémon) and published by Fictions. Set in post-apocalyptic Japan in 4026, you play as Emma the Sealer and her dog Koo, hunting giant Nushi creatures and absorbing their power to stop the Blight. It launched August 4, 2026 on PC (Steam), PS5, and Xbox Series X|S for $59.99.' },
  { question: 'Is Beast of Reincarnation multiplayer or co-op?', answer: 'No. Beast of Reincarnation is exclusively single-player. There is no co-op, multiplayer, or PvP — the game is built around the bond between Emma and her companion Koo.' },
  { question: 'How long is Beast of Reincarnation?', answer: 'Roughly 20 hours for a fast playthrough, 25–28 hours on average, and 30–35 hours for completionists. The Platinum trophy requires two playthroughs (base game + New Game+ on Reincarnation+ difficulty) and takes about 30 hours.' },
  { question: 'What is the combat system like?', answer: 'Hybrid combat: Emma fights in real time with a katana (attacks, parries, perfect dodges, executions), while Koo\'s Bloom Arts are commanded through a slow-motion menu. Successful parries generate FP (Florescence Points) that power Koo\'s abilities — so parrying is the core of the combat loop.' },
  { question: 'Can I play on Steam Deck?', answer: 'Yes, Steam Deck/SteamOS and controller support are listed on the Steam page. The game is also day-one on Xbox Game Pass Ultimate with Xbox Play Anywhere and Cloud Gaming support.' },
  { question: 'Is there English voice acting?', answer: 'Yes, English voice acting exists but is off by default — you must enable it from the main menu settings (the game launches with Japanese audio). Yui Ishikawa voices Emma.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Beast of Reincarnation <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for Game Freak's first original action RPG — Nushi bosses, builds, skills, and combat.
        </p>
        <p className="text-sm text-gray-600 mb-8">Released August 4, 2026 — PC, PS5, Xbox Series X|S</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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
