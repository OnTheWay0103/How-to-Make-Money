# AITaskMgr — AI 任务管理与项目调度中心

## 项目定位

这是一个**元工具项目**，用于从手机（通过 Otty）远程管理 Mac 上的多个 Claude Code 工作会话。
核心目标是：一个入口，管理所有项目。

## 核心文件

| 文件 | 用途 |
|------|------|
| `cc` | 项目切换脚本，显示编号菜单，一键进入任意项目 |
| `projects.conf` | 项目列表配置（`名称 \| 路径`），可随时增删 |
| `CLAUDE.md` | 本文件，AITaskMgr 专属上下文 |

## 日常使用流程

1. 手机 Otty 连上 Mac → 输入 `cc`
2. 选择目标项目 → Claude Code 在该项目目录下启动
3. 在 Claude Code 内也可说「切换到 x 项目」来 `cd` 换目录
4. 维护项目列表：`cc -e` 编辑配置文件

## 项目隔离说明

- **记忆（Memory）**：每个项目独立，按启动目录隔离存储在 `~/.claude/projects/<编码路径>/memory/`
- **CLAUDE.md**：每个项目有自己的 CLAUDE.md，启动时自动加载
- **会话**：每个项目的会话历史独立，互不干扰

## 关联项目一览

| 项目 | 路径 | 说明 |
|------|------|------|
| AITaskMgr | `./` | 本项目，任务调度中心 |
| games-site | `../games-site` | 游戏攻略站网络 + Dashboard |
| xiaohongshu | `../xiaohongshu` | 小红书内容与心理测试 |
| 基金筛选工具 | `../基金筛选工具` | Python Flask 基金筛选 |
| 生财练习 | `../生财练习` | 商业/个人成长练习 |
| smartVPN | `../../DEV/smartVPN` | 智能 VPN 系统 |
| yourdailyshells.com | `../../DEV/yourdailyshells.com` | Hugo 博客站 |
| TerminalConfMgr | `../../DEV/TerminalConfMgr` | 终端配置管理 |

## 注意事项

- `cc` 脚本使用 `exec claude --permission-mode bypassPermissions` 启动，不弹权限提示
- `projects.conf` 受全局 `.gitignore` 的 `*.conf` 规则影响，需 `git add -f` 才能提交
- 该目录是 `How-to-Make-Money` monorepo 的一部分，不要在此放敏感信息
