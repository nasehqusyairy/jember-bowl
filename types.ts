
export interface MenuItem {
  id: string;
  name: string;
  rating: number;
  image: string;
  tagline?: string;
  isPopular?: boolean;
}

export interface PromoItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'tentang',
  VALUES = 'keunggulan',
  MENU = 'menu',
  PROMO = 'promo',
  ORDER = 'order',
  CONTACT = 'kontak'
}
