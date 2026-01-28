
import React from 'react';
import { SectionId } from '../types';

const Values: React.FC = () => {
  const values = [
    {
      title: 'PUAS',
      icon: "🍱",
      description: 'Ricebowl dengan penyajian yang super lengkap mulai dari nasi, ayam, baluran saus, telur beserta sayuran lengkap.'
    },
    // {
    //   title: 'HIGIENIS',
    //   icon: "✨",
    //   description: 'Menyajikan makanan secara higienis sesuai SOP sekaligus menyediakan alat makan lengkap mulai dari sendok hingga tissue.'
    // },
    {
      title: 'KENYANG',
      icon: "🔥",
      description: 'Makan satu porsi dipastikan kenyang sebab porsi nasi yang full dan ayam dengan potongan cukup besar.'
    }
  ];

  return (
    <section id={SectionId.VALUES} className="relative bg-[#8B4513] px-6 py-32 overflow-hidden text-white">
      {/* Decorative large background text */}
      <div className="top-1/2 left-1/2 absolute opacity-[0.03] font-black text-[30vw] uppercase whitespace-nowrap -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        QUALITY
      </div>

      <div className="z-10 relative mx-auto max-w-7xl text-center">
        {/* <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.5em]">Komitmen Kami</h2> */}
        {/* <h3 className="mb-24 font-black text-6xl lg:text-8xl uppercase leading-none tracking-tighter">
          JEMBER BOWL <br /> <span className="text-[#D49A1F]">STANDARD</span>
        </h3> */}
        <h2 className="mb-24 font-black text-6xl lg:text-8xl uppercase leading-none tracking-tighter">
          Komitmen <span className="text-[#D49A1F]">Kami</span>
        </h2>

        <div className="gap-8 grid md:grid-cols-2">
          {values.map((v, i) => (
            <div key={i} className="group bg-white/5 hover:bg-white/10 backdrop-blur-md p-12 border border-white/10 rounded-[3rem] text-left transition-all">
              <div className="inline-block mb-8 text-7xl group-hover:-rotate-12 transition-transform duration-500 transform">
                {v.icon}
              </div>
              <h4 className="mb-6 font-black text-[#D49A1F] text-3xl uppercase tracking-tight">{v.title}</h4>
              <p className="opacity-70 font-medium text-lg leading-relaxed">
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
