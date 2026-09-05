---
title: "Sephiria Crash on Startup / Black Screen Fix — Won't Launch? Force DirectX 11 & More"
description: "Why Sephiria crashes to desktop at launch, hangs on a black screen, or gets stuck on the publisher logo — and how to fix it. Covers the -force-d3d11 launch option, renaming the D3D12 folder, verifying game files, reading the Player.log, save-folder permissions, and the Steam Deck / macOS cases, in priority order."
category: "Guides"
version: "1.0"
updated: "2026-09-06"
keywords: ["Sephiria crash on startup", "Sephiria won't launch", "Sephiria black screen", "Sephiria crash fix", "Sephiria force d3d11", "Sephiria D3D12 folder", "Sephiria stuck on logo", "Sephiria launch options"]
related: ["beginner-guide", "controls-settings-guide", "save-file-guide", "multiplayer-connection-fix-guide", "full-release-guide"]
sources:
  - tier: "Official"
    text: "TEAM HORAY has patched Sephiria launch failures repeatedly: patch 0.12.3 (July 1, 2026, Steam announcement mirrored by gaminerd.com) fixed an 'instant crash from a black screen when launched in environments with limited DirectX 12 support' and a failure to run when corrupted language files could not load; the 1.0.30 update (August 20, 2026, Steam announcement / 17173 mirror) improved an issue where the game could close under certain circumstances on Steam Deck — steamcommunity.com/app/2436940"
  - tier: "Community"
    text: "The -force-d3d11 launch option and renaming the D3D12 folder are documented as startup-crash workarounds by the gameplay.tips 'Sephiria Troubleshooting Guide' (gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html), which also records the Player.log paths under AppData/LocalLow/TEAMHORAY/Sephiria and the save folder under Documents/Saved Games/Sephiria. Steam hosts a pinned 'Sephiria Technical Support FAQ' thread, and one Steam thread reports the game sticking on the publisher logo with menu music playing on an M2 MacBook Air (single report — details [Unconfirmed])"
  - tier: "Editorial"
    text: "The fix ladder (order in which to try fixes), the backup-before-deleting rule, and the 'change one thing at a time' testing advice are this guide's editorial recommendations. Whether the old DirectX 12 launch-crash still reproduces on the newest 1.0.x builds is [Unconfirmed] — the developers fixed the 0.12.3-era cases, so fully-updated players may not need the D3D12 workaround at all"
---

# Sephiria Crash on Startup / Black Screen — PC Fixes

> **Sephiria 1.0 / Updated: September 6, 2026**

Your game shows the TEAM HORAY splash for a moment, then drops back to the desktop. Or it opens to a **black screen** — sometimes with the menu music playing, sometimes silent — and never reaches the title. Or it sits on the **publisher logo**, flickering, while the music plays. Startup failures like these have been a recurring support topic for Sephiria since Early Access: the developers have patched them at least twice, a pinned technical-support thread exists on the Steam hub, and at least one dedicated troubleshooting guide has been written for the game ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)).

**The short answer:** work the fixes in the order below, starting with the **`-force-d3d11` launch option** — the most-recommended community fix for a DirectX 12 startup crash — then verify your game files, update your GPU drivers, and check the game's own log file to see what is actually failing.

> **Scope note:** this guide is about the game **failing to start** on PC. Freezing or disconnecting *mid-run* in co-op is a separate problem, covered by the [Co-op Freeze & Disconnect Recovery guide](/guides/coop-freeze-recovery-guide); controller/keybind trouble is the [Controller Casting & Keybind Fixes guide](/guides/controller-casting-keybind-fix-guide).

> **Honesty note:** Sephiria's launch crashes have been fixed by the developers more than once, so if you are fully updated the specific 0.12.3-era black-screen bug should already be resolved. Whether any DirectX 12 crash still reproduces on the newest 1.0.x builds is **[Unconfirmed]** — the fixes below are the community-tested ladder for when it does.

---

## 1. Why Sephiria Crashes at Launch

The reports point to a small set of causes rather than one universal bug:

| Reported cause | What it looks like | Source |
|----------------|--------------------|--------|
| **DirectX 12 initialization on limited-DX12 systems** | Instant crash from a black screen shortly after launch | Official fix in patch 0.12.3 (July 1, 2026) |
| **Corrupted language files after an update** | Game fails to run properly at startup | Official fix in patch 0.12.3 (July 1, 2026) |
| **Outdated GPU drivers / shader compilation** | Crash during the first loading pass | [gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html) |
| **Save-folder permissions on first launch** | Black screen or failure to launch cleanly the very first time | [gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html) |
| **Steam Deck-specific instability** | Game closes under certain conditions on Deck | Official fix in patch 1.0.30 (August 20, 2026) |
| **macOS launch hang** | Stuck on the publisher logo, menu music plays, screen flickers | One Steam discussion report — [Unconfirmed] |

The through-line: Sephiria is a game that has needed repeated startup-stability patches, and when a new machine hits one of these edges the symptom is almost always the same — a crash or hang *before* the menu. The good news is that each cause has a concrete fix, and the game writes a log file that tells you which one you are dealing with.

---

## 2. The Fix Ladder — Try These in Order

Work top to bottom, and **change one thing at a time** so you know which fix mattered. Launch the game after each step.

### Fix 1: Add the `-force-d3d11` launch option

