---
site: spiritvalewiki
title: Two sites, identical analytics: debugging a duplicated GA4 property mapping
description: When two dashboards show the same top pages, one of them is lying. A short story about measurement bugs that look like content bugs.
tags: [analytics, ga4, debugging]
targetUrl: https://spiritvalewiki.vercel.app/guides/weapons-guide
anchorBrand: SpiritVale Wiki
anchorLongtail: how weapons work in SpiritVale
angle: analytics-debugging
status: draft
devtoId:
devtoUrl:
publishedAt:
---

Two of my sites had the same top pages. Not similar — identical, down to the pageview counts: 155, 133, 83, in the same order.

The obvious explanation is "they are similar sites in the same genre". That explanation is wrong, and it cost me twenty minutes before I stopped believing it. Identical counts to the unit do not happen. It means both dashboards are reading the same numbers.

## How this happens in a fleet

I run a set of Next.js game wikis, all from one template. Each site has a GA4 measurement ID in `lib/seo-config.ts`, and a separate dashboard pulls all the properties through the GA4 Data API and maps results back to sites.

The mapping is the fragile part. Something like:

```ts
const byGa = new Map(traffic.sites.map(s => [s.site.gaId, s]));

for (const [dir, ga] of gaIdByDir(root)) {
  const hit = byGa.get(ga);
  if (!hit) { unmatched.push({ dir, ga }); continue; }
  // ...
}
```

If two sites end up with the same measurement ID, this code does exactly what it is told: it reports the same site twice. No error, no warning, two rows that look plausible.

And the second failure mode is worse: if a site's ID is missing from the response entirely, a map-based join quietly produces nothing, and "no data" looks identical to "no traffic".

## The fix is to make the join loud

Two changes, both small:

1. **Report unmatched in the UI, not just in a variable.** The dashboard should surface a count of registered sites with no matching property. A silent zero is a bug; a visible "2 sites unmatched" is a task.

2. **Fail loudly on duplicate keys.** Building the map with a guard turns a data bug into an error at parse time:

```ts
function keyed<T>(items: T[], key: (t: T) => string) {
  const m = new Map<string, T>();
  for (const it of items) {
    const k = key(it);
    if (m.has(k)) throw new Error(`duplicate key ${k}`);
    m.set(k, it);
  }
  return m;
}
```

Twenty lines saved me from a class of bugs I would never have noticed, because their symptom was "normal-looking analytics".

## Why this matters more than it sounds

For a content site, analytics is not a vanity dashboard — it is the input to every decision. Which page to expand, which site to drop, whether a change worked. If the numbers are wrong, every downstream decision inherits the error, and nothing in the pipeline will tell you.

The same discipline applies to search data. I have seen "0 impressions" reported for a site that was simply not verified in Search Console, and "no data" for a property the service account was never added to. Both look like failure. Neither is.

The rule I now follow: **an exception is a value**. Every join that can miss should produce a visible "unmatched" bucket, and every metric that can be absent should have a distinct representation from a genuine zero.

## A footnote about symptoms

The reason I noticed at all was mechanical: I was comparing top pages across sites to decide where to spend writing time, and two rows were suspiciously identical. Had I only looked at site-level totals — which differ, because the properties do have different traffic — I would never have seen it.

The [SpiritVale Wiki](https://spiritvalewiki.vercel.app) row was the one reporting another site's pages, which meant the page I should have been expanding — the one on [how weapons work in SpiritVale](https://spiritvalewiki.vercel.app/guides/weapons-guide) — never appeared in the report at all.

Measurement bugs are quiet. They do not break the build; they just make you confident about the wrong thing.
