#!/bin/zsh
# ============================================================
# sync-ledger-manual.sh — 「站点台账(人工)」每日回填调度脚本
#
# 读飞书「站点台账(人工)YYYY-MM」，把人工填好的 GA4 / 广告位代码
# 回填进站点代码，只部署本次有改动的站，然后提交。
#
# 用法:
#   ./sync-ledger-manual.sh            完整运行（回填 + 部署 + 提交）
#   ./sync-ledger-manual.sh --dry-run  只出计划，不写任何东西
#
# 部署: launchd com.games-site.sync-ledger-manual（每天 20:00）
# 日志: ~/Library/Logs/ledger-sync/YYYY-MM-DD_HHMMSS.log
# ============================================================

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$HOME/Library/Logs/ledger-sync"
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d_%H%M%S).log"
LOCK_DIR="/tmp/games-site-ledger-sync.lock"

mkdir -p "$LOG_DIR"
# 保留最近 30 天的日志
find "$LOG_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null || true

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"; }

# --- 防并发：和 auto-build-site（21:00）不重叠 ---
if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  log "上一次同步还在跑（锁 $LOCK_DIR），本次退出。"
  exit 0
fi
trap 'rmdir "$LOCK_DIR" 2>/dev/null' EXIT

log "========== 台账人工回填 =========="
log "项目目录: $SCRIPT_DIR"

cd "$SCRIPT_DIR" || { log "❌ 进不去 $SCRIPT_DIR"; exit 1; }

# launchd 的 PATH 很窄，这里显式补上 node / pnpm / vercel / lark-cli
export PATH="/Users/zhaoq0103/.nvm/versions/node/v24.4.0/bin:/Users/zhaoq0103/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
NODE_BIN="/Users/zhaoq0103/.nvm/versions/node/v24.4.0/bin/node"

if [[ ! -x "$NODE_BIN" ]]; then
  log "❌ 找不到 node：$NODE_BIN"
  exit 1
fi

DRY=false
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY=true ;;
    -h|--help)
      echo "用法: $0 [--dry-run]"
      exit 0
      ;;
  esac
done

if [[ "$DRY" == true ]]; then
  ARGS=()
else
  ARGS=(--apply)
fi

"$NODE_BIN" scripts/sync-ledger-manual.mjs "${ARGS[@]}" 2>&1 | tee -a "$LOG_FILE"
EXIT_CODE=${pipestatus[1]}

log "退出码: $EXIT_CODE"
log "========== 结束 =========="
exit $EXIT_CODE
