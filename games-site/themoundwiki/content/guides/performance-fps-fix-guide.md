---
title: "The Mound Performance & FPS Fix Guide — Best Settings for Max FPS"
description: "Fix low FPS, stuttering, and audio cutouts in The Mound: Omen of Cthulhu. Best graphics settings for max FPS, DLSS vs FSR vs TSR, shader compilation, Steam Deck tweaks, and low-VRAM fixes."
category: "Guides"
version: "1.0"
updated: "2026-08-01"
keywords: ["the mound low fps fix", "the mound best graphics settings", "the mound stutter fix", "the mound steam deck", "the mound fps drop fix", "the mound performance guide"]
related: ["controls-settings-guide", "updates-patch-notes", "price-platforms", "faq-content"]
---

# The Mound Performance & FPS Fix Guide — Best Settings for Max FPS

> Launch Version / Updated: August 1, 2026

If **The Mound: Omen of Cthulhu** runs like a slideshow on hardware that should crush it, you are not alone — poor performance is one of the game's most-reported issues. The UE5 jungle is extremely dense, and the cost is steep: an **RTX 4080 Super at 1440p on High only holds 45–58 FPS at native resolution**, needing DLSS to reach a stable 60. Cards below 8 GB VRAM struggle even on Low.

Most of the frame loss is fixable. This guide collects every verified fix in one place — the settings table, DLSS/FSR/TSR choice, shader compilation, SSD migration, driver updates, config reset, frame-rate capping, Steam Deck tweaks, and low-VRAM guidance — so you can find the one that fixes your rig.

---

## TL;DR — The Quick Fixes That Matter Most

| # | Fix | Time | FPS Impact |
|---|-----|:--:|:--:|
| 1 | Wait for **shader compilation to reach 100%**, then restart the game | 5 min | Large (removes stutter) |
| 2 | Set **Foliage Quality** and **Volumetric Fog** to **Low** | 1 min | ~15% combined |
| 3 | Turn on **DLSS** (Quality at 1440p) or **FSR** on AMD | 1 min | 20–40% |
| 4 | Move the game to an **SSD** | 10 min | Removes streaming stutter |
| 5 | Update your **GPU drivers** | 10 min | Varies, often large |
| 6 | Reset the config if you have changed many settings | 2 min | Fixes broken configs |

Do these in order and re-test after each. Most players who follow this list land at a stable 60 FPS.

---

## Why The Mound Performance Is Rough

The Mound is a UE5 title with a few compounding problems:

- **Dense foliage rendering** — every bush is a draw call; Foliage is the single most expensive setting
- **Volumetric fog** — gorgeous, expensive; fog-heavy maps (Swamp, fog weather) tank frames disproportionately
- **Microstutter and audio cutouts in forest zones** — hitches and sound drops, usually shader-compilation, asset-streaming, or frame-pacing related (all covered below)
- **Steam Deck stability** — poor out of the box; much improved with the settings below but not console-smooth

**Fixed by Patch 1.02 (late July 2026):** the Ultra preset previously loaded incorrectly and ran dramatically worse than intended. If you were getting abysmal numbers on Ultra, re-test after updating.

---

## Real-World Benchmarks (What to Expect)

| Hardware | Resolution / Preset | FPS Before Fixes | After Fixes |
|----------|--------------------|:--:|:--:|
| RTX 4080 Super | 1440p, High, native | 45–58 | 60+ (DLSS Quality) |
| RTX 3080 / 4070 class | 1440p, High, native | 40–55 | 60 (DLSS Quality) |
| RTX 2070 class | 1080p, Medium | 45–60 | 60 (DLSS/FSR) |
| GTX 1060 6 GB | 1080p, Low | 30–45, stuttery | 35–50, cap at 30–40 |
| <8 GB VRAM cards | any | Unplayable at launch | Low preset + FSR Performance only |

**The pattern:** at every tier, native rendering is the problem — the game is built around temporal upscaling. Use it.

---

## Best Graphics Settings for Maximum FPS

### The Recommended Settings Table

