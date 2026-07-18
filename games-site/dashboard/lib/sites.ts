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
];
