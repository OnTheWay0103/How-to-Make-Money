# beastreincarnationwiki — 2026-10-23 全站补更报告

## 新增攻略

- **Title**: How Do Difficulty Modes Work in Beast of Reincarnation? Very Hard & Ruthless Explained
- **Slug**: `difficulty-modes-guide`
- **File**: `beastreincarnationwiki/content/guides/difficulty-modes-guide.md`
- **词数**: 1,268（表格不计）
- **Version**: 1.1.01

## 选题依据

路径② system-inventory-driven：官方 v1.1.0（2026-10-01）新增 Very Hard 与 Ruthless 两个难度，并把 Hard/Very Hard/Ruthless 加入 Reincarnation+；站内 `combat-system-guide` 的难度段落仍只写 Story/Normal/Hard，`faq` 也写「three difficulty settings」，属于官方已更新的系统与站内覆盖的明确缺口。

来源：

- Official: [PC Patch Notes v1.1.0](https://store.steampowered.com/news/app/2001760/view/1845383656382997)（2026-10-01）— Very Hard、Ruthless 一击必死、Reincarnation+ 默认 Normal 且可选三档、可随时切换。
- Official: [PC Patch Notes v1.1.01](https://store.steampowered.com/news/app/2001760/view/1846018067934179)（2026-10-09）— FOV、跳过提示开关、Great Wall Terraces 后的剧情跳区与成就警告。
- Official: [Steam store page](https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/)（2026-08-03）— Adjustable Difficulty。
- Community/Media: [Noisy Pixel — Update 1.1.0 Adds Very Hard And Ruthless](https://noisypixel.net/beast-of-reincarnation-update-1-1-0-very-hard-ruthless/)（2026-10-02）— 独立媒体交叉确认。
- Community: [Beast of Reincarnation Difficulty: 5 Modes Explained](https://beastreincarnation.com/guides/difficulty-settings/)（accessed 2026-10-23）— 确认官方未公布倍率/奖励，警告不要假设 Ruthless 有更好奖励。

## 查重结论

对比全部 24 篇现有 slug/title：`combat-system-guide` 的难度段仅 3 行总览；`endgame-post-game-guide` 讲 NG+/Reincarnation+ 但不展开五个模式；`faq` 为短问答。新篇以「五个模式 + 切换 + Reincarnation+ + Ruthless 构筑影响」为独立搜索意图，未复制 Boss/配装页内容。新 slug 无重复。

## 站内事实校准（同站，非其他站点）

按 Profile「事实修正全站 grep 关联引用」要求，同步修正 4 处旧表述：

- `combat-system-guide.md`：难度段补充 v1.1.0 两档并链接新篇。
- `beginner-guide.md`：难度列表改为五档。
- `faq.md`：「three difficulty settings」改为五档。
- `endgame-post-game-guide.md`：Reincarnation+ 不再描述为「above Hard」，改为默认 Normal、可选 Hard/Very Hard/Ruthless。

## 构建

- `pnpm install --prefer-offline`: 成功（3s）
- `pnpm build`: 成功，`/guides/difficulty-modes-guide` 出现在 SSG 路由表。
- 修正旧页后重新构建并重新部署。

## 部署与线上验证

- `./deploy-wiki-site.sh beastreincarnationwiki`: 成功（含修正后重部署）
- URL: https://beastreincarnationwiki.vercel.app/guides/difficulty-modes-guide
- HTTP: **200**
- 内容校验：页面包含 `How Do Difficulty Modes Work` / `Very Hard` / `Ruthless`。

## 备注

- 官方未公布任何伤害/血量/奖励倍率，正文不写数字；菜单具体路径、Ruthless 是否关联成就均标 `[Unconfirmed]`。
- 未执行 git commit（按要求）。
