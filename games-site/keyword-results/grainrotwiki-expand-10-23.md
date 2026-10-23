# grainrotwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：社区高频问题仍集中在 Rot debuff、提取时机、性能与联机匹配，站内已有 `rot-debuff-guide`、`extraction-guide`、`performance-lag-fix-guide`、`multiplayer-matchmaking-guide`，无未被覆盖的新痛点。
- ② system-inventory-driven：官方 **1.1 公告（2026-09-24）** 新增 **Expedition Mode**（永久死亡、Peter the Heater、Gumball 永久成长）、**Rainbow Ward** 生态区与 25 个专属外观；站内 35 篇中 **0 篇** 提到 Expedition。命中整块空白。

**选题**：Grain Rot Expedition Mode 的进入方式、Peter the Heater 热量配额、永久死亡风险、Gumball 成长、1.11–1.13 补丁影响与首轮运营计划。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | GRAIN ROT 1.1 is LIVE! Expedition mode, over 250K Scrappies, & 15% Off! | https://store.steampowered.com/news/app/4450620/view/1844751498222226 | 2026-09-24 |
| Official | Patch 1.1 | https://store.steampowered.com/news/app/4450620/view/1844751498221869 | 2026-09-24 |
| Official | Patch 1.11 / 1.12 / 1.13 | https://store.steampowered.com/news/app/4450620/view/1844751498231191 | 2026-09-28 至 09-30 |
| Official | GRAIN ROT — Steam store page（1–4 人联机、提取建造循环） | https://store.steampowered.com/app/4450620/ | 2026-10-23 取数 |
| Community | fogplay — GRAIN ROT обзор на ПК после обновления 1.1 | https://fogplay.mts.ru/blog/grain-rot-obzor-pc/ | 2026（10-23 访问） |
| Editorial | 燃料预算与首轮规划 | https://grainrotwiki.vercel.app/guides/grainrot-expedition-mode-guide | 2026-10-23 |

官方公告对自身补丁内容为权威一手来源，所有机制名（Expedition Outpost、Peter the Heater、Gumball、Rainbow Ward、Corrupted Builder）与日期逐条锚定官方原文。社区媒体只用于两点：冷压力通过热量表而非独立 frost 血条、暗面没有阳光清除 Rot，均明确标为社区解读。

## 2. 查重结论

- 现有 35 篇 slug 全量比对，新 slug `grainrot-expedition-mode-guide` 无重复。
- 主题比对：
  - `endgame-survival` 讲 Deep Layers 通用风险管理，未提 Expedition；
  - `extraction-guide` 讲单局提取决策，未提永久死亡与热量配额；
  - `outpost-upgrade-guide` 讲 Story Mode 房间升级，与 Expedition 的 Gumball 成长是两套系统；
  - `patch-notes-guide` 只到 1.09，正文已加更新横幅指向新页。
- 独立搜索意图：Expedition mode / permadeath / Peter the Heater / Gumball，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`grainrotwiki/content/guides/grainrot-expedition-mode-guide.md`
- slug：`grainrot-expedition-mode-guide`
- 标题：How to Survive Grain Rot Expedition Mode — Permadeath, Peter the Heater and Frost Damage
- 正文词数：**1,498**（表格、frontmatter、URL 不计；压在 1,500 上限内）
- `[Unconfirmed]` / 明确标注：独立 frost 血条（社区解读与官方措辞的差异）、暗面无阳光清 Rot、单人死亡是否终结全队远征、Expedition 是否有独立成就、精确配额/减益数值。
- 未编造任何配额数字、减益数值、难度倍率；文中明确写“官方只给系统形状，不给算术”。

## 4. 构建

```
cd grainrotwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/grainrot-expedition-mode-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh grainrotwiki`
- 生产：https://grainrotwiki.vercel.app
- 本次部署：https://grainrotwiki-1aqr3g18i-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/grainrot-expedition-mode-guide` | **HTTP 200**（65,459 bytes） |
| 页面含标题关键词 "Permadeath, Peter the Heater and Frost Damage" | ✅ 命中 |
| 页面含 "Peter the Heater" | ✅ 8 处 |
| sitemap.xml 收录 | ✅ 1 处 |
| frontmatter sources 三层 | ✅ Official ×3 / Community ×1 / Editorial ×1 |

## 7. 备注

- 同站事实校准：`patch-notes-guide` 顶部加 1.1/1.11–1.13 更新横幅，并把“当前版本 1.09”改为 1.13；正文 1.01–1.09 作为历史记录保留。
- 未执行 git commit（按指令）。
- 未修改其他站点。
