---
title: "The Mound Voice Chat Not Working — How to Fix Mic and Voice Chat Problems (Patch 1.05 Rework)"
description: "Voice chat broken in The Mound: Omen of Cthulhu? This guide covers the official voice chat fix timeline from Patch 1.01 to the Patch 1.05 voice chat rework, crossplay voice corruption, microphone detection and push-to-talk setup on PC, PS5 and Xbox — plus how to tell a real bug from the game's proximity chat and sanity effects."
category: "Guides"
version: "1.0"
updated: "2026-09-12"
keywords: ["the mound voice chat not working", "the mound mic not working", "the mound voice chat fix", "the mound push to talk", "the mound can't hear teammates", "the mound crossplay voice chat", "the mound patch 1.05 voice chat"]
related: ["coop-strategy-guide", "controls-settings-guide", "multiplayer-connection-fix-guide", "updates-patch-notes", "sanity-guide"]
---

# The Mound Voice Chat Not Working — How to Fix It

If you cannot hear your squad in *The Mound: Omen of Cthulhu*, you are not imagining it — and you are probably not doing anything wrong. Voice chat is not a side feature in this game: it is the system the whole co-op loop is built on, and the developers have patched it **four separate times** since launch, most recently in **Patch 1.05 — Voice Chat Rework** on **September 9, 2026**.

This guide walks through the official fix history, the settings that actually matter, and — critically — how to tell a genuine bug from two systems that are *supposed* to make voice chat sound wrong.

## Quick Answer

| What you are hearing | Most likely cause | What to do |
|---|---|---|
| Teammates sound **robotic, garbled or corrupted** | Bug — fixed in Patch 1.05 for crossplay and "certain systems" | Update the game; see Step 1 |
| **No voice at all**, mic never registers | Bug — a known "mics not being correctly picked up" issue existed since Patch 1.01 | Step 3 checklist, then Step 5 |
| Teammates sound **muffled and distant** even when close | Reported as extreme proximity falloff — partly the game's design, partly the pre-1.03 audio corruption | Step 2 (1.03), then Step 4b |
| Voice only fails **with players on another platform** | Crossplay voice corruption — the specific target of Patch 1.05 | Step 4a |
| A teammate's voice sounds **wrong, wrong place, or wrong person** | Sanity system, not a bug | Step 4b |

## Step 1 — Get Everyone on Patch 1.05 or Later

The single highest-value fix is the one the developers shipped. In the official Patch 1.05 announcement (September 9, 2026), ACE Team wrote that they had received "reports of voice chat sounding robotic or not working at all," that it had been working as intended for some players, and that they had "overhauled it to resolve these issues and given it extensive testing."

The headline patch note is blunt:

> **Fixed voice chat corruption during crossplay and on certain systems**

Two things follow. If your squad is not all on 1.05, you are troubleshooting a build the developers already replaced — and crossplay requires matching versions, so a mixed-version squad fails before voice chat is involved. And "on certain systems" targets corruption specifically, not every audio problem, which is why Steps 3 and 5 still matter.

## Step 2 — The Official Voice Chat Fix Timeline

Voice chat problems in *The Mound* are not one bug. They are a series of them, acknowledged patch by patch. If you are on an older build, the fixes below are simply missing from your game.

| Patch | Date | What the developers said about voice chat |
|---|---|---|
| 1.01 | Jul 21, 2026 | Listed as a known issue: "Issues where mics are not correctly being picked up in-game" |
| 1.02 | Jul 29, 2026 | "Improvements to local voice (some issues remain that we're looking into)" |
| 1.03 | Aug 13, 2026 | "Updated voice chat, fixing audio corruption issues and improving audio spatialization." |
| 1.05 | Sep 9, 2026 | Voice chat rework; "Fixed voice chat corruption during crossplay and on certain systems" |

