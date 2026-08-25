---
title: "Sephiria Save File Guide — How to Backup & Restore Progress (Fix Corrupted Saves)"
description: "Where Sephiria saves are stored, how to back them up manually, and how to recover progress after a crash or a corrupted save — including the Steam Cloud sync pitfalls and the official 1.0.24/1.0.28 backup-loading fixes."
category: "Guides"
version: "1.0"
updated: "2026-08-26"
keywords: ["sephiria save file", "sephiria save file location", "sephiria backup save", "sephiria corrupted save fix", "sephiria restore save", "sephiria cloud save", "sephiria steam cloud", "sephiria save slots"]
related: ["faq-content", "full-release-guide", "multiplayer-connection-fix-guide", "endgame-guide"]
sources:
  - tier: "Official"
    text: "Patch 1.0.24 (Aug 7, 2026) and hotfix 1.0.28 (Aug 14, 2026) addressed backup-save loading after save corruption — 17173 official mirror of the patch notes and vgspoilers' patch list"
  - tier: "Community"
    text: "Save folder path, file names, and the SLOT/SLOTTMP paired-file replacement method come from the entertainment14.net Chinese save-replacement tutorial and the xmodhub save-file location guide"
  - tier: "Editorial"
    text: "Crash-clearing progress, cloud sync overwriting backups, and the 3-slot limit come from VaporLens negative-theme aggregation and Chinese review roundups; the restore procedure is our synthesis of the community method"
---

# Sephiria Save File Guide — How to Backup & Restore Progress (Fix Corrupted Saves)

A crash during a run, a failed load after a patch, or a cloud sync gone wrong can wipe out hours of tower climbs. Sephiria keeps your progress in local save files, which means a little preparation goes a long way: a five-minute manual backup protects your meta-progression, weapon masteries, and unlocked content. This guide covers where saves are stored, how to back them up, how to recover a corrupted save, and what Steam Cloud does — and doesn't — do for you.

## Where Are Sephiria Saves Stored?

Sephiria saves live in a local folder on your PC. Community guides consistently report the location as:

```
%USERPROFILE%\AppData\LocalLow\TEAM HORAY\Sephiria\
```

