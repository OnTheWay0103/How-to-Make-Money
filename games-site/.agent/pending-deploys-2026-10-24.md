# 待部署站点 — 2026-10-24

> 2026-10-24 08:30 额度重置后已补部署 6 站，并逐站内容级复验（HTTP 200 + 目标标记命中）：
> nivalisnightswiki / waterparksimulatorwiki / silverpineswiki / aincradwiki / witchspirewiki / minegeonwiki。
>
> 剩余 2 站的修正将随 **2026-10-24 每日扩充** 的同一批部署一起上线（无需单独部署）。

| 站点 | 文件 | 修正内容 | 状态 |
|------|------|----------|------|
| sephiriawiki | `content/guides/sephiria-achievements-guide.md` | 1.0.33 版本号加 `[Unconfirmed]` 说明 | 待随今日扩充部署 |
| spiritvalewiki | `content/guides/pvp-conquest-guide.md` | 0.34.1/0.34.2 细项加 `[Unconfirmed]` 说明 | 待随今日扩充部署 |

## 已完成的补部署验证（2026-10-24）

| 站点 | 验证 URL | 标记 | 结果 |
|------|----------|------|------|
| nivalisnightswiki | `/guides/greenhouse-automation-guide` | 1846018067933485 | HTTP 200，命中 1 |
| waterparksimulatorwiki | `/guides/shelves-multistand-staff-guide` | 1842212951303274 | HTTP 200，命中 1 |
| silverpineswiki | `/guides/silver-pines-camera-photo-map-guide` | 1846651706681087 | HTTP 200，命中 1 |
| aincradwiki | `/guides/update-patch-notes` | 1.0.6 | HTTP 200，命中 3 |
| witchspirewiki | `/guides/spellblade-vs-wand-guide` | 0.1.4 | HTTP 200，命中 3 |
| minegeonwiki | `/guides/minegeon-save-rest-resume-guide` | Patch 3 | HTTP 200，命中 8 |

## 注意

- 免费额度按 UTC 日切，重置约在北京时间 08:00。
- 本机 `--resolve` 对部分 Vercel 域名会返回 HTTP 000；本次改用普通 curl（DNS 正常）完成验证。若 curl 失败，先 `dig +short @8.8.8.8 <domain>` 比对权威解析，不得直接判站点故障。
