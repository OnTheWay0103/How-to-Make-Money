import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Delverium Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Delverium Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Delverium Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Delverium," the 1-8 player co-op survival sandbox RPG developed and published by Sagestone Games.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players explore, build, farm, craft, and fight their way through Delverium's procedurally generated world. Our mission is to be the most helpful and up-to-date guide resource for the Delverium community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, demo walkthroughs, co-op setup, and crafting references</li>
        <li><strong>Boss Strategies:</strong> Dungeon and boss reference material as content is added in Early Access</li>
        <li><strong>Co-op Tips:</strong> Online multiplayer, split-screen, and team play guides</li>
        <li><strong>Regular Updates:</strong> Content updated as the game evolves through Early Access</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on official announcements, hands-on demo gameplay, and community research. We strive for accuracy, but game mechanics may change with updates — especially during Early Access. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Delverium Wiki is not affiliated with, endorsed by, or connected to Sagestone Games or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
