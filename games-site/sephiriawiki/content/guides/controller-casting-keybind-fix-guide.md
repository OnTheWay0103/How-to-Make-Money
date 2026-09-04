---
title: "Sephiria Controller Casting Fix — Can't Cast & Dodge on Gamepad? Quick-Cast Setup, Rebind Options & the August Patch (1.0.26)"
description: "Why casting magic on a Sephiria gamepad feels broken — the LT/L2 mode-toggle scheme leaves no per-spell keys, attack and aim share the right thumb, and rebinding was community-reported as limited. Covers what the August controller-casting update (patch 1.0.26) added (quick-cast slots, RT as Quick Cast 1, gamepad skill UI), how to set up casting so you can still dash, and workarounds when a key won't bind."
category: "Guides"
version: "1.0"
updated: "2026-09-05"
keywords: ["sephiria controller casting", "sephiria can't cast and dodge", "sephiria gamepad cast spell", "sephiria quick cast setup", "sephiria controller keybind fix", "sephiria rebind not working", "sephiria magic mode controller", "sephiria RT quick cast 1.0.26", "sephiria spell cast controller"]
related: ["controls-settings-guide", "staff-build-guide", "crossbow-build-guide", "builds-guide", "weapons-guide", "full-release-guide"]
sources:
  - tier: "Official"
    text: "Patch 1.0.26 (Aug 13, 2026) added more quick-cast key slots in Options → Gamepad, made RT the default Quick Cast 1 key, added an on-screen gamepad skill UI, improved gamepad magic-cast usability, prevented analog-stick tilt being registered as a bindable key, fixed DualSense trigger-button bind icons, and gave DualShock controllers touchpad button images — 17173 mirror of the 1.0.26 patch notes (via the 17173 Sephiria tag page). The Steam 1.0.30 (Aug 20) announcement recaps these same August-patch-cycle additions, so it is a cumulative recap rather than the build that introduced them. Fixing magic-cast mode not canceling when the Steam overlay is open is listed in that Steam recap but not in the incremental 1.0.26 notes — [Unconfirmed] single-source. Patch 1.0.28 (Aug 14) also fixed gamepad users being unable to change Hard Mode difficulty"
  - tier: "Community"
    text: "Complaints that gamepad casting uses a mode toggle (hold LT/L2 then a button) instead of per-spell keys, that you cannot comfortably dash while casting, that attack and aim share the right thumb, and that RT sits unused in the default layout come from Chinese Steam reviews of Sephiria (top-rated Chinese reviews page, indexed) and the Steam discussion thread 'Questions about controller?' — steamcommunity.com/app/2436940/discussions/0/596277178174278609"
  - tier: "Editorial"
    text: "The vgover 1.0 re-review (5/10) reports custom keybinding for spellbooks and active artifacts was poorly implemented and that some keyboard keys cannot be bound; the Japanese sarusarugame review reports no free controller remapping and calls LT+button casting 'pianist' fingerwork where hesitation under bullet-hell patterns can end a run; the volx.jp controller/keyboard setup guide documents the default layout and the keyboard quick-cast (1–4) keys — all linked in the source note. Steam post bodies could not be captured directly at time of writing (age-gate), so only indexed content was used, no player quotes were invented, and single-sourced details are marked [Unconfirmed]"
---

# Sephiria Controller Casting Fix — Can't Cast & Dodge on Gamepad? Quick-Cast Setup, Rebind Options & the August Patch (1.0.26)

Controller players hit a wall in Sephiria that keyboard/mouse players never see: casting magic. On the default gamepad scheme, spells fire through a **magic-cast mode** — you hold LT/L2 and press another button — which means your left hand is busy the moment a bullet-hell pattern starts. Reviews and discussion threads describe the same frustration: you cannot cleanly dash while casting, attack and aiming share the right thumb, and rebinding was community-reported as limited. [Community]

**The short answer:** get on the **August controller-casting patch — 1.0.26 (August 13, 2026) or newer**. It added **extra quick-cast slots** (Options → Gamepad), made **RT the default Quick Cast 1 key**, and added an **on-screen gamepad skill UI** — so spells no longer have to live behind the LT/L2 mode toggle, and you can fire them from a trigger while your thumbs stay on movement and the camera. If a specific key still won't bind, the fallbacks below cover it.

## Why Casting on a Gamepad Feels Broken

