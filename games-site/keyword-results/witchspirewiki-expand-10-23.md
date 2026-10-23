# witchspirewiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条选题路径都跑了。**

- ① complaint-driven：0.3.0 更新后玩家讨论集中在武器系统重做、旧武器兼容、材料获取，均已有页或无法独立成篇。
- ② system-inventory-driven：官方 0.3.0 公告列出 **Spell Gems（52 个）/ Sigils（25 个）/ Weapon Enhancement Table / Salvage Station** 四个新系统；站内 34 篇中 **0 篇**覆盖 Spell Gems，crafting-guide 只写到旧版工作站。命中整块空白。

**选题**：Witchspire Spell Gems 的获取、鉴定、镶嵌、升级与 Sigil 改造。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Dormant Powers Major Update: Out Now!（v0.3.0 changelog） | https://store.steampowered.com/news/app/2679100/view/687519694976974886 | 2026-10-21 |
| Official | Patch 0.3.1（CL 31462，salvage 返还 gem/sigil） | https://store.steampowered.com/news/app/2679100/view/694275728822243931 | 2026-10-22 |
| Official | Witchspire - 0.3.2 Out Now!（Mysterious Spell Gem 修复） | https://store.steampowered.com/news/app/2679100/view/694275728822244905 | 2026-10-23 |
| Community | The Otaku's Study — Dormant Powers update breakdown | https://www.otakustudy.com/video-game/2026/10/witchspire-dormant-powers-update/ | 2026-10 |
| Community | The Gamers' Temple — Witchspire unlocks Dormant Powers | https://www.gamerstemple.com/news/2026/10/21/witchspire-unlocks-dormant-powers | 2026-10-21 |

官方一手来源对补丁自身内容为权威；社区媒体仅用于交叉核对功能清单，未据其补写数值。

## 2. 查重结论

- 现有 34 篇 slug 全量比对，新 slug `spell-gems-guide` 无重复。
- 主题比对：`crafting-guide`（旧工作站/材料）、`spellblade-vs-wand-guide`（武器类型对比）、`all-familiars-guide`（Scrappy 只作为 familiar 提及）、`patch-notes-updates`（0.1.4 版更新日志）均未覆盖 Spell Gem 获取/镶嵌/升级循环。
- 独立搜索意图：How to get / socket / upgrade Spell Gems，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`witchspirewiki/content/guides/spell-gems-guide.md`
- slug：`spell-gems-guide`
- 标题：Witchspire Spell Gems Guide — How to Get, Socket, and Upgrade Them
- 正文词数：**1,426**（表格、frontmatter 不计）
- `[Unconfirmed]` 标记：完整 52 宝石掉表、Sigil 商人/掉落 foe 名、升级成本/上限、Legacy 武器逐件兼容性。
- 未编造任何宝石名、Boss 名、数值；只用官方列出的 Chirili/Traxio/Specra/Xilvant/Froblin 与四种 Sigil 示例。

## 4. 构建

```
cd witchspirewiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；Next.js 16.3.4；48/48 static pages；`/guides/spell-gems-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh witchspirewiki`
- 生产：https://witchspirewiki.vercel.app
- 本次部署：https://witchspirewiki-bvzk642bp-zhaoq0103s-projects.vercel.app
- 脚本报告 alias 状态「未知」，但新页仅存在于本次构建，URL 可达即证明 alias 已指向本次部署。

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/spell-gems-guide` | **HTTP 200**（64,452 bytes） |
| 页面含标题关键词 "Spell Gems Guide" | ✅ 命中 |
| `<title>` | Witchspire Spell Gems Guide — How to Get, Socket, and Upgrade Them · Witchspire Wiki |
| sitemap.xml 收录 | ✅ `guides/spell-gems-guide` |
| 证据栏渲染 | ✅ Official/Community/Editorial 三层正常 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。

## 8. 复部署（related 修复）

- 原因：本站 `parseFrontmatter` 不解析行内 YAML 数组，`related: ["a","b"]` 会被当成字符串，`RelatedGuides` 不渲染。已改为块状 YAML（`related:` + `  - slug`）。
- 重新 build：exit 0，`/guides/spell-gems-guide` prerender 成功。
- 新部署：https://witchspirewiki-8vpdqw8w8-zhaoq0103s-projects.vercel.app
- 线上复查：`GET https://witchspirewiki.vercel.app/guides/spell-gems-guide` → **HTTP 200**，页面含 "Spell Gems"，且 "Related Guides" 区块与 4 个内链均正常渲染。
