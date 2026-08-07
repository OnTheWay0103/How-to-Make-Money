---
title: 'Echoes of Mystralia Save Files — Steam Cloud, Backup & Full-Release Carry-Over'
description: 'Where Echoes of Mystralia stores its save files, how Steam Cloud saves work, how to back up your progress before Early Access on August 11, and whether Early Access progress carries over to the full 1.0 release.'
category: 'Game Info'
version: 'Pre-release'
updated: '2026-08-07'
keywords: ['echoes of mystralia save file location', 'echoes of mystralia save files', 'echoes of mystralia steam cloud', 'echoes of mystralia full release save', 'echoes of mystralia backup save', 'does echoes of mystralia carry over to full release', 'echoes of mystralia save transfer full release']
related: ['demo-save-transfer', 'ea-launch-guide', 'ea-roadmap-guide', 'faq']
---

# Echoes of Mystralia Save Files — Steam Cloud, Backup & Full-Release Carry-Over

Three things matter about Echoes of Mystralia saves as the **Early Access launch on August 11, 2026** approaches: demo progress **does** carry into Early Access (confirmed), saves sync through **Steam Cloud** (confirmed), and whether Early Access progress will carry into the full 1.0 release has **not been announced (TBD)**. Here's what's confirmed, where your save actually lives, and how to protect it before launch day.

> **Pre-release note:** Exact save paths published by the developer are **TBD**. The locations below follow the standard Steam folder structure, which is how Steam Cloud stores files for every cloud-enabled game, including this one. We'll update this guide with official paths after launch.

## The Three Questions, Answered

| Question | Answer |
|----------|--------|
| Does my demo save transfer to Early Access? | ✅ **Yes — confirmed** (Echo Fragments reset to zero by design) |
| Does the game use Steam Cloud saves? | ✅ **Yes — confirmed** (Steam Cloud is enabled on the Steam listing) |
| Does Early Access progress carry to the full release? | ❌ **Unannounced (TBD)** — nothing official yet |

For the demo-to-EA transfer details — exactly what carries over, what resets, and step-by-step prep — see the [Demo Save Transfer Guide](/guides/demo-save-transfer). This guide covers the save files themselves: where they live, how cloud sync works, how to back up, and what to expect for the full release.

## How Steam Cloud Saves Work Here

Echoes of Mystralia has **Steam Cloud enabled**, which means your save data is synced to your Steam account and follows you across PCs — and it's the mechanism that makes the demo-to-EA transfer possible, since both share your Steam identity.

- Saves sync **automatically** whenever the game closes (and periodically during play) as long as Steam is online.
- The green cloud icon in your Steam Library shows sync status — if it shows "pending," the save hasn't finished uploading.
- Cloud saves are tied to your **Steam account**, so play the demo and the EA build on the same account, or your save won't be there.

## Where Save Files Live

Borealys has not published the exact save directory (**TBD**), but the game's Steam app ID is **974480**, which tells you where to look. Steam stores cloud-enabled game data in this standard structure:

```
Steam\userdata\<your-account-id>\974480\remote\
```

That `remote` folder is the game's save data, mirrored locally by Steam and synced to the cloud. (A few games also keep files under `Documents\My Games\`, but the Steam `userdata` folder is the canonical location for cloud saves.) To find it quickly: in Steam, right-click the game → Manage → Browse local files, then navigate up to `steamapps\` and look for the `userdata` folder, or open your Steam installation directory directly.

## Back Up Before Launch Day

The confirmed demo-to-EA transfer means your pre-launch progress is valuable. A manual backup costs two minutes and covers you against cloud hiccups:

1. **Quit the demo normally** and let Steam finish syncing (green icon clear, not "pending").
2. **Locate the save folder** — `Steam\userdata\<account-id>\974480\` (see above).
3. **Copy the folder to another drive or cloud folder** (OneDrive, Google Drive, a USB stick). A simple copy is all you need.
4. **Keep the demo installed until after launch** — uninstall via Steam if you must (it preserves cloud saves), never by deleting files manually.
5. **After the EA build boots, accept the save-transfer prompt** and verify your hub upgrades, spells, and Memories against your demo state.

To **restore** a backup: close the game, replace the contents of the `974480` folder with your copy, launch the game once with Steam online, and let the cloud reconcile (choose "upload local" if prompted).

## Will Early Access Progress Carry to the Full Release?

**No official answer yet (TBD).** Borealys Games has announced the game's content direction — a 1.0 that completes the endgame and adds the final narrative act — but has said nothing about whether Early Access saves carry forward to full release.

What you can weigh while waiting:

- **The studio's track record here is transfer-friendly.** The demo-to-EA transfer was announced well in advance, which suggests the team values continuity.
- **But progression has been reworked before.** Echo Fragments reset at EA launch because the progression systems changed between demo and EA — a reminder that carry-over isn't guaranteed when systems evolve.
- **Roguelites rarely wipe everything.** Permanent progression at the Azimuth Temple hub is a core pillar of the design, and studios usually preserve it where possible.

The honest expectation: **plan for your Early Access progress to carry, but don't treat it as guaranteed.** Anything you're proud of — a strong crafted spell, a full Memory collection — is worth having fun earning again if a wipe comes. We'll update this guide the moment Borealys announces the 1.0 policy.

## Related Guides

- [Demo Save Transfer Guide](/guides/demo-save-transfer) — exactly what carries from demo to EA
- [EA Launch Guide](/guides/ea-launch-guide) — the August 11 first-session checklist
- [EA Roadmap Guide](/guides/ea-roadmap-guide) — launch scope and what follows
- [FAQ](/guides/faq) — quick answers on platforms and release date
