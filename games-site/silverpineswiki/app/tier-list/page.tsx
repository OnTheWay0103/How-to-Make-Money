import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Silver Pines Survival Priorities — Pre-Release Overview',
  description:
    'Silver Pines priorities before launch — which habits and resources (save coins, tape, ammunition, stamina, map notes) deserve your attention first, plus a confirmed-vs-unconfirmed systems table and a source column for every entry.',
};

// Silver Pines has no published weapon ladder, enemy roster or upgrade tree,
// so a numeric tier list of "best weapon / best build" would be fabricated.
// This pre-release page instead ranks the SURVIVAL PRIORITIES inside the
// resource loop, using the official Steam store page and Steam store data as
// the evidence base, with community-reported mechanics labelled as such.
// A data-backed ranking follows the October 8, 2026 launch.

const PRIORITIES = [
  {
    tier: 'S',
    items: ['Save Coins', 'Reaching a Phone Booth'],
    note:
      'Coins are the only thing standing between you and a lost hour of progress. There is no autosave, and phone booths are the only save points — so a coin in your pocket is worth more than a healing item you have not needed yet. Bank progress before you push into new ground, not after.',
  },
  {
    tier: 'S',
    items: ['Ammunition', 'Tape for Repairs'],
    note:
      'Two consumables govern whether a fight is winnable. Ammunition is scarce and reloading is a slow, manual, exposed action; melee weapons degrade and are restored with tape. Running out of either mid-fight is the most common way a Silver Pines encounter turns fatal.',
  },
  {
    tier: 'A',
    items: ['Stamina Management'],
    note:
      'Dodging and melee swings both draw on a short stamina bar that running does not touch. An empty bar means no dodge, and no dodge in a horror game means damage. Fight in short bursts and disengage before you are empty.',
  },
  {
    tier: 'A',
    items: ['Inventory Space', 'Storage Containers'],
    note:
      'The grid is small and the official store description is blunt about it: every bullet, bottle of medicine and upgrade matters. Storage containers in key areas let you swap your loadout, which turns "what do I own" into "what am I carrying on this trip".',
  },
  {
    tier: 'A',
    items: ['Mementos'],
    note:
      'Collectible buffs for Walker’s abilities rather than puzzle keys — community reports cite faster reloading and better health recovery. They are permanent improvements, so they compound across the whole run.',
  },
  {
    tier: 'B',
    items: ['Map Notes & Backtracking Discipline'],
    note:
      'Silver Pines is a metroidvania: locked doors and hidden paths open up as your tools improve. Mark the doors you cannot open yet instead of re-walking the town to remember them, and look for one-way shortcuts before retracing a long route.',
  },
  {
    tier: 'B',
    items: ['Choosing Fight or Flight'],
    note:
      'Leaving an enemy alive saves ammunition now and costs you later, because the area is still dangerous when you come back. Deciding per encounter — rather than by default — is what separates a comfortable run from a starving one.',
  },
  {
    tier: 'C',
    items: ['Puzzle Item Hoarding'],
    note:
      'Keys, cards and odd items solve the town’s puzzles — power breakers, carnival machines, locked gates. They are not a resource competition, but carrying one you have not identified yet costs grid space you may want for tape.',
  },
];

