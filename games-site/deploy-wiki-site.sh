#!/bin/zsh
# ============================================================
# deploy-wiki-site.sh — 单站部署（处理 Root Directory 路径叠加）
#
# 用法: ./deploy-wiki-site.sh <site-dir>   (如 themoundwiki)
# 流程: API 清空 rootDirectory → CLI 部署 → API 恢复
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

AUTH_FILE="$HOME/Library/Application Support/com.vercel.cli/auth.json"
TOKEN=$(python3 -c "import json; print(json.load(open('$AUTH_FILE'))['token'])" 2>/dev/null) || {
  echo "❌ 无法读取 Vercel token: $AUTH_FILE"
  exit 1
}

PID=$(python3 -c "import json; print(json.load(open('$PROJECT_PATH/.vercel/project.json'))['projectId'])")
PROJECT_NAME=$(python3 -c "import json; print(json.load(open('$PROJECT_PATH/.vercel/project.json'))['projectName'])")
ROOT_DIR="games-site/$SITE_DIR"

echo "🚀 部署 $SITE_DIR (project=$PROJECT_NAME)"

# 1. 清空 rootDirectory
echo "  1) 清空 rootDirectory..."
curl -s -X PATCH -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"rootDirectory":null}' \
  "https://api.vercel.com/v9/projects/$PID" > /dev/null

# 2. CLI 部署
echo "  2) vercel deploy --prod ..."
cd "$PROJECT_PATH"
vercel deploy --prod --yes --token "$TOKEN" 2>&1 | tail -3
DEPLOY_EXIT=$?
cd "$SCRIPT_DIR"

# 3. 恢复 rootDirectory
echo "  3) 恢复 rootDirectory=$ROOT_DIR ..."
curl -s -X PATCH -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"rootDirectory\":\"$ROOT_DIR\"}" \
  "https://api.vercel.com/v9/projects/$PID" > /dev/null

if [ $DEPLOY_EXIT -ne 0 ]; then
  echo "❌ 部署失败 (exit $DEPLOY_EXIT)"
  exit $DEPLOY_EXIT
fi

# 4. 验证生产 URL
sleep 3
HTTP=$(curl -s -o /dev/null -w "%{http_code}" -m 15 "https://$PROJECT_NAME.vercel.app/")
echo "✅ 部署完成: https://$PROJECT_NAME.vercel.app/ (HTTP $HTTP)"
