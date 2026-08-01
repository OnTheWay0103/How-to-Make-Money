import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hero Tier List',
  description: 'DragonSword: Awakening hero tier list — S to B-tier rankings for all 19 characters. Best heroes for story, boss fights, and endgame.',
};

const OVERALL_TIERS = [
  { tier: 'S', heroes: ['Theresia', 'Castella'], note: 'Theresia — confirmed Bleed + Stun kit, the strongest ailment pair in the early meta. Castella — the only confirmed Break user; Super Armor breaking is essential for every boss fight.' },
  { tier: 'A', heroes: ['Lute', 'Aria'], note: 'Lute — confirmed Stun, Knockdown and the only confirmed ally heals; flexible in every team. Aria — confirmed Burn + Airborne ranged firepower specialist.' },
  { tier: 'B', heroes: ['Ornette', 'Kalien'], note: 'Ornette — confirmed Electrocution (Shock) + Knockdown; a distinct third ailment type, still being evaluated by the community. Kalien — confirmed Stun specialist commanding the fire fox Sur.' },
  { tier: 'TBD', heroes: ['Cerese', 'Reina', 'Kalsion', 'Charlotte', 'Roxy'], note: 'Confirmed in the 19-hero roster but kits are not officially detailed yet — we will not rank claims we cannot verify. Note: heroes like Eileen, Astria, Sion, Alex, Tarte, and Dana have no official confirmation as playable.' },
];

const BEGINNER_TIERS = [
  { tier: 'Best', heroes: ['Lute', 'Castella', 'Aria'], note: 'Your confirmed starting trio — Lute heals and stuns, Castella breaks Super Armor, Aria deals Burn + Airborne damage at range. Covers every role in the first hour.' },
  { tier: 'Good', heroes: ['Theresia'], note: 'Unlocked through story progression — Bleed + Stun makes her the community consensus best hero. Build the Bleed Chain team (Theresia + Lute + Castella) as soon as you have her.' },
  { tier: 'Complex', heroes: ['Kalien', 'Ornette'], note: 'Distinct playstyles — Kalien commands the fire fox Sur, Ornette wields a scythe with Electrocution. Solid once mastered, but the Stun/Bleed core is easier to learn.' },
];

const BOSS_TIERS = [
  { tier: 'S', heroes: ['Theresia', 'Castella'], note: 'Theresia stacks Bleed over time while Stun locks bosses down. Castella\'s Break drains the Super Armor bar and opens finisher prompts — the confirmed boss-breaking role.' },
  { tier: 'A', heroes: ['Lute', 'Aria'], note: 'Lute\'s confirmed ally heals sustain long boss fights and his Stun feeds the chain. Aria applies Burn at range and launches bosses with Airborne.' },
  { tier: 'B', heroes: ['Ornette', 'Kalien'], note: 'Ornette brings Shock interrupts; Kalien adds Stun density. Viable in specific compositions — full boss-fight rankings are still being documented.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hero Tier List</h1>
      <p className="text-gray-400 mb-2">DragonSword: Awakening hero rankings for launch (July 22, 2026). Based on overall performance, ease of use, and boss viability.</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-800/50 mb-8">Launch version — updated for 19 heroes</div>

      {[{ title: 'Overall Rankings', tiers: OVERALL_TIERS }, { title: 'Beginner Recommendations', tiers: BEGINNER_TIERS }, { title: 'Boss Fight Rankings', tiers: BOSS_TIERS }].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
          {section.tiers.map((row) => (
            <div key={row.tier} className="flex gap-4 mb-3 items-start">
              <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                row.tier === 'S' || row.tier === 'Best' ? 'bg-amber-500/20 text-amber-400' :
                row.tier === 'A' || row.tier === 'Good' ? 'bg-green-500/20 text-green-400' :
                row.tier === 'B' || row.tier === 'Complex' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>{row.tier}</span>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {row.heroes.map((h) => (
                    <span key={h} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{h}</span>
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
          DragonSword: Awakening is well-balanced — even B-tier heroes perform well with upgrades and good team synergy.
          Tier rankings reflect the current meta but may shift with post-launch balance updates and new hero releases.
          Four free heroes (Ryza, Jerome, Veronica, Logan) are confirmed for the second half of 2026.
          Build a balanced team with complementary status effects rather than chasing S-tier alone.
        </p>
      </div>
    </div>
  );
}
