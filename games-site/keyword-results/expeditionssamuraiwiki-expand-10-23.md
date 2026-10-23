# expeditionssamuraiwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**走「官方系统清单 × 站内覆盖」路径。**

- 官方 Dev Diary #4（2026-10-14）整篇讲 **Camping and Your Village**：营地补给战术道具充能、治疗伤势、同伴对话、家书、Act 1 House of Whispers，以及 Act 2/3 的营地演进。
- 站内 34 篇中，`injuries-healing-guide` 讲伤势系统、`companions-guide` 讲同伴、`village-management-guide` 讲村庄，但没有一篇讲「营地本身怎么用、什么时候去、和家基地什么关系」。营地系统处于整块空白。
- 玩家痛点明确：把营地当结算画面点过去，下一场战斗带着未治疗伤势和空充能开打。

**选题**：营地系统实操 —— 充能、伤势、同伴对话与 Act 1 家基地作息。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Dev Diary #4 — Camping and Your Village | https://store.steampowered.com/news/app/2212910/view/704408193577517162 | 2026-10-14 |
| Official | Version 0.6.1 Patch Notes（Act 1 追加药膏/绷带/复活包） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114032189 | 2026-10-22 |
| Community | IntoIndieGames — Expeditions: Samurai Walkthrough（Red Blood and Black Bile 事件中扎营、治疗 Rania） | https://intoindiegames.com/walkthroughs/expeditions-samurai-walkthrough-those-who-endure-license-to-do-nothing/ | 2026 |
| Editorial | 营前/营后作息与清单为基于已确认系统的建议 | — | 2026-10-23 |

## 2. 查重结论

- 34 篇 slug 全量比对，新 slug `camping-home-base-guide` 无重复。
- 主题比对：`injuries-healing-guide` 讲伤口类型与治疗手段，不讲营地流程；`companions-guide` 讲招募与忠诚，不讲营地对话；`village-management-guide` 讲 Act 3 村庄经营，明确晚于当前 EA；`coop-multiplayer-guide` 讲双人战役，无营地分工。
- 搜索意图独立：expeditions samurai camping / home base / how to heal at camp。
- 判定：**无自噬**。

## 3. 产出

- 文件：`expeditionssamuraiwiki/content/guides/camping-home-base-guide.md`
- slug：`camping-home-base-guide`
- 标题：How to Use Camping in Expeditions: Samurai — Charges, Injuries & Home Bases
- 正文词数：**1,480**（表格不计）
- `[Unconfirmed]` 标记：双人 co-op 下营地对话/充能如何共享；营地治疗的具体资源成本。
- 未编造引语、Boss 名、道具数值；Act 2/3 内容明确标注「announced, not in current build」。

## 4. 构建

```
cd expeditionssamuraiwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；47/47 static pages；`/guides/camping-home-base-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh expeditionssamuraiwiki`
- 生产：https://expeditionssamuraiwiki.vercel.app
- 本次部署：https://expeditionssamuraiwiki-nek9e2kjr-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/camping-home-base-guide` | **HTTP 200**（65,963 bytes） |
| 页面含 "Camping" | ✅ 命中 |
| `<title>` | How to Use Camping in Expeditions: Samurai — Charges, Injuries & Home Bases · Expeditions: Samurai Wiki |
| sitemap.xml 收录 | ✅ `guides/camping-home-base-guide` |
| 证据栏渲染 | ✅ Official ×2 / Community ×1 / Editorial ×1 |
| related 内链 | ✅ 4 条均指向真实 slug |

## 7. 备注

- 未执行 git commit；未修改其他站点。
