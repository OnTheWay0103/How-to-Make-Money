import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'Grain Rot tier list — best vessel rankings for solo, co-op, and deep runs. Construct and weapon tier rankings for the current demo and launch build.',
};

const VESSEL_TIERS = [
  { tier: 'S', vessels: ['Ironbark Guardian', 'Whisper-Wood Scout', 'Ember-Kissed Vessel'], note: 'Best overall — essential for deep runs and co-op' },
  { tier: 'A', vessels: ['Reinforced Hauler', 'Splinter-Skin Runner', 'Rot-Touched Vessel'], note: 'Strong picks with clear role advantages' },
  { tier: 'B', vessels: ['Barricade Builder', "Grinder's Friend", 'Spark Jumper'], note: 'Situational — good in specific team comps' },
  { tier: 'C', vessels: ['Rotten Husk', 'Shiny Showcase'], note: 'Niche or cosmetic — skip for serious runs' },
];

const CONSTRUCT_TIERS = [
  { tier: 'S', constructs: ['Splinter-Bow', 'Rot Purge Flask', 'Barricade Kit'], note: 'Core tools — bring these every run' },
  { tier: 'A', constructs: ['Reinforced Mallet', 'Loot Magnet', 'Spark Beacon', 'Healing Salve'], note: 'Excellent utility and efficiency' },
  { tier: 'B', constructs: ['Fire Bomb', 'Noise Maker', 'Rusty Blade', 'Grappling Hook'], note: 'Good but not essential' },
  { tier: 'C', constructs: ['Portable Grinder', 'Treasure Sniffer', 'Reinforced Plating'], note: 'Late-game luxury items' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Vessel and Construct rankings for Grain Rot (Demo + Launch build).
        Updated July 24, 2026. Rankings may shift with post-launch patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-red-900/30 text-red-400 border border-red-800/50 mb-8">
        Pre-launch — subject to change
      </div>

      {/* Vessel Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Vessel Tier List</h2>
        {VESSEL_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-red-500/20 text-red-400' :
              row.tier === 'A' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.vessels.map((v) => (
                  <span key={v} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#3a1a1a]">
                    {v}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Construct Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Construct Tier List</h2>
        {CONSTRUCT_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-red-500/20 text-red-400' :
              row.tier === 'A' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.constructs.map((c) => (
                  <span key={c} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#3a1a1a]">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Important note */}
      <div className="bg-[#1a0a0a] border border-[#3a1a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Grain Rot is launching August 7, 2026. Post-launch balance patches may shift rankings.
          This tier list reflects the current demo meta and developer preview information.
          For most players, vessel choice matters less than team coordination — every vessel
          can succeed with the right strategy. Pick what fits your playstyle.
        </p>
      </div>
    </div>
  );
}
