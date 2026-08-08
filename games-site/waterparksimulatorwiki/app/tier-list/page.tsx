import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slide & Ride Tier List',
  description: 'Waterpark Simulator slide and attraction tier list — custom mega-slides, wave pools, lazy rivers, splash zones, diving boards, and food stalls ranked by profit and popularity for 1.0.',
};

// Ranked from 1.0 gameplay (August 2026). Based on profit per guest + popularity draw + upkeep burden.
// Waterpark Simulator lets you build slides piece-by-piece, so tiers rank ATTRACTION TYPES rather than
// individual named rides (the game has no fixed slide catalogue).
const RIDE_TIERS = [
  { tier: 'S', items: ['Custom Mega-Slides (loops & funnels)'], note: 'The flagship money-makers. Long, thrilling custom slides draw the biggest crowds and justify high ticket prices. A well-designed mega-slide pays for itself quickly — but it takes build time and upkeep.' },
  { tier: 'S', items: ['Wave Pool'], note: 'Huge capacity and a strong popularity draw. Unlocks as your profits grow. The single best "crowd magnet" per square meter once your park can handle the guest load.' },
  { tier: 'A', items: ['Lazy River'], note: 'Big guest throughput with almost no safety headaches. Guests ride it for a long time, which keeps queue pressure off your slides. Great mid-game earner and easy to theme.' },
  { tier: 'A', items: ['Kids\' Splash Zones'], note: 'Family-friendly play areas that keep young guests happy and safely occupied. Attracts family groups, which means more ticket + food revenue across the board.' },
  { tier: 'A', items: ['Diving Boards'], note: 'Cheap, fast to place, and popular. The downside is safety: guests cannonball into pools and can get hurt, so keep pools full and life preservers nearby.' },
  { tier: 'B', items: ['Food & Drink Stalls (hot dog, lemonade, popcorn)'], note: 'Not rides, but among the best profit-per-square-meter in the game. Hot dog stands restock cheaply, lemonade sells at $12/glass, and 1.0 adds the popcorn stand. Place near high-traffic zones.' },
  { tier: 'B', items: ['Vending Machines'], note: 'A hands-off replacement for food carts. Lower margin than staffed stalls but zero staff required — excellent once your queue management gets tight.' },
  { tier: 'B', items: ['Museum Theme Slides'], note: 'The Ocean, Aztec, and Pirate slides unlocked via Museum research. Strong novelty draw and a big rating boost, but they take a long questline to reach — an endgame project, not an early money-maker.' },
  { tier: 'C', items: ['Standard Small Slides'], note: 'Fine for early game when they are all you can afford. Once wave pools and mega-slides unlock, these become filler that mostly eats cleaning time.' },
  { tier: 'C', items: ['Ziplines (1.0)'], note: 'Useful for fast travel and a fun novelty, but they carry few guests and earn little directly. Build them for convenience and atmosphere, not profit.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Slide & Ride Tier List</h1>
      <p className="text-gray-400 mb-2">Waterpark Simulator attractions ranked by profit potential and popularity draw.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">Version 1.0 — Updated Aug 8, 2026. Based on community reports and 1.0 patch notes. Will be refined as more data comes in.</div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Attraction Type Rankings</h2>
        {RIDE_TIERS.map((row) => (
          <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-3 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on This Tier List</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Waterpark Simulator does not have a fixed catalogue of named rides — you build slides piece-by-piece
          in the build menu, tuning curves, loops, funnels, and drops yourself. That means there is no "best
          slide" to unlock; instead, the tier list ranks <strong>attraction types</strong> by how much profit
          and popularity they generate relative to their cost and upkeep. S-tier attractions carry your park,
          while C-tier items are best built for atmosphere or convenience. This list is based on the 1.0
          release and player reports from Early Access; it will be revised as the meta settles.
        </p>
      </div>
    </div>
  );
}
