// ---------------------------------------------------------------------------
// Site registry — add one entry per site. That's it.
// ---------------------------------------------------------------------------
// GA4 numeric Property ID: find in GA Admin → Property Settings → Property ID
// GA4 Measurement ID:      G-XXXXXXXXXX format, used only for reference
// ---------------------------------------------------------------------------

export interface SiteConfig {
  name: string;
  propertyId: string; // numeric, e.g. "543617553"
  gaId: string; // G-XXXXXXXXXX format, for reference
  createdAt?: string; // YYYY-MM-DD — 该站在 git 里的首次提交日（建站日）
}

export const SITES: SiteConfig[] = [
  {
    name: 'WitchSpire Wiki',
    propertyId: '543617553',
    gaId: 'G-VJWN6CZ5PM',
    createdAt: '2026-06-30',
  },
  {
    name: 'Mistfall Hunter Wiki',
    propertyId: '544188205',
    gaId: 'G-PHHQH61FLC',
    createdAt: '2026-07-04',
  },
  {
    name: 'Aincrad Wiki',
    propertyId: '544523266',
    gaId: 'G-109H13Q3KN',
    createdAt: '2026-07-07',
  },
  {
    name: 'The Mound Wiki',
    propertyId: '545127645',
    gaId: 'G-KDMF9VH9EZ',
    createdAt: '2026-07-11',
  },
  {
    name: 'SpiritVale Wiki',
    propertyId: '545140651',
    gaId: 'G-LMNG7L3GHJ',
    createdAt: '2026-07-12',
  },
  {
    name: 'Skills & Raids Wiki',
    propertyId: '546086695',
    gaId: 'G-393K5RDZ0B',
    createdAt: '2026-07-14',
  },
  {
    name: 'MineGeon Wiki',
    propertyId: '546785674',
    gaId: 'G-GWZ0DR4S01',
    createdAt: '2026-07-20',
  },
  {
    name: 'Sephiria Wiki',
    propertyId: '546785781',
    gaId: 'G-JP8PP1V90D',
    createdAt: '2026-07-20',
  },
  {
    name: 'Delverium Wiki',
    propertyId: '549182076',
    gaId: 'G-79NJB5KFHX',
    createdAt: '2026-08-02',
  },
  {
    name: 'DinoBlade Wiki',
    propertyId: '546785675',
    gaId: 'G-E6FDYLD3S2',
    createdAt: '2026-07-20',
  },
  {
    name: 'Echoes of Mystralia Wiki',
    propertyId: '546789393',
    gaId: 'G-16X86K2J44',
    createdAt: '2026-07-22',
  },
  {
    name: 'Tears of Metal Wiki',
    propertyId: '547226554',
    gaId: 'G-YDQ050PFB4',
    createdAt: '2026-07-23',
  },
  {
    name: 'Grain Rot Wiki',
    propertyId: '547259558',
    gaId: 'G-KFV2F7XT4J',
    createdAt: '2026-07-24',
  },
  {
    name: 'DragonSword Wiki',
    propertyId: '547224295',
    gaId: 'G-709FGNFQEM',
    createdAt: '2026-07-24',
  },
  {
    name: 'Dwarf Delve Wiki',
    propertyId: '547227774',
    gaId: 'G-6PG5B1FMPG',
    createdAt: '2026-07-25',
  },
  {
    name: 'Lunarium Wiki',
    propertyId: '547258651',
    gaId: 'G-G4GPXYJW7C',
    createdAt: '2026-07-26',
  },
  {
    name: 'Taival Wiki',
    propertyId: '547745827',
    gaId: 'G-6EBSLPDH5P',
    createdAt: '2026-07-27',
  },
  {
    name: "Vahrin's Call Wiki",
    propertyId: '547730273',
    gaId: 'G-0NTT5WMLGF',
    createdAt: '2026-07-28',
  },
  {
    name: "The Relic: First Guardian Wiki",
    propertyId: '547734314',
    gaId: 'G-JEEKBP66NL',
    createdAt: '2026-07-28',
  },
  {
    name: 'Graphite Wiki',
    propertyId: '547705730',
    gaId: 'G-1K2RZYN021',
    createdAt: '2026-07-29',
  },
  {
    name: 'Shift At Midnight Wiki',
    propertyId: '547695946',
    gaId: 'G-M8577QD2NQ',
    createdAt: '2026-07-29',
  },
  {
    name: 'Bonehold Wiki',
    propertyId: '547702399',
    gaId: 'G-FETT7T07F7',
    createdAt: '2026-07-30',
  },
  {
    name: 'Moonlight Peaks Wiki',
    propertyId: '548063476',
    gaId: 'G-Q2T75BBQN6',
    createdAt: '2026-07-31',
  },
  {
    name: 'Phantom Tower Wiki',
    propertyId: '548062479',
    gaId: 'G-D2LXC98S3C',
    createdAt: '2026-07-30',
  },
  {
    name: 'Ardent Wilds Wiki',
    propertyId: '548067951',
    gaId: 'G-16S551280V',
    createdAt: '2026-07-31',
  },
  {
    name: 'Go-Go Town! Wiki',
    propertyId: '548062566',
    gaId: 'G-BLSQ0N9M26',
    createdAt: '2026-08-01',
  },
  {
    name: 'Expeditions: Samurai Wiki',
    propertyId: '548062969',
    gaId: 'G-D09S2186H2',
    createdAt: '2026-08-01',
  },
  {
    name: 'Low-Budget Repairs Wiki',
    propertyId: '549191869',
    gaId: 'G-94GLV86TJZ',
    createdAt: '2026-08-03',
  },
  {
    name: 'Big Walk Wiki',
    propertyId: '549150733',
    gaId: 'G-107M9FTLTE',
    createdAt: '2026-08-04',
  },
  {
    name: 'IRON NEST Wiki',
    propertyId: '549157204',
    gaId: 'G-1HJWW5Z0S8',
    createdAt: '2026-08-06',
  },
  {
    name: 'Nivalis Nights Wiki',
    propertyId: '549196459',
    gaId: 'G-WH2SMVV8EB',
    createdAt: '2026-08-07',
  },
  {
    name: 'ReStory Wiki',
    propertyId: '549220928',
    gaId: 'G-ND1MCMNPCZ',
    createdAt: '2026-08-08',
  },
  {
    name: 'Beast of Reincarnation Wiki',
    propertyId: '549225649',
    gaId: 'G-LNXR9K40HE',
    createdAt: '2026-08-08',
  },
  {
    name: 'Waterpark Simulator Wiki',
    propertyId: '549187577',
    gaId: 'G-JMLQMKR4X4',
    createdAt: '2026-08-08',
  },
  {
    name: 'Crimson Moon Wiki',
    propertyId: '560644715',
    gaId: 'G-2MXQE542D4',
    createdAt: '2026-08-28',
  },
  {
    name: 'Welcome to Elderfield Wiki',
    propertyId: '560568171',
    gaId: 'G-GZTL467FJW',
    createdAt: '2026-08-31',
  },
  {
    name: 'Fallen Tear: The Ascension Wiki',
    propertyId: '560586314',
    gaId: 'G-Z3RZ4S5KPH',
    createdAt: '2026-08-31',
  },
  {
    name: 'BOMBANANA! Wiki',
    propertyId: '560599766',
    gaId: 'G-J5TCLQ5DY6',
    createdAt: '2026-09-02',
  },
  {
    name: 'Anomaly President Wiki',
    propertyId: '560566538',
    gaId: 'G-WHHJ5Y6BR8',
    createdAt: '2026-09-06',
  },
  {
    name: 'Dressmaker Wiki',
    propertyId: '560567228',
    gaId: 'G-PYE3YT7GK7',
    createdAt: '2026-09-12',
  },
  {
    // BUILD-009 — deployed 2026-09-16, Steam launch 2026-10-08.
    // GA4 property created 2026-10-24; site config injected the same day.
    name: 'Silver Pines Wiki',
    propertyId: '560583600',
    gaId: 'G-YGYXR5Q3KX',
    createdAt: '2026-09-16',
  },
  {
    name: 'Doloc Town Wiki',
    propertyId: '560560698',
    gaId: 'G-P43XZEPSCG',
    createdAt: '2026-08-22',
  },
  {
    name: 'Sovereign Tower Wiki',
    propertyId: '560600698',
    gaId: 'G-BDETT6CRYJ',
    createdAt: '2026-08-25',
  },
  {
    name: 'Cozy Game Restoration Wiki',
    propertyId: '560553821',
    gaId: 'G-YHTL4KQ97P',
    createdAt: '2026-10-24',
  },
  {
    name: 'DREADMOOR Wiki',
    propertyId: '560663534',
    gaId: 'G-264X3F7FYX',
    createdAt: '2026-10-24',
  },
  {
    name: 'Neon Abyss 2 Wiki',
    propertyId: '560679639',
    gaId: 'G-0JXZXK4RTC',
    createdAt: '2026-10-26',
  },
  {
    name: 'GONE Fishing Horror Game Wiki',
    propertyId: '560896833',
    gaId: 'G-0W6Q6W9N60',
  },
  {
    name: 'REKA Game Wiki',
    propertyId: '560923329',
    gaId: 'G-Q9SSN3Y6W7',
  },
];
