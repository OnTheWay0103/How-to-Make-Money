# QA 报告 — QA-EXPAND-THEMOUNDWIKI-2026-10-25

- 日期: 2026-10-25
- 模式: quick（残留扫描 + 编造检查 + 产物级验证 + 线上复验）
- 审核员: QA 审核员（岗位卡 `docs/agents/05-岗位卡-QA审核员.md` + Profile `docs/agents/06-Profile-QA审核员.md`）
- 范围: themoundwiki 本轮 **1 篇新增指南 + 3 篇反向内链**
- 结论: ✅ **PASS**（已部署，线上 HTTP 200 + 双 marker 命中）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `themoundwiki/content/guides/lost-survivors-rescue-guide.md` | 🆕 新增 | The Mound Lost Survivors Not Showing? — **1,237 词**（房规 1,000–1,450 / 硬界 800–1,500） |
| 2 | `themoundwiki/content/guides/characters-classes.md` | ✏️ 反向内链 | `related` 追加 `- lost-survivors-rescue-guide`（仅此一行） |
| 3 | `themoundwiki/content/guides/patron-saints-guide.md` | ✏️ 反向内链 | 同上 |
| 4 | `themoundwiki/content/guides/extraction-guide.md` | ✏️ 反向内链 | 同上 |

未触碰共享文件，未 git add/commit/push，未动其他站点。

---

## 二、选题依据（两条路径）

**路径 1（抱怨驱动）**：r/TheMoundOmenofCthulhu 上「幸存者」是**唯一有连续独立提问帖、且答案互相矛盾**的系统：

| 独立帖 | 问题 | 日期 | ID |
|---|---|---|---|
| 1 | 救回的幸存者加入名册/船员 | 2026-07-16 | `1uyb18t` |
| 2 | 找不到第二个幸存者（含 Slave Finder） | 2026-07-30 | `1vagweh` |
| 3 | 一共有多少幸存者（遇到 7 个 / 2 个可玩） | 2026-08-03 | `1ve0kxt` |
| 4 | 我背到船上的 NPC 去哪了 | 2026-08-11 | `1vlct3a` |
| 5 | 一共有多少 lost survivors（「已经很久没有图标」） | 2026-08-29 | `1w19ecv` |
| 6 | 为什么我找不到幸存者（图标规则） | 2026-09-03 | `1w5wxqi` |
| 7 | Steam 社区 1.04 更新跟帖： Priest 背到出口两次都不让救 | 2026-09-01 | `eventcomments/586184554739645190`（索引） |

→ 7 个独立来源、跨 Reddit + Steam Community 两个平台，远超 ≥3 的门槛。

**路径 2（系统盘点）**：站内 57 篇里没有任何一篇讲幸存者系统；`characters-classes.md` 只有一句「救幸存者解锁角色」，`patron-saints-guide.md` 提到 Woodworker 但未讲救援流程，`extraction-guide.md` 讲搬运货物但未讲搬人。**确属未覆盖**。

**判定**：高频 + 可撑满一篇 + 无既有覆盖 + 与 10-24 的 `tulu-cylinders-unlock-the-mound` 零重叠 → 通过。

---

## 三、Residue 扫描（新篇 + 3 篇改动篇）

| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名（Sephiria / Witchspire / Mistfall / Aincrad / SpiritVale / Grain Rot 等） | ✅ 0 命中 |
| 他站域名（`sephiriawiki` / `spiritvalewiki` 等） | ✅ 0 命中 |
| 模板句 `cooperative PvE extraction horror` / `SpiritVale Studio` / `published by NACON` | ✅ 0 命中 |
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中 |
| `lorem ipsum` / `TODO:` / `FIXME` / `REPLACE_ME` / `TBD` | ✅ 0 命中 |
| CJK 泄漏（`[㐀-鿿]`） | ✅ 新篇 0 命中 |
| `[Unconfirmed]` 英文标记规范 | ✅ 2 处全英文，0 处中文标记 |
| 表格分隔符垃圾（`<td>-------`） | ✅ 构建后 HTML 0 命中 |

---

## 四、编造检查（逐条对官方原文）

**方法**：`api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2569760&count=40&maxlength=0` 拉回官方公告全文（缓存 `/tmp/mound_news.json` 30 条 / `/tmp/tm_news.json` 40 条），逐条 grep。

| 篇内断言 | 官方原文核验 | 出处 |
|---|---|---|
| 最新版本 Patch 1.06（2026-10-05） | ✅ 公告标题 `Patch 1.06 - Optimizations & hot fixes.`，epoch 1791205270 = 2026-10-05 | Patch 1.06 |
| 「Rescuing a character in the mainland means a contract is successful regardless of whether or not the treasure was returned.」 | ✅ 逐字命中 | Patch 1.02 |
| 1.01 把 Saints 从 woodshop 移到 ox wagon 前购买 | ✅ 命中 `Modified the Saints shop so these are no longer bought at the woodshop…` | Patch 1.01 |

