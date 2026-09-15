# QA Report — EXPAND-2026-09-16-themound（quick 模式）

> 站点：`themoundwiki` | 范围：本轮新增 1 篇 + P0 修正 4 个文件 + 导航 1 处
> 执行：QA 审核员（05-岗位卡 / 06-Profile）| 日期：2026-09-16
> **结论：✅ PASS（0 🔴 blocking / 3 🟡 warning）**

---

## 1. Residue Scan

| 检查项 | 命令/方法 | 结果 |
|------|------|:--:|
| Hugo shortcodes / EX-Mod 跨站模板残留 | `grep -n "{{<\|{{%\|EX-Mod\|ex-mod"` 于 6 个本轮文件 | ✅ Clean |
| 他站游戏名（42 站清单） | `grep -nEi "SpiritVale\|Witchspire\|mistfall\|aincrad\|Sephiria\|…"` 于新增页 + 重写页 | ✅ Clean |
| 他站域名 / 错误商标 | `grep -nEi "dwarfdelve\|grainrotwiki\|spiritvalewiki\|sephiriawiki"` | ✅ Clean |
| 中文标记泄漏（`[待确认]` 等） | Python `[一-鿿]` 扫描 5 个本轮文件 | ✅ Clean（0 命中） |
| 站级组件（`app/page.tsx` / `app/faq/page.tsx`）模板残留 | 人工 + grep | ✅ Clean |
| 内链完整性（新增页 `/guides/*`） | 7 个内链 slug 全部存在 | ✅ 7/7 OK |
| frontmatter `related` slug 存在性 | 6 个 slug | ✅ 6/6 OK |

---

## 2. Content Quality Sampling（抽样率 100% — 本轮仅 1 篇新增 + 4 处修正，全检）

| # | 文件 | 检查 | 结果 |
|---|------|------|:--:|
| 1 | `content/guides/ox-cart-guide.md`（新） | 编造检查：5 条 Steam 引文逐条回查 API | ✅ 5/5 命中，附 steamid permalink |
| 2 | 同上 | 官方引文逐字锚定（1.04 / 1.03 / pre-launch） | ✅ 3/3 逐字吻合 |
| 3 | 同上 | 编辑层引文（ChapterCheats / NoobFeed / OutputLag） | ✅ HTTP 200 直读取得 |
| 4 | 同上 | 数字标注来源 | ✅ 「74/45/1,185/36.5%」均由 reviews API 实测复算 |
| 5 | 同上 | 单一来源声明 | ✅ 5 处 `[Unconfirmed]` |
| 6 | 同上 | 地名对照 `maps-locations-guide` 区域词表 | ✅ 仅用官方/Press 已有的 Tempestad / Portal Mission，**未引入任何新地名** |
| 7 | `content/guides/characters-classes.md` | 不可追溯引文清除 | ✅ 已换为 2 条可追溯引文 |
| 8 | `content/guides/characters-classes.md` | 角色独有 Trait 残留 | ✅ 全站 0 命中（`Iron Will` 等 4 个 trait 名） |
| 9 | `content/guides/contracts-guide.md` | 牛车表述 vs 官方 1.04 原文 | ✅ 改为逐字锚定 |
| 10 | `app/faq/page.tsx` | "2 additional characters" 残留 | ✅ 已删 |
| 11 | `content/guides/isolation-guide.md` | 双向 Scope note | ✅ 已加 |

---

## 3. 内部一致性（quick：本轮变更文件交叉检查）

| 主题 | 各页表述 | 一致？ |
|------|------|:--:|
| 角色是否 cosmetic | `app/page.tsx:18` / `app/faq/page.tsx:16` / `faq-content.md` / `characters-classes.md` / `weapons-guide.md` | ✅ 全部一致 |
| 牛车定位 | `contracts-guide.md`（契约配装）/ `ox-cart-guide.md`（行为控制）/ `isolation-guide.md`（sanity 争议）三页分工 + Scope note | ✅ 无自噬 |
| Command Wheel 2.0 措辞 | `updates-patch-notes.md:50` vs `ox-cart-guide.md` vs `contracts-guide.md:193` | ✅ 三处一致且同为官方逐字 |
| Deluxe 内容物 | `price-platforms.md` vs `app/faq/page.tsx` vs `characters-classes.md` | ✅ 均已去掉未验证数量 |
| 牛车靠近是否降 sanity | `isolation-guide.md`（引 OutputLag "降 sanity"）vs `ox-cart-guide.md`（标注有玩家反证） | ⚠️ 见 4.1 |

