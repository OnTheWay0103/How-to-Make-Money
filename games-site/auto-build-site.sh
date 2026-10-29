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
    CLAUDE_PROMPT=$(cat <<'PROMPT_EOF'
Use the discover-games skill. Search for trending Steam games, hard-filter them, and append evidence-backed candidates (status 待分析) to keyword-results/CANDIDATE-POOL.md plus keyword-results/discovery-{YYYY-MM-DD}.md. Do NOT score, do NOT check wiki competition, do NOT harvest keywords, do NOT build any sites.
PROMPT_EOF
    )
else
    log "🧠 运行主管 Agent（多Agent协作模式）..."
    CLAUDE_PROMPT=$(cat <<'PROMPT_EOF'
Use the coordinator skill. Read the stats doc, candidate pool, and performance data. STEP 0 (before anything else): run `node scripts/check-uncommitted-content.mjs`; if it exits non-zero, COMMIT those files first — never start new work on top of a working tree that has deployed-but-uncommitted content. STEP 0b: run `zsh scripts/deploy-pending.sh` to drain .agent/pending-deploys.md (large changes such as a 46-site title revision are staged across days because of the 100-deploys/day Vercel cap; the script self-caps by today's used count and leaves a reserve, and aborts the round on the first failure). It is safe to run every round; it exits 0 immediately when the list is empty or the quota has no headroom. NEVER hand-pick sites out of that list. FIRST and MANDATORY: run daily content expansion. The target list is EXACTLY eligible[] from `node scripts/expansion-targets.mjs --json`. That script is the ONLY source of truth for targets: it fetches live 30-day PV from dashboard /api/traffic and 生命周期状态 from 站点台账(自动化), and returns sites with PV30 > 1000 AND status ≠ 不再维护. MUST NOT use any other list — the table in docs/每日内容扩充计划.md is a 2026-09-02 snapshot, `.agent/expand-daily.json` sites[] is a derived record (never edit it by hand; regenerate with --apply), and any PV number quoted in old notes is stale. MUST NOT expand a site that is not in eligible[]. If the script exits 2 (traffic or ledger unreadable) report 「不可判定」 and skip expansion entirely — MUST NOT fall back to an older list. Before writing each article, `node scripts/expansion-targets.mjs --verify <site>` MUST exit 0. (Lesson 2026-10-27: the 04:00 round expanded spiritvale PV30=808 and tearsofmetal PV30=695 — both under the 1000 threshold — while missing sephiria and shiftatmidnight, which were eligible. Wrong sites, not merely extra sites.) Run the expansions in parallel (1-2 sites per sub-agent); for each site: collect real player feedback (Steam/Reddit/reviews) → pick 1 high-frequency, specific, uncovered problem → write the 800-1500 word guide → QA quick → deploy → commit (guide + .agent/expand-{site}-{date}.md). MUST NOT leave a deployed-but-uncommitted guide: live content that is not in git is treated as a defect. If a site has no usable material today, record the skip reason in .agent/expand-daily.json and catch it up next day; do NOT write without real feedback. SECOND MANDATORY TASK — new keyword exploration (run every day, even when the pool is not empty): (a) the game scout must run at least 4 source searches (Steam wishlist / SteamDB trending / new releases / upcoming), hard-filter (skip AAA / competitive / hyper-casual / visual novel / shut-down / older than 6 months without major update), and update keyword-results/CANDIDATE-POOL.md (status 待分析, with Steam evidence links) plus keyword-results/discovery-{YYYY-MM-DD}.md — do NOT score and do NOT check wiki competition; (a2) the candidate analyst must run the analysis round per docs/STRATEGY-选词与评分.md: hard gate → 6 fixed SERP queries → four-dimension score → cost estimate, writing keyword-results/selection-{YYYY-MM-DD}.md and backfilling the pool; (b) the keyword researcher must harvest Google Suggest for EVERY candidate marked 需采集 — not just the top 2. A harvest costs ~53 seconds per game (21 Suggest queries, verified 2026-10-28), so the whole 需采集 list is cheap to clear in one round; leaving candidates unscored is the single biggest leak in the funnel (26 pool rows had never been scored). Also re-harvest reports older than 30 days, save keyword-results/{GameName}.md, and state hit-rate against existing guides when the game already has a site; (c) append a one-paragraph 'new keyword opportunities' section to .agent/qa-report.md naming the top 3 keywords worth writing next. REVIEW ROUND (美东周一上午轮，即本机周一 21:00 那轮): run `node scripts/keyword-hit-rate.mjs --write` to regenerate keyword-results/命中率分析.md (词 → 页面 → PV, 落地页代理口径) and commit it; in the same commit go into the report's 补页任务 section and record the 3 pages most worth rewriting. This round existed on paper since 2026-07-18 but was never actually scheduled — the file sat stale for three months. Only build a new site under the 2026-10-28 scoring rule in docs/STRATEGY-选词与评分.md §2.6: FIRST apply non-compensable vetoes — 需求 <=2 OR 竞争 <=1 means REJECT regardless of total score (内容扩展 and 生命周期 cannot compensate); THEN build if total >=14, and total 12-13 only when 需求 >=4 AND 竞争 >=3. The old ">=17 only" rule is retired: 19-22 point sites all produced PV30=0 (evidence table in §2.6). NEW-SITE DASHBOARD RULE: every new site MUST end up in dashboard statistics. After deploying a new site, fill its GA4-measurementID / GA4-propertyID into the 飞书「站点台账(人工)」 row (the 20:00 sync-ledger-manual job writes both lib/seo-config.ts and dashboard/lib/sites.ts and deploys), or run node scripts/set-ga4-ids.mjs with a json file; then verify with node scripts/check-dashboard-registry.mjs --site <site>. If GA4 does not exist yet, mark the pool/ledger row so the gap stays visible. ALSO enforce the D+30 investment gate (new 2026-10-28, docs/STRATEGY-生命周期与止损.md §二): any site live >=30 days with PV30 < 50 gets marked 观察 and MUST NOT receive expansion articles or backlinks; do NOT delete, deindex or change code — the stop-loss judgement itself stays at D+90. IMPORTANT: After every build or expand, run quality-assurance (quick mode) on the affected site. ALSO check ad-slot coverage with `node scripts/check-ad-slots.mjs <site>` — it must exit 0. The check looks at the render layer, not at lib/adsterra-zones.ts: both zones can be configured while pages still show no ad (2026-10-29: 50 sites had both zone IDs yet /guides, /faq, /tier-list, /about, /contact, /privacy and /terms served no visible banner). Ads belong in app/layout.tsx exactly once (global zone + <PageAdBanner /> for the guide zone); NEVER copy <AdsterraSlot> into an individual page — a new route inherits the banner from the layout automatically, and a hand-copied slot is how pages end up missing it. After deploying, re-check live with `--live`. Also run the SEO compliance check after every build or expand: `node scripts/seo-check.mjs --site <site> --live --report .agent/seo-fix-<site>.md` MUST exit 0 before QA. Fix content-layer ERRORs yourself in content/guides/*.md (missing or duplicate title/description, images without alt) and re-run until clean; hand structure-layer ERRORs (missing required files, robots Disallow, noindex, H1 rendering, sitemap gaps, soft 404, non-200 pages) to the main agent through that report. NEVER pass the check by deleting pages, dropping routes or adding noindex. The canonical and title/description-length WARNs are deliberately deferred per the 2026-10-29 decision — record them, do not chase them. If QA deep is >7 days overdue, run full audit. Write QA results to .agent/qa-report.md. BEFORE the final commit run `node scripts/check-uncommitted-content.mjs` — it MUST exit 0; if it flags 🔴 已部署但未提交, that is a defect, commit those files, do not report success while it is non-zero. Commit incrementally during long runs (so partial work is not lost if the run is interrupted), then a final commit+push.
PROMPT_EOF
    )
fi

# 2026-10-28 事故（两轮 0 产出）：prompt 曾用双引号赋值 `CLAUDE_PROMPT="..."`，
# 里面的反引号在**赋值时**被 shell 当命令执行；其中 `--verify <site>` 是重定向写法，
# 直接触发 zsh parse error，配上 set -e 就整脚本中止 —— 10-27 21:00 与 10-28 04:00
# 两轮都是这样死的（日志只停在「运行主管 Agent」，没有「执行完成」）。
# 所以 MUST 用带引号的 heredoc <<'PROMPT_EOF'，MUST NOT 改回双引号赋值。
if [ ${#CLAUDE_PROMPT} -lt 500 ]; then
    log "❌ CLAUDE_PROMPT 长度异常（${#CLAUDE_PROMPT}），疑似被 shell 展开，终止本轮"
    exit 2
fi

log "执行: claude -p '$CLAUDE_PROMPT' --permission-mode bypassPermissions"
log ""

# 执行 Claude Code（非交互模式）
# 预期耗时（2026-09-02 起）：每日内容扩充 5 站并行约 1-2 小时，加建站/侦察可达 2-3 小时。
# 不设硬超时；长跑中断丢工作的风险由 coordinator 分批 commit 兜底。日志见 LOG_DIR。
cd "$PROJECT_DIR"

# 子 Agent 等待上限：默认 10 分钟。超过上限 CLI 会直接停掉仍在跑的子 Agent
# 并以 exit 0 结束 —— 2026-10-29 04:00 轮就是这样丢掉 nivalis/waterpark 两站、
# 且把中断记成成功的。设为 0 = 无限等待，子 Agent 跑完为止。
export CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS=0

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
log "========== 收尾门禁 =========="

# 已部署但未提交 = 线上内容不在 git，属缺陷（coordinator prompt 的 STEP 0 同一条规则）。
# 退出码 0 不代表本轮干净 —— 2026-10-27 与 2026-10-29 两轮都是这样静默留下的。
set +e
node scripts/check-uncommitted-content.mjs >> "$LOG_FILE" 2>&1
GATE_CODE=$?
set -e
if [ "$GATE_CODE" -ne 0 ]; then
    log "❌ 有已部署但未提交的内容（check-uncommitted-content exit $GATE_CODE），本轮判失败"
    if [ "$EXIT_CODE" -eq 0 ]; then
        EXIT_CODE=1
    fi
else
    log "✅ 工作区干净：线上内容与 git 一致"
fi

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
