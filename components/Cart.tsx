
import React from 'react';
import { CartItem } from '../types';
import { CONTACT_INFO } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    const orderDetails = items
      .map((item) => `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`)
      .join('\n');

    const message = `Halo Jember Bowl! Saya ingin memesan:\n\n${orderDetails}\n\n*Total: ${formatPrice(total)}*\n\nMohon diproses ya. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FDFCE6] shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-8 border-b border-[#8B4513]/10 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center text-white">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
            </div>
            <h2 className="text-2xl font-black text-[#8B4513] uppercase tracking-tighter">Keranjangmu</h2>
          </div>
          <button onClick={onClose} className="p-2 text-[#8B4513] hover:bg-amber-50 rounded-full transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <div className="text-6xl">🥘</div>
              <p className="text-lg font-black text-[#8B4513] uppercase tracking-widest">Keranjang Kosong</p>
              <button 
                onClick={onClose}
                className="text-sm font-bold border-b-2 border-[#8B4513]"
              >
                MULAI BELANJA
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded-3xl shadow-sm border border-[#8B4513]/5">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl" />
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-black text-[#8B4513] leading-tight">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[#D49A1F] font-black text-sm mb-3">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full border-2 border-[#8B4513]/10 flex items-center justify-center font-bold text-[#8B4513] hover:bg-amber-50"
                    >
                      -
                    </button>
                    <span className="font-black text-[#8B4513]">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full border-2 border-[#8B4513]/10 flex items-center justify-center font-bold text-[#8B4513] hover:bg-amber-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-white border-t border-[#8B4513]/10 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[#8B4513]/60 font-black uppercase text-sm tracking-widest">Total Bayar</span>
              <span className="text-3xl font-black text-[#8B4513]">{formatPrice(total)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white py-5 rounded-[2rem] font-black text-lg shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CHECKOUT VIA WA
            </button>
            <p className="text-[10px] text-center font-bold text-[#8B4513]/40 uppercase tracking-widest">
              *Pesanan akan dikirimkan ke Admin Jember Bowl Sumbersari
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
