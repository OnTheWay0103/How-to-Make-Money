---
title: 'Settings & Performance Optimization Guide — Best Graphics, Controls & FPS'
description: 'Optimize your Echoes of Aincrad experience with the best graphics settings, control configurations, FPS optimization tips, and accessibility options across all platforms.'
keywords: ['graphics settings', 'performance optimization', 'FPS boost', 'control configuration', 'accessibility options']
category: Guides
version: '1.0'
updated: '2026-07-23'
related:
  - beginner-guide
  - combat-system-guide
  - game-modes-guide
  - tips-and-tricks
  - progression-guide
---

## Introduction

Echoes of Aincrad is a visually demanding action JRPG that pushes both the Unreal Engine and your hardware. While the game defaults to a balanced preset, significant performance gains and visual improvements are available through manual configuration. This guide covers every setting, from basic quality toges to hidden .ini tweaks that can double your frame rate on lower-end systems.

The game runs on a modified version of Unreal Engine 4.27. The PC version offers the most control over graphics, while console versions have limited but still impactful options. This guide focuses on the PC release but includes console-specific tips where applicable.

---

## Recommended Graphics Settings

The table below maps each graphics option across four quality tiers. Use the tier that matches your hardware and performance goals.

| Setting | Low (60 FPS Target) | Medium (60 FPS) | High (60 FPS) | Ultra (30-60 FPS) |
|---------|---------------------|-----------------|---------------|-------------------|
| **Resolution Scale** | 75% | 90% | 100% | 100% |
| **Anti-Aliasing** | FXAA | TAA Low | TAA High | TAA High + Sharpening |
| **Texture Quality** | Low | Medium | High | Ultra |
| **Shadow Quality** | Off | Low | High | Ultra |
| **Post-Processing** | Low | Medium | High | Ultra |
| **Effects Quality** | Low | Medium | High | Ultra |
| **View Distance** | Low | Medium | High | Ultra |
| **Foliage Density** | Low | Medium | High | Ultra |
| **Ambient Occlusion** | Off | SSAO Low | SSAO High | HBAO+ |
| **Reflections** | Off | Screen Space | Ray Traced (Low) | Ray Traced (High) |
| **Volumetric Fog** | Off | Low | High | Ultra |
| **Motion Blur** | Off | Off | On | On |
| **VSync** | Off | Off | Off | On |
| **Frame Rate Cap** | 60 | 60 | 60 | 30 or 60 |
| **DLSS/FSR** | Performance | Balanced | Quality | Off |

### Tier Recommendations by Hardware

**Low (GTX 1060 / RX 580 or equivalent)**: Aim for 1080p with the Low preset. The game becomes fully playable, and the combat feel remains responsive. Turn off Volumetric Fog and Reflections — these two settings alone account for a 30-40% performance difference.

**Medium (RTX 2060 / RX 5600 XT)**: 1080p-1440p. Medium preset with TAA Low gives a crisp image without the blurriness of FXAA. Drop Shadow Quality to Low if you need an extra 10-15 FPS during boss fights.

**High (RTX 3070 / RX 6800)**: 1440p-4K. High preset is the sweet spot — visually close to Ultra but with 20-30 more FPS. Enable DLSS Quality or FSR Quality for an additional performance buffer.

**Ultra (RTX 4080+ / RX 7900 XTX)**: 4K. Use Ultra for screenshots, but consider dropping to High for Death Game mode where every frame matters. Ray Traced Reflections are impressive but expensive — even on top hardware, expect dips below 60 FPS in intense combat.

---

## Controller vs Keyboard Settings

Echoes of Aincrad was designed primarily with a controller in mind, but keyboard and mouse are fully supported and can be competitive with the right configuration.

### Controller (Recommended)

The game's combat system — especially Sword Skill cooldown management, camera tracking, and dodge rolling — feels natural on a controller.

| Function | Default Binding | Alternative |
|----------|----------------|-------------|
| Light Attack | RB | R1 |
| Heavy Attack | RT | R2 |
| Dodge Roll | A | X (Japanese layout) |
| Sword Skill Menu | LB + Face Buttons | L1 + Face Buttons |
| Partner Command | D-Pad Up | — |
| Item Quick Slot | D-Pad Left/Right | — |
| Lock-On | Right Stick Click | R3 |
| Sprint | Hold A (while moving) | — |

**Recommended controller settings**:
- **Camera Sensitivity**: 6/10 (default is too slow for boss fights)
- **Aim Assist**: ON (helps with lock-on targeting in crowds)
- **Vibration**: OFF (saves controller battery and reduces input latency)
- **Trigger Dead Zone**: 10% (prevents accidental inputs on worn controllers)

### Keyboard & Mouse

Keyboard players gain faster menu navigation and precise camera control but lose analog movement and comfortable dodge-rolling.

| Function | Default Binding | Recommended |
|----------|----------------|-------------|
| Light Attack | Left Click | Same |
| Heavy Attack | Right Click | Same |
| Dodge Roll | Space | Same |
| Sword Skill 1-4 | 1, 2, 3, 4 | Same |
| Partner Command | G | Same |
| Item Quick Slot | Q, E | Mouse Side Buttons |
| Lock-On | Middle Click | Same |
| Sprint | Left Shift | Same |
| Interact | F | Same |
| Block / Parry | Right Click (hold) | Same |

