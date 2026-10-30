---
title: "Shift At Midnight Controller Support & Steam Deck Guide"
description: "Shift At Midnight has no native controller support on Steam. Why gamepad buttons half-work, the Steam Deck Playable rating, and Steam Input fixes that help."
category: "Guides"
version: "1.0"
updated: "2026-10-31"
date: "2026-10-31"
keywords:
  - "shift at midnight controller support"
  - "shift at midnight gamepad"
  - "shift at midnight steam deck"
  - "shift at midnight controller not working"
  - "shift at midnight xbox controller"
  - "shift at midnight steam input"
  - "shift at midnight keyboard prompts controller"
  - "shift at midnight deck verified"
related:
  - "multiplayer-faq-guide"
  - "pc-performance-guide"
  - "beginner-guide"
  - "voice-chat-mic-setup-guide"
  - "save-system-and-cloud-guide"
sources:
  - tier: "Official"
    title: "Steam store page — Shift At Midnight (app 3722330), controller-support declaration"
    url: "https://store.steampowered.com/app/3722330/Shift_At_Midnight/"
    date: "2026-10-31 (accessed)"
    text: "Read from the store page's embedded controller-support payload. Every field is false: full Xbox controller support, partial Xbox support, PS4 support, PS4 Bluetooth, PS5 support, PS5 Bluetooth, Steam Input API support, and gamepad-preferred. Keyboard support is listed as available and the controller-support wizard is marked complete, so the all-false result is a deliberate store declaration rather than a missing profile."
  - tier: "Official"
    title: "Steam Deck compatibility report — Shift At Midnight (app 3722330)"
    url: "https://store.steampowered.com/app/3722330/Shift_At_Midnight/"
    date: "2026-10-31 (accessed)"
    text: "The store page's Steam Deck payload resolves to category 2 = Playable (not Verified). Playable notes: the default controller configuration is not fully functional, in-game controller glyphs do not match the Deck device, and text input does not automatically invoke the on-screen keyboard. Positive notes: the default configuration is performant and interface text is legible. The SteamOS payload also resolves to Playable, with game startup functional but the same controller and text-input caveats."
  - tier: "Official"
    title: "Xbox Store — Shift At Midnight capabilities"
    url: "https://www.xbox.com/en-US/games/store/shift-at-midnight/9n0wdpmxnhwn"
    date: "2026-10-31 (accessed)"
    text: "The Xbox listing shows single player, online co-op (2-3), Xbox cross-platform co-op, Xbox Play Anywhere, Xbox cloud saves, Xbox achievements, 4K Ultra HD and Optimized for Xbox Series X|S. It does not list local co-op, couch co-op or split-screen. Platforms listed are PC, Xbox Series X|S, Xbox Cloud Gaming and Handheld."
  - tier: "Community"
    title: "Steam Community discussion — 'Please Add Gamepad Support' (app 3722330)"
    url: "https://steamcommunity.com/app/3722330/discussions/0/690871474424385921/"
    date: "2026-10-31 (accessed via search index; thread content blocked from direct fetch on this network)"
    text: "The original poster reports the game 'will recognize button inputs but not joysticks.' A developer reply says 'Ill pass it on as a suggestion!' — a suggestion acknowledgement, not a commitment or a date. Another player seconds the request, citing arthritic hands. A companion thread, 'Is controller support planned?', has no developer reply confirming a change."
  - tier: "Community"
    title: "Reddit r/ShiftAtMidnight — 'Xbox controller issues'"
    url: "https://www.reddit.com/r/ShiftAtMidnight/comments/1w6mlmb/xbox_controller_issues/"
    date: "2026-09-03 (posted), 2026-10-31 (accessed)"
    text: "A player reports that on one laptop the prompts read 'press E to pick up a coin' while on another laptop the same controller shows 'press X to pick up a coin'. The single reply says: 'The game doesnt really have native controller support sadly. Im waiting until it does to fully dive in.' The thread documents the mixed prompt symptom but provides no official fix."
  - tier: "Community"
    title: "shiftatmidnight.wiki — Controls, keybinds, gamepad presets and Steam Deck"
    url: "https://shiftatmidnight.wiki/guide/controls/"
    date: "2026-10-31 (accessed)"
    text: "A community controls reference. It calls Steam Deck 'Playable, not Verified', says 'No official Deck config exists yet', and recommends Steam Input community layouts, Proton Experimental, gamepad plus trackpad mouse when the menu has no cursor, and a 40 FPS cap. Its claims about Xbox/PlayStation pads routing through Steam Input and in-game keyboard rebinding are not backed by an official source and are treated here as community-reported only."
  - tier: "Community"
    title: "tuxDB — Shift At Midnight Steam Deck entry"
    url: "https://www.tuxdb.com/section/steamdeck?deckgame=3722330"
    date: "2026-10-31 (accessed)"
    text: "Independently lists the Deck rating as Playable with the same Valve notes: default configuration performs well, text is legible, some features require a touchscreen or community controller config, non-Steam Deck controller icons are shown, and text input requires manual keyboard invocation."
