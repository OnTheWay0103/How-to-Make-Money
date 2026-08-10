import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: "Beginner's Guide", description: 'New to Graphite? Start here — learn the core mechanics, hero roles, timeline combat, and how to survive your first few runs.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-01' },
  { title: 'All Heroes Overview', description: 'Complete breakdown of all 7 heroes — The Knight and The Mage are the only ones confirmed by name so far. Playstyles, strengths, and honest first-pick advice.', slug: 'heroes-guide', category: 'Heroes', updated: '2026-08-01' },
  { title: 'Best Builds & Artifacts', description: 'Graphite has no weapon system — power comes from stackable artifacts and skill upgrades. Learn unlimited stacking strategies and build archetypes.', slug: 'builds-artifacts-guide', category: 'Builds', updated: '2026-08-01' },
  { title: 'Combat & Break System', description: 'Master timeline-based combat and the Break system. Learn how Poise depletion cancels enemy actions, how to read the timeline, and how the symmetric Break rules protect your party.', slug: 'combat-guide', category: 'Combat', updated: '2026-08-01' },
  { title: 'Boss Strategy Guide', description: 'Boss strategy based on confirmed information — Break windows, timeline tactics, and honest notes on what is not yet documented.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-01' },
  { title: 'Graphite Demo Guide — Act 1', description: 'Everything in the free demo: 4 heroes, 50 stackable artifacts, 15 adventure events, ~30-minute runs, and first-run tips for the timeline combat and Break system.', slug: 'graphite-demo-guide', category: 'Beginner', updated: '2026-08-01' },
];

const FAQ_ITEMS = [
  { question: 'What is Graphite?', answer: 'Graphite is a pen-and-ink tactical roguelike RPG developed by RipRed (Colombia) and published by indie.io. It launched on Steam, GOG, and the indie.io Store on July 27, 2026. It features timeline-based combat with the Break system, unlimited artifact stacking, a Tarot adventure deck, and a four-act campaign.' },
  { question: 'How many heroes are in Graphite?', answer: 'Graphite has 7 playable heroes. Only two are confirmed by name so far: The Knight (shield-based, built around the Break system) and The Mage (offensive spells plus defensive support). The other five have not been officially revealed.' },
  { question: 'How does the Break system work?', answer: 'Every combatant has Poise (an action gauge). Depleting an enemy\'s Poise to zero cancels their scheduled action and pushes their turn down the timeline — interrupting powerful attacks, summons, and buffs. The system is fully symmetric: enemies can Break your heroes the same way.' },
  { question: 'What is Timeline combat?', answer: 'Combat plays out on a shared timeline. Every action has a duration, multiple units act simultaneously, and you can see enemy wind-ups before they resolve. Reading the timeline — and timing your Breaks — is the core skill.' },
  { question: 'How do Artifacts and stacking work?', answer: 'Artifacts are passive items with no cap on stacking — duplicates amplify the same effect, and hyper-specialized builds are supported. Enemies acquire artifacts too, so fights become an arms race.' },
  { question: 'What is the Tarot adventure deck?', answer: 'Between fights, a tarot-inspired deck presents illustrated, narrated event cards with branching choices. Outcomes are shaped by your party, your items, and your prior decisions.' },
  { question: 'How many acts are in the campaign?', answer: 'Four acts, each spanning 15 days, per the developer\'s launch materials. No full-game playtime figure has been published; a single Act 1 demo run takes about 30 minutes.' },
  { question: 'Is there a free demo?', answer: 'Yes. Graphite: Act 1 is free on Steam — 4 playable heroes, 50 stackable artifacts, 15 adventure events, and runs of about 30 minutes. It covers the entire first act of the campaign.' },
  { question: 'What are the system requirements?', answer: 'Per the official Steam store page: Windows 10, a 2.0 GHz processor, 2 GB RAM, 2 GB graphics, and 1 GB storage. No recommended tier has been published.' },
  { question: 'How much does Graphite cost?', answer: '$8.99 USD, with a 20% launch discount ($7.19) that ran through August 10, 2026. Check the Steam page for the current listing.' },
  { question: 'Is there a Bond/friendship system?', answer: 'Graphite includes a friendship system between characters — the demo supports friendship levels up to 1. How friendship is gained and how it connects to unlocking heroes is unconfirmed.' },
  { question: 'Can I play Graphite on Steam Deck?', answer: 'Unconfirmed. No official statement about Steam Deck support has been published.' },
  { question: 'Is there meta-progression?', answer: 'Graphite is a roguelite: artifacts, events, and unlockables persist across runs in some form. The exact scope of what carries over between runs is unconfirmed.' },
  { question: 'Is Graphite multiplayer?', answer: 'No — Graphite is a single-player game.' },
  { question: 'What is the pen-and-ink art style?', answer: 'Graphite is hand-drawn in a pencil-and-ink notebook aesthetic — the game takes place inside a child\'s school notebook, where heroes and monsters are drawn in pen and ink.' },
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
          <a href="https://store.steampowered.com/app/3080560/Graphite/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
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
