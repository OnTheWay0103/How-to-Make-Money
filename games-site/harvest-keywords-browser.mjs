#!/usr/bin/env node
/**
 * Google Keyword Harvester — Browser Automation 版
 *
 * 原理: 用 Puppeteer 打开无头 Chrome，模拟用户在 Google 搜索框输入关键词，
 *       抓取三样东西：
 *         1. 搜索框自动补全下拉词（Google Suggest）
 *         2. 搜索结果页的 "People also ask" 问题
 *         3. 搜索结果页底部的 "Related searches"
 *
 * 安装: npm install puppeteer
 * 用法: node harvest-keywords-browser.mjs
 * 输出: ./keyword-results/ 目录下每个游戏一个 .md 文档
 *
 * Google Suggest API 是免费的，不收费。
 */

import puppeteer from 'puppeteer';
import fs from 'fs';

/* ══════════════════════════════════════════════════════════════
   配置：修改这里来调整要抓取的游戏和搜索前缀
   ══════════════════════════════════════════════════════════════ */

const PREFIXES = [
  '',           // 纯游戏名，看用户最常搜什么
  'how to ',    // how-to 类攻略
  'best ',      // 最强/最佳类
  'guide ',     // 攻略指南类
  'tips ',      // 技巧类
  'beginner ',  // 新手类
  'weapons ',   // 武器类
  'build ',     // Build/配装类
  'solo ',      // 单人玩法
  'co op ',     // 合作玩法
  'tier list ', // 强度排行
];

const GAMES = [
  { name: 'Witchspire', query: 'witchspire' },
  { name: 'Mistfall Hunter', query: 'mistfall hunter' },
  { name: 'Echoes of Aincrad', query: 'echoes of aincrad' },
  { name: 'The Mound Omen of Cthulhu', query: 'the mound omen of cthulhu' },
];

/* ══════════════════════════════════════════════════════════════
   辅助函数
   ══════════════════════════════════════════════════════════════ */

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/**
 * 在 Google 搜索框输入文字，抓取自动补全下拉列表
 */
async function getAutocomplete(page, query) {
  // 先清空搜索框并输入
  // 用 Ctrl+A + Backspace 清空，然后逐字输入触发 autocomplete
  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

  // 处理可能的 cookie 弹窗
  try {
    const rejectBtn = await page.$('button:has-text("Reject all"), button:has-text("Accept all"), button:has-text("I agree")');
    if (rejectBtn) await rejectBtn.click();
    await sleep(500);
  } catch {}

  // 找到搜索框
  const searchInput = await page.$('textarea[name="q"], input[name="q"]');
  if (!searchInput) {
    console.log('  ⚠️  找不到 Google 搜索框，跳过');
    return [];
  }

  await searchInput.click();
  await sleep(300);

  // 逐字输入（触发 autocomplete）
  for (const char of query) {
    await page.keyboard.type(char, { delay: 80 + Math.random() * 120 });
  }
  await sleep(1500); // 等待 autocomplete 下拉出现

  // 抓取下拉列表
  const suggestions = await page.evaluate(() => {
    const items = document.querySelectorAll(
      'ul[role="listbox"] li[role="presentation"] span, ' +
      '.erkvQe li span, ' +
      '[data-attrid="Autocomplete"] span, ' +
      '.sbct span'
    );
    const results = [];
    items.forEach(el => {
      const text = el.textContent?.trim();
      if (text && text.length > 2 && !results.includes(text)) {
        results.push(text);
      }
    });
    return results;
  });

  return suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase().split(' ')[0]));
}

/**
 * 搜索一个词，抓取 People also ask 和 Related searches
 */
async function getSerpData(page, query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await sleep(2000);

  const data = await page.evaluate(() => {
    // People also ask
    const paaQuestions = [];
    const paaItems = document.querySelectorAll(
      '[data-q], .related-question-pair, .wQiwMc, .iDjcJe'
    );
    paaItems.forEach(el => {
      const q = el.textContent?.trim();
      if (q && q.length > 5 && q.endsWith('?')) {
        paaQuestions.push(q);
      }
    });

    // Related searches (页面底部)
    const relatedSearches = [];
    const relatedItems = document.querySelectorAll(
      '.AJLUJb span, .s75CSd, [data-ved] a .BNeawe, .eLyZDd'
    );
    relatedItems.forEach(el => {
      const t = el.textContent?.trim();
      if (t && t.length > 3 && !relatedSearches.includes(t)) {
        relatedSearches.push(t);
      }
    });

    return { paaQuestions, relatedSearches };
  });

  return data;
}

/**
 * 自动分类关键词
 */
