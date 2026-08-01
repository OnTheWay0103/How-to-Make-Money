---
title: 'Modding Guide — Lua API & Community Mods in Ardent Wilds'
description: 'Complete modding guide for Ardent Wilds. Confirmed facts about the Lua API, what can be modded, how to install community mods, and scripting basics for a game that ships all its content scripts with the game.'
category: 'Guides'
version: '1.0'
updated: '2026-08-01'
keywords: ['ardent wilds modding', 'ardent wilds mods', 'ardent wilds lua api', 'ardent wilds custom content', 'ardent wilds steam workshop']
related:
  - 'advanced-guide'
  - 'demo-guide'
  - 'combat-guide'
  - 'crafting-guide'
---

# Modding Guide — Lua API & Community Mods

Ardent Wilds ships with **extensive modding support** — this is confirmed developer design, described on the official Steam page: "all game objects, creatures, abilities and combat effects are programmable using our Lua API," and **all existing content scripts are included with the game** for players to read and modify.

That is a big deal: the entire game is scriptable, and the source of the game's logic ships in the install folder. This guide covers the confirmed modding facts, what can be modded, and how to get started — without inventing API documentation that does not exist yet.

**Honesty note:** the game is pre-release (demo July 30, 2026; full game TBA), and **no official Lua API documentation has been published**. Any online guide that shows exact API function names or code samples (including earlier versions of this one) is unverified. Official documentation may change before full release. Everything below that is not explicitly confirmed is marked as such.

## Confirmed Modding Facts

From the official Steam page:

1. **Lua API** — the game exposes a Lua scripting API
2. **Everything is programmable** — "all game objects, creatures, abilities and combat effects"
3. **Scripts ship with the game** — all existing content scripts are included for players to modify
4. **Read the vanilla scripts to learn** — because the game's own content is written in this API, the installed scripts are the best (and currently only) reference documentation

## What Can Be Modded?

Directly from the confirmed wording — "all game objects, creatures, abilities and combat effects":

| System | Confirmed? | Notes |
|--------|-----------|-------|
| **Items / game objects** | ✅ | All objects are programmable |
| **Creatures** | ✅ | Enemy and creature behavior |
| **Abilities** | ✅ | Player and creature abilities |
| **Combat effects** | ✅ | Damage, effects, combat interactions |
| **Other systems** (UI, world gen, quests, multiplayer) | Unconfirmed | Plausible, but not stated by the developers |

## Where to Find the Scripts

The game is **Windows-only** (per the current Steam listing). The scripts live in the game's install directory — for a standard Steam install, that is inside:

`C:\Program Files (x86)\Steam\steamapps\common\Ardent Wilds\` (exact subfolder names are build-dependent)

Look for a folder containing `.lua` files and open them in any text editor. If the demo build includes the scripts folder (unconfirmed — check your install), the same applies to the demo directory.

## Reading the Vanilla Scripts

The shipped scripts are the developer-written reference implementation. To learn the API:

1. **Open the game's own content files first** — read how items, creatures, and abilities are defined in vanilla
2. **Find the patterns** — the object registration pattern you see repeated in vanilla files is the pattern to copy for your own content
3. **Copy, don't invent** — the safest first mod is a modified copy of an existing item or creature, changed in small ways
4. **Check the patch notes** — the April 2026 playtest added new items and abilities; those additions show the API in action

**Do not trust third-party API references.** Until Spellware publishes official documentation, the shipped scripts are the only authoritative reference — and they are authoritative by definition, because they are the real code.

## Installing Mods (Current Builds)

Steam Workshop support is **unconfirmed** — do not assume it exists yet. Until official distribution is announced, mods are shared and installed manually:

1. Download the mod files (usually a `.zip` or a collection of `.lua` files)
2. Find the mod folder in your Ardent Wilds install (if none exists, community guides will document the expected location — check the game's folder structure first)
3. Place mod files there
4. Launch the game and see if the content loads
5. **Back up your save files before installing mods** — always

**Important:** mods change game behavior. Play with mods in your own worlds; disable them before joining unmodded multiplayer sessions to avoid compatibility issues (standard practice; exact behavior in Ardent Wilds is unconfirmed).

## Creating Your First Mod

Since official API docs are not published, the honest workflow is:

### Step 1 — Find a Vanilla Template

Open the shipped scripts and find an item or creature definition close to what you want to create. This is your template.

### Step 2 — Modify It

Change values: names, damage, descriptions, effects. Keep the structure identical to the original. The fastest way to learn what each field does is to change it and see what happens in-game.

### Step 3 — Test in Single-Player

Test your mod in a single-player world before touching multiplayer. Multiplayer mod bugs can crash sessions — and crash other people's fun.

### Step 4 — Iterate

- Change one thing at a time so you know which change caused which effect
- Read more vanilla scripts when you hit a wall — the pattern you need is almost certainly in the game already
- Keep a changelog — it helps you and anyone who plays your mod

### Example (Illustrative, Not Official API)

The exact API is unconfirmed, but a well-designed item system usually looks something like this — **this is not official documentation**, just an illustration of the pattern you will find in the vanilla scripts:

```lua
-- Typical pattern: a table describing the object, registered with the game
local sword = {
  name = "My Custom Sword",
  type = "weapon",
  damage = 10,
}
-- The registration call name comes from the vanilla scripts
-- game.register(sword)  -- <-- exact function name: check the shipped scripts
```

Read the real scripts, copy their exact patterns, and you will be writing working mods before the official docs exist.

## Popular Mod Ideas (Community Wishlist)

Based on community discussion during the demo period, the most-requested mod types:

### Quality of Life
- Bigger inventory
- Auto-sort chests
- Mini-map
- Death location markers
- Craft-from-chests (workstations pull from nearby storage)

### Gameplay Changes
- Solo difficulty scaling
- Keep inventory on death
- Faster smelting
- More artifact slots
- Creative mode for builders

### Content Additions
- New weapons
- New creatures and bosses
- Magic expansion (more spells and artifacts)
- New world content

### Total Conversions
- Hardcore survival rules
- Tower-defense-style modes
- Custom enemy themes

**Honest note:** whether each of these is technically possible depends on how much of each system the Lua API exposes — and that is not fully documented yet. "All game objects, creatures, abilities and combat effects" is a wide door; the community will map its edges during the demo and early-access period.

## Mod Compatibility and Conflicts

Until official mod tooling exists, conflict management is manual:

1. **One mod at a time when debugging** — if something breaks, isolate the cause
2. **Know the load order** — if two mods edit the same file, the behavior depends on how the game loads them (unconfirmed); document and test
3. **Ask the community** — modders will share what works; follow their reports

## Sharing Your Mods

Until official distribution is announced, share through:

1. **Steam Community Hub** — forum posts with download links
2. **Discord communities** — modding channels for the game
3. **GitHub** — host your source (recommended for version control and collaboration)
4. **Traditional mod hosting sites** — if the game's community adopts any

When official distribution (Workshop or otherwise) launches, it will presumably become the primary channel — unconfirmed until announced.

## Modding Best Practices

1. **Back up your saves** — mods can corrupt save files; copy your save folder before installing major mods
2. **Document your mod** — a README helps users understand what your mod does
3. **Version your mod** — track releases so players can roll back
4. **Test in single-player first** — multiplayer mod bugs can crash the server
5. **Respect the community** — do not redistribute others' mods without permission
6. **Keep it balanced** — overpowered mods are fun for five minutes; balanced mods are fun for fifty hours
7. **Report upstream** — if a bug is actually a game bug, report it through official channels; the game is pre-release and the developers are actively fixing builds

## What Is Still Unknown (TBD)

- Official Lua API documentation (not yet published)
- Steam Workshop support and timing
- Whether the demo build exposes the modding API
- How mods load, conflict, and distribute in the final game
- How much of the engine (graphics, UI, world generation) is scriptable

This guide will be updated as official documentation and patch notes confirm details. Until then: read the shipped scripts — they are the real documentation.
