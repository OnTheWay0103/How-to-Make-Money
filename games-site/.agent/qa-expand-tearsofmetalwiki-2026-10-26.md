# QA Report — tearsofmetalwiki expand (quick)

- 日期: 2026-10-26
- 模式: quick（仅本轮变更）
- 范围: 1 篇新增 — `content/guides/seraphic-blade-unlock-guide.md`
- 结果: **PASS**

## 1. 结论

| 检查项 | 结果 | 证据 |
|---|---|---|
| 虚构检测（游戏专有名词） | PASS | 见第 2 节 |
| 跨站残留 | PASS | 扫描 SpiritVale/Witchspire/mistfall/aincrad/The Mound/Sephiria/DinoBlade/MineGeon/Mystralia/Grain Rot/EX-Mod/NACON → 0 匹配 |
| 事实一致性 | PASS | 见第 3 节 |
| 词数 | PASS | 1,474 词（800–1500 内） |
| H1 数量 | PASS | 1 |
| title / description 长度 | PASS | title 58 字符；description 159 字符 |
| related 块状数组 | PASS | 块状，6 项，全部指向站内已存在页 |
| sources 三层 + url/date/text | PASS | Official 1 / Community 4 / Editorial 1 |
| 数字标来源或 [Unconfirmed] | PASS | 见第 4 节 |
| build | PASS | `pnpm build` ✓ Compiled successfully，路由含 `/guides/seraphic-blade-unlock-guide` |
| lint | PASS | `node scripts/lint-guides.mjs tearsofmetalwiki --changed` → 全部通过 |

## 2. 虚构检测：专有名词逐个核验

| 名词 | 核验 | 判定 |
|---|---|---|
| Wallace / Brienne / Ruadh | 站内 heroes-tier-list 已列（Wallace 长剑、Brienne 徒手、Ruadh） | ✅ |
| Seraphic Blade | wire：官方 9/8 补丁条目 + nichegameguides + wikitactics 武器页三处同指 Wallace 第四把长剑 | ✅ |
| Intricate Pommel（Act 1 商人，~225 币） | nichegameguides 明列；Steam 讨论串标题即「Wallace 4th weapon」 | ✅ |
| Gilded Crossguard（Act 2 金眼宝箱，~315–350 币） | nichegameguides（350）+ 检索汇总（315–350），价差已在正文标 [Unconfirmed] | ✅ |
| Sanctified Blade（Act 3 眼标记挑战旗，~4 波队长） | nichegameguides 明列 | ✅ |
| 组合数据（4 套连段 / 19 步 / 15–100 基础伤害 / 5 个 finisher） | wikitactics 武器页；正文标 [Unconfirmed]，并说明为社区数据挖掘 | ✅ |

未编造英雄、Boss、地图区域名。**特别处理**：社区对 Act 1/Act 2 地区名说法互相矛盾（The Highlands / The Maw 实为 Act 2 战场名之一，非区域名），本文一律只写「Act 1 / Act 2 / Act 3」，不写区域专名，避免与站内 progression-walkthrough 的区域命名冲突。

## 3. 事实一致性

- **与 wallace-build-guide 的关系**：该页第 54 行仍写「specific named longswords are not yet publicly documented」，本文已把 Seraphic Blade 作为具名武器记录，并在正文加了一段提示说明该说法已过时 → 已在第 6 节记为待办，不阻断，避免与新页互相打脸。
- **与 patch-notes 的关系**：站内 patch-notes 第 78 行已记录 9/8 补丁含「Seraphic Blade unlock fixes in co-op」，本文引用同一事件，表述一致。
- **与 healing-guide 的关系**：金币预算段落到 healing 页，不重复其内容 → 无自噬。
- **搜索意图独立性**：本文是「如何解锁 + 值不值得」，wallace-build-guide 是「build 搭配」，weapon-merge-guide 是「合成分解」，三者不重叠。

## 4. 数字来源标注

| 数字 | 标注 |
|---|---|
| 225 币（Pommel） | nichegameguides，正文标 ~ 且段末标 [Unconfirmed] |
| 315–350 币（Crossguard） | 两个社区来源价差，正文标 ~ 并标 [Unconfirmed] |
| 575–700 币总预算 | 由上述两项 + 编辑部预留金推导，表内标「Community-reported」 |
| 连段 60/215/170/180、15–100 基础伤害 | wikitactics，正文标 [Unconfirmed] |
| 9/8 补丁行为变更 | 官方补丁条目（经 wikitactics changelog 转录），正文标注来源 |

## 5. 来源真实性说明

- Steam 站内页（store/steamcommunity）本机不可直连，本轮通过 WebSearch 读取标题与讨论串内容；官方补丁的确切措辞取自 wikitactics 的 changelog 转录，sources 中已如实写明「Quoted via the Tears of Metal Wiki changelog」，未把转录冒称原文。
- 据此记 **P2 [Unverified-Offline]**：官方 9/8 补丁原文未能本机直读，不阻断。

## 6. 待办（不阻断，交主 Agent）

1. **P2**：`wallace-build-guide.md` 第 54 行「specific named longswords are not yet publicly documented」已过时，建议下轮改为引用本页 `seraphic-blade-unlock-guide`。
2. **P2**：Steam 可直连后回读 9/8 补丁原文，把「unlocks immediately upon collecting every piece」从转录状态升为直引。
