# themoundwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条选题路径都跑了。**

- ① complaint-driven：Patch 1.06 仅「内存优化 + Ghost 背包蘑菇消失修复」，无法独立成 800 词；崩溃/性能/存档问题已分别被 `performance-fps-fix-guide`、`progress-save-recovery-guide` 覆盖，继续写会自噬。
- ② system-inventory-driven：官方商店页与 7/15 上线公告列出 **Temple of Yig 免费 DLC 任务**（独立 Steam app 4925780、手动领取、仅主机需拥有）；站内 41 篇只有 `maps-locations-guide` 一行提及、`legendary-hunts` 一句带过，**无领取/联机/进入方式说明**。命中整块空白。

**选题**：Temple of Yig DLC 的领取、联机规则、进入方式与内容边界。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | The Mound: Omen of Cthulhu is OUT NOW（免费 DLC、手动领取、仅 host 需要） | https://store.steampowered.com/news/app/2569760/view/693139048964822503 | 2026-07-15 |
| Official | Temple of Yig Exclusive Mission 商店页（app 4925780） | https://store.steampowered.com/app/4925780/The_Mound_Omen_of_Cthulhu__Temple_of_Yig_Exclusive_Mission/ | 持续 |
| Official | 本体商店页（4 人 co-op、contracts、logbooks） | https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/ | 持续 |
| Community | Temple of Yig DLC — The Mound（themoundomenofcthulhu.wiki） | https://themoundomenofcthulhu.wiki/release-info/temple-of-yig-dlc/ | 2026-07 |

官方上线公告为「免费/手动领取/仅 host 需要」的权威来源；社区 wiki 的 serpent 主题、lamp/salt 分工、区域名缺失等均明确标为 Community / `[Unconfirmed]`。

## 2. 查重结论

- 现有 41 篇 slug 全量比对，新 slug `temple-of-yig-dlc-guide` 无重复。
- 主题比对：`maps-locations-guide` 仅一行列 DLC 区域；`contracts-guide` 讲 contract 类型；`coop-strategy-guide` 讲团队战术；`legendary-hunts` 讲终局 contract。均无「如何领取/如何联机进入」。
- 独立搜索意图：Temple of Yig how to claim / not showing / co-op host，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`themoundwiki/content/guides/temple-of-yig-dlc-guide.md`
- slug：`temple-of-yig-dlc-guide`
- 标题：The Mound Temple of Yig DLC — How to Claim It and Play It With Friends
- 正文词数：**1,481**（表格不计）
- `[Unconfirmed]` 标记：Epic/主机领取路径、区域名/敌人/时长/确切奖励、任务在菜单中的具体入口、开放世界死亡惩罚是否适用于该任务。
- 未编造 Boss 名、区域名、掉落表或 DLC 价格。

## 4. 构建

```
cd themoundwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；55/55 static pages；`/guides/temple-of-yig-dlc-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh themoundwiki`
- 生产：https://themoundwiki.vercel.app
- 本次部署：https://themoundwiki-obmttc1xe-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/temple-of-yig-dlc-guide` | **HTTP 200**（62,802 bytes） |
| 页面含 "Temple of Yig" | ✅ 命中 |
| `<title>` | The Mound Temple of Yig DLC — How to Claim It and Play It With Friends · The Mound Wiki |
| sitemap.xml 收录 | ✅ `guides/temple-of-yig-dlc-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 商店页在部分区域只显示含 DLC 的 Deluxe 捆绑包，页面已提示「独立领取入口可能只在 DLC 标签页出现」并标 `[Unconfirmed]`，避免把区域差异写成确定事实。
- 未执行 git commit；未修改其他站点。

## 8. 复部署（related 修复）

- 原因：本站 `parseFrontmatter` 不解析行内 YAML 数组，`related: ["a","b"]` 会被当成字符串，`RelatedGuides` 不渲染。已改为块状 YAML（`related:` + `  - slug`）。
- 重新 build：exit 0，`/guides/temple-of-yig-dlc-guide` prerender 成功。
- 新部署：https://themoundwiki-da6nwea0g-zhaoq0103s-projects.vercel.app
- 线上复查：`GET https://themoundwiki.vercel.app/guides/temple-of-yig-dlc-guide` → **HTTP 200**，页面含 "Temple of Yig"，且 "Related Guides" 区块与 4 个内链均正常渲染。
