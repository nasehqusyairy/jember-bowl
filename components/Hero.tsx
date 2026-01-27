
import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-screen flex items-center bg-[#FDFCE6] overflow-hidden pt-20 lg:pt-0">
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left: Dramatic Typography */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-0 relative z-10">
          <div className="space-y-2">
            <span className="text-[#D49A1F] text-xl font-black uppercase tracking-[0.5em] mb-4">Cita Rasa Otentik</span>
            <h1 className="text-[14vw] lg:text-[6rem] font-black text-[#8B4513] leading-[0.85] tracking-tighter uppercase">
              JEMBER
              <span className="text-[#D49A1F]"> BOWL</span>
            </h1>
            <div className="pt-8 max-w-md">
              <p className="text-xl lg:text-2xl font-bold text-[#8B4513]/80 leading-tight mb-10">
                Pengalaman makan kenyang, puas, dan higienis dengan resep khas Kota Jember.
              </p>
                <button 
                  onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-[#8B4513] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-[#D49A1F] transition-all transform hover:-translate-y-1"
                >
                  JELAJAHI MENU
                </button>
            </div>
          </div>
        </div>

        {/* Right: Full Impact Photography */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-screen">
          <div className="absolute inset-0 bg-[#8B4513]/5"></div>
          <img 
            src={'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80'} 
            alt="Jember Bowl Premium Dish"
            className="w-full h-full object-cover"
          />
          {/* Decorative Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCE6] to-transparent lg:hidden"></div>
          
          {/* Floating Badge */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 hidden lg:flex bg-[#D49A1F] w-40 h-40 rounded-full items-center justify-center border-[8px] border-[#FDFCE6] shadow-2xl z-20">
            <p className="text-white font-black text-center text-sm leading-tight uppercase rotate-12">
              100%<br/>ASLI<br/>JEMBER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
