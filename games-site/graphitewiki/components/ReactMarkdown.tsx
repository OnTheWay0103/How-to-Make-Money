import React from 'react';

/**
 * Simple Markdown renderer for guide content.
 * Supports: headings (h1-h4 with id), paragraphs, bold, italic, inline code,
 * code blocks, links, images, tables, blockquotes, horizontal rules,
 * ordered/unordered lists.
 */
function parseMarkdown(md: string): string {
  let html = md;

  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold + italic (triple)
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-4" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-400 hover:underline">$1</a>');

  // Headings with id
  html = html.replace(/^#### (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h4 id="${id}">${text}</h4>`;
  });
  html = html.replace(/^### (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h3 id="${id}">${text}</h3>`;
  });
  html = html.replace(/^## (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h2 id="${id}">${text}</h2>`;
  });
  html = html.replace(/^# (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h1 id="${id}">${text}</h1>`;
  });

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Tables
  // Split into lines for table processing
  const lines = html.split('\n');
  const processed: string[] = [];
  let inTable = false;
  let tableRows: string[] = [];
  let headerRow = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^\|.+\|$/)) {
      if (!inTable) {
        inTable = true;
        headerRow = line;
        continue;
      }
      if (line.match(/^\|[\s\-:]+\|$/)) {
        // Separator row, skip
        continue;
      }
      tableRows.push(line);
    } else {
      if (inTable) {
        // Flush table
        let tableHtml = '<table><thead><tr>';
        const headers = headerRow.split('|').filter((c: string) => c.trim());
        headers.forEach((h: string) => {
          tableHtml += `<th>${h.trim()}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';
        tableRows.forEach((row) => {
          tableHtml += '<tr>';
          const cells = row.split('|').filter((c: string) => c.trim());
          cells.forEach((c: string) => {
            tableHtml += `<td>${c.trim()}</td>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';
        processed.push(tableHtml);
        inTable = false;
        tableRows = [];
        headerRow = '';
      }
      processed.push(line);
    }
  }
  // Flush trailing table
  if (inTable && headerRow) {
    let tableHtml = '<table><thead><tr>';
    const headers = headerRow.split('|').filter((c: string) => c.trim());
    headers.forEach((h: string) => {
      tableHtml += `<th>${h.trim()}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';
    tableRows.forEach((row) => {
      tableHtml += '<tr>';
      const cells = row.split('|').filter((c: string) => c.trim());
      cells.forEach((c: string) => {
        tableHtml += `<td>${c.trim()}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';
    processed.push(tableHtml);
  }

  html = processed.join('\n');

  // Unordered lists — consolidate consecutive items
  html = html.replace(/((?:^- .+\n?)+)/gm, (match: string) => {
    const items = match
      .split('\n')
      .filter((l: string) => l.startsWith('- '))
      .map((l: string) => `<li>${l.slice(2)}</li>`)
      .join('');
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (match: string) => {
    const items = match
      .split('\n')
      .filter((l: string) => /^\d+\./.test(l))
      .map((l: string) => `<li>${l.replace(/^\d+\.\s*/, '')}</li>`)
      .join('');
    return `<ol>${items}</ol>`;
  });

  // Paragraphs: wrap remaining text blocks (skip already-wrapped HTML tags and empty lines)
  html = html.replace(
    /^(?!<[a-z]|[#*\-\d|>]|\s*$)(.+)$/gm,
    '<p>$1</p>'
  );

  return html;
}

export default function ReactMarkdown({ content }: { content: string }) {
  const html = parseMarkdown(content);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
