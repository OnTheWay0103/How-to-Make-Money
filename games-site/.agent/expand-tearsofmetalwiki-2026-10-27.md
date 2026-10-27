# EXPAND — tearsofmetalwiki — 2026-10-27

## 产出

- slug: `armor-sets-gear-unlock-guide`
- 标题: Tears of Metal Armor Sets: How Gear Unlocks Work Per Hero
- URL: https://tearsofmetalwiki.vercel.app/guides/armor-sets-gear-unlock-guide
- 正文词数: 1,396（title 57 字符 / description 152 字符 / H1 ×1 / 首段 49 词）

## 选题依据（为什么是它）

站内 41 篇零覆盖：`grep -i "Commanding|Warmonger|Duelist|armor quest"` 全站 0 命中，
`equipment-guide.md` 自身写明「Specific armor piece types beyond these are not yet documented」。
Steam 通用讨论区 **"Armor quests are way too rare"** 是本站当前热度最高的装备类玩家问题串：
玩家反复问「护甲怎么解锁 / 为什么总是拿不到 / 是不是卡 bug」。属于真缺口 + 具体 + 可核验边界清楚。

与 `trials-mother-stone-challenges-guide`（10/24）不重叠：那篇讲 Trials 阶梯 +
in-fight Challenge 的奖励与 bug，本篇讲**装备/外观的获取路径与按幕分档规则**，搜索意图不同（已在 related 互链）。

## 来源（5 条，3 独立通道）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | The Experimental Branch Update（Challenges 定义 = "optional multi-wave objectives you encounter during fights"；新增 healing/currency/Emblem 奖励；Cartographer 解锁新 Challenge Rewards） | 2026-10-21 |
| Official | Early Access 上线公告（"Three playable Heroes, with unique gear, synergies and playstyles"） | 2026-07-22 |
| Official | Meta-progression Improvement（"Some shops can now be upgraded to unlock more items"；官方自述解锁太肝） | 2026-09-24 |
| Community | Steam 讨论 "Armor quests are way too rare"（一幕一档：Commanding / Warmonger / Duelist；单机保底本人；联机完成即全员解锁；"10 runs with every char"） | 2026-10（索引未显式给戳） |
| Community | Steam 讨论 "Is there a fixed character..."（无捏脸，皮肤为固定解锁） | 2026-10（同上） |

> 本机 `steamcommunity.com` TCP 不可达（199.59.150.12 ECONNREFUSED），两条社区源经搜索引擎索引正文取得，
> 已在 sources 的 text 里写明该限制；因此文中所有「按幕分档」结论一律标 `[Community]`，
> 并在「What is not confirmed」列出「是否真的一次一保底」「每套件数」两项未确认，未写成事实。

## 采集面（≥6 组查询）

1. reddit 卡关/求助 — 0 结果（Reddit 侧无可用索引）
2. 新手 tips / "wish I knew" — 多站覆盖，均已有 beginner-guide / village-upgrade-guide
3. Steam 讨论 how to unlock / how many acts / endgame — 命中 armor quests 串
4. 差评主题（grind / repetitive）— 27% 差评提 grind，但机制性落点已被 village-upgrade-guide / patch-notes 吸收
5. 10 月负面差评（性能/联机）— 已被 low-fps-fix / multiplayer-connection-fix / coop-join-failures 覆盖
6. Act 2/Act 3 难度尖峰 — 已被 threat-level-difficulty / boss-guide / progression-walkthrough 覆盖
7. Steam 官方公告核验 — 10/20 之后唯一新公告是 10/21 Experimental Branch（10/23 已写专页）

## 排除理由

- 10/21 Experimental Branch：已有 `tears-of-metal-experimental-branch-guide`（10/23），复写=自噬
- 治疗 / 难度 / 复活 / FPS / desync / 存档 / 神秘英雄 / Boss 名 / 路线图：历史否决清单，未重写
- Crossplay × Game Pass：`multiplayer-connection-fix-guide` + `coop-join-failures-guide` 已完整覆盖（含 9/8 官方原文）
- 10 月串「text-chat spam exploit 卡崩全队」：单串 + 属 bug 报障，非攻略题
- 差评 grind：无新机制事实，只有情绪

## QA

- `node scripts/lint-guides.mjs tearsofmetalwiki` → **0 ERROR / 5 WARN**（本篇仅 1 条 `updated-future`：
  脚本用 UTC 日期比较，本机 10-27 04:09 CST 时 UTC 仍是 10-26，属时区假警报；其余 4 条为存量页 sources-tier 统计项，
  计数已核对 = 3 处 Official tier，非缺源）
- `node scripts/check-site-residue.mjs tearsofmetalwiki` → ✅ 无模板残留

## 部署与线上验证

- `./deploy-wiki-site.sh tearsofmetalwiki` → 部署成功，alias https://tearsofmetalwiki.vercel.app/
- `dig @1.1.1.1 +short tearsofmetalwiki.vercel.app` → 216.198.79.131
- `curl --resolve`：
  - `/` → **200**
  - `/guides/armor-sets-gear-unlock-guide` → **200**（HTML 内含 Commanding/Warmonger/Duelist 表格 ×5 命中，`<title>` 正确）
  - `/guides/equipment-guide` → **200**（related 反向可达性抽查）
- `/sitemap.xml` 49 条 loc，含本页 `guides/armor-sets-gear-unlock-guide` ✅

## 未做

- 未 commit / 未 push
- 未改 `.agent/expand-daily.json` / `.agent/qa-report.md`
