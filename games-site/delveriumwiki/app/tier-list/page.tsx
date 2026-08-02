import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Role Tier List',
  description: 'Delverium role tier list — Melee Fighter, Ranger, Farmer-Builder and Dungeon Delver roles ranked for solo and co-op play, based on confirmed systems and the demo build.',
};

// Delverium has no classes — these are playstyle roles built from the
// confirmed systems (melee/ranged weapons, farming, building, dungeons).
// Pre-release ratings: based on official feature confirms + the free demo.
// ⚠️ Subject to change at EA launch (Sept 22, 2026).
const ROLE_TIERS = [
  { tier: 'S', roles: ['Dungeon Delver'], note: 'The game is built around dungeon runs for loot, ores and story ("the Faults"). A role dedicated to clearing them drives progression for the whole party.' },
  { tier: 'S', roles: ['Farmer-Builder'], note: 'Farming (crops, animals, fishing, cooking) and building are core survival pillars. Every dungeon run depends on food and gear crafted by a dedicated crafter.' },
  { tier: 'A', roles: ['Melee Fighter'], note: 'Confirmed melee weapons and armor make this the reliable frontline for dungeon fights and defense. Low resource cost — easy for beginners and co-op parties.' },
  { tier: 'B', roles: ['Ranger'], note: 'Ranged combat is confirmed as a weapon path, but specific bows/ranged weapon details are limited pre-release. Strong support pick; details pending EA.' },
  { tier: 'B', roles: ['Jack of All Trades'], note: 'Solo players will need to cover gathering, building, farming AND combat themselves. Viable — the game is fully playable solo — but slower than specialized co-op teams.' },
];

const SOLO_TIERS = [
  { tier: 'S', roles: ['Jack of All Trades'], note: 'Solo play requires covering every pillar: gather, build, farm, craft and fight. Balance your early upgrades across tools, weapons and farm plots.' },
  { tier: 'A', roles: ['Melee Fighter'], note: 'Melee keeps resource costs low early on, letting a solo player spend more time gathering and building.' },
  { tier: 'B', roles: ['Dungeon Delver', 'Farmer-Builder'], note: 'Specializing is riskier solo — you still need everything. Farm to sustain yourself, then delve when geared.' },
  { tier: 'C', roles: ['Ranger'], note: 'Ranged is a fine secondary, but ammo costs cut into a solo player\'s limited early resources. Pick it up once crafting is established.' },
];

const COOP_TIERS = [
  { tier: 'S', roles: ['Dungeon Delver + Farmer-Builder'], note: 'Up to 8 players means you can specialize: one team farm/crafts while another pushes dungeons. This split clears content fastest.' },
  { tier: 'A', roles: ['Melee Fighter'], note: 'With dedicated crafters behind them, melee fighters tank and clear dungeons efficiently. Always at least one per party.' },
  { tier: 'B', roles: ['Ranger'], note: 'Ranged DPS shines with a frontline present. Bring one or two for boss fights once ranged weapon options are confirmed.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Role Tier List</h1>
      <p className="text-gray-400 mb-2">Delverium role archetypes ranked for solo and co-op play.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-release — pending game launch (Sept 22, 2026)</div>

      {[{ title: 'Overall Rankings', tiers: ROLE_TIERS }, { title: 'Solo Play Rankings', tiers: SOLO_TIERS }, { title: 'Co-op Party Rankings', tiers: COOP_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.roles.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Situational' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.roles.map((r) => (
                    <span key={r} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{r}</span>
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
          Delverium has no classes — roles are playstyle choices built from its confirmed systems. These
          ratings are pre-release estimates based on official feature announcements and the free demo,
          and will be updated after the September 22, 2026 Early Access launch. In a sandbox survival
          game, specialization beats any "best role": a co-op party that divides farming, crafting,
          building and dungeon work will always outpace one that does everything together.
        </p>
      </div>
    </div>
  );
}
