# restorywiki — 2026-10-23 全站补更报告

## 新增攻略

- **Title**: How to Back Up Your ReStory Save & Fix Save Problems (5 Slots)
- **Slug**: `save-file-backup-guide`
- **File**: `restorywiki/content/guides/save-file-backup-guide.md`
- **词数**: 1,235（表格不计）
- **Version**: 1.0.013r

## 选题依据

路径② system-inventory-driven：官方 1.0.013r 新增存档槽位（save slots），站内 17 篇攻略没有任何存档/备份/恢复内容（grep `save slot|save file|autosave|backup save` 零命中）。同时玩家侧有真实的存档路径、云同步覆盖、旧版本不兼容等高频问题，属于「官方明说有、站内整块没写」且可溯源。

来源：

- Official: [Patch: 1.0.013r](https://store.steampowered.com/news/app/3812600/view/1841579228668923)（2026-08-21）— 新增存档槽、修复许可证/主线订单卡关、内存泄漏。
- Official: [Patch: 1.0.010r](https://store.steampowered.com/news/app/3812600/view/1840944183777307)（2026-08-13）— 修复长时间保存与保存时崩溃。
- Official: [Steam store page](https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/)（2026-08-06）— 确认 Steam Cloud。
- Community: [Checkpoint64 — ReStory Save File Location](https://checkpoint64.com/games/restory/save/)（accessed 2026-10-23）— Windows 路径、仅保留最新文件、备份建议。
- Community: [ReStory FAQ（1.0.015 与故障排查）](https://restoryhelper.com/ja/faq/)（accessed 2026-10-23）— 更新前备份 SaveData/BackupSaveData、旧存档兼容性。

## 查重结论

对比全部 17 篇现有 slug/title：`walkthrough-guide` 含 endings 段落但不含存档；`shop-management-guide` 讲营业/夜班/账单；`faq-content` 讲价格、平台、已知问题；`game-length-guide` 讲时长。新篇只写存档位置、备份轮换、5 槽位策略、云同步风险与恢复流程，未与任何现有页主题重叠。新 slug 无重复。

## 构建

- `pnpm install --prefer-offline`: 成功（2.3s）
- `pnpm build`: 成功，31/31 静态页，`/guides/save-file-backup-guide` 出现在 SSG 路由表。

## 部署与线上验证

- `./deploy-wiki-site.sh restorywiki`: 成功
- URL: https://restorywiki.vercel.app/guides/save-file-backup-guide
- HTTP: **200**
- 内容校验：页面包含 `How to Back Up Your ReStory Save`。

## 备注

- 官方补丁只写「added save slots」，未写槽位数量；「5 个槽位」按社区文档呈现并明确标注为 community-reported。
- macOS/Linux 路径、Steam Cloud 开关位置等未逐项官方确认处标 `[Unconfirmed]`。
- 未执行 git commit（按要求）。
