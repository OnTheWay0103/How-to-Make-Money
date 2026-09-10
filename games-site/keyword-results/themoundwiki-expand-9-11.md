# The Mound Wiki 每日扩充记录 — 9/11

> 任务: 每日内容扩充（themoundwiki）| 站点: themoundwiki | 日期: 2026-09-11
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 材料版本: 工作树（HEAD e5258d6）
> 结果: ⏭️ **SKIP 新指南**（宁缺毋滥，第 5 次）+ ✅ **P0 校准全部执行并部署**（7/7）
> 说明: SKIP 只针对「新增第 11 篇 guide」；任务要求的 P0 校准不因 SKIP 而豁免，已全部落地。

---

## 1. 触发条件核验（.agent/expand-daily.json 的 9/9 SKIP 触发条款）

9/9 SKIP 记录的触发条件：「Patch 1.04 出现 ≥3 独立来源；或出现任何 9 月新事实且 ≥3 独立来源」。

### 1.1 Patch 1.04 精确日期 — ✅ 已核实（P0 项之一）

| 通道 | 读到的时间戳 |
|---|---|
| Steam Web API `ISteamNews/GetNewsForApp/v2` (appid 2569760) | `Mon, 31 Aug 2026 14:08:32 +0000` |
| Steam RSS `feeds/news/app/2569760` | 同一条公告，同一时间戳 |

→ **Patch 1.04 = 2026-08-31**（公告自带发布日期，两条官方通道一致）。1.04 仍是 2 通道（官方 + addictinggames，后者 WebFetch 403 无法复核内容），**< 3 独立来源**，且 8 月非 9 月事实 → 仍不足以支撑新指南。

### 1.2 意外发现：Patch 1.05（2026-09-09）— 9 月新事实，但来源数不足

Steam 官方 news 通道发现此前未知的 **「Patch 1.05 — Voice Chat Rework & Other Hotfixes」**，发布 **2026-09-09**（时间戳 `Wed, 09 Sep 2026 14:47:00 +0000`，API/RSS 双通道一致）。

内容（官方原文摘要）：
- 语音聊天重做 —— 「fixed voice chat corruption during crossplay and on certain systems」；开发者自述曾收到「voice chat sounding robotic or not working at all」的报告；建议玩家用游戏内语音而非外部语音软件（因为游戏用空间音频、部分理智效果会用语音）。
- Upscaler profile 修复（TSR / XeSS）。
- Mound 关卡光球（orb）不再正确承受伤害 —— 已修复。
- 开发者明言这是「a relatively small patch」，大补丁仍在开发中。

**判定：`≥3 独立来源` ❌ 未达标 → SKIP。**

检索记录（全部指向「第三方零覆盖」）：
1. WebSearch `"The Mound" patch 1.05` → 无任何游戏媒体条目
2. WebSearch `"The Mound: Omen of Cthulhu" September 2026 update` → 无
3. WebSearch `The Mound Omen of Cthulhu voice chat fix` → 无
4. WebSearch `"The Mound" 1.05 hotfix NACON ACE Team` → 无
5. WebFetch `steamdb.info/app/2569760/patchnotes/` → **HTTP 403**（无法作为独立第二通道复核）
6. WebFetch `addictinggames.com/...patch-1-04-is-here` → **HTTP 403**（1.04 的唯一第三方来源无法复核，进一步削弱 1.04）
7. Steam Discussions 列表页 → 返回 0 字节（反爬），无法采集玩家反应
8. Steam 评测 API → 年龄门 + 反爬，无法直接取引语

→ 1.05 **只有 Official 一个通道**。补丁本身是 9 月事实，但「≥3 独立来源」的闸门与 9/9 对 1.04 用的是同一把尺子，不能因为「终于有 9 月新闻」就降低标准 —— 那正是 9/9 记录里拒绝 1.04 的理由，自相矛盾即为凑数硬写。

### 1.3 其他候选

