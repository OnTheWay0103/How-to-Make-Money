import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/guides', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://store.steampowered.com', label: 'Steam', external: true },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f23] border-t border-gray-800/60 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            &copy; 2026 MineGeon Wiki. Unofficial fan wiki, not affiliated with Kickstone Studio. MineGeon: Renegades is a trademark of its respective owners.
          </p>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => {
              if (link.external) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200">
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200">
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Legal Links */}
          <nav className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
