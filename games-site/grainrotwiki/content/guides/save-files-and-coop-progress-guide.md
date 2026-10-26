---
title: 'Grain Rot Saves & Co-op Progress: What Actually Persists'
description: 'Grain Rot keeps five local save slots and no Steam Cloud, and co-op progress follows the host. What persists, what a wipe costs, and how to back up saves.'
category: 'Game Info'
version: '1.0'
updated: '2026-10-26'
keywords: ['grain rot save file', 'grain rot save location', 'grain rot cloud save', 'grain rot co-op progress', 'grain rot save slots', 'grain rot lost progress', 'grain rot backup save', 'grain rot does progress save']
related:
  - multiplayer-matchmaking-guide
  - co-op-guide
  - outpost-upgrade-guide
  - patch-notes-guide
  - demo-guide
sources:
  - tier: "Official"
    text: "Store feature list — 'Persistent Outpost rebuilding and progression', 'Everything you haul back rebuilds your Outpost', and 'If everyone breaks, your loot is lost' — Steam app data for GRAIN ROT (appid 4450620), read 2026-10-26"
    url: "https://store.steampowered.com/api/appdetails?appids=4450620&l=english"
    date: "2026-10-26"
  - tier: "Official"
    text: "Steam category list for GRAIN ROT includes Family Sharing but does not include Steam Cloud, and no official patch note mentions cloud saves — Steam app data (appid 4450620), read 2026-10-26"
    url: "https://store.steampowered.com/api/appdetails?appids=4450620&l=english"
    date: "2026-10-26"
  - tier: "Official"
    text: "Save-system changes across patch notes: 1.02 (Aug 9) fixed loading a save while offline from Steam; 1.03 (Aug 9) fixed a save loading into a black void and key bindings not saving; 1.04 (Aug 10) client-owned items now drop or move to the lost and found crate; 1.08 (Aug 26) renaming saves in the OS and copying them to different slots now works; 1.1 (Sep 24) raised the maximum number of save slots to 5 and added save-file renaming — official Steam announcements, store.steampowered.com/news/app/4450620"
    url: "https://store.steampowered.com/news/app/4450620/"
    date: "2026-10-26"
  - tier: "Community"
    text: "Review-trend aggregation lists 'No Shared Progression' at 12.5% of negative-review issues, stamped August 8, 2026 — VaporLens GRAIN ROT analysis"
    url: "https://vaporlens.app/app/4450620/grain_rot/stats/analysis"
    date: "2026-10-26"
  - tier: "Community"
    text: "A player-made mod (RotKeep, by MoNikki) exists specifically because run earnings do not reach the Outpost stash after a full wipe: 'Keep your loot when the whole team wipes in Grain Rot' — Thunderstore GRAIN ROT mod listing"
    url: "https://thunderstore.io/c/grain-rot/p/MoNikki/RotKeep/"
    date: "2026-10-26"
  - tier: "Editorial"
    text: "Save-file path, slot-sharing behaviour across Steam profiles, the backup routine, and the report that guest progress follows the host's world are community-reported and not officially documented — grainrotguides.com save-issues page and gamecluebook.com save-progress page, read 2026-10-26; marked [Unconfirmed] throughout"
    url: "https://grainrotguides.com/troubleshooting/save-issues/"
    date: "2026-10-26"
---

# Grain Rot Saves & Co-op Progress: What Actually Persists

Grain Rot stores your progress in **five local save slots**, has **no Steam Cloud sync**, and ties co-op progress to the **host's world**. That means a wipe can cost a run, a friend's Outpost will not follow them home, and an unbacked save file is the only copy you own. Here is exactly what persists.

This page answers what the game never states clearly: when you extract, wipe, or play at a friend's place, what survives? Facts below come from official patch notes or Steam store data unless explicitly marked **[Unconfirmed]**.

## The Short Answer

