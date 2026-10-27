---
site: aincradwiki
title: Migrating 48 Next.js projects to pnpm: what actually broke
description: 18.7 GB of node_modules became 479 MB. Three things broke along the way, and two of them were not about pnpm at all.
tags: [pnpm, nextjs, devops]
targetUrl: https://aincradwiki.vercel.app/guides/beginner-guide
anchorBrand: Aincrad Wiki
anchorLongtail: the Aincrad beginner guide
angle: pnpm-migration
status: draft
devtoId:
devtoUrl:
publishedAt:
---

I run 48 nearly identical Next.js sites on one machine. With npm, each had its own flat `node_modules`, same dependency set copied 48 times: **18.7 GB**.

After moving to pnpm's content-addressable store: **479 MB**. One real copy on disk, hard-linked into every project. The app sees the same layout it always did.

That part took an afternoon. The three things that broke took longer.

## 1. Lockfiles: 48 of them, and they must be committed

pnpm writes a `pnpm-lock.yaml` per project. My `.gitignore` came from a template that ignored `package-lock.json` and knew nothing about pnpm, so the first round of migrations produced installs that were not reproducible — the lockfile existed locally and never reached CI.

Rule: `pnpm-lock.yaml` is committed, `node_modules/` is not. If a project has both lockfiles, delete the npm one; a stale `package-lock.json` next to the source of truth is a trap.

## 2. Vercel has to be told which package manager

This is the one that fails in production, not locally. Each site has a `vercel.json`, and the install step needs to be explicit:

```json
{
  "installCommand": "pnpm install"
}
```

Without it, a project that has a `pnpm-lock.yaml` but no `package-lock.json` gets whatever the platform's default detection decides. Two of my 48 sites built fine locally and failed at deploy with a missing-dependency error that named nothing useful.

## 3. `du` will lie to you

After migrating, `du -sh */node_modules | awk '{s+=$1} END {print s}'` added up to something still large — not 18.7 GB, but not 479 MB either. Nothing was wrong. Hard links are counted once per path by `du` unless you deduplicate.

If you want the real number, ask the filesystem rather than summing directories. The important part is that the disk is genuinely shared: adding the 49th site now costs a few megabytes, not a fresh copy.

## The practical routine for a fleet

- Sites do **not** keep `node_modules` between sessions. Disk is the scarce resource; a linked install from the store takes seconds.
- Before any build or check, run `pnpm install` in the target site only.
- Never run npm in a pnpm project, even "just this once" — it will happily produce a second, flat tree and you will spend a day wondering why disk usage jumped.

## Was it worth it

Yes, and not for the reason I expected. The disk saving is real, but the bigger win is that a fleet of 48 identical installs behaves identically. When something is wrong, it is wrong everywhere — which is much easier to debug than "this one site has a slightly different tree".

One of these sites is [Aincrad Wiki](https://aincradwiki.vercel.app). It builds in about the same time it did before the migration, and what it serves is unchanged — [the Aincrad beginner guide](https://aincradwiki.vercel.app/guides/beginner-guide) renders exactly as it did before. That is the correct outcome: package management should be invisible. If you notice it, it is either saving you or costing you, and you should know which.
