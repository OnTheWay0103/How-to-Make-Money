# Go-Go Town! — 扩充报告（2026-10-23）

## 选题

**Slug**: `photo-mode-guide`
**标题**: Go-Go Town! Photo Mode Guide — How to Open It and Take Better Screenshots

选题依据：Photo Mode 是 2026-09-14 热修 **1.0.26502** 新增功能，入口藏在 Emote Wheel，游戏内无教程。站内 16 篇现有攻略对 “photo mode” 零覆盖（grep 0 命中）。该功能有官方补丁说明 + 社区操作指南，属于「新系统、站内完全空白」，且不与现有页面重叠。

## 来源

- Official — Steam Hotfix 1.0.26502（2026-09-14，Photo Mode、Emote Wheel 入口、相机模式/滤镜/时段、Say Cheese、多人相机无人机）：https://store.steampowered.com/news/app/2195120/view/1843481262700441
- Official — Steam 1.0 Build Notes（2026-07-16，Collections、Creative Mode、Treasure Hunting 等 1.0 系统背景）：https://store.steampowered.com/news/app/2195120/view/1838407329258118
- Community — gogotown.top Photo Mode Guide（自由相机/环绕/FOV/Roll、14 滤镜、Hide UI、Switch 1.0.26511）：https://gogotown.top/guides/photo-mode/
- Official — Steam 商店页：https://store.steampowered.com/app/2195120/

未确证项已标 `[Unconfirmed]`：滤镜名称、精确时段选项、按键绑定。14 个滤镜与 Switch 版本号均为社区来源，正文已注明。

## 查重结论

- 新 slug 与现有 16 篇无重复；标题无重复。
- `one-point-zero-update-guide`：1.0 系统总览，未提 Photo Mode（该功能 9 月热修才加入）。
- `tips-and-tricks` / `best-layout-guide`：玩法与布局，不含相机模式。
- `tourist-attraction-guide`：旅游吸引力，不含截图/构图。
- 独立搜索意图：photo mode / how to open / filters / screenshots / Say Cheese。

## 词数

正文 **1499 词**（不含表格，脚本统计）。

## Build

`pnpm install --prefer-offline` + `pnpm build` 成功，静态生成 30 页，路由包含 `/guides/photo-mode-guide`。

## 部署

- 部署命令：`./deploy-wiki-site.sh gotownwiki`
- 生产 URL：https://gotownwiki.vercel.app/guides/photo-mode-guide
- 本次 deployment：https://gotownwiki-7a1u1j9ks-zhaoq0103s-projects.vercel.app

## 线上验证

- `curl` HTTP **200**（63,680 bytes）
- 页面标题包含 `Go-Go Town! Photo Mode Guide — How to Open It and Take Better Screenshots`
- 正文包含 `Say Cheese`（7 处），确认 Photo Mode 内容已上线
