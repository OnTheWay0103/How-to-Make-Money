import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/guides', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
  { href: 'https://store.steampowered.com', label: 'Steam', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f23] border-t border-gray-800/60 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; 2026 Witchspire Wiki. Unofficial fan wiki, not affiliated with Envar Games.
          </p>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
