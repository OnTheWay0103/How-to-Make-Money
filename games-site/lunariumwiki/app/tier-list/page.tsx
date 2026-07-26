import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Tier List',
  description: 'Lunarium build tier list — best Ave and Lune build rankings for boss fights, speedruns, and beginners. S-tier to C-tier rankings.',
};

const OVERALL_TIERS = [
  { tier: 'S', weapons: ['Resonance Knight + Moonlight Lune'], note: 'Best all-around build. Strong RP generation, healing, and boss damage. Survivable for beginners, powerful for experts.' },
  { tier: 'A', weapons: ['Parry Specialist + Starfire Lune'], note: 'Highest single-target damage. Perfect for bosses but requires precise timing. Lune delivers ranged damage while Ave parries.' },
  { tier: 'B', weapons: ['Blade Dancer + Constellation Lune'], note: 'Best mob-clearing build. Lune groups enemies, Ave shreds them. Fragile in boss fights.' },
  { tier: 'C', weapons: ['Pure Tank + Pure Healer'], note: 'Virtually unkillable but fights take 3x longer. Only recommended for learning boss patterns.' },
];

const BOSS_TIERS = [
  { tier: 'S', weapons: ['Parry Specialist + Moonlight Lune'], note: 'Parry everything, heal everything. Counters every boss mechanic. Longest fights but safest clears.' },
  { tier: 'A', weapons: ['Resonance Knight + Starfire Lune'], note: 'Build RP on parries, spend on Starfarer\'s Light. Fast boss kills but less healing.' },
  { tier: 'B', weapons: ['Blade Dancer + Constellation Lune'], note: 'Dodge-focused. Works vs. Armored Golem but struggles vs. multi-phase bosses.' },
  { tier: 'C', weapons: ['Hybrid builds (unfocused skill trees)'], note: 'Spreading points across all trees leaves you mediocre at everything.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Resonance Knight + Moonlight Lune'], note: 'Forgiving, heals mistakes, straightforward RP spend loop. Perfect first playthrough build.' },
  { tier: 'Good', weapons: ['Parry Specialist + Moonlight Lune'], note: 'Teaches parry timing with a healing safety net. Transition to this after learning basics.' },
  { tier: 'Avoid', weapons: ['Blade Dancer + Starfire Lune'], note: 'Glass cannon. No healing, fragile. Punishing for new players still learning enemy patterns.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Build Tier List</h1>
      <p className="text-gray-400 mb-2">Lunarium build rankings for launch (July 29, 2026). Based on preview and demo data.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-launch — subject to balance changes</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Boss Fight Rankings', tiers: BOSS_TIERS }, { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS }].map((section) => (
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
                    <span key={w} className="text-sm font-medium text-white bg-[#1a1a2e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a2e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Lunarium launches July 29, 2026. All builds are viable — skill tree choices and charm
          optimization matter more than tier rankings. Pick the playstyle you enjoy most.
          Respeccing is free the first time, so experiment!
        </p>
      </div>
    </div>
  );
}
