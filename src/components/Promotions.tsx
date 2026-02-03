import { PROMO_ITEMS } from '../lib/constants';
import { SectionId } from '../lib/types';

const Promotions = () => {
  return (
    <section id={SectionId.PROMO} className="py-20 px-4 bg-[#8B4513]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-[#FFD700] text-5xl font-black mb-6 uppercase">Promo Jember Bowl</h2>
            <p className="text-white text-lg leading-relaxed opacity-90">
              Jemberbowl selain aktif membuka tenant di berbagai event, kami juga turut aktif dalam memberikan promo menarik mulai dari perayaan kemerdekaan, valentine hingga promo bagi mereka para mahasiswa agar dapat merasakan cita rasa yang sedap dan khas dari jemberbowl dengan harga yang miring.
            </p>
            <div className="grid grid-cols-4 gap-2 mt-8 opacity-20">
              {[...Array(16)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white"></div>)}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROMO_ITEMS.map((promo) => (
              <div key={promo.id} className="bg-[#FDFCE6] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-b-8 border-white/20">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-black text-2xl drop-shadow-lg">{promo.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#8B4513] font-medium">{promo.description}</p>
                  <button className="mt-4 text-[#8B4513] font-black uppercase text-sm border-b-2 border-[#8B4513]">Ambil Promo Ini</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