| Setting | Recommendation | Why / Measured Gain |
|---------|---------------|---------------------|
| **Foliage Quality** | **Low** | Biggest single lever — jungle geometry, ~8–10% FPS |
| **Volumetric Fog** | **Low** | Expensive on fog maps, ~5–7% FPS |
| Shadow Quality | Medium | High shadows cost frames; nearly identical in motion |
| Texture Quality | High (8 GB+ VRAM), Medium (below) | Barely affects FPS; it controls VRAM usage |
| Global Illumination | Medium | UE5 GI (Lumen) is the hidden frame eater |
| Reflections | Low | Rarely noticed mid-firefight |
| Post Processing | Medium | Cheap to drop, subtle visual cost |
| Anti-Aliasing | **DLSS/FSR Quality** | Replaces TAA and adds frames — see the matrix below |
| Motion Blur | **Off** | Free FPS + you can see enemies |
| Ambient Occlusion | Medium | Low if you need more headroom |
| V-Sync | **Off** | Use a frame cap instead (below) |
| View Distance / LOD | Medium | Helps forest-zone microstutter |

**The 15% rule:** Foliage + Volumetric Fog both at Low is worth roughly **15% total FPS** on the forest maps, with minimal visual loss — this is the first change to make.

### For Maximum Visibility (if FPS is fine)

If you have headroom, keep Shadow Quality at High and Foliage at Medium — but Volumetric Fog stays Low, since fog obscures threats anyway. See the [Controls and Settings Guide](/guides/controls-settings-guide) for the full visibility-focused table.

---

## DLSS vs FSR vs TSR — Which Upscaler Should You Use?

The Mound supports NVIDIA DLSS, AMD FSR, and Unreal Engine's own TSR. All three reconstruct a higher-res image from a lower render resolution — the choice depends on your GPU:

| Hardware | Best Choice | Notes |
|----------|-------------|-------|
| NVIDIA RTX 20/30/40 series | **DLSS Quality** | Best image quality and stability. DLAA if you have spare frames |
| NVIDIA GTX 10/16 series | **FSR** | DLSS is not available on non-RTX cards |
| AMD RX 5000/6000/7000 | **FSR 3** | FSR Quality ≈ DLSS Balanced in sharpness |
| Intel Arc | **XeSS** | Best on Intel silicon |
| Anything else / integrated | **TSR** | Unreal's own upscaler, works on all hardware, decent fallback |

**Practical defaults:**

- **1440p:** DLSS/FSR **Quality** — the setting that turns a 4080 Super from 45–58 into a locked 60
- **4K:** DLSS/FSR **Balanced or Performance**
- **1080p low-end:** FSR **Performance** — image softens, but playable frames matter more
- Rule of thumb: drop the upscaler tier **before** dropping textures

---

## Shader Compilation — Wait for 100%, Then Restart

The #1 cause of "the first 10 minutes are stuttery" is **incomplete shader compilation**.

1. On first launch (and after every driver update), the game compiles shaders
2. **Wait until it reaches 100%** — do not start playing early, and do not Alt-Tab away mid-compile
3. Once done, **quit and relaunch** before playing — the second launch runs cleanly
4. Expect one more stuttery run after a driver update — that is the recompile, not a regression

Skipping this step is the most common reason players report "stutter everywhere" that never resolves.

---

## Install the Game on an SSD

The Mound's 50 GB install is built to be streamed from disk. On a hard drive, forest zones hitch constantly — the classic "my FPS is fine but the game skips" symptom.

- **Steam:** Library → right-click The Mound → Properties → Installed Files → **Move Install Folder** → select an SSD
- Any SSD fixes the worst streaming stutter; NVMe is ideal
- If the game is on an HDD, this single change can matter more than any graphics setting

---

## Update Your GPU Drivers

Both NVIDIA and AMD ship driver updates for major UE5 releases. Update, restart the PC, then launch the game and let shaders recompile to 100% once more (above). Driver version is also a common silent cause of launch crashes and the audio cutouts.

---

## Reset the Config File (Nuclear Option)

If you have been changing settings for days and the game still misbehaves — or crashes on launch — a corrupted config may be the culprit. The Mound keeps its settings here:

```
%LOCALAPPDATA%\TheMound\Saved\Config\WindowsNoEditor\
```

