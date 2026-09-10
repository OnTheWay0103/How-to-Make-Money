# QA 报告 — QA-EXPAND-GRAINROT-9/11

- 日期: 2026-09-11
- 模式: quick（残留扫描 + 编造检查）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06）
- 范围: grainrotwiki 本轮 1 新增 + 5 修改文件 + 2 处站级元数据修复
- 结论: ✅ **PASS**（批准部署）

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `grainrotwiki/content/guides/patch-notes-guide.md` | 🆕 新增 | Patch Notes & Update History（1.01–1.09 + 官方 roadmap），29→30 篇 |
| 2 | `grainrotwiki/content/guides/multiplayer-matchmaking-guide.md` | ✏️ P0 校准 | 全文重写：核心前提「无 public server browser」经官方源证伪 |
| 3 | `grainrotwiki/content/guides/player-count-guide.md` | ✏️ P0 校准 | 表格行 28 + 正文 59 行 + FAQ 101 行三处「no public matchmaking」 |
| 4 | `grainrotwiki/content/guides/release-date-faq.md` | ✏️ P0 校准 | FAQ「Is there matchmaking?」由 Unconfirmed 改为确认 |
| 5 | `grainrotwiki/content/guides/performance-lag-fix-guide.md` | ✏️ 关联描述 | related 链接描述「invite-only co-op」→「public servers, invites」 |
| 6 | `grainrotwiki/content/home-content.md` | ✏️ 导航 | Quick Navigation 表新增 patch-notes-guide 一行 |
| 7 | `grainrotwiki/components/Footer.tsx:24` | ✏️ P0 修复 | IP 归属 `Vaulted Sky Games` → `Beck & Branch Games and Neem Interactive` |
| 8 | `grainrotwiki/app/terms/page.tsx:26` | ✏️ P0 修复 | 同上 |

## 二、Residue 扫描（grainrotwiki）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中（全站 `content/ app/ components/ lib/`） |
| 中文标记 `待确认` / CJK 泄漏 | ✅ 0 命中 |
| 模板占位符 `lorem ipsum` / `TODO:` / `FIXME` | ✅ 0 命中 |
| 跨站污染（其余 40 站游戏名 / 工作室名 / 域名） | ✅ 0 命中（含 `EX-Mod`、`Vaulted Sky`、`tinyBuild`、`Proxima`、`Tasty Stewdios`、`Mingle Games`、`Soulash`、`House House`、`Panic` 定向扫描） |
| 内链完整性（全 30 篇） | ✅ 0 悬空（`/guides/*` + frontmatter `related:` 与 `content/guides/*.md` 实际集合比对） |
| frontmatter 三层 sources 完整性 | ✅ 新增/修改篇均含 Official / Community / Editorial 三层 |
| 英文标记规范（`[待确认]`→`[Unconfirmed]`） | ✅ 新篇 0 处中文标记；calibrated 篇 5 处均为英文 `[Unconfirmed]` |

## 三、P0 补丁溯源核验（本轮最大结论 — 触发条件已满足）

**官方 Steam 公告 hub 本轮首次可直连**（`store.steampowered.com/news/app/4450620` 返回 200，前几轮 ECONNREFUSED），内嵌完整 `announcement_body` JSON，**Patch 1.01–1.09 全文 + 精确日期全部取到**：

| 版本 | 官方发布日期 | 核验结论 |
|------|-------------|---------|
| 1.01 | 2026-08-08 | ✅ |
| 1.02 | 2026-08-09 | ✅ |
| 1.03 | 2026-08-09 | ✅ |
| 1.04 | 2026-08-10 | ✅ |
| 1.05 | 2026-08-10 | ✅ |
| 1.06 | 2026-08-11 | ✅ |
| 1.07 | 2026-08-12 | ✅ **「Public servers are now available to join via an in-game browser.」** |
| 1.08 | 2026-08-26 | ✅ Boing + 7 constructs + small-vessel carry + grief protection |
| 1.09 | 2026-08-28 | ✅ compass 重校准 / Vibe Modulator / 百分比休息回复 |

