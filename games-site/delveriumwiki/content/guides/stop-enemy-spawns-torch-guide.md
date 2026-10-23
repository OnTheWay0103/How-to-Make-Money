---
title: 'How to Stop Enemies Spawning in Delverium — Torches, Light & Base Defense'
description: 'How Delverium torch suppression works after update 0.1.0.3 — the 6-tile radius, per-torch suppression values, biome multipliers, and how to lay out a base that stops spawning nearby.'
category: Exploration
version: '0.1'
updated: '2026-10-23'
keywords:
  - 'delverium stop enemies spawning'
  - 'delverium torch'
  - 'delverium base defense'
  - 'delverium spawn rate'
  - 'delverium quartz torch'
  - 'delverium crystal torch'
related:
  - beginner-guide
  - biomes-guide
  - farming-guide
  - dungeon-guide
sources:
  - tier: "Official"
    text: "Delverium Update v0.1.0.3, Steam News, October 3, 2026 — https://store.steampowered.com/news/app/2710040/view/1845383656389007 (torch suppression values, 6-tile range, biome multipliers, spawn cap changes)"
  - tier: "Official"
    text: "Delverium store page, accessed October 23, 2026 — https://store.steampowered.com/app/2710040/ (survival sandbox structure, shelter building, 1-8 players)"
  - tier: "Community"
    text: "GameGrin, Delverium Preview, 2026 — https://www.gamegrin.com/previews/delverium-preview/ (starter torch, building a room with bed/floor/torch/door, night and underground spawns)"
  - tier: "Editorial"
    text: "The base layout, coverage math, and placement checklist are our recommendations derived from the official suppression values"
---

# How to Stop Enemies Spawning in Delverium — Torches, Light & Base Defense

> Early Access build 0.1.0.3 / Updated: October 23, 2026

If your Delverium base keeps collecting uninvited guests, the problem is usually not your walls. It is your lighting. Since **update 0.1.0.3** on October 3, 2026, torches are not just a light source — they are a spawn-suppression system with documented values, a fixed radius, and biome multipliers that can make the same torch four times stronger in one place than another.

This guide explains exactly what the patch notes say, how the numbers combine, and how to place torches so your bed, storage, and crafting area stop turning into a spawn point.

## The Short Version

- A torch reduces the chance that a mob will spawn **within close range** of it.
- The baseline suppression is **25% per torch**, with a **6-tile radius**.
- **Quartz torches** suppress **50%**. **Coloured crystal torches** suppress **75%**.
- The biome multiplies the effect: **Plains ×10**, **Woodlands ×3**, **Labyrinth ×0.5**, and most other biomes ×1.
- Torches do not despawn enemies that are already there. They stop new ones from appearing.

That is the whole system. The rest of this guide is about using it well.

## What the Patch Notes Actually Say

Update v0.1.0.3 lists the torch changes explicitly. The relevant lines:

- Added a **Quartz torch** with enemy suppression of **50%**.
- Added **Coloured crystal torches** with enemy suppression of **75%**.
- Standard torch enemy suppression increased from **20% to 25%**.
- Torch enemy suppression range increased from **5 tiles to 6 tiles**.
- Torches work by **reducing the chance of a mob spawn if it tries to spawn within close range** to a torch.
- Plains has a **10×** torch enemy spawn rate modifier, which allows basic torches to **completely suppress** nearby enemy spawns.
- Woodlands has a **3×** modifier, allowing basic torches to suppress enemy spawns by **75%**.
- Labyrinth has a **0.5×** modifier, reducing torch suppression by **50%**.
- All biomes except Plains, Woodlands, and Labyrinth have a normal **1×** modifier.

Two details are easy to miss. First, the percentages are per-torch modifiers, not a pool you spend. Second, the range is a 6-tile radius, not a screen-wide aura — a torch in the corner of a large room does not protect the far corner.

## Torch Types Compared

| Torch | Suppression | Range | Best use |
|-------|-------------|-------|----------|
| **Standard torch** | 25% | 6 tiles | General coverage; cheap enough to place in multiples |
| **Quartz torch** | 50% | 6 tiles | Doorways, stairwells, and gaps between standard torches |
| **Coloured crystal torch** | 75% | 6 tiles | Priority areas: bed, storage, crafting stations |

The crystal torch is the strongest single item, but it is not automatically the best buy. A standard torch costs less, and in Plains a single standard torch already reaches complete suppression. Spend the expensive torch where the biome does not help you.

## Biome Multipliers and the Real Math

The official values imply the following effective suppression for a standard torch:

| Biome | Modifier | Standard torch (25%) | Quartz (50%) | Crystal (75%) |
|-------|----------|----------------------|--------------|---------------|
| **Plains** | ×10 | 250% — full suppression | Full | Full |
| **Woodlands** | ×3 | 75% | Full | Full |
| **Most other biomes** | ×1 | 25% | 50% | 75% |
| **Labyrinth** | ×0.5 | 12.5% | 25% | 37.5% |

These are derived numbers, not separate patch-note values: the game's modifier is applied to the torch's suppression. The practical conclusions are what matter:

- **Build your first base in the Plains if you can.** A basic torch is effectively a no-spawn zone there, which is why the biome is the most forgiving place to learn the building system.
- **Woodlands is the second-best starter biome.** A standard torch gets you to 75%, and a quartz torch finishes the job.
- **Do not expect torches to solve the Labyrinth.** At ×0.5, even a crystal torch is only 37.5%. Underground defense needs a different plan: choke points, doors, and fighting space.

## How to Place Torches

The 6-tile radius is the number to build around. Think in circles, not in "one torch per room."

### 1. Cover the places you stand still

Spawn suppression matters most where you are not paying attention: the bed, the storage chests, the crafting bench, and the farm. Put your strongest torch next to the bed first. A death and respawn in the middle of a spawn zone is how a quiet night becomes a corpse run.

### 2. Overlap the circles

Place torches roughly 8–10 tiles apart so their 6-tile radii overlap. A single torch in a large room leaves the corners exposed. Overlapping standard torches also hedges against the possibility that suppression is not a simple additive stack — the patch notes describe individual torch modifiers but do not document an exact stacking formula, so assume each torch is checked separately rather than trusting one torch to cover everything.

### 3. Light the approaches, not just the interior

Mobs spawn outside your walls and walk in. Put torches at the outer face of doors, the ends of paths, and the edge of the farm plot. Suppressing the approach is often more valuable than adding a fourth torch inside a room that is already covered.

### 4. Use doors and walls as the second layer

Torches reduce spawn chance; they do not make you invisible. A wall with a door still matters, and the GameGrin preview notes that a room with a bed, floor, torch, and door is the basic safe setup. Treat torches as the first layer and structure as the second.

### 5. Go underground deliberately

Update 0.1.0.3 added **"Underground" placeable flags** for items and made all flooring and torches placeable underground. That means you can now build a proper underground room rather than a torch on the surface. Use the same radius logic, but expect the Labyrinth modifier to eat most of your suppression. Underground, the goal is a defensible room, not a spawn-free bubble.

## The Other Half of the Spawn System

Torches are not the only lever. The same patch changed how the game counts enemies:

- **Soft spawn cap:** spawns now scale down linearly from **1.0× to 0.125×** once the current enemy count exceeds **33% of the hard cap**. Previously the reduction was 1.0× to 0.5× at 50%.
- **Recent kills count:** the game now tracks nearby enemies you have killed, with decay. Recently killed enemies count toward the nearby enemy count that softens spawn rates, and the effect scales with distance from those kill positions.
- **Mini-boss cooldowns:** despawn cooldowns were reduced from **120 seconds to 60 seconds** (destroy cooldowns remain 120 seconds).

What this means in practice: clearing enemies around your base temporarily makes the area quieter. Do not expect it to stay clear forever — the kill tracking decays — but a sweep before a building session is worth doing.

## A Base Layout That Works

For a first Plains or Woodlands base:

1. **Pick a flat site** with natural choke points and room for a 6-tile buffer around the core.
2. **Build the core room** — bed, floor, door, storage, crafting.
3. **Place a crystal or quartz torch next to the bed** and a standard torch by the door.
4. **Ring the outside** with standard torches at the path, the farm edge, and the wall corners.
5. **Add a second ring** only where the circles leave a gap.
6. **Sweep the immediate area** before long crafting or farming sessions.
7. **Re-check coverage** after you expand — a new room is a new uncovered radius.

Do not build the entire base around torches before you have tools and food. A shelter with no bed and no door is still a spawn magnet.

## What Torches Do Not Do

- **They do not kill or despawn existing enemies.** Suppression applies to spawn attempts within range.
- **They do not replace walls.** A torch outside a door does not stop a mob that already spawned beyond the radius.
- **They do not make dungeons safe.** Dungeon and boss encounters are designed content; do not expect a crystal torch to turn a boss room into a quiet room.
- **They do not stack in a documented way.** The patch notes describe per-torch modifiers, not a stated additive formula. Overlap your coverage instead of relying on one super-torch.

## Torch and Spawn FAQ

**Do torches work at night?** Yes — that is when you will notice them most. The GameGrin preview notes that enemies come out as the sun goes down and when you explore underground.

**Is the Quartz torch better than the crystal torch?** No. Quartz is 50%, crystal is 75%. Quartz is the middle option; use it where a standard torch is not quite enough and a crystal torch is overkill.

**Does one torch cover a whole room?** Only if the room is small. The radius is 6 tiles, so a large room needs overlapping coverage.

**Do torches affect boss spawns?** Not documented. Treat bosses and scripted encounters as outside the torch system until the developers say otherwise. **[Unconfirmed]**

**Should I put torches in my farm?** Yes. The farm is an area where you stand still for long stretches, and the update notes mention settlement decoration alongside suppression.

## Checklist

- [ ] Build the bed/storage/crafting core first
- [ ] Put the strongest torch next to the bed
- [ ] Space torches so their 6-tile radii overlap
- [ ] Light the approaches outside the walls
- [ ] Use crystal torches where the biome modifier is 1×
- [ ] Do not rely on torches in the Labyrinth
- [ ] Sweep nearby enemies before long building sessions
- [ ] Re-check coverage after every expansion

Torches are cheap, placeable, and now documented. There is no reason to keep sleeping in a spawn zone.
