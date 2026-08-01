---
title: "PC Performance Guide — System Requirements, FPS Drops & Fixes"
description: "PC performance guide for The Relic: First Guardian on Steam. Official system requirements, the confirmed launch-state performance problems (FPS drops, camera, lock-on), and honest tips to mitigate them."
category: "Guides"
version: "1.0"
updated: "2026-08-01"
keywords: ["relic first guardian pc performance", "relic first guardian steam", "relic first guardian fps", "relic first guardian system requirements", "relic first guardian stutter fix", "relic first guardian pc issues"]
related: ["controls-settings-guide", "release-date-platforms", "review-roundup", "combat-guide"]
---

# PC Performance Guide — System Requirements, FPS Drops & Fixes

The Relic: First Guardian launched on **Steam (PC) on July 31, 2026** — and if you have been reading launch coverage, you already know its performance is the game's biggest controversy. This guide collects the **official system requirements**, summarizes the **confirmed launch-state performance problems** from reviews, and gives you practical, honest steps to make the game playable on your machine.

---

## Official System Requirements (Steam)

**Minimum (1080p / low / 30 FPS):**
- OS: Windows 10 64-bit
- CPU: Intel Core i5-8400 / AMD Ryzen 5 2600
- RAM: 12 GB
- GPU: NVIDIA GTX 1060 (6 GB) / AMD RX 580 (8 GB)
- Storage: 50 GB SSD (SSD required)

**Recommended (1080p / high / 60 FPS):**
- OS: Windows 11 64-bit
- CPU: Intel Core i7-9700K / AMD Ryzen 7 3700X
- RAM: 16 GB
- GPU: NVIDIA RTX 2070 (8 GB) / AMD RX 5700 XT (8 GB)
- Storage: 50 GB SSD (plus ~10 GB for updates)
- Upscaling: **DLSS and FSR 2 supported**

**Reading the specs honestly**: the recommended tier is a ~2018-2019 mid-range machine. The CPU requirement (8-core, 2018-era) is higher than many current games — this game can be CPU-bound in busy fights — and the SSD requirement is absolute: do not install on an HDD.

---

## The Confirmed Launch-State Problems (From Reviews)

Reviews across the board document the same set of issues. This is not one outlet's opinion — it is the consensus:

| Problem | Confirmed Detail |
|---------|------------------|
| **Framerate drops** | As low as **~15 FPS in some boss fights** (IGN) |
| **Camera jank** | Camera behavior misbehaves in encounters |
| **Lock-on issues** | Target switching is unreliable mid-combat |
| **Sluggish input** | Controls feel heavy, especially with slow weapons |
| **Bugs** | Bosses freezing, failing to spawn, inconsistent hitboxes |

**What this means**: even on recommended hardware, you may see stutter and dips during the heaviest fights. The minimum-spec machine will struggle. These are launch-build problems — patches are the real fix, and none are confirmed yet.

---

## What You Can Do Now (Practical Fixes)

None of these are guaranteed (the underlying issues are in the game), but they are the standard, safe mitigations:

### 1. Update GPU Drivers
Launch-week drivers from NVIDIA and AMD usually contain optimizations for new releases. Update before changing any settings.

### 2. Use DLSS or FSR 2
Both upscalers are **confirmed supported** (Steam listing). If you are below 60 FPS:
- Enable DLSS (NVIDIA) or FSR 2 (AMD) at Quality or Balanced.
- This is the single highest-impact setting for framerate on modern GPUs.

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
If the settings menu includes camera sensitivity or lock-on options, tune them — the confirmed camera/lock-on complaints are partially adjustable with smoothing options, if present (exact options unverified — check in-game).

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

## Performance FAQ

**Q: Why does the game drop to 15 FPS in boss fights?**
A: Confirmed launch-build performance problem (IGN and others). Patches are the real fix; lower settings and upscaling only help around the edges.

**Q: Does the game support DLSS?**
A: **Yes** — DLSS and FSR 2 are confirmed in the Steam listing.

**Q: Is an SSD really required?**
A: **Yes** — the official minimum requirements state SSD required (50 GB).

**Q: Will my GTX 1060 run it?**
A: At minimum settings, around 30 FPS — with drops. It meets the listed minimum.

**Q: Are there day-one patches?**
A: Unconfirmed — check Steam news for the update history. Review coverage reflects the July 31 launch build.

**Q: Is the game CPU-heavy?**
A: Unusually so for a soulslike — the recommended CPU is a 2018-era 8-core. Expect CPU-bound drops in busy fights.

---

## The Bottom Line

The Relic: First Guardian on PC has a **great combat concept wrapped in a rough launch build**. If you have the recommended specs, DLSS/FSR 2, an SSD, and patience for patches, it is playable — but buy knowing the confirmed issues. For a full picture of the divided reception, see the [Review Roundup](/guides/review-roundup); for setup details, the [Controls & Settings guide](/guides/controls-settings-guide).

---

### Related Guides

- [Controls & Settings Guide](/guides/controls-settings-guide) — Keybinds, settings advice, platform notes
- [Release Date & Platforms](/guides/release-date-platforms) — Editions, price, and full specs
- [Review Roundup](/guides/review-roundup) — What critics say about the launch build
- [Combat Guide](/guides/combat-guide) — Why consistent FPS matters (parry timing)
