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

      {/* Verification */}
      <footer className="mt-12 pt-6 border-t border-[#2a2a5e]">
        <div className="bg-[#1a1a3e]/50 border border-[#2a2a5e] rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Verification</h3>
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Last checked:</strong> {frontmatter.updated}</p>
            <p><strong>Game version:</strong> {frontmatter.version}</p>
            <p><strong>Sources checked:</strong> Official Steam patch notes, Steam Community discussions, developer announcements, player reports.</p>
            <p className="text-gray-600 mt-2">
              Found an error or outdated info? <a href="/contact" className="text-amber-400 hover:underline">Let us know</a>. This is an unofficial community guide. Game mechanics may change with updates.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
