import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hero Tier List',
  description: 'Graphite hero tier list — S-tier (Mage, Tamer) to B-tier (Monk, Bard). Best heroes ranked for campaign, boss fights, and meta-progression.',
};

const HERO_TIERS = [
  { tier: 'S', heroes: ['Mage', 'Tamer'], note: 'Mage dominates AoE damage and wave clear. Tamer\'s pet scaling is unmatched for sustained fights. Both S-tier heroes carry runs.' },
  { tier: 'A', heroes: ['Warrior', 'Rogue', 'Hunter'], note: 'Warrior provides reliable frontline tanking. Rogue deletes single targets. Hunter offers flexible ranged DPS with utility options.' },
  { tier: 'B', heroes: ['Monk', 'Bard'], note: 'Monk is a strong healer but lacks damage contribution. Bard\'s buffs are invaluable but require setup and team coordination.' },
];

const BOSS_TIERS = [
  { tier: 'S', heroes: ['Tamer', 'Warrior'], note: 'Tamer\'s pet absorbs boss aggro while dealing consistent damage. Warrior\'s taunt and damage reduction trivialize many boss mechanics.' },
  { tier: 'A', heroes: ['Mage', 'Rogue'], note: 'Mage bursts down boss phases quickly. Rogue\'s single-target damage exploits Break windows efficiently.' },
  { tier: 'B', heroes: ['Hunter', 'Monk'], note: 'Hunter can keep distance but lacks burst. Monk keeps the team alive but extends fights.' },
  { tier: 'C', heroes: ['Bard'], note: 'Bard\'s setup time is a liability in high-pressure boss phases. Situational pick.' },
];

const CAMPAIGN_TIERS = [
  { tier: 'S', heroes: ['Mage', 'Tamer'], note: 'Mage clears trash packs effortlessly across all 4 acts. Tamer scales power through the run without relying on artifacts.' },
  { tier: 'A', heroes: ['Warrior', 'Hunter'], note: 'Warrior survives the early acts easily. Hunter has strong consistency with no mana or position constraints.' },
  { tier: 'B', heroes: ['Rogue', 'Monk', 'Bard'], note: 'Rogue struggles in act 1 and 2 before getting key artifacts. Monk and Bard are team-reliant — weaker in unoptimized parties.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hero Tier List</h1>
      <p className="text-gray-400 mb-2">Graphite hero rankings for launch (July 27, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch version — subject to balance changes</div>

      {[{ title: 'Overall Rankings', tiers: HERO_TIERS }, { title: 'Boss Fight Rankings', tiers: BOSS_TIERS }, { title: 'Campaign Run Rankings', tiers: CAMPAIGN_TIERS }].map((section) => (
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
                  {row.heroes.map((h) => (
                    <span key={h} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{h}</span>
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
          All 7 heroes in Graphite are viable for the full campaign. Tier lists reflect relative power at
          launch with typical artifact availability. Your personal playstyle, team composition, and artifact
          RNG will heavily influence which hero performs best for you. Play what feels fun.
        </p>
      </div>
    </div>
  );
}
