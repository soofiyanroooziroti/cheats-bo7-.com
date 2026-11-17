export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    "title": "BO7 Cheats for Windows PC | Features, Plans and Setup",
    "description": "BO7 Cheats for Windows PC includes a game loader, with separate HWID spoofer and account appeal tools. Compare monthly and lifetime USD plans."
  },
  "/product/": {
    "title": "BO7 Cheats Price | Compare Monthly and Lifetime Plans",
    "description": "Compare the BO7 Cheats price for the loader, HWID spoofer, and account appeal tool. See monthly and lifetime USD plans for all three products."
  },
  "/product/bo7-cheat/": {
    "title": "Black Ops 7 Cheats for Windows PC | Features and Plans",
    "description": "Black Ops 7 cheats for Windows PC include Aimbot, ESP, Triggerbot, no recoil control, Wallhack, Radar, Speed and Stream-proof. Compare both USD plans."
  },
  "/product/spoofer/": {
    "title": "Call of Duty Spoofer | Black Ops 7 Spoofer PC Plans",
    "description": "Compare Call of Duty spoofer plans for Windows PC. The Black Ops 7 spoofer is $50 monthly or $150 lifetime in USD. Check compatibility before buying."
  },
  "/product/ugc/": {
    "title": "BO7 Unban Tool for Windows PC | Account Appeal Plans",
    "description": "The BO7 unban tool organizes appeal drafts, supporting evidence and follow-ups on Windows PC. Compare $35 monthly and $150 lifetime USD plans here."
  },
  "/blog/": {
    "title": "Black Ops 7 Guides | PC Setup, Features and RICOCHET",
    "description": "Read Black Ops 7 guides on PC setup, loader features and RICOCHET. Learn how the spoofer and account appeal tools differ before comparing USD plans."
  },
  "/forum/": {
    "title": "Black Ops 7 Forum | Feature Discussions and PC Setup",
    "description": "Browse example Black Ops 7 discussions about aiming, ESP, radar and Windows setup. Follow nested replies and linked guides for each product topic."
  },
  "/faq/": {
    "title": "BO7 Product FAQ | Plans, PC Setup and RICOCHET Questions",
    "description": "Find answers about BO7 product plans, checkout, Windows requirements and RICOCHET. Compare the loader, HWID spoofer and account appeal tool before buying."
  },
  "/support/": {
    "title": "BO7 Product Support | Windows PC Setup and Checkout Help",
    "description": "Get BO7 product help with Windows setup, license delivery and checkout. Use Discord with your order ID, Windows version and the full error message."
  },
  "/about/": {
    "title": "About BO7 Cheats | Products, Delivery and Discord Support",
    "description": "Learn what BO7 Cheats sells, how digital delivery and support work, and what to check about PC compatibility and account risk before checkout."
  },
  "/privacy/": {
    "title": "Privacy Policy | BO7 Store Analytics and Checkout Data",
    "description": "Read how cheatsbo7.com handles website analytics, cookies and support information. Payment details are handled by the external checkout provider."
  },
  "/terms/": {
    "title": "Terms of Use | BO7 Store Licenses, Refunds and Purchases",
    "description": "Read the license, refund and use terms for BO7 products on Windows PC. Review separate product purchases, delivery and account risks before checkout."
  },
  "/status/": {
    "title": "BO7 Cheats Status | Current Build and Game Patch Notes",
    "description": "Check BO7 Cheats status, current build information and recent Black Ops 7 patches. Review compatibility information after game or RICOCHET updates."
  }
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}