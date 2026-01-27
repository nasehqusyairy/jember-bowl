
import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="flex items-center bg-[#FDFCE6] pt-20 lg:pt-0 min-h-screen overflow-hidden">
      <div className="flex lg:flex-row flex-col items-stretch w-full min-h-screen">
        {/* Left: Dramatic Typography */}
        <div className="z-10 relative flex flex-col flex-1 justify-center px-6 lg:px-20 py-12">
          <div className="space-y-4">
            <span className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.5em]">Cita Rasa Otentik</span>
            <h1 className="font-black text-[#8B4513] text-[14vw] lg:text-[6rem] uppercase leading-[0.85] tracking-tighter">
              Jember <span className="text-[#D49A1F]">Bowl</span>
            </h1>
            <div className="max-w-md">
              <p className="mb-10 font-bold text-[#8B4513]/80 text-xl lg:text-2xl leading-tight">
                Pengalaman makan kenyang, puas, dan higienis dengan resep khas Kota Jember.
              </p>

              <div className="flex sm:flex-row flex-col gap-5">
                <button
                  onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#8B4513] hover:bg-[#D49A1F] shadow-2xl px-10 py-5 rounded-full font-black text-white text-lg transition-all hover:-translate-y-1 transform"
                >
                  JELAJAHI MENU
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Full Impact Photography */}
        <div className="relative flex-1 min-h-[500px] lg:min-h-screen">
          <div className="absolute inset-0 bg-[#8B4513]/5"></div>
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
            alt="Jember Bowl Premium Dish"
            className="w-full h-full object-cover"
          />
          {/* Decorative Overlay */}
          <div className="lg:hidden right-0 bottom-0 left-0 absolute bg-gradient-to-t from-[#FDFCE6] to-transparent h-32"></div>

          {/* Floating Badge */}
          {/* <div className="hidden top-1/2 left-0 z-20 absolute lg:flex justify-center items-center bg-[#D49A1F] shadow-2xl border-[#FDFCE6] border-[8px] rounded-full w-40 h-40 -translate-x-1/2 -translate-y-1/2 transform">
            <p className="font-black text-white text-sm text-center uppercase leading-tight rotate-12">
              100%<br />ASLI<br />JEMBER
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