function classify(keywords) {
  const cats = {};
  const rules = [
    ['How-to / Guide', /how to|guide|walkthrough|tutorial/i],
    ['Best / Top / Tier', /best|top|tier|ranking|strongest|op/i],
    ['Weapons / Gear', /weapon|gear|equipment|gun|sword|armor|loadout/i],
    ['Build / Class', /build|class|coven|character/i],
    ['Beginner / Tips', /beginner|tips|tricks|start|new player/i],
    ['Beginner / Tips', /beginner|tips|tricks|start|new player/i],
    ['Solo / Co-op', /solo|co.op|coop|multiplayer|single player/i],
    ['Boss / Enemy', /boss|enemy|monster|creature/i],
    ['Location / Map', /map|location|region|area|where|find/i],
    ['Crafting / Resources', /craft|resource|material|farm|recipe/i],
    ['Review / Worth', /review|worth|price|buy|release|worth it/i],
    ['Fix / Tech', /fix|crash|error|fps|performance|settings|control/i],
  ];

  const classified = new Set();
  for (const [cat, regex] of rules) {
    const matched = keywords.filter(k => !classified.has(k) && regex.test(k));
    if (matched.length > 0) {
      cats[cat] = matched;
      matched.forEach(k => classified.add(k));
    }
  }
  // 未分类的
  const other = keywords.filter(k => !classified.has(k));
  if (other.length > 0) cats['Other'] = other;

  return cats;
}

/* ══════════════════════════════════════════════════════════════
   主流程
   ══════════════════════════════════════════════════════════════ */

async function main() {
  console.log('🚀 启动浏览器...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  const dir = './keyword-results';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const game of GAMES) {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    );
    await page.setViewport({ width: 1440, height: 900 });

    console.log(`\n🎮 ${game.name} — "${game.query}"`);

    const allAutocomplete = new Set();
    const allPaa = new Set();
    const allRelated = new Set();

    for (let i = 0; i < PREFIXES.length; i++) {
      const prefix = PREFIXES[i];
      const query = prefix + game.query;
      process.stdout.write(`  [${i + 1}/${PREFIXES.length}] "${query}" `);

      try {
        // 1. 抓自动补全
        const ac = await getAutocomplete(page, query);
        ac.forEach(k => allAutocomplete.add(k));
        process.stdout.write(`→ ${ac.length} suggestions`);

        // 2. 抓 People also ask + Related searches
        if (prefix === '' || prefix === 'how to ' || prefix === 'best ') {
          const serp = await getSerpData(page, query);
          serp.paaQuestions.forEach(q => allPaa.add(q));
          serp.relatedSearches.forEach(r => allRelated.add(r));
          process.stdout.write(` + ${serp.paaQuestions.length} PAA + ${serp.relatedSearches.length} related`);
        }

        console.log('');
      } catch (e) {
        console.log(` ⚠️ ${e.message?.slice(0, 50)}`);
      }

      // 随机延迟 2-5 秒，避免被 Google 限速
      await sleep(2000 + Math.random() * 3000);
    }

    await page.close();

    /* ── 生成 Markdown 文档 ── */
    const acSorted = [...allAutocomplete].sort();
    const paaSorted = [...allPaa].sort();
    const relatedSorted = [...allRelated].sort();

    const lines = [
      `# ${game.name} — Keyword Harvest Report`,
      `> Harvested: ${new Date().toISOString().split('T')[0]}`,
      `> Autocomplete suggestions: ${acSorted.length}`,
      `> People also ask: ${paaSorted.length}`,
      `> Related searches: ${relatedSorted.length}`,
      '',
      '---',
      '',
      '## 1. Google Suggest — Autocomplete (${ac.length} keywords)',
      '',
      'These are the dropdown suggestions that appear when typing in Google\'s search box.',
      '',
    ];
    // 先加分类
    const classified = classify(acSorted);
    for (const [cat, kws] of Object.entries(classified)) {
      lines.push(`### ${cat} (${kws.length})`);
      kws.forEach(k => lines.push(`- ${k}`));
      lines.push('');
    }

    lines.push('---');
    lines.push('');
    lines.push('## 2. People Also Ask (${paa.length} questions)');
    lines.push('');
    lines.push('Questions that appear in Google\'s "People also ask" section.');
    lines.push('');
    paaSorted.forEach(q => lines.push(`- ${q}`));

    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push('## 3. Related Searches (${related.length} terms)');
    lines.push('');
    lines.push('Searches Google shows at the bottom of the results page.');
    lines.push('');
    relatedSorted.forEach(r => lines.push(`- ${r}`));

    const filename = `${dir}/${game.name.replace(/[:\/]/g, '-')}.md`;
    // Fix template literals in the lines (they got messed up in the array)
    const finalLines = lines.map(l =>
      l.replace('${ac.length}', String(acSorted.length))
       .replace('${paa.length}', String(paaSorted.length))
       .replace('${related.length}', String(relatedSorted.length))
    );
    fs.writeFileSync(filename, finalLines.join('\n'));
    console.log(`✅ ${filename}`);
  }

  await browser.close();
  console.log('\n✨ 全部完成！结果在 ./keyword-results/');
}

main().catch(err => {
  console.error('❌', err);
  process.exit(1);
});
