import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activity Priorities — Pre-Release Overview',
  description: 'Welcome to Elderfield activity priorities — which core systems (farming, fishing, combat, mysteries, relationships) to focus on in the demo and at launch, based on official descriptions and demo community reports.',
};

// Welcome to Elderfield has no classes or weapons ladder, so a numeric
// tier list would be fabricated. This pre-release page ranks the ACTIVITIES
// players invest time in, based on official store descriptions and verified
// demo community reports. A data-backed ranking will follow launch.
const ACTIVITY_PRIORITIES = [
  { tier: 'S', items: ['Farming & Livestock'], note: 'The confirmed core loop — cultivate land, harvest crops (including unsettling ones like teeth and eyeballs), manage otherworldly livestock, and stop unruly tentacles. Farming feeds every other system: food for rest, resources for crafting, and income.' },
  { tier: 'S', items: ['Fishing'], note: 'A verified demo activity with a real gated unlock (the fishing rod is found at the lake, reached through the sewer via the playground manhole). Fish are a reliable food and income source.' },
  { tier: 'A', items: ['Mining & Foraging'], note: 'Official store description confirms mining and foraging build resources. They feed crafting and cooking, and are the second income pillar after crops.' },
  { tier: 'A', items: ['Combat & Old God Prep'], note: 'Turn-based AP combat is core to Challenge Mode. In the demo, cutting grass or breaking rocks can trigger fights, and battles can be fled — learning when to fight matters.' },
  { tier: 'A', items: ['Mystery Investigation'], note: 'The demo contains 7 "mysteries" (investigation points) — 5 in the mall, 1 in the sewer, 1 in Dave\'s house. Community-verified locations make this an approachable side-goal.' },
  { tier: 'B', items: ['Relationships (Friendship)'], note: 'Befriending the townsfolk is confirmed. Romance and marriage are planned but not yet implemented, per the developer [Unconfirmed] — treat relationship content as friendship-focused until launch.' },
  { tier: 'C', items: ['Home & Character Customization'], note: 'Customization is confirmed on the store page, but its depth is not yet documented. A background system rather than a progression driver pre-release.' },
];

const DEMO_PRIORITIES = [
  { tier: 'Best', items: ['Complete the mall dungeon', 'Grab the fishing rod'], note: 'The demo\'s first dungeon is the local mall, and the fishing rod unlocks the lake. Both are confirmed demo content with community-documented paths.' },
  { tier: 'Good', items: ['Investigate the 7 mysteries', 'Stock food for rest'], note: '7 mysteries are community-verified; solving any TV mystery after finding the others completes the 7-mystery quest. Stocking food makes the rest/sleep economy smoother.' },
  { tier: 'Situational', items: ['Test combat in Challenge Mode'], note: 'If you plan to play Challenge Mode at launch, the demo is your only hands-on chance to learn the AP-based combat loop before September 10.' },
];

const COZY_VS_CHALLENGE = [
  { tier: 'Cozy', items: ['Farming', 'Fishing', 'Discovery'], note: 'Pick Cozy Mode for a relaxed life of harvest and discovery, per the official store description. Combat pressure is reduced and the farming loop takes center stage.' },
  { tier: 'Challenge', items: ['Resource Management', 'Turn-Based Combat', 'Old Gods'], note: 'Challenge Mode is described as testing your skills and resource building with in-depth turn-based combat — "the Old Gods are waiting." Prioritize combat prep and stockpiles.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Activity Priorities</h1>
      <p className="text-gray-400 mb-2">Welcome to Elderfield core-activity priorities — pre-release overview (August 30, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Pre-release — data-backed ranking after 9/10 launch</div>

      {[{ title: 'What to Prioritize (All Playstyles)', tiers: ACTIVITY_PRIORITIES }, { title: 'Demo Priorities (Playable Now)', tiers: DEMO_PRIORITIES }, { title: 'Cozy Mode vs Challenge Mode', tiers: COZY_VS_CHALLENGE }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.items.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Situational' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.items.map((w) => (
                    <span key={w} className="text-sm font-medium text-white bg-[#111d14] px-3 py-1 rounded border border-[#1f3024]">{w}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#111d14] border border-[#1f3024] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">Why This Is a Pre-Release Page</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Welcome to Elderfield launches September 10, 2026, and a numeric tier list of crops, fish, or equipment
          would be speculation. This page instead ranks the <em>activities</em> you invest time in, based on the
          official Steam store description, the free demo, and community-verified demo reports. We will publish a
          data-backed ranking after launch. Check the <a href="/guides/farming-economy-guide" className="text-amber-400 hover:underline">Farming &amp; Resources Guide</a> and{' '}
          <a href="/guides/combat-guide" className="text-amber-400 hover:underline">Combat Guide</a> for what is confirmed.
        </p>
      </div>
    </div>
  );
}
