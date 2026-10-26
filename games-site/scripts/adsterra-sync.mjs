#!/usr/bin/env node
/**
 * adsterra-sync.mjs — read Adsterra placements and inject the snippets into the
 * matching wiki sites.
 *
 * Data source (first match wins):
 *   default          飞书多维表格「广告位管理」（唯一数据源）
 *   --csv <path>     local placements.csv (offline / testing)
 *   --feishu <url>   legacy 在线表 sheet (one-off migration only)
 *
 * Usage:
 *   node scripts/adsterra-sync.mjs                     # dry-run report
 *   node scripts/adsterra-sync.mjs --print             # dry-run + show patched files
 *   node scripts/adsterra-sync.mjs --apply             # write files
 *   node scripts/adsterra-sync.mjs --apply --build     # write + pnpm build
 *   node scripts/adsterra-sync.mjs --apply --build --deploy
 *
 * Options:
 *   --root <dir>      read sites from <dir> instead of the repo root (testing)
 *   --base <token>    Bitable base token (default: 游戏站交付看板)
 *   --table <id|name> Bitable table (default: tblPlFjSok72tnA1 广告位管理)
 *   --csv <path>      read placements from <path> instead of the Bitable
 *   --feishu <url>    read placements from a legacy Feishu sheet (needs lark-cli)
 *   --feishu-sheet <name>  sub-sheet name (default: first visible sheet)
 *   --site <name>     only process one site directory
 *   --no-writeback    do not update 同步状态 / 状态 in the Bitable
 *
 * Write-back (Bitable source only):
 *   --apply    注入成功 → 同步状态 = 已同步
 *   --deploy   部署成功 → 状态 = 已上线
 *
 * --deploy 不跑本地 build（wiki 站日常不留 node_modules，构建在 Vercel 上做）；
 * 要本地先构建过一遍门禁，显式加 --build。
 * --deploy 还会补部署「已注入但未上线」的站（同步状态=已同步 且 状态≠已上线），
 * 这样上一轮注入成功、部署失败不会因为「代码没变化」而永远卡住。
 *
 * Columns (Bitable field names, CSV headers may use the English names):
 *   站点目录,域名,广告位类型,广告格式,广告位名称,广告位ID,状态,广告代码,备注
 *
 * slot:
 *   global -> app/layout.tsx, before </body>
 *   guide  -> components/GuideLayout.tsx, before {/* Verification *\/}
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync, execFileSync } from 'child_process';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const APPLY = flag('--apply');
const PRINT = flag('--print');
const BUILD = flag('--build');
const DEPLOY = flag('--deploy');
const WRITEBACK = !flag('--no-writeback');
const SITES_ROOT = path.resolve(opt('--root', REPO));
const ONLY_SITE = opt('--site', null);
const FEISHU_URL = opt('--feishu', null);
const FEISHU_SHEET = opt('--feishu-sheet', null);
const CSV_ARG = opt('--csv', null);

/** 游戏站交付看板 → 广告位管理（唯一数据源）。 */
const BASE_TOKEN = opt('--base', 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg');
const TABLE = opt('--table', 'tblPlFjSok72tnA1');

const CSV_PATH = path.resolve(CSV_ARG ?? path.join(REPO, 'adsterra', 'placements.csv'));
const TEMPLATE_PATH = path.join(REPO, 'adsterra', 'templates', 'AdsterraSlot.tsx');

/* ─── CSV parser (RFC 4180, multiline cells supported) ────────────── */

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c !== '\r') {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => v.trim() !== ''));
}

function loadRows() {
  if (!fs.existsSync(CSV_PATH)) {
    throw new Error(`missing ${path.relative(REPO, CSV_PATH)}`);
  }
  return rowsFromCsv(fs.readFileSync(CSV_PATH, 'utf8'));
}

/** Both placements.csv and the Feishu sheet may use Chinese or English headers. */
const HEADER_ALIASES = {
  site_dir: ['site_dir', 'site dir', '站点目录', '站点', '目录'],
  domain: ['domain', '域名'],
  slot: ['slot', '广告位类型', '广告位', '位置', '槽位'],
  format: ['format', '广告格式', '格式'],
  placement_name: ['placement_name', 'placement name', '广告位名称', '名称'],
  placement_id: ['placement_id', 'placement id', '广告位id', '广告位编号', 'id'],
  status: ['status', '状态'],
  sync_status: ['sync_status', '同步状态'],
  code: ['code', '广告代码', '广告代码（完整）', '代码'],
  notes: ['notes', '备注'],
};