---

# Shift At Midnight Controller Support and Steam Deck Guide

Shift At Midnight has no native controller support on the Steam PC build. The store lists every gamepad category as false, and players report that buttons may register while analog sticks do not. Steam Deck is rated Playable, not Verified, so Steam Input or a community layout is the practical way to play with a pad.

## The short answer by platform

| Platform | Controller support | What that means |
|---|---|---|
| Steam PC | No native support declared | A pad gives partial or keyboard-style input, not a complete gamepad mapping [Official] |
| Steam Deck | Playable, not Verified | The game runs, but Valve flags the default controller config as not fully functional [Official] |
| Xbox Series X\|S | Console build, console controller | Online co-op is listed; local co-op is not [Official] |
| PC Game Pass / Microsoft Store | Not documented | The Steam declaration does not describe this build [Unconfirmed] |

"Runs on a handheld" is not the same as "supports a controller." Playable means the game is usable with caveats; it does not mean native gamepad bindings exist.

## What Steam actually declares

The Steam store page's controller-support block is false for every field: full Xbox support, partial Xbox support, PS4, PS4 Bluetooth, PS5, PS5 Bluetooth, Steam Input API, and gamepad-preferred. Keyboard support is listed as available. [Official]

That explains most of the confusion. Steam Input can translate pad input into keyboard and mouse events, and some of those reach the game. What is missing is a native mapping that covers movement, aiming, menus, text entry and prompts as one scheme. It also explains why two PCs can behave differently with the same pad. [Community]

## Why your controller half-works

The clearest player report comes from the Steam discussion "Please Add Gamepad Support": the game "will recognize button inputs but not joysticks." [Community] A Reddit thread shows the mirror image: one laptop displays "press X to pick up a coin" while another displays "press E" for the same action. [Community]

Both symptoms fit a build with no native gamepad profile. Buttons mapped to keyboard keys can fire, while analog movement and camera control have nothing to bind to. The game is not switching its UI for a controller; it is receiving keyboard-style events and showing keyboard prompts. There is no official fix to apply, so every option below is a workaround.

## Steam Deck: Playable, not Verified

Valve's compatibility payload resolves to category 2, Playable, for Steam Deck and SteamOS. [Official] The notes matter more than the badge:

- The default controller configuration is **not fully functional**.
- Controller glyphs **do not match** the Deck device.
- Text input **does not automatically invoke** the on-screen keyboard.
- The default configuration **is performant**, and interface text **is legible**.

An independent Deck tracker reports the same rating and caveats. [Community] Community controls documentation adds that no official Deck config exists yet and recommends Steam Input layouts instead. [Community]

The game installs and runs at a playable frame rate, but budget time for input setup and keep the on-screen keyboard handy.

## How to play on Steam Deck

These are community-tested workarounds, not a developer configuration:

1. **Pick a community Steam Input layout.** In Game Mode, open Quick Access, go to the gamepad section, and choose a community layout. Guides commonly cite one named "Deckyboard at Midnight"; treat the name as a community recommendation, not an official preset. [Community]
2. **Choose separate binds for interact, flashlight, reload and the team list.** Layouts that overload one button can fire two actions at once.
3. **Keep trackpad-as-mouse as a fallback.** If the menu has no cursor, use the trackpad or touchscreen. Valve already warns that text input needs manual keyboard invocation. [Official]
4. **Open the on-screen keyboard yourself** for names and codes; do not expect the game to do it.
5. **Try Proton Experimental** if the game misbehaves at launch. This is a community suggestion, not an official requirement. [Community]
6. **Cap the frame rate.** Community guidance recommends 40 FPS / 40 Hz for steadier frame times. [Community]
7. **Select the microphone in SteamOS audio settings** so proximity chat picks up the right device. [Community]

