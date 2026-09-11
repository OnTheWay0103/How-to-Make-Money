# Dressmaker — Google Suggest 关键词调研报告

> 任务: KEYWORD-9/12-DRESSMAKER（BUILD-008 上游材料）
> 岗位: 关键词研究员（`docs/agents/13-岗位卡-关键词研究员.md` + `14-Profile-关键词研究员.md`）
> 采集日期: **2026-09-12**（发售前 9 天；Steam 发售日 2026-09-21）
> 采集方法: Google Suggest API（`suggestqueries.google.com/complete/search?client=chrome&hl=en&gl=us`）
> 查询数: **535（en）+ 51（zh-CN / zh-TW / ja）= 586**，全部 HTTP 200，**0 失败**
> 原始建议条数: **1,083** → 去重后 **848** 条唯一词
> 噪声（同名电影 / 实体裁缝业 / 缝纫机品牌 / 熨烫同音 / MAC 化妆品）: **749 条（88.3%）**
> 明确游戏意图词: **70 条（en）+ 3 条（CJK）= 73 条**
> 站级元数据来源: `.agent/facts-dressmaker-9-11.md`（已核验事实表），本报告**不重新核验、不改写**该表事实

---

## 〇、结论先行（给主 Agent / 建站协调员）

1. **裸词 `dressmaker` 已被三类语义完全瓜分**：① 实体裁缝业（139 条噪声）、② 缝纫机品牌 Dressmaker®（77 条）、③ 2015 电影《The Dressmaker》与同名小说（74 条）。**走裸名 = 零胜算**，与 `.agent/facts-dressmaker-9-11.md` §8 SEO 红线一致。
2. **游戏意图词必须带 `game` / `steam` / `itch` / `demo` / 平台 限定词才能活下来**。全部 70 条有效词中，**没有一条是裸名 + 机制词**能站住的。
3. **机制词在 Suggest 里几乎全部为空**：`dressmaker commission` / `customer` / `reputation` / `difficulty` / `achievements` / `steam deck` / `mods` / `patch notes` / `bias` / `applique` —— **386/535 个查询返回零建议**。这符合「未发售 + 通用词」的预期。
4. **唯一机制长尾命中：`dressmaker grain quality`（relevance 601）** —— 说明「布纹方向 → 质量分」这条官方机制**已经开始产生真实搜索**。这是本报告发现的最有价值的单条机制线索。
5. **`Free Lives Dressmaker` / `Cozy Lives Dressmaker` 真实存在但几乎没有量**（各 1 条建议，relevance 601）。它们是**身份消歧锚**，不是流量来源 —— 这一点必须让建站协调员知道，避免把它当主攻词。
6. **强烈的平台/购买意图**：Switch（1050/850/600/552）、免费与否（1250/1150/600）、itch.io（1251/800）、手机（750）、Xbox（601）、PS5（601）、demo（650/601）。**「有没有主机版 / 手不手游 / 免不免费 / demo 在哪」是第一批真实需求**，答案全是「没有 / 不是 / 在 itch 不在 Steam」。
7. **建议篇数：12 篇**（Profile 14 的 50-100 词区间基线为 10 篇，+2 给发售窗口的平台/购买/消歧簇）。

---

## 一、采集命令与可复现记录

### 1.1 网络异常与处置（MUST 记录）

本机 **`suggestqueries.google.com` 的 DNS 被污染**：系统默认 DNS（114.114.114.114）把它解析到 `69.63.176.59`（Meta/Facebook 网段），curl 直接连接 SSL 失败。
用 `8.8.8.8` 解析得真实地址（`172.217.194.139 / .113 / .101`），再用 curl `--resolve` 强制指向即可正常访问。

```bash
# 诊断
nslookup suggestqueries.google.com            # -> 69.63.176.59（污染）
nslookup suggestqueries.google.com 8.8.8.8    # -> 172.217.194.139（真实）

# 单次验证（返回 HTTP 200 + JSON 建议数组）
curl -s -m 15 --resolve suggestqueries.google.com:443:172.217.194.139 \
  "https://suggestqueries.google.com/complete/search?client=chrome&hl=en&gl=us&q=dressmaker+game"
```

### 1.2 主采集（英文，535 查询）

采集脚本 `/tmp/dmq-harvest.mjs`（无第三方依赖，`node` 直接跑；**未使用 npm**）：

- **7 个核心种子**（`dressmaker` / `dressmaker game` / `dressmaker steam` / `free lives dressmaker` /
  `cozy lives dressmaker` / `dressmaker wiki` / `dressmaker guide`）
  × **36 个前缀**（`""` / `how to ` / `best ` / `guide ` / `beginner ` / `tips ` / `walkthrough ` /
  `review ` / `is ` / `can you ` / `does ` / `when ` / `where ` / `what ` / `why ` / `price ` /
  `release date ` / `steam ` / `mac ` / `switch ` / `demo ` / `tier list ` / `build ` / `score ` /
  `pattern ` / `outfit ` / `fabric ` / `sewing ` / `commission ` / `design ` / `how do you ` /
  `how many ` / `how long ` / `all ` / `unlock ` / `secret `）
  + **尾随空格模式**（`q=dressmaker game ` ，取续写补全）
