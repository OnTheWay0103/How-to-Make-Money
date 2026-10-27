---
site: witchspirewiki
title: What I got wrong on my first content site, six months later
description: The first site in a fleet is the one you learn on. Six months on, four things were wrong — and none of them were the writing.
tags: [seo, content, retrospective]
targetUrl: https://witchspirewiki.vercel.app/guides/hearth-upgrade-guide
anchorBrand: Witchspire Wiki
anchorLongtail: how the hearth upgrade works in Witchspire
angle: retrospective
status: draft
devtoId:
devtoUrl:
publishedAt:
---

My first game wiki is six months old. It is not a success story — it gets modest traffic — but it taught me four things that later sites got for free, and none of them were about writing.

## 1. I wrote pages I wanted to write

The first batch was systems analysis: how the crafting loop interacts with progression, why the combat pacing feels the way it does. Well-researched, well-written, and almost unread.

What people searched for was "how do I upgrade X", "what does Y do", "where do I find Z". Concrete questions with concrete answers.

The lesson was not "dumb it down". It was that a page earns its traffic by answering a question someone actually typed, and a question I find interesting is not evidence that anyone is asking it.

## 2. I treated titles as labels

My first page titles were short and descriptive: "Hearth". Which is accurate, unreadable in a search result, and indistinguishable from every other page about the same game.

A title is not a label. It is the sentence that decides whether someone clicks, and it has to work in about 60 characters, in the middle of ten competing results. That constraint is not cosmetic; it is structural.

## 3. I skipped the boring infrastructure, then paid for it later

No sitemap at first. No canonical handling. Meta descriptions copy-pasted from the first paragraph. None of it felt important compared to the writing.

It matters because it is what makes the writing findable and stable. Wired up front, it is an afternoon. Wired up across 48 sites later, it is a week of careful batch edits and a deploy queue.

## 4. I had no idea which pages worked

Without analytics wired properly, I was guessing. Six months of guessing about which pages to expand is six months of misallocated effort.

The fix was not a better tool — it was realising that measurement belongs in the pipeline, not in a monthly mood. Every site since has had a property, a dashboard row, and a page-level view from day one.

## What the first site is now

It is the reference implementation. Every template change, every check script, every content rule I now apply across the fleet was debugged here first, where the blast radius was one site and I knew every page by heart.

That is the honest value of a first site: not revenue, but a place to be wrong cheaply. The [hearth upgrade page](https://witchspirewiki.vercel.app/guides/hearth-upgrade-guide) on [Witchspire Wiki](https://witchspirewiki.vercel.app) is a good example of the corrected version — specific question, specific title, answer in the first paragraph, and a page I can tell is working because I can see the numbers.
