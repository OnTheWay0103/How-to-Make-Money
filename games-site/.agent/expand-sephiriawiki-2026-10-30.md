# sephiriawiki 扩词报告 — 2026-10-30

> 任务：每站新增 1 篇 | 站点：`sephiriawiki/`（Steam app 2436940，https://sephiriawiki.vercel.app）
> 可扩校验：`node scripts/expansion-targets.mjs --verify sephiriawiki` → ✅ exit 0（PV30=1007，状态=加码）

## 1. 产出

| 项 | 值 |
|---|---|
| slug | `mods-workshop-guide` |
| 标题 | Sephiria Mods Guide: Steam Workshop & Manual Install（52 字符） |
| description | 151 字符（140–160） |
| 线上 URL | https://sephiriawiki.vercel.app/guides/mods-workshop-guide |
| 正文词数 | 1,287（800–1500） |
| 站内攻略数 | 47（新增后；新增前 46） |
| 本次部署 | https://sephiriawiki-oj3rr26hp-zhaoq0103s-projects.vercel.app |

## 2. 选题依据

**问题：** Sephiria 怎么装模组？1.1.0 的 Steam Workshop 怎么用？旧的手动 AddOns / BepInEx 模组还能不能用？模组不加载怎么排查？

**为何是高频且未覆盖：**

1. **搜索需求已在词库中**：`keyword-results/Sephiria.md` 采集到 `sephiria mods`（裸词）与 `sephiria steam workshop`（steam 探针），均为有效搜索词。
2. **站内 46 篇零覆盖**：`grep -ril "steam workshop|workshop-beta|mod support|run history"` → 0 命中。现有 `patch-1-0-31-build-changes-guide` 讲 1.0.31 平衡，`save-file-guide` 讲存档，均与模组无关。
3. **官方新事件**：2026-10-29 的 **1.1.0 Beta Update** 明确 `Added Steam Workshop mod support`，并给出 `workshop-beta` 加入方式、备份警告与已知问题 `Unable to load verification info for this mod`。这是站内唯一可覆盖该新事件的页面。
4. **旧攻略已过时**：社区 mod 指南（sephiriawiki.wiki）仍写「Sephiria 没有官方 Workshop，只能手动装」，1.1.0 后该结论失效——这正是玩家最容易踩的坑（按旧教程装手动模组，或以为 Workshop 模组在默认分支能直接用）。

**查重结论：** 新 slug `mods-workshop-guide` 与现有 46 个 slug 无重复；intro 不可与 `patch-1-0-31-build-changes-guide`、`artifacts-guide`、`tablets-guide`、`save-file-guide` 互换；无自噬。

## 3. 来源表

| # | Tier | 来源 | URL | 日期 |
|---|---|---|---|---|
| 1 | Official | Sephiria 1.1.0 Beta Update（Workshop/opt-in/known issue/新内容） | https://steamcommunity.com/ogg/2436940/announcements/detail/694276363007295840 | 2026-10-29 |
| 2 | Official | Sephiria 1.0.33 Update（默认分支基线） | https://steamcommunity.com/ogg/2436940/announcements/detail/692020124159312357 | 2026-09-11 |
| 3 | Community | Sephiria Mod Not Working: Loader and Installation Fixes | https://sephiriagame.com/guides/mod-loader-troubleshooting/ | 2026-10-30 更新 |
| 4 | Community | Sephiria Mods Guide（pre-1.1.0 手动安装口径） | https://sephiriawiki.wiki/mods/sephiria-mods/ | 2026-10-30 抓取 |
| 5 | Community | 《赛菲莉娅》1.1.0 更新（17173 独立转载） | https://news.17173.com/content/10292026/235134372.shtml | 2026-10-29 |
| 6 | Editorial | 路线选择、加载顺序与排障顺序 | https://sephiriawiki.vercel.app/guides/mods-workshop-guide | 2026-10-30 |

交叉验证：官方 2 条（1.1.0 + 1.0.33）+ 3 条独立社区来源；每条安装细节至少一源，未确认项在正文标注。

## 4. 构建 / SEO / 广告位 / 部署 / QA

| 检查 | 结果 |
|---|---|
| `pnpm build` | ✅ exit 0，`/guides/mods-workshop-guide` 已预渲染 |
| `lint-guides` | ✅ 0 ERROR |
| `check-site-residue` | ✅ 无残留 |
| `seo-check --live --report` | ✅ exit 0，ERROR 0 / WARN 114（WARN 均为存量） |
| `check-ad-slots --live` | ✅ exit 0 |
| 部署 | ✅ `deploy-wiki-site.sh` exit 0，生产 alias HTTP 200 |
| 线上页面 | ✅ 200，`<h1>`=1，官方引文与 known issue 原文已渲染 |
| QA quick | ✅ PASS（详见 `.agent/qa-expand-sephiriawiki-2026-10-30.md`） |

## 5. [Unconfirmed] / 未确认清单

- 哪些具体模组已适配 1.1.0 测试分支。
- Workshop 模组/存档在 1.1.0 转正后是否原样沿用。
- Workshop 上传的审核细则。
- 所有既有 AddOns / BepInEx 模组在 1.1.0 下是否仍兼容。

## 6. 备注

- 本机 `steamcommunity.com` 与 Reddit DNS 被投毒、Steam 评测 API 返回 302，未能抓取逐字玩家回帖；玩家侧断言一律使用**已抓取全文的社区文档**（Community 级）并标注，未虚构引文。
- 未执行 git commit / push（按指令）；未改动其他站点。
