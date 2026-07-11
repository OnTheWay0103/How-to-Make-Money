#!/usr/bin/env node
/**
 * Lightweight Google Suggest Harvester
 * Uses Node.js built-in https — no dependencies.
 */

import https from 'https';
import fs from 'fs';

const PREFIXES = [
  '', 'how to ', 'best ', 'guide ', 'tips ', 'beginner ',
  'weapons ', 'build ', 'solo ', 'co op ', 'tier list ',
];

const GAMES = [
  { name: 'Witchspire', query: 'witchspire' },
  { name: 'Mistfall Hunter', query: 'mistfall hunter' },
  { name: 'Echoes of Aincrad', query: 'echoes of aincrad' },
  { name: 'The Mound Omen of Cthulhu', query: 'the mound omen of cthulhu' },
];

function suggest(query) {
  return new Promise((resolve) => {
    const url = `/complete/search?client=chrome&q=${encodeURIComponent(query)}`;
    const req = https.get({
      hostname: 'suggestqueries.google.com',
      path: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 8000,
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed[1] || []);
        } catch {
          resolve([]);
        }
      });
    });
    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

function classify(keywords) {
  const cats = {};
  const classified = new Set();
  const rules = [
    ['How-to / Guide', /how to|guide|walkthrough|tutorial/i],
    ['Best / Top / Tier', /best|top|tier|ranking|strongest/i],
    ['Weapons / Gear', /weapon|gear|equipment|gun|sword|armor/i],
    ['Build / Class', /build|class|coven|character/i],
    ['Beginner / Tips', /beginner|tips|tricks|start/i],
    ['Solo / Co-op', /solo|co.op|coop|multiplayer/i],
    ['Boss / Enemy', /boss|enemy|monster|creature/i],
    ['Location / Map', /map|location|region|area|where/i],
    ['Crafting / Resources', /craft|resource|material|farm|recipe/i],
    ['Review / Worth', /review|worth|price|buy|release/i],
  ];
  for (const [cat, regex] of rules) {
    const matched = keywords.filter(k => !classified.has(k) && regex.test(k));
    if (matched.length) { cats[cat] = matched; matched.forEach(k => classified.add(k)); }
  }
  const other = keywords.filter(k => !classified.has(k));
  if (other.length) cats['Other'] = other;
  return cats;
}

async function main() {
  const dir = './keyword-results';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const game of GAMES) {
    console.log(`\n🎮 ${game.name}`);
    const all = new Set();
    for (const prefix of PREFIXES) {
      const q = prefix + game.query;
      const results = await suggest(q);
      results.forEach(k => all.add(k));
      process.stdout.write(results.length ? '.' : 'x');
      await new Promise(r => setTimeout(r, 300));
    }

    const sorted = [...all].sort();
    const cats = classify(sorted);
    const lines = [`# ${game.name} — Google Suggest Keywords`, `> ${sorted.length} unique keywords`, ''];
    for (const [cat, kws] of Object.entries(cats)) {
      lines.push(`## ${cat} (${kws.length})`);
      kws.forEach(k => lines.push(`- ${k}`));
      lines.push('');
    }
    const f = `${dir}/${game.name.replace(/[:\/]/g, '-')}.md`;
    fs.writeFileSync(f, lines.join('\n'));
    console.log(` ✅ ${sorted.length} keywords → ${f}`);
  }
  console.log('\n✨ Done!');
}

main();
