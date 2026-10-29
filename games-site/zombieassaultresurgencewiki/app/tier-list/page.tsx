import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List — What to Prioritise First',
  description:
    'Zombie Assault: Resurgence tier list and priority order — an editorial ranking of what to unlock, build, or level first, based on the current build.',
};

// Priority order for a first character, level 1–20. This ranks *what to do
// first*, not raw power: the game publishes no DPS table, so a power ranking
// would be invented. Each row's note states its basis.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Survivability first', 'One Primary, Upgraded', 'Armour in Step With Skills'],
    note:
      'Early gear is weak and the first twenty levels are where most runs are lost. Splitting upgrades across several guns leaves you with several average guns, and armour is the other half of the defence your skill points buy.',
  },
  {
    tier: 'A',
    items: ['Third Ability at Rank 10', 'Read Both Speciality Branches', 'Open Strongboxes as You Earn Them'],
    note:
      'The third Activated Ability unlocks at rank 10 and is the single biggest jump in your kit. The Speciality branch locks in permanently, and a respec costs in-game currency, so read both before committing. A Strongbox you never open is a weapon you do not have.',
  },
  {
    tier: 'B',
    items: ['Sell or Dismantle Duplicates', 'Rocket Launcher for Elites', 'Craft the Frostbite'],
    note:
      'The store page confirms excess weapons can be sold or dismantled for resources, which is the answer to a full inventory. Rockets earn a slot for their 100% knockback rather than their damage. The Frostbite is one of the few weapons with a documented crafting route.',
  },
  {
    tier: 'C',
    items: ['Power Weapons', 'Sniper Rifles', 'Chasing Rare-Tier Guns Too Early'],
    note:
      'Power Weapons only arrive from a timed mid-mission Supply Drop, so they are an opportunity rather than a plan. Only four sniper rifles exist and the swarm does not line up for them. Rarity floors differ per weapon — the Krachlader starts at Rare — so hunting one before Rare drops is wasted time.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Zombie Assault: Resurgence Tier List</h1>
      <p className="text-gray-400 mb-2">
        An editorial priority order, not a datamined power ranking.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">
        Editorial judgment — every number is either sourced or marked unconfirmed.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">How to Read This List</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          This page ranks <strong className="text-gray-200">what to prioritise first</strong> and states the basis for
          each rank: measured values where the game publishes them, and clearly-labelled editorial judgment where it does
          not.
        </p>

        {PRIORITY_TIERS.length === 0 && (
          <p className="text-sm text-gray-500">The ranking is being built.</p>
        )}

        {PRIORITY_TIERS.map((row) => (
          <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-4 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-cyan-500/20 text-cyan-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((m) => (
                  <span key={m} className="text-sm font-medium text-white bg-[#0e1b20] px-3 py-1 rounded border border-[#1d3038]">{m}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Update Log</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          If you find a published stat we missed, <a href="/contact" className="text-amber-400 hover:underline">send it in</a>.
        </p>
      </div>
    </div>
  );
}
