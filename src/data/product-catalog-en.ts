import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { BO7_CHEAT_FEATURE_GROUPS } from './bo7-cheat-feature-groups';
import { SPOOFER_FEATURE_GROUPS } from './spoofer-feature-groups';
import { UGC_FEATURE_GROUPS } from './ugc-feature-groups';
import { CHEAT_MENU_SCREENSHOT_SLIDES, HOME_HERO_MENU_SLIDES } from './menu-gallery-images';

export { CHEAT_MENU_SCREENSHOT_SLIDES } from './menu-gallery-images';

/** Home hero menu + gameplay gallery. */
export const cheatHomeHeroSlides: ProductSlide[] = [...HOME_HERO_MENU_SLIDES];

const spooferSlides: ProductSlide[] = [
  {
    src: '/images/products/hwid-spoofer-hero.webp',
    alt: 'Black Ops 7 Spoofer on Windows PC',
    caption: 'HWID spoofer',
    captionDesc: 'Hardware fingerprint tools before you relaunch Black Ops 7.',
  },
  {
    src: '/images/products/hwid-spoofer-board.webp',
    alt: 'Black Ops 7 Spoofer hardware fingerprint rotation on Windows PC',
    caption: 'Phoenix board',
    captionDesc: 'Hardware utility preview.',
  },
  {
    src: '/images/products/hwid-spoofer-brand.webp',
    alt: 'Black Ops 7 Spoofer branding on Windows PC',
    caption: 'Phoenix WH',
    captionDesc: 'Spoofer workspace used on every store.',
  },
];

const ugcSlides: ProductSlide[] = [
  {
    src: '/images/products/ugc-account-recovery.webp',
    alt: 'Account appeal workspace preview',
    caption: 'Unban tool',
    captionDesc: 'Appeal templates and recovery steps for restricted Black Ops 7 accounts.',
  },
];

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Check the current compatibility status before buying, especially after a game update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: "Choose a monthly or lifetime USD plan for your product.",
  },
  {
    num: '03',
    title: 'Secure checkout',
    desc: 'Follow the delivery instructions at checkout.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup guide, load a conservative preset, and test in a low-stakes mode before main play.',
  },
];

export const utilitySlides = {
  spoofer: spooferSlides,
  ugc: ugcSlides,
} as const;

export const cheatsContent = {
  images: [] as ProductSlide[],
  goodToKnow:
    'Black Ops 7 and RICOCHET update often. Confirm availability on cheatsbo7.com before you launch. Menu behavior may differ in Multiplayer and Zombies after patches.',
  limitations:
    'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility can change after game, RICOCHET, or Windows updates without notice.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'WINDOWS 10 and 11 both supported' },
    { icon: 'reqShieldGuide', text: 'HVCI ON' },
    { icon: 'reqSettings', text: 'CORE ISOLATION ON' },
    { icon: 'shieldCheck', text: 'TPM ON' },
    { icon: 'reqShieldAccount', text: 'SECURE BOOT ON' },
  ] as SystemRequirement[],
  featureGroups: BO7_CHEAT_FEATURE_GROUPS,
  overview: {
    title: 'Built for Black Ops 7 on Windows PC',
    paragraphs: [
      'The loader combines aiming, visibility, movement, and capture options in one Windows PC menu.',
      'Always check availability on cheatsbo7.com before you launch, especially after a RICOCHET or Black Ops 7 client patch.',
    ],
  },
  body: [
    { type: 'h2', text: 'Modules included' },
    {
      type: 'p',
      text: "The loader includes all eight features listed above.",
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y). Check the provider’s delivery instructions at checkout.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'Zadeyo lists Black Ops 7 among the games supported by its HWID spoofer. Ask the provider about current compatibility before buying.',
  limitations:
    'Spoofing carries technical risk and may violate game terms. Results vary by ban type and driver setup. Use only on systems you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: SPOOFER_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.name)),
  featureGroups: SPOOFER_FEATURE_GROUPS,
  overview: {
    title: 'Black Ops 7 Spoofer workflow',
    paragraphs: [
      "Compare Call of Duty spoofer plans for Windows PC. The Black Ops 7 spoofer is $50 monthly or $150 lifetime in USD.",
      'Monthly and lifetime USD plans use the same checkout flow as the rest of the lineup.',
    ],
  },
  body: [
    { type: 'h2', text: 'When to use it' },
    {
      type: 'p',
      text: 'Activision distinguishes account penalties from hardware bans. Check your enforcement status before buying a product for an account restriction.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $50 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};

export const ugcContent = {
  images: [...utilitySlides.ugc],
  goodToKnow:
    'Check appeal eligibility through Activision before paying for a tool to organize an appeal.',
  limitations:
    'Activision decides appeals. Its policy excludes temporary bans, limited matchmaking, and hardware bans from the appeal process.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
    { icon: 'reqWifi', text: 'Internet access for workflow sync and updates.' },
    { icon: 'reqSettings', text: 'Administrator access for installation.' },
  ] as SystemRequirement[],
  fullFeatures: UGC_FEATURE_GROUPS.map((g) => g.name),
  featureGroups: UGC_FEATURE_GROUPS,
  overview: {
    title: 'BO7 unban tool workspace',
    paragraphs: [
      'BO7 unban tool helps organize ban appeals and recovery cases with templates, evidence lists, and follow-up reminders.',
      'See the provider’s delivery terms at checkout. Use Discord for order and setup questions.',
    ],
  },
  body: [
    { type: 'h2', text: 'BO7 Unban appeals' },
    {
      type: 'p',
      text: 'Use the BO7 unban workspace to organize an eligible appeal. Activision asks users to submit through its own portal and treats appeal decisions as final.',
    },
    { type: 'h2', text: 'BO7 Unban evidence' },
    {
      type: 'p',
      text: 'Use checklists so each BO7 unban packet includes screenshots, timestamps, and the policy section you are citing.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};