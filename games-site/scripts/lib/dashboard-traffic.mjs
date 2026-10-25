#!/usr/bin/env node
/**
 * 读 dashboard 的 `/api/traffic`，拿全站 30 天 GA4 流量。
 *
 * 为什么不直接调 GA4：服务账号私钥只在 Vercel 环境变量里，本地
 * `dashboard/.env.ga4` 的 `GA_CLIENT_EMAIL` 是空串（Vercel CLI 对敏感变量
 * 只写空值）。dashboard 里已经有现成的聚合逻辑，读它的 JSON 接口就不需要
 * 在本地保存任何 GA 凭证。
 *
 * 本机 DNS 会把 `*.vercel.app` 污染到错误 IP，所以先用 `dig @1.1.1.1`
 * 拿真 IP，再 `curl --resolve` 锁定这个 IP 请求。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

export const DASHBOARD_HOST =
  process.env.DASHBOARD_HOST || 'dashboard-pied-six-31.vercel.app';

const ROOT = path.resolve(import.meta.dirname, '..', '..');

/** 绕过本机 DNS 污染，拿一个可用的 IPv4。 */
export function resolveIp(host) {
  const out = execFileSync('dig', ['@1.1.1.1', '+short', host], {
    encoding: 'utf8',
    timeout: 15_000,
  }).trim();
  const ips = out
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s));
  if (ips.length === 0) {
    throw new Error(`DNS 解析失败：${host}（dig 返回 ${JSON.stringify(out)}）`);
  }
  return ips[ips.length - 1];
}

/** 返回 `{ sites: [{ site, totals, dailyTrend, topPages }], totals }`。 */
export function fetchTraffic(host = DASHBOARD_HOST) {
  const ip = resolveIp(host);
  const url = `https://${host}/api/traffic`;

  let raw;
  try {
    raw = execFileSync(
      'curl',
      ['-sS', '--resolve', `${host}:443:${ip}`, '--max-time', '180', url],
      { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
    );
  } catch (err) {
    throw new Error(`请求 ${url} 失败：${err.message}`);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error(`${url} 返回的不是 JSON（前 200 字符）：${raw.slice(0, 200)}`);
  }
  if (data.error) throw new Error(`dashboard 报错：${data.error}`);
  if (!Array.isArray(data.sites)) throw new Error(`${url} 缺少 sites 数组`);

  return { ...data, host, ip, fetchedAt: new Date().toISOString() };
}

/**
 * 站点目录 → GA4 measurement ID（扫每站的 `lib/seo-config.ts`）。
 * traffic 接口只给 `site.gaId`，靠这张表落到目录名。
 */
export function gaIdByDir(root = ROOT) {
  const map = new Map();
  for (const dir of fs.readdirSync(root)) {
    const cfgPath = path.join(root, dir, 'lib', 'seo-config.ts');
    if (!dir.endsWith('wiki') || !fs.existsSync(cfgPath)) continue;
    const cfg = fs.readFileSync(cfgPath, 'utf8');
    const ga = (cfg.match(/googleAnalyticsId:\s*['"](G-[A-Z0-9]+)['"]/) || [])[1];
    if (ga) map.set(dir, ga);
  }
  return map;
}

/** 把 traffic 结果整理成 `Map<站点目录, {pv, change, users, sessions, name}>`。 */
export function trafficByDir(traffic, root = ROOT) {
  const byGa = new Map(traffic.sites.map((s) => [s.site.gaId, s]));
  const out = new Map();
  const unmatched = [];

  for (const [dir, ga] of gaIdByDir(root)) {
    const hit = byGa.get(ga);
    if (!hit) {
      unmatched.push({ dir, ga });
      continue;
    }
    out.set(dir, {
      name: hit.site.name,
      gaId: ga,
      createdAt: hit.site.createdAt ?? null,
      pv: hit.totals?.pageViews ?? 0,
      change: hit.totals?.pageViewsChange ?? null,
      users: hit.totals?.users ?? 0,
      sessions: hit.totals?.sessions ?? 0,
    });
  }

  return { byDir: out, unmatched };
}
