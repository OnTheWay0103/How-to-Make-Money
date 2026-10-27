---
site: boneholdwiki
title: "Last updated" is a lie your CMS tells for you
description: Auto-generated freshness dates are worse than no dates. Three signals that actually tell a reader whether a page is current.
tags: [content, seo, webdev]
targetUrl: https://boneholdwiki.vercel.app/guides/beginner-guide
anchorBrand: Bonehold Wiki
anchorLongtail: a beginner guide to Bonehold
angle: freshness
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Most sites print a date at the top of every page: "Last updated: October 3".

It is generated from file modification time. Which means it changes when you fix a typo, reformat a title, or bump a dependency — and does not change when the page's facts become wrong because the game patched.

So the date is simultaneously noisy (it moves for reasons unrelated to content) and silent (it stays put for the reason you care about). It is a metric that measures the wrong event.

## What readers actually want to know

Not "when was this edited". They want to know:

1. Is this still true?
2. How much has changed since it was written?
3. Who is making the claim, and how would they know?

A modification timestamp answers none of those. Three things do:

**A version boundary.** "Verified against 1.4.2" is a claim with a scope. A reader on 1.5 knows exactly how far to trust it, without you having to guess whether the patch broke anything.

**A scope statement in the opening paragraph.** "This covers the first two hours" prevents the most common bad click: someone deep in the game landing on a page that was never about them.

**Evidence of method.** Where a specific claim came from — tested, read off a tooltip, or judged by experience. That is what makes a site feel written by someone rather than assembled.

## Remove the fake signal

If you keep a date at all, make it mean "facts verified on this date" and only move it when that is true. Rename the field, and let it stay stale when nothing has been re-checked — a page verified in March that says March is more trustworthy than a page that says today because a build ran.

That also fixes a second-order problem: a freshness date that updates automatically trains you to ignore staleness. The page looks new, so nobody checks.

## The cost

A real freshness process needs a re-check step after patches, which is work. That is exactly why the fake date is popular — it is free, and it is a claim you do not have to defend.

The [beginner guide to Bonehold](https://boneholdwiki.vercel.app/guides/beginner-guide) on [Bonehold Wiki](https://boneholdwiki.vercel.app) carries a version boundary for that reason: the page is useful only if a reader can tell whether the advice still applies, and a generated timestamp cannot answer that question no matter how current it looks.
