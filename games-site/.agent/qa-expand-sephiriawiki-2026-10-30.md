# QA (quick) — sephiriawiki — 2026-10-30

> 模式：quick（仅本轮新增页） | 站点：`sephiriawiki/`
> 范围：`content/guides/mods-workshop-guide.md`（1 篇新增）
> 结论：✅ PASS

## 1. 虚构检测

| 断言 | 判定 | 依据 |
|---|---|---|
| 1.1.0 为公开测试版，非默认分支 | ✅ 官方原文 | 1.1.0 Beta Update（2026-10-29）：`now available as a public beta` |
| 新增 Steam Workshop 模组支持 | ✅ 官方原文 | `Added Steam Workshop mod support.` |
| 可制作服装/翻译模组并上传 | ✅ 官方原文 | `create mods such as new costumes or translations` |
| 加入方式：属性 → 游戏版本和测试版 → workshop-beta | ✅ 官方原文 | 官方 opt-in 步骤逐字引用 |
| 加入前备份存档 | ✅ 官方原文 | `Please back up your existing save data` |
| 已知问题 `Unable to load verification info for this mod` | ✅ 官方原文 | Known Issue 段落逐字引用 |
| Run History：命运刻印解锁、最近 100 次、村庄/暂停菜单可看 | ✅ 官方原文 | New Content 段落 |
| 新大剑升级 Scattered Longing；新神器/石板/魔法书/随机物件 | ✅ 官方原文 | New Content 段落逐项列出 |
| 默认分支为 1.0.33 | ✅ | 1.0.33 Update（2026-09-11）为 1.1.0 前最后一版稳定补丁 |
| AddOns 目录、BepInEx 5、F11、config 路径、日志路径 | ✅ 社区文档 | sephiriagame.com（2026-10-30 更新）逐项抓取 |
| 订阅模组默认禁用、改加载顺序需重启 | ✅ 社区文档 | 同上；正文标注 [Community] |
| 代码模组需审核、翻译/服装模组不需要 | ✅ 社区文档 | 同上；正文明确标注为社区口径 |
| 旧攻略称「无官方 Workshop」 | ✅ 社区文档 | sephiriawiki.wiki（pre-1.1.0），正文注明该说法已被 1.1.0 取代 |

未发现编造的模组名、菜单名、版本号或兼容性承诺；未确认项在文末单列。

## 2. 版本与一致性

- `version: "1.1.0"`（当前测试版）；`updated/date: 2026-10-30`。
- 文中「默认分支 1.0.33 / 测试分支 1.1.0」与官方两条公告一致。
- 与站内 `patch-1-0-31-build-changes-guide` 不冲突：该页讲 1.0.31 平衡改动，本页讲模组与 1.1.0 测试分支。
- 与 `save-file-guide` 的分工：本页只引其备份流程，不复述存档路径。

## 3. 跨站残留

`node scripts/check-site-residue.mjs sephiriawiki` → `✓ 无模板残留`（exit 0）。

## 4. 来源可核验

- sources 共 6 条：Official ×2、Community ×3、Editorial ×1。
- 官方链接均经 Steam News CDN 302 目标核对：
  - 1.1.0 → `steamcommunity.com/ogg/2436940/announcements/detail/694276363007295840`
  - 1.0.33 → `steamcommunity.com/ogg/2436940/announcements/detail/692020124159312357`
- 社区链接于 2026-10-30 实际抓取全文：sephiriagame.com（页面标注 2026-10-30 更新）、sephiriawiki.wiki、17173（2026-10-29）。

## 5. 构建与线上

| 检查 | 结果 |
|---|---|
| `pnpm build` | ✅ exit 0，含 `/guides/mods-workshop-guide` 预渲染 |
| `node scripts/lint-guides.mjs sephiriawiki` | ✅ 0 ERROR（14 WARN 均为存量） |
| `node scripts/seo-check.mjs --site sephiriawiki --live` | ✅ exit 0，ERROR 0 / WARN 114 |
| `node scripts/check-ad-slots.mjs sephiriawiki --live` | ✅ exit 0 |
| 线上 `/guides/mods-workshop-guide` | ✅ HTTP 200 |
| 线上 `<h1>` 数量 | ✅ 1 |
| title / description 长度 | ✅ 52 / 151 字符 |
| 正文词数 | ✅ 1,287（区间 800–1500） |
| 关键官方引文渲染 | ✅ `Added Steam Workshop mod support`、`workshop-beta`、已知问题原文均命中 |

## 6. 发现

本轮新增页未发现阻断项。
备注（非本轮）：站内 `wishing-fountain-capacity-guide.md` 站内链接 0 条（seo-check 的 P-INTERNAL WARN），属存量，未处理。