For a broader performance pass, see the [PC Performance Guide](/guides/pc-performance-guide). For microphone problems, the [Voice Chat and Mic Setup Guide](/guides/voice-chat-mic-setup-guide) covers device selection.

## How to use a controller on PC

There is no in-game setting that turns a gamepad into a supported device. The route is Steam Input's desktop or custom configuration, which translates pad input into keyboard and mouse events.

1. Open Steam, right-click Shift At Midnight, then Properties, then Controller.
2. Enable Steam Input for your controller type.
3. Choose a community layout, or map movement to WASD, interact to E, flashlight to F, reload to R and the team list to Tab.
4. Map a button to left-click for confirm and shooting.
5. Keep a keyboard nearby for text entry and menus that reject translated input.

Community controls references describe keyboard rebinding under Settings, with separate playing, dialogue and restock presets. [Community] That is not confirmed by an official source, so do not rely on it as the only fix. Do not delete the save folder to reset controls — that also removes story progress. See the [Save System and Cloud Guide](/guides/save-system-and-cloud-guide) for backup steps.

## Xbox console and PC Game Pass

On Xbox Series X|S the game is a console title, played with the console controller. The Xbox listing confirms single player, online co-op for 2–3 players, Xbox cross-platform co-op, Xbox Play Anywhere, cloud saves, achievements and Series X|S optimisation. It does not list local co-op, couch co-op or split-screen. [Official]

Controller behaviour on the PC Game Pass / Microsoft Store build is **not documented**; do not assume the Steam declaration describes it in either direction. [Unconfirmed] Platform rules and invites are covered in the [Multiplayer FAQ](/guides/multiplayer-faq-guide).

## Troubleshooting table

| Symptom | Likely cause | What to try |
|---|---|---|
| Buttons work, sticks do not | No native analog mapping [Community] | Use a Steam Input layout with movement and camera binds |
| Keyboard prompts with a pad connected | The game shows keyboard UI because no pad profile exists [Community] | Map the pad to those keys, or use keyboard and mouse |
| Glyphs on one PC, keyboard on another | Different Steam Input layout state [Community] | Compare Properties → Controller on both PCs |
| No cursor in the Deck menu | Default config lacks pointer input [Official] | Use trackpad or touchscreen as a mouse |
| On-screen keyboard absent | Text input does not auto-invoke it [Official] | Open the Steam keyboard manually |
| Layout feels doubled | Two input layers firing at once [Community] | Reset the layout and rebuild it; do not delete saves |

## What the developer has said

A developer reply in the "Please Add Gamepad Support" thread says: "Ill pass it on as a suggestion!" [Community] That is an acknowledgement, not a roadmap commitment. A companion thread asking whether controller support is planned has no developer reply confirming a change. [Community]

The honest status: no native PC controller support is declared today, the request has been seen, and no date or commitment has been published. If that changes, expect it in the official Steam feed first.

## FAQ

**Does Shift At Midnight have controller support on PC?**
No native support is declared on Steam. Every controller field on the store page is false, including Steam Input API support. [Official]

**Why do some buttons work with a controller?**
Steam Input can translate pad buttons into keyboard and mouse events, so some actions fire. Analog movement is the part that usually fails. [Community]

**Is Shift At Midnight Steam Deck Verified?**
No. It is Playable, not Verified, with caveats on the default controller config, glyphs and text input. [Official]

**Can I use an Xbox controller on PC?**
Only through Steam Input translation or a community layout. There is no in-game controller mode to enable. [Official / Community]

**Can two people play on one Xbox with two controllers?**
No. The Xbox listing shows online co-op for 2–3 players and no local co-op or split-screen. [Official]

**Will controller support be added?**
A developer said the request would be passed on as a suggestion. No commitment, date or patch note has been published. [Community]

## What is not confirmed

- Whether the Microsoft Store / PC Game Pass build behaves differently from the Steam build.
- Whether the developer intends to add native gamepad support, and when.
- Whether the in-game keyboard rebinding menu described by community references exists in every build.

We have not invented a release date or patch number. The confirmed facts are the Steam declaration, Valve's Deck notes, the Xbox listing, and player reports.

For co-op setup — invites, player counts, crossplay pools and connection errors — start with the [Multiplayer FAQ](/guides/multiplayer-faq-guide). If you are new to the game, the [Beginner Guide](/guides/beginner-guide) covers the first shift.
