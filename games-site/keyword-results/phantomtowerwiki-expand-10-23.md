# Phantom Tower — 扩充报告（2026-10-23）

## 选题

**Slug**: `runes-guide`
**标题**: Phantom Tower Runes Guide — How to Identify, Socket & Choose Runes

选题依据：Runes 是 Patch 0.5.00（2026-07-13）加入的核心装备系统，官方 wiki 有完整规则（六路径、三档插槽、Alteria 费用、套装替代、祝福强化）。站内 20 篇现有攻略中，只有 `resource-economy-guide.md` 出现 1 次 “rune”，`items-catalog-guide.md` 只提到 Scythes，无任何 Runes 专页。属于典型「官方明说有、站内整块没写」的系统空白。

## 来源

- Official — Horien Studio 官方 Phantom Tower Wiki, Runes 分类（完整机制、费用表、六路径、套装/祝福对应、数值区间）：https://www.horienstudio.com/phantom-tower/wiki/?cat=runes
- Official — Steam Patch Notes 0.5.00（2026-07-13，Runes 上线、Shock/Frostbite、新套装）：https://store.steampowered.com/news/app/3988410/view/1837955055363294
- Official — Steam Patch Notes 0.5.05（2026-07-25，Scythes、Cryofield/Shock Conductor、死灵召唤手动解除）：https://store.steampowered.com/news/app/3988410/view/1839041357031522
- Community/Media — PocketGamer Phantom Tower 报道（EA 背景、8 职业、47 祝福）：https://www.pocketgamer.com/phantom-tower/steam-demo/
- Official — Steam 商店页：https://store.steampowered.com/app/3988410/

未编造 rune 名称、掉率或数值；费用与效果区间逐条锚定官方 wiki。未确证的掉落率/词条池未写入。

## 查重结论

- 新 slug 与现有 20 篇无重复；标题无重复。
- `items-catalog-guide`：装备/武器目录，仅提及 Scythes，无 Runes 流程。
- `resource-economy-guide`：材料与 Alteria 经济，仅 1 次 “rune” 提及，无识别/插槽/移除规则。
- `soulbinder-guide`：永久锁词条，与 Runes 是两套不同系统。
- `best-builds` / `blessings-guide`：build 与祝福，不含 Rune 路径与套装替代。
- 独立搜索意图：runes / identify / socket / rune paths / Alteria cost。

## 词数

正文 **1500 词**（不含表格，脚本统计；上限内）。

## Build

`pnpm install --prefer-offline` + `pnpm build` 成功，静态生成 34 页，路由包含 `/guides/runes-guide`。

## 部署

- 部署命令：`./deploy-wiki-site.sh phantomtowerwiki`
- 生产 URL：https://phantomtowerwiki.vercel.app/guides/runes-guide
- 本次 deployment：https://phantomtowerwiki-4or61ry49-zhaoq0103s-projects.vercel.app

## 线上验证

- `curl` HTTP **200**（68,484 bytes）
- 页面标题包含 `Phantom Tower Runes Guide — How to Identify, Socket & Choose Runes`
- 正文包含 `Glyph Master`（3 处），确认 Rune Station 内容已上线
