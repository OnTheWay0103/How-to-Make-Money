import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upgrade Priority: What to Buy First',
  description:
    'Probably Stolen upgrade priority — an editorial order for inventory, tools, vending machines, licences and perks, with the official basis for each step and every gap marked.',
};

// Every rank below rests on a mechanic that appears in official material
// (Steam store copy, the 1.0 announcement of 2026-10-21, or patch note UPDATE
// 049 of 2026-09-14). No launch-day prices, unlock costs or profit figures have
// been published, so the ordering is editorial — it says what removes the
// tightest constraint first, not what a spreadsheet measured.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Inventory capacity', 'Tool durability'],
    note:
      'Both are hard ceilings on everything else. UPDATE 049 raised the number of inventory windows you can keep open from 10 to 25, and made each ingot size upgrade add 20 maximum and 20 current durability. Repair with scrap returns 50% of maximum durability, so a bigger maximum is also a longer repair. Unlock costs: [Unconfirmed].',
  },
  {
    tier: 'A',
    items: ['Vending machines', 'Water testing and filtering gear'],
    note:
      'These convert downtime into income. Vending machines are a 1.0 addition that sells goods overnight after you close, and water only resells after it is tested and filtered. Both need a starting capital you have to earn first, so they sit behind the capacity upgrades rather than beside them.',
  },
  {
    tier: 'B',
    items: ['Advanced licences', 'Model Citizen', 'Intimidating'],
    note:
      'Access and reputation multipliers. Advanced licences are the stated route into the underground market; Model Citizen raised its credit bonus for reporting criminal customers from 20% to 50%, and Intimidating cut evidence generation by 33% while dropping its starting cost from 3 points to 2.',
  },
  {
    tier: 'C',
    items: ['Counterfeit relabelling', 'Addiction-trading perks'],
    note:
      'High margin, high exposure. Selling counterfeit goods as genuine and running addiction perks both raise the odds of inspections, raids and mob justice; the addiction trading penalty also went up from 5% to 8%. Worth it only once a bad week no longer ends the run.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Probably Stolen Upgrade Priority</h1>
      <p className="text-gray-400 mb-2">
        An editorial order of what to buy first — not a datamined power ranking.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">
        Editorial judgment — every number is either sourced or marked unconfirmed.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">How to Read This List</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          This page ranks <strong className="text-gray-200">what to prioritise first</strong> and states the basis for
          each rank: measured values where the game publishes them, and clearly-labelled editorial judgment where it does
          not. Nothing here is a price, a drop rate or a damage number — none of those exist in official material, and
          quoting them before launch would be guessing.
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">What Changes This Order</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Your starting scenario sets the first purchase. A Water Merchant needs testing and filtering before anything
          else pays, an Aquafarmer is stuck inside tank water quality, filtration and energy cells, and Rock Bottom
          starts with nothing at all — the studio calls it maximum difficulty. Difficulty is chosen separately from the
          scenario, with four options at launch, but the studio has not published what each one modifies.
        </p>
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
