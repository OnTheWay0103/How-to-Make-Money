---
title: "Shift At Midnight Voice Chat Not Working? Mic Setup Fixes"
description: "Shift At Midnight voice chat not working? Fix the mic with Steam voice settings, Windows permissions, sample rate, audio-app conflicts, and in-game volume."
category: "Reference"
version: "1.0"
updated: "2026-10-28"
date: "2026-10-28"
keywords:
  - "shift at midnight voice chat"
  - "shift at midnight voice chat not working"
  - "shift at midnight mic not working"
  - "shift at midnight proximity chat"
  - "shift at midnight microphone"
  - "shift at midnight audio settings"
  - "shift at midnight push to talk"
related:
  - "multiplayer-faq-guide"
  - "coop-strategy-guide"
  - "entity-survival-guide"
  - "pc-performance-guide"
sources:
  - tier: "Official"
    title: "Shift At Midnight on Steam — store description"
    url: "https://store.steampowered.com/app/3722330/"
    date: "2026-10-28 (accessed)"
    text: "Bun Muen / Kwalee store page lists 'Proximity chat' and 'Multiplayer' among the official feature bullets, alongside 'Interrogate customers', 'Story Mode with 13 Randomly Generated Shifts' and 'Character customisation'. Up to 3 players online; single-player supported."
  - tier: "Official"
    title: "Steam announcement (2026-08-20) — '15 CUSTOMERS + BUG FIXES'"
    url: "https://steamcommunity.com/games/3722330/announcements/detail/672877388439226838"
    date: "2026-08-20"
    text: "Developer changelog adds 'Individual volume sliders for each player' and 'Steam Cloud saves', plus 15 new customers for Story and Endless Mode and equalised product prices. Read from the search index: the Steam Community host timed out from our network, so this entry was not fetched directly — verify the exact wording in-game or on the announcement page."
  - tier: "Community"
    title: "Shift At Midnight Voice Chat Not Working: How to Fix Mic and Audio Issues (2UpSkill)"
    url: "https://2upskill.com/shift-at-midnight-voice-chat-not-working-how-to-fix-mic-and-audio-issues/"
    date: "2026-10-28 (accessed)"
    text: "Step-by-step troubleshooting: enable Windows microphone access for desktop apps; set the gaming mic as both Default Device and Default Communication Device; select the physical headset mic in Steam Settings > Voice (not 'Default') at 100% input; set the mic format to 16-bit, 48000 Hz; temporarily disable VoiceMeeter, Voicemod, SteelSeries Sonar, Elgato Wave Link, NVIDIA Broadcast, Discord Krisp and Razer voice enhancements; flush DNS and reset Winsock. States the game 'lacks a dedicated device selector', so mic choice depends on Windows and Steam."
  - tier: "Community"
    title: "Steam Discussion — 'Only 3-player multiplayer??' (app 3722330)"
    url: "https://steamcommunity.com/app/3722330/discussions/0/599667160179249764"
    date: "2026-10-28 (accessed)"
    text: "Player thread on the co-op cap; the developer's reply argues tasks are completable solo, so larger lobbies would leave players idle. Confirms the 3-player design is intentional, which matters when a squad of four splits into a lobby and one person 'cannot hear anyone' — they are simply not in the session."
  - tier: "Editorial"
    title: "Fix order, decision table and co-op voice discipline"
    url: "https://shiftatmidnightwiki.vercel.app/guides/voice-chat-mic-setup-guide"
    date: "2026-10-28"
    text: "The five-step order, the symptom table and the recommendation to default to push-to-talk are our synthesis of the sources above, not developer statements."
---

# Shift At Midnight Voice Chat Not Working? Mic Setup Fixes

Shift At Midnight uses **always-on proximity chat** with no in-game device picker, so a dead mic is almost never a game bug — it is Windows or Steam handing the game the wrong input. Fix it in this order: Windows microphone permission, default communication device, Steam's voice input, then a full Steam restart.

## How proximity chat actually works

Two facts shape every troubleshooting step below.

**It is positional.** Your voice fades with distance and walls. A teammate down the far aisle of the store genuinely hears less of you than one standing at the register, and that is working as designed rather than a broken mic. If the complaint is "you keep cutting out", move before you reinstall anything.

