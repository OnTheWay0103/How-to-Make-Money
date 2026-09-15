# BUILD-GATE 2026-09-16 — 候选池建站门禁复核（6 候选）

> 任务编号：BUILD-GATE-2026-09-16
> 材料版本：`keyword-results/CANDIDATE-POOL.md`（最后更新 2026-09-06）
> 执行日期：2026-09-16（周三）
> 岗位：游戏侦察员（先读 `docs/agents/11-岗位卡-游戏侦察员.md` + `12-Profile-游戏侦察员.md`）
> 门禁口径参考：`.claude/skills/build-game-site.md`（Phase 0.5 选择规则 / Phase 2 自动决策规则）
> 模式：**只读复核** — 未建站、未改任何 `*wiki/` 目录、未 commit/push、未改候选池
> 格式参照：`.agent/scout-gate-9-11.md`（注：任务书写的 `keyword-results/scout-gate-9-11.md` 不存在，实际归档在 `.agent/`）

---

## 门禁口径说明（MUST 先读，影响 GO/NO-GO 判定）

三份文档给出三个不同口径，本报告的处理方式如下：

| 来源 | 原文口径 | 本次采用 |
|------|---------|---------|
| 主管任务书（2026-09-16） | **评分 ≥15 才建站**，每天最多 1 个新站 | ✅ **作为主门禁线** |
| `12-Profile-游戏侦察员.md`「评分规则」 | ≥17 强烈推荐 / 15-16 推荐观望 / 12-14 观望 / <12 放弃 | ✅ 作为分级标注 |
| `build-game-site.md` Phase 0.5 / Phase 2 | 评分 ≥15 → 自动继续 | ✅ 与任务书一致 |
| `CANDIDATE-POOL.md` 记录的 9/3 前例 | 实际开门线 **19/20** | ⚠️ 前例，本次不采用（会与任务书 ≥15 冲突） |

**结论不受口径影响**：本批 6 个候选中，**仅 Silver Pines（17/20）同时满足 ≥15 与 ≥17**；其余全部 ≤14。
即使主 Agent 沿用 19/20 前例，本批同样只有一个候选（Silver Pines）在最高分区，只是会被判 NO-GO → 「今天不建站」。

四维分值沿用 Profile 12 / 机制文档口径：搜索需求 /5 + 生命周期 /5 + 内容扩展 /5 + 竞争结构 /5 = **/20**。

**数据方法**：Steam 官方 store API 直取（`appdetails` / `appreviews` / `storesearch` / news RSS）+ SteamCharts 直读 + Google Suggest 直采 + WebSearch/WebFetch 交叉核验。
**DNS 手法**：全部 Steam 系请求带 `--resolve` 指定真实 IP（本机 DNS 投毒）。
**数据限制**：SteamDB 403、SteamSpy 403、Gamalytic API 403（**9/11 可用的 `api.gamalytic.com` 现已改为必须 API Key**）、fandom.com 本机 ECONNREFUSED、raijin.gg 403。wiki 存在性依赖 WebSearch 多语检索 + 站点可达性探测交叉判定，未能逐个 fandom 页面直读。

---

## 总览表

| 候选 | 池内分 | 今日分 | 变动 | 实际发售 | 评测数 / 好评率 | 峰值 CCU | 价格 | AdSense | 三语组织化 wiki | 门禁 |
|------|:--:|:--:|:--:|------|------|:--:|:--:|:--:|------|:--:|
| **Silver Pines** | 19 | **17** | -2 | 未发售 **10/8**（22 天后） | 0；**Demo 802 / 95.9% Overwhelmingly Positive** | — | 未公布 | `[5]` 成熟内容 | ❌ **EN/CN/JP 全无** | ✅ **GO** |
| Approximately Up | 17 | **14** | -3 | 已发售 8/6（41 天前） | 1,064 / 94.2% Very Positive（30d 331 / 91%） | 2,713 | $24.99 | `[]` 干净 | ❌ 无 wiki，但攻略站已占 4 个热长尾 | ❌ NO-GO |
| Ex Sanguis | 16 | **13** | -3 | 已发售 **9/10 EA**（6 天前） | 51 / 80.4% Very Positive（全在 6 天内） | **40** | $17.99 | `[2,5]` 血腥 | ❌ 无 wiki（中文已有 1 篇构筑指南） | ❌ NO-GO |
| Neverway | 16 | **14** | -2 | **已推迟到 2027** | 0（未发售） | — | n/a | `[2,5]` 血腥 | ⚠️ **meowdb.com 组织化 pre-launch 数据库已建** | ❌ NO-GO |
| Ledgerbound | 16 | **12** | -4 | 已发售 8/13（34 天前） | 603 / 93.2% Very Positive（30d 402 / 92%） | 864 | $29.99 | **`[1,5]` 性暗示 → 一票否决** | ❌ 无 wiki（仅 chaptercheats） | ❌ NO-GO |
| Nimbit Frontier | 18 | **12** | -6 | 已发售 8/17 EA（30 天前） | 116 / 97.4% Very Positive | 239 | $13.99 | `[]` 干净 | ❌ 无 wiki（但零检索需求） | ❌ NO-GO |

---

