import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Tier List',
  description: 'Go-Go Town! building tier list — best buildings to build first for economy, tourism, and automation. S-tier to C-tier rankings for shops, landmarks, and infrastructure.',
};

const BUILDING_TIERS = [
  { tier: 'S', buildings: ['Train Station', 'Logistics Building', 'House/Apartment'], note: 'Train station brings daily tourists (your economy); Logistics enables couriers; housing unlocks the workforce' },
  { tier: 'A', buildings: ['Shops (2nd onwards)', 'Sanitation Bureau', 'Food Trucks'], note: 'Shops convert production into coins; sanitation keeps tourists happy; food trucks sell without staff' },
  { tier: 'B', buildings: ['Vending Machines', 'Stalls', 'Major Landmarks'], note: 'Vending machines absorb overproduction; landmarks (Lighthouse, Stadium, Hot Springs) draw visitors later' },
  { tier: 'C', buildings: ['Decor-heavy builds', 'Large Shops (Cinema, Barbershop)'], note: 'High cost early — save large shops and attractions for mid-to-late game when supply chains are stable' },
];

const EARLY_TIERS = [
  { tier: 'S', buildings: ['Train Station'], note: 'Daily tourist arrivals are your economic lifeline — build it as early as possible' },
  { tier: 'A', buildings: ['House', 'Baldo\'s Shop Stocked'], note: 'Housing lets you invite tourists to become Townies; a stocked shop is your first steady income' },
  { tier: 'B', buildings: ['Second Shop', 'Trash Bins + Bubble Box'], note: 'More sales = more coins; cleanliness raises tourist satisfaction and EGO' },
  { tier: 'C', buildings: ['Decor & Benches'], note: 'Cheap EGO generation once you have spare materials' },
];

const AUTOMATION_TIERS = [
  { tier: 'S', buildings: ['Logistics Building'], note: 'Couriers deliver materials to shops and food trucks automatically — the backbone of a self-running town' },
  { tier: 'A', buildings: ['Zone Clocks (Farm/Fishery/Forest/Mine)'], note: 'Hire workers at each zone clock to automate resource production' },
  { tier: 'B', buildings: ['Sanitation Bureau'], note: 'Workers empty trash and clean purple stains before they damage buildings' },
  { tier: 'C', buildings: ['Import App Tools'], note: 'Chainsaw, jackhammer, and upgraded drills speed up manual work until automation unlocks' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Building Tier List</h1>
      <p className="text-gray-400 mb-2">Go-Go Town! building priorities for the 1.0 launch build (July 16, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">1.0 — subject to balance changes</div>

      {[{ title: 'Overall Priorities', tiers: BUILDING_TIERS }, { title: 'Early Game Build Order', tiers: EARLY_TIERS }, { title: 'Automation Infrastructure', tiers: AUTOMATION_TIERS }].map((section) => (
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
                  {row.buildings.map((b) => (
                    <span key={b} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{b}</span>
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
          Go-Go Town! is a cozy game with no time pressure — build what you enjoy. These rankings reflect
          economic efficiency for the 1.0 launch build: infrastructure that unlocks the workforce and
          logistics is almost always the best investment early, while landmarks and large shops pay off
          once your supply chains can keep them stocked.
        </p>
      </div>
    </div>
  );
}