**社区断言处理**（全部标注来源、日期与置信度）：

| 断言 | 来源 | 处理 |
|---|---|---|
| 目的地选择时 blimp/图标决定该局是否有幸存者 | Reddit `1vagweh`（7-30）、`1w5wxqi`（9-03） | 两帖措辞不同但语义一致，作正文核心规则 |
| 幸存者会主动走向玩家 / 部分初次遭遇为敌对 | Reddit `1vagweh` 回复 | 写「players report」 |
| Slave Finder 可显形 | Reddit `1vk2fwi` | 直接引用 |
| 只有房主保留救援进度 | Reddit `1vlct3a` 两条回复 | 作默认规则，同时**如实写入一条反例**并标 `[Unconfirmed]` |
| 三种结果：可玩角色 / 船 NPC / 仅 buff | Reddit `1uyb18t`、`1w19ecv` | 表格 + 逐条链接 |
| 幸存者总数（7 / 6 / 2+DLC / 成就 7） | 3 个不同帖 | 全节标 `[Unconfirmed]`，明确「不要当 checklist」 |
| Priest 背到出口不被判定、wagon 消失 | Steam Community 1.04 跟帖 | **仅索引摘要**，正文与 sources 均注明「direct fetch blocked，quoted not re-verified」 |

**专有名词独立核验**：

| 名词 | 官方命中 | 处理 |
|---|:--:|---|
| Tulu / Tulu-metal / Yig | ✅ 有（Patch 内 Tulu-metal、`Tulu and Yig`） | 可作事实 |
| Woodworker / woodshop / ox wagon | ✅ 有（1.01） | 可作事实 |
| Slave Finder | 0 | 仅在玩家引语语境出现 |
| Priest（幸存者义） | 0（官方命中仅为配音演员表） | **只出现在被引用的玩家句子内**，未当作游戏名词陈述 |
| 7 人成就 | 0 | 标 `[Unconfirmed]`，写作「reported as」 |

→ **0 编造**：无虚构 Boss / NPC / 物品 / 机制名；无编造评分、销量、日期。

---

## 五、Lint 与构建

```
node scripts/lint-guides.mjs themoundwiki --changed
🔍 lint themoundwiki — 4 篇（本次改动）
结果：全部通过 ✅        (exit 0)
```

- 新篇 `related` 为块状数组（6 项，全部存在）；`sources` 9 条（2 Official + 7 Community），满足 ≥2 源 / ≥1 Official。
- `pnpm install`（非 npm）→ `pnpm build` **EXIT=0**，57/57 静态页生成。

---

## 六、产物级验证（构建产物，非源码）

| 检查 | 结果 |
|---|---|
| 新页 `<title>` 正确渲染 | ✅ `The Mound Lost Survivors Not Showing? How Spawns, Rescue and Host Progress Work · The Mound Wiki` |
| 表格分隔符垃圾 `<td>-------` | ✅ 0（共 2 个表格） |
| 「survivor icon」出现 | ✅ 4 次 |
| 反向链接渲染（`characters-classes.html` 内出现新 slug） | ✅ 3 次 |
| 新页内链指向 `characters-classes` | ✅ 4 次 |
| `sitemap.xml` 含新 slug | ✅ 1 次 |

---

## 七、部署与线上复验

| 步骤 | 结果 |
|---|---|
| `./deploy-wiki-site.sh themoundwiki` | ✅ `themoundwiki-7e5ypfs0a`，生产 alias HTTP 200 |
| `verify-guide-live.sh themoundwiki lost-survivors-rescue-guide "survivor marker" "only host keeps him"` | ✅ **HTTP 200**，63,334 bytes，marker 命中 **4 / 2**，RESULT **PASS** |
| 线上 URL | https://themoundwiki.vercel.app/guides/lost-survivors-rescue-guide |

---

## 八、遗留 🟡

1. **Steam 评测 API 不可用**（`appreviews` 302）；**steamcommunity.com 本机不可达**（curl 000，`--resolve` 多 IP 失败，WebFetch ECONNREFUSED/ETIMEDOUT）。→ 唯一一条 Steam Community 证据为**搜索索引摘要**，篇内与 sources 均已如实标注「未在页面复验」。**未编造任何 Steam 引语**。
2. **总数与房主规则无官方确认**：已用 `[Unconfirmed]` 标注，并保留一条与房主规则相反的报告，避免过度断言。
3. **「7 人成就」**仅社区转述，官方公告 0 命中，已标 `[Unconfirmed]`。

---

## 九、结论

**PASS** — 选题有 7 个独立帖、跨 2 个平台支撑且站内确无覆盖；1,237 词在房规区间；官方断言 3/3 逐字命中；社区断言全部标注来源与置信度并保留反例；lint 0 ERROR / 0 WARN；build EXIT=0；产物级 6 项全通过；线上 HTTP 200 + 双 marker 命中。
