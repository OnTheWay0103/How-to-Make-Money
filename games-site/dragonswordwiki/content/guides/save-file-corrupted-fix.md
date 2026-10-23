---
title: 'How to Fix the DragonSword: Awakening "Save File Corrupted" Error (1.1.0)'
description: 'Some DragonSword: Awakening players cannot load their save after the 1.1.0 update. This guide reproduces the official workaround step by step, explains how to protect your save before deleting anything, and covers what to do if the backup is already gone.'
category: 'Troubleshooting'
version: '1.1.1'
updated: '2026-10-23'
keywords: ['dragonsword awakening save file corrupted', 'dragonsword save fix', 'dragonsword awakening save backup', 'dragonsword 1.1.0 save issue', 'dragonsword bak files', 'dragonsword awakening won't load save']
related:
  - "beginner-guide"
  - "faq"
  - "leveling-guide"
  - "equipment-guide"
sources:
  - tier: "Official"
    text: "Known issue notice: save file corrupted and backup loading on startup — official notice published October 20, 2026, reposted by 17173 (https://news.17173.com/content/10202026/225043099.shtml)"
  - tier: "Official"
    text: "Version 1.1.0 update and 1.1.1 hotfix — Steam announcements, October 15, 2026 (https://store.steampowered.com/news/app/4570720)"
  - tier: "Community"
    text: "PlayGround.ru, Update 1.1.0 added Ryza, a training ground, and a wave of nerfs — October 15, 2026 (https://www.playground.ru/dragonsword_awakening/news/obnovlenie_1_1_0_dlya_dragonsword_awakening_dobavilo_geroinyu_rajzu_trenirovochnuyu_ploschadku_i_volnu_nerfov-1881958)"
  - tier: "Community"
    text: "Game*Spark, DragonSword: Awakening version 1.1.0 update coverage — October 15, 2026 (http://www.gamespark.jp/article/2026/10/15/173650.html)"
  - tier: "Editorial"
    text: "Backup discipline, recovery order, and prevention advice are this guide's editorial recommendations"
---

# How to Fix the DragonSword: Awakening "Save File Corrupted" Error (1.1.0)

After the **version 1.1.0** update on October 15, 2026, some DragonSword: Awakening players found they could not start the game. Instead of loading their save, the game displayed a message saying the save file was corrupted and that a backup file was being loaded, with the warning that some content might differ from their previous playthrough.

Hound13 published an official temporary workaround on **October 20, 2026**. This guide reproduces it exactly, explains the order of operations, and covers what to do if you have already deleted something or if the backup does not restore your progress.

**Read this before touching any files:** the official notice stresses making a ZIP backup of your save folder *before* deleting anything. Deleting `.bak` files is the last step, not the first.

## What the Error Actually Says

The official notice describes the symptom as:

> "The save file is corrupted, and the backup file is being loaded. Some content may differ from your previous playthrough."

This is a load-time failure, not a gameplay crash. The game is trying to fall back to a backup, and the backup may be older than your last session. That is why the warning mentions content differing: you may lose progress made between the last good save and the backup.

The notice applies to **Steam / PC**. No other platform is mentioned. The cause was not published, and Hound13 said a permanent fix was in progress with no release date announced.

## Before You Start: Protect the Save

Do these three things first, even if you are not sure you need the workaround:

1. **Close the game completely.** Do not leave it running in the background while you move files.
2. **Find the save folder.** In Steam: right-click **DragonSword: Awakening** → **Properties** → **Installed Files** → **Browse**. Then open `DS\Saved\savegames\`. Inside, you will see a folder named with nine digits — that is your save folder.
3. **Copy that nine-digit folder somewhere safe.** A ZIP on your desktop is fine. Do not move it; copy it. If the workaround goes wrong, the copy is your fallback.

If you use Steam Cloud, do not disable it permanently. The official steps turn it off temporarily so that a cloud sync does not overwrite the local files you are about to repair.

## The Official Workaround, Step by Step

These are the steps from the October 20 notice, in the order the notice gives them:

1. **Switch Steam to offline mode** and **disable Steam Cloud sync** for the game.
2. In your Steam Library, right-click **DragonSword: Awakening** → **Properties** → **Installed Files** → **Browse**.
3. Open `DS\Saved\savegames\` and locate the **nine-digit folder**.
4. **Compress the nine-digit folder into a ZIP backup.** Do not skip this.
5. Open the nine-digit folder and **delete every file ending in `.bak`**.
6. **Launch the game.**
7. **Quit normally** after it loads.
8. Switch Steam back **online** and **re-enable Cloud sync**.

The notice does not say to delete the whole folder, to reinstall the game, or to delete the main save file. The only deletion is the `.bak` files. If a guide tells you to wipe `savegames` entirely, close it — that is not the official procedure and it can cost you the backup the game is currently trying to use.

### Why the `.bak` Files Matter

The error message says the game is loading a backup. The official workaround removes the `.bak` files from the active save folder, then relaunches so the game rebuilds its save state from the remaining data.

The notice does not explain the underlying cause. Do not assume the `.bak` files are "corrupted" in the ordinary sense; the official wording treats them as the thing to clear, not the thing to restore. That is why the ZIP backup comes first: you are keeping a copy of the entire folder, including the files you are about to delete.

## If the Workaround Does Not Restore Your Progress

Try these in order, and stop as soon as you have a working save:

1. **Check the ZIP backup.** Extract it to a separate folder and confirm the nine-digit folder and its files are intact. If they are, you have lost nothing permanent.
2. **Restore the ZIP over the save folder** and relaunch. If the game still reports corruption, the issue is not something a file swap can fix on this build.
3. **Check for a second nine-digit folder.** Some players end up with more than one profile folder after cloud conflicts. Do not delete the extra folder until you know which one the game is reading.
4. **Check Steam Cloud's stored version.** If Cloud sync was on before the issue, Steam may hold a version from a previous session. This is a recovery option, not a guarantee, and it can overwrite local files — back up locally first.
5. **Wait for the permanent fix.** Hound13 confirmed a fix is being worked on. If your save is already backed up, waiting is safer than repeated file surgery.

### If You Already Deleted the `.bak` Files Without a Backup

You have removed the files the official workaround targets, so there is nothing left to restore from that set. Your remaining options are the main save files in the nine-digit folder and any Steam Cloud copy. Do not delete the main save files to "start clean" until you have copied the whole folder somewhere else. A clean start is always available later; your current save is not.

## Prevention Until the Permanent Fix

The error appeared after a major update, which is exactly when save-format changes are most likely. Until Hound13 ships the permanent fix:

- **Make a manual ZIP of `DS\Saved\savegames\` before every major patch.** It takes a minute and costs almost nothing.
- **Do not force-quit during a save.** Quit through the game menu and let Steam finish syncing.
- **Watch for cloud conflicts.** If Steam asks which copy to keep, stop and back up both before choosing.
- **Keep one previous save generation.** If the game writes `.bak` files, copy them rather than relying on them as your only backup.
- **Check the official news hub before patching.** A known-issue notice is faster to read than a corrupted save is to fix.

## What Else Changed in 1.1.0 (Context)

The save issue is not the only thing in this patch, and knowing the rest helps you tell a save bug from a balance change:

- **Ryza** arrived as the 20th playable hero, a spear and lightning fighter built around the Shock status, earned through Adventure Quest 53.
- **Critical-hit calculations were reworked.** Monster crit resistance was removed, while crit stats on gear, runes, and skills were reduced. Players reported large drops in displayed crit chance; the developer described the goal as reducing reliance on a narrow hero pool.
- **Hunt mode gained Hell difficulty**, a score and rank system, and rewards for fast clears and perfect dodges.
- **A Training Ground** opened near Roderic's palace, with configurable dummies and DPS measurement.
- **Quality-of-life changes** included a third food quick-slot, eight new map pin types, and an option to disable hero-swap animations.
- **1.1.1** fixed Ryza being unable to gain levels, a Reina quest step, and an unusable Hunt Rank reward currency.

If your game loads but a character feels wrong, check the crit rework before you assume your save is damaged. The save error is a separate, load-time problem.

## Frequently Asked Questions

**Is my save gone forever?**
Not necessarily. The game is loading a backup, and the official workaround is designed to clear the files blocking that load. Make the ZIP backup first so you always have the original folder.

**Should I delete the whole savegames folder?**
No. The official steps delete only files ending in `.bak` inside the nine-digit folder.

**Does this affect consoles?**
The notice only mentions Steam / PC. No console version is addressed.

**Will verifying game files fix it?**
It may replace game files, but it will not repair a save-folder conflict. Back up the save folder before verifying, and follow the official order if the error persists.

**When is the permanent fix coming?**
No date was announced as of October 23, 2026. The official notice says a fix is in progress.

## Related Guides

- [Beginner Guide](/guides/beginner-guide) — first hours and the tag-team combat loop
- [FAQ](/guides/faq) — release, platform, and multiplayer answers
- [Leveling & Progression](/guides/leveling-guide) — Mercenary Ranks and promotion quests
- [Equipment & Relics](/guides/equipment-guide) — gear tiers and Karma gear
