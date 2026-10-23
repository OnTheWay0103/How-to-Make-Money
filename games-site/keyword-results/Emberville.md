# Emberville — Google Suggest 关键词报告

> 采集日期：2026-10-23
> 游戏：**Emberville**（像素暗黑奇幻 ARPG + 种田 / 城镇建设，Steam app 未在本次采集内核对）
> 上线窗口：**2026-10-27 Steam Early Access（PC）**
> 采集方式：Google Suggest API（`client=chrome`）
> 采集种子：**46 条** = 10 条通用前缀 + 26 条字母扩展（a–z）+ 10 条定向种子
> 请求间隔：**4.2–4.5 秒**（≥4 秒要求）
> 本报告只记录 Suggest 原样返回，**不含任何搜索量、流量或难度估算**。

---

## 一、采集通道与可复现命令

本机 DNS 对 `suggestqueries.google.com` 存在投毒，直接请求会失败。本次先取公共 DNS 的真实 IP，再用 `--resolve` 固定解析：

```bash
dig +short @8.8.8.8 suggestqueries.google.com
# 本次返回：74.125.68.102

curl --resolve suggestqueries.google.com:443:74.125.68.102 \
  'https://suggestqueries.google.com/complete/search?client=chrome&q=emberville'
```

- HTTP 200，返回 JSON 数组；建议列表位于 `[1]`。
- 每条请求间隔 4.2–4.5 秒，避免触发限流。
- 采集脚本为临时文件，不作为交付物。

---

## 二、采集量

| 指标 | 数值 |
|------|-----:|
| 请求种子数 | 46 |
| Suggest 原始建议条数（含跨种子重复） | **433** |
| 去重后建议条数 | **347** |
| 其中含游戏名 `emberville` | **251** |
| 再剔除同名 / 无关词后 | **233** |
| 有效主题数 | **8** |
| 无游戏名的噪音（去重） | 96 |
| 含游戏名但属同名的噪音 | 18 |
| 去重后总噪音率 | 114 / 347 = **32.9%** |

> 说明：Google Suggest 会把 `ember`、`emberward`、`embervale`、`emmerdale`、`Emberville`（乐队/地名）等混入。凡不含 `emberville` 的建议一律不计入游戏词；含游戏名但明显指向乐队、桌游、小说、电影、地名的 18 条也剔除。

### 空返回的种子

| 种子 | 结果 |
|------|------|
| `best emberville` | 0 条 |
| `build emberville` | 0 条 |

这两个种子在预发布期没有返回，说明 Suggest 尚未形成「best/build」聚合意图；**未用其他来源补齐**。

---

## 三、主题聚类

> 按主要意图归类，一个词只计入一个主题。代表词均为 Suggest 原样返回（小写）。

| # | 主题 | 数量 | 占比 | 代表词 | 可写的攻略方向 |
|---|------|-----:|-----:|--------|----------------|
| 1 | 发售 / 平台 / 价格 / EA | **111** | 47.6% | `emberville release date`; `emberville switch`; `emberville ps5`; `emberville price`; `emberville early access`; `emberville demo`; `emberville steam deck` | 发售 FAQ：日期、平台、价格、EA 内容、Demo 存档是否继承、Steam Deck 兼容 |
| 2 | 联机 / 合作 | **19** | 8.2% | `emberville multiplayer`; `emberville co op`; `emberville couch co op`; `emberville local co op`; `emberville split screen`; `emberville pvp` | 联机说明：是否支持、几人、本地/在线、是否有 PvP、跨平台待核验 |
| 3 | 职业 / 战斗 / Build | **8** | 3.4% | `emberville classes`; `emberville weapons`; `emberville spells`; `emberville magic`; `emberville character creation` | 职业/武器/法术总览；EA 首发职业强度与开荒 build（发售后补） |
| 4 | 种田 / 生活模拟 / 恋爱 | **9** | 3.9% | `emberville romance`; `emberville marriage`; `emberville stardew valley`; `emberville vs stardew valley`; `emberville core keeper` | 「是不是星露谷」对比页；恋爱/结婚系统说明；种田与城镇建设循环 |
| 5 | 剧情 / 角色 / 配音 / 开发 | **28** | 12.0% | `emberville voice actors`; `emberville cast`; `emberville matt mercer`; `emberville doug cockle`; `emberville jennifer english`; `emberville characters` | 配音阵容页（发布窗口高需求）；角色/阵营/世界观；开发团队与发行商 |
| 6 | 愿望单 / 媒体 / 主播 / 评测 | **34** | 14.6% | `emberville wishlist`; `emberville how many wishlists`; `emberville review`; `emberville trailer`; `emberville cohhcarnage`; `emberville asmongold` | 愿望单/发售热度追踪；评测汇总；主播开播信息（时效性强，适合发布周更新） |
| 7 | Wiki / 攻略 / 地图 / FAQ | **10** | 4.3% | `emberville wiki`; `emberville guide`（种子）; `emberville map`; `emberville faq`; `emberville similar games` | Wiki 首页/攻略索引；地图与区域；FAQ；类似游戏推荐 |
| 8 | 技术 / 引擎 / 性能 / Mod | **5** | 2.1% | `emberville engine`; `emberville what game engine`; `emberville system requirements`; `emberville mod`; `emberville apk download` | 配置/引擎/Mod 支持；**不要**提供 APK 下载 |
| — | 其他 / 通用 | **9** | 3.9% | `emberville game`; `emberville juego`; `emberville jogo`; `emberville website` | 并入 FAQ，不单独成文 |
| **合计** | | **233** | 100% | | |

---

## 四、关键发现