- **68 个机制/平台种子**（`dressmaker pattern` / `dressmaker fabric` / `dressmaker bias` /
  `dressmaker grain` / `dressmaker applique` / `dressmaker commission` / `dressmaker reputation` /
  `dressmaker scoring` / `dressmaker sketchbook` / `dressmaker mannequin` / `dressmaker sabotage` /
  `dressmaker achievements` / `dressmaker steam deck` / `dressmaker mods` / `dressmaker ps5` /
  `dressmaker switch` / `dressmaker xbox` / `dressmaker mac` / `dressmaker demo` / `dressmaker price` …）
  × **4 种模式**（裸词 / `how to ` / `best ` / `guide `）

执行：`node /tmp/dmq-harvest.mjs`（间隔 550-900 ms 随机，3 个 IP 轮询，失败重试 3 次）
结果：**535/535 HTTP 200，ok=535，fail=0**。原始建议 1,083 条。

### 1.3 补充采集（CJK，51 查询）

动机：Steam `supported_languages` 为 **English / Simplified Chinese / Japanese（三者均含完整语音）**，
存在真实的中日玩家盘。脚本 `/tmp/dmq-harvest-cjk.mjs`，`hl` 分别为 `zh-CN` / `zh-TW` / `ja`。
结果：**51/51 成功，0 失败**。

### 1.4 交叉核验（非关键词来源，仅用于事实与竞争判断）

- Steam `appdetails`（appid **4019220**）+ `storesearch` + 竞品 appid `1487080` / `1599300` 直取
- WebFetch `https://dressmakergame.com/`（唯一已知竞争站）
- WebSearch：Steam 商店页 / Polygon / Game*Spark / TechTimes / indiegame.com / treatyourgeek /
  The Nerdy Type / 9game / 3DM / itch.io 评论片段

---

## 二、原始采集量与水线

| 指标 | 数值 |
|------|------|
| 采集查询数（en） | 535 |
| 成功 / 失败 | **535 / 0**（全部 HTTP 200） |
| 返回非空建议的查询数 | **149 / 535（27.9%）** |
| 返回**零建议**的查询数 | **386 / 535（72.1%）** |
| 原始建议条数 | 1,083 |
| 去重后唯一词 | **848** |
| 噪声（剔出） | **749（88.3%）** |
| 明确游戏意图 | **70** |
| 模糊 / 低置信（另列） | **29** |
| CJK 补充命中 | 3 |

> **零建议率 72.1% 本身就是结论**：机制向种子（`commission` / `customer` / `reputation` /
> `achievements` / `steam deck` / `mods` / `patch notes` / `difficulty` / `bias`）**全部返回空**。
> 说明「Dressmaker + 机制词」目前**尚无搜索需求**，机制类选题属于**发售后抢位**，不是当前流量来源。

### 2.1 `google:suggestrelevance` 说明（重要，防误读）

Google Suggest 会随建议返回一个整数 `google:suggestrelevance`（本批区间 550-1252）。
**它只是 Google 对「该建议相对排序」的权重，不是搜索量、不是 KD、不是 CPC。**
本报告用它做**同批词之间的相对热度排序**，MUST NOT 被解读为月搜索量。
本项目**没有可用的搜索量 API**（无 Ahrefs / Semrush / GKP 接入），因此报告内**不出现任何搜索量数字**。

---

## 三、去噪后的分类表（70 条有效游戏词）

> 每条均来自本次真实采集，括号内为 `google:suggestrelevance`。

### A. 站名 / 身份消歧（8 条）

| 关键词 | rel |
|---|---|
| `dressmaker game` | 1250 |
| `steam dressmaker game` | 1250 |
| `dressmaker steam game` | 1250 |
| `dressmaker steam` | 601 |
| `free lives dressmaker` | 601 |
| `cozy lives dressmaker` | 601 |
| `dress maker steam game` | 556 |
| `dressmaker game steam` | 553 |

**建议攻略方向**：站点级标题 / H1 / meta / Organization 结构化数据锚点；`Dressmaker`（Cozy Lives 开发 · Free Lives 发行）的实体消歧段。
⚠️ `free lives dressmaker` / `cozy lives dressmaker` **仅有 1 条建议**，是**消歧锚而非流量词**，MUST NOT 当主攻词。

### B. 发售 / 价格 / 平台（29 条）—— **本批最密集、最真实的需求簇**

| 关键词 | rel | 子意图 |
|---|---|---|
| `dressmaker release date game` | 1250 | 发售日 |
| `dressmaker game release date` | 1250 | 发售日 |
| `dressmaker price steam` | 1250 | 价格 |
| `is dressmaker game free` | 1250 | **免费与否** |
| `is dressmaker free` | 1150 | **免费与否** |
| `dressmaker game switch` | 1050 | **主机** |
| `dressmaker switch game` | 850 | **主机** |
| `dressmaker game mobile` | 750 | **手游** |
| `dressmaker steam price` | 651 | 价格 |
| `dressmaker steam release date` | 602 | 发售日 |
| `dressmaker steam game release date` | 601 | 发售日 |
| `when is dressmaker coming out on steam` | 601 | 发售日 |
| `when is dressmaker game coming out` | 601 | 发售日 |
| `dressmaker game price` | 601 | 价格 |
| `is dressmaker on steam` | 601 | 购买渠道 |
| `dressmaker switch 2` | 601 | **主机（含 Switch 2）** |
| `dressmaker game xbox` | 601 | 主机 |
| `dressmaker game ps5` | 601 | 主机 |
| `dressmaker game mac` | 601 | **平台（macOS）** |
| `dressmaker release date` | 600 | 发售日 |
| `when is dressmaker coming out` | 600 | 发售日 |
| `is dressmaker free on steam` | 600 | 免费与否 |
| `dressmaker game platforms` | 600 | 平台 |
| `dressmaker nintendo switch` | 600 | 主机 |
| `is dressmaker on switch` | 561 | 主机 |
| `dressmaker game console` | 557 | 主机 |
| `dressmaker game download free android` | 555 | **手游/下载** |
| `dressmaker game nintendo switch` | 552 | 主机 |
| `dressmaker game how much` | 551 | 价格 |

