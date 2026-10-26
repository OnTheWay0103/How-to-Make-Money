---
title: "Neon Abyss 2 Storm Breach: How the Mode Works"
description: "Storm Breach left beta in 1.0. What the mode changes compared with Classic, how 1-4 player co-op runs work in it, and the bugs Veewo fixed after launch."
category: "Mode"
version: "1.0"
updated: "2026-10-26"
keywords: ["neon abyss 2 storm breach", "neon abyss 2 storm raid", "neon abyss 2 game modes", "neon abyss 2 storm breach vs classic", "neon abyss 2 beta branch"]
related:
  - neon-abyss-2-beginner-guide
  - neon-abyss-2-local-co-op
  - neon-abyss-2-boss-list
  - neon-abyss-2-faith-and-hatchmon
  - neon-abyss-2-1-0-update
sources:
  - tier: "Official"
    text: "Steam announcement 'Neon Abyss 2 - Available Now in 1.0' (2026-10-08) — Storm Breach out of beta, described as a faster, more streamlined mode for 1-4 player co-op; Storm Breach fix list"
  - tier: "Official"
    text: "Steam announcement 'Wonder Flow Update Live Now!' (2026-06-14) — Storm Raid beta description: faster, streamlined, no dungeon exploration, battle to battle with upgrades"
  - tier: "Official"
    text: "Steam announcement 'Weekly Update Roundup | October 10–16' (2026-10-19) — localized confirmation button added to the Storm Breach level selection screen"
  - tier: "Official"
    text: "Steam announcement 'Patch Notes 6.26' (2026-06-26) — Continue Game in Storm Raid mode could incorrectly enter Abyss Invasion mode"
  - tier: "Official"
    text: "Steam announcement 'Beta Branch Online Co-op Test Event Is Live!' (2026-06-05) — branch switching steps; different branches cannot play online together"
  - tier: "Editorial"
    text: "The Classic comparison table and the 'who it suits' section are our reading of the official descriptions"
---

Storm Breach is Neon Abyss 2's second mode: a faster, streamlined run with no dungeon exploration, built for one to four players. It spent Early Access on the Beta branch, left beta in the 1.0 update, and is now available to every player as a normal mode selection.

## 1. What Storm Breach Is

Veewo's description from the 1.0 notes is one sentence: "Our newest game mode is now out of beta and available for all players. Storm Breach offers a faster, more streamlined game mode perfect for our 1-4 player co-op."

The fuller description came in June, when the mode was on the Beta branch under the name **Storm Raid**: "a faster, more streamlined mode with no dungeon exploration. Instead, you'll focus on blasting your way through, entering battles, gaining upgrades, and pushing through stage after stage as the challenge ramps up."

Those two sentences define the mode. There is no floor map to clear, no room-by-room exploration, and no branching map route. You take a room, get an upgrade, take the next room, and the difficulty climbs.

A note on the name, because players search for both: the June Beta post calls it Storm Raid, and the 1.0 notes call it Storm Breach. The descriptions match closely, and the June post already framed Storm Raid as preparation for a future major update. `[Unconfirmed]`: Veewo has not published a statement that Storm Raid was renamed rather than replaced, so treat "Storm Raid is the beta name for Storm Breach" as our reading.

## 2. Classic vs Storm Breach

| Aspect | Classic mode | Storm Breach |
|---|---|---|
| Map | Floor exploration with rooms, secrets and a boss portal per floor | No dungeon exploration; battle to battle |
| Pacing | Long runs with exploration time | Streamlined, "faster" by design |
| Progression between fights | Found in rooms, shops and Faith temples | "Entering battles, gaining upgrades, and pushing through stage after stage" |
| Player count | Online co-op up to four | 1-4 player co-op, explicitly framed as the mode's fit |
| Difficulty curve | Per-floor difficulty | "As the challenge ramps up" — continuous escalation |
| Selection | Classic from the bar | Level selection screen (added a localized confirm button in October) |
| Leave and continue | Classic-mode continue logic | `[Unconfirmed]` whether continue behaviour differs from Classic |

The one line that matters most for new players is the second: Storm Breach removes the exploration half of the game. If what you enjoy is routing a floor, opening side rooms and hunting secrets, Classic is the mode that has them. If what you enjoy is the fight-to-upgrade loop, Storm Breach removes the walking between fights.

## 3. How to Get Into Storm Breach

Storm Breach is a mode selection, not a separate download or DLC. The mode has its own level selection screen — the October roundup added "the missing localized confirmation button to the Storm Breach level selection screen," which confirms that screen exists and that you choose a level before entering.

