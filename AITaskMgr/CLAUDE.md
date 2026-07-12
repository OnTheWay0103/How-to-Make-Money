# AITaskMgr — AI 任务管理与项目调度中心

> 通用约定见父级 `../CLAUDE.md`（仓库信息、Claude Code 配置、手机工作流、项目隔离等）。

## 项目定位

**元工具项目**，核心功能是通过 `cc` 脚本从手机远程切换和管理 Mac 上的多个 Claude Code 工作会话。

## 核心文件

| 文件 | 用途 |
|------|------|
| `cc` | 项目切换脚本，显示编号菜单，`exec claude --permission-mode bypassPermissions` |
| `projects.conf` | 项目列表配置（`名称 \| 路径`），受全局 `*.conf` gitignore 影响需 `git add -f` |
| `CLAUDE.md` | 本文件 |

## 维护操作

```bash
cc -e       # 编辑项目列表（增删项目）
cc -l       # 列出所有项目及路径
git add -f projects.conf && git commit -m "chore: update project list"  # 提交项目列表变更
```
