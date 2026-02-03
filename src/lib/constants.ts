import type { MenuItem, PromoItem } from './types';

export const IMAGE_PATH = '/images/'

// Gambar untuk Hero Carousel
export const HERO_IMAGES = [
  'post1.jpeg', 'post2.jpeg', 'post3.jpeg', 'post4.jpeg'
].map(el => IMAGE_PATH + el);

// MENU_ITEMS list based on the provided data, ensuring all required fields like 'price' are present.
export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "12",
    "name": "Korean Spicy",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025070904574216425/detail/menueditor_item_c921fcfe4a4e480e8cc91ca642510868_1769075479473268401.webp",
    "tagline": "Nasi putih dibaluri ayam renyah, Scrambel Egg, saos Korean Spicy dan sayuran timun segar.",
    "price": 20000,
    "type": 0
  },
  {
    "id": "16",
    "name": "Chicken Veteran",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024050203565201636/detail/menueditor_item_e98bcca621684c3c80728b1b095be1c0_1768913742928480122.webp",
    "tagline": "Nasi, Ayam Crispy Original, Scramble Egg, Sayuran Timun",
    "price": 18000,
    "type": 0
  },
  {
    "id": "17",
    "name": "Black Pepper",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024050203542623773/detail/menueditor_item_b814306d0a5b40d38bee1bf03bd3fd86_1768986394822468337.webp",
    "tagline": "Nasi, Ayam Crispy, Scramble Egg, Saos Lada Hitam, Sayuran Timun",
    "price": 20000,
    "type": 0
  },
  {
    "id": "18",
    "name": "Salted Egg",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024042802150416611/detail/menueditor_item_4ddc30bbf06d4ddd92e3546eb85e5314_1768913784018463284.webp",
    "tagline": "Nasi, Ayam Crispy, Scrambel Egg, Spicy salted Egg, Sayuran Timun",
    "price": 22000,
    "type": 0
  },
  {
    "id": "19",
    "name": "Chicken Asam Manis",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024032917205830854/detail/menueditor_item_59f0ef4ec48e4e83be4fec6f4ef96e16_1768913810933674253.webp",
    "tagline": "Nasi, Ayam Krsipy, Scramble Egg, Saos Asam Manis, Sayuran Timun",
    "price": 20000,
    "type": 0
  },
  {
    "id": "22",
    "name": "Chicken Cheese",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025070905012035338/detail/menueditor_item_be6834fcd21e4059b18ab02dcfa242ff_1754448953431278490.webp",
    "tagline": "Ayam crispy, keju leleh, nasi pulen, sayuran timun segar.",
    "price": 20000,
    "type": 0
  },
  {
    "id": "15",
    "name": "Chicken Geprek",
    "rating": 5,
    "image": IMAGE_PATH + "chicken-geprek.jpeg",
    "tagline": "Nasi, Ayam Crispy, Scramble Egg, Sambel Geprek, Sayuran Timun",
    "price": 22000,
    "type": 0
  },
  {
    "id": "10",
    "name": "Box Chicken Geprek",
    "rating": 5,
    "image": IMAGE_PATH + "box-chicken-geprek.jpeg",
    "tagline": "Nasi ayam geprek , renyah dan lezat, sambal khas menggoda selera. ( Tanpa Scramble Egg )",
    "price": 23000,
    "type": 0
  },
  {
    "id": "27",
    "name": "Cumi Ciamik",
    "rating": 5,
    "image": IMAGE_PATH + "cumi-ciamik.jpeg",
    "tagline": "Nasi, Cumi Bumbu Hitam, Scramble Egg, Sayuran",
    "price": 30000,
    "type": 0
  },
  {
    "id": "26",
    "name": "Usus Icikiwir",
    "rating": 5,
    "image": IMAGE_PATH + "usus-icikiwir.jpeg",
    "tagline": "Nasi, Usus Bumbu Merah, Scramble egg, sayuran",
    "price": 20000,
    "type": 0
  },
  {
    "id": "25",
    "name": "Kerang Asam Pedas",
    "rating": 5,
    "image": IMAGE_PATH + "kerang-asam-pedas.jpeg",
    "tagline": "Nasi, Kerang bumbu asam pedas, Scrambled Egg, Saos Black Pepper, Sayuran.",
    "price": 20000,
    "type": 0
  },
  // {
  //   "id": "24",
  //   "name": "Ayam Suwir khas Jember Bowl",
  //   "rating": 5,
  //   "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024120203062968737/detail/menueditor_item_395763a35f0749ba82e2167a4f054bba_1754448697917625533.webp",
  //   "tagline": "Nasi, Plecing Ayam Suwir Bumbu Kuning, Scrambel Egg, sayuran Timun",
  //   "price": 28000,
  //   "type": 0
  // },
  {
    "id": "13",
    "name": "Mie Bowl Salted Egg",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025011101584550592/detail/menueditor_item_d6556d122d724d339a090e9a064be4b4_1768971895542349723.webp",
    "tagline": "Mie Goreng, Ayam Crispy dibalur Salted Egg, Scramble Egg, sayuran",
    "price": 22000,
    "type": 0
  },
  {
    "id": "14",
    "name": "Miebowl Geprek",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025010702025707522/detail/menueditor_item_3bc404dcd7c1403bacb9ffbfc47f6843_1736215354167606494.webp",
    "tagline": "Mie goreng dengan campuran ayam geprek renyah dan sayuran segar.",
    "price": 23000,
    "type": 0
  },
  {
    "id": "21",
    "name": "Wings",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025070905262586468/detail/menueditor_item_0a10457be1d640108ce916b91e025fa4_1752038746800423278.webp",
    "tagline": "Sayap ayam crispy dibaluri dengan berbagai sauce yang menggugah selera dengan nasi",
    "price": 26000,
    "type": 0
  },
  {
    "id": "20",
    "name": "Nasi Ayam Kipas Jember Bowl",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025110206110815687/detail/menueditor_item_1e0f5c1bfd4b49769c96d19deef22154_1765437509072112375.webp",
    "tagline": "Nasi putih dengan ayam kipas gurih, sambal bawang dan sayuran segar",
    "price": 28000,
    "type": 0
  },
  {
    "id": "7",
    "name": "Nasi Kulit Cajo",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025121502210265455/detail/menueditor_item_8fac1d906953427d9229e6f38bfd211a_1765765327764893391.webp",
    "tagline": "Nasi dengan kulit ayam, gurih dan beraroma rempah khas Indonesia dengan sambal ijo.",
    "price": 12000,
    "type": 0
  },
  {
    "id": "8",
    "name": "Telur Cajo",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025121107091445032/detail/menueditor_item_b4c796dc1eec46ab9f9dade12ddf6c97_1765436877672773795.webp",
    "tagline": "Telur dadar dengan sambal ijo pedas dan segar.",
    "price": 13000,
    "type": 0
  },
  {
    "id": "9",
    "name": "Ayam Penyet Cajo",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025121107051631835/detail/menueditor_item_533c48fd96b4474886c9be85a575bdaa_1765436664330737863.webp",
    "tagline": "Ayam goreng penyet, sambal ijo segar, nasi pulen, cocok untuk santapan lezat.",
    "price": 18000,
    "type": 0
  },
  {
    "id": "2",
    "name": "Nasi Putih",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C66DCGB3JAWKTX8913.webp",
    "tagline": "Nasi putih lembut, cocok dipadukan dengan berbagai lauk favorit.",
    "price": 5000,
    "type": 2
  }, {
    "id": "44",
    "name": "Kerupuk Ikan Merah",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2026011303552541909/detail/menueditor_item_f7996635a9034cc9b454118b9727e604_1768276466634477399.webp",
    "tagline": "Kerupuk Ikan Merah Kecil Kecil Yang Renyah, Gurih dan Sedap untuk sandingan Ricebowl / Cajo",
    "price": 6000,
    "type": 2
  },
  {
    "id": "46",
    "name": "Kerupuk Keong",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C6LZTCAJA261AT2926.webp",
    "tagline": "Kerupuk Keong, gurih dan renyah.",
    "price": 2500,
    "type": 2
  },
  // {
  //   "id": "11",
  //   "name": "Sego Bongkoes",
  //   "rating": 5,
  //   "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025071004453224576/detail/menueditor_item_1bd8b82a6e8449438c44bd36f915268b_1754448839458594662.webp",
  //   "tagline": "Nasi Putih dengan telur mata sapi yang disiram dengan baluran bumbu khas dan dibungkus dengan bongkoesan khas jemberbowl",
  //   "price": 17000,
  //   "type": 0
  // },
  {
    "id": "3",
    "name": "Smothies Banana",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2026010803221482906/detail/menueditor_item_0a7c9edf571d441486e5dd39fc88c25e_1767842436916244042.webp",
    "tagline": "Pisang Cavendish, susu segar, dan tekstur lembut seperti ice cream dan manis yang alami.",
    "price": 20000,
    "type": 1
  },
  {
    "id": "4",
    "name": "Manggo Sticky Rice",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025112708161025091/detail/menueditor_item_2fb82de4652747429f3b686d34da3f19_1764231329965579560.webp",
    "tagline": "Mangga manis, ketan lembut, santan segar. Penuh rasa tropis.",
    "price": 28000,
    "type": 0
  },
  {
    "id": "28",
    "name": "Milo Dino",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2026012001444078496/detail/menueditor_item_c340e878bc434064b62d11033d2fd976_1768873445350963811.webp",
    "tagline": "Milo dingin dengan topping bubuk milo yang melimpah.",
    "price": 8000,
    "type": 1
  },
  {
    "id": "29",
    "name": "Iced Kopi Susu Segar",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C66DCF5DRYCCUE6832.webp",
    "tagline": "Kopi susu segar dingin, rasa lembut dan kaya, menyegarkan di siang hari.",
    "price": 8000,
    "type": 1
  },
  {
    "id": "30",
    "name": "Es Lemon Tea",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025110503510923640/detail/menueditor_item_1d6d6c38aca5417591e3ca8986515596_1762314647594030448.webp",
    "tagline": "Teh lemon segar, rasa asam manis, cocok untuk menyegarkan hari.",
    "price": 7000,
    "type": 1
  },
  {
    "id": "31",
    "name": "Teh Botol Sosro",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2025021302505580896/detail/menueditor_item_aa19608e98584723b7ca34fe05f06a80_1739414993281849868.webp",
    "tagline": "Teh botol legendaris yang segar.",
    "price": 6000,
    "type": 1
  },
  {
    "id": "32",
    "name": "Es Degan",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C6LZSE2ELF3JGJ2789.webp",
    "tagline": "Es Degan segar asli.",
    "price": 7000,
    "type": 1
  },
  {
    "id": "34",
    "name": "Air Mineral Kecil",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C6WVRXLZRA32EJ5646.webp",
    "tagline": "Air mineral kemasan kecil.",
    "price": 3000,
    "type": 1
  },
  {
    "id": "33",
    "name": "Air Mineral Besar",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/dish-photo-library/stock/detail/DIP-C6WVRXMBPCA3JA3274.webp",
    "tagline": "Air mineral kemasan besar.",
    "price": 5000,
    "type": 1
  },
  {
    "id": "35",
    "name": "Es Jeruk",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024041705522607808/detail/menueditor_item_64a4bb7da6cd4fbc85d30763879a7da1_1713333126559211959.webp",
    "tagline": "Segar! Jeruk nipis dan es menyatu sempurna.",
    "price": 5000,
    "type": 1
  },
  {
    "id": "36",
    "name": "Es Teh",
    "rating": 5,
    "image": "https://food-cms.grab.com/compressed_webp/items/IDITE2024041705515365675/detail/menueditor_item_6973e582dfec44228cecaeaa69e6bbbd_1713333090943492220.webp",
    "tagline": "Teh manis dingin menyegarkan.",
    "price": 6000,
    "type": 1
  }
]

