#!/usr/bin/env node
/**
 * Google Suggest Keyword Harvester
 *
 * 用法: node harvest-keywords.mjs
 * 输出: 每个游戏一个 .md 文件到 ./keyword-results/ 目录
 *
 * 原理: 调用 Google Suggest API，用多种前缀轮询，
 *       收集所有自动补全结果 = 真实用户在搜的词。
 */

const PREFIXES = [
  '', 'how to ', 'best ', 'guide ', 'tips ', 'beginner ',
  'weapons ', 'build ', 'solo ', 'co op ', 'all ',
  'tier list ', 'how to get ', 'is ', 'vs ',
];

const GAMES = [
  { name: 'Witchspire', query: 'witchspire' },
  { name: 'Mistfall Hunter', query: 'mistfall hunter' },
  { name: 'Echoes of Aincrad', query: 'echoes of aincrad' },
  { name: 'The Mound: Omen of Cthulhu', query: 'the mound omen of cthulhu' },
];

async function suggest(query) {
  const url = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data[1] || [];
  } catch (e) {
    return [];
  }
}

async function main() {
  const fs = await import('fs');
  const dir = './keyword-results';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const game of GAMES) {
    console.log(`\n🎮 Harvesting: ${game.name}`);
    const allKeywords = new Set();

    for (const prefix of PREFIXES) {
      const query = prefix + game.query;
      const results = await suggest(query);
      for (const kw of results) {
        allKeywords.add(kw);
      }
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 200));
      process.stdout.write('.');
    }

    // Generate markdown
    const sorted = [...allKeywords].sort();
    const lines = [
      `# ${game.name} — Google Suggest Keywords`,
      `> Harvested: ${new Date().toISOString().split('T')[0]}`,
      `> Total unique keywords: ${sorted.length}`,
      '',
      '## All Keywords',
      '',
      ...sorted.map(k => `- ${k}`),
      '',
      '---',
      '',
      '## By Category (auto-classified)',
      '',
    ];

    // Auto-classify
    const cats = {
      'How-to / Guide': k => /how to|guide|walkthrough|tutorial/i.test(k),
      'Best / Top / Tier': k => /best|top|tier|ranking|strongest/i.test(k),
      'Weapons / Gear': k => /weapon|gear|equipment|gun|sword|armor/i.test(k),
      'Build / Class': k => /build|class|coven|loadout/i.test(k),
      'Beginner / Tips': k => /beginner|tips|tricks|start|new player/i.test(k),
      'Solo / Co-op': k => /solo|co op|coop|multiplayer|single player/i.test(k),
      'Boss / Enemy': k => /boss|enemy|monster|creature/i.test(k),
      'Location / Map': k => /map|location|region|area|where|find/i.test(k),
      'Review / Worth': k => /review|worth|price|buy|release/i.test(k),
      'Other': () => true,
    };

    for (const [catName, testFn] of Object.entries(cats)) {
      const matched = sorted.filter(testFn);
      if (matched.length > 0) {
        lines.push(`### ${catName} (${matched.length})`);
        matched.forEach(k => lines.push(`- ${k}`));
        lines.push('');
        // Remove from sorted so they don't appear in multiple cats
        matched.forEach(k => { const i = sorted.indexOf(k); if (i > -1) sorted.splice(i, 1); });
      }
    }

    const filename = `${dir}/${game.name.replace(/[:\/]/g, '-')}.md`;
    fs.writeFileSync(filename, lines.join('\n'));
    console.log(`\n✅ ${filename} — ${allKeywords.size} keywords`);
  }

  console.log('\n✨ Done! Check ./keyword-results/');
}

main().catch(console.error);
