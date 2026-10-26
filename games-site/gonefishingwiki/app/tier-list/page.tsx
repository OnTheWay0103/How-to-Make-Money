import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GONE Fishing Horror Game Upgrade Priority',
  description:
    'A GONE Fishing horror game upgrade priority order: Big Grill and Fish Value first, then depth and sinker, then team totems, with the official numbers.',
};

// This page ranks SPENDING ORDER, not perk power. Perk picks live in the
// gone-fishing-best-perks guide so the two pages do not chase the same query.
const PRIORITY_TIERS: { tier: string; items: string[]; note: string }[] = [
  {
    tier: 'S',
    items: ['Big Grill', 'Fish Value'],
    note: 'Official FAQ priority for new players. Each gives +50% when maxed: the grill raises cooked throughput, Fish Value raises every sale and sacrifice. Cooking already adds 33%, so these two compound with the loop you run every day.',
  },
  {
    tier: 'A',
    items: ['Depth access (line)', 'Sinker'],
    note: 'Depth 2,500+ is the official big-fish threshold, and the sinker is one of the FAQ bait-score levers. Without these, expensive bait is capped by shallow water and a low score ceiling.',
  },
  {
    tier: 'B',
    items: ['Leviathan totem', 'Fish Frenzy totem'],
    note: 'Team-wide buffs: one purchase lifts every rod in the lobby. Buy them in co-op before personal luxury upgrades; solo they are lower priority because you are the only rod.',
  },
  {
    tier: 'C',
    items: ['Clinket trinkets'],
    note: 'The 1.0 trinkets are shared with friends and sold by the new trader Clinket. Strong, but they multiply a loop that has to work first. Buy after the grill, value and depth are sorted.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">GONE Fishing Horror Game Upgrade Priority</h1>
      <p className="text-gray-400 mb-2">
        What to spend on first, in order — an editorial priority list built on the official FAQ.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">
        Editorial judgment — every number is either sourced or marked unconfirmed.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">How to Read This List</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          This page ranks <strong className="text-gray-200">what to buy first</strong>, not which perk is strongest. The
          basis is the official FAQ&apos;s own advice, the 1.0 announcement, and the bait-score levers the developer
          documents. Where the game publishes a number we use it; where it does not, the note says so instead of
          inventing a value.
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
        <h2 className="text-2xl font-bold text-white mb-3">The Official Numbers Behind the Order</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Every figure below is from the official FAQ or the 1.0 announcement. Anything not listed here is either
          player-reported or unknown, and we do not fill the gap with a guess.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-[#1d3038] rounded">
            <thead className="bg-[#0e1b20] text-gray-300">
              <tr>
                <th className="px-3 py-2 border-b border-[#1d3038]">Value</th>
                <th className="px-3 py-2 border-b border-[#1d3038]">Official figure</th>
                <th className="px-3 py-2 border-b border-[#1d3038]">Why it affects the order</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr>
                <td className="px-3 py-2 border-b border-[#1d3038]">Big Grill / Fish Value</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">+50% each when maxed</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">Flat multipliers on the loop you repeat every day</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-[#1d3038]">Cooking</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">+33% value</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">Makes grill capacity worth more than it looks</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-[#1d3038]">Big-fish depth</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">2,500+</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">Gates size and legendary odds</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-[#1d3038]">Big-fish bait</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">60+; Troll 86</td>
                <td className="px-3 py-2 border-b border-[#1d3038]">Sets the ceiling; useless without depth</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Jeremy Wade bonus</td>
                <td className="px-3 py-2">+20% weight</td>
                <td className="px-3 py-2">A difficulty choice, not a purchase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">Solo vs Co-op</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          The order changes with lobby size because totems and trinkets are shared.
        </p>
        <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc pl-5">
          <li><strong className="text-gray-200">Solo:</strong> Big Grill, Fish Value, depth, sinker, then personal convenience. Totems are optional.</li>
          <li><strong className="text-gray-200">Duo:</strong> One player invests in cooking, the other in depth. Split so both loops improve.</li>
          <li><strong className="text-gray-200">3–4 players:</strong> Buy Leviathan early; one totem buffs every rod in the lobby.</li>
          <li><strong className="text-gray-200">5–8 players:</strong> Shared purchases first, personal rods second. Trinkets are lobby-wide, so coordinate who buys.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">What Not to Buy First</h2>
        <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc pl-5">
          <li><strong className="text-gray-200">High-value bait before depth.</strong> Bait value 60+ on a shallow rod is a ceiling you cannot reach.</li>
          <li><strong className="text-gray-200">Trinkets before the basics.</strong> They are multipliers; a multiplier on a broken day is still a broken day.</li>
          <li><strong className="text-gray-200">Cosmetic or comfort upgrades.</strong> They do not help the quota, and the quota is the run.</li>
        </ul>
      </section>

      <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Update Log</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Based on the 1.0 build and the official FAQ, read 2026-10-26. If you find a published stat we missed,{' '}
          <a href="/contact" className="text-amber-400 hover:underline">send it in</a>. Perk picks are ranked separately
          in the <a href="/guides/gone-fishing-best-perks" className="text-amber-400 hover:underline">perks guide</a>.
        </p>
      </div>
    </div>
  );
}
