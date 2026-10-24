import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Priority & Collection Focus Guide',
  description: 'An editorial priority guide for Cozy Game Restoration — which cleaning jobs to tackle first, how condition affects resale value, and which collection goals are worth chasing. Not official data.',
};

// Editorial recommendations based on the confirmed cleaning tools and conditions
// shown in the demo and described in store/press material. This is NOT an
// official tier list and the game has no combat or character power tiers.
const CLEANING_TIERS = [
  {
    tier: 'S',
    tasks: ['Tape and parcel residue', 'Stickers and label glue'],
    note: 'Do these first. Adhesive traps loose dust, hides the surface underneath, and can spread onto clean plastic if you scrub around it. Removing it early also tells you what condition the shell is actually in.',
  },
  {
    tier: 'A',
    tasks: ['Loose dust and surface grime', 'Edge and seam dirt'],
    note: 'The bulk of the work and the safest place to start with a cotton swab or brush. Work from the outside in, and clean or swap tools before they start smearing.',
  },
  {
    tier: 'B',
    tasks: ['Ink and pen marks', 'Stubborn residue'],
    note: 'Use solvent sparingly and test on a small area. These marks are slower to lift and are the point where over-scrubbing can dull the plastic finish.',
  },
  {
    tier: 'C',
    tasks: ['Scratches and scuffs', 'Discoloration'],
    note: 'Cosmetic character rather than dirt. Polish can improve the look of light scratches, but deep scratches and yellowed plastic are part of the cartridge’s history and may not be fully reversible.',
  },
];

// Editorial collection priorities. The game's quests are collection-based, so
// these are ways to organize a collection — not confirmed quest rewards.
const COLLECTION_TIERS = [
  {
    tier: 'S',
    tasks: ['Finish a platform run', 'Keep both PAL and NTSC variants'],
    note: 'Breadth on one platform is the most reliable way to satisfy collection objectives. Regional pairs are the deepest form of that breadth and also make the shelf look deliberate.',
  },
  {
    tier: 'A',
    tasks: ['Hold one of each genre', 'Keep high-rarity shells'],
    note: 'Genre spread hedges against objectives that ask for a type of game rather than a specific platform. High-rarity shells are worth displaying even before you have a set.',
  },
  {
    tier: 'B',
    tasks: ['Crossover cartridges', 'Duplicate commons'],
    note: 'Crossovers are confirmed collectibles and worth keeping, but they are not a substitute for a broad collection. Duplicates are best sold to fund missing slots.',
  },
  {
    tier: 'C',
    tasks: ['Immediate resale of everything'],
    note: 'Selling every cartridge as soon as it is clean keeps money moving, but it slows collection quests. Sell duplicates and low-rarity extras, not the last copy of a title you still need.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Cleaning Priority &amp; Collection Focus</h1>
      <p className="text-stone-400 mb-2">An editorial priority guide for Cozy Game Restoration — what to clean first and what to collect first.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Unofficial editorial advice — not official data. Updated Oct 24, 2026. The game has no combat or power tiers, so this page ranks workflow, not characters.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Cleaning Priority</h2>
        <p className="text-sm text-stone-500 mb-6">Order of work on a single cartridge. Earlier tiers unblock later ones.</p>
        {CLEANING_TIERS.map((row) => (
          <div key={row.tier + row.tasks.join('-')} className="flex gap-4 mb-4 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' :
              row.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : 'bg-stone-500/20 text-stone-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.tasks.map((m) => (
                  <span key={m} className="text-sm font-medium text-white bg-[#221c17] px-3 py-1 rounded border border-stone-800">{m}</span>
                ))}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Collection Focus</h2>
        <p className="text-sm text-stone-500 mb-6">How to spend parcel money when quests are collection-based. This is our recommendation, not a datamined reward table.</p>
        {COLLECTION_TIERS.map((row) => (
          <div key={row.tier + row.tasks.join('-')} className="flex gap-4 mb-4 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-emerald-500/20 text-emerald-400' :
              row.tier === 'B' ? 'bg-sky-500/20 text-sky-400' : 'bg-stone-500/20 text-stone-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.tasks.map((m) => (
                  <span key={m} className="text-sm font-medium text-white bg-[#221c17] px-3 py-1 rounded border border-stone-800">{m}</span>
                ))}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#221c17] border border-stone-800 rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on This Page</h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          Cozy Game Restoration has no fail states, and every cartridge can be cleaned at your own pace. That means a
          &quot;tier list&quot; here is really a workflow suggestion: what to do first so the rest of the job is easier, and what to
          collect first so quest progress does not stall. The in-game market fluctuates daily, so selling advice should
          always be checked against the current price before you commit.
        </p>
      </div>
    </div>
  );
}
