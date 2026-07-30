import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Phantom Tower Wiki — an unofficial fan wiki providing game guides, tips, and strategies for Phantom Tower by Horien Studio.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Phantom Tower Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Phantom Tower Wiki is an <strong>unofficial fan-made resource</strong> dedicated to &quot;Phantom Tower,&quot; the roguelike action RPG developed and published by Horien Studio.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players conquer the mysterious 100-floor tower. Our mission is to be the most helpful and up-to-date guide resource for the Phantom Tower community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, class breakdowns, weapon deep-dives, elemental combos, and build strategies</li>
        <li><strong>Boss Strategies:</strong> Detailed tactics for every floor boss with attack patterns and punish windows</li>
        <li><strong>Blessings Database:</strong> Complete coverage of all 47 Tower Blessings with synergy recommendations</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Phantom Tower Wiki is not affiliated with, endorsed by, or connected to Horien Studio or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game&apos;s community.
      </p>
    </div>
  );
}
