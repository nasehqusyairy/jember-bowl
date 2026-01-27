
import { MenuItem, PromoItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Cumi Ciamik', rating: 5.0, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80', tagline: 'Puas, Kenyang, Higienis' },
  { id: '2', name: 'Ayam Veteran', rating: 5.0, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', tagline: 'Puas, Kenyang, Higienis' },
  { id: '3', name: 'Blackpepper', rating: 5.0, image: 'https://images.unsplash.com/photo-1562607349-2c7009477610?auto=format&fit=crop&w=400&q=80', tagline: 'Puas, Kenyang, Higienis' },
  { id: '4', name: 'Salted Egg', rating: 5.0, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80', tagline: 'Puas, Kenyang, Higienis', isPopular: true },
  { id: '5', name: 'Ayam Geprek', rating: 5.0, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', tagline: 'Puas, Kenyang, Higienis' },
  { id: '6', name: 'Asam Manis', rating: 5.0, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80', tagline: 'Ayam Asam Manis Sejuta Rasa', isPopular: true },
  { id: '7', name: 'Wings Bowl', rating: 5.0, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=400&q=80' },
  { id: '8', name: 'Miebowl Geprek', rating: 5.0, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', isPopular: true },
];

export const PROMO_ITEMS: PromoItem[] = [
  { id: 'p1', title: 'Special Promo Kemerdekaan', description: '3 Rice Bowl + 3 Es Teh + Kerupuk Keong cuma 80K!', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' },
  { id: 'p2', title: 'Promo Khusus MABA', description: 'All Varian cuma 19.5K untuk Mahasiswa Baru!', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
];

export const BRAND_COLORS = {
  primary: '#8B4513', // Brown
  mustard: '#D49A1F', // Mustard Gold
  background: '#FDFCE6', // Light Cream
  text: '#4A3428', 
};

export const CONTACT_INFO = {
  phone: '085855747776',
  email: 'jemberbowl@gmail.com',
  address: 'Jember, Jawa Timur, Indonesia',
  halalId: 'ID35110020810251124',
  instagram: '@jemberbowl',
  tiktok: '@Jember.bowl'
};
