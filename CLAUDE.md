# How-to-Make-Money — Monorepo 基类

> 本文件位于 monorepo 根目录，所有子项目启动时都会自动加载（Claude Code 从 cwd 向上遍历）。
> 子目录的 CLAUDE.md 只需写项目特有内容，通用约定放这里。

## 仓库信息

- **GitHub**: `OnTheWay0103/How-to-Make-Money`
- **分支策略**: `main` 直推，无 PR 流程
- **提交风格**: `type(scope): description`，如 `feat(aitaskmgr): add cc script`

## Claude Code 通用配置

- **API**: DeepSeek v4-pro（通过 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN` 代理）
- **启动参数**: 始终带 `--permission-mode bypassPermissions`（不弹权限确认）
- **远程访问**: 通过 Otty app 从手机连 Mac 终端，不支持官方 Remote Control（第三方 API Key 限制）

## 手机远程工作流

1. 手机打开 Otty → 连上 Mac → 终端就绪
2. 输入 `cc` → 看到项目编号菜单 → 按数字进入
3. 在 Claude Code 内说「切换到 x」即可换目录
4. `cc -l` 列项目，`cc -e` 编辑项目列表

## 项目隔离

每个子目录启动时：
- **记忆独立**: `~/.claude/projects/<编码路径>/memory/` 各有一份
- **CLAUDE.md 叠加**: 本文件（基类）+ 子目录 CLAUDE.md（子类），两层合并
- **会话独立**: 不同项目的对话历史互不干扰

## 子项目一览

| 项目 | 相对路径 | 技术栈 | 说明 |
|------|----------|--------|------|
| AITaskMgr | `AITaskMgr/` | Shell | 项目调度中心，cc 脚本所在地 |
| games-site | `games-site/` | Next.js 16 + Vercel | 游戏攻略站矩阵（6 站 + Dashboard） |
| xiaohongshu | `xiaohongshu/` | Vite + React + TS | 小红书心理评测 H5 + 内容素材 |
| 基金筛选工具 | `基金筛选工具/` | Python Flask | 基金筛选 Web 工具 |
| 生财练习 | `生财练习/` | Markdown | 商业思维与个人成长笔记 |

## 外部关联项目

| 项目 | 路径 | 说明 |
|------|------|------|
| smartVPN | `../DEV/smartVPN` | 智能 VPN + 代理系统 |
| yourdailyshells.com | `../DEV/yourdailyshells.com` | Hugo 博客 |
| TerminalConfMgr | `../DEV/TerminalConfMgr` | 终端配置管理 |
| my-next-app | `../DEV/my-next-app` | Next.js 实验项目 |
