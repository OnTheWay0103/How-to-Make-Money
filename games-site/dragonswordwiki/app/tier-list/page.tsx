import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hero Tier List',
  description: 'DragonSword: Awakening hero tier list — S to B-tier rankings for all 19 characters. Best heroes for story, boss fights, and endgame.',
};

const OVERALL_TIERS = [
  { tier: 'S', heroes: ['Theresia', 'Lute', 'Reina', 'Ornette', 'Kalsion'], note: 'Best in class — Theresia for bleed/stun flexibility, Lute for beginner-friendly all-rounder, Reina for aerial dominance, Ornette for crit DPS, Kalsion for melee power' },
  { tier: 'A', heroes: ['Charlotte', 'Roxy', 'Aria', 'Dana', 'Kalien', 'Eileen', 'Astria', 'Sion'], note: 'Strong with conditions — Charlotte stealth assassin, Roxy ranged bleed, Aria explosive DPS, Dana summoner support, Kalien fire mage, Eileen halberd support, Astria crossbow sniper, Sion relic caster' },
  { tier: 'B', heroes: ['Alex', 'Tarte', 'Cerese'], note: 'Situational — Alex too defensive, Tarte needs orb setup, Cerese only shines in frost teams' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', heroes: ['Lute', 'Castella', 'Aria'], note: 'Your starting trio — Lute heals and stuns, Castella controls crowds, Aria deals explosive ranged damage. All obtained in the first hour.' },
  { tier: 'Good', heroes: ['Theresia', 'Roxy', 'Dana'], note: 'Easy to learn, high payoff. Theresia is arguably the strongest hero overall. Roxy is the easiest ranged DPS. Dana\'s golem provides extra survivability.' },
  { tier: 'Complex', heroes: ['Kalien', 'Charlotte', 'Sion'], note: 'High skill ceiling but punishing if you don\'t master their mechanics. Save these for after you\'ve learned the basics.' },
];

const BOSS_TIERS = [
  { tier: 'S', heroes: ['Theresia', 'Ornette', 'Reina'], note: 'Theresia switches between bleed and stun on demand. Ornette\'s +30% crit buff melts bosses. Reina\'s aerial combos bypass ground defenses.' },
  { tier: 'A', heroes: ['Kalsion', 'Dana', 'Eileen'], note: 'Kalsion breaks super armor fast. Dana\'s golem tanks and applies frost. Eileen buffs the whole team with her battle banner.' },
  { tier: 'B', heroes: ['Roxy', 'Astria', 'Aria'], note: 'Ranged DPS is solid but squishy — needs a tank to draw aggro' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hero Tier List</h1>
      <p className="text-gray-400 mb-2">DragonSword: Awakening hero rankings for launch (July 22, 2026). Based on overall performance, ease of use, and boss viability.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-800/50 mb-8">Launch version — updated for 19 heroes</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS }, { title: 'Boss Fight Rankings', tiers: BOSS_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Complex' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
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
          DragonSword: Awakening is well-balanced — even B-tier heroes perform well with upgrades and good team synergy.
          Tier rankings reflect the current meta but may shift with post-launch balance updates and new hero releases.
          Four free heroes (Ryza, Jerome, Veronica, Logan) are confirmed for the second half of 2026.
          Build a balanced team with complementary status effects rather than chasing S-tier alone.
        </p>
      </div>
    </div>
  );
}
