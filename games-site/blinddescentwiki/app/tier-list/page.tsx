import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blind Descent Upgrade Priority: What to Unlock First',
  description:
    'An editorial Blind Descent priority order for the first sessions: water, fire, scanner, storage and the mutation fork, with every claim sourced or labelled.',
};

// This page is an editorial priority order, not a datamined power ranking.
// Blind Descent has no classes, no published weapon stats and no boss roster, so
// a conventional tier list would have no verifiable basis. What is defensible is
// the order in which a new player should unlock things, which is what the rows
// below describe. Every item names the system it belongs to and whether the
// claim is official or our judgment.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Water container', 'Fire pit', 'Scanner use'],
    note: 'S = do this before anything else. Water and cooking are the documented early survival tasks, and scanning is the documented route to new tools. All three are official systems, not our guess.',
  },
  {
    tier: 'A',
    items: ['Axe', 'Club', 'Lean-to', 'Workbench'],
    note: 'A = the first-hour toolkit. The axe and club cover gathering and cheap melee, the lean-to covers shelter, and the workbench is the anchor for base expansion. Item names come from playtest coverage; the categories are official.',
  },
  {
    tier: 'B',
    items: ['Containers', 'Cooking batches', 'Climbing gear'],
    note: 'B = what turns a camp into a base. Storage fixes the weight problem that separate co-op inventories create, batch cooking removes return trips, and climbing gear opens vertical routes.',
  },
  {
    tier: 'C',
    items: ['Base repairs', 'Furnishing', 'Defensive walls'],
    note: 'C = maintenance, not progression. Vines, fungal growths and creeping organisms react to neglect, so repairs are a recurring cost rather than a one-off upgrade. Skipping this tier is how bases get devoured.',
  },
  {
    tier: 'D',
    items: ['Large expansions', 'Second base'],
    note: 'D = deliberately last. Every new structure is another thing that can decay, and no relocation mechanic has been documented. Build wide only after storage and repairs are routine.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Blind Descent Upgrade Priority</h1>
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
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Blind Descent has no classes, no published weapon stats and no boss roster, so a conventional tier list would
          have nothing verifiable to rank. What the sources do support is an order of operations for the first sessions,
          which is what the rows below describe. Item names marked as playtest observations come from hands-on coverage;
          the systems they belong to are confirmed on the official store page.
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">What This List Does Not Claim</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          It does not rank weapons. The official sources name four weapon families — bows, spears, axes and rifles — and
          state that every weapon type plays differently, but publish no damage values. Ranking them would mean inventing
          numbers.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          It does not rank mutations. Telekinesis and wall running are the only officially named examples, and the full
          list is unconfirmed.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          It does not claim a decay timer. The studio has said bases are overgrown, devoured or corrupted when neglected,
          but has not published how long neglect takes.
        </p>
      </section>

      <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Update Log</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Reviewed against the Steam store page and the publisher release notes of 2025-07-30 and 2026-10-12 on
          2026-10-28. If you find a published stat we missed, <a href="/contact" className="text-amber-400 hover:underline">send it in</a>.
        </p>
      </div>
    </div>
  );
}
