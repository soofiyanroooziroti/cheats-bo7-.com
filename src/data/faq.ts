import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES, localizedPath, localizedRoutes, cheatPath } from '../utils/path-core';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('BO7 Cheats', productPath('bo7-cheat'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('spoofer'));
const ugc = link('UGC Account recovery', productPath('ugc'));
const statusPage = link('status page', ROUTES.status);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if the loader is current?',
    a: `Open the ${statusPage} for the latest compatibility information. A pending status means compatibility has yet to be confirmed.`,
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: 'Follow the delivery instructions for the product you selected at checkout. Keep your order ID in case you need support.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned?',
    a: 'Yes. Activision can restrict accounts for using unauthorized software.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What is an HWID flag, and does the cheat key fix it?',
    a: `A hardware flag follows the PC. New accounts can fail on that machine and work on another. That is the ${hwid}, sold separately. It does not undo an account-only restriction, and lifetime on ${cheats} does not include it.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which PCs are supported?',
    a: 'The products here are listed for Windows PC. Activision lists 64-bit Windows, TPM 2.0, and Secure Boot among its game requirements. Check the provider for current product compatibility.',
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can I move a key to another PC?',
    a: 'Open support on Discord with your order ID from checkout. A machine that fails new accounts is an HWID Spoofer purchase, not a free move of the cheat key.',
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is for sale?',
    a: `${cheats} and ${ugc} are $35 for 30 days or $150 lifetime. ${hwid} is $50 for 30 days or $150 lifetime. All three are listed on the ${productsHub} as separate checkouts.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does $150 lifetime include the spoofer?',
    a: 'No. Lifetime on BO7 Cheats is that product only. The HWID spoofer and UGC recovery are separate keys. The spoofer is $50 monthly or $150 lifetime; the cheat and UGC are $35 monthly or $150 lifetime. A monthly start does not promise a credit toward lifetime.',
    scopes: ['bo7-cheat', 'hwid-spoofer', 'ugc'],
  },
  {
    id: 'not-dma',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Is this a DMA card?',
    a: 'No. BO7 Cheats is a Windows loader from checkout. A DMA device is a different product and is not what this key delivers. Do not run a file that arrived from a search result.',
    scopes: ['bo7-cheat'],
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does UGC Account recovery do?',
    a: `${ugc} is an appeal workspace: templates, evidence lists, and follow-up. It is not a guaranteed unban, and it is not the HWID spoofer.`,
    scopes: ['ugc'],
  },
  {
    id: 'spoofer-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When is the HWID spoofer the right buy?',
    a: `Use ${hwid} when a new account fails on one PC and works on another. It does not fix an account-only restriction. Buy ${ugc} for that case instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'aimbot-scope',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Aimbot do in Black Ops 7?',
    a: 'Aimbot is aim assistance on the BO7 Cheats loader for Call of Duty: Black Ops 7. It is one of the eight features on the cheat product page.',
    scopes: ['bo7-cheat'],
  },
  {
    id: 'feature-scope',
    topic: 'esp',
    icon: 'faqPlatforms',
    q: 'Which Black Ops 7 features are included?',
    a: 'Aimbot, ESP, Wallhack, Radar, Triggerbot, No recoil control, Speed, and Stream-proof. Those eight are listed on the cheat product page.',
    scopes: ['bo7-cheat'],
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Plans, cheat modules, the loader, the spoofer, UGC, and setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'See the full FAQ for checkout and setup questions.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats}. The feature list on that page is the checkout source of truth.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: 'Open support on Discord with your order ID and the article title. Include the exact loader text if something fails.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: 'Re-check after every Black Ops 7 or RICOCHET update. Reload a saved config instead of copying old slider values from a post.',
  },
];

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return defaultBlogFaqs;
}

export const compareRows = [
  { feature: 'Aimbot', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'recoil control', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'ESP', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Aiming and Weapon Control', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save / load', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'HWID spoofer (separate key)', icon: 'compareCloudBackup' as const, lite: false, pro: false, elite: false },
];
