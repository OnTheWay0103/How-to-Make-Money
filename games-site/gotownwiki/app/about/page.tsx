import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Go-Go Town! Wiki — an unofficial fan wiki providing game guides, tips, and strategies.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Go-Go Town! Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Go-Go Town! Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Go-Go Town!," the co-op city builder and life simulation game developed by Prideful Sloth.
      </p>
      <p>
        We are a small team of passionate gamers who create comprehensive guides, strategies, and resources to help players build, automate, and manage their own Go-Go Town. Our mission is to be the most helpful and up-to-date guide resource for the Go-Go Town! community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Game Guides:</strong> Beginner guides, money-making strategies, and production chain breakdowns</li>
        <li><strong>Layout Planning:</strong> Town layout tips, zone organization, and traffic management</li>
        <li><strong>Automation Guides:</strong> Worker hiring, couriers, and fully automated production</li>
        <li><strong>Co-op Tips:</strong> Multiplayer strategies for playing with friends</li>
        <li><strong>Regular Updates:</strong> Content updated as the game receives patches and new content</li>
      </ul>

      <h2>Our Content</h2>
      <p>
        All guides and articles on this site are written based on hands-on gameplay experience, community research, and careful testing. We strive for accuracy, but game mechanics may change with updates. If you spot an error, please let us know via our <a href="/contact">Contact page</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        <strong>Go-Go Town! Wiki is not affiliated with, endorsed by, or connected to Prideful Sloth or any of its subsidiaries or affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
    </div>
  );
}
