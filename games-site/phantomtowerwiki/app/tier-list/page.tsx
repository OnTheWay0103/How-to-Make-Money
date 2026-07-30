import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Tier List',
  description: 'Phantom Tower class tier list — best class rankings for beginners, Climb Mode, and Survival Mode. S-tier to C-tier rankings for all 8 classes at Early Access launch (July 2026).',
};

const OVERALL_TIERS = [
  { tier: 'S', classes: ['Elementalist', 'Blade Dancer'], note: 'Highest ceiling — Elementalist exploits all 16 reactions, Blade Dancer dominates with dodge-offensive blessings' },
  { tier: 'A', classes: ['Warrior', 'Berserker', 'Ranger'], note: 'Reliable and consistent — Warrior tanks anything, Berserker melts bosses, Ranger kites safely' },
  { tier: 'B', classes: ['Guardian', 'Mystic'], note: 'Strong in specific builds — Guardian shines in Survival Mode, Mystic requires blessing knowledge to pop off' },
  { tier: 'C', classes: ['Rogue'], note: 'High skill floor — devastating burst potential but unforgiving positioning requirements, not recommended for beginners' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', classes: ['Warrior'], note: 'Balanced stats, forgiving HP pool, straightforward combos. The tutorial class done right — great for learning all mechanics.' },
  { tier: 'Good', classes: ['Ranger', 'Guardian'], note: 'Ranger teaches ranged combat and positioning safely. Guardian teaches blocking and defensive blessing stacking.' },
  { tier: 'Avoid', classes: ['Elementalist', 'Rogue'], note: 'Elementalist requires knowing all 16 elemental reactions. Rogue demands perfect dodge timing and boss pattern memorization.' },
];

const SURVIVAL_TIERS = [
  { tier: 'S', classes: ['Guardian', 'Elementalist'], note: 'Guardian\'s defensive blessings and HP scaling are unmatched in infinite hordes. Elementalist\'s AoE chain reactions clear waves efficiently.' },
  { tier: 'A', classes: ['Berserker', 'Blade Dancer'], note: 'Berserker\'s damage ramps infinitely with kill chains. Blade Dancer\'s mobility keeps them alive in dense rooms.' },
  { tier: 'B', classes: ['Warrior', 'Mystic'], note: 'Warrior is survivable but kills too slowly in later waves. Mystic needs specific blessing combos to compete.' },
  { tier: 'C', classes: ['Ranger', 'Rogue'], note: 'Ranger struggles with enemy density in small arena rooms. Rogue\'s burst style is inconsistent in endless mode.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Class Tier List</h1>
      <p className="text-gray-400 mb-2">Phantom Tower class rankings for Early Access launch (July 13, 2026). Based on community data and early playtesting.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-purple-900/30 text-purple-400 border border-purple-800/50 mb-8">Early Access version — subject to balance patches</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Best Classes for Beginners', tiers: BEGINNER_TIERS }, { title: 'Survival Mode Rankings', tiers: SURVIVAL_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-purple-500/20 text-purple-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.classes.map((c) => (
                    <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{c}</span>
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
          Phantom Tower entered Steam Early Access on July 13, 2026. All eight classes are viable — weapon choice,
          elemental mastery, Tower Blessing synergies, and player skill matter far more than tier rankings. The "best"
          class is the one whose playstyle you enjoy most. The Soulbinder system means any class can be specialized
          to handle any content with enough investment.
        </p>
      </div>
    </div>
  );
}
