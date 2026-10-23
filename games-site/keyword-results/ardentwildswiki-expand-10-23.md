# Ardent Wilds — 扩充报告（2026-10-23，QA 修正版）

## 选题

**Slug**: `multiplayer-scaling-guide`
**标题**: Ardent Wilds Multiplayer Scaling Guide — What Changes With Party Size (Confirmed vs Unconfirmed)

选题依据：官方 Steam 商店页确认「最多 6 人 online/LAN」「上限可调高但超过 6 人不平衡」「full release TBA」；社区来源把游戏描述为六人沙盒并含 Boss 遭遇。站内 `coop-guide.md` 只讲联机设置、角色分工与共享基地，没有人数对战斗影响的整理。该题有可验证的官方事实，同时能把社区流传但无法验证的缩放说法明确标注为待验证。

## QA 修正记录（2026-10-23）

首版引用了 Patch 0.5.29 / 0.5.34 及 +35% / +50%、Void Apparitions、Rend、Pyromancer Staff、Mark of Fire 等内容。QA 复核指出：

- 两条 Steam 公告链接打不开，所有可索引来源零命中；
- 公开最新构建为 v0.5.9（6/10），不是 0.5.29 / 0.5.34；
- 上述数值与细节无独立来源。

修正处理：

- 删除全部 0.5.29 / 0.5.34 补丁号与 +35% / +50% 及敌人、武器、掉率细节；
- 删除两条失效公告来源；
- 「Boss 血量随人数缩放」改为社区观察 / `[Unconfirmed]`，不给任何百分比；
- 新增「How to Test Boss Scaling Yourself」八步自测协议（同版本、同 Boss、同装备、3 次单人 + 3 次双人、单独测伤害）；
- 标题、description、keywords 去掉数值卖点；
- sources 仅保留可打开的 Steam 商店页 + 两个社区来源。

## 来源

- Official — Steam 商店页（6 人 online/LAN、超 6 人可调但不平衡、full release TBA）：https://store.steampowered.com/app/2275010/
- Community — player.gg Ardent Wilds 页面（六人沙盒、Boss 遭遇、仍需躲避地面危险）：https://player.gg/explore/games/ardent-wilds
- Community — GamesPress 报道（联机沙盒、天赋树建在地图上）：https://www.gamespress.com/nl/This-Survival-RPG-Built-Its-Talent-Tree-Directly-Into-The-Map---Ardent

正文不再包含任何具体缩放百分比；Boss 血量 / 伤害缩放均明确标为 `[Unconfirmed]`。

## 查重结论

- slug 与现有 25 篇无重复；标题无重复。
- `coop-guide`：联机设置、角色分工、共享基地，无人数缩放讨论。
- `boss-guide`：Boss 通用打法，无多人血量倍率。
- `dedicated-server-guide`：服务器托管，不涉及人数缩放。
- 独立搜索意图：multiplayer scaling / co-op difficulty / boss health co-op / party size。

## 词数

正文 **1365 词**（不含 frontmatter 与表格，脚本统计），在 800-1500 区间内。

## Build

`pnpm install --prefer-offline` + `pnpm build` 成功，静态生成 39 页，路由包含 `/guides/multiplayer-scaling-guide`。

## 部署

- 部署命令：`./deploy-wiki-site.sh ardentwildswiki`
- 生产 URL：https://ardentwildswiki.vercel.app/guides/multiplayer-scaling-guide
- 本次 deployment：https://ardentwildswiki-f70cyn4wl-zhaoq0103s-projects.vercel.app

## 线上验证

- `curl` HTTP **200**（60,190 bytes）
- 新标题 `What Changes With Party Size (Confirmed vs Unconfirmed)` 命中
- `[Unconfirmed]` ×4、`How to Test Boss Scaling Yourself` 命中
- 已确认不再出现：`+35%`、`0.5.29`、`0.5.34`、`Void Apparition`、`Pyromancer`、`Mark of Fire`（均为 0 次）
