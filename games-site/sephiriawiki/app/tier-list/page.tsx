import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon & Relic Tier List',
  description: 'Sephiria weapon and relic tier list — best weapon rankings for solo, DPS, and beginner play. S-tier to C-tier rankings for all 6 weapon types and top relics.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Sword', 'Bow'], note: 'Sword for reliability and self-healing. Bow for safe ranged DPS and status effects.' },
  { tier: 'A', weapons: ['Staff', 'Spear'], note: 'Staff has unmatched AoE burst. Spear offers safe poke and team utility.' },
  { tier: 'B', weapons: ['Scythe'], note: 'Devastating when built correctly, but slow wind-ups punish mistakes.' },
  { tier: 'C', weapons: ['Fist (Gauntlets)'], note: 'Highest DPS ceiling but extreme risk — requires precise play and matchup knowledge.' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Sword (Paladin)', 'Bow (Elemental)'], note: 'Self-sustain + safe play = solo winners. Paladin heals on block, Bow kites forever.' },
  { tier: 'A', weapons: ['Spear (Phalanx)', 'Staff (Frost)'], note: 'Spear keeps distance. Staff freezes enemies for control.' },
  { tier: 'B', weapons: ['Scythe (Harvest)'], note: 'Life-steal build works, but requires aggressive play with no safety net.' },
  { tier: 'C', weapons: ['Fist (Gauntlets)'], note: 'Too risky for solo — one mistake ends the run.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Sword'], note: 'Balanced stats, forgiving block, reliable combos. The ideal first weapon.' },
  { tier: 'Good', weapons: ['Spear', 'Bow'], note: 'Spear teaches spacing. Bow teaches pattern recognition from a distance.' },
  { tier: 'Avoid', weapons: ['Fist', 'Scythe'], note: 'Mechanical intensity too high for new players. Come back after 10+ runs.' },
];

const RELIC_TIERS = [
  { tier: 'S', weapons: ['Echo Orb', 'Vampiric Fang', 'Sanctuary Seal', 'Mana Font', 'Soul Reaper\'s Mask'], note: 'Build-defining. Build your entire run around finding one of these.' },
  { tier: 'A', weapons: ['Reflective Shield', 'Amplifier Crystal', 'Frost Heart', 'Kindling Ember', 'Feather Bindings', 'Quiver of Endless Arrows'], note: 'Excellent in specific builds. Strong pickups in almost any run.' },
  { tier: 'B', weapons: ['Swift Boots', 'Iron Shell', 'Courage Amulet', 'Adrenaline Rush', 'Dark Pact', 'Bloodletting Blade'], note: 'Situationally useful. Good when your build needs a specific gap filled.' },
  { tier: 'C', weapons: ['Thorns Aura', 'Explorer\'s Map', 'Lucky Coin', 'Magnet', 'Focus Crystal'], note: 'Niche utility or small stat boosts. Take if nothing better is available.' },
];

export default function TierListPage() {
  const tierColors: Record<string, string> = {
    'S': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Best': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'A': 'bg-red-500/20 text-red-400 border-red-500/30',
    'Good': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'B': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'C': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    'Avoid': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">Sephiria weapon and relic tier rankings for 1.0 (July 31, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-purple-900/30 text-purple-400 border border-purple-800/50 mb-8">1.0 Launch — subject to balance changes</div>

      {/* Weapon Tier Lists */}
      {[
        { title: 'Weapon Rankings (Overall)', tiers: WEAPON_TIERS },
        { title: 'Solo Play Rankings', tiers: SOLO_TIERS },
        { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS },
      ].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold border ${tierColors[row.tier] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                {row.tier}
              </span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.weapons.map((w) => (
                    <span key={w} className="text-sm font-medium text-white bg-[#1a0a2e] px-3 py-1 rounded border border-[#2a1a4e]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Relic Tier List */}
      <section className="mb-12 pt-4 border-t border-[#2a1a4e]">
        <h2 className="text-2xl font-bold text-white mb-6">Relic Rankings</h2>
        {RELIC_TIERS.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-4 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold border ${tierColors[row.tier] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.weapons.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a0a2e] px-3 py-1 rounded border border-[#2a1a4e]">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#1a0a2e] border border-[#2a1a4e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Sephiria 1.0 launches July 31, 2026. All six weapons are viable — weapon mastery
          and inscription optimization matter more than tier rankings. Pick the playstyle you enjoy most.
          Relic rankings depend heavily on your build; an S-tier relic for one weapon may be B-tier for another.
          Check the <a href="/guides/builds-guide" className="text-purple-400 hover:underline">Builds Guide</a> for weapon-specific relic recommendations.
        </p>
      </div>
    </div>
  );
}
