import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'An honest Dwarf Delve tier list — priority rankings for the confirmed systems: Battlemallet, lantern, support beams, capacity, rails, and more for early, mid, and deep runs.',
};

const GEAR_TIERS = [
  { tier: 'S', items: ['Battlemallet', 'Lantern'], note: 'Essential — mining, combat, and light in two confirmed tools; upgrade first' },
  { tier: 'A', items: ['Support Beams', 'Flares'], note: 'Strong — collapse is the #1 confirmed killer, and flares uncover hidden secrets' },
  { tier: 'B', items: ['Floodlights', 'Ladders', 'Minecart Rails'], note: 'Situational — good in deep runs and heavy ore hauls' },
  { tier: 'C', items: ['Gear Hooks'], note: 'Quality of life — frees your hands while mining' },
];

const THEME_TIERS = [
  { tier: 'S', items: ['Carry More Loot'], note: 'Best confirmed upgrade theme — more value per extraction' },
  { tier: 'A', items: ['Hit Harder', 'Move Faster'], note: 'Strong — both speed up runs and reduce exposure' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Priority rankings for Dwarf Delve&apos;s confirmed systems.
        Updated August 2026. Rankings may shift with post-launch patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        No official roster yet — priority list, subject to change
      </div>

      {/* Gear Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Gear & Equipment Tier List</h2>
        {GEAR_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-yellow-500/20 text-yellow-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((v) => (
                  <span key={v} className="text-sm font-medium text-white bg-[#1a1008] px-3 py-1 rounded border border-[#4a3a1a]">
                    {v}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Upgrade Theme Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Upgrade Theme Tier List</h2>
        <p className="text-gray-400 text-sm mb-4">
          No individual perk names, tiers, or prices have been published — only three perk trees
          (Might, Resilience, Fortune) and their upgrade themes are confirmed. Ranked here are the themes.
        </p>
        {THEME_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((c) => (
                  <span key={c} className="text-sm font-medium text-white bg-[#1a1008] px-3 py-1 rounded border border-[#4a3a1a]">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Important note */}
      <div className="bg-[#1a1008] border border-[#4a3a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          A real tier list for Dwarf Delve does not exist yet — there is no confirmed roster of
          weapons, perks, or ores to rank. Every list naming pickaxes, crossbows, flamethrowers,
          or named perks like &quot;Phoenix Heart&quot; and &quot;Midas Touch&quot; is fabricated; those
          items are not in the confirmed game. This page ranks only what official materials confirm:
          the tools above and the three perk-tree upgrade themes (carry more loot, hit harder, move faster).
          The reliable early priority order is: Battlemallet → lantern → beams → capacity → rails.
          For most players, smart extraction decisions matter more than any ranking — every build
          can succeed with the right strategy. Pick what fits your playstyle.
        </p>
      </div>
    </div>
  );
}
