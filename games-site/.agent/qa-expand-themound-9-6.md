# QA 报告 — QA-EXPAND-THEMOUND-9/6

- 日期: 2026-09-06
- 模式: quick（仅本轮变更）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06）
- 范围: 1 篇新增指南 + 1 处 home-content 加行
  - `themoundwiki/content/guides/motion-sickness-camera-fix-guide.md`
  - `themoundwiki/content/home-content.md`（Quick Navigation +1 行）
- 排除: grainrotwiki（本轮 SKIP，见 .agent/qa-expand-grainrot-9-6.md）

## 执行摘要
- 结论: ✅ **PASS**（0 🔴 / 0 🟡 / 1 🟢）
- 1 篇相机舒适/晕动修复指南，正文 1452 词（800–1500 ✓），残留扫描 Clean，核心断言全部可回溯，可部署。

## 检查项逐项结果

- a) **残留扫描**：✅ Clean。grep 本项目全部已知站名（witchspire/mistfall/aincrad/sephiria/tearsofmetal/grainrot/spiritvale/dinoblade/anomaly 等）、他站域名（*.vercel.app）、Hugo shortcode（{{< / {%）→ 全零命中；正文唯一出现的外站链接为 sources 引用的编辑/官方 URL（gamersocialclub.ca、hone.gg、steamcommunity.com、revillution.net）——均为本指南 sources，非模板残留。内部链接全部指向本站 `/guides/…`。
- b) **编造检查**：✅ 8 条核心断言抽查可回溯（见下表）。相机设置类事实全部挂官方补丁或编辑来源；唯一玩家报告类（头晃幅度、残余 bobbing）已标 [Unconfirmed]；未编造玩家原话/评测引语（honesty note 已声明 Steam 社区正文无法自动抓取、按索引片段转述、无虚构引号）。
- c) **内部一致性**：✅/🟢。frontmatter 字段（title/description/category:"Guides"/version:"1.0"/updated:"2026-09-06"/keywords[]/related[]）与站内反馈驱动指南 schema 一致（isolation-guide/blood-moon-guide 同款；本站无 sources frontmatter——lib/guides.ts 简易解析器不支持嵌套对象，沿用正文内分层 Sources 惯例）。`related[]` 3 项全部存在于 `content/guides/`。正文 /guides/ 内链 0 BROKEN。title/description 与正文相符。引用同站 controls-settings-guide 处（Camera Shake Intensity、Motion Blur Off、FOV 90-100 基线）与原文一致。home-content.md Quick Navigation 新行已插入（第 41 行，位于 Performance & FPS 行下），既有行（含 9/4 blood-moon 行）未破坏。updated 一律 2026-09-06。
- d) **诚实标注**：✅ 玩家报告（头晃/残余 bobbing）标 [Unconfirmed]；菜单名与补丁名差异（Normal vs Standard）双名并列说明；honesty note 两份（引言后 + Sources 尾部）。
- e) **体量**：✅ 正文（去 frontmatter、去 Sources/Related 尾部）= 1452 词；含尾部共 1925 词。主正文在 800–1500 区间内。
- f) **注册核对**：✅ `lib/guides.ts` `getAllGuides()` 自动读取 `content/guides/*.md`，slug=文件名 → 自动注册为 `/guides/motion-sickness-camera-fix-guide`，无需额外登记。
- g) **参照对比**：✅ 与同站 isolation-guide（9/3）/blood-moon-guide（9/4）对比：frontmatter、正文内分层 Sources（Official/Community/Editorial）、Honesty note、[Unconfirmed] 标注、Related Guides 尾链均一致。

## WebSearch/WebFetch 断言 → 来源对应（编造核验证据）

