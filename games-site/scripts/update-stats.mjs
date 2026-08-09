#!/usr/bin/env node
/**
 * update-stats.mjs — Auto-update STATS-游戏站点统计.md from filesystem reality.
 *
 * Usage:
 *   node scripts/update-stats.mjs           # Update STATS in-place
 *   node scripts/update-stats.mjs --check   # Exit 1 if STATS is stale
 *   node scripts/update-stats.mjs --print   # Print computed data, don't write
 *
 * Auto-generated sections are delimited by markers in STATS:
 *   <!-- AUTO-START:overview-table --> ... <!-- AUTO-END:overview-table -->
 *   <!-- AUTO-START:sop-table -->      ... <!-- AUTO-END:sop-table -->
 *   <!-- AUTO-START:summary -->        ... <!-- AUTO-END:summary -->
 *
 * The script preserves all sticky (manually maintained) columns and only
 * replaces computed columns: guide count, GA4 status, Vercel status, GSC file.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const STATS_FILE = join(ROOT, 'STATS-游戏站点统计.md');

const CHECK_MODE = process.argv.includes('--check');
const PRINT_MODE = process.argv.includes('--print');

// ─── Filesystem scanner ────────────────────────────────────────────────

function scanSite(dir) {
  const sitePath = join(ROOT, dir);

  // Guide count
  const guidesDir = join(sitePath, 'content', 'guides');
  const guideCount = existsSync(guidesDir)
    ? readdirSync(guidesDir).filter(f => f.endsWith('.md')).length
    : 0;

  // GA4 ID
  const seoConfig = join(sitePath, 'lib', 'seo-config.ts');
  let ga4Id = '';
  if (existsSync(seoConfig)) {
    const content = readFileSync(seoConfig, 'utf-8');
    const m = content.match(/googleAnalyticsId:\s*['"]([^'"]*)['"]/);
    if (m) ga4Id = m[1];
  }

  // GSC verification file
  let hasGscFile = false;
  const publicDir = join(sitePath, 'public');
  if (existsSync(publicDir)) {
    hasGscFile = readdirSync(publicDir).some(
      f => f.startsWith('google') && f.endsWith('.html')
    );
  }

  // Vercel project link
  const hasVercel = existsSync(join(sitePath, '.vercel', 'project.json'));

  return { dir, guideCount, ga4Id, hasGscFile, hasVercel };
}

function ga4Emoji(ga4Id) {
  if (!ga4Id || ga4Id === '') return '❌';
  if (ga4Id === 'G-PLACEHOLDER') return '❌';
  return '✅';
}

function vercelEmoji(hasVercel) {
  return hasVercel ? '✅' : '❌';
}

function gscFileEmoji(hasGscFile) {
  return hasGscFile ? '✅' : '❌';
}

// ─── Parse existing STATS tables (sticky data extraction) ──────────────

/**
 * Parse a markdown table, returning an array of row objects.
 * Each row = { cells: [...], lineNum: N }.
 * Stops at first non-table line after data rows.
 */
function parseTable(lines, startIdx) {
  const rows = [];
  let i = startIdx;

  // Skip to header row
  while (i < lines.length && !lines[i].startsWith('|')) i++;
  const headerLine = lines[i];
  if (!headerLine) return { rows, endIdx: i };
  // Use slice(1,-1) to preserve empty trailing cells (e.g. empty "备注" column)
  const headers = headerLine.split('|').slice(1, -1).map(c => c.trim());
  i++;

  // Skip separator row
  while (i < lines.length && lines[i].includes('---')) i++;

  // Parse data rows
  while (i < lines.length && lines[i].startsWith('|')) {
    const cells = lines[i].split('|').slice(1, -1).map(c => c.trim());
    // Tolerate up to 1 missing trailing cell (common for empty notes column)
    if (cells.length >= headers.length - 1) {
      while (cells.length < headers.length) cells.push('');
      rows.push({ headers, cells, lineNum: i });
    }
    i++;
  }

  return { headers, rows, endIdx: i };
}

/**
 * Build a map from domain → sticky cell values.
 * The domain is expected in position of the "域名" column.
 */
