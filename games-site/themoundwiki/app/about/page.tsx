import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About The Mound Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About The Mound Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        The Mound Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "The Mound: Omen of Cthulhu," the cooperative PvE extraction horror game developed by SpiritVale Studio and published by NACON.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players survive the horrors of the cursed jungle. Our mission is to be the most helpful and up-to-date guide resource for The Mound community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, weapon breakdowns, enemy bestiaries, and extraction strategies</li>
        <li><strong>Boss Strategies:</strong> Detailed tactics for every enemy and boss encounter</li>
        <li><strong>Co-op Tips:</strong> Team compositions, communication strategies, and multiplayer guides</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>The Mound Wiki is not affiliated with, endorsed by, or connected to SpiritVale Studio, NACON, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
