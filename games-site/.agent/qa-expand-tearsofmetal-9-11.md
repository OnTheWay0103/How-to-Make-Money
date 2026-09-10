# QA 报告 — QA-EXPAND-TEARSOFMETAL-9/11

- 日期: 2026-09-11
- 模式: quick（本轮**无新增攻略**；执行 P0 校准 7 文件 + 1 处新发现的 🔴 级平台事实修正）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06）
- 范围: 本轮 tearsofmetalwiki 产出评审
- 变更文件（7）:
  1. `content/guides/patch-notes.md`（P0 校准主件，1,994 → 3,623 词）
  2. `content/guides/multiplayer-connection-fix-guide.md`
  3. `content/guides/steam-deck-guide.md`
  4. `content/guides/achievements-guide.md`
  5. `app/page.tsx`（3 处 FAQ 答案）
  6. `app/faq/page.tsx`（2 处 FAQ 答案）
- 结论: ✅ **PASS — 可部署**（已部署并 curl 内容级验证，见 keyword-results/tearsofmetalwiki-expand-9-11.md）

## 检查项逐项结果

- a) **残留扫描**：✅ `grep -niE "witchspire|mistfallhunter|aincrad|themound|heymound|sephiria|grainrot|spiritvale|\{\{<|hugo|\[待确认\]"` 作用于全部 6 个改动文件 = **0 命中**（含 `patch-notes.md`：`spiritvale` 亦 0 命中，无串站）。CJK 扫描 = 无。✅

- b) **编造检查（claims → source 表）**：本轮新增/改写的每条事实断言逐条溯源如下。**任务红线「无法证实的只能写版本号+日期，MUST NOT 编造 changelog」已遵守**：

  | # | 正文断言 | 定级 | 来源（≥2 独立或官方公告） |
  |---|---|---|---|
  | 1 | v0.8.57278 / 7-24：Ruadh 改为击败 Iseult the Banshee 解锁、Boss 破防攻击可格挡、无敌 Act 3 Giant 与隐形 Banshee 修复、新 Common Charm、max-framerate 设置生效（默认上限 120→60） | Official | Steam 公告（版本号+日期+标题）+ thegameswiki 版本表 + vgspoilers；站内 `low-fps-fix-guide` 9/5 已引同一条 |
  | 2 | v0.9.57408 / 7-28：Castle Records 重做 + save-recovery 系统；Boss 修复（Iseult the Banshee、Harold）、敌人刷新与关卡重建 | Official | Steam 公告 + thegameswiki |
  | 3 | v0.10.57598 / 7-31：Act 1/2 性能优化热修、军队/指挥官/Castle Records 修复 | Official | Steam 公告 + thegameswiki + vgspoilers |
  | 4 | v0.11.57863 / 8-1：大型平衡补丁 —— meta-progression 与经济重做、Charm 分级重分类、Act 2 难度曲线平滑、Beacons | Official | Steam 公告 + thegameswiki + ingamenews 专文 |
  | 5 | **v0.11.57874.1 / 8-9**：EOS overlay 引起鼠标卡顿的热修 | Official | Steam 公告 + thegameswiki；站内 `low-fps-fix-guide` 已引 |
  | 6 | **v0.12.58540 / 8-13**：网络层重做；co-op 复活由金币成本改为**生命成本**；首个具名同伴；Charm 与 Emblem 平衡 | Official | Steam 公告 + thegameswiki + 站内 `co-op-revive-guide` 引该版本 |
  | 7 | **v0.14.58630 / 8-14**：多人 bug 修复（desync、Boss 刷新、战役地图）；**当前构建** | Official | Steam 公告标题即 "Multiplayer Bug Fixes" + thegameswiki |
  | 8 | 不存在 v0.13（版本号从 0.12 跳到 0.14），页内明写 "build identifiers, not a release counter" | Official | 官方公告序列（无 0.13 条目）+ thegameswiki 版本表 |
  | 9 | 版本错位（Steam 提前于 Microsoft Store）是多数「无法加入」错误的原因，可用 Steam `"crossplay"` beta 分支缓解 | Community | thegameswiki update-history 明确说明 + Steam 分支列表 |
  | 10 | ~8/26 三阶段 EA 路线图：Phase 1 稳定 / Phase 2 build-crafting·Emblems·meta 重做 / Phase 3 新内容+点名 Plague Doctor / 考虑 Beta Branch | Official（开发者 post，媒体转载一致） | primagames + ingamenews + gamereactor ≥3 转载一致；**已在页内以 blockquote 显式标注 "This is a plan, not shipped content." + "None of Phase 2 or Phase 3 is in the live build as of September 11, 2026" + 无日期/无版本号/无 ETA** |
  | 11 | 「big push for stability」是下一补丁（v0.14.58630 之后那一版**不是**内容补丁） | Official | 官方开发者表述（经 >1 媒体转载） |
  | 12 | Plague Doctor **无解锁条件、无机制、无技能、无日期**；且官方从未称它是游戏内两个未解锁黑影之一 | Official（**否定式断言**）+ Editorial | 官方仅「点名 + coming later」；页内明确写出「Do not treat any guide… as sourced」→ **未编造任何 kit** |
  | 13 | 7/22 EA 首发**同时**上 Steam + **Microsoft Store** + **PC Game Pass**；15:00 UTC；$24.99 + 首两周 10% 折扣 | Official | Paper Cult 7/22 新闻稿（gamespress 转载）+ purexbox + gameblog.fr + spaziogames.it + gamebrief.net + thegameswiki release-and-platforms（**≥5 独立来源**） |
  | 14 | **Steam ↔ Microsoft Store / PC Game Pass 支持 crossplay** | Official | 新闻稿 + thegameswiki |
  | 15 | 未发布的是 **Xbox Series X\|S 主机版**（2026 稍后，届时加入 Xbox Game Pass，Play Anywhere） | Official | 新闻稿 + purexbox 等（**≥3 独立来源**） |
  | 16 | 100,000+ 份 Steam 销量 | Official | 开发者公告 + ingamenews/primagames 报道 |
  | 17 | 好评率 / 同时在线峰值 6,239（SteamCharts，checked Aug 25 2026） | Community | SteamCharts —— **该数字为本轮改动前既有内容，非新增**（见「观察项」①） |

  - **无凭空数字、无虚构玩家原话** ✅。所有新增数字均为版本号 / 日期 / 价格 / 销量 / 平台事实，且至少 Official 公告 + 一个独立来源双确认。

