import manifestJson from '../../public/images/images.json';
import { cheatHomeHeroSlides } from './product-catalog-en';
import type { ProductSlide } from './product-types';

export interface SiteImageEntry {
  page: string;
  slot: string;
  file: string;
  alt: string;
  width: number;
  height: number;
}

const manifest = manifestJson as SiteImageEntry[];

const DEFAULT_OG = {
  file: '/images/products/hwid-spoofer-hero.webp',
  alt: 'Black Ops 7 Spoofer on Windows PC',
  width: 1330,
  height: 840,
} as const;

function entryBySlot(slot: string): SiteImageEntry | undefined {
  return manifest.find((e) => e.slot === slot);
}

function blogSlugFromPage(page: string): string | null {
  const match = page.match(/^\/blog\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

export function getHomeHeroSlides(): ProductSlide[] {
  if (cheatHomeHeroSlides.length === 0) return [];
  return [...cheatHomeHeroSlides];
}

export function getHomeOgImage(): { src: string; alt: string; width: number; height: number } {
  const entry = entryBySlot('home-og');
  const src = entry?.file ?? DEFAULT_OG.file;
  const alt = entry?.alt ?? DEFAULT_OG.alt;
  const width = entry?.width ?? DEFAULT_OG.width;
  const height = entry?.height ?? DEFAULT_OG.height;
  return { src, alt, width, height };
}

export function getBlogHeroForSlug(slug: string): SiteImageEntry | undefined {
  return manifest.find((e) => e.slot === 'blog-hero' && blogSlugFromPage(e.page) === slug);
}

export function applyBlogHeroFromManifest<T extends { slug: string; image: string; imageAlt?: string }>(
  post: T,
): T & { imageWidth?: number; imageHeight?: number } {
  const hero = getBlogHeroForSlug(post.slug);
  if (!hero) return post;
  return {
    ...post,
    image: hero.file,
    imageAlt: hero.alt,
    imageWidth: hero.width,
    imageHeight: hero.height,
  };
}