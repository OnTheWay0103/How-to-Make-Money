# DREADMOOR — Google Suggest 关键词报告

> 采集日期：2026-10-23
> 游戏：**DREADMOOR**（末日世界钓鱼生存恐怖，Steam EA）
> 上线窗口：**2026-11-09 Steam Early Access，$19.99，支持日语**
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
  'https://suggestqueries.google.com/complete/search?client=chrome&q=dreadmoor'
```

- HTTP 200，返回 JSON 数组；建议列表位于 `[1]`。
- 每条请求间隔 4.2–4.5 秒，避免触发限流。
- 采集脚本为临时文件，不作为交付物。

---

## 二、采集量

| 指标 | 数值 |
|------|-----:|
| 请求种子数 | 46 |
| Suggest 原始建议条数（含跨种子重复） | **372** |
| 去重后建议条数 | **258** |
| 其中含游戏名 `dreadmoor` | **183** |
| 再剔除同名 / 无关词后 | **161** |
| 有效主题数 | **9** |
| 无游戏名的噪音（去重） | 75 |
| 含游戏名但属同名的噪音 | 22 |
| 去重后总噪音率 | 97 / 258 = **37.6%** |

> 说明：`dreadmoor` 同时是一个美国犹他州纹身店名、一个小说/人物姓氏、以及 `dreadmoor manor` 等虚构地名。凡明显指向纹身店、小说人物、地名释义的建议一律剔除；`dreadmoor experiment`、`dream dock`、`spirits helped`、`torn pages` 等暂按游戏内内容保留，**建站时必须另行核验**。

### 空返回 / 解码失败的种子

| 种子 | 结果 | 处理 |
|------|------|------|
| `dreadmoor e` | 0 条 / 曾出现 UTF-8 解码错误 | 如实记录，未补齐 |
| `dreadmoor l` | 0 条 / 曾出现 UTF-8 解码错误 | 如实记录，未补齐 |
| `dreadmoor q` | 0 条 / 曾出现 UTF-8 解码错误 | 如实记录，未补齐 |

这三个字母扩展没有贡献关键词。**未用其他来源补齐**，因此本报告的长尾覆盖存在这三个字母的缺口。

---

## 三、主题聚类

> 按主要意图归类，一个词只计入一个主题。代表词均为 Suggest 原样返回（小写）。

| # | 主题 | 数量 | 占比 | 代表词 | 可写的攻略方向 |
|---|------|-----:|-----:|--------|----------------|
| 1 | 发售 / 平台 / 价格 / EA | **72** | 44.7% | `dreadmoor release date`; `dreadmoor ps5`; `dreadmoor xbox`; `dreadmoor price`; `dreadmoor early access`; `dreadmoor demo`; `dreadmoor steam deck` | 发售 FAQ：11/9 EA、$19.99、平台、Demo/Playtest、配置、是否支持中文 |
| 2 | 联机 / 合作 | **13** | 8.1% | `dreadmoor multiplayer`; `dreadmoor co op`; `dreadmoor crossplay`; `dreadmoor single player`; `dreadmoor online` | 联机说明：单人/合作、跨平台、是否有 PvP；发布前先写清「能不能和朋友一起钓」 |
| 3 | 钓鱼 / 生存 / 装备 / 存档 | **11** | 6.8% | `how to fish in dreadmoor`; `how to save in dreadmoor`; `dreadmoor how to equip fishing rod`; `dreadmoor how to equip braided line`; `dreadmoor fishing` | 新手开局：钓鱼操作、鱼竿/编织线装备、存档机制、生存循环 |
| 4 | 类似 Dredge / 游戏对比 | **7** | 4.3% | `dreadmoor vs dredge`; `is dreadmoor a sequel to dredge`; `dreadmoor and dredge`; `is dreadmoor related to dredge` | 「DREADMOOR 是不是 Dredge 续作/像不像」对比页；这是品牌认知的核心疑问 |
| 5 | AI 争议 / 真假 / 信任 | **8** | 5.0% | `dreadmoor ai`; `does dreadmoor use ai`; `dreadmoor controversy`; `is dreadmoor a scam`; `is dreadmoor fake`; `is dreadmoor a real game` | FAQ：是否使用 AI、争议是什么、游戏是否真实存在；**必须只写可核验事实，不能带节奏** |
| 6 | 剧情 / 地点 / 世界观 | **7** | 4.3% | `dreadmoor dream dock`; `dreadmoor spirits helped`; `dreadmoor torn pages`; `dreadmoor temple`; `tearscape dreadmoor palace` | 地点/收集品/剧情线索页；每条都需来源，不能从 Suggest 反推机制 |
| 7 | 媒体 / 评测 / 主播 | **17** | 10.6% | `dreadmoor review`; `dreadmoor trailer`; `dreadmoor reddit`; `dreadmoor ign`; `dreadmoor metacritic`; `dreadmoor discord` | 评测汇总、预告片、Discord/社区入口；发布周更新 |
| 8 | Wiki / 攻略 / 地图 / FAQ | **6** | 3.7% | `how to play dreadmoor`; `dreadmoor gameplay`; `dreadmoor map`; `tearscape dreadmoor map`; `dreadmoor similar games` | Wiki 首页/攻略索引；地图；类似游戏 |
| 9 | 技术 / 引擎 / 下载 | **2** | 1.2% | `dreadmoor game engine`; `dreadmoor download` | 引擎/配置说明；**不要**提供非官方下载 |
| — | 其他 / 通用 | **18** | 11.2% | `dreadmoor game`; `dreadmoor creator`; `dreadmoor developer`; `dreadmoor meaning`; `dreadmoor vr`; `second wind dreadmoor` | 并入 FAQ/关于页，不单独成文 |
| **合计** | | **161** | 100% | | |

---

## 四、关键发现

1. **预发布特征比 Emberville 更强。** 发售/平台/价格类 72 条，占 44.7%；真正能写成机制攻略的只有「钓鱼/存档/装备」11 条（6.8%）。这说明 11/9 之前的主要流量是「什么时候出、多少钱、在哪个平台、能不能联机」，**不是**「怎么钓某种鱼」。
2. **「像不像 Dredge」是品牌级疑问。** 7 条对比词里，`is dreadmoor a sequel to dredge`、`is dreadmoor related to dredge` 是典型误解。做一篇「DREADMOOR vs Dredge：不是续作，像在哪里」可以在发布前吃到对比流量，但必须把「不是续作」放在标题/首段，避免误导。
3. **AI 争议是双刃剑。** 8 条 `ai` / `scam` / `fake` / `real` 词说明有一部分用户在怀疑游戏的真伪或 AI 使用。这个主题**可以写 FAQ，但不能写成爆料**；必须引用官方说明或可核验报道，否则 AdSense 合规风险高。
4. **英文 / 中文 / 日文 wiki 竞争检查结果（独立于本报告）**：本次检索未发现专属 fandom / wiki.gg / 灰机 / bilibili wiki / wikiwiki / atwiki 页面；日文只有 `gamewith.jp` 的新闻页（不是 wiki）。因此这是本轮少见的「零组织化 wiki + 明确发布窗口」组合。注意：这是「本次查询未返回」，不是「绝对不存在」。
5. **长尾缺口：`dreadmoor e/l/q` 三个字母扩展为空。** 这不影响主结论，但说明本报告可能漏掉以 e/l/q 开头的长尾词；如果后续要补，应单独重跑这三个种子。

---

## 五、建议的选题优先级

| 优先级 | 选题 | 依据（来自本报告） |
|:--:|------|-------------------|
| P0 | **DREADMOOR 发售 FAQ：11/9 EA、价格、平台、Demo/Playtest、配置** | 发售类 72 条，占 44.7%；发布前两周半，窗口明确 |
| P0 | **DREADMOOR 联机说明：单人/合作/跨平台** | 联机类 13 条，含 `crossplay`、`single player`；现有信息零散 |
| P0 | **DREADMOOR 新手开局：怎么钓鱼、怎么存档、鱼竿/编织线怎么装** | 机制类 11 条，是唯一成型的玩法需求；发布后立即有用 |
| P1 | **DREADMOOR vs Dredge：是不是续作，像在哪里** | 对比类 7 条，品牌误解明显；可抢「dreadmoor dredge」长尾 |
| P1 | **DREADMOOR 是否使用 AI / 争议 FAQ** | 信任类 8 条；必须严格引用可核验来源，否则不写 |
| P2 | **DREADMOOR 地图 / 地点 / 收集品（dream dock、torn pages 等）** | 地点类 7 条，但每条都需要来源；先做可核验的 1-2 个 |
| 不建议 | 「DREADMOOR 下载 / APK / 破解」 | `dreadmoor download` 有搜索，但站内不应提供非官方下载 |

---

## 六、噪音清单（示例）

### 不含游戏名的噪音（75 条，示例）

`dreadmaw aos`、`dreadnought maimai`、`dreadlord build`、`dreadhorn raid`、`dreadout co op`、`dreadlocks jb`、`dreadmoore`、`dreadmoo`、`dreadmoon`、`dredmor twitter`、`dreamms wiki`、`dreamer class tier list`、`dream fishing sg`、`dreame vacuum`、`dreymoor fertilizers`。

### 含游戏名但属同名（22 条，示例）

`dreadmoor tattoo`、`dreadmoor tattoo shop`、`dreadmoor tattoo layton utah`、`dreadmoor tattoo utah`、`dreadmoor tattoo photos`、`avery dreadmoor`、`catherine dreadmoor`、`charles dreadmoor`、`deanna dreadmoor`、`deanna dreadmoor author`、`duke dreadmoore`、`dr dreadmoor`、`dr. dreadmoor castle`、`jaris dreadmoor and lyric harper`、`dreadmoor family`、`dreadmoor wedding`、`dreadmoor manor`、`dreadmoor definition`、`dreadmoor name meaning`、`dreadmoor media arts`、`dreadmoor ark`、`dreadmoor valor`。

> `dreadmoor manor`、`dreadmoor castle` 也可能是游戏内地点；本次按「与小说/地名同名」处理，未计入地点主题。建站时若找到游戏内来源，可重新归类。

---

## 七、失败与限制

| 项 | 状态 | 说明 |
|----|------|------|
| `dreadmoor e/l/q` | 0 条 / 解码错误 | 三个字母扩展缺失；未补齐 |
| 中文 / 日文 Suggest | 未采集 | 本次只做英文种子；日文只有 gamewith 新闻页，不能据此判断日文需求 |
| 搜索量 | **无** | Google Suggest 不提供搜索量；本报告没有任何 volume 数字 |
| 个性化 / 地区差异 | 存在 | Suggest 会随地区、语言、历史变化 |
| 事实核验 | 未做 | 关键词只证明「有人这样搜」，不证明「游戏里真有这个机制」；`dream dock`、`spirits helped` 等尤其需要核验 |
| 上线日 | 以搜索结果为据 | 11/9 EA、$19.99 来自多家媒体报道；建站前应以 Steam 商店页复核 |

---

## 八、复现记录

- 原始响应：`/tmp/suggest_raw2.json`（临时文件，不随仓库提交）
- 种子列表：
  `dreadmoor`, `how to dreadmoor`, `best dreadmoor`, `guide dreadmoor`, `weapons dreadmoor`, `beginner dreadmoor`, `build dreadmoor`, `solo dreadmoor`, `co op dreadmoor`, `tier list dreadmoor`, `dreadmoor a` … `dreadmoor z`, `dreadmoor wiki`, `dreadmoor fish`, `dreadmoor fishing`, `dreadmoor guide`, `dreadmoor tips`, `dreadmoor map`, `dreadmoor upgrades`, `dreadmoor system requirements`, `dreadmoor reddit`, `dreadmoor story`
- 采集日期：2026-10-23
