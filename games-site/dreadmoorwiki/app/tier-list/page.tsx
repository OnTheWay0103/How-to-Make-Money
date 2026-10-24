import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upgrade Priority — What to Build First',
  description:
    'DREADMOOR upgrade priority for the trawler — an editorial ranking of engine, hull protection, fish hold, bait tools, grapple gun, propeller, searchlight, and afterburner based on the demo and official Early Access feature list.',
};

// Editorial priority for the demo / Early Access launch. Not a datamined
// power ranking: DREADMOOR has no classes or weapon tiers to rank.
const PRIORITY_TIERS = [
  {
    tier: 'S',
    items: ['Upgraded Engine'],
    note: 'The single biggest quality-of-life upgrade. The demo raises top speed from 2 kn to 4 kn, which halves travel time to Angler’s Island and The Throat. It also makes cargo runs and night crossings shorter, which indirectly reduces risk.',
  },
  {
    tier: 'S',
    items: ['Hull Protection'],
    note: 'Protection 2 at a cost of 1 kn of speed in the demo. Fewer hull repairs means fewer return trips and less material spent on Bug Slime and salvage. If you are constantly repairing after crossings, take this before anything cosmetic.',
  },
  {
    tier: 'A',
    items: ['Fish Hold capacity', 'Bait recipes (Wind-Up Tin, Rainbow Fin)'],
    note: 'Hold space is money. The official feature list notes that some fish coexist and carnivorous fish can eat others, reducing profits. Bait recipes unlock the peaceful and predatory fishing lanes, which feed both contracts and crafting materials.',
  },
  {
    tier: 'A',
    items: ['Rod upgrades'],
    note: 'Official material confirms rod progression. The demo’s Simple Rod is enough for every required catch, so a rod upgrade is an efficiency purchase rather than a gate. Buy it when fights are lasting too long, not before you can afford bait materials.',
  },
  {
    tier: 'B',
    items: ['Grapple Gun upgrade', 'Propeller'],
    note: 'The grapple gun’s default reeling speed is slow, and its upgrade is a convenience upgrade for salvage and bug collection. Propeller upgrades are confirmed for Early Access but no demo stats have been published, so we rank them by expected handling benefit rather than measured speed.',
  },
  {
    tier: 'B',
    items: ['Searchlight'],
    note: 'Listed among the Early Access boat upgrades. Night sailing is explicitly dangerous, and visibility is the obvious benefit, but the demo does not include a searchlight upgrade path. Treat this as a plausible night-travel pick, not a proven one.',
  },
  {
    tier: 'C',
    items: ['Afterburner', 'Cosmetic and comfort upgrades'],
    note: 'Afterburner research appears as optional equipment. A speed burst is useful for escaping trouble, but the demo provides no cooldown, fuel cost, or duration numbers, so we cannot justify ranking it above permanent hull or engine upgrades.',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">DREADMOOR Upgrade Priority</h1>
      <p className="text-gray-400 mb-2">
        What to build first on the trawler — an editorial priority list, not a power ranking.
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 mb-8">
        Editorial judgment — Updated Oct 24, 2026. Based on the October 2026 demo and the official Early Access feature list. Numbers may change before November 9.
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">How to Read This List</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          DREADMOOR has no character classes and no datamined weapon tiers, so a conventional “S-tier build” page would be invented.
          This list ranks <strong className="text-gray-200">upgrade priorities</strong> by how much each one improves your ability to
          earn, travel, and survive in the early game. It is our editorial judgment, informed by the demo’s actual costs and the
          upgrade categories confirmed for Early Access. Where a stat has not been published, we say so.
        </p>

        {PRIORITY_TIERS.map((row) => (
          <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-4 items-start">
            <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
              row.tier === 'S' ? 'bg-cyan-500/20 text-cyan-400' :
              row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
              row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
            }`}>{row.tier}</span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((m) => (
                  <span key={m} className="text-sm font-medium text-white bg-[#0e1b20] px-3 py-1 rounded border border-[#1d3038]">{m}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why the Engine Comes First</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          The demo’s economy is built around round trips. You leave the Trading Post, sail to a fishing ground or island, collect
          materials, and sail back to process or deliver them. Doubling boat speed from 2 kn to 4 kn cuts the boring part of every
          one of those trips in half. It also shortens the exposure window on night crossings, which the game explicitly warns about.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          The catch is the prerequisite chain: the Upgraded Engine needs a Carburetor, and the Carburetor is not a quest reward you
          automatically receive. In the demo you complete a three-Harpooner delivery and then still have to buy the Carburetor
          separately for 50. Plan for that purchase instead of spending the same money on bait materials.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">When Hull Protection Is Worth the Speed Penalty</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          Hull Protection is the clearest tradeoff in the demo: Protection 2 for Boat Speed −1. On a route you know and a boat you
          keep out of trouble, the slower speed is annoying. On a new route, at night, or while learning where the shallow obstacles
          are, the extra protection pays for itself by avoiding a repair detour.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Our recommendation is to install it before your first trip to The Throat and keep it for exploration. If you are purely
          farming a short, safe route for materials, the engine alone is faster.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What Not to Rush</h2>
        <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
          <li><strong className="text-gray-200">A better rod:</strong> the Simple Rod handles every required demo catch. Upgrade when fights drag, not because a shop lists it.</li>
          <li><strong className="text-gray-200">Afterburner:</strong> a burst of speed is situational, and no fuel cost or cooldown has been published.</li>
          <li><strong className="text-gray-200">Cosmetic storage:</strong> every material spent on comfort is a material not spent on the engine chain.</li>
        </ul>
      </section>

      <div className="bg-[#0e1b20] border border-[#1d3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Update Log</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          October 24, 2026 — initial editorial list based on the demo build and the official Early Access feature list. We will
          revise it after November 9 once Early Access players can measure the full upgrade tree. If you find a published stat we
          missed, <a href="/contact" className="text-amber-400 hover:underline">send it in</a>.
        </p>
      </div>
    </div>
  );
}
