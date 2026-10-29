# EXPAND — waterparksimulatorwiki — 2026-10-29

## 产出

- slug: `achievements-guide`
- 标题: Waterpark Simulator Achievements Guide: All 71 Unlocks
- URL: https://waterparksimulatorwiki.vercel.app/guides/achievements-guide
- 正文词数: 1,380（title 54 字符 / description 155 字符 / H1 ×1（线上实测 1）/ 首段 50 词）
- 表格: 5 张（全部 71 个成就按类别列出，含 Valve 全球解锁率）
- 来源: 16 条 — Official 8 / Community 7 / Editorial 1

## 选题依据（为什么是它）

站内 20 篇零成就覆盖：`grep -ril "achievement"` 只命中
`hidden-content-easter-eggs-guide.md` 的间接提及，没有任何页面把成就当主题。
Google Suggest 实测（2026-10-29，`hl=en&gl=us`）该方向的长尾密度远高于其他候选：

- `waterpark simulator achievements` → achievements / not unlocking / not working / xbox / guide / hidden / all / steam / new
- `waterpark simulator sandbox` → sandbox mode / stars / not working / ps5 / reddit / does it have sandbox
- `waterpark simulator repair` → repair buildings / pool / worker / maintenance worker
- `waterpark simulator unreachable` → unreachable bug / pool unreachable / everything unreachable

成就方向同时满足三条：高频（9 个建议词直接命中）、具体（71 个可逐一核对的解锁条件）、
站内零覆盖。官方侧有可复现的硬数据（Steam 全球成就 API 返回 71 条及各自解锁率），
社区侧有大量「为什么不跳」的真实求助，因此不是臆想题。

与既有页不重叠：`research-tree-guide` 讲研究解锁顺序、`museum-questline-guide` 讲 Yogi 主线，
本篇只把它们作为成就条件的引用对象，不重复讲机制。互链页：`beginner-guide`、
`money-making-guide`、`research-tree-guide`、`stuck-guests-fix-guide`、`museum-questline-guide`。

## 来源（16 条，3 个通道）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | Valve 全球成就 API（app 3293260）：返回 **71 条**成就及全球解锁率，本篇所有数字的唯一来源 | 2026-10-29 访问 |
| Official | Steam 商店页（CayPlay）：确认 Steam Achievements 与 1.0 发售日 2026-07-31 | 2026-10-29 访问 |
| Official | 1.0.30 补丁（含 1.0.21–1.0.31）：修复 beach park / zipline 成就不触发；更新后文件损坏会让公园看起来空，官方给的解法是 Steam 文件校验 | 2026-08-04 |
| Official | 2026-08-13 补丁：修复 City 地图 3 星 / 5 星成就不触发 | 2026-08-13 |
| Official | 2026-08-21 补丁：修复多人模式成就进度异常 | 2026-08-21 |
| Official | 2026-08-28 补丁：修复 Nothing left to learn 不触发 | 2026-08-28 |
| Official | 1.0.91 补丁：修复 painting 成就不触发、Slip Happens 计数器冻结 | 2026-09-11 |
| Official | 1.0.48 补丁：Staff won't quit on Easy or Sandbox（确认 Easy / Sandbox 是独立模式，但**未**说明成就是否禁用） | 2026-08-07 |
| Community | waterparksimulator.wiki — Achievements：Steam 约 71 条，旧攻略的 52 条是 EA 口径；No Trespassing 200、Pool-itzer 100、Mogul $1,000,000 | 2026-07-31 更新 |
| Community | waterparksimulatorgame.wiki — Achievements：Nailed it! 仅 Normal/Hard 计数；Slip Happens 曾卡 55/100；主机版 Full House 改为 70 人触发；进度按公园记录 | 2026-10-29 访问 |
| Community | waterparksimulator.wiki — Difficulty Modes：Easy / Sandbox 通常不给成就，Normal / Hard 给；难度建园时锁定 | 2026-08-08 更新 |
| Community | waterparksimulatorgame.wiki — Difficulty：只有 Normal / Hard 给成就；Sandbox 无限钱、全研究；引开发者「no mid-game difficulty changes」 | 2026-10-29 访问 |
| Community | Steam 讨论「53/55 achievements 2 are really bug i think」：100 人同场与 20m 坠落两个成就不跳；回复建议 day 100 后用 flyers、从高滑梯跳 | 2026-10-29 经搜索索引读取 |
| Community | Steam 讨论「Achievements」：玩家问为何不跳，回复问是否在 Easy/Sandbox，原帖确认是原因 | 2026-10-29 经搜索索引读取 |
| Community | Whisper of the House — All 71 Unlocks：70 条具名条件；建议一条 Hard Beach 长档跑累计、雇工前先手做个人计数、City 单独开档 | 2026-08-10 更新 |
| Editorial | 本篇的诊断顺序、五步 100% 路线与「What is not confirmed」清单，均基于以上来源整理 | 2026-10-29 |

