# lowbudgetrepairswiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**走「官方系统清单 × 站内覆盖」路径。**

- Updates 6 / 7 / 7.1（2026-09-21、10-01、10-14）连续三个版本都在修存档相关缺陷：加入存档系统、手动槽位余量显示、重复读取同一存档导致无限加载、家具/窗户/抽屉/螺丝读档错位、任务完成不计数。
- 站内 37 篇 **无存档系统页**：`renovation-jobs-guide` 只在任务描述里顺带提到存档修复，`beginner-guide` 无存档流程，`faq` 无槽位/云存档说明。
- 玩家痛点明确：读档后家具消失、任务不计数、卡无限加载，不知道该回哪一步。

**选题**：存档系统（手动 vs 自动）、安全存档时机、无限加载与任务不计数修复。

> 已排除：窗户安装指南（步骤级证据不足）、Sandbox 模式（限时 playtest，时效性强）。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | UPDATE 6 — SAVE SYSTEM AND NEW LANGUAGES | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1844115010501375 | 2026-09-21 |
| Official | UPDATE 7 — PHYSICS IMPROVEMENTS!（同存档重复读取无限加载修复） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1845383656381603 | 2026-10-01 |
| Official | Update 7.1 — PHYSICS, FURNITURE & MORE SAVE FIXES | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706674265 | 2026-10-14 |
| Community | Low-Budget Repairs Wiki — Saves and Steam Cloud | https://low-budget-repairs.wiki/support/saves-and-cloud/ | 2026-08-09 |
| Community | Cheatbook — Low-Budget Repairs Hints & Tips（Ranking 交付前手动存档） | https://www.cheatbook.de/files/lowbudgetrepairs.htm | 2026 |
| Editorial | 安全存档工序与恢复清单为基于官方补丁说明的建议 | — | 2026-10-23 |

## 2. 查重结论

- 37 篇 slug 全量比对，新 slug `how-to-save-game-guide` 无重复。
- 主题比对：`renovation-jobs-guide` 是任务清单；`inspection-guide` 讲验收标准；`materials-guide` 的 "Where to Save" 指省钱不是存档；`faq` 为通用问答。
- 搜索意图独立：low-budget repairs save game / save slots / infinite loading screen。
- 判定：**无自噬**。

## 3. 产出

- 文件：`lowbudgetrepairswiki/content/guides/how-to-save-game-guide.md`
- slug：`how-to-save-game-guide`
- 标题：How to Save Your Game in Low-Budget Repairs — Slots, Autosave & Loading Fixes
- 正文词数：**1,273**（表格不计）
- `[Unconfirmed]` 标记：存档菜单确切路径、手动槽位总数、本地存档目录（`LocalLow` 为社区说法，未官方文档化）、演示版存档是否继承。
- 未编造槽位数量、存档文件名或云同步机制。

## 4. 构建

```
cd lowbudgetrepairswiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；37/37 static pages；`/guides/how-to-save-game-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh lowbudgetrepairswiki`
- 生产：https://lowbudgetrepairswiki.vercel.app
- 本次部署：https://lowbudgetrepairswiki-hb0nit1br-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/how-to-save-game-guide` | **HTTP 200**（62,465 bytes） |
| 页面含 "Autosave" | ✅ 命中 |
| `<title>` | How to Save Your Game in Low-Budget Repairs — Slots, Autosave & Loading Fixes · Low-Budget Repairs Wiki |
| sitemap.xml 收录 | ✅ `guides/how-to-save-game-guide` |
| 证据栏渲染 | ✅ Official ×3 / Community ×2 / Editorial ×1 |
| related 内链 | ✅ 4 条均指向真实 slug |

## 7. 备注

- 未执行 git commit；未修改其他站点。