**建议攻略方向**：一篇「发售信息总表」吸收全部发售/价格/平台/免费问题（**MUST 写价格未公布、MUST NOT 编造数字**）。

> ⚠️ **平台类词全部是「否定型答案」**：主机 ❌ / 手机 ❌ / Switch 2 ❌（Steam 仅 Windows + macOS）；
> 免费 ❌（`is_free=false`，但 **itch 原型是 name-your-price** —— 这正是 `is dressmaker game free` 高热的根因，必须在页内讲清「itch 免费原型 ≠ Steam 正式版免费」）。
> `dressmaker switch 2` 说明用户会主动联想 Switch 2 —— 用 FAQ 一句否定即可，不单开页。

### C. 试玩 / 下载 / 来源（12 条）

| 关键词 | rel |
|---|---|
| `dressmaker game itch io` | **1251**（全批最高） |
| `dressmaker itch.io` | 800 |
| `dressmaker steam demo` | 650 |
| `dressmaker demo` | 601 |
| `dressmaker demo game` | 601 |
| `dressmaker demo steam` | 601 |
| `how to download dressmaker game` | 601 |
| `where to play dressmaker game` | 601 |
| `is dressmaker game safe` | 601 |
| `how to open dressmaker game` | 600 |
| `dressmaker demo itch io` | 554 |
| `dressmaker free demo` | 553 |

**建议攻略方向**：「Steam 有没有 demo / 去哪试玩 / 安不安全」一篇讲透。
⚠️ **Steam `demos` 字段为 `null`（Steam 上无 demo）**（本次 API 复核），可试玩的是 **itch.io 原型**。
`is dressmaker game safe` 是典型的「第三方下载站 / APK 诈骗」担忧 → 正确的安全答案是「只从 Steam 官方页与 itch.io 官方页获取」。

### D. 攻略 / wiki / 社区 / 口碑（15 条）

| 关键词 | rel |
|---|---|
| `dressmaker wiki` | 601 |
| `dressmaker game review` | 601 |
| `dressmaker review` | 601 |
| `dressmaker rating` | 601 |
| `dressmaker game wiki` | 600 |
| `dressmaker game guide` | 600 |
| `dressmaker guide` | 600 |
| `dressmaker walkthrough` | 600 |
| `dressmaker tutorial game` | 600 |
| `dressmaker game reddit` | 600 |
| `dressmaker game how to play` | 553 |
| `dressmaker game characters` | 553 |
| `dressmaker itch io reddit` | 553 |
| `dressmaker gameplay` | 550 |
| `dressmaker game play` | 550 |

**建议攻略方向**：`dressmaker wiki` / `dressmaker game wiki` 已真实存在 → **站名锚点直接吃这两条**。
`dressmaker game characters` 说明玩家已在找「角色表」（镇民 NPC）→ 规划一篇镇民/订单偏好页（但镇民名单官方未公布，MUST 标 `[Unconfirmed]`，发售后再补）。
`dressmaker review` / `dressmaker rating` ◐ 中等置信（与电影《The Dressmaker》的影评词混流）。

### E. 机制长尾（3 条 —— **Suggest 仅 1 条真命中**）

| 关键词 | rel | 说明 |
|---|---|---|
| `dressmaker grain quality` | 601 | ⭐ **唯一真机制命中**。对应官方文案「aligned to the grain or cut on bias」→ 布纹对齐 → 质量分 |
| `dressmaker sewing game` | 601 | 品类词（服装缝纫模拟） |
| `dressmaker cozy sewing game` | 600 | 品类词（cozy） |

**建议攻略方向**：`grain quality` 是本报告最有价值的长尾 —— 它证明「裁剪机制 → 质量分」这条官方机制**已经开始被搜索**，且 `dressmakergame.com` 只把它塞在一篇泛泛的 "Sewing Mastery" 里，**没有专页**。这是差异化突破口。

### F. 同类 / 竞品意图（3 条）

| 关键词 | rel |
|---|---|
| `best fashion designer game` | 601 |
| `fashion designer outfit game` | 601 |
| `what is the best dress up game` | 550 |

**建议攻略方向**：一篇 "Games Like Dressmaker"（含 Infinity Nikki / Stardew 缝纫 / 其他 tailoring sim）。

### G. CJK 补充命中（3 条，2026-09-12 采集）

| 关键词 | locale | 说明 |
|---|---|---|
| `针影裁梦 steam` | zh-CN | 中文译名（3DM 用此名） |
| `针影裁梦下载` | zh-CN | **中文下载意图真实存在** |
| `針影裁夢 steam` | zh-TW | 繁体页 Steam 标注「不支援繁體中文」（Steam `supported_languages` 仅 `schinese`） |

> ⚠️ 本报告采集到 `dressmaker playtest`（zh-CN locale）—— **无法确认是否有公开 playtest**，标 `[Unconfirmed]`，MUST NOT 写进站内。

