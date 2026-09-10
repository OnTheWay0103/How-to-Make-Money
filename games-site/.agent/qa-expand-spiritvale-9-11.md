# QA 报告 — QA-EXPAND-SPIRITVALE-9/11

- 日期: 2026-09-11
- 模式: quick（本轮**无新增攻略**；1 处线上 🔴 404 修复）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06）
- 范围: 本轮 spiritvalewiki 产出评审（SKIP 判定复核 + `app/page.tsx` 唯一改动）
- 变更文件: `spiritvalewiki/app/page.tsx`（FEATURED_GUIDES 第 2 项：slug `tier-list` → `class-tier-list`，title/description/category/updated 同步对齐）
- 结论: ✅ **PASS — 可部署**（已部署并 curl 内容级验证，见 keyword-results/spiritvalewiki-expand-9-11.md）

## 检查项逐项结果

- a) **残留扫描**：✅
  - `grep -niE "witchspire|mistfallhunter|aincrad|themound|heymound|sephiria|grainrot|tearsofmetal|\{\{<|hugo|\[待确认\]" spiritvalewiki/app/page.tsx` = **0 命中**
  - `grep -rn "guides/tier-list" spiritvalewiki/{content,app,components,lib}` = **0 命中**（旧 slug 已无任何引用）
  - CJK 扫描：改动文件无中日韩字符（`[待确认]` 亦为 0；若需标注只能用英文 `[Unconfirmed]`）✅
- b) **编造检查（claims → source 表）**：本**未新增任何正文内容**，不存在新断言。唯一改动的字段全部取自站内既有文件的真实 frontmatter，非杜撰：
  | 改动字段 | 新值 | 来源 |
  |---|---|---|
  | `slug` | `class-tier-list` | 实际存在的文件 `content/guides/class-tier-list.md` |
  | `title` | "Class Tier List — Best Classes & Advanced Jobs" | 该文件 frontmatter `title: "SpiritVale Class Tier List — PvE & PvP Rankings (EA 2026)"` |
  | `description` | "Community consensus class rankings for SpiritVale Early Access — best picks for farming, bossing, PvP, and solo play." | 该文件 frontmatter `description` |
  | `category` / `updated` | `Classes` / `2026-08-09` | 该文件 frontmatter `updated: "2026-08-09"`，category 与其 Classes 归类一致 |
  - **未编造玩家声音/数值** ✅；**未写 0.31.0「外观/商店/Sanctum 重建」为可游玩新地图** ✅（本轮未触碰 0.31.0 任何文案）
- c) **SKIP 判定复核（QA 侧独立确认）**：本轮不新增攻略的判定成立。
  1. **0.31.0 触发条件仍未达标**：官方 Steam 公告最新仍为 0.31.0（8/25）；vgspoilers 止于 0.30.14（8/17）；MassivelyOP 止于 8/17。定向检索 "0.31.0 Dark Fortress" 仍只回**官方单一来源** → <2 独立非官方来源，不写深度指南正确（且 0.31.0 官方内容已被 `updates-patch-notes` 收录，写=自噬）。
  2. **最接近命中的候选「交易锁 / trade lock 申诉」被正确否决**：证据实质只有 Steam 评测一个平台（多语区为同一批文本镜像），ingamenews/MassivelyOP 描述的是**全服关闭交易**（另一回事）；且与 9/9 刚产出的 `account-ban-appeal-guide`（同属执法簇、同一 support-ticket 申诉通道、同一 RMT 误判与避坑清单）高度重合 → 触发自噬红线，否决正确，并已记录下次触发条件（第二独立平台来源或官方交易限制政策文档）。
  3. 其余候选（Weaver、满级无事做、摆摊盈利、隐藏 Boss、Steam Deck 口径冲突、Dragon Knight 等官方预告）均落入「已覆盖 / 编辑来源非反馈 / 单源 / 官方计划无机制」→ 不成立。**QA 认可 SKIP。**
- d) **内部一致性 / 链接完整性**：✅ 全站 `/guides/*` 引用集合 vs `content/guides/*.md` 实际文件集合 `comm -23` = **0 BROKEN**（改动后复跑）。
- e) **诚实标注**：✅ 未新增 `[Unconfirmed]` 需求（无新断言）；未把官方计划写成实装。

## 线上验证（内容级，QA 侧复核）

```
$ vercel inspect https://spiritvalewiki.vercel.app
  id      dpl_3gxpCGhRjABfL1uzyogxR9vjW7Gg
  target  production        status  ● Ready
  created Fri Sep 11 2026 05:10:46 GMT+0800
  Aliases ╶ https://spiritvalewiki.vercel.app   ← 生产 alias 指向本次部署

$ curl -s -L https://spiritvalewiki.vercel.app/ | grep -c '/guides/class-tier-list'  → 2
$ curl -s -L https://spiritvalewiki.vercel.app/ | grep -c '/guides/tier-list'       → 0
/guides/class-tier-list  → 200
/guides/tier-list        → 404   （已无任何页面引用）
/tier-list               → 200   （顶层武器 Tier List 路由，未被破坏）
```

**改前实地验证（未照搬任务假设）**：`/tier-list` 顶层路由（`app/tier-list/page.tsx`）真实存在且 200，并同时出现在 `app/sitemap.ts` 与 `components/Header.tsx:9` → **Header 无需改动**，本报告确认未改 Header。

## 证据文件
- 采集、候选否决与修复细节: `keyword-results/spiritvalewiki-expand-9-11.md`

## Coordinator 摘要
```
QA 结果: ✅ PASS — 本轮 SKIP（无满足四条件的新选题），但完成 P0 指定的线上 🔴 404 修复并已部署。
修复: app/page.tsx FEATURED_GUIDES 的 slug 'tier-list'(404) → 'class-tier-list'(200)；
因只改 slug 会让卡片继续宣称「Weapon Tier List」却落到职业 Tier List 页（同类渲染级事实不符），
故 title/description/category/updated 一并对齐 class-tier-list.md 的真实 frontmatter。改动仅 1 处、无新增文件、无自噬。
Header 未改：实地 curl 确认顶层 /tier-list 路由 200 且已在 sitemap/Header 中。
线上: home 命中 /guides/class-tier-list ×2、/guides/tier-list ×0；三 URL 状态 200/404/200；alias 已指向 dpl_3gxpCGhRjABfL1uzyogxR9vjW7Gg。
残留/编造/CJK/链接完整性: 0 / 无新断言 / 无 / 0 BROKEN。
遗留: 等级上限口径矛盾（FAQ Base 99 vs 三方 100+）、交易锁为下一待触发选题 → 交主 Agent。
```
