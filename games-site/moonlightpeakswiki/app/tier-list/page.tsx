import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Crops Tier List',
  description: 'Moonlight Peaks crop tier list — the best night-farming crops for money, mana recovery, and quest progress. S-tier to C-tier rankings for the launch build.',
};

const CROP_TIERS = [
  { tier: 'S', crops: ['Blood Grapes'], note: 'Quest-critical for Orlock\'s Blood Wine task and one of the best early coin crops per harvest' },
  { tier: 'A', crops: ['Mystic Crops', 'Moonlight Flowers'], note: 'Fast regrowth, high sell value, and used in potion/gift crafting' },
  { tier: 'B', crops: ['Mana Crops', 'Wheat & Grains'], note: 'Reliable income and cooking ingredients, slower to scale' },
  { tier: 'C', crops: ['Basic Vegetables'], note: 'Cheap seeds and safe profit, but outpaced by S/A tiers as soon as you unlock them' },
];

const EARLY_TIERS = [
  { tier: 'S', crops: ['Blood Grapes'], note: 'Unlock the questline, sells well, and teaches the farming loop' },
  { tier: 'A', crops: ['Basic Vegetables'], note: 'Cheap, fast, zero-risk first crop for night one' },
  { tier: 'B', crops: ['Moonlight Flowers'], note: 'Better value but needs more mana to sustain early' },
  { tier: 'C', crops: ['Slow-Grow Crops'], note: 'High upgrade costs and stamina pressure make them a trap in week one' },
];

const MONEY_TIERS = [
  { tier: 'Best', crops: ['Processed Crops → Wine & Juice'], note: 'Fermenting crops into wine and juice multiplies their value' },
  { tier: 'Good', crops: ['Potions (Love Potion sells for 2,200 Coins)'], note: 'Potions massively out-earn raw crops — the endgame money-maker' },
  { tier: 'Fine', crops: ['Raw S-Tier Crops'], note: 'Good but slow; fine for passive income between potion batches' },
  { tier: 'Avoid', crops: ['Over-Expanding Early'], note: 'More seeds than you can water = wasted mana and stamina' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Best Crops Tier List</h1>
      <p className="text-gray-400 mb-2">Moonlight Peaks crop rankings for the launch build (July 2026). Based on the first month of play.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch build — subject to balance changes</div>

      {[{ title: 'Overall Rankings', tiers: CROP_TIERS }, { title: 'Early Game (First Week)', tiers: EARLY_TIERS }, { title: 'Money-Making Rankings', tiers: MONEY_TIERS }].map((section) => (
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
                  {row.crops.map((c) => (
                    <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{c}</span>
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
          Moonlight Peaks is a cozy game — every crop is viable, and min-maxing is optional. These rankings
          simply show what earns the most coins per night and what feeds quest progression fastest. Grow
          what you enjoy, but if you want to bankroll the potion hobby, prioritize Blood Grapes and Moonlight Flowers early.
        </p>
      </div>
    </div>
  );
}
