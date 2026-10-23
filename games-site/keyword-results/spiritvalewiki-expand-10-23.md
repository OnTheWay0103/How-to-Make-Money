# spiritvalewiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条选题路径都跑了。**

- ① complaint-driven：近期讨论集中在 PvP 排队、等级门槛、脚本/封号；封号与连接已有专页，排队规则不足以单独成篇。
- ② system-inventory-driven：官方 0.34.0 公告新增 **PvP Conquest（5v5、3 个占领点、Valor、PvP channel）**；站内 `pvp-arena`（8/9 写）只覆盖 1v1/3v3/6v6 Colosseum，**0 篇**覆盖 Conquest。后续 0.34.1/0.34.2 又改了等级门槛、组队上限、合并队列，信息新鲜度足够。命中整块空白。

**选题**：SpiritVale PvP Conquest 的排队条件、占领点、平衡规则、Valor 奖励与 PvP channel。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | [0.34.0] PvP Conquest | https://store.steampowered.com/news/app/3767850/view/674008262454020596 | 2026-10-09 |
| Official | [0.34.1]（等级 scaling 100→150、Swift Intervention 禁用） | https://store.steampowered.com/news/app/3767850/view/674008262454020858 | 2026-10-10 |
| Official | [0.34.2]（Lv.100+ 进阶职业、PvP 组队上限 2、合并队列） | https://store.steampowered.com/news/app/3767850/view/685267895163290593 | 2026-10-18 |
| Official | Balance Changes（High Guard、元素 mod、Berserker CDR） | https://store.steampowered.com/news/app/3767850/view/674008262454021004 | 2026-10-12 |
| Community | Valor Crest (Pvp Token) — SpiritValers | https://spiritvalers.com/materials/valor-crest | 持续 |

官方补丁说明对模式规则/数值为权威；Valor 10/4 与 88 件可制作物为社区数据库数据，正文明确标 Community/`[Unconfirmed]`。

## 2. 查重结论

- 现有 45 篇 slug 全量比对，新 slug `pvp-conquest-guide` 无重复。
- 主题比对：`pvp-arena` 覆盖 Colosseum 1v1/3v3/6v6、arena gear、ranked；`party-composition` 覆盖 PvE 队伍；`class-tier-list` 覆盖职业强度；`guild-guide` 覆盖 GvG。均无 5v5 Conquest 规则与 Valor。
- 独立搜索意图：Conquest how to queue / capture points / Valor，与 arena 页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`spiritvalewiki/content/guides/pvp-conquest-guide.md`
- slug：`pvp-conquest-guide`
- 标题：SpiritVale PvP Conquest Guide — How 5v5 Capture Points, Valor, and the PvP Channel Work
- 正文词数：**1,500**（表格不计，上限内）
- `[Unconfirmed]` 标记：Valor 精确 10/4 数值、比赛时长/比分阈值/复活时间、新 rank 阈值、开放世界 PvP channel 死亡惩罚、新 offhand 的强度定位。
- 未编造玩家引语、职业新技能或排名表；战术段落明确标为 Editorial（基于三点占领结构）。

## 4. 构建

```
cd spiritvalewiki && pnpm install --prefer-offline && pnpm build
```

- 第一次 build exit 0；59/59 static pages；`/guides/pvp-conquest-guide` prerender 成功。
- 部署后仅做 2 词文案修正，重新 build exit 0 并二次部署。

## 5. 部署

- 命令：`./deploy-wiki-site.sh spiritvalewiki`
- 生产：https://spiritvalewiki.vercel.app
- 最终部署：https://spiritvalewiki-jmt1b22yb-zhaoq0103s-projects.vercel.app
- 首次部署：https://spiritvalewiki-rdqavpqqd-zhaoq0103s-projects.vercel.app（已被最终部署覆盖）

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/pvp-conquest-guide` | **HTTP 200**（69,533 bytes） |
| 页面含 "PvP Conquest" | ✅ 命中 |
| `<title>` | SpiritVale PvP Conquest Guide — How 5v5 Capture Points, Valor, and the PvP Channel Work · SpiritVale Wiki |
| sitemap.xml 收录 | ✅ `guides/pvp-conquest-guide` |
| 二次部署后复查 | ✅ HTTP 200，修正文本 "unpublished" 已上线 |

## 7. 备注

- 新页与旧 `pvp-arena` 的边界：arena 页仍是 Colosseum 模式页；Conquest 页只写 5v5 新模组，并在正文链接 party-composition。
- 未执行 git commit；未修改其他站点。

## 8. 复部署（related 修复）

- 原因：本站 `parseFrontmatter` 不解析行内 YAML 数组，`related: ["a","b"]` 会被当成字符串，`RelatedGuides` 不渲染。已改为块状 YAML（`related:` + `  - slug`）。
- 重新 build：exit 0，`/guides/pvp-conquest-guide` prerender 成功。
- 新部署：https://spiritvalewiki-74eukm7sh-zhaoq0103s-projects.vercel.app
- 线上复查：`GET https://spiritvalewiki.vercel.app/guides/pvp-conquest-guide` → **HTTP 200**，页面含 "PvP Conquest"，且 "Related Guides" 区块与 4 个内链均正常渲染。
