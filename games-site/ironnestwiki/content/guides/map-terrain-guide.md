---
title: "Regions, Terrain & Map Strategy — Iron Nest Wiki"
description: "IRON NEST terrain strategy: the 15 campaign regions, how terrain features (roads, rivers, valleys, ridges, coastlines) shape where enemies deploy, the Gorge's ridge-arc trick, and per-terrain targeting tactics."
category: "Map"
version: "1.0"
updated: "2026-08-09"
keywords:
  - "iron nest regions"
  - "iron nest terrain"
  - "iron nest map strategy"
  - "iron nest gorge"
  - "iron nest ridges"
  - "iron nest all maps"
related:
  - "map-measurements-guide"
  - "target-spotting-guide"
  - "missions-objectives-guide"
  - "reconnaissance-guide"
---

# Regions, Terrain & Map Strategy

> Launch Version / Updated: August 9, 2026

The campaign runs across **15 regions** of an alternate-history late-1920s Spain, and terrain is not decoration — it decides where targets deploy, how your shells behave, and which solutions work. The game's maps mark roads, rivers and forests, and the community has mapped the campaign's named battlefields. This guide covers the terrain types, how to read a map for enemy habits, and region-specific tactics. **Enemy deployment habits are community-reported** — they are reliable rules of thumb, not game mechanics you can verify on screen.

## The Terrain Types

| Terrain | What It Does To You | Map Feature |
|---------|----------------------|-------------|
| **Roads & railroads** | Convoys use them — targets cluster along marked routes | Drawn on the map; follow them for plotting |
| **Rivers & bridges** | Choke points — crossers bunch up; infrastructure matters for gas shells | Drawn on the map; dead-reckoning anchors |
| **Valleys** | Movement lanes for armor; low arcs blocked by flanking ridges | Elevation shown via recon imagery |
| **Ridges & high ground** | Where bunkers sit; arcs shells over them with recon topography | Elevation from recon plane runs |
| **Forests** | Concealment — vague intel and "shoot the box" territory | Drawn on the map |
| **Coastlines** | Naval-adjacent missions (Gibraltar, Cartagena, High Tide) — long sightlines, few landmarks | Map edges |

## Reading the Map for Enemy Habits

The community's terrain-deduction rules (useful whenever radio intel is degraded or thin):

1. **Vehicles follow roads and valleys.** A report of "convoy moving east" is a search problem *along the road network*, not a circle search. Plot the candidate routes first.
2. **Bunkers sit on elevated ridges.** Fortifications need the high ground — check ridge lines before open fields when a report says "hardened position."
3. **Artillery batteries hide behind reverse slopes and near supply lines.** When a report gives only a sector, the battery is likely on the far side of a ridge from your line of fire — expect the heavy-shell drop correction on the first shot.
4. **Rivers are firing lanes, not firing lines.** Targets crossing a bridge bunch into an HCHE-perfect cluster; targets *along* a river are easier to correct against (the water gives the spotter a clean reference: "impact 100 m short of the bridge" is a one-line fix).

## The Gorge — The Ridge-Arc Case Study

The community-named Gorge mission is a river canyon fight where the flanking ridges block low-angle fire. Two proven approaches:

- **The arc-over:** fly a **recon plane along your firing corridor** first — recon imagery fills in the topography and lets you arc shells over the ridge rather than into it (details in the [reconnaissance guide](/guides/reconnaissance-guide)).
- **The ranging-shot fallback:** the walkthrough trick — complete the mission **without the ballistic calculator** by firing a well-aimed ranging shell and correcting from impact. The gorge's confined geometry makes corrections readable: short/over tells you the ridge profile from the first round.

## Region-by-Region Notes (Campaign)

| Region / Battlefield | Terrain | Tactical Notes |
|----------------------|---------|----------------|
| **Siege of Cartagena** | Coastal city, built-up blocks | Defenders cluster in built-up districts — HCHE value high; watch for friendlies between buildings (the 0-ally-kills medal is strict) |
| **Rock of Gibraltar** | Rock fortress, naval anchorage | Few, well-defended targets — the cheapest gold medal mission in the game (2 kills, 10 credits); landmarks make dead reckoning easy |
| **Iron Road** | Rail corridor, open plain | Convoy kills along the rail line; one lane at a time preserves the 20-streak |
| **The Gorge** | River canyon, ridges | Arc over ridges or fall back to ranging-shot corrections |
| **High Tide** | Coastline, amphibious approaches | Wave timing — 3 kills in 30 s medals need twin-gun pre-loads; long sightlines over water simplify range |
| **Phantom Battery** | Open ground, displacement | Deceptive battery moves — verify kills before re-engaging empty plots |
| **Final Harvest** | Varied, pre-siege | First shot within 50 s — pre-plot from the brief; every terrain type appears, so read the map before the clock matters |

## Terrain in the Firing Solution

- **Ridges = elevation corrections.** If recon imagery shows intervening high ground, add the heavy-shell drop/arc corrections from the [advanced ballistics guide](/guides/advanced-ballistics-guide).
- **Water = reliability.** Shots over flat water have minimal wind turbulence — coastal missions are where your most precise, most *trustworthy* shots happen.
- **Forest = error margin.** Concealed targets get vague reports; use the "shoot the box" method from the [target-spotting guide](/guides/target-spotting-guide) and the star-shell reveal before spending expensive shells.
- **City blocks = friendly-fire risk.** HCHE's 0.63 km radius does not care about your allies' morale — check the Iris blast-radius visualization before every cluster shot in built-up regions.

## Pre-Mission Terrain Checklist

- [ ] Recon plane corridor planned along your firing lane (if buying recon)
- [ ] Road and valley routes traced — convoy interception points marked
- [ ] Ridge lines checked for likely bunker positions
- [ ] River/coast references noted for correction calls
- [ ] Weather readout checked (see [advanced ballistics](/guides/advanced-ballistics-guide))

**Next steps:** [Tactical Map & Measurements](/guides/map-measurements-guide) — [How to Find Targets](/guides/target-spotting-guide) — [Missions & Objectives](/guides/missions-objectives-guide)
