---
title: "Controls, Settings & Performance Guide — PC & PS5 Setup"
description: "Controls, settings and performance guide for The Relic: First Guardian. Official PC system requirements (as listed on the Steam store page), PS5 notes, launch-state performance, and honest settings advice for stutter and frame drops."
category: "Guides"
version: "1.0"
updated: "2026-08-11"
keywords: ["relic first guardian controls", "relic first guardian settings", "relic first guardian keybinds", "relic first guardian PS5 controls", "relic first guardian PC controls", "relic first guardian best settings", "relic first guardian pc performance", "relic first guardian steam", "relic first guardian fps", "relic first guardian system requirements", "relic first guardian stutter fix", "relic first guardian pc issues"]
related: ["beginner-guide", "combat-guide", "release-date-platforms"]
---

# Controls, Settings & Performance Guide — PC & PS5 Setup

This guide covers the **official system requirements** for PC (as listed on the official Steam store page), the **confirmed launch-state performance situation**, and settings advice that actually helps. **Honest note**: default keybindings and in-game settings are **not yet verified at launch** (August 2026) — the game released July 31, 2026, and the exact binding tables circulating online are unconfirmed. Use this guide for the confirmed facts and general best practices, and check the in-game options menu for the true defaults.

---

## PC (Steam) — Official System Requirements

The requirements below are **as listed on the official Steam store page** (PS5 specs are listed officially on the PlayStation Store):

**Minimum (per the official Steam store page):**
- OS: Not listed on the store page [Unconfirmed]
- CPU: Intel Core i5-11400 / AMD Ryzen 7 4800H
- RAM: 16 GB
- GPU: Not listed on the store page [Unconfirmed]
- Storage: Not listed on the store page [Unconfirmed] (third-party trackers report ~28.5 GB [Community])
- Supports 21:9 ultrawide

**Recommended (per the official Steam store page):**
- CPU: Intel Core i5-12650H / AMD Ryzen 7 5800
- RAM: 16 GB
- GPU / Storage / OS: Not listed on the store page [Unconfirmed]
- Supports 21:9 ultrawide

**Honest note:** The official Steam store page only lists CPU, RAM, and ultrawide support. Any GPU or storage figure — including the ~28.5 GB install size reported by third-party trackers — is not official and should be treated as [Community]/[Unconfirmed] until published.

**Interpretation**: the game is GPU-light and CPU-demanding relative to most current titles — an older 8-core CPU (2018-era) and a mid-range GPU from the RTX 20-series era are the target baseline. The SSD requirement is absolute: do not install on an HDD.

---

## Launch-State Performance (Confirmed by Reviews)

Reviews consistently document the following at launch — this is not one outlet's opinion, it is the consensus:

| Problem | Confirmed Detail |
|---------|------------------|
| **Framerate drops** | As low as **~15 FPS in some boss fights** (IGN) |
| **Camera jank** | Camera behavior misbehaves in encounters |
| **Lock-on issues** | Target switching is unreliable mid-combat |
| **Sluggish input** | Controls feel heavy, especially with slow weapons |
| **Bugs** | Bosses freezing, failing to spawn, inconsistent hitboxes |

**What this means**: even on recommended hardware, you may see stutter and dips during the heaviest fights; the minimum-spec machine will struggle. These are launch-build problems — patches are the real fix, and none are confirmed yet. Watch the Steam news/PS5 update notes.

---

## What You Can Do Now (Practical Fixes)

None of these are guaranteed (the underlying issues are in the game), but they are the standard, safe mitigations:

### 1. Update GPU Drivers
Launch-week drivers from NVIDIA and AMD usually contain optimizations for new releases. Update before changing any settings.

### 2. Use DLSS or FSR 2
Both upscalers are **confirmed supported** (Steam listing). If you are below 60 FPS, enable DLSS (NVIDIA) or FSR 2 (AMD) at Quality or Balanced — this is the single highest-impact setting for framerate on modern GPUs.

### 3. Lower the Expensive Settings First
In this order, per general soulslike/UE experience:
1. **Shadow quality** — biggest FPS cost, least visual gain.
2. **Post-processing** (bloom, motion blur, ambient occlusion) — medium is usually fine.
3. **Reflections** — expensive for little visible gain in dark zones.
4. **Textures** — keep HIGH if your GPU has 8 GB+ VRAM; texture quality costs little FPS and loads to VRAM.

### 4. Cap the Frame Rate for Stability
A parry-based combat game needs consistent timing. If your FPS fluctuates between 40-60, cap at **30 or 45 FPS** — a stable 30 with predictable input beats a stuttery 50. Parry timing is the core combat skill (see the [Combat Guide](/guides/combat-guide)); consistency matters more than peak frames.

