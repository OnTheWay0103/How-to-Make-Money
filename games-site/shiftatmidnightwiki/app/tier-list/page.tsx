import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon Tier List',
  description: 'Shift At Midnight weapon tier list — best weapons for doppelganger elimination and entity hunts. S-tier to C-tier rankings for all weapons and tools.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['Flamethrower', 'Shotgun'], note: 'Highest damage output — Flamethrower for area denial, Shotgun for close-range burst' },
  { tier: 'A', weapons: ['SMG', 'Pistol'], note: 'Reliable all-rounders — SMG for sustained fire, Pistol for accuracy' },
  { tier: 'B', weapons: ['Sledgehammer', 'Baseball Bat'], note: 'Good backup weapons — silent and infinite ammo, but short range' },
  { tier: 'C', weapons: ['Brick'], note: 'Emergency distraction tool — low damage but useful for breaking windows and creating noise' },
];

const HUNT_TIERS = [
  { tier: 'S', weapons: ['Flamethrower'], note: 'King of entity hunts — damage over time, area denial, and light source that deters shadow entities' },
  { tier: 'A', weapons: ['Shotgun', 'SMG'], note: 'Shotgun for burst damage during stun windows. SMG for sustained fire on mobile entities.' },
  { tier: 'B', weapons: ['Pistol', 'Bear Traps'], note: 'Pistol for precision weak points. Bear Traps for area control and trapping escape routes.' },
  { tier: 'C', weapons: ['Melee Weapons (Sledgehammer, Baseball Bat)'], note: 'Risky in hunts — must be close range, leaving you vulnerable to entity attacks' },
];

const TOOL_TIERS = [
  { tier: 'S', weapons: ['Bear Traps', 'Wooden Boards'], note: 'Bear Traps immobilize doppelgangers. Wooden Boards seal entry points to control sightlines.' },
  { tier: 'A', weapons: ['Hose', 'Electrical Trap'], note: 'Hose for extinguishing entity fires. Electrical Trap for area denial in choke points.' },
  { tier: 'B', weapons: ['Motion Alarm', 'Tripwire'], note: 'Early warning systems — cost-effective but do not directly eliminate threats' },
  { tier: 'C', weapons: ['Flashlight'], note: 'Essential for exploring dark areas but does not deal damage. Always carry one anyway.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon Tier List</h1>
      <p className="text-gray-400 mb-2">Shift At Midnight weapon and tool rankings for launch build (July 22, 2026). Based on community testing.</p>

      {[{ title: 'Best Weapons Overall', tiers: WEAPON_TIERS }, { title: 'Best Weapons for Entity Hunts', tiers: HUNT_TIERS }, { title: 'Best Tools & Traps', tiers: TOOL_TIERS }].map((section) => (
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
          Shift At Midnight rewards situational awareness and preparation over raw firepower.
          The best strategy is identifying doppelgangers before they attack — weapons are your last line of defense.
          Tier rankings reflect general usefulness; adapt your loadout to the specific entities and shift conditions you face.
        </p>
      </div>
    </div>
  );
}
