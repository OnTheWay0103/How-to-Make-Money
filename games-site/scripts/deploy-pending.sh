#!/bin/zsh
# ============================================================
# deploy-pending.sh — 消费 .agent/pending-deploys.md 里的待部署清单
#
# 存在的理由：Vercel 免费版 100 次部署/日，UTC 日切 = 北京 08:00。
# 大范围改动（如 48 站 /faq title 修订）一天铺不完，必须跨日：
# 源码先全部提交，部署排进清单，之后每一轮按额度取一部分。
#
# 用法:
#   scripts/deploy-pending.sh                 # 按当日 Vercel 额度自动算上限
#   scripts/deploy-pending.sh --limit 40      # 指定本轮上限（覆盖额度计算）
#   scripts/deploy-pending.sh --dry-run       # 只列清单，不部署
#
# 行为:
#   - 按清单顺序逐站调用 ./deploy-wiki-site.sh（走它自带的 lint / 残留门禁）
#   - 成功的行从清单里删掉；失败**立即中止**（不继续烧额度），失败站留在清单里
#   - 清单只剩表头时退出 0，并提示已清空
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PENDING="$SCRIPT_DIR/.agent/pending-deploys.md"
DEPLOY_LOG="$SCRIPT_DIR/.agent/deploy-log.jsonl"
LIMIT=""
DRY_RUN=false
# 每日 100 次部署额度里给当天其余工作留的分量（20:00 台账回填最多 10 站 + 21:00 定时轮）
RESERVE=15

while [[ $# -gt 0 ]]; do
  case "$1" in
    --limit) LIMIT="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    -h|--help) sed -n '2,22p' "$0"; exit 0 ;;
    *) echo "未知参数: $1"; exit 1 ;;
  esac
done

# 默认上限 = 100 - 今天(UTC 日)已用 - 预留。不显式指定就按额度算，避免把当天额度烧光。
if [[ -z "$LIMIT" ]]; then
  TODAY_UTC=$(date -u +%Y-%m-%d)
  USED=0
  if [[ -f "$DEPLOY_LOG" ]]; then
    USED=$(node -e '
      const fs = require("fs");
      const today = process.argv[1];
      let n = 0;
      for (const line of fs.readFileSync(process.argv[2], "utf8").split("\n")) {
        if (!line.trim()) continue;
        try { if (new Date(JSON.parse(line).ts).toISOString().slice(0, 10) === today) n++; } catch {}
      }
      console.log(n);' "$TODAY_UTC" "$DEPLOY_LOG")
  fi
  LIMIT=$((100 - USED - RESERVE))
  [[ "$LIMIT" -lt 0 ]] && LIMIT=0
  echo "📊 Vercel 额度（UTC $TODAY_UTC）：已用 $USED / 100，预留 $RESERVE，本轮最多 $LIMIT 站"
fi

if [[ "$LIMIT" -eq 0 ]]; then
  echo "⏸  今日额度已留不出余量，待部署清单留到下一个 UTC 日（北京 08:00 之后）"
  exit 0
fi

if [[ ! -f "$PENDING" ]]; then
  echo "✅ 没有待部署清单（$PENDING 不存在）"
  exit 0
fi

# 清单条目 = `- <site>` 开头的行（`#` 后面是备注）
TOTAL=$(grep -cE '^- [a-z0-9]+' "$PENDING" || true)
if [[ "$TOTAL" -eq 0 ]]; then
  echo "✅ 待部署清单为空"
  exit 0
fi

echo "📋 待部署 $TOTAL 站；本轮上限 $LIMIT${DRY_RUN:+}"
[[ "$DRY_RUN" == true ]] && echo "  (dry-run，不实际部署)"

DONE=0
FAILED=""

while IFS= read -r line; do
  [[ "$line" =~ ^-\ ([a-z0-9]+) ]] || continue
  site="${match[1]}"

  if [[ "$DONE" -ge "$LIMIT" ]]; then
    echo "⏸  已达本轮上限 $LIMIT，剩余留到下一轮（清单不动）"
    break
  fi

  if [[ "$DRY_RUN" == true ]]; then
    echo "  · $site"
    DONE=$((DONE + 1))
    continue
  fi

  echo "🚀 [$((DONE + 1))/$LIMIT] $site"
  OUT=$(mktemp)
  if ! "$SCRIPT_DIR/deploy-wiki-site.sh" "$site" 2>&1 | tee "$OUT"; then
    # 额度用尽不是缺陷：本机 deploy-log 只记 deploy-wiki-site.sh 发起的部署，
    # Vercel 后台 / git 集成 / 别处的部署也算额度，所以日志数会低于真实用量。
    if grep -q "api-deployments-free-per-day" "$OUT"; then
      echo ""
      echo "⏸  Vercel 今日部署额度已用尽（100/日，UTC 日切 = 北京 08:00）—— 清单原样保留，下一轮再铺"
      rm -f "$OUT"
      exit 0
    fi
    echo "❌ $site 部署失败 —— 中止本轮，剩余留到下一轮"
    FAILED="$site"
    rm -f "$OUT"
    break
  fi
  rm -f "$OUT"

  # 成功：从清单里删掉这一行（原地重写，保留表头与备注）
  tmp=$(mktemp)
  grep -vxF -- "$line" "$PENDING" > "$tmp" || true
  mv "$tmp" "$PENDING"
  DONE=$((DONE + 1))
done < "$PENDING"

REMAIN=$(grep -cE '^- [a-z0-9]+' "$PENDING" || true)
echo ""
echo "本轮部署 $DONE 站；清单剩余 $REMAIN 站"

if [[ -n "$FAILED" ]]; then
  echo "❌ 因 $FAILED 失败中止 —— 修好后再跑本脚本"
  exit 1
fi