---

## 四、低置信 / 边界词（29 条，MUST NOT 作为目标词）

这些词**混了实体裁缝业或电影意图**，或属于其他游戏的噪声，**不建议单独立页**（可在 FAQ 顺带回答）：

- **实体裁缝服务**（会被同名行业词吃掉）：`how much do dressmakers charge per hour`、`how much does it cost for a dressmaker to make a dress`、
  `how much does a dressmaker charge`、`how much to pay a seamstress per piece`、`best priced tailor in ventura`、`dressmaker pins price`
- **熨烫同音陷阱（dress + steam，MUST 注意）**：`dressmakers steam iron`、`dressmaker steam iron`、
  `do tailors steam dresses`、`do seamstresses steam dresses`、`do seamstresses steam wedding dresses`
  → ⚠️ **这批词证明了 `dressmaker steam` 这个种子本身有歧义**：一部分是游戏（`dressmaker steam` 601 / `dressmaker steam price` 651 /
  `dressmaker steam demo` 650 / `is dressmaker on steam` 601），另一部分是「用蒸汽熨烫裙子」。**建站时 MUST 只吃前者。**
- **裁缝技术通用词**：`tailor's guide patterns`、`tailors guide patterns`、`sewing guide pattern(s)`、
  `a dressmaker guide in cutting fabric`、`making clothes dressmaker's guide`、`what is an applique stitch`、`how to stitch cotton dress material`
- **其他游戏 / 平台噪声**：`tailor guide cata`（WoW 裁缝）、`traum dressmaker guide`、
  `steam game artwork size`、`steam tailor game`、`fashion designer steam game`、`seamstress steam.game`、
  `does nintendo switch have dance games`、`switch dating games`、`steve martin dating game date`、`tailor release date`
- **Reddit 泛词**：`best sewing patterns reddit`、`your dressmaker reddit`、`best sewing mannequin reddit`
- **电影词混入**：`dressmaker parents guide`（电影分级）

---

## 五、同名污染全景（749 条噪声，MUST 排除）

本次采集**完整画出了 `dressmaker` 这个词的语义版图**。三类污染源合计 749 条（88.3%）：

| 污染源 | 条数 | 代表词（节选） |
|---|:--:|---|
| **实体裁缝业 / 缝纫用品零售** | 139 | `dressmaker near me`、`best dressmaker shears`、`dressmakers mannequin`、`dressmaker alterations near me`、`dressmaker cutting table`、`dressmaker salary`、`dressmaker and seamstress near me`、`difference between dressmaker and tailor`、`dressmaker cape town`、`dressmaker townsville` |
| **通用缝纫技法 / 面料零售** | 136 | `dressmaking fabric uk`、`how to sew patterns`、`best dressmaking patterns`、`how to remove dressmakers pencil from fabric`、`dressmaking velvet`、`dressmaking silk fabric` |
| **缝纫机品牌 Dressmaker®** | 77 | `dressmaker sewing machine`、`dressmaker machine`、`dressmaker space saver 100`、`empisal 120a dressmaker price`、`dressmaker swm 1000`、`dressmaker sewing machine manual pdf free download`、`dressmaker 2 sewing machine price` |
| **2015 电影《The Dressmaker》/ 同名小说** | 74 | `dressmaker movie`、`dressmaker ending explained`、`the dressmaker wiki film`、`the dressmaker's secret`、`dressmaker why did teddy die`、`the dressmaker grain silo`、`dressmaker where to watch`、`dressmaker all dresses` |
| **其他游戏（Silksong / WoW / ACNH / Nikki）** | 32 | `silksong dressmaker`、`how to find seamstress silksong`、`tailor guide cata`、`how to unlock tailor shop acnh` |
| **熨烫同音（dress + steam）** | 17 | `how to steam a dress with a steamer`、`can you steam a sequin dress`、`how to steam a wedding dress` |
| **Steam 平台通用噪声** | 6 | `steam curator`、`steam artwork rules`、`steam refund game how long` |
| **填字游戏** | 5 | `dressmakers guide crossword clue`、`dressmakers guide 7 letters`、`dressmakers guide word hike` |
| **MAC 化妆品** | 4 | `mac dressmaker lipstick`、`mac dressmaker` |
| **蕾丝假发 / 杂项电商** | 3 | `dressmaker prestige lace wig`、`dressmaker silk #17` |

### 5.1 Steam 内同名应用（本次 API 复核，非猜测）

`storesearch?term=dressmaker` 返回**恰好 3 个** appid：

| appid | 名称 | 开发 / 发行 | 类型 | 价格 | 发售 |
|---|---|---|---|---|---|
| **4019220** | **Dressmaker** | **Cozy Lives / Free Lives** | 缝纫服装模拟 | 未公布 `[Unconfirmed]` | 2026-09-21 |
| 1487080 | DressMaker | Suzuki Cecil / Dream Factory Co., Ltd. | VRoid/VRM 3D 虚拟形象一件式贴图工具 | $9.99 | 2021-03-26 |
| 1599300 | DressMaker Pro | Suzuki Cecil / Dream Factory Co., Ltd. | 同上（Pro 版） | $54.99 | 2021-07-15 |

