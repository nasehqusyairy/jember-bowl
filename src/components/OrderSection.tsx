import { CONTACT_INFO } from '../lib/constants';
import { SectionId } from '../lib/types';

const OrderSection: React.FC = () => {
  const apps = [
    {
      name: 'GrabFood',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Grab_Logo.svg',
      link: CONTACT_INFO.grabFoodLink
    },
    {
      name: 'GoFood',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg',
      link: CONTACT_INFO.goFoodLink
    },
    {
      name: 'ShopeeFood',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg',
      link: CONTACT_INFO.shopeeFoodLink
    },
  ];

  return (
    <section id={SectionId.ORDER} className="bg-[#FDFCE6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-[#8B4513] shadow-2xl p-12 lg:p-20 rounded-[4rem] overflow-hidden text-white">

          <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16 lg:text-left text-center">
            <div className="lg:w-1/2">
              <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-widest">Outlet Sumbersari</h2>
              <h3 className="mb-6 font-black text-5xl leading-none tracking-tighter">Siap Kirim Ke Tempatmu!</h3>
              <p className="opacity-80 mb-8 text-xl leading-relaxed">
                Jember Bowl Sumbersari kini lebih dekat. Klik logo aplikasi favoritmu untuk langsung memesan menu favorit dengan berbagai promo terbaru.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/10 px-6 py-3 border border-white/20 rounded-full font-bold text-sm">🚚 Delivery Sumbersari</div>
                <div className="bg-white/10 px-6 py-3 border border-white/20 rounded-full font-bold text-sm">⏱️ 10:00 - 21:00</div>
              </div>
            </div>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 w-full lg:w-1/2">
              {apps.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white rounded-3xl p-8 flex flex-col items-center group hover:scale-105 transition-all shadow-xl border-4 border-transparent active:scale-95`}
                >
                  <div className="flex justify-center items-center w-full h-16">
                    <img src={app.logo} alt={app.name} className="h-full object-contain" />
                  </div>
                  <span className="mt-4 font-black text-[10px] text-black uppercase tracking-[0.2em]">{app.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
