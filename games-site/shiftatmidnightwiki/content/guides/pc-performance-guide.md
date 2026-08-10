---
title: "Shift At Midnight PC Issues Fix Guide: Crashes, Stuttering, and Performance Tips"
description: "Fix Shift At Midnight crashes, stuttering, low FPS, and VRAM errors on PC. Includes system requirements, the best graphics settings for performance, network fixes, and how to back up saves."
category: "Guides"
version: "1.0"
updated: '2026-08-05'
keywords: ["shift at midnight crashes fix", "shift at midnight performance", "shift at midnight best settings", "shift at midnight stutter fix", "shift at midnight system requirements", "shift at midnight fps", "shift at midnight lag fix"]
related: ["faq-content", "beginner-guide", "coop-strategy-guide", "endless-mode-guide"]
---

## Shift At Midnight PC Issues Fix Guide

*Shift At Midnight* launched on **July 22, 2026** on Steam and Xbox Game Pass to a "Very Positive" rating, but like most Unity indie launches, it shipped with a handful of technical rough edges. Players have reported crashes, stutters when customers enter the store, "Out of Video Memory" errors, and lobby connection problems — most of which have straightforward fixes.

This guide collects the community-tested fixes for the game's most common PC problems, plus the graphics settings that give you the best combination of FPS and visibility. If your problem is a missing feature or a gameplay question, check the [FAQ](/guides/faq-content) instead.

---

## System Requirements

The minimum requirements are confirmed on the Steam store page; recommended specs are published by third-party sites and **vary between sources**, so treat them as a guideline rather than gospel.

| Component | Minimum (confirmed) | Recommended (community-reported) |
|-----------|--------------------|----------------------------------|
| **OS** | Windows 10 64-bit | Windows 10/11 64-bit |
| **CPU** | Intel Core i3-2100 / AMD FX-4300 | Intel Core i5-6500 / AMD Ryzen 3 1200 |
| **RAM** | 4 GB | 8 GB |
| **GPU** | GTX 750 Ti / Radeon R7 260X (2 GB VRAM) | GTX 1050 Ti / Radeon RX 560 (4 GB VRAM) |
| **Storage** | Not officially listed | ~3 GB reported |
| **Network** | Broadband (co-op required) | Broadband (co-op required) |

A few sites list steeper requirements (8 GB RAM minimum, GTX 1050 Ti floor). When in doubt, the game is **CPU-bound during customer rushes** — if you're on an older CPU, that matters more than a fancy GPU.

---

## Best Graphics Settings for Performance

The game runs on a Unity-based engine and is not demanding by modern standards, but two settings cause most of the trouble:

| Setting | Recommendation | Why |
|---------|---------------|-----|
| **Upscaler (DLSS/FSR)** | Quality mode | "Performance" mode blurs the ID photos and text you need for doppelganger checks |
| **Resolution** | Native monitor resolution | Upscaling from a lower res makes reading IDs and the NET database harder |
| **Texture Quality** | High / Ultra (if VRAM allows) | Lower it if you hit "Out of Video Memory" errors |
| **Shadows** | Medium | Turning shadows off completely can break the lighting engine and cause graphical glitches |
| **Effects Quality** | Medium | The most common culprit when the game crashes as an entity attacks |
| **V-Sync** | Off | The game supports uncapped frame rates; V-Sync adds input lag |
| **Max Frame Rate** | Cap slightly below refresh rate (e.g., 141 on a 144 Hz monitor) | Prevents screen tearing without V-Sync; enable G-Sync/FreeSync |
| **Spatial Sound** | Disable in Windows | Community reports link it to audio-related crash loops |

**Visibility tip**: the game is dark by design, but you can raise brightness slightly to make ID photos readable. Your in-game brightness setting has no effect on the entity's ability to see you — it does *not* see you in most encounters, it *hears* you.

---

## Fixing Crashes

### 1. Verify Game Files

Corrupted installation files are the leading cause of crash-on-launch:

- **Steam**: Library → right-click Shift At Midnight → Properties → Installed Files → *Verify integrity of game files*
- **Xbox App**: Manage → Files → *Verify and Repair*

