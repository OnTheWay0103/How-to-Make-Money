import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artifact Tier List',
  description: 'Ardent Wilds artifact tier list — best rare artifacts ranked for combat, exploration, base building, and co-op. S-tier to C-tier rankings for the demo build (July 2026).',
};

const COMBAT_TIERS = [
  { tier: 'S', items: ['Tome of Ice', 'Pyroblast Core'], note: 'Tome of Ice provides unmatched utility — freeze enemies, create frost bridges, block pathways. Pyroblast Core delivers the highest AoE damage with terrain destruction.' },
  { tier: 'A', items: ['Stormcaller Bow', 'Berserker Axe', 'Vampiric Blade'], note: 'Stormcaller Bow chains lightning between enemies. Berserker Axe ramps damage on kill streaks. Vampiric Blade sustains through lifesteal.' },
  { tier: 'B', items: ['Guardian Shield', 'Marksman Rifle', 'Venom Dagger'], note: 'Guardian Shield excels in co-op tanking. Marksman Rifle for safe ranged DPS. Venom Dagger applies stacking poison DoT.' },
  { tier: 'C', items: ['Rusty Cleaver', 'Training Wand'], note: 'Starter weapons — functional but quickly outclassed. Replace as soon as you find any artifact.' },
];

const EXPLORATION_TIERS = [
  { tier: 'S', items: ['Tome of Ice', 'Grappling Hook', 'Glider Cape'], note: 'Tome of Ice bridges canyons and rivers. Grappling Hook reaches spire platforms. Glider Cape covers huge distances from elevated positions.' },
  { tier: 'A', items: ['Speed Boots', 'Lantern of Revealing', 'Digging Claws'], note: 'Speed Boots for fast map traversal. Lantern reveals hidden spires and resource nodes. Digging Claws for rapid tunneling.' },
  { tier: 'B', items: ['Compass of Whispers', 'Climbing Picks'], note: 'Compass points toward nearest spire. Climbing Picks reduce stamina drain on vertical surfaces.' },
];

const BASE_TIERS = [
  { tier: 'S', items: ['Arcane Workbench', 'Auto-Turret Schematic'], note: 'Arcane Workbench unlocks legendary-tier crafting. Auto-Turrets provide passive base defense against Eldran raids.' },
  { tier: 'A', items: ['Greenhouse Module', 'Alchemy Station', 'Reinforced Walls'], note: 'Greenhouse grows crops 2x faster. Alchemy Station brews combat elixirs. Reinforced Walls survive longer during sieges.' },
  { tier: 'B', items: ['Storage Expansion', 'Decorative Blueprints'], note: 'Quality of life upgrades — more storage is always useful, and decorations boost co-op morale.' },
];

const COOP_TIERS = [
  { tier: 'S', items: ['Guardian Shield', 'Healing Staff', 'Tome of Ice'], note: 'Guardian Shield draws aggro, Healing Staff keeps team alive, Tome of Ice provides crowd control — the holy trinity of co-op support.' },
  { tier: 'A', items: ['War Banner', 'Shared Storage Key', 'Teleport Beacon'], note: 'War Banner buffs all nearby allies. Shared Storage Key links inventories. Teleport Beacon lets teammates warp to your location.' },
  { tier: 'B', items: ['Signal Flare', 'Ration Pack'], note: 'Signal Flare marks locations for teammates. Ration Pack shares food buffs with nearby allies.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Artifact Tier List</h1>
      <p className="text-gray-400 mb-2">Ardent Wilds artifact rankings for the demo build (July 30, 2026). Based on playtesting and community feedback during the demo period.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 mb-8">Demo version — subject to major changes before full release</div>

      {[{ title: 'Combat Artifacts', tiers: COMBAT_TIERS }, { title: 'Exploration Artifacts', tiers: EXPLORATION_TIERS }, { title: 'Base Building Unlocks', tiers: BASE_TIERS }, { title: 'Co-op Artifacts', tiers: COOP_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' ? 'bg-emerald-500/20 text-emerald-400' :
                row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.items.map((c) => (
                    <span key={c} className="text-sm font-medium text-white bg-[#1a1a2e] px-3 py-1 rounded border border-[#2a2a4e]">{c}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a2e] border border-[#2a2a4e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ardent Wilds is still in pre-release with only a demo available. Artifact balance, availability,
          and mechanics will change significantly before the full launch. The &quot;best&quot; artifact is always the one
          that matches your playstyle and your team composition. Experiment freely — the build system
          encourages mixing and matching rather than following a rigid meta.
        </p>
      </div>
    </div>
  );
}
