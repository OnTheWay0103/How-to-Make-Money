---
site: sephiriawiki
title: Writing content that survives patch notes: version stamps for static sites
description: Game updates break guides silently. Stamping every page with the version it was verified against turns "is this still true?" into a question you can answer in one grep.
tags: [webdev, nextjs, content]
targetUrl: https://sephiriawiki.vercel.app/guides/builds-guide
anchorBrand: Sephiria Wiki
anchorLongtail: Sephiria build and artifact notes
angle: content-versioning
status: draft
devtoId:
devtoUrl:
publishedAt:
---

A game guide has a property no ordinary article has: it can become wrong without anyone editing it.

The page does not change. The game does. A balance patch ships, an item gets nerfed, and a page that was accurate in March is misleading in June — with no diff to show for it.

For a site that relies on search traffic, that is the worst kind of decay: it is invisible in every tool that looks at your own repository.

## Stamp the version, not the date

The lazy fix is to slap "Last updated: June 12" on the page. It is worse than nothing, because it implies verification that may not have happened. I have updated a page's typography and watched the "last updated" date move without a single fact being checked.

What I do instead is record the version the page was verified against, in the frontmatter:

```yaml
---
title: Builds and artifacts
verifiedAgainst: 1.4.2
verifiedOn: 2026-09-18
stillValidFor: 1.4.x   # optional: which patch series this is expected to hold
---
```

"Verified against 1.4.2" is a claim I can defend. "Updated today" is not.

## Make staleness a query

The point is not the field, it is what the field lets you do. One grep answers the only question that matters after a patch:

```sh
# every page that claims a version older than the one that just shipped
grep -l "verifiedAgainst:" content/guides/*.md \
  | xargs grep -H "verifiedAgainst:" \
  | grep -v "1.4.2"
```

That list is your re-verification queue. Not "everything, someday", but "these eleven pages, this week".

Because the whole site is a folder of Markdown files, this is a `grep`, not a database migration. The cheapest content-management system I have ever used is a filename convention plus a field.

## Where it changes the writing

Once a page carries a version, you start writing differently — for the better:

- **Prefer rules over numbers.** "Artifact stacks multiply the same stat" ages better than "artifact stacks give +37%", which will be wrong in a month.
- **Say what the number is for.** If I do quote a value, it gets a version and a source. A number without those is a liability.
- **Separate durable structure from volatile tuning.** The page's shape — what to consider, in what order, why it matters — survives patches. The specific picks do not, so they live in clearly marked sections that are easy to replace.

The [Sephiria build and artifact notes](https://sephiriawiki.vercel.app/guides/builds-guide) on my [Sephiria Wiki](https://sephiriawiki.vercel.app) are the page I use to test this: the parts that age fast (which stat beats which) and the parts that do not (what you are optimising for, and when) should not be interleaved. Builds get rebalanced; the decision behind them usually does not.

## Rendering it honestly

Render the stamp as one small line, not a badge. It should say exactly what it means:

> Verified against 1.4.2 on 2026-09-18.

Not "up to date". Not "updated regularly". A specific claim with a specific boundary, so a reader on 1.5 knows how much to trust it.

That honesty is the whole value proposition on a small site where you cannot re-verify every page on every patch. There is no shortage of guides. There is a shortage of guides that tell you when they were last true.

## The cost

Ten minutes per page per patch cycle, and the discipline to re-run one grep. In exchange, you can answer "which of my 200 pages are stale?" in a second — and you never again have to guess whether a page is wrong or just old.
