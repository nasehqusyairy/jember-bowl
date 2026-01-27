
import React from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO } from '../constants';

const OrderSection: React.FC = () => {
const apps = [
    { 
      name: 'GrabFood', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Grab_Logo.svg',
      link: CONTACT_INFO.grabFoodLink
    },
    { 
      name: 'GoFood', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg',
      link: CONTACT_INFO.goFoodLink
    },
    { 
      name: 'ShopeeFood', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg',
      link: CONTACT_INFO.shopeeFoodLink
    },
  ];

  return (
    <section id={SectionId.ORDER} className="py-24 px-6 bg-[#FDFCE6]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#8B4513] text-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D49A1F] rounded-full opacity-10"></div>
          
          <div className="relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-[#D49A1F] text-xl font-black mb-4 uppercase tracking-widest">Outlet Sumbersari</h2>
              <h3 className="text-5xl font-black mb-6 leading-none tracking-tighter">Siap Kirim Ke Tempatmu!</h3>
              <p className="text-xl opacity-80 leading-relaxed mb-8">
                Jember Bowl Sumbersari kini lebih dekat. Klik logo aplikasi favoritmu untuk langsung memesan menu favorit dengan berbagai promo terbaru.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold text-sm">🚚 Delivery Sumbersari</div>
                 <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold text-sm">⏱️ 10:00 - 21:00</div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {apps.map((app) => (
                <a 
                  key={app.name} 
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white rounded-3xl p-8 flex flex-col items-center group hover:scale-105 transition-all shadow-xl border-4 border-transparent active:scale-95`}
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img src={app.logo} alt={app.name} className="h-full object-contain" />
                  </div>
                  <span className="text-black font-black text-[10px] uppercase tracking-[0.2em] mt-4">{app.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
