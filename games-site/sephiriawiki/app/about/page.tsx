import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sephiria Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Sephiria Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Sephiria Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Sephiria," the pixel-art action roguelite developed by TEAM HORAY (the Dungreed studio).
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players climb the Tower of Sephiria. Our mission is to be the most helpful and up-to-date guide resource for the Sephiria community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, weapon breakdowns, relic catalogs, and build strategies</li>
        <li><strong>Boss Strategies:</strong> Detailed tactics for every boss, from Chapter 1 to the Chapter 6 finale</li>
        <li><strong>Co-op Tips:</strong> Team compositions, connection fixes, and multiplayer strategies</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Sephiria Wiki is not affiliated with, endorsed by, or connected to TEAM HORAY or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
