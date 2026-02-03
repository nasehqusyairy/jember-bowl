import { SectionId } from '../lib/types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="bg-[#FDFCE6] px-6 py-32">
      <div className="flex lg:flex-row flex-col items-center gap-20 mx-auto max-w-7xl">
        <div className="order-2 lg:order-1 lg:w-1/2">
          <div className="group relative">
            <img
              src={'/images/about.jpeg'}
              alt="Dapur Jember Bowl"
              className="shadow-2xl rounded-[3rem] w-full object-cover aspect-4/5 group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        <div className="space-y-10 order-1 lg:order-2 lg:w-1/2">
          <div>
            <h2 className="mb-4 font-black text-[#D49A1F] text-xl uppercase tracking-[0.4em]">Tentang Kami</h2>
            <h3 className="mb-8 font-black text-[#8B4513] text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter">
              BERAWAL DARI <br /> KOTA JEMBER
            </h3>
            <div className="bg-[#D49A1F] mb-8 w-24 h-2"></div>
            <p className="opacity-80 font-medium text-[#4A3428] text-xl leading-relaxed">
              Siapa bilang rasa otentik harus selalu tampil klasik? Dimulai dari Jember pada tahun 2024, Jember Bowl sukses melakukan modernisasi terhadap kuliner kebanggaan kami, menghadirkan selera lokal dalam kemasan yang lebih segar dan kekinian.
            </p>
          </div>

          <div className="gap-10 grid grid-cols-2">
            <div className="py-2 pl-6 border-[#D49A1F] border-l-4">
              <p className="font-black text-[#8B4513] text-5xl">100%</p>
              <p className="mt-2 font-black text-[#D49A1F] text-xs uppercase tracking-widest">Bahan Pilihan</p>
            </div>
            <div className="py-2 pl-6 border-[#8B4513] border-l-4">
              <p className="font-black text-[#D49A1F] text-5xl">2024</p>
              <p className="mt-2 font-black text-[#8B4513] text-xs uppercase tracking-widest">Tahun Berdiri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