---

## 4. 发现清单

| # | 严重度 | 文件 | 类型 | 描述 | 建议 |
|---|:--:|------|------|------|------|
| 1 | 🟡 | `content/guides/isolation-guide.md:79` | 一致性 | 「靠近牛车降 Insanity」只被编辑层支持，实测有 1 条 10-vote 玩家评测明确反证（*"Staying near the cart seems to do nothing for sanity."*）。本轮**未擅改**该页既有结论，改为在 `ox-cart-guide.md` 中如实并列双方并标 `[Unconfirmed]`，并加 Scope note 指向该争议 | 建议下次 fact-sweep 统一：要么给该断言降级，要么把反证一并写入 isolation-guide |
| 2 | 🟡 | `content/guides/extraction-guide.md:21-59` | 无源细节（既有遗留，非本轮引入） | 「Extraction Zones」四型表 + 精确提取秒数 + Compass 三模式，在本轮取到的官方公告与全部编辑来源中**均无佐证**；且该页提取流程**完全未提"送回牛车"**，而实测 4 条独立评测描述 in-game 教学要求送回牛车 | 建议立 fact-sweep 专项核验；**不在本轮擅改**（超本轮授权范围） |
| 3 | 🟡 | `content/guides/characters-classes.md:107` | 无源细节（重写遗漏） | "Expedition Rank — Increases with successful extractions, unlocking new loadout slots" 无来源，且与同页「角色无成长属性」的基调有张力。测试了该页其余部分已重写，此行属遗漏旧句 | 建议删除或标 `[Unconfirmed]` |

**无 🔴 阻断项。**

---

## 5. 基建检查

| 项 | 结果 |
|------|:--:|
| `pnpm install`（**未用 npm**） | ✅ ok |
| `pnpm build` exit code | ✅ **0**，53/53 静态页生成（新增 1 页） |
| `.next/server/app/guides/ox-cart-guide.html` 产物级验证 | ✅ 71,933 B；`<table>` 渲染正常；**表格分隔行垃圾 `<td>---</td>` = 0 命中**（9/12 组件缺陷未复发） |
| 部署（全局 `vercel` 58.9.4，**未用 npx vercel**） | ✅ `themoundwiki-ngh3u31be-…vercel.app` |
| 生产 alias 指向本次新部署（`vercel inspect`） | ✅ created 43s ago / status **Ready** |
| GA4 / GSC / ads.txt | ✅ 本轮未触碰，`/robots.txt` 200、`/ads.txt` 200 |

### 5.1 线上验证（`--resolve 64.29.17.131`，真实 IP；系统 DNS 返回 Meta 污染 IP `157.240.7.5` 已弃用）

| 路径 | HTTP | 字节 |
|------|:--:|:--:|
| `/guides/ox-cart-guide`（新） | **200** | **72,266** |
| `/guides/contracts-guide` | 200 | 83,976 |
| `/guides/characters-classes` | 200 | 63,522 |
| `/faq` | 200 | 41,518 |
| `/guides/isolation-guide` | 200 | 69,903 |
| `/guides` | 200 | 122,614 |
| `/` | 200 | 46,234 |
| `/sitemap.xml` | 200 | 8,728（48 URL，含 `ox-cart-guide`） |

**无 `HTTP=000` / `size=0` 记录为 PASS 的情形。**

---

## 6. 给 Coordinator 的结构化摘要

```
QA 结果: ✅ PASS | 🔴 FAIL (0) | 🟡 WARN (3) | 新增 1 篇 / 修正 4 文件
🔴 无
🟡 [themoundwiki] [isolation-guide.md:79] 牛车降 sanity 有玩家反证 — 建议下次 fact-sweep 统一口径
🟡 [themoundwiki] [extraction-guide.md:21-59] 提取区四型表 + Compass 三模式无源 — 建议立专项
🟡 [themoundwiki] [characters-classes.md:107] "unlocking new loadout slots" 无源 — 建议删或标 Unconfirmed
可提交 ✅（3 项均为 🟡，不阻断）
```