- c) **内部一致性 / 链接完整性**：✅
  - 全站 `/guides/*` 引用集合 vs `content/guides/*.md` 实际文件集合 `comm -23` = **0 BROKEN**。
  - frontmatter schema（title/description/category/version/updated/keywords/related/sources[tier,text]）与本站既有约定（`co-op-revive-guide`、`healing-guide`）一致；三层 `sources`（Official / Community / Editorial）齐备且层层不同。
  - `patch-notes.md` 的 `related[]`（save-system-guide / multiplayer-connection-fix-guide / heroes-tier-list / co-op-revive-guide / beginner-guide）全部为真实 slug。
  - 跨文件口径一致性：修正后 6 个文件统一为「PC 三门店首发日全部可用且互通；主机版未发布」，且 Steam Deck 建议未变（Game Pass 是 Windows 构建，非 SteamOS 路径）。
  - `steam-deck-guide` 的 FAQ 曾出现一处语病草稿（"…look for the value of crossplay working in multiplayer."），**作者自查后已即时改正**为现在的正确表述；QA 复核当前线上文本无残留 ✅。

- d) **诚实标注**：✅
  - 路线图段置顶 `> **This is a plan, not shipped content.**`，并明写「无日期、无版本号、无 ETA」「Treat everything in this section as intent, not as a feature list you can play today」→ 完全满足任务「明确标注为「官方公布的计划，尚未实装」」要求。
  - Plague Doctor 段明确声明「No unlock conditions, no mechanics, no abilities and no date are public」。**未把计划写成实装** ✅。
  - 站内既有 `> **Honesty note:**` 保留（Paper Cult 各渠道构建号不一致 → 只记录开发者公布事实并标注社区追踪项）。

- e) **词数区间（观察项，非 FAIL）**：⚠️→✅
  - `patch-notes.md` 由 **1,994 词 → 3,623 词**，超出 800–1,500 词的常规攻略区间。
  - QA 判定：**不构成 FAIL**。该页是站点的 **patch tracker / hub 参考页**（`Version at a Glance` 表 + 版本史表 + 路线图表 + FAQ），非标准单主题攻略；且本轮增量**全部是任务 P0 明确指定的内容**（补 3 个实装补丁 + 三阶段路线图）。篇幅与 hub 定位匹配。
  - 已如实记录，并建议主 Agent 若认为过长，后续可拆出独立 `/guides/roadmap` 页（本轮未拆以避免引入新的内链面）。