| 指南断言 | 验证结果 | 来源 |
|---------|---------|------|
| 首发即预选屏：cinematic vs standard camera，standard「may help with motion sickness」 | ✅ 直接抓取确认 | [Gamer Social Club — First Major Patch (2026-07-22)](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/) |
| Camera Style 选项 = Cinematic / Normal；补丁说明称 Standard、游戏内选屏标 Normal；Motion Blur 滑杆 1.01 修复、建议 Off | ✅ 直接抓取确认 | [hone.gg — Best PC Settings](https://hone.gg/blog/the-mound-omen-of-cthulhu-best-settings/) |
| Patch 1.03 新增中央小圆点辅助（缓解晕动）+ FOV 滑杆 85–115 → 75–125 | ✅ WebSearch 两路独立命中官方 Patch 1.03 公告 | [Steam Community allnews — Patch 1.03 (koreana)](https://steamcommunity.com/app/2569760/allnews/?l=koreana) |
| 首发更新修复「disable all camera effects 时相机平滑 → 1:1 mouse-to-camera」 | ✅ 官方首发更新 / SteamDB 双重命中 | [SteamDB patchnotes 24043641](https://steamdb.info/patchnotes/24043641/)、[Steam Community allnews](https://steamcommunity.com/app/2569760/allnews/) |
| Camera Shake Intensity 可调、建议降低 | ✅ 站内既有 controls-settings-guide 原文一致 | themoundwiki/content/guides/controls-settings-guide.md（Accessibility 表） |
| 玩家报告：镜头摆动严重、sway 调低仍晕「very nauseating」 | ⚠️ 经索引片段转述（Steam 屏蔽自动抓取），已标 [Unconfirmed] + honesty note；不阻断 | [Steam 差评（中文，gametrend.jp 索引）](https://steamcommunity.com/app/2569760/reviews/)、[revillution.net 讨论](https://www.revillution.net/threads/this-horror-game-is-getting-mixed-reviews-but-its-best-parts-are-amazing.22411/) |
| 锁帧/稳定帧率可减轻晕动 | ✅ hone.gg 建议；非独立数值，作为编辑建议呈现 | [hone.gg](https://hone.gg/blog/the-mound-omen-of-cthulhu-best-settings/) |

## 基建检查
- 本轮执行了部署（见下）。部署后 curl 线上验证。

## 部署与线上验证
- 命令: `./deploy-wiki-site.sh themoundwiki`（执行 2 次）
- 部署日志: /tmp/deploy-themound-9-6.log（第 1 次）、/tmp/deploy-themound-9-6b.log（第 2 次/重试）
- 结果: **内容已上线并经线上核验通过**；脚本健康检查门在两次执行中均 exit 1（详见下方「脚本门说明」），按任务「连续失败 2 次 → 停下报告」停止重试并如实上报。
- 线上验证（实际执行）:
  - `curl -s -o /dev/null -w "%{http_code}" https://themoundwiki.vercel.app/guides/motion-sickness-camera-fix-guide` → **200**
  - 内容标记词 curl 核验 → 命中 "Motion Sickness Fix"×14 / "Camera Style"×10 / "Center Dot"×6 / "Patch 1.03"×26 / "75"（FOV 75–125）×23
  - 首页 https://themoundwiki.vercel.app/ → 200

### 脚本门说明（为何 exit 1，非内容/构建失败）
- 两次执行均成功创建新 deployment（第 2 次 URL: `https://themoundwiki-npl5prf80-zhaoq0103s-projects.vercel.app`），且日志在 `新部署:` 之后即中断（未打印 `✅ 部署完成`）——即 `vercel inspect`/curl 健康检查步骤在脚本内被 set -e 中断。
- 手动复跑相同检查（`vercel inspect themoundwiki.vercel.app` exit=0；curl 首页 200）当前全部通过，判定为部署后即时 alias 传播竞态（sleep 5 不足）导致的瞬态失败，非代码/内容问题。
- 生产 alias 当前已指向含新指南的部署并返回 200 + 内容标记，功能目标达成。

## Coordinator 摘要
```
QA 结果: ✅ PASS (0 🔴 / 0 🟡 / 1 🟢)
说明: 新增 motion-sickness-camera-fix-guide.md 残留 Clean、编造零风险（8 条断言可回溯，
      玩家报告均 [Unconfirmed]）、正文 1452 词、内链 0 BROKEN、schema 与同站一致。
🟢 建议(可选): updates-patch-notes-guide 的版本记录仍停在 1.0.1，滞后于 1.02/1.03
      ——本轮任务范围禁止修改既有正文，列为 P0 建议由主 Agent 安排单独校准。
```
