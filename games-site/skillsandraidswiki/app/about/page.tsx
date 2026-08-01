import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About the Skills & Raids Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About the Skills & Raids Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        The Skills &amp; Raids Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Skills &amp; Raids," the party-based extraction RPG for Steam by solo developer Eddie H. Hinestroza.
      </p>
      <p>
        We create comprehensive guides, strategies, and resources to help players command their party of Shelldon, Clawrk, and Owlivia — from first runs to the deepest biomes. Our mission is to be the most helpful and up-to-date guide resource for the Skills &amp; Raids community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, character guides, ability system breakdowns, and extraction strategies</li>
        <li><strong>Build Guides:</strong> Loadout frameworks and synergy guidance for the fixed party</li>
        <li><strong>Honest Coverage:</strong> We mark unconfirmed information clearly instead of inventing mechanics</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and as the community documents the game</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides on this site are written based on official information (the game's Steam page, showcase coverage, and demo-era reviews) and cross-checked against what is publicly verified. Game mechanics may change with updates, and parts of the game are still being documented by the community — where we don't know something for sure, we say so. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>The Skills &amp; Raids Wiki is not affiliated with, endorsed by, or connected to Eddie H. Hinestroza, the game's developer, or Valve.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