In Explorer, that resolves to `C:\Users\<YourName>\AppData\LocalLow\TEAM HORAY\Sephiria` (with `AppData` hidden by default — enable "Show hidden files" if you can't see it). [Community: entertainment14.net save tutorial, xmodhub save-file guide]

The folder contains the files that make up your progress:

- **Profile.dat** — your meta-progression profile (talents, unlocks, settings-level progress)
- **Run_Save.sav** — run state data
- **SLOT + SLOTTMP pairs** — each save slot is stored as a paired save file and temporary file, and community tutorials stress that the two must be replaced **together** [Community]
- **Config.ini** and **Player.log** — settings and the game log (Player.log is what the developers ask for when troubleshooting connection issues — see the [Multiplayer & Connection Fixes Guide](/guides/multiplayer-connection-fix-guide))

One naming note: official announcements reference the log path as `C:/Users/{PC}/AppData/LocalLow/TEAMHORAY/Sephiria` — note **no space** in "TEAMHORAY". If you can't find the folder under the spaced spelling above, check the no-space spelling of the studio name. [Official: developer log-submission note]

## How to Back Up Your Save

Manual backups are the only guarantee against crashes and sync mistakes — the game's own backup handling only kicks in after the fact (more below). Do this:

1. **Close Sephiria completely** before copying anything. Backing up a running save risks copying a half-written file.
2. Open the save folder (`%USERPROFILE%\AppData\LocalLow\TEAM HORAY\Sephiria\`).
3. Copy the **entire folder** to a safe place — your Desktop, a separate drive, or a cloud drive. Copying the whole folder is simplest and keeps paired files together.
4. If you copy only the save files, copy each **SLOT file together with its matching SLOTTMP** — they form a pair and belong together [Community].
5. Repeat the backup after meaningful progress: after a big unlock session, before installing a patch, and before messing with cloud sync.

## How to Restore a Corrupted or Lost Save

Players have reported two failure modes: a crash corrupting the save so the game forces a new run or fails to load it (VaporLens negative-review aggregation), and Steam Cloud uploading the corrupted file over the last good backup (Chinese review roundups). The restore procedure below is the community-tested method:

1. **Close the game completely.**
2. **Turn off Steam Cloud sync for Sephiria first.** Community tutorials insist on this step: with sync still enabled, the corrupted local file can re-upload and overwrite the backup you're about to restore, or the restored file can be overwritten on startup. In Steam: right-click Sephiria → Properties → Cloud → uncheck "Keep game saves in the Steam Cloud for Sephiria". [Community: entertainment14.net tutorial]
3. Copy your backed-up files into the save folder. If you're replacing a slot, replace **both the SLOT file and its matching SLOTTMP together** — replacing only one half of the pair breaks the load (this is why the paired structure exists in the first place) [Community].
4. Launch Sephiria and verify the slot loads and your progress is intact before doing anything else.
5. Only after confirming the restore, you may re-enable Steam Cloud sync — and be aware that the restored local state is then the file that gets synced.

### Official fixes: 1.0.24 and 1.0.28

The developers have patched this exact failure chain. **Patch 1.0.24 (Aug 7, 2026)** fixed, among other things, "backup save loading failure when the save is corrupted" — the game's built-in backup-restore path now loads properly in that scenario. **Hotfix 1.0.28 (Aug 14, 2026)** continued work on backup-save loading. [Official: 17173 mirror of patch notes, vgspoilers patch list] Version 1.0.29 has no separate patch note found so far [Unconfirmed]; the latest confirmed build as of Aug 20, 2026 is **1.0.30** [Official]. So if you're on an older build, update first — the crash you're recovering from may already be fixed, and the built-in backup path may handle the load for you.

## Steam Cloud Sync: What It Does and the Traps

Sephiria uses Steam Cloud saves, and that's mostly good news — but it introduces the one trap that turns a corrupted save into a *lost* save:

- **Sync overwrites local changes.** If the cloud copy of your corrupted save is the most recent upload, Steam may push it back down over the backup you just restored. This is exactly why the community restore method makes disabling sync step 2. [Community]
- **There are only 3 save slots, and they cannot be deleted.** This is a frequently noted limitation in Chinese review roundups [Unconfirmed — reported via roundups, no standalone thread located]; with so few slots, a corrupted slot has no spare to fall back on, which makes backups more important.
- Which specific files Steam Cloud uploads and exactly when it syncs [Unconfirmed].
- Steam's generic per-game cloud settings apply here too (right-click the game → Properties → Cloud), and your Steam Cloud storage status is visible in the Steam client; whether Sephiria surfaces any in-game sync indicators [Unconfirmed].

If you play on multiple machines, remember that a manual backup restored on one PC can fight with a stale cloud copy on another — disable sync on both machines before restoring, then re-enable and let the restored file become the new cloud baseline.

## FAQ

**Q: Where is the Sephiria save file located?**
In `%USERPROFILE%\AppData\LocalLow\TEAM HORAY\Sephiria\` (no-space spelling "TEAMHORAY" also appears in official notes). Key files: Profile.dat, Run_Save.sav, Config.ini, and paired SLOT/SLOTTMP files.

**Q: How many save slots are there? Can I delete one?**
Community reports say 3 slots total and no in-game deletion option [Unconfirmed]. Backups are the way to "recycle" a slot — replace its paired files with an older backup.

**Q: Why must I disable Steam Cloud before restoring a backup?**
Because sync can upload the corrupted file over your restored save. Community tutorials are unanimous on this: close the game, disable sync, restore, verify, then re-enable.

**Q: Did the developers fix corrupted saves?**
Yes — patch 1.0.24 (Aug 7, 2026) and hotfix 1.0.28 (Aug 14, 2026) both addressed backup-save loading after save corruption [Official]. Update to the latest build (1.0.30 as of Aug 20, 2026) before troubleshooting.

**Q: My save broke after a crash — what should I do first?**
Update the game, then try loading normally — the built-in backup path may recover you. If not, close the game, disable Steam Cloud sync, and restore from a manual backup using the steps above.

---

## Related Guides

- [FAQ](/guides/faq-content) — EA-to-1.0 save carryover and other quick answers
- [Full Release Guide](/guides/full-release-guide) — What changed in 1.0
- [Multiplayer & Connection Fixes](/guides/multiplayer-connection-fix-guide) — Player.log usage for online troubleshooting
- [Endgame Guide](/guides/endgame-guide) — What your save protects long-term
