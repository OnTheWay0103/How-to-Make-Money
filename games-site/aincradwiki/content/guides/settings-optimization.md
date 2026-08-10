---
title: 'Settings & Performance Optimization Guide — Best Graphics, Controls & FPS'
description: 'Optimize your Echoes of Aincrad experience with the best graphics settings, control configurations, FPS optimization tips, and accessibility options across all platforms.'
keywords: ['graphics settings', 'performance optimization', 'FPS boost', 'control configuration', 'accessibility options']
category: Guides
version: '1.0'
updated: '2026-08-10'
related:
  - beginner-guide
  - combat-system-guide
  - game-modes-guide
  - tips-and-tricks
  - progression-guide
---

## Introduction

Echoes of Aincrad is a visually rich action JRPG. While the game defaults to a balanced preset, you can adjust individual settings to trade visual quality for performance. This guide covers the main graphics options, recommended control configurations, and accessibility features. Note: the system requirements are as listed on the official store page — this guide does not reproduce specific hardware numbers.

> **Note:** The exact FPS impact of each setting is not independently verified; the ranking below is community-reported and may differ from the current build.

---

## Recommended Graphics Settings

The table below maps each graphics option across four quality tiers. Use the tier that matches your performance goals.

| Setting | Low | Medium | High | Ultra |
|---------|-----|--------|------|-------|
| **Resolution Scale** | 75% | 90% | 100% | 100% |
| **Anti-Aliasing** | FXAA | TAA Low | TAA High | TAA High + Sharpening |
| **Texture Quality** | Low | Medium | High | Ultra |
| **Shadow Quality** | Off | Low | High | Ultra |
| **Post-Processing** | Low | Medium | High | Ultra |
| **Effects Quality** | Low | Medium | High | Ultra |
| **View Distance** | Low | Medium | High | Ultra |
| **Foliage Density** | Low | Medium | High | Ultra |
| **Ambient Occlusion** | Off | SSAO Low | SSAO High | On |
| **Reflections** | Off | Screen Space | Screen Space | On |
| **Volumetric Fog** | Off | Low | High | Ultra |
| **Motion Blur** | Off | Off | On | On |
| **VSync** | Off | Off | Off | On |
| **Frame Rate Cap** | 60 | 60 | 60 | 30 or 60 |

### Tier Recommendations by Hardware

**Low-end hardware**: Aim for 1080p with the Low preset. The game remains playable, and the combat feel stays responsive. Turn off Volumetric Fog and Reflections — community reports say these two settings account for the largest single performance difference.

**Mid-range hardware**: 1080p-1440p. Medium preset with TAA Low gives a crisp image without the blurriness of FXAA. Drop Shadow Quality to Low if you need extra FPS during boss fights.

**High-end hardware**: 1440p-4K. High preset is the sweet spot — visually close to Ultra with a meaningful FPS buffer.

**Top-tier hardware**: 4K. Use Ultra for screenshots, but consider dropping to High for Death Game mode where every frame matters. Reflections are the most expensive option — even on top hardware, expect occasional dips in intense combat.

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

1. **Volumetric Fog**: Reduces FPS noticeably in forest and cave areas. Set to Low or Off.
2. **Reflections**: Cost a significant number of FPS. Prefer Screen Space or Off unless you have headroom.
3. **Shadow Quality**: Ultra shadows cost FPS with minimal visual gain over High.
4. **Foliage Density**: Cuts FPS in outdoor areas. Medium is nearly identical to High.
5. **Post-Processing**: Motion Blur and Depth of Field drain FPS with no gameplay benefit.

### In-Game Performance Tips

- **Disable Steam Overlay** in boss fights (community-reported stutter fix)
- **Close background browsers** — they consume CPU and VRAM
- **Set your OS power plan** to High Performance
- **Update your GPU drivers** for the latest game optimizations
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

| Priority | Setting | Target | Impact |
|----------|---------|--------|--------|
| 1 | Volumetric Fog | Off | High |
| 2 | Reflections | Screen Space | High |
| 3 | Shadow Quality | Low/High | Medium |
| 4 | Post-Processing | Low/Medium | Medium |
| 5 | Resolution Scale | Adjust to hardware | Variable |

Start with all settings at Low, then increase one at a time until you hit your performance target. The combat system demands consistent 60 FPS — frame drops during Sword Skill windows can mean the difference between a perfect parry and a death screen, especially in Death Game mode.

---

## Related Guides

- [Beginner Guide](/guides/beginner-guide) — Getting started in Echoes of Aincrad
- [Combat System Guide](/guides/combat-system-guide) — Mastering Sword Skills and parries
- [Game Modes Guide](/guides/game-modes-guide) — Understanding Death Game and other modes
- [Tips and Tricks](/guides/tips-and-tricks) — Advanced strategies for veteran players
- [Progression Guide](/guides/progression-guide) — Cardinal Rank and stat allocation