The one hard requirement is build parity in co-op. Veewo's branch post is explicit: "different branches cannot play online together due to version differences." Before you organise a session:

1. **Everyone on the default branch.** The Beta branch is still available and still switches from the main menu or Steam properties; a single Beta player breaks the lobby.
2. **Everyone updated.** The same warning Veewo repeats for every patch applies: finish your current run before updating.
3. **Pick the host deliberately.** The host owns the run's difficulty for minigames and the floor number that reconnecting clients sync to.

If a group member is on the Beta branch because they were testing the mode before 1.0, that is now a downgrade, not an early access. Storm Breach is in the default branch.

Solo play needs no lobby at all: the mode's "1-4 player" range starts at one, and nothing in the official notes gates solo play behind a co-op session. If you are using Storm Breach to practise a boss, go in alone first — a wiped run costs you nothing but the time you were spending anyway.

## 4. What Was Broken, and What Was Fixed

Storm Breach has a short but specific bug history, and it is worth reading before you report something as new.

| Issue | Fix |
|---|---|
| Entering a Faith Room in Storm Breach could leave you unable to teleport back to the main route, "preventing players from becoming trapped and unable to continue the run" | Fixed in 1.0 |
| Getting stuck when returning to the bar after a Storm Breach boss | Fixed in 1.0, along with missing characters at the bar after a host or client disconnected |
| Progress lost when skipping the XP animation | Fixed in 1.0 — progression is now applied separately from the animation |
| Continuing a game in Storm Raid could incorrectly enter Abyss Invasion mode | Fixed in the 6.26 patch |
| Level selection screen missing a localized confirmation button | Fixed in the October 10–16 roundup |
| Some level selection input and back-navigation handling | Improved in the October roundup |

Two of those fixes are worth internalising. The Faith Room trap could end a run outright, so any guide describing Storm Breach before 1.0 is describing a mode that could soft-lock. And the Continue Game bug shows that mode save logic was shared across modes — if you had a strange mode crossover before late June, that was the bug.

## 5. Who Storm Breach Suits

**It suits you if** you have limited time per session and want the run loop without the exploration tax, or if you are practising boss fights and builds with more repetitions per hour. The mode's whole design is "more fights, less walking."

**It does not suit you if** your fun comes from discovery — secret rooms, hidden bosses, the fishing room's day-night cycle, or unlocking things through map exploration. None of that lives in Storm Breach as far as the official notes describe.

It is also the better mode for a first co-op session. Four players exploring separate rooms in Classic is a coordination problem; four players moving through a battle ladder is not.

## 6. What Is Still Unconfirmed

- **Stage count and boss roster per stage.** Veewo describes a ramp, not a list. `[Unconfirmed]`.
- **Whether Storm Breach shares unlocks with Classic.** No official statement. `[Unconfirmed]`.
- **Rewards and achievements specific to the mode.** The 32 Steam achievements are not broken down by mode in any official source. `[Unconfirmed]`.
- **Continue-game behaviour differences.** The 6.26 fix implies separate save logic per mode but does not describe it. `[Unconfirmed]`.
- **Whether Storm Raid and Storm Breach are the same mode under two names.** Strongly implied by the descriptions; not stated. `[Unconfirmed]`.

## 7. FAQ

**Is Storm Breach free?**
Yes. It is a base-game mode released with 1.0, not DLC. The only paid add-on in 2026 posts is Archenemy Returns.

**Do I need the Beta branch for Storm Breach?**
No — that was the June situation. After 1.0 the mode is in the default branch, and staying on Beta will block you from co-op with default-branch players.

**Can I play Storm Breach solo?**
Yes. Veewo's own wording is "1-4 player co-op," which includes one.

**Does Storm Breach have the same bosses as Classic?**
`[Unconfirmed]`. The mode is described as battle-to-battle and is described separately from the boss list, but no official source maps which bosses appear in it.

**Why can't my friend join my Storm Breach lobby?**
Check branches first, then patch level. Branch mismatch is the most common cause of a co-op lobby that will not fill.

## 8. Next

- How co-op actually sets up, and what the fixes cover: [local co-op and online play](/guides/neon-abyss-2-local-co-op)
- Which bosses are named and how they unlock: [boss list](/guides/neon-abyss-2-boss-list)
- Everything 1.0 changed: [1.0 update notes](/guides/neon-abyss-2-1-0-update)
- Faith and Hatchmon spending inside the mode: [Faith System](/guides/neon-abyss-2-faith-and-hatchmon)
