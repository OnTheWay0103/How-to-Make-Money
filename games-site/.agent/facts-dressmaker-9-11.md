# Dressmaker — 已核验事实表（BUILD-008 上游材料）

> 采集人：主 Agent（统筹）｜采集日期：2026-09-11
> 来源：Steam 官方 appdetails API，`appid=4019220`，`cc=us&l=english`
> 命令：`curl -s "https://store.steampowered.com/api/appdetails?appids=4019220&cc=us&l=english"`
> 原始响应落盘：`/tmp/dm2.json`（19,924 bytes，HTTP 200，`success:true`）

**用途**：BUILD-008 站级元数据（`lib/seo-config.ts` / `app/page.tsx` / `app/faq/page.tsx` /
`app/layout.tsx` / `content/home-content.md`）MUST 以下表为准，MUST NOT 凭印象或二手站填写。

---

## 1. 身份与归属（⭐ 本项目最高频编造点）

| 字段 | 值 | 备注 |
|------|-----|------|
| 游戏名 | **Dressmaker** | |
| Steam appid | **4019220** | |
| 类型 | `game`（非 demo、非 DLC） | |
| **开发方** | **Cozy Lives** | ⚠️ 字段 `developers: ["Cozy Lives"]` —— **不是 Free Lives** |
| **发行方** | **Free Lives** | ⚠️ 字段 `publishers: ["Free Lives"]` |
| 题材 | Casual / Simulation | Steam genres: `Casual`, `Simulation` |

> ⚠️ **归属红线**：Cozy Lives 是**开发方**（Free Lives 旗下的 cozy 子厂牌），Free Lives 是**发行方**。
> 站内 MUST 写 "developed by Cozy Lives and published by Free Lives"。
> MUST NOT 写 "developed by Free Lives" —— 这正是 2026-09-11 在 9 个站修复的 dev/publisher 归属错误类。

## 2. 发售与价格

| 字段 | 值 |
|------|-----|
| 发售日 | **2026-09-21**（`release_date: {coming_soon: true, date: "Sep 21, 2026"}`） |
| 状态 | **未发售**（截至 2026-09-11，距发售 10 天） |
| 价格 | **未公布** —— `price_overview` 字段**不存在**（null） |
| is_free | `false` |

> 价格 MUST 写 `[Unconfirmed]` 或直接说明「发售前未公布」，MUST NOT 编造具体数字。

## 3. 平台与形式

| 字段 | 值 |
|------|-----|
| 平台 | **Windows ✅ / macOS ✅ / Linux ❌**（`platforms: {windows:true, mac:true, linux:false}`） |
| 模式 | **单人**（categories 仅 `Single-player`，**无 Co-op / Multiplayer / PvP**） |
| 其他 categories | `Custom Volume Controls` / `Mouse Only Option` / `Playable without Timed Input` / `Family Sharing` |

> ⚠️ 本站 **无联机内容** → 站内 MUST NOT 出现多人/联机/跨平台联机类攻略或 FAQ。
> 「Mouse Only Option」+「Playable without Timed Input」是官方无障碍/低操作门槛卖点，属可写的真实机制。
> 主机版未在 Steam 页出现，MUST NOT 断言 PS5/Xbox/Switch 版本。

## 4. AdSense 合规

| 字段 | 值 |
|------|-----|
| `content_descriptors.ids` | **`[]`（完全为空）** |
| `required_age` | `0` |

> 本批候选中**唯一零内容标记**，无血腥/色情/敏感题材，AdSense 风险最低。

## 5. 官方系统要求（逐字，可直接引用）

**Windows 最低配置**
- OS: Windows 10 or later
- Processor: Intel Core i5 or AMD Ryzen
- Memory: 8 GB RAM
- Graphics: Intel UHD 630 or Better
- DirectX: Version 11
- Storage: 1 GB available space

**macOS 最低配置**
- Processor: Apple M1
- Memory: 8 GB RAM
- Storage: 1 GB available space

> Steam 页**未列出推荐配置**（`recommended` 字段为空）→ 站内 MUST NOT 编造推荐配置。

