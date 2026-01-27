import { MenuItem, PromoItem } from './types';
import paketBerduaImage from './images/paket-berdua.jpeg'
import promoBundlingImage from './images/promo-bundling.jpeg'
import promoValentineImage from './images/promo-valentine.jpeg'

// MENU_ITEMS list based on the provided data, ensuring all required fields like 'price' are present.
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Salted Egg",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024042802150416611/detail/menueditor_item_4ddc30bbf06d4ddd92e3546eb85e5314_1768913784018463284.webp",
    tagline: "Nasi, Ayam Crispy, Scrambel Egg, Spicy salted Egg, Sayuran Timun",
    price: 30000
  },
  {
    id: "2",
    name: "Ayam Geprek",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024060903522364950/detail/menueditor_item_7d232acd365b4eab8e286a68e9c29eba_1768969874958845867.webp",
    tagline: "Nasi, Ayam Crispy, Scramble Egg, Sambel Geprek, Sayuran Timun",
    price: 30000
  },
  {
    id: "3",
    name: "Korean Hot Spicy Rice Bowl",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025070904574216425/detail/menueditor_item_c921fcfe4a4e480e8cc91ca642510868_1769075479473268401.webp",
    tagline: "Nasi putih dibaluri ayam renyah, Scrambel Egg, saos Korean Spicy dan sayuran timun segar.",
    price: 28000
  },
  {
    id: "4",
    name: "Asam Manis",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024032917205830854/detail/menueditor_item_59f0ef4ec48e4e83be4fec6f4ef96e16_1768913810933674253.webp",
    tagline: "Nasi, Ayam Krsipy, Scramble Egg, Saos Asam Manis, Sayuran Timun",
    price: 28000
  },
  {
    id: "5",
    name: "Mie Bowl Salted Egg",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025011101584550592/detail/menueditor_item_d6556d122d724d339a090e9a064be4b4_1768971895542349723.webp",
    tagline: "Mie Goreng, Ayam Crispy dibalur Salted Egg, Scramble Egg, sayuran",
    price: 21000
  },
  {
    id: "6",
    name: "Es Degan",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C6LZSE2ELF3JGJ2789.webp",
    tagline: "Es Degan segar dengan kelapa muda (tanpa jeruk nipis)",
    price: 13000
  },
  {
    id: "7",
    name: "Es Jeruk",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024041705522607808/detail/menueditor_item_64a4bb7da6cd4fbc85d30763879a7da1_1713333126559211959.webp",
    tagline: "Segar! Jeruk nipis dan es menyatu sempurna.",
    price: 10000
  },
  {
    id: "8",
    name: "Es Teh",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024041705515365675/detail/menueditor_item_6973e582dfec44228cecaeaa69e6bbbd_1713333090943492220.webp",
    tagline: "Teh manis dingin dengan es batu.",
    price: 8000
  },
  {
    id: "9",
    name: "Ayam Crispy ( Tanpa Nasi )",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025110503383241722/detail/menueditor_item_f3f19a9beaa64ebdb916fa9cb1b99f10_1762313807862339963.webp",
    tagline: "Ayam crispy renyah dengan bumbu gurih dan tekstur lembut.",
    price: 17000
  },
  {
    id: "10",
    name: "Nasi Putih",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C66DCGB3JAWKTX8913.webp",
    tagline: "Nasi putih lembut, cocok dipadukan dengan berbagai lauk favorit.",
    price: 8500
  },
  {
    id: "11",
    name: "Nasi Kulit Cajo",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025121502210265455/detail/menueditor_item_8fac1d906953427d9229e6f38bfd211a_1765765327764893391.webp",
    tagline: "Nasi dengan kulit ayam, gurih dan beraroma rempah khas Indonesia.",
    price: 22000
  },
  {
    id: "12",
    name: "Telur Cajo (Sambal Ijo)",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025121107091445032/detail/menueditor_item_b4c796dc1eec46ab9f9dade12ddf6c97_1765436877672773795.webp",
    tagline: "Telur dadar dengan sambal ijo pedas dan segar.",
    price: 20000
  },
  {
    id: "13",
    name: "Ayam Penyet Cajo (Sambel Ijo)",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025121107051631835/detail/menueditor_item_533c48fd96b4474886c9be85a575bdaa_1765436664330737863.webp",
    tagline: "Ayam goreng penyet, sambel ijo segar, nasi pulen, cocok untuk santapan lezat.",
    price: 28000
  },
  {
    id: "14",
    name: "Box Nasi Ayam Geprek",
    rating: 5,
    image: "https://food-cms.grab.com/compressed_webp/items/IDITE2025110503452191585/detail/menueditor_item_256bec9bc99f4370bd5f0c48584c0738_1762749234729221164.webp",
    tagline: "Nasi ayam geprek , renyah dan lezat, sambal khas menggoda selera. ( Tanpa Scramble Egg )",
    price: 23000
  }
];

// PROMO_ITEMS used in Promotions.tsx and PromoCarousel.tsx
export const PROMO_ITEMS: PromoItem[] = [
  {
    id: "p1",
    title: "Paket Berdua",
    description: "Nikmati momen makan bareng lebih hemat! Dapatkan 2 Rice Bowl Geprek + 2 Es Teh Jumbo dengan harga spesial.",
    image: paketBerduaImage,
    price: 50000
  },
  {
    id: "p2",
    title: "Promo Bundling Spesial",
    description: "Kombinasi sempurna untuk lapar kamu: Rice Bowl Salted Egg ditemani Es Teh Jumbo yang segar.",
    image: promoBundlingImage,
    price: 25000
  },
  {
    id: "p3",
    title: "Valentine's Day Promo",
    description: "Rayakan hari kasih sayang di Jember Bowl! Free 1 pcs Dairymilk/Fruit Tea dengan minimal transaksi Rp 40.000 dan memakai baju pink/merah muda.",
    image: promoValentineImage,
    price: 40000
  }
];

// CONTACT_INFO used in Footer, Cart, and OrderSection
export const CONTACT_INFO = {
  phone: "0812-3456-7890",
  email: "hello@jemberbowl.com",
  address: "Jl. Jawa No. 12, Sumbersari, Jember, Jawa Timur",
  halalId: "ID35110001234560123",
  grabFoodLink: "https://food.grab.com",
  goFoodLink: "https://gofood.link",
  shopeeFoodLink: "https://shopee.co.id/food"
};