
import React, { useState } from 'react';
import { SectionId } from '../types';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = MENU_ITEMS.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id={SectionId.MENU} className="bg-[#FDFCE6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-2 font-bold text-[#8B4513] text-xl italic">Hello, #temanjemberbowl</h2>
          <h3 className="mb-12 font-black text-[#8B4513] text-5xl uppercase tracking-tighter">Mau makan apa hari ini?</h3>

          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Cari menu favoritmu..."
              className="bg-white shadow-xl px-8 py-5 border-[#8B4513]/10 border-4 focus:border-[#D49A1F] rounded-2xl focus:outline-none w-full text-lg transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white shadow-xl p-4 border-[#D49A1F]/20 border-b-8 rounded-[2rem] transition-all hover:-translate-y-2">
              <div className="relative mb-4 rounded-2xl aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.isPopular && (
                  <div className="top-3 right-3 absolute bg-[#D49A1F] px-3 py-1 rounded-full font-black text-[10px] text-white uppercase">HOT</div>
                )}
              </div>
              <h4 className="mb-1 font-black text-[#8B4513] text-lg">{item.name}</h4>
              <p className="mb-4 font-bold text-[10px] text-amber-600 uppercase tracking-widest">5.0 ⭐⭐⭐⭐⭐</p>
              <button className="bg-[#8B4513] hover:bg-[#D49A1F] py-3 rounded-xl w-full font-bold text-white transition-colors">Pesan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