## 线上验证（内容级，QA 侧复核）

```
$ vercel inspect https://tearsofmetalwiki.vercel.app
  id      dpl_HEr1kmz3g838jymSQ1vEeWukLMN2
  target  production        status  ● Ready
  created Fri Sep 11 2026 05:11:53 GMT+0800
  Aliases ╶ https://tearsofmetalwiki.vercel.app   ← 生产 alias 指向本次部署
```

| 线上页面 | HTTP | 正文内容级命中（curl 抓取） |
|----------|:--:|------------------------------|
| `/guides/patch-notes` | 200 | `v0.14.58630`×30、`Plague Doctor`×32、`PC Game Pass`×34、`crossplay`×16；旧错误表述 ×0 |
| `/` | 200 | `PC Game Pass`×12、`crossplay`×17；旧错误表述 ×0 |
| `/faq` | 200 | `PC Game Pass`×6；旧错误表述 ×0 |
| `/guides/multiplayer-connection-fix-guide` | 200 | `v0.14.58630`×2、`PC Game Pass`×18、`crossplay`×56；旧错误表述 ×0 |
| `/guides/steam-deck-guide` | 200 | `PC Game Pass`×14、`crossplay`×10；旧错误表述 ×0 |

- 陈旧断言 grep（`currently PC-only` / `Steam PC-only` / `there is no crossplay`）在**全部 5 个页面 = 0**。
- 判定**全部以正文文本命中为准**；未以「首页 200」代替内容验证（旧部署同样 200）。✅

## 观察项（交主 Agent，非本轮红线）
1. **同时在线峰值口径**：站内 `patch-notes.md` 沿用既有的 **6,239（SteamCharts，8/25 查）**；本轮采集另见 VaporLens 记录 **6,258**。两者为不同追踪器口径。站内已注明来源，**本轮未改动**（改动即需重新溯源）；建议后续统一或双标来源。
2. **既有站内矛盾（本轮未动）**：`app/page.tsx` 的 co-op FAQ 写「village upgrades apply to all」，`app/faq/page.tsx` 写「village upgrades are individual to each player」——两处站级渲染文件互斥，且无可靠来源可裁决 → 未凭猜测改动，列入待核。
3. **`base-camp-guide.md` 孤儿页**：全站 grep 无任何 `/guides/base-camp-guide` 入链，早于本轮存在。

## 证据文件
- 采集、候选否决、P0 校准与平台修正细节: `keyword-results/tearsofmetalwiki-expand-9-11.md`

## Coordinator 摘要
```
QA 结果: ✅ PASS — 本轮 SKIP（无 v0.15+/9 月补丁作事实锚点，无满足四条件的新选题），
但完成 P0 校准并追加一处新发现的 🔴 级事实修正，已部署。
P0-1 补丁滞后: patch-notes.md 补齐 v0.11.57874.1(8/9) / v0.12.58540(8/13) / v0.14.58630(8/14)，
  并扩为完整版本表 v0.8→v0.14.58630（7 行，每行 Official 公告 + 独立来源双确认）；
  未编造 changelog，明写「无 v0.13」与「build identifiers, not a release counter」。
P0-2 路线图: 新增三阶段 EA 路线图章节，置顶 "This is a plan, not shipped content."
  + "None of Phase 2 or Phase 3 is in the live build as of September 11, 2026" + 无日期/无 ETA；
  Plague Doctor 明确「无解锁条件/无机制/无技能/无日期」，未编造 kit。三层 sources 齐备。
P0-3 追加发现: 站内 6 文件原写「Steam PC-only / no crossplay / Game Pass 未上线」= 错误。
  实际 7/22 首发即上 Steam + Microsoft Store + PC Game Pass 且互通（≥5 独立来源）；未发布的是 Xbox 主机版。
  已按最小改动修正 7 文件，线上 5 页陈旧断言 grep = 0。
词数: patch-notes 1,994 → 3,623 词，属 hub/tracker 页、增量全为任务指定，判非 FAIL（已记录，可后续拆页）。
残留/编造/CJK/链接完整性: 0 / 无凭空数字与虚构玩家原话 / 无 / 0 BROKEN。
下次触发: 官方 v0.15+ 或 9 月补丁被 ≥2 独立来源索引 → 写机制变更指南。
```
