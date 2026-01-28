import React, { useState } from 'react';
import { SectionId } from '../types';
import logo from '@/images/brand.png'

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
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
    <nav className="top-0 right-0 left-0 z-50 fixed bg-[#FDFCE6]/90 shadow-sm backdrop-blur-md border-amber-100 border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
            {/* <div className="flex justify-center items-center bg-[#8B4513] border-[#D49A1F] border-2 rounded-full w-12 h-12">
              <span className="font-bold text-white text-xs text-center leading-none">Jember<br/>Bowl</span>
            </div> */}
            <img src={logo} alt="logo" className='h-12' />
            {/* <span className="font-bold text-[#8B4513] text-xl tracking-tight">JemberBowl</span> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-bold text-[#4A3428] hover:text-[#D49A1F] text-xs uppercase tracking-widest transition-colors"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#8B4513] hover:text-[#D49A1F] transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="top-0 right-0 absolute flex justify-center items-center bg-[#D49A1F] border-[#FDFCE6] border-2 rounded-full w-5 h-5 font-black text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => scrollTo(SectionId.ORDER)}
              className="bg-[#D49A1F] shadow-md hover:brightness-110 px-6 py-2 rounded-full font-bold text-white transition-all"
            >
              Order Now
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#8B4513]"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="top-0 right-0 absolute flex justify-center items-center bg-[#D49A1F] rounded-full w-4 h-4 font-black text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#8B4513]">
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
        <div className="md:hidden bg-[#FDFCE6] shadow-lg px-6 py-4 border-amber-100 border-t">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="font-bold text-[#4A3428] text-left">{link.name}</button>
            ))}
            <button onClick={() => scrollTo(SectionId.ORDER)} className="bg-[#D49A1F] py-3 rounded-xl font-bold text-white">Pesan Sekarang</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