function buildDomainMap(tableData) {
  const map = new Map();
  const { headers, rows } = tableData;

  const domainIdx = headers.findIndex(h => h === '域名');
  if (domainIdx === -1) {
    // Fallback: find index that looks like a domain
    for (const [idx, h] of headers.entries()) {
      if (h.includes('域名') || h.includes('domain')) {
        // use this
      }
    }
  }

  for (const row of rows) {
    const domain = domainIdx >= 0 ? row.cells[domainIdx] : null;
    if (domain) {
      const dir = domain.replace(/^https?:\/\//, '').replace('.vercel.app', '').replace(/\/$/, '');
      map.set(dir, row);
    }
  }

  return map;
}

// ─── Table generators ──────────────────────────────────────────────────

function generateOverviewTable(stickyRows, scannedSites) {
  const lines = [];

  // Header
  lines.push('| # | 站点 | 上线日 | 攻略 | 域名 | Vercel | GA4 | GSC | 备注 |');
  lines.push('|---|------|:--:|:--:|------|:--:|:--:|:--:|------|');

  for (const [idx, sticky] of stickyRows.entries()) {
    const cells = sticky.cells;
    const domain = cells[4]; // "域名" column
    const dir = domain.replace('.vercel.app', '');
    const scan = scannedSites[dir];
    const name = cells[1];       // keep name
    const date = cells[2];       // keep launch date
    const notes = cells[8] || ''; // keep notes

    if (scan) {
      const guides = scan.guideCount;
      const ga4 = ga4Emoji(scan.ga4Id);
      const vercel = vercelEmoji(scan.hasVercel);
      const gsc = gscFileEmoji(scan.hasGscFile);

      // If GSC file exists but we use 🟡 to indicate manual verification needed
      const gscDisplay = scan.hasGscFile ? '✅' : '❌';

      lines.push(`| ${idx + 1} | ${name} | ${date} | ${guides} | ${domain} | ${vercel} | ${ga4} | ${gscDisplay} | ${notes} |`);
    } else {
      // Site was removed from disk — keep the row but mark as unknown
      lines.push(`| ${idx + 1} | ${name} | ${date} | ❓ | ${domain} | ❓ | ❓ | ❓ | ${notes} (目录不存在) |`);
    }
  }

  // Check for new sites not in STATS
  const knownDirs = new Set(stickyRows.map(r => r.cells[4].replace('.vercel.app', '')));
  const newDirs = Object.keys(scannedSites).filter(d => !knownDirs.has(d));
  if (newDirs.length > 0) {
    let nextNum = stickyRows.length;
    for (const dir of newDirs) {
      nextNum++;
      const scan = scannedSites[dir];
      lines.push(`| ${nextNum} | 🆕 ${dir} | ❓ | ${scan.guideCount} | ${dir}.vercel.app | ${vercelEmoji(scan.hasVercel)} | ${ga4Emoji(scan.ga4Id)} | ${gscFileEmoji(scan.hasGscFile)} | ⚠️ 新站点，需手动补全信息 |`);
    }
  }

  return lines.join('\n');
}

function generateSOPTable(stickyRows, scannedSites) {
  const lines = [];

  lines.push('| # | 站点 | 上线日 | ①选品 | ②关键词 | ③初始化 | ④GA4 | ⑤部署 | ⑥GSC | ⑦Dashboard | ⑧本文档 |');
  lines.push('|---|------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|');

  for (const [idx, sticky] of stickyRows.entries()) {
    const cells = sticky.cells;
    // Figure out domain from name → dir mapping
    // SOP table doesn't have a domain column, need to match by name or row index
    const name = cells[1];
    const date = cells[2];
    const sel = cells[3];    // ①选品
    const kw = cells[4];     // ②关键词
    const init = cells[5];   // ③初始化
    const depl = cells[7];   // ⑤部署
    const dash = cells[9];   // ⑦Dashboard
    const doc = cells[10] || ''; // ⑧本文档

    // Try to find matching scanned site by inferring domain from name
    const dir = nameToDir(name);
    const scan = scannedSites[dir];

    if (scan) {
      const ga4 = ga4Emoji(scan.ga4Id);
      const gsc = scan.hasGscFile ? '✅' : '❌';
      lines.push(`| ${idx + 1} | ${name} | ${date} | ${sel} | ${kw} | ${init} | ${ga4} | ${depl} | ${gsc} | ${dash} | ${doc} |`);
    } else {
      lines.push(`| ${idx + 1} | ${name} | ${date} | ${sel} | ${kw} | ${init} | ❓ | ${depl} | ❓ | ${dash} | ${doc} |`);
    }
  }

  return lines.join('\n');
}

/**
 * Heuristic: convert Chinese/English site name to directory name.
 * Uses the pattern: name → simplified → match against scanned dirs.
 */
function nameToDir(name) {
  // Remove emoji and special chars, keep alphanumeric and Chinese
  const clean = name.replace(/[🆕⭐⚠️]/g, '').trim();

  // Known mappings (keep in sync when adding new sites)
  const KNOWN = {
    'Witchspire': 'witchspirewiki',
    'Mistfall Hunter': 'mistfallhunterwiki',
    'Aincrad': 'aincradwiki',
    'The Mound': 'themoundwiki',
    'SpiritVale': 'spiritvalewiki',
    'Skills & Raids': 'skillsandraidswiki',
    'MineGeon': 'minegeonwiki',
    'Sephiria': 'sephiriawiki',
    'DinoBlade': 'dinobladewiki',
    'Mystralia': 'mystraliawiki',
    'Tears of Metal': 'tearsofmetalwiki',
    'Grain Rot': 'grainrotwiki',
    'DragonSword': 'dragonswordwiki',
    'Dwarf Delve': 'dwarfdelvewiki',
    'Lunarium': 'lunariumwiki',
    'Taival': 'taivalwiki',
    "Vahrin's Call": 'vahrinscallwiki',
    'The Relic': 'relicfirstguardianwiki',
    'Graphite': 'graphitewiki',
    'Shift At Midnight': 'shiftatmidnightwiki',
    'Moonlight Peaks': 'moonlightpeakswiki',
    'Bonehold': 'boneholdwiki',
    'Phantom Tower': 'phantomtowerwiki',
    'Ardent Wilds': 'ardentwildswiki',
    'Go-Go Town!': 'gotownwiki',
    'Expeditions: Samurai': 'expeditionssamuraiwiki',
    'Delverium': 'delveriumwiki',
    'Low-Budget Repairs': 'lowbudgetrepairswiki',
    'Big Walk': 'bigwalkwiki',
    'Iron Nest': 'ironnestwiki',
    'Nivalis Nights': 'nivalisnightswiki',
    'ReStory: Chill Electronics Repairs': 'restorywiki',
    'ReStory': 'restorywiki',
    'Beast of Reincarnation': 'beastreincarnationwiki',
    'Waterpark Simulator': 'waterparksimulatorwiki',
  };

  if (KNOWN[clean]) return KNOWN[clean];

  // Fallback: lowercase, remove spaces and special chars, append 'wiki'
  const fallback = clean.toLowerCase().replace(/[^a-z0-9]/g, '') + 'wiki';
  return fallback;
}

function generateSummary(scannedSites, totalSites) {
  const entries = Object.values(scannedSites);
  const totalGuides = entries.reduce((sum, s) => sum + s.guideCount, 0);
  const ga4Ok = entries.filter(s => ga4Emoji(s.ga4Id) === '✅').length;
  const ga4Missing = totalSites - ga4Ok;
  const vercelOk = entries.filter(s => s.hasVercel).length;
  const gscFileOk = entries.filter(s => s.hasGscFile).length;

  // List GA4-missing sites
  const ga4MissingList = entries
    .filter(s => ga4Emoji(s.ga4Id) !== '✅')
    .map(s => {
      if (!s.ga4Id || s.ga4Id === '') return `${s.dir}（空）`;
      return `${s.dir}（${s.ga4Id}）`;
    })
    .join('、');

  const lines = [];
  lines.push('| 指标 | 数值 |');
  lines.push('|------|:--:|');
  lines.push(`| **总站点数** | ${totalSites} |`);
  lines.push(`| **总攻略数** | ${totalGuides} |`);
  lines.push(`| **Vercel 部署** | ${vercelOk}/${totalSites} ${vercelOk === totalSites ? '✅' : '❌'} |`);
  lines.push(`| **GA4 已配置** | ${ga4Ok}/${totalSites} |`);
  if (ga4Missing > 0) {
    lines.push(`| **GA4 真缺失** | ${ga4Missing}（${ga4MissingList}） |`);
  }
  lines.push(`| **GSC 文件部署** | ${gscFileOk}/${totalSites} ${gscFileOk === totalSites ? '✅' : '❌'}（账户级令牌，所有站共用同一文件） |`);

  return lines.join('\n');
}

// ─── Main logic ────────────────────────────────────────────────────────

function main() {
  // 1. Scan filesystem
  const allDirs = readdirSync(ROOT).filter(d => d.endsWith('wiki'));
  const scannedSites = {};
  for (const dir of allDirs) {
    scannedSites[dir] = scanSite(dir);
  }

  // 2. Read existing STATS
  const existingContent = readFileSync(STATS_FILE, 'utf-8');
  const lines = existingContent.split('\n');

  // 3. Define auto-sections and their generators
  const sections = [
    {
      marker: 'overview-table',
      generator: () => {
        // Parse the existing overview table from current STATS content
        const currentLines = readFileSync(STATS_FILE, 'utf-8').split('\n');
        const startIdx = currentLines.findIndex(l => l.includes('<!-- AUTO-START:overview-table -->'));
        const tableData = parseTable(currentLines, startIdx + 1);
        const stickyRows = tableData.rows;
        return generateOverviewTable(stickyRows, scannedSites);
      },
    },
    {
      marker: 'sop-table',
      generator: () => {
        const currentLines = readFileSync(STATS_FILE, 'utf-8').split('\n');
        const startIdx = currentLines.findIndex(l => l.includes('<!-- AUTO-START:sop-table -->'));
        const tableData = parseTable(currentLines, startIdx + 1);
        const stickyRows = tableData.rows;
        return generateSOPTable(stickyRows, scannedSites);
      },
    },
    {
      marker: 'summary',
      generator: () => generateSummary(scannedSites, allDirs.length),
    },
  ];

  // 4. Generate new content for each section
  const replacements = [];
  for (const section of sections) {
    const startTag = `<!-- AUTO-START:${section.marker} -->`;
    const endTag = `<!-- AUTO-END:${section.marker} -->`;

    const startIdx = lines.findIndex(l => l.includes(startTag));
    const endIdx = lines.findIndex(l => l.includes(endTag));

    if (startIdx === -1 || endIdx === -1) {
      console.error(`⚠️  Marker not found: ${startTag} / ${endTag}`);
      continue;
    }

    const newContent = section.generator();
    replacements.push({ startIdx, endIdx, newContent, startTag, endTag });
  }

  // 5. Build new file content
  const newLines = [];
  let lastIdx = 0;
  for (const r of replacements) {
    // Keep everything before the start marker
    newLines.push(...lines.slice(lastIdx, r.startIdx + 1));
    // Insert new content
    newLines.push(r.newContent);
    // Skip to after end marker
    lastIdx = r.endIdx;
  }
  // Keep everything after the last replacement
  newLines.push(...lines.slice(lastIdx));

  const newFileContent = newLines.join('\n');

  // 6. Print or check or write
  if (PRINT_MODE) {
    console.log(newFileContent);
    return;
  }

  if (CHECK_MODE) {
    if (newFileContent === existingContent) {
      console.log('✅ STATS is up-to-date with filesystem.');
      process.exit(0);
    } else {
      console.log('❌ STATS is stale! Run: node scripts/update-stats.mjs');
      // Show diff
      try {
        const tmpFile = STATS_FILE + '.tmp';
        writeFileSync(tmpFile, newFileContent);
        execSync(`diff -u "${STATS_FILE}" "${tmpFile}"`, { encoding: 'utf-8', stdio: 'inherit' });
        // Cleanup
        const { unlinkSync } = require('fs');
        unlinkSync(tmpFile);
      } catch (e) {
        // diff exits 1 when files differ — that's expected
        if (e.stdout) console.log(e.stdout);
      }
      process.exit(1);
    }
  }

  // Write mode
  if (newFileContent !== existingContent) {
    writeFileSync(STATS_FILE, newFileContent);
    const totalGuides = Object.values(scannedSites).reduce((sum, s) => sum + s.guideCount, 0);
    console.log(`✅ STATS updated: ${allDirs.length} sites, ${totalGuides} guides`);
  } else {
    console.log('✅ STATS already up-to-date.');
  }
}

main();
