import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First Days in Elderfield', description: 'New to Welcome to Elderfield? Learn the core loop — farm, mine, forage, fight, and investigate — plus how to choose between Cozy Mode and Challenge Mode before September 10.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-30' },
  { title: 'Demo Guide — What’s in the Free Vertical Slice', description: 'The free Steam demo covers roughly 1/6 of the planned game: the town, farm, ranch, the first dungeon (the local mall), and several smaller areas. Everything you can expect and try now.', slug: 'demo-guide', category: 'Demo', updated: '2026-08-30' },
  { title: 'Release Date, Price & Platforms — How to Buy', description: 'Welcome to Elderfield launches September 10, 2026 on Steam (PC). Official pricing had not been announced as of August 30, 2026 — everything we know so far.', slug: 'price-platforms', category: 'Info', updated: '2026-08-30' },
  { title: 'Farming & Resources Guide — Crops, Animals, Mining', description: 'How the farm loop works: cultivating land, harvesting crops (including unsettling ones like teeth and eyeballs), managing otherworldly livestock, and stopping unruly tentacles.', slug: 'farming-economy-guide', category: 'Farming', updated: '2026-08-30' },
  { title: 'Combat Guide — Turn-Based Fights, AP & Fleeing', description: 'Combat in Elderfield is turn-based with AP costs, resource use, strategic buffs and equipment — and running away is a legitimate option. A pre-release overview of what the demo shows.', slug: 'combat-guide', category: 'Combat', updated: '2026-08-30' },
  { title: 'NPCs & Romance Guide — Townsfolk, Friendship & Marriage', description: 'The odd townsfolk of Elderfield — including Hans the giant skull landlord. Romance and marriage are planned but not yet implemented, per the developer.', slug: 'npcs-romance-guide', category: 'Characters', updated: '2026-08-30' },
];

const FAQ_ITEMS = [
  { question: 'What is Welcome to Elderfield?', answer: 'Welcome to Elderfield is a cosy horror RPG by solo developer Chris Cote, published by Kwalee. It blends farming and life-sim gameplay with Lovecraftian turn-based combat, hand-drawn horror-manga art, a dark lofi soundtrack, and daily mystery investigation in the isolated town of Elderfield. It launches September 10, 2026 on Steam for PC.' },
  { question: 'How much does Welcome to Elderfield cost?', answer: 'The official price had not been announced as of August 30, 2026 [Unconfirmed]. The free demo is available now on Steam; the full game goes on sale at launch on September 10.' },
  { question: 'Is there a demo?', answer: 'Yes. A free demo is on Steam (App ID 3195680). It is a vertical slice covering roughly 1/6 of the planned game, including one area of the town, the farm and ranch, the first dungeon (a local mall), and several smaller locations. It currently sits at about 96% positive ("Overwhelmingly Positive").' },
  { question: 'What platforms is Welcome to Elderfield on?', answer: 'PC via Steam, Windows only, single-player. System requirements list Windows 10 64-bit as the minimum OS.' },
  { question: 'Is Welcome to Elderfield multiplayer?', answer: 'No. The game is single-player only.' },
  { question: 'What are the difficulty modes?', answer: 'The Steam store description confirms two modes: Cozy Mode for a laid-back farming and discovery experience, and Challenge Mode for players who want to face the Old Gods with deeper turn-based combat and resource management.' },
  { question: 'Is there romance and marriage in Elderfield?', answer: 'Romance is planned but not yet implemented. In a Steam Community discussion, developer Chris Cote said romance "still needs to be implemented," with plans for players to reach the end of a relationship with any character and choose a romantic (spouse) or platonic (roommate) outcome [Unconfirmed].' },
  { question: 'What are the system requirements?', answer: 'Minimum: Windows 10 64-bit, 11th Gen Intel Core i5-11600K or AMD Ryzen 5 5600X, 8 GB RAM, NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570, DirectX 11, 2 GB storage, 1280x768 minimum resolution.' },
  { question: 'Who made Welcome to Elderfield?', answer: 'It is developed by Chris Cote, a solo Canadian developer, and published by Kwalee. The demo has been available since October 7, 2024, and the release date was revealed in an official trailer on August 5, 2026.' },
  { question: 'How long is Welcome to Elderfield?', answer: 'No official playtime estimate has been published [Unconfirmed]. The demo covers about 1/6 of the planned game; the full release is expected to have roughly 3x the town size and at least two more dungeon areas.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0d1a12] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Welcome to Elderfield <span className="text-emerald-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">
          The cosy horror RPG by Chris Cote / Kwalee — farming, Lovecraftian combat, mysteries and relationships.
        </p>
        <p className="text-sm text-gray-600 mb-8">Launching September 10, 2026 — PC via Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3195440/Welcome_to_Elderfield/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
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

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a2a1e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#111d14] rounded-lg border border-[#1f3024]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-emerald-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
