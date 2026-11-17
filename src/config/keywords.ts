/** Primary keyword per core URL (null = no dedicated keyword). Value may be an array when multiple phrases belong to one page. */
export const PAGE_KEYWORDS: Record<string, string | string[] | null> = {
  '/': 'bo7 cheats',
  '/product/': 'bo7 cheats price',
  '/product/bo7-cheat/': 'black ops 7 cheats',
  '/product/spoofer/': ['call of duty spoofer', 'black ops 7 spoofer'],
  '/product/ugc/': 'bo7 unban tool',
  '/blog/': null,
  '/forum/': null,
  '/faq/': null,
  '/support/': null,
  '/about/': null,
  '/privacy/': null,
  '/terms/': null,
  '/status/': null,
};

/** noindex routes — not in the indexable keyword map; overlap with home primaries is fine. */
export const NOINDEX_CANNIBALISM_SKIP = new Set(['/status/', '/404/']);

export const PRODUCT_H1: Record<string, string> = {
  'bo7-cheat': 'Black Ops 7 Cheats for Windows PC',
  spoofer: 'Call of Duty Spoofer for Windows PC (Black Ops 7 Spoofer)',
  ugc: 'BO7 Unban tool for Windows PC',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string | string[]> = {
  'bo7-cheat': 'black ops 7 cheats',
  spoofer: ['call of duty spoofer', 'black ops 7 spoofer'],
  ugc: 'bo7 unban tool',
};

export function primaryKeywords(): string[] {
  const out: string[] = [];
  for (const value of Object.values(PAGE_KEYWORDS)) {
    if (!value) continue;
    if (Array.isArray(value)) out.push(...value);
    else out.push(value);
  }
  return out;
}

export function keywordsForPath(pathname: string): string[] {
  const entry = PAGE_KEYWORDS[pathname];
  if (!entry) return [];
  return Array.isArray(entry) ? entry : [entry];
}