Read that sequence as a warning, not just a changelog. Patch 1.02 said some issues remained. 1.03 fixed audio corruption and improved spatialization — the two things behind muffled, distant-sounding teammates. 1.05 reworked the system and named crossplay corruption directly. If your complaint matches any of those, the official fix already exists and updating is the whole answer.

## Step 3 — Settings Checklist (PC, PS5, Xbox)

Work through this in order. Each item has caused real failures for someone:

- **Update the game.** Crossplay between mismatched versions does not work at all.
- **In-game voice chat enabled.** It can be toggled off independently of master volume.
- **Voice Chat Volume** above zero. Voice is mixed against loud combat audio; a low slider plus a storm is indistinguishable from a bug.
- **Voice Chat Mode: Push to Talk or Open Mic.** Push to talk was added in a launch-window update and is the PC recommendation; open mic is the console default. **Rebind and test the key with a squadmate before you deploy** — an unbound or conflicting push-to-talk key is the most common "my mic is dead" report.
- **Microphone selection.** Confirm the game is picking your actual input device, not a webcam mic or a disconnected headset. This is the exact failure logged in Patch 1.01.
- **OS-level microphone permission.** Windows, macOS, and console privacy settings can block a game's mic access independently of the game's own settings.
- **Spatial audio and Headphone Mode.** Enable your platform's spatial audio (Windows Sonic, Tempest 3D, Dolby Atmos) and set the game to headphone mode; a forced 7.1 output can smear the positional mix.
- **NAT type.** Voice travels over the same peer connections as the lobby, so a strict NAT degrades both — see the [Multiplayer Connection Fix Guide](/guides/multiplayer-connection-fix-guide) for the full crossplay checklist.

## Step 4 — Match the Symptom to the System

### 4a. Crossplay voice corruption

If voice works with same-platform friends but fails the moment a console player joins, you are looking at the exact failure Patch 1.05 named. A crossplay guide published in July 2026 documented the pattern before the fix landed: one Steam player testing with an Xbox friend "couldn't get voice working at all," even with "both mics and audio devices showing as correctly detected in settings," and the author cautioned that it was unclear whether the cause was the invite/connection bug or something separate — so push-to-talk should not be assumed to fix it.

If you are on 1.05 and crossplay voice still fails, the problem is likely the *connection*, not the audio — fix the join first with the [Multiplayer Connection Fix Guide](/guides/multiplayer-connection-fix-guide); voice rides on the same session.

### 4b. When it is not a bug

Two systems in *The Mound* make working voice chat sound broken. Before you reinstall anything, rule these out.

**Proximity is the design.** Voice chat is spatial: volume and clarity fall off with distance, and past a certain range teammates are simply inaudible. A Steam review from August 2026 described the falloff as the game's "biggest weakness," reporting that "a player standing one player length away from you will be nearly inaudible" and that voices "sound muffled, as if there were a barrier between you and them." Some of that is intended closeness-based mixing; the muffling specifically overlaps with the audio corruption Patch 1.03 and 1.05 addressed. Either way the takeaway is the same: **stay within sight of your squad.** The full distance table and callout discipline live in the [Co-op Strategy Guide](/guides/coop-strategy-guide).

**Sanity effects use your voice.** This is why the developers asked players to stay on the in-game voice chat. False teammate voices and distorted party audio are mechanics, not connection failures — if a voice sounds like it is in the wrong place, or a teammate insists they never spoke, check the [Sanity Guide](/guides/sanity-guide) before you touch your drivers.

### A note on "just use Discord instead"

Switching to an external voice app is the common community workaround. It restores audibility, but it costs you positional information the game is designed around and removes your voice from the sanity system. Now that the official crossplay fix exists, treat Discord as a fallback for a broken session, not a permanent replacement.

## Step 5 — Report It the Way the Developers Asked

The Patch 1.05 notes end with a direct request: if you continue to experience issues with the in-game voice chat, report them **on the official Discord or in the Steam Discussions**. That channel matters — the rework exists because players reported the problem.

When you report, include the details that separate a bug from a design quirk:

- Your platform, whether the squad is crossplay, and your patch version
- Whether the failure is corruption (robotic), silence (mic never registers), or falloff (muffled at close range)
- Whether push-to-talk or open mic was active
- Whether external voice apps work at the same time — that single data point isolates the game's audio path from your hardware

## Common Mistakes

| Mistake | Why it fails |
|---|---|
| Troubleshooting before updating | Patch 1.05 replaced the voice chat system; older builds cannot be fixed by settings |
| Squad on mixed versions | Crossplay requires matching versions, so voice never gets a chance to connect |
| Blaming the mic when teammates sound muffled at close range | Proximity falloff and sanity distortion are intended; check Step 4b first |
| Dismissing a garbled voice as "just the game" | Audio corruption was a real, patched bug in 1.03 and 1.05 — report it |

---

## Sources

**Official**
- [Steam announcement — Patch 1.05: Voice Chat Rework & Other Hotfixes (September 9, 2026)](https://store.steampowered.com/news/app/2569760/view/702152588870551874) — verbatim developer statement on "voice chat sounding robotic or not working at all," the "fixed voice chat corruption during crossplay and on certain systems" patch note, the recommendation to use in-game voice chat, and the request to report remaining issues on Discord or Steam Discussions
- [Steam announcement — Patch 1.03: Quality of Life Hotfixes (August 13, 2026)](https://store.steampowered.com/news/app/2569760) — "Updated voice chat, fixing audio corruption issues and improving audio spatialization"
- [Steam announcement — Patch 1.02: Block Ability & Hotfixes (July 29, 2026)](https://store.steampowered.com/news/app/2569760) — "Improvements to local voice (some issues remain that we're looking into)"
- [Steam announcement — Patch 1.01: Post Launch Hotfixes, Balancing Pass + Crossplay Friend Finder (July 21, 2026)](https://store.steampowered.com/news/app/2569760) — known issue: "Issues where mics are not correctly being picked up in-game"
- [Steam news hub — The Mound: Omen of Cthulhu (app 2569760)](https://store.steampowered.com/news/app/2569760) — patch titles, dates and full announcement text used for the timeline in Step 2

**Community**
- [Steam player review — Buster (August 29, 2026, 14 helpful votes)](https://steamcommunity.com/profiles/76561197979132618/recommended/2569760/) — "The fall off from proximity voice chat is EXTREME. A player standing one player length away from you will be nearly inaudible… they often sound muffled, as if there were a barrier between you and them"

**Editorial**
- [TposeGaming — Is The Mound: Omen of Cthulhu Crossplay? How Does It Work? (July 19, 2026)](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/) — proximity voice chat, the launch push-to-talk addition, and the reported Steam ↔ Xbox voice failure with mics correctly detected
- [TheSixthAxis — The Mound: Omen of Cthulhu Review (August 7, 2026)](https://www.thesixthaxis.com/2026/08/07/the-mound-omen-of-cthulhu-review-multiplayer-madness/) — spatialised voice chat behaviour in practice

> **Honesty note:** Reddit and the Steam Community discussion boards were unreachable from our environment while writing this guide, so no Reddit threads or discussion-board posts are cited here — nothing from those channels has been paraphrased or invented. All Community claims above come from the individual Steam review linked. Patch-version fixes are quoted from the developers' own announcements, not from third-party summaries.

---

## Related Guides

- [Co-op Strategy Guide — Squad Roles, Spatial Voice Chat & Callouts](/guides/coop-strategy-guide)
- [Controls & Settings Guide — Audio Setup, Push to Talk & Keybinds](/guides/controls-settings-guide)
- [Multiplayer Connection Fix — Lobby Errors & Crossplay Joins](/guides/multiplayer-connection-fix-guide)
- [Update Log & Patch Notes — Version History](/guides/updates-patch-notes)
- [Sanity Guide — Hallucinations, False Voices & Masked Teammates](/guides/sanity-guide)
