import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started', description: 'New to DragonSword: Awakening? Learn the tag-team combat loop, your starting trio, Mercenary Ranks, and honest tips for the first hours.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-01' },
  { title: 'Hero Tier List — Best Characters Ranked', description: 'Early-meta hero rankings based on confirmed kits — Theresia, Castella, Lute, Aria, and the honest TBD list for unrevealed heroes.', slug: 'tier-list', category: 'Tier List', updated: '2026-08-01' },
  { title: 'How to Unlock All 19 Heroes', description: 'No gacha, ever — the starting trio, confirmed roster, story unlocks, and the four confirmed post-launch free heroes.', slug: 'hero-unlock-guide', category: 'Heroes', updated: '2026-08-01' },
  { title: 'Combat Guide — Signal Skills & Tag Team', description: 'Master the tag-team system: Signal Skills triggered by switching, confirmed status ailments, and Super Armor breaking.', slug: 'combat-guide', category: 'Combat', updated: '2026-08-01' },
  { title: 'Boss Guide — Story, World & Origin Bosses', description: 'Verified boss roster: Orc Warrior, Furcas, Grassland Lesser Dragon, Barduk, Lich, Ursula — plus World Boss and Origin Dragon systems.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-01' },
  { title: 'Best Equipment & Relics Guide', description: 'How gearing works: fixed hero weapons, Karma gear, relics, and honest upgrade direction with no invented numbers.', slug: 'equipment-guide', category: 'Equipment', updated: '2026-08-01' },
];

const FAQ_ITEMS = [
  { question: 'What is DragonSword: Awakening?', answer: 'DragonSword: Awakening is a buy-to-play anime open-world action RPG developed by South Korean studio HOUND13. Set on the continent of Orbis, you lead a party of heroes to defeat a dragon reawakened after 60 years. It launched July 22, 2026 on Steam for $29.99.' },
  { question: 'Is it free-to-play or buy-to-play?', answer: 'Buy-to-play — $29.99 once ($49.99 Deluxe Edition), no gacha, no microtransactions for power. All 19 heroes are unlocked through gameplay. Four more free heroes are coming post-launch.' },
  { question: 'How many playable characters are there?', answer: '19 heroes at launch, each with unique weapons, abilities, and playstyles. You control a party of 3 and can swap between them mid-combat. Four additional heroes (Ryza, Jerome, Veronica, Logan) will be added for free in the second half of 2026.' },
  { question: 'How does the combat system work?', answer: 'Real-time tag-team combat built around Status Ailments and Signal Skills. Stack confirmed ailments (Stun, Break, Bleed, Burn, Airborne, Electrocution, Knockdown) on enemies, then switch heroes under the ailment state to trigger Signal Skills — there are no ultimate bars.' },
  { question: 'What are Familiars?', answer: 'Collectible companion creatures. The Abyssal Direwolf is confirmed as a free DLC familiar. System details (count, mounting, combat role) are still unconfirmed and will be documented as they are verified.' },
  { question: 'Is there co-op multiplayer?', answer: 'Yes — co-op for Battle (up to 2 players) and Raid (up to 3 players), host-based with no regional restrictions. The main story is single-player. There is no PvP at launch.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a2e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          DragonSword <span className="text-red-500">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the anime open-world action RPG by Hound13.
        </p>
        <p className="text-sm text-gray-600 mb-8">19 Heroes · Tag-Team Combat · No Gacha — Available Now on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3065190/DragonSword_Awakening/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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