> **处置**：`DressMaker` / `DressMaker Pro` 是 **VRM 虚拟形象换装贴图工具**，与本站游戏**无任何关系**。
> 本次采集中未出现明确的 `dressmaker pro` 搜索词，但**裸名 `dressmaker` + Steam 搜索页会三选一混流**，
> 因此站内 SHOULD 用一段「Which dressmaker game?」消歧（见选题 #5），把误入的 DressMaker/DressMaker Pro 用户接住。

---

## 六、命中率分析：词 → 攻略可行性

> 本站为**新建站**，无既有攻略 → **全部选题均为缺口（0% 已覆盖）**。
> 下表评估的是「该词簇能否支撑一篇 800-1500 词攻略」。

| 词簇 | 词数 | 能否支撑 800-1500 词 | 判断 |
|---|:--:|---|---|
| B 发售/价格/平台 | 29 | ✅ 能（含免费与否 + 主机 + 手游 + Switch 2 + Mac + demo 否定答案） | **P0 必做**，单页可完整覆盖 |
| C 试玩/下载/来源 | 12 | ✅ 能（Steam 无 demo vs itch 原型、安全获取、平台差异） | **P0 必做**，与 B 有重叠但意图不同（「能不能玩」vs「多少钱」） |
| A 站名/消歧 | 8 | ◐ 部分（不足以单成一篇，应融入首页/About） | 站点级锚点，**不单独成篇** |
| D 攻略/wiki/口碑 | 15 | ✅ 能（`game characters` 镇民页 + review 口碑页） | P1 |
| E 机制长尾 | 3 | ◐ Suggest 仅 1 条 → **靠官方文案可支撑的机制补足**（见下） | P1，**靠 WebSearch 验证的机制词扩展** |
| F 同类/竞品 | 3 | ✅ 能（一页 8-10 款同类游戏对比） | P2 |
| 低置信 29 条 | 29 | ❌ 不能（意图指向实体裁缝业 / 电影） | **不立页**，FAQ 顺带 |

### 6.1 机制词的补充证据链（Suggest 无量的部分）

Suggest 里机制词几乎全空，但**官方商店页文案 + 独立评测 + itch 玩家评论**已核验出足够写深页的机制。
以下机制**均有来源支撑**（可直接引用，不属于编造）：

| 机制 | 来源 | 可支撑的选题 |
|---|---|---|
| 5 种面料 cotton / linen / wool / silk / velvet | Steam 官方文案（逐字） | 面料指南 |
| **grain direction vs bias cut**（顺纹 / 斜裁） | Steam 官方文案 | 布纹与质量分 |
| **裁剪时纸样箭头变绿 = 对齐布纹，否则单片质量分被封顶** | itch 玩家评论片段（2 条独立命中） | **布纹与质量分（核心）** |
| 逐片（panel）选料 | Steam 官方文案 | 面料指南 |
| 图案排布 + 裁剪（省料 vs 质量权衡） | Steam 官方文案 + treatyourgeek 实测 | 排料与裁剪 |
| 缝纫机缝合；**质量分主要取决于缝合是否走直线** | Steam 官方文案 + The Nerdy Type 评测 | 缝合技巧 |
| 装饰：buttons / bows / appliqué / lace trims；**部分角度无法贴装饰（玩家痛点）** | Steam 官方文案 + itch 玩家评论 | 装饰与收尾 |
| 人台预览（preview on a mannequin） | Steam 官方文案 | 缝合/收尾页内覆盖 |
| 速写本设计（配色 + 面料小样）；**裙装部件 = Bodice / Collar / Sleeves / Skirt** | Steam 官方文案 + treatyourgeek 实测 | 速写本与部件 |
| **部件带 style tag，同 tag 叠加更贴合客户期望** | Polygon / 9game 预览 | 客户订单匹配 |
| 镇民订单：模糊 ↔ 具体，按场合与品味定制 | Steam 官方文案 | 客户订单匹配 |
| 橱窗展示 + 成衣销售（sell off the rack） | Steam 官方文案 | 声望/金币/经营 |
| 声望 + 金币双收益 | Steam 官方文案 | 声望/金币/经营 |
| 撸猫 | Steam 官方文案 | FAQ 花絮 |
| **Steam 成就（`Steam Achievements` 类别存在，清单未公布）** | Steam appdetails categories | **发售后再做，现在标 `[Unconfirmed]`** |
| 面料图案：houndstooth / floral / plaid / damask / gingham | 9game / Polygon 预览 | 面料指南 |

---

## 七、建议篇数与逐篇选题（12 篇）

> **篇数依据**：Profile 14 —— 关键词 50-100 → **10 篇**。本批有效词 70 条落在该区间 → 基线 **10 篇**；
> `+2` 给「发售窗口的平台/购买/消歧」三簇（B/C 两簇合计 41 词，密度最高且时效最强，需拆成 3 页避免自噬）。
> 合计 **12 篇（P0 5 + P1 7）**。

### P0 — 建站首日必须（5 篇）

