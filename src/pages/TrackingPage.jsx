import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, Truck, Package } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function TrackingPage({ token }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    // If arriving from successful checkout, clear cart
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      clearCart();
    }

    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/order/${token}`);
        if (!res.ok) throw new Error('Order not found');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [token]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-32 text-white">Ładowanie...</div>;
  }

  if (error || !order) {
    return <div className="min-h-screen flex items-center justify-center pt-32 text-white text-xl">Nie znaleziono zamówienia</div>;
  }

  const steps = [
    { id: 'pending', label: 'Złożone', icon: <Package size={20} /> },
    { id: 'processing', label: 'W realizacji', icon: <Clock size={20} /> },
    { id: 'shipped', label: 'Wysłane', icon: <Truck size={20} /> },
    { id: 'delivered', label: 'Dostarczone', icon: <CheckCircle size={20} /> }
  ];

  const inpostSteps = [
    { id: 'created', label: 'Przygotowywane', icon: <Package size={20} /> },
    { id: 'dispatched', label: 'Nadane', icon: <Package size={20} /> },
    { id: 'in_transit', label: 'W drodze', icon: <Truck size={20} /> },
    { id: 'ready_to_pickup', label: 'Gotowe do odbioru', icon: <CheckCircle size={20} /> },
    { id: 'delivered', label: 'Odebrane', icon: <CheckCircle size={20} /> }
  ];

  // Mapowanie wewnętrznego statusu na status inpost dla wyświetlania
  const isLocker = order.deliveryMethod === 'inpost_locker';
  let activeSteps = steps;
  let currentStepIndex = steps.findIndex(s => s.id === order.fulfillmentStatus) || 0;

  if (order.shipmentStatus) {
    activeSteps = inpostSteps;
    currentStepIndex = inpostSteps.findIndex(s => s.id === order.shipmentStatus) || 0;
  }

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 bg-[#0a0a0a] text-white pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-widest font-montserrat mb-2 text-center">
          Zamówienie {order.orderNumber}
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Status płatności: <span className="font-bold text-white uppercase">{order.paymentStatus}</span>
        </p>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#222] -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-white -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${(currentStepIndex / (activeSteps.length - 1)) * 100}%` }}></div>
          
          <div className="relative z-10 flex justify-between">
            {activeSteps.map((step, index) => {
              const isCompleted = index <= currentStepIndex;
              const isActive = index === currentStepIndex;
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors ${isCompleted ? 'bg-white border-white text-black' : 'bg-[#111] border-[#333] text-gray-500'}`}>
                    {step.icon}
                  </div>
                  <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${isCompleted ? 'text-white' : 'text-gray-500'}`}>{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-6 border border-[#222] rounded-sm flex flex-col gap-6">
            <div>
              <h2 className="font-bold uppercase tracking-widest mb-4 border-b border-[#333] pb-2">Dane Odbiorcy</h2>
              <div className="text-sm space-y-2 text-gray-300">
                <p><span className="text-white">Imię i nazwisko:</span> {order.firstName} {order.lastName}</p>
                <p><span className="text-white">Adres:</span> {order.street} {order.houseNumber}</p>
                <p><span className="text-white">Kod pocztowy i miasto:</span> {order.postalCode} {order.city}</p>
                <p><span className="text-white">Kraj:</span> {order.country}</p>
                {order.companyName && <p><span className="text-white">Firma:</span> {order.companyName} (NIP: {order.nip})</p>}
              </div>
            </div>

            <div>
              <h2 className="font-bold uppercase tracking-widest mb-4 border-b border-[#333] pb-2 flex items-center gap-2">
                <Truck size={18} /> Dostawa
              </h2>
              <div className="text-sm space-y-2 text-gray-300">
                <p><span className="text-white">Metoda:</span> {isLocker ? 'Paczkomat InPost' : 'Kurier InPost'}</p>
                {order.trackingNumber && (
                  <p><span className="text-white">Numer przesyłki:</span> <span className="font-mono text-green-500 tracking-wider bg-[#222] px-2 py-1 rounded-sm">{order.trackingNumber}</span></p>
                )}
                {isLocker && order.inpostPointId && (
                  <div className="mt-4 p-3 bg-[#1a1a1a] border border-[#333] rounded-sm">
                    <p className="font-bold text-white mb-1">Punkt Odbioru: {order.inpostPointId}</p>
                    <p className="text-xs">{order.inpostPointAddress}, {order.inpostPointPostalCode} {order.inpostPointCity}</p>
                    {order.inpostPointName && <p className="text-xs text-gray-500 mt-1">{order.inpostPointName}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-6 border border-[#222] rounded-sm">
            <h2 className="font-bold uppercase tracking-widest mb-4 border-b border-[#333] pb-2">Podsumowanie</h2>
            <div className="space-y-4">
              {order.items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  {item.image && <img src={item.image} alt={item.productName} className="w-12 h-12 object-cover bg-[#222]" />}
                  <div className="flex-1 text-sm">
                    <p className="font-bold">{item.productName}</p>
                    <p className="text-xs text-gray-400">Rozmiar: {item.size} | Ilość: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-bold">{(item.unitPrice * item.quantity).toFixed(2)} PLN</div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-[#333] mt-6 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Suma</span><span>{order.subtotal.toFixed(2)} PLN</span></div>
              {order.discount > 0 && <div className="flex justify-between text-green-500"><span>Rabat</span><span>-{order.discount.toFixed(2)} PLN</span></div>}
              <div className="flex justify-between"><span className="text-gray-400">Wysyłka</span><span>{order.shipping.toFixed(2)} PLN</span></div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-[#333] mt-2"><span>Razem</span><span>{order.total.toFixed(2)} PLN</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}