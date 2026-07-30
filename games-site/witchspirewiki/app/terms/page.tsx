import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Witchspire Wiki — conditions for using our website.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Terms of Service</h1>
      <p className="text-gray-400">Last updated: July 30, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using Witchspire Wiki (<strong>witchspirewiki.vercel.app</strong>), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Witchspire Wiki is an unofficial fan-made guide and wiki website for the video game "Witchspire." We provide game guides, tips, strategies, and related information. We are not affiliated with, endorsed by, or connected to the game's developers or publishers.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All game-related names, images, trademarks, and content are the property of their respective owners (Envar Games). Our original guide content, articles, and website design are protected by copyright. You may not reproduce, distribute, or create derivative works from our content without permission.
      </p>

      <h2>4. User Conduct</h2>
      <p>When using our website, you agree not to:</p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Use automated means to scrape or collect data from our site</li>
        <li>Interfere with the proper functioning of the website</li>
      </ul>

      <h2>5. Disclaimer of Warranties</h2>
      <p>
        This website is provided "as is" without any warranties, express or implied. We do not warrant that the information on this site is accurate, complete, or current. Game mechanics and content may change with updates, and our guides may not reflect the latest changes.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Witchspire Wiki and its operators shall not be liable for any damages arising from the use or inability to use this website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
      </p>

      <h2>7. Third-Party Links & Advertisements</h2>
      <p>
        Our website displays advertisements served by Google AdSense and may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these third parties. Interactions with advertisements are between you and the advertiser.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about these Terms, please visit our <a href="/contact">Contact page</a>.
      </p>
    </div>
  );
}
