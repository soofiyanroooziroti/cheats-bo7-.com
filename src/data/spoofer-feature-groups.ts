import type { ProductFeatureGroup } from './product-types';

function spooferFeature(name: string, desc: string): ProductFeatureGroup {
  return { name, items: [{ name, desc }] };
}

/** Matches catalog card bullets — no extra modules beyond the store lineup. */
export const SPOOFER_FEATURE_GROUPS: ProductFeatureGroup[] = [
  spooferFeature(
    'Hardware spoofer + cleaner',
    'Zadeyo lists a cleaner with the HWID spoofer.',
  ),
  spooferFeature(
    'Compatibility scan',
    'Ask the provider which Windows builds it currently supports.',
  ),
  spooferFeature(
    'Verification steps',
    'Review the provider’s compatibility information before purchase.',
  ),
  spooferFeature(
    'Portal workflow',
    'Setup instructions are available from the provider.',
  ),
];