---
title: "BOMBANANA! Bomb Modules — Wires, D-pad, Numpad, Switch Panels & Braille"
description: "Every confirmed BOMBANANA! bomb module explained — Wires, D-pad, Numpad/Math, Switch Panels, and Braille. How each is solved, the callout template for each, and the common mistakes that end runs. A bookmarkable module compendium."
category: "Modules"
version: "Pre-release"
updated: "2026-09-01"
keywords:
  - bombanana switch module
  - bombanana game switches
  - bombanana wires module
  - bombanana numpad
  - bombanana module and callout guide
  - bombanana modules
  - bombanana braille
related:
  - manual-guide
  - roles-guide
  - beginner-guide
  - free-mode-guide
sources:
  - tier: "Official"
    text: "Steam store page (App 4656000) — 'each bomb has different modules and different rules'; module list itself not published"
  - tier: "Community"
    text: "Mobalytics module & callout guide and whisperofthehouse demo guide — wires, D-pad, numpad math, switch panels, Braille, callout templates, common mistakes"
  - tier: "Editorial"
    text: "This is a reference compendium. Exact final-release manual tables are [Unconfirmed]; the five module types here are demo-verified across two independent guides"
---

# BOMBANANA! Bomb Modules Compendium

Every bomb in BOMBANANA! is a set of **puzzle modules** — and "each bomb has different modules and different rules" [Official]. The store page does not publish a module list, but the demo has been played by over 6 million players, and multiple independent guides have documented the same five module types.

This page is the **reference compendium**: what each module is, how to solve it, the callout template to use, and the mistakes that end runs.

> **Important:** The demo teaches the *process* for these modules. Exact manual tables (e.g., which wire to cut for a given wire count and LED color) are not fully documented publicly and will be confirmed after the full release [Unconfirmed]. What follows is the verified communication framework, not invented solution tables.

## The Universal Callout, Applied

Before any module, remember the callout order: **Module name → Position → Details → Manual answer → Repeat-back → Confirm → Act**. Every module below uses this same skeleton.

## 1. Wires

The starter module and the one your team should solve first — it is usually faster than switch or numpad puzzles.

**How it works:** A bundle of colored wires. The manual decides which one to cut based on the **wire count**, the **colors left to right**, and sometimes the **LED color**.

**Callout template:** *"Wires, top right. Four wires. Left to right: green, blue, red, yellow. Red LED. Waiting for the cut."* [Community]

**Key rules:**
- **Wire count always leads.** Three-wire and four-wire bundles use different manual logic. Never list colors without the count [Community].
- **The Blind Monkey repeats the target, gets a confirm, then cuts.** Nobody cuts on the first mention.
- **Different wire counts have different rules** — that is why the count is the first thing called [Community].

## 2. Numpad / Math

Widely described as the hardest common module.

**How it works:** The Deaf Monkey reads a math expression, solves it out loud, and the manual turns the result into a specific number to press on a keypad.

**Callout template:** *"Result is 67, odd, greater than five, yellow LED. Waiting for the final number."* [Community]

**Key rules:**
- **The sum's answer is not always the number you press.** Wait for the manual's final instruction [Community].
- **The keypad is jumbled.** Position does not equal value — press the requested number *wherever it appears*, not at its normal keypad spot [Community].
- **Priority traps:** if a result is both odd and greater than five (or otherwise ambiguous), the Mute Monkey with the manual decides the branch — not the Blind Monkey guessing [Community].
- Call the **LED color** — it can be part of the manual's decision [Community].

## 3. Switch Panels

**More dangerous than wires**, because several states must be correct before a single "enter" press locks them all in.

**How it works:** A panel of switches (a "switch module" / "switches" — a top search term for this game). The team sets each switch up or down according to the manual, then presses enter.

**Callout template:** *"Switches, top row. Light order is red, green, blue, yellow. Digit string is 8972. Waiting for switch states before enter."* [Community]

**Key rules:**
- **Read the color order first.** Call the top light order left to right. Solving against the wrong color sequence is a common failure [Community].
- **Give the full digit string**, not one number at a time — solving one switch at a time loses context for the next [Community].
- **Resolve switches one by one.** For each color/position, ask for up or down, then repeat the state so the team remembers which switch is already set [Community].
- **Correct before enter.** If a switch is wrong, say which position to revisit before pressing enter, using the agreed go-back signal [Community].
- **Press enter only after confirmation** of all switch states [Community].

## 4. D-pad

A directional pad module. Less is documented about it in the demo guides, but the D-pad appears alongside wires in the standard module rotation.

**How it works:** A directional pad with a **centre value** that may be a number — or a **Braille value the Blind Monkey reads by feel**. The Deaf Monkey calls the centre value before waiting for the manual's direction [Community].

**Callout template:** start with *"D-pad, [position]. Centre value is [number / Braille], [LED if present]. Waiting for direction."*

**Key rules:**
- If the centre value is Braille, the **Blind Monkey reads it by feel** and reports it — no one else can read it [Community].
- Treat the D-pad like any module: name it, position it, read details, wait for the manual.

## 5. Braille Panels

Braille is less a standalone puzzle and more a **language only the Blind Monkey can read**.

**How it works:** The Blind Monkey is the only player who can touch the bomb, and only they can read the bomb's Braille panels by feel [Community]. Braille values feed into other modules (like the D-pad centre value) or appear as their own reading task.

**Key rules:**
- **The Blind Monkey reports what they feel**; the Deaf Monkey relays it into the information chain.
- Because Braille is read by touch, the **Blind Monkey is the only source** for that information — the chain cannot skip them.

## Module Mistakes That End Runs

These are the failure patterns documented across independent demo guides [Community]:

1. **Not naming the module.** Every callout must start with the module name and position, since several manual pages involve colors, wires, buttons, or lights.
2. **Skipping the wire count.** Three-wire vs. four-wire logic is different — the count must always lead.
3. **Calling two modules at once.** Finish the current module before describing the next; you lose the manual reader otherwise.
4. **Trusting a normal keypad layout.** Numpad numbers are jumbled — press the requested number, not the expected position.
5. **Acting before final confirmation.** Repeat the final instruction once, then act.
6. **Ignoring state changes after mistakes.** Re-read the whole module state after any mistake — the module may show a new LED, number, or stage.
7. **No go-back gesture.** Set a clear rewind/previous-step gesture before starting for switch panel corrections.

## What Is Not Yet Confirmed

- The **full final-release module list**. The five above are demo-verified; the release may add more [Unconfirmed].
- **Exact manual tables** for each module (which wire, which switch, which number) are not publicly documented and will be verified after launch [Unconfirmed].
- Whether Free Mode can mix **environmental hazards** with specific modules is confirmed in general (the Custom mode lists module types and hazards as separate adjustments), but the exact combinations are [Unconfirmed].

---

## Verification

- **Last checked:** 2026-09-01
- **Game version:** Pre-release (launches 9/2/2026)
- **Sources checked:** Steam store page (App 4656000), Mobalytics module & callout guide, whisperofthehouse demo guide
- **Note:** The five module types and all callout templates are demo-verified and consistent across two independent guides. Exact manual solution tables and the full release module list are [Unconfirmed].
