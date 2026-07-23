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
    propertyId: '15238858433',
    gaId: 'G-KDMF9VH9EZ',
  },
  {
    name: 'SpiritVale Wiki',
    propertyId: '15242470783',
    gaId: 'G-LMNG7L3GHJ',
  },
  {
    name: 'Skills & Raids Wiki',
    propertyId: '15277928982',
    gaId: 'G-393K5RDZ0B',
  },
  {
    name: 'MineGeon Wiki',
    propertyId: '15306883268',
    gaId: 'G-GWZ0DR4S01',
  },
  {
    name: 'Sephiria Wiki',
    propertyId: '15307058733',
    gaId: 'G-JP8PP1V90D',
  },
  {
    name: 'DinoBlade Wiki',
    propertyId: '15307117321',
    gaId: 'G-E6FDYLD3S2',
  },
  {
    name: 'Echoes of Mystralia Wiki',
    propertyId: '15307144004',
    gaId: 'G-16X86K2J44',
  },
  {
    name: 'Tears of Metal Wiki',
    propertyId: 'PLACEHOLDER',
    gaId: 'G-PLACEHOLDER',
  },
  {
    name: 'Grain Rot Wiki',
    propertyId: 'PLACEHOLDER',
    gaId: 'G-PLACEHOLDER',
  },
];