| # | 英文标题（建议） | 目标关键词 | 搜索意图 |
|---|---|---|---|
| 1 | **Dressmaker Release Date, Price and Platforms: Everything Confirmed** | `dressmaker release date`、`dressmaker release date game`、`dressmaker game release date`、`dressmaker steam release date`、`when is dressmaker coming out`、`when is dressmaker coming out on steam`、`dressmaker price steam`、`dressmaker steam price`、`dressmaker game price`、`dressmaker game how much`、`dressmaker game platforms` | 发售日 / 价格 / 平台（信息型，高时效） |
| 2 | **Is Dressmaker Free? Steam vs the Free itch.io Prototype Explained** | `is dressmaker game free`、`is dressmaker free`、`is dressmaker free on steam`、`is dressmaker on steam`、`dressmaker game itch io`、`dressmaker itch.io`、`dressmaker demo`、`dressmaker steam demo`、`dressmaker free demo`、`dressmaker demo itch io`、`how to download dressmaker game`、`where to play dressmaker game`、`is dressmaker game safe`、`how to open dressmaker game` | 「要不要钱 / 去哪玩 / 安不安全」（**rel 1250-1251 最高簇**） |
| 3 | **Dressmaker Beginner Guide: How the Dressmaking Loop Actually Works** | `dressmaker game how to play`、`dressmaker game guide`、`dressmaker guide`、`dressmaker walkthrough`、`dressmaker tutorial game`、`dressmaker gameplay`、`dressmaker game play` | 入门 / 流程（教学型） |
| 4 | **Dressmaker on Mac, Console and Mobile: Which Platforms Are Supported** | `dressmaker game mac`、`dressmaker game console`、`dressmaker game switch`、`dressmaker switch game`、`dressmaker nintendo switch`、`dressmaker game nintendo switch`、`is dressmaker on switch`、`dressmaker switch 2`、`dressmaker game xbox`、`dressmaker game ps5`、`dressmaker game mobile`、`dressmaker game download free android` | 平台可用性（**全部否定型答案**） |
| 5 | **Dressmaker vs DressMaker vs DressMaker Pro: Which Game Do You Want?** | `dressmaker game`、`dressmaker steam`、`steam dressmaker game`、`dressmaker steam game`、`dress maker steam game`、`dressmaker game steam`、`free lives dressmaker`、`cozy lives dressmaker` | **消歧 + 站名锚点**（防三种同名混流；同时吃 Free Lives / Cozy Lives 身份词） |

### P1 — 发售后 1 周内（7 篇，差异化长尾主攻）

| # | 英文标题（建议） | 目标关键词 / 机制锚点 | 搜索意图 |
|---|---|---|---|
| 6 | **Dressmaker Fabric Guide: All Fabrics and Patterns, and When to Use Them** | 官方 5 面料（cotton / linen / wool / silk / velvet）+ 图案（houndstooth / floral / plaid / damask）；`dressmaker cozy sewing game`、`dressmaker sewing game` | 系统 / 素材 |
| 7 | **Dressmaker Grain Direction and Bias Cut Explained (Stop Losing Quality Score)** ⭐ | **`dressmaker grain quality`**（唯一 Suggest 真命中）；绿箭头机制、单片质量封顶、斜裁差异 | **机制（最高差异化）** |
| 8 | **Dressmaker Pattern Placement: How to Cut Without Wasting Fabric** | 排料、省料 vs 质量权衡、逐片选料 | 机制 / 优化 |
| 9 | **Dressmaker Sewing Guide: Clean Seams and a Perfect Quality Score** | 缝纫机操作、走直线、缝线颜色 | 机制 / 技巧 |
| 10 | **Dressmaker Customer Requests Guide: How to Match Style Tags to Every Order** | 镇民订单（模糊 ↔ 具体）、style tag 叠加、场合/品味；`dressmaker game characters` | 系统 / 角色 |
| 11 | **Dressmaker Sketchbook and Dress Parts Guide: Bodice, Collar, Sleeves, Skirt** | 速写本设计、配色、部件系统、面料小样 | 系统 / 自定义 |
| 12 | **Dressmaker Decoration Guide: Buttons, Bows, Appliqué and Lace Placement** | 装饰四件套 + **部分角度贴不上的已知痛点** | 系统 / 排障 |

### 可选第 13 篇（P2，视发售数据再定）

- **Dressmaker Reputation, Coin and Shop Window Economy Guide** —— 声望/金币/橱窗成衣销售（官方文案可支撑，Suggest 无量）
- **Dressmaker Achievements Guide** —— ⚠️ Steam 有 `Steam Achievements` 类别但**清单未公布**，现在做只能标 `[Unconfirmed]`，**建议发售后再开工**

---

## 八、竞争缺口分析（vs `dressmakergame.com`）

> 唯一已知竞争站是粉丝站 `dressmakergame.com`（**非组织化 wiki**）。fandom / wiki.gg / Game8 / 中文 wiki / 日文 wiki **均无**（侦察员 9/11 结论，本次复核未推翻）。

### 8.1 已被它覆盖的（我们从零起步，需在深度/时效上超过）

