---
title: "Sephiria Photosensitivity Guide — Seizure Warning, Flashing Effects and What the Transparency Options Actually Cover"
description: "Sephiria shows a photosensitive seizure warning at game start and has an Effect Transparency option for your own and party-member effects — but enemy and boss attack effects are not covered. What is officially confirmed, which encounters players flag, and how to report a problem."
category: "Beginner"
version: "1.0"
updated: "2026-09-17"
keywords: ["sephiria photosensitivity", "sephiria epilepsy", "sephiria seizure warning", "sephiria flashing lights", "sephiria effect transparency", "sephiria accessibility options", "sephiria flashing boss", "sephiria screen effects"]
related: ["controls-settings-guide", "boss-guide", "chapter-6-final-boss-guide", "crash-launch-black-screen-fix-guide", "faq-content"]
sources:
  - tier: "Official"
    text: "The patch-notes feed for Steam app 2436940 (106 Community Announcements, read in full via the ISteamNews GetNewsForApp API) is the backbone of this guide. The photosensitive seizure warning: 'A photosensitive seizure warning is now shown when the game starts' (1.0 Update, July 31, 2026), then 'Fixed an issue where the Photosensitivity Warning UI could not be clicked on the title screen during the first (or second) launch of the game' (1.0.23, August 4, 2026). The transparency trail: party-member FX transparency added with the default 'Slightly Transparent', with an explicit note that it was not yet applied to attack FX or companion projectiles (0.7.28, April 24, 2025); extended to projectile attacks and Chain Lightning (0.7.32, May 9, 2025); 'Added feature to change your own effect transparency' (0.7.43, July 1, 2025); companions and party members' companions made transparent under the 'Effect Transparency' option (0.7.47, July 17, 2025); a bug where enabling 'Party Member fx - Fully Transparent' could disconnect the session when Solar Blade triggered (0.9.3, October 24, 2025); transparency applied to some Solar Blade FX (0.10.10, January 23, 2026); 'Fixed an issue where some projectiles fired by enemies were affected by effect transparency' — enemy projectiles deliberately sit outside the option (0.11.5, April 3, 2026); and 'Fixed an issue where certain Solar Blade animations were not affected by the transparency option' (1.0.30, August 20, 2026). The final boss Phase 1 change — 'Improved the full-screen attack so that players can continue controlling their character even while the white screen effect is active' — is from the 1.0.21 Hotfix (July 31, 2026). Pause and abandon are confirmed indirectly by 1.0.33 (September 11, 2026), which fixed 'an issue where the game could not be paused or abandoned when the player and the boss died at the same time'. The reporting channels and the footage/version/specs/mods request list come from the 1.0.33 announcement; the log path and support email are quoted from the same series. Both Steam apps for this game were checked before drawing any 'no such patch entry' conclusion: the game app 2436940 (106 announcements, the figure used above) and the separate demo app 2686970 (Steam appdetails lists it under 'demos'), whose announcement feed returns zero items — so there is no second official history that could contradict this timeline"
  - tier: "Community"
    text: "Five independent player reports, read in full from the Steam reviews API (800 most-recent English reviews, August 18 – September 16, 2026, paginated via cursor) and Steam Discussions: a negative review of September 12, 2026 (70 h played, 5 helpful votes) describing a near-seizure at the Chapter 3 alternate boss's map-wide attack, no warning seen, no toggle, and a friend without photosensitivity also having trouble — steamcommunity.com/profiles/76561198369451771/recommended/235140596; a negative review of September 12, 2026 (20 h, 4 helpful votes) reporting that friends with epilepsy can no longer play because of flashing from certain enemies, and stating there is no epilepsy warning and no toggle to remove flashing — steamcommunity.com/profiles/76561199090453046/recommended/235139414; a positive review of September 11, 2026 (35 h) calling the transparency options for your own and allies' special effects 'a boon' while flagging select flashing effects that could have been fades instead — steamcommunity.com/profiles/76561198115080540/recommended/235051658; a negative review of September 5, 2026 (29 h) reporting eye pain and headache at the final boss and warning epileptic players — steamcommunity.com/profiles/76561198194093017/recommended/234508367; and the Steam Discussions thread 'Photosensitivity' (app 2436940), where a player asks how to remove the flashing on a newer boss because it triggers their friend's epilepsy, and is told to raise it in the developers' Discord suggestion channel — steamcommunity.com/app/2436940/discussions/0/832747723340031954. Review text was read verbatim; no player quote here is paraphrased into invented wording"
  - tier: "Editorial"
    text: "This guide exists because the topic is absent from every other page on this site — a full-text search for photosensitivity, epilepsy, seizure, flashing and transparency terms across content/, app/, components/ and lib/ returns zero guide matches, and the Accessibility section of the Controls & Settings Guide covers input comfort (keybinds, block-versus-dash effort) rather than visual safety. Scoping this page to visual safety only, and linking out for inputs, is this site's editorial call. Two limits are stated deliberately and are not claims about the game: the exact options-menu path for Effect Transparency is not named in any announcement we could read, so it is not named here, and no patch note through 1.0.33 adds a setting that disables flashing or blinking outright — a negative finding checked against every available appid, per the multi-appid rule. Community reports about which specific attacks flash are player descriptions, not official effect specifications"
