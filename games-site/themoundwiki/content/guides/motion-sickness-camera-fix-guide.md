---
title: "The Mound Motion Sickness Fix — Camera Settings That Stop the Nausea"
description: "Why does The Mound: Omen of Cthulhu make some players feel nauseous? Camera bob, weapon sway, the heavy Cinematic camera, a narrow FOV and motion blur all contribute. This guide collects the comfort settings that fix it: the Standard/Normal camera style, the widened 75-125 FOV slider, motion blur off, disabling camera effects, camera shake, and the center-screen dot added in Patch 1.03."
category: "Guides"
version: "1.0"
updated: "2026-09-06"
keywords: ["the mound motion sickness", "the mound nausea fix", "the mound camera too shaky", "the mound head bob", "the mound cinematic vs standard camera", "the mound fov settings", "the mound motion blur", "the mound camera comfort", "the mound makes me sick"]
related: ["controls-settings-guide", "performance-fps-fix-guide", "faq-content"]
---

# The Mound Motion Sickness Fix — Camera Settings That Stop the Nausea

Twenty minutes into an expedition, the camera sways with every step and the queasiness starts. Community hubs and Steam reviews keep returning the same complaint from different players: The Mound's first-person camera makes some people motion sick. Head-bob, weapon sway, a heavy "Cinematic" camera feel, a narrow field of view, and motion blur all stack up. ACE Team has added real comfort options across the post-launch patches — this guide collects them in one place.

> **Honesty note:** the developers have not published a single "motion sickness settings" guide. The options below were added gradually across patches (the first major patch, Patch 1.01, and Patch 1.03), and menu wording shifts slightly between platforms and patch versions. Facts tied to patch notes are labeled Official; anything that comes only from player reports is marked **[Unconfirmed]**. Where the in-game label and the patch-note wording differ, both are given.

---

## Why the Camera Makes Some Players Sick

The classic first-person nausea recipe is low FOV plus camera bob plus motion blur plus a camera that trails your input. The Mound serves all four:

- **Head-bob and weapon sway while moving.** Players describe visible camera bob as the character walks, and report it can be severe. **[Unconfirmed — player-reported; individual sensitivity varies]**
- **The "Cinematic" camera feel.** A heavier, slightly delayed camera that looks film-like but feels laggy to the person holding the mouse.
- **A default FOV on the narrow side.** Low FOV magnifies the apparent speed of everything passing you, a fast track to nausea.
- **Motion blur.** Blurs the world during turns and sprints, disorienting in combat and amplifying queasiness.

None of this means the game is broken — it means the default camera profile suits some players and not others. Every setting below is a real in-game option.

---

## First: Switch to the Standard (Normal) Camera, Not Cinematic

This is the single highest-impact change. The first major patch added a **pre-configuration screen on first launch** that lets you choose between a **cinematic camera** and a **standard camera**. The patch coverage is explicit about why the choice exists: the **standard camera "may help with feelings of delayed interaction or motion sickness."**

Two names for the same option can confuse players:

- Patch notes refer to the responsive option as the **"Standard"** camera.
- The in-game selection screen labels it **"Normal."**

They are the same setting. In the menu it appears under **Camera Style**, with **Cinematic** and **Normal** as the two options. If you picked Cinematic at launch (or never saw the prompt), switch **Camera Style to Normal** and test again.

Two things to know before you judge the change:

- **Camera Style is not a performance setting.** It changes camera response and feel, not frame rate. Comfort gains should not be mistaken for FPS gains.
- **Normal/Standard removes the "heavy" delay.** If your mouse feels like it is steering a boat, this is the setting you want.

---

## Widen the Field of View (Now 75-125)

A narrow FOV is one of the fastest ways to trigger nausea in any first-person game, and The Mound's post-launch tuning gives you room to open it up. **Patch 1.03 expanded the FOV slider, and the range now reaches roughly 75 to 125 degrees** (it previously topped out lower).

Practical starting points:

| Goal | FOV |
|------|-----|
| Comfort first (reduces motion sickness) | 100-110 |
| Visibility + comfort balance | 95-100 |
| Performance / console default feel | 85-95 |

The wiki's [Controls & Settings Guide](/guides/controls-settings-guide) recommends 90-100 for spotting flanking enemies — a good visibility baseline. If nausea is your problem, start around 100 and go wider only if the screen edges still feel like they are rushing past. Past roughly 115 the edges start to warp, so find the widest value that still looks natural.

---

## Turn Motion Blur Off

Motion blur is the easiest win after the camera style. The game's motion blur slider exists and was **fixed in Patch 1.01** (earlier builds had a buggy blur toggle). For comfort and for combat clarity, **set Motion Blur to Off**. The [Controls & Settings Guide](/guides/controls-settings-guide) already lists Motion Blur as a setting to disable because it "disorients during combat" — the same reason it makes some players queasy.

---

## Disable Camera Effects for a Direct 1:1 Mouse Feel

Some of the nausea comes not from what the camera does but from how it trails your mouse. The launch update addressed exactly this: it **fixed camera smoothing when all camera effects are disabled, so the camera maps 1:1 to your mouse movement**. Find the option to disable camera effects, turn it off, and the "swimmy" trailing feel disappears — the mouse moves and the view moves with it, no lag. Even if you do not get nauseous, this is worth testing if your camera has always felt delayed.

---

## Lower Camera Shake

