import Link from 'next/link';
import { faqPageSchema, videoGameSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GuideCard from '@/components/GuideCard';

const FEATURED_GUIDES = [
  { title: 'Beginner Guide — Your First Restoration Day', description: 'New to Cozy Game Restoration? Learn the parcel-to-shelf loop, how to structure a relaxing session, and the habits that keep every cartridge moving toward the collection room.', slug: 'beginner-guide', category: 'Beginner', updated: '2026-10-24' },
  { title: 'Cleaning Guide — Tools & Cleaning Order', description: 'A practical order for dust, adhesive, ink, stickers and grime, plus what each confirmed tool is for and how dirty tools can smudge a clean cartridge.', slug: 'cleaning-guide', category: 'Cleaning', updated: '2026-10-24' },
  { title: 'Repair Guide — Scratches, Shells & Discoloration', description: 'How to approach scratches, scuffed plastic, cracked shells and discoloration with the tools shown so far — and which kinds of damage are cosmetic, not fixable.', slug: 'repair-guide', category: 'Repair', updated: '2026-10-24' },
  { title: 'Platforms Guide — Six Fictional Platforms & PAL/NTSC', description: 'Understand the fictional platform families, regional variants, and how PAL/NTSC collecting shapes what you keep, sell and display.', slug: 'platforms-guide', category: 'Reference', updated: '2026-10-24' },
  { title: 'Quests Guide — How Collection Quests Work', description: 'What is confirmed about the 300 launch quests, how collection-based objectives differ from a customer-order system, and how to plan a collection around them.', slug: 'quests-guide', category: 'Progression', updated: '2026-10-24' },
  { title: 'Collection Room Guide — Display & Decorating', description: 'Turn restored cartridges into a room worth visiting: shelving, display priorities, decoration rewards and a sustainable collecting rhythm.', slug: 'collection-room-guide', category: 'Collection', updated: '2026-10-24' },
];

const FAQ_ITEMS = [
  { question: 'When does Cozy Game Restoration release?', answer: 'Cozy Game Restoration is scheduled to launch on November 4, 2026 on Steam for Windows and macOS. It was previously announced for September 24, 2026; the November date is the current release window.' },
  { question: 'Is there a timer or a fail state?', answer: 'No. The developer states there are no timers and no fail states. You can leave a cartridge half-cleaned, return later, and work at your own pace. Cleanliness affects resale value, but you are never forced to reach 100%.' },
  { question: 'How many games and platforms are in the full version?', answer: 'The full game is described as having 108 fictional titles across six fictional platforms. Each title has PAL and NTSC regional variants, for 216 cartridge variants in total, and cartridges also differ by rarity and shell type.' },
  { question: 'What is the difference between the demo, the playtest and the full game?', answer: 'The June 2026 Steam Next Fest demo is a limited slice — the Steam demo page describes it as limited to four in-game days of parcels. The earlier playtest was a smaller invited build. The full game adds the complete 108-title set, the full quest count and the collection room. See our demo vs full game guide for the full comparison.' },
  { question: 'Does Cozy Game Restoration have crossovers?', answer: 'Yes. Parasol Corp has confirmed crossover cartridges based on real indie games, including Abiotic Factor and CONSCRIPT, with more to be revealed. These are collectible in-game cartridges, not separate game modes.' },
  { question: 'Is Cozy Game Restoration on Steam Deck?', answer: 'The game is described as built for desktop and Steam Deck, with Steam Deck optimization listed on the store page. A controller works, but precise cleaning is generally easier with a mouse.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameSchema()} />
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />

      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-b from-[#1d1712] to-[#171310]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Cozy Game Restoration <span className="text-amber-400">Wiki</span>
        </h1>
        <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-2">
          Unofficial guide hub — cleaning order, cosmetic repair, platform variants, quest planning and collection room tips for the retro cartridge restoration sim.
        </p>
        <p className="text-sm text-stone-600 mb-8">Launches November 4, 2026 — Windows &amp; macOS via Steam, Steam Deck optimized</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://store.steampowered.com/app/3581230/Cozy_Game_Restoration/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Wishlist on Steam
          </a>
          <Link href="/guides/beginner-guide" className="inline-flex items-center gap-2 border border-stone-600 hover:border-amber-500 text-stone-300 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors text-sm">
            Start with Beginner Guide →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Start Here</h2>
        <p className="text-sm text-stone-500 mb-8">Nine guides covering the full loop, from opening your first parcel to filling the collection room.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_GUIDES.map((guide) => (<GuideCard key={guide.slug} {...guide} />))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View All Guides →</Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-stone-800">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-[#221c17] rounded-lg border border-stone-800">
              <summary className="px-5 py-4 cursor-pointer text-white font-medium text-sm hover:text-amber-400 transition-colors select-none">{item.question}</summary>
              <div className="px-5 pb-4 text-stone-400 text-sm leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">Read the full FAQ →</Link>
        </div>
      </section>
    </>
  );
}