**Recommended keyboard settings**:
- **Mouse Sensitivity**: 8/10
- **Toggle Sprint**: ON (saves finger fatigue)
- **Sword Skill Hotkeys**: Bind your four most-used skills to 1-4 for instant access
- **Camera Reset**: Bind to Middle Mouse Button for quick reorientation

### Which One Should You Use?

For **Death Game mode**, controller is strongly recommended due to the precision of analog dodge direction and the comfort of extended play sessions. For **speedrunning**, keyboard offers faster menus and more precise camera snapping.

---

## FPS Optimization Tips

### The Biggest Performance Killers (in order)

1. **Volumetric Fog**: Reduces FPS by 15-25 FPS in forest and cave areas. Set to Low or Off.
2. **Ray Traced Reflections**: Costs 20-30 FPS. Only enable on RTX 4070+ hardware.
3. **Shadow Quality**: Ultra shadows cost 10-15 FPS with minimal visual gain over High.
4. **Foliage Density**: Cuts 5-10 FPS in outdoor areas. Medium is nearly identical to High.
5. **Post-Processing**: Motion Blur and Depth of Field drain FPS with no gameplay benefit.

### Advanced Tweaks (PC Only)

Edit `%localappdata%/EchoesOfAincrad/Saved/Config/WindowsNoEditor/Engine.ini` (Windows) or `~/Library/Application Support/EchoesOfAincrad/Config/Engine.ini` (macOS) with these additions:

```ini
[SystemSettings]
r.Streaming.PoolSize=500          ; Reduce texture pool to free VRAM
r.TextureStreaming=1              ; Enable texture streaming
r.Shadow.MaxResolution=512        ; Lower shadow resolution
r.PostProcessAAQuality=3          ; Lower AA quality
r.DefaultFeature.MotionBlur=0     ; Disable motion blur
r.DefaultFeature.AmbientOcclusion=0 ; Disable AO (big FPS gain)
r.VolumetricFog=0                 ; Disable volumetric fog entirely
```

**Warning**: Remove or comment out lines that cause instability. Always back up your .ini files before editing.

### In-Game Performance Tips

- **Disable Steam Overlay** in boss fights (known to cause stuttering)
- **Close background browsers** — Chrome alone can cost 5-10 FPS
- **Set Windows Power Plan** to High Performance
- **Update GPU drivers** specifically for Echoes of Aincrad (NVIDIA driver 546.17+ or AMD 23.12.1+ includes optimized shaders)
- **Verify game files** if you experience stutter after patches

---

## Accessibility Options

Echoes of Aincrad includes a surprisingly robust accessibility suite. Most options are found under **Settings > Accessibility**.

| Option | Description | Recommended |
|--------|-------------|-------------|
| **Subtitle Size** | Small / Medium / Large | Large for readability |
| **Subtitle Background** | None / Semi-Transparent / Solid | Semi-Transparent |
| **Colorblind Mode** | Protanopia / Deuteranopia / Tritanopia | Match your type |
| **High Contrast UI** | Highlights important HUD elements | ON for visibility |
| **Screen Shake** | 0-100% slider | 0% for motion sensitivity |
| **Camera Bob** | ON / OFF | OFF for nausea prevention |
| **Auto-Target** | ON / OFF | ON for reduced aiming strain |
| **QTE Timing** | Normal / Generous / Very Generous | Generous for accessibility |
| **Button Mashing** | Hold Instead of Mash | ON — hold button instead of spam |
| **Audio Cues** | Combat / Navigation / All | All for maximum awareness |
| **Damage Numbers** | ON / OFF | Keep ON for visual feedback |
| **Flash Reduction** | ON / OFF | ON if photosensitive |

### Controller Accessibility Features

- **Remap every button** freely — no restrictions
- **Create multiple control profiles** and switch via the pause menu
- **Toggle-hold hybrid**: Set dodge to toggle rather than hold for mobility-limited players
- **Dead zone adjustments** for both sticks independently

### Visual Impairment Support

- Screen reader support for menus (Windows Narrator compatible)
- High-contrast enemy outlines (Accessibility > Enemy Highlight > Always On)
- Audio cue directionality indicates enemy position even off-screen

---

## Quick Reference Summary

| Priority | Setting | Target | FPS Impact |
|----------|---------|--------|------------|
| 1 | Volumetric Fog | Off | +15-25 FPS |
| 2 | Reflections | Screen Space | +20-30 FPS |
| 3 | Shadow Quality | Low/High | +10-15 FPS |
| 4 | Post-Processing | Low/Medium | +5-10 FPS |
| 5 | Resolution Scale | Adjust to GPU | Variable |

Start with all settings at Low, then increase one at a time until you hit your performance target. The combat system demands consistent 60 FPS — frame drops during Sword Skill windows can mean the difference between a perfect parry and a death screen, especially in Death Game mode.

---

## Related Guides

- [Beginner Guide](/guides/beginner-guide) — Getting started in Echoes of Aincrad
- [Combat System Guide](/guides/combat-system-guide) — Mastering Sword Skills and parries
- [Game Modes Guide](/guides/game-modes-guide) — Understanding Death Game and other modes
- [Tips and Tricks](/guides/tips-and-tricks) — Advanced strategies for veteran players
- [Progression Guide](/guides/progression-guide) — Cardinal Rank and stat allocation
