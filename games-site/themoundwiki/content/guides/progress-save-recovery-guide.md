---
title: "The Mound Progress Loss Fix & Save Recovery Guide"
description: "Fix lost progress and recover your save in The Mound: Omen of Cthulhu. How the 1.02 achievement-based progress recovery tool works on all platforms, the PS5 progress loss fix, crash recovery steps, and where save files live."
category: "Guides"
version: "1.0"
updated: "2026-08-01"
keywords: ["the mound progress reset", "the mound lost progress", "the mound progress recovery tool", "the mound save file location", "the mound save file", "the mound progress lost"]
related: ["updates-patch-notes", "progression-system-guide", "faq-content", "performance-fps-fix-guide"]
---

# The Mound Progress Loss Fix & Save Recovery Guide

> Launch Version / Updated: August 1, 2026

Few things kill a co-op game faster than watching your progress vanish. During launch week, players reported **full progress and levels being reset**, and hard crashes that **wiped 30–60 minutes of expedition progress** — with the community's most-quoted complaint being that "time evaporates," making the game feel like a bad bet. This was the single biggest churn driver for **The Mound: Omen of Cthulhu**.

The developers answered with **Patch 1.02 (late July 2026)**, which added an **achievement/trophy-based progress recovery tool on all platforms** and a **PS5-specific progress loss fix**. This guide explains what the tool does, how to use it step by step, what to do after a crash, where your save data lives, and the habits that keep your progress safe in the first place.

---

## The Progress Loss Problem (What Players Actually Experienced)

| Report | What Happened |
|--------|---------------|
| Full reset | Complete progress and levels reset to zero, as if the profile was new |
| Expedition wipe | A hard crash discarded 30–60 minutes of in-run progress (loot, contract progress) |
| Reset after crash | Progress missing on relaunch after a crash or forced quit |
| PS5-specific | A PS5 progress loss scenario fixed in 1.02 |

The launch build also had a save-corruption edge case tied to quitting with Alt+F4 during the extraction sequence — fixed back in **Patch 1.0.1** — so if you still lose progress, run the recovery steps below and check your habits (the anti-loss section).

---

## What the 1.02 Progress Recovery Tool Is

The recovery tool works differently from a normal "load save" flow:

- **It rebuilds your progress from your earned achievements/trophies**, not just the save file. If your profile is damaged but your platform account still records your achievements, the tool reconstructs what you are owed.
- **Available on all platforms** — PC (Steam), PS5, and Xbox Series X|S — because every platform records achievements server-side, which is exactly what makes recovery possible.
- **It restores what achievements can prove** — personal level, permanent store unlocks, cosmetics, and perks. In-run loot (weapons, armor) is run-based by design and is not part of this tool; see the [Progression Guide](/guides/progression-system-guide) for what carries over.

Think of achievements as your save's insurance policy — the recovery tool lets you cash it in.

---

## How to Use the Progress Recovery Tool (Step by Step)

1. **Update the game** to Patch 1.02 or later (check the [Patch Notes](/guides/updates-patch-notes) for the version)
2. **Launch the game** and wait for the main menu — let any cloud-save sync prompt finish first
3. Open **Settings** (gear icon on the main menu)
4. Find the progress section — labeled something like **"Restore Progress"** or **"Progress Recovery"** (label differs slightly by platform)
5. **Select it and confirm** — the game scans your achievements/trophies and rebuilds the unlocks they prove
6. **Restart the game** when prompted
7. **Verify:** check your personal level, store unlocks, and cosmetics. If something is still missing, run it once more — it is safe to repeat

**Console note:** sign in with the **same platform account** (PSN / Xbox profile) that earned the trophies — the tool can only see achievements on the account you are logged in as.

---

## PS5 Progress Loss Fix (1.02)

PS5 had its own progress-loss scenario, and **1.02 includes a dedicated fix**:

1. Install the 1.02 update
2. If progress was already lost, run the **Progress Recovery tool** from Settings (steps above)
3. Enable **PS+ cloud saves** for The Mound: Settings → Saved Data and Game/App Settings → auto-sync on — this backs up future progress and gives the tool a healthy baseline
4. Avoid quitting during autosave indicators or the extraction results screen (see habits below)

If the fix did not apply automatically, the recovery tool is the fallback — the trophy list is your reconstruction source either way.

---

## What to Do Immediately After a Crash

| Step | Action |
|:--:|--------|
| 1 | **Do not** force-close the game again or Alt+F4 during any sync/autosave prompt |
| 2 | **Relaunch** the game normally and let any cloud-save sync finish |
| 3 | Check your level and unlocks at the main menu |
| 4 | If progress looks missing, run the **Progress Recovery tool** (steps above) |
| 5 | On Steam, **verify game files** (below) |
| 6 | If the problem persists, back up your save files (below), then reset the game config |