### 2. Update GPU Drivers (Clean Install if Needed)

Outdated drivers cause the common *"Fatal Error: Unity 2023.x"* crash, which is a GPU driver timeout. If updating via GeForce Experience or AMD Software doesn't fix it, do a **clean driver install** with DDU (Display Driver Uninstaller) and install the latest driver fresh.

### 3. Disable Overlays

Discord overlay, MSI Afterburner, and RivaTuner Statistics Server are the most frequently reported crash triggers. Close them before launching, or disable their in-game overlays.

### 4. Add the `-dx11` Launch Option

Forcing DirectX 11 stabilizes engine conflicts on some hardware. In Steam: Properties → General → Launch Options, enter:

```
-dx11
```

This is also the community's go-to fix for crashes **during entity attack phases** — combine it with lowering Effects Quality.

### 5. Clear Engine Cache

The game stores engine configuration in local AppData. Navigate to `%LOCALAPPDATA%` (Windows) and delete the Shift At Midnight cache folder — the game rebuilds it on next launch. Close the game first.

### 6. Run as Administrator

Launch the game executable as administrator if it fails to allocate storage or memory. Right-click the exe → Properties → Compatibility → *Run this program as an administrator*.

### 7. Increase Virtual Memory

For *"Out of Video Memory"* errors: set Windows Virtual Memory to at least **16 GB** and lower Texture Quality. The error is usually a VRAM/RAM leak, not a real capacity problem.

---

## Fixing Stutters and Low FPS

The most distinctive reported issue: **stutter when customers enter the store**. This is a CPU bottleneck from loading AI and physics assets, not a GPU problem. The fixes:

- Lower **Customer Density** (in Endless Mode) if you play long sessions
- Install the game on a **fast NVMe SSD** — a hard drive makes the customer-entry stutter noticeably worse
- Close background browsers/apps during play; the game is sensitive to CPU contention
- Use the settings table above; "Quality" upscaling keeps the visuals without the CPU hit

---

## Fixing Network and Lobby Issues

If you can't join friends' lobbies or get connection timeouts:

1. **Disable IPv6** on your network adapter (Windows: Settings → Network → Adapter Options → uncheck IPv6)
2. **Enable UPnP** on your router for matchmaking
3. Make sure **everyone is on the same platform** — Steam and Xbox players can crossplay, but mixed-version lobbies (e.g., one player on the beta branch, one not) cause connection failures
4. If lobbies still fail, the developers' temporary **"network-issues-patch" beta branch** is still the community standard fix — see the [Patch Notes Guide](/guides/patch-notes-history) for how to opt in

---

## Backing Up Saves

Crashes during the **Night Transition** have been reported to corrupt saves. Back up your progress periodically:

- **Windows**: `C:\Users\[YourName]\AppData\Local\ShiftAtMidnight\Saved\SaveGames`
- Copy the folder to a backup location after each session, especially before Shift 10+ (the game's most crash-prone transition)

---

## Common Issues Quick Reference

| Issue | Fastest Fix |
|-------|-------------|
| Crash on launch | Verify files → update GPU drivers → disable overlays |
| "Fatal Error: Unity 2023.x" | Clean GPU driver install (DDU) |
| Crash during entity attack | `-dx11` launch option + lower Effects Quality |
| "Out of Video Memory" | Raise Virtual Memory to 16 GB, lower Textures |
| Stutter when customers enter | NVMe SSD + close background apps |
| Can't join friends' lobbies | Disable IPv6, enable UPnP, same platform/version |
| Black screen entering Shift 10 | Update the game, then verify game files if it persists |
| Corrupted save after crash | Back up `AppData\Local\ShiftAtMidnight\Saved\SaveGames` |

The good news: the developers shipped updates quickly after launch, and most launch-week crash reports no longer reproduce on current versions. See the [Patch Notes & Update History](/guides/patch-notes-history) for what's officially confirmed about updates and beta branches. And if the game itself is what you're struggling with rather than the PC, start with the [Beginner Guide](/guides/beginner-guide).
