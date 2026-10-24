import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Cozy Game Restoration Wiki — an unofficial fan wiki. Learn about our research standards, editorial process, and how we verify game information.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1>About Cozy Game Restoration Wiki</h1>

      <h2>Who We Are</h2>
      <p>
        Cozy Game Restoration Wiki is an <strong>unofficial fan-made resource</strong> dedicated to &quot;Cozy Game Restoration,&quot; the retro cartridge cleaning and restoration simulator from Parasol Corp.
      </p>
      <p>
        We research, organize, and verify game information to help players enjoy the restoration loop without wasting time on mechanics the game does not actually have. Our mission is to be a clear, honest guide resource for the Cozy Game Restoration community.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Beginner and Workflow Guides:</strong> The parcel-to-shelf loop, session planning, and a sustainable cleaning order</li>
        <li><strong>Cleaning and Cosmetic Repair:</strong> What each confirmed tool does, how to handle adhesive, ink, scratches, and shell condition</li>
        <li><strong>Reference Pages:</strong> The fictional platforms, PAL/NTSC variants, rarity, and collection structure</li>
        <li><strong>Quest and Collection Planning:</strong> How collection-based objectives work and how to organize a collection room</li>
        <li><strong>General Retro Cartridge Context:</strong> Clearly separated background knowledge about real cartridge care where it helps explain the in-game systems</li>
        <li><strong>Regular Updates:</strong> Content revised as official details and patches arrive</li>
      </ul>

      <h2>How We Research Content</h2>
      <p>Every guide on this site is built through a research process that includes:</p>
      <ul>
        <li><strong>Official Sources:</strong> The Steam store page, Parasol Corp announcements, and press releases</li>
        <li><strong>Hands-on Coverage:</strong> Previews and reviews of the public demo and playtest builds</li>
        <li><strong>Cross-Referencing:</strong> Information is checked against multiple sources before publication</li>
        <li><strong>Explicit Uncertainty:</strong> Anything only seen in the demo or inferred from pre-release material is labeled as such</li>
      </ul>
      <p>
        Each guide includes a <strong>Verification</strong> section showing when it was last checked and which sources were consulted. If you find information that is outdated or incorrect, please <a href="/contact">let us know</a>.
      </p>

      <h2>Editorial Standards</h2>
      <ul>
        <li><strong>Verification first:</strong> Named tools, platforms, quest counts and mechanics are only included where they appear in official material or consistent hands-on coverage</li>
        <li><strong>No invented content:</strong> We do not invent cartridge titles, quest names, achievements, or numeric drop rates</li>
        <li><strong>Demo vs full game:</strong> Pre-release mechanics are marked as demo or launch information, not presented as complete-game facts</li>
        <li><strong>Corrections welcome:</strong> Game mechanics change. We fix errors when reported</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        <strong>Cozy Game Restoration Wiki is not affiliated with, endorsed by, or connected to Parasol Corp or any of its affiliates.</strong> All game-related trademarks, images, and content are the property of their respective owners. This site is an independent fan project created to support the game&apos;s community.
      </p>
      <p>
        Game mechanics, values, and content may change with updates. We update our guides as quickly as possible, but always check the official sources for the most current information.
      </p>
    </div>
  );
}
