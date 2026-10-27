---
site: beastreincarnationwiki
title: Collectible checklists that survive game updates
description: A checklist is judged by completeness, and completeness decays. Here is the structure that makes gaps visible instead of silent.
tags: [content, markdown, data]
targetUrl: https://beastreincarnationwiki.vercel.app/guides/secrets-collectibles-guide
anchorBrand: Beast of Reincarnation Wiki
anchorLongtail: the secrets and collectibles in Beast of Reincarnation
angle: checklists
status: draft
devtoId:
devtoUrl:
publishedAt:
---

A collectibles page has one job: be complete. It is not a guide, it is not an argument — it is a list that is either all there or quietly wrong.

Quietly wrong is the default, because nothing fails when an entry is missing. There is no broken link, no error, just a reader who searched for an item and did not find it.

## Make the count explicit

The single most useful line on a collectibles page is the total:

> 34 of 34 in the base game, 6 added in the expansion — 40 total.

Now "is this page complete?" is answerable by looking. And when the game adds three more, the gap is visible to you as well as to the reader, because the number stops matching what the game shows.

If you do not know the official total, say so: "the game does not display a total; this list is based on a full playthrough". Honest scope beats a fake completeness claim.

## Order by where, not by when

Checklists ordered by the order you found them are useful to exactly one person. Order by location, then by progression, because that is how a reader encounters them:

- by area, in the order areas unlock;
- within an area, by the direction a player naturally moves;
- each entry with what it is, what it does, and anything easy to miss.

"Easy to miss" is the highest-value annotation on the page. A collectible that everyone finds does not need a guide.

## Separate what changes from what doesn't

- **Locations** rarely change.
- **Rewards** sometimes do.
- **Missable status** changes with patches more often than anyone expects — a one-time reward becoming repeatable is a common patch note, and it silently invalidates every "missable" tag.

So the missable flag needs a version, and the location does not. Treating them the same is how a page ends up rewritten every patch for no reason.

## A maintenance habit

Two minutes per patch:

1. Check the total against the game.
2. Re-read only the entries flagged missable or version-dependent.
3. Update the verified version line.

The [secrets and collectibles in Beast of Reincarnation](https://beastreincarnationwiki.vercel.app/guides/secrets-collectibles-guide) page on [Beast of Reincarnation Wiki](https://beastreincarnationwiki.vercel.app) is structured that way: an explicit total at the top so gaps are visible, entries ordered by area, and the missable flags carrying their own version so a patch cannot silently invalidate them.