The community complaint is about input layout, not about the magic system itself. The default scheme (as documented by the volx.jp setup guide) puts:

- **Movement on the left stick, aiming on the right stick**
- **Attack on X / □, dash on A / ×, special on LB / L1**
- **Consumables on Y / △, interact on RB / R1**
- **Magic-cast mode on LT / L2** — you hold it and press another button to release a spell [Community — default-layout details from a third-party setup guide, **[Unconfirmed]** against the in-game menu]

Players describe three concrete problems:

- **Casting and dodging fight each other.** Because a spell needs LT/L2 plus another input, your fingers are committed mid-cast. The Japanese sarusarugame review calls the required input "pianist fingerwork" and notes that the hesitation while you reposition a thumb under a dense bullet pattern can cost the run. [Editorial]
- **Attack and aim share the right hand.** Chinese Steam reviews argue the gamepad is worse than keyboard/mouse in a top-down game for exactly this reason: your right thumb either attacks or aims, not both, and turning around after a dash is slow when the right stick doubles as a mouse-style cursor. [Community]
- **The default layout wastes buttons.** Reviewers note **RT sits unused** and there was no per-spell key the way keyboard/mouse gets quick-cast. [Community]

The vgover 1.0 re-review (5/10) adds a keyboard-side complaint: custom keybinding for **spellbooks and active artifacts** was "not done well," with reports that **some keyboard keys cannot be bound** at all. [Editorial — single review, **[Unconfirmed]** whether it affects every build]

## What the August Patch (1.0.26) Changed

The 1.0.26 patch notes (August 13, 2026) directly target this feedback:

- **More quick-cast key slots** can now be added in **Options → Gamepad**. [Official]
- **RT is now the default key for Quick Cast 1**, putting the previously idle trigger to work. [Official]
- A **gamepad skill UI** now displays on screen, and the ease of casting magic with a gamepad was improved. [Official]
- Bug fixes: an analog stick's **tilt direction can no longer be registered as a bindable key**; binding a trigger button on a DualSense no longer makes its icon disappear; DualShock controllers gained touchpad button images. [Official]
- The Steam 1.0.30 recap also lists a fix for magic-cast mode **not canceling when the Steam overlay is open** — absent from the incremental 1.0.26 notes, so **[Unconfirmed]** single-source.

The older complaint that "you can't cast while dodging" is not a design rule — it was a layout problem, and the quick-cast slots are the official fix. Later in the same patch cycle, **1.0.28** (Aug 14) fixed a separate gamepad bug where **controller users could not change Hard Mode difficulty** in the menu. [Official] If you play with a pad, being on the current build matters more than for keyboard players because most of these fixes landed recently.

## Setting Up Casting After 1.0.26

1. **Update Sephiria to 1.0.26 or newer** and confirm the version on the title screen — the quick-cast additions date from **1.0.26** (Aug 13), so pre-1.0.26 builds lack them. [Official]
2. **Open Options → Gamepad** and add quick-cast slots for the spells you actually cast in a run. RT is Quick Cast 1 by default — leave it there rather than moving spells back onto face buttons. [Official]
3. **Keep dash on A / ×** (or your muscle-memory button) and make sure your most-used spell is *not* on a face button that shares a thumb with attack. The whole point of the 1.0.26 update is that casting moves to triggers/dedicated slots, freeing the face buttons for dodging and attacking. [Editorial]
4. **Test the Steam-overlay interaction**: the Steam 1.0.30 recap lists a fix for magic-cast mode when returning from the overlay, but it is absent from the incremental 1.0.26 notes — **[Unconfirmed]**. If it still happens, toggle the mode key and re-check your bindings.
5. **Set Steam Input before judging bindings.** In Steam → right-click Sephiria → Properties → Controller, enable Steam Input and check that your pad is recognized with the right icon set (the 1.0.26 update fixed DualSense/DualShock icon bugs). [Official / Editorial]
6. **If a key will not bind** (the community-reported keyboard issue), try restarting the game after setting it, and check whether the game shows a conflicting assignment. If it still refuses, **[Unconfirmed]** — no verified fix is documented — fall back to the built-in keyboard quick-cast keys (1–4) plus the magic-mode toggle rather than fighting the binder. [Editorial]

## When a Pad Still Isn't the Right Tool

