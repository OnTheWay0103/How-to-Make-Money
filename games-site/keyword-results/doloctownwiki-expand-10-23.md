# doloctownwiki — 2026-10-23 全站补更报告

## 新增攻略

- **Title**: How to Restore the Environment in Doloc Town — Environmental Modifier Walkthrough
- **Slug**: `environmental-modifier-guide`
- **File**: `doloctownwiki/content/guides/environmental-modifier-guide.md`
- **词数**: 1,307（表格不计）
- **Version**: 1.0

## 选题依据

路径② system-inventory-driven：官方 Steam 商店页把「Restore the environment piece by piece, drive back the extreme weather」列为游戏核心承诺，1.00.04 又专门调整 Environmental Modifier 点数、1.00.08 修复环境改造后天气不刷新；站内 19 篇攻略只有 `weather-guide` 末尾用一段写「Weather Regulator 未确认」，没有 Environmental Modifier 的获取、材料、接线、Phase 1 与后续阶段。

来源：

- Official: [Doloc Town store page](https://store.steampowered.com/app/2285550/Doloc_Town/)（2026-08-05）— 环境逐块恢复、驱散极端天气。
- Official: [1.00.04 Patch Notes](https://store.steampowered.com/news/app/2285550/view/1840944183785623)（2026-08-17）— 提高 Environmental Modifier 点数收益、降低全恢复难度。
- Official: [200K Copies / 1.00.08 Hotfix](https://store.steampowered.com/news/app/2285550/view/1844115010498226)（2026-09-20）— 修复环境改造后当月极端天气不立即刷新。
- Community: [Doloc Town Wiki — Environmental Modifier Guide](https://doloc-town.wiki/guides/environmental-modifier/)（accessed 2026-10-23）— 前置任务、秘密洞穴、2 电池 + 5 电线、接线图、30 Energy Phase 1、后续四条能量线。
- Community: [Whisper of the House — Environmental Modifier Repair Guide](https://www.whisperofthehouse.com/doloc-town/environmental-modifier)（accessed 2026-10-23）— Core Extractor、后侧面板、Mody、可放置 Small Battery、Basic Power Storage。
- Community: [Steam Discussions — how to proceed with the environmental modifier](https://steamcommunity.com/app/2285550/discussions/0/591778249679571851/)（accessed 2026-10-23）— 交叉核对电池类型混淆与洞穴剧情门槛。

## 查重结论

对比全部 19 篇现有 slug/title：`weather-guide` 讲酸雨/热浪/雷暴与防护，且明确写 Weather Regulator 未确认；`tech-tree-guide` 讲科技节点；`materials-guide` 讲材料；`map-guide` 讲区域。新篇是 Environmental Modifier 的完整任务链，覆盖前置、材料、接线、Phase 1、后续能量线与 patch 变更，未与天气页重复。新 slug 无重复。

## 构建

- `pnpm install --prefer-offline`: 成功（2.7s）
- `pnpm build`: 成功，`/guides/environmental-modifier-guide` 出现在 SSG 路由表。

## 部署与线上验证

- `./deploy-wiki-site.sh doloctownwiki`: 成功
- URL: https://doloctownwiki.vercel.app/guides/environmental-modifier-guide
- HTTP: **200**
- 内容校验：页面包含 `Environmental Modifier Walkthrough`。

## 备注

- 两份社区来源对 Small Battery 配方冲突（2 Copper + 2 Rubber + 1 Battery vs 2 Copper + 5 Rubber + 1 Charger），正文明确标注 `[Unconfirmed]` 并建议看工作台 tooltip，不择一编造。
- 接线图按社区记录呈现，并注明洞穴终端与档案图并非一一对应、失败会返还材料。
- 未执行 git commit（按要求）。
