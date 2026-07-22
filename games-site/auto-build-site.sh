#!/bin/zsh
# ============================================================
# auto-build-site.sh — 自动建站 Agent 调度脚本
#
# 用法:
#   ./auto-build-site.sh          运行一次 Agent（搜索+评估+建站）
#   ./auto-build-site.sh --dry-run 仅搜索游戏，不建站
#
# 部署: 配合 macOS launchd 定时执行（见 auto-build-site.plist）
#
# 日志: ~/Library/Logs/auto-build-site/
# ============================================================

set -euo pipefail

# --- 配置 ---
# 脚本位于 games-site/ 目录下
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"
MONOREPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$HOME/Library/Logs/auto-build-site"
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d_%H%M%S).log"
DRY_RUN=false

# --- 参数解析 ---
for arg in "$@"; do
    case "$arg" in
        --dry-run) DRY_RUN=true ;;
        -h|--help)
            echo "用法: $0 [--dry-run]"
            echo ""
            echo "自动建站 Agent 调度脚本。"
            echo "  无参数      完整运行：搜索热门游戏 → 评估 → 建站 → 部署"
            echo "  --dry-run   仅搜索和评估，不实际建站（/discover-games）"
            exit 0
            ;;
    esac
done

# --- 初始化 ---
mkdir -p "$LOG_DIR"

# 保留最近 30 天的日志
find "$LOG_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null || true

# --- 日志函数 ---
log() {
    local msg="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo "$msg" | tee -a "$LOG_FILE"
}

# --- 预检 ---
log "========== Auto Build Site Agent =========="
log "Monorepo: $MONOREPO_ROOT"
log "Project:  $PROJECT_DIR"
log "Mode:     $([ "$DRY_RUN" = true ] && echo 'DRY RUN (discover only)' || echo 'FULL (discover + build + deploy)')"
log ""

# 检查项目目录
if [[ ! -d "$PROJECT_DIR" ]]; then
    log "❌ 项目目录不存在: $PROJECT_DIR"
    exit 1
fi

# 检查 claude 命令
if ! command -v claude &>/dev/null; then
    log "❌ claude 命令不可用"
    exit 1
fi

# 检查网络（Google Suggest API 需要）
if ! curl -s --connect-timeout 5 https://suggestqueries.google.com >/dev/null 2>&1; then
    log "⚠️  Google Suggest API 不通（可能需要代理）"
fi

# --- 先同步代码 ---
log "📥 同步最新代码..."
cd "$PROJECT_DIR"
if git pull 2>&1 | tee -a "$LOG_FILE"; then
    log "✅ git pull 成功"
else
    log "⚠️  git pull 失败，继续使用本地代码"
fi
log ""

# --- 运行 Agent ---
if [ "$DRY_RUN" = true ]; then
    log "🔍 运行游戏发现（仅搜索评估）..."
    CLAUDE_PROMPT="Use the discover-games skill. Search for trending Steam games, check Wiki coverage, score candidates, output a discovery report. Do NOT build any sites."
else
    log "🤖 运行全自动建站 Agent..."
    CLAUDE_PROMPT="Use the build-game-site skill in fully autonomous mode. Discover trending games, auto-select the highest-scoring candidate (score >= 15), evaluate, harvest keywords, build a complete wiki site with 10+ guides, deploy to Vercel, commit and push. Do not ask for confirmation."
fi

log "执行: claude -p '$CLAUDE_PROMPT' --permission-mode bypassPermissions"
log ""

# 执行 Claude Code（非交互模式）
# timeout: 30 分钟（足够 Agent 完成搜索+评估+建站+部署全流程）
cd "$PROJECT_DIR"
claude -p "$CLAUDE_PROMPT" \
    --permission-mode bypassPermissions \
    --output-format text \
    2>&1 | tee -a "$LOG_FILE"

EXIT_CODE=${PIPESTATUS[0]}

log ""
log "========== 执行完成 =========="
log "Exit code: $EXIT_CODE"
log "日志文件: $LOG_FILE"

if [ $EXIT_CODE -eq 0 ]; then
    log "✅ Agent 执行成功"
else
    log "❌ Agent 执行失败 (exit code: $EXIT_CODE)"
fi

exit $EXIT_CODE
