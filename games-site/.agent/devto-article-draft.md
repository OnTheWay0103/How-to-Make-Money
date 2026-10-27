# dev.to 草稿（待审）— 外链 P0 第 1 条

> 状态：**未发布**。发布前需用户过一遍全文。
> 目标：dev.to 正文里带 2 条指向站点的外链（品牌锚 + 长尾锚），发完用
> `node scripts/link-check.mjs` 实测 rel，验证 dofollow 是否成立。

## title

Running 48 Next.js sites from one laptop: what the tooling actually costs

## tags

`nextjs`, `webdev`, `devops`, `seo`

## body（markdown）

I did not set out to run 48 websites. It was supposed to be one.

A year ago I started a small wiki for an indie game — game guide pages, the kind of thing where "how do I beat this boss" gets 200 searches a month and nobody has written it down. That one site worked well enough that the obvious next move was a second, then a fifth, then a template and a script.

At 48 sites the problems stopped being about writing pages and started being about tooling. Here is what it actually costs, in case you are tempted to do the same thing.

## The stack is boring, on purpose

Every site is the same Next.js app: static export, a `content/guides/*.md` folder, and three config files (`lib/seo-config.ts`, `lib/adsterra-zones.ts`, `lib/site.ts`). No database, no API routes, no server state.

That is the whole point. When 48 sites share one codebase shape, a fix is written once and applied 48 times. When they diverge, maintenance becomes a full-time job. The number of times I have been glad a site had a custom layout is zero; the number of times a shared `components/` folder saved me is every week.

## pnpm is not a preference, it is disk space

With npm, 48 sites with a shared dependency set came to **18.7 GB** of `node_modules`. Same versions, copied 48 times.

Switching to pnpm's content-addressable store brought that to **479 MB** — one real copy, hard-linked into every project. Same `node_modules` layout from the app's point of view, 39× less disk.

If you run more than a handful of similar projects on one machine, this alone is worth the migration.

## The deploy quota is the real bottleneck

Vercel's free tier allows 100 deployments per day. Sounds like plenty until a bulk change touches every site — renaming one metadata field across 48 projects is 48 deployments, and they do not roll up.

So deployments have to be queued. Mine live in a plain text file, one site per line, and a script drains it:

```sh
# drain the queue, respecting today's remaining quota
scripts/deploy-pending.sh --limit 8
```

Two rules came out of getting this wrong:

1. **The local deploy log is not the quota.** Dashboard deploys, git-integration deploys and anyone clicking "Redeploy" all count. My log said 65 used when the API said the limit was gone.
2. **A quota error is not a bug.** It exits zero, leaves the queue untouched, and the next cron run picks up where it stopped. Treating it as a failure just produces noise every day.

## Static sites fail in DNS, not in code

Both sites and the tooling that reads them run behind hostile DNS. `suggestqueries.google.com` resolves to a corporate IP; `*.vercel.app` resolves to different addresses on different resolvers.

Every verification script therefore does the same two steps — resolve through a public resolver, then connect to that IP explicitly:

```sh
ip=$(dig @1.1.1.1 +short "$host" A | head -1)
curl -s --resolve "$host:443:$ip" "https://$host/page"
```

Without `--resolve`, a poisoned answer turns into "the site is down" reports that are not true. With it, verification is boring and trustworthy. If you automate any kind of site checking, build this in from day one.

## Gates, not vibes

Every content change goes through three checks before it deploys:

- **Metadata length** — titles are validated to 40–60 characters, descriptions to 140–160. Sounds pedantic until you measure a batch and find a third of them truncated in search results.
- **Template residue** — a grep for placeholder text, TODO markers and copy-paste from the base template.
- **Live re-verification** — after deploy, the script fetches the page and checks the *rendered* title, not the source file. Source correct and live correct are two different claims, and I have shipped the first without the second more than once.

The third one is the one people skip. The last batch I ran had 21 sites pass in source and one fail live for a reason that had nothing to do with the change — a transient fetch timeout that would have looked like a real failure if the script had not been re-run.

## What I would tell someone starting

- Make the first site genuinely good. The template is worthless if the content underneath is not worth reading.
- Automate the checks before you automate the content.
- Keep the deploy queue in a file, not in your head.
- Budget for the boring parts: DNS, quotas, metadata length, dead links.

One of the sites, [Nivalis Nights Wiki](https://nivalisnightswiki.vercel.app), now gets a few thousand pageviews a month, and its [beginner guide](https://nivalisnightswiki.vercel.app/guides/beginner-guide) is the single most-read page on it. Not a business yet, but the loop works: find a question nobody answered, answer it properly, keep the site from rotting.

The tooling is the easy part once you accept that the interesting problems are all in the seams — between the build and the deploy, between the source file and the live page, between what the log says and what the API counts.
