
import React, { useState, useEffect, useCallback } from 'react';
import { PROMO_ITEMS } from '../constants';
import { SectionId, PromoItem } from '../types';

interface PromoCarouselProps {
  onAddToCart: (item: PromoItem) => void;
}

const PromoCarousel: React.FC<PromoCarouselProps> = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === PROMO_ITEMS.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROMO_ITEMS.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  return (
    <section id={SectionId.PROMO} className="bg-[#8B4513] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center gap-12 mb-12">
          <div className="lg:w-6/12 lg:text-left text-center">
            <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.4em]">Penawaran Spesial</h2>
            <h3 className="mb-6 font-black text-white text-5xl uppercase leading-tight tracking-tighter">
              PROMO <br /> <span className="text-[#D49A1F]">TERBARU</span>
            </h3>
            <p className="font-medium text-white/80 text-lg leading-relaxed">
              Jangan lewatkan berbagai promo menarik mulai dari paket bundling hingga hari spesial. Nikmati cita rasa khas Jember Bowl dengan harga lebih hemat!
            </p>
          </div>

          <div
            className="group relative w-full lg:w-6/12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="shadow-2xl border-4 border-white/10 rounded-[3rem] aspect-video overflow-hidden">
              <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {PROMO_ITEMS.map((promo) => (
                  <div key={promo.id} className="relative w-full h-full shrink-0">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay: Always visible (removed opacity-0 group-hover:opacity-100) */}
                    <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-12 transition-all duration-300">
                      <h3 className="drop-shadow-lg mb-2 font-black text-white text-2xl md:text-3xl uppercase">{promo.title}</h3>
                      <p className="drop-shadow-md mb-6 max-w-2xl font-bold text-white/90 text-sm md:text-lg">{promo.description}</p>
                      <button
                        onClick={() => onAddToCart(promo)}
                        className="bg-[#D49A1F] shadow-xl px-8 py-3 border-2 border-white/20 rounded-full font-black text-white text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                      >
                        + TAMBAH KE KERANJANG
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="top-1/2 left-6 z-10 absolute flex justify-center items-center bg-white/90 hover:bg-[#D49A1F] opacity-0 group-hover:opacity-100 shadow-lg rounded-full w-12 h-12 text-[#8B4513] hover:text-white transition-all -translate-y-1/2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="top-1/2 right-6 z-10 absolute flex justify-center items-center bg-white/90 hover:bg-[#D49A1F] opacity-0 group-hover:opacity-100 shadow-lg rounded-full w-12 h-12 text-[#8B4513] hover:text-white transition-all -translate-y-1/2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="bottom-6 left-1/2 z-10 absolute flex gap-3 -translate-x-1/2">
              {PROMO_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-10 bg-[#D49A1F]' : 'w-3 bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
