
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFCE6] border-t-2 border-[#8B4513]/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center border-2 border-[#D49A1F] text-white font-bold text-xs">Jember<br/>Bowl</div>
              <span className="text-2xl font-black text-[#8B4513]">Jember Bowl</span>
            </div>
            <p className="text-[#4A3428]/70 font-medium">Rice Bowl asli Kota Jember yang siap memanjakan dengan pengalaman makan kenyang, puas, dan higienis!</p>
            <div className="bg-white p-6 rounded-3xl border-2 border-[#8B4513]/5 flex items-center gap-4 shadow-sm">
               <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1c/Halal_Indonesia.svg'} alt="Halal" className="h-12" />
               <p className="text-[10px] font-black uppercase text-[#8B4513] leading-tight">Certified Halal<br/><span className="text-amber-600">{CONTACT_INFO.halalId}</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-[#8B4513] font-black text-xl mb-8 uppercase tracking-widest">Hubungi Kami</h4>
            <div className="space-y-4">
               <p className="text-[#8B4513] font-bold text-sm">WhatsApp: <span className="block text-[#D49A1F]">{CONTACT_INFO.phone}</span></p>
               <p className="text-[#8B4513] font-bold text-sm">Email: <span className="block text-[#D49A1F]">{CONTACT_INFO.email}</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-[#8B4513] font-black text-xl mb-8 uppercase tracking-widest">Media Sosial</h4>
            <div className="flex flex-col gap-3">
               <a href="#" className="font-bold text-[#8B4513] hover:text-[#D49A1F] transition-colors">Instagram: @jemberbowl</a>
               <a href="#" className="font-bold text-[#8B4513] hover:text-[#D49A1F] transition-colors">TikTok: @Jember.bowl</a>
            </div>
          </div>

          <div>
            <h4 className="text-[#8B4513] font-black text-xl mb-8 uppercase tracking-widest">Alamat</h4>
            <p className="text-[#4A3428]/70 font-bold text-sm leading-loose uppercase">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-[#8B4513]/10">
          <p className="text-[#8B4513] font-black text-xs uppercase tracking-[0.4em]">© 2024 JEMBER BOWL. CEK ENAKNYA MAT!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