Camera shake is the game's way of selling impact — but it is also a motion-sickness trigger. The game's accessibility options include an adjustable **Camera Shake Intensity**; the [Controls & Settings Guide](/guides/controls-settings-guide) lists it with the note to **reduce it for motion sensitivity**. Set it as low as the slider allows (or off) and keep it there.

---

## Turn On the Patch 1.03 Center Dot

The most direct motion-sickness aid arrived in **Patch 1.03, which added an accessibility option that places a small dot at the center of the screen to help with motion sickness**. A fixed reference point at the center of your vision is a well-known mitigation for simulation sickness — it gives your brain a stable anchor while the world moves around it.

Turn this on in the settings, even if you are not sure you need it yet. It is subtle enough not to distract and it costs nothing to try.

---

## A Comfort Setup That Works (Checklist)

| Setting | Recommended | Why |
|---------|-------------|-----|
| Camera Style | **Normal** (a.k.a. Standard) | Removes the heavy Cinematic delay; the patch notes link it to less motion sickness |
| Field of View | 100-110 | Wider view reduces the "rushing past" nausea trigger |
| Motion Blur | **Off** | Blur during turns is a primary nausea trigger |
| Camera Effects / Smoothing | Disabled (for 1:1 mouse) | Removes the "swimmy" trailing feel |
| Camera Shake Intensity | Low / Off | Removes impact shake that amplifies queasiness |
| Center Dot (accessibility) | **On** | Fixed anchor point added in Patch 1.03 for motion sickness |
| Frame rate | Cap at a level your PC holds (e.g., 60) | Unstable frame pacing makes any camera feel worse |

The last row matters more than people expect: **frame-rate dips and stutter make motion sickness worse** because the camera judders instead of moving smoothly. If you have not already, read the [Performance & FPS Fix Guide](/guides/performance-fps-fix-guide) and get a stable frame rate first — a smooth 60 FPS with a comfortable camera beats a choppy 90 FPS every time for your stomach.

---

## If It Still Feels Bad

A few players report the camera still bobs noticeably even after lowering sway and shake options — **[Unconfirmed player-reported]**; it may mean your build still has residual head-bob that a later patch tightened. If you have tried everything above and still feel sick:

1. **Play in shorter sessions.** Motion sickness builds over time.
2. **Sit further from the screen** with the room lit — both reduce the "moving tunnel" effect.
3. **Update your GPU drivers.** Driver-level frame-pacing bugs can undo every comfort setting.
4. **Re-check after each patch.** ACE Team keeps tuning camera behavior; a setting that did not exist last week may exist now.

---

## Quick FAQ

**Q: Does Cinematic vs Standard (Normal) camera change performance?**
A: No. It changes camera response and feel only — pick Normal for comfort, not for a frame-rate boost.

**Q: Why do some patch notes say "Standard" and the game say "Normal"?**
A: They are the same camera option. Patch notes historically used "Standard"; the in-game selection screen labels it "Normal."

**Q: Is there an official motion-sickness option?**
A: Yes — Patch 1.03 added a center-of-screen dot described as helping with motion sickness, alongside the earlier camera-style choice, motion blur toggle, and camera-shake slider.

**Q: I set everything to comfortable values and it is still blurry when I turn.**
A: Confirm Motion Blur is Off and that an upscaler/DLSS preset is not re-enabling post-processing blur. Blur that appears only during fast turns at a low frame rate usually means fix the frame rate first.

---

## Sources

**Official**
- [Steam announcements — The Mound: Omen of Cthulhu](https://steamcommunity.com/app/2569760/allnews/) — Patch 1.03 adds a center-screen dot "to help with motion sickness" and expands the FOV slider range; the first major patch adds the first-launch camera pre-configuration (cinematic vs standard, standard "may help with... motion sickness"); the launch update fixed camera smoothing when all camera effects are disabled for 1:1 mouse-to-camera movement.

**Community**
- [Steam user review (Chinese, top-rated, via gametrend.jp)](https://steamcommunity.com/app/2569760/reviews/) — player reports excessive camera bob even with sway reduced, describing the view as "very nauseating" **[Unconfirmed specifics]**
- [revillution.net — community discussion of The Mound's mixed reviews](https://www.revillution.net/threads/this-horror-game-is-getting-mixed-reviews-but-its-best-parts-are-amazing.22411/) — head-bob and weapon sway reported as causing nausea for some players.

**Editorial**
- [Gamer Social Club — The Mound receives its first major patch (July 22, 2026)](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/) — the standard camera option "may help with feelings of delayed interaction or motion sickness."
- [hone.gg — The Mound: Omen of Cthulhu best settings](https://hone.gg/blog/the-mound-omen-of-cthulhu-best-settings/) — Camera Style (Cinematic vs Normal, "Standard" in patch notes), Motion Blur slider fixed in Patch 1.01, and the recommendation to cap frame rate at a stable level.

> **Honesty note:** Steam review threads and the specific in-menu locations of each toggle could not be captured directly at the time of writing (Steam blocks community pages to automated tools). The player-nausea reports come from search-indexed review and discussion snippets; no player quotes were invented. Patch-note claims come from the wording of ACE Team's announcements as indexed, and where the menu label differs from the patch-note name (Normal vs Standard), both are stated.

---

## Related Guides

- [Controls & Settings Guide — Keybinds, Graphics & Accessibility](/guides/controls-settings-guide)
- [Performance & FPS Fix Guide — Fix stutter before it makes the camera worse](/guides/performance-fps-fix-guide)
- [FAQ — Common Questions](/guides/faq-content)
