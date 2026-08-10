import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upgrade & License Priority Guide',
  description: 'ReStory: Chill Electronics Repairs upgrade and license priority rankings — which tools to buy first (screwdriver, brush, tip jar), which licenses to prioritize, and device complexity tiers.',
};

// All upgrade priorities verified from launch-build guides (August 6, 2026).
// Device complexity observations are community-reported from the launch build.
const UPGRADE_TIERS = [
  { tier: 'S', weapons: ['Licenses'], note: 'The real progression system — licenses unlock new device types, higher-paying jobs and story beats. Buy them before luxury upgrades; a customer with an unlicensed device stalls your shop.' },
  { tier: 'S', weapons: ['Screwdriver upgrades'], note: 'Nearly every repair begins and ends with screws. The professional screwdriver (11,000 Yen) is a milestone purchase with its own achievement ("Twist and Turn").' },
  { tier: 'A', weapons: ['Brush upgrades'], note: 'Manual cleaning appears in almost every job, and brush upgrades are inexpensive. High frequency = high value.' },
  { tier: 'A', weapons: ['Tip jar'], note: 'Generates extra income from work you were already doing. Walk-in and online customers leave tips automatically.' },
  { tier: 'B', weapons: ['Shredder (cheapest model)'], note: 'Shredding unusable broken parts returns yen, and buying the cheapest model unlocks the "Shredder" achievement. Buy it once you accumulate junk parts.' },
  { tier: 'B', weapons: ['Storage trays & shelves'], note: 'More open projects at once and organized spare-part inventory saves serious time once the shop gets busy.' },
  { tier: 'C', weapons: ['Sonic Bath (ultrasonic)'], note: 'Convenience purchase — cleans up to 3 parts in ~30 seconds. Slower than hand-brushing small parts early on, but useful upgraded or run while working another device. Cheapest model earns "Hands Free".' },
  { tier: 'C', weapons: ['Canned air (consumable)'], note: 'Keep it for large shells, panels and awkward pieces; let the upgraded brush handle routine cleaning.' },
  { tier: 'D', weapons: ['Painting / airbrush & reprogramming tools'], note: 'Both are cosmetic/creative early on — painting does not add resale value and reprogramming does not noticeably raise a device\'s worth. Skip until late game.' },
];

const DEVICE_COMPLEXITY = [
  { tier: 'Hard', weapons: ['Nony Goman (cassette player)'], note: 'Packs a lot of small moving parts — one of the most involved jobs in the launch catalog. Plan extra time and organize parts carefully.' },
  { tier: 'Medium', weapons: ['Atari 2600 / Lynx / CX40', 'Pokia phones & flip phones', 'Palaloid instant camera'], note: 'Consoles combine casing work with board cleaning and occasional soldering; phones lean on tiny circuit boards and keypad work.' },
  { tier: 'Easy', weapons: ['Walkie-talkie', 'Unicorp 99L flashlight', 'Eggotchi virtual pet'], note: 'Simple internals and few moving parts — ideal early-game jobs and quick profit when cleaned before replacing.' },
];

const LICENSE_PRIORITY = [
  { tier: 'First', weapons: ['Your first license (any)'], note: 'Unlocks the license system itself, new device types and the "Official Partner" achievement. Community reports suggest prioritizing the category licenses that appear most often in your order queue.' },
  { tier: 'High', weapons: ['Phone & pager licenses', 'Console licenses'], note: 'Phones (Pokia 3310, Autorolla Razor, Eggotchi) and consoles appear frequently in both walk-ins and online orders — the fastest way to grow daily income.' },
  { tier: 'Competition', weapons: ['The un-buyable license'], note: 'One license cannot be purchased at all — it must be won in the device assembly (repair master) competition that appears later in the campaign. Win it to complete your collection and the "Platinum Partner" achievement.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Upgrade & License Priority Guide</h1>
      <p className="text-gray-400 mb-2">ReStory: Chill Electronics Repairs priority rankings — launch build (August 6, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch build — verified August 2026</div>

      {[{ title: 'Best Upgrades to Buy First', tiers: UPGRADE_TIERS }, { title: 'License Buying Priority', tiers: LICENSE_PRIORITY }, { title: 'Device Complexity Tiers', tiers: DEVICE_COMPLEXITY }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.weapons.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'First' || row.tier === 'Hard' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'High' || row.tier === 'Medium' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Competition' || row.tier === 'Easy' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.weapons.map((w) => (
                    <span key={w} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on These Rankings</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          ReStory has no combat, so this page ranks what actually matters: what to spend your yen on.
          The upgrade order (licenses → screwdriver → brush → tip jar) is confirmed by multiple launch-week
          guides. Device complexity and license priority are community observations from the launch build and
          may shift as the catalog expands through updates — exact license counts and prices are still being
          mapped (unverified).
        </p>
      </div>
    </div>
  );
}
