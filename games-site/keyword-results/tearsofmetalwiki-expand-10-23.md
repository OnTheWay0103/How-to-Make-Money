# tearsofmetalwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：社区高频问题仍是联机稳定性/desync、中途存档缺失、后期 Act 2/Act 3 崩溃。联机问题站内已有 `multiplayer-connection-fix-guide`；崩溃与存档分别已有 `save-system-guide` 与补丁页，痛点本身不新。
- ② system-inventory-driven：官方 **2026-10-21** 公告开放 **public experimental branch**（Steam 可选分支）。这是站点上线以来第一次可以用“切换分支”改变游戏行为，站内 22 篇 **0 篇** 提到 experimental。命中整块空白。

**选题**：如何加入 Tears of Metal experimental branch、首个构建改了什么（solo mid-campaign saves、Emblem Power 重做、F3 报错工具）、联机端会缺什么、以及该不该现在切。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | The Experimental Branch Update | https://store.steampowered.com/news/app/1913120/view/1847286114029005 | 2026-10-21 |
| Official | New Patch — Meta-progression Improvement | https://store.steampowered.com/news/app/1913120/view/1844751498221644 | 2026-09-24 |
| Official | Patch Notes — v0.17.60380（当前主线构建） | https://store.steampowered.com/news/app/1913120/view/1845383656377911 | 2026-09-30 |
| Community | ingamenews — Tears of Metal Hits Early Access: Patch 0.8.57278 Details | https://ingamenews.com/pc-gaming/tears-of-metal-hits-early-access-patch-0-8-57278-details/ | 2026-07-24 |
| Editorial | 分支取舍与回滚步骤 | https://tearsofmetalwiki.vercel.app/guides/tears-of-metal-experimental-branch-guide | 2026-10-23 |

官方公告为权威一手来源：opt-in 路径（Properties → Game Versions & Betas → experimental）、退出分支的回滚说明、crossplay 限制、联机端缺少中途存档、Emblem Power 数值（core Emblem 上限 3、Large Reliquary 25%→10%）全部逐条来自 10-21 公告原文。社区媒体仅用于证明“中途存档是长期确认的开发优先级”这一时间背景，其内容早于实验分支，未用于描述 10-21 构建。

## 2. 查重结论

- 现有 22 篇 slug 全量比对，新 slug `tears-of-metal-experimental-branch-guide` 无重复。
- 主题比对：
  - `save-system-guide` 讲默认分支“没有中途存档”的设计与原因，已同步改写为“默认分支仍无 / 实验分支 10-21 起 solo 可存”，并链接新页；两页分工不同（设计原因 vs 分支操作）；
  - `patch-notes` 只到 9-30，已加横幅指向新页；
  - `emblem-artifact-guide` 讲 Emblem 收集与搭配，不讲 Power 缩放重做；
  - `multiplayer-connection-fix-guide` 讲报错与网络排查，不讲 crossplay 分支限制。
- 独立搜索意图：experimental branch / opt into beta / is the beta save safe，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`tearsofmetalwiki/content/guides/tears-of-metal-experimental-branch-guide.md`
- slug：`tears-of-metal-experimental-branch-guide`
- 标题：How to Join the Tears of Metal Experimental Branch — What Changes and Whether Your Save Is Safe
- 正文词数：**1,473**（表格、frontmatter、URL 不计）
- `[Unconfirmed]` / 明确标注：实验分支与主线之间存档能否互读的长期行为、联机端后续是否跟进、实验分支的更新频率。
- 未编造版本号、数值、道具名；所有改动条目锚定 10-21 公告原文。

## 4. 构建

```
cd tearsofmetalwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/tears-of-metal-experimental-branch-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh tearsofmetalwiki`
- 生产：https://tearsofmetalwiki.vercel.app
- 本次部署：https://tearsofmetalwiki-8vuf5z59k-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/tears-of-metal-experimental-branch-guide` | **HTTP 200**（66,885 bytes） |
| 页面含标题关键词 "What Changes and Whether Your Save Is Safe" | ✅ 命中 |
| 页面含 "Game Versions & Betas" | ✅ 命中 |
| sitemap.xml 收录 | ✅ 1 处 |
| frontmatter sources 三层 | ✅ Official ×3 / Community ×1 / Editorial ×1 |

## 7. 备注

- 同站事实校准：`save-system-guide` 明确区分默认分支（无中途存档）与实验分支（solo 可存），避免旧结论与新事实冲突；`patch-notes` 加 9-24 / 9-30 / 10-21 三条更新横幅。
- 未执行 git commit（按指令）。
- 未修改其他站点。
