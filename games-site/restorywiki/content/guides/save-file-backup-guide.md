---
title: 'How to Back Up Your ReStory Save & Fix Save Problems (5 Slots)'
description: 'ReStory: Chill Electronics Repairs save guide — where the save folder is on Windows, macOS and Linux, how to back it up before a patch, how to use the five save slots safely, and what to try when a save will not load.'
keywords: ['restory save file location', 'restory save backup', 'restory save slots', 'restory save corrupted', 'restory lost save', 'restory save crash', 'restory steam cloud', 'restory save folder']
category: 'Technical'
version: '1.0.013r'
updated: '2026-10-23'
related:
  - shop-management-guide
  - beginner-guide
  - repair-process-guide
  - faq-content
sources:
  - tier: "Official"
    title: "Patch: 1.0.013r"
    url: "https://store.steampowered.com/news/app/3812600/view/1841579228668923"
    date: "2026-08-21"
    text: "Steam announcement 'Patch: 1.0.013r' (2026-08-21): added save slots, fixed story blockers tied to bought licenses and main-questline orders, fixed serious memory leaks, and fixed several device and competition bugs."
  - tier: "Official"
    title: "THANK YOU FOR 300k SALES! | Patch: 1.0.010r"
    url: "https://store.steampowered.com/news/app/3812600/view/1840944183777307"
    date: "2026-08-13"
    text: "Steam announcement 'THANK YOU FOR 300k SALES! | Patch: 1.0.010r' (2026-08-13): fixed the long save issue and a possible crash while saving, plus a missing-screws blocker."
  - tier: "Official"
    title: "ReStory: Chill Electronics Repairs store page"
    url: "https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/"
    date: "2026-08-06"
    text: "Official Steam store page: the game supports Steam Cloud, which changes how a local backup and a cloud copy can overwrite each other."
  - tier: "Community"
    title: "ReStory: Chill Electronics Repairs Save File Location"
    url: "https://checkpoint64.com/games/restory/save/"
    date: "2026-10-23 (accessed)"
    text: "Checkpoint64 save-location reference (accessed 2026-10-23): Windows save folder is %USERPROFILE%\\AppData\\LocalLow\\Mandragora\\Restory\\SaveData, and the folder only keeps the latest files unless a backup tool is running."
  - tier: "Community"
    title: "ReStory FAQ - 1.0.015 and current troubleshooting"
    url: "https://restoryhelper.com/ja/faq/"
    date: "2026-10-23 (accessed)"
    text: "Community FAQ (accessed 2026-10-23): recommends backing up both SaveData and BackupSaveData before updating, and notes that some older saves were not compatible with later builds."
  - tier: "Editorial"
    title: "Backup rotation and slot strategy"
    url: "https://restorywiki.vercel.app/guides/save-file-backup-guide"
    date: "2026-10-23"
    text: "The three-generation backup rotation, the A/B slot strategy, and the pre-patch checklist are our recommendations built on the official patch notes and the community save documentation above."
---

# How to Back Up Your ReStory Save & Fix Save Problems (5 Slots)

ReStory is a game about restoring fragile electronics, which makes it especially painful when the fragile thing that breaks is your save. The good news is that the game now has **save slots** and the worst saving bug has been fixed. The bad news is that "Steam Cloud" is not a backup, and a single overwritten slot can still erase a fifteen-hour playthrough.

This guide covers the practical side: where the save folder lives, how to make a backup you can actually restore, how to use the slots without painting yourself into a corner, and what to try when a save refuses to load. It is not a story guide; for that, see the [Walkthrough](/guides/walkthrough-guide).

## What changed in the patches

Two official patches matter for saves:

- **1.0.010r (August 13, 2026)** fixed the **long save issue and a possible crash while saving**, plus a blocker caused by missing screws in a device.
- **1.0.013r (August 21, 2026)** **added save slots**, fixed story blockers tied to bought licenses and main-questline orders, fixed items lost in the Sonic Bath, and fixed several serious memory leaks.

The patch notes confirm that slots exist but do not state the number. Community documentation consistently reports **five slots**; treat that count as community-reported rather than an official figure. The exact slot UI is also not described in the patch notes, so menu labels may differ on your build.

## Where your save files live

| Platform | Path | Notes |
|----------|------|-------|
| **Windows** | `%USERPROFILE%\AppData\LocalLow\Mandragora\Restory\SaveData` | AppData is hidden; paste the path into Win+R or Explorer |
| **macOS** | `~/Library/Application Support/Mandragora/Restory/SaveData` | Community-documented; the Library folder is hidden by default |
| **Linux / Steam Proton** | Inside the app's Proton prefix for App ID 3812600 | Exact path varies by Steam Library location; verify before copying |