| Question | Answer | Evidence |
|---|---|---|
| How many save slots does Grain Rot have? | **5** — raised from 3 in Patch 1.1 (September 24, 2026) | Official |
| Does Grain Rot have Steam Cloud? | **Not listed.** Steam's category list for the game includes Family Sharing but not Steam Cloud, and no patch note adds cloud sync | Official |
| Where are the save files? | `%LOCALAPPDATA%\Helden\Saved` (the game's internal name is Helden, not GRAINROT) | [Unconfirmed] |
| Does my friend keep progress from my world? | **No.** Co-op progress is reported to belong to the host's save | [Unconfirmed] |
| Can I back up a save? | **Yes** — since Patch 1.08, renaming and copying save files at the OS level works correctly | Official |
| What do I lose on a full wipe? | The run's unsecured loot. Previously secured Outpost progress is not reset | Official |

## Where Grain Rot Saves Actually Live

Grain Rot's saves are **files on your drive**, not a profile on a server. Two official patch notes prove the model:

- **Patch 1.02 (August 9)** fixed "a bug where you could not load a save file while offline from Steam."
- **Patch 1.08 (August 26)** fixed "renaming save files in the OS and copying them to different slots."

Community coverage reports the folder as `%LOCALAPPDATA%\Helden\Saved`, sometimes with a `SaveGames` subfolder. The internal name **Helden** is why searching your AppData for a "GRAINROT" folder returns nothing. **[Unconfirmed]** — no supported path has been published, and guessing wrong can destroy progress. Verify first: start a new save, then sort the folder by modification date.

## Steam Cloud: What the Store Data Shows

Search "does Grain Rot have cloud saves" and you will find confident answers in both directions. Steam's own app data settles it: the category list for GRAIN ROT (appid 4450620) includes **Single-player, Multi-player, Co-op, Online Co-op, Full controller support, Custom Volume Controls, Family Sharing** — and **not Steam Cloud**.

No patch note between 1.01 and 1.13 mentions cloud saves, and the developer's roadmap (August 12) sets out multiplayer tooling, cosmetics and content updates without mentioning save syncing.

The consequence is blunt: **your progress lives on one PC**. Reinstall Windows, switch to a laptop, or lose the drive, and unless you copied the folder yourself, the Outpost you built is gone. Hence the backup routine below.

## Five Slots, and They Are Not Yours Alone

Patch 1.1 changed the maximum number of save slots **from 3 to 5**, and added in-game save renaming. More slots is not just convenience — it is your backup mechanism.

The trap is that **the slots belong to the PC, not the Steam account**. Community reporting describes all five slots being visible to every Steam profile that plays on the same machine, which matters on a shared or family computer — and Steam's category list does confirm **Family Sharing** is enabled for the game. Someone else's save can be overwritten by someone who assumes slot 1 is theirs. **[Unconfirmed]**

Rename your slots the moment you have more than one. In-game renaming has been official since 1.1, and since 1.08 you can also rename and copy them at the OS level.

## Co-op Progress: Whose Outpost Is It?

This is the complaint that shows up most in progress discussions. Review-trend analysis from the launch window lists **"No Shared Progression" at 12.5% of negative-review issues** — and a player-made mod exists specifically to work around it.

What the official material says is deliberately vague: "Everything you haul back rebuilds your Outpost" and "Persistent Outpost rebuilding and progression." Neither sentence says *whose* Outpost persists when four people play together.

Community reporting fills the gap the same way repeatedly: **progress belongs to the host's world.** Join a friend's session, upgrade their Outpost, extract — those upgrades live in their save, not yours. **[Unconfirmed]** — the developer has not published shared-progression rules, and the [Multiplayer & Matchmaking Guide](/guides/multiplayer-matchmaking-guide) flags the same caveat.

The workaround is not elegant but it is reliable: **host your own runs when you care about your own progress.** Use friends' sessions to learn routes and see later floors without paying the rebuild cost yourself.

> The existence of the RotKeep mod — which banks the crew's run earnings into the Outpost stash on the host's save whether the run succeeds or fails — tells you how much friction this causes. It also confirms the underlying rule: the stash it fills is the **host's**.

## What a Wipe Costs — and What It Does Not

Two different losses get confused constantly:

| Event | What happens |
|---|---|
| Your vessel breaks | Run continues. Your Spark escapes and can possess another vessel before fading out |
| Your whole crew breaks | "If everyone breaks, your loot is lost" — that run's unsecured haul |
| You extract successfully | The haul is banked; previously secured Outpost progress is not reset |

A wipe costs you **the run**, not your account. That distinction matters when you decide whether to push one more room: the downside is the bag you are carrying, not the base you built last week.

## The Lost and Found Crate

One recovery path is officially documented, and it is narrower than people assume. **Patch 1.04 (August 10)** changed client-owned items so they "should now either be dropped on the ground or moved to the lost and found crate" when a player leaves a session — previously those items were destroyed.

Read that carefully: the crate covers **items a client owned when they disconnected**, not a wipe. If your crew all breaks, it does not rescue the haul.

## How to Back Up a Grain Rot Save

Because there is no cloud sync, a manual copy is your only insurance. This routine follows the officially fixed behaviour (1.08 file handling, 1.1 renaming) and the community-reported path:

1. **Close the game.** Copying live save files is how people corrupt them.
2. **Find the folder.** `%LOCALAPPDATA%\Helden\Saved` — sort by date and confirm it updates when you load a save. **[Unconfirmed]**
3. **Copy the whole folder** somewhere with a date in the name, e.g. `Helden-Saved-2026-10-26`.
4. **Do this before every major update.** Patch days are when save-format fixes land — 1.02, 1.03 and 1.08 all touched save loading or save files.
5. **Restore by copying back**, not by editing. Never hand-edit a save file; there is no supported procedure and the developer documents none.
6. **Use a slot as a second copy.** With five slots and in-game renaming, keep one slot as a known-good rollback point you never play on.

## Demo Saves and Old Saves

The demo and the full release are separate builds, and demo progress did not carry into launch. A pre-launch save **may** load, but a fresh save is recommended: quests, balance and progression changed substantially at release. **[Unconfirmed]**

If an old save behaves strangely, start clean rather than debugging a save the game no longer expects.

## Protecting Progress from Strangers

Public servers (Patch 1.07) brought a new way to lose progress: other people. Two official settings exist for this, both worth turning on before hosting for people you do not know:

- **Grief protection** (Patch 1.08) is a per-player setting that "hinders players to perform potential harmful actions outside of the Deep Layers."
- **Anti-grief protected actions** (Patch 1.1) now include **starting the elevator** and renaming signs and rooms.

Neither protects your *save file*. Grief protection limits what other players do inside the game, not what happens on your disk.

## Progress Checklist

- [ ] Rename every save slot — do not rely on "slot 1 is mine"
- [ ] Copy `Helden\Saved` before any patch or update
- [ ] Keep one slot as an untouched rollback point
- [ ] Host your own session when you want your own Outpost to grow
- [ ] Turn grief protection on before hosting public games
- [ ] Do not expect progress to transfer between PCs — there is no cloud sync

## Sources

- **Official:** Steam app data for GRAIN ROT (appid 4450620) — feature list, category list, and the absence of Steam Cloud ([store.steampowered.com/app/4450620](https://store.steampowered.com/app/4450620/)), read 2026-10-26.
- **Official:** GRAIN ROT Steam announcements — Patches 1.02, 1.03, 1.04, 1.08, 1.1, 1.11 and "What's Next for GRAIN ROT" (August 12, 2026) ([store.steampowered.com/news/app/4450620](https://store.steampowered.com/news/app/4450620/)), read 2026-10-26.
- **Community:** VaporLens GRAIN ROT review-trend analysis — "No Shared Progression" at 12.5% of negative-review issues, stamped August 8, 2026 ([vaporlens.app](https://vaporlens.app/app/4450620/grain_rot/stats/analysis)).
- **Community:** RotKeep mod by MoNikki — banks crew earnings to the host's Outpost stash after a wipe ([thunderstore.io](https://thunderstore.io/c/grain-rot/p/MoNikki/RotKeep/)).
- **Editorial (community-derived):** save path, slot-sharing across Steam profiles, guest-progress behaviour and the backup routine — grainrotguides.com ([save-issues](https://grainrotguides.com/troubleshooting/save-issues/)) and gamecluebook.com ([save-progress](https://gamecluebook.com/games/grain-rot/save-progress)), both marked **[Unconfirmed]** where official documentation is silent.

## Related Guides

- [Multiplayer & Matchmaking Guide](/guides/multiplayer-matchmaking-guide) — server browser, lobby privacy, and the co-op progress caveat
- [Co-op Guide](/guides/co-op-guide) — team strategy and what is shared at the team level
- [Outpost Upgrade Guide](/guides/outpost-upgrade-guide) — what you are actually rebuilding between runs
- [Patch Notes & Update History](/guides/patch-notes-guide) — every save-related fix from 1.02 to 1.13
- [Demo Guide](/guides/demo-guide) — why demo progress did not carry over
