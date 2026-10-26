---
title: "Neon Abyss 2 Achievements: 32 on Steam, 10→3 Change"
description: "Neon Abyss 2 has 32 Steam achievements, ten officially named, and 1.0 added them on every platform with auto-pop. What is confirmed, and what stays unconfirmed."
category: "Achievements"
version: "1.0"
updated: "2026-10-26"
keywords: ["neon abyss 2 achievements", "neon abyss 2 achievement guide", "neon abyss 2 100 percent", "neon abyss 2 achievements list", "neon abyss 2 clear the game achievement"]
related:
  - neon-abyss-2-agents
  - neon-abyss-2-beginner-guide
  - neon-abyss-2-boss-list
  - neon-abyss-2-1-0-update
  - neon-abyss-2-codes
sources:
  - tier: "Official"
    text: "Steam store API for appid 2235200 (fetched 2026-10-26) — achievements total 32, with ten named: Into the Abyss, In the Zone, Baptism of Fire, Chaos Unleashed, The Heretic Awakens, Prelude to Deicide, New Gods' Demise, Upgrade Initiated, Keep Accelerating, Performance Unleashed"
  - tier: "Official"
    text: "Steam announcement 'Neon Abyss 2 - Available Now in 1.0' (2026-10-08) — Steam achievements added at 1.0, available on every platform, already-satisfied criteria pop automatically"
  - tier: "Official"
    text: "Steam announcement 'Weekly Update Roundup | October 10–16' (2026-10-19) — clear-the-game achievement reduced from 10 different agents to 3, with progress tracking fixed and historical clears backfilled"
  - tier: "Editorial"
    text: "The interpretation of what the 10→3 change means for planning, and the tracking advice, are ours; no achievement conditions are published"
---

Neon Abyss 2 has **32 Steam achievements**, ten of which Steam names publicly. Achievements arrived at 1.0 on every platform, already-completed conditions popped automatically, and the achievement that once required ten different Agents now needs three. Here is everything confirmed, and what stays unconfirmed.

## 1. What the Numbers Are

| Fact | Value | Source |
|---|---|---|
| Total achievements on Steam | **32** | Steam store API, 2026-10-26 |
| Publicly named achievements | **10** | Steam store API (highlighted list) |
| Achievement support added | 1.0, October 8, 2026 | 1.0 announcement |
| Platforms | "Now available on every platform" | 1.0 announcement |
| Retroactive unlocking | Yes — already-satisfied criteria "should pop for you automatically" | 1.0 announcement |
| Agents required for the clear-the-game achievement | **3** (was 10) | October 10–16 roundup |

The 32 figure is the one hard number available. Everything else about conditions and rewards is not published, and this page does not guess at it.

## 2. The Ten Named Achievements

Steam exposes ten achievement names. It does not expose their conditions in the public API, and Veewo's posts do not describe them, so the table lists names only:

| Achievement |
|---|
| Into the Abyss |
| In the Zone |
| Baptism of Fire |
| Chaos Unleashed |
| The Heretic Awakens |
| Prelude to Deicide |
| New Gods' Demise |
| Upgrade Initiated |
| Keep Accelerating |
| Performance Unleashed |

We deliberately do not attach conditions to those names. "Prelude to Deicide" reads like a god-kill milestone and "Into the Abyss" reads like a first-run achievement, but a name is a hint, not a description, and writing out twenty-two more conditions from pattern-matching would be inventing data. If you want the conditions, open the Steam achievement page in your client — that reflects the game, not a wiki.

## 3. Why There Is No Full Official List

Three reasons, all visible in the official material:

- **The 1.0 notes never list achievements.** They announce that Steam achievements exist and that they pop retroactively, then move on to the set reworks.
- **The Steam API exposes only a highlighted subset.** The public appdetails response returns the total plus ten names, not the full table.
- **Conditions change with patches.** The October roundup changed one achievement's requirement by a factor of three. Any list frozen before October 19 is already wrong.

That last point is the useful one. Achievement requirements are balance data, and balance data moves. A page that lists 32 conditions with confident numbers is either reading them from the client or making them up.

## 4. The 10→3 Change, and What It Actually Changes

The October roundup's wording matters:

> "Reduced the number of different agents required to clear the game for the related achievement from 10 to 3. Fixed incomplete progress tracking and added missing progress from existing historical clears."

Three facts in one sentence:

1. **The requirement is three different Agents**, not three clears with one.
2. **Tracking was broken**, so some players were stuck below what they had actually earned.
3. **Historical clears were backfilled**, meaning your old runs count after the update.

