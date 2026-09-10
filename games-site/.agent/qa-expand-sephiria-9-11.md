# QA quick 报告 — sephiriawiki 扩充 9/11

> 岗位: QA 审核员（`docs/agents/05` + `06`）| 任务: EXPAND-9/11-A
> 审核对象: `sephiriawiki/content/guides/patch-1-0-31-build-changes-guide.md`（新增 1 篇，无其他改动）
> 日期: 2026-09-11 | 材料版本: 工作树（HEAD e5258d6）
> 结论: ✅ **PASS** — 已部署并通过内容级线上验证

---

## 1. 残留扫描

| 检查项 | 方法 | 结果 |
|---|---|---|
| Hugo shortcode 残留（`{{<` / `{{%`） | `grep -nE '\{\{[<%]'` 目标文件 | 0 命中 ✅ |
| 他站游戏名污染（Mistfall / Witchspire / Aincrad / SpiritVale / Tears of Metal / Grainrot / The Mound） | `grep -inE` 目标文件 + 全站 | 0 命中 ✅ |
| 他站域名（`themoundwiki` / `mistfallhunterwiki` / `witchspirewiki` / `aincradwiki` / `spiritvalewiki` / `tearsofmetalwiki` / `grainrotwiki`） | `grep -inE` | 0 命中 ✅ |
| CJK 字符（`[一-鿿぀-ヿ가-힯]`） | python3 正则统计**线上 HTML** | **0** ✅ |
| `[待确认]` 中文标注（MUST 用 `[Unconfirmed]`） | `grep -F '[待确认]'` | 0 命中 ✅ |
| 商标错误（如把 Sephiria 写成他厂产品） | 人工通读 + 与官方公告对照 | 无 ✅ |
| `related` slug 有效性 | 7 个 slug 逐个 `ls content/guides/` 核验 | 7/7 存在 ✅ |
| frontmatter 结构（title/description/category/version/updated/keywords/related/sources） | 与既有 guide（`controller-casting-keybind-fix-guide.md`）逐字段对比 | 同构 ✅ |
| `sources` 三层齐全（Official / Community / Editorial） | 读 frontmatter | 三层齐全 ✅ |

线上残留复扫（对 `https://sephiriawiki.vercel.app/guides/patch-1-0-31-build-changes-guide` 的 HTML）：
`grep -oiE "hugo|shortcode|\{\{[<%]|mistfall|witchspire|aincrad|spiritvale|tearsofmetal|grainrot"` → **0 命中** ✅
CJK 字符数 → **0** ✅

---

## 2. 编造检查（fabrication check）

原则：本页所有游戏内名称、数值、机制 MUST 能在官方 1.0.31 公告中找到对应；MUST NOT 出现任何玩家引语或未经官方公告支持的数值。

| 抽样实体 | 官方公告可溯源 | 站内既有 guide 是否已覆盖 |
|---|:--:|---|
| Blinding Silence / Garden of Needle Ice（Sword & Shield 新升级） | ✅ | 否（`sword-shield-build-guide` 停在 1.0.30） |
| Prismatic Magic Wand（替换被移除的 Magic Wand） | ✅ | 否 |
| Bloodletting Gearblade（Great Sword） | ✅ | 否 |
| M-9200（Crossbow） | ✅ | 否 |
| Cerulean Cloud Sword 'Arges'（Blade，含 200/220/250/300% 与每层 +5%） | ✅ | 否 |
| 8 个新神器（Faded Shield Crest / Rusty Tsuba / Trainee Duelist's Epaulette / Dull Resonance Stone / Stiff Crank / Midday Whetstone / Meteorite Mirror / Blacksmith's Tongs） | ✅ | 否（全站 0 命中，已 grep 核验） |
| Comprehensive Training Grounds | ✅ | 否（站内 `training ground` 仅 1 处，讲进入卡死，不同题） |
| Blood Stone Ring / Vital Touch 重做数值 | ✅ | 否（`artifacts-guide` 仅描述旧效果） |
| Fretted Clay Tablet 概率 10/20/30/40/50% → 20/30/40/55/70% | ✅ | 否 |
| 17 项武器改动（Perfect Balance 90°→110°、Heidi Overheat 重做、Formless Dance 1%→0.85%、Successor Grimoire +30% → Magic Wound 等） | ✅ | 否 |
| 10 处 🥕 社区反馈标记 | ✅（公告开头自述 🥕 定义） | — |

**玩家引语**：0 条。**未标注来源的数值**：0 处。**无 `[Unconfirmed]` 标记的必要**：全部数据可直接溯源至官方公告原文，故未添加该标记（不添加亦不等于断言；见 §4 诚实性说明）。

