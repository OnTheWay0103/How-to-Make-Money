---
title: 'World Generation & Seeds Guide — How Worlds Are Created in Ardent Wilds'
description: 'How world generation works in Ardent Wilds — the procedurally generated voxel world, the April 2026 custom WorldGen rebuild, the June 2026 v0.5.9 pre-generated worlds change, and what seeds do.'
category: 'Guides'
version: 'Demo/Pre-release'
updated: '2026-08-08'
keywords: ['ardent wilds world generation', 'ardent wilds seeds', 'ardent wilds world seed', 'ardent wilds procedural generation', 'ardent wilds world settings', 'ardent wilds new world', 'ardent wilds floating islands']
related:
  - 'biomes-guide'
  - 'beginner-guide'
  - 'caves-mining-guide'
  - 'skill-tree-guide'
sources:
  - tier: "Official"
    text: "Procedurally generated worlds and the worldgen changes in the April 2026 alpha build (custom generation rebuilt) and June 10, 2026 v0.5.9 (pre-generated worlds returned, runtime generation disabled on older hardware, floating islands improved) — official playtest patch notes"
  - tier: "Community"
    text: "Seeds producing different terrain layouts comes from the April 2026 patch notes; seed formatting, entry, and determinism are unverified"
  - tier: "Editorial"
    text: "The world-hunting and re-rolling strategy is our analysis"
---

# World Generation & Seeds Guide — How Worlds Are Created in Ardent Wilds

Every Ardent Wilds world is **procedurally generated** — and the generation system has already been through one major rebuild and one course-correction during development. Understanding how worlds are made is genuinely useful: it decides which biomes you start near, where the underground veins are, and whether your seed is worth re-rolling.

**Honesty first:** the timeline below comes from the official playtest patch notes (April 2026 build and June 10, 2026 v0.5.9). Everything about how seeds are *formatted*, entered, or shared is (unverified) — no official seed documentation exists. This guide gives you the confirmed history, what it means, and honest strategy for world hunting.

## The Confirmed Basics

- **Ardent Wilds worlds are procedural.** No two worlds are identical — terrain, biome layout, and cave structure differ every time
- **The world is fully destructible voxel terrain.** You can dig, flatten, tunnel, and reshape everything — the generation is the starting state, not the final state
- **The world is one shared space in co-op.** Hosts generate the world; the [Co-op & Multiplayer Guide](coop-guide.md) covers who owns it

## The History of WorldGen (Confirmed Timeline)

World generation has changed twice in public builds — worth knowing, because old advice about "how worlds work" may be outdated:

| Build | Date | What Changed |
|-------|------|--------------|
| **Alpha playtest** | April 2, 2026 | **Custom world generation rebuilt from the ground up.** Pre-generated worlds were removed — every new game generated its world live. Experimental dedicated servers also appeared in this build (see [Dedicated Server Guide](dedicated-server-guide.md)) |
| **v0.5.9** | June 10, 2026 | **Course correction.** Pre-generated worlds were added back so new games load faster without live worldgen. Runtime worldgen was temporarily disabled because it caused issues on certain older hardware — it kept working for previously created worlds. A main-menu UI for selecting and loading pre-generated worlds was added. Floating island generation in the Plains biome was improved, with **new rewards added to the floating islands** |

The practical picture today: **the game ships with selectable pre-generated worlds** for fast startup, and the deeper custom-generation work is temporarily shelved pending fixes. Old guides claiming "every world is generated fresh at runtime" describe the April build, not the current one.

## Seeds — What They Do

The one confirmed statement about seeds comes from the April 2026 playtest update: **seeds produce different terrain layouts**. What is not confirmed:

- How seeds are displayed or copied (seed strings vs numbers — unverified)
- Where you enter a seed (world creation screen fields — unverified)
- Whether seeds generate deterministically (the same seed → the same world) in the current build — unverified
- Whether the v0.5.9 pre-generated world list is seed-addressable at all — unverified

Practical implications:

- **Re-rolling is cheap.** If your starting region is a wasteland with no water, restarting is faster than surviving a bad start — the [Beginner Guide](beginner-guide.md) explains what a good start looks like
- **"Best seed" lists are not trustworthy yet.** Without confirmed seed entry and deterministic generation, any "amazing seed" list online is either from an old build or invented. Re-roll yourself and judge with your own eyes
- **Seeds will matter more later.** The moment custom worldgen returns with confirmed seed support, seeds become a shared resource for the community — that is the natural end state of this system (unverified)

## What to Look For in a New World

Since you can re-roll freely, here is the checklist to evaluate a spawn against (from confirmed systems — see [Biomes & Resources Guide](biomes-guide.md) and [Base Building Guide](base-building-guide.md)):

1. **Water nearby** — farming needs water; a riverbank or lake start saves hours
2. **Diverse resources in walking distance** — trees, stone, and ideally visible ore
3. **A Spire within sight** — ancient Spires are fast-travel nodes and skill unlocks (see [Skill Tree & Spire Guide](skill-tree-guide.md)); spawning near one is a genuine advantage
4. **Flat-ish terrain or flattenable terrain** — the voxel system makes anything flattenable, but a flat start accelerates your first base
5. **Cave/mine entrances nearby** — the underground is where rare materials live (see [Caves & Mining Guide](caves-mining-guide.md))
6. **A Plains floating island overhead** — the June 2026 update confirmed floating islands with **rewards**; islands in the Plains biome are now worth seeking out

## Floating Islands — Confirmed New Content

The v0.5.9 patch notes explicitly improved **floating island generation in the Plains biome and added new rewards to them**. This is the demo-era standout world feature:

- Floating islands exist in the Plains biome (confirmed)
- They now contain rewards (confirmed — what kind is unverified)
- Access methods are unconfirmed — expect building, frost bridges from the Tome of Ice, or careful jumps (unverified)

If your spawn region has floating islands, that is a point in its favor — see the [Combat Guide](combat-guide.md) for how the Tome of Ice can bridge gaps.

## Co-op Note: Whose World Is It?

In co-op, the host's world is the group's world (confirmed pattern; exact joining rules unverified). Before your group invests hours in a world, agree on the seed/world choice together — re-rolling a world your squad has built a base in is a group decision, not a solo one.

## What Is Still Unknown (Unverified)

- Seed format, entry UI, and whether seeds are deterministic
- Whether the v0.5.9 pre-generated world selection supports custom seeds
- When custom runtime worldgen returns after its temporary disablement
- Full biome list and generation rules per biome
- Floating island reward contents and access methods
- Whether world settings (size, difficulty, resource density) exist at creation

Check the official [Steam page](https://store.steampowered.com/app/2275010/Ardent_Wilds/) news feed for the next worldgen update. Until then: re-roll freely, judge with your own eyes, and trust no seed lists.
