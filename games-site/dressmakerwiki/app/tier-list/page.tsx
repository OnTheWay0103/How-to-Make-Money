import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dressmaker Activity Priorities — Pre-Release Overview',
  description:
    'Dressmaker priorities before launch — which parts of the dressmaking loop (fabric choice, pattern cutting, sewing, decoration, customer orders) deserve your attention first, plus a confirmed-vs-unconfirmed systems table and the official five-fabric reference.',
};

// Dressmaker has no classes, characters or weapon ladder, so a numeric tier
// list of "best X" would be fabricated. This pre-release page instead ranks
// the ACTIVITIES inside the dressmaking loop, using only the official Steam
// store description and Steam store data as evidence. A data-backed ranking
// will follow the September 21, 2026 launch.

const ACTIVITY_PRIORITIES = [
  {
    tier: 'S',
    items: ['Fabric Choice', 'Pattern Layout & Cutting'],
    note:
      'The official description puts this at the centre of the game: “whether your pattern is aligned to the grain or cut on bias, how you choose to arrange and cut out your fabric is what appears on the final dress.” Fabric and cutting decisions are upstream of everything else — a garment cannot be rescued at the sewing machine.',
  },
  {
    tier: 'S',
    items: ['Sewing the Panels'],
    note:
      '“Feed your fabric through the sewing machine to stitch it together” is the step that turns your cut panels into a garment. It is the one action every single order passes through, so time spent here compounds.',
  },
  {
    tier: 'A',
    items: ['Decoration', 'Customer Orders'],
    note:
      'Decoration is where a correct dress becomes a personal one — buttons, bows, appliqué, lace trims and accessories placed with “complete creative freedom”. Customer orders are the confirmed payout loop: turn dresses in to gain reputation and coin.',
  },
  {
    tier: 'A',
    items: ['Sketchbook Design'],
    note:
      'The sketchbook is where you design and colour a dress and attach fabric samples and appliqué before committing fabric to it. Cheap to iterate in, expensive to skip.',
  },
  {
    tier: 'B',
    items: ['Shop Window / Off-the-Rack Sales'],
    note:
      'The second confirmed income route: display your own designs in your shop window and sell pre-made dresses off the rack. It rewards having spare finished garments rather than reacting to whatever order arrives next.',
  },
  {
    tier: 'C',
    items: ['Buying & Stocking Fabric'],
    note:
      'You buy from a wide range of fabrics, so there is a resource decision here — but it is downstream of knowing what you intend to make. Stock deliberately once you know your next few orders.',
  },
  {
    tier: 'C',
    items: ['Petting the Kitty'],
    note:
      '“Pet the kitty” is the final line of the official store description. Zero mechanical weight, maximum morale. Listed here for completeness.',
  },
];

const SYSTEMS_STATUS = [
  {
    system: 'Five fabrics (cotton, linen, wool, silk, velvet)',
    status: 'Confirmed',
    source: 'Official Steam store description',
  },
  {
    system: 'Grain direction and bias cutting',
    status: 'Confirmed (named)',
    source:
      'Official store description — the exact effect on a quality score is [Unconfirmed]',
  },
  {
    system: 'Per-panel fabric selection',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Pattern arrangement and cutting',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Sewing machine stitching',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Decoration: buttons, bows, appliqué, lace trims',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Mannequin preview',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Sketchbook design with fabric samples',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Customer orders with individual tastes and events',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Reputation and coin rewards',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Shop window and off-the-rack sales',
    status: 'Confirmed',
    source: 'Official store description',
  },
  {
    system: 'Mouse-only play and no timed input',
    status: 'Confirmed',
    source: 'Steam store categories',
  },
  {
    system: 'Windows and macOS support',
    status: 'Confirmed',
    source: 'Steam store platform data',
  },
  {
    system: 'Steam achievements',
    status: 'Confirmed (list not published)',
    source: 'Steam store categories — achievement names are [Unconfirmed]',
  },
  {
    system: 'Townsperson names and individual preference tables',
    status: '[Unconfirmed]',
    source: 'Not published in any official source as of 2026-09-12',
  },
  {
    system: 'Reputation levels or numeric quality scores',
    status: '[Unconfirmed]',
    source: 'Not published in any official source as of 2026-09-12',
  },
  {
    system: 'Order deadlines or a town event calendar',
    status: '[Unconfirmed]',
    source: 'Not published in any official source as of 2026-09-12',
  },
  {
    system: 'Console, mobile or Linux versions',
    status: 'Not announced',
    source: 'Steam lists Windows and macOS only',
  },
];

