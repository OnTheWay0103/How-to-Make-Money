import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'Witchspire tier list — best Coven rankings for solo, duo, and group play. Familiar and weapon tier rankings for the current Early Access patch.',
};

const COVEN_TIERS = [
  { tier: 'S', covens: ['Wildroots', 'Cloudpiercers'], note: 'Best overall — forgiving and powerful' },
  { tier: 'A', covens: ['Starsmiths', 'Tomekeepers'], note: 'Strong with the right build' },
  { tier: 'B', covens: ['Foretellers'], note: 'High skill ceiling, rewarding when mastered' },
  { tier: 'C', covens: ['Nightscribes'], note: 'Glass cannon — risky for most players' },
];

const FAMILIAR_TIERS = [
  { tier: 'S', familiars: ['Shardling (Crystal)', 'Specra (Nox)', 'Taileaf (Nature)'], note: 'Top-tier combat + utility' },
  { tier: 'A', familiars: ['Rockling (Nature)', 'Peb (Nature)', 'Etherit (Ethereal)', 'Bompus (Astral)'], note: 'Excellent early picks' },
  { tier: 'B', familiars: ['Chirili (Lux)', 'Charling (Lux)', 'Detrox (Astral)', 'Xilvant (Nox)'], note: 'Solid but situational' },
  { tier: 'C', familiars: ['Locto (Lux)', 'Bril (Crystal)', 'Quol (Ethereal)', 'Fien (Nox)'], note: 'Starter familiars — replace early' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Coven, Familiar, and Weapon rankings for Witchspire EA v0.1.1d.
        Updated June 29, 2026. Rankings shift with patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Early Access — subject to change
      </div>

      {/* Coven Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Coven Tier List</h2>
        {COVEN_TIERS.map((row) => (
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
                {row.covens.map((c) => (
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

      {/* Familiar Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Familiar Tier List</h2>
        {FAMILIAR_TIERS.map((row) => (
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
                {row.familiars.map((f) => (
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
          Witchspire is in Early Access. Balance patches can shift rankings significantly.
          This tier list reflects the current meta as of patch v0.1.1d. For most players,
          Coven choice matters less than familiarity — every Coven can complete all content.
          Pick what looks fun.
        </p>
      </div>
    </div>
  );
}