| 它已有页面 | 我们的处置 |
|---|---|
| Download Guide（Win/Mac/Linux 安装 + 常见错误） | 我们的 #2 覆盖「来源与安全」，但**MUST 只用 Steam + itch 官方渠道** |
| How to Play（新手 walkthrough） | 我们的 #3 —— **必须更深**（它只到「sketch → delivery」泛流程） |
| Sewing Mastery（完美质量分技巧） | 我们的 #7 + #9 —— **拆成「布纹/斜裁」与「缝合」两篇专页，比它一篇更细** |
| Customer Preferences（NPC 风格/颜色/预算） | 我们的 #10 —— ⚠️ **它已列 NPC 偏好表**，我们 MUST NOT 直接抄；镇民名单官方未公布 → 我们的版本 MUST 标来源与 `[Unconfirmed]` |
| Troubleshooting（安装错误 / 蕾丝 bug / 性能） | 不单开页，FAQ 承接 |
| Patch Notes（0.1 → 当前 版本史） | 发售后按需补 |
| Steam Release Date | 我们的 #1 |
| System Requirements | 我们的 #1 / #4；⚠️ **它的配置被自己标为 "Unofficial estimates" 且写 Windows 7+ / 2 GB RAM，与 Steam 官方（Windows 10+ / 8 GB RAM）不符** → 我们用官方值，是准确性优势 |
| Official itch.io Download / Free prototype / Play Online (Browser) / Mobile APK | 我们的 #2 |
| Games Like Dressmaker（top-10 tailoring sims） | 我们的 F 类（可作 P2） |
| Official Links & Platforms | 首页 / 页脚 |
| Game Review & Playtime | 我们的 D 类口碑页 |

### 8.2 **它没有覆盖的（我们的差异化护城河）**

| 缺口 | 为什么我们能赢 |
|---|---|
| ⭐ **布纹方向 / 斜裁 → 质量分的专页** | 它只在 "Sewing Mastery" 里泛提；`dressmaker grain quality` 已有真实搜索且无专页 |
| ⭐ **排料优化（省料 vs 质量）专页** | 官网自我介绍里提到 pattern placement，但无系统化专页 |
| ⭐ **速写本 + 部件系统（Bodice/Collar/Sleeves/Skirt）专页** | 完全空白 |
| ⭐ **装饰与收尾（含「贴不上去」痛点）专页** | 完全空白，而这是 itch 评论里玩家明确卡住的地方 |
| ⭐ **Steam vs itch 正式版 vs 原型的差异表** | 它只在 FAQ 里一句带过；这是 `is dressmaker game free` 高热的核心答案 |
| ⭐ **DressMaker / DressMaker Pro（Steam 同名应用）消歧页** | **全网无人做**；三个 appid 在 Steam 搜索页直接混流 |
| **开发/发行归属准确性（Cozy Lives 开发 · Free Lives 发行）** | 它写的是「Created by elyaradine, sarandipityx, raithza」+「Published by Free Lives studio」，与 Steam 官方 `developers: ["Cozy Lives"]` 不一致 → 我们用 Steam 官方口径 |
| **Steam 成就** | 它没有；Steam `categories` 已确认有成就（清单未公布） |
| **声望 / 金币 / 橱窗经济** | 它没有系统化页面 |
| **中文 / 日文内容** | 它只有俄/土/西/葡语区域页；Steam 支持简中 + 日文**完整语音**，`针影裁梦下载` 已有真实搜索 → 中长期机会 |

### 8.3 它的事实风险（我们 MUST NOT 跟着抄）

- 平台写 **Windows + macOS + Linux**，但 **Steam appdetails `platforms.linux = false`** → 它在讲 itch 原型，不是 Steam 正式版
- 配置写 **Windows 7+ / 2 GB RAM / 150 MB**，自标 "Unofficial estimates" → 与 Steam 官方（Win 10+ / 8 GB / 1 GB）不符
- 时长写 "2-3 hours" → 是**原型**内容量，不是正式版
- 价格写 "name-your-price" → 是 **itch 原型**，不是 Steam 正式版（正式版价格**未公布**）

---

## 九、给建站协调员（BUILD-008）的 SEO 落地要点

1. **站名 / 域名 / 标题锚点**：MUST 带游戏限定词 —— 推荐 `Dressmaker Wiki` + 每页副标题 `... Guide`，
   站点级描述嵌入 `dressmaker game`、`dressmaker wiki`、`dressmaker game guide`、`dressmaker steam`。
   MUST NOT 用裸 `Dressmaker` 作唯一标题。
2. **归属 MUST 按事实表**：`developed by Cozy Lives and published by Free Lives`。
   ⚠️ MUST NOT 写 "developed by Free Lives"（本项目最高频编造点）。
3. **价格 MUST 标未公布**：Steam `price_overview` 为 null → 写「价格未公布」或 `[Unconfirmed]`，MUST NOT 编造美元数字。
   itch 原型是 name-your-price，**MUST 与 Steam 正式版价格明确区分**。
4. **无联机内容**：Steam `categories` 仅 `Single-player` → MUST NOT 出现多人 / 联机 / 跨平台联机类攻略或 FAQ。
5. **平台 MUST 只写 Windows + macOS**，MUST NOT 断言 PS5 / Xbox / Switch / Switch 2 / 手机版；对这批高频平台疑问，统一用 `#4` 一页回答。
6. **Steam 上没有 demo**（`demos = null`）→ 站内讲「试玩」时 MUST 指 itch.io 原型，MUST NOT 写「Steam demo」。
7. **每页段首做消歧**：如 "Dressmaker is a cozy dressmaking simulation developed by Cozy Lives and published by Free Lives, released on Steam on September 21, 2026."
   这是由于 `dressmaker` 一词同时被实体裁缝业 / 缝纫机品牌 / 2015 电影占据 —— 消歧段是**排名必需**，不是可选项。
8. **优先级**：P0 五篇可在建站当日出齐（1/2/3/4 靠官方文案 + Steam API 事实即可写实；#5 靠本节 5.1 的三 appid 表）。
   P1 七篇中 **#7（grain quality）SHOULD 随首发上线**，它是最可能抢到排名的一篇。
