import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weapon & Skill Tier List',
  description: 'Dinoblade tier list -- the honest edition. What is confirmed about the Great Sword, legendary weapons, Soul Arts, and enemy difficulty.',
};

const WEAPON_TIERS = [
  { tier: 'S', weapons: ['The Great Sword'], note: 'The confirmed primary weapon -- a colossal blade held in your Spinosaurus\'s jaws. Everything about the combat system is built around it.' },
  { tier: '?', weapons: ['Legendary weapons'], note: 'Confirmed to exist, hidden in the world, and change how your Spinosaurus plays -- but no names, locations, or stats are documented.' },
  { tier: '?', weapons: ['Enemy weapons (battleaxes, halberds, swords, scythes)'], note: 'Confirmed in rival dinosaurs\' hands. No verified source documents them as player weapons.' },
];

const SKILL_TIERS = [
  { tier: 'S', weapons: ['Parry mastery'], note: 'The parry-and-posture loop is the game\'s meta: parries build posture, guard breaks open counterattacks. Every build runs through it.' },
  { tier: 'A', weapons: ['Stamina discipline'], note: 'Exhausted stamina means no defense. The players who manage stamina win long fights.' },
  { tier: 'B', weapons: ['Soul Arts (special attacks)'], note: 'A confirmed part of the toolkit, but no official list of names or effects exists -- rank nothing specific until the community documents it.' },
  { tier: 'C', weapons: ['Dodge-only gambling'], note: 'Some attacks cannot be parried. Rolling everything without learning which attacks are dodge-only is how runs end.' },
];

const ENEMY_TIERS = [
  { tier: 'S', weapons: ['Alpha predators (T-Rex wielding a smaller dinosaur; axe- and halberd-wielding tyrannosaurs)'], note: 'Region-ruling bosses. Massive damage, real weapons, and the game\'s biggest fights.' },
  { tier: 'A', weapons: ['Weapon-wielding dinosaurs'], note: 'Battleaxe, halberd, sword, and scythe users out-range your Great Sword in neutral -- dodge or space them, don\'t trade.' },
  { tier: 'B', weapons: ['Smaller dinosaurs'], note: 'Individually trivial -- the pack is the threat. The game\'s intended parry practice.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weapon & Skill Tier List</h1>
      <p className="text-gray-400 mb-2">Dinoblade&apos;s honest tier list -- confirmed facts first, opinions labeled as opinions.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">No official stat data exists -- rankings below are direction, not data</div>

      {[
        { title: 'Weapon Rankings (The Honest Version)', tiers: WEAPON_TIERS },
        { title: 'Skill & Combat Priorities', tiers: SKILL_TIERS },
        { title: 'Enemy Difficulty', tiers: ENEMY_TIERS },
      ].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
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
          No official stat data for Dinoblade has been published -- no weapon stats, no skill effects, no enemy
          values. Any site printing precise tier tables for Dinoblade is speculating. What is confirmed:
          the Great Sword is your weapon, the parry-and-posture loop is the meta, and legendary weapons
          hidden in the world will change how your Spinosaurus plays once the community documents them.
          For the full picture, see our <a href="/guides/weapons-guide" className="text-amber-400 hover:underline">Weapons &amp; Builds Guide</a>.
        </p>
      </div>
    </div>
  );
}
