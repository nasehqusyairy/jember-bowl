
import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [search, setSearch] = useState('');
  const filtered = MENU_ITEMS.filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) || 
    (i.tagline && i.tagline.toLowerCase().includes(search.toLowerCase()))
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id={SectionId.MENU} className="py-24 px-6 bg-[#FDFCE6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
           <h2 className="text-xl font-bold text-[#8B4513] mb-2 italic">Hello, #temanjemberbowl</h2>
           <h3 className="text-5xl font-black text-[#8B4513] mb-4 uppercase tracking-tighter">DAFTAR MENU SUMBERSARI</h3>
           <p className="text-[#8B4513]/60 font-bold mb-12 uppercase tracking-[0.2em] text-sm">Puas • Kenyang • Higienis</p>
           
           <div className="relative w-full max-w-xl">
             <input 
               type="text" 
               placeholder="Cari Rice Bowl favoritmu..."
               className="w-full bg-white border-4 border-[#8B4513]/10 rounded-2xl px-8 py-5 text-lg focus:outline-none focus:border-[#D49A1F] transition-all shadow-xl"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
             <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-16">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] p-4 shadow-xl hover:-translate-y-2 transition-all border-b-8 border-[#D49A1F]/20 flex flex-col h-full group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-amber-50">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {item.isPopular && (
                  <div className="absolute top-3 right-3 bg-[#D49A1F] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg z-10">FAVORIT</div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="bg-white text-[#8B4513] px-6 py-3 rounded-full font-black text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    + TAMBAH
                  </button>
                </div>
              </div>
              
              <h4 className="font-black text-[#8B4513] text-lg mb-1 leading-tight">{item.name}</h4>
              <p className="text-[10px] font-bold text-[#4A3428]/50 mb-4 flex-grow line-clamp-2">{item.tagline}</p>
              
              <div className="mb-4">
                <span className="text-xl font-black text-[#8B4513]">{formatPrice(item.price)}</span>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-50">
                <span className="text-xs font-black text-amber-600">5.0 ⭐</span>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-[#8B4513] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#D49A1F] transition-colors text-xs uppercase tracking-widest"
                >
                  BELI
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8B4513] font-bold text-xl opacity-50">Menu tidak ditemukan. Coba kata kunci lain!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
