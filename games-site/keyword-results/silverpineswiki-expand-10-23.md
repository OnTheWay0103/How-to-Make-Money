# silverpineswiki 扩充报告 — 2026-10-23

## 结论

- **状态**：DONE
- **新增 slug**：`silver-pines-camera-photo-map-guide`
- **标题**：How to Use the Silver Pines Camera — Photo Map Notes and the 100-Photo Limit
- **正文词数**：1,494（不含表格；正文无表格）
- **独立来源**：5（官方 Steam 公告 + 4 个社区来源）
- **Build**：PASS
- **部署**：PASS
- **线上验证**：HTTP 200，标题、关键词与安全码命中

## 选题依据

Silver Pines 于 2026-10-08 发售。站内 10 篇攻略全部 updated 2026-09-16，写于发售前；`silver-pines-map-backtracking-exploration` 提到「地图可标记未解谜题」，但没有专门讲相机。全站 grep `camera` / `photo` 均为 0 命中。

发售后 Hotfix 2（2026-10-16）把照片上限从 **30 提高到 100**，这是官方补丁明确写出的系统改动；同时社区攻略给出了相机的具体用法：相机在 Red 的车后备箱、照片可加到地图、Sheriff's Office 用四张照片解 safe。官方系统清单（相机/照片存储）与站内覆盖之间是整块空白，因此本题成立，不是硬凑。

### 来源

1. **Official — Steam / Silver Pines Hotfix 2**
   - 标题：Silver Pines Hotfix 2（Steam 公告）
   - URL：https://store.steampowered.com/news/app/2333000
   - 日期：2026-10-16
   - 采用事实：最大照片存储 30 → 100；Nightmare 前期难度调整；broken Boxcutter 伤害 +50%。

2. **Community — Noisy Pixel**
   - 标题：Silver Pines Second Hotfix Fixes Softlocks, Adjusts Nightmare Difficulty, And Boosts Photo Limit
   - URL：https://noisypixel.net/silver-pines-second-hotfix-softlock-fixes-nightmare-balance/
   - 日期：2026-10-16
   - 采用事实：Hotfix 2 全文细节；照片上限 30 → 100；Nightmare 前期更平滑；broken Boxcutter +50%；Sheriff Department boss、Riverside、ladder、Cat Collar、gas station garage 等修复。

3. **Community — Showgamer 全流程**
   - 标题：Silver Pines Walkthrough — All Puzzles, Codes, Bosses, and Key Items
   - URL：https://showgamer.com/en/prohozhdeniya-igr/6413-prohozhdenie-silver-pines-vse-golovolomki-i-zagadki
   - 访问日期：2026-10-23
   - 采用事实：Sheriff's Office 需要拍四张照片（lobby、archive、morgue 外墙面、garden stone plaque），配合 sheriff's book 与 manual 得到 safe code 15 → 7 → 3 → 10；警车 radio 照片用于 Highway 13 的 1715 门禁；Church Hill 海报用于 Chapel Tower cube puzzle；结局前墙上符号用于 telephone puzzle。

4. **Community — Games.gg Outskirts 攻略**
   - 标题：Silver Pines Outskirts 完整攻略
   - URL：https://games.gg/zh-Hant/silver-pines/guides/silver-pines-outskirts-%E5%AE%8C%E6%95%B4%E6%94%BB%E7%95%A5/
   - 访问日期：2026-10-23
   - 采用事实：开场拿车钥匙、打开后备箱，取得案件卷宗、相机和笔记；相机在车后备箱内。

5. **Community — NPC Tips 新手攻略**
   - 标题：Silver Pines Beginner Guide: Tips Before You Start
   - URL：https://npctips.com/silver-pines/beginners-guide/
   - 访问日期：2026-10-23
   - 采用事实：相机拍下的照片可加到地图；用于 locked doors、blocked paths、暂时用不上的线索；Hotfix 2 把照片上限从 30 提到 100；相机本身不限使用次数。

## 查重结论

现有 10 篇中无 `camera` / `photo` slug，且主题分工明确：

- `silver-pines-map-backtracking-exploration`：讲地图结构、shortcut、卡关 checklist；只说「可标记」，没有相机操作与照片管理。
- `silver-pines-save-system-phone-booths`：讲存档与 save coin；不涉及相机。
- `silver-pines-inventory-storage-guide`：讲携带与仓库；不涉及照片存储上限。
- `silver-pines-beginner-guide`：12 条通则，未提相机。
- `silver-pines-demo-guide`：讲 demo 内容；相机在正式版开场的车后备箱，不在该页范围。

新页的独立搜索意图是「Silver Pines camera / photo limit / how to take photos / sheriff office safe」，与地图页、存档页、背包页均不重叠。标题、slug、H1 唯一。

## 内容与事实边界

- 正文结构：相机位置 → 照片如何变成地图 note → 值得拍什么 → Sheriff's Office 四照片实例 → 100 张上限与管理 → 相机 vs 外置截图 → 常见错误 → 未确认项。
- 明确标注为 **[Unconfirmed]** 的内容：相机键位、照片是否按存档独立存储、相机分辨率上限、未来是否再改上限。
- 对「照片自动 pin 到地图」与「需要手动加到地图」的社区说法差异，正文采用更保守的「可以加/附到地图」，没有写成自动。
- 未编造道具名、Boss 名、密码或数值；safe code、1715、四张照片位置均来自 Showgamer；30→100 来自官方 Hotfix 2 与 Noisy Pixel 双重来源。
- 英文站内容无中文标记残留（CJK 字符检查为 0）。

## 构建

```text
pnpm install --prefer-offline  → OK
pnpm build                     → PASS
Next.js 16.3.4 (Turbopack)
✓ Compiled successfully
✓ Generating static pages (24/24)
Route: ● /guides/silver-pines-camera-photo-map-guide
```

无 TypeScript 错误、无构建警告阻断。

## 部署

- 部署 URL：https://silverpineswiki-3zvjzcwes-zhaoq0103s-projects.vercel.app
- 生产 alias：https://silverpineswiki.vercel.app
- 部署脚本：`./deploy-wiki-site.sh silverpineswiki` → PASS

## 线上验证

```text
GET https://silverpineswiki.vercel.app/guides/silver-pines-camera-photo-map-guide
HTTP 200
size 59,759 bytes
title: How to Use the Silver Pines Camera — Photo Map Notes and the 100-Photo Limit · Silver Pines Wiki
```

页面文本命中：

- `How to Use the Silver Pines Camera` → true
- `100-Photo Limit` → true
- `15 → 7 → 3 → 10` → true
- `car trunk` → true

## 后续建议

- 如果后续补丁再改照片上限或相机键位，优先更新本篇 [Unconfirmed] 段。
- 可另开一篇「Silver Pines Nightmare 难度变化」；Hotfix 2 只做了前期平滑，本篇只在来源层提及，不展开，避免与难度专页重叠。
