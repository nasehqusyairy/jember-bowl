
import React, { useState } from 'react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: SectionId.HERO },
    { name: 'Tentang', id: SectionId.ABOUT },
    { name: 'Menu', id: SectionId.MENU },
    { name: 'Order', id: SectionId.ORDER },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FDFCE6]/90 backdrop-blur-md z-50 shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
            <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center border-2 border-[#D49A1F]">
              <span className="text-white font-bold text-xs text-center leading-none">Jember<br/>Bowl</span>
            </div>
            <span className="text-xl font-bold text-[#8B4513] tracking-tight">JemberBowl</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[#4A3428] hover:text-[#D49A1F] font-bold transition-colors uppercase text-xs tracking-widest"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo(SectionId.ORDER)}
              className="bg-[#D49A1F] text-white px-6 py-2 rounded-full font-bold hover:brightness-110 transition-all shadow-md"
            >
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#8B4513] p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FDFCE6] border-t border-amber-100 py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left font-bold text-[#4A3428]">{link.name}</button>
            ))}
            <button onClick={() => scrollTo(SectionId.ORDER)} className="bg-[#D49A1F] text-white py-3 rounded-xl font-bold">Pesan Sekarang</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
