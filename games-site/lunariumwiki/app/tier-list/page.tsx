import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Tier List',
  description: 'Lunarium build tier list — honest rankings of the three build directions (Parry Specialist, Aggressive Dancer, Resonance Commander) and the systems that matter. No classes exist in Lunarium.',
};

const OVERALL_TIERS = [
  { tier: 'S', weapons: ['Parry Specialist'], note: 'Best all-around direction. Parrying staggers bosses, negates damage, and is the intended path through most confirmed boss designs (Sentinel Colossus, Lilia, Enid). Learn it early and everything gets easier.' },
  { tier: 'A', weapons: ['Resonance Commander'], note: 'Plays Ave and Lune as one unit. The shared Resonance gauge is confirmed, Astral Shards make it scalable, and Lune builds enemy stagger via Resonance — strong in sustained fights.' },
  { tier: 'A', weapons: ['Aggressive Dancer'], note: 'Dodge-based pressure. Answers red-flash attacks and evasive bosses (Red Dancer, Ryuu). Higher skill floor — the game punishes greed.' },
  { tier: 'B', weapons: ['Undecided / Hybrid'], note: 'Fine on normal difficulty, but the Cyanstone gauntlet and the finale reward a focused direction.' },
];

const BOSS_TIERS = [
  { tier: 'S', weapons: ['Parry Specialist + Blade of Rutila'], note: 'The Blade of Rutila (earned from Lilia) interrupts red-flash attacks — the only tool that works on unparriable moves. The final boss Enid is designed around it. This combination counters every confirmed boss mechanic.' },
  { tier: 'A', weapons: ['Resonance Commander + Lune support'], note: 'Sustained stagger pressure wins the endurance fights (Hauler Colossus, Sea Monster). Less burst, but very safe.' },
  { tier: 'B', weapons: ['Aggressive Dancer'], note: 'Works vs. evasive bosses like the Red Dancer but struggles against parry-check fights (Lilia, Enid).' },
  { tier: 'C', weapons: ['Unprepared / no parry practice'], note: 'Several bosses are effectively parry checks. Arriving without parry timing is the only "bad build" in Lunarium.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Parry-focused first'], note: 'Spend early skill unlocks on parry quality — the opening bosses (Longhorn Troll, Shadow of Firleaves) teach and test exactly this.' },
  { tier: 'Good', weapons: ['Balanced with Lune support'], note: 'Keep Lune aimed at enemies; her arrows clear Nihilus orbs and hold stagger bars. She carries fights you cannot yet read.' },
  { tier: 'Avoid', weapons: ['Rushing past optional content'], note: 'Skip the optional Rearguard Warrior and you miss practice + materials. Explore before you push bosses.' },
];

const SECTIONS = [
  { title: 'Overall Rankings', blurb: 'Lunarium has no classes — you play Ave with Lune as your AI companion. These are the three build directions, ranked by how well they handle the confirmed game.', rows: OVERALL_TIERS },
  { title: 'Boss Fight Rankings', blurb: 'Ranked against the confirmed boss roster — from the Longhorn Troll to the final boss Enid.', rows: BOSS_TIERS },
  { title: 'Beginner Rankings', blurb: 'What new players should prioritize in the first hours (Firleaves) and the first boss gauntlet (Cyanstone).', rows: BEGINNER_TIERS },
];

export default function TierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Lunarium Build Tier List</h1>
        <p className="text-gray-400 mb-4">
          Honest rankings, updated August 1, 2026. No classes exist in Lunarium — rankings cover the
          three build directions and the systems that matter. Exact skill names, cloak effects, and
          embroidery stats are not yet publicly documented, so this list ranks mechanics, not named items.
        </p>
      </div>

      {SECTIONS.map((section) => (
        <section key={section.title} className="space-y-3">
          <div>
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <p className="text-sm text-gray-500">{section.blurb}</p>
          </div>
          {section.rows.map((row) => (
            <div key={row.weapons[0]} className="flex gap-3 bg-[#1a1a2e] rounded-lg p-4 border border-[#2a2a5e]">
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
          Lunarium has no classes, no levels, and no stat allocation — builds come from skill trees,
          embroidery passives, and cloaks. The most important "tier list" advice: learn the parry,
          and unlock the Blade of Rutila (from Lilia in Cyanstone) as soon as you can — it interrupts
          red-flash attacks and the final boss is designed around it. Any guide ranking named weapons
          or "classes" is not based on the real game.
        </p>
      </div>
    </div>
  );
}
