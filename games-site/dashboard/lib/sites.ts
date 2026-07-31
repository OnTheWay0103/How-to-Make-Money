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
}

export const SITES: SiteConfig[] = [
  {
    name: 'WitchSpire Wiki',
    propertyId: '543617553',
    gaId: 'G-VJWN6CZ5PM',
  },
  {
    name: 'Mistfall Hunter Wiki',
    propertyId: '544188205',
    gaId: 'G-PHHQH61FLC',
  },
  {
    name: 'Aincrad Wiki',
    propertyId: '544523266',
    gaId: 'G-109H13Q3KN',
  },
  {
    name: 'The Mound Wiki',
    propertyId: '545127645',
    gaId: 'G-KDMF9VH9EZ',
  },
  {
    name: 'SpiritVale Wiki',
    propertyId: '545140651',
    gaId: 'G-LMNG7L3GHJ',
  },
  {
    name: 'Skills & Raids Wiki',
    propertyId: '546086695',
    gaId: 'G-393K5RDZ0B',
  },
  {
    name: 'MineGeon Wiki',
    propertyId: '546785674',
    gaId: 'G-GWZ0DR4S01',
  },
  {
    name: 'Sephiria Wiki',
    propertyId: '546785781',
    gaId: 'G-JP8PP1V90D',
  },
  {
    name: 'DinoBlade Wiki',
    propertyId: '546785675',
    gaId: 'G-E6FDYLD3S2',
  },
  {
    name: 'Echoes of Mystralia Wiki',
    propertyId: '546789393',
    gaId: 'G-16X86K2J44',
  },
  {
    name: 'Tears of Metal Wiki',
    propertyId: '547226554',
    gaId: 'G-YDQ050PFB4',
  },
  {
    name: 'Grain Rot Wiki',
    propertyId: '547259558',
    gaId: 'G-KFV2F7XT4J',
  },
  {
    name: 'DragonSword Wiki',
    propertyId: '547224295',
    gaId: 'G-709FGNFQEM',
  },
  {
    name: 'Dwarf Delve Wiki',
    propertyId: '547227774',
    gaId: 'G-6PG5B1FMPG',
  },
  {
    name: 'Lunarium Wiki',
    propertyId: '547258651',
    gaId: 'G-G4GPXYJW7C',
  },
  {
    name: 'Taival Wiki',
    propertyId: '547745827',
    gaId: 'G-6EBSLPDH5P',
  },
  {
    name: "Vahrin's Call Wiki",
    propertyId: '547730273',
    gaId: 'G-0NTT5WMLGF',
  },
  {
    name: "The Relic: First Guardian Wiki",
    propertyId: '547734314',
    gaId: 'G-JEEKBP66NL',
  },
  {
    name: 'Graphite Wiki',
    propertyId: '547705730',
    gaId: 'G-1K2RZYN021',
  },
  {
    name: 'Shift At Midnight Wiki',
    propertyId: '547695946',
    gaId: 'G-M8577QD2NQ',
  },
  {
    name: 'Bonehold Wiki',
    propertyId: '547702399',
    gaId: 'G-FETT7T07F7',
  },
  {
    name: 'Moonlight Peaks Wiki',
    propertyId: '',
    gaId: 'G-PLACEHOLDER',
  },
  {
    name: 'Phantom Tower Wiki',
    propertyId: '',
    gaId: 'G-PLACEHOLDER',
  },
  {
    name: 'Ardent Wilds Wiki',
    propertyId: '',
    gaId: 'G-PLACEHOLDER',
  },
];
