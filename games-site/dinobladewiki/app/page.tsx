import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: Survive Your First Hunt', description: 'New to Dinoblade? Master the parry-and-posture loop, stamina management, and the basics of your first expedition.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-08-11' },
  { title: 'Boss Guide -- Alpha Predators & Boss Rush', description: 'Complete boss strategies for the Alpha predators that rule each region, plus Boss Rush Mode and the meteor finale.', slug: 'boss-guide', category: 'Bosses', updated: '2026-08-11' },
  { title: 'Weapons & Builds Guide -- The Great Sword', description: 'The colossal Great Sword held in your Spinosaurus\'s jaws, legendary weapons hidden in the world, and honest build advice.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-08-11' },
  { title: 'Soul Arts & Leveling Guide -- Progression', description: 'Soul Arts special attacks, attribute and skill upgrades, and how to build your own combat style.', slug: 'soul-arts-guide', category: 'Mechanics', updated: '2026-08-11' },
  { title: 'Enemy Guide -- Weapon-Wielding Dinosaurs', description: 'Every confirmed enemy type: battleaxe and halberd dinosaurs, smaller pack enemies, and the Alpha predators.', slug: 'enemy-guide', category: 'Enemies', updated: '2026-08-11' },
  { title: 'Demo Guide -- Try Before You Buy', description: 'The free Steam demo since October 2025, rated Overwhelmingly Positive. What\'s confirmed about it, and save transfer status.', slug: 'demo-guide', category: 'Demo', updated: '2026-08-11' },
];

const FAQ_ITEMS = [
  { question: 'What is Dinoblade?', answer: 'Dinoblade is a dinosaur-themed Soulslike action RPG developed by Team Spino LLC. You play as a young Spinosaurus wielding a colossal Great Sword between its teeth, fighting weapon-wielding rival dinosaurs to prevent an extinction event. It launched July 23, 2026 on Steam.' },
  { question: 'When was it released, and how much does it cost?', answer: 'Dinoblade launched July 23, 2026 on Steam (PC) at $19.99, with a 10% launch discount until July 30, 2026. A free demo has been available since October 2025.' },
  { question: 'Is there a demo?', answer: 'Yes! A free demo has been on Steam since October 2025 and holds an "Overwhelmingly Positive" rating (~97% of 4,200+ reviews). It helped the game pass 500,000 Steam wishlists. Whether demo saves carry over to the full game is unconfirmed.' },
  { question: 'What makes the combat special?', answer: 'Classic Soulslike combat — light/heavy attacks, dodge rolls, stamina management — with a Sekiro-style posture system: parries build enemy posture until the guard breaks, opening enemies to counterattacks. Soul Arts (special attacks), boss summons, and hidden legendary weapons round out the toolkit.' },
  { question: 'What platforms is it on?', answer: 'Dinoblade is on PC (Steam) for Windows, rated Playable on Steam Deck with full controller support. No console versions have been announced, and it is single-player only.' },
  { question: 'Is there multiplayer or PvP?', answer: 'No. Dinoblade is a confirmed single-player game with no co-op, PvP, or invasions. The summons you use are AI versions of defeated bosses, not other players.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#0a1a0a] to-[#1a1a0f]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Dinoblade <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-amber-100/70 max-w-xl mx-auto mb-2">
          Dinosaur Soulslike Guide Hub -- Complete wiki for Team Spino&apos;s prehistoric action RPG.
        </p>
        <p className="text-sm text-amber-100/40 mb-8">Released July 23, 2026 on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/3440070/Dinoblade/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View on Steam
          </a>
          <Link
            href="/guides/beginner-guide"
            className="inline-flex items-center gap-2 border border-amber-700/50 hover:border-amber-500 text-amber-300 hover:text-amber-200 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start with Beginner Guide →
          </Link>
        </div>
        <div className="mt-10 inline-flex items-center gap-2 text-xs text-amber-100/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
          500,000+ Wishlists · No. 1 on Steam Popular Releases at Launch
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-[#2a3a1a]">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#0f1a0f] rounded-lg border border-[#2a3a1a]">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
