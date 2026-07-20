import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon & Skill Tier List',
  description: 'Dinoblade weapon and skill tier list -- best weapon rankings for PvE, bossing, and beginner play. S-tier to C-tier rankings for all 6 weapon types and special skills.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Claws', 'Greatsword'], note: 'Claws highest DPS with bleed. Greatsword best burst damage and stagger.' },
  { tier: 'A', weapons: ['Spear', 'Battle Axe'], note: 'Spear excellent reach and safety. Battle Axe versatile for all situations.' },
  { tier: 'B', weapons: ['Scythe'], note: 'Good crowd control and bleed, but outclassed by Claws for single-target.' },
  { tier: 'C', weapons: ['War Hammer'], note: 'Highest stagger but too slow for most fights. Situational vs armored enemies.' },
];

const SKILL_TIERS = [
  { tier: 'S', weapons: ['Meteor Slice (Greatsword)', 'Alpha Roar (Universal)'], note: 'Meteor Slice huge AoE nuke. Alpha Roar essential buff for all builds.' },
  { tier: 'A', weapons: ['Rending Strike (Claws)', 'Impaling Charge (Spear)'], note: 'Rending Strike shreds bosses. Impaling Charge best gap closer.' },
  { tier: 'B', weapons: ['Whirlwind Spin (Battle Axe)', 'Reaping Sweep (Scythe)'], note: 'Solid crowd control options for mob clearing.' },
  { tier: 'C', weapons: ['Earth Shatter (War Hammer)'], note: 'Too slow to be reliable. Only useful with specific timing.' },
];

const BOSS_TIERS = [
  { tier: 'S', weapons: ['Claws (Dexterity Build)', 'Greatsword (Strength Build)'], note: 'Claws shred Kira and fast bosses. Greatsword demolishes Axe and slow enemies.' },
  { tier: 'A', weapons: ['Spear (Dex/Spirit Hybrid)', 'Battle Axe (Strength/Spirit)'], note: 'Spear safety allows consistent damage. Battle Axe handles all bosses competently.' },
  { tier: 'B', weapons: ['Scythe'], note: 'Bleed useful but slower clear times. Viable but suboptimal.' },
  { tier: 'C', weapons: ['War Hammer'], note: 'Only effective vs Axe and armored enemies. Struggles against fast bosses like Kira.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', weapons: ['Greatsword', 'Battle Axe'], note: 'Greatsword teaches positioning and patience. Battle Axe forgiving speed with good damage.' },
  { tier: 'Good', weapons: ['Spear', 'Claws'], note: 'Spear lets you fight from distance. Claws teach aggressive play.' },
  { tier: 'Challenge', weapons: ['War Hammer', 'Scythe'], note: 'War Hammer requires boss knowledge. Scythe timing-dependent moveset.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon & Skill Tier List</h1>
      <p className="text-gray-400 mb-2">Dinoblade weapon and skill rankings for launch (July 23, 2026). Based on demo data and previews.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-launch -- subject to balance changes</div>

      {[
        { title: 'Weapon Rankings (Overall)', tiers: WEAPON_TIERS },
        { title: 'Special Skill Rankings', tiers: SKILL_TIERS },
        { title: 'Boss Fight Rankings', tiers: BOSS_TIERS },
        { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS },
      ].map((section) => (
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
                    <span key={w} className="text-sm font-medium text-white bg-[#0f1a0f] px-3 py-1 rounded border border-[#2a3a1a]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#0f1a0f] border border-[#2a3a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Dinoblade launches July 23, 2026. All six weapons are viable -- weapon mastery
          and Ex-Mod optimization matter more than tier rankings. Pick the playstyle you enjoy most.
          Tier lists are based on the demo build and may change with the full release.
        </p>
      </div>
    </div>
  );
}
