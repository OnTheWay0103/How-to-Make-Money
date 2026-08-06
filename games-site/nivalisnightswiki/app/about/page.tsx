import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Nivalis Nights Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Nivalis Nights Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Nivalis Nights Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Nivalis Nights," the cyberpunk life simulation game developed by ION LANDS and published by 505 Games.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players make their first nivalis, build a business empire, and live their best life in the rain-soaked city. Our mission is to be the most helpful and up-to-date guide resource for the Nivalis Nights community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Business Guides:</strong> Best business types, staff management, supply chains, and venue upgrades</li>
        <li><strong>Money-Making Strategies:</strong> Menu pricing, energy trading, and market arbitrage</li>
        <li><strong>Life Sim Coverage:</strong> Apartment customization, NPC relationships, and romance</li>
        <li><strong>Activity Guides:</strong> Fishing spots, boating, and the chess tournament</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on official announcements, developer reveals, community research, and hands-on gameplay experience after release. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Nivalis Nights Wiki is not affiliated with, endorsed by, or connected to ION LANDS, 505 Games, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
