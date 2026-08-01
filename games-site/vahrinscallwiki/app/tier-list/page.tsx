import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List — What is Actually Confirmed',
  description:
    "Vahrin's Call tier list, honestly: no official tier list exists. Confirmed build directions, confirmed weapon and magic styles, and what remains unconfirmed at launch (July 2026).",
};

const BUILD_DIRECTIONS = [
  { tier: 'C', label: 'Confirmed', builds: ['Ranged + Magic hybrid'], note: 'Developer-endorsed: "a nimble-footed archer flinging fireballs between arrows"' },
  { tier: 'C', label: 'Confirmed', builds: ['Heavy Melee'], note: 'Developer-endorsed: "an axe-wielding whirlwind of death"' },
  { tier: 'C', label: 'Confirmed', builds: ['Trap & Alchemy specialist'], note: 'Traps deploy while moving; potions can be thrown at enemies (alchemy perk)' },
  { tier: 'C', label: 'Confirmed', builds: ['Spell + Trap hybrid'], note: 'Confirmed synergy: some magic spells can trigger traps' },
  { tier: 'C', label: 'Confirmed', builds: ['Any single-system focus'], note: 'Skills improve through use — consistency is the power curve' },
];

const WEAPON_STYLES = [
  { tier: 'C', label: 'Confirmed', weapons: ['Melee (swords, axes)'], note: 'Core combat system; backstabs work on human enemies' },
  { tier: 'C', label: 'Confirmed', weapons: ['Bows'], note: 'Ranged combat confirmed; featured in developer build examples' },
  { tier: 'C', label: 'Confirmed', weapons: ['Magic (fire, ice)'], note: 'Spells customisable: damage, range, casting speed' },
  { tier: 'C', label: 'Confirmed', weapons: ['Traps'], note: 'Deployable while moving; usable mid-combat' },
  { tier: 'U', label: 'Unconfirmed', weapons: ['Named weapon tiers (S/A/B/C)'], note: 'No official weapon tier list exists — any ranking online is invented' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">
        The honest version: Vahrin&apos;s Call has no official tier list.
        These are the confirmed build directions and weapon styles, with sources.
        Updated August 1, 2026.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">
        Confirmed facts only — no invented rankings
      </div>

      {/* Build Directions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Confirmed Build Directions</h2>
        <p className="text-gray-500 text-sm mb-6">
          The classless system means there is no "best build" — but these directions are supported
          by confirmed mechanics and developer statements. See the
          {" "}<a href="/guides/best-builds-guide" className="text-amber-400 hover:text-amber-300">Best Builds Guide</a> for details.
        </p>
        {BUILD_DIRECTIONS.map((row) => (
          <div key={row.builds[0]} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-24 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
              row.tier === 'C' ? 'bg-green-500/20 text-green-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.label}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.builds.map((b) => (
                  <span key={b} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#2a1a1a]">
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Weapon Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Weapon & Magic Styles</h2>
        <p className="text-gray-500 text-sm mb-6">
          Every style confirmed to exist in Vahrin&apos;s Call. There is no official damage ranking
          between them — Steam launch reviews describe balance as acceptable rather than skewed.
        </p>
        {WEAPON_STYLES.map((row) => (
          <div key={row.weapons[0]} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-24 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
              row.tier === 'C' ? 'bg-green-500/20 text-green-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {row.label}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.weapons.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a0a0a] px-3 py-1 rounded border border-[#2a1a1a]">
                    {w}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Important note */}
      <div className="bg-[#1a0a0a] border border-[#2a1a1a] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Why There Is No S-Tier List Here</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Titan Roc has never published weapon or build rankings, and no official stat data exists
          to derive them from. Earlier versions of this page listed invented tiers ("Spellshield
          Vanguard", "Greatsword S-tier") — those were fabricated and have been removed. Vahrin&apos;s
          Call is classless: any style can complete all content, skills grow through use, and you
          can switch playstyles at any point. Pick what feels fun and commit — that is the closest
          thing the game has to a tier list.
        </p>
      </div>
    </div>
  );
}
