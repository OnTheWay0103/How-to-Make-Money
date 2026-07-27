import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Getting Started: Complete Beginner\'s Guide', description: 'New to Taival? Learn the basics — your Henki companion, first quests, early game priorities, and essential tips for new players.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-27' },
  { title: 'Henki Companion Guide — All Forms & Abilities', description: 'Complete guide to your shapeshifting Henki: how to tame creatures, unlock new forms, traits, rare variants, and form-swapping strategies.', slug: 'henki-companion-guide', category: 'Companions', updated: '2026-07-27' },
  { title: 'Best Henki Forms Tier List — S to C Rank', description: 'Every Henki form ranked: S-tier combat beasts, A-tier specialized forms, B-tier situational picks, and C-tier niche forms.', slug: 'best-henki-forms', category: 'Tier List', updated: '2026-07-27' },
  { title: 'Co-op Multiplayer Guide — Tips for 2-4 Players', description: 'Master Taival co-op: online, local split-screen, and mixed mode. Group voting, party composition, and coordinated Henki strategies.', slug: 'coop-multiplayer-guide', category: 'Co-op', updated: '2026-07-27' },
  { title: 'Crafting & Professions Guide', description: 'All professions, material locations, recipe unlocks, crafting stations, and the best items to craft at every stage of the game.', slug: 'crafting-professions-guide', category: 'Crafting', updated: '2026-07-27' },
  { title: 'Biomes & World Exploration Guide', description: 'Explore all 4 biomes — highlands, forests, mountains, and ruins. Hidden secrets, resource hotspots, and best Henki forms per region.', slug: 'biomes-exploration-guide', category: 'Exploration', updated: '2026-07-27' },
];

const FAQ_ITEMS = [
  { question: 'What is Taival?', answer: 'Taival ("journey" in Finnish) is a 1-4 player co-op adventure RPG developed by Bonobo Software and published by Level Up Gaming. Set in a hand-crafted voxel world, you explore seamless biomes with a shapeshifting Henki companion. It launched in Steam Early Access on July 15, 2026 for $19.99.' },
  { question: 'Is it single-player or co-op?', answer: 'Both! You can play solo or in co-op with up to 4 players. Co-op supports online play, local split-screen, or mixed (local + online together). The game is designed for cooperative exploration from the start.' },
  { question: 'What is a Henki companion?', answer: 'The Henki is your shapeshifting companion — the last of its kind with no fixed form. It can absorb creature essences to transform into different forms: combat beasts, swift mounts, stealth predators, gliders, and more. Each form has unique traits and abilities.' },
  { question: 'How do group story decisions work?', answer: 'Major quest choices use a group voting system where all players participate. Everyone can suggest options with their cursor, and the majority vote determines the outcome. This means your story can branch differently each playthrough.' },
  { question: 'What are Henki Dungeons?', answer: 'Special solo dungeons where you take direct control of your Henki companion. These challenges test your form mastery with unique puzzles and combat encounters, rewarding new forms, traits, and rare variants.' },
  { question: 'How long is Early Access?', answer: 'The developers plan for Early Access to last 6-12 months, with regular content updates adding new biomes, quests, enemies, bosses, items, creatures, and lore based on community feedback.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0a1a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Taival <span className="text-emerald-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the co-op adventure RPG by Bonobo Software.
        </p>
        <p className="text-sm text-gray-600 mb-8">Early Access — July 15, 2026 on Steam (PC)</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3152750/Taival/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Play on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 px-6 py-3 rounded-lg transition-colors text-sm">
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
          <Link href="/guides" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-emerald-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