function canonicalHeader(raw) {
  const key = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  for (const [canon, aliases] of Object.entries(HEADER_ALIASES)) {
    if (aliases.some((alias) => alias.toLowerCase() === key)) return canon;
  }
  return key;
}

function rowsFromCsv(text) {
  const [header, ...body] = parseCsv(text);
  if (!header) {
    throw new Error(
      '表格是空的，第一行必须是表头：站点目录,域名,广告位类型,广告格式,广告位名称,广告位ID,状态,广告代码,备注',
    );
  }
  const cols = header.map(canonicalHeader);
  const required = ['site_dir', 'slot', 'status', 'code'];
  for (const col of required) {
    if (!cols.includes(col)) {
      throw new Error(
        `表格缺少列：${col}\n当前表头：${cols.join(', ')}\n` +
          '第一行请填：站点目录,域名,广告位类型,广告格式,广告位名称,广告位ID,状态,广告代码,备注',
      );
    }
  }
  return body.map((values, index) => {
    const row = {};
    cols.forEach((col, i) => (row[col] = (values[i] ?? '').trim()));
    row.__line = index + 2;
    return row;
  });
}

/* ─── Feishu sheet source (via lark-cli) ──────────────────────────── */

function lark(args) {
  const out = execFileSync('lark-cli', args, {
    encoding: 'utf8',
    env: {
      ...process.env,
      LARKSUITE_CLI_NO_UPDATE_NOTIFIER: '1',
      LARKSUITE_CLI_NO_SKILLS_NOTIFIER: '1',
    },
  });
  const envelope = JSON.parse(out);
  if (!envelope.ok) {
    throw new Error(envelope.error?.message || JSON.stringify(envelope));
  }
  return envelope.data;
}

