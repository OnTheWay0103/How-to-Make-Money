import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heroes Tier List',
  description: 'Tears of Metal heroes tier list — Vanguard, Berserker, and Marksman ranked for solo play, boss damage, co-op utility, and ease of use. S-tier to B-tier rankings.',
};

const OVERALL_TIERS = [
  { tier: 'S', heroes: ['Vanguard'], note: 'Best solo hero, forgiving playstyle, excellent crowd control, shield blocks most damage. Top pick for beginners and experienced players alike.' },
  { tier: 'A', heroes: ['Berserker'], note: 'Highest DPS in the game, melts bosses, but extremely fragile. Requires good positioning and dodge timing. Rewards aggressive play.' },
  { tier: 'B', heroes: ['Marksman'], note: 'Essential ranged DPS in co-op due to safe positioning and consistent damage. Weak solo — struggles with mob density and boss aggro.' },
];

const SOLO_TIERS = [
  { tier: 'S', heroes: ['Vanguard'], note: 'Shield and self-sustain make solo expeditions manageable. Can handle any enemy composition.' },
  { tier: 'A', heroes: ['Berserker'], note: 'Fast clear speed if you can avoid damage. Risky but rewarding — one mistake can end the run.' },
  { tier: 'B', heroes: ['Marksman'], note: 'Viable but slow. Kiting is essential and requires large open areas. Tight corridors are deadly.' },
];

const COOP_TIERS = [
  { tier: 'S', heroes: ['Vanguard', 'Marksman'], note: 'Vanguard holds aggro while Marksman deals safe damage from range. The ultimate co-op duo.' },
  { tier: 'A', heroes: ['Berserker'], note: 'Berserker shreds bosses when the tank holds aggro. Needs a dedicated Vanguard or careful positioning.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', heroes: ['Vanguard'], note: 'Shield, high HP, forgiving timing. Learn enemy patterns without dying repeatedly.' },
  { tier: 'Good', heroes: ['Berserker'], note: 'Fast expeditions when you master dodge timing. Great for learning boss patterns.' },
  { tier: 'Avoid First', heroes: ['Marksman'], note: 'Requires good kiting and map awareness. Play Vanguard first to learn the game.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Heroes Tier List</h1>
      <p className="text-gray-400 mb-2">Tears of Metal hero rankings for Early Access (July 22, 2026). Based on community feedback and gameplay analysis.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Early Access — subject to balance changes</div>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-3">Tier Criteria</h2>
        <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
          <li><strong className="text-gray-300">Solo Viability</strong> — Can this hero clear expeditions solo without excessive frustration?</li>
          <li><strong className="text-gray-300">Boss Damage</strong> — How fast does this hero kill bosses and elite enemies?</li>
          <li><strong className="text-gray-300">Co-op Utility</strong> — How valuable is this hero in a 4-player team?</li>
          <li><strong className="text-gray-300">Ease of Use</strong> — How punishing are mistakes? How steep is the learning curve?</li>
        </ul>
      </section>

      {[
        { title: 'Overall Rankings', tiers: OVERALL_TIERS },
        { title: 'Solo Play Rankings', tiers: SOLO_TIERS },
        { title: 'Co-op Rankings', tiers: COOP_TIERS },
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
          Tears of Metal launched in Early Access on July 22, 2026. All three heroes are viable
          in their intended roles — tier rankings reflect general effectiveness and ease of use,
          not absolute power. Play the hero whose playstyle you enjoy most. Build and emblem
          choices can significantly impact performance.
        </p>
      </div>
    </div>
  );
}