// PROMO_ITEMS used in Promotions.tsx and PromoCarousel.tsx
export const PROMO_ITEMS: PromoItem[] = [
  {
    id: "p1",
    title: "Paket Berdua",
    description: "Nikmati momen makan bareng lebih hemat! Dapatkan 2 Rice Bowl Geprek + 2 Es Teh Jumbo dengan harga spesial.",
    image: IMAGE_PATH + 'paket-berdua.jpeg',
    price: 50000
  },
  {
    id: "p2",
    title: "Promo Bundling Spesial",
    description: "Kombinasi sempurna untuk lapar kamu: Rice Bowl Salted Egg ditemani Es Teh Jumbo yang segar.",
    image: IMAGE_PATH + 'promo-bundling.jpeg',
    price: 25000
  },
  {
    id: "p3",
    title: "Valentine's Day Promo",
    description: "Rayakan hari kasih sayang di Jember Bowl! Free 1 pcs Dairymilk/Fruit Tea dengan minimal transaksi Rp 40.000 dan memakai baju pink/merah muda.",
    image: IMAGE_PATH + 'promo-valentine.jpeg',
    price: 40000
  },
  {
    id: "p4",
    title: "Promo Maba Kota Jember",
    description: "Spesial buat kamu Mahasiswa Baru (MABA) di Kota Jember! 🎓 Nikmati promo khusus All Varian Menu Bowl hanya dengan Rp19.500. Cukup tunjukkan KTM atau Twibbon MABA 2026 kamu dan jangan lupa follow sosial media @JemberBowl untuk klaim harganya. Yuk, sambut semester baru dengan rasa yang otentik!",
    image: IMAGE_PATH + 'promo-maba.jpeg',
    price: 19500
  }
];

// CONTACT_INFO used in Footer, Cart, and OrderSection
export const CONTACT_INFO = {
  phone: "6285855747776",
  email: "hello@jemberbowl.com",
  address: "Jl. Panjaitan No.99 Sumbersari Jember, Jawa Timur",
  halalId: "ID35110001234560123",
  grabFoodLink: "https://r.grab.com/g/6-20260127_115014_7d7bfcd5c87e49b39b29b212c266c16d_MEXMPS-6-C6J1EFKWNKX2G2",
  goFoodLink: "https://gofood.link/a/LtxzBdu",
  shopeeFoodLink: "https://spf.shopee.co.id/6KyVt0Gnen"
};