---
title: "Controls & Settings Guide — Best Keybinds, Controller Setup & Optimization (1.0)"
description: "Sephiria controls guide: best keyboard and controller settings for 1.0, how to fix controller issues, recommended keybinds, aim assist settings, and performance tweaks for smoother gameplay."
category: "Beginner"
version: "1.0"
updated: "2026-08-09"
keywords: ["sephiria controls", "sephiria controller", "sephiria keybinds", "sephiria settings", "sephiria controller not working", "sephiria aim assist", "sephiria performance"]
related: ["beginner-guide", "hard-mode-guide", "boss-guide", "faq-content"]
---

# Controls & Settings Guide — Best Keybinds, Controller Setup & Optimization (1.0)

Sephiria is a fast-paced action roguelite where precise inputs matter. This guide covers the optimal control setup for both keyboard/mouse and controller, how to work around known controller limitations, and the settings tweaks that give you the smoothest experience.

**Last updated: August 9, 2026 (1.0).**

---

## Recommended Keyboard & Mouse Setup

### Default Controls

| Action | Default Key | Recommended Change |
|--------|-------------|------|
| Move | WASD | Keep default |
| Dash | Space | Keep default |
| Attack | Left Mouse | Keep default |
| Block / Parry | Right Mouse | Keep default |
| Special Ability | Q | Consider **Shift** (easier to reach while moving) |
| Interact | E | Keep default |
| Inventory / Tablet Menu | Tab | Keep default |
| Pause | Esc | Keep default |

### Advanced Keybind Tips

**Move Special Ability off Q.** Q is also your tablet rotation key in the inventory. Binding special to Shift or a mouse side button avoids conflicts and lets you use abilities while strafing right.

**Enable "Dash Toward Cursor"** in settings. By default, dash goes in your movement direction. Cursor-based dashing gives you more precision — dash away from a boss while still looking at it to keep your next attack lined up.

**Disable "Auto-Aim."** The auto-aim can pull your attacks toward the wrong target in crowds. Manual aim gives you control over which enemy you're hitting, which matters more in Chapters 4-6 where priority targets (ranged enemies, healers) need to die first.

---

## Controller Setup

### Known Controller Limitations (1.0)

Sephiria does not have **dual-stick aiming** on controller as of 1.0. This is the most-requested controller feature and has not yet been added. The right stick is not mapped — aiming follows your movement direction.

**What this means**: controller players can't independently move left while aiming right. You can either:

1. **Use keyboard/mouse for ranged builds** (Crossbow, Staff) where independent aiming matters
2. **Use controller for melee builds** (Sword & Shield, Greatsword) where movement-aiming is less of a limitation
3. **Enable aim assist** in settings to compensate (see below)

### Controller Settings That Help

| Setting | Recommended | Why |
|------|------|------|
| Aim Assist | **Strong** if using controller | Compensates for no dual-stick — snaps to nearest enemy |
| Vibration | Off | Reduces distraction during bullet-hell sections |
| Dead Zone | 0.10–0.15 | Lower = more responsive; set too low and you'll drift |
| Dash Direction | Movement | More intuitive on controller stick |

### Controller Connection Issues

If your controller isn't detected:

1. **Steam Input**: Enable Steam Input for Sephiria (right-click game → Properties → Controller → Enable Steam Input)
2. **Wired vs wireless**: Use wired if experiencing input lag; Bluetooth adds 5-15ms latency
3. **PS4/PS5 controllers**: May need DS4Windows on some setups; Steam Input usually handles them natively
4. **Switch Pro Controller**: Works via Steam Input; recalibrate in Steam's controller settings if the stick drifts

---

## Graphics & Performance Settings

Sephiria is a pixel-art game and runs on most hardware, but Chapter 5 (lava effects) and 4-player co-op can cause drops.

| Setting | Recommended | Why |
|------|------|------|
| Resolution | Native (1920×1080) | Pixel art scales cleanly |
| Fullscreen | **Borderless Window** | Faster alt-tab; less input lag on some setups |
| V-Sync | Off | Reduces input lag — screen tearing is minimal on pixel art |
| Frame Rate Cap | 144 or Unlimited | Match your monitor; higher FPS = more responsive dashes |
| Particles | Medium | High can clutter visibility in boss fights |
| Screen Shake | 30-50% | Full shake obscures red laser telegraphs |

### Co-op Performance

4-player co-op adds particle effects from all players. If your FPS drops:

1. Lower **Particles** to Low
2. Cap FPS at 60 during co-op sessions
3. The host's PC bears most of the load — have the player with the best PC host

---

## Accessibility & Comfort

**No auto-attack option exists yet** — all attacks require manual input. Players with hand strain should:

- Use a **build with passive damage** (Planet artifacts, Undead Inferno summons, Frostbite AoE) so fewer clicks are needed
- Bind attack to **keyboard key** (e.g., J or Numpad 0) as an alternative to mouse clicking
- Take advantage of **block** (hold, not tap) for defense instead of constant dashing

**Colorblind options**: Not available in 1.0. Enemy red laser telegraphs are the main accessibility concern — the red-on-dark-background contrast is workable for most players, but there's no colorblind mode to change telegraph colors.

---

## File Locations (for troubleshooting)

| Platform | Save Data | Config File | Log File |
|------|------|------|------|
| Windows | `%USERPROFILE%\AppData\LocalLow\TeamHoray\Sephiria\` | Same folder | `player.log` (for multiplayer bug reports) |
| Steam Deck / Linux | `~/.config/unity3d/TeamHoray/Sephiria/` | Same folder | `player.log` |

If you experience multiplayer disconnects, the devs request you submit `player.log` from this location on the [Steam discussion board](https://steamcommunity.com/app/2436940/discussions/).