On Windows, the quickest route is **Win+R**, paste `%USERPROFILE%\AppData\LocalLow\Mandragora\Restory\SaveData`, and press Enter. You should see the save files and a settings file. If the folder is empty, you are either in the wrong profile or the game has not created a save yet.

Some builds also keep a **BackupSaveData** folder next to the main one. Back that up too. A community FAQ recommends copying both before an update, because some older builds were not save-compatible with later ones.

## The ten-minute backup routine

Do this before every patch, before a major story choice, and once a week during a long playthrough:

1. **Close ReStory completely.** Do not copy a save while the game is writing to it.
2. **Open the save folder** using the path above.
3. **Copy the whole `SaveData` folder** — and `BackupSaveData` if it exists — to a folder outside the game directory, such as `Documents\ReStory Backups\2026-10-23`.
4. **Keep at least three generations.** A backup from today, one from last week, and one from before the current patch. If the newest file is corrupted, the older ones are your fallback.
5. **Do not move the files.** Copy them. Leaving the originals in place means a failed restore does not cost you the only copy.
6. **Test the backup exists and is not zero bytes.** A folder that copied in one second is suspicious.

This is deliberately low-tech. You do not need a special tool to copy a folder, and a dated folder you understand is more reliable than a backup system you have forgotten how to restore.

## Steam Cloud is not a backup

The store page lists **Steam Cloud** support, which is convenient but easy to misunderstand. Cloud sync keeps your latest save available on another machine; it does **not** keep a history of every version. If a corrupted save is uploaded, the cloud copy can become corrupted too.

Two rules follow:

- **Keep the local dated backup** even if Cloud is enabled.
- **When restoring, close the game first** and let Steam finish syncing before you launch. If Steam immediately replaces your restored file with the cloud version, the restore did nothing. Temporarily disabling Cloud for the game while you restore is the safest option; the exact setting location is **[Unconfirmed]** and may vary by Steam client version.

If your build labels these as the **most recent five saves** rather than five manual slots, read the rotation below as a backup frequency rather than as slot numbers.

## How to use the five slots without losing a run

The slots are a tool, not a safety net you can ignore. A simple rotation works:

- **Slot A — current run.** Your everyday save.
- **Slot B — previous checkpoint.** Overwrite it every few hours, after you have confirmed Slot A loads.
- **Slot C — before a major choice.** Keep it untouched until you see the outcome.
- **Slot D — known-good endgame or pre-patch save.** Especially useful before installing an update.
- **Slot E — experiment.** Use it for risky repairs, marketplace flips, or testing a story branch.

The mistake is treating all five slots as five copies of the same moment. If you save the same state into every slot, you have one save, not five. Rotate deliberately and label the slots in your head by purpose, even if the game does not let you rename them.

## If your save will not load

Work from least destructive to most destructive:

1. **Update the game.** The long-save crash was fixed in 1.0.010r, and story blockers were fixed in 1.0.013r. A save that failed on an older build may open normally after updating.
2. **Check `BackupSaveData`.** If the main file is damaged, the game's own backup folder may contain the previous version.
3. **Restore your dated copy.** Close the game, replace the current `SaveData` contents with the backup, and launch. Keep the broken folder renamed rather than deleted until the restore works.
4. **Verify the game files through Steam.** This catches missing or corrupted installation files that can look like save corruption. It does not repair the save itself.
5. **Check free disk space.** A save that cannot be written can fail at the worst possible moment, especially on a nearly full drive.
6. **Try a different slot.** If the game loads but one slot crashes, create a new save in another slot and keep the damaged one untouched for later recovery.

If none of that works, report the save and the patch version to the developers rather than editing the files by hand. Community documentation describes the save format as compressed JSON with a custom header, which means a manual edit is easy to get wrong and hard to reverse.

## If you are stuck but the save is fine

Not every blocked quest is a corrupted save. The 1.0.013r notes specifically fixed **story blockers caused by bought licenses and main-questline orders**. If you are stuck after a purchase or an order, update first, then reload a save from before the blocker and repeat the step. If the blocker persists on the current patch, keep the save and report it; do not overwrite it with a new run.

## Pre-patch checklist

- [ ] Game closed.
- [ ] `SaveData` copied to a dated folder outside the game directory.
- [ ] `BackupSaveData` copied too, if present.
- [ ] At least two older generations kept.
- [ ] Current slot confirmed loadable before overwriting another slot.
- [ ] Steam Cloud behaviour understood — local backup still exists.
- [ ] Patch version noted in the backup folder name.

ReStory rewards patience: you disassemble a device carefully, keep the screws organised, and reassemble in reverse. Treat your save the same way. Five slots and a dated folder are enough to survive almost any patch, crash, or bad choice — as long as you set them up before you need them.

*Save-slot count and some folder paths are community-reported; the patch notes confirm that slots were added but do not document the UI or every platform path. Items marked [Unconfirmed] should be verified in your own build.*
