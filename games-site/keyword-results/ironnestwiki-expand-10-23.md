# ironnestwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**走「官方系统清单 × 站内覆盖」路径。**

- 官方商店页把 **Customizable Cat Companion** 列为核心特色；Patch #2（2026-08-08）修了猫眼在 Very Low 画质下消失、任务结束后仍被抱着导致 glitch；Patch #6（2026-08-22）修了抱着猫操作站位时挡视野。
- 站内 22 篇中，猫只在两处一行带过（控制页与新手页），**没有一篇讲启用开关、Upstairs 漫游、外观自定义、F 抱起 / G 驱赶、丢猫复位**。
- 玩家痛点明确：猫不见了、猫挡视野、不知道 customization 菜单在哪。

**选题**：IRON NEST 猫同伴的启用、自定义、移动与复位。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | IRON NEST: Heavy Turret Simulator 商店页（Customizable Cat Companion） | https://store.steampowered.com/app/2950790/ | 2026-10-23 访问 |
| Official | Patch #6: Bug Fixes and Save & Resume System（修复抱猫操作站位挡视野） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1841579228672166 | 2026-08-22 |
| Official | Patch #2: IRON NEST — PATCH 1.0 (1558)（猫眼渲染与任务间持续携带修复） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314347288 | 2026-08-08 |
| Community | NineWiki — Cat Guide & Controls（Options → pet cat / Upstairs / Customization；F 抱起、G 驱赶；开关自定义复位到下舱口） | https://ninewiki.com/guide/iron-nest-heavy-turret-simulator-cat-guide-controls/ | 2026 |
| Community | Prodigy Gamers — Cat Guide（菜单位置与复位行为交叉验证） | https://prodigygamers.com/2026/08/08/iron-nest-heavy-turret-simulator-cat-guide-how-to-find-customize-and-move-your-pet-cat/ | 2026-08-08 |
| Editorial | 操作作息与丢猫排查清单为基于已确认菜单行为的建议 | — | 2026-10-23 |

## 2. 查重结论

- 22 篇 slug 全量比对，新 slug `cat-companion-guide` 无重复。
- 主题比对：`controls-guide` 只有一行 F/G；`beginner-guide` 只有一句提到猫；`crew-stations-guide` 讲站位分工；`achievements-medals-guide` 不含猫相关成就。
- 搜索意图独立：iron nest cat / customize cat / find cat / cat upstairs。
- 判定：**无自噬**。

## 3. 产出

- 文件：`ironnestwiki/content/guides/cat-companion-guide.md`
- slug：`cat-companion-guide`
- 标题：How to Find and Customize Your Cat in IRON NEST — Companion Guide
- 正文词数：**1,274**（表格不计）
- `[Unconfirmed]` 标记：外观选项总数、猫是否有可靠音频定位、是否与成就相关、改名功能与默认名 "Hastur"（仅单一社区来源，且与控制页 E 键冲突）。
- 未编造菜单路径之外的层级、选项数量或成就名。

## 4. 构建

```
cd ironnestwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；22/22 static pages；`/guides/cat-companion-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh ironnestwiki`
- 生产：https://ironnestwiki.vercel.app
- 本次部署：https://ironnestwiki-18a9bg0ei-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/cat-companion-guide` | **HTTP 200**（60,463 bytes） |
| 页面含 "Customize" | ✅ 命中 |
| `<title>` | How to Find and Customize Your Cat in IRON NEST — Companion Guide · Iron Nest Wiki |
| sitemap.xml 收录 | ✅ `guides/cat-companion-guide` |
| 证据栏渲染 | ✅ Official ×3 / Community ×2 / Editorial ×1 |
| related 内链 | ✅ 4 条均指向真实 slug |

## 7. 备注

- 改名相关说法未升级为事实，全文保留 `[Unconfirmed]` 与来源冲突说明。
- 未执行 git commit；未修改其他站点。
