import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon Tier List',
  description: 'The Relic: First Guardian weapon tier list — best weapon rankings for solo, DPS, and beginner play. S-tier to C-tier rankings for all 5 weapon families with skill tree recommendations.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Dagger', 'Longsword'], note: 'Highest DPS ceiling — Dagger for speed and burst, Longsword for balanced versatility with a high skill ceiling' },
  { tier: 'A', weapons: ['Two-Handed'], note: 'Massive per-hit damage — slower but devastating when mastered' },
  { tier: 'B', weapons: ['Battle Staff', 'Sword & Shield'], note: 'Battle Staff for skill-heavy play. Sword & Shield for safe, consistent play' },
  { tier: 'C', weapons: [], note: 'All 5 weapons are viable — tier reflects optimization ceiling, not playability' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Sword & Shield'], note: 'Block and counter windows create consistent openings — safest solo option' },
  { tier: 'A', weapons: ['Longsword', 'Dagger'], note: 'Longsword adapts to any encounter. Dagger melts bosses but requires perfect dodge timing.' },
  { tier: 'B', weapons: ['Battle Staff', 'Two-Handed'], note: 'Battle Staff struggles up close. Two-Handed punishes mistakes hard in solo.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Sword & Shield'], note: 'Tanky, simple combos, block saves you from mistakes. Best first weapon.' },
  { tier: 'Good', weapons: ['Longsword', 'Battle Staff'], note: 'Longsword teaches fundamentals. Battle Staff lets you learn at range.' },
  { tier: 'Advanced', weapons: ['Dagger', 'Two-Handed'], note: 'Dagger requires perfect dodging. Two-Handed punishes every mistake.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon Tier List</h1>
      <p className="text-gray-400 mb-2">The Relic: First Guardian weapon family impressions based on launch reviews and community reports — verified ranking data does not exist yet.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Early impressions — unconfirmed data</div>

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
                  {row.weapons.length > 0 ? row.weapons.map((w) => (
                    <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                  )) : (
                    <span className="text-sm text-gray-500 italic">—</span>
                  )}
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
          The Relic: First Guardian released July 31, 2026. All 5 weapon families are described as viable — there are
          12 skill trees total (two per family) for deep mastery. Relic and artifact optimization matters more than
          weapon tier rankings. Pick the playstyle you enjoy most and build around it.
        </p>
      </div>
    </div>
  );
}
