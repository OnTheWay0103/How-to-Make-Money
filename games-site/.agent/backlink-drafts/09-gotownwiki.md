---
site: gotownwiki
title: Diagrams that don't cost you 400KB
description: Layout guides need pictures. Screenshots are the default and the wrong default. Three cheaper options, with the tradeoffs of each.
tags: [svg, performance, webdev]
targetUrl: https://gotownwiki.vercel.app/guides/best-layout-guide
anchorBrand: Go-Go Town! Wiki
anchorLongtail: the best layout in Go-Go Town
angle: diagrams
status: draft
devtoId:
devtoUrl:
publishedAt:
---

A layout guide without a picture is a riddle. "Put the storage next to the workshop, two tiles from the road" is clear only to the person who wrote it.

So the page needs a diagram. The reflex is a screenshot — and screenshots are how a 40KB page becomes 1.2MB and stops being readable on a phone.

## Option 1: describe it as a grid

For anything tile-based, a code block with monospace characters is astonishingly effective:

```
[road] [road] [road] [road]
[shop] [shop] [  ] [house]
[store][work] [  ] [house]
```

Ugly at first glance, but: it renders instantly, it is editable in the same Markdown file as the prose, it scales to any screen, and a reader can copy it. For small layouts this is not a compromise — it is better than an image, because it is accurate to the tile grid.

The limit is around 15×15. Beyond that it becomes unreadable on mobile.

## Option 2: inline SVG

For real geometry — distances, zones, adjacency — an inline SVG gives you crisp output at any size and full control over labels:

```html
<svg viewBox="0 0 320 120" role="img" aria-label="layout">
  <rect x="0" y="0" width="160" height="120" fill="#1f2937"/>
  <rect x="160" y="0" width="160" height="120" fill="#111827"/>
  <text x="80" y="64" fill="#fff" text-anchor="middle">workshop</text>
  <text x="240" y="64" fill="#fff" text-anchor="middle">storage</text>
</svg>
```

A few KB, no request, no layout shift, and it inherits your page's colours if you use `currentColor`. The cost is that you are writing SVG by hand — fine for five or six diagrams on a site, painful for fifty.

## Option 3: screenshots, done properly

Sometimes a screenshot is genuinely the right call: a UI the reader has to recognise, or a game state that is too complex to model. Then do the boring things:

- export as WebP, cap the width at what the article column actually uses;
- set explicit `width`/`height` so nothing jumps while loading;
- lazy-load everything below the fold;
- add real alt text describing the layout, not "screenshot".

One screenshot per page is usually fine. Six is a design decision you should make deliberately.

## What I use

Grid blocks for anything tile-adjacent, inline SVG for relationships, screenshots only when recognition matters — the [best layout in Go-Go Town](https://gotownwiki.vercel.app/guides/best-layout-guide) page on [Go-Go Town! Wiki](https://gotownwiki.vercel.app) is built the same way, mostly grid blocks with a couple of SVGs for the parts where adjacency matters.

The test I apply before adding any image: **would a reader need this if they were standing in the game?** If yes, it earns its bytes. If it is decoration, it does not.
