
import React from 'react';
import { SectionId } from '../types';

const OrderSection: React.FC = () => {
  const apps = [
    { name: 'GrabFood', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Grab_Logo.svg' },
    { name: 'GoFood', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg' },
    { name: 'ShopeeFood', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg' },
  ];

  return (
    <section id={SectionId.ORDER} className="bg-[#FDFCE6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-[#8B4513] shadow-2xl p-12 lg:p-20 rounded-[4rem] overflow-hidden text-white">
          {/* Decorative Circle */}
          <div className="-right-20 -bottom-20 absolute bg-[#D49A1F] opacity-10 rounded-full w-64 h-64"></div>

          <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16 lg:text-left text-center">
            <div className="lg:w-1/2">
              <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-widest">Digital Order</h2>
              <h3 className="mb-6 font-black text-5xl leading-none tracking-tighter">Pesan Dari Mana Saja!</h3>
              <p className="opacity-80 mb-8 text-xl leading-relaxed">
                Jember Bowl telah terdaftar pada seluruh aplikasi yang sering dijangkau oleh masyarakat. Simpel tanpa ribet.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/10 px-6 py-3 border border-white/20 rounded-full font-bold text-sm">Delivery Ready</div>
                <div className="bg-white/10 px-6 py-3 border border-white/20 rounded-full font-bold text-sm">Fast Response</div>
              </div>
            </div>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 w-full lg:w-1/2">
              {apps.map((app) => (
                <div key={app.name} className="group flex flex-col items-center bg-white shadow-xl p-6 rounded-3xl hover:scale-105 transition-all">
                  <div className="flex justify-center items-center mb-4 w-full h-16">
                    <img src={app.logo} alt={app.name} className="h-full object-contain" />
                  </div>
                  <span className="font-black text-black text-xs uppercase">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
