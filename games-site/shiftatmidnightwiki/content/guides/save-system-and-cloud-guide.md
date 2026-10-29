---
title: "Shift At Midnight Save Guide: Autosave, Cloud & Co-op"
description: "Shift At Midnight autosaves only at the end of a shift, with no manual save. How Steam Cloud, co-op host saves, save-file locations and backups actually work."
category: "Guides"
version: "1.0"
updated: "2026-10-30"
date: "2026-10-30"
keywords:
  - "shift at midnight save"
  - "shift at midnight autosave"
  - "shift at midnight cloud save"
  - "shift at midnight save file location"
  - "shift at midnight co-op save"
  - "shift at midnight backup save"
  - "shift at midnight progress not saving"
  - "shift at midnight steam cloud"
related:
  - "pc-performance-guide"
  - "multiplayer-faq-guide"
  - "coop-strategy-guide"
  - "solo-guide"
  - "endings-guide"
  - "patch-notes-history"
sources:
  - tier: "Official"
    title: "Steam announcement — '15 CUSTOMERS + BUG FIXES' (app 3722330)"
    url: "https://steamcommunity.com/ogg/3722330/announcements/detail/672877388439226838"
    date: "2026-08-20"
    text: "Read verbatim from the Steam News API. The changelog includes the line 'Added cloud saves for Steam', alongside 'Added individual volume sliders for each player', 'Equalized product prices so getting true ending is less RNG' and 'Fixed issue with some start-of-shift notes not being randomized'. This is the only official statement that Steam Cloud support exists; the announcement does not describe autosave timing, save-file paths or co-op ownership."
  - tier: "Community"
    title: "Shift At Midnight save files, Steam Cloud, and manual backups (shiftatmidnight.wiki)"
    url: "https://shiftatmidnight.wiki/guide/saves/"
    date: "2026-10-30 (accessed)"
    text: "Fetched in full. States there is no manual save and the game saves 'only at shift end or major story beats'; recommends 'Use quit to menu — never force-kill' because the results screen appears 'before the write completes'. Gives the Windows path '%USERPROFILE%\\AppData\\LocalLow\\Kwalee\\ShiftAtMidnight' and stresses '%AppData% (Roaming) folder is wrong'. Puts Steam Cloud on the August 20–21 patch, gives the cloud copy path 'userdata\\<SteamID>\\3722330', says online sessions use 'the host's save', and gives the Proton path 'compatdata/3722330/pfx/drive_c/users/steamuser/AppData/LocalLow/Kwalee/ShiftAtMidnight'. Also warns that switching folders pauses cloud upload and that a full party wipe only restarts the current shift."
  - tier: "Community"
    title: "Does Shift at Midnight Save? The Save File Location Guide (TposeGaming)"
    url: "https://tposegaming.com/does-shift-at-midnight-save/"
    date: "2026-07-28 (updated 2026-07-29)"
    text: "Fetched in full. Written before the August cloud-save patch, so its cloud paragraph ('Steam Cloud support is listed for the game, though whether it's on by default isn't confirmed anywhere') is superseded by the official August announcement. Still useful for the save system: 'The game autosaves once a shift or major objective is completed', 'There's no Save Game option in the pause menu', and the exact path 'C:\\Users\\[Your User Name]\\AppData\\LocalLow\\Kwalee\\ShiftAtMidnight'. On co-op it says host ownership 'isn't confirmed anywhere yet' and recommends treating the host's save as the one that counts. Also notes Steam progress does not sync with Xbox or Game Pass."
  - tier: "Community"
    title: "Shift At Midnight Save File Location (Windows) (Checkpoint64)"
    url: "https://checkpoint64.com/games/shift-at-midnight/save/"
    date: "2026-10-30 (accessed)"
    text: "Fetched in full. Independently confirms the Windows path: 'Shift At Midnight stores its save files at %USERPROFILE%\\AppData\\LocalLow\\Kwalee\\ShiftAtMidnight on Windows.' On co-op it states the folder 'usually lives on one person's PC — whoever hosts', that 'When they're offline nobody else can carry on', and that separate sessions can overwrite each other. It does not mention Steam Cloud."
  - tier: "Community"
    title: "Shift At Midnight Save: Autosave and Cloud Saves (shiftatmidnightonline.com)"
    url: "https://shiftatmidnightonline.com/guides/shift-at-midnight-save"
    date: "2026-10-30 (accessed)"
    text: "Corroborates autosave at shift boundaries and Steam Cloud support, and repeats that Steam and Xbox saves do not transfer. Used only as a cross-check on the two points above, not as the sole source for any claim."
  - tier: "Editorial"
    title: "Backup order, troubleshooting order and the co-op host rule"
    url: "https://shiftatmidnightwiki.vercel.app/guides/save-system-and-cloud-guide"
    date: "2026-10-30"
    text: "The backup procedure, the troubleshooting order and the practical co-op recommendation are our synthesis of the sources above. They are operational advice, not developer statements."
