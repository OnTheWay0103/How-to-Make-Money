import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Tier List',
  description: 'Bonehold class tier list — best class rankings for beginners, solo play, and deep dungeon runs. S-tier to C-tier rankings for all 7 classes at launch (July 2026).',
};

const OVERALL_TIERS = [
  { tier: 'S', classes: ['Spellblade', 'Scorcher'], note: 'Highest ceiling — Spellblade hybridizes with everything, Scorcher AoE clears rooms effortlessly' },
  { tier: 'A', classes: ['Knight', 'Barbarian'], note: 'Reliable and forgiving — Knight tanks anything, Barbarian melts bosses with rage stacks' },
  { tier: 'B', classes: ['Unlockable Class 2', 'Unlockable Class 1'], note: 'Strong in specific builds but require more game knowledge to pilot effectively' },
  { tier: 'C', classes: ['Unlockable Class 3'], note: 'Niche playstyle — high skill floor, rewarding when mastered but punishing for new players' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', classes: ['Knight'], note: 'Tanky, simple charge combos, blocking saves you from mistakes. The most forgiving class.' },
  { tier: 'Good', classes: ['Barbarian', 'Spellblade'], note: 'Barbarian teaches aggression timing. Spellblade introduces spell/melee weaving.' },
  { tier: 'Avoid', classes: ['Scorcher', 'Unlockable Classes'], note: 'Scorcher is fragile and requires positioning mastery. Unlockable classes demand deep game knowledge.' },
];

const DEEP_RUN_TIERS = [
  { tier: 'S', classes: ['Spellblade', 'Scorcher'], note: 'Spellblade\'s versatility shines on deep floors. Scorcher\'s AoE handles high-density enemy rooms.' },
  { tier: 'A', classes: ['Barbarian', 'Unlockable Class 2'], note: 'Barbarian rage scaling becomes monstrous with deep-run item synergies.' },
  { tier: 'B', classes: ['Knight', 'Unlockable Class 1'], note: 'Knight stays alive but kills slowly on deep floors — survivable but inefficient.' },
  { tier: 'C', classes: ['Unlockable Class 3'], note: 'Requires specific legendary prefixes to compete deep — inconsistent without the right drops.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Class Tier List</h1>
      <p className="text-gray-400 mb-2">Bonehold class rankings for launch (July 28, 2026). Based on early access and demo data.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch version — subject to balance patches</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Best Classes for Beginners', tiers: BEGINNER_TIERS }, { title: 'Deep Dungeon Rankings', tiers: DEEP_RUN_TIERS }].map((section) => (
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
          Bonehold launched on July 28, 2026. All seven classes are viable — weapon prefixes,
          spell scroll synergies, and player skill matter far more than tier rankings. The "best"
          class is the one whose playstyle you enjoy most. Cross-class hybridization means any
          class can be built to handle any content.
        </p>
      </div>
    </div>
  );
}
