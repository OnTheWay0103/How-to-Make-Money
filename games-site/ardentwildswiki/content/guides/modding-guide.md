---
title: 'Modding Guide — Lua API & Community Mods in Ardent Wilds'
description: 'Complete modding guide for Ardent Wilds. How the Lua API works, how to install and create mods, where to find community mods, scripting basics, and what is possible with the full game script access.'
keywords: ['ardent wilds modding', 'ardent wilds mods', 'ardent wilds lua api', 'ardent wilds custom content', 'ardent wilds steam workshop']
updated: '2026-07-31'
---

# Modding Guide — Lua API & Community Mods

Ardent Wilds ships with full modding support — all game scripts are written in Lua and are accessible to players. This guide covers everything from installing your first mod to writing your own.

## Modding Philosophy

Spellware Studios designed Ardent Wilds to be moddable from the ground up. Key design decisions:

- **All game logic is in Lua** — Not compiled into the engine. You can read and modify how anything works.
- **Scripts ship with the game** — Located in the `Ardent Wilds/scripts/` directory. Open them in any text editor.
- **No encryption or obfuscation** — The developers want you to tinker.
- **Steam Workshop support** — Planned for the full release. The demo uses manual installation.

## What Can Be Modded?

Nearly everything. Here is what the Lua API exposes:

| System | Modifiable? | Examples |
|--------|------------|----------|
| **Items** | ✅ | Add new weapons, tools, artifacts, consumables |
| **Recipes** | ✅ | Change crafting requirements, add new recipes |
| **Enemies** | ✅ | Modify enemy stats, add new enemy types, change AI behavior |
| **Terrain Generation** | ✅ | Custom biome generators, new terrain features |
| **UI** | ✅ | Custom HUD elements, inventory modifications |
| **Game Rules** | ✅ | Death penalties, difficulty scaling, day/night cycle |
| **Quests** | ✅ (full game) | Add custom quests, storylines, NPCs |
| **Multiplayer** | ✅ | Custom game modes, PvP rulesets |
| **Graphics** | ⚠️ Partial | Shaders and post-processing are in the engine, but all visual data (textures, models) is replaceable |

## Installing Mods (Demo Build)

Since the demo does not have Steam Workshop support yet, mods are installed manually:

1. Download the mod files (usually a `.zip` or a collection of `.lua` files)
2. Navigate to your Ardent Wilds demo directory:
   - **Windows:** `C:\Program Files (x86)\Steam\steamapps\common\Ardent Wilds Demo\`
   - **Mac:** `~/Library/Application Support/Steam/steamapps/common/Ardent Wilds Demo/`
   - **Linux:** `~/.steam/steam/steamapps/common/Ardent Wilds Demo/`
3. Place mod files in the `mods/` folder (create it if it does not exist)
4. Launch the game — mods are loaded automatically
5. Check the main menu → Mods to see loaded mods and resolve conflicts

**Important:** Mods modify game behavior. Playing on a vanilla server with mods enabled may cause compatibility issues. Disable mods before joining unmodded multiplayer sessions.

## Creating Your First Mod

### Project Structure

A basic mod requires at minimum:

```
MyMod/
├── mod.json          # Mod metadata
├── init.lua          # Entry point (runs when mod loads)
└── scripts/          # Your custom Lua scripts
    └── items.lua     # Example: custom items
```

### mod.json

```json
{
  "name": "My First Mod",
  "version": "1.0.0",
  "author": "YourName",
  "description": "Adds a legendary sword that shoots lightning.",
  "game_version": "demo-2026-07",
  "dependencies": []
}
```

### init.lua — Basic Item Mod

```lua
-- Register a custom sword
local sword = {
  id = "lightning_blade",
  name = "Lightning Blade",
  description = "A legendary sword that calls lightning from the sky.",
  type = "weapon",
  slot = "mainhand",
  damage = 45,
  damage_type = "lightning",
  attack_speed = 1.2,
  tier = 4,
  recipe = {
    { item = "iron_ingot", count = 5 },
    { item = "crystal", count = 3 },
    { item = "eldran_shard", count = 1 }
  },
  special_effect = "on_hit_chain_lightning"
}

-- Register the item
game.register_item(sword)

