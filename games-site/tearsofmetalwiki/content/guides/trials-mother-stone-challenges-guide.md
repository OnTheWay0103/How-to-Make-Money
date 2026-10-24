---
title: "Tears of Metal Trials & Mother Stone Challenges — Levels, Co-op Progress and Rewards Explained"
description: "Tears of Metal has two different systems players call 'challenges'. This guide separates the Mother Stone Challenge / Trials difficulty ladder from the optional in-fight challenge events, explains the per-hero unlock rules Paper Cult described, why co-op progress can fail to count, and which rewards are actually documented."
category: "Mechanics"
version: "Early Access"
updated: "2026-10-24"
keywords:
  - "tears of metal trials"
  - "tears of metal mother stone challenge"
  - "trials of the mother"
  - "tears of metal challenge rewards"
  - "tears of metal trial levels"
  - "mother stone challenge 9 not counting"
  - "tears of metal challenge chest"
  - "tears of metal co op challenge progress"
related:
  - "patch-notes"
  - "co-op-guide"
  - "achievements-guide"
  - "threat-level-difficulty-guide"
  - "progression-walkthrough"
  - "tears-of-metal-experimental-branch-guide"
sources:
  - tier: "Official"
    title: "Patch Notes — 2026-09-08 — Big Bug Fixing Pass"
    url: "https://store.steampowered.com/news/app/1913120/view/1842846814456327"
    date: "2026-09-08"
    text: "Paper Cult's September 8, 2026 patch notes confirm that Trials exist as a per-Hero progression path: 'Fixed Trials sometimes unlocking in multiplayer before the selected Hero was able to attempt them.' The same patch also lists multiplayer, reward-screen, enemy-status and Companion fixes used as context in this guide."
  - tier: "Official"
    title: "What We're Working On"
    url: "https://store.steampowered.com/news/app/1913120/view/1844115010495854"
    date: "2026-09-18"
    text: "Paper Cult's September 18, 2026 developer update describes planned 'new possible Challenge rewards (other than just charms & threat reduction)', which establishes that Charms and Threat reduction were the documented Challenge rewards before the October experimental build."
  - tier: "Official"
    title: "The Experimental Branch Update"
    url: "https://store.steampowered.com/news/app/1913120/view/1847286114029005"
    date: "2026-10-21"
    text: "The October 21, 2026 experimental branch notes define in-run Challenges as 'optional multi-wave objectives you encounter during fights', state that Challenges can now reward healing, currency and passive Emblems, and add a Cartographer shop item that unlocks new Challenge Rewards. These features are branch-only at the time of writing."
  - tier: "Official"
    title: "Patch Notes — Version 0.8.57278"
    url: "https://store.steampowered.com/news/app/1913120/view/1839041357030696"
    date: "2026-07-24"
    text: "The July 24, 2026 patch notes name a specific in-run Challenge, 'Special Challenge: Infestation', and record a fix for it being completed by doing nothing for 20 seconds. This is the clearest official confirmation that in-run Challenge events are named, discrete objectives."
  - tier: "Community"
    title: "No progress after Mother Stone Challenge 9?"
    url: "https://steamcommunity.com/app/1913120/discussions/2/568174939259033776/"
    date: "2026-10-20"
    text: "A Steam Bug Reports EA thread opened October 20, 2026, in which a co-op client reports that Mother Stone Challenge 8 did not increment for them while it did for the host. Paper Cult community developer WoofgangPCG replied with the progression rules quoted in this guide: levels increment by 1 for the character played on a successful run, the host selects the challenge level, clients may bring any character, and each player's local level rises by 1 on completion if it was lower than the host's selected level."
  - tier: "Community"
    title: "Trials of the Mother need better rewards"
    url: "https://steamcommunity.com/app/1913120/discussions/4/583929583674345443/"
    date: "2026-07-25"
    text: "A Suggestions & Ideas thread from July 25, 2026, arguing that higher Trials make runs roughly twice as long and harder for what the poster estimates as about +2.5% rewards. A reply adds that enemies already feel like damage sponges and that doubling their health for a small bonus is not worth it. Used here as player perception, not as a confirmed multiplier."
  - tier: "Community"
    title: "middle lv challege flag dont give rewards after quest"
    url: "https://steamcommunity.com/app/1913120/discussions/2/573801622447315677/"
    date: "2026-09-23"
    text: "A September 23, 2026 Bug Reports EA post stating that a mid-level Challenge flag did not award a reward chest after the objective was completed, and that this happened roughly three times in one game. Used as evidence of a reported reward-delivery problem, not as proof that Challenges never reward players."
  - tier: "Community"
    title: "Steam review — 96.2 hours, October 20, 2026"
    url: "https://steamcommunity.com/profiles/76561198082312029/recommended/1913120/"
    date: "2026-10-20"
    text: "A positive Early Access review that praises the meta-progression volume and mentions 'grinding for trial level 10', confirming that players reach at least Trial 10. The same review notes a lack of boss variety and performance problems on the last map."
  - tier: "Community"
    title: "Curse/ side mission/challenges"
    url: "https://steamcommunity.com/app/1913120/discussions/0/644685477979451802/"
    date: "2025-04-11"
    text: "A pre-launch demo-era discussion in which a player asks 'What are they?' about Challenges and says they usually finish a mission without seeing an additional reward. Because it predates Early Access, it is used only as an early example of the terminology confusion, not as evidence about the current build."
  - tier: "Editorial"
    title: "Interpretation and workarounds"
    url: "https://tearsofmetalwiki.vercel.app/guides/trials-mother-stone-challenges-guide"
    date: "2026-10-24"
    text: "The two-system framing, the co-op troubleshooting order, the suggested reward-value test, and the advice on when to stop climbing are this guide's editorial assessment built from the sources above."
