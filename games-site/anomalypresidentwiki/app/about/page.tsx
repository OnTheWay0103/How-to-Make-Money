import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Anomaly President Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Anomaly President Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Anomaly President Wiki is an <strong>unofficial fan-made resource</strong> dedicated to "Anomaly President,"
        the presidential-campaign roguelike action game developed by Phew Phew Games (the Anomaly Agent studio).
      </p>
      <p>
        We research, organize, and verify game information to help candidates win votes and win fights — from the
        day/night dual loop and campaign management to the campaign bus, Fluffy companions, weapons, Anomaly Powers,
        and bosses. Our mission is to be the most helpful and accurate guide resource for the Anomaly President
        community during Early Access.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Beginner &amp; System Guides:</strong> The dual loop explained — campaign by day, combat by night</li>
        <li><strong>Campaign Guides:</strong> Speeches, canvassing, image management, bus rooms, and the election cycle</li>
        <li><strong>Fluffy Reference:</strong> Recruitment, departments, and how to keep your companions alive</li>
        <li><strong>Combat &amp; Build Guides:</strong> Night runs, weapons, elements, Anomaly Powers, and boss structure</li>
        <li><strong>Release Info:</strong> Early Access status, price, platforms, Steam Deck, and roadmap — kept current as the game updates</li>
        <li><strong>Regular Updates:</strong> Content refreshed as Early Access patches ship</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> Steam store page (App 3156330), developer announcements, the Early Access Q&amp;A, and official trailers</li>
        <li><strong>Developer Statements:</strong> Developer posts and Steam news ("Road to Early Access") are treated as primary sources</li>
        <li><strong>Verified Reviewer &amp; Community Reports:</strong> Consistent multi-source reports from critic reviews and player testing</li>
        <li><strong>Honest Marking:</strong> Anything not confirmed — Early Access details still in flux — is clearly marked [Unconfirmed] rather than guessed</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted.
        If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Numerical values (prices, dates, review counts) are only included where they can be verified against official sources or consistent reporting</li>
        <li><strong>Source transparency:</strong> Guides indicate where information comes from — Official, Community, or Editorial — in their frontmatter</li>
        <li><strong>Early Access honesty:</strong> Because Anomaly President is in Early Access, unconfirmed systems are presented as a preview or [Unconfirmed] until verified. No boss names, numbers, or stats are invented</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
        <li><strong>Community-driven:</strong> We prioritize topics that real players are asking about on Steam, Reddit, and community forums</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Anomaly President Wiki is not affiliated with, endorsed by, or connected to Phew Phew Games, Gamedev.ist,
        Gamersky Games, or any of their subsidiaries or affiliates.</strong> All game-related trademarks, images, and content
        are the property of their respective owners. This site is an independent fan project created to support the game's community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but
        always check the official sources for the most current information.
      </p>
    </div>
  );
}
