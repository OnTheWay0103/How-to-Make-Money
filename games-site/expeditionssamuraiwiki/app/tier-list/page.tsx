import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Companion & Class Overview',
  description: 'Expeditions: Samurai companion and class overview — all 8 companions and their confirmed roles, plus what we know about the 4 player classes. Pre-launch rankings based on official reveals.',
};

const COMPANION_ROLES = [
  { tier: 'Stealth', names: ['Antje', '2 unnamed companions'], note: 'Antje is a skilled burglar who can bypass locks and move unseen — the backbone of stealth approaches' },
  { tier: 'Combat', names: ['Johan', 'Piet Ruisch'], note: 'Johan is a deadly swordsman and blood relative of your late captain; Piet Ruisch is a brawler handy with sword and pistol' },
  { tier: 'Diplomacy', names: ['Étienne Durand'], note: 'The crew\'s priest and "diplomatic superhero" — leads negotiations and talks the party through difficult situations' },
  { tier: 'Hybrid', names: ['Tora-Hime'], note: 'An onna-musha (female samurai) seeking her place in history — expected to bridge combat and story roles' },
  { tier: 'TBD', names: ['2 unnamed companions'], note: 'Revealed in the Companions trailer but not yet named in official materials — check back after Early Access launch' },
];

const CLASS_NOTES = [
  { tier: '4 Classes', names: ['Confirmed at character creation'], note: 'Your choice of class "will decide your approach to combat" — class names and abilities will be detailed at launch' },
  { tier: 'Build Pillars', names: ['Stealth / Diplomacy / Steel'], note: 'Every character engages the game\'s three pillars — your class skews one way, but companion skills and gear fill the rest' },
  { tier: 'Weapon Skills', names: ['East meets West arsenal'], note: 'Flintlocks, cutlasses, and grenades alongside katanas, naginatas, and longbows — weapon skills are developed through use and crafting' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Companion & Class Overview</h1>
      <p className="text-gray-400 mb-2">Confirmed companion roles and class information for the Early Access launch (August 7, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-launch — based on official reveals; subject to change</div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The 8 Companions — Confirmed Roles</h2>
        <p className="text-gray-400 text-sm mb-6">Every companion has a personal story, a dedicated quest chain, and can become a friend, rival, or lover. Five have been named in official materials; three were shown in the Companions trailer without names.</p>
        {COMPANION_ROLES.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-24 rounded-lg flex items-center justify-center text-sm font-bold py-2 ${
              row.tier === 'Stealth' ? 'bg-purple-500/20 text-purple-400' :
              row.tier === 'Combat' ? 'bg-red-500/20 text-red-400' :
              row.tier === 'Diplomacy' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'Hybrid' ? 'bg-amber-500/20 text-amber-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.names.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Player Classes</h2>
        <p className="text-gray-400 text-sm mb-6">You create Captain Flynn — surname fixed, first name and appearance customizable — and choose one of four classes at character creation. The class names and their ability trees will be revealed at Early Access launch.</p>
        {CLASS_NOTES.map((row) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className="shrink-0 w-24 rounded-lg flex items-center justify-center text-sm font-bold py-2 bg-blue-500/20 text-blue-400">{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.names.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Rankings</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Expeditions: Samurai launches into Early Access on August 7, 2026. Because the game is not yet
          playable, this page reflects officially confirmed information only — companion roles, the four-class
          character creation, and the three gameplay pillars. Full tier rankings based on actual gameplay
          will be added in the first week after launch.
        </p>
      </div>
    </div>
  );
}
