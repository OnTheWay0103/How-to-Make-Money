# QA Report — tearsofmetalwiki co-op-revive-guide (9/6)

- 模式: quick | 审核范围: tearsofmetalwiki 1 篇新指南 `co-op-revive-guide.md` + home-content 加行
- 审核日期: 2026-09-06 | 审核员: QA（依据 docs/agents/05 + 06）
- 游戏事实基准: Paper Cult Steam 公告（app 1913120）v0.12.58540 / thegameswiki update-history / 独立媒体

## 执行摘要

- 结论: ✅ **PASS（可部署）** — 无 🔴 阻断；1 个 🟡 记录项（healing-guide §6 旧金币复活制与新页冲突 → 移交主 Agent 单独立校准，本轮按 MUST NOT 未改既有正文）
- 残留扫描: ✅ Clean
- 编造检查: ✅ 抽查 ≥7 项核心断言全部有真实来源或 [Unconfirmed]，无虚构
- 体量: ✅ 正文去 frontmatter ≈ 1139 词（raw wc 1189），800–1500 内
- 一致性: ✅ related[] 与全部 /guides/ 内链 0 BROKEN；updated 2026-09-06；frontmatter YAML 解析通过
- 记录: ✅ keyword-results/tearsofmetalwiki-expand-9-6.md 存在，来源可溯源、候选排除与合规确认齐全

## 发现清单

| # | 严重度 | 位置 | 描述 | 建议 |
|---|--------|------|------|------|
| 1 | 🟡 | 站内一致性（既有页） | healing-guide §6 仍写旧金币复活（250/350 金币、复活次数涨价），与 v0.12+ 生命值制冲突；本新页为现行机制正确来源，且内嵌提示条引导读者。healing-guide 属既有正文，按任务 MUST NOT 未改。 | 单独立校准任务修 healing-guide §6（修正时全站 grep revive/复活一次改齐），建议主 Agent 排期。 |
| 2 | 🟢 | 正文 | 「默认复活窗口长度」官方未公布 → 正文与 sources 标 [Unconfirmed] | 无需处理。 |

## 编造检查：断言 → 来源对应（WebSearch/WebFetch 实核）

| # | 指南断言 | 判定 | 来源 |
|---|---------|------|------|
| 1 | v0.12.58540（8/13）复活由金币改为生命值制 | ✅ | Paper Cult Steam 公告（app 1913120 allnews）+ thegameswiki update-history |
| 2 | 复活者付出当前生命 50% | ✅ | thegameswiki update-history（2 次独立 WebSearch 查询交叉一致） |
| 3 | 复活者需 >10% 最大生命才能救 | ✅ | 同上 |
| 4 | 被救者按「实际牺牲的最大生命占比」回血 | ✅ | 同上 |
| 5 | 每次复活使窗口 -5 秒 | ✅ | 同上 |
| 6 | 开发者理由：旧金币制让玩家囤币、与 Charm 经济对抗、晚局复活可能付不起 | ✅ | Paper Cult v0.12 公告表述 + 独立媒体转载 |
| 7 | 治疗喷泉价格仍涨但仅跨 Act 上涨 | ✅ | thegameswiki update-history |
| 8 | 旧金币复活价格 250/350 出自站内 healing-guide §6（引 whisperofthehouse） | ✅ | 站内 grep 确认（非本页主张，本页仅提示其为旧制） |
| 9 | v0.14.58630（8/14）继续多人 bug 修复 | ✅ | Steam 公告 + 9/5 QA 已核 |

## 各检查项

- a) 残留扫描: 对新增 1 文件 + home-content 跑全站他站名/域名/CJK/Hugo 正则 → 0 命中 ✅
- b) 编造检查: 见上表，核心断言全部有真实来源；无虚构机制/玩家引语/数值 ✅
- c) 内部一致性: frontmatter 与同站近期指南（crash-launch / low-fps / armor-break）schema 一致；`related[]` 6 项（co-op/healing/survival-tips/boss/patch-notes/multiplayer-connection-fix）均真实存在；正文 /guides/ 内链 7 个均真实存在，0 BROKEN；title/description 与正文相符 ✅
- d) 诚实标注: 「默认窗口长度」「wondering if old coin system in Healing Guide」等均明确标注/说明；sources 三层（Official/Community/Editorial）结构完整；披露 age-gate、数值以更新史交叉验证 ✅
- e) 体量: 正文 ≈1139 词（800–1500）✅
- f) 注册: app/guides/[slug]/page.tsx generateStaticParams = getAllGuides()（lib/guides.ts readdirSync *.md）→ 自动注册，0 404 风险 ✅
- g) 定位: 新页为「现行复活规则 + v0.12 变更」专篇，与 healing-guide（治疗来源/金币预算）意图不同；与 armor-break（破甲）/ low-fps（性能）无关；站内无自噬 ✅

## 最终结论

✅ **PASS — 可部署**。无 🔴；🟡 记录项 1 条（healing-guide 校准）建议部署后移交主 Agent 单独立处理，不阻断本页。
