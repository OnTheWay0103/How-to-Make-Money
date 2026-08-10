import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Money-Making Methods Tier List',
  description: 'Nivalis Nights money-making tier list — nightclubs, black-market energy trading, restaurants, bars, stim stores and food stalls ranked by profit potential and time investment.',
};

// Ranked from pre-release info (August 2026). Based on payout vs. time, cost & risk.
const MONEY_TIERS = [
  { tier: 'S', methods: ['Nightclubs'], note: 'The highest-margin venue type in the game. Expensive to set up and staff, but once established they are the strongest passive income engine — and a prestige goal for late-game players.' },
  { tier: 'S', methods: ['Black-Market Energy Trading'], note: 'Buy energy at low daytime rates and sell at inflated nighttime prices — especially during cold snaps and storms. Margins can be enormous, but CorpSec can fine you if you get caught. High risk, highest reward.' },
  { tier: 'A', methods: ['Restaurants'], note: 'Strong margins with a full kitchen and dining room. Best once you have a greenhouse and fishing route supplying ingredients — food cost drops and profit climbs fast.' },
  { tier: 'A', methods: ['Bars'], note: 'Great evening traffic with liquor markups. Pairs well with restaurants next door — customers bounce between venues during the same night out.' },
  { tier: 'B', methods: ['Stim Stores'], note: 'Low overhead and simple supply chains. Steady, boring income that works well as a second location while you manage a bigger venue.' },
  { tier: 'B', methods: ['Ramen Bars'], note: 'A natural upgrade path from the noodle bar. High volume, fast service, but thinner margins — profits come from sheer customer count during rush hours.' },
  { tier: 'C', methods: ['Food Stalls'], note: 'Cheap to run and a fine first expansion, but weather-sensitive: rain and storms drive customers indoors and away from stalls. Treat as a stepping stone.' },
  { tier: 'C', methods: ['Noodle Bars'], note: 'Your starting venue. It is the tutorial for the whole management system — learn menu pricing, staff scheduling and inventory here before you expand anywhere else.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Money-Making Methods Tier List</h1>
      <p className="text-gray-400 mb-2">Nivalis Nights business strategies ranked by profit potential, time investment and risk.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">Pre-release — Updated Aug 11, 2026. Based on official feature reveals. Will be updated after the September 29, 2026 launch.</div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Overall Rankings</h2>
        {MONEY_TIERS.map((row) => (
          <div key={row.tier + row.methods.join('-')} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-cyan-500/20 text-cyan-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.methods.map((m) => (
                  <span key={m} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{m}</span>
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
          Every venue in Nivalis Nights can be profitable if it's managed well — the tiers rank money-making
          methods by payout versus time, cost and risk. S-tier methods pay the most for the effort, while
          C-tier venues are best treated as stepping stones. This list is based on official pre-release
          information and will be revised after the full release on September 29, 2026.
        </p>
      </div>
    </div>
  );
}
