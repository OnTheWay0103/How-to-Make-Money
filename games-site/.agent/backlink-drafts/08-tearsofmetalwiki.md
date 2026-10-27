---
site: tearsofmetalwiki
title: Tier lists are structured data pretending to be an article
description: A tier list page is a table with opinions. If you model it as prose, you will maintain it by hand forever. Here is the shape that scales.
tags: [seo, nextjs, content]
targetUrl: https://tearsofmetalwiki.vercel.app/guides/heroes-tier-list
anchorBrand: Tears of Metal Wiki
anchorLongtail: the Tears of Metal hero tier list
angle: tier-lists
status: draft
devtoId:
devtoUrl:
publishedAt:
---

A tier list looks like an article and behaves like a database.

Every entry has the same fields — name, tier, role, why it sits there, what changes would move it. Readers scan it as a grid, not as prose. And it goes stale faster than any other page type on a game site, because balance patches reshuffle it.

Written as prose, a tier list becomes the most expensive page you maintain. Written as data, it becomes the cheapest.

## Model the entry, not the paragraph

The minimal useful schema:

```yaml
heroes:
  - name: Ash Warden
    tier: S
    role: frontline
    note: best damage mitigation early, falls off without support
    since: 1.4.2
  - name: Bell Ringer
    tier: A
    role: support
    note: the only reliable cleanse; tier depends on team composition
    since: 1.4.2
```

Two things this buys immediately:

- **Ordering is derived.** Sort by tier then name; never hand-reorder a list.
- **The note is small by construction.** A field called `note` forces a sentence or two, not four paragraphs of hedging.

The `since` field is the one people skip and later regret: it lets you answer "which entries have not been re-checked since the last patch?" with a filter.

## Render tiers as sections, not a spreadsheet

A plain table sorted by tier is technically correct and unpleasant to read. What works better is one block per tier, with the entries inside:

```
S — 2 heroes
A — 5 heroes
B — 6 heroes
```

Each block gets the tier name as a heading (H2), heroes as rows or cards. The reader gets a scannable page; the crawler gets a clean heading outline; you get a page that regenerates from data whenever a patch lands.

## Say what the tiers mean

The most common failure in tier lists is undefined tiers. If "S" means "best in slot" on one page and "good but situational" on another, the whole page is unreadable — and readers notice.

Define it once, at the top, in one line per tier. Then keep the definition. If your definition of S is "no meaningful downside", an entry with an obvious weakness cannot be S no matter how strong it feels.

## Keep the caveats

Tier lists invite absolute claims, and absolute claims are the ones that age worst. A caveat is not hedging — it is the part that makes the page trustworthy:

- "assuming a standard team composition"
- "in the current patch; expect this to move if support scaling changes"
- "strongest early, weakest at endgame"

The [Tears of Metal hero tier list](https://tearsofmetalwiki.vercel.app/guides/heroes-tier-list) on [Tears of Metal Wiki](https://tearsofmetalwiki.vercel.app) is written to that shape: tiers defined once, entries short, and every placement has one sentence explaining what would have to change for it to move.

## Why it is worth the structure

Because the page is the one most likely to be linked to, quoted, and returned to after every patch. A tier list maintained as prose gets edited twice and then abandoned. A tier list maintained as data gets re-sorted in a commit and stays correct — which is the only version readers come back to.
