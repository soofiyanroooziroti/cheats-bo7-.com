import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'faq'; question: string; answer: string }
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string };

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPostFull extends BlogPost {
  featured?: boolean;
  showProductCtas?: boolean;
  author?: string;
  seoTitle?: string;
  dateIso?: string;
  relatedSlugs?: string[];
  faqs?: BlogFaq[];
  imageWidth?: number;
  imageHeight?: number;
  body: BlogBlock[];
}
