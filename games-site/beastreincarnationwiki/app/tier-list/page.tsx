import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nushi Boss Tier List',
  description: 'Beast of Reincarnation Nushi boss tier list — Rangifer, Lacerta, Nue Malefact, Taurus, Corvus, Ursa, Erymanth ranked by difficulty and loot value.',
};

// Verified from launch guides (Aug 2026). Tiers = challenge rating + loot value.
// "Awaiting confirmation" marks bosses whose patterns are not yet published anywhere.
const TIERS = [
  { tier: 'S', bosses: ['Corvus (Lv. 38)'], note: 'Two-phase rematch with summoned adds and Acid puddles. Drops the Nushi Skill: Acid Burst, the only Koo Acid Art in the game. Bring Shock.' },
  { tier: 'S', bosses: ['Taurus (Lv. 29)'], note: 'The bull Nushi barely stands still — all four attack types force different responses. Drops Taurean Memories, unlocking Charging Botan, a key mid-game skill.' },
  { tier: 'A', bosses: ['Nue Malefact + Male Purifier (Lv. 20)'], note: 'The paired fight in Chapter 3 is the first real wall. They take turns, so focus one down — poison shreds the Nue.' },
  { tier: 'A', bosses: ['Rangifer (Lv. 12)'], note: 'The tutorial Nushi teaches you every core boss skill: parry timing, unblockable tells, and element matching. Drops Sakura Storm and Sakura: Javelin.' },
  { tier: 'B', bosses: ['Lacerta (Lv. 16)'], note: 'Slow + Poison status pressure and a 50% HP rage phase. Straightforward once Koo carries the Antidote.' },
  { tier: 'B', bosses: ['Nue Malefact (Lv. 16)'], note: 'Fought up to four times across Chapters 1–3. Punishes poor parry discipline with unblockable lightning — poison makes it trivial.' },
  { tier: 'B', bosses: ['Kunai & Kirin (Ch. 8 / 12)'], note: 'The twin fight: parry the melee half, dodge the ranged half — Kirin\'s attacks are never parryable. Both share a Poison weakness. Exact levels and drops are still awaiting confirmation.' },
  { tier: 'C', bosses: ['Door Golem'], note: 'Chapter 1 miniboss-gate that rewards the Zangetsu Bow. A warm-up, not a wall.' },
  { tier: 'Pending', bosses: ['Ursa', 'Erymanth', 'Shidou & Nue', "Koo's Nushi form", 'Beast of Reincarnation'], note: 'Confirmed to exist in the story, but detailed patterns, weaknesses, and levels are awaiting confirmation from post-launch guides.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Nushi Boss Tier List</h1>
      <p className="text-gray-400 mb-2">Beast of Reincarnation boss rankings — launch build (August 8, 2026).</p>
      <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-900/30 text-amber-400 border border-amber-800/50 mb-8">Updated August 2026 — will be revised as post-launch guides verify later bosses</div>

      {TIERS.map((row) => (
        <div key={row.tier + row.bosses.join('-')} className="flex gap-4 mb-3 items-start">
          <span className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
            row.tier === 'S' ? 'bg-amber-500/20 text-amber-400' :
            row.tier === 'A' ? 'bg-green-500/20 text-green-400' :
            row.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
            row.tier === 'C' ? 'bg-gray-500/20 text-gray-400' : 'bg-purple-500/20 text-purple-400'
          }`}>{row.tier}</span>
          <div>
            <div className="flex flex-wrap gap-1.5 mb-1">
              {row.bosses.map((b) => (
                <span key={b} className="text-sm font-medium text-white bg-[#1a1a3e] px-3 py-1 rounded border border-[#2a2a5e]">{b}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500">{row.note}</p>
          </div>
        </div>
      ))}

      <div className="bg-[#1a1a3e] border border-[#2a2a5e] rounded-lg p-5">
        <h3 className="text-white font-semibold mb-2">How This Tier List Works</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Tiers combine boss difficulty (parry complexity, unblockable coverage, status pressure) with
          loot value (Nushi Skills, story unlocks). Every Nushi is fought at least twice — rematches add a
          second phase with a fully restored health bar, so treat the first emptied bar as the halfway point.
          This list is versioned: it will be updated as post-launch guides verify Ursa, Erymanth, and the
          remaining paired fights.
        </p>
      </div>
    </div>
  );
}
