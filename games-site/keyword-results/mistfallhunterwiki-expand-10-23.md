# mistfallhunterwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条选题路径都跑了。**

- ① complaint-driven：玩家对赛季清档的担心集中在「会不会全清」「仓库保不保」，但站内 `season-guide` 只有一行「Stash/Camp Reset: No」，且该行已被官方推翻。
- ② system-inventory-driven：官方 DevNote #10 给出完整 **retained / converted / reset** 三分法；站内无任何一页逐项解释。命中整块空白。

**选题**：Season 1 → Season 2 重置规则（保留 / 转换 / 重置），以及 Fateweaver Shop。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | DevNote #10 — S1 Seasonal Reset Special | https://store.steampowered.com/news/app/3282300/view/706660627797508463 | 2026-10-21 |
| Official | October 21 Live Update（Season 2 预览活动 Blood and Fire） | https://store.steampowered.com/news/app/3282300/view/742688880388473805 | 2026-10-21 |
| Community | Does Mistfall Hunter Wipe? Seasonal Resets（mistfallhunter.app） | https://mistfallhunter.app/wipe-seasons/ | 持续更新 |
| Community | Mistfall Hunter season reset: what you keep, what resets（ALT Tab Wiki） | https://alttab.wiki/posts/mistfall-basics-season-reset-carryover/ | 2026-10 |

官方公告对自身重置规则为权威一手来源，按质量红线逐字锚定，不要求第三方再 corroborate；社区页仅作交叉核对。

## 2. 查重结论

- 现有 38 篇 slug 全量比对，新 slug `season-1-reset-guide` 无重复。
- 主题比对：`season-guide` 讲赛季机制/通行证/元游戏，仅一行涉及 reset 且**事实错误**；`camp-upgrades-guide` 讲建造优先级；`economy-guide` 讲赚金与交易；`patch-notes` 为更新日志。均无逐项 reset 规则。
- 独立搜索意图：what carries over / is there a wipe / Fateweaver tokens，与上述页不互换 intro。
- 判定：**无自噬**。

### 关联修正（同站，非新增页）

`season-guide.md` 原表格行：

```
| Stash/Camp Reset | No — camp upgrades and warehouse persist |
```

改为指向新页的准确表述，并将 `updated` 改为 `2026-10-23`。原因：官方 DevNote #10 明确六座营地建筑等级重置、仓库物品转为 Contribution，旧行属事实错误，按 Profile「事实修正一次改齐」处理。

## 3. 产出

- 文件：`mistfallhunterwiki/content/guides/season-1-reset-guide.md`
- slug：`season-1-reset-guide`
- 标题：Mistfall Hunter Season 1 Reset — What Carries Over to Season 2 and What Doesn't
- 正文词数：**1,206**（表格不计）
- `[Unconfirmed]` 标记：Contribution→Leaves 具体兑换率、Season 2 日期（仅一家德媒称 11/11）、部分平台细节。
- 未编造任何比例、日期、货币数值；官方未给的比例统一标注未确认。

## 4. 构建

```
cd mistfallhunterwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；52/52 static pages；`/guides/season-1-reset-guide` 与修正后的 `/guides/season-guide` 均 prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh mistfallhunterwiki`
- 生产：https://mistfallhunterwiki.vercel.app
- 本次部署：https://mistfallhunterwiki-f8yikl7by-zhaoq0103s-projects.vercel.app
- `vercel inspect`：status **Ready**，Aliases 含 `https://mistfallhunterwiki.vercel.app`。

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/season-1-reset-guide` | **HTTP 200**（首次 curl 遇瞬时 DNS 000，重试 200，ip=216.198.79.67） |
| 页面含 "Season 1 Reset" | ✅ 命中 |
| `<title>` | Mistfall Hunter Season 1 Reset — What Carries Over to Season 2 and What Doesn't · Mistfall Hunter Wiki |
| sitemap.xml 收录 | ✅ `guides/season-1-reset-guide` |
| `GET /guides/season-guide` | **HTTP 200**，页面已链接 `season-1-reset-guide` |

## 7. 备注

- 未执行 git commit。
- 未修改其他站点。

## 8. 复部署（related 修复）

- 原因：本站 `parseFrontmatter` 不解析行内 YAML 数组，`related: ["a","b"]` 会被当成字符串，`RelatedGuides` 不渲染。已改为块状 YAML（`related:` + `  - slug`）。
- 重新 build：exit 0，`/guides/season-1-reset-guide` prerender 成功。
- 新部署：https://mistfallhunterwiki-53003qaek-zhaoq0103s-projects.vercel.app
- 线上复查：`GET https://mistfallhunterwiki.vercel.app/guides/season-1-reset-guide` → **HTTP 200**，页面含 "Season 1 Reset"，且 "Related Guides" 区块与 4 个内链均正常渲染。