---

# Sephiria Photosensitivity Guide — Seizure Warning, Flashing Effects and What the Transparency Options Actually Cover

Sephiria is a bright, fast, effect-heavy action roguelite — the appeal for most players, and the one thing that can make the game unplayable for players with photosensitive epilepsy or light-triggered migraines. Several people have said exactly that since the 1.0 release. This guide covers **visual safety only**; for control comfort and input load, see the [Controls & Settings Guide](/guides/controls-settings-guide).

**The short answer:** Sephiria has an official photosensitive seizure warning shown when the game starts, and an **Effect Transparency** option that fades your own effects, your party members' effects and companions'. Those options do **not** cover enemy and boss attack effects — that exclusion is deliberate and documented. If a specific attack is a problem, transparency will not remove it; report the encounter rather than hunting for a toggle that does not exist.

---

## The Warning Is Real — But Players Still Say They Never Saw It

Two things are officially confirmed:

- **1.0 Update (July 31, 2026):** "A photosensitive seizure warning is now shown when the game starts." [Official]
- **1.0.23 (August 4, 2026):** "Fixed an issue where the 'Photosensitivity Warning' UI could not be clicked on the title screen during the first (or second) launch of the game." [Official] The wording tells you where it lives — a clickable UI on the **title screen** — and that there was a window where you could not dismiss it.

So the warning exists and is not new. Yet the two most-helpful recent negative reviews, both from September 2026, state flatly that there is no epilepsy warning and no flashing toggle. Take that gap seriously in both directions: **do not assume a warning will appear and register with you.** Watch the title screen at launch, and if you never see one, treat it as a bug worth reporting rather than as proof the game is safe. Note also that the warning fires at game start, not before a specific fight — it cannot tell you *which* encounter carries the risk, which is what the sections below are for.

---

## What You Can Turn Down: Effect Transparency

Sephiria's transparency system was built up over more than a year of patches. It is the only visual-safety lever the game documents today.

| What it covers | Status |
|---|---|
| **Party member effects** | Added 0.7.28 (Apr 24, 2025), default **'Slightly Transparent'**; one setting is named **'Party Member fx - Fully Transparent'** [Official] |
| **Your own effects** | "Added feature to change your own effect transparency" — 0.7.43 (Jul 1, 2025) [Official] |
| **Companions** | Companions and party members' companions also become transparent under the 'Effect Transparency' option — 0.7.47 (Jul 17, 2025) [Official] |
| **Projectiles / Chain Lightning** | Extended 0.7.32 (May 9, 2025) to projectile attacks and Chain Lightning [Official] |
| **Solar Blade FX** | Applied 0.10.10 (Jan 23, 2026); "certain Solar Blade animations" fixed again in 1.0.30 (Aug 20, 2026) [Official] |

Two practical notes. The piecemeal roll-out explains why the option can feel inconsistent — the 0.7.28 note admitted it was "a feature under development" not yet applied to attack FX or companion projectiles. And in co-op, enabling **'Party Member fx - Fully Transparent'** once risked crashing the session when effects such as Solar Blade triggered; that was fixed in 0.9.3 (Oct 2025), so it is safe on 1.0.x. [Official]

A review from September 11, 2026 calls transparency for your own and allies' effects "a boon", but adds that some select flashing effects "could've just be fade in or out". [Community] That is the honest state of it: it helps greatly with the visual noise your own build generates, and does not touch everything.

---

## What You Cannot Turn Off: Enemy and Boss Attack Effects

This is the part that matters most for photosensitivity — and the part players are asking about.

**Enemy attack effects sit outside the transparency system by design.** Patch 0.11.5 (April 3, 2026) lists: "Fixed an issue where some projectiles fired by enemies were affected by effect transparency." [Official] Transparency being applied to enemy projectiles was treated as a *bug* and removed. The consequence is direct: the option that fades a Sparkle-heavy build will not fade the attack that is actually flashing at you.