---

# Tears of Metal Trials & Mother Stone Challenges — Levels, Co-op Progress and Rewards Explained

Tears of Metal uses the word **challenge** for two different things, and most confusion comes from mixing them up. One is a **difficulty ladder** chosen before a run — patch notes call these **Trials**, Paper Cult developers call them **Mother Stone challenges**, and players call them **Trials of the Mother**. The other is an **optional objective that appears during a fight**, defined in the October 21 notes as "optional multi-wave objectives you encounter during fights." [Official]

They share a name and part of a reward pool, but they behave nothing alike.

## The two systems at a glance

| | Mother Stone Challenges (Trials) | In-run Challenge events |
|---|---|---|
| When you meet it | Selected before a campaign | Appears during a battle |
| What it changes | Overall difficulty for the run | A local, optional objective |
| How you advance | Finish a successful run at your current level | Complete it before the mission ends |
| Documented rewards | Charms and Threat reduction [Official] | Loot chests; Charms and Threat reduction [Official] [Community] |
| Known issue | Co-op client progress can fail to count [Community] | Reward chest can fail to appear [Community] |

## Part 1: Mother Stone Challenges (the Trial ladder)

### What the ladder is

The ladder is a numbered difficulty tier. Players refer to "Trial 1" through "Trial 9" or "Trial 10", and a 96-hour Steam review mentions "grinding for trial level 10", so at least ten levels are reachable in practice. [Community] Paper Cult has not published a total count. [Unconfirmed]

It appears under three names: **Trials** in the September 8 patch notes, **Mother Stone challenges** in a developer reply, and **Trials of the Mother** in community thread titles. [Official] [Community]

### How progression actually works

The game barely explains this, so here are the rules Paper Cult's community developer **WoofgangPCG** stated in an October 2026 bug thread: [Community]

- Levels increment by **1 for the character you played**, on a **successful run**.
- The ladder is **per hero**, not per account. Progress on Ruadh does nothing for your Wallace ladder.
- In **multiplayer**, the **host selects** the challenge level.
- Clients may bring **any character** into that run.
- On completion, each player's local level rises by 1 **for the character they were playing**, but only if that level was **lower** than the host's selected level.

So if you are at Challenge 2 on Brienne and join a host running Challenge 9, you do not jump to 9 — you move to 3. The system increments by one rather than copying the host's level. [Community]

The September 8 patch notes are consistent with this: Trials could unlock "before the selected Hero was able to attempt them," which only makes sense for per-hero tracking. [Official]

### When does the ladder appear?

Players report that it unlocks after completing a campaign — the co-op bug report below begins "Host and I beat the game together... and unlocked mother-stone challenges." [Community] Paper Cult has not published the exact condition, so treat that as the observed route, not a documented requirement. [Unconfirmed]

### The co-op progress bug

On **October 20, 2026**, a player reported that they and a friend cleared Mother Stone Challenge 8 together and only the host's game advanced. The client's Challenge 9 did not unlock, despite both players using the same characters from Challenge 1 onward. Paper Cult replied in the thread asking for the client's pre-run level and whether it changed; the issue was still under investigation. [Community]

If it happens to you, check in this order:

1. **Confirm the hero.** Progress is per character; a level gained on one hero does nothing for another. [Community]
2. **Check whether your local level was already at or above the host's selected level.** If so, no increment is expected. [Community]
3. **Re-run with the host selecting a level at or below your unlocked level.** That matches the condition the developer described. [Editorial]
4. **Record before-and-after levels and submit logs.** On the experimental branch, **F3** opens the in-game bug reporter. [Official]
5. **Do not assume a disconnect caused it.** The reported case had no lag, and the host still advanced. [Community]

