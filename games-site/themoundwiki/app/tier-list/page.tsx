import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon Tier List',
  description: 'The Mound: Omen of Cthulhu weapon tier list — best weapon rankings for solo, DPS, and beginner play. S-tier to C-tier rankings for all 6 weapon types.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Rapier', 'Dagger'], note: 'Highest DPS ceiling — Rapier for counters, Dagger for crit burst' },
  { tier: 'A', weapons: ['Sword & Shield'], note: 'Best for beginners — balanced offense/defense, forgiving' },
  { tier: 'B', weapons: ['Greatsword', 'Two-Handed Axe'], note: 'High burst damage but slow — great for farming mobs' },
  { tier: 'C', weapons: ['Mace'], note: 'Specialized for stagger/break — strong vs shields, situational otherwise' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Rapier'], note: 'Counter windows create openings that trivialize solo fights' },
  { tier: 'A', weapons: ['Sword & Shield', 'Dagger'], note: 'S&S survives anything. Dagger kills fast but fragile.' },
  { tier: 'B', weapons: ['Greatsword', 'Two-Handed Axe'], note: 'Good AoE farming but punished by fast enemies' },
  { tier: 'C', weapons: ['Mace'], note: 'Stagger less useful with no teammates to capitalize' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Sword & Shield'], note: 'Tanky, simple combos, block saves you from mistakes' },
  { tier: 'Good', weapons: ['Rapier', 'Greatsword'], note: 'Rapier teaches counters. Greatsword teaches patience.' },
  { tier: 'Avoid', weapons: ['Dagger', 'Two-Handed Axe', 'Mace'], note: 'Fragile or require matchup knowledge' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon Tier List</h1>
      <p className="text-gray-400 mb-2">The Mound: Omen of Cthulhu weapon rankings for launch (July 10, 2026). Based on demo data.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-launch — subject to balance changes</div>

      {[{ title: 'Overall Rankings', tiers: WEAPON_TIERS }, { title: 'Solo Play Rankings', tiers: SOLO_TIERS }, { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.weapons.map((w) => (
                    <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          The Mound: Omen of Cthulhu launches July 10, 2026. All six weapons are viable — weapon mastery
          and EX-Mod optimization matter more than tier rankings. Pick the playstyle you enjoy most.
        </p>
      </div>
    </div>
  );
}
