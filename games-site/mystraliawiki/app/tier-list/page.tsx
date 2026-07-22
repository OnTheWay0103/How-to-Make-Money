import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'Echoes of Mystralia tier list — best spell forms, Memories, Relics, and elemental combinations ranked from S-Tier to C-Tier for the Early Access launch.',
};

function tierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'bg-amber-500/20 text-amber-400';
    case 'A': return 'bg-green-500/20 text-green-400';
    case 'B': return 'bg-blue-500/20 text-blue-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
}

const SPELL_TIERS = [
  { tier: 'S', items: ['Vortex', 'Arc'], note: 'Meta-defining — best DPS and clear speed' },
  { tier: 'A', items: ['Nova', 'Wall', 'Lance'], note: 'Excellent — best defense, control, and boss damage' },
  { tier: 'B', items: ['Bolt', 'Shard', 'Wave'], note: 'Solid performers, outscaled in endgame' },
  { tier: 'C', items: ['Mine', 'Orb', 'Barrage', 'Rift'], note: 'Situational — niche or utility-only' },
];

const ELEMENT_TIERS = [
  { tier: 'S', items: ['Ice ❄️'], note: 'Freeze is the best status effect. Unmatched survivability and control.' },
  { tier: 'A', items: ['Lightning ⚡'], note: 'Best clear speed. Chain effect clears groups faster than anything.' },
  { tier: 'B', items: ['Fire 🔥'], note: 'Highest raw damage but DoT-based. Excels against ice enemies specifically.' },
];

const MEMORY_TIERS = [
  { tier: 'S', items: ['Amplify IV', 'Chain IV', 'Persist IV', 'Hasten IV'], note: 'Build-enabling Legendary Memories' },
  { tier: 'A', items: ['Barrier IV', 'Leech IV', 'Burst IV', 'Multishot IV', 'Expand IV'], note: 'Powerful but slightly less universal' },
  { tier: 'B', items: ['Ignite IV', 'Chill IV', 'Charge IV', 'Phase IV'], note: 'Strong within specific elemental builds' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Spell form, element, and Memory rankings for Echoes of Mystralia.
        Updated July 22, 2026. Rankings shift with Early Access patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Early Access — subject to change
      </div>

      {/* Spell Form Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Spell Form Tier List</h2>
        {SPELL_TIERS.map((row) => (
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
                {row.items.map((c) => (
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

      {/* Element Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Element Tier List</h2>
        {ELEMENT_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${tierColor(row.tier)}`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((f) => (
                  <span key={f} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Memory Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Memory Tier List (Legendary)</h2>
        {MEMORY_TIERS.map((row) => (
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
                {row.items.map((f) => (
                  <span key={f} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Important note */}
      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Echoes of Mystralia is entering Early Access. Balance patches can shift rankings significantly.
          This tier list reflects pre-release analysis and will be updated as the meta develops.
          Every spell form and element can complete all content — pick what matches your playstyle.
        </p>
      </div>
    </div>
  );
}