9. **诚实标注**：站民名单 / 成就清单 / 声望数值 / 订单时限 / 各面料属性差异 —— 官方均未公布，
   MUST 标 `[Unconfirmed]` 或写「官方商店页未说明」，MUST NOT 编造。

### 9.1 ⚠️ 给 BUILD-008 的核验提示（非关键词结论，MUST 自行复核）

本次 WebSearch 采到若干**与已核验事实表冲突或未证实的第三方说法**，列出仅供 BUILD-008 复核，**MUST NOT 直接写进站内**：

| 说法 | 来源 | 处置 |
|---|---|---|
| Steam 页「不兼容 macOS 10.15 Catalina 或更高」 | WebSearch 片段 | 与事实表 `platforms.mac = true` 冲突 → 以事实表为准，`[Unconfirmed]` |
| Linux（Ubuntu/Mint）可玩 | Instant Gaming / dressmakergame.com | 与 API `platforms.linux = false` 冲突 → **视为 itch 原型信息**，MUST NOT 写入 Steam 版 |
| 「Steam Deck Unsupported」 | XD.deals（第三方） | `[Unconfirmed]`，无 Valve 官方标记来源 |
| wishlist「200K+」 | 官方新闻稿 | 事实表已定：站内引用 MUST 标 "developer-published figure, Sep 2026" 并给来源 |
| itch 原型下载数 100K / 155K（两值不一致） | gamespress / indiegame.com | 事实表已定：MUST NOT 引用具体数字或标 `[Unconfirmed]` |
| `dressmaker playtest`（zh-CN Suggest 命中） | 本次采集 | 无法确认存在公开 playtest → `[Unconfirmed]` |

---

## 十、数据限制说明（MUST 读）

1. **Google Suggest 可用，但需绕过 DNS 污染**。本机默认 DNS 把 `suggestqueries.google.com` 解析到 `69.63.176.59`（Meta 网段），
   必须用 `8.8.8.8` 解析 + curl `--resolve` 才能访问。**换机器复现 MUST 先做这一步**，否则会误判「Suggest 不可用」。
   本次 586 次请求**全部成功（HTTP 200，0 失败）**，未触发限速。
2. **无搜索量 / KD / 竞争度数据**。本项目未接入任何关键词数据 API，因此报告内**不出现任何搜索量数字**。
   文中所有 rel 值均为 Google 随建议返回的 `google:suggestrelevance` 整数，**仅用于同批词相对排序，≠ 月搜索量**。
   凡涉及「wishlist / 下载数」的数字一律标 `[Unconfirmed]`，来源为开发者新闻稿或第三方模型。
3. **未发售导致机制词零量是结构性的**。386/535 查询返回空，其中机制种子（commission / customer / reputation /
   achievements / steam deck / mods / patch notes / difficulty / bias / applique / panel / trim / sabotage …）**全部为空**。
   这不是采集失败，而是**未发售游戏的正常表现** —— 机制类选题 MUST 靠官方文案 + 评测 + 玩家评论的证据链补足（见 §6.1），
   MUST NOT 因为「Suggest 没有」就判定该机制不存在。
4. **`dressmaker steam` 种子的熨烫同音污染**。约 17 条结果是「用蒸汽熨烫裙子」（how to steam a dress），
   与游戏无关。任何后续复用「dressmaker + steam」种子的采集 MUST 人工剔除这批词。
5. **`dressmaker review` / `dressmaker rating` 为中等置信**。2015 电影《The Dressmaker》的影评词与游戏评测词在这一带混流，
   本报告按「可能为游戏」保留并标注 ◐。
6. **itch.io 本机不可达**（`freelives.itch.io` / `itch.io` 连接 ECONNREFUSED / ECONNRESET），
   因此玩家评论的挖掘**只依赖 WebSearch 返回的片段**，未做整页抓取。「绿箭头 = 布纹对齐」这条机制来自 2 条独立命中的 itch 评论片段，
   置信度较高但**建议 BUILD-008 发售前后自行复核**。
7. **CJK 采集样本小（51 查询）**，只用于确认「中文译名 `针影裁梦` 存在真实下载意图」这一个结论，不足以支撑中日文选题规划。
   `hl=zh-CN` / `hl=ja` 对拉丁种子 `dressmaker` 的返回与 `hl=en` 高度重合（Google 本地化在此词上很弱）。
8. **`google:suggestrelevance` 不是稳定的绝对量**。它会随时间与查询上下文漂移；本报告记录的是 2026-09-12 的快照。
   **发售（9/21）后 SHOULD 重跑一次**（建议 9/22-9/25），机制词与平台词预计会显著变化。

---

> 数据来源：
> Google Suggest API（chrome client，2026-09-12，en 535 查询 + CJK 51 查询，全部 HTTP 200）·
> Steam `appdetails` / `storesearch`（appid 4019220 / 1487080 / 1599300）·
> `https://dressmakergame.com/`（WebFetch 全站结构）·
> WebSearch 交叉核验（Steam 商店页 / Polygon / Game*Spark / TechTimes / indiegame.com / treatyourgeek.co.uk /
> The Nerdy Type / 9game.cn / 3DM / itch.io 评论片段）·
> 站级事实基线：`.agent/facts-dressmaker-9-11.md`（已核验事实表，本报告未改写）
>
> **未编造搜索量、KD、竞争度**；所有列出的关键词均为本次采集的真实建议，或已注明来源的可核验游戏机制。