The most-recommended community fix for the DirectX 12 black-screen crash is to force Sephiria onto the DirectX 11 rendering path ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)):

1. In Steam, right-click **Sephiria → Properties**.
2. Open the **General** tab.
3. In **Launch Options**, type: `-force-d3d11`
4. Close the window and launch the game.

If it still will not start, some players report that **`-windowed`** helps a black-screen case reach the menu. These are **[Unconfirmed]** as universal fixes — they work for many people but not everyone.

### Fix 2: Rename (don't delete) the D3D12 folder

If forcing DirectX 11 does not help, the game may be failing while initializing its DirectX 12 assets. The community workaround is to stop the game from loading them ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)):

1. In Steam, right-click **Sephiria → Manage → Browse Local Files**.
2. In the game folder, find the **`D3D12`** folder.
3. **Rename it** to `D3D12_backup` rather than deleting it — that makes it trivial to restore if a patch expects it.
4. Launch the game again.

Two caveats from the source guide: running **"Verify integrity of game files"** in Steam can restore that folder, so you would need to repeat the rename afterwards; and renaming it does not affect the game's main content.

### Fix 3: Verify your game files

A corrupted or half-updated install mimics every other crash cause. In Steam:

**Steam → Library → right-click Sephiria → Properties → Installed Files → "Verify integrity of game files."**

This is also the right move after any Sephiria update — an interrupted download leaves stale files behind, and launch crashes often follow a patch for exactly that reason.

### Fix 4: Update your GPU drivers

Shader-compilation crashes at startup are frequently caused by outdated graphics drivers. Install the latest driver for your GPU from Nvidia or AMD directly, then reboot before testing ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)). If the crash began after a driver update, try rolling back one version instead.

### Fix 5: Read the log file to confirm the cause

Sephiria writes Unity-style logs that tell you what is failing. The troubleshooting guide records these locations ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)):

- **Windows:** `C:\Users\{YourName}\AppData\LocalLow\TEAMHORAY\Sephiria` — `Player.log` is the current session, `Player-prev.log` is the previous one.
- **macOS:** `~/Library/Logs/TEAMHORAY/Sephiria`

If the last lines mention a graphics/rendering error, the problem is on the GPU/driver side (Fixes 1, 2, 4). If they mention a missing file, re-verify (Fix 3).

### Fix 6: Check save-folder permissions (first-launch failures)

A black screen or a failure to launch cleanly on the very first run can come from the game being unable to create its save file ([gameplay.tips](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)):

- **Windows:** `%USERPROFILE%\Saved Games\Sephiria\` — right-click the folder → **Properties → Security** and confirm your user account has full permissions. **OneDrive** folder redirection can block this, so check that too.
- **macOS:** `~/Saved Games/Sephiria` (see also the [Save File Guide](/guides/save-file-guide) for backup and recovery).

### Fix 7: Steam Deck and macOS specifics

- **Steam Deck:** the 1.0.30 update (August 20, 2026) improved a case where the game could close under certain circumstances on Deck ([Official](https://news.17173.com/content/08202026/224633949.shtml)). Make sure Sephiria is on 1.0.30 or newer, and test with the Deck's per-game compatibility settings at their defaults before changing anything else.
- **macOS:** one Steam thread reports the game getting **stuck on the publisher logo** with menu music playing on an M2 MacBook Air, with players trying launch options such as `-force-metal` or `-autoconfig`. This is a **single community report** — treat the specific workarounds as **[Unconfirmed]** — but if you hit the logo hang on a Mac, those two launch options are the known attempts.

---

## 3. FAQ

**Is the black-screen crash already fixed?** The specific DirectX 12-limited launch crash was fixed in patch 0.12.3 (July 1, 2026), and later patches added further stability work (including the 1.0.30 Steam Deck fix). On a fully-updated copy it should not occur — if it still does, the ladder above is the community-tested response. [Official / [Unconfirmed] for current-build reproduction]

**Will renaming the D3D12 folder break the game?** No. The community guide notes it does not affect the game's main content, and Steam's verify-integrity can restore the folder if a patch needs it. [Community]

**The game starts but freezes mid-run in co-op — is that this?** No — that is a network/in-run freeze, covered by the [Co-op Freeze & Disconnect Recovery guide](/guides/coop-freeze-recovery-guide). This guide is only about getting the game to start.

**Where do I find the crash log?** Windows: `AppData\LocalLow\TEAMHORAY\Sephiria\Player.log`. macOS: `~/Library/Logs/TEAMHORAY/Sephiria`. [Community]

**I'm on the newest 1.0.x build and it still won't launch. What next?** Try a full reinstall after backing up your saves (the [Save File Guide](/guides/save-file-guide) shows where they live), and check the pinned Technical Support FAQ on the Steam discussion hub for any newer known issues.

---

## Related Guides

- [Beginner Guide](/guides/beginner-guide) — where to start once the game launches
- [Controls & Settings Guide](/guides/controls-settings-guide) — in-game options after you're in
- [Save File Guide](/guides/save-file-guide) — save location, backup & corrupted-save recovery
- [Multiplayer & Connection Fixes](/guides/multiplayer-connection-fix-guide) — if you also hit co-op connection problems
- [Co-op Freeze & Disconnect Recovery](/guides/coop-freeze-recovery-guide) — the mid-run freeze problem, not launch
- [Full Release Guide](/guides/full-release-guide) — what's new in Sephiria 1.0
