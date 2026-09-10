# QA 报告 — sephiriawiki 跨页版本一致性修复

> 任务: FIX-9/11-SEPH-VERSION | 站点: sephiriawiki | 日期: 2026-09-11
> 触发: EXPAND-9/11-A 新增 `patch-1-0-31-build-changes-guide.md`（官方 1.0.31 Update = 2026-09-10），上游明确把跨页版本刷新留给后续派单
> 事实基准: `keyword-results/sephiriawiki-expand-9-11.md`（Steam 官方公告逐条读取）—— 1.0.31 = 2026-09-10，1.0.30 = 2026-08-20
> 判定: **PASS**

---

## 1. 命中清单（`grep -rn "1\.0\.3[01]" sephiriawiki/content/ sephiriawiki/app/ sephiriawiki/lib/`）

**含 `1.0.30` 的行共 20 行，分布 5 个文件**；`app/`、`lib/`、`content/home-content.md`、其余 34 篇 guide **0 命中**。

## 2. 口径选择

**选定：以官方事实为准，把「最新构建」断言统一更新为 1.0.31（September 10, 2026）。**

理由：
1. 1.0.31 的版本号与日期是**官方一手来源**（Steam 公告，上游逐字读取），不是我方推断；
2. 站内当天新增的 `patch-1-0-31-build-changes-guide.md:78` 已明确写「1.0.31 是当前最新（as of September 11, 2026）」——若其余页面继续写 1.0.30 为最新，即构成站内直接矛盾，正是本次要消除的问题；
3. 备选的「历史口径改写」（全部写成 "as of Aug 20 the latest was 1.0.30"）会让 5 个页面都读起来像过时存档，且与新增指南口径不一致，需再改新增指南，反而扩大改动面。

**对无法证实的功能存续类断言**（reconnect 是否已上线），按派单要求**不改断言语义、只加日期限定 + [Unconfirmed]**，未假设 1.0.31 改变或未改变该功能。

## 3. 逐处处置

### 3.1 改动（8 处）

| 文件:行 | 原文要点 | 处置 |
|---|---|---|
| `save-file-guide.md:63` | 「the latest confirmed build as of Aug 20, 2026 is **1.0.30**」 | 改为「1.0.30 landed on Aug 20, 2026, and the latest confirmed build as of **September 10, 2026** is **1.0.31** [Official]」——保留 1.0.29/1.0.30 的史实顺序，仅把「最新」指向 1.0.31 |
| `save-file-guide.md:88` | 「Update to the latest build (1.0.30 as of Aug 20, 2026)」 | 改为「Update to the latest build — **1.0.31**, posted September 10, 2026, following 1.0.30 on Aug 20, 2026 [Official]」 |
| `coop-freeze-recovery-guide.md:55` | 「…fixed…through August (1.0.23 → 1.0.30)…even on the current build」 | 1.0.23→1.0.30 修复序列**保留**（史实）；仅把模糊的 "the current build" 明确为 **1.0.31, September 10, 2026** |
| `coop-freeze-recovery-guide.md:62` | 「no patch note through **1.0.30** lists it」 | 保留断言 + 日期限定「1.0.30 (August 20, 2026)」，并补「whether 1.0.31 (September 10, 2026) shipped one is **[Unconfirmed]** to us」——不假设 |
| `coop-freeze-recovery-guide.md:100` | 「no reconnect option as of 1.0.30」 | 保留断言 + 日期限定「as of 1.0.30 (August 20, 2026)」+ 1.0.31 状态 **[Unconfirmed]** |
| `coop-freeze-recovery-guide.md:106` | 「On the 1.0.30 baseline, use the prevention…」 | 把「基线」从 1.0.30 改为 **current build 1.0.31 (September 10, 2026)**，同时把「1.0.31 上是否仍复现」标 **[Unconfirmed]**（未断言冻结类已修复） |
| `coop-freeze-recovery-guide.md:109` | 「no patch note through 1.0.30 lists it」 | 同 :62——保留 + 日期限定 + 1.0.31 **[Unconfirmed]** |
| `crash-launch-black-screen-fix-guide.md:105` | 「Make sure Sephiria is on 1.0.30 or newer」 | 改为「on the current build (**1.0.31**, September 10, 2026 — the Deck fix itself landed in 1.0.30) or newer」——Deck 修复归属 1.0.30 的史实不变 |

**附带（非 1.0.30 命中，属同步项）**：三篇被改 guide 的 frontmatter `updated` 由 2026-08-26 / 2026-09-04 / 2026-09-06 统一改为 **2026-09-11**，避免「Updated: Aug 26」与正文 9/10 新版本并存。

### 3.2 不改动（12 处，均为历史陈述）

