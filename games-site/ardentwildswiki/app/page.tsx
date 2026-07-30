import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: Survive Your First Days', description: 'New to Ardent Wilds? Master the basics — gathering, crafting your first tools, building a shelter, and surviving your first night against the Eldran.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-31' },
  { title: 'Complete Crafting Guide — All Recipes & Materials', description: 'Every crafting recipe, material location, and workstation explained. From basic tools to legendary gear — master the crafting system.', slug: 'crafting-guide', category: 'Crafting', updated: '2026-07-31' },
  { title: 'Base Building Guide — Best Locations & Defense', description: 'Where to build your base, how to fortify against Eldran attacks, furniture and decoration tips, plus advanced base designs for co-op teams.', slug: 'base-building-guide', category: 'Building', updated: '2026-07-31' },
  { title: 'Combat Guide — Weapons, Builds & Abilities', description: 'All combat styles explained — fireball wizard, deadly warrior, precision marksman. Rare artifacts, ability combos, and the best builds for every playstyle.', slug: 'combat-guide', category: 'Combat', updated: '2026-07-31' },
  { title: 'Skill Tree & Spire Locations Guide', description: 'Every ancient spire and forgotten facility location. How to unlock skills, passive bonuses, and fast-travel points across the world map.', slug: 'skill-tree-guide', category: 'Exploration', updated: '2026-07-31' },
  { title: 'Multiplayer & Co-op Guide (Up to 6 Players)', description: 'How to set up co-op, best team compositions, shared base strategies, LAN play setup, and tips for 6-player survival.', slug: 'coop-guide', category: 'Co-op', updated: '2026-07-31' },
];

const FAQ_ITEMS = [
  { question: 'What is Ardent Wilds?', answer: 'Ardent Wilds is an open-world survival crafting RPG developed by Spellware Studios, a small indie team from Ghent, Belgium. Described by playtesters as "3D Terraria," it features a fully destructible voxel world, a world-built skill tree, deep base building, arcade combat, and co-op for up to 6 players. A free demo launched on Steam on July 30, 2026.' },
  { question: 'Is Ardent Wilds single-player or multiplayer?', answer: 'Ardent Wilds supports both single-player and online/LAN co-op for up to 6 players. The developers note you can increase the player count beyond 6, though the game is not balanced for larger groups. All content is fully playable solo.' },
  { question: 'When is the full release date?', answer: 'Ardent Wilds does not have a confirmed release date yet. A free demo was released on July 30, 2026 on Steam. The full game is listed as "Coming Soon" on Steam for Windows, Mac, and Linux.' },
  { question: 'What makes the skill tree unique?', answer: 'Instead of a traditional UI-based skill tree, skill nodes are physically placed across the world map. You unlock new powers by restoring ancient spires and forgotten facilities scattered throughout the world. Each spire you restore also unlocks a fast-travel point.' },
  { question: 'What is the Eldran?', answer: 'The Eldran is an encroaching eldritch hivemind that has corrupted the land. Players must cleanse the world of the Eldran and ultimately challenge their god: Yorgoroth, the Devourer of Worlds. The Eldran manifest as various corrupted creatures and environmental hazards.' },
  { question: 'Does Ardent Wilds have modding support?', answer: 'Yes! Ardent Wilds ships with a full Lua API and all game scripts are accessible for modding. This means the community can create custom content, gameplay modifications, and entirely new experiences from day one.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo launched on Steam on July 30, 2026. The demo lets you explore a portion of the world, try out the crafting and base building systems, experiment with combat builds, and play co-op with friends.' },
  { question: 'What platforms is Ardent Wilds on?', answer: 'Ardent Wilds is confirmed for Windows, Mac, and Linux on Steam. Console versions have not been announced.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a0a] to-[#1a1a0a]/80">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Ardent Wilds <span className="text-emerald-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          Complete guide hub for the open-world survival crafting RPG by Spellware Studios.
        </p>
        <p className="text-sm text-gray-600 mb-8">Demo available now on Steam — &quot;3D Terraria&quot; with co-op for up to 6 players</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/2275010/Ardent_Wilds/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            View on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 px-6 py-3 rounded-lg transition-colors text-sm">
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

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a2e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a2e] rounded-lg border border-[#2a2a4e]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-emerald-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
