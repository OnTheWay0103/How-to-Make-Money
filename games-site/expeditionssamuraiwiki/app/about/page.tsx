import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Expeditions: Samurai Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Expeditions: Samurai Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Expeditions: Samurai Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Expeditions: Samurai," the party-based Sengoku-era tactical CRPG developed by Campfire Cabal and published by THQ Nordic.
      </p>
      <p>
        We are a small team of passionate CRPG players who create comprehensive guides, strategies, and resources to help players navigate the civil war of 1600 Japan. Our mission is to be the most helpful and up-to-date guide resource for the Expeditions: Samurai community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, class breakdowns, and progression strategies</li>
        <li><strong>Companion Coverage:</strong> Recruitment, loyalty, and romance guides for all 8 companions</li>
        <li><strong>Systems Deep Dives:</strong> Stealth, combat, village management, and co-op guides</li>
        <li><strong>Regular Updates:</strong> Content updated as Early Access evolves toward the full 1.0 release</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on officially confirmed information, hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change during Early Access. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Expeditions: Samurai Wiki is not affiliated with, endorsed by, or connected to Campfire Cabal, THQ Nordic, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
