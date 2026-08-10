import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description: 'MineGeon: Renegades tier list — honest class comparison for solo and co-op play. No fabricated weapon rankings — what we actually know about the meta so far.',
};

const CLASS_TIERS_SOLO = [
  { tier: 'A', items: ['Marshall (Tank)'], note: 'Best for most players — the extraction loop punishes deaths, and resilience is the solo game\'s best stat. Slower clears, but clears happen.' },
  { tier: 'A', items: ['Trevor (Gunslinger)'], note: 'Best in skilled hands — highest damage potential and fastest clear times, but every mistake is punished. Tier rises with player skill.' },
  { tier: 'B', items: ['Ari (Engineer)'], note: 'Most adaptable — balanced stats fit any run\'s randomness, but no standout strength for the solo risk loop.' },
];

const CLASS_TIERS_COOP = [
  { tier: 'S', items: ['Marshall (Tank)'], note: 'Essential — someone must hold enemy attention so teammates can mine and deal damage safely.' },
  { tier: 'A', items: ['Trevor (Gunslinger)'], note: 'Strong — the damage role; boss fights need him.' },
  { tier: 'A', items: ['Ari (Engineer)'], note: 'Strong — flexibility covers whatever the run and team need.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">MineGeon Tier List</h1>
      <p className="text-gray-400 mb-2">Honest class comparison for solo and co-op play (launch window, July 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch-window — meta still being discovered</div>

      {[{ title: 'Class Tier List (Solo)', tiers: CLASS_TIERS_SOLO, desc: 'Which Renegade gives you the best odds solo — based on official class descriptions and the death penalty.' }, { title: 'Class Tier List (Co-op)', tiers: CLASS_TIERS_COOP, desc: 'Which Renegade your team needs most — the trio is designed to work together.' }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{section.desc}</p>
          {section.tiers.map((row) => (
            <div key={row.items[0]} className="flex gap-4 mb-3 items-start">
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

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5 mb-8">
        <h3 className="text-white font-semibold mb-2">Why There Is No Weapon Tier List Here (Yet)</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          The most-searched term for this game is a weapon tier list — but no official weapon catalog exists. Names, stats, and rarity tiers are unpublished, and launch-window lists naming specific weapons with damage numbers are invented: those weapons do not appear in any official material. The confirmed chase items are <strong>legendary weapons</strong> and the <strong>weapons of the Ancient Ones</strong> — that's the honest ceiling of what we know. When a verified catalog is documented (official Discord, community wikis, patch notes), we'll publish a real weapon tier list here.
        </p>
      </div>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          MineGeon: Renegades launched July 30, 2026, and the full meta — weapon stats, gadget balance, boss difficulties — is still being discovered by players. Any tier list with precise S/A/B/C rankings of named weapons is either guesswork or fabrication. All three classes are viable; player skill and build optimization matter more than tier rankings. Pick the playstyle you enjoy most. This tier list will be updated post-launch as the community documents the game.
        </p>
      </div>
    </div>
  );
}
