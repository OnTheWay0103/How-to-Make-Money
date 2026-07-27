import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    "Vahrin's Call tier list — best build rankings for solo play. Weapon and magic school tier rankings for the launch version (July 2026).",
};

const BUILD_TIERS = [
  { tier: 'S', builds: ['Spellshield Vanguard', 'Archer Mage Hybrid'], note: 'Best overall — survivability + consistent damage' },
  { tier: 'A', builds: ['Tactical Shadowstalker', 'Magic-Alchemy Hybrid'], note: 'Strong with the right setup and preparation' },
  { tier: 'B', builds: ['Whirlwind Alchemist', 'Pure Mage'], note: 'High damage but requires skill or preparation' },
  { tier: 'C', builds: ['Pure Ranger (no magic)', 'Dual Wield Specialist'], note: 'Viable but outclassed by hybrid options' },
];

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Greatsword', 'Bow (with magic)'], note: 'Highest damage output and safest clear' },
  { tier: 'A', weapons: ['Sword & Shield', 'Fire Magic'], note: 'Excellent defense or crowd control' },
  { tier: 'B', weapons: ['Hammers', 'Ice Magic', 'Dual Wield'], note: 'Solid but situational' },
  { tier: 'C', weapons: ['Earth Magic (offensive)', 'Alteration Magic (utility)'], note: 'Support tools — pair with other weapons' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        Build and weapon rankings for Vahrin&apos;s Call launch version.
        Updated July 27, 2026. Rankings may shift with patches.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Launch version — subject to change
      </div>

      {/* Build Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Build Tier List</h2>
        {BUILD_TIERS.map((row) => (
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
                {row.builds.map((b) => (
                  <span key={b} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#2a1a1a]">
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Weapon Tier List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Weapon & Magic Tier List</h2>
        {WEAPON_TIERS.map((row) => (
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
                {row.weapons.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#2a1a1a]">
                    {w}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Important note */}
      <div className="bg-[#1a0a0a] border border-[#2a1a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Vahrin&apos;s Call classless system means any build can complete all content with enough skill.
          Build choice matters less than specialization and gear optimization. The game rewards
          commitment to your chosen playstyle — pick what feels fun and stick with it.
        </p>
      </div>
    </div>
  );
}
