import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon Tier List',
  description: 'The Mound: Omen of Cthulhu weapon tier list — Matchlock Arquebus, Flintlock Pistol, Crossbow, Francesca Axe, Machete and Oil Lamp ranked for solo, co-op and beginner play.',
};

// All six weapons verified from the launch build (July 15, 2026).
// Traits: silent vs noisy, rain-proof vs rain-vulnerable, melee vs ranged.
const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Crossbow'], note: 'Silent and rain-proof — the only weapon that never wakes the jungle. Armor-piercing bolts up close. Best all-rounder.' },
  { tier: 'A', weapons: ['Matchlock Arquebus'], note: 'Highest single-shot damage in the game. Devastating in dry weather, useless in rain — plan around it.' },
  { tier: 'A', weapons: ['Machete'], note: 'Always works, no ammo, no weather effects. Backstab one-shots most Y\'m-bhi. Everyone should carry one.' },
  { tier: 'B', weapons: ['Francesca Axe'], note: 'Silent and retrievable, with real headshot payoff — but high skill ceiling and lost throws are a real cost.' },
  { tier: 'B', weapons: ['Oil Lamp'], note: 'Not a weapon — a light and fire tool. Weakens light-sensitive creatures and can be thrown. Situational but vital.' },
  { tier: 'C', weapons: ['Flintlock Pistol'], note: 'A backup sidearm with limited range, low ammo and rain vulnerability. Fine as an "oh no" button, not a main weapon.' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Crossbow'], note: 'Silent kills let you control every fight solo — no squad to cover your noise' },
  { tier: 'A', weapons: ['Machete'], note: 'Reliable close-range damage and backstabs with zero resource cost' },
  { tier: 'B', weapons: ['Francesca Axe', 'Matchlock Arquebus'], note: 'Axe is strong when practiced; Arquebus hits hard but you must stay dry and reload alone' },
  { tier: 'C', weapons: ['Oil Lamp', 'Flintlock Pistol'], note: 'Lamp is still worth bringing for darkness; Pistol is last-resort only' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Machete'], note: 'Forgiving, silent, never jams — learn the game without ammo pressure' },
  { tier: 'Good', weapons: ['Crossbow'], note: 'Slow but safe — pick off enemies from range, stay out of reach' },
  { tier: 'Situational', weapons: ['Oil Lamp'], note: 'Take it for dark expeditions, but don\'t rely on it for damage' },
  { tier: 'Avoid', weapons: ['Matchlock Arquebus', 'Flintlock Pistol', 'Francesca Axe'], note: 'Rain breaks the guns, and the Axe punishes missed throws — come back later' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon Tier List</h1>
      <p className="text-gray-400 mb-2">The Mound: Omen of Cthulhu weapon rankings — launch build (July 15, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Post-launch — verified July 2026</div>

      {[{ title: 'Overall Rankings', tiers: WEAPON_TIERS }, { title: 'Solo Play Rankings', tiers: SOLO_TIERS }, { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.weapons.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Situational' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
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
          The Mound: Omen of Cthulhu has no classes — your weapon defines your role. All six weapons are
          viable; noise discipline and weather awareness matter more than tier rankings. In rain, a silent
          Crossbow beats any firearm. Pick the loadout that fits your expedition role.
        </p>
      </div>
    </div>
  );
}
