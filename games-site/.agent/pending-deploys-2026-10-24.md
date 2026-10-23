# 待部署站点 — 2026-10-24

> 原因：Vercel 免费额度 `api-deployments-free-per-day`（100 次/日）于 2026-10-24 00:10 用尽。
> 本地内容与构建产物均已修正，**只差一次成功部署**。额度约 24 小时后恢复。

| 站点 | 文件 | 修正内容 | 线上现状 |
|------|------|----------|----------|
| nivalisnightswiki | `content/guides/greenhouse-automation-guide.md` | Update #4 档位（gid 1846018067933485）与 10/16 小补丁（gid 1846651706681865）写入可渲染的 `sources[].text` | 仍为旧版（官方链接只在 frontmatter `url`，页面不渲染） |
| waterparksimulatorwiki | `content/guides/shelves-multistand-staff-guide.md` | 8/28 补丁来源（gid 1842212951303274）写入可渲染的 `sources[].text` | 仍为旧版 |
| silverpineswiki | `content/guides/silver-pines-camera-photo-map-guide.md` | 正文末尾补可点击的 Hotfix 2 官方来源行（gid 1846651706681087） | 仍为旧版 |

## 恢复后执行

```bash
cd /Users/zhaoq0103/DEV/Personal/How-to-Make-Money/games-site
./deploy-wiki-site.sh nivalisnightswiki
./deploy-wiki-site.sh waterparksimulatorwiki
./deploy-wiki-site.sh silverpineswiki
```

验证：

```bash
curl -s --resolve nivalisnightswiki.vercel.app:443:64.29.17.3 \
  https://nivalisnightswiki.vercel.app/guides/greenhouse-automation-guide | grep -c 1846018067933485
curl -s --resolve waterparksimulatorwiki.vercel.app:443:64.29.17.3 \
  https://waterparksimulatorwiki.vercel.app/guides/shelves-multistand-staff-guide | grep -c 1842212951303274
curl -s --resolve silverpineswiki.vercel.app:443:64.29.17.3 \
  https://silverpineswiki.vercel.app/guides/silver-pines-camera-photo-map-guide | grep -c 1846651706681087
```

## 注意

- 免费额度按 UTC 日切，重置约在北京时间 08:00。
- 05:00 的 `auto-build-site.sh` 定时任务若在本窗口内运行，部署会因同一额度失败；内容仍会写入，次日可补部署。