The controller feedback is weapon-dependent, and this wiki's own build guides reflect it:

- **Melee builds (Sword & Shield, Greatsword, Katana)** play fine on a gamepad — aim matters less and the dash/block rhythm maps naturally to buttons. See the [Weapons Guide](/guides/weapons-guide) and the individual weapon build guides. [Editorial]
- **Aim-heavy ranged builds (Crossbow, Staff)** are easier with a mouse where independent aiming and the 1–4 quick-cast keys live on separate hands. Community reviewers reached the same conclusion about pad aiming. [Community / Editorial — see the [Crossbow Build Guide](/guides/crossbow-build-guide) and [Staff Build Guide](/guides/staff-build-guide)]
- **Steam Input's own remapper is the fallback.** If the in-game binder won't do it, remap at the Steam level — it won't create in-game per-spell keys, but it can make the LT/L2 mode-toggle combos more comfortable. [Editorial]
- In **co-op**, these are per-player settings — a guest's controller setup needs no host-side change. [Editorial]

## FAQ

**Q: Can I cast a spell and dash at the same time on a gamepad?**
A: Yes, once you're on 1.0.26 or newer — put your main spell on a quick-cast slot (RT by default) so casting no longer needs the LT/L2 mode toggle plus a face button. Before 1.0.26, only the mode toggle existed, making mid-cast dodging awkward. [Official / Community]

**Q: Some keys won't rebind — is that a bug?**
A: The vgover review reports that keyboard keys could not always be bound after the custom-binding update. No verified patch fix is documented, so treat it as open **[Unconfirmed]**; fall back to the default 1–4 quick-cast keys or a Steam Input remap. [Editorial]

**Q: Is controller or keyboard/mouse better for Sephiria?**
A: It depends on your weapon. Melee is comfortable on a pad; aim-heavy Crossbow/Staff builds favor the mouse because gamepad attack and aim share the right thumb. Chinese reviewers call the pad awkward for precisely this reason. [Community / Editorial]

**Q: Was the controller casting problem fixed?**
A: Largely, yes — the 1.0.26 update (Aug 13) added extra quick-cast slots, RT as the default Quick Cast 1, a gamepad skill UI, and several binding bug fixes. Guides and reviews from the launch window (late July / early August 2026) describe the older scheme. [Official]

**Source note:** Official patch references are to the 17173 mirror of the incremental **1.0.26** notes, where the quick-cast additions actually appear ([news.17173.com/tag/赛菲莉娅](https://news.17173.com/tag/%E8%B5%9B%E8%8F%B2%E8%8E%89%E5%A8%85)), plus the 1.0.28 notes and the Steam 1.0.30 announcement, which recaps the August patch cycle; the Steam-overlay fix is single-sourced and marked **[Unconfirmed]**. Community claims trace to Chinese Steam reviews of Sephiria ([steamcommunity.com/app/2436940/reviews?l=schinese&browsefilter=toprated](https://steamcommunity.com/app/2436940/reviews?l=schinese&browsefilter=toprated)) and the Steam discussion "Questions about controller?" ([steamcommunity.com/app/2436940/discussions/0/596277178174278609](https://steamcommunity.com/app/2436940/discussions/0/596277178174278609)); editorial claims to the vgover re-review ([vgover.com/news/230905](https://www.vgover.com/news/230905)), the sarusarugame review ([sarusarugame.blog/sephiria-review-3](https://sarusarugame.blog/sephiria-review-3/)), and the volx.jp input guide ([volx.jp/sephiria-keyboard-controller-setting](https://volx.jp/sephiria-keyboard-controller-setting/)). Steam post bodies could not be captured directly (age-gate), so only indexed content was used and no player quotes were invented; single-sourced details are marked **[Unconfirmed]**.

## Related Guides

- [Controls & Settings Guide](/guides/controls-settings-guide) — core keybinds, controller detection and performance settings
- [Staff Build Guide](/guides/staff-build-guide) — the spell/tablet weapon and its element directions
- [Crossbow Build Guide](/guides/crossbow-build-guide) — the aim-heavy weapon that benefits most from a mouse
- [Builds Guide](/guides/builds-guide) — how spells and artifacts fit a full build
- [Weapons Guide](/guides/weapons-guide) — which weapon suits your input style
- [Full Release Guide](/guides/full-release-guide) — what the 1.0 patch cycle added and changed
