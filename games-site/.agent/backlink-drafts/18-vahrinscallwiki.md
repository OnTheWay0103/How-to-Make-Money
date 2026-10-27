---
site: vahrinscallwiki
title: Your /guides page is not a sitemap
description: Most content sites have an index page that lists every article and helps nobody. A hub page should route, not enumerate.
tags: [seo, webdev, nextjs]
targetUrl: https://vahrinscallwiki.vercel.app/guides/weapons-guide
anchorBrand: Vahrin's Call Wiki
anchorLongtail: the Vahrin's Call weapon overview
angle: hub-pages
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Every content site has an index page. On most of them it is a list: title, date, maybe an excerpt, sorted newest first.

That page is a sitemap with styling. It works for a blog with 12 posts and stops working immediately after that, because a list of 40 titles is not information — it is a menu where everything is at the same level.

## What a hub should do

A hub page answers one question: *what do I want to do next?* Not "what exists", but "which of these is for me".

That means grouping by intent, not by date:

- **Getting started** — the first hour, controls, basics.
- **Core systems** — the two or three mechanics everything else depends on.
- **Reference** — lists, tables, values. The pages people return to.
- **Advanced** — endgame, optimisation, edge cases.

Four groups, each with a one-line description per page. A reader with a question lands on the group, reads four lines, clicks. A new reader gets a suggested path without being told what to read in order.

## Why date-sorting is actively bad here

Newest-first ordering is a chronology of your work, not a map of the reader's problem. It also has a perverse effect: whenever you add a page, the index reorders, so the thing that was visible yesterday is now lower. On a site with steady publishing, the index becomes a random shuffle of your own backlog.

## Make the links meaningful

Every link in the hub should be a real sentence fragment describing the destination, not the destination's title. "The [weapon overview](…) — what each class scales with and which ones fall off late" is useful. A bare title is not.

This is also where internal linking gets its cheapest win: the hub is the page every reader sees, so the two or three pages you most want them to reach should be linked from here in prose, not only in a list.

## Keep it small

A hub that lists 40 pages is a sitemap again. If the site has more pages than fit comfortably, the hub should link to *sub-hubs* — one per area — rather than growing.

The [Vahrin's Call weapon overview](https://vahrinscallwiki.vercel.app/guides/weapons-guide) on [Vahrin's Call Wiki](https://vahrinscallwiki.vercel.app) is linked from the hub as a sentence about what it covers, which is the only way a reader can decide whether it is the page they want.

An index that lists everything is honest and useless. A hub that routes is smaller, more work, and the difference between a site people navigate and a site people bounce off.
