# QA 报告 — QA-EXPAND-SEPHIRIAWIKI-2026-10-25

- 日期: 2026-10-25
- 模式: quick（残留扫描 + 编造检查 + 产物级验证 + 线上复验）
- 审核员: QA 审核员（岗位卡 `docs/agents/05-岗位卡-QA审核员.md` + Profile `docs/agents/06-Profile-QA审核员.md`）
- 范围: sephiriawiki 本轮 **1 篇新增指南 + 3 篇反向内链**
- 结论: ✅ **PASS**（已部署，线上 HTTP 200 + 双 marker 命中）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `sephiriawiki/content/guides/stats-explained-guide.md` | 🆕 新增 | Sephiria Stats Explained — **1,448 词**（房规 1,000–1,450 / 硬界 800–1,500） |
| 2 | `sephiriawiki/content/guides/artifacts-guide.md` | ✏️ 反向内链 | `related` 追加 `- stats-explained-guide`（仅此一行，未改正文） |
| 3 | `sephiriawiki/content/guides/talents-guide.md` | ✏️ 反向内链 | 同上 |
| 4 | `sephiriawiki/content/guides/tablets-guide.md` | ✏️ 反向内链 | 同上 |

未触碰共享文件（`expand-daily.json` / `qa-report.md` / `delivery-*.json` / `build-history.json` / `STATS-游戏站点统计.md` / `CANDIDATE-POOL.md`），未 git add/commit/push，未动其他站点。

---

## 二、选题依据（两条路径）

**路径 1（抱怨驱动）**：Reddit r/sephiria 近期抱怨/提问集中在**「面板有名字、游戏不解释」**这一类，且互相独立：

| 问题 | 独立来源数 | 代表帖 |
|------|:--:|--------|
| Defense Penetration 是什么 | 1 帖详答 + 被多帖引用 | `1w3zsq4` |
| Luck 到底管什么 | 1 帖两答 | `1w4ylxw` |
| Inventory Slot Level +3 是什么 | 1 帖（原帖主回帖确认） | `1w3hhv2` |
| 「abilities consuming MP」范围 | 1 帖实测 | `1w1lpeg` |
| MP Steal 是否吃神器伤害 | 1 帖 | `1vz9c9r` |
| 燃烧能否暴击 / 真实伤害 | 1 帖多答 | `1we3sti` |
| 描述与实测不符 | 1 帖实测 | `1wkg2t7` |

**路径 2（系统盘点）**：站点 39 篇中**没有任何一篇解释属性面板**；`artifacts-guide` 只讲词条、`talents-guide` 只讲永久加成、`builds-guide` 只给结论，均无「Defense Penetration / True Damage / Luck / Slot Level」定义。官方侧 0.11.5 引入 Comprehensive Training Grounds、1.0.31 加教程、1.0.33 修 effect text，三条公告共同指向「属性语义是当前活跃问题」。

**判定**：高频（7 个独立问题帖）+ 可撑满一篇 + 站内确实空白 → 通过。与 10-24 已产出的 `stuck-soft-lock-recovery-guide`（卡死恢复）主题零重叠。

---

## 三、Residue 扫描（新篇 + 3 篇改动篇）

| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名（The Mound / Witchspire / Mistfall / Aincrad / SpiritVale / Grain Rot / Tears of Metal / Dreadmoor 等） | ✅ 0 命中 |
| 他站域名（`themoundwiki` / `spiritvalewiki` / `mistfallhunterwiki` 等） | ✅ 0 命中 |
| 模板句 `cooperative PvE extraction horror` / `SpiritVale Studio` / `published by NACON` | ✅ 0 命中 |
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中 |
| `lorem ipsum` / `TODO:` / `FIXME` / `REPLACE_ME` / `TBD` | ✅ 0 命中 |
| CJK 泄漏（`[㐀-鿿]`） | ✅ 新篇 0 命中 |
| `[Unconfirmed]` 英文标记规范 | ✅ 6 处全英文，0 处中文标记 |
| Markdown 表格分隔符渲染缺陷（`<td>-------`） | ✅ 构建后 HTML 0 命中 |

---

## 四、编造检查（逐条对官方原文）

**方法**：用 `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2436940&count=60&maxlength=0` 拉回官方公告全文（缓存 `/tmp/sephiria_news.json`，30 条 / `/tmp/full_2436940.json`），逐条 grep，不依赖第三方聚合。

| 篇内断言 | 官方原文核验 | 出处 |
|---|---|---|
| 1.0.33 为最新版本（2026-09-11），含 `Updated the effect text to match the actual effect` | ✅ 命中 | 1.0.33 Update |
| 1.0.31 加入 Comprehensive Training Grounds 教程 | ✅ 命中 | 1.0.31 Update |
| Midday Whetstone `True Damage +1/1/2/2/2` | ✅ 命中 | 1.0.31 Update |
| 0.11.5 引入 Comprehensive Training Grounds（`test unlocked weapons and items`） | ✅ 命中（5 处提及） | 0.11.5 Update: Training Grounds |
| Ringless Staff `Critical Chance stat is below 30% (25% → 20%)` | ✅ 命中 | 0.11.5 Update: Training Grounds |
| 旧名 `Special Attack Cost Reduction` → 新名 `Special Attack MP Cost Reduction` | ✅ 两词同时命中 | 1.0 Update |

