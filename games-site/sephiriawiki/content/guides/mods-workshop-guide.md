---
title: "Sephiria Mods Guide: Steam Workshop & Manual Install"
description: "Sephiria 1.1.0 beta adds Steam Workshop mods. How to opt into workshop-beta, enable subscribed mods, install AddOns and BepInEx mods, and fix failures."
category: "Guides"
version: "1.1.0"
updated: "2026-10-30"
date: "2026-10-30"
keywords:
  - "sephiria mods"
  - "sephiria steam workshop"
  - "sephiria workshop beta"
  - "sephiria how to install mods"
  - "sephiria mods not working"
  - "sephiria addons folder"
  - "sephiria bepinex"
  - "sephiria 1.1.0"
related:
  - "patch-1-0-31-build-changes-guide"
  - "save-file-guide"
  - "crash-launch-black-screen-fix-guide"
  - "artifacts-guide"
  - "tablets-guide"
  - "controller-casting-keybind-fix-guide"
  - "full-release-guide"
  - "faq-content"
sources:
  - tier: "Official"
    title: "Sephiria 1.1.0 Beta Update (Steam announcement, app 2436940)"
    url: "https://steamcommunity.com/ogg/2436940/announcements/detail/694276363007295840"
    date: "2026-10-29"
    text: "Read verbatim from the Steam News API; the canonical Steam Community URL was confirmed through the Steam News CDN redirect. TEAM HORAY writes: 'The 1.1.0 update is now available as a public beta.' Under New Content: 'Added Steam Workshop mod support.' and 'You can create mods such as new costumes or translations and upload them to the Steam Workshop.' Opt-in steps: 'In your Steam Library, right-click Sephiria → Properties → Game Versions & Betas' then 'Select the workshop-beta beta build.' The post warns 'Anything in the beta version may be adjusted or changed in the official release' and 'Please back up your existing save data before joining the beta test.' Known Issue: 'some mods display the message Unable to load verification info for this mod and do not run.' The same patch adds the Run History feature (unlocked through Destiny Inscription; last 100 runs), a Greatsword upgrade called Scattered Longing, two artifacts (Wagner's Glass Bottle, Compass of Breakthrough), two tablets (Growth, Reverberation), the Ice Storm grimoire, the Salvage Station random object, and a reworked Magic Fountain."
  - tier: "Official"
    title: "Sephiria 1.0.33 Update (Steam announcement, app 2436940)"
    url: "https://steamcommunity.com/ogg/2436940/announcements/detail/692020124159312357"
    date: "2026-09-11"
    text: "Read verbatim from the Steam News API; canonical URL confirmed through the Steam News CDN redirect. This is the patch immediately before 1.1.0 and the default-build baseline referenced by mod authors. It fixes Qliphoth pause/abandon behaviour when player and boss die together, changes Master's Tsuba, and includes a Known Issues note about enemies moving outside walls tied to the 1.0.31 collision system. Nothing in it mentions Workshop or mod support."
  - tier: "Community"
    title: "Sephiria Mod Not Working: Loader and Installation Fixes (sephiriagame.com)"
    url: "https://sephiriagame.com/guides/mod-loader-troubleshooting/"
    date: "2026-10-30 (updated)"
    text: "Fetched in full. States the Workshop route requires Steam's 'workshop-beta' branch and that 'subscribed mods are disabled by default' in the in-game mod list; restart after changing load order or disabling a mod. Documents AddOns-loader mods placed directly in 'AddOns/<ModName>' with no separate BepInEx loader (example: 0xMashiro SephiriaEnhancements; enable via Options → Gameplay after loading a save), and BepInEx 5 mods with a DLL under 'BepInEx/plugins/' (example: G-Yoka Ranged Enhancements, default F11 menu). Notes Mira Item Mod v1.1.5 is labelled for game version 1.0.33. Logs live in 'AppData/LocalLow/TEAMHORAY/Sephiria' as Player.log and Player-prev.log. Also lists symptom checks: no settings, F11 inactive, missing content, co-op mismatch."
  - tier: "Community"
    title: "Sephiria Mods Guide: Install, Play, and Fix Custom Content (Sephiria Wiki)"
    url: "https://sephiriawiki.wiki/mods/sephiria-mods/"
    date: "2026-10-30 (accessed)"
    text: "Fetched in full. Written from the pre-1.1.0 scene: 'Sephiria does not have an official Steam Workshop page for its own mods', and modding 'operates through manual file replacement and external mod hosts'. Describes downloading archives, placing files in the game directory, running install.bat when provided, and using a 'mods' or 'plugins' subfolder. This claim is now outdated for the 1.1.0 beta branch and is used here only to describe the legacy manual route."
  - tier: "Community"
    title: "《赛菲莉娅》版本更新 - 1.1.0 - 新增创意工坊模组支持 (17173)"
    url: "https://news.17173.com/content/10292026/235134372.shtml"
    date: "2026-10-29"
    text: "Independent Chinese-language mirror of the 1.1.0 announcement, fetched in full. Confirms the public beta, Workshop mod support, the workshop-beta opt-in path, the save-backup warning, the new Greatsword upgrade, the two artifacts, two tablets and Ice Storm grimoire, the Salvage Station and Magic Fountain rework, and the Run History feature (last 100 runs, viewable at the village board or pause menu). Adds no claims beyond the official post."
  - tier: "Editorial"
    title: "Route selection, load-order advice and the troubleshooting order"
    url: "https://sephiriawiki.vercel.app/guides/mods-workshop-guide"
    date: "2026-10-30"
    text: "The choice between Workshop, AddOns and BepInEx routes, the load-order checklist and the troubleshooting order are our synthesis of the sources above. They are operational advice, not developer statements."
