import { CONTACT_INFO } from '../lib/constants';

const Footer = () => {
  return (
    <footer className="bg-[#FDFCE6] px-6 pt-24 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="space-y-6">
            {/* <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-[#8B4513] border-[#D49A1F] border-2 rounded-full w-12 h-12 font-bold text-white text-xs">Jember<br/>Bowl</div>
              <span className="font-black text-[#8B4513] text-2xl">Jember Bowl</span>
            </div> */}
            <img src={'/images/brand.png'} alt="logo" className='h-12' />


            <p className="font-medium text-[#4A3428]/70">Rice Bowl asli Kota Jember yang siap memanjakan dengan pengalaman makan kenyang, puas, dan higienis!</p>
            <div className="flex items-center gap-4 bg-white shadow-sm p-6 border-[#8B4513]/5 border-2 rounded-3xl">
              <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1c/Halal_Indonesia.svg'} alt="Halal" className="h-12" />
              <p className="font-black text-[#8B4513] text-[10px] uppercase leading-tight">Certified Halal<br /><span className="text-amber-600">{CONTACT_INFO.halalId}</span></p>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-black text-[#8B4513] text-xl uppercase tracking-widest">Hubungi Kami</h4>
            <div className="space-y-4">
              <p className="font-bold text-[#8B4513] text-sm">WhatsApp: <span className="block text-[#D49A1F]">{CONTACT_INFO.phone}</span></p>
              <p className="font-bold text-[#8B4513] text-sm">Email: <span className="block text-[#D49A1F]">{CONTACT_INFO.email}</span></p>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-black text-[#8B4513] text-xl uppercase tracking-widest">Media Sosial</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-bold text-[#8B4513] hover:text-[#D49A1F] transition-colors">Instagram: @jemberbowl</a>
              <a href="#" className="font-bold text-[#8B4513] hover:text-[#D49A1F] transition-colors">TikTok: @jemberbowl </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-black text-[#8B4513] text-xl uppercase tracking-widest">Alamat</h4>
            <p className="font-bold text-[#4A3428]/70 text-sm uppercase leading-loose">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="pt-12 border-[#8B4513]/10 border-t text-center">
          <p className="font-black text-[#8B4513] text-xs uppercase tracking-[0.4em]">© 2024 JEMBER BOWL. CEK ENAKNYA MAT!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
