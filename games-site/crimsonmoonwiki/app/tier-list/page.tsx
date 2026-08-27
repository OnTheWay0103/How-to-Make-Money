import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Pillars Tier List — Pre-Release Overview',
  description: 'Crimson Moon build system priorities — how Equipment, Boons, and Weapon Arts combine in the classless build system, with a pre-release overview of what to focus on at launch.',
};

// Crimson Moon has no classes. A verified weapon/boon tier list will be published
// after the Sept 1, 2026 launch. This pre-release page ranks the BUILD PILLARS
// players choose between, based on the official Builds overview trailer + previews.
const PILLAR_PRIORITIES = [
  { tier: 'S', pillars: ['Weapon Arts'], note: 'The official Builds trailer emphasized Weapon Arts as the combat centerpiece — especially coordinating them with your co-op partner. If combat identity matters to you, this is the pillar to learn first.' },
  { tier: 'A', pillars: ['Equipment & Sets'], note: 'Gear defines your stats and set bonuses. Purifying the right pieces from Incursions is the long-term power source — what you keep permanently shapes every run after.' },
  { tier: 'A', pillars: ['Boons'], note: 'Run-scoped boons give temporary power during an Incursion. Previewers described them as build-defining within a run, though some felt certain affixes leaned on numeric stacking.' },
  { tier: 'B', pillars: ['Angel Form / Nephilim Transformation'], note: 'IGN\'s preview highlighted a powerful angel-form transformation. Treat it as a cooldown-style force multiplier while exact mechanics are confirmed at launch.' },
  { tier: 'C', pillars: ['Hub Upgrades (Sanctus Clypeus)'], note: 'Forging, manuscript translation, and War Table quests feed your account-wide progression — important, but a background system rather than a combat choice.' },
];

const SOLO_PRIORITIES = [
  { tier: 'Best', pillars: ['Purified Gear', 'Weapon Arts'], note: 'Solo players should prioritize a reliable purified loadout and one or two Weapon Arts that cover gaps — self-sustain and crowd control matter most alone.' },
  { tier: 'Good', pillars: ['Boons with survivability'], note: 'Without a partner to revive you, survivability boons and defensive affixes carry more weight in solo runs.' },
  { tier: 'Situational', pillars: ['Angel Form'], note: 'A strong emergency button solo — save the transformation for the deadliest encounters.' },
];

const COOP_PRIORITIES = [
  { tier: 'Best', pillars: ['Weapon Arts coordination', 'Shared Life Pool awareness'], note: 'The devs emphasized coordinating Weapon Arts between partners. Plan combos that chain crowd control into burst damage.' },
  { tier: 'Good', pillars: ['Complementary Boons'], note: 'One player leaning defensive/sustain while the other stacks damage divides roles without needing classes.' },
  { tier: 'Situational', pillars: ['Set bonuses', 'Angel Form'], note: 'Coordinate transformation windows so both partners are not stuck on cooldown at the same time.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Build Pillars Tier List</h1>
      <p className="text-gray-400 mb-2">Crimson Moon build system priorities — pre-release overview (August 28, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-release — verified tier list after 9/1 launch</div>

      {[{ title: 'What to Prioritize (All Playstyles)', tiers: PILLAR_PRIORITIES }, { title: 'Solo Play Priorities', tiers: SOLO_PRIORITIES }, { title: 'Co-op Play Priorities', tiers: COOP_PRIORITIES }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.pillars.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Situational' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.pillars.map((w) => (
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
        <h3 className="text-white font-semibold mb-2">Why This Is a Pre-Release Page</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Crimson Moon launches September 1, 2026, and specific weapon, Boon, and Weapon Arts stats have not been
          published. A numeric tier list published now would be speculation. This page instead ranks the build
          <em> pillars</em> you choose between, based on the official Builds overview trailer and hands-on previews.
          We will publish a data-backed tier list after launch. Check the <a href="/guides/builds-guide" className="text-amber-400 hover:underline">Builds Guide</a> and{' '}
          <a href="/guides/weapon-arts-guide" className="text-amber-400 hover:underline">Weapon Arts Guide</a> for what is confirmed.
        </p>
      </div>
    </div>
  );
}