诚实性说明：本页 Community 层写的是「官方公告内的 🥕 社区反馈标记」（公告原文自述的形式化标记，可逐条比对），**不是**玩家原话；Editorial 层写明 VaporLens 数据快照截至 2026-08（**早于 1.0.31**），未把旧数据包装成本次补丁后的玩家反应。此两点是本次最主要的编造风险点，已通过明确标注时间边界化解。

---

## 3. 其他红线核验

| 红线 | 结果 |
|---|---|
| 与既有攻略同题（自噬） | ✅ 通过 — 全站 35 篇 grep 后，8 个新神器名 + 6 个新升级名 **0 命中**；既有 6+1 篇武器/神器/build 指南全部停在 1.0.30 且写的是「怎么玩」，本文写的是「1.0.31 变了什么」，搜索意图不同；Related Guides 回链降低蚕食风险 |
| 与既有攻略矛盾 | ✅ 无矛盾 — 本文不修改任何既有页面，只描述 1.0.31 变更 |
| 词数红线（800–1500） | ✅ body **1478 词**（站点常态 1212–1498） |
| 只改本站目录 | ✅ `git status` 确认本次 sephiriawiki 侧只有新文件 1 个；未触碰其他站点目录 |
| 临时文件未入工作区 | ✅ 临时产物在 `/tmp/`；工作区无新增临时文件 |

---

## 4. 线上验证（内容级，非首页 200）

任务红线：「MUST NOT 部署后只查首页 HTTP 200 就算验证通过（旧部署同样 200）— MUST 抓取本次新增/改动的具体页面路径做内容检查」。

**部署**：`./deploy-wiki-site.sh sephiriawiki` → exit 0，新部署 `https://sephiriawiki-kbphql8uq-zhaoq0103s-projects.vercel.app`。

**抓取本次新增的具体路径**（`rtk proxy curl` 原始输出，规避 RTK 过滤）：

```
GET https://sephiriawiki.vercel.app/guides/patch-1-0-31-build-changes-guide
→ HTTP 200, 70470 bytes
  x-matched-path: /guides/patch-1-0-31-build-changes-guide
```

**逐串内容比对**（该路径在旧部署上**不存在**，因此 200 + 新文本 = 线上确为新部署）：

| 关键串 | 命中次数 |
|---|---|
| `1.0.31 Update` | 1 |
| `September 10, 2026` | 4 |
| `Blinding Silence` | 2 |
| `Garden of Needle Ice` | 2 |
| `Prismatic Magic Wand` | 3 |
| `Bloodletting Gearblade` | 2 |
| `M-9200` | 2 |
| `Cerulean Cloud Sword` | 2 |
| `Faded Shield Crest` | 2 |
| `Rusty Tsuba` | 2 |
| `Trainee Duelist` | 2 |
| `Dull Resonance Stone` | 2 |
| `Stiff Crank` | 2 |
| `Midday Whetstone` | 3 |
| `Meteorite Mirror` | 3 |
| `Blacksmith` | 2 |
| `Comprehensive Training Grounds` | 3 |
| `Blood Stone Ring` | 3 |
| `Vital Touch` | 3 |

**索引可达性**（新页不是孤儿页）：
```
GET https://sephiriawiki.vercel.app/guides → HTTP 200, 114393 bytes
grep -c "patch-1-0-31-build-changes-guide" → 1   ✅ 已被 guides 索引收录
```

**alias 指向新部署**：alias 侧响应头 `x-vercel-id: sin1::mgbr4-1789074745880-...`，页面内容含仅存在于本次构建的新文本；两条证据合并即证明生产 alias 已切到新部署。（注：`*-zhaoq0103s-projects.vercel.app` 直连返回 302 属 Vercel 部署保护，不作为判据 —— 按 Profile 04 的并发部署规则，**以内容级 curl 为准**。）

---

## 5. 结论

**PASS** ✅ — 残留 0、编造 0、自噬 0、词数达标、related 全有效；已部署并通过针对**新增页面路径**的内容级验证，且该页已被 `/guides` 索引收录。

**未做（越界，交由主 Agent 决策）**：既有 4 篇 guide 的「最新版本 = 1.0.30」表述在 1.0.31 后已滞后（`coop-freeze-recovery-guide.md:11/51/53/55/62/100/106/109`、`crash-launch-black-screen-fix-guide.md:42/105/112`、`save-file-guide.md:63/88`、`controller-casting-keybind-fix-guide.md:11/49/58`）。本次只新增 1 篇，未做跨篇版本号刷新 —— 属批量事实修正，建议单独派单，避免部分替换造成站内自相矛盾。