| Encounter | What players report | Official corroboration |
|---|---|---|
| **Chapter 3 alternate boss** | A map-wide flashing attack that fills the arena; one reviewer said there was nowhere to stand to avoid seeing it, and that a friend *without* photosensitivity also struggled | No official note names this attack's effects — player-sourced [Community] |
| **Final boss, Phase 1** | Eye pain and headache; one reviewer explicitly warned epileptic players | 1.0.21 Hotfix confirms a **full-screen white screen effect** in the Phase 1 full-screen attack, changed so you keep control while it is active [Official] |
| **Certain enemies in general play** | Two reviewers name flashing from "certain enemies and parts of the game" as why friends with epilepsy stopped playing | No official effect specification exists [Community] |

Note the asymmetry: the final boss white-out is officially acknowledged; the Chapter 3 boss and general enemy flashing are player reports only, not a verified effect list.

---

## If an Effect Is Causing You Problems Mid-Run

1. **Pause and step away from the screen first.** Sephiria supports pausing and abandoning an expedition — both confirmed by the 1.0.33 fix for the case where the player and boss died simultaneously and the game could not be paused or abandoned. [Official] Losing a run costs you a run; it is the correct trade.
2. **End the expedition rather than pushing through the fight.** A reviewer who reached the final boss described doing exactly this at the Chapter 3 boss — learning to recognise the arena and ending the run on sight. [Community]
3. **Turn on Effect Transparency before your next attempt.** It will not fix enemy attacks, but cutting your own and your party's effect layer removes real on-screen motion.
4. **In co-op, agree on low-effect builds.** Transparency is per-player, so the host cannot fix a teammate's screen; build choices matter more than any setting.
5. **If it is still unplayable, stop and report it.** No setting at the current version makes a specific flashing attack safe for you.

---

## How to Report It — and What to Ask For

Two official channels accept this kind of report:

- **Discord:** `discord.gg/g7AaeBuyMV` — the community's own advice in the "Photosensitivity" thread was to raise it in the Discord suggestion channel. [Community]
- **Email:** `team.horay.game@gmail.com`, with logs from `C:\Users\{Your_PC_Name}\AppData\LocalLow\TEAMHORAY\Sephiria` (`Player.log` for the current session, `Player-prev.log` for the previous one). [Official]

The 1.0.33 announcement shows what the developers act on: for a bug they could not reproduce, they asked for **recorded footage, game version, system specs and whether mods were in use**. [Official] That is exactly what an accessibility report needs — footage of the specific attack, the boss and chapter, and your version number.

**What to ask for, honestly:** as of **1.0.33 (September 11, 2026)**, no announcement in the entire 106-item feed adds a setting that disables flashing or blinking. The request is real and unmet. [Official — absence of any such entry; Community — the "Photosensitivity" thread] Asking for a flashing-reduction toggle, with footage attached, is concrete and reasonable. Asking "where is the setting" will not find one, because there isn't one yet.

---

## FAQ

**Q: Does Sephiria have an epilepsy warning?**
Yes: a photosensitive seizure warning was added in the 1.0 Update (July 31, 2026), shown at game start on the title screen, and a 1.0.23 fix repaired the case where that UI could not be clicked during the first or second launch. Players still report not seeing one, so do not treat it as a guarantee you will register it. [Official / Community]

**Q: Is there a setting to turn off flashing lights?**
Not as of 1.0.33. **Effect Transparency** covers your own effects, party-member effects and companions — not enemy or boss attack effects. [Official]

**Q: Which boss is worst for flashing?**
Players most often name the **Chapter 3 alternate boss** (map-wide flashing attack) and the **final boss Phase 1**, where a full-screen white effect is officially confirmed. [Community / Official]

**Q: I want to help get this fixed. What do I send?**
Footage of the specific attack, your game version, system specs and whether you use mods — the list requested in 1.0.33 — to `team.horay.game@gmail.com` or the Discord (`discord.gg/g7AaeBuyMV`). [Official]

---

## Related Guides

- [Controls & Settings Guide](/guides/controls-settings-guide) — Keybinds, controller setup, performance settings and input comfort
- [Boss Guide](/guides/boss-guide) — Attack patterns and how to read them
- [Chapter 6 Final Boss Guide](/guides/chapter-6-final-boss-guide) — The final boss, phase by phase
- [Crash, Launch & Black Screen Fix Guide](/guides/crash-launch-black-screen-fix-guide) — If the game will not start or display correctly
- [Sephiria FAQ](/guides/faq-content) — Common questions in one place