1. **这是典型的预发布词形。** 发售/平台/价格类占 47.6%，而真正的机制词（职业/战斗/Build + 种田/恋爱）合计只有 17 条（7.3%）。**不能据此判断游戏内容薄**，只能说明 Suggest 在发售前主要聚合「什么时候出、在哪买、能不能联机」。
2. **联机意图非常集中。** 19 条里有 12 条是「will/is/does … multiplayer/co-op」的疑问句，另有 `couch co op`、`local co op`、`split screen`。发布前最值得先写的单页是「Emberville 联机/合作：支持几人、能否本地同屏」。
3. **配音阵容是意外的第二需求。** 28 条角色/配音词中，`matt mercer`、`doug cockle`、`jennifer english` 都是具名搜索。这个站在发布周可以用「配音阵容 + 角色列表」吃到一波非攻略流量，但**必须逐条核对官方 cast 来源**，不能把 Suggest 当事实。
4. **英文 wiki 已经存在，不能写「零 wiki」。** 本次检索到：
   - `thegameswiki.com/emberville/wiki/`（Rebuilding Emberville、Life Skills 等页面）
   - `emberville-wiki.wiki/en/`（Classes、Class Swap、Tutorial 等页面）
   - 另有 `mobalytics.gg` 的升级系统预览、`metabot.gg` 的数据库页。
   因此本作的竞争结构不是零，而是「两套新英文 wiki + 数据库站」。可切的是它们尚未覆盖的长尾：联机细节、配音阵容、具体 build、发布 FAQ。
5. **中文 / 日文 Suggest 未采集。** 本次 46 个种子全部为英文，未做中文/日文关键词采集；不能据此断言中文/日文无需求。Wiki 竞争检查是另一项独立工作（见 `discovery-2026-10-23.md`）。

---

## 五、建议的选题优先级

| 优先级 | 选题 | 依据（来自本报告） |
|:--:|------|-------------------|
| P0 | **Emberville 发售 FAQ：日期 / 平台 / 价格 / EA 内容 / Demo 存档** | 发售类 111 条，占 47.6%；发布前 4 天，窗口最紧 |
| P0 | **Emberville 联机与合作：几人、本地同屏、PvP、跨平台** | 联机类 19 条，疑问句集中；现有英文 wiki 未见完整联机页 |
| P1 | **Emberville 配音阵容与角色列表** | 配音/角色 28 条，具名演员搜索明显；发布周流量 |
| P1 | **Emberville 职业 / 武器 / 法术总览（EA 首发版）** | 机制词 8 条，量小但意图明确；发售后会增长 |
| P1 | **Emberville vs 星露谷 / Core Keeper：到底是不是种田游戏** | 对比类 9 条，含 `vs stardew valley`、`core keeper` |
| P2 | **Emberville 地图 / 区域 / 秘密** | 地图类仅 2 条，需求尚未形成；发售后补 |
| 不建议 | APK 下载 / Mod 下载 | `emberville apk download`、`emberville mod` 有搜索，但站内不应提供非官方下载 |

---

## 六、噪音清单（示例）

### 不含游戏名的噪音（96 条，示例）

`emberward tier list`、`emberward wiki`、`ember knight best weapon mods`、`ember root mousehunt`、`emberstone scaled`、`embervale all classes`、`emberveil wow`、`emmerdale tonight`、`embreeville hospital`、`emeryville jobs`、`amberville weapons`、`solo leveling emma guide`、`co op city jeju`、`frozenheim system requirements`。

这些词说明 `ember` / `embervale` / `emberward` / `emmerdale` 的同名污染很重。**不要**把这些词写进 Emberville 页面，也不要用它们凑关键词数量。

### 含游戏名但属同名（18 条，示例）

`emberville band`、`emberville board game`、`emberville book`、`emberville movie`、`emberville road`、`emberville usa`、`emberville bus`、`emberville bus game`、`emberville alex jordan`、`emberville ben starr`、`emberville cygnus cross`、`emberville at gcx`、`emberville gcx`、`emberville kickstarter`、`emberville budget`、`emberville ai`、`emberville logo`。

> `alex jordan`、`ben starr`、`cygnus cross` 可能与配音/开发有关，但本次没有核验其身份，按「待确认」处理，未计入角色/配音主题。

---

## 七、失败与限制

| 项 | 状态 | 说明 |
|----|------|------|
| `best emberville` | 0 条 | 预发布期无聚合意图，未补齐 |
| `build emberville` | 0 条 | 同上 |
| 中文 / 日文 Suggest | 未采集 | 本次只做英文种子；不能据此判断中文/日文需求 |
| 搜索量 | **无** | Google Suggest 不提供搜索量；本报告没有任何 volume 数字 |
| 个性化 / 地区差异 | 存在 | Suggest 会随地区、语言、历史变化；换机器可能返回不同结果 |
| 事实核验 | 未做 | 关键词只证明「有人这样搜」，不证明「游戏里真有这个机制」；写站时必须另找来源 |

---

## 八、复现记录

- 原始响应：`/tmp/suggest_raw2.json`（临时文件，不随仓库提交）
- 种子列表：
  `emberville`, `how to emberville`, `best emberville`, `guide emberville`, `weapons emberville`, `beginner emberville`, `build emberville`, `solo emberville`, `co op emberville`, `tier list emberville`, `emberville a` … `emberville z`, `emberville wiki`, `emberville classes`, `emberville class`, `emberville boss`, `emberville crafting`, `emberville map`, `emberville multiplayer`, `emberville system requirements`, `emberville reddit`, `emberville tips`
- 采集日期：2026-10-23
