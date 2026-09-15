import type { Metadata } from 'next';
import { faqPageSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Silver Pines FAQ — Release Date, Price, Platforms, Demo and Saving',
  description:
    'Frequently asked questions about Silver Pines, the survival horror metroidvania by Wych Elm and Team17 — release date, price, platforms, the free demo, the phone-booth save system, save coins, inventory and difficulty.',
};

const FAQ_ITEMS = [
  {
    question: 'What kind of game is Silver Pines?',
    answer:
      'Silver Pines is a survival horror metroidvania. The horror half is classic fixed-resource survival horror in the Resident Evil tradition: scarce ammunition, a grid-limited inventory, storage boxes, a save system with a cost attached, and monsters you are often better off avoiding than fighting. The metroidvania half is structure: locked doors, hidden paths, tools and weapons that open up parts of the town you have already walked past, and a map you fill in as you go.',
  },
  {
    question: 'When does Silver Pines release?',
    answer:
      'October 8, 2026. That is the date on the official Steam store page (App ID 2333000), and Steam currently lists the game as coming soon. It is a full release rather than an Early Access launch — no Early Access period has been announced.',
  },
  {
    question: 'How much does Silver Pines cost?',
    answer:
      'The price had not been announced as of September 16, 2026 [Unconfirmed]. Steam’s store data contains no price for Silver Pines yet, and no pre-order or bundle pricing exists. We do not publish a guessed figure. Any site advertising a “Silver Pines cheap key” or a free download before October 8 is either guessing or unsafe.',
  },
  {
    question: 'Can I play Silver Pines right now?',
    answer:
      'Yes — through the free demo. The Silver Pines Demo (App ID 4540100) has been live on Steam since June 1, 2026 and is a standalone free download, not a pre-order bonus. It is the only way to play the game before October 8, 2026.',
  },
  {
    question: 'How good is the Silver Pines demo?',
    answer:
      'As of September 16, 2026 the demo holds 802 Steam user reviews at 95.9% positive, which Steam labels Overwhelmingly Positive. For a game that has not launched, that is the single strongest evidence available that the underlying design works. It is worth reading some of the negative reviews too — they are mostly about deliberate slowness rather than broken systems.',
  },
  {
    question: 'How long is the demo?',
    answer:
      'Roughly an hour and a half for a first playthrough of the prologue slice it contains [Community-reported]. That includes the opening, the arrival in town and its tutorial beats, a quieter exploration stretch, a motel sequence with monsters, and a boss encounter that closes the demo out.',
  },
  {
    question: 'Which platforms is Silver Pines coming to?',
    answer:
      'PC via Steam and the Epic Games Store, PlayStation 5, Xbox Series X|S, Nintendo Switch and Nintendo Switch 2. The Steam build is Windows-only — Steam lists Windows as supported and macOS and Linux as unsupported. The free demo is PC-only; console players have no demo.',
  },
  {
    question: 'Is Silver Pines coming to PS5 and Switch?',
    answer:
      'Yes to both, and to Switch 2 as well. PlayStation 5, Xbox Series X|S, Nintendo Switch and Nintendo Switch 2 versions were announced alongside the PC release and share the October 8, 2026 date. Note that these console versions have not been individually re-confirmed page-by-page by this site for the launch date [Unconfirmed] — the Steam page is the only storefront we can read directly.',
  },
  {
    question: 'Is Silver Pines on Game Pass, PS Plus or Epic free?',
    answer:
      'No subscription or giveaway release has been announced as of September 16, 2026 [Unconfirmed]. Silver Pines is a paid release published by Team17. The Epic Games Store version is a normal paid listing, not an Epic free-week title.',
  },
  {
    question: 'Will there be a physical copy of Silver Pines?',
    answer:
      'None has been announced as of September 16, 2026 [Unconfirmed]. Every platform listing we could verify points to digital distribution only. “Silver Pines physical copy” is a real search query, so this is worth checking again closer to launch — but do not assume one exists.',
  },
  {
    question: 'Does Silver Pines autosave?',
    answer:
      'No. There is no autosave. You save by reaching a coin-operated phone booth and using coins to bank your progress [Community-reported]. If you die before you reach one, everything since your last save is gone — including any resources you picked up on the way.',
  },
  {
    question: 'How does the save coin system work?',
    answer:
      'Silver Pines uses a single currency for two things that compete with each other. You scavenge spare change around the town; vending machines sell you healing items, tape and ammunition; and the same coins are required to save your progress. Spending freely on supplies can leave you unable to save; hoarding coins to save leaves you short on supplies. Almost every meaningful decision in the game runs through that tension.',
  },
  {
    question: 'What do coins buy in Silver Pines?',
    answer:
      'Vending machines scattered around the town sell supplies in exchange for scavenged change — the store page and preview coverage point to healing items, tape and ammunition among them [partially Community-reported]. The same coins are also spent at phone booths to save. Exact per-item prices have not been published by any official source [Unconfirmed].',
  },
  {
    question: 'How does the inventory work?',
    answer:
      'It is deliberately small and grid-based. The official Steam description says plainly: “Inventory space is limited. Search everywhere for items because every bullet, bottle of medicine and upgrade matters.” Preview coverage adds that key areas contain storage containers where you can swap items in and out [Community-reported], so long trips become a question of what to carry rather than what you own.',
  },
  {
    question: 'Can you upgrade your inventory size?',
    answer:
      'Some form of capacity upgrade is widely reported by demo players, and the official store text refers generally to “upgrades” mattering [Community-reported, exact mechanism and cost Unconfirmed]. We have not seen an official source name the upgrade or state how many exist, so we do not publish a count or a location list.',
  },
  {
    question: 'Why do my melee weapons keep breaking?',
    answer:
      'Melee weapons in Silver Pines have limited durability and degrade quickly — every swing costs you. You repair them by applying tape, and the repair is not automatic: you perform it through the same real-time input sequence used elsewhere in combat [Community-reported]. Carrying tape matters as much as carrying a weapon.',
  },
  {
    question: 'Why does reloading take so long?',
    answer:
      'Because it is meant to. Reloading in Silver Pines is a manual, round-by-round action rather than a single button press, and it happens in real time — the game does not pause for it [Community-reported]. Preview coverage consistently describes reloading as leaving you exposed, and warns against doing it with an enemy nearby. Later in the game, Mementos can improve reload speed.',
  },
  {
    question: 'Does the game pause when I open my inventory or map?',
    answer:
      'No. Silver Pines does not pause — not for the inventory, not for the map, and not for the menu [Community-reported, and consistent across preview coverage]. Plan your menu time the way you plan your ammunition: somewhere you are not about to be attacked.',
  },
  {
    question: 'What is the stamina bar for?',
    answer:
      'Stamina in Silver Pines is spent on dodging and on swinging a melee weapon. Running does not drain it [Community-reported]. It is a short bar, and when it is empty you are effectively defenceless, so it functions as a second ammunition pool rather than a traversal meter.',
  },
  {
    question: 'What are Mementos?',
    answer:
      'Mementos are collectible items that act as buffs for Walker’s abilities — preview coverage cites faster reloading and improved health recovery as examples [Community-reported]. They are not puzzle keys. Exact Memento names, effects and counts have not been published by any official source [Unconfirmed].',
  },
  {
    question: 'Does Silver Pines have multiple endings?',
    answer:
      'Yes, but not in the branching-choice sense. In a Game8 interview, Wych Elm developer Mattias Snygg explained that all endings can be reached on a single save file, and that they are instead a reward for exploring the town thoroughly — an approach the studio chose to fit the game’s metroidvania structure.',
  },
  {
    question: 'How hard is Silver Pines?',
    answer:
      'It is a resource-management horror game rather than an action game: enemies hit hard, ammunition is scarce, stamina is short, and the game does not pause to let you think. Preview coverage from PC Gamer and others has noted that early melee combat feels slow and heavy by design. There is no announced difficulty setting [Unconfirmed].',
  },
  {
    question: 'Is Silver Pines gory?',
    answer:
      'Yes, to a degree. Steam’s content descriptor for the main game is general mature content, with the official note: “This game contains blood, violence, horror themes and general mature themes unsuitable for younger players.” The demo’s note is more explicit: “violence, gore, blood, alcohol reference and bad language throughout.” There is no nudity or sexual content descriptor on either.',
  },
  {
    question: 'Is Silver Pines scary in the jump-scare sense?',
    answer:
      'The game’s influences are atmospheric rather than jump-scare-driven — Lynch, Twin Peaks, Silent Hill and Alan Wake are the reference points the press consistently uses. The tension comes from resource scarcity and the cost of dying rather than from things leaping out at you, though there are monsters and bosses to fight.',
  },
  {
    question: 'Who developed Silver Pines?',
    answer:
      'Wych Elm developed Silver Pines, and Team17 published it. Wych Elm is a small remote studio whose members have worked on titles including Helldivers 2, The Darkness and Yoku’s Island Express; Silver Pines is its debut release. The split matters and is frequently misreported: Wych Elm develops, Team17 publishes.',
  },
  {
    question: 'Can my PC run Silver Pines?',
    answer:
      'The official Windows minimum is Windows 10, an Intel Core i5-4460 or AMD Ryzen 3 1200, 8 GB RAM, an NVIDIA GeForce GTX 660 Ti or AMD Radeon R9 270X, DirectX 12 and 5 GB of storage. Recommended is Windows 11, an Intel Core i5-6600 or AMD Ryzen 5 1600, 8 GB RAM, an NVIDIA GeForce GTX 770 or AMD Radeon R9 380, DirectX 12 and 5 GB of storage. Both figures come from the developer’s published Steam requirements. A GTX 660 Ti-class card means this is not a demanding game to run.',
  },
  {
    question: 'Does Silver Pines support controllers?',
    answer:
      'Yes. Steam lists full controller support, DualShock controller support and DualSense controller support, along with Steam Achievements, Steam Cloud and Family Sharing. Achievements are confirmed as a feature, but the achievement list had not been published as of September 16, 2026 [Unconfirmed].',
  },
  {
    question: 'Is Silver Pines Steam Deck verified?',
    answer:
      'No Steam Deck compatibility rating had been published as of September 16, 2026 [Unconfirmed]. The demo was reported as playable on Steam Deck by players, but that is Community-reported and not an official rating [Unconfirmed].',
  },
  {
    question: 'What languages does Silver Pines support?',
    answer:
      'Steam lists English, French, German, Spanish (Spain), Spanish (Latin America), Japanese, Simplified Chinese, Traditional Chinese, Portuguese (Brazil) and Russian. Only English is marked as having full audio support — the others are interface and subtitle translations.',
  },
  {
    question: 'Is Silver Pines multiplayer or co-op?',
    answer:
      'No. Steam lists single-player as the only play mode for both the main game and the demo. There is no co-op, no multiplayer and no PvP, and no online component has been announced.',
  },
  {
    question: 'Is there an official Silver Pines wiki or guide?',
    answer:
      'No organised wiki exists in English, Chinese or Japanese as of September 16, 2026. There is no Fandom, wiki.gg or Game8 wiki hub, and the one guide page that surfaces in search results is an automated template stub with no locations, items or walkthrough content. This site is an independent unofficial fan resource and is not affiliated with Wych Elm or Team17.',
  },
  {
    question: 'Is this website official?',
    answer:
      'No. Silver Pines Wiki is an unofficial fan-made resource. All game names, trademarks and content belong to their respective owners. Anything not documented by an official source is marked [Unconfirmed] rather than asserted as fact, and anything sourced from players rather than the developer is labelled as Community-reported.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqPageSchema(FAQ_ITEMS)} />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Silver Pines FAQ
      </h1>
      <p className="text-gray-400 mb-8">
        Common questions about Silver Pines — the survival horror metroidvania
        developed by Wych Elm and published by Team17. Release date, price,
        platforms, the free demo, the phone-booth save system, coins,
        inventory, combat and difficulty.
      </p>
      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