## 1. Silver Pines ✅ **GO（17/20）** — 本批唯一 GO

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **未发售，2026-10-08（22 天后）**，`coming_soon=true` | Steam appdetails appid **2333000**（9/16 直取） |
| 价格 | 未公布（无 `price_overview`）`[Unverified]` | Steam appdetails |
| 开发/发行 | Wych Elm（瑞典/挪威 5 人远程团队，处女作；成员做过 Helldivers 2 / The Darkness / Yoku's Island Express）/ **Team17** | Steam appdetails + Wikipedia |
| 平台 | PC（Steam + Epic）/ PS5 / Xbox Series X\|S / Switch / Switch 2 | Steam appdetails（Steam 侧）+ 媒体汇总 |
| 语言 | EN / **简中 / 繁中 / 日文** / FR / DE / ES / PT-BR / RU | Steam appdetails `supported_languages` |
| 主游戏评测 | **0**（未发售） | Steam appreviews API |
| **Demo 评测** | **802 条 / 769 正 33 负 = 95.9%，Overwhelmingly Positive**（Demo appid **4540100**，2026-06-01 上线） | Steam appreviews API（9/16 直取）**← 本批最强需求实证** |
| CCU | —（未发售，SteamCharts 无页面） | — |
| Followers | **13.2K**（Steam） | datahumble.com/app/2333000 |
| wishlist | **"200K+ across all platforms"**（官方 Steam 新闻 2026-06-19）；Steam 单平台第三方估 **~83K**（Raijin, 2026-07-06）/ 池内记 83-112K | Steam news RSS（官方一手）+ Raijin（第三方，口径不一） |
| 近期动态 | 9/8 Steam Deck Verified；9/3 开发博客（动画与 rotoscope）；8/20 IGN Preview；8/27 Gamescom demo | Steam news RSS |
| 营销力 | Team17 发行 + Game8 专访 + IGN Preview + Next Fest 主推 + Convergence Showcase | 媒体检索 |

### Wiki 竞争（EN / CN / JP 全面检查 — 本站矩阵的胜负手）