// The five fabrics are officially confirmed by name on the Steam store page.
// The "real-world character" column describes the fibre in actual dressmaking,
// NOT in-game statistics — no in-game stat values have been published.
const FABRICS = [
  {
    fabric: 'Cotton',
    inGame: 'Confirmed name',
    realWorld: 'Breathable, easy to press, forgiving for beginners',
  },
  {
    fabric: 'Linen',
    inGame: 'Confirmed name',
    realWorld: 'Crisp and cool, creases readily, strong fibre',
  },
  {
    fabric: 'Wool',
    inGame: 'Confirmed name',
    realWorld: 'Warm, holds shape well, needs careful pressing',
  },
  {
    fabric: 'Silk',
    inGame: 'Confirmed name',
    realWorld: 'Fluid drape with a lustrous finish, slippery to cut',
  },
  {
    fabric: 'Velvet',
    inGame: 'Confirmed name',
    realWorld: 'Deep pile with directional nap — layout matters',
  },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Dressmaker Activity Priorities
      </h1>
      <p className="text-gray-400 mb-2">
        Which parts of the dressmaking loop to focus on — pre-release overview
        (September 12, 2026).
      </p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-rose-900/30 text-rose-400 border border-rose-800/50 mb-8">
        Pre-release — data-backed ranking after the 9/21 launch
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          What to Prioritize (All Playstyles)
        </h2>
        {ACTIVITY_PRIORITIES.map((row) => (
          <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-3 items-start">
            <span
              className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S'
                  ? 'bg-rose-500/20 text-rose-400'
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
                  <span key={w} className="text-sm font-medium text-white bg-[#1a1120] px-3 py-1 rounded border border-[#2c1b33]">
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
          Dressmaker launches September 21, 2026. This table records exactly
          what has an official source behind it and what does not — so you can
          tell the difference between a known system and pre-release
          speculation.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  System
                </th>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  Status
                </th>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {SYSTEMS_STATUS.map((row) => (
                <tr key={row.system}>
                  <td className="text-gray-300 px-3 py-2 border border-[#2c1b33] align-top">
                    {row.system}
                  </td>
                  <td
                    className={`px-3 py-2 border border-[#2c1b33] align-top whitespace-nowrap ${
                      row.status.startsWith('Confirmed')
                        ? 'text-green-400'
                        : row.status === 'Not announced'
                          ? 'text-gray-400'
                          : 'text-rose-400'
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className="text-gray-500 px-3 py-2 border border-[#2c1b33] align-top text-xs">
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
          The Official Five Fabrics
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          The Steam store description names exactly five fabrics. The
          &ldquo;real-world character&rdquo; column describes the fibre in
          actual dressmaking — <strong>not</strong> in-game statistics. No
          in-game fabric stats have been published [Unconfirmed].
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  Fabric
                </th>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  In-game status
                </th>
                <th className="text-left text-white bg-[#1a1120] px-3 py-2 border border-[#2c1b33]">
                  Real-world character
                </th>
              </tr>
            </thead>
            <tbody>
              {FABRICS.map((row) => (
                <tr key={row.fabric}>
                  <td className="text-white px-3 py-2 border border-[#2c1b33] align-top font-medium">
                    {row.fabric}
                  </td>
                  <td className="text-gray-300 px-3 py-2 border border-[#2c1b33] align-top">
                    {row.inGame}
                  </td>
                  <td className="text-gray-500 px-3 py-2 border border-[#2c1b33] align-top">
                    {row.realWorld}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-[#1a1120] border border-[#2c1b33] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">
          Why This Is a Pre-Release Page
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Dressmaker launches September 21, 2026, so a tier list of fabrics,
          customers or equipment would be speculation dressed up as data. This
          page instead ranks the <em>activities</em> inside the dressmaking
          loop using the official Steam store description and Steam store data
          — nothing else. A data-backed ranking will follow launch. For the
          mechanics themselves, start with the{' '}
          <a href="/guides/dressmaker-beginner-guide" className="text-rose-400 hover:underline">
            Beginner Guide
          </a>{' '}
          and check{' '}
          <a href="/guides/dressmaker-release-date-price-platforms" className="text-rose-400 hover:underline">
            what is actually confirmed for release
          </a>
          .
        </p>
      </div>
    </div>
  );
}
