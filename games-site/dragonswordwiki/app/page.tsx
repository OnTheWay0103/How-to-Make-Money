import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Getting Started', description: 'New to DragonSword: Awakening? Learn the basics — tag-team combat, hero unlocks, familiars, and essential tips for your first 5 hours.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-24' },
  { title: 'Hero Tier List — Best Characters Ranked', description: 'Complete S to B-tier ranking of all 19 heroes. Theresia, Lute, Reina — who to invest in and why.', slug: 'tier-list', category: 'Tier List', updated: '2026-07-24' },
  { title: 'How to Unlock All 19 Heroes', description: 'Every hero recruitment method — main story, side quests, hidden exploration, and secret dungeons. No gacha required.', slug: 'hero-unlock-guide', category: 'Heroes', updated: '2026-07-24' },
  { title: 'Combat Guide — Signal Skills & Tag Team', description: 'Master the tag-team system: Signal Skills, status ailments, air combos, super armor breaking, and advanced combo chains.', slug: 'combat-guide', category: 'Combat', updated: '2026-07-24' },
  { title: 'Boss Guide — All Story & World Bosses', description: 'Every boss fight strategy: Grassland Lesser Dragon, Barduk, Ursula, and all 9 World Bosses. Attack patterns and counters.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-24' },
  { title: 'Best Equipment & Relics Guide', description: 'How gearing works: Relics, Karma equipment, weapon types, and the best loadouts for every hero role.', slug: 'equipment-guide', category: 'Equipment', updated: '2026-07-24' },
];

const FAQ_ITEMS = [
  { question: 'What is DragonSword: Awakening?', answer: 'DragonSword: Awakening is a buy-to-play anime open-world action RPG developed by Hound13 (former Dragon Nest producer). Set on the continent of Orbis, you lead a party of heroes to defeat a reawakened dragon. It launched July 22, 2026 on Steam for $29.99.' },
  { question: 'Is it free-to-play or buy-to-play?', answer: 'Buy-to-play — $29.99 once, no gacha, no microtransactions beyond cosmetic DLC. All 19 heroes are unlocked through gameplay (story, side quests, exploration). Four more free heroes are coming post-launch.' },
  { question: 'How many playable characters are there?', answer: '19 heroes at launch, each with unique weapons, abilities, and playstyles. You control a party of 3 and can swap between them mid-combat. Four additional heroes will be added for free in post-launch updates.' },
  { question: 'How does the combat system work?', answer: 'Real-time tag-team combat built around Status Ailments and Signal Skills. Stack status effects (Bleed, Stun, Airborne, etc.) on enemies to trigger cinematic Signal Skill attacks from your benched heroes. No ultimate abilities — the Signal Skill loop replaces them.' },
  { question: 'What are Familiars?', answer: 'Magical creatures that serve as mounts and provide passive bonuses. About 30 are available at launch — two-thirds are earnable in-game through exploration, world bosses, and cooking. They do not occupy party slots.' },
  { question: 'Is there co-op multiplayer?', answer: 'Yes — optional co-op for exploration and raids with up to 3 players via invitation codes. The main story is single-player, but endgame raids support multiplayer.' },
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
