# relicfirstguardianwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：玩家高频问题「DLC 怎么开始」「Gap of a Long-standing Oath 营地没有光球」「Patch 4 之后还是找不到」。站内 `editions-preorder-guide` 只讲各版本内容与领取，不讲入口。命中未覆盖痛点。
- ② system-inventory-driven：官方已单独发布「Locating the DLC Quest」与 Patch 4 两条公告，明确入口营地、光球、第二传送点与修复；站内 **0 篇** 专门讲 DLC 进入方式。两条路径指向同一空白。

**选题**：The Night of the Unextinguished Flame 的确切进入路线、Patch 4 修复内容、光球消失的排查顺序、奖励是否值得早做、免费/付费状态。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | The Relic: First Guardian – Locating the DLC Quest（Steam News） | https://store.steampowered.com/news/app/2827820/view/668372420911957689 | 2026-10-23 访问 |
| Official | The Relic: First Guardian – Patch 4 is Live（Steam News） | https://store.steampowered.com/news/app/2827820/view/668372420911958455 | 2026-08-04 |
| Official | Patch 4 Update & Notes（Perp Games） | https://perpgames.com/2026/08/03/patch-4-update-notes/ | 2026-08-03 |
| Community | The Night of the Unextinguished Flame DLC — Steam app 4891540（含 Fanatical / eShop 列表） | https://store.steampowered.com/app/4891540/ | 2026-10-23 取数 |
| Editorial | 排查顺序、推荐进度时机与 build 建议 | 本站 `night-of-the-unextinguished-flame-dlc-guide` | 2026-10-23 |

官方公告为入口路线与 Patch 4 修复的权威来源；DLC 商店页用于奖励清单（Sanctuary of the Forgotten Light、Sealstone of the Undying Ember、Armor of the Unextinguished Vigil、Unextinguished Vigil 武器套、1,700+ 金币、1,500+ Relic Energy、升级材料）。奖励数值按商店列表口径呈现。

## 2. 查重结论

- 现有 slug 全量比对，新 slug `night-of-the-unextinguished-flame-dlc-guide` 无重复。
- 主题比对：
  - `editions-preorder-guide` 讲版本内容与领取，不导入口位置、光球或排查；
  - `upgrade-system` 讲升级节点，新页只把 Relic Energy 的支出指向它；
  - `relic-combinations` 讲遗物搭配，新页只讨论 Sealstone 的定位；
  - `beginner-guide` 讲开局，不涉及 DLC 营地。
- 独立搜索意图：DLC how to start / orb missing / Gap of a Long-standing Oath，与上述页面不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`relicfirstguardianwiki/content/guides/night-of-the-unextinguished-flame-dlc-guide.md`
- slug：`night-of-the-unextinguished-flame-dlc-guide`
- 标题：How to Start The Night of the Unextinguished Flame DLC in The Relic: First Guardian
- 正文词数：**1,497**（frontmatter 与表格行不计）
- `[Unconfirmed]` 标注：DLC 对应章节/区域、Sealstone 具体效果与是否最佳位、是否存在等级要求或缩放、社区反馈的补丁后光球仍缺失个案。
- 未编造 Boss、数值或引语；未描述地牢内部遭遇与剧情。

## 4. 构建

```
cd relicfirstguardianwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/night-of-the-unextinguished-flame-dlc-guide` 出现在 prerender 路由列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh relicfirstguardianwiki`
- 生产：https://relicfirstguardianwiki.vercel.app
- 本次部署：https://relicfirstguardianwiki-kspgcakuk-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/night-of-the-unextinguished-flame-dlc-guide` | **HTTP 200** |
| 页面含 "Unextinguished Flame" | ✅ 命中 |
| 页面含 "Sanctuary of the Forgotten Light" | ✅ 命中 |
| frontmatter sources 三层 | ✅ Official ×3 / Community ×1 / Editorial ×1 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。