-- Add chain lightning effect
game.on_event("weapon_hit", function(event)
  if event.weapon.id == "lightning_blade" then
    -- Find nearest 3 enemies and chain lightning
    local targets = game.find_nearby_enemies(event.target, 10, 3)
    for i, enemy in ipairs(targets) do
      game.deal_damage(enemy, event.damage * 0.4, "lightning")
      game.spawn_effect("lightning_bolt", enemy.position)
    end
  end
end)
```

### Common API Functions

| Function | Description |
|----------|-------------|
| `game.register_item(table)` | Add a new item to the game |
| `game.register_recipe(table)` | Add a new crafting recipe |
| `game.register_enemy(table)` | Add a new enemy type |
| `game.on_event(event, callback)` | Hook into game events |
| `game.find_nearby_enemies(pos, range, count)` | Get nearby enemies |
| `game.deal_damage(target, amount, type)` | Deal damage to an entity |
| `game.spawn_effect(effect_id, position)` | Play a visual effect |
| `game.broadcast_message(text)` | Send chat message to all players |

## Popular Mod Ideas (Community Wishlist)

Based on community discussion during the demo period, these are the most-requested mod types:

### Quality of Life
- **Bigger Inventory** — Double inventory slots
- **Auto-Sort Chests** — One-click chest organization
- **Mini-Map** — Persistent minimap overlay
- **Death Coordinates** — Show death location on map
- **Craft from Chests** — Workstations pull from nearby storage

### Gameplay Changes
- **Solo Scaling** — Reduce enemy HP for solo players
- **Keep Inventory on Death** — Soulslike death rules instead of full drop
- **Faster Smelting** — Reduce Furnace processing time
- **Increased Artifact Slots** — Equip 5 artifacts instead of 3
- **No Building Costs** — Creative mode for base designers

### Content Additions
- **New Weapons** — Community-designed weapon types (scythes, whips, fist weapons)
- **New Biomes** — Custom terrain generators (desert, swamp, floating islands)
- **New Bosses** — Player-designed boss encounters
- **Magic Expansion** — More spells, elements, and magic artifacts
- **Technology Mod** — Add tech-based items alongside magic (guns, machines, vehicles)

### Total Conversions
- **PvP Arena Mode** — Turn the game into a competitive arena fighter
- **Tower Defense Mode** — Defend a central base against waves
- **Hardcore Survival** — Permadeath, no map, realistic hunger/thirst
- **Zombie Apocalypse** — Replace Eldran with zombies, modern weapons

## Mod Compatibility and Conflicts

When two mods modify the same thing, the last one loaded wins. To manage conflicts:

1. Check the Mods menu in-game — it shows conflicts with yellow warning icons
2. Rename mod folders to control load order (mods load alphabetically)
3. Some mod authors include compatibility patches for popular mod combinations
4. When in doubt, disable all mods and enable them one at a time

## Sharing Your Mods

During the demo period, share mods through:

1. **Steam Community Hub** — Post in the modding subforum
2. **Discord** — The Spellware Studios Discord has a #modding channel
3. **GitHub** — Host your mod source code (recommended for version control)
4. **Nexus Mods** — Traditional mod hosting site (some creators already have pages)

When the full game releases, Steam Workshop will become the primary distribution method.

## Modding Best Practices

1. **Back up your saves** — Mods can corrupt save files. Copy your save folder before installing major mods
2. **Document your mod** — A `README.md` helps users understand what your mod does
3. **Version your mod** — Update the `mod.json` version when you release changes
4. **Test in single-player first** — Multiplayer mod bugs can crash the server
5. **Respect the community** — Do not redistribute others' mods without permission
6. **Keep it balanced** — Overpowered mods are fun for 5 minutes, balanced mods are fun for 50 hours

## Official Modding Resources

- **Lua API Documentation:** Included in the game files at `docs/lua_api.html`
- **Example Mods:** The game ships with 3 example mods in `mods/examples/`
- **Script Source:** All vanilla scripts are in `scripts/` — read them to understand how systems work
- **Community Wiki:** The [Ardent Wilds Modding Wiki](https://ardentwildswiki.vercel.app) will host community-contributed documentation

## The Future of Ardent Wilds Modding

Spellware Studios has stated that modding is a core pillar of their long-term vision:

- **Steam Workshop** at full launch
- **Expanded Lua API** with more hooks and events
- **Modding contests** — community-voted best mods featured on the store page
- **Official mod pack** — curated collection of the best community mods, bundled as optional DLC (free)

The message is clear: if the community wants it, it can be modded in.
