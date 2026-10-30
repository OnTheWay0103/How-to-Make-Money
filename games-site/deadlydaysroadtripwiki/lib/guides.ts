import fs from 'fs';
import path from 'path';

export interface EvidenceSource {
  tier: string;
  text: string;
}

export interface GuideFrontmatter {
  title: string;
  description: string;
  category: string;
  version: string;
  updated: string;
  keywords: string[];
  related: string[];
  /** 3-tier evidence system: Official / Community / Editorial. Rendered by GuideLayout. */
  sources?: EvidenceSource[];
}

export interface Guide {
  slug: string;
  frontmatter: GuideFrontmatter;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'guides');

/** Parse frontmatter from a markdown file (YAML between --- delimiters). */
function parseFrontmatter(raw: string): { frontmatter: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }
  const yamlBlock = match[1];
  const body = match[2];

  // Simple YAML parser for flat key-value, string arrays, and object arrays
  // (e.g. `sources: [{ tier, text }, ...]` blocks). Existing behaviors for
  // flat values and string arrays are unchanged.
  const frontmatter: Record<string, unknown> = {};
  let currentKey = '';
  let inArray = false;
  const arrayValues: unknown[] = [];
  let currentObj: Record<string, string> | null = null;

  const flushArray = () => {
    if (!inArray || !currentKey) return;
    if (currentObj) {
      arrayValues.push(currentObj);
      currentObj = null;
    }
    frontmatter[currentKey] = arrayValues.slice();
    arrayValues.length = 0;
    inArray = false;
  };

  for (const line of yamlBlock.split('\n')) {
    const kvMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (kvMatch && !line.trimStart().startsWith('-')) {
      flushArray();
      currentKey = kvMatch[1];
      const val = kvMatch[2].trim();
      if (val === '') {
        inArray = true;
      } else {
        // Remove surrounding quotes if present
        frontmatter[currentKey] = val.replace(/^["']|["']$/g, '');
      }
    } else if (inArray) {
      // Object array item: `- tier: "Official"`
      const objItemMatch = line.trim().match(/^-\s*(\w[\w-]*):\s*(.*)/);
      if (objItemMatch) {
        if (currentObj) {
          arrayValues.push(currentObj);
        }
        currentObj = {
          [objItemMatch[1]]: objItemMatch[2].trim().replace(/^["']|["']$/g, ''),
        };
        continue;
      }
      // Continuation key of the current object item: `  text: "..."`
      if (currentObj) {
        const innerMatch = line.match(/^\s+(\w[\w-]*):\s*(.*)/);
        if (innerMatch) {
          currentObj[innerMatch[1]] = innerMatch[2].trim().replace(/^["']|["']$/g, '');
          continue;
        }
      }
      // Plain string array item: `- "value"`
      const arrMatch = line.trim().match(/^-\s*["']?(.+?)["']?\s*$/);
      if (arrMatch) {
        arrayValues.push(arrMatch[1]);
      }
    }
  }
  // Don't forget the last array / object item
  flushArray();

  return { frontmatter, body };
}

/** Get all guides sorted by most recently updated. */
export function getAllGuides(): Guide[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
      const { frontmatter, body } = parseFrontmatter(raw);
      const slug = file.replace(/\.md$/, '');
      return {
        slug,
        frontmatter: frontmatter as unknown as GuideFrontmatter,
        content: body.trim(),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.updated || '').getTime() -
        new Date(a.frontmatter.updated || '').getTime()
    );
}

/** Get a single guide by slug. */
export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(raw);
  return {
    slug,
    frontmatter: frontmatter as unknown as GuideFrontmatter,
    content: body.trim(),
  };
}

/** Get all unique categories from guides. */
export function getAllCategories(): string[] {
  const guides = getAllGuides();
  const cats = new Set(guides.map((g) => g.frontmatter.category || 'Uncategorized'));
  return Array.from(cats).sort();
}

/** Extract headings (h2/h3) from markdown content for TOC. */
export function extractHeadings(markdown: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    headings.push({ id, text, level });
  }
  return headings;
}
