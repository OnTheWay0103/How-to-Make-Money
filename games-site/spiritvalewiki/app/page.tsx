import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — First 5 Hours in SpiritVale', description: 'New to SpiritVale? Master the basics — choose your class, level fast, upgrade gear, and avoid common mistakes.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-12' },
  { title: 'Class Tier List — All 7 Base + 8 Advanced Classes', description: 'Complete SpiritVale class rankings for PvE, PvP, and solo play. S-Tier to C-Tier with detailed explanations.', slug: 'tier-list', category: 'Classes', updated: '2026-07-12' },
  { title: 'Classes Guide — All Jobs, Roles & Skills', description: 'Complete breakdown of all 7 base classes and 8 advanced jobs. Stats, skills, best builds, and role recommendations.', slug: 'classes-guide', category: 'Classes', updated: '2026-07-12' },
  { title: 'Leveling Guide — Fastest Way to Max Level', description: 'Optimal leveling route from 1 to max. Best grinding spots, quest priorities, and XP boost strategies.', slug: 'leveling-guide', category: 'Progression', updated: '2026-07-12' },
  { title: 'Cards Guide — All 227 Cards & Best Combos', description: 'Complete card database with stats, effects, and best combinations. How to farm rare cards efficiently.', slug: 'cards-guide', category: 'Items', updated: '2026-07-12' },
  { title: 'Build Guide — Best Builds for Every Class', description: 'Optimized builds for Paladin, Berserker, Archmage, Sniper, Priest, Assassin, Necromancer, and more.', slug: 'builds-guide', category: 'Builds', updated: '2026-07-12' },
];

const FAQ_ITEMS = [
  { question: 'What is SpiritVale?', answer: 'SpiritVale is a free-to-play class-based MMORPG inspired by Ragnarok Online. It features 7 base classes, 8 advanced specializations, 227 cards, 35+ maps, and 20+ bosses. Available now on Steam Early Access.' },
  { question: 'Is SpiritVale free to play?', answer: 'Yes. SpiritVale is completely free-to-play on Steam. There are optional cosmetic purchases but no pay-to-win mechanics.' },
  { question: 'How many classes are there?', answer: '7 base classes (Acolyte, Knight, Mage, Rogue, Scout, Summoner, Warrior) and 8 advanced classes (Paladin, Priest, Wizard, Shinobi, Sniper, Berserker, Necromancer, Gunslinger). You can respec at any time via the Waybinder NPC.' },
  { question: 'What is the best class for beginners?', answer: 'Knight → Paladin is the most forgiving (high defense, self-heal). Warrior → Berserker for simple damage. Summoner → Necromancer if you prefer pets to tank for you.' },
  { question: 'Is there PvP?', answer: 'Yes. SpiritVale has a PvP arena for competitive play. Classes are balanced separately for PvE and PvP.' },
  { question: 'Can I reset my skills?', answer: 'Yes. Respeccing is cheap and accessible via the Waybinder NPC in town. You can experiment freely with different builds.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1a1a3e] to-[#0f0f23]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">SpiritVale <span className="text-amber-400">Wiki</span></h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-2">Complete guide hub for the class-based MMORPG — classes, builds, cards, bosses, and more.</p>
        <p className="text-sm text-gray-600 mb-8">Free-to-Play on Steam Early Access</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://store.steampowered.com/app/3767850/SpiritVale/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm">Play Free on Steam</a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">Start with Beginner Guide →</Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Start Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((g) => (<GuideCard key={g.slug} {...g} />))}
        </div>
        <div className="text-center mt-8"><Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link></div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#1a1a3e]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (<details key={item.question} className="group bg-[#1a1a3e] rounded-lg border border-[#2a2a5e]"><summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary><div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div></details>))}
        </div>
      </section>
    </>
  );
}
