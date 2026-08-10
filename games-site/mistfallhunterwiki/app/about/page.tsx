import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Mistfall Hunter Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Mistfall Hunter Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Mistfall Hunter Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Mistfall Hunter," the extraction action RPG.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players master the game. Our mission is to be the most helpful and up-to-date guide resource for the Mistfall Hunter community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner walkthroughs, mechanics deep-dives, and leveling strategies</li>
        <li><strong>Boss Strategies:</strong> Detailed tactics for every boss and elite encounter</li>
        <li><strong>Builds & Loadouts:</strong> Optimal weapon combinations, skill trees, and gear recommendations</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Mistfall Hunter Wiki is not affiliated with, endorsed by, or connected to the developers or publishers of Mistfall Hunter.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