---

# Shift At Midnight Save Guide — Autosave, Steam Cloud and Co-op Saves

Shift At Midnight has no manual save. It writes progress at the end of a shift or a major story objective, and Steam Cloud support arrived in the August 2026 update. Co-op runs use the host's save, which is the single most important thing to understand before you invite friends.

## How saving actually works

There is no Save Game entry in the pause menu. The game checkpoints automatically when a shift or a major objective completes, not after every sale or every cleaned aisle. [Community] That is why quitting mid-shift can cost you the work you just did: the last safe point is the previous shift boundary.

The exit routine matters more than it looks. Community documentation warns that the results screen can appear before the file write finishes, and recommends using **Quit to Menu** rather than closing the process. Force-killing the game — Alt-F4, Task Manager, console shutdown — during a night transition is the documented way to risk a corrupted Story Mode save. [Community]

| Action | What the game does |
|---|---|
| Finish a shift or major objective | Writes a checkpoint [Community] |
| Complete small in-store tasks | No save on its own [Community] |
| Quit to Menu after a shift | Lets the write finish [Community] |
| Force-kill during a night transition | Can corrupt the save [Community] |
| Full party wipe | Restarts the current shift; money and rating stay [Community] |

The last row is worth separating from a "game over". A wipe does not erase your campaign; it sends you back to the start of that shift. The exception is the Shift 13 finale, where a failed run applies a permanent rating penalty to that save slot. [Community]

## Does Shift At Midnight have Steam Cloud?

Yes. Steam Cloud was added in the **20 August 2026** "15 CUSTOMERS + BUG FIXES" update, and the developer's changelog says it plainly:

> "Added cloud saves for Steam" [Official]

Enable it in Steam under **Library → right-click Shift At Midnight → Properties → General → Steam Cloud**. [Community] If Cloud was off, turn it on before you next close the game, otherwise the local save is the only copy.

Two limits are worth knowing:

- **Steam Cloud works within Steam, including Steam Deck.** It does not move progress between Steam and Xbox or PC Game Pass. [Community]
- **Xbox Play Anywhere is a separate ecosystem.** It syncs the Xbox Series X|S version with the Windows Microsoft Store version through the Microsoft account; Steam progress stays on Steam. [Community]

Because cloud support only arrived in late August, any guide written before then that calls the game local-only is out of date. That includes some otherwise accurate save-location articles.

## Where the save files live

Three independent community sources agree on the Windows location, and it is **LocalLow**, not Roaming. [Community]

| Platform | Path |
|---|---|
| Windows (local save) | `%USERPROFILE%\AppData\LocalLow\Kwalee\ShiftAtMidnight` |
| Windows (Steam Cloud copy) | `Steam\userdata\<SteamID>\3722330` |
| Steam Deck / Linux (Proton) | `compatdata/3722330/pfx/drive_c/users/steamuser/AppData/LocalLow/Kwalee/ShiftAtMidnight` |

The most common mistake is opening `%AppData%`, which lands in **Roaming**, and concluding the save is missing. It is not there. Use `Windows + R` and paste the full LocalLow path instead. [Community]

If you are on Steam Deck, do not copy a save into the demo's Proton prefix. The retail app ID is **3722330**; the demo uses a different prefix, and mixing them is a support problem rather than a migration. [Community]

## Co-op: whose save is it?