---

# Sephiria Mods Guide — Steam Workshop, the Beta Branch and Manual Installs

Sephiria's 1.1.0 update adds official Steam Workshop mod support, but only on the optional `workshop-beta` branch — the default build still runs 1.0.33. Here is how to opt in, how Workshop mods differ from the older AddOns and BepInEx routes, and what to check when a mod refuses to load.

## What 1.1.0 actually adds

The 1.1.0 update is a **public beta**, not the default build. TEAM HORAY's announcement is explicit about both the feature and the risk:

> "Added Steam Workshop mod support." [Official]

> "Anything in the beta version may be adjusted or changed in the official release." [Official]

The Workshop is for player-made content in the first pass. The announcement gives two examples — "new costumes or translations" — and points creators to a separate modding guide. It does not promise that every existing code mod will move to Workshop, and it does not say the feature is final.

The same patch also adds **Run History** (unlocked through Destiny Inscription; the last 100 runs are saved and viewable at the village board or pause menu), a Greatsword upgrade called Scattered Longing, two artifacts (Wagner's Glass Bottle, Compass of Breakthrough), two tablets (Growth, Reverberation), the Ice Storm grimoire, the Salvage Station random object, and a reworked Magic Fountain. [Official] None of that is required to mod the game; it just explains why the beta branch is busy right now.

## Step 0: back up your save first

The announcement asks you to do this before joining the beta, and it is not boilerplate — the beta changes internals to support Workshop content, and the developer says parts of the game "may be less stable" in beta. [Official]

Copy your save folder before switching branches. Our [Save File Guide](/guides/save-file-guide) covers the path and the backup routine. If you later leave the beta, keep that backup until you have confirmed the default build still reads your progress.

## Route 1: Steam Workshop (1.1.0 beta only)

This route only works while you are on the beta branch.

| Step | What to do |
|---|---|
| 1 | In Steam, right-click Sephiria → **Properties** → **Game Versions & Betas** [Official] |
| 2 | Select the **`workshop-beta`** build [Official] |
| 3 | Let Steam download the beta, launch the game, and confirm the build changed |
| 4 | Subscribe to Workshop items in Steam |
| 5 | Open the in-game mod list and **enable** the subscription — community testing reports subscribed mods are disabled by default [Community] |
| 6 | Restart the game after changing load order or disabling a mod [Community] |

Two practical limits follow from that table:

- **Workshop mods will not appear on the default 1.0.33 build.** If you are not on `workshop-beta`, the subscription exists in Steam but the game has no Workshop loader to read it. [Official / Community]
- **Review status varies by mod type.** Community documentation says code mods go through review while translation and costume mods do not. Treat that as community-reported until the official modding guide says otherwise. [Community]

### The known Workshop error

The 1.1.0 post ships with one named known issue:

> "some mods display the message 'Unable to load verification info for this mod' and do not run" [Official]

TEAM HORAY says it is investigating. If you hit it, the useful checks are: confirm you are actually on `workshop-beta`, confirm the mod is enabled in the in-game list, restart once, and then check the log file (below). Re-subscribing is a reasonable last step, but do not assume the mod is broken — the official post says the cause is still under investigation. [Official]

## Route 2: AddOns mods (stable and beta)

The AddOns route predates Workshop and still matters, especially for mods that have not been rebuilt for 1.1.0. Community documentation describes placing the mod package directly inside an `AddOns` folder in the game directory, with no separate loader. [Community]

One documented layout looks like this:

```
Sephiria/
└── AddOns/
    └── MiraItemMod/
        ├── Assets/
        ├── Libs/
        ├── metadata.json
        ├── MiraItemMod.dll
        └── MiraModBase.dll
```

The common mistake is an extra wrapper folder from extraction, such as `AddOns/MiraItemMod-1.1.5/MiraItemMod`. The package needs to sit at the level the author specifies, not one folder deeper. [Community]

For AddOns mods that expose settings, launch the game and **load a save** before looking for them. At least one documented mod only appears under **Options → Gameplay** after a save is loaded; sitting on the main menu is not enough. [Community]

## Route 3: BepInEx 5 mods

Some mods still ship as BepInEx plugins. Community documentation for one such mod specifies **BepInEx 5** on Windows/Unity Mono, explicitly not BepInEx 6 or IL2CPP, with the DLL under `BepInEx/plugins/`. [Community]

| Item | Documented value |
|---|---|
| Loader | BepInEx 5 (not 6 / IL2CPP) [Community] |
| Plugin path | `BepInEx/plugins/<ModName>.dll` [Community] |
| Default menu key | F11 for the documented mod [Community] |
| Config path | `BepInEx/config/com.sephiriamods.enhancements.cfg` [Community] |

Do not leave several versions of the same plugin installed. If the menu key does nothing, check the config file while the game is closed before reinstalling anything. [Community]

## Which route should you use?

| Situation | Route |
|---|---|
| You want costumes or translations from the Workshop | Workshop, on `workshop-beta` |
| The mod is an AddOns package | AddOns folder, stable or beta |
| The mod is a BepInEx plugin | BepInEx 5 |
| The mod was built for 1.0.33 and you are on 1.1.0 beta | Expect breakage; check the author's version note first |
| You play co-op | Match mod names **and exact versions** on host and every client [Community] |

The last row is the one that wastes the most time. A co-op session with mismatched mods can look like a connection or desync problem when the real cause is a different mod build. Compare the exact release version, not just the mod name. [Community]

## Troubleshooting order

Work down this list before deleting anything:

1. **Confirm the branch.** Workshop mods require `workshop-beta`; manual mods do not. [Official]
2. **Confirm the mod is enabled.** Community testing reports Workshop subscriptions start disabled in the in-game list. [Community]
3. **Confirm the folder depth.** An extra wrapper folder is the most common AddOns failure. [Community]
4. **Check the version the author targeted.** A mod labelled for 1.0.33 may not work on the 1.1.0 beta. [Community]
5. **Read the log.** `AppData/LocalLow/TEAMHORAY/Sephiria` contains `Player.log` (current session) and `Player-prev.log` (previous session). [Community]
6. **Restart after load-order changes.** Reordering or disabling a mod takes effect after a restart. [Community]

If the game will not launch at all, the [Crash and Black Screen Fix Guide](/guides/crash-launch-black-screen-fix-guide) covers launch options and log reading in more depth. If the problem is controls rather than mods, see the [Controller and Keybind Fix Guide](/guides/controller-casting-keybind-fix-guide).

## FAQ

**Does Sephiria have official mod support now?**
Yes — Steam Workshop support was added in the 1.1.0 public beta on 29 October 2026. It is not on the default build yet. [Official]

**Do Workshop mods work without the beta branch?**
No. The Workshop loader is part of 1.1.0; the default build is 1.0.33. [Official]

**Do I need BepInEx to mod Sephiria?**
Only for mods that ship as BepInEx plugins. AddOns packages are documented as not requiring a separate loader. [Community]

**Why is my subscribed mod disabled?**
Community testing reports subscriptions are disabled by default in the in-game mod list; enable it and restart. [Community]

**Can I use mods in co-op?**
Community documentation says host and clients must run the same mods at the same versions. [Community]

**Where is the Sephiria log file?**
`AppData/LocalLow/TEAMHORAY/Sephiria` — `Player.log` for the current session, `Player-prev.log` for the previous one. [Community]

**Is 1.1.0 safe for a main save?**
It is a public beta and the developer warns it may be less stable. Back up your save before switching branches. [Official]

## What is not confirmed

- Which specific mods have been rebuilt for the 1.1.0 beta.
- Whether Workshop mods and saves will carry over unchanged when 1.1.0 leaves beta.
- The exact review criteria for Workshop uploads.
- Whether every existing AddOns or BepInEx mod remains compatible with 1.1.0.

We have not invented menu labels, file names or compatibility promises for any of these. The confirmed facts are the official 1.1.0 announcement and the community documentation cited above.
