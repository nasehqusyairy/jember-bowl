import { useState } from 'react';
import { SectionId, type CartItem, type MenuItem } from '../lib/types';
import { MENU_ITEMS } from '../lib/constants';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart, cart, onUpdateQuantity }) => {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<number>(-1); // -1 for "Semua"

  const categories = [
    { id: -1, name: 'Semua', icon: '🍽️' },
    { id: 0, name: 'Makanan', icon: '🍱' },
    { id: 1, name: 'Minuman', icon: '🥤' },
    { id: 2, name: 'Lainnya', icon: '✨' },
  ];

  const filtered = MENU_ITEMS.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) ||
      (i.tagline && i.tagline.toLowerCase().includes(search.toLowerCase()));
    const matchesType = activeType === -1 || i.type === activeType;
    return matchesSearch && matchesType;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getItemQuantity = (id: string) => {
    const item = cart.find(c => c.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section id={SectionId.MENU} className="bg-[#FDFCE6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-2 font-bold text-[#8B4513] text-xl">Hello, #temanjemberbowl</h2>
          <h3 className="mb-4 font-black text-[#8B4513] text-5xl uppercase tracking-tighter">DAFTAR MENU</h3>
          <p className="mb-12 font-bold text-[#8B4513]/60 text-sm uppercase tracking-[0.2em]">Puas • Kenyang • Higienis</p>
          <div className="relative mb-12 w-full max-w-xl">
            <input
              type="text"
              placeholder="Cari menu favoritmu..."
              className="bg-white shadow-xl px-8 py-5 border-[#8B4513]/10 border-4 focus:border-[#D49A1F] rounded-2xl focus:outline-none w-full text-lg transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="top-1/2 right-6 absolute opacity-20 -translate-y-1/2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Tab Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveType(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black transition-all transform active:scale-95 ${activeType === cat.id
                  ? 'bg-[#8B4513] text-white shadow-xl -translate-y-1'
                  : 'bg-white text-[#8B4513] hover:bg-amber-50 border-2 border-[#8B4513]/5'
                  }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-sm uppercase tracking-widest">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="gap-2 lg:gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 min-h-100">
          {filtered.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div key={item.id} className="group flex flex-col bg-white shadow-xl p-4 border-[#D49A1F]/20 border-b-8 rounded-xl h-full transition-all hover:-translate-y-2">
                <div className="relative bg-amber-50 mb-4 rounded-xl aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} loading='lazy' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {item.isPopular && (
                    <div className="top-3 right-3 z-10 absolute bg-[#D49A1F] shadow-lg px-3 py-1 rounded-full font-black text-[10px] text-white uppercase">FAVORIT</div>
                  )}
                  {/* {qty === 0 && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onAddToCart(item)}
                        className="bg-white shadow-xl px-6 py-3 rounded-full font-black text-[#8B4513] text-sm transition-all translate-y-4 group-hover:translate-y-0 transform"
                      >
                        + TAMBAH
                      </button>
                    </div>
                  )} */}
                </div>

                <span className="block mb-2 font-black text-amber-600 text-xs">{item.rating.toFixed(1)} ⭐</span>
                <h4 className="mb-1 font-black text-[#8B4513] text-lg leading-tight">{item.name}</h4>
                <p className="mb-4 font-bold text-[#4A3428]/50 text-[10px] line-clamp-2 grow">{item.tagline}</p>

                <div className="mb-4">
                  <span className="font-black text-[#8B4513] text-xl">{formatPrice(item.price)}</span>
                </div>

                <div className="flex justify-end items-center mt-auto pt-4 border-amber-50 border-t">
                  {qty === 0 ? (
                    <button
                      onClick={() => onAddToCart(item)}
                      className="bg-[#8B4513] hover:bg-[#D49A1F] ml-auto md:ml-0 px-6 py-2 rounded-xl font-bold text-white text-xs uppercase tracking-widest transition-colors"
                    >
                      BELI
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 bg-[#8B4513]/5 ml-auto md:ml-0 p-1 border border-[#8B4513]/10 rounded-xl">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="flex justify-center items-center bg-white shadow-sm rounded-lg w-7 h-7 font-black text-[#8B4513] active:scale-90 transition-all"
                      >
                        -
                      </button>
                      <span className="min-w-5 font-black text-[#8B4513] text-sm text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="flex justify-center items-center bg-[#8B4513] shadow-sm rounded-lg w-7 h-7 font-black text-white active:scale-90 transition-all"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="bg-white/50 py-20 border-[#8B4513]/10 border-2 border-dashed rounded-[3rem] text-center">
            <div className="mb-4 text-4xl">🔍</div>
            <p className="opacity-50 font-bold text-[#8B4513] text-xl uppercase tracking-widest">
              {search ? 'Menu tidak ditemukan' : `Belum ada menu di kategori ${categories.find(c => c.id === activeType)?.name}`}
            </p>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="mt-4 border-[#D49A1F] border-b-2 font-black text-[#D49A1F] text-xs uppercase"
              >
                Hapus Pencarian
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
