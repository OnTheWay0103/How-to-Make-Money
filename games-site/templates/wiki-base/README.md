# wiki-base — 新站模板

游戏攻略站的空白模板。`scripts/new-site.mjs` 从本目录复制出一个新站，替换 `{{…}}` 占位符，然后按
`docs/STRATEGY-内容生产.md` 的流程填内容。

## 用法

```bash
# 在 games-site/ 下
node scripts/new-site.mjs \
  --slug witchspire \
  --name "Witchspire" \
  --developer "Studio X" \
  --publisher "Studio X" \
  --steam-id 1234567 \
  --release-date 2026-10-01 \
  --genre-line "codes, beginner guides, tier lists, boss strategies, and FAQs"
```

产出 `witchspirewiki/`（目录名 = `--slug` + `wiki`），并把 `{{SITE_NAME}}`、`{{GAME_NAME}}`、
`{{DOMAIN}}`、`{{DEVELOPER}}`、`{{PUBLISHER}}`、`{{STEAM_URL}}`、`{{RELEASE_DATE}}`、
`{{SITE_DESCRIPTION}}`、`{{GENRE_LINE}}` 全部替换掉。默认域名 `<slug>wiki.vercel.app`，
可用 `--domain` 覆盖。占位符里只要还剩 `{{`，脚本就以退出码 1 结束 —— 不允许带着占位符上线。

## 模板里刻意留空的四件事

| 位置 | 为什么空 | 什么时候填 |
|---|---|---|
| `content/guides/` | 只放 `.gitkeep` | 按页面矩阵写 5–8 页，每页 ≥1,200 词、≥2 个来源（≥1 官方） |
| `app/faq/page.tsx` 的 `FAQ_ITEMS` | 答案必须来自可核验来源，不能编 | 采完词、读完商店页与官方公告后填 4–10 条 |
| `app/tier-list/page.tsx` 的 `PRIORITY_TIERS` | 同上；游戏没有层级系统时这页应该换页型 | 有可引用的数值或明确判断依据后填 |
| `lib/adsterra-zones.ts` | 广告位由 `scripts/adsterra-sync.mjs` 从飞书「站点台账(人工)」两列注入 | 站上线、Adsterra 后台建好两位、把代码填进人工台账之后 |

`lib/seo-config.ts` 里 `googleAnalyticsId` 与 `googleAdsenseId` 也是空的：GA4 建好 property 后填
measurement ID，并把 dashboard 服务账号加为该 property 的读取者；AdSense 全项目暂缓，保持空。

## 首页是数据驱动的

`app/page.tsx` 的「Start Here」直接读 `content/guides/*.md`，取最近更新的 6 篇 —— 新增页面不需要改首页。
FAQS 区块只在 `FAQ_ITEMS` 非空时渲染，避免模板自带的占位问答被发布出去。

## 已知待办（建站时必须人工处理）

- `public/icon.png` 是模板图，新站要换成自己的图标（`lib/seo-config.ts` 的 `ogImage` 指向它）
- GSC 验证文件（`public/google*.html`）按站新建
- `vercel.json` 的 `installCommand` 已是 `pnpm install`，部署走 `scripts/deploy-wiki-site.sh <site>`

## 校验

模板本身不参与构建。验证方式是实例化一个临时站并 `pnpm install && pnpm build`：

```bash
node scripts/new-site.mjs --slug _smoke --name "Smoke Test" --developer A --publisher B --dry-run
```