## 6. 官方商店页文案（机制事实来源，逐字）

> Choose fabric, arrange and cut out patterns, sew garments and add decorations. Dressmaker is a
> cozy simulation game where every part of making a dress is under your control. Whether your
> pattern is aligned to the grain or cut on bias, how you choose to arrange and cut out your fabric
> is what appears on the final dress. Take full control over what fabric to use for each panel of
> your garment. Feed your fabric through the sewing machine to stitch it together. Decorate your
> dress with buttons, bows and appliqué. Add lace trims and other accessories wherever you like
> with complete creative freedom. Meet a whole town of people hoping to fill their wardrobes with
> custom-made dresses tailored specially to important events and their individual tastes. Create
> dresses to impress them, or display your own designs in your shop window and sell pre-made
> dresses off of the rack. Buy from a wide range of fabrics, including cotton, linen, wool, silk
> and velvet. Design and colour your dress in your sketchbook, adding fabric samples and appliqué.
> Arrange and cut out your dress pattern, preview them on a mannequin and sew them together. Turn
> in your dresses to your customers to gain both reputation and coin. Pet the kitty.

**Short description（官方）**
> Become a dressmaker! Choose fabric, cut out patterns, and sew them all together to satisfy (or
> sabotage!) townsfolk in this cozy crafting game inspired by real dressmaking.

### 由官方文案可直接支撑的机制清单（无编造风险）

1. **面料体系**：cotton / linen / wool / silk / velvet（官方明确 5 种）
2. **布纹方向 grain direction** 与 **斜裁 bias cut** —— 官方明确「aligned to the grain or cut on bias」
3. **逐片选料**：每个 panel 可单独选面料
4. **图案排布与裁剪**（arrange and cut out patterns）
5. **缝纫机缝合**（feed your fabric through the sewing machine）
6. **装饰**：buttons / bows / appliqué / lace trims
7. **人台预览**（preview on a mannequin）
8. **速写本设计**（sketchbook，含配色 + 面料小样）
9. **镇民订单**：按重要事件 + 个人品味定制，**可满足或故意搞砸**（satisfy or sabotage）
10. **橱窗与成衣销售**（shop window / sell pre-made dresses off the rack）
11. **声望 + 金币**双收益（reputation and coin）
12. **撸猫**（pet the kitty）

> 以上 12 条为**官方原文可支撑**的事实，写攻略时可直接引用。
> 官方文案**未提及**的内容（如镇民日历事件、声望等级数值、具体面料的属性差异、订单时限）
> MUST 标 `[Unconfirmed]` 或以「官方商店页未说明」呈现，MUST NOT 写成确认事实。

## 7. 待 BUILD-008 自行核验/补充的项

| 项 | 处置 |
|-----|------|
| 是否有 Demo（独立 appid） | BUILD-008 SHOULD 查 Steam 搜索 `Dressmaker demo`，有则写入 FAQ；无则 MUST NOT 提 |
| 官方新闻稿 wishlist 数（200K+） | 侦察员引用 gamespress 官方通稿；站内若引用 MUST 标注「developer-published figure, Sep 2026」并给出来源，否则用 `[Unconfirmed]` |
| itch.io 原型下载数 | 池内 8/10 记 155K，9/11 侦察记 100K+ —— **两值不一致**，站内 MUST NOT 引用具体数字，或标 `[Unconfirmed]` |
| 发售后再复核 | 9/21 发售后按实际评测复核口碑与价格 |

## 8. SEO 红线

- **MUST NOT 以裸词 `Dressmaker` 为主攻**：Steam 另有 **DressMaker（appid 1487080）** 与
  **DressMaker Pro（appid 1599300）** 两款无关应用，且 `dressmaker` 本身是通用英文词
- MUST 走长尾：`Free Lives Dressmaker` / `Cozy Lives Dressmaker` / `Dressmaker patterns` /
  `Dressmaker fabric grain` / `Dressmaker bias cut` / `Dressmaker customer requests`
- ⚠️ 唯一已知竞争：`dressmakergame.com`（粉丝站，非组织化 wiki，体量小）——深度上压过它
