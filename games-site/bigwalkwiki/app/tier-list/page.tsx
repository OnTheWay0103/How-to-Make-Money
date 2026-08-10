import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool Tier List',
  description: 'Big Walk tool tier list — walkie-talkie, binoculars, laser pointer, megaphone, flares and more ranked by co-op usefulness for communication and puzzles.',
};

// Big Walk has no combat — these tools are ranked by how much they help
// you communicate and solve puzzles with your group.
// Based on the launch build (August 4, 2026) and pre-release previews.
const TOOL_TIERS = [
  { tier: 'S', tools: ['Walkie-Talkie'], note: 'The communication workhorse. Voices crackle through it over long distances, letting separated groups coordinate across the island. Every squad should have one (or several).' },
  { tier: 'S', tools: ['Binoculars'], note: 'The island has no map menu — spotting landmarks and relaying directions is everything. Binoculars let the "spotter" read signs, symbols and paths for the rest of the group.' },
  { tier: 'A', tools: ['Laser Pointer'], note: 'Precision pointing. When describing a button, tile or symbol from a distance, a laser dot beats shouting. Essential for relay-style puzzles where groups are separated.' },
  { tier: 'A', tools: ['Flashlight'], note: 'Nights on the island get very dark, and some puzzle details are only readable with a light source. A flashlight keeps exploration moving when the sun goes down.' },
  { tier: 'B', tools: ['Megaphone'], note: 'Loud, clear audio projection over distance — great for outdoor coordination with big groups. Less useful indoors and in the tunnel network.' },
  { tier: 'B', tools: ['Flare'], note: 'A bright, visible signal across the island — useful for marking locations or regrouping at night. Limited use, so save them for when the group splits up.' },
  { tier: 'C', tools: ['Whiteboard'], note: 'For the players who like to write things down. Helpful for longer puzzle solutions, but situational — most groups prefer voice and pointing.' },
  { tier: 'C', tools: ['Cowbell & Golden Head'], note: 'Pure fun. The cowbell is for making noise and clowning around; the golden head is a mystery item worth experimenting with. Not essential, but half of Big Walk is the vibe.' },
];

const SMALL_GROUP_TIERS = [
  { tier: 'Best', tools: ['Walkie-Talkie', 'Binoculars'], note: 'Two players: one talks, one watches. Walkies keep you linked when the puzzle splits you up; binoculars read the terrain for both of you.' },
  { tier: 'Good', tools: ['Flashlight', 'Laser Pointer'], note: 'Night sections need light, and a laser pointer makes descriptions exact when you are solving symbols through walls.' },
  { tier: 'Situational', tools: ['Megaphone', 'Flare'], note: 'Take them on outdoor stretches or when the map opens up; leave them behind in tunnels and dense puzzles.' },
  { tier: 'Fun', tools: ['Cowbell', 'Golden Head', 'Whiteboard'], note: 'Optional chaos. Bring them when the group wants to goof off — Big Walk rewards that.' },
];

const BIG_GROUP_TIERS = [
  { tier: 'Best', tools: ['Walkie-Talkie', 'Megaphone'], note: 'With 4-12 players you will split up constantly. Walkies keep sub-groups linked; the megaphone broadcasts instructions to everyone in earshot.' },
  { tier: 'Good', tools: ['Binoculars', 'Laser Pointer', 'Flare'], note: 'Splitting up means you need to signal across distance — spotting, pointing and flaring keep everyone oriented.' },
  { tier: 'Situational', tools: ['Whiteboard', 'Flashlight'], note: 'A whiteboard shines when a big group shares one solution; flashlights matter less when three other players carry them.' },
  { tier: 'Fun', tools: ['Cowbell', 'Golden Head'], note: 'A 12-player cowbell jam is the Big Walk endgame. Nobody can explain the golden head yet — find out and tell us.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tool Tier List</h1>
      <p className="text-gray-400 mb-2">Big Walk has no combat — these are the tools that win co-op puzzles. Rankings based on the launch build (August 4, 2026) and pre-release previews. See the <a href="/guides/tools-guide" className="text-amber-400 hover:underline">Tools Guide</a> for how each tool works and where to find it.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Launch day — will be refined as the community plays</div>

      {[{ title: 'Overall Rankings', tiers: TOOL_TIERS }, { title: 'Small Groups (2-3 Players)', tiers: SMALL_GROUP_TIERS }, { title: 'Big Groups (4-12 Players)', tiers: BIG_GROUP_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier + row.tools.join('-')} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
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
          Big Walk does not have a "best loadout" in the usual sense — tools are situational, and the real
          skill is communication. The walkie-talkie and binoculars rank high because Big Walk deliberately
          removes the map and the minimap: your group is the navigation system. Rankings will be refined
          as the community plays the launch build.
        </p>
      </div>
    </div>
  );
}
