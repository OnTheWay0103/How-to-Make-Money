# aincradwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条选题路径都跑了。**

- ① complaint-driven：1.0.6 的「Chest full 不能出发」「Sell All」是真实高频问题，但只能支撑短篇，且与 inventory/update 页重叠风险高。
- ② system-inventory-driven：官方 9/3 公告列出 **Genesis Maidens DLC** 五项内容（新剧情/支线、Mito、曲剑、护甲强化、2026 发售）；站内 38 篇 **0 篇** DLC 专题，`update-patch-notes` 只写「expansion DLC — end of 2026」一句。命中整块空白。

**选题**：Genesis Maidens DLC 已确认内容与未确认项。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | GENESIS MAIDENS 扩展公告 | https://store.steampowered.com/news/app/2244210/view/701026688965804713 | 2026-09-03 |
| Official | Echoes of Aincrad \| Patchnote v1.0.6 | https://store.steampowered.com/news/app/2244210/view/679636495422719770 | 2026-09-28 |
| Official | Update File Ver. 1.0.6 Distribution Announcement（Bandai Namco） | https://www.bandainamcoent.com/news/echoes-of-aincrad-update-file-ver-1-0-6-distribution-announcement | 2026-09 |
| Community | Noisy Pixel — 1.0.6 buffs bosses, weapons, partners ahead of Genesis Maidens | https://noisypixel.net/echoes-of-aincrad-update-1-0-6-boss-weapon-partner-buffs/ | 2026-09 |

DLC 未发售，全部内容以官方公告为界；超出公告的推断（Mito 是否可操作、曲剑是否玩家可用、售价/日期）全部标 `[Unconfirmed]`。

## 2. 查重结论

- 现有 38 篇 slug 全量比对，新 slug `genesis-maidens-dlc-guide` 无重复。
- 主题比对：`update-patch-notes` 是版本日志（1.0.0–1.0.4，已过时），`partner-guide` 讲现有 AI 伙伴，`floor-2-guide` 讲 Twin Valleys 攻略，`builds-guide` 讲武器流派。均无 DLC 内容。
- 独立搜索意图：Genesis Maidens release / Mito / curved sword / armor enhancement，与版本日志不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`aincradwiki/content/guides/genesis-maidens-dlc-guide.md`
- slug：`genesis-maidens-dlc-guide`
- 标题：What Is the Genesis Maidens DLC in Echoes of Aincrad? Mito, the Curved Sword, and Armor Enhancement
- 正文词数：**1,280**（表格不计）
- `[Unconfirmed]` 标记：发售日/窗口、售价、Mito 可操作性、曲剑玩家可用性、护甲强化细节、DLC 进入条件、新难度名称与奖励。
- 未编造 Mito 技能名、Boss 名、DLC 价格或新难度数值。

## 4. 构建

```
cd aincradwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；52/52 static pages；`/guides/genesis-maidens-dlc-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh aincradwiki`
- 生产：https://aincradwiki.vercel.app
- 本次部署：https://aincradwiki-iit5eyoba-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/genesis-maidens-dlc-guide` | **HTTP 200**（65,072 bytes） |
| 页面含 "Genesis Maidens" | ✅ 命中 |
| `<title>` | What Is the Genesis Maidens DLC in Echoes of Aincrad? Mito, the Curved Sword, and Armor Enhancement · Aincrad Wiki |
| sitemap.xml 收录 | ✅ `guides/genesis-maidens-dlc-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- DLC 未发售，页面已明确标注「not released」，避免把 pre-release 写成 confirmed。
- 未执行 git commit；未修改其他站点。

## 8. 复部署（related 修复）

- 原因：本站 `parseFrontmatter` 不解析行内 YAML 数组，`related: ["a","b"]` 会被当成字符串，`RelatedGuides` 不渲染。已改为块状 YAML（`related:` + `  - slug`）。
- 重新 build：exit 0，`/guides/genesis-maidens-dlc-guide` prerender 成功。
- 新部署：https://aincradwiki-evr2p4ds8-zhaoq0103s-projects.vercel.app
- 线上复查：`GET https://aincradwiki.vercel.app/guides/genesis-maidens-dlc-guide` → **HTTP 200**，页面含 "Genesis Maidens"，且 "Related Guides" 区块与 4 个内链均正常渲染。