Online sessions use the **host's** save. Community documentation is consistent on this: the campaign folder lives on the host's PC, and if the host is offline, nobody else can continue that world. [Community] If two people host the same campaign independently, one session can quietly overwrite the other. [Community]

Whether a guest keeps any personal progress from a hosted run is **not officially documented**. One source explicitly says host ownership "isn't confirmed anywhere yet" and recommends treating the host's save as the authoritative one until the developer clarifies it. [Community] Our practical rule follows from that:

1. **Agree on one host before the first shift.** Do not alternate hosts for the same campaign.
2. **Back up the host's save before the session.** The folder is small; copy it while the game is closed.
3. **Let the host quit through the menu.** The host is the one whose file is being written.
4. **Do not assume a guest's solo campaign advanced.** Play the guest's own save separately if that progress matters.

For the wider co-op setup — invites, lobby size, voice chat — see the [Multiplayer FAQ](/guides/multiplayer-faq-guide) and [Co-Op Strategy Guide](/guides/coop-strategy-guide). For a solo run, the same save rules apply, but there is no host ambiguity; see the [Solo Guide](/guides/solo-guide).

## Backing up before the endings

The ending branch is the one place where a save backup is genuinely worth the two minutes, because the game does not offer manual save slots.

1. Close the game completely.
2. Copy the whole `ShiftAtMidnight` folder from `LocalLow\Kwalee` to a backup location.
3. Play the ending you want.
4. Close the game, restore the copied folder, then relaunch.

There is a cloud trap in step 4. Swapping folders pauses the cloud upload, so if you restore a local backup while a newer cloud copy exists, Steam may later overwrite your good file with the post-ending save. [Community] Before swapping, confirm the local save has finished uploading; when Steam asks which version to keep, do not blindly accept the cloud copy. Back up before a True Ending money run or a Shift 12 branch. [Community]

## Troubleshooting progress that did not save

| Symptom | First thing to check |
|---|---|
| "My save is gone" after browsing AppData | You opened Roaming; the save is in `LocalLow\Kwalee\ShiftAtMidnight` [Community] |
| Progress rolled back a shift | The run ended before the checkpoint; check for a force-kill or crash [Community] |
| Cloud and local versions disagree | Pick the version with the later shift; do not accept the cloud copy blindly [Community] |
| Corrupted save after a crash | Verify game files first, and only delete the save if a backup exists [Community] |
| Co-op friend cannot continue alone | They were a guest; the campaign belongs to the host's save [Community] |

If the problem is performance rather than saving — stutters, crashes, black screens — the [PC Performance Guide](/guides/pc-performance-guide) covers drivers, settings and the crash-prone Shift 10 transition. Note that its save-path line predates the corrected LocalLow path used here; trust the LocalLow folder above. For what each patch changed, see [Patch Notes & Update History](/guides/patch-notes-history).

## FAQ

**Does Shift At Midnight autosave?**
Yes. It checkpoints at the end of a shift or a major story objective. There is no manual save option. [Community]

**Can I save mid-shift?**
No. Quitting mid-shift returns you to the previous checkpoint. Finish the shift, then quit through the menu. [Community]

**Is Steam Cloud on by default?**
The official patch only says cloud saves were added. Whether the toggle is on by default is not documented; check Properties → General → Steam Cloud before relying on it. [Official / [Unconfirmed]]

**Do I keep progress if I play co-op at a friend's place?**
Treat the host's save as the campaign. Guest progress retention is not officially documented. [Unconfirmed]

**Does my Steam save transfer to Xbox or Game Pass?**
No. Steam Cloud stays inside Steam; Xbox Play Anywhere syncs only between Xbox and the Microsoft Store version. [Community]

**What happens if the whole team wipes?**
The current shift restarts; money and store rating are retained. A failed Shift 13 finale adds a permanent rating penalty. [Community]

## What is not confirmed

- Whether a guest retains any personal progress after a hosted session.
- Whether Steam Cloud is enabled by default for existing installs.
- The exact set of "major objectives" that trigger a checkpoint beyond shift completion.
- Whether the game prompts on a cloud/local conflict or resolves it silently.

We have not invented numbers or menu labels for any of these. The confirmed facts are the official cloud-save line and the save behaviour documented by multiple independent community sources.
