import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Waterpark Simulator Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Waterpark Simulator Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Waterpark Simulator Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Waterpark Simulator," the first-person waterpark management sim developed and published by CayPlay.
      </p>
      <p>
        We are a small team of passionate sim-game players who create comprehensive guides, references, and strategies to help players design slides, manage staff, and grow a rundown park into a five-star attraction. Our mission is to be the most helpful and up-to-date guide resource for the Waterpark Simulator community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, slide and ride references, and daily-management strategies</li>
        <li><strong>Reference Tables:</strong> Staff types, research unlocks, attraction overviews, and visitor needs</li>
        <li><strong>Questline Walkthroughs:</strong> Step-by-step coverage of the Museum questlines and endgame content</li>
        <li><strong>Regular Updates:</strong> Content is updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides are based on the 1.0 release (July 31, 2026) and player reports from Early Access. Waterpark Simulator evolves quickly, so guides carry version and update dates — if you spot something outdated, please <a href="/contact">contact us</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Waterpark Simulator Wiki is not affiliated with, endorsed by, or connected to CayPlay.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
