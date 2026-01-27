
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoCarousel from './components/PromoCarousel';
import About from './components/About';
import Values from './components/Values';
import Menu from './components/Menu';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartItem, MenuItem, PromoItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem | PromoItem) => {
    const isPromo = 'title' in item || item.id.startsWith('p');
    
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Jika promo, jangan tambah kuantitas (tetap 1)
        if (isPromo) return prev;
        
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { 
        id: item.id, 
        name: 'title' in item ? item.title : item.name, 
        price: item.price, 
        image: item.image, 
        quantity: 1,
        isPromo: isPromo
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          // Promo item tidak bisa ditambah kuantitasnya
          if (i.isPromo && delta > 0) return i;
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-[#D49A1F] selection:text-white bg-[#FDFCE6]">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <hr className="border border-[#8B4513] border-dashed" />
        <About />
        <Values />
        <Menu onAddToCart={addToCart} />
        <PromoCarousel onAddToCart={addToCart} />
        <OrderSection />
      </main>
      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative w-14 h-14 bg-[#D49A1F] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-2 border-white"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#8B4513] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
        
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="w-14 h-14 bg-[#8B4513] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-[#D49A1F] transition-all transform hover:-translate-y-2 border-2 border-[#D49A1F]"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
