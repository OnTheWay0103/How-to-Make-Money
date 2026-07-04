'use client';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings || headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 w-56 shrink-0 self-start">
      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        On this page
      </h4>
      <ul className="space-y-1.5 border-l border-[#2a2a5e] pl-4">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '12px' : '0' }}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`block text-sm transition-colors hover:text-amber-400 ${
                h.level === 3 ? 'text-gray-500 text-xs' : 'text-gray-400'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
