import type { ProductSlide } from './product-types';

export const HOME_HERO_MENU_SLIDES: ProductSlide[] = [
  {
    src: '/images/bo7-esp-garage-enemy-distance.webp',
    alt: "BO7 ESP boxes showing enemy distance at a garage entrance",
    width: 1672,
    height: 941,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-cheat-menu-visuals.webp',
    alt: "BO7 cheat menu Visuals tab with player ESP, box, skeleton, name, distance and radar options",
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-esp-skeleton-garage-street.webp',
    alt: "BO7 ESP skeleton and box overlay on enemies in a garage street",
    width: 1672,
    height: 941,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-cheat-menu-aimbot.webp',
    alt: "BO7 cheat menu Aimbot tab with no recoil control options",
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-esp-box-storage-area.webp',
    alt: "BO7 ESP box around an enemy in a storage area while aiming down sights",
    width: 1672,
    height: 941,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-cheat-menu-misc.webp',
    alt: "BO7 cheat menu Misc tab with menu key, panic key, stream-proof and save/load config options",
    width: 1330,
    height: 840,
    objectFit: 'contain',
  },
  {
    src: '/images/bo7-rooftop-city-map-gameplay.webp',
    alt: "BO7 first-person gameplay on a city map with the minimap and score visible",
    width: 2400,
    height: 1350,
    objectFit: 'contain',
  },
];

/** The three menu tabs shown on the BO7 cheat product page. */
export const CHEAT_MENU_SCREENSHOT_SLIDES = HOME_HERO_MENU_SLIDES.filter((slide) =>
  slide.src.startsWith('/images/bo7-cheat-menu-'),
);
