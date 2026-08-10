import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Tier List',
  description: 'Phantom Tower class tier list — best class rankings for the 4 confirmed classes (Warrior, Mage, Archer, Assassin) for beginners, Climb Mode, and Survival Mode. The other 4 of 8 classes are unannounced.',
};

const OVERALL_TIERS = [
  { tier: 'S', classes: ['Mage', 'Archer'], note: 'Highest ceiling among confirmed classes — Mage exploits the 16-element reaction system from range, Archer controls space safely on every floor' },
  { tier: 'A', classes: ['Warrior'], note: 'Reliable and consistent — the official starting class tanks anything and teaches the whole combat loop' },
  { tier: 'B', classes: ['Assassin'], note: 'High mobility, high lethality "Shadow Specialist" with Shadow Clones — powerful but demanding; no official difficulty data exists yet' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', classes: ['Warrior'], note: 'The official starting class — melee fundamentals, flexible element affinity, and the game teaches its mechanics around it. Great for learning all systems.' },
  { tier: 'Good', classes: ['Archer', 'Mage'], note: 'Archer teaches ranged combat and spacing safely. Mage is a natural fit for the element-swap reaction system.' },
  { tier: 'Avoid for now', classes: ['Assassin'], note: 'Repositioning tools, burst damage, and clone-based tricks point to a demanding, combo-oriented playstyle — better after you know enemy patterns.' },
];

const SURVIVAL_TIERS = [
  { tier: 'S', classes: ['Mage', 'Archer'], note: 'Range is king against infinite hordes — Mage AoE reactions clear waves, Archer kites safely in dense rooms' },
  { tier: 'A', classes: ['Warrior'], note: 'Survivable through the early waves; kills more slowly than ranged classes as the horde scales' },
  { tier: 'B', classes: ['Assassin'], note: 'Burst style is inconsistent in endless mode — strong in bursts, fragile when surrounded' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Class Tier List</h1>
      <p className="text-gray-400 mb-2">Phantom Tower class rankings for Early Access launch (July 13, 2026), based on the confirmed class descriptions. Only the 4 officially named classes are ranked — see the note below.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-purple-900/30 text-purple-400 border border-purple-800/50 mb-8">Early Access version — subject to balance patches</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Best Classes for Beginners', tiers: BEGINNER_TIERS }, { title: 'Survival Mode Rankings', tiers: SURVIVAL_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-purple-500/20 text-purple-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.classes.map((c) => (
                    <span key={c} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{c}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{row.note}</p>
              </div>
            </div>
          ))}
        </section>
      ))}

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">A Note on Tier Lists</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Phantom Tower has 8 classes at launch, but only 4 are officially named: Warrior, Mage, Archer, and
          Assassin. The other 4 are unannounced — names like "Elementalist," "Berserker," or "Rogue" circulating
          in some guides and tier lists are community inventions, not official information. With no official stats
          published, these rankings are judgment calls based on the confirmed class descriptions and the game's
          confirmed mechanics (element swapping, Tower Blessings, the Soulbinder). The "best" class is the one whose
          playstyle you enjoy most — and the Soulbinder system means any class can be specialized to handle any
          content with enough investment.
        </p>
      </div>
    </div>
  );
}