For planning, this is the single largest achievement change in the game's history. Ten distinct clears with ten distinct Agents was a long project; three is a normal weekend, and it makes the Agents roster a short checklist rather than a grind.

The practical route: clear once with the Agent you understand best, then take Tino and R-7 — the two whose mechanics are documented — so you are not learning a kit on a final-floor run. Details on the roster are on the [Agents page](/guides/neon-abyss-2-agents).

## 5. How Achievements Behave in Practice

Confirmed behaviour:

- **They are platform achievements**, not an in-game checklist. Steam, and the equivalent systems on consoles, own the list.
- **They pop retroactively on 1.0.** If you cleared something during Early Access, the unlock fires when you first launch the 1.0 build — you do not need to redo it.
- **They are separate from per-Agent profiles.** An Agent profile tracks "boss kill record and highest Fate record"; that is your own record, not an achievement requirement.

Not confirmed, and worth knowing before you plan a completion run:

- Whether co-op clears count for a client. The notes describe the requirement count but not who gets credit. `[Unconfirmed]`.
- Whether achievements exist for the Archenemy Returns DLC. The DLC is referenced in 2026 posts, but no achievement list is attached to it. `[Unconfirmed]`.
- Whether any achievement is missable within a run. `[Unconfirmed]`.
- Whether the console versions use the same 32 entries or a different number. Veewo says "every platform" but publishes no platform-by-platform count. `[Unconfirmed]`.

## 6. Three Trackers, Not One

It is easy to conflate the systems that remember your progress, and each one answers a different question:

| Tracker | What it records | Where you see it |
|---|---|---|
| **Achievements** | Platform-level unlocks, tied to conditions Veewo does not publish | Steam client, and the equivalent list on consoles |
| **Agent profiles** | Per-Agent boss kill record and highest Fate record | In the bar, per Agent, added in 1.0 |
| **Save files** | Run state, unlocks and progression data | Save selection, plus Steam Cloud backup |

The practical difference is retroactivity. Achievements pop for work you already did — the 1.0 notes say already-satisfied criteria fire automatically, and the October patch backfilled the old ten-Agent requirement. Agent profiles are a record, not a reward: they show history without unlocking anything. Saves are the fragile one, and 1.0 shipped a long list of save fixes plus paired Steam backup and restore of the main save and its progression data.

So if an achievement does not appear after a clear, the first question is whether you were on a save that ever recorded the event, and the second is whether your build predates the October tracking fix. Neither answer requires guessing at conditions.

## 7. Completion Planning Without Guessing

If your goal is 100%, the honest plan is short:

1. **Play the game on the current default branch.** Half the achievement complaints in the game's patch history were bug-shaped, and the October build fixed progress tracking explicitly.
2. **Clear with three different Agents.** That is the only requirement the notes publish a number for.
3. **Open the in-client achievement list before targeting anything.** It is the only authoritative list of conditions.
4. **Do not trust a pre-October guide.** The requirement change alone invalidates any list from Early Access.

Anything beyond those four steps depends on conditions nobody has officially published.

## 8. FAQ

**How many achievements does Neon Abyss 2 have?**
32 on Steam, as of the 2026-10-26 store API response.

**Do Early Access clears count?**
Yes. The October roundup backfilled missing progress from historical clears, and the 1.0 notes say already-satisfied criteria should pop automatically.

**What is the hardest achievement?**
`[Unconfirmed]`. No conditions are published, so there is no defensible difficulty ranking. The clear-the-game achievement is no longer the plateau it was before October.

**Does the clear-the-game achievement need three or ten Agents now?**
Three, and they must be different Agents. It was ten before the October patch.

**Are there achievements for the DLC?**
`[Unconfirmed]`. Archenemy Returns is referenced in official posts, but no achievement set is described for it.

**Do I have to play the default branch to earn achievements?**
`[Unconfirmed]` as a rule, but the practical answer is yes: the Beta branch runs a different build, and the tracking fix that makes the clear-the-game achievement accurate shipped to the default branch in October. Beta is for testing, not for completing a list.

**Why did my progress not update after a clear?**
That was the tracking bug fixed in the October 10–16 roundup, with backfill for historical clears. Update to the current default branch and check again.

## 9. Next

- The roster and the 3-Agent route: [Agents](/guides/neon-abyss-2-agents)
- Everything 1.0 added and fixed: [1.0 update notes](/guides/neon-abyss-2-1-0-update)
- Named bosses and their unlock rules: [boss list](/guides/neon-abyss-2-boss-list)
- No redeem codes exist — what to look at instead: [codes page](/guides/neon-abyss-2-codes)
