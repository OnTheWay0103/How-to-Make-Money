# fallentearwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：1.0 发售后玩家抱怨集中在难度、引导不足、地图标记少、传送成本高、死亡掉 Korr Shards。前三项已由 `beginner-guide`、`walkthrough-guide`、`map-regions-guide` 覆盖；传送与死亡惩罚没有专文。
- ② system-inventory-driven：官方 **1.0.2（2026-10-16）**新增 **Teleport Rune**（任意位置传送）、早期任务地图指示、稀有猎杀 Boss 标记、地图 pin 40→100；**1.0.3（2026-10-23）**又改成 **Korr Shards 死亡不掉落、最大传送费用减半**。站内 17 篇没有任何一篇讲 fast travel / Teleport Rune / Korr Shard 传送成本。命中整块空白，且是当天最新补丁。

**选题**：Fallen Tear 快速旅行机制、Teleport Rune、Korr Shard 成本与 1.0.3 改动。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Patch Update 1.0.2 — Teleport Rune / map indicators / rare hunt markers | https://steamcommunity.com/ogg/1446900/announcements/detail/1846651706681273 | 2026-10-16 |
| Official | Patch Notes 1.0.3 — Korr Shards no longer lost on death / max teleport cost halved | https://steamcommunity.com/ogg/1446900/announcements/detail/1847286114036295 | 2026-10-23 |
| Community | Cubed3 – Fallen Tear: The Ascension PC review（fast-travel point distribution / Rin Map Tower） | https://www.cubed3.com/games/reviews/pc/fallen-tear-the-ascension | 访问于 2026-10-23 |
| Editorial | 路线规划与「不要囤 shard」建议 | 本站编辑综合 | 2026-10-23 |

官方补丁锚定 Teleport Rune、pin 40→100、死亡不掉落、最大费用减半；「Korr Shards 是传送货币」「Temple 为传送点」来自媒体评测/社区，正文标 `[Community]`。旧版 EA 补丁的「100 上限」未写入，因为版本口径不同且官方 1.0.3 摘要未给具体数字。

## 2. 查重结论

- 现有 17 篇 slug 全量比对，新 slug `fast-travel-teleport-rune-guide` 无重复。
- 主题比对：
  - `map-regions-guide`：20 个区域、Rin Map Tower、traversal 能力，没有传送成本/Teleport Rune。
  - `resources-economy-guide`：材料与 Temple 花费，明确写「currency names and exact costs are [Unconfirmed]」，没有 Korr Shard 传送。
  - `walkthrough-guide`：早期路线，没有 fast travel 系统。
  - `controls-techniques-guide`：Blink-Strike 战斗传送，不是地图传送，主题不重叠。
- 独立搜索意图：fallen tear fast travel / teleport rune / korr shards / 1.0.3。
- 判定：**无自噬**。

## 3. 产出

- 文件：`fallentearwiki/content/guides/fast-travel-teleport-rune-guide.md`
- slug：`fast-travel-teleport-rune-guide`
- 标题：How Fast Travel Works in Fallen Tear — Teleport Rune, Korr Shards & 1.0.3
- 正文词数：**1,494**（表格、Sources、链接不计）
- `[Unconfirmed]` 标记：Teleport Rune 获取方式、每次传送具体 shard 数、旧/新最大费用数值、Boss 房/剧情锁定区能否传送、是否全区域都有传送点、死亡惩罚改动是否覆盖所有难度。
- 未编造 Boss/道具/数值；官方未给的具体成本一律标 `[Unconfirmed]`。

## 4. 构建

```
cd fallentearwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；静态路由全部生成；`/guides/fast-travel-teleport-rune-guide` prerender 成功。
- 站内攻略数：17 → 18。

## 5. 部署

- 命令：`./deploy-wiki-site.sh fallentearwiki`
- 生产：https://fallentearwiki.vercel.app
- 本次部署：https://fallentearwiki-rhl9ojguk-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/fast-travel-teleport-rune-guide` | **HTTP 200**（64,876 bytes） |
| 页面含 "Teleport Rune" / "Korr Shards" | ✅ 命中 |
| sitemap.xml 收录 | ✅ `fast-travel-teleport-rune-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 未执行 git commit；未修改其他站点。
- 1.0.2 与 1.0.3 都是 2026-10 的正式 Steam 公告；未采用 2026-03 EA 期同名 1.0.2 的数据，避免版本混淆。
- 旧文 `map-regions-guide` 仍写「1.0 launches 9/16」，实际延期到 9/23；本批未回改旧文。