const SYSTEMS_STATUS = [
  {
    system: 'Developer Wych Elm / publisher Team17',
    status: 'Confirmed',
    source: 'Steam store data, App ID 2333000',
  },
  {
    system: 'Release date October 8, 2026',
    status: 'Confirmed',
    source: 'Steam store data — coming soon flag still set on 2026-09-16',
  },
  {
    system: 'PC, PS5, Xbox Series X|S, Switch, Switch 2',
    status: 'Confirmed',
    source: 'Steam platform data plus publisher announcements',
  },
  {
    system: 'Windows-only on Steam (no macOS, no Linux)',
    status: 'Confirmed',
    source: 'Steam platform data',
  },
  {
    system: 'Free standalone demo (App ID 4540100)',
    status: 'Confirmed',
    source: 'Steam store data — demo live since 2026-06-01',
  },
  {
    system: 'Single-player only — no co-op or multiplayer',
    status: 'Confirmed',
    source: 'Steam store categories',
  },
  {
    system: 'Full controller support, DualShock, DualSense',
    status: 'Confirmed',
    source: 'Steam store categories',
  },
  {
    system: 'Steam Achievements, Steam Cloud, Family Sharing',
    status: 'Confirmed (list unpublished)',
    source: 'Steam store categories — achievement names [Unconfirmed]',
  },
  {
    system: 'Limited inventory, scarce resources',
    status: 'Confirmed',
    source: 'Official Steam store description',
  },
  {
    system: 'Locked doors, hidden paths, tool-gated progression',
    status: 'Confirmed',
    source: 'Official Steam store description',
  },
  {
    system: 'Multiple endings reachable on one save file',
    status: 'Confirmed',
    source: 'Game8 interview with developer Mattias Snygg',
  },
  {
    system: 'Blood, violence, horror themes (mature descriptor)',
    status: 'Confirmed',
    source: 'Steam content descriptors',
  },
  {
    system: 'Price',
    status: '[Unconfirmed]',
    source: 'No price_overview on Steam as of 2026-09-16',
  },
  {
    system: 'No autosave; phone booths are the only save points',
    status: 'Community-reported',
    source: 'Demo player reports and preview coverage — not stated on the store page',
  },
  {
    system: 'Save coins shared between saving and vending machines',
    status: 'Community-reported',
    source: 'Demo player reports and preview coverage',
  },
  {
    system: 'Storage containers for item swapping in key areas',
    status: 'Community-reported',
    source: 'Preview coverage',
  },
  {
    system: 'Melee durability with tape-based repair',
    status: 'Community-reported',
    source: 'Preview coverage and demo player reports',
  },
  {
    system: 'Manual round-by-round reloading',
    status: 'Community-reported',
    source: 'Preview coverage and demo player reports',
  },
  {
    system: 'Stamina spent on dodging and melee swings only',
    status: 'Community-reported',
    source: 'Preview coverage and demo player reports',
  },
  {
    system: 'Mementos as ability buffs',
    status: 'Community-reported',
    source: 'Preview coverage — full list [Unconfirmed]',
  },
  {
    system: 'Inventory capacity upgrades',
    status: '[Unconfirmed]',
    source: 'Widely reported by demo players; no official source names the item',
  },
  {
    system: 'Exact coin prices, damage values, enemy HP',
    status: '[Unconfirmed]',
    source: 'No official source has published any of these figures',
  },
  {
    system: 'Achievement list, physical edition, Game Pass',
    status: 'Not announced',
    source: 'No announcement from Wych Elm or Team17 as of 2026-09-16',
  },
];

