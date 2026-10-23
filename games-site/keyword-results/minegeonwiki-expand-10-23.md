# minegeonwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：社区最高频的问题是“能不能中途退出”“关掉游戏进度是不是没了”“RESUME 为什么点不了”。站内 `walkthrough-guide` 里仍写着 **“there is no mid-run save”**——这句在 **Patch 3（2026-08-28）** 之后已经过时。
- ② system-inventory-driven：官方 Patch 3 公告把“存档”拆成两套系统：**biome boss 后的主动 Rest（banking）** 与 **房间级自动 checkpoint**。站内 25 篇 **0 篇** 覆盖，且旧页与新事实相冲突。

**选题**：MineGeon: Renegades 如何存档——Rest 与 checkpoint 各自保存什么、哪些资源跨局带走、RESUME 的正确用法、以及哪些操作仍会让你丢局。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Patch 3 update: Rest between biomes, resume any run where you left it, 40+ Fixes | https://store.steampowered.com/news/app/3227240/view/1842212951304526 | 2026-08-28 |
| Official | Week One Update: Thank You for a Week of Feedback | https://store.steampowered.com/news/app/3227240/view/1840310314346823 | 2026-08-08 |
| Community | Duuro — MineGeon: Renegades Review (PC / ROG Xbox Ally X) | https://duuro.net/blog/minegeon-renegades-review-pc-rog-xbox-ally-x | 2026-07（10-23 访问） |
| Community | InsertCoins — MineGeon: Renegades test et avis | https://insertcoins.press/articles/minegeon-renegades-test | 2026-07（10-23 访问） |
| Editorial | 丢局风险清单与操作顺序 | https://minegeonwiki.vercel.app/guides/minegeon-save-rest-resume-guide | 2026-10-23 |

官方 Patch 3 公告为一手来源：Rest 提示出现时机、normal finish 的矿物/经验 banking、下一次下潜从下一 biome 的 level selector 开始（装备保留、背包清空）、完整 carry-over 清单（gear、gadgets、weapons、ultimate、food、coins、experience、spores、reroll charges、recruits、pets）、三种结局颜色（Victory 绿 / Defeat 红 / Rest 蓝）、取消地下币 50% 自动折算、drop-pod 结算卡、房间 checkpoint 保存的字段（位置、入口门、loadout、food、keys、difficulty、resources、visited rooms、burned cards、experience）、PLAY→RESUME 菜单改动、房间内仅存血量。两个独立评测仅用于确认 Patch 3 之前的 run 结构，作为“为什么这次改动重要”的对照。

## 2. 查重结论

- 现有 25 篇 slug 全量比对，新 slug `minegeon-save-rest-resume-guide` 无重复。
- 主题比对：
  - `walkthrough-guide` 只讲流程，原文的“no mid-run save”已改写为 Patch 3 的 Rest/checkpoint 说明并内链新页；
  - `extraction-guide` 讲何时撤离，不讲存档系统；
  - `progression-guide` 讲局外成长，不讲跨局 carry-over；
  - `coop-multiplayer-guide` 讲联机机制，不讲 Rest 在联机下的行为。
- 独立搜索意图：how to save / resume run / rest between biomes，与上述页不互换 intro。
- 判定：**无自噬**，且修复了一处与官方补丁冲突的旧断言。

## 3. 产出

- 文件：`minegeonwiki/content/guides/minegeon-save-rest-resume-guide.md`
- slug：`minegeon-save-rest-resume-guide`
- 标题：How to Save a Run in MineGeon: Renegades — Rest Between Biomes and Room Checkpoints Explained
- 正文词数：**1,423**（表格、frontmatter、URL 不计）
- `[Unconfirmed]` / 明确标注：checkpoint 的保留时长、跨设备/跨平台恢复、断线后 checkpoint 是否仍有效。
- 未编造数值或字段；carry-over 清单与三种结局颜色逐条来自 Patch 3 原文。

## 4. 构建

```
cd minegeonwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/minegeon-save-rest-resume-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh minegeonwiki`
- 生产：https://minegeonwiki.vercel.app
- 本次部署：https://minegeonwiki-pszzwclw2-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/minegeon-save-rest-resume-guide` | **HTTP 200**（66,152 bytes） |
| 页面含标题关键词 "Rest Between Biomes and Room Checkpoints Explained" | ✅ 命中 |
| 页面含 "RESUME" | ✅ 命中 |
| sitemap.xml 收录 | ✅ 1 处 |
| frontmatter sources 三层 | ✅ Official ×2 / Community ×2 / Editorial ×1 |

## 7. 备注

- 同站事实校准：`walkthrough-guide` 中与 Patch 3 冲突的“无中途存档”句已替换为 Rest/checkpoint 说明，`updated` 同步为 2026-10-23。
- 未执行 git commit（按指令）。
- 未修改其他站点。