| 文件:行 | 内容 | 不改理由 |
|---|---|---|
| `coop-freeze-recovery-guide.md:11` | 补丁史元数据：1.0.23/1.0.24/1.0.28/1.0.30 各修哪类冻结 | 版本史，准确 |
| `coop-freeze-recovery-guide.md:53` | Chapter 5 kick issues「patched in **1.0.30 (Aug 20, 2026)**」 | 历史事实（该修复确实在 1.0.30） |
| `coop-freeze-recovery-guide.md:111` | Source note 引用 1.0.23/1.0.24/1.0.28/1.0.30 的 17173 镜像 | 来源出处，改则失据 |
| `controller-casting...md:11 / :49 / :58 / :85` | 「the Steam **1.0.30** recap lists a fix for magic-cast…」等 4 处 | 均指「1.0.30 那则公告的内容」，是史实（且明确写了 cumulative recap，非「最新版本」断言） |
| `crash-launch...md:11` | 元数据：0.12.3 修黑屏、1.0.30 改 Steam Deck 关闭问题 | 版本史 |
| `crash-launch...md:42` | 表格「Official fix in patch 1.0.30 (August 20, 2026)」 | 该 Deck 修复确实在 1.0.30 |
| `crash-launch...md:112` | 「later patches added further stability work (including the 1.0.30 Steam Deck fix)」 | 史实，未断言 1.0.30 为最新 |
| `patch-1-0-31-...md:11 / :78` | 「previous build 1.0.30 was posted August 20, 2026」/「1.0.31 前值是 1.0.30」 | 新增指南自身的正确表述，即本次口径基准 |

### 3.3 app / lib / home-content 核对

- `lib/seo-config.ts`、`app/**`、`components/**`、`content/home-content.md`：**无任何 1.0.30/1.0.31 版本渲染文本**，无需同步（`grep -rn "1\.0\.3[01]"` 于 app/ lib/ 返回 0）。
- `content/home-content.md` 与 `app/faq/page.tsx` 中的「1.0」均指 **1.0 正式版（July 31, 2026 发售）**，属游戏大版本史实，**不改**。
- `components/VersionBadge.tsx` 渲染的 `version: "1.0"` 是游戏大版本号（非补丁号），保持。

## 4. 未编造声明

- 未新增任何 1.0.31 机制/数值描述；本次仅改版本号与日期口径。
- 所有 1.0.31 相关新增文字仅为「1.0.31 = 2026-09-10 为当前构建」这一有官方来源的事实。
- 无法证实的项（reconnect 是否在 1.0.31 上线、冻结类在 1.0.31 是否复现）一律标 **[Unconfirmed]**（英文标记，符合站内规则）。
- 未触碰 sephiriawiki 以外任何站点目录。

## 5. 构建与线上验证

**构建**：`pnpm install` + `pnpm run build` → `✓ Compiled successfully`，TypeScript 通过，`✓ Generating static pages (49/49)`，**零错误**。

**部署**：`./deploy-wiki-site.sh sephiriawiki` → 新部署 `sephiriawiki-k0074kkeb-...`；`vercel inspect sephiriawiki.vercel.app` 显示 **Aliases: https://sephiriawiki.vercel.app** 已挂在该新部署（created 1m ago，status Ready）——非「只查首页 200」。

**线上内容级 curl（visible HTML，已剥离 RSC flight payload）**：

| 路径 | HTTP | `1.0.31` 命中 | 残留 `latest … 1.0.30` |
|---|---|:--:|:--:|
| `/guides/save-file-guide` | 200 | 4 | 0（2 处 grep 初判为误报，实为我方新句「1.0.30 landed on Aug 20, 2026, and the latest confirmed build as of **September 10, 2026** is 1.0.31」被正则跨越匹配） |
| `/guides/coop-freeze-recovery-guide` | 200 | 10 | 0 |
| `/guides/crash-launch-black-screen-fix-guide` | 200 | 2 | 0 |
| `/guides/patch-1-0-31-build-changes-guide` | 200 | 50 | 0 |
| `/guides/controller-casting-keybind-fix-guide` | 200 | 0 | 0（未改动，其 1.0.30 引用全为史实，符合预期） |

线上渲染实文（节选）：
- save-file-guide：「…the latest confirmed build as of **September 10, 2026** is **1.0.31**」/「Update to the latest build — **1.0.31**, posted September 10, 2026, following 1.0.30 on Aug 20, 2026」
- coop-freeze：「prevention matters even on the current build (**1.0.31**, September 10, 2026)」/「Not live as of 1.0.30 (August 20, 2026) — no reconnect option; whether 1.0.31 (September 10, 2026) changed that is **[Unconfirmed]**」
- crash-launch：「Make sure Sephiria is on the current build (**1.0.31**, September 10, 2026 — the Deck fix itself landed in 1.0.30) or newer」

## 6. 结论

**PASS** — 20 处命中全部有处置结论（改 8 / 不改 12），站内已无「1.0.30 = 最新」矛盾口径；构建零错误、部署成功、alias 指向新部署、内容级 curl 全部命中。

**待人工**：无。`git commit` / `git push` 按派单约定交由主 Agent 统一执行。