// The evidence ledger for the demo — the one hard demand signal that exists
// before launch. Kept in a table because it is the number people cite.
const EVIDENCE = [
  {
    metric: 'Demo user reviews',
    value: '802',
    source: 'Steam appreviews API for App ID 4540100 (2026-09-16)',
  },
  {
    metric: 'Demo positive share',
    value: '95.9% (769 positive / 33 negative)',
    source: 'Steam appreviews API (2026-09-16)',
  },
  {
    metric: 'Demo rating band',
    value: 'Overwhelmingly Positive',
    source: 'Steam rating band as displayed on the demo store page',
  },
  {
    metric: 'Demo release date',
    value: 'June 1, 2026',
    source: 'Steam store data',
  },
  {
    metric: 'Steam followers',
    value: '13,200',
    source: 'Third-party tracker (datahumble.com) [Unverified — not an official figure]',
  },
  {
    metric: 'Wishlists',
    value:
      '“200K+ across all platforms” (official, 2026-06-19) vs ~83K Steam-only (third-party estimate)',
    source:
      'Official Steam news post vs Raijin estimate — two different scopes, not comparable',
  },
  {
    metric: 'Main game user reviews',
    value: '0',
    source: 'Steam appreviews API — the game has not launched',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Silver Pines Survival Priorities
      </h1>
      <p className="text-gray-400 mb-2">
        What to spend your attention on — pre-release overview (September 16,
        2026).
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-teal-900/30 text-teal-400 border border-teal-800/50 mb-8">
        Pre-release — data-backed ranking after the 10/8 launch
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          What to Prioritize (All Playstyles)
        </h2>
        {PRIORITIES.map((row) => (
          <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-3 items-start">
            <span
              className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S'
                  ? 'bg-teal-500/20 text-teal-400'
                  : row.tier === 'A'
                    ? 'bg-green-500/20 text-green-400'
                    : row.tier === 'B'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
              }`}
            >
              {row.tier}
            </span>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {row.items.map((w) => (
                  <span key={w} className="text-sm font-medium text-white bg-[#0f1c21] px-3 py-1 rounded border border-[#1c3038]">
                    {w}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{row.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          Confirmed vs Unconfirmed Systems
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Silver Pines launches October 8, 2026, and the demo has been playable
          since June. That means some systems are firmly documented and others
          circulate only as player reports. This table records which is which,
          with the source for every entry — so you can tell a confirmed
          mechanic from pre-release folklore.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  System
                </th>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  Status
                </th>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {SYSTEMS_STATUS.map((row) => (
                <tr key={row.system}>
                  <td className="text-gray-300 px-3 py-2 border border-[#1c3038] align-top">
                    {row.system}
                  </td>
                  <td
                    className={`px-3 py-2 border border-[#1c3038] align-top whitespace-nowrap ${
                      row.status === 'Confirmed' || row.status.startsWith('Confirmed')
                        ? 'text-green-400'
                        : row.status === 'Not announced'
                          ? 'text-gray-400'
                          : row.status === 'Community-reported'
                            ? 'text-amber-400'
                            : 'text-teal-400'
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className="text-gray-500 px-3 py-2 border border-[#1c3038] align-top text-xs">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">
          The Demo Evidence Ledger
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          With the game unreleased, the demo is the only hard demand signal
          that exists. These are the numbers behind the “worth your time”
          judgement — separated by source, because the wishlist figures in
          circulation use two different scopes and must not be mixed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  Metric
                </th>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  Value
                </th>
                <th className="text-left text-white bg-[#0f1c21] px-3 py-2 border border-[#1c3038]">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {EVIDENCE.map((row) => (
                <tr key={row.metric}>
                  <td className="text-white px-3 py-2 border border-[#1c3038] align-top font-medium">
                    {row.metric}
                  </td>
                  <td className="text-gray-300 px-3 py-2 border border-[#1c3038] align-top">
                    {row.value}
                  </td>
                  <td className="text-gray-500 px-3 py-2 border border-[#1c3038] align-top text-xs">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-[#0f1c21] border border-[#1c3038] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">
          Why This Is a Pre-Release Page
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Silver Pines launches October 8, 2026, so a tier list of weapons,
          enemies or Mementos would be speculation dressed up as data — the
          vendor has published no weapon names, no damage values and no
          upgrade tree. This page instead ranks the <em>survival priorities</em>{' '}
          inside the resource loop, using the official Steam store page and
          Steam store data, and labels anything that comes from players rather
          than the developer. A data-backed ranking will follow launch. For the
          mechanics themselves, start with the{' '}
          <a href="/guides/silver-pines-save-system-phone-booths" className="text-teal-400 hover:underline">
            save system guide
          </a>{' '}
          and check{' '}
          <a href="/guides/silver-pines-release-date-price-platforms" className="text-teal-400 hover:underline">
            what is actually confirmed for release
          </a>
          .
        </p>
      </div>
    </div>
  );
}
