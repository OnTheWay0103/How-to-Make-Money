'use client';

/**
 * Renders a raw Adsterra snippet.
 *
 * The network's loader finds its ad container by id, so the container div has
 * to be in the DOM when the script runs. Two browser constraints shape this:
 *
 * 1. Scripts inserted through innerHTML never execute. On a server-rendered
 *    first load the browser's HTML parser runs them anyway, but after a
 *    client-side route change React inserts the same markup with innerHTML and
 *    the script is silently ignored — the ad slot stays empty. So the script
 *    tags are stripped here and re-created with createElement in an effect,
 *    which runs on every mount.
 * 2. The snippet's non-script markup (the `container-…` div) is still rendered
 *    on the server so it exists before the effect fires.
 *
 * `variant="home"` reuses the guide zone on the landing page only; it renders
 * nothing on other routes so the banner is never shown twice.
 */

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdsterraSlotProps {
  html: string;
  /** global: invisible body-level script. inline: labelled in-page slot. */
  variant?: 'global' | 'inline' | 'guide' | 'home';
  className?: string;
}

interface SnippetScript {
  attrs: Record<string, string>;
  code: string;
}

const SCRIPT_TAG = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
const ATTR = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const match of raw.matchAll(ATTR)) {
    const [, name, doubleQuoted, singleQuoted, bare] = match;
    attrs[name.toLowerCase()] = doubleQuoted ?? singleQuoted ?? bare ?? '';
  }
  return attrs;
}

function splitSnippet(html: string): { markup: string; scripts: SnippetScript[] } {
  const scripts: SnippetScript[] = [];
  const markup = html.replace(SCRIPT_TAG, (_tag, rawAttrs: string, code: string) => {
    scripts.push({ attrs: parseAttrs(rawAttrs), code });
    return '';
  });
  return { markup: markup.trim(), scripts };
}

export default function AdsterraSlot({
  html,
  variant = 'inline',
  className = '',
}: AdsterraSlotProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);
  const pathname = usePathname();
  const active = Boolean(html) && (variant !== 'home' || pathname === '/');

  useEffect(() => {
    if (!active || injected.current) return;
    injected.current = true;

    const { scripts } = splitSnippet(html);
    const nodes: HTMLScriptElement[] = [];

    for (const { attrs, code } of scripts) {
      const el = document.createElement('script');
      for (const [name, value] of Object.entries(attrs)) {
        el.setAttribute(name, value);
      }
      if (code) el.text = code;
      // Appending a freshly created script element makes the browser fetch and
      // run it; innerHTML would not. Body-level so React re-renders of the slot
      // cannot blow it away.
      document.body.appendChild(el);
      nodes.push(el);
    }

    return () => {
      nodes.forEach((el) => el.remove());
    };
  }, [active, html]);

  if (!active) return null;

  const { markup } = splitSnippet(html);

  if (variant === 'global') {
    return <div ref={hostRef} dangerouslySetInnerHTML={{ __html: markup }} />;
  }

  return (
    <aside
      className={`not-prose my-10 ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600 mb-2">
        Advertisement
      </p>
      <div ref={hostRef} dangerouslySetInnerHTML={{ __html: markup }} />
    </aside>
  );
}
