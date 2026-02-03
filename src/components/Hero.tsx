import { useState, useEffect } from 'react';
import { SectionId } from '../lib/types';
import { HERO_IMAGES } from '../lib/constants';

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={SectionId.HERO} className="flex items-center bg-[#FDFCE6] pt-20 min-h-screen overflow-hidden">
      <div className="flex lg:flex-row flex-col items-stretch w-full min-h-screen">
        {/* Left: Dramatic Typography */}
        <div className="z-10 relative flex flex-col flex-1 justify-center bg-[#FDFCE6] px-6 lg:px-20 py-20 lg:py-0">
          <div className="space-y-2">
            <span className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.5em]">Cita Rasa Otentik</span>
            <h1 className="font-black text-[#8B4513] text-[14vw] lg:text-[6rem] uppercase leading-[0.85] tracking-tighter">
              JEMBER
              <span className="text-[#D49A1F]"> BOWL</span>
            </h1>
            <div className="pt-8 max-w-md">
              <p className="mb-10 font-bold text-[#8B4513]/80 text-xl lg:text-2xl leading-tight">
                Pengalaman makan kenyang, puas, dan higienis dengan resep khas Kota Jember.
              </p>
              <button
                onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8B4513] hover:bg-[#D49A1F] shadow-2xl px-10 py-5 rounded-full font-black text-white text-lg transition-all hover:-translate-y-1 transform"
              >
                JELAJAHI MENU
              </button>
            </div>
          </div>
        </div>

        {/* Right: Full Impact Photography Carousel */}
        <div className="relative flex-1 min-h-[500px] lg:min-h-screen overflow-hidden">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <div className="absolute inset-0 bg-[#8B4513]/5"></div>
              <img
                src={img}
                alt={`Jember Bowl Premium Dish ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Carousel Indicators (Optional, but kept clean for aesthetics) */}
          <div className="hidden bottom-10 left-10 z-30 absolute lg:flex gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-8 bg-[#D49A1F]' : 'w-2 bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
