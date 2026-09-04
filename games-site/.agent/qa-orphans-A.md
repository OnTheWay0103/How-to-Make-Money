# QA Report — QA-RECOVER-9/4-A

- 日期: 2026-09-05
- 模式: quick（仅审查本轮 2 篇）
- 任务编号: QA-RECOVER-9/4-A（9/4 扩充批次 v1，被中断 run 遗留，未 QA 未提交）
- 范围: 2 站 2 篇 guide
- 结果: ✅ 2/2 通过（0 🔴 阻断 / 0 🟡 警告）

---

## 执行摘要

| # | 站点 | 文件 | Residue | 编造检查 | 一致性 | 诚实标注 | 体量 | 结论 |
|---|------|------|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | grainrotwiki | content/guides/performance-lag-fix-guide.md | ✅ Clean | ✅ 无编造 | ✅ | ✅ | 1188 词（正文，去 back matter） | ✅ 通过 |
| 2 | themoundwiki | content/guides/blood-moon-guide.md | ✅ Clean | ✅ 无编造 | ✅ | ✅ | 1312 词（正文，去 back matter） | ✅ 通过 |

无需修复项 → 无「需修复后重新部署」标注。

---

## 逐篇审核

### 1. grainrotwiki/content/guides/performance-lag-fix-guide.md（游戏: Grain Rot）

**结论: ✅ 通过**

**a) 残留扫描: ✅ Clean**
- 全站残留正则（SpiritVale/Witchspire/Mistfall/Aincrad/Sephiria/Tears of Metal/The Mound/ACE Team/NACON 等 30+ 他站游戏名）→ 0 命中。
- 外链域名核对 → 全部为本站合法来源（steampowered / help.steampowered / vaporlens / thecpuguide / 2upskill / hone.gg），无他站 wiki/串站链接。

**b) 编造检查: ✅ 通过（5 项高置信断言全部有真实来源）**

| 断言（正文/frontmatter） | 验证来源 |
|---|---|
| Steam 商店 app 4450620 = GRAIN ROT；8 月 7 日 1.0 上线；官方无优化指南 | store.steampowered.com/app/4450620 + gamespress/bloody-disgusting 确认 2026-08-07 发售 |
| 最低配置 i5-4590 / Ryzen 5 2600 | vgtimes + 官方 Steam 商店配置，逐字匹配 |
| Steam Support 技术问题流程 appid 4450620 | help.steampowered.com/en/wizard/HelpWithGameTechnicalIssue?appid=4450620 ✅ |
| 社区文存在：The CPU Guide「Lagging In Multiplayer」/ 2UpSkill「Lag Spikes & Low FPS」/ 2UpSkill「Infinite Loading Screen Fix」/ hone.gg「Best PC Settings」 | 4 个 URL 全部 200 级真实存在（WebSearch 直接命中） |
| VaporLens 将「Poor optimization and performance issues」列为 top negative | vaporlens.app/app/4450620/grain_rot/stats 真实存在，且明确列为「Most dangerous issue」 |
| 联机为 host 依赖（换 host/以太网/Double NAT/VPN/关后台下载/停用节能网卡） | The CPU Guide + 2UpSkill 内容逐条对应 |
| SSD 缓解资产流式卡顿、删 Shader 缓存、Verify 文件、-dx11/-dx12/-windowed 启动项、清装显卡驱动 | 2UpSkill Infinite Loading Screen Fix 逐条对应 |
| 85–90% 分辨率缩放、关 SSR/DoF、DLSS/FSR 未确认、单一帧数上限 | hone.gg + The CPU Guide 内容对应 |
| Corrupted 敌人基于声音/噪声追踪 | Bloody Disgusting / MobyGames / 2UpSkill vessel 指南确认「Corrupted react to sound, movement, and each other」 |

无编造（未发现虚构 Boss/数值/机制/来源）。无法由官方确认处（DLSS/FSR 是否存在、菜单标签、启动项为通用修复）均已标 **[Unconfirmed]**。