### Difficulty and rewards

The documented reward pool is **Charms** and **Threat reduction**; the September 18 update refers to "new possible Challenge rewards (other than just charms & threat reduction)." [Official] The October 21 experimental branch adds **healing, currency and passive Emblems**, plus a **Cartographer** shop item that unlocks new Challenge Rewards. Those additions are branch-only. [Official]

Players report the difficulty side less precisely:

- "Now trial 3 bosses have more health." [Community]
- One Suggestions poster estimates higher Trials make a run roughly **twice as long and harder** for about **+2.5% rewards**. That figure is one player's estimate, not a published multiplier. [Community] [Unconfirmed]

So the direction is confirmed — higher Trials are harder and pay more — while the size of both sides is undocumented. [Editorial]

### Is climbing worth it?

The ladder is a self-imposed difficulty track, not a required progression path. A 96-hour reviewer was still grinding toward Trial 10; another player wrote that after completing Trial 5, "anything after that is not worth it." [Community]

A practical test: climb one level, compare the reward screen with your previous run, and decide from your own numbers. If the extra time is not buying upgrades you feel, stop climbing and put the time into Village meta-progression instead. [Editorial]

## Part 2: In-run Challenge events

These are optional objectives that spawn **inside a fight**. Paper Cult describes them as "optional multi-wave objectives you encounter during fights," and the July 24 patch names one: **"Special Challenge: Infestation."** [Official]

They are not the Trial ladder, and not every side objective is a Challenge — a rescue event or supply-crate search can be optional content without being one. [Editorial]

Documented rewards are **Charms** and **Threat reduction** on the main branch, with **healing, currency and passive Emblems** added on the experimental branch. [Official] Players also describe loot chests dropping after completing in-run objectives. [Community]

The common complaint is not difficulty but visibility: a demo-era player asked "What are they?" and said they usually finished a mission "without seeing an additional reward or anything." [Community] That thread predates Early Access, so it is not proof about the current build — but it matches how the system is still discussed. [Editorial]

Two habits help: read the objective banner when a fight starts, and finish the objective before the mission ends, since the window closes with the battle. [Editorial]

### The missing reward chest

A September 23, 2026 bug report states that a mid-level Challenge flag did not award a reward chest after completion, roughly three times in one game. [Community]

If that happens:

1. **Check the ground around the objective marker** before moving on — chests can spawn away from the last kill. [Editorial]
2. **Do not expect a retroactive grant.** No official statement says missing Challenge rewards are recoverable. [Editorial]
3. **Report the mission, Act and Challenge name.** This is the kind of report the F3 tool on the experimental branch is for. [Official]

## What is not confirmed

- The **total number of Trials** — players reach Trial 10; the cap is unpublished. [Unconfirmed]
- The **exact unlock condition** for the ladder — community says a completed campaign; Paper Cult has not stated it. [Unconfirmed]
- **Exact scaling multipliers** for enemy health, boss health and rewards per Trial. [Unconfirmed]
- Whether **missing Challenge chests** are recoverable. [Unconfirmed]

## FAQ

**Do Trials unlock account-wide or per hero?**
Per hero. Paper Cult's explanation says levels increment for "your played character," and the September 8 notes describe Trials unlocking per selected Hero. [Official] [Community]

**Can I join a friend's high Trial and skip the ladder?**
You can join, but your own level rises by one per successful run, and only if it was below the host's selected level. You cannot jump straight to the host's level. [Community]

**Are Challenge rewards the same as Achievement rewards?**
No. Achievements are a separate Steam track covered in the [Achievements Guide](/guides/achievements-guide). Challenge rewards are Charms, Threat reduction, and — on the experimental branch — healing, currency and passive Emblems. [Official]

**Why did my level not increase after a win?**
Check the hero, whether your level was already at or above the host's selection, and whether the run completed successfully. If all three are fine, it may be the reported co-op progression bug. [Community] [Editorial]

## Related Guides

- [Patch Notes & Roadmap](/guides/patch-notes) — every confirmed build and what changed
- [Co-op Guide](/guides/co-op-guide) — team roles, hosting and multiplayer progression
- [Threat Level & Difficulty Guide](/guides/threat-level-difficulty-guide) — the in-run difficulty system Challenges interact with
- [Progression Walkthrough](/guides/progression-walkthrough) — Act-by-act preparation
- [Experimental Branch Guide](/guides/tears-of-metal-experimental-branch-guide) — where the new Challenge rewards currently live
- [Achievements Guide](/guides/achievements-guide) — the separate Steam achievement track
