---
title: "Tactical Map & Measurements Guide — Iron Nest Wiki"
description: "How the IRON NEST tactical map works: the 20×10 grid and sub-grid coordinate system, map tokens, colored pencils, the drafting compass, and how to measure bearing and range."
category: "Map"
version: "1.0"
updated: "2026-08-06"
keywords:
  - "iron nest tactical map"
  - "iron nest map guide"
  - "iron nest grid coordinates"
  - "iron nest measurements"
  - "iron nest map tokens"
related:
  - "target-spotting-guide"
  - "beginner-guide"
  - "ballistic-calculator-guide"
sources:
  - tier: "Official"
    text: "An interactive tactical map for plotting targets is part of the official Steam store description"
  - tier: "Community"
    text: "The 20x10 grid with 10x10 sub-grids, token colors and the 1000 m / 100 m cell sizes are community-documented from the demo and launch build"
  - tier: "Editorial"
    text: "Measurement workflow tips and the 'plot your own position first' rule are our recommendations"
---

# Tactical Map & Measurements Guide

> Launch Version / Updated: August 6, 2026

The tactical map table is the heart of the Iron Nest. It is your only window onto the battlefield — you never see the targets, only their plotted positions. Understanding the grid, the tokens and the measurement tools is the difference between a clean kill and twenty minutes of wasted shells.

---

## The Grid System

The map is a **20×10 grid** of large cells, referenced like a spreadsheet:

- **Columns** run A–T, left to right
- **Rows** run 1–10, bottom to top (row 1 is the bottom)
- A cell is referenced by column then row, e.g. **K5**, **R8**, **F10**

Each large cell is divided into its own **10×10 sub-grid**:

- Sub-cell coordinates start at **0**, not 1 (e.g. **0:4**, **9:0**)
- A full coordinate combines both systems: **F10 8:0** or **I7 2:4**

One full grid square is **1000×1000 meters**; one sub-grid square is **100×100 meters**. Place your tokens as close to the correct sub-cell as possible — small early errors throw off everything after them.

---

## Map Tokens

| Token | Purpose |
|---|---|
| **Iron Nest token** | Marks your own position. Place it first — every calculation depends on it. Re-verify it after any emergency relocation. |
| **Blue number tokens (1–4)** | Mark spotter / observation asset locations |
| **Green letter tokens (A–C)** | Mark reference points on the map |
| **Red number tokens (1–8)** | Mark confirmed enemy targets |
| **Red skull token** | Confirms an enemy kill — place it when the radio reports impact |
| **Blue skull token** | Indicates you hit a friendly unit (friendly fire) |

Loose nuts and bolts on the map table can be moved and used as improvised markers for temporary notes.

---

## Measurement Tools

The map table has three pencils and a compass:

| Tool | Behavior |
|---|---|
| **Red pencil** | Draws lines AND calculates bearing/range, copying the result to your clipboard. Use for final firing solutions. |
| **Yellow pencil** | Also calculates bearing/range but does NOT save to clipboard. Use for planning, scouting and triangulation drafts. |
| **White pencil** | Draws lines only, no measurements. Use for organization and map notes. |
| **Drafting compass** | Draws circles of a chosen radius around a center point. Use for distance-based target location. |

The game displays bearing and distance in real time while you draw — no manual math required.

---

## Measuring a Firing Solution

The standard sequence for any confirmed target:

1. **Place known positions first** — the Iron Nest (from the High Command brief), your spotters (e.g. "Spotter 1 — N5 4:0"), and any reference points.
2. **Pinpoint the target** using spotter data (see the [targeting guide](/guides/target-spotting-guide) for full triangulation methods).
3. **Draw a direct line** from the Iron Nest's sub-cell to the target's sub-cell with the **red pencil**. The displayed **bearing and range** are the only values you need — they are copied to your clipboard automatically.
4. **Delete extra measurement lines** (right-click) so old notes don't confuse the next solution.

---

## Map Hygiene Rules

- **Mark all enemy artillery before your first shot.** Firing the first shell starts the counter-battery timer — you will not get a second chance to quietly plot the batteries. See the [counter-battery guide](/guides/counter-battery-survival-guide).
- **Place tokens exactly**, not approximately. A token a few sub-cells off is a firing solution a few hundred meters off.
- **Clean up after relocations.** The Iron Nest moves; old plotting lines anchored to the previous position must be erased.
- **Verify your own position** matches your actual location after any emergency move — the map does not update itself.

---

## Common Map Mistakes

| Mistake | Result |
|---|---|
| Placing the Iron Nest token late or wrong | Every bearing and range is shifted — misses by hundreds of meters |
| Using the yellow pencil for the final solution | Correct numbers, but nothing copied to the clipboard |
| Leaving old red-pencil lines on the map | The next drawing snaps to stale reference points |
| Reading sub-grid coordinates as 1-based | Targets plotted one sub-cell off — the #1 cause of "near miss" shots |

The map is a tool of discipline: place, plot, draw, fire, clean. Master the routine and the machine does the rest.
