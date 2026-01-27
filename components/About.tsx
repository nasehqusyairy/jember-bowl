
import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 px-6 bg-[#FDFCE6]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="relative group">
            <img 
              src={'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'} 
              alt="Dapur Jember Bowl"
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D49A1F] rounded-[3rem] -z-10 opacity-20"></div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
          <div>
            <h2 className="text-[#D49A1F] text-xl font-black uppercase tracking-[0.4em] mb-4">Tentang Kami</h2>
            <h3 className="text-6xl lg:text-7xl font-black text-[#8B4513] leading-[0.9] tracking-tighter uppercase mb-8">
              BERAWAL DARI <br /> KOTA JEMBER
            </h3>
            <div className="w-24 h-2 bg-[#D49A1F] mb-8"></div>
            <p className="text-[#4A3428] text-xl leading-relaxed font-medium opacity-80">
              Berdiri sejak tahun 2024, Jember Bowl hadir untuk membawa cita rasa otentik ke dalam format modern. Kami percaya bahwa makanan enak haruslah disajikan dengan standar kebersihan tertinggi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="border-l-4 border-[#D49A1F] pl-6 py-2">
              <p className="text-5xl font-black text-[#8B4513]">100%</p>
              <p className="text-xs font-black text-[#D49A1F] uppercase tracking-widest mt-2">Bahan Segar</p>
            </div>
            <div className="border-l-4 border-[#8B4513] pl-6 py-2">
              <p className="text-5xl font-black text-[#D49A1F]">2024</p>
              <p className="text-xs font-black text-[#8B4513] uppercase tracking-widest mt-2">Tahun Berdiri</p>
            </div>
          </div>

          <p className="text-[#4A3428] font-bold text-lg italic">
            "Bukan sekadar nasi dalam mangkuk, tapi sebuah komitmen untuk rasa dan kualitas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
