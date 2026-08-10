import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon Tier List',
  description: 'SpiritVale weapon tier list — best weapon rankings for PvE, PvP, and solo play. S-tier to C-tier rankings for all weapon types.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Staff'], note: 'Mage → Wizard builds — the fastest farmers and top raid AoE damage' },
  { tier: 'A', weapons: ['Sword + Shield', 'Bow', 'Dagger'], note: 'Paladin tanking, Sniper boss DPS, and Shinobi burst — each best-in-role' },
  { tier: 'B', weapons: ['Dual Pistols', 'Two-Handed Sword', 'Tome'], note: 'Gunslinger kiting, Berserker burst, and Necromancer pet builds — strong but situational' },
  { tier: 'C', weapons: ['Axe', 'Mace', 'Scythe'], note: 'Situational: Warrior alt weapons, Priest casting tools, Necromancer hybrid builds' },
];

const SOLO_TIERS = [
  { tier: 'S', weapons: ['Sword + Shield'], note: "Paladin is the community's #1 solo class — block and self-healing carry long grinds" },
  { tier: 'A', weapons: ['Staff', 'Dagger'], note: 'Wizard AoE clears packs fast; Shinobi bursts between stealths' },
  { tier: 'B', weapons: ['Bow', 'Tome', 'Dual Pistols'], note: 'Safe ranged farming or pet-tank sustain' },
  { tier: 'C', weapons: ['Two-Handed Sword', 'Axe', 'Mace', 'Scythe'], note: 'Gear-dependent or support-focused' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Sword + Shield'], note: 'Knight → Paladin: tanky, forgiving, and the best first class' },
  { tier: 'Good', weapons: ['Staff', 'Two-Handed Sword'], note: 'Mage and Warrior are straightforward and strong while leveling' },
  { tier: 'Avoid', weapons: ['Dagger', 'Bow', 'Tome', 'Dual Pistols', 'Axe', 'Mace', 'Scythe'], note: 'Higher skill floor or situational weapons — fine for alts' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon Tier List</h1>
      <p className="text-gray-400 mb-2">SpiritVale weapon rankings — an Early Access snapshot.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">EA snapshot — subject to balance changes</div>

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
          Every weapon is viable — class mastery matters more than tier rankings. The best weapon is the one your build is built around: match the weapon to your class's scaling stat and respect the two-handed stance rule. Tier lists are a snapshot of the current EA balance, which changes with every patch.
        </p>
      </div>
    </div>
  );
}
