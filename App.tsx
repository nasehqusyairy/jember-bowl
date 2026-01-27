
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFCE6] selection:bg-[#D49A1F] min-h-screen selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <hr className="border border-[#8B4513] border-dashed" />
        <About />
        <Values />
        <Menu />
        <Promotions />
        <OrderSection />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="right-8 bottom-8 z-40 fixed flex justify-center items-center bg-[#8B4513] hover:bg-[#D49A1F] shadow-2xl border-[#D49A1F] border-2 rounded-2xl w-14 h-14 text-white transition-all hover:-translate-y-2 transform"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;
