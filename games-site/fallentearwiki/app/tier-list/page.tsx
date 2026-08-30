import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fated Bonds Tier List',
  description: 'Fallen Tear: The Ascension Fated Bonds allies ranked by role and recruit priority — mages, swordsmen, tricksters, healers, and the confirmed roster of allies. Pre-release editorial guidance, no fabricated stats.',
};

// Pre-release editorial guidance. The confirmed roster comes from the official
// Fated Bonds trailer and press material. No in-game numbers are verified, so
// this is a role/priority framework rather than a stat-based tier list.
const RECRUIT_PRIORITY = [
  { tier: 'Recruit first', allies: ['Zozrin (cartographer)', 'Traversal allies'], note: 'Allies whose abilities unlock new map traversal — like the cartographer\'s map abilities — pay off for the entire run. Exploration powers gate access to regions, items, and other bonds.' },
  { tier: 'Recruit early', allies: ['Combat-support allies', 'Annie (puppeteer)', 'Healers'], note: 'Allies that join fights (combat assists, puppeteer support, healing) make boss fights far more forgiving. Pick one combat ally and one healer before the first major bosses.' },
  { tier: 'Recruit as you explore', allies: ['Mages', 'Swordsmen', 'Tricksters'], note: 'Offensive and utility archetypes fill out your toolkit. Rotate them based on the region and boss you are facing.' },
  { tier: 'Recruit when convenient', allies: ['Story / sidequest allies'], note: 'Every Fated Bond carries sidequest and story content, so completionists will want all of them. None are skippable for ending-shaping purposes if you pursue multiple endings.' },
];

const ROLE_ARCHETYPES = [
  { role: 'Mage', strengths: 'Ranged burst damage and elemental coverage — likely pairs with the 1.0 Elemental Imbuements for weakness-based fights.', usedFor: 'Bosses with elemental weaknesses; large enemies that punish melee.' },
  { role: 'Swordsman', strengths: 'Direct melee burst and combo support alongside Hira\'s Korr Blade.', usedFor: 'Fast duels where sustained pressure matters.' },
  { role: 'Trickster', strengths: 'Utility, disruption, and unconventional abilities — crowd control and map tools.', usedFor: 'Overwhelming mobs and traversal puzzles.' },
  { role: 'Healer', strengths: 'Recovery and sustain during long explorations and tough bosses.', usedFor: 'First clears of unknown regions and endurance boss fights.' },
];

const CONFIRMED_ROSTER = [
  'Trystan', 'Lenela', 'Nesta', 'Cadel', 'Magnus', 'Dagoth', 'Primorin',
  'Sendrin', 'Korin', 'Durin', 'Zozrin', 'Kinoro', 'Demir', 'Enid',
  'Gwinri', 'Gunnar', 'Runa', 'Idris', 'Annie',
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Fated Bonds Tier List</h1>
      <p className="text-gray-400 mb-2">Fallen Tear: The Ascension allies by role and recruit priority — pre-release editorial guidance.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-violet-900/30 text-violet-300 border border-violet-800/50 mb-8">Pre-release — no verified stats [Unconfirmed]</div>

      <p className="text-gray-400 text-sm leading-relaxed mb-10">
        This is not a stat-based tier list. The game leaves Early Access on September 16, 2026, and no
        verified per-ally numbers are published. Instead, this page ranks the <strong>confirmed</strong> roster by
        role and by how early each kind of ally pays off — based on the official description of Fated Bonds
        (mages, swordsmen, tricksters, healers) and community reporting of what each archetype does. Everything
        here is editorial and marked accordingly.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Recruit Priority</h2>
        {RECRUIT_PRIORITY.map((row, i) => (
          <div key={row.tier} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
              row.tier === 'Recruit first' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'Recruit early' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'Recruit as you explore' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{`R${i + 1}`}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                <span className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{row.tier}</span>
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Role Archetypes</h2>
        {ROLE_ARCHETYPES.map((row) => (
          <div key={row.role} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
              row.role === 'Mage' ? 'bg-amber-500/20 text-amber-400' :
              row.role === 'Swordsman' ? 'bg-green-500/20 text-green-400' :
              row.role === 'Trickster' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.role.slice(0, 2).toUpperCase()}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                <span className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{row.role}</span>
              </div>
              <p className="text-xs text-gray-500">{row.strengths} {row.usedFor}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Confirmed Roster</h2>
        <p className="text-gray-400 text-sm mb-4">
          Allies named in the official Fated Bonds trailer and press material. Individual roles for most
          of these have not been confirmed — treat this as the current roster list, not a ranking.
        </p>
        <div className="flex flex-wrap gap-2">
          {CONFIRMED_ROSTER.map((ally) => (
            <span key={ally} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{ally}</span>
          ))}
        </div>
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Fallen Tear is a Metroidvania first and a party-builder second — traversal abilities from Fated
          Bonds often matter more than raw combat power, because they open the map. After the September 16
          1.0 launch this page will be updated with verified abilities, unlock conditions, and per-ally
          notes. Until then, recruit allies that move you around Raoah first, and fight with you second.
        </p>
      </div>
    </div>
  );
}
