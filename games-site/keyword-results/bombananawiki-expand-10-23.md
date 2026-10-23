# bombananawiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：发售后的高频问题集中在「必须三个人」「怎么邀请朋友」「匹配不到第三人」「某个 module 怎么解」；这些已由 `beginner-guide`、`co-op-guide`、`roles-guide`、`modules-guide`、`manual-guide` 覆盖，继续写会自噬。
- ② system-inventory-driven：官方 **2026-10-22** 宣布 **PlayStation 版 demo 上线**，并明确写 **crossplay 当前不可用、未来可能考虑**；站内 10 篇只有 `co-op-guide` 末尾两行 crossplay 说明，`price-platforms-faq` 的平台表仍停留在预发售「无主机版」。这是「官方刚公布、站内整块过时/空白」的典型缺口。

**选题**：BOMBANANA 的 crossplay 现状、PS5 demo、Steam/Xbox/mobile 平台矩阵，以及当前如何组三人队。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | The BOMBANANA! demo is live on Playstation（crossplay not currently available） | https://steamcommunity.com/ogg/4656000/announcements/detail/1847286114032768 | 2026-10-22 |
| Official | BOMBANANA! v1.0.2 UPDATE（matchmaking / lobby code / level balancing） | https://steamcommunity.com/ogg/4656000/announcements/detail/1843481262693571 | 2026-09-10 |
| Official | BOMBANANA! Steam 商店页（3 人 co-op、三职业、voice chat、Color Blind Mode） | https://store.steampowered.com/app/4656000/ | 持续 |
| Community | BOMBANANA! Cross Platform guide | https://bombanana.tips/crossplay/ | 访问于 2026-10-23 |
| Media | PlayGround.ru — BOMBANANA Xbox trailer report | https://www.playground.ru/post-1882545 | 2026-10-17 |
| Editorial | 同平台组队建议与「不要为 crossplay 预购」判断 | 本站编辑综合 | 2026-10-23 |

官方 10/22 公告锚定「PS demo live / crossplay not currently available / may be considered」；PS5 多人是否可用、PS Plus 要求、Xbox 日期、mobile 是否存在均标 `[Unconfirmed]`，未把第三方冲突说法写成事实。

## 2. 查重结论

- 现有 10 篇 slug 全量比对，新 slug `crossplay-playstation-guide` 无重复。
- 主题比对：
  - `co-op-guide`：邀请流程、matchmaking、排障，crossplay 只有末尾两行。
  - `price-platforms-faq`：价格/配置/平台表，预发售口径，已另做事实校准。
  - `demo-guide`：Steam demo 内容，不涉及 PS demo 或 crossplay。
  - `faq-content`：杂项 FAQ，没有 crossplay 专段。
- 独立搜索意图：bombanana crossplay / ps5 / xbox / cross platform。
- 判定：**无自噬**；新文是站内第一篇 crossplay 专文。

## 3. 产出

- 文件：`bombananawiki/content/guides/crossplay-playstation-guide.md`
- slug：`crossplay-playstation-guide`
- 标题：BOMBANANA! Crossplay Explained — PS5 Demo, Steam, Xbox and Mobile
- 正文词数：**1,212**（表格、Sources、链接不计）
- `[Unconfirmed]` 标记：PS5 demo 是否支持在线 co-op、是否需 PS Plus、Xbox crossplay、mobile 官方版本、crossplay 未来时间表。
- 未编造平台/日期/价格；官方未确认的 mobile 与 Xbox 信息均标层级。

### 同站事实校准（2 个文件）

站内旧文与新官方公告冲突，按 Profile「事实修正时全站一次改齐」做了最小校准：

1. `price-platforms-faq.md`：平台表 PS5 改为「2026-10-22 起有免费 demo，正式版未公布」；Xbox 改为「2026-10 报道称计划中，无日期」；mobile 改为「无官方版本确认」；Quick Answers 与 Verification 同步更新。
2. `co-op-guide.md`：Cross-Play 段落改为「当前无 crossplay（官方 10/22）/ Steam PC 与 Mac 同服 / PS 不能加入 Steam lobby」，并链接新文；补 10/22 官方来源。

## 4. 构建

```
cd bombananawiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；静态路由全部生成；`/guides/crossplay-playstation-guide`、`/guides/price-platforms-faq`、`/guides/co-op-guide` 均 prerender 成功。
- 站内攻略数：10 → 11。

## 5. 部署

- 命令：`./deploy-wiki-site.sh bombananawiki`
- 生产：https://bombananawiki.vercel.app
- 本次部署：https://bombananawiki-6p7jvq6zh-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/crossplay-playstation-guide` | **HTTP 200**（60,836 bytes） |
| 页面含 "Crossplay" / "PlayStation" | ✅ 命中 |
| `GET /guides/price-platforms-faq`（校准页） | ✅ 200，平台表已含 PS demo |
| `GET /guides/co-op-guide`（校准页） | ✅ 200，crossplay 段已更新 |
| sitemap.xml 收录 | ✅ `crossplay-playstation-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 未执行 git commit；未修改其他站点。
- 站内旧文 `price-platforms-faq` 曾写「PC-only / 无主机版 / 无 mobile」；本次只改与官方 10/22 公告直接冲突的平台段，未重写价格与配置。
- 第三方对 mobile 的说法互相冲突（俄媒称已上 mobile，社区平台页称无官方 mobile）；正文采用保守口径并标 `[Unconfirmed]`。