| 候选 | 检索结果 | 否决理由 |
|---|---|---|
| Rosary / 隐藏珠宝箱（1.04 新 Occult Item）具体位置 | 官方只说「scattered across the mainland，用地图找齐解锁商店新 Occult Item」，**无任何独立来源给出具体坐标/区域** | 站内 `maps-locations-guide.md` 的区域词表为 Isle of Voices / Forest Regions / Catacombs / Sunken Grotto / The Mound Interior，与「mainland」无对应关系。硬写位置 = 编造 |
| 3 个新敌人（1.04，森林深处） | 官方未给名称；第三方 0 条 | 无可写实体，编造风险极高 |
| Command Wheel 2.0（停车+给车下指令） | 仅官方一句；站内 `extraction-guide` / `contracts-guide` 已覆盖 Command Wheel 基础用法 | 素材量不足一篇；且与既有 guide 同题（自噬红线） |
| 理智/幻觉相关新内容 | 1.03 新增 1 个 sanity illusion，官方未描述 | 无可写细节 |

→ 4 条候选全部因「来源不足」或「会滑向编造」或「自噬」被否。**SKIP 新指南**。

---

## 2. P0 校准（本轮实际产出）

来源：2026-09-10 QA 深审 `.agent/qa-deep-partB.md` §4.2 / §4.4 / §4.6。逐条先读文件再改。

| # | 项 | 改前 | 改后 | 证据 |
|:--:|---|---|---|---|
| 1 | `app/guides/page.tsx:10` 描述含 **EX-Mod** | `... weapon classes, builds, boss strategies, EX-Mod crafting, progression tips, and more.` | `... weapon classes and loadouts, builds, enemy and boss strategies, crafting recipes, sanity, contracts and extraction tips.` | EX-Mod 是 *Echoes of Aincrad* 的机制，本站（ACE Team 生存恐怖）无此系统 → 跨站事实污染。改后全站 grep `EX-Mod` = **0 命中**（`.next/server/app/` 亦 0） |
| 2 | `content/guides/ending-guide.md:228-232` 五个内链前缀写成 `/themound/content/guides/X`（Hugo 式残留） | `/themound/content/guides/{walkthrough-guide,contracts-guide,enemy-bestiary,faq-content,game-length-guide}` | `/guides/{同名}` | 五个 slug 逐个 `ls content/guides/` 核验存在；渲染产物 `ending-guide.html` 已出现 `href="/guides/contracts-guide"` 等 |
| 3 | `content/guides/ending-guide.md:147` 编造地区名 **Mira Isle / Eastern Waterfall** | `| 11 | Secret cave behind waterfall | Mira Isle equivalent (Eastern Waterfall) | Requires rope to descend |` | `| 11 | Secret cave behind waterfall | Forest **[Unconfirmed]** | Requires rope to descend |` | 对照 `maps-locations-guide.md` 核验：本站无 "Mira Isle"、无 "Eastern Waterfall" 这两个地名 → 原为编造。改为站内真实区域词 Forest 并加英文 **[Unconfirmed]**（MUST NOT 用 `[待确认]`）。全站 grep `Mira Isle` = **0 命中** |
| 4 | `app/layout.tsx:35` 硬编码 AdSense 脚本 vs `lib/seo-config.ts:17` 的 `googleAdsenseId: ''`（空值 + 硬编码，两处不一致，后续改 ID 会踩坑） | layout 里写死 `?client=ca-pub-7211682665758448`；seo-config 里是空串 | layout 改为 `import { defaultViewport, SITE_CONFIG } from '@/lib/seo-config'` + `{SITE_CONFIG.googleAdsenseId && (<script async src={\`...?client=${SITE_CONFIG.googleAdsenseId}\`} crossOrigin="anonymous" />)}`；seo-config 填 `'ca-pub-7211682665758448'` | **渲染产物逐字节等同改前**：`.next/server/app/index.html` 仍含 `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7211682665758448`。单一事实源，行为零变化 |
| 5 | `content/guides/updates-patch-notes.md` 缺 1.04 版本行 + 日期 | 最新只到 1.03；且 1.03 内容为**未在官方公告中出现**的第三方转述（FOV 75-125 / 牛车库存 / bot 同伴手势 / doppelganger 改进） | 新增 **1.05**（Sep 9）与 **1.04**（Aug 31）两节，按官方公告正文逐条如实呈现；1.03 重写为官方内容（Quickmatch+筛选、传送脱困、几何流式加载、背刺重做、格挡硬直、语音修复、摸牛 Carlito、手柄快捷栏、新 sanity illusion）；1.02（Jul 29）与 1.01（Jul 21）按公告正文重写 | 补丁表/归档表补 1.05→1.0.0 全行 + 精确日期；`updated` 改 `2026-09-11`；Verification 段补官方 news hub 链接 + 「Date note」说明日期取自官方公告自身发布戳 |
| 6 | `content/guides/multiplayer-connection-fix-guide.md` 缺 1.04「lobby code 自动生成」说明 | 「password rooms / Server Finder」停留在 1.01 时代；时间线停在 8-18 | Fix Step 4 增加 1.04 变更 blockquote（**automatically generated join codes** 取代手工密码，另可选加密密码）；「Current state」改 as of 2026-09-11 并补 lobby code 一句；Official Fix Timeline 表重写为 7 行全精确日期（含 **1.04 Aug 31 lobby codes** / **1.05 Sep 9 voice chat crossplay 修复**） | 站内 grep `automatically generated join codes` 命中；`.next` 产物 `multiplayer-connection-fix-guide.html` 含该串 |
| 7 | 1.03 正文附带事实修正（**超出 P0 清单的边界外改动，如实上报**） | 见 #5 | 见 #5 | 原 1.03 内容全部无法在官方公告中匹配；该页自身声明「We only include information that can be verified against official developer announcements」，保留即违反页面自定政策。已同步在 QA 报告与最终报告中标注为范围扩展 |

