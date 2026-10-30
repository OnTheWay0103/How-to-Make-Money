import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Priority List — What to Unlock First in Deadly Days: Roadtrip',
  description:
    'An editorial priority order for Deadly Days: Roadtrip 1.0: the workbench, radar, survivors, and weapons that improve every run before niche upgrades.',
};

// This page answers a different question from the two detailed rankings:
// "what should I unlock or buy first?" rather than "which character or weapon is strongest?"
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Workbench', 'Loot radar', 'Loot speed'],
    note: 'These improve every run regardless of survivor or weapon. The workbench unlocks crafting, rerolls, and banishing; the radar shows crate and gas-canister rarity; loot speed means more items per day.',
  },
  {
    tier: 'A',
    items: ['Penny the Clown', 'Flamethrower', 'The Grinder'],
    note: 'Penny has the most accessible strong unlock (3 Rubber Balls) and passive damage. The Flamethrower and Grinder solve the swarm problem that ends most runs.',
  },
  {
    tier: 'B',
    items: ['Bushy', 'Mega Shotgun', 'Desert Eagle', 'Character item stickers'],
    note: 'Strong once you have a stable build. Bushy rewards positioning; the guns cover single-target boss damage; stickers are the best long-term apple sink.',
  },
  {
    tier: 'C',
    items: ['Banishing slots', 'Luck', 'Vampire'],
    note: 'Powerful but conditional. Banishing is wasted before you know the item pool; luck is a third stat; the Vampire needs a stable opening to snowball.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Deadly Days: Roadtrip Priority List</h1>
      <p className="text-gray-400 mb-2">
        What to unlock and buy first — an editorial priority order, not a datamined power ranking.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">
        Editorial judgment — every number is either sourced or marked [Unconfirmed].
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">How to Read This List</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          This page ranks <strong className="text-gray-200">what to prioritise first</strong> across the whole
          progression layer, not which character or weapon wins a fight. For those, use the{' '}
          <Link href="/guides/character-tier-list" className="text-amber-400 hover:underline">character tier list</Link>{' '}
          and the{' '}
          <Link href="/guides/weapon-tier-list" className="text-amber-400 hover:underline">weapon tier list</Link>.
          The order below follows one rule: systems that help every run come before systems that help one build.
        </p>

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

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The Short Version</h2>
        <ol className="text-gray-400 text-sm leading-relaxed space-y-2 list-decimal list-inside">
          <li>Unlock the workbench (tape is a priority pickup).</li>
          <li>Buy survivability, then loot speed, then the radar.</li>
          <li>Unlock Penny for the easiest strong survivor.</li>
          <li>Craft one crowd-clear weapon before a second boss weapon.</li>
          <li>Invest character stickers only after you pick a main.</li>
        </ol>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          The full reasoning is in the{' '}
          <Link href="/guides/meta-progression-guide" className="text-amber-400 hover:underline">meta progression guide</Link>.
        </p>
      </section>

      <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Update Log</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Checked against version 1.0 on 2026-10-31. If you find a published stat we missed,{' '}
          <a href="/contact" className="text-amber-400 hover:underline">send it in</a>.
        </p>
      </div>
    </div>
  );
}
