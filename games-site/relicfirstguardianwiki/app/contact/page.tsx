import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact The Relic: First Guardian Wiki — get in touch for questions, corrections, or feedback.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Contact Us</h1>
      <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-8">
        <p className="font-semibold text-red-300">⚠️ We are NOT the game developer.</p>
        <p className="text-sm text-gray-300 mt-1">
          This is an <strong>unofficial fan wiki</strong>. We write guides and strategies — we do not develop, publish, or patch the game. We cannot fix bugs, recover lost saves, or help with technical issues in the game itself.
        </p>
      </div>

      <p>
        We welcome your feedback, corrections, and suggestions about our <strong>guides and website content</strong>. If you spot an error in one of our articles or have ideas for new guides, please reach out.
      </p>

      <h2>Email</h2>
      <p>
        You can contact us at: <a href="mailto:zhaoq8278@gmail.com">zhaoq8278@gmail.com</a>
      </p>
      <p className="text-gray-400 text-sm">
        Please note this is a forwarding address. We aim to respond within 2-3 business days.
      </p>

      <h2>What to Contact Us About</h2>
      <ul>
        <li><strong>Content Corrections:</strong> Found outdated or incorrect information in our guides? Let us know.</li>
        <li><strong>Content Suggestions:</strong> Have an idea for a guide we should write? We'd love to hear it.</li>
        <li><strong>Website Issues:</strong> Experiencing problems with this website itself? Tell us so we can fix it.</li>
        <li><strong>Privacy Concerns:</strong> Questions about our <a href="/privacy">Privacy Policy</a>? We're here to help.</li>
      </ul>

      <h2>⚠️ Game Bugs & Technical Issues</h2>
      <p>
        <strong>If you are experiencing bugs, crashes, save issues, or performance problems in the game itself, we CANNOT help you.</strong> We are a fan wiki, not the developer. Please report game bugs to the official developer:
      </p>
      <ul>
        <li><strong>Developer:</strong> Project Cloud Games</li>
        <li><strong>Publisher:</strong> Perp Games</li>
        <li><strong>Steam:</strong> Visit the <a href="https://steamcommunity.com/app/2436940/discussions/" rel="nofollow noopener">Steam Community Hub</a> for bug reports and official announcements</li>
        <li><strong>PS5:</strong> Report issues via the PlayStation support system or check for game updates</li>
      </ul>
      <p className="text-gray-400 text-sm">
        We also maintain a <a href="/guides/troubleshooting">Troubleshooting Guide</a> with community-confirmed fixes for common issues, but these are player-discovered workarounds — not official patches.
      </p>

      <h2>Response Time</h2>
      <p>
        We typically respond to inquiries within 2-3 business days. For urgent matters, please include "URGENT" in your subject line.
      </p>
    </div>
  );
}
