import VersionBadge from './VersionBadge';

interface GuideLayoutProps {
  frontmatter: {
    title: string;
    description: string;
    version: string;
    updated: string;
    category: string;
  };
  children: React.ReactNode;
}

export default function GuideLayout({ frontmatter, children }: GuideLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-amber-400 bg-amber-400/10 rounded px-2 py-0.5">
            {frontmatter.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-4">
          {frontmatter.description}
        </p>
        <VersionBadge version={frontmatter.version} updated={frontmatter.updated} />
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-amber max-w-none
        prose-headings:text-white prose-headings:font-bold
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white
        prose-code:text-amber-300 prose-code:bg-[#1a1a3e] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[#1a1a3e] prose-pre:border prose-pre:border-[#2a2a5e]
        prose-table:border-collapse
        prose-th:text-white prose-th:bg-[#1a1a3e] prose-th:px-3 prose-th:py-2
        prose-td:text-gray-300 prose-td:px-3 prose-td:py-2 prose-td:border-t prose-td:border-[#2a2a5e]
        prose-li:text-gray-300
        prose-blockquote:text-gray-400 prose-blockquote:border-amber-500
        prose-hr:border-[#2a2a5e]
      ">
        {children}
      </div>

      {/* Footer note */}
      <footer className="mt-12 pt-6 border-t border-[#2a2a5e]">
        <p className="text-xs text-gray-600">
          Found an error or outdated info? This is an unofficial community guide.
          Game content may change with updates. Check the Steam page for official patch notes.
        </p>
      </footer>
    </article>
  );
}
