import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description: 'MineGeon: Renegades tier list — best classes, weapons, and builds ranked for solo and co-op. S-tier to C-tier rankings for launch meta (July 2026).',
};

const CLASS_TIERS_SOLO = [
  { tier: 'S', items: ['Gunslinger'], note: 'Highest DPS + mobility = fastest clears. Can avoid damage entirely with good play.' },
  { tier: 'A', items: ['Tank'], note: 'Unkillable but slower clears. Best for learning and consistency.' },
  { tier: 'B', items: ['Engineer'], note: 'Powerful turrets but struggles solo against fast enemies without setup time.' },
];

const CLASS_TIERS_COOP = [
  { tier: 'S', items: ['Engineer', 'Tank'], note: 'Engineer shines with Tank protection. Tank is essential for aggro control in every team.' },
  { tier: 'A', items: ['Gunslinger'], note: 'Still top-tier damage. A team of Tank + Engineer can function without Gunslinger.' },
];

const WEAPON_TIERS = [
  { tier: 'S', items: ['War Hammer', 'Revolver', 'Tesla Coil Gun'], note: 'War Hammer = best Tank weapon (AoE+CC). Revolver = best Gunslinger DPS. Tesla = best Engineer clear.' },
  { tier: 'A', items: ['Battle Axe', 'Rifle', 'Shotgun', 'Grenade Launcher'], note: 'Solid alternatives. Axe for bleed, Rifle for safety, Shotgun for burst, GL for area denial.' },
  { tier: 'B', items: ['Power Fist', 'Dual Pistols', 'SMG', 'Wrench', 'Flame Thrower'], note: 'Situational. Power Fist requires timing, SMG burns ammo, Wrench is turret-only.' },
  { tier: 'C', items: ['Ice Blaster'], note: 'Utility-focused. Freeze is nice but damage is too low to justify.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">MineGeon Tier List</h1>
      <p className="text-gray-400 mb-2">Class and weapon rankings for launch (July 28, 2026). Based on pre-release gameplay information.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-launch — subject to balance changes</div>

      {[{ title: 'Class Tier List (Solo)', tiers: CLASS_TIERS_SOLO, desc: 'Rankings for solo play.' }, { title: 'Class Tier List (Co-op)', tiers: CLASS_TIERS_COOP, desc: 'Rankings for 2-3 player co-op.' }, { title: 'Weapon Tier List', tiers: WEAPON_TIERS, desc: 'Best weapons across all classes.' }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{section.desc}</p>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.items.map((w) => (
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
          MineGeon: Renegades launches July 28, 2026. All three classes are viable — player skill and build optimization matter more than tier rankings. Pick the playstyle you enjoy most. This tier list will be updated post-launch as the meta develops.
        </p>
      </div>
    </div>
  );
}
