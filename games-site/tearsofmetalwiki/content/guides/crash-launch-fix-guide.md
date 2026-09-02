---
title: "Tears of Metal Crashing on Startup / Black Screen — PC Fixes"
description: "Why Tears of Metal crashes to desktop at launch or hangs on a black screen, and how to fix it — the -dx11 launch option, verifying files, GPU driver updates, clearing the shader cache, and more, in priority order."
category: "Guides"
version: "Early Access"
updated: "2026-09-03"
keywords: ["Tears of Metal crash fix", "Tears of Metal won't launch", "Tears of Metal black screen on startup", "Tears of Metal crashing on startup", "Tears of Metal launch options dx11", "Tears of Metal crashing on PC", "Tears of Metal not starting"]
related: ["beginner-guide", "multiplayer-connection-fix-guide", "steam-deck-guide", "save-system-guide", "patch-notes"]
sources:
  - tier: "Official"
    text: "Tears of Metal is in Early Access and the developer has shipped stability-focused patches, including v.0.10.57598 (July 31, 2026: 'changes for Act 1 and Act 2 that should help with general performance and stability') and v.0.14.58630 (August 14, 2026: multiplayer bug fixes); Steam Support also maintains a technical-issue help flow for the game — steamcommunity.com/app/1913120 and help.steampowered.com"
  - tier: "Community"
    text: "Startup crashes and black screens are documented across multiple independent troubleshooting guides published around launch — 2UpSkill ('Black Screen on Startup: 9 Ways to Fix'), The CPU Guide ('Tears of Metal Crashing on PC? 8 Quick FIXES'), and XModHub ('Crash on Startup Fix / Best FPS Settings') — checked September 2026"
  - tier: "Editorial"
    text: "The fix ladder (order in which to try fixes), the backup-before-delete rule, and the 'one fix at a time' testing advice are this guide's editorial recommendations"
---

# Tears of Metal Crashing on Startup / Black Screen — PC Fixes

> **Early Access / Updated: September 3, 2026**

Your game shows the launch window for a second, then drops to the desktop. Or it opens to a **black screen** — sometimes with audio, sometimes without — and never reaches the menu. You are not alone: launch crashes and black screens are among the most-reported early-access complaints for Tears of Metal, and multiple independent troubleshooting guides were written about them in the first weeks after the July 22 launch ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/), [The CPU Guide](https://www.thecpuguide.com/gaming/tears-of-metal-crashing-pc/), [XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/)).

**The short answer:** try the fixes in the order below, starting with the **`-dx11` launch option** — the single most-recommended fix in community guides for crash-on-startup — then verify your game files, update your GPU drivers, and clear the DirectX shader cache. Most launch crashes are caused by a small set of rendering and configuration problems rather than a broken install.

> **Scope note:** this guide is about the game **failing to start** on PC. Stuttering in large battles is a separate performance problem, and crashing *mid-run* is covered by the [Save System Guide](/guides/save-system-guide).

> **Values caveat:** the driver versions and fix steps below come from community guides, not Paper Cult. They have worked for many players, but every PC is different — anything not confirmed officially is labeled **[Unconfirmed]**.

---

## 1. Why Tears of Metal Crashes at Launch

The reports point to a short list of causes, not one universal bug:

| Reported cause | What it looks like | Community source |
|----------------|--------------------|------------------|
| **DirectX 12 initialization / shader-compilation failure** | Crash to desktop shortly after launch; a "fatal timeout"-style error | [XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/) |
| **Corrupted local config file** after an update | Hangs or black-screens before the menu loads | [2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/) |
| **Outdated GPU drivers** that fail to build shaders | Crash during the very first loading pass | [XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/) |
| **Fullscreen / exclusive-fullscreen conflict** | Black screen, game still running (audio plays) | [2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/) |
| **Overlay software injecting into the renderer** | Crashes that started after installing an overlay/capture tool | [2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/) |
| **Resource exhaustion from background programs** | "Not opening" while heavy apps are running | [The CPU Guide](https://www.thecpuguide.com/gaming/tears-of-metal-crashing-pc/) |

Notice the pattern: most launch crashes come down to **shaders, drivers, and display settings** — not your save or your hardware. That is good news, because each is fixable in a few minutes.

---

## 2. The Fix Ladder — Try These in Order

Work top to bottom. After each fix, launch the game once. **Change one thing at a time** — if you do five fixes and then it works, you will not know which one mattered for next time.

### Fix 1: Add the `-dx11` launch option

The most-recommended fix in community guides is to force the game onto the DirectX 11 rendering path, which bypasses the DirectX 12 startup crash on many systems ([XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/)):

1. In Steam, right-click **Tears of Metal → Properties**.
2. Open the **General** tab.
3. In **Launch Options**, type: `-dx11`
4. Close the window and launch the game.

If the game still will not start, try replacing `-dx11` with `-windowed` (some black-screen cases respond better to windowed mode) or `-high` (forces high CPU priority). These are **[Unconfirmed]** as universal fixes — they work for many players but not all.

### Fix 2: Verify your game files

A corrupted or partially-updated install mimics every other crash cause. Let Steam rebuild it:

**Steam → Library → right-click Tears of Metal → Properties → Installed Files → "Verify integrity of game files."**

This is also the right move after every patch — several guides recommend re-verifying after updates because interrupted downloads leave stale files ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/), [The CPU Guide](https://www.thecpuguide.com/gaming/tears-of-metal-crashing-pc/)).

### Fix 3: Update your GPU drivers

Shader-compilation crashes are frequently caused by outdated graphics drivers. Community guides call for **Nvidia 551.xx or newer, or AMD Adrenalin 24.x or newer** ([XModHub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/)). Install the latest driver for your card from Nvidia or AMD directly, then reboot before testing.

### Fix 4: Clear the DirectX shader cache

If the game crashed mid-shader-build once, the **partial shader cache can keep failing** on every later launch. Clearing it forces a clean rebuild:

- **Nvidia / Windows:** open **Disk Cleanup**, select your C: drive, tick **"DirectX Shader Cache"**, and clean it. Then launch the game (the first launch after a clean cache is slower while shaders rebuild).
- **AMD:** reset the shader cache inside **AMD Software: Adrenalin Edition** ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/)).