> Steam 社区 hub 本机 TCP 不可达（与 10-27、10-28 两轮一致）；两条讨论串内容经搜索引擎索引取得，
> 已在 sources 的 text 里写明该限制。官方侧改用 Steam 公开新闻 API（`ISteamNews`）与
> 全球成就 API（`ISteamUserStats`），两者均实测 200。

## 采集面（≥6 组查询）

1. `Waterpark Simulator Steam discussions players asking how to` — 命中成就求助串、bug 串、差评主题
2. `site:steamcommunity.com Waterpark Simulator discussions` — 命中 unreachable bug、puddles、25 小时反馈等
3. `waterpark simulator reddit stuck broken ride repair maintenance` — Reddit 无可用索引，改走维修/故障方向
4. `"Waterpark Simulator" negative review Steam problems broken` — 差评主题：寻路、员工 AI、性能、4→5 星
5. `"Waterpark Simulator" achievements not unlocking bug 100 visitors 20m fall` — 命中 53/55 串、TrueAchievements、多篇成就指南
6. `"Waterpark Simulator" achievement guide all achievements list` — 命中 71 / 60 / 55 / 52 的口径冲突
7. `site:reddit.com "Waterpark Simulator" achievements` — 0 结果
8. `Waterpark Simulator achievements disabled easy sandbox difficulty Steam` — 命中 Steam 串与两篇难度页，交叉确认模式限制
9. Google Suggest 8 个种子词（见上）— 用于比较候选方向的搜索需求

## 排除理由

- **Sandbox 模式**：Suggest 有独立需求（sandbox mode / stars / not working / ps5），官方 1.0.48 也确认模式存在，
  但站内 `beginner-guide`、`money-making-guide`、`research-tree-guide` 已覆盖其无限钱/全研究的效果，
  且「如何解锁 / 是否继承存档」缺官方说明，单独成页会与成就页的难度段重复。留作下一轮候选。
- **Breakdown / 维修**：需求真实（repair buildings / pool / maintenance worker），官方 1.0 公告也明确
  「Some attractions might break down completely and will be out of order until you fix them」，
  但 `staff-management-guide`、`visitor-problems-guide` 已覆盖维修工与设施故障处置，
  单独成页需要先划清意图边界；且本轮成就页已含 `Repair 500 attractions` / `Hot Fix` 两个计数。
- **Unreachable 物品 bug**：有 2 条 Steam 串与 Suggest 词，但官方补丁未给出修复或成因，
  只能写 [Unconfirmed]，撑不起 1,200 词。
- **更新后公园变空**：官方给了明确解法（Steam 文件校验），但只有一条官方来源，素材太薄；
  已在成就页第 5 条排查项中引用。
- **4→5 星卡关 / 员工上限**：`visitor-happiness-guide`、`visitor-problems-guide`、`staff-management-guide` 已覆盖。
- **性能 / FPS**：差评高频，但无官方来源、无可核验解法，MUST NOT 硬写。

## QA

- `node scripts/lint-guides.mjs waterparksimulatorwiki` → **0 ERROR / 0 WARN**（全站 21 篇）
- `node scripts/check-site-residue.mjs waterparksimulatorwiki` → ✅ 无模板残留
- `pnpm install && pnpm build` → **exit 0**，新页出现在静态路由表
  （`pnpm install` 有一条 `ERR_PNPM_IGNORED_BUILDS: unrs-resolver` 的非阻断提示，build 不受影响）
- `node scripts/check-ad-slots.mjs waterparksimulatorwiki` → **exit 0**
- 完整 QA quick 报告：`.agent/qa-waterparksimulatorwiki-2026-10-29.md`

## 部署与线上验证

- `./deploy-wiki-site.sh waterparksimulatorwiki` → exit 0，
  新部署 `waterparksimulatorwiki-pludloutq-zhaoq0103s-projects.vercel.app`，alias 到
  `https://waterparksimulatorwiki.vercel.app/`
- `dig @1.1.1.1 +short waterparksimulatorwiki.vercel.app` → 64.29.17.131 / 64.29.17.195
- `curl --resolve`（IPv4 64.29.17.131）：
  - `/guides/achievements-guide` → **200**，`<h1>` 计数 **1**，`<title>` 为
    `Waterpark Simulator Achievements Guide: All 71 Unlocks · Waterpark Simulator Wiki`，
    正文「71 achievements」命中 2 次
  - `/` → 200，`/sitemap.xml` → 200
- canonical 指向自身：`https://waterparksimulatorwiki.vercel.app/guides/achievements-guide`
- `/sitemap.xml` 29 条 loc，含本页 `guides/achievements-guide` ✅
- `node scripts/check-ad-slots.mjs waterparksimulatorwiki --live` → **exit 0**

## 未做

- 未执行任何 git 命令（add / commit / push 均未跑）
- 未改 `.agent/expand-daily.json`、未改 `.agent/qa-report.md`
- 未动 `lib/adsterra-zones.ts` 与站点广告代码；未在页面内手写 `<AdsterraSlot>`
- 未改其他站点目录
- 未手改 `keyword-results/INDEX.md`、`STATS-游戏站点统计.md`