1. Close the game
2. **Rename or delete** the `WindowsNoEditor` folder (renaming lets you roll back)
3. Relaunch — the game regenerates defaults; re-apply the recommended settings and cap your FPS

A config reset also fixes most persistent crash-on-launch reports on PC.

---

## Frame-Rate Cap Strategy

Uncapped performance in The Mound fluctuates (45–58 FPS is the classic example), and fluctuating frame times feel like stutter even when the average is fine. Capping stabilizes pacing:

| Situation | Recommended Cap |
|-----------|----------------|
| 60 Hz monitor, DLSS Quality, 60 FPS achievable | **60 FPS** (hard cap) |
| 144 Hz monitor with headroom | 120 or 144 |
| Mid-range, cannot hold 60 | **40** (even divisor of 120 Hz) or 30 |
| Low-end / Steam Deck | 30 (or 40 in 40 Hz mode) |
| G-Sync / FreeSync display | Refresh rate − 3 (e.g. 141 on a 144 Hz panel) |

Use the in-game limiter if present, otherwise RTSS or the driver cap. The point is a **stable** frame time: a locked 40 feels better than 45–58 bouncing.

---

## Steam Deck Settings

The Mound launched with poor Steam Deck stability, but these settings get it to a playable state:

| Setting | Steam Deck Value |
|---------|------------------|
| Resolution | 1280×800 |
| Upscaler | FSR **Performance** |
| Foliage / Volumetric Fog | Low / Low |
| Everything else | Low, Medium textures |
| Frame cap | **30 FPS** (or 40 in 40 Hz mode) |
| TDP | 15 W for battery life; 20 W if stable |

Expect 30–40 FPS with occasional hitches — playable, not Verified-quality. Let shader compilation finish 100% before judging it, and keep the deck cool (forest maps push the APU hard).

---

## Fixing Microstutter and Audio Cutouts

### Microstutter

| Cause | Fix |
|-------|-----|
| Shaders not compiled | Wait for 100%, restart (above) |
| HDD streaming | Move to SSD |
| Overlays (Discord, Steam, NVIDIA) | Disable all overlays — GeForce Experience overlay is a known hitch source |
| Background apps / frame pacing | Close browsers with hardware acceleration, OBS, RGB software; cap your FPS |

### Audio Cutouts

- **Update audio and GPU drivers** — cutouts are tied to loading hitches, so fixing stutter usually fixes sound
- Raise Audio Quality to High in-game if the option exists
- Keep the game's audio device on **Default** — mismatched sample rates between devices cause crackle

---

## Playing on Less Than 8 GB VRAM

Honest answer: sub-8 GB cards are the bottom tier of support. You can make it playable, not pretty:

- Preset **Low**, 1080p, upscaler **FSR Performance** (or TSR)
- Textures: Medium only at exactly 8 GB; Low below that; Shadow/Post/Reflections all Low
- Cap at 30–40 FPS; try 720p + FSR Performance if still rough

Expect 30–45 FPS with occasional drops — on 4–6 GB cards that is roughly the ceiling.

---

## Final Performance Checklist

- [ ] Shader compilation reached 100%, then the game was restarted
- [ ] Foliage Quality and Volumetric Fog at Low (~15% gain)
- [ ] DLSS / FSR / TSR enabled in Quality mode (or higher)
- [ ] Game installed on an SSD
- [ ] GPU drivers updated, shaders recompiled once after
- [ ] Frame rate capped at a stable value (60 / 40 / 30)
- [ ] Overlays disabled, heavy background apps closed
- [ ] Config reset from `%LOCALAPPDATA%\TheMound\Saved\Config\WindowsNoEditor\` if issues persist

Still stuck? Check the [Patch Notes](/guides/updates-patch-notes) — Patch 1.02 already repaired the Ultra preset — and the [FAQ](/guides/faq-content) for known issues.

---

### Related Guides

- [Controls and Settings Guide](/guides/controls-settings-guide) — Full system requirements and visibility settings
- [Update Log and Patch Notes](/guides/updates-patch-notes) — What each patch fixed (including 1.02 performance fixes)
- [FAQ: Common Questions](/guides/faq-content) — Known issues and quick answers
- [Price & Platforms Guide](/guides/price-platforms) — What you get on each platform
