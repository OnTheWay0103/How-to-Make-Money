import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shell Tier List',
  description: 'IRON NEST shell tier list — HE, high-capacity HE, armor-piercing, S.T.A.R., smoke, phosgene and tear gas ranked by combat usefulness, plus the best shell for every target type.',
};

// IRON NEST shell rankings by general combat usefulness, based on
// the launch build (August 6, 2026), the demo, and community guides.
const SHELL_TIERS = [
  { tier: 'S', tools: ['HE (High Explosive)'], note: 'The workhorse shell. Cheap at 3 requisition credits, reliable against infantry, artillery batteries, mechanized columns and civil riots — and it is what most mission orders will call for. Master HE before anything else.' },
  { tier: 'A', tools: ['AP (Armor Piercing)'], note: 'The surgical option for bunkers, armored vehicles and hardened underground targets that HE splashes off of. Small blast radius means it is safe near friendlies, but it needs a precise firing solution.' },
  { tier: 'A', tools: ['HCHE (High Capacity HE)'], note: 'More than double HE\'s blast radius (0.63 km vs 0.27 km) for 5 credits. Devastating against clustered targets — just be very sure no friendlies are in the area before you fire it.' },
  { tier: 'B', tools: ['PHOSGENE Gas'], note: 'Toxic gas that kills infantry while leaving infrastructure intact — ideal when you need the ground afterwards. Currently only requested in specific mission types.' },
  { tier: 'B', tools: ['SMOKE'], note: 'Creates a smokescreen covering a large area (1.86 km radius). Useful for screening your own position or planned withdrawals, though its practical use cases are limited at launch.' },
  { tier: 'C', tools: ['S.T.A.R. Illumination'], note: 'A non-combat flare shell that illuminates a huge area (12.74 km) for recon. Powerful for confirming targets at night or in fog — just remember it is a tool, not a weapon.' },
  { tier: 'C', tools: ['TEAR GAS'], note: 'Non-lethal crowd dispersal. Thematically perfect for the civil-war setting, but of little use in standard military engagements — you are rarely ordered to disperse riots.' },
];

const TARGET_TIERS = [
  { tier: 'Infantry', tools: ['HE', 'HCHE (clusters)', 'Phosgene'], note: 'HE kills infantry outright and is cheapest per kill; HCHE handles packed formations; phosgene removes infantry without destroying the ground you need to hold.' },
  { tier: 'Artillery Batteries', tools: ['HE', 'HCHE'], note: 'Counter-battery work is a race — fire HE for speed and reliability, HCHE when batteries are clustered. Mark all enemy artillery positions BEFORE your first shot, since the counter-battery timer starts immediately.' },
  { tier: 'Bunkers & Armored', tools: ['AP'], note: 'Armor-piercing is the only shell that reliably penetrates bunkers, armored vehicles and hardened targets. Budget for AP when the orders mention fortifications.' },
  { tier: 'Mechanized Columns', tools: ['HE', 'AP (lead vehicles)'], note: 'HE blasts tracks and unarmored support vehicles; AP can mission-kill the armored vanguard and stop the column cold.' },
  { tier: 'Recon & Spotters', tools: ['HE (smallest charge)'], note: 'Recon units are soft targets — a well-placed HE shot with minimal powder does the job. Save expensive shells for what they are meant for.' },
];

const BEGINNER_TIERS = [
  { tier: 'First Buy', tools: ['HE', 'Powder Charges'], note: 'Spend your starting requisition credits on HE shells and powder charges — shells are useless without the charges that launch them. Never leave the depot without powder.' },
  { tier: 'Second Buy', tools: ['AP'], note: 'Once you can reliably range infantry and batteries, carry AP for the bunker and armored missions that will inevitably come.' },
  { tier: 'Situational', tools: ['HCHE', 'SMOKE', 'S.T.A.R.', 'Phosgene'], note: 'Buy when the orders call for them. HCHE for cluster targets, S.T.A.R. for night recon, smoke for screening, phosgene for gas missions.' },
  { tier: 'Skip Early', tools: ['TEAR GAS'], note: 'With no riot-dispersal missions in the standard campaign flow, tear gas is a curiosity early on. Revisit it in challenge modes.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Shell Tier List</h1>
      <p className="text-gray-400 mb-2">The best ammunition in IRON NEST — ranked by general combat usefulness, by target type, and by beginner purchase priority. Based on the launch build (August 6, 2026), the demo, and community guides.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch day — will be refined as the community plays</div>

      {[{ title: 'Overall Rankings', tiers: SHELL_TIERS }, { title: 'Best Shell by Target Type', tiers: TARGET_TIERS }, { title: 'Beginner Purchase Priority', tiers: BEGINNER_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.tools.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'First Buy' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Second Buy' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Situational' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.tools.map((t) => (
                    <span key={t} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{t}</span>
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
          IRON NEST is not a game where one shell beats everything — every shot is mission-driven, and High Command often dictates ordnance.
          HE ranks high because it is cheap, reliable and useful in most engagements. The real "build" is your requisition strategy:
          which shells and upgrades you keep in stock. The 30 advertised ammo types and abilities will likely reshape this list as
          the community unlocks them — check back as we verify each one.
        </p>
      </div>
    </div>
  );
}