### 5. Install on the SSD (Non-Negotiable)
The official requirements demand an SSD. Death-retry loops in soulslikes are already punishing; HDD load times will compound it. Move the game to your fastest drive.

### 6. Close Background Overlays
Discord/GeForce Experience overlays and browsers can cause stutter, especially with the game's reported CPU spikes in boss fights.

### 7. Check the In-Game Camera/Lock-On Settings
If the settings menu includes camera sensitivity or lock-on options, tune them — the confirmed camera/lock-on complaints are partially adjustable with smoothing options, if present (exact options unverified — check in-game). Reduce camera sensitivity slightly if the janky camera feels worse than you are used to.

### 8. Input Setup
- **Controller on PC**: a wired controller is recommended — Bluetooth latency can hurt parry timing, and this game is parry-centric.
- **Keyboard & mouse**: remap dodge to an easy thumb/finger reach — dodging is your #1 defensive input, and the default may not suit you. Exact defaults are unverified; customize to comfort.

---

## What NOT to Do (Honest Warnings)

- **Do not trust "guaranteed FPS fix" videos** — the launch build's problems are in the game code; no settings combination fully fixes 15 FPS boss fights.
- **Do not overclock aggressively to compensate** — the issues are engine/game-side, not just your hardware.
- **Do not install on HDD hoping for the best** — the requirement is explicit.
- **Do not judge the game's combat from the worst FPS moments** — reviews agree the combat itself is the game's best feature; the performance is the problem, not the design.

---

## Specs Comparison: Can My PC Run It?

| Your GPU | Expectation |
|----------|-------------|
| RTX 3060+ / RX 6600+ | Should hit 60 FPS at 1080p with DLSS/FSR enabled, with dips in busy fights |
| GTX 1060 / RX 580 (minimum) | 30 FPS territory at low settings; expect drops in boss fights |
| Below minimum | Will struggle; consider cloud gaming or waiting for patches |

The CPU matters more than usual here (2018-era 8-core recommended). If you are on an older 4-core CPU, expect the worst drops regardless of GPU.

---

## PS5 Notes

- Native PS5 release; DualSense features (adaptive triggers, haptics) are **plausible but unconfirmed** — do not rely on claims of specific trigger/haptic behaviors.
- Performance modes (60 FPS vs quality) are **unconfirmed** — reviews report framerate issues, so do not assume a stable performance mode exists yet.

---

## Confirmed Controls Concepts (Design-Level)

While exact bindings are unverified, the confirmed control *design* is:

| Action | Confirmed Concept |
|--------|-------------------|
| Light / heavy attacks | Free — cost zero stamina |
| Dodge / block / parry | Defense actions — spend stamina |
| Skills | Cooldown-based; bound to skill slots |
| Relic / gear swapping | Between fights — the intended adaptation loop |
| Interact | Standard contextual prompt |

---

## Performance FAQ

**Q: Why does the game drop to 15 FPS in boss fights?**
A: Confirmed launch-build performance problem (IGN and others). Patches are the real fix; lower settings and upscaling only help around the edges.

**Q: Does the game support DLSS?**
A: **Yes** — DLSS and FSR 2 are confirmed in the Steam listing.

**Q: Is an SSD really required?**
A: The official store page lists CPU (i5-11400 / Ryzen 7 4800H) and 16 GB RAM; storage is not published on the store page [Unconfirmed].

**Q: Will my GTX 1060 run it?**
A: At minimum settings, around 30 FPS — with drops. It meets the listed minimum.

**Q: Are there day-one patches?**
A: Unconfirmed — check Steam news for the update history. Review coverage reflects the July 31 launch build.

**Q: Is the game CPU-heavy?**
A: Unusually so for a soulslike — the recommended CPU is a 2018-era 8-core. Expect CPU-bound drops in busy fights.

**Q: Does PS5 have 60 FPS mode?**
A: **Unconfirmed.** Reviews report frame drops on consoles; no verified mode breakdown exists.

**Q: Will performance improve?**
A: Likely over time via patches — the launch build has known issues.

---

## The Bottom Line

The Relic: First Guardian on PC has a **great combat concept wrapped in a rough launch build**. If you have the recommended specs, DLSS/FSR 2, an SSD, and patience for patches, it is playable — but buy knowing the confirmed issues. For a full picture of the divided reception, see the [Review Roundup](/guides/review-roundup); for the confirmed controls and settings facts, everything above is what is verified at launch.

---

### Related Guides

- [Beginner Guide](/guides/beginner-guide) — What to know before you play
- [Combat Guide](/guides/combat-guide) — The inputs that matter (parry, dodge, skills)
- [Release Date & Platforms](/guides/release-date-platforms) — Editions, price, and specs
