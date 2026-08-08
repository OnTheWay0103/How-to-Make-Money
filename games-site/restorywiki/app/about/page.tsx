import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About ReStory Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About ReStory Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        ReStory Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "ReStory: Chill Electronics Repairs," the cozy electronics repair shop simulator developed by Mandragora and published by tinyBuild.
      </p>
      <p>
        We are a small team of passionate players who create comprehensive guides, tips, and resources to help fellow repair shop owners restore nostalgic Y2K devices. Our mission is to be the most helpful and up-to-date guide resource for the ReStory community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, repair process breakdowns, and device databases</li>
        <li><strong>Reference Databases:</strong> Complete device lists, license guides, and all 50 achievements</li>
        <li><strong>Money-Making Tips:</strong> Profit strategies, marketplace flipping, and spare-part salvage</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new devices</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>ReStory Wiki is not affiliated with, endorsed by, or connected to Mandragora, tinyBuild, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
