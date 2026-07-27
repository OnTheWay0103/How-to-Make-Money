import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide — Getting Started',
    description: "New to Vahrin's Call? Master the classless progression system, early game priorities, attributes, and essential tips for your first 5 hours.",
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-07-27',
  },
  {
    title: 'Best Builds Guide — Top 5 Character Builds',
    description: 'Complete breakdown of the best builds: Spellshield Vanguard, Tactical Shadowstalker, Whirlwind Alchemist, Archer Mage, and Magic-Alchemy Hybrid.',
    slug: 'best-builds-guide',
    category: 'Builds',
    updated: '2026-07-27',
  },
  {
    title: 'Attributes & Stats Guide',
    description: 'How Strength, Agility, Intelligence, Constitution, and Focus work. Priority allocation, soft caps, and how to respec for free.',
    slug: 'attributes-stats-guide',
    category: 'Mechanics',
    updated: '2026-07-27',
  },
  {
    title: 'All Weapons Guide — Types & Best Picks',
    description: 'Greatswords, sword & shield, dual wielding, hammers, bows, and magic — every weapon type ranked with best-in-slot recommendations.',
    slug: 'weapons-guide',
    category: 'Gear',
    updated: '2026-07-27',
  },
  {
    title: 'Magic & Spells Complete Guide',
    description: 'Fire, Ice, Earth, and Alteration magic explained. Every spell, damage scaling, crowd control tiers, and mana management tips.',
    slug: 'magic-spells-guide',
    category: 'Magic',
    updated: '2026-07-27',
  },
  {
    title: 'Alchemy & Crafting Guide',
    description: 'All alchemy recipes, potion effects, rare crafting materials, farming routes, and how to maximize alchemy for combat.',
    slug: 'alchemy-crafting-guide',
    category: 'Crafting',
    updated: '2026-07-27',
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Vahrin's Call?",
    answer: "Vahrin's Call is a narrative-driven, classless action-RPG developed by Titan Roc, a 7-person indie studio. Set in the war-torn city of Vahrin, you play as a mercenary fighting insect-like khraiax creatures. It launched on Steam on July 27, 2026, with full English voice acting and a handcrafted world.",
  },
  {
    question: "Is Vahrin's Call free to play?",
    answer: "No. Vahrin's Call is a paid title priced at $34.99 USD on Steam, with a 10% launch discount available until August 3, 2026.",
  },
  {
    question: "Does Vahrin's Call have multiplayer or co-op?",
    answer: "No. Vahrin's Call is a single-player experience only. There is no co-op, multiplayer, or online component.",
  },
  {
    question: "How does the classless system work?",
    answer: "There are no preset classes. Your skills improve through use — swing a greatsword to get better with greatswords, cast fire magic to improve fire magic. Character Points improve base attributes, while Perk Points unlock passive bonuses and active abilities. You can respec for free at Mentor NPCs in settlements.",
  },
  {
    question: "What are the best builds for beginners?",
    answer: "The Spellshield Vanguard (Strength + Constitution) is the most forgiving for new players due to high survivability. The Archer Mage hybrid (Finesse + Intelligence) offers consistent performance from start to finish. Avoid spreading points too thin — specialization is key.",
  },
  {
    question: "How long is Vahrin's Call?",
    answer: "The main story takes approximately 25-35 hours to complete. Completionist runs with all side quests, hidden bosses, and collectibles can extend to 50+ hours.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a0a0a] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Vahrin&apos;s Call <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the classless action-RPG by Titan Roc.
          Best builds, weapons, magic, alchemy, bosses, skill books — everything you need.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/951770/Forsaken_Realms_Vahrins_Call/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Play on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            View All Guides →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a0a0a]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a0a0a] rounded-lg border border-[#2a1a1a]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">
                {item.question}
              </summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
