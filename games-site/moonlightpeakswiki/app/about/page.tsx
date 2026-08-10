import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Moonlight Peaks Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Moonlight Peaks Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Moonlight Peaks Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Moonlight Peaks," the supernatural farming and life simulation game developed by Little Chicken Game Company and published by XSEED Games.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players build their vampire farm, befriend the townsfolk, and explore the supernatural world. Our mission is to be the most helpful and up-to-date guide resource for the Moonlight Peaks community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner walkthroughs, farming mechanics, villager relationship guides, and shop strategies</li>
        <li><strong>Farming & Crafting:</strong> Crop guides, recipe lists, ranch tips, and seasonal event walkthroughs</li>
        <li><strong>Exploration Guides:</strong> Map locations, hidden secrets, and collectible checklists</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Moonlight Peaks Wiki is not affiliated with, endorsed by, or connected to Little Chicken Game Company, XSEED Games, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
