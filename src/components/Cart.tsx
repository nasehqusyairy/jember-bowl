import { CONTACT_INFO } from "../lib/constants";
import type { CartItem } from "../lib/types";

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
    <div className="z-100 fixed inset-0 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div className="top-0 right-0 absolute flex flex-col bg-[#FDFCE6] shadow-2xl w-full max-w-md h-full transition-transform duration-300 transform">
        <div className="flex justify-between items-center bg-white p-8 border-[#8B4513]/10 border-b">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-[#8B4513] rounded-full w-10 h-10 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="font-black text-[#8B4513] text-2xl uppercase tracking-tighter">Keranjangmu</h2>
          </div>
          <button onClick={onClose} className="hover:bg-amber-50 p-2 rounded-full text-[#8B4513] transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 p-8 overflow-y-auto grow">
          {items.length === 0 ? (
            <div className="flex flex-col justify-center items-center space-y-4 opacity-40 h-full text-center">
              <div className="text-6xl">🥘</div>
              <p className="font-black text-[#8B4513] text-lg uppercase tracking-widest">Keranjang Kosong</p>
              <button
                onClick={onClose}
                className="border-[#8B4513] border-b-2 font-bold text-sm"
              >
                MULAI BELANJA
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white shadow-sm p-4 border border-[#8B4513]/5 rounded-3xl">
                <img src={item.image} alt={item.name} className="rounded-2xl w-20 h-20 object-cover" />
                <div className="grow">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-black text-[#8B4513] leading-tight">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="mb-3 font-black text-[#D49A1F] text-sm">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="flex justify-center items-center hover:bg-amber-50 border-[#8B4513]/10 border-2 rounded-full w-8 h-8 font-bold text-[#8B4513]"
                    >
                      -
                    </button>
                    <span className="font-black text-[#8B4513]">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="flex justify-center items-center hover:bg-amber-50 border-[#8B4513]/10 border-2 rounded-full w-8 h-8 font-bold text-[#8B4513]"
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
          <div className="space-y-6 bg-white p-8 border-[#8B4513]/10 border-t">
            <div className="flex justify-between items-center">
              <span className="font-black text-[#8B4513]/60 text-sm uppercase tracking-widest">Total Bayar</span>
              <span className="font-black text-[#8B4513] text-3xl">{formatPrice(total)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="flex justify-center items-center gap-3 bg-[#25D366] shadow-xl hover:brightness-110 py-5 rounded-4xl w-full font-black text-white text-lg transition-all"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              CHECKOUT VIA WA
            </button>
            <p className="font-bold text-[#8B4513]/40 text-[10px] text-center uppercase tracking-widest">
              *Pesanan akan dikirimkan ke Admin Jember Bowl Sumbersari
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
