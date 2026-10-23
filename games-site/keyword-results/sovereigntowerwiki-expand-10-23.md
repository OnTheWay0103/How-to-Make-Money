# sovereigntowerwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：发售两个月后，玩家抱怨主要集中在难度、随机性与 Act 3 节奏；这些已由 `beginner-guide`、`core-mechanics`、`tier-list`、`rewind-guide` 覆盖，继续写会自噬。
- ② system-inventory-driven：Patch 1.2.0（2026-10-15，Major Narrative Update）在官方公告中新增 **四个高满意度阵营 audience**，并给出明确奖励清单。站内 18 篇没有任何一篇覆盖 1.2.0 的新 audience、奖励或 50 满意度阈值；`factions-guide` 只讲阵营平衡，`knight-recruitment-guide` 只有一行 Daguez。命中整块空白。

**选题**：Patch 1.2.0 四个阵营 audience 的解锁条件、奖励与满意度提升路径。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Sovereign Tower – Patch 1.2.0 – Major Narrative Update | https://steamcommunity.com/ogg/4113940/announcements/detail/697651526084067421 | 2026-10-15 |
| Official | Sovereign Tower Steam 商店页（五阵营、audience、骑士招募） | https://store.steampowered.com/app/4113940/ | 持续 |
| Community | Sovereign Tower Wiki – How to Get Daguez | https://sovereigntower.wiki/guides/get-daguez/ | 访问于 2026-10-23 |
| Editorial | 奖励优先级与满意度提升框架 | 本站编辑综合 | 2026-10-23 |

关键数字（1,477 funds、Absolution、Unicorn + "unicorn tears"、Daguez 解锁）逐字锚定官方 1.2.0 公告；Daguez 的 Strength 15 / Luck 9 / armour 6、座位上限等来自社区，正文明确标 `[Community]`。

## 2. 查重结论

- 现有 18 篇 slug 全量比对，新 slug `patch-1-2-0-faction-audiences` 无重复。
- 主题比对：
  - `factions-guide`：五阵营与危机管理，没有 1.2.0 奖励。
  - `knight-recruitment-guide`：Daguez 仅一行触发说明，没有 audience 选项、奖励或其他三阵营内容。
  - `economy-guide`：Treasury 管理，不涉及 1,477 funds audience。
  - `romance-guide`：1.2.0 的 Act 限制只在新文一笔带过，主题仍是阵营奖励。
- 独立搜索意图：sovereign tower 1.2.0 / faction audience / unicorn mount / absolution / daguez。
- 判定：**无自噬**。

## 3. 产出

- 文件：`sovereigntowerwiki/content/guides/patch-1-2-0-faction-audiences.md`
- slug：`patch-1-2-0-faction-audiences`
- 标题：How to Unlock Every Patch 1.2.0 Faction Audience in Sovereign Tower
- 正文词数：**1,413**（表格、Sources、链接不计）
- `[Unconfirmed]` 标记：满意度数值刻度、每个 audience 是否可重复触发、错过后能否补触发、能否一周目拿全四项、1.2.0 是否需新存档。
- 未编造 Boss/道具/数值；所有官方数字均来自 1.2.0 公告。

## 4. 构建

```
cd sovereigntowerwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；32/32 static pages；`/guides/patch-1-2-0-faction-audiences` prerender 成功。
- 站内攻略数：18 → 19。

## 5. 部署

- 命令：`./deploy-wiki-site.sh sovereigntowerwiki`
- 生产：https://sovereigntowerwiki.vercel.app
- 本次部署：https://sovereigntowerwiki-nsspat3ib-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/patch-1-2-0-faction-audiences` | **HTTP 200**（62,613 bytes） |
| 页面含 "Patch 1.2.0 Faction Audience" / "1,477" | ✅ 命中 |
| `<h1>` | How to Unlock Every Patch 1.2.0 Faction Audience in Sovereign Tower |
| sitemap.xml 收录 | ✅ `patch-1-2-0-faction-audiences` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 未执行 git commit；未修改其他站点。
- 官方公告只给奖励与 50 阈值，未给满意度刻度；正文没有把社区推测写成确定机制。
