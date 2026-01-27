
import React from 'react';
import { SectionId } from '../types';

const Values: React.FC = () => {
  const values = [
    {
      title: 'PUAS',
      icon: "🍱",
      description: 'Ricebowl dengan penyajian yang super lengkap mulai dari nasi, ayam, baluran saus, telur beserta sayuran lengkap.'
    },
    {
      title: 'HIGIENIS',
      icon: "✨",
      description: 'Menyajikan makanan secara higienis sesuai SOP sekaligus menyediakan alat makan lengkap mulai dari sendok hingga tissue.'
    },
    {
      title: 'KENYANG',
      icon: "🔥",
      description: 'Makan satu porsi dipastikan kenyang sebab porsi nasi yang full dan ayam dengan potongan cukup besar.'
    }
  ];

  return (
    <section id={SectionId.VALUES} className="py-32 px-6 bg-[#8B4513] text-white overflow-hidden relative">
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.03] whitespace-nowrap pointer-events-none uppercase">
        QUALITY
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-[#D49A1F] text-xl font-black mb-4 uppercase tracking-[0.5em]">Keunggulan Kami</h2>
        <h3 className="text-6xl lg:text-8xl font-black mb-24 tracking-tighter uppercase leading-none">
          JEMBER BOWL <br /> <span className="text-[#D49A1F]">STANDARD</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md hover:bg-white/10 transition-all group text-left">
              <div className="text-7xl mb-8 transform group-hover:-rotate-12 transition-transform duration-500 inline-block">
                {v.icon}
              </div>
              <h4 className="text-3xl font-black text-[#D49A1F] mb-6 uppercase tracking-tight">{v.title}</h4>
              <p className="text-lg opacity-70 leading-relaxed font-medium">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
