---
site: lunariumwiki
title: Keeping stat tables in sync across a whole site
description: The same numbers appear on five pages. One patch later, four of them are wrong. A single source of truth costs less than it sounds.
tags: [nextjs, markdown, content]
targetUrl: https://lunariumwiki.vercel.app/guides/equipment-guide
anchorBrand: Lunarium Wiki
anchorLongtail: the Lunarium equipment guide
angle: single-source
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Duplicated data is a maintenance multiplier. If an item's stats appear on the equipment page, the build page, and two guides, then one patch creates four places to fix — and realistically, three of them will be missed.

The fix is not "be careful". It is to stop duplicating.

## One file, many pages

The structure that works on a static site is a small data file that pages read from:

```ts
// data/equipment.ts
export const equipment = [
  { slug: 'warden-plate', name: 'Warden Plate', slot: 'armor', defense: 42, weight: 12 },
  { slug: 'ember-ring',   name: 'Ember Ring',   slot: 'ring',  defense: 0,  weight: 1 },
];
```

Then any page that needs a stat table imports it and renders. The equipment page shows all of them; the build page shows three, filtered by slug. Neither page contains a number.

Updating is now one edit, in one file, and every page is correct by construction rather than by discipline.

## The tradeoff, stated honestly

You lose the ability to write a one-off table inline in Markdown, and you gain a type error when a field is misspelled. For a site with under ~50 entries, that is a good trade; for a site with three, it is over-engineering.

The signal that you need this is simple: **the same value appears in two files.** Not "might appear" — actually appears, today.

## Second-order benefit: consistency of presentation

When tables come from one component, the columns are in the same order everywhere and mean the same thing. Readers compare across pages; inconsistent columns are a small thing that reads as sloppiness, and small sloppiness is what makes a guide site feel unreliable even when the numbers are right.

## When to reach for it

- Stats that appear in more than one page.
- Values that change with patches.
- Anything you would have to grep to audit.

If a number is going to be verified, it should live in exactly one place — otherwise the verification is only as good as the least-updated copy.

The [Lunarium equipment guide](https://lunariumwiki.vercel.app/guides/equipment-guide) on [Lunarium Wiki](https://lunariumwiki.vercel.app) is built on that rule, and it is also what makes a patch-day audit quick: change the data file, rebuild, and every page that mentions the item is current — no hunting through Markdown for a number you half-remember writing.