The recovery tool is safe to run repeatedly — use it as your first move whenever something looks wrong, before trying anything destructive.

---

## Verify Game Files (Steam)

Corrupted local files can cause crashes and missing progress:

1. Open **Steam** → **Library**.
2. Right-click **The Mound: Omen of Cthulhu** → **Properties**.
3. Go to **Installed Files** → **Verify integrity of game files**.
4. Wait for the scan (2–5 minutes) and relaunch.

After verifying, let shader compilation reach 100% and restart once (see the [Performance Guide](/guides/performance-fps-fix-guide) for why). Verify is a zero-risk step — it only re-downloads what is broken.

---

## Anti-Progress-Loss Habits

| Habit | Why |
|-------|-----|
| **Never Alt+F4** during extraction or the results screen | Launch-build save-corruption case tied to this; 1.0.1 fixed it, but don't test fate |
| **Let cloud sync finish** before closing | Steam Cloud / PS+ / Xbox saves can conflict if you quit mid-sync |
| Don't force-quit from Task Manager | Same corruption risk as Alt+F4 |
| **Keep earning achievements** | They are the recovery tool's source data — your insurance policy |
| Be careful at **Logbook Camp's centipede area** | Known crash location (below) |
| Periodically back up your save folder | Manual backups are the ultimate safety net (locations below) |

---

## Known Crash Issues (as of 1.02)

| Issue | Status |
|-------|--------|
| **Crash during the Logbook Camp centipede attack** | Known — the centipede encounter in Logbook Camp had a crash bug at launch. 1.02 did not explicitly list it as fixed; avoid triggering the attack mid-heavy-fight, and if it crashes, relaunch + run the recovery tool |
| Hard crash discarding 30–60 min of run progress | Ongoing risk at launch; recovery tool + SSD/performance fixes mitigate (crashes are often performance-related) |
| Alt+F4 during extraction corrupting saves | **Fixed in 1.0.1** |
| **Saints not loading** in expeditions | **Fixed in 1.02** — Saints allies now appear correctly |
| **Solo runs starting without a weapon** | **Fixed in 1.02** |
| Duplicate same-class enemies spawning stacked | **Fixed in 1.02** — duplicate enemy spawns of the same class no longer appear |

If you hit a crash not listed here, report it on the official Discord with a log — and remember that crash frequency is heavily tied to performance; the [Performance & FPS Fix Guide](/guides/performance-fps-fix-guide) reduces the crashes that come from hitches.

---

## Where Your Save Data Lives

| Platform | Location |
|----------|----------|
| **PC (local)** | `%LOCALAPPDATA%\TheMound\Saved\` — includes `SaveGames` (profiles) and `Config\WindowsNoEditor\` (settings) |
| **PC (Steam Cloud)** | `steamapps/userdata/<your Steam ID>/2569760/remote/` — Steam Cloud keeps copies of your profile |
| **PS5** | System storage; back up via PS+ cloud save (Settings → Saved Data) |
| **Xbox Series X/S** | Cloud-synced automatically; nothing to manage manually |

**Backup tip:** occasionally copy the `%LOCALAPPDATA%\TheMound\Saved\` folder (game closed) to a backup drive. It is a small folder and restores your entire profile if anything ever goes wrong. To restore, replace the folder contents with your backup and relaunch.

---

## FAQ

**Q: Will the recovery tool give me back my weapons?**
No. Weapons and armor are run-only by design — they never leave the expedition. What the tool restores is permanent progress: level, store unlocks, cosmetics. See the [Progression Guide](/guides/progression-system-guide) for the full breakdown.

**Q: I earned achievements on a different account. Does the tool still work?**
No — the tool reads the achievements of the account you are signed in as. Use the account that earned them.

**Q: Can running the tool delete my current progress?**
No. It rebuilds unlocks from achievements and does not delete anything. It is safe to run repeatedly.

**Q: My progress is fine — should I run it anyway?**
Not necessary, but there is no harm. If you ever suspect a problem, run it before contacting support.

**Q: My save reset completely. Is my profile gone forever?**
Usually not. Run the recovery tool first — in most reported cases it restores everything the achievement list can prove. If it does not, restore your manual backup (see above).

---

### Related Guides

- [Update Log and Patch Notes](/guides/updates-patch-notes) — Full 1.02 changelog and recovery tool details
- [Progression Guide — What Carries Over](/guides/progression-system-guide) — What tokens, unlocks, and levels persist between runs
- [Performance & FPS Fix Guide](/guides/performance-fps-fix-guide) — Fewer crashes by fixing stutter and hitches
- [FAQ: Common Questions](/guides/faq-content) — Quick answers to common issues
