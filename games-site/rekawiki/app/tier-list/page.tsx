import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List — What to Prioritise First',
  description:
    'REKA tier list and priority order — an editorial ranking of what to unlock, build, or level first, based on the current build.',
};

// TODO(per site): replace with a ranking you can defend. Rules:
//   - Say what the list measures (power? unlock priority? cost efficiency?).
//   - Every claim that is a number must come from an official source or a test
//     you can describe; otherwise write "not published" instead of guessing.
//   - If the game has no classes/weapon tiers, rename the page — see the
//     page-type decision in docs/STRATEGY-内容生产.md.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">REKA Tier List</h1>
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
