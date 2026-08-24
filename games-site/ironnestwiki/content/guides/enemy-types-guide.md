---
title: "Enemy Types & Weak Points — What You're Shooting At — Iron Nest Wiki"
description: "Every enemy target type in IRON NEST: Heavy Turret Simulator — infantry, artillery batteries, armored convoys, bunkers, fire direction centers and supply caches — with behaviors, weak points, and the best shell for each."
category: "Targeting"
version: "1.0"
updated: "2026-08-11"
keywords:
  - "iron nest enemy types"
  - "iron nest targets"
  - "iron nest weak points"
  - "iron nest best shell for bunkers"
  - "iron nest how to kill artillery"
  - "iron nest fire direction center"
related:
  - "shell-types-ammo-guide"
  - "story-walkthrough-guide"
  - "counter-battery-survival-guide"
  - "ballistic-calculator-guide"
sources:
  - tier: "Official"
    text: "Counter-battery duels against enemy artillery are part of the game's advertised design per the Steam store page and launch coverage"
  - tier: "Community"
    text: "The five armor classes (trench, supply, convoy, artillery, bunker) and their optimal shells were mapped by the community from launch gameplay"
  - tier: "Editorial"
    text: "Kill-difficulty ratings and per-class tactics are our assessment"
---

# Enemy Types & Weak Points Guide

> Launch Version / Updated: August 11, 2026

You never see your targets — you read about them, plot them, and shoot at their grid coordinates. Knowing what a target *is* decides everything before the first shell: which shell to load, how hard it is to kill, whether it shoots back, and whether killing it pauses the counter-battery clock. This guide catalogues every confirmed target type in the campaign, its behavior, its weak point, and the cheapest reliable way to kill it.

## The Five Confirmed Target Classes

The community has mapped the campaign's targets into five armor classes. Target class is not always announced — the *language* of the spotter report tells you which class you are facing ("trench system" = Class 1, "convoy moving east" = Class 3, "hardened position" = Class 5).

| Class | Target | Optimal Shell | Kill Difficulty | Shoots Back? |
|-------|--------|---------------|-----------------|--------------|
| **Class 1** | Light Infantry Trench | HE | Easy — wide blast radius preferred | No |
| **Class 2** | Supply Trucks / Light Vehicles | HE (point-detonating) | Easy | No |
| **Class 3** | Armored Convoy / Mechanized Column | Armor-piercing (AP) | Medium — moving target, must lead | No |
| **Class 4** | Enemy Artillery Battery | Counter-battery HE / HCHE | Medium — but ZERO tolerance | **Yes — counter-battery fire** |
| **Class 5** | Reinforced Bunker / Underground Cache | AP / bunker-buster | Hard — expect multiple hits | No |

Class 4 is the exception to every rule: if you do not silence it fast, it silences you. The [counter-battery guide](/guides/counter-battery-survival-guide) covers that race in full.

---

## Target-by-Target Breakdown

### Infantry Trenches (Class 1)

Soft targets with a wide footprint. Any wide-blast shell clears them — HE at 0.27 km radius is the economical choice, HCHE (0.63 km) when they are packed. Community practice: use the **Iris** tool on the map to check the blast radius against the trench layout before spending a shell.

### Supply Trucks & Light Vehicles (Class 2)

Logistics convoys moving supplies to the front. Soft-skinned, single-shell kills with HE. They are worth prioritizing when the briefing mentions them: starving the enemy of supplies weakens later phases.

### Armored Convoys & Mechanized Columns (Class 3)

Moving armored targets. Two rules:

1. **AP only** — HE splashes off armor. A column of trucks led by an armored vanguard is AP territory from the first shot.
2. **Lead the target.** The convoy moves while your shell is in the air — potentially a long flight at long range — so aim at the road ahead of the vehicles, not at them.

Community-reported movement behavior: **vehicles follow roads and valleys.** If your intel says "convoy moving east," plot it along the marked road network, not across open ground — and if the radio signal is degraded, this rule is your best guess.

