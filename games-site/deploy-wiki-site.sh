#!/bin/zsh
# ============================================================
# deploy-wiki-site.sh — 单站部署（CLI 直传模式）
#
# 用法: ./deploy-wiki-site.sh <site-dir>   (如 themoundwiki)
#
# ⚠️ 重要：rootDirectory 必须保持为空（永久）
#    rootDirectory 仅用于 Git 集成部署（monorepo 场景）。
#    本项目未启用 Git 集成（需浏览器 OAuth），使用 CLI 直传。
#    若 rootDirectory 非空，CLI 会在站点目录内再次叠加路径导致
#    "path does not exist" 报错（曾反复出现）。
#    如未来启用 Git 集成，Vercel Dashboard 会自动配置 rootDirectory。
# ============================================================
set -euo pipefail

SITE_DIR="${1:?用法: ./deploy-wiki-site.sh <site-dir>}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_PATH="$SCRIPT_DIR/$SITE_DIR"

if [[ ! -d "$PROJECT_PATH" ]]; then
  echo "❌ 目录不存在: $PROJECT_PATH"
  exit 1
fi
if [[ ! -f "$PROJECT_PATH/.vercel/project.json" ]]; then
  echo "❌ 未关联 Vercel: $PROJECT_PATH/.vercel/project.json 缺失"
  exit 1
fi

# 认证策略：不显式传 --token。
# ⚠️ 规则闭环 2026-08-27: auth.json 里的 token 会过期（8/27 起 403），
# 而 vercel CLI 自身会话（whoami 正常）会自动 refresh。显式 --token 反而
# 用过期 token 覆盖了 CLI 的可用会话 → "Not authorized"。故 deploy/inspect
# 一律走 CLI 默认认证；auth.json 的 token 仅供 rootDirectory PATCH 防御性使用，
# 读不到或过期也不阻断（rootDirectory 本应已为空）。

AUTH_FILE="$HOME/Library/Application Support/com.vercel.cli/auth.json"
TOKEN=$(python3 -c "import json; print(json.load(open('$AUTH_FILE'))['token'])" 2>/dev/null) || {
  echo "  ⚠️ 无法读取 Vercel token（$AUTH_FILE）— 跳过 rootDirectory 防御性清理"
  TOKEN=""
}

PID=$(python3 -c "import json; print(json.load(open('$PROJECT_PATH/.vercel/project.json'))['projectId'])")
PROJECT_NAME=$(python3 -c "import json; print(json.load(open('$PROJECT_PATH/.vercel/project.json'))['projectName'])")

echo "🚀 部署 $SITE_DIR (project=$PROJECT_NAME)"

# 1. 防御性清空 rootDirectory（应为空，若被意外设置则清除；token 过期则跳过）
echo "  1) 确保 rootDirectory 为空..."
if [[ -n "$TOKEN" ]]; then
  curl -s -X PATCH -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"rootDirectory":null}' \
    "https://api.vercel.com/v9/projects/$PID" > /dev/null || echo "  ⚠️ rootDirectory PATCH 失败（token 过期？）— 忽略，rootDirectory 本应已为空"
else
  echo "  ⚠️ 无 token，跳过 rootDirectory 清理"
fi

# 2. CLI 部署（用 CLI 默认认证，不传 --token；完整输出落盘，不吞错误）
echo "  2) vercel deploy --prod ..."
cd "$PROJECT_PATH"
DEPLOY_LOG=$(mktemp)
if vercel deploy --prod --yes > "$DEPLOY_LOG" 2>&1; then
  DEPLOY_EXIT=0
else
  DEPLOY_EXIT=$?
fi
cd "$SCRIPT_DIR"

if [ $DEPLOY_EXIT -ne 0 ]; then
  echo "❌ 部署失败 (exit $DEPLOY_EXIT)，输出末尾："
  tail -20 "$DEPLOY_LOG"
  rm -f "$DEPLOY_LOG"
  exit $DEPLOY_EXIT
fi

# 2b. 从输出捕获新部署 URL；拿不到就失败（不静默继续）
NEW_URL=$(grep -o 'https://[a-z0-9-]*\.vercel\.app' "$DEPLOY_LOG" | head -1)
if [[ -z "$NEW_URL" ]]; then
  echo "❌ 部署输出中未找到新 deployment URL，输出末尾："
  tail -20 "$DEPLOY_LOG"
  rm -f "$DEPLOY_LOG"
  exit 1
fi
echo "  新部署: $NEW_URL"

# 3. 验证生产 alias 已指向新部署（而非只查首页 200——旧部署同样返回 200）
sleep 5
ALIAS_URL=$(vercel inspect "$PROJECT_NAME.vercel.app" 2>/dev/null | grep -o 'https://[a-z0-9-]*\.vercel\.app' | head -1)
HTTP=$(curl -s -o /dev/null -w "%{http_code}" -m 15 "https://$PROJECT_NAME.vercel.app/")
echo "✅ 部署完成: https://$PROJECT_NAME.vercel.app/ (HTTP $HTTP, alias → ${ALIAS_URL:-未知})"
if [[ -n "$ALIAS_URL" && "$ALIAS_URL" != "$NEW_URL" ]]; then
  echo "⚠️ 生产 alias 未指向本次新部署（新: $NEW_URL / alias: $ALIAS_URL）— 需人工确认"
  rm -f "$DEPLOY_LOG"
  exit 1
fi
rm -f "$DEPLOY_LOG"