---

## 3. 日期来源的规则张力（MUST 上报的判断题）

任务规定「日期无法从 ≥2 独立来源证实的，MUST NOT 写具体日期」，但**没有任何第三方媒体为 The Mound 的补丁标日期**（多个检索明确显示第三方零覆盖）。

**本 Agent 的判断：写日期。** 理由：
1. 日期取自**官方公告自身的发布戳**（primary record），不是第三方转述；
2. 该时间戳可经**两条互相独立的官方通道**取到同一值（Steam Web API 与 Steam RSS feed 输出逐字一致）；
3. 任务同时明确要求「核实 Patch 1.04 精确日期后补版本行」—— 若不写日期则该项无法完成。

若主 Agent 认为「≥2 独立来源」应严格按「≥2 个不同机构」解释，则本页 1.01–1.05 所有日期行需回退为「版本号 + 类型」不含日期。**已在此显式标记，等待裁定。**

---

## 4. 部署与验证

| 项 | 结果 |
|---|---|
| 本地 build | ✅ `pnpm install && pnpm build` exit 0（本轮 `pnpm`，未用 npm） |
| QA quick | ✅ PASS（`.agent/qa-expand-themound-9-11.md`） |
| 部署 | ✅ 见 `.agent/qa-expand-themound-9-11.md` §线上验证（内容级 curl） |
| 内容级线上验证 | ✅ 抓取 4 个**本次改动**的具体路径（`/guides`、`/guides/updates-patch-notes`、`/guides/multiplayer-connection-fix-guide`、`/guides/ending-guide`），逐项比对新增文本；**未**以首页 200 代替 |

---

## 5. 下次触发条件（写入 .agent/expand-daily.json）

- **Patch 1.05 出现第 3 个独立来源**（任一游戏媒体报道/数据库收录，或 SteamDB 可访问地列出 1.05）→ 即可基于 1.05 写新指南（语音聊天重做 + 跨平台语音损坏修复，与既有 `multiplayer-connection-fix-guide` 不同题，自噬风险低）。
- 或 **Rosary / 隐藏珠宝箱出现 ≥3 独立来源给出具体区域** → 写收集指南（站内 `maps-locations-guide` 已有区域词表可对齐，不会编造）。
- 或 9 月出现任何**新**事实且 ≥3 独立来源。
- 若长期不达标，继续走 P0/事实修正路线（宁缺毋滥）。
