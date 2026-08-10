---
title: "Troubleshooting Guide — Crashes, Freezes, Save Issues & Performance Fixes"
description: "How to fix common issues in The Relic: First Guardian. Map freezes, inventory freezes, save progress lost, crashes, FPS drops, and stutters on PS5 and PC."
category: "Guides"
version: "1.0"
updated: "2026-08-11"
keywords: ["relic first guardian freezing", "relic first guardian map freeze", "relic first guardian inventory freeze", "relic first guardian save progress lost", "relic first guardian crashes", "relic first guardian fps fix", "relic first guardian stuck", "relic first guardian bug"]
related: ["controls-settings-guide", "release-date-platforms"]
---

# Troubleshooting Guide — Crashes, Freezes, Save Issues & Performance Fixes

> **⚠️ Important:** This is an **unofficial fan wiki**. We are NOT the game developer (Project Cloud Games / Perp Games). The workarounds below are community-discovered — for official support, report bugs on the [Steam Community Hub](https://steamcommunity.com/app/2436940/discussions/) or contact Perp Games support. We cannot fix game bugs or recover lost saves.

This guide covers reported issues with The Relic: First Guardian. All confirmed fixes are based on launch-version (July 31, 2026) information and community reports.

---

## Map Freeze Issue

**Reported**: Opening the map can cause the game to freeze entirely, requiring a full restart.

**Confirmed workarounds**:

| Platform | Action |
|----------|--------|
| PS5 | Close the game completely (PS button → Options → Close Game), then relaunch. If persistent, rebuild the database in Safe Mode |
| PC | Verify game files via Steam (Library → Right-click → Properties → Installed Files → Verify integrity) |
| All | Ensure the game is updated to the latest patch |

**Temporary workaround**: Use the in-game compass or landmark navigation instead of opening the full map until a patch addresses this.

---

## Inventory Freeze Issue

**Reported (August 2026)**: Opening the inventory menu can cause the game to freeze, requiring a force-close and restart. Progress since the last autosave may be lost.

**What players report**: The game locks up when trying to access the inventory or equipment screen. The screen freezes entirely — no inputs register — and the only option is to close the game from the system menu.

**Community workarounds**:

| Platform | Action |
|----------|--------|
| PS5 | Close game → restart console → relaunch. Some players report this happens more often after long play sessions (2+ hours) |
| PC | Verify game files via Steam. If persistent, try lowering texture quality in Settings → Graphics — some players report the inventory freeze correlates with high VRAM usage |
| All | Save at a Tibelle's Blessing checkpoint stone before opening inventory. If you freeze, you only lose progress since the last save |

---

## Save Progress Lost / Not Saving

**Reported (August 2026)**: Players report that game progress is not being saved, forcing them to redo sections.

**Known causes and fixes**:

| Cause | Solution |
|-------|----------|
| **Did not interact with checkpoint** | The game saves at Tibelle's Blessing checkpoint stones — you must manually interact with them. Passing near one does NOT save. Always interact with the stone. |
| **Closed game during autosave** | Do not close the game immediately after a boss kill or cutscene. Wait a few seconds for the save icon to disappear from the corner of the screen |
| **Corrupted save file (PS5)** | Go to Settings → Storage → Saved Data → The Relic: First Guardian → Delete and re-sync from cloud backup (if you have PS Plus) |
| **Corrupted save file (PC)** | Navigate to the community-reported save location (commonly `%USERPROFILE%\AppData\LocalLow\ProjectCloudGames\RelicFirstGuardian\` — the exact path is unconfirmed) — back up the `Saves` folder, then verify game files via Steam |
| **Storage full** | Check that your console/PC has at least 500MB of free storage. If the disk is full, saves may fail silently |

**Prevention**: After any major progress (boss kill, artifact found, area cleared), return to the nearest Tibelle's Blessing checkpoint stone and interact with it to force a manual save. Do not rely solely on autosave checkpoints.

---

## General Freeze / Stutter / FPS Drops

- **PC**: Lower shadow and post-processing settings first. These have the largest performance impact based on launch testing.
- **PS5**: Switch to Performance Mode in Settings → Graphics if available.
- Close background applications (especially browser tabs and recording software).

## If the Game Won't Launch

1. Restart your system
2. Verify game files (Steam) or reinstall (PS5)
3. Check that your system meets minimum requirements

## Known Issues (Not Yet Patched)

| Issue | Status | Workaround |
|-------|--------|------------|
| Map freeze | Reported by community | Use landmark navigation; save before opening map |
| Inventory freeze | Reported by community (Aug 2026) | Save at a checkpoint stone before opening inventory; lower textures on PC |
| Save progress lost | Reported by community | Manual save at checkpoint stones; wait for save icon after cutscenes |
| Boss camera in tight spaces | Noted in launch reviews | Stay near center of arena |

---

## Official Bug Reporting

If the workarounds above do not help, report the issue directly to the developers:

- **Steam**: [Steam Community Hub — Bug Reports](https://steamcommunity.com/app/2436940/discussions/)
- **Developer**: Project Cloud Games (South Korea)
- **Publisher**: Perp Games (console / physical editions)
- Include your platform (PS5/PC), what you were doing when the bug occurred, and whether it happens consistently

## Related Guides

- [Controls & Settings Guide](/guides/controls-settings-guide)
- [Checkpoint & Bonfire Guide](/guides/checkpoint-bonfire-guide)
- [How to Increase Health & Survivability](/guides/how-to-increase-health)
- [Release Date & Platforms Guide](/guides/release-date-platforms)
