# 手工建站复盘 — Terrible Lizards（2026-10 起）

> 目的：用户手工走一遍建站全流程，记录**每一步实际花多久、卡在哪、哪些得靠人记**，用来改流程。
> 选词依据：候选池 `#124`，14 分（压线，`keyword-results/selection-2026-10-30.md` §3.1），结论已改 `已预留`，Agent 不自动建。
> 填法：每步三栏 —— 实际动作 / 耗时 / 摩擦点（漏了会怎样、下次怎么防）。没做的步骤写「未做」，不写「已完成」。

## 素材现状（开工前）

| 项 | 状态 |
|---|---|
| 关键词 | ✅ `keyword-results/terriblelizards.md`（56 有效词，攻略型仅 8.9%） |
| 页面矩阵 `-matrix.md` | ❌ 未做 |
| 素材 `-sources.md` | ❌ 未做（每页 ≥2 源且 ≥1 官方） |
| 站点目录 | ❌ 未建 |

## 步骤与摩擦记录

| # | 步骤 | 命令 / 入口 | 实际动作 | 耗时 | 摩擦点 |
|:--:|---|---|---|---|---|
| 1 | 选词确认 | `selection-2026-10-30.md` §3.1 | | | |
| 2 | 页面矩阵 | `keyword-results/terriblelizards-matrix.md` | | | |
| 3 | 素材双源 | `keyword-results/terriblelizards-sources.md` | | | |
| 4 | 脚手架 | `node scripts/new-site.mjs --game "Terrible Lizards" --slug terriblelizards --name ... --developer ... --publisher ... --release-date 2026-10-29 --steam-id 2920220 [--no-codes]` | | | |
| 5 | 写内容 | `content/guides/*.md`（5 类页型，总词数 ≥8,000，单篇 ≥1,200，title 40–60 / desc 140–160 / 首段 40–60 词） | | | |
| 6 | 本地门禁 | `node scripts/lint-guides.mjs <site>` → `node scripts/seo-check.mjs --site <site>` → `node scripts/check-ad-slots.mjs <site>` → `pnpm install && pnpm build` | | | |
| 7 | 部署 | `./deploy-wiki-site.sh <site>`（内置 0d SEO 门禁） | | | |
| 8 | GA4 + 广告位 | 人工：飞书「站点台账(人工)」填 GA4-measurementID / propertyID + 两列广告位代码 | | | |
| 9 | 回填落地 | `node scripts/sync-ledger-manual.mjs --status-only` → `--apply` | | | |
| 10 | 看板注册 | `node scripts/check-dashboard-registry.mjs --site <site>` | | | |
| 11 | GSC | 放 `public/google*.html` + 后台验证 + 提交 sitemap | | | |
| 12 | 上线后体检 | `node scripts/check-new-sites.mjs --site <site>` | | | |

## 复盘的三个问题（每条给出改法，别写「下次注意」）

1. **哪一步只能靠人记？** → 能不能做成脚本 / 门禁 / 台账列（写清落到哪个文件）
2. **哪一步脚本报错信息看不懂 / 不给下一步？** → 改提示文案或补 exit code 说明
3. **哪一步返工最多？** → 是顺序问题（先写后查）还是工具缺失

## 结论回填位置

- 规则类改动 → `CLAUDE.md` 战略基线 / `.claude/skills/*.md` / 对应 `docs/agents/*-Profile-*.md`
- 脚本类改动 → `scripts/*.mjs`（新增检查 MUST 带 ERROR/WARN 分级与「谁修」）
- 单站事实 → 本文件 + `STATS-游戏站点统计.md`
