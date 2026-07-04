import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Tier List',
  description:
    'Mistfall Hunter class tier list — best class rankings for solo PvP, squad play, and PvE. Updated for the July 2026 launch meta.',
};

const CLASS_TIERS = [
  { tier: 'S', classes: ['Sorcerer', 'Shadowstrix'], note: 'Top-tier — Sorcerer dominates PvE and team fights; Shadowstrix is king of solo PvP' },
  { tier: 'A', classes: ['Mercenary'], note: 'Best beginner class — forgiving, tanky, consistent' },
  { tier: 'B', classes: ['Withered Knight'], note: 'Strong counter-pressure and burst with sigil detonation' },
  { tier: 'C', classes: ['Blackarrow'], note: 'High skill ceiling — aim-dependent, better in PvE than PvP' },
  { tier: 'D', classes: ['Seer'], note: 'Support only — viable in organized squads, weak solo' },
];

const SOLO_TIERS = [
  { tier: 'S', classes: ['Shadowstrix'], note: 'Stealth + burst = best solo extraction class' },
  { tier: 'A', classes: ['Mercenary', 'Sorcerer'], note: 'Mercenary survives; Sorcerer kills fast' },
  { tier: 'B', classes: ['Withered Knight', 'Blackarrow'], note: 'Viable with practice' },
  { tier: 'C', classes: ['Seer'], note: 'Not recommended for solo play' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Class Tier List</h1>
      <p className="text-gray-400 mb-2">
        Mistfall Hunter class rankings for launch (July 29, 2026).
        Based on open beta data and community consensus.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Pre-launch — subject to change with balance patches
      </div>

      {/* Overall Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Overall Class Rankings</h2>
        {CLASS_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
              row.tier === 'C' ? 'bg-purple-500/20 text-purple-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.classes.map((c) => (
                  <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Solo Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Solo Play Rankings</h2>
        {SOLO_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.classes.map((c) => (
                  <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Note */}
      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Mistfall Hunter has not yet launched (July 29, 2026). These rankings are based
          on open beta data and community feedback. Balance patches post-launch may shift
          rankings significantly. Pick the class that matches your playstyle — every class
          can extract successfully in the right hands.
        </p>
      </div>
    </div>
  );
}
