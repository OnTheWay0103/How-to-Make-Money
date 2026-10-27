---
site: restorywiki
title: Paginating a walkthrough: when splitting a page makes it worse
description: Pagination feels tidy and usually isn't. A simple test for deciding whether a long guide should become five pages or stay one.
tags: [seo, content, webdev]
targetUrl: https://restorywiki.vercel.app/guides/walkthrough-guide
anchorBrand: ReStory Wiki
anchorLongtail: the ReStory walkthrough
angle: pagination
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Splitting a long guide into pages feels like good engineering: smaller files, clearer navigation, more pages indexed.

It is usually a mistake, and the reason is that the split is made along the wrong axis — the author's convenience rather than the reader's question.

## The test

For each section you are considering splitting out, ask: **would someone search for this on its own?**

- "Chapter 3: the warehouse" — almost nobody searches that. It is a step in a sequence.
- "How to open the vault in chapter 3" — that is a question, and it deserves a page.

Sections that fail the test belong in the long page. Sections that pass it do not need pagination at all — they need to be their own article, linked from the walkthrough.

That distinction matters because pagination gives you neither benefit: the pages are too small to rank for anything on their own, and the reader has to click through six of them to follow one continuous task.

## What pagination costs

- **Continuity breaks.** Someone following a walkthrough reads for thirty minutes. Every page break is a chance to stop.
- **Internal linking gets worse.** Next/prev links are the weakest kind: they carry no context and are identical on every page.
- **Canonical confusion.** Six near-identical pages can end up competing with each other, and the one that ranks is often not the one that opens with the answer.

## What to do instead

For a guide that is one continuous task — a walkthrough, a full playthrough, a long quest chain — keep it on one page and use:

- a **stable table of contents** with anchors at the top;
- **situation-based headings**, not chapter numbers;
- a **short "you are here"** line per section for readers who lost the thread.

That gives the jump reader the same navigation pagination would, without splitting the content.

Split into separate pages only when the parts are genuinely independent questions — a boss strategy, a collectibles list, a build guide. Those are pages, not chapters.

## The SEO intuition is backwards here

More pages does not mean more surface area if each one is a fragment. Six thin pages compete with each other and with you. One substantial page with clear headings competes once, and each of its sections can still win a snippet.

The [ReStory walkthrough](https://restorywiki.vercel.app/guides/walkthrough-guide) on [ReStory Wiki](https://restorywiki.vercel.app) is one page for that reason: it is a sequence, and sequences are read in order, not in pieces.

The rule I use now, plainly: paginate when the reader's question is per-part. Never paginate when the reader's question is per-run.
