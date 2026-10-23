# bigwalkwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**走「官方系统清单 × 站内覆盖」路径。**

- Patch 1.6.0（2026-10-06）明确把 **Join Code 改为字母+数字**，并修了多项导致无法连接的联机问题与错误提示；1.5.1（2026-08-28）改了密码失败后清空输入框的行为。这两个改动直接制造了新的玩家困惑。
- 站内 17 篇 **无 Join Code 专页**：`multiplayer-coop-guide` 讲职业与语音、`troubleshooting-guide` 只有一句「invite must come through the platform, not an in-game code」——**且这句话与 1.6.0 官方公告矛盾**。
- 玩家痛点明确：朋友发来一串字母数字，输进去连不上；分不清 Join Code 与 Session Password。

**选题**：Join Code 的获取/输入、与 Session Password 的区别、跨平台版本规则与失败排查。同步修正 troubleshooting 中的过时表述。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | 1.6.0 Patch Notes（Join Code 字母+数字、网络与错误提示修复） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1845383656394984 | 2026-10-06 |
| Official | 1.5.1 Patch Notes（密码失败后清空、slow/unstable 连接提示） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842212951302111 | 2026-08-28 |
| Official | Big Walk 商店页（2-12 人、crossplay） | https://store.steampowered.com/app/1478500/ | 2026-10-23 访问 |
| Community | Big Walk Club — Join Code: How to Find and Use It（1.4.9 起需 Session Password；Session Details 入口） | https://bigwalk.club/co-op/join-code/ | 2026-10-11 核验 |
| Community | IGN — How Co-Op and Crossplay Work | https://www.ign.com/wikis/big-walk/How_Co-Op_and_Crossplay_Work_-_Multiplayer_Guide | 2026 |
| Editorial | 加入前检查表与失败诊断顺序为建议 | — | 2026-10-23 |

## 2. 查重结论

- 17 篇 slug 全量比对，新 slug `join-code-guide` 无重复。
- 主题比对：`multiplayer-coop-guide` 讲组队玩法/语音/人数；`troubleshooting-guide` 是故障总表（已改为链接本页）；`faq` 为通用问答；`controls-guide` 讲按键。
- 搜索意图独立：big walk join code / session password / code not working。
- 判定：**无自噬**；同时消除了 troubleshooting 与官方公告的事实冲突。

## 3. 产出

- 文件：`bigwalkwiki/content/guides/join-code-guide.md`
- slug：`join-code-guide`
- 标题：How to Join a Friend's Game in Big Walk — Join Codes, Passwords & Fixes
- 正文词数：**1,293**（表格不计）
- 附带修改：`bigwalkwiki/content/guides/troubleshooting-guide.md` 第 48 行，删除「必须走平台邀请、不能用游戏内代码」的错误说法，改为 Join Code + 平台邀请两条路径并链接新页。
- `[Unconfirmed]` 标记：Join Code 是否区分大小写、是否支持中途加入。
- 未编造代码位数、菜单层级或密码规则。

## 4. 构建

```
cd bigwalkwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；17/17 static pages；`/guides/join-code-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh bigwalkwiki`
- 生产：https://bigwalkwiki.vercel.app
- 本次部署：https://bigwalkwiki-mizxv32m5-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/join-code-guide` | **HTTP 200**（61,226 bytes） |
| 页面含 "Join Code" | ✅ 命中 |
| `<title>` | How to Join a Friend's Game in Big Walk — Join Codes, Passwords & Fixes · Big Walk Wiki |
| sitemap.xml 收录 | ✅ `guides/join-code-guide` |
| 证据栏渲染 | ✅ Official ×3 / Community ×2 / Editorial ×1 |
| related 内链 | ✅ 4 条均指向真实 slug |

## 7. 备注

- troubleshooting 修正属于「全站事实一致性」维护，未改动其他站点。
- 未执行 git commit。
