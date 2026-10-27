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
    CLAUDE_PROMPT="Use the discover-games skill. Search for trending Steam games, hard-filter them, and append evidence-backed candidates (status 待分析) to keyword-results/CANDIDATE-POOL.md plus keyword-results/discovery-{YYYY-MM-DD}.md. Do NOT score, do NOT check wiki competition, do NOT harvest keywords, do NOT build any sites."
else
    log "🧠 运行主管 Agent（多Agent协作模式）..."
    CLAUDE_PROMPT="Use the coordinator skill. Read the stats doc, candidate pool, and performance data. STEP 0 (before anything else): run `node scripts/check-uncommitted-content.mjs`; if it exits non-zero, COMMIT those files first — never start new work on top of a working tree that has deployed-but-uncommitted content. FIRST and MANDATORY: run daily content expansion. The target list is EXACTLY eligible[] from `node scripts/expansion-targets.mjs --json`. That script is the ONLY source of truth for targets: it fetches live 30-day PV from dashboard /api/traffic and 生命周期状态 from 站点台账(自动化), and returns sites with PV30 > 1000 AND status ≠ 不再维护. MUST NOT use any other list — the table in docs/每日内容扩充计划.md is a 2026-09-02 snapshot, `.agent/expand-daily.json` sites[] is a derived record (never edit it by hand; regenerate with --apply), and any PV number quoted in old notes is stale. MUST NOT expand a site that is not in eligible[]. If the script exits 2 (traffic or ledger unreadable) report 「不可判定」 and skip expansion entirely — MUST NOT fall back to an older list. Before writing each article, `node scripts/expansion-targets.mjs --verify <site>` MUST exit 0. (Lesson 2026-10-27: the 04:00 round expanded spiritvale PV30=808 and tearsofmetal PV30=695 — both under the 1000 threshold — while missing sephiria and shiftatmidnight, which were eligible. Wrong sites, not merely extra sites.) Run the expansions in parallel (1-2 sites per sub-agent); for each site: collect real player feedback (Steam/Reddit/reviews) → pick 1 high-frequency, specific, uncovered problem → write the 800-1500 word guide → QA quick → deploy → commit (guide + .agent/expand-{site}-{date}.md). MUST NOT leave a deployed-but-uncommitted guide: live content that is not in git is treated as a defect. If a site has no usable material today, record the skip reason in .agent/expand-daily.json and catch it up next day; do NOT write without real feedback. SECOND MANDATORY TASK — new keyword exploration (run every day, even when the pool is not empty): (a) the game scout must run at least 4 source searches (Steam wishlist / SteamDB trending / new releases / upcoming), hard-filter (skip AAA / competitive / hyper-casual / visual novel / shut-down / older than 6 months without major update), and update keyword-results/CANDIDATE-POOL.md (status 待分析, with Steam evidence links) plus keyword-results/discovery-{YYYY-MM-DD}.md — do NOT score and do NOT check wiki competition; (a2) the candidate analyst must run the analysis round per docs/STRATEGY-选词与评分.md: hard gate → 6 fixed SERP queries → four-dimension score → cost estimate, writing keyword-results/selection-{YYYY-MM-DD}.md and backfilling the pool; (b) the keyword researcher must harvest Google Suggest for candidates marked 需采集 (or the top 2 that have no keyword report yet) (or whose report is >30 days old), save keyword-results/{GameName}.md, and state hit-rate against existing guides when the game already has a site; (c) append a one-paragraph 'new keyword opportunities' section to .agent/qa-report.md naming the top 3 keywords worth writing next. REVIEW ROUND (美东周一上午轮，即本机周一 21:00 那轮): run `node scripts/keyword-hit-rate.mjs --write` to regenerate keyword-results/命中率分析.md (词 → 页面 → PV, 落地页代理口径) and commit it; in the same commit go into the report's 补页任务 section and record the 3 pages most worth rewriting. This round existed on paper since 2026-07-18 but was never actually scheduled — the file sat stale for three months. Only build a new site if its selection report scores >=17 (target >=5 new sites/day; 15-16 needs explicit user confirmation). NEW-SITE DASHBOARD RULE: every new site MUST end up in dashboard statistics. After deploying a new site, fill its GA4-measurementID / GA4-propertyID into the 飞书「站点台账(人工)」 row (the 20:00 sync-ledger-manual job writes both lib/seo-config.ts and dashboard/lib/sites.ts and deploys), or run node scripts/set-ga4-ids.mjs with a json file; then verify with node scripts/check-dashboard-registry.mjs --site <site>. If GA4 does not exist yet, mark the pool/ledger row so the gap stays visible. IMPORTANT: After every build or expand, run quality-assurance (quick mode) on the affected site. If QA deep is >7 days overdue, run full audit. Write QA results to .agent/qa-report.md. BEFORE the final commit run `node scripts/check-uncommitted-content.mjs` — it MUST exit 0; if it flags 🔴 已部署但未提交, that is a defect, commit those files, do not report success while it is non-zero. Commit incrementally during long runs (so partial work is not lost if the run is interrupted), then a final commit+push."
fi

log "执行: claude -p '$CLAUDE_PROMPT' --permission-mode bypassPermissions"
log ""

# 执行 Claude Code（非交互模式）
# 预期耗时（2026-09-02 起）：每日内容扩充 5 站并行约 1-2 小时，加建站/侦察可达 2-3 小时。
# 不设硬超时；长跑中断丢工作的风险由 coordinator 分批 commit 兜底。日志见 LOG_DIR。
cd "$PROJECT_DIR"

# 使用临时文件捕获 exit code，避免 PIPESTATUS 在 pipefail 下未定义
TMP_OUT=$(mktemp)
trap "rm -f $TMP_OUT" EXIT

set +e  # 暂时关闭 errexit，手动捕获退出码
claude -p "$CLAUDE_PROMPT" \
    --permission-mode bypassPermissions \
    --output-format text \
    > "$TMP_OUT" 2>&1
EXIT_CODE=$?
set -e  # 恢复 errexit

# 输出到日志
cat "$TMP_OUT" | tee -a "$LOG_FILE"

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
