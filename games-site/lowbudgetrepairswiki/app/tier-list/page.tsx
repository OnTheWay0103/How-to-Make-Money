import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Money-Making Methods Tier List',
  description: 'Low-Budget Repairs money-making tier list — full flat makeovers, bathroom flooding fixes, kitchen renovations, painting jobs, and more ranked by profit potential and time investment.',
};

// Ranked from demo gameplay (v0.1, August 2026). Based on payout vs. time & material cost.
const MONEY_TIERS = [
  { tier: 'S', weapons: ['Complete Flat Makeovers'], note: 'Highest payout of any job type. Big time commitment, but the profit margin makes it the best money-maker — just keep materials cheap and hide the shortcuts.' },
  { tier: 'S', weapons: ['Bathroom Flooding Fixes'], note: 'Quick turnaround for the payout. Clients pay premium for urgent water damage, and most of the work is hidden behind tiles and pipework anyway.' },
  { tier: 'A', weapons: ['Kitchen Renovations'], note: 'High value and fairly quick. Kitchen jobs pay well, and there are plenty of areas clients won\'t inspect closely — behind cabinets, under the sink, behind the cooker.' },
  { tier: 'A', weapons: ['Painting-Only Jobs'], note: 'Fast, cheap, and easy to inflate the bill. Water down the paint and skip the areas behind radiators — a near-pure profit job when you rush it.' },
  { tier: 'B', weapons: ['Single-Room Touch-Ups'], note: 'Decent money for low effort. Small scope means fewer materials to buy, but payouts are capped — take these between big jobs.' },
  { tier: 'B', weapons: ['Furniture Refurbishing'], note: 'Good for recycling old furniture clients want gone. Sand, paint, resell — but watch your time; refinishing eats hours for modest pay.' },
  { tier: 'C', weapons: ['Minor Repairs'], note: 'Low pay and often fiddly. Only worth it early on for reputation, or when they\'re quick one-stop fixes.' },
  { tier: 'C', weapons: ['Cleaning-Only Jobs'], note: 'The worst money-maker. Time-consuming with almost no material cost to cut — skip these once better jobs are available.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Money-Making Methods Tier List</h1>
      <p className="text-gray-400 mb-2">Low-Budget Repairs renovation strategies ranked by profit potential and time investment.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Version 0.1 (Pre-release) — Updated Aug 3, 2026. Based on demo gameplay. Will be updated after the full release.</div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Overall Rankings</h2>
        {MONEY_TIERS.map((row) => (
          <div key={row.tier + row.weapons.join('-')} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.weapons.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on This Tier List</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every job in Low-Budget Repairs can be profitable if you cut enough corners — the tiers rank
          money-making methods by payout versus time and material cost. S-tier jobs pay the most for the
          effort, while C-tier jobs are best avoided once better contracts are available. This list is
          based on the demo build (v0.1) and will be revised after the full release on August 13, 2026.
        </p>
      </div>
    </div>
  );
}