### Enemy Artillery Batteries (Class 4)

The only target that fights back. Batteries have three characteristics you must respect:

- The **counter-battery timer** starts the moment your first shell lands on enemy guns — every battery must be plotted BEFORE your first shot.
- They are usually grouped; **HCHE** turns a clustered battery into a one-shot problem. When two targets sit close together, one HCHE round handles both.
- Destroying batteries pauses the counter-battery clock, buying time to restock, repair and re-plot.

Speed beats elegance: HE for fast reliable kills, HCHE when they cluster. See the [counter-battery guide](/guides/counter-battery-survival-guide) for the full playbook.

### Bunkers, FDCs & Underground Caches (Class 5 / Special)

The hardest armor in the game — bunkers, Fire Direction Centers, and underground supply caches. **AP is the only confirmed shell that reliably penetrates them** (community also references heavy "bunker-buster" rounds among the 30 advertised types, not yet confirmed at launch). Expect multiple hits and follow-up ranging shots: the first round often confirms the elevation, the second does the killing.

**Fire Direction Centers** deserve special mention: they are the brains of enemy counter-battery operations, and destroying one **pauses counter-battery fire**. But do not spend them the moment they appear — the pause is a resource. Save an FDC kill for the moment you need to work undisturbed (see [counter-battery survival](/guides/counter-battery-survival-guide)).

### Civil Riots & Unrest (Special)

The civil-war setting adds a non-military target class: riots and civil unrest. **HE clears them** like any infantry concentration; **tear gas** is the non-lethal option (currently of limited mission use); **phosgene** removes them while leaving infrastructure intact — the choice when you need the ground (a bridge, a factory, a road junction) afterwards.

---

## Reading the Spotter Report — Target Identification Table

| Spotter Report Language | What It Actually Is | Load |
|---|---|---|
| "Trench system", "infantry screen", "dug-in position" | Class 1 infantry | HE |
| "Supply column", "trucks on the road" | Class 2 logistics | HE |
| "Convoy moving east/west", "mechanized column" | Class 3 armor | AP |
| "Enemy guns", "battery near…" | Class 4 artillery | HE / HCHE |
| "Hardened position", "bunker", "fortified ridge" | Class 5 fortification | AP |
| "Fire direction post", "FDC coordinates" | FDC | AP |
| "Riots", "civil unrest at…" | Unrest | HE / tear gas / phosgene |
| "Depot", "underground stores", "ammo dump" | Supply cache | AP (underground) |

---

## Threat Priority — What to Kill First

1. **Enemy artillery (Class 4)** — the only target that can kill you. Always first, always all of them.
2. **FDCs** — but saved for when the pause is actually needed.
3. **Bunkers (Class 5)** — they stall the advance; missions fail when they hold.
4. **Armored convoys (Class 3)** — slow to kill, easy to lose track of.
5. **Supply targets (Class 2)** — soft and quick; mop up between priority targets.
6. **Infantry (Class 1)** — the cheapest kill per credit; good for kill streaks and accuracy medals.

## The Enemy Weak-Point Cheat Sheet

| Target | Weak Point | One-Line Tactic |
|--------|-----------|-----------------|
| Infantry trenches | Wide blast | HE; check radius with the Iris |
| Supply trucks | Thin skin | Point-detonating HE, single shot |
| Armored convoy | Follows roads | Lead the column along the road, AP only |
| Artillery battery | Clustering | Mark ALL before first shot; HCHE the cluster |
| Bunker / cache | AP penetration | AP, expect 2+ hits, correct from first impact |
| FDC | AP + timing | Save the counter-battery pause for when you need it |

**Next steps:** [All Shell Types & Ammo](/guides/shell-types-ammo-guide) — [Story Mode Walkthrough](/guides/story-walkthrough-guide) — [Counter-Battery & Survival](/guides/counter-battery-survival-guide)
