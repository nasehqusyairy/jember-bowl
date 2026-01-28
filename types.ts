
export interface MenuItem {
  type: number;
  id: string;
  name: string;
  rating: number;
  image: string;
  tagline?: string;
  isPopular?: boolean;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isPromo?: boolean;
}

export interface PromoItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
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
