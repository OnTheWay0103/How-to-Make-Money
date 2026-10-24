---
title: "The Mound Difficulty Guide — Is There a Nightmare Mode?"
description: "The Mound: Omen of Cthulhu has no Nightmare Mode and no modifier pool. What difficulty actually looks like — contract tiers, the Forest Awakens escalation, and squad scaling — verified against all 39 official announcements."
category: "Guides"
version: "1.0"
updated: "2026-09-17"
keywords: ["themound nightmare mode", "themound difficulty", "themound hard mode", "themound forest awakens", "themound contract tiers", "themound endgame"]
related:
  - contracts-guide
  - sanity-guide
  - extraction-guide
  - progression-system-guide
  - characters-classes
---

# Difficulty Guide — Is There a Nightmare Mode?

> **Rewritten September 17, 2026.** This page used to describe a "Nightmare Mode" with a seven-card
> modifier pool, an unlock checklist, a reward table and modifier combos. None of it exists. See
> [Why this page was rewritten](#why-this-page-was-rewritten).

**No.** The Mound: Omen of Cthulhu has no Nightmare Mode, no hard mode, no difficulty selector, and
no modifier pool. There is no menu option, no unlock, and no contract board seal. If you are looking
for a harder mode to switch on, it was never added.

That is not a criticism — it is a design fact worth understanding, because **the pressure in this
game comes from the clock and the contract, not from a difficulty setting.** Players do ask for one:
*"I would not recommend this until they add a difficulty level or level options"* is a recurring
note in the review corpus. As of patch 1.05 that request is still open.

---

## What actually makes a run harder

### Contract tiers

Contracts are the game's difficulty axis. The Captain offers a selection each cycle, and the
further you push the deeper the danger — the developer's framing is that *"The further you venture,
the greater the dangers you will face."* Contract tiers pay differently too: patch 1.02 includes
*"Slight increase for tokens given for contract tiers."*

Richer contracts also come with richer objectives. Official examples of how contract content got
harder over patches:

- Patch 1.0: *"Contracts now display more mission information and a greater variety of treasure requirements"*
- Patch 1.0: *"Better diversity of treasure shrines and additional treasure pickups in missions"*
- Patch 1.02: *"Rescuing a character in the mainland means a contract is successful regardless of whether or not the treasure was returned"*
- Patch 1.0: *"The mandatory hard cap at the end of missions has been removed: players can now remain on the mainland as long as they can survive"*

That last one is the real difficulty dial, and it is player-controlled: **you decide how long to
stay.** Nothing forces you out except the forest.

### The Forest Awakens — the escalating clock

This is the game's genuine endgame pressure, and it is official:

> *"Enemies take longer to spawn when the forest wakes up."* — Patch 1.01 notes

The forest waking up is a timed escalation inside every expedition. The press briefing for the game
describes the AI Director behind it: *"Cthulhu's new gig as an AI Director"* (Rock, Paper, Shotgun,
a feed item on the game's own Steam news page). The best available evidence for the *timing* is
player-reported and inconsistent:

| Phase | What changes | Source |
|-------|--------------|--------|
| Quiet | Standard patrol spacing, predictable routes | Official gameplay descriptions |
| Waking | Spawn rate climbs; enemies converge on noise | Patch 1.01 (spawn timing), player reports |
| Awake | Sustained pressure — the run is over when you decide it is | Player reports |

`[Unconfirmed — community reports put the onset loosely in the 30–45 minute window, but no official
figure exists and reports are not consistent]`

There is one other documented way to escalate a run on purpose: **send the Ox Wagon back.** Players
report the driver blows a horn and *"enemy spawns drastically increase"* — which is why the same
players advise against it. See the [Extraction Guide](/guides/extraction-guide).

### Squad scaling

The game scales pressure against your group in ways the patch notes document directly:

- *"Migo enemy captures players for less time in Single-Player"* — patch 1.02. Solo play gets a softer version of at least one grab attack.
- *"Fix for multiple enemies of the same class spawning in some missions"* — patch 1.02. Spawn composition was bugged at launch, so "too many of the same elite" was a defect being fixed, not a difficulty tier.
- *"Rescuing a character in the mainland means a contract is successful regardless of whether or not the treasure was returned"* — patch 1.02, a mercy rule, not a modifier.

---

## How to make the game harder on yourself

There is no setting, but the levers are real and they compound:

1. **Stay longer.** The forest clock is the difficulty. Extracting early is easy mode.
2. **Take the richest contract on the board.** Token payout scales with tier; so does the danger.
3. **Send the Ox Wagon home.** Documented to spike enemy spawns — the community's standard "why would you ever" button.
4. **Bring the wrong guns when it rains.** A soaked fuse means gunpowder weapons will not fire; *"A soaked fuse means your gunpowder weapons won't fire when you need them most."*
5. **Split the party.** Sanity effects are per-player, but the errors they cause are team-wide, and the game has no dodge to escape a bad position.

---

## Why this page was rewritten

The old page described a full difficulty mode. Every element was invented:

| Old claim | Evidence |
|-----------|----------|
| A "Nightmare Mode" unlocked after completing every contract tier | `nightmare` = **1 hit** in all 39 official announcements, and it is figurative — *"they're all leading to a new nightmare"* |
| Unlock requirements: "Galleon Rank 4", "10 Hard daily challenges", "Legendary contract" | No official source mentions a Galleon Rank, Hard daily challenges, or a Legendary contract tier |
| Seven modifiers — Thicker Dark, Bloodthirst, Hollow Veil, Ravenous, Mourning Bells, Twin Shadows, Weight of the Mound | `modifier` = **0 hits** in all 39 announcements and **0** on the store page. Not one of these names appears anywhere |
| Precise modifier effects (40% faster Sanity drain, 3s enemy heal-on-hit, 50% perfect fakes, 30% weaker healing, 15% carry reduction) | No official source publishes any of these numbers |
| A rewards table (Nightmare sigils, weekly exclusive cosmetics, 1.5× Gyldenblood) | Invented |
| "Dangerous modifier combos" | Built on the invented modifiers |
| A "Galleon level / Galleon Rank 4" progression gate | The game has no documented Galleon rank |

**The only community uses of "nightmare" in the review corpus are idiomatic** — *"100% nightmare
fuel - love it"* and *"getting a mixed group together is a nightmare"* — plus one *request* for
random modifiers: *"higher tiers of weapons maybe even with random modifiers to create that sense of
tension."* A request is a gap signal, not evidence the feature exists.

### Method

- **Official corpus:** Steam `ISteamNews` for app ID `2569760`, all **39** items, full text.
- **App-ID check:** `2569760` plus four add-on apps (`4630450`, `4630440`, `4630460`, `4925780`), each queried for its own news feed and returning **0 items** — no second announcement stream exists.
- **Store page:** `appdetails` for `2569760`, English — `nightmare` 0, `modifier` 0.
- **Community corpus:** Steam `appreviews` with `json=1`, independent review IDs retained.

## See also

- [Contracts Guide](/guides/contracts-guide) — how contract tiers work
- [Extraction Guide](/guides/extraction-guide) — the walk out and the forest clock
- [Perks & Progression](/guides/perks-guide) — what progression actually is
- [Characters & Classes](/guides/characters-classes) — no classes, no difficulty tiers
