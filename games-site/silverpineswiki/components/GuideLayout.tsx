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
          <span className="text-xs font-medium uppercase tracking-wider text-teal-400 bg-teal-400/10 rounded px-2 py-0.5">
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
      <div className="prose pteal-invert pteal-amber max-w-none
        pteal-headings:text-white pteal-headings:font-bold
        pteal-h2:text-2xl pteal-h2:mt-10 pteal-h2:mb-4
        pteal-h3:text-xl pteal-h3:mt-8 pteal-h3:mb-3
        pteal-p:text-gray-300 pteal-p:leading-relaxed
        pteal-a:text-teal-400 pteal-a:no-underline hover:pteal-a:underline
        pteal-strong:text-white
        pteal-code:text-teal-300 pteal-code:bg-[#1a1a3e] pteal-code:px-1 pteal-code:py-0.5 pteal-code:rounded
        pteal-pre:bg-[#1a1a3e] pteal-pre:border pteal-pre:border-[#2a2a5e]
        pteal-table:border-collapse
        pteal-th:text-white pteal-th:bg-[#1a1a3e] pteal-th:px-3 pteal-th:py-2
        pteal-td:text-gray-300 pteal-td:px-3 pteal-td:py-2 pteal-td:border-t pteal-td:border-[#2a2a5e]
        pteal-li:text-gray-300
        pteal-blockquote:text-gray-400 pteal-blockquote:border-teal-500
        pteal-hr:border-[#2a2a5e]
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
              Found an error or outdated info? <a href="/contact" className="text-teal-400 hover:underline">Let us know</a>. This is an unofficial community guide. Game mechanics may change with updates.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
