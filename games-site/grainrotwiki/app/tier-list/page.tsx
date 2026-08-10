import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description:
    'Grain Rot tier list — an honest look at vessel and construct rankings. No verified tier list exists yet; here is the confirmed evaluation framework instead.',
};

const EVALUATION_AXES = [
  {
    label: 'Durability First',
    detail:
      'Vessels are fragile wooden bodies by design. In the confirmed game, losing your vessel forces a re-possession mid-run. A vessel that survives is worth more than one that deals extra damage and breaks.',
  },
  {
    label: 'Speed Pays Twice',
    detail:
      'Faster vessels cover more ground before the Rot pressure builds, and they escape rooms the Corrupted are closing in on. In an extraction game, mobility is survival.',
  },
  {
    label: 'Sound Is a Stat',
    detail:
      'The Corrupted react to sound and movement. Whatever you bring, quiet options are premium — noise is how you get surrounded. See the Stealth & Sound Guide for the confirmed detection model.',
  },
  {
    label: 'Match the Run Type',
    detail:
      'Solo runs reward self-sufficiency; co-op runs reward roles (a tank, a hauler, a keeper). A "best" vessel only exists relative to your team size and goal.',
  },
];

const CONFIRMED_FACTS = [
  'The demo contains 20+ unlockable constructs; the full release count is not officially documented.',
  'Constructs are unlocked via Outpost progression and brought into runs.',
  'The Grinder converts items into gold — confirmed official feature.',
  '9 enemy types appear in the demo; the full release adds more.',
  'The game launched August 7, 2026 at $9.99 (10% launch-week discount to $8.99).',
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-8">
        Grain Rot vessel and construct rankings — the honest version. Updated August 11, 2026.
      </p>

      {/* The honest truth */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">There Is No Verified Tier List Yet</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          As of this writing, no official tier list exists, and the named vessel and construct
          rankings circulating online are not based on verified in-game data. The game launched
          August 7, 2026, and the community has not had time to build a tested, consensus meta.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Until verified data exists, any site claiming to rank named vessels or constructs
          ("Ironbark Guardian is S-tier", "Splinter-Bow is the best weapon") is presenting
          unverified information as fact. We are not doing that. What we can give you is the
          confirmed framework the developers have stated, so you can evaluate any vessel or
          construct you unlock yourself.
        </p>
      </section>

      {/* Confirmed facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What Is Confirmed</h2>
        <ul className="space-y-3">
          {CONFIRMED_FACTS.map((fact) => (
            <li key={fact} className="flex gap-3 items-start text-gray-300 text-sm leading-relaxed">
              <span className="shrink-0 w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold mt-0.5">
                ✓
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Evaluation framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">How to Evaluate Vessels and Constructs</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Until a community meta develops, use these confirmed principles instead of a ranked table:
        </p>
        <div className="space-y-4">
          {EVALUATION_AXES.map((axis) => (
            <div key={axis.label} className="bg-[#1a0a0a] border border-[#3a1a1a] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{axis.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{axis.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important note */}
      <div className="bg-[#1a0a0a] border border-[#3a1a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Grain Rot launched on August 7, 2026. We will publish a real, tested tier list once
          verified post-launch data exists — vessel stats, construct stats, and unlock costs
          have not been officially documented, and we will not fabricate them. Until then,
          vessel choice matters less than coordination: every vessel can succeed with the right
          strategy. Pick what fits your playstyle, and test everything in the demo or the full game.
        </p>
      </div>
    </div>
  );
}