function columnLetter(n) {
  let s = '';
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function loadFromFeishu(url, sheetName) {
  const info = lark(['sheets', '+workbook-info', '--url', url, '--format', 'json']);
  const sheet = sheetName
    ? info.sheets.find((s) => s.sheet_name === sheetName)
    : info.sheets.find((s) => !s.is_hidden);
  if (!sheet) {
    throw new Error(
      `找不到子表「${sheetName ?? '默认'}」，现有：${info.sheets.map((s) => s.sheet_name).join(', ')}`,
    );
  }
  const range = `A1:${columnLetter(Math.min(sheet.column_count || 20, 26))}${Math.max(
    sheet.row_count || 200,
    20,
  )}`;
  const data = lark([
    'sheets',
    '+csv-get',
    '--url',
    url,
    '--sheet-id',
    sheet.sheet_id,
    '--range',
    range,
    '--format',
    'json',
  ]);
  const csv = data.csv ?? data.annotated_csv ?? '';
  // annotated_csv prefixes each line with [row=N]; strip it before parsing.
  return csv.replace(/^\[row=\d+\] ?/gm, '');
}

/* ─── Bitable source (via lark-cli) — default, the single source of truth ── */

/** Bitable cell values: select → array, text → string|null, link → object[]. */
function cellText(value) {
  // 飞书把文本里的 URL 当富文本链接返回 `[https://x](https://x)`；不拆开会把 src 写坏。
  const unlink = (s) =>
    typeof s === 'string' ? s.replace(/\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g, '$1') : s;
  if (Array.isArray(value)) {
    return value
      .map((v) => (v && typeof v === 'object' ? v.text ?? v.name ?? '' : String(v ?? '')))
      .map(unlink)
      .join(', ');
  }
  if (value && typeof value === 'object') return unlink(value.text ?? value.name ?? JSON.stringify(value));
  return value == null ? '' : unlink(String(value));
}

function loadFromBitable(baseToken, table) {
  const rows = [];
  let cols = null;
  let offset = 0;

  for (;;) {
    const data = lark([
      'base',
      '+record-list',
      '--base-token',
      baseToken,
      '--table-id',
      table,
      '--format',
      'json',
      '--limit',
      '200',
      '--offset',
      String(offset),
    ]);
    const fields = data.fields ?? [];
    cols ??= fields.map(canonicalHeader);

    data.data.forEach((cells, i) => {
      const row = {};
      fields.forEach((field, c) => (row[cols[c]] = cellText(cells[c]).trim()));
      // 记录 ID 用于回写同步状态；CSV / 在线表来源没有这个字段。
      row.__record = data.record_id_list?.[i];
      row.__line = rows.length + 2;
      rows.push(row);
    });

    if (!data.has_more || data.data.length === 0) break;
    offset += data.data.length;
  }

  if (!cols || rows.length === 0) {
    throw new Error(
      `多维表格 ${table} 是空的，或读不到记录（表头应含：站点目录,域名,广告位类型,广告格式,广告位名称,广告位ID,状态,广告代码,备注）`,
    );
  }
  for (const col of ['site_dir', 'slot', 'status', 'code']) {
    if (!cols.includes(col)) {
      throw new Error(`多维表格缺少字段：${col}\n当前字段：${cols.join(', ')}`);
    }
  }
  return rows;
}

/* ─── Write-back to the Bitable ───────────────────────────────────── */

/** Mark injected placements 已同步 (and, after deploy, 已上线). */
function writeBack(records, patch, label) {
  const list = [...records].filter((r) => r.__record);
  if (!WRITEBACK || list.length === 0) return;

  for (let i = 0; i < list.length; i += 200) {
    const chunk = Object.fromEntries(
      list.slice(i, i + 200).map((r) => [r.__record, patch]),
    );
    try {
      lark([
        'base',
        '+record-batch-update',
        '--base-token',
        BASE_TOKEN,
        '--table-id',
        TABLE,
        '--json',
        JSON.stringify({ update_records: chunk }),
      ]);
    } catch (err) {
      // 回写失败不影响已经写入站点的代码，只提示人工补一下。
      console.warn(`回写多维表格失败（代码已写入，不影响构建）：${err.message}`);
      return;
    }
  }
  console.log(`回写多维表格：${list.length} 条 → ${label}`);
}

/* ─── Patch helpers ───────────────────────────────────────────────── */

const IMPORT_SLOT = "import AdsterraSlot from '@/components/AdsterraSlot';";
const IMPORT_ZONES = "import { ADSTERRA_ZONES } from '@/lib/adsterra-zones';";

const SLOT_MARKERS = {
  global: {
    start: '{/* ADSTERRA:GLOBAL:START */}',
    end: '{/* ADSTERRA:GLOBAL:END */}',
    anchor: '</body>',
  },
  guide: {
    start: '{/* ADSTERRA:GUIDE:START */}',
    end: '{/* ADSTERRA:GUIDE:END */}',
    anchor: '{/* Verification */}',
  },
  home: {
    start: '{/* ADSTERRA:HOME:START */}',
    end: '{/* ADSTERRA:HOME:END */}',
    anchor: '<Footer />',
  },
};

function blockFor(slot, indent) {
  // 首页复用 guide 广告位：layout 里按 pathname === '/' 才渲染，其他路由返回 null。
  if (slot === 'home') {
    return [
      `${indent}{/* ADSTERRA:HOME:START */}`,
      `${indent}<div className="max-w-3xl mx-auto px-4 pb-12">`,
      `${indent}  {ADSTERRA_ZONES.guide.map((zone) => (`,
      `${indent}    <AdsterraSlot key={\`home-\${zone.name}\`} variant="home" html={zone.html} />`,
      `${indent}  ))}`,
      `${indent}</div>`,
      `${indent}{/* ADSTERRA:HOME:END */}`,
    ].join('\n');
  }
  const variant = slot === 'global' ? ' variant="global"' : '';
  return [
    `${indent}${SLOT_MARKERS[slot].start}`,
    `${indent}{ADSTERRA_ZONES.${slot}.map((zone) => (`,
    `${indent}  <AdsterraSlot key={zone.name}${variant} html={zone.html} />`,
    `${indent}))}`,
    `${indent}${SLOT_MARKERS[slot].end}`,
  ].join('\n');
}

function indentAt(src, index) {
  const lineStart = src.lastIndexOf('\n', index) + 1;
  return src.slice(lineStart, index);
}

function applySlotBlock(src, slot, hasZones, anchorOverride) {
  const { start, end, anchor } = SLOT_MARKERS[slot];
  const startIndex = src.indexOf(start);

  if (startIndex !== -1) {
    const endIndex = src.indexOf(end, startIndex);
    if (endIndex === -1) throw new Error(`unclosed marker ${start}`);
    const indent = indentAt(src, startIndex);
    const block = hasZones ? blockFor(slot, indent) : '';
    let after = endIndex + end.length;
    if (!hasZones && src[after] === '\n') after++;
    return src.slice(0, src.lastIndexOf('\n', startIndex) + 1) + block + src.slice(after);
  }

  if (!hasZones) return src;

  const anchorText = anchorOverride ?? anchor;
  const anchorIndex = src.indexOf(anchorText);
  if (anchorIndex === -1) return null;

  // A closing tag's children sit one level deeper than the tag itself.
  const baseIndent = indentAt(src, anchorIndex);
  const indent = anchorText.startsWith('</') ? `${baseIndent}  ` : baseIndent;
  const block = blockFor(slot, indent);
  const lineStart = src.lastIndexOf('\n', anchorIndex) + 1;
  return src.slice(0, lineStart) + block + '\n' + src.slice(lineStart);
}

function insertImport(src, line) {
  if (src.includes(line)) return src;
  const lines = src.split('\n');
  let last = -1;
  lines.forEach((l, i) => {
    if (/^import\b/.test(l.trim())) last = i;
  });
  if (last === -1) return `${line}\n${src}`;
  lines.splice(last + 1, 0, line);
  return lines.join('\n');
}

function removeImport(src, line) {
  return src
    .split('\n')
    .filter((l) => l.trim() !== line)
    .join('\n');
}

function syncImports(src, needsSlot, needsZones) {
  let out = src;
  out = needsSlot ? insertImport(out, IMPORT_SLOT) : removeImport(out, IMPORT_SLOT);
  out = needsZones ? insertImport(out, IMPORT_ZONES) : removeImport(out, IMPORT_ZONES);
  return out;
}

/* ─── Generated files ─────────────────────────────────────────────── */

function zonesSource(zones) {
  const fmt = (list) =>
    list.length === 0
      ? '[]'
      : `[\n${list
          .map(
            (z) =>
              `    { name: ${JSON.stringify(z.name)}, html: ${JSON.stringify(
                z.code,
              )} },`,
          )
          .join('\n')}\n  ]`;
  return `// AUTO-GENERATED by scripts/adsterra-sync.mjs — do not edit by hand.\nexport const ADSTERRA_ZONES = {\n  global: ${fmt(
    zones.global,
  )},\n  guide: ${fmt(zones.guide)},\n} as const;\n`;
}

/* ─── Main ────────────────────────────────────────────────────────── */

let rows;
let SOURCE;
try {
  if (FEISHU_URL) {
    SOURCE = '飞书在线表（旧）';
    rows = rowsFromCsv(loadFromFeishu(FEISHU_URL, FEISHU_SHEET));
  } else if (CSV_ARG) {
    SOURCE = path.relative(REPO, CSV_PATH);
    rows = loadRows();
  } else {
    SOURCE = `多维表格 ${TABLE}`;
    rows = loadFromBitable(BASE_TOKEN, TABLE);
  }
} catch (err) {
  console.error(`读取广告位表格失败：${err.message}`);
  process.exit(1);
}
console.log(`数据源：${SOURCE}（${rows.length} 行）\n`);

const bySite = new Map();
const skipped = [];
const siteRows = new Map(); // site_dir -> rows feeding this site's injection

/**
 * Statuses that mean "already integrated by hand — never auto-inject".
 * Everything else with a non-empty code is treated as injectable, so a
 * human can paste the code and leave the status at pending.
 */
const MANUAL_STATUSES = new Set(['已接入', '已手工接入', 'manual']);

for (const row of rows) {
  const code = (row.code || '').trim();
  if (!code || MANUAL_STATUSES.has((row.status || '').trim())) {
    skipped.push(row);
    continue;
  }
  if (!['global', 'guide'].includes(row.slot)) {
    throw new Error(`line ${row.__line}: unknown slot "${row.slot}" (use global|guide)`);
  }
  if (ONLY_SITE && row.site_dir !== ONLY_SITE) continue;
  if (!bySite.has(row.site_dir)) bySite.set(row.site_dir, { global: [], guide: [] });
  bySite.get(row.site_dir)[row.slot].push({
    name: row.placement_name || `placement-${row.placement_id || row.__line}`,
    code: row.code,
    domain: row.domain,
    format: row.format,
  });
  if (!siteRows.has(row.site_dir)) siteRows.set(row.site_dir, []);
  siteRows.get(row.site_dir).push(row);
}

if (skipped.length > 0) {
  const byStatus = skipped.reduce((acc, row) => {
    const key = row.status || '(空)';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  console.log(
    `跳过 ${skipped.length} 行（没有代码，或标记为已手工接入）：${Object.entries(byStatus)
      .map(([k, v]) => `${k || '(空)'} × ${v}`)
      .join('，')}`,
  );
  for (const row of skipped.slice(0, 10)) {
    console.log(`  - ${row.site_dir} / ${row.slot} / ${row.status || 'no-status'}`);
  }
  if (skipped.length > 10) console.log(`  … 其余 ${skipped.length - 10} 行省略`);
  console.log('');
}

if (bySite.size === 0) {
  console.log('没有可注入的行（广告代码为空，或标记为已手工接入）。');
  process.exit(0);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
const changes = [];
const failures = [];

/**
 * 补部署名单：代码**已经注入**（同步状态 = 已同步）但**还没上线**（状态 ≠ 已上线）的站。
 * 上一轮注入成功、部署失败就卡在这个状态；再跑一次不能因为「代码没变化」就永远不部署。
 */
const pendingDeploy = [];
if (DEPLOY) {
  for (const [siteDir, siteRowList] of siteRows) {
    if (ONLY_SITE && siteDir !== ONLY_SITE) continue;
    if (!fs.existsSync(path.join(SITES_ROOT, siteDir, 'app', 'layout.tsx'))) continue;
    const live = siteRowList.filter(
      (r) => (r.code || '').trim() && !MANUAL_STATUSES.has((r.status || '').trim()),
    );
    if (!live.length) continue;
    const allSynced = live.every((r) => (r.sync_status || '').trim() === '已同步');
    const allOnline = live.every((r) => (r.status || '').trim() === '已上线');
    if (allSynced && !allOnline) pendingDeploy.push(siteDir);
  }
  if (pendingDeploy.length) {
    console.log(`补部署（已注入但未上线）：${pendingDeploy.join(', ')}`);
  }
}

for (const [siteDir, zones] of bySite) {
  const sitePath = path.join(SITES_ROOT, siteDir);
  if (!fs.existsSync(path.join(sitePath, 'app', 'layout.tsx'))) {
    failures.push(`${siteDir}: 目录不存在或不是 Next.js 站点`);
    continue;
  }

  const files = [];
  const zonesFile = path.join(sitePath, 'lib', 'adsterra-zones.ts');
  const slotFile = path.join(sitePath, 'components', 'AdsterraSlot.tsx');
  const layoutFile = path.join(sitePath, 'app', 'layout.tsx');
  const guideFile = path.join(sitePath, 'components', 'GuideLayout.tsx');

  // 1) generated zones config
  const zonesContent = zonesSource(zones);
  files.push({ file: zonesFile, next: zonesContent });

  // 2) generated slot component
  files.push({ file: slotFile, next: template });

  // 3) layout.tsx — global slot + 首页复用 guide 位
  let layout = fs.readFileSync(layoutFile, 'utf8');
  let nextLayout = applySlotBlock(layout, 'global', zones.global.length > 0);
  if (nextLayout === null) {
    failures.push(`${siteDir}: layout.tsx 找不到 </body>`);
    continue;
  }
  const nextWithHome = applySlotBlock(
    nextLayout,
    'home',
    zones.guide.length > 0,
  );
  if (nextWithHome === null) {
    failures.push(`${siteDir}: layout.tsx 找不到 <Footer />`);
    continue;
  }
  nextLayout = nextWithHome;
  const layoutNeedsAds = zones.global.length > 0 || zones.guide.length > 0;
  nextLayout = syncImports(nextLayout, layoutNeedsAds, layoutNeedsAds);
  files.push({ file: layoutFile, next: nextLayout });

  // 4) GuideLayout.tsx — guide slot only
  let guide = fs.readFileSync(guideFile, 'utf8');
  let nextGuide = applySlotBlock(
    guide,
    'guide',
    zones.guide.length > 0,
    '{/* Verification */}',
  );
  if (nextGuide === null) {
    nextGuide = applySlotBlock(guide, 'guide', zones.guide.length > 0, '</article>');
  }
  if (nextGuide === null) {
    failures.push(`${siteDir}: GuideLayout.tsx 找不到注入锚点`);
    continue;
  }
  nextGuide = syncImports(
    nextGuide,
    zones.guide.length > 0,
    zones.guide.length > 0,
  );
  files.push({ file: guideFile, next: nextGuide });

  const changed = files.filter(({ file, next }) => {
    const prev = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    return prev !== next;
  });

  if (changed.length === 0) {
    console.log(`= ${siteDir}: 无变化 (global ${zones.global.length}, guide ${zones.guide.length})`);
    continue;
  }

  console.log(
    `+ ${siteDir}: global ${zones.global.length}, guide ${zones.guide.length} → ${changed
      .map((c) => path.relative(sitePath, c.file))
      .join(', ')}`,
  );

  if (PRINT) {
    for (const { file, next } of changed) {
      console.log(`\n--- ${path.relative(SITES_ROOT, file)} ---`);
      console.log(next);
    }
  }

  if (APPLY) {
    for (const { file, next } of changed) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, next);
    }
  }
  changes.push(siteDir);
}

console.log('');
if (failures.length > 0) {
  console.error('失败：');
  for (const f of failures) console.error(`  - ${f}`);
}

if (!APPLY) {
  console.log(`dry-run：${changes.length} 个站点会变更。加 --apply 写入。`);
  process.exit(failures.length > 0 ? 1 : 0);
}

// 注入成功 → 多维表格回写同步状态
if (changes.length > 0) {
  writeBack(
    changes.flatMap((siteDir) => siteRows.get(siteDir) ?? []),
    { 同步状态: '已同步' },
    '同步状态 = 已同步',
  );
}

const deployed = [];

if (BUILD || DEPLOY) {
  const targets = [...new Set([...changes, ...pendingDeploy])];
  for (const siteDir of targets) {
    const sitePath = path.join(SITES_ROOT, siteDir);
    // 本地 build 是可选门禁（默认不跑）：wiki 站日常不留 node_modules，
    // 真正的构建在 Vercel 上做，deploy-wiki-site.sh 也会先跑 lint。
    if (BUILD) {
      console.log(`\n▶ ${siteDir}: pnpm install && pnpm build`);
      const install = spawnSync('pnpm', ['install', '--prefer-offline'], {
        cwd: sitePath,
        stdio: 'inherit',
      });
      if (install.status !== 0) {
        failures.push(`${siteDir}: pnpm install failed`);
        continue;
      }
      const build = spawnSync('pnpm', ['build'], { cwd: sitePath, stdio: 'inherit' });
      if (build.status !== 0) {
        failures.push(`${siteDir}: build failed`);
        continue;
      }
    }
    if (DEPLOY) {
      console.log(`\n▶ ${siteDir}: deploy`);
      const deploy = spawnSync('./deploy-wiki-site.sh', [siteDir], {
        cwd: REPO,
        stdio: 'inherit',
      });
      if (deploy.status !== 0) {
        failures.push(`${siteDir}: deploy failed`);
        continue;
      }
      deployed.push(siteDir);
    }
  }
}

// 部署成功 → 多维表格回写状态
if (deployed.length > 0) {
  writeBack(
    deployed.flatMap((siteDir) => siteRows.get(siteDir) ?? []),
    { 状态: '已上线' },
    '状态 = 已上线',
  );
}

if (failures.length > 0) {
  console.error('\n有失败项，见上方。');
  process.exit(1);
}
console.log(`\n完成：${changes.length} 个站点已更新${BUILD ? ' 并构建' : ''}${DEPLOY ? ' 并部署' : ''}。`);
