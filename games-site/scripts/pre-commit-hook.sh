#!/bin/bash
# Pre-commit hook: validate STATS-游戏站点统计.md is in sync with filesystem.
# If the auto-generated sections are stale, the commit is blocked.
# Fix: run `node scripts/update-stats.mjs` and stage the updated STATS.

set -e

STATS_FILE="STATS-游戏站点统计.md"
UPDATE_SCRIPT="scripts/update-stats.mjs"

# Only check if STATS or wiki content is staged
if ! git diff --cached --name-only | grep -qE "(STATS-|content/guides/|lib/seo-config)"; then
    exit 0
fi

# Also skip if STATS itself isn't staged (pure content-only commits still get a warning)
if ! git diff --cached --name-only | grep -q "$STATS_FILE"; then
    echo "⚠️  STATS not staged with content changes. Consider running: node $UPDATE_SCRIPT"
    echo "   (This is a warning only — commit will proceed.)"
    exit 0
fi

# Run the check
if node "$UPDATE_SCRIPT" --check 2>&1; then
    exit 0
else
    echo ""
    echo "🔴 Commit blocked: STATS is out of sync with actual filesystem state."
    echo "   Run: node $UPDATE_SCRIPT"
    echo "   Then: git add $STATS_FILE"
    echo "   Then: git commit again"
    exit 1
fi