- **英文**：fandom ❌ 无；wiki.gg ❌ 无；thegameswiki ❌ 无（本站 429 限流，以 WebSearch site 检索交叉判定）；无 Steam 社区攻略帖
- **中文**：灰机 wiki ❌ 无；bilibili wiki ❌ 无；萌娘百科 ❌ 无。仅有**百科条目**：[百度百科「银松镇」](https://baike.baidu.com/item/%E9%93%B6%E6%9D%BE%E9%95%87/67486234)、[acgwiki.tw「銀松鎮」](https://acgwiki.tw/games-601150) — 均为资料条目，非攻略
- **日文**：wikiwiki.jp ❌ 无；atwiki.jp ❌ 无；seesaa ❌ 无（检索被「Silver Pinap Berry / Silverload / ドラクエウォーク シルバリヌス」等同名异作污染，逐个排除后确认无本作 wiki）
- **唯一沾边**：[apocanow](https://www.apocanow.com/cheats/multi/31735/silver-pines)（EN/ES/IT/PT 四语）—— **实测为模板 stub**：单页 6 条泛泛生存恐怖建议（电话亭存档 / 省弹药 / 装弹暴露 / 地图标记 / 谜题不复杂 / 找捷径），**无任何地点名、道具名、流程**，含 `"For example: ."` 空占位与顺序编号的模板化 Related 区块 → 判定为**合成/占位内容，非实质竞争**
- ⚠️ **两项真实风险**：
  1. **Game8 已发 [Demo Review](https://game8.co/articles/reviews/silver-pines/silver-pines-review-demo) 与[开发者专访](https://game8.co/articles/featured/silver-pines-has-multiple-endings-but-not-in-the-way-you-think)** → Game8 有在发售周内直落 guide hub 的强动机（对照 Moonlighter 2 的 9/3 教训：大站发售即铺满）
  2. **Team17 是中型发行商**，发售前后有落地官方/授权 wiki 的可能（与 crimsonmoonwiki 同类风险，而 crimsonmoonwiki 建站后风险未落地）
- ✅ **但 9/16 当日实测：EN/CN/JP 三语零组织化 wiki，窗口仍开**

### 内容深度（可支撑 20+ 篇）

已从官方商店页 / Demo 描述 / 多家 Preview 交叉核实到的**真实机制**（非推测）：

- **存档**：无自动存档，**投币电话亭是唯一存档点**（Red Walker 打电话给神秘资助人）；死亡丢档至上次电话亭
- **经济**：**save coins**（存档硬币）在汽车旅馆**自动贩卖机**兑换急救包 / 胶带 / 子弹
- **背包**：类 RE 有限背包 + **通用道具箱**（universal item box）+ 可发现的**腰包（hip pouches）扩容**
- **制作**：**玻璃瓶调配草药**提升效力
- **耐力**：**喝咖啡提升总耐力**（用于闪避/奔跑），但喝咖啡动作期间暴露
- **战斗**：近战武器有**耐久**，用**胶带修理**；枪械弹药有限，**修枪/装弹为技能检定（skill check）**；闪避消耗有限能量
- **武器**：手枪 / 霰弹枪 / 匕首（stiletto）—— 部分武器兼作探索工具（开门/破障）
- **地图**：手绘标记 + **相机拍照贴到地图**上；未开区域先标注
- **结构**：类银河城**工具门 + 回溯 + 单向捷径**；谜题为战斗间喘息，卡关多为缺道具而非解法复杂
- **敌人**：多种普通怪 + **hulking bosses**
- **叙事**：私家侦探 Red Walker 寻找失踪音乐人 **Eddie Velvet**；Lynchian / Twin Peaks / Silent Hill / Alan Wake 风格；**多结局**（Game8 专访确认，且"不是你想象的那种多结局"）

→ 现实可支撑 **15-19 篇**（P0 9-10 篇发售前可确证 + P1 6-9 篇发售后补）

### AdSense 合规

- 主游戏 `content_descriptors.ids = [5]`（General Mature Content），官方说明原文：*"This game contains blood, violence, horror themes and general mature themes unsuitable for younger players."*
- ⚠️ 注意 **Demo 的说明更重**：*"violence, **gore, blood**, alcohol reference and bad language throughout."* → **含血腥/gore**，但**未触发 `[2] Frequent Violence or Gore` 标记**（Steam 分级仅给 `[5]`），且**无 `[1]` 裸体/性内容**
- 定级：**中等可控，与已建站的 crimsonmoonwiki 同级**（crimsonmoonwiki 已上线且通过合规）。**不构成 Blood Dungeon / Ledgerbound 那种一票否决**
- 建站要求：沿用现有合规改造规矩（不写血腥描写、不放大恐怖画面、不配 gore 图），走已建 horror 站的既有模板

### 四维评分

| 维度 | 分 | 依据 |
|------|:--:|------|
| 搜索需求 | **4/5** | Demo **802 评测 / 95.9% Overwhelmingly Positive**（未发售游戏的最强需求实证）+ 13.2K followers + 官方 200K+ 全平台 wishlist；扣 1：发售前无实际流量，且 wishlist 口径分歧大（200K 全平台 vs ~83K Steam 单平台），真人 SERP 检索量今日尚低 |
| 生命周期 | **4/5** | 生存恐怖 + 类银河城长尾稳定，回溯/收集/多结局天然反复查阅；Team17 支持有 DLC 可能；扣 1：单机线性、无 live-service 钩子 |
| 内容扩展 | **5/5** | 上表 12 条真实机制系统 = 20+ 篇；本批最高 |
| 竞争结构 | **4/5** | EN/CN/JP **零组织化 wiki**（apocanow 模板 stub 不计）；扣 1：Game8 已发 Demo 评测+专访（guide hub 风险）+ Team17 官方 wiki 风险 + 距发售 22 天 |
| **合计** | **17/20** | 距 9/3 的 19/20 前例差 2 分 |

### ⚠️ 与 9/11 结论的差异（请主 Agent 显式决策）

9/11 复核同样给 17/20 且判 GO，但**建议不占用当天名额、推迟到 9/25-10/1 再建**，理由是"早建会白放 2 周索引期"。

**本次复核认为该理由不成立，建议今天建**：

1. **索引期不是"白放"，是累积**。新域名从被抓取到稳定排名通常需 2-6 周——22 天提前量落在健康区间；反过来 9/25-10/1 才建（距发售 7-13 天）**有赶不上发售首波索引的实质风险**。
2. 矩阵自身已反复验证"发售前建站抢索引"：Crimson Moon 提前 4 天、Fallen Tear 提前 16 天、Welcome to Elderfield 提前 11 天。22 天只是比这些更宽裕。
3. **Team17 / Game8 抢先风险随时间单调递增**，不随时间递减——今天不建，窗口只会更小。
4. **今天已有足够可确证素材**：Demo 已上线 3.5 个月（802 评测、多家 Preview、developer AMA、3 篇 dev blog），发售前可确证的内容足以撑起 9-10 篇 P0；剩余深度内容排到 10/8 发售后 48h 内补，不违反「禁止编造机制」。

若主 Agent 坚持 9/25-10/1 口径，则本批 **6 个候选全部 NO-GO，今天不建站**，资源转 EXPAND。

---

## 2. Approximately Up ❌ NO-GO（14/20）— 卡在竞争结构 + 搜索需求衰减

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | 已发售 2026-08-06（41 天前） | appdetails appid **3904850** |
| 价格 | $24.99（全价，无折扣） | appdetails |
| 评测 | **1,064 / 94.2% Very Positive**；近 30 天 **331 条 / 91%** | appreviews API + 商店页 |
| 增速 | 9/11 API 1,045 → 9/16 API 1,064 = **5 天仅 +19 条（≈3.8/天）**，对比 30 天均值 11/天 → **明显衰减** | 9/11 报告 vs 今日直取 |
| CCU | 当前 393 / 24h 398 / **全时峰值 2,713**；30 天均值 632.57，**环比 -39.46%** | [SteamCharts](https://steamcharts.com/app/3904850) |
| Followers | 6.7K；平均游玩 20.6h | datahumble.com/app/3904850 |
| 更新 | 极活跃：9/13 ×2、9/14、9/15 连续更新（1.0.201→1.0.204） | Steam news RSS |

**Wiki 竞争**：fandom ❌ 无（本机 fandom 不可达，以 WebSearch site 检索交叉判定，**再次未能复现池内记的"fandom 空壳 wiki"**）；wiki.gg ❌ 无；灰机/bilibili/萌娘 ❌ 无（中文检索空结果）；日文 ❌ 无。

**但攻略站已占住最热的 4 个长尾（竞争结构从 9/11 的 4/5 降到 2/5）**：
- [SteamAH《Ship Building Guide: From Frame to Flight》](https://steamah.com/approximately-up-ship-building-guide-from-frame-to-flight/)（框架/焊接/重心/RCS 端口颜色/推进器功率，写得相当细）
- [SteamAH《How to Land on the Moon》](https://steamah.com/approximately-up-how-to-land-on-the-moon/)
- [kosguides《How to Find Aundara》](https://kosguides.com/20417-approximately-up-how-to-find-aundara/) + [《How to Enter Black Hole Tunnel》](https://kosguides.com/20744-approximately-up-how-to-enter-black-hole-tunnel/)
- [ggames.com.br 葡语建造指南](https://ggames.com.br/dicas-tutoriais/guia-construcao-nave-aproximadamente-up/)

**搜索需求（Google Suggest 直采，实测）**：`approximately up game wiki` 是仅次于裸名的第 2 联想词 → **真实需求存在且未被满足**；但 `how to build a ship` / `how to land on the moon` / `how to land` / `how to save ship` / `how to mirror` / `how to use bps` 等高频长尾**已被上述攻略站占据**。

**AdSense**：`content_descriptors.ids = []`，完全干净。

**四维评分**：搜索需求 **3/5**（wiki 检索需求真实，但 CCU 30 天 -39%、评测增速衰减到 3.8/天、$24.99 中高价、名字泛化）；生命周期 **4/5**（Steam Workshop UGC + 单人开发者高频打补丁）；内容扩展 **4/5**（15 星球 / 模块化部件 / Workshop / 物理建造）；竞争结构 **2/5**（无 wiki 但 SteamAH + kosguides + ggames 已把飞船建造/登月/黑洞/Aundara 四个热长尾写透）→ **合计 14/20**。
**结论：池内「9/10 复查」到期，判定 NO-GO — 窗口已过。** 9/11 时它在涨（775→1,045），今天已停（+19/5 天）且 CCU 加速下滑，同时竞争从"近乎零"变成"四大长尾被占"。

---

## 3. Ex Sanguis ❌ NO-GO（13/20）— 卡在搜索需求（玩家基数全批最低）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | 已发售 **2026-09-10 EA**（6 天前） | appdetails appid **3275050** |
| 价格 | **$17.99**（原价 $19.99，-10% 首发折扣持续中） | appdetails |
| 开发/发行 | Lightbulb Crew（Othercide 团队）/ Firesquid | appdetails |
| 评测 | **51 / 80.4% Very Positive**（9/11 时 7 条 / 42.9% → 6 天涨 44 条，**首周口碑从 Mixed 修复到 Very Positive，是正向改善**） | appreviews API / 商店页 40 条 75% |
| CCU | 当前 11 / 24h 16 / **全时峰值仅 40**；30 天均值 20.92 —— **本批最低，比 Nimbit Frontier 还低 6 倍** | [SteamCharts](https://steamcharts.com/app/3275050) |
| wishlist | `[Unverified]` — 多轮检索仍无权威数字 | — |

**Wiki 竞争**：fandom ❌ / wiki.gg ❌ / 灰机·bilibili·萌娘 ❌ / wikiwiki·atwiki ❌。
⚠️ **但中文已有实质攻略**：[搜狐《血色序曲构筑思路与技能搭配指南》](https://www.sohu.com/a/1062793624_122678647)（2026-08-14）——已把**爆发型 / 持续压制型 / 控场型 / 环境利用型四种 build 方向**和"先定核心技能再配 2-3 辅助"的方法论写透，正是本站最想占的 Tier/Build 反复查阅型内容。
⚠️ 日文检索被同名异作污染严重（Path of Exile 的 *Essentia Sanguis* 爪、Dune Awakening 的 exsanguination kit），逐个排除后确认无本作 wiki。

**搜索需求（Google Suggest 直采）**：`ex sanguis how to` → **空结果**；`ex sanguis build` → **空结果**。联想词为零 = 真实检索量极低。

**内容深度**：EA 首发 2 biome（Desert / City）+ 1 主 Boss + 2 小 Boss + 3 个 Stillae 原型 + 12 traits。时间线机制（AP 消耗推后回合、加速/延迟/换位）+ XCOM 式环境互动（爆炸/点燃/视线阻挡/击退/侧翼/DoT）题材优质，但当前量写不出 15 篇。路线图覆盖至 2027（新敌人/Boss/biome/天赋树/周挑战/4 人 Co-op）→ 长期可成长。

**AdSense**：`content_descriptors.ids = [2, 5]`（Frequent Violence or Gore + General Mature Content），官方说明为风格化血液特效，**无裸体/性内容** → 中等可控。

**四维评分**：**搜索需求 2/5**（CCU 峰值 40、6 天 51 评测、零联想词、无 wishlist 证据）；生命周期 4/5（EA 6 个月 + 2027 路线图）；内容扩展 3/5（当前 3 原型/3 Boss/2 biome）；竞争结构 4/5（EN/JP 零 wiki，但**中文 1 篇已把 build 方法论写透**）→ **合计 13/20**（9/11 为 15/20，**降 2**）。
**建议**：EA 内容更新 2-3 轮后（或 12 月大版本）再复核。今天不是时点。

---

## 4. Neverway ❌ NO-GO（14/20）— 卡在发售窗口（已推迟到 2027）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **`release_date = "2027"`，`coming_soon = true`** —— 池内「10 月窗口未定」已确认**推迟到 2027**（官方 8/20 Steam 新闻 + 8/25 多家媒体） | appdetails appid **2318330** + Steam news RSS |
| 价格 | 无 `price_overview`（未发售） | appdetails |
| 开发/发行 | Coldblood Inc.（温哥华 3 人 + 合作者）/ Outersloth（Innersloth 的独立基金） | appdetails |
| 评测 | **0**（主游戏未发售；Prologue 免费版 appid 4520130 独立计） | appreviews API |
| wishlist | **"Over half a million wishlists!"**（官方 Steam 新闻 2026-04-27；2025-11-13 曾报 300K+） | Steam news RSS（官方一手） |
| 团队 | Pedro Medeiros（Celeste / TowerFall 像素画师）、Isadora Sophia（前微软高级工程师，自研 Murder Engine）、**Disasterpeace 配乐**（Fez / Hyper Light Drifter / It Follows） | 媒体检索 + 官方 |
| 近期动态 | 8/20「Release update and a peek into development」；4/9 Prologue 上线，4/10-4/20 连发 4 个 patch | Steam news RSS |

**推迟原因（官方原文）**：玩家对 Prologue 的反馈 + 内部 playtest 显示后期章节与区域"比原计划长得更大"，需要更多时间；明确表示不会再延期。

**Wiki 竞争 —— 池内「零 wiki」判断今日已失效**
- fandom ❌ 无；wiki.gg ❌ 无；中文（百度/灰机/bilibili/萌娘）❌ 无；日文 ❌ 无
- ⚠️ **但英文已有组织化 pre-launch 数据库 [meowdb.com/db/neverway](https://meowdb.com/db/neverway)**（自述 "Pre-launch database for Coldblood's nightmarish life sim RPG"）：**18 角色 / 194 物品（含 9 作物）/ 137 配方 / 73 状态效果 / 14 技能 / 27 敌人 / 13 系统 / 7 个 Prologue 区域**，并**自带配方规划器与对比工具**、Guides 分区（walkthrough / saving / ending explained / prologue story / glossary）、build 覆盖追踪页。数据自 Prologue 与 press kit 提取，声明将改名 NiaDB。
- → 这是**结构化的竞品数据库**，正是本站「反复查阅型内容（表格/tier/配方速查）」的正面竞争。

**四维评分**：搜索需求 4/5（500K+ wishlist 是真实的头部量级，联想词 `neverway release date` / `switch` / `ps5` / `physical release` 均有）；**生命周期 2/5**（**发售推到 2027 → 今天到发售有 15+ 个月无商业流量**，SOP 明确要求只建"最近 6 个月内发售或即将发售"的游戏，本作落在窗口外）；内容扩展 5/5（20h 流程 / 35+ 区域 / 20 角色 250+ 日常 / 194 物品 / 多结局 / 12 角色可恋爱）；竞争结构 3/5（meowdb 组织化数据库已建）→ **合计 14/20**。

**结论**：**双重 NO-GO** —— ① 发售窗口在 15 个月外（即便满分也不能建）；② 池内"零 wiki"前提已不成立。
**建议候选池动作（由主 Agent 决定）**：把复查日改到 **2027 年发售日确定后 3 个月**（例如官宣发售日后），并把池内「❌ 无 wiki」改为「⚠️ meowdb pre-launch 数据库」。

---

## 5. Ledgerbound ❌ NO-GO（12/20）— AdSense 一票否决（维持 9/11 判定）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | 已发售 2026-08-13（34 天前；原定 8/11，Steam 内容审查延迟 2 天） | appdetails appid **3315060** |
| 价格 | **$29.99**（全价，无折扣） | appdetails |
| 开发/发行 | OmniMegaSuperCorp（前 Helldivers 2 开发者创立），自发行 | appdetails |
| 评测 | **603 / 93.2% Very Positive**；近 30 天 **402 条 / 92%**（9/11 API 579 → 9/16 API 603 = **5 天 +24，≈4.8/天**，而 30 天均值 13.4/天 → 衰减） | appreviews API + 商店页 |
| CCU | 当前 99 / 24h 142 / **全时峰值 864**；30 天均值 206.27，**环比 -28.25%** | [SteamCharts](https://steamcharts.com/app/3315060) |
| 更新 | 9/15 Patch #6「Barks & Burnout」；8/14-8/26 共 6 个 patch（维护正常） | Steam news RSS |
| DLC | 1 个 | appdetails |

### AdSense —— 硬否决项（一票否决，与 9/11 判定一致）

`content_descriptors.ids = [1, 5]`（**Some Nudity or Sexual Content** + General Mature Content）。Steam 官方说明原文：

> "…there is a lot of swearing and **sexual humor** … there is a lot of **innuendo**, and the text and VO do get fairly spicy—think **three out of five peppers** … **crude language…like lots of it**; **alcohol and drug use**; the aforementioned **steamy, non-visually explicit romance**; and **mentions of suicide**."

同时命中**性暗示 + 粗俗语言 + 药物使用 + 自杀提及**四项，与项目已固化的 AdSense 治理规则冲突（Blood Dungeon 因"裸体/粗俗内容"被否、Machine Party 因血腥虐杀被否）。
**→ MUST NOT 建站，无论其他维度得分多少。**

**Wiki 竞争**：❌ 无 fandom/wiki.gg/官方 wiki/灰机/bilibili/萌娘/wikiwiki/atwiki；仅 [chaptercheats 的 Walkthrough Part 1 + 若干 hints](https://www.chaptercheats.com/cheats/pc/787753/ledgerbound-cheat-codes)（含 A.R.T.E. / 装备 Liability / HR 支线目标与兑换券的入门说明）。竞争极低但**无法利用**。

**搜索需求（Google Suggest 直采）**：`ledgerbound how to` → **空结果**；`ledgerbound guide` → 仅裸词本身。联想词为零 = 检索量极低。

**四维评分**：搜索需求 2/5（$29.99 + CCU 峰值 864 + 30 天均值 206 且 -28% + 零联想词）；生命周期 3/5；内容扩展 3/5；竞争结构 4/5（仅 chaptercheats）→ **合计 12/20**，**叠加 AdSense 硬否决**。

---

## 6. Nimbit Frontier ❌ NO-GO（12/20）— 池内自设的升级条件未达标

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | 已发售 2026-08-17 EA（30 天前） | appdetails appid **2477710** |
| 价格 | $13.99（全价） | appdetails |
| 开发发行 | Megasploot（2 人团队），自发行 | appdetails |
| 评测 | **116 / 97.4% Very Positive**（9/11 API 114 → 9/16 API 116 = **5 天仅 +2**，实质停涨） | appreviews API |
| CCU | 当前 27 / 24h 35 / **全时峰值 239**；30 天均值 66.76，**环比 -36.99%** | [SteamCharts](https://steamcharts.com/app/2477710) |
| 销量估 | ~4.1K 份 / ~$57.1K 营收 / ~3.9K followers / **wishlist 估 29.6K，全球榜 #1859** / 首周销量预测 5.9K | gam evalio / gamedata.wtf / datahumble 第三方模型值 `[Unverified]` |
| 语言 | **仅英文** | appdetails `supported_languages` |
| 更新 | 8/17 EA 后仅 4 个 patch（8/20、8/23、8/25、9/1），**9/1 后停更 15 天** | Steam news RSS |
| EA 计划 | 2 人团队预计 EA 1.5 年，+新 biome / 15+ 新 Nimbit 物种 / 传说 Nimbit / 恋爱结婚 / 小镇节庆 | 媒体检索 |

**池内自设的升级条件**：`「首周 >300 评测可升级」` —— **实测 116 条，达标率 39%，未通过**。池内评分 18 分今日无法维持。

**Wiki 竞争**：fandom ❌ / wiki.gg ❌ / 灰机·bilibili·萌娘 ❌ / wikiwiki·atwiki ❌ —— 三语全无。
**但这不是优势，是需求不足的另一面**：`nimbit frontier how to` → **Google Suggest 空结果**；`nimbit frontier wiki guide` 在 WebSearch 返回 **"No links found"**。游戏在中文互联网与日文互联网几乎零足迹。

**AdSense**：`content_descriptors.ids = []`，完全干净。

**四维评分**：搜索需求 2/5（116 评测 / CCU 峰值 239 / 仅英文 / 首周销量预测 5.9K / 零联想词）；生命周期 3/5（EA 1.5 年 **但已停更 15 天**，2 人团队节奏存疑）；内容扩展 4/5（Nimbit 养成 + 栖息地 + roguelite 地牢 + 小镇生活）；竞争结构 3/5（零 wiki，但零检索需求）→ **合计 12/20**（9/11 为 18/20 的池内分，**今日降 6**）。

---

## 附：候选池外快检 —— Good Heavens!（今日 9/16 发售，池内 15 分「未深查」）

因池内标注「未深查」且**恰在今日 EA 发售**（矩阵最高价值模式：上线当日建站），顺带做了一轮轻量核验：

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **2026-09-16 EA（今日）**，`coming_soon=true` | appdetails appid **1617120** |
| 开发/发行 | Nowhere Studios（土耳其）/ **2P Games** + WarpSpeed + Nowhere | appdetails |
| 评测 | 0（尚未解锁） | appreviews API |
| Followers | **仅 2.3K** | datahumble.com/good-heavens-1617120 |
| wishlist | `[Unverified]` — 无权威数字 | — |
| AdSense | Steam `content_descriptors.ids = []` 干净；⚠️ 但巴西 dejus 定级含 `Nudez`（裸体）描述符 → **需复核，可能隐藏风险** | appdetails `ratings` |
| 内容深度 | 6 条科技树（Warfare / Trickery / Sorcery / Homesteading / Exploration / Influence）、1-8 人联机、程序生成浮空岛、地牢与 Boss、无饥饿/理智惩罚 | 商店页 + 媒体 |
| Wiki | EN/CN/JP 无组织化 wiki；但 2P Games 是**中国发行商**（中文名《背锅天神》），机核 / 17173 / 游侠 / 3DM / 网易**已发通稿**，中文攻略站落地速度快 | 媒体检索 |

**判定：不推荐今天建。** 理由：**followers 仅 2.3K**，与池内「热度低」判断一致，玩家基数过小；且中国发行商背景意味着中文攻略站（游侠/3DM/机核）会在数日内铺开，属于"DOLOC TOWN 教训"的反向情形（中文竞争会快速形成）。
**若主 Agent 仍想评估，建议另派一次完整侦察（wiki 三语深查 + wishlist 数字 + 巴西定级描述符核实）。**

---

## 今日建站建议（2026-09-16）

### 1) 建议今天建的：**Silver Pines**（17/20）→ `silverpineswiki`

- **唯一理由**：本批唯一同时满足「**EN/CN/JP 零组织化 wiki** + **Demo 802 评测 95.9% Overwhelmingly Positive** + **AdSense 无性/裸体标记** + **发售日 10/8 在 22 天内**」的候选，且完全复刻本矩阵已验证的"发售前建站抢索引"模式。
- **窗口价值**：今天建 → 3 周多爬取/索引累积 → 10/8 发售首波搜索直接收割。
- **MUST 注意**：
  1. **MUST 主攻长尾，MUST NOT 依赖裸词 `Silver Pines`** —— 该词被大量同名实体占据（Silver Pines 移动房屋公园 / Silver Pines 医疗集团 / Silver Pines Ranch 系列 / Silver Pines 康复中心 / WoW 的 Silverpine Forest），Google Suggest 裸词前 10 条里本作仅占 3 条。**正确锚点前缀是 `silver pines game`**（联想词实测有效）。
  2. **Game8 已发 Demo Review + 专访** → 建站必须在**结构化程度与深度**上压过它（表格优先、版本号标注、Demo 实测数据）。
  3. **Team17 官方 wiki 风险** → 尽早发布并让 Google 先收录（今日建优于月末建）。
  4. 依赖约定：`pnpm install` + geist 自托管字体 + `vercel.json` 的 `installCommand: pnpm install`（CLAUDE.md）。
  5. AdSense：含 blood/violence/horror themes → 沿用 crimsonmoonwiki 的合规写法（不写血腥描写、不配 gore 图）。
- **风险**：价格尚未公布 `[Unverified]`；主游戏 0 评测，实机口碑待 10/8 验证。**建议发售日 10/8 后 48h 内做一次快速复核**，并按实际评测调整 P1 内容。

### 2) 明确不建议

Approximately Up（14/20，窗口已过 + 四大长尾被占）、Neverway（14/20，发售推到 2027 + meowdb 数据库已建）、Ex Sanguis（13/20，CCU 峰值 40）、Ledgerbound（12/20 + **AdSense 一票否决**）、Nimbit Frontier（12/20，池内自设升级条件未达标）、Good Heavens!（followers 2.3K，热度不足）。

### 3) 若主 Agent 坚持 9/25-10/1 才建 Silver Pines

则**本批 6 个候选全部 NO-GO，今天不建站**，资源转存量站 EXPAND 排期。

---

## 候选池修改建议（**MUST NOT 由本 Agent 执行**，供主 Agent 决策）

| 候选 | 建议动作 | 理由 |
|------|---------|------|
| Silver Pines | 状态改为「⏳ 10/8 发售，可建站窗口已开」；**移除 9/16 前不得复用** | 本报告结论 |
| Neverway | 评分 16 → **14**；「❌ 无 wiki」→「⚠️ meowdb pre-launch 数据库」；复查日改为**官方公布 2027 具体日期后** | 推迟到 2027 已官方确认 |
| Ledgerbound | 评分 16 → **12**；标注「**AdSense 一票否决（`[1,5]` 性暗示+粗俗语言+药物+自杀提及）**，除非游戏改分级否则不再复核」 | 一票否决应固化，避免反复复核 |
| Approximately Up | 评分 17 → **14**；标注「窗口已过：CCU 30 天 -39%、评测增速衰减至 3.8/天、SteamAH+kosguides+ggames 已占飞船建造/登月/黑洞/Aundara 四长尾」 | 复查到期结论 |
| Ex Sanguis | 评分 16 → **13**；复查日改为「EA 内容更新 2-3 轮后 / 2026-12 大版本」 | 玩家基数过小 |
| Nimbit Frontier | 评分 18 → **12**；标注「**池内升级条件（首周 >300 评测）实测 116，未通过**；9/1 后停更 15 天」 | 自设门槛已闭环 |
| Good Heavens! | 建议**移出候选池或降级** | followers 2.3K，热度不足 + 中国发行商导致中文竞争快速形成 |

---

## 采集通道可用性实测记录（2026-09-16）

| 通道 | 手法 | 结果 | 备注 |
|------|------|:--:|------|
| `store.steampowered.com` | `--resolve :443:23.45.138.131` | ✅ **200** | appdetails / storesearch / appreviews / 商店页 HTML / news RSS **全部可用** |
| `store.steampowered.com` | 不带 `--resolve` | ❌ 000 | 本机 DNS 投毒，符合 Profile 12 记录 |
| `api.steampowered.com` @ `23.212.62.214` | `--resolve` | ❌ 000 | 同域名多 IP，需试到可用 |
| `api.steampowered.com` @ `23.212.62.217` | `--resolve` | ⚠️ **200 但返 schema** | `ISteamNews/GetNewsForApp/v2` 忽略 `format=json` 返回 API schema；**改用 store 的 news RSS 成功** |
| `steamcharts.com` | `--resolve :443:172.67.70.156` | ✅ **200** | CCU / 月均值 / 环比全可取 |
| **`suggestqueries.google.com`** | `--resolve :443:**64.233.170.139**` | ✅ **200** ⭐ | **本次新发现：可用！** 9/11 报告未记录此法。`client=firefox&hl=en&gl=us` 返英文联想；`hl=zh-CN` 返 GBK 需 iconv |
| `steamdb.info` | 直连 | ❌ **403** | 与 9/11 一致 |
| `steamspy.com` | 直连 | ❌ **403** | 与 9/11 一致（Cloudflare） |
| `api.gamalytic.com` | 直连 | ❌ **403 需 API Key** | ⚠️ **9/11 可用，现已改为付费**，wishlist/销量估算通道收窄 |
| `raijin.gg` | WebFetch | ❌ **403** | — |
| `fandom.com` | 直连 + WebFetch | ❌ **000 / ECONNREFUSED** | 与 9/11 一致；wiki 存在性改以 WebSearch 多语检索交叉判定 |
| `datahumble.com` | 直连 | ✅ **200** | 提供 followers / 平均游玩时长 / wishlist 估（部分页有） |
| `gamedata.wtf` | 直连 | ✅ **200** | 提供 wishlist 估 / 愿望单排名 / 首周销量预测 |
| `wiki.gg` | 直连 | ⚠️ **301** | 站点可达（重定向），无本批候选 wiki |
| `thegameswiki.com` | 直连 | ⚠️ **429** | 限流；改用 WebSearch site 检索交叉判定 |

**MUST 记录的环境事实**：`HTTP=000 / size=0` 一律记为**未验证**，未当作"无数据"或"无竞争"的证据（Profile 12 规则）。本报告中所有 000/403 通道对应的结论均已标注 `[Unverified]` 或用其他通道交叉补证。

---

## 未完成 / 存疑项（MUST 标注，非编造）

| 项 | 状态 |
|------|------|
| Silver Pines 价格 | `[Unverified]` — 未发售，Steam 无 `price_overview`；媒体亦未公布 |
| Silver Pines wishlist 绝对数 | **口径冲突**：官方 Steam 新闻（6/19）称 "200K+ across all platforms"；Raijin（7/6）估 Steam 单平台 ~83K；池内记 83-112K。**两者不矛盾但不可混用** — 本报告分开标注 |
| Silver Pines 峰值 CCU / 销量 | `[Unverified]` — 未发售，无 CCU、无销量 |
| Silver Pines 主游戏实机口碑 | `[Unverified]` — 0 条评测；仅有 Demo 802 条（95.9%）与 Preview 评价（PC Gamer 批评开场一小时"derivative"、早期近战"slow"；Bloody Disgusting 表扬导航与谜题设计） |
| Silver Pines fandom / wiki.gg 逐页直读 | `[Unverified]` — fandom.com 本机 ECONNREFUSED，wiki.gg 无结果，thegameswiki 429；**wiki 存在性依赖 WebSearch 多语检索 + 可达性探测交叉判定，未能逐个 fandom 页面直读确认** |
| Ex Sanguis wishlist | `[Unverified]` — 多轮检索（EN/CN/JP）无权威数字 |
| Ledgerbound / Ex Sanguis / Nimbit Frontier / Approximately Up 近 30 天评测 | Steam API `day_range=30` 参数在 `num_per_page=0` 下**被忽略**（返回全时段总数）；**改用商店页 HTML 的 "X% of the N user reviews in the last 30 days" 模块取值**，与 API 全时段数存在约 30-70 条的页面缓存差（商店页 556 vs API 603） |
| Nimbit Frontier 销量/followers/wishlist | `[Unverified-第三方模型值]` — 来源 gam evalio / gamedata.wtf / datahumble 的模型估算（4.1K 份 / $57.1K / 3.9K followers / 29.6K wishlist / 榜 #1859），非官方 |
| Approximately Up 销量 38.6K（Gamalytic） | `[Unverified]` — 池内 8/25 记录，**Gamalytic API 今日 403（需 Key）无法复核** |
| Good Heavens! 深查 | **未完成** — 仅做商店 API + followers + 一轮 wiki/媒体检索；**wiki 三语深查、wishlist 数字、巴西 dejus 定级 `Nudez` 描述符核实均未做** |
| 巴西 dejus 定级 `Nudez`（Good Heavens!） | `[Unverified]` — Steam 美国 `content_descriptors` 为空但巴西定级含裸体描述符，**两者冲突未解决** |
| Google Suggest 中文/日文覆盖 | 部分可用 — `hl=zh-CN` 返 GBK 编码需 iconv，且本批多数候选返**空数组**（真实反映 CJK 需求低，非通道故障；`silver pines` 裸词与 `approximately up` 英文均正常返回） |

---

> 交接物：本报告 → 主 Agent（07/08 Profile）做建站决策。
> 本 Agent **未建站**、**未部署**、**未 commit/push**、**未修改任何 `*wiki/` 站点目录**、**未修改 `CANDIDATE-POOL.md`**、**未修改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md`**。
> 未触碰并行扩充中的 5 个站点目录（sephiriawiki / themoundwiki / spiritvalewiki / tearsofmetalwiki / grainrotwiki）。
