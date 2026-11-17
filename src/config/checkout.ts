import { CHECKOUT_URLS } from './checkout-redirects.mjs';

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  bo7Cheat: 'bo7-cheat',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Affiliate checkout hops (/go/… and zadeyo.com). */
export const CHECKOUT_LINK_REL = 'sponsored nofollow noopener';

export function isZadeyoHref(href: string): boolean {
  return (
    href.includes('zadeyo.com') ||
    /^\/go\/(bo7-cheat|the-isle-cheat|hwid-spoofer|ugc)(\/|\?|$)/.test(href)
  );
}

export function checkoutPath(product: CheckoutProduct = 'bo7Cheat'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('bo7Cheat');

export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'spoofer':
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'ugc-account-recovery':
      return checkoutPath('ugc');
    case 'bo7-cheat':
    case 'the-isle-cheat':
    default:
      return checkoutPath('bo7Cheat');
  }
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fcall-of-duty-black-ops-7') || href.includes('/products/call-of-duty-black-ops-7')) {
    return checkoutPath('bo7Cheat');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }

  return href;
}