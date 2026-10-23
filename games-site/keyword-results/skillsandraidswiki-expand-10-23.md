# skillsandraidswiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：社区反馈集中在“战斗节奏变慢”“技能冷却太长”“endgame 刷取重复”。`skills-guide` 只抽象提到“每个技能有冷却”，从未给出具体秒数，也没有解释 8 月那次全 roster 改动，玩家查不到“为什么我的冷却变长了”。
- ② system-inventory-driven：官方 **2026-08-02 Big Skill Rework** 把 **22 个技能统一到 10 秒冷却**、**5 个 sustain 技能设为 6 秒**、几乎重排全部 cast time，并重做 Emblem 相关伤害/治疗数值。站内 30 篇 **0 篇** 覆盖这次重做的具体清单。

**选题**：8 月 Skill Rework 到底改了什么、官方为什么要把战斗放慢、两技能槽位下如何重建 loadout。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Big Skill Rework Update | https://store.steampowered.com/news/app/4401370/view/1839676055893093 | 2026-08-02 |
| Official | Minor fix v1.3.5 / Minor fix / Minor Hotfix v1.3.2 / Hotfix v1.3.1 | https://store.steampowered.com/news/app/4401370/view/1840310314351835 | 2026-08-03 至 08-10 |
| Community | Noisy Pixel — Skills & Raids Review | https://noisypixel.net/skills-raids-review/ | 2026-07（10-23 访问） |
| Official | Skills & Raids — Steam store page | https://store.steampowered.com/app/4401370/ | 2026-10-23 取数 |
| Editorial | loadout 重建策略与取舍 | https://skillsandraidswiki.vercel.app/guides/skills-and-raids-skill-rework-guide | 2026-10-23 |

官方公告为一手来源，所有秒数、cast time 分组、技能名（Holy Surge、Putrid Mend、Frost Fang Strike、Life Drain、Touch of Winter、Fury Strike、Rupture 等）逐条锚定 8-02 原文；随后 4 个 hotfix 用于确认 8-10 之后没有再次改动冷却（这一点很多二手攻略写错）。Noisy Pixel 仅用于佐证“两技能 + 实时手动触发”的设计框架与 endgame 重复感，不作为数值来源。

## 2. 查重结论

- 现有 30 篇 slug 全量比对，新 slug `skills-and-raids-skill-rework-guide` 无重复。
- 主题比对：
  - `skills-guide` 讲系统结构（两技能、掉落、5 档稀有度），只在补丁提示里抽象提到冷却改动，已加 callout 指向新页；
  - `builds-guide` 讲搭配框架，不含任何冷却秒数；
  - `tier-list` 讲强弱排序，不解释 8 月重做的来龙去脉；
  - `boss-mechanics` 讲敌人机制，不涉及玩家技能计时。
- 独立搜索意图：skill rework / why cooldowns longer / 10 second cooldown，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`skillsandraidswiki/content/guides/skills-and-raids-skill-rework-guide.md`
- slug：`skills-and-raids-skill-rework-guide`
- 标题：Why Your Skills & Raids Cooldowns Got Longer — The August Skill Rework Explained
- 正文词数：**1,477**（表格、frontmatter、URL 不计）
- `[Unconfirmed]` / 明确标注：官方未公布的重做动机细节、后续是否继续调整、具体 build 的强度位次。
- 未编造技能名或数值；10 秒 / 6 秒 / 0.5 秒 / 1.5 秒四组清单与 Fury Strike 四段击均来自官方原文。

## 4. 构建

```
cd skillsandraidswiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/skills-and-raids-skill-rework-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh skillsandraidswiki`
- 生产：https://skillsandraidswiki.vercel.app
- 本次部署：https://skillsandraidswiki-m3isptd50-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/skills-and-raids-skill-rework-guide` | **HTTP 200**（63,317 bytes） |
| 页面含标题关键词 "The August Skill Rework Explained" | ✅ 命中 |
| 页面含 "10-second cooldown" | ✅ 命中 |
| sitemap.xml 收录 | ✅ 1 处 |
| frontmatter sources 三层 | ✅ Official ×3 / Community ×1 / Editorial ×1 |

## 7. 备注

- 同站事实校准：`skills-guide` 顶部加 8-02 重做 patch note 并内链新页，避免读者按旧节奏理解冷却。
- 未执行 git commit（按指令）。
- 未修改其他站点。
