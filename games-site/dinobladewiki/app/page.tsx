import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide: Survive Your First Hunt', description: 'New to Dinoblade? Master Soulslike combat, stamina management, parry timing, and stat allocation for your first expedition.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-07-19' },
  { title: 'Boss Guide -- All Boss Strategies & Patterns', description: 'Complete boss strategies for Kira the Exile, Axe, Kasei the Tyrant, and more. Attack patterns, parry windows, and elemental weaknesses.', slug: 'boss-guide', category: 'Bosses', updated: '2026-07-19' },
  { title: 'Weapons Guide -- Complete Arsenal Breakdown', description: 'All 6 weapon types plus hidden weapons. Stats, movesets, Ex-Mod upgrades for Greatsword, Battle Axe, War Hammer, Scythe, Spear, and Claws.', slug: 'weapons-guide', category: 'Weapons', updated: '2026-07-19' },
  { title: 'Parry Guide -- Master Perfect Parry Timing', description: 'Deep dive into Dinoblade\'s parry system. Full boss parry timing table, active frames, recovery windows, and practice drills.', slug: 'parry-guide', category: 'Mechanics', updated: '2026-07-19' },
  { title: 'Builds Guide -- Strength, Dexterity & Hybrid', description: 'Optimized builds for every playstyle. Colossus tank, Blade Dancer crit, Wardancer hybrid -- with stat tables and gear recommendations.', slug: 'builds-guide', category: 'Builds', updated: '2026-07-19' },
  { title: 'Secrets Guide -- Hidden Weapons, Bosses & Areas', description: 'Discover every secret in Dinoblade. Fossil Greatsword, Volcanic Hammer, Soul Reaper, the Ancient One secret boss, and hidden biomes.', slug: 'secrets-guide', category: 'Secrets', updated: '2026-07-19' },
];

const FAQ_ITEMS = [
  { question: 'What is Dinoblade?', answer: 'Dinoblade is a dinosaur-themed Soulslike action RPG developed by Team Spino LLC. You play as a dinosaur hunter, wielding weapons held in your dinosaur companion\'s mouth, fighting through prehistoric biomes against massive creatures. It launches July 23, 2026 on Steam.' },
  { question: 'When is the release date?', answer: 'Dinoblade launches July 23, 2026 on PC via Steam. The Standard Edition is $29.99 and the Deluxe Edition is $44.99.' },
  { question: 'Is there a demo?', answer: 'Yes! A free Steam demo is available now. It features the Jurassic Plains area and the Kira the Exile boss fight with approximately 2-3 hours of content. Full save data carries over to the retail release.' },
  { question: 'How many bosses are there?', answer: '8 total bosses: 6 story bosses including Kira the Exile, Axe, and Kasei the Tyrant, plus 2 optional secret bosses hidden throughout the world.' },
  { question: 'What platforms is it on?', answer: 'Dinoblade launches on PC (Steam) for Windows. No console versions have been announced at launch.' },
  { question: 'Is there multiplayer?', answer: 'Yes -- up to 2-player co-op is supported in both the demo and full release. Full online co-op for the entire campaign. No PvP at launch.' },
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
        <p className="text-sm text-amber-100/40 mb-8">Launching July 23, 2026 on Steam</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/312345/Dinoblade/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Wishlist on Steam
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
          500,000+ Wishlists on Steam
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