**c) 内部一致性: ✅**
- frontmatter 字段齐：title / description / category / version / updated / keywords / related / sources（3 层），与同站模板 rot-debuff-guide.md 字段集一致；category "Reference" 为本站既有分类（controller-guide 同用）。
- related[] = system-requirements / multiplayer-matchmaking-guide / co-op-guide / full-release-guide / controller-guide → 5 个 slug 均真实存在于 grainrotwiki/content/guides/。
- 正文内链 /guides/system-requirements、/guides/stealth-sound-guide → 均存在。
- 正文与 title/description 相符（诊断表→分类修复→测试方法→FAQ 结构清晰）。
- sources 三层标注完整（Official/Community/Editorial），与 rot-debuff-guide 格式一致。grainrotwiki/lib/guides.ts 解析器支持 sources 对象数组，frontmatter 可正常渲染。

**d) 诚实标注: ✅**
- 文首「Values caveat」明确声明官方无优化指南、社区数据不统一、未验证项标 [Unconfirmed]。
- 高风险断言（upscaler 开关、效果菜单标签、启动项、VPN 效果、版本不匹配 desync）均标 [Unconfirmed] 或注明社区来源。

**e) 体量: ✅** 正文（去 frontmatter，去掉 Sources/Related 后）1188 词，在 800–1500 区间。

