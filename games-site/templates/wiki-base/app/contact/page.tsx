import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact {{SITE_NAME}} — corrections, suggestions, and feedback.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>Contact Us</h1>
      <p>
        We welcome feedback, corrections, and suggestions. If you have questions about our guides, want to report an error, or have
        an idea for new content, please reach out.
      </p>

      <h2>Email</h2>
      <p>
        You can contact us at: <a href="mailto:zhaoq8278@gmail.com">zhaoq8278@gmail.com</a>
      </p>
      <p className="text-gray-400 text-sm">
        Please note this is a forwarding address. We aim to respond within 2–3 business days.
      </p>

      <h2>What to Contact Us About</h2>
      <ul>
        <li><strong>Content Corrections:</strong> Found an outdated or incorrect mechanic, item name, or number? Tell us and include a source if you have one.</li>
        <li><strong>Content Suggestions:</strong> Have an idea for a guide we should write? We would like to hear it.</li>
        <li><strong>Technical Issues:</strong> Experiencing problems with the website? Let us know so we can fix it.</li>
        <li><strong>Privacy Concerns:</strong> Questions about our <a href="/privacy">Privacy Policy</a>? We are here to help.</li>
      </ul>

      <h2>Response Time</h2>
      <p>
        We typically respond to inquiries within 2–3 business days. For urgent matters, please include &quot;URGENT&quot; in your
        subject line.
      </p>
    </div>
  );
}