**P0 问题① 结论：v1.07 确实实装了 public server browser —— player.gg 的归因是正确的，此前判定其为「归因错误」系误判。**
真相是 **vgspoilers 的 1.07 条目不完整**（只列 host 设置/密码服务器/帽子，漏了 server browser 这一行），9/6–9/9 四轮 SKIP 把这个「vgspoilers 漏项」误读成了「player.gg 归因冲突」。官方源一锤定音。
→ 由此站内 `multiplayer-matchmaking-guide`（9/3 版，正文反复声明「no public matchmaking or server browser has shipped」）**确为事实错误**，本轮已全文校准（变更 #2）；连带 3 处衍生引用一并改齐（变更 #3/#4/#5）。

**P0 问题② 结论：v1.08 = 2026-08-26、v1.09 = 2026-08-28，完整 changelog 已取全**（写入新篇）。
**P0 问题③（全站 `version: "1.0"` 版本戳）**：判定为**不需要**后移 —— 站内 `version` 字段语义是「攻略内容版本」而非「游戏版本」，其余 29 篇一致，改动会造成语义漂移。建议交主 Agent 复核该字段定义（见风险项）。

**独立来源计数**：官方 hub（主）+ player.gg 镜像（逐版本内容一致，1.07/1.08/1.09 完全吻合）+ vgspoilers（1.01–1.07 日期一致）+ VaporLens（launch 窗评测趋势）→ **≥3 独立通道**，满足「≥3 条独立来源提及」。9/6–9/9 的 4 连 SKIP 触发条件**已解除**。

## 四、内容编造检查（新增 + 修改篇逐条对官方源）

| 检查项 | 结果 |
|--------|:--:|
| 补丁编号 / 日期 | ✅ 本篇 9 个版本号 + 9 个日期全部逐字对齐官方 announcement `posttime`（Unix ts 已换算核对） |
| 补丁条目内容 | ✅ 1.07/1.08/1.09 明细逐条取自官方 body 原文（含 7 constructs 的 3c/1r/1e/2l 配比、cosmetic spawn 2→1、Wailer 新近战） |
| 开发商 / 发行商 | ✅ Beck & Branch Games / Neem Interactive —— 与 Steam 商店页、`lib/schema.ts:67,71` JSON-LD 一致 |
| 玩家引语 | ✅ 3 条引语均为 9/3 版已核验过的 Steam Community launch thread 原帖，本轮保留原链接与原文，未新增/未改写 |
| Roadmap（9 月 Deep Layers / 10 月 Halloween / 三层 Outpost） | ✅ 逐条取自 2026-08-12 官方「What's Next for GRAIN ROT」公告原文，且明确标注「是计划不是日期」 |
| 未验证数字 | ✅ 0 处；唯一不确定项（server browser 菜单标签、Tab+Shift 键位）均标 `[Unconfirmed]` |
| 虚构 Boss / 武器 / 评分 / 销量 | ✅ 0 处 |
| 「尚无 1.10 / 9 月补丁」判定 | ✅ 已核验：官方 hub 最新 event `rtime32` = 2026-08-28；`Patch 1.1x` 正则 0 命中；外部检索亦无 1.10 |

## 五、站级元数据修复（qa-deep-partB §4.1）

| 位置 | 修复前 | 修复后 | 线上验证 |
|------|--------|--------|---------|
| `components/Footer.tsx:24` | `trademark of Vaulted Sky Games` | `trademark of Beck & Branch Games and Neem Interactive` | 待部署后 curl（见 §七） |
| `app/terms/page.tsx:26` | `respective owners (Vaulted Sky Games)` | `respective owners (Grain Rot is developed by Beck & Branch Games and published by Neem Interactive)` | 待部署后 curl（见 §七） |

采用方案 **(a) 替换为真实归属**，理由：与本站 `lib/schema.ts:67/71` JSON-LD 已有的正确值（`author: Beck & Branch Games` / `publisher: Neem Interactive`）保持一致，消除站内自相矛盾；同时保留「respective owners」的法律措辞。构建产物已确认 `&` 正常渲染（非 `&amp;` 字面量）。

## 六、构建证据

```
✓ Compiled successfully in 5.2s
✓ Finished TypeScript in 1557ms
✓ Generating static pages using 7 workers (43/43)
Route: ● /guides/patch-notes-guide  ● /guides/multiplayer-matchmaking-guide  ● [+28 more paths]
```
- 攻略数 29 → 30，静态页 43（+1）
- 词数：patch-notes-guide 1501 词；multiplayer-matchmaking-guide 1547 词（校准篇，原文件同量级）
- 内链 0 悬空

