import Link from 'next/link';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  {
    title: 'Beginner Guide: Survive the Death Game',
    description: 'New to Echoes of Aincrad? Learn combat basics, Cardinal Rank, Growth Points, weapon selection, and how to survive your first hours in Floor 1.',
    slug: 'beginner-guide',
    category: 'Beginner',
    updated: '2026-07-07',
  },
  {
    title: 'All 6 Weapons Guide — Which One to Pick',
    description: 'Complete breakdown of Sword & Shield, Greatsword, Rapier, Dagger, Two-Handed Axe, and Mace. Best weapon for beginners, solo, and DPS.',
    slug: 'weapons-guide',
    category: 'Weapons',
    updated: '2026-07-07',
  },
  {
    title: 'Best Builds Guide — Dexterity, Strength & Hybrid',
    description: 'Meta build guide for Echoes of Aincrad. Dexterity Critical build, Heavy Strength build, stat priorities, and EX-Mod recommendations.',
    slug: 'builds-guide',
    category: 'Builds',
    updated: '2026-07-07',
  },
  {
    title: 'EX-Mod Crafting Guide — How to Upgrade Weapons',
    description: 'Master the Smithy system. How to combine weapons, transfer EX-Mods, farm materials, and craft the best modifiers for your build.',
    slug: 'ex-mod-guide',
    category: 'Crafting',
    updated: '2026-07-07',
  },
  {
    title: 'Solo Leveling Guide — Fast XP & Farm Routes',
    description: 'Best farming spots, Dire Wolf grind route, Growth Point optimization, and how to avoid over-leveling traps in Echoes of Aincrad.',
    slug: 'leveling-guide',
    category: 'Progression',
    updated: '2026-07-07',
  },
  {
    title: 'Boss Guide — All Floor 1 & 2 Bosses',
    description: 'Complete boss strategies for every Floor 1 and 2 encounter. Attack patterns, recommended level, best weapons, and partner setups.',
    slug: 'bosses-guide',
    category: 'Bosses',
    updated: '2026-07-07',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is Echoes of Aincrad?',
    answer: 'Echoes of Aincrad is a single-player action JRPG set in the Sword Art Online universe, developed by Game Studio Inc. and published by Bandai Namco Entertainment. You create your own custom avatar and experience the SAO death game as an early beta tester, fighting through the first two floors of Aincrad. It launches July 10, 2026 on PS5, Xbox Series X|S, and PC (Steam).',
  },
  {
    question: 'How many weapon types are there?',
    answer: 'Six weapon types, each functioning as a distinct class: Sword & Shield (balanced), Two-Handed Axe (AoE burst), Dagger (fast/crit), Rapier (reach/counter), Greatsword (heavy/charge), and Mace (stagger/break). There are no spellcasters — your weapon is your class.',
  },
  {
    question: 'Can I change my weapon?',
    answer: 'Yes. You can swap weapons between quests at the Town of Beginnings. Each weapon gains its own Weapon Exp and unlocks unique Sword Skills. You can master all six weapons on a single character.',
  },
  {
    question: 'Is it multiplayer?',
    answer: 'No. Echoes of Aincrad is a single-player game. You fight alongside AI partners who have their own fighting styles, Combination Skills, and Support Skills.',
  },
  {
    question: 'Does save data carry from the demo?',
    answer: 'Yes. Save data from the free demo carries over to the full game on the same platform. The demo drops you into a beta release version of the VRMMORPG.',
  },
  {
    question: 'What is the Cardinal Rank system?',
    answer: 'Cardinal Rank is a global proficiency indicator that increases as you complete main quests and discover towns. Higher ranks improve merchant inventories, partner abilities, and monster drops — but enemies also scale upward with your rank. Always spend Growth Points and upgrade gear after ranking up.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Echoes of <span className="text-amber-400">Aincrad</span> Wiki
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Complete guide hub for the SAO action JRPG. Weapons, builds, bosses, EX-Mods —
          everything you need to clear the death game.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/echoes-of-aincrad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Wishlist on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
            View All Guides →
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]">
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
