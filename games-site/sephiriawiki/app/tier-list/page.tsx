import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon & Relic Tier List',
  description: 'Sephiria weapon and relic tier list — Sword & Shield, Greatsword, Dagger, Katana, Crossbow and Staff ranked for solo, co-op and beginner play. S-tier to C-tier rankings for all 6 weapon types and top relics.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Staff'], note: 'The element-synergy king — ice/storm artifact builds still live here, and 1.0 added the Firelighter and Solis Missio lines that give fire a real answer. Highest ceiling with the right tablets.' },
  { tier: 'S', weapons: ['Sword & Shield'], note: 'The most consistent weapon in 1.0 — new +4 lines and balanced stats make it the "no bad matchup" pick. The community\'s default recommendation.' },
  { tier: 'A', weapons: ['Crossbow'], note: 'The +4 upgrade line turned it into strong sustained DPS; the safest pick for Hard Mode, where positioning matters.' },
  { tier: 'A', weapons: ['Greatsword'], note: 'Thor Greatsword S3G and Red Snake Crusher are standout 1.0 weapons; heavy stagger makes boss fights mechanical.' },
  { tier: 'B', weapons: ['Katana'], note: 'Good combo flow, but its power is skill-gated — the 1.0 patch didn\'t change its core items much.' },
  { tier: 'B', weapons: ['Dagger'], note: 'The new +4 line helps, but burst builds still rely on relics the balance patch touched; high ceiling, inconsistent floor.' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Crossbow'], note: 'Safe distance beats everything — the safest pick for Hard Mode solo runs.' },
  { tier: 'S', weapons: ['Sword & Shield'], note: 'Consistent in every matchup; blocking covers your mistakes.' },
  { tier: 'A', weapons: ['Staff'], note: 'AoE and element coverage carry solo clears once you have the right tablets.' },
  { tier: 'A', weapons: ['Greatsword'], note: 'Stagger chains shut down boss patterns for aggressive solo play.' },
  { tier: 'B', weapons: ['Katana'], note: 'Combo flow works, but power is skill-gated without a team to capitalize.' },
  { tier: 'B', weapons: ['Dagger'], note: 'High burst ceiling, inconsistent floor — the relics you find decide whether it pays off.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Sword & Shield'], note: 'Forgiving, consistent, every upgrade line is useful — the community\'s first-time pick.' },
  { tier: 'Good', weapons: ['Crossbow', 'Staff'], note: 'Crossbow teaches positioning at safe range; Staff gives AoE and element coverage.' },
  { tier: 'Situational', weapons: ['Greatsword', 'Katana'], note: 'Greatsword punishes slow wind-ups; Katana needs combo and counterplay practice.' },
  { tier: 'Avoid', weapons: ['Dagger'], note: 'Hard difficulty with an inconsistent floor — come back once you know the enemy patterns.' },
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