**社区断言处理**（全部在正文标注来源与置信度，未升格为事实）：

| 断言 | 处理 |
|---|---|
| 40 penetration 把 50 defense 变 30、defense 非线性 | 直接引用 + 两点推论标 **[Unconfirmed]**（单人实测） |
| True Damage 逐次结算、不吃防御 | 引用 + 标 **[Unconfirmed]** |
| 燃烧可暴击 / 可触发 True Damage | 多回复确认，正文写「multiple players confirm」 |
| Luck 提升高稀有度掉落、悬停看概率 | 两回复一致，作社区结论 |
| Luck 增加 luck shrine 出现率 | 单回复，标 **[Unconfirmed]** |
| Cintamani Stone 触发后所在格 +3 | 原帖主回帖确认（二次确认） |
| +3 是否跨局保留 | 无人测试，标 **[Unconfirmed]** |
| 6/6 Shieldmate 使 MP 消耗触发失效 | 引用实测帖 |
| MP Steal 不含 planet/companion | 原回复自带 `I believe`，标 **[Unconfirmed]** |
| Plasma Helmet 用 Fire+Lightning 总和 | 引用实测帖（`1wkg2t7`） |

**专有名词独立核验**：

| 名词 | 官方命中 | 处理 |
|---|:--:|---|
| Comprehensive Training Grounds / Midday Whetstone / Ringless Staff / Critical Chance / True Damage | ✅ 有 | 可作事实陈述 |
| Cintamani Stone | 0 | 仅出现在社区引语与「物品名常被误读为 Cinnamon」的说明中，来源为原帖 |
| Icebound Tejas | 0 | 仅在引用实测帖的句子内出现 |
| Plasma Helmet | 0 | 同上，引用玩家实测 |
| 6/6 Shieldmate | 0 | 同上，引用玩家实测 |

→ **0 编造**：无虚构 Boss / NPC / 物品 / 机制名；无编造评分、销量、日期。

---

## 五、Lint 与构建

```
node scripts/lint-guides.mjs sephiriawiki --changed
🔍 lint sephiriawiki — 4 篇（本次改动）
⚠️ artifacts-guide.md [sources-tier] sources 里没有 Official 级来源
⚠️ talents-guide.md [sources-tier] sources 里没有 Official 级来源
结果：0 ERROR / 2 WARN        (exit 0)
```

- 2 条 WARN 为**改动前既有**（两篇老指南本身无 Official 级 sources），本轮只追加了一行 related，未引入新告警。
- 新篇 `related` 为块状数组（6 项，全部存在）；`sources` 10 条（3 Official + 7 Community），满足 ≥2 源 / ≥1 Official。
- `pnpm install`（非 npm）→ `pnpm build` **EXIT=0**，56/56 静态页生成。

---

## 六、产物级验证（构建产物，非源码）

| 检查 | 结果 |
|---|---|
| 新页 `<title>` 正确渲染 | ✅ `Sephiria Stats Explained — What Defense Penetration, Luck and 'Inventory Slot Level' Actually Do · Sephiria Wiki` |
| 表格分隔符垃圾 `<td>-------` | ✅ 0 |
| 「Defense Penetration」出现 | ✅ 34 次 |
| 「Cintamani」出现 | ✅ 10 次 |
| 反向链接渲染（`artifacts-guide.html` 内出现新 slug） | ✅ 3 次 |
| 新页内链指向 `artifacts-guide` | ✅ 4 次 |
| `sitemap.xml` 含新 slug | ✅ 1 次 |

---

## 七、部署与线上复验

| 步骤 | 结果 |
|---|---|
| `./deploy-wiki-site.sh sephiriawiki` 第 1 次 | ❌ `Not authorized`（CLI 会话瞬时问题；`vercel whoami` 正常） |
| 手动重试（规则允许 1 次） | ✅ `dpl_GtaDGpiqpq8RNR5ZraoAQPnfidCz` READY |
| `verify-guide-live.sh sephiriawiki stats-explained-guide "Defense Penetration" "Cintamani Stone"` | ✅ **HTTP 200**，75,347 bytes，marker 命中 **7 / 4**，RESULT **PASS** |
| 线上 URL | https://sephiriawiki.vercel.app/guides/stats-explained-guide |

---

## 八、遗留 🟡

1. **Steam 评测 API 不可用**：`store.steampowered.com/appreviews/2436940?json=1` 全参数组合均 302；`steamcommunity.com` 本机 DNS 投毒（curl 000，`--resolve` 多 IP 均失败）。→ 本轮社区证据**全部来自 Reddit**（经 `api.pullpush.io` 200 通路），未伪造任何 Steam 引语。后续轮次可复用 pullpush，勿再白试 appreviews。
2. **Luck / 穿透仍无官方公式**：篇内已用 `[Unconfirmed]` 标注，若后续官方 patch 给出公式应回头升级该节。
3. **Cintamani Stone 等 4 个名词无官方命中**：均只在社区引语语境出现，未当作官方名称陈述。

---

## 九、结论

**PASS** — 选题有 7 个独立抱怨帖支撑且站内确无覆盖；1,448 词在房规区间；官方断言 6/6 命中原文；社区断言全部标注来源与置信度；lint 0 ERROR；build EXIT=0；产物级 7 项全通过；线上 HTTP 200 + 双 marker 命中。
