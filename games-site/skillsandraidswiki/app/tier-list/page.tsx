import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List',
  description: 'Skills & Raids tier list — role priorities, rarity guidance, and how to evaluate skills until the full 30-skill roster is documented.',
};

const ROLE_TIERS = [
  { tier: 'S', role: 'Healer (Owlivia)', note: 'The most run-defining role — a dead healer ends runs. Demo-era reviews documented fights stalling into infinite loops without her.' },
  { tier: 'S', role: 'Tank (Shelldon)', note: 'The party\'s damage buffer — turns reaction time into recoverable mistakes.' },
  { tier: 'A', role: 'DPS (Clawrk)', note: 'Ends fights before resources run out. The counter to the enemy healer teams that end runs.' },
  { tier: 'B', role: 'Utility (cleanse, buffs, debuffs)', note: 'Run-saving in the right situation, dead weight if your collection is small.' },
];

const FUNCTION_TIERS = [
  { tier: 'S', function: 'Direct healing / Mitigation / Debuff application', note: 'Keep runs alive, make the tank a tank, and enable synergy. The confirmed combat pillars.' },
  { tier: 'A', function: 'Burst damage / Heal-over-time / Cleanse', note: 'Ends fights, wins attrition, and counters the status effects that heavily influence every encounter.' },
  { tier: 'B', function: 'Damage over time / Threat control / Protective buffs', note: 'Strong situational tools — DoT beats enemy healers, threat protects the party.' },
  { tier: 'C', function: 'Pure stat buffs / Quest-fodder abilities', note: 'Outclassed by active effects — but still worth carrying while a quest demands them.' },
];

const RARITY_TIERS = [
  { rarity: 'Common', use: 'The baseline — early game is built on it' },
  { rarity: 'Uncommon', use: 'The early-mid game workhorse' },
  { rarity: 'Rare', use: 'Strong mid-game tier' },
  { rarity: 'Epic', use: 'High tier — treat as a build-around' },
  { rarity: 'Legendary', use: 'The best tier — center your build on it if you own one' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tier List</h1>
      <p className="text-gray-400 mb-2">Roles, skill functions, and rarity priorities for Skills &amp; Raids.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Honest ranking — the full 30-skill roster is not publicly documented yet</div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Role Rankings</h2>
        {ROLE_TIERS.map((row) => (
          <div key={row.role} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
            }`}>{row.tier}</span>
            <div>
              <div className="text-sm font-medium text-white">{row.role}</div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Skill Function Rankings</h2>
        {FUNCTION_TIERS.map((row) => (
          <div key={row.function} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="text-sm font-medium text-white">{row.function}</div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Rarity Priorities</h2>
        <div className="space-y-2">
          {RARITY_TIERS.map((row) => (
            <div key={row.rarity} className="flex gap-4 items-start bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg px-4 py-3">
              <div className="text-sm font-medium text-white shrink-0 w-24">{row.rarity}</div>
              <p className="text-xs text-gray-400">{row.use}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Why This Tier List Has No Skill Names</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Skills &amp; Raids contains 30 skills (15 in the demo), but the full roster is not publicly
          documented — so a genuine skill-by-skill tier list cannot exist yet, and skill names circulating
          online are largely fabricated. What we can rank honestly is what the game itself confirms: fixed
          roles, skill functions, and the five rarity tiers. As the community documents the roster, this
          page will be updated with real names and numbers. See the <a className="text-amber-400 hover:text-amber-300" href="/guides/tier-list">full tier list guide</a> for details.
        </p>
      </div>
    </div>
  );
}