## 七、线上验证（内容级，非仅首页 200）

部署命令：`./deploy-wiki-site.sh grainrotwiki` → 新部署 `https://grainrotwiki-akb3lj11x-zhaoq0103s-projects.vercel.app`

**alias 校验（`vercel inspect`）**：
```
> Fetched deployment "grainrotwiki-akb3lj11x-zhaoq0103s-projects.vercel.app" in zhaoq0103s-projects [516ms]
  id      dpl_5FcUg7dueYdLEi55XgqmaEL1xMdh
  target  production
  status  ● Ready
  created Fri Sep 11 2026 05:09:44 GMT+0800 [1m ago]
  Aliases ╶ https://grainrotwiki.vercel.app   ← 生产 alias 指向本次新部署 ✅
```

**逐页内容级 curl 验证**（`https://grainrotwiki.vercel.app`）：

| # | 路径 | 检查内容 | 结果 |
|---|------|---------|:--:|
| 1 | `/guides/patch-notes-guide` | **旧部署不存在的全新路由**；命中 `Public servers are now available` ×2、`Boing` ×4、`Deep Layers Update` ×6、`Halloween Update` ×4、`August 28, 2026` ×3 | ✅ 200 + 新内容 |
| 2 | `/` 页脚 | `Grain Rot is a trademark of Beck & Branch Games and Neem Interactive.`；`Vaulted Sky` 计数 **0** | ✅ |
| 3 | `/terms` 正文 §3 | `respective owners (Grain Rot is developed by Beck & Branch Games and published by Neem Interactive)`；`Vaulted Sky` 计数 **0** | ✅ |
| 4 | `/guides/multiplayer-matchmaking-guide` | 命中 `Grain Rot does have public servers` ×1、`Patch 1.07` ×10；旧错误句 `no public matchmaking or server browser has shipped` 计数 **0** | ✅ |
| 5 | `/guides/player-count-guide` | 表格行 `Public matchmaking ✅ Confirmed — public server browser added in Patch 1.07 (Aug 12, 2026)` | ✅ |

5/5 页面全部返回 200 且**新文本确实渲染** → 通过。构建零错误 + alias 指向新部署 + 内容级验证三项齐全，符合 04 Profile 部署规则。

## 证据文件
- 采集与选题记录: `keyword-results/grainrotwiki-expand-9-11.md`
- 官方补丁源: `https://store.steampowered.com/news/app/4450620`（2026-09-11 直读）

## Coordinator 摘要

```
QA 结果: ✅ PASS — grainrotwiki 本轮 1 新增 + 5 校准 + 2 站级元数据修复。

【最大结论】4 连 SKIP 的根因已查清并解除：官方 Steam 公告 hub 本轮首次
可直连（前几轮 ECONNREFUSED），取到 Patch 1.01–1.09 全文与精确日期。
P0① v1.07 确实实装了 public server browser（官方原文可引）→ 此前判定
player.gg「归因错误」系误判，实为 vgspoilers 的 1.07 条目漏项。站内
multiplayer-matchmaking-guide(9/3) 前提被证伪，已全文校准 + 3 处衍生引用
改齐。P0② v1.08=8/26、v1.09=8/28，完整 changelog 已取全。P0③ version:"1.0"
判定不需后移（语义为攻略内容版本），交主 Agent 复核。
独立来源 ≥3（官方 hub + player.gg + vgspoilers + VaporLens）→ 触发条件满足。

新增 patch-notes-guide（1501 词，三层 sources，9 版本逐条对官方源核验、
0 编造、0 悬空内链）。站级 IP 归属 Vaulted Sky Games → Beck & Branch Games /
Neem Interactive（Footer + Terms），与 lib/schema.ts JSON-LD 对齐。

Residue 全清（Hugo shortcode / CJK / 跨站 / 模板占位全 0）。构建 43 页零错误。
→ 批准部署。

【部署 + 线上验证】✅ 已部署，alias grainrotwiki.vercel.app → dpl_5FcUg7dueYdLEi55XgqmaEL1xMdh
（● Ready）。5/5 页面内容级 curl 验证通过：新路由 /guides/patch-notes-guide
命中全部新文本；页脚 + /terms 的 Beck & Branch Games / Neem Interactive 已渲染，
Vaulted Sky 计数 0；matchmaking 旧错误句已消失。
```