**f) 线上状态: 尚未部署（HTTP 404）— 信息项，非内容问题**
- 注册逻辑：grainrotwiki/lib/guides.ts `getAllGuides()` 自动扫描 content/guides/*.md，文件名即 slug，无需手动注册。本文件已就位，commit+部署后自动上线。

**g) 模板参照: ✅** 与 rot-debuff-guide.md 对比，字段、sources 结构、正文分层一致；额外含 FAQ 块与 `---` 分节，属本站多种既有风格之一，无异常。

**问题清单:** 无。

---

### 2. themoundwiki/content/guides/blood-moon-guide.md（游戏: The Mound: Omen of Cthulhu）

**结论: ✅ 通过**

**a) 残留扫描: ✅ Clean**
- 全站残留正则（含 Grain Rot / 其他站游戏名）→ 0 命中。
- 外链域名核对 → 全部为本站合法来源（steamcommunity / noobfeed / gameplay.tips / chaptercheats），无串站链接。

**b) 编造检查: ✅ 通过（6 项高置信断言全部有真实来源）**

| 断言（正文/frontmatter） | 验证来源 |
|---|---|
| Steam app 2569760 = The Mound: Omen of Cthulhu；开发商 ACE Team；发行商 NACON；2026-07-15 发售 | help.steampowered.com appid=2569760 + gamespress/gameswelt/Fanatical 确认 ACE Team + Nacon + 7/15/2026 |
| NoobFeed「How to Avoid Blood Moons」文章存在，且为「Blood Moon」名称 + 噪声机制 + 灰/红指示条 + 心跳预警来源 | noobfeed.com/articles/the-mound-omen-of-cthulhu-blood-moons ✅ |
| 灰/红屏边噪声指示 + 心跳警告 + 月亮转红；红了之后「安静不能取消」、须击败刷怪或存活到结束 | NoobFeed 逐字对应 |
| 高等级契约 → 更强波次 / 传送队伍 / 契约专属生物 | NoobFeed 对应（正文已标 [Unconfirmed — single guide]，保守） |
| 火器(matchlock/flintlock/musket)噪声最高、折枝、红眼鸟、公牛低鸣、胸甲冲刺、踢箱、号角/Medallion 均促发 | NoobFeed + Gameplay.tips「森林侵略」触发家族逐条对应 |
| Tulu 金属圆筒拾取强制 Blood Moon、装上马车结束；Black Ichor 罐可分散超自然生物 | NoobFeed + nerdschalk.com/games.gg Tulu Cylinder 攻略 + gamerguides 物品库（Jar of Black Ichor）多方印证 |
| 「Forest Awakens」~30–35 分钟隐藏计时器 | 本站 extraction-guide.md L71-82（~30-35 分钟、3x 刷怪、转移撤离点）+ combat-survival-guide.md L193-197 一致；Gameplay.tips 亦述「森林苏醒/计时器到期连续刷怪」 |

无编造。正文诚实注明「ACE Team 未发布官方 Blood Moon 说明、UI 不打印该名、'Blood Moon' 一词来自单一编辑来源 NoobFeed」；单一来源细节（传送波次、Black Ichor、Tulu 触发器）均标 [Unconfirmed]。注：Tulu 圆筒与 Black Ichor 实际已有多方来源印证（超出 NoobFeed），此处标记偏保守但无害，不阻断。

**c) 内部一致性: ✅**
- frontmatter 字段齐：title / description / category / version / updated / keywords / related，与同站模板 isolation-guide.md 完全同构（themound 站不用 frontmatter sources，sources 在正文，blood-moon 亦同）。
- category "Guides" 为该站主流分类（33/36 篇）。
- related[] = combat-survival-guide / extraction-guide / coop-strategy-guide / stealth-guide / enemy-bestiary / isolation-guide → 6 个 slug 均真实存在于 themoundwiki/content/guides/。
- 正文内链 /guides/isolation-guide、/guides/extraction-guide、/guides/combat-survival-guide → 均存在。
- 正文与 title/description 相符。
- 「Forest Awakens」计时器表述与 extraction-guide（~30-35 分钟）及 combat-survival-guide（L193-197）完全一致。
- "Berserker" 名词与本站 maps-locations-guide / stealth-guide 内敌人设定一致。
- 术语注意点（非阻断、非新引入）：本站「Ox Cart / Ox Wagon」两种写法并存（extraction/maps/solo/contracts 用 Cart；coop-strategy/enemy-bestiary/weapons 及 isolation-guide 的 Related 标题用 Wagon）。blood-moon 全文统一用 "Ox Wagon"，与 coop-strategy-guide「Ox Wagon Anchor」标题及 enemy-bestiary 一致，未引入新的不一致。
- sources 三段式（Official/Editorial + Honesty note）结构与 isolation-guide.md 完全一致。

**d) 诚实标注: ✅（本文亮点）**
- 文首 + 文末双诚实声明：UI 无名称、官方无说明、「Blood Moon」为单来源术语、单一指南细节全部 [Unconfirmed]、Steam 社区正文因自动化工具抓取受限而未引用玩家原话。
- 无把推测当确证之处。

**e) 体量: ✅** 正文（去 frontmatter，去掉 Sources/Related 后）1312 词，在 800–1500 区间。（若计入 Sources+Related 全量词数 1557，本站既有指南同样超线——isolation-guide 1500、extraction-guide 1843、combat-survival-guide 2938，故非问题。）

**f) 线上状态: 已上线 ✅**
- https://themoundwiki.vercel.app/guides/blood-moon-guide → HTTP 200；sitemap.xml 已含 blood-moon-guide。
- 注册逻辑确认：themoundwiki/lib/guides.ts `getAllGuides()` 自动扫描 content/guides/*.md，文件名即 slug。文件已正确注册、已部署。
- 内容检查无需修改 → 不需「修复后重新部署」。
- 信息项：该文件当前在 git 为 untracked（未 commit）。若后续走 git 触发部署，须随批次 commit，否则 git 部署会丢失此页；当前线上为直发（vercel CLI）产物。

**g) 模板参照: ✅** 与 isolation-guide.md 对比：frontmatter 同构、Sources 分层（Official/Editorial + Honesty note）同构、Related Guides 反向互相收录（isolation-guide ↔ blood-moon 互相链接）。

**问题清单:** 无。

---

## WebSearch 断言 → 来源对应（MUST 附）

### grainrot performance-lag-fix-guide.md
1. 「Steam app 4450620，2026-08-07 上线，i5-4590/Ryzen 5 2600 最低配置」→ store.steampowered.com/app/4450620/GRAIN_ROT + vgtimes.com/games/grain-rot/system-requirements + gamespress.com（Grain Rot launching August 7）
2. 「社区性能/联机文存在」→ thecpuguide.com/gaming/grain-rot-lagging-in-multiplayer-pc/；2upskill.com/grain-rot-lag-spikes-in-multiplayer-lobbies-low-fps-fix-2026-guide/；2upskill.com/grain-rot-infinite-loading-screen-fix-how-to-solve-startup-freezes-and-endless-loads-in-2026/；hone.gg/blog/grain-rot-best-pc-settings/
3. 「VaporLens 将 Poor optimization 列为 top negative」→ vaporlens.app/app/4450620/grain_rot/stats（"Poor optimization and performance issues" 为 top criticism / Most dangerous issue）
4. 「Corrupted 基于声音追踪玩家」→ bloody-disgusting.com（co-op horror title GRAIN ROT out now）+ MobyGames 条目
5. 「联机为 host 依赖」→ The CPU Guide / 2UpSkill 修复清单逐条对应（换 host、以太网、Double NAT、VPN、关后台、停节能网卡、SSD、删缓存、-dx11 等）

### themound blood-moon-guide.md
1. 「app 2569760 / ACE Team / NACON / 2026-07-15」→ help.steampowered.com（appid=2569760）+ gameswelt.de + gamespress.com
2. 「NoobFeed How to Avoid Blood Moons：灰/红噪声条、心跳+红月预警、安静不取消、击败或存活、Tulu 圆筒强制、Black Ichor」→ noobfeed.com/articles/the-mound-omen-of-cthulhu-blood-moons
3. 「森林侵略触发家族（火器/折枝/红眼鸟/牛鸣/胸甲冲刺/Medallion/号角）+ 红/紫月=危险」→ gameplay.tips/guides/the-mound-omen-of-cthulhu-essential-survival-tips.html
4. 「Tulu 圆筒 / Black Ichor 多方印证」→ nerdschalk.com（Tulu Cylinder Locations / Complete the Tulu Cylinder Contract）+ gamerguides.com/the-mound-omen-of-cthulhu/database/items/tools-and-artifacts（Jar of Black Ichor）
5. 「Forest Awakens ~30–35 分钟」→ 本站 extraction-guide.md + combat-survival-guide.md + gameplay.tips（"if the forest begins to awaken or the timer expires… continuously spawn"）
6. 「Berserker 敌人」→ 本站 maps-locations-guide.md / stealth-guide.md（内部一致性，非外部）

---

## 基建备注（仅信息，供 Coordinator 决策）

| 站点 | 目标 URL | HTTP | sitemap | 注册机制 | 备注 |
|------|---------|:--:|:--:|---------|------|
| themoundwiki | /guides/blood-moon-guide | 200 | 已含 | 目录自动扫描 | 已上线，无需修复/重部署；文件 untracked，commit 批次需带上 |
| grainrotwiki | /guides/performance-lag-fix-guide | 404 | 未含 | 目录自动扫描 | 未部署属预期（整批未提交）；QA 通过后 commit+deploy 即自动上线 |

---

## QA 结论（Coordinator 摘要）

```
QA 结果: ✅ PASS (2/2) | ⚠️ WARN (0) | 🔴 FAIL (0)
- grainrotwiki/performance-lag-fix-guide.md: ✅ 通过，无问题（尚未部署，属预期）
- themoundwiki/blood-moon-guide.md: ✅ 通过，无问题（已上线 HTTP 200，无需重部署）
需要主 Agent 关注: 本批文件均 untracked，commit 时须包含 4 站全部指南；无内容需修复。
```
