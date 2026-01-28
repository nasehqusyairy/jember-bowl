
import React from 'react';
import { PROMO_ITEMS } from '../constants';
import { SectionId, PromoItem, CartItem } from '../types';

interface PromoCarouselProps {
  onAddToCart: (item: PromoItem) => void;
  onRemoveFromCart: (id: string) => void;
  cart: CartItem[];
}

const PromoCarousel: React.FC<PromoCarouselProps> = ({ onAddToCart, onRemoveFromCart, cart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const isAlreadyClaimed = (id: string) => {
    return cart.some(item => item.id === id);
  };

  return (
    <section id={SectionId.PROMO} className="bg-[#8B4513] px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.4em]">Penawaran Spesial</h2>
          <h3 className="font-black text-white text-5xl lg:text-6xl uppercase leading-tight tracking-tighter">
            PROMO <span className="text-[#D49A1F]">TERBATAS</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-white/60 text-lg">
            Nikmati kelezatan Jember Bowl dengan harga yang lebih hemat. Buruan sikat sebelum kehabisan!
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 pb-12 overflow-x-auto snap-mandatory snap-x scrollbar-hide no-scrollbar">
            {PROMO_ITEMS.map((promo) => {
              const claimed = isAlreadyClaimed(promo.id);
              return (
                <div
                  key={promo.id}
                  className="group flex flex-col bg-white shadow-2xl p-4 border-[#D49A1F] border-b-8 rounded-[2rem] w-[280px] md:w-[320px] transition-all hover:-translate-y-2 duration-300 snap-center shrink-0"
                >
                  <div className="relative bg-amber-50 mb-4 rounded-2xl aspect-square overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400/8B4513/FFFFFF?text=${encodeURIComponent(promo.title)}`;
                      }}
                    />

                    {/* Terpakai Badge - Only appears when claimed */}
                    {claimed && (
                      <div className="top-3 right-3 z-10 absolute bg-gray-500 shadow-lg px-4 py-1.5 rounded-full font-black text-[10px] text-white uppercase">
                        TERPAKAI
                      </div>
                    )}

                    {/* Hover Overlay */}
                    {!claimed && (
                      <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => onAddToCart(promo)}
                          className="bg-white shadow-xl px-6 py-3 rounded-full font-black text-[#8B4513] text-sm transition-all translate-y-4 group-hover:translate-y-0 transform"
                        >
                          + TAMBAH
                        </button>
                      </div>
                    )}
                  </div>

                  <h4 className="mb-1 font-black text-[#8B4513] text-xl leading-tight">{promo.title}</h4>
                  <p className="flex-grow mb-6 font-bold text-[#4A3428]/50 text-[11px] uppercase line-clamp-2 leading-relaxed tracking-wider">
                    {promo.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-black text-[#8B4513] text-2xl">{formatPrice(promo.price)}</span>
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-4 border-amber-50 border-t">
                    <div className="flex items-center gap-1">
                      <span className="font-black text-amber-500 text-sm">PROMO</span>
                      <span className="text-[10px] text-amber-500/50">🔥</span>
                    </div>
                    <button
                      onClick={() => claimed ? onRemoveFromCart(promo.id) : onAddToCart(promo)}
                      className={`px-6 py-2.5 rounded-xl font-bold transition-all text-xs uppercase tracking-widest shadow-lg ml-auto md:ml-0 ${claimed
                        ? 'bg-gray-800 text-white hover:bg-red-600'
                        : 'bg-[#D49A1F] text-white hover:bg-[#8B4513]'
                        }`}
                    >
                      {claimed ? 'BATAL KLAIM' : 'KLAIM'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle Instruction for Desktop */}
          <div className="lg:hidden flex justify-center mt-4">
            <div className="bg-white/20 rounded-full w-12 h-1">
              <div className="bg-[#D49A1F] rounded-full w-1/2 h-full animate-bounce-horizontal"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default PromoCarousel;
