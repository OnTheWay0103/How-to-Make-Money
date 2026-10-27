---
site: dragonswordwiki
title: Spoiler boundaries are a design decision, not a disclaimer
description: Where you put the spoiler warning determines who reads the page. Most sites put it in the wrong place and lose half their readers.
tags: [content, ux, writing]
targetUrl: https://dragonswordwiki.vercel.app/guides/hero-builds-guide
anchorBrand: DragonSword Wiki
anchorLongtail: the DragonSword hero builds
angle: spoilers
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Endgame content is where game guides get their traffic and where they do the most damage.

Someone searches for a late-game build, lands on your page, and the first paragraph tells them the final boss's identity. They leave, annoyed, and they do not come back — not for this page, and probably not for the next one either.

The usual fix is a spoiler warning at the top. It does almost nothing, because a warning is a decision the reader has to make before they know what is being spoiled.

## Place the boundary, don't announce it

The better approach is to make the page work in layers:

- **Section 1: no spoilers.** What the build does, when it becomes available, what it costs. Useful to a reader who is mid-game.
- **Section 2: mild.** Names of items and locations that only appear late. Not plot.
- **Section 3: full.** Boss names, endings, mechanics that reveal the structure of the story.

Each section gets a one-line marker at its heading — "contains late-game item names" — not a modal, not a block over the whole page. A reader who wants none of it stops at the boundary; a reader who wants all of it scrolls past one line.

## Why this is better for search too

A page that gates everything behind a warning gets crawled like any other page, but a page organised in layers has more usable content in its top half. That top half is what shows up in a snippet and what a reader sees before deciding to stay.

Gating the entire page also loses the readers who would have been fine with items but not with plot — which is most of them. The boundary is not "spoilers or no spoilers", it is a spectrum, and treating it as binary throws away the middle.

## Practical rules

- **Never spoil in the title or the description.** They are the two things a reader cannot avoid.
- **Put the boundary above the first spoiler, not above the page.**
- **Keep the pre-spoiler section genuinely useful.** A "no-spoiler" section that says nothing is just a longer warning.
- **Name what is being spoiled.** "Late-game item names" tells a reader what to expect; "spoilers ahead" does not.

The [DragonSword hero builds](https://dragonswordwiki.vercel.app/guides/hero-builds-guide) page on [DragonSword Wiki](https://dragonswordwiki.vercel.app) uses that layering, mostly because the builds are only meaningful once you know which items exist — so the page has to name them, and the reader needs to know where that starts.

The general principle: a warning asks the reader to protect themselves with no information. A boundary lets them protect themselves with exactly the information they need.
