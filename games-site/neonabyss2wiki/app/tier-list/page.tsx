import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Upgrade Priority — What to Spend First',
  description:
    'What to spend first in Neon Abyss 2: weapon levels and Tempering, Great Wonder Blocks, Faith sinks and Blackdog Patch charges, ranked by cost against payoff.',
};

// This page ranks *spending order*, not character or weapon power. The power
// ranking lives in the guide at /guides/neon-abyss-2-weapon-tier-list so the
// two pages do not target the same search intent.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Weapon levels', 'Tempering', 'Great Wonder Block'],
    note: 'Affix potency and variety scale with weapon levels, and Tempering adds an affix instead of replacing one. A Great Wonder Block in a shop is the one reroll that changes a build mid-floor.',
  },
  {
    tier: 'A',
    items: ['Faith → shop', 'Faith → Hatchmon', 'Blackdog Patch charges'],
    note: 'Faith does not carry between runs, so unspent Faith at a boss portal is a waste. Hold three Blackdog charges for a losing streak; do not spend them on a run that is going well.',
  },
  {
    tier: 'B',
    items: ['Smiley Merchant payment reroll', 'Keys for Sky Heist'],
    note: 'Both are situational. Reroll the payment type only when the merchant wants a resource you need for a door or a Hatchmon, and hold keys only if you are actually running Sky Heist.',
  },
  {
    tier: 'C',
    items: ['Infinite Energy'],
    note: 'An accessibility setting, not an upgrade. Veewo warns it significantly reduces difficulty and could reduce enjoyment — leave it off unless you need it.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Neon Abyss 2 Upgrade Priority</h1>
      <p className="text-gray-400 mb-2">
        An editorial spending order, not a datamined power ranking.
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
        <h3 className="text-white font-semibold mb-2">Looking for a power ranking?</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          The set and build ranking lives in{' '}
          <Link href="/guides/neon-abyss-2-weapon-tier-list" className="text-cyan-400 hover:underline">
            the 1.0 weapon and build tier list
          </Link>
          , which explains why no individual weapon can be ranked without a published damage table.
        </p>
        <p className="text-gray-500 text-xs leading-relaxed mt-3">
          Update log: 2026-10-26 — first version, written against the 1.0 build and the October 10–16 hotfixes.
        </p>
      </div>
    </div>
  );
}
