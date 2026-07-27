import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Henki Forms Tier List',
  description: 'Taival Henki forms tier list — best companion forms ranked S to C for combat, traversal, and utility. Find the optimal Henki for every situation.',
};

const COMBAT_TIERS = [
  { tier: 'S', forms: ['Hulking Beast', 'Cunning Predator'], note: 'Best combat forms — Beast tanks and absorbs damage, Predator deals massive stealth burst' },
  { tier: 'A', forms: ['Purple Clone Variant', 'Base Henki (Healer)'], note: 'Clone doubles your damage output. Base Henki keeps the party alive with healing and revival.' },
  { tier: 'B', forms: ['Golden Variant', 'Wolf Form'], note: 'Golden finds extra loot during fights. Wolf provides balanced damage and mobility.' },
  { tier: 'C', forms: ['Pack Mule', 'Bird Form'], note: 'Utility-focused — not meant for combat. Swap out before boss fights.' },
];

const TRAVERSAL_TIERS = [
  { tier: 'S', forms: ['Swift Mount', 'Bird/Glider Form'], note: 'Mount for ground speed and cliff scaling. Glider for crossing gaps and reaching high platforms.' },
  { tier: 'A', forms: ['Jump Pad Form', 'Aquatic Form'], note: 'Jump Pad reaches elevated secrets. Aquatic Form unlocks underwater areas and hidden caves.' },
  { tier: 'B', forms: ['Cunning Predator (Stealth)'], note: 'Stealth bypasses enemy patrols — great for exploration without combat interruptions.' },
  { tier: 'C', forms: ['Hulking Beast (Slow)'], note: 'Too slow for efficient traversal. Use only for combat then swap out.' },
];

const UTILITY_TIERS = [
  { tier: 'S', forms: ['Pack Mule', 'Golden Variant'], note: 'Pack Mule carries extra inventory — essential for long gathering runs. Golden boosts loot drops significantly.' },
  { tier: 'A', forms: ['Base Henki (Healer)', 'Purple Clone Variant'], note: 'Healer saves consumables between fights. Clone helps with multi-target gathering.' },
  { tier: 'B', forms: ['Jump Pad Form'], note: 'Niche but invaluable for reaching hidden chests and secret areas in every biome.' },
  { tier: 'C', forms: ['Bird Form (Scout)'], note: 'Brief scouting utility to spot resources from above. Limited practical use otherwise.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Henki Forms Tier List</h1>
      <p className="text-gray-400 mb-2">Taival Henki companion form rankings for Early Access (July 2026). Based on community testing and developer insights.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Early Access — subject to balance changes</div>

      {[{ title: 'Combat Rankings', tiers: COMBAT_TIERS }, { title: 'Traversal & Exploration Rankings', tiers: TRAVERSAL_TIERS }, { title: 'Utility & Farming Rankings', tiers: UTILITY_TIERS }].map((section) => (
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
                  {row.forms.map((f) => (
                    <span key={f} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{f}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">How to Use This Tier List</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          The best Henki form depends on your playstyle and party composition. Swap forms freely based on what you are doing — combat forms for fights, mount forms for travel, utility forms for gathering. A well-rounded party should coordinate forms: one tank, one damage dealer, one support, and one flex.
        </p>
      </div>
    </div>
  );
}