### Fix 5: Back up (then remove) the local config file

A config file corrupted by an update can block the menu from loading. The game stores local data under `%LOCALAPPDATA%` in a **PaperCult / Tears of Metal** folder — the exact file name is **[Unconfirmed]**, so do this safely:

1. Close Steam completely.
2. Press **Win + R**, type `%LOCALAPPDATA%`, and open the **PaperCult\TearsOfMetal** folder.
3. **Rename** (don't delete) the config/save subfolder to `backup_old`, so the game generates a fresh one on next launch.
4. Launch the game. If it works, you can restore specific saves from the backup later.

> **Why rename, not delete:** the game's save-recovery system protects progress, but a manual backup is free insurance — see the [Save System Guide](/guides/save-system-guide) for where saves live.

### Fix 6: Escape the black screen with Alt+Enter

If the game opens to a **black screen with audio playing**, it is often a fullscreen handshake failure. Press **Alt + Enter** while the black window is up — if the menu appears, switch to **Borderless Windowed** in the graphics settings and it will stop recurring ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/)).

### Fix 7: Disable Fullscreen Optimizations and run as administrator

Two Windows compatibility settings help with rendering and permission-related startup failures ([The CPU Guide](https://www.thecpuguide.com/gaming/tears-of-metal-crashing-pc/), [2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/)):

1. Right-click the game's `.exe` → **Properties → Compatibility**.
2. Tick **"Disable fullscreen optimizations."**
3. Tick **"Run this program as an administrator."**
4. Apply and launch.

### Fix 8: Turn off overlays

Overlay tools inject into the rendering process and are a common crash trigger. Disable **Steam Overlay, Discord Overlay, GeForce/NVIDIA overlay, MSI Afterburner, RTSS, and OBS Game Capture**, then re-enable them one at a time ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/)).

### Fix 9: Repair Visual C++ and DirectX runtimes

Damaged runtime libraries cause silent startup failures. Reinstall or repair the **Microsoft Visual C++ Redistributables** and the **DirectX End-User Runtime**, then restart ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/)).

### Fix 10: Toggle your VPN / network

The game initializes its online services during startup even in solo play, so a VPN or a flaky connection can stall the boot. **Turn the VPN off and test; if it is already off, turn it on and test** ([2UpSkill](https://2upskill.com/tears-of-metal-black-screen-on-startup-9-ways-to-fix-the-2026-rogue-lite-launch-crash/), [The CPU Guide](https://www.thecpuguide.com/gaming/tears-of-metal-crashing-pc/)).

---

## 3. What Paper Cult Has Already Fixed

The developer has been shipping stability patches since launch — keeping the game updated is itself a fix:

| Patch | Date | Stability content |
|-------|------|-------------------|
| **v.0.10.57598** | July 31, 2026 | "Changes for Act 1 and Act 2 that should help with general performance and stability" |
| **v.0.14.58630** | August 14, 2026 | Multiplayer bug fixes |

Track the full list on our [Patch Notes & Roadmap](/guides/patch-notes) page. If you are on an older build, update before trying anything above — you may already be fixed.

---

## 4. If Nothing Works

Launch crashes are not all the same, and Early Access means rough edges. If you have worked through the ladder and the game still will not start:

1. **Capture the evidence** — a screenshot of any error text, plus your GPU model and driver version.
2. **Report it through Steam Support's technical-issue flow for the game** ([help.steampowered.com, app 1913120](https://help.steampowered.com/en/wizard/HelpWithGameTechnicalIssue?appid=1913120)), which also lists the developer's support contact.
3. **Include context** — when it crashes (immediately, after the logo, after a settings change) helps most.

The developer's stated pattern is ship, listen, fix fast — the stability patches above are the evidence, so a launch crash you report is the kind of issue that gets prioritized.

---

## FAQ

**Q: Is Tears of Metal crashing my PC, or is it the game?**
It is the game, not your hardware. The crash causes above — shader, driver, config, and overlay issues — are resolved by the fix ladder for most players.

**Q: Will the `-dx11` launch option hurt performance?**
Possibly slightly, but stability first. Once the game launches, you can remove `-dx11` later to test whether the DX12 path now works (a patch may have fixed it).

**Q: Does a launch crash delete my saves?**
No. Launch crashes happen before you are in a run. If you crash *during* a run, that campaign is treated as ended — see the [Save System Guide](/guides/save-system-guide).

---

## Related Guides

- [Save System Guide](/guides/save-system-guide) — what happens to progress when the game closes
- [Multiplayer & Connection Fix Guide](/guides/multiplayer-connection-fix-guide) — desync and connection fixes for co-op
- [Steam Deck Guide](/guides/steam-deck-guide) — launch troubleshooting specific to Steam Deck
- [Patch Notes & Roadmap](/guides/patch-notes) — stability patches and what is fixed next
- [Beginner Guide](/guides/beginner-guide) — getting your first run started cleanly
