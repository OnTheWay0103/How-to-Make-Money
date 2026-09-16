# QA deep Part B — 全站脚本化扫描（2026-09-17）

> 触发：上次 full audit = **2026-09-10**，9/17 = 第 7 天。`.agent/qa-report.md` 明确排定
> 「下一轮 deep 触发：2026-09-17」，且队列内有 6 条强制项待处理。
> 本文件 = Part B（自动化脚本，全部 43 站）；Part A（人为逐站核验）另见 `.agent/qa-deep-9-17.md`。
> 执行方式：主 Agent 直接跑脚本（只读，与并行的 EXPAND 子 Agent 无写冲突）。

## 扫描范围

43 个站点目录（`dashboard/`、`docs/`、`scripts/`、`keyword-results/` 除外），
面 = `content/` + `app/` + `lib/` + `components/`，排除 `.next/`、`node_modules/`、`.vercel/`。

---

## B-1 跨站污染（他站游戏名残留）

方法：对每个站，用全部 41 个他站游戏名的**特征 token**（如 `mistfall` / `spiritvale` /
`crimson moon` / `silver pines` …）逐一反向检索该站内容面。

结果：**✅ CLEAN —— 0 处真实污染**。

原始命中 15 组，逐条读上下文后**全部判定为误报**，分两类：

| 类型 | 实例 | 判定 |
|------|------|------|
| 普通英文词 | `expeditions`（11 站命中）—— 命中处均为 "rescuing survivors on expeditions"、"Between expeditions"、"roguelite expeditions" 等本作自身语境 | ✅ 非污染 |
| 正当跨游戏类比 | `waterparksimulatorwiki` 提 `Low-Budget Repairs` / `Go-Go Town`（"If you liked X, Y…" 价值定位段）；`welcomeelderfieldwiki` 4 文件提 `Moonlight Peaks`（"Farming/life-sim gameplay (Stardew Valley, Moonlight Peaks) with a horror twist" 品类类比） | ✅ 非污染 |

> ⚠️ 方法学提示（供后续扫描复用）：`expeditions` 是高频普通名词，作为他站特征 token
> **信噪比过低**，后续扫描应改用 `expeditions: samurai` 全名或排除该 token。

## B-2 模板残留 / 占位符

检索式：`lorem ipsum|TODO:|FIXME|XXX_|PLACEHOLDER|\[insert |example\.com|your-domain`（忽略大小写）。

结果：**✅ CLEAN —— 0 处真实残留**。原始命中 14 站，逐条读上下文后全部为**正当用法**：

| 站 | 命中处 | 实际内容 | 判定 |
|----|--------|---------|------|
| aincrad / doloctown / dwarfdelve / grainrot / mistfallhunter / mystralia / sovereigntower / vahrinscall / witchspire | `lib/seo-config.ts:21` | 注释「replace the placeholder value once the …」= **代码注释**，非页面内容 | ✅ |
| boneholdwiki | `system-requirements-guide.md:63,118` | 主动披露 Steam 商店页列的是 placeholder 错误值（"4 MB RAM"），并**拒绝编造**真实数字 | ✅ 诚实标注，正面案例 |
| boneholdwiki | `achievements-guide.md:117` | 「everything on this page is a placeholder until then」= 诚实免责 | ✅ |
| spiritvalewiki / taivalwiki / tearsofmetalwiki / lowbudgetrepairswiki | 各自 guide | 同为正当语境用法 | ✅ |

## B-3 孤儿文件 / 注册缺失

**⚠️ 本节初版扫描作废，结论已更正（重要）。**

初版假设 `lib/guides.ts` 含**硬编码 slug 注册表**，据此比对后报出「全站 40+ 站每站十余篇未注册」，
看似重大缺陷。**实测证伪**：

```
sephiriawiki/lib/guides.ts:105-116
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  ... slug = file.replace(/\.md$/, '')
```

`getAllGuides()` **直接扫描 `content/guides/*.md`，slug 由文件名推导**；
`getAllCategories()` 亦从 frontmatter 动态汇总。**全站不存在任何 slug 注册表。**

→ **结论：孤儿注册问题在架构上不可能存在，初版告警为扫描器自身的假阳性。**
→ 该发现同时更正了一条**主 Agent 本轮派单指令错误**：本轮 5 个 EXPAND 子 Agent 的
  指令中「MUST 同步更新 lib/guides.ts 注册」为**错误要求**，已即时发更正消息给全部 5 个
  子 Agent，令其忽略并不予改动（已往该文件写入的须 `git checkout` 回退）。
→ **规则闭环建议**：后续派单 MUST NOT 假设存在注册表；新增 guide 只需落 `.md` +
  正确 frontmatter。已提请写入 04 Profile。

## B-4 硬编码 AdSense ID 重复源

9/11 已确立「AdSense ID MUST 收敛到 `seo-config` 单一事实源」（当时为 themoundwiki 专项修复）。

结果：**✅ 无 ID 冲突；🟡 存在 1 处面状重复（非阻断）**。

| 检查 | 结果 |
|------|------|
| 全仓 distinct AdSense ID 值 | **仅 1 个**：`ca-pub-7211682665758448`（66 次命中，含文档/报告） → **不存在多 ID 冲突风险** |
| themoundwiki（9/11 收敛站） | ✅ **已收敛** —— `app/layout.tsx` 已无字面量，仅 `lib/seo-config.ts` 持有；9/11 的修复**保持住了**，未回退 |
| 其余 42 站 | 🟡 `app/layout.tsx` 仍内联字面量 `client=ca-pub-7211682665758448`；其中 18 站 `lib/seo-config.ts` 亦另存一份 |

**性质判定**：这是**可维护性重复**（同一常量两处定义），**不是正确性缺陷** ——
因为全仓只有 1 个 ID 值，两处不可能漂移出不一致。**不列为 🔴，不触发批量改动**。

**建议（转 04/06 Profile，非本轮执行）**：若要彻底单源化，应作为**独立专项**批量收敛
42 站 `layout.tsx` → 引用 `seo-config`，而非夹在每日扩充里顺手改（批量 42 文件改动面
过大，与「单点修改主 Agent 直接做；批量派子 Agent」及 QA 复验成本不匹配）。
本轮**不擅自扩大改动面**。

---

## 本文件结论

| 项 | 结果 |
|----|------|
| B-1 跨站污染 | ✅ CLEAN（15 组命中全为误报） |
| B-2 模板残留 | ✅ CLEAN（14 站命中全为正当用法） |
| B-3 孤儿/注册 | ✅ 架构上不存在（初版扫描器假阳性，已更正） |
| B-4 AdSense 单源 | 见 Part A |

**未发现任何 🔴 阻断级全站性问题。**
