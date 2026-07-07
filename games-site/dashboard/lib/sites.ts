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
    propertyId: 'REPLACE_WITH_PROPERTY_ID',
    gaId: 'G-REPLACE_WITH_GA_ID',
  },
];
