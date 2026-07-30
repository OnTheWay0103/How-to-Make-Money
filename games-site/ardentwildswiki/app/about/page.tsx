import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Ardent Wilds Wiki — an unofficial fan wiki providing game guides, tips, and strategies for Ardent Wilds by Spellware Studios.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Ardent Wilds Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Ardent Wilds Wiki is an <strong>unofficial fan-made resource</strong> dedicated to &quot;Ardent Wilds,&quot; the open-world survival crafting RPG developed and published by Spellware Studios.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players survive, build, and conquer in this ambitious voxel world. Our mission is to be the most helpful and up-to-date guide resource for the Ardent Wilds community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner survival tips, crafting recipes, base building strategies, combat builds, and skill tree walkthroughs</li>
        <li><strong>Boss Strategies:</strong> Detailed tactics for every Spire Guardian, biome boss, and Yorgoroth himself</li>
        <li><strong>Biome Database:</strong> Complete coverage of all biomes with resource locations and enemy information</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches, new content, and eventually the full release</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Ardent Wilds Wiki is not affiliated with, endorsed by, or connected to Spellware Studios or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game&apos;s community.
      </p>
    </div>
  );
}
