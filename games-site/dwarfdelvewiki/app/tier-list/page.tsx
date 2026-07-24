import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'Dwarf Delve tier list — best gear rankings, perk priorities, and equipment upgrade order for early game, mid-game, and Abyss runs.',
};

const GEAR_TIERS = [
  { tier: 'S', items: ['Battlemallet (Level 3+)', 'Lantern (Level 4+)', 'Phoenix Heart Perk'], note: 'Essential — these define your run capability' },
  { tier: 'A', items: ['Support Beams (Level 3+)', 'Floodlights (Level 2+)', 'Mine Sweeper Perk', 'Coin Collector Perk'], note: 'Strong — significantly improve run efficiency' },
  { tier: 'B', items: ['Sticky Flares', 'Cargo Cart', 'Collapse Survivor Perk', 'Relic Hunter Perk'], note: 'Situational — valuable in specific scenarios' },
  { tier: 'C', items: ['Ladders (beyond Level 1)', 'Armored Cart', 'Deep Breath Perk'], note: 'Niche — low priority for early investment' },
];

const PERK_TIERS = [
  { tier: 'S', items: ['Efficient Miner', 'Phoenix Heart', 'Mine Sweeper', 'Pack Mule'], note: 'Best perks in the game — unlock ASAP' },
  { tier: 'A', items: ['Demolition Expert', 'Coin Collector', 'Steady Grip', 'Relic Hunter'], note: 'Excellent value for coin cost' },
  { tier: 'B', items: ['Collapse Survivor', 'Dark Vision', 'Gem Sniffer', 'Midas Touch'], note: 'Good but not urgent' },
  { tier: 'C', items: ['Battle Ready', 'Deep Breath', 'Berserker Rage', 'Tough Hide'], note: 'Nice to have but skip initially' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Gear and Perk rankings for Dwarf Delve (Launch build).
        Updated July 25, 2026. Rankings may shift with post-launch patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Launch build — subject to change
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

      {/* Perk Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Perk Tier List</h2>
        {PERK_TIERS.map((row) => (
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
          Dwarf Delve launches July 27, 2026. Post-launch balance patches may shift rankings.
          This tier list reflects the current demo meta and developer preview information.
          For most players, gear choice matters less than smart extraction decisions — every
          build can succeed with the right strategy. Pick what fits your playstyle.
        </p>
      </div>
    </div>
  );
}