**It is always on by default.** The store page lists "Proximity chat" as a headline feature next to "Interrogate customers" and the 13-shift story mode ([Official](https://store.steampowered.com/app/3722330/)). Nothing in the normal flow mutes you automatically, which is exactly why an open mic is dangerous: the entity hunts by sound. Our [entity survival guide](/guides/entity-survival-guide) treats a hot mic as a team-wide liability, not a personal preference.

## There is no in-game microphone selector

This is the part that sends players looking for a menu that does not exist. The game exposes **volume**, not **device selection**: the 2026-08-20 update added "Individual volume sliders for each player" ([Official](https://steamcommunity.com/games/3722330/announcements/detail/672877388439226838)), but choosing which microphone the game listens to happens one layer up, in Steam and Windows. Community troubleshooting reaches the same conclusion — the game "lacks a dedicated device selector," so mic choice depends on the two platforms underneath it ([Community](https://2upskill.com/shift-at-midnight-voice-chat-not-working-how-to-fix-mic-and-audio-issues/)).

If a bulky settings menu is what you were expecting, that is the whole answer. Everything below is the workaround.

## The fix order that resolves most cases

Work down the list and stop when it works. Each step is cheap; reinstalling the game is not, so leave it for last.

### 1. Windows microphone permission

Windows 10 and 11 ship with microphone access off for desktop apps in some configurations. Go to **Settings → Privacy & Security → Microphone**, turn on **Microphone access**, and turn on **Allow desktop apps to access your microphone**. Close the game completely before testing again — the permission is read at launch, not live.

### 2. Default communication device

Open the classic **Sound Control Panel → Recording** tab. Select your actual gaming headset, then set it as both **Default Device** and **Default Communication Device**. Disable everything you are not using: webcam mics, VR headsets, capture cards, virtual cables, soundboards. A webcam mic that Windows prefers is the single most common cause of "my friends hear the room instead of me".

### 3. Steam's voice input

Open **Steam → Settings → Voice**. Select the physical headset microphone by name rather than leaving the input on **Default**, set input volume to 100%, and run Steam's own **Voice Test**. This is the decisive split in the whole diagnosis:

- **Voice Test fails too** → the problem is Windows or hardware, not Shift At Midnight. Go back to step 1.
- **Voice Test works but the game does not** → go to step 4.

Push-to-talk also lives here rather than in-game, which is why players who set it in the pause menu cannot find it again.

### 4. Fully restart Steam

Not minimize. Not close the window. **Exit Steam from the tray and relaunch it.** A surprising share of "Steam test works, game is silent" reports clear at this step because Steam hands the voice device to the game process at launch and does not refresh it afterwards.

### 5. Microphone sample rate

In the microphone's **Properties → Advanced** tab, set the format to **16-bit, 48000 Hz**. USB headsets frequently default to 96 kHz or 192 kHz, and indie voice pipelines built on older audio middleware can fail to open a stream at those rates — the device looks fine everywhere except inside the game.

### 6. Conflicting audio software

Temporarily quit anything that installs a virtual audio driver or applies voice processing: VoiceMeeter, Voicemod, SteelSeries Sonar, Elgato Wave Link, NVIDIA Broadcast, Discord's Krisp, and Razer voice enhancement. Run only Steam, the game, and the headset's own software, and retest. If voice returns, re-enable the extras one at a time.

### 7. Network-side checks

If teammates' speaking icons flash but no audio arrives, the problem is transport rather than capture. Run `ipconfig /flushdns` and `netsh winsock reset` in an elevated Command Prompt, then reboot. Some players also report success after temporarily disabling IPv6. Keep every player on the same network path where you can — our [PC performance guide](/guides/pc-performance-guide) covers the lobby-side connection fixes in more depth.

## In-game audio controls you do have

The settings menu is thin, but it is not empty:

| Control | Where | What it does |
|---|---|---|
| Per-player volume slider | Audio settings (added 2026-08-20) | Trims a teammate who is too loud without touching your own capture |
| Voice chat on/off | Audio settings | Cuts incoming voice entirely |
| Per-row mute | Tab menu | Silences one player for the session |
| Self-mute key | **M** | The fastest way to go quiet during a hunt |

**Default to push-to-talk.** The trade-off is real: an open mic is how a team gives away its position, and the entity responds to noise. Assign one player to keep talking and the rest to mute — the division of labour is in our [co-op strategy guide](/guides/coop-strategy-guide).

## Symptom-to-cause table

| Symptom | Most likely cause | First move |
|---|---|---|
| Nobody hears you at all | Windows mic permission, or wrong default device | Steps 1–2 |
| Steam test passes, game silent | Steam voice device handed over at launch | Step 4 |
| Voice works, then cuts out mid-hunt | Audio enhancement software, or distance/walls | Step 6, then reposition |
| Friends hear the room, not you | Webcam or laptop mic is the Windows default | Step 2 |
| Speaking icons flash, no audio | Network/transport, not capture | Step 7 |
| One friend hears nobody | They are not in the lobby — co-op caps at 3 | Rebuild the lobby |

That last row is worth stating plainly: the game supports **up to 3 players** online, and the developer has defended the cap on the Steam forums, arguing that extra players would stand idle because tasks can be done solo ([Community](https://steamcommunity.com/app/3722330/discussions/0/599667160179249764)). A fourth friend cannot hear the team because they are not in the session. See the [multiplayer FAQ](/guides/multiplayer-faq-guide) for invite and join-error fixes.

## Console and cloud-streaming caveat

Xbox, Xbox on PC, and Steam share one audio pipeline, but cloud streaming usually strips microphone passthrough entirely. If a teammate is playing through the cloud, expect their mic to fail no matter what they change locally, and fall back to a phone call or Discord on the side.

## FAQ

**Does Shift At Midnight have push-to-talk?** Yes, but it is configured through Steam's voice settings rather than the in-game menu.

**Why does my mic work in Discord but not here?** Discord selects its own input device and often applies processing. The game inherits the Windows default communication device and Steam's choice, which are separate settings.

**Can I turn voice chat off entirely?** Yes, from the audio settings. Do it if you play solo or with a team on a call — an open in-game mic only adds risk.

**Is there an official fix for "microphone not detected" in the patch notes?** Not that we can verify. The 2026-08-20 announcement added per-player volume sliders and Steam Cloud saves, and no documented mic-detection bug has been confirmed.

## What is not confirmed

There is no developer-documented microphone bug and no confirmed in-game device selector. The exact contents of the 2026-08-20 changelog above were read from a search index rather than the announcement page itself — the Steam Community host timed out from our network — so treat the wording as accurate-in-substance but unverified verbatim. Everything marked [Official] elsewhere comes from the Steam store page; everything else is player troubleshooting.
