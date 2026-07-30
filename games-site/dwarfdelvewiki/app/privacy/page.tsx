import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Dwarf Delve Wiki — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Privacy Policy</h1>
      <p className="text-gray-400">Last updated: July 30, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        Dwarf Delve Wiki ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at <strong>dwarfdelvewiki.vercel.app</strong>.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li><strong>Usage Data:</strong> Automatically collected information including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data is collected via Google Analytics and Google AdSense.</li>
        <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Analyze site traffic and user behavior to improve our content</li>
        <li>Display relevant advertisements via Google AdSense</li>
        <li>Understand which game guides are most helpful to our readers</li>
      </ul>

      <h2>4. Google AdSense & Third-Party Advertising</h2>
      <p>
        We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
      </p>
      <p>Specifically:</p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website.</li>
        <li>Google's use of the DoubleClick cookie enables it and its partners to serve ads based on your visit to our site and/or other websites.</li>
        <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
      </ul>

      <h2>5. Google Analytics</h2>
      <p>
        We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as pages visited, time on site, and referring sources. This data helps us improve our content. You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Cookies are small text files stored on your device. We use both session cookies (expire when you close your browser) and persistent cookies (remain until deleted). You can control cookies through your browser settings. Disabling cookies may affect your experience on our site.
      </p>

      <h2>7. Data Retention</h2>
      <p>Analytics and advertising data is retained in accordance with Google's data retention policies. We do not maintain separate databases of user information.</p>

      <h2>8. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request deletion of your personal data</li>
        <li>Opt-out of personalized advertising</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>

      <h2>9. Children's Privacy</h2>
      <p>
        Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

      <h2>11. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, please visit our <a href="/contact">Contact page</a>.
      </p>
    </div>
  );
}
