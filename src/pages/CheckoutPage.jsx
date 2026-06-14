import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../store/cartStore';
import { useTranslation } from 'react-i18next';
import { MapPin, Truck, Check, Search } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from '../components/StripePaymentForm';
import { apiJson } from '../lib/api';

// Inicjalizacja Stripe (klucz publiczny)
// Używamy zmiennej środowiskowej lub mocka
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_mock');

export default function CheckoutPage() {
  const { items, getSubtotal } = useCartStore();
  const { t } = useTranslation();
  
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem('tatragrailCheckoutData');
      return saved ? JSON.parse(saved) : { country: 'Polska' };
    } catch (e) {
      return { country: 'Polska' };
    }
  };

  const savedCheckoutData = loadSavedData();
  const [checkoutMode, setCheckoutMode] = useState(savedCheckoutData.checkoutMode === 'quick' ? 'quick' : 'standard');

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: savedCheckoutData,
    shouldUnregister: true
  });

  // Zapisywanie do localStorage przy każdej zmianie
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem('tatragrailCheckoutData', JSON.stringify({ ...value, checkoutMode }));
    });
    return () => subscription.unsubscribe();
  }, [watch, checkoutMode]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [loading, setLoading] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState('courier'); // 'courier' lub 'locker'
  const [inpostPoint, setInpostPoint] = useState(null);
  const [showGeowidget, setShowGeowidget] = useState(false);
  
  const [clientSecret, setClientSecret] = useState('');
  const [trackingToken, setTrackingToken] = useState('');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [mapLockers, setMapLockers] = useState([]);
  const [searchingMap, setSearchingMap] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Inicjalizacja Leaflet gdy otworzy się modal
  useEffect(() => {
    if (showGeowidget && !mapInstanceRef.current && mapRef.current) {
      // Domyślny widok - Warszawa
      mapInstanceRef.current = window.L.map(mapRef.current).setView([52.2297, 21.0122], 12);
      
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      // Jeśli mamy wpisane miasto/ulicę z formularza, użyj go
      const city = watch('city');
      const street = watch('street');
      if (city) {
        setSearchQuery(`${city} ${street || ''}`.trim());
      }
    }

    // Czyszczenie przy zamykaniu modalu
    if (!showGeowidget && mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
    }
  }, [showGeowidget]);

  const handleMapSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery || !mapInstanceRef.current) return;
    
    setSearchingMap(true);
    try {
      // 1. Znajdź koordynaty dla adresu (Nominatim OSM)
      const nomRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`);
      const nomData = await nomRes.json();
      
      if (!nomData || nomData.length === 0) {
        alert('Nie znaleziono takiej lokalizacji.');
        setSearchingMap(false);
        return;
      }

      const lat = parseFloat(nomData[0].lat);
      const lon = parseFloat(nomData[0].lon);
      
      // Przesuń mapę
      mapInstanceRef.current.setView([lat, lon], 14);

      // 2. Znajdź paczkomaty InPost w tej okolicy z publicznego API
      const inpostRes = await fetch(`https://api-shipx-pl.easypack24.net/v1/points?relative_point=${lat},${lon}&type=parcel_locker&status=Operating`);
      const inpostData = await inpostRes.json();
      
      const points = inpostData.items || [];
      setMapLockers(points);

      // Wyczyść stare markery
      markersRef.current.forEach(marker => mapInstanceRef.current.removeLayer(marker));
      markersRef.current = [];

      // Dodaj nowe markery
      const customIcon = window.L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      });

      points.forEach(point => {
        const marker = window.L.marker([point.location.latitude, point.location.longitude], { icon: customIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <div style="font-family: sans-serif; text-align: center;">
              <b style="font-size: 14px; color: #000;">${point.name}</b><br/>
              <span style="font-size: 12px; color: #555;">${point.address_details.street} ${point.address_details.building_number}</span><br/>
              <span style="font-size: 12px; color: #555;">${point.address_details.post_code} ${point.address_details.city}</span><br/>
              <button onclick="window.selectLocker('${point.name}')" style="margin-top: 8px; padding: 5px 10px; background: #000; color: #fff; border: none; cursor: pointer; border-radius: 2px;">Wybierz ten punkt</button>
            </div>
          `);
        markersRef.current.push(marker);
      });

    } catch (err) {
      console.error(err);
      alert('Wystąpił błąd podczas wyszukiwania.');
    }
    setSearchingMap(false);
  };

  // Metoda globalna do wyboru z popupu na mapie
  useEffect(() => {
    window.selectLocker = (lockerId) => {
      const locker = mapLockers.find(l => l.name === lockerId);
      if (locker) {
        setInpostPoint({
          id: locker.name,
          name: locker.location_description || '',
          address: `${locker.address_details.street} ${locker.address_details.building_number}`,
          city: locker.address_details.city,
          postalCode: locker.address_details.post_code
        });
        setShowGeowidget(false);
      }
    };
    return () => {
      delete window.selectLocker;
    };
  }, [mapLockers]);

  const subtotal = getSubtotal();
  const shipping = 15.00;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = async () => {
    setPromoError('');
    if (!promoCode) return;
    
    try {
      const data = await apiJson('/api/discount/validate', 'POST', { code: promoCode, cartTotal: subtotal });
      if (data.promo.type === 'percentage') {
        setDiscount(subtotal * (data.promo.value / 100));
      } else {
        setDiscount(data.promo.value);
      }
    } catch (err) {
      setPromoError(err.message || 'Blad polaczenia');
    }
  };

  const onSubmit = async (data) => {
    if (deliveryMethod === 'locker' && !inpostPoint) {
      alert('Wybierz paczkomat przed przejściem do płatności.');
      return;
    }

    setLoading(true);
    try {
      const responseData = await apiJson('/api/create-payment-intent', 'POST', {
        cart: items,
        customer: {
          ...data,
          checkoutMode
        },
        promoCode: discount > 0 ? promoCode : null,
        delivery: {
          method: deliveryMethod === 'locker' ? 'inpost_locker' : 'inpost_courier',
          point: deliveryMethod === 'locker' ? inpostPoint : null
        }
      }, {
        headers: {
          'x-drop-token': localStorage.getItem('tatragrail-drop-token') || ''
        }
      });
      
      if (responseData.clientSecret === 'mock_secret_client') {
        window.location.href = responseData.mockUrl;
      } else {
        setClientSecret(responseData.clientSecret);
        setTrackingToken(responseData.trackingToken);
      }
    } catch (err) {
      alert(`Blad platnosci: ${err.message || 'Nieznany blad'}`);
    } finally {
      setLoading(false);
    }
  };

  const enableQuickCheckout = () => {
    setCheckoutMode('quick');
    setDeliveryMethod('locker');
  };

  const enableStandardCheckout = () => {
    setCheckoutMode('standard');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-4 flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase tracking-widest font-montserrat mb-4">Twój koszyk jest pusty</h1>
          <a href="/" className="underline hover:text-gray-300">Wróć do sklepu</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 bg-[#0a0a0a] text-white pb-20 relative">
      {/* Custom OSM Modal */}
      {showGeowidget && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded-sm relative overflow-hidden flex flex-col">
            <div className="bg-black text-white p-4 flex justify-between items-center shrink-0">
              <h3 className="font-montserrat font-bold tracking-widest uppercase">Wybierz Paczkomat</h3>
              <button onClick={() => setShowGeowidget(false)} className="text-gray-400 hover:text-white">Zamknij</button>
            </div>
            
            <div className="p-4 bg-gray-100 flex gap-2 shrink-0">
              <form onSubmit={handleMapSearch} className="flex-1 flex gap-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Wpisz miasto lub kod pocztowy..." 
                  className="flex-1 bg-white border border-gray-300 p-2 rounded-sm text-black focus:outline-none focus:border-black"
                />
                <button 
                  type="submit"
                  disabled={searchingMap}
                  className="bg-black text-white px-6 font-bold uppercase text-sm rounded-sm hover:bg-gray-800 disabled:opacity-50 flex items-center gap-2"
                >
                  <Search size={16} />
                  {searchingMap ? 'Szukam...' : 'Szukaj'}
                </button>
              </form>
            </div>

            <div className="flex-1 w-full relative bg-gray-200">
              <div ref={mapRef} className="w-full h-full absolute inset-0 z-0"></div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Formularz Checkout lub Stripe */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest font-montserrat mb-8">Kasa</h1>
          
          {clientSecret ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider text-green-500">Dokończ płatność</h2>
              <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'night' } }}>
                <StripePaymentForm returnUrl={`${window.location.origin}/payment-status?trackingToken=${trackingToken}`} />
              </Elements>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider">Tryb zamówienia</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={enableStandardCheckout}
                    className={`border p-4 text-left rounded-sm transition-colors ${checkoutMode === 'standard' ? 'border-white bg-[#1a1a1a]' : 'border-[#333] bg-[#111] hover:border-gray-500'}`}
                  >
                    <span className="block text-sm font-bold uppercase tracking-widest">Standardowy checkout</span>
                    <span className="mt-2 block text-xs text-gray-400">Pelne dane dostawy, kurier lub paczkomat.</span>
                  </button>
                  <button
                    type="button"
                    onClick={enableQuickCheckout}
                    className={`border p-4 text-left rounded-sm transition-colors ${checkoutMode === 'quick' ? 'border-white bg-[#1a1a1a]' : 'border-[#333] bg-[#111] hover:border-gray-500'}`}
                  >
                    <span className="block text-sm font-bold uppercase tracking-widest">Szybki checkout</span>
                    <span className="mt-2 block text-xs text-gray-400">Tylko email, telefon i paczkomat InPost.</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#222]">
                <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider">Dane kontaktowe</h2>
                <div>
                  <input
                    {...register('email', { required: 'Email jest wymagany', pattern: { value: /^\S+@\S+\.\S+$/i, message: 'Podaj poprawny email' } })}
                    placeholder="Email *"
                    className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    {...register('phone', checkoutMode === 'quick' ? { required: 'Telefon jest wymagany', minLength: { value: 9, message: 'Podaj poprawny numer telefonu' } } : {})}
                    placeholder={checkoutMode === 'quick' ? 'Telefon *' : 'Telefon'}
                    className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {checkoutMode === 'standard' ? (
                <>
                  <div className="space-y-4 pt-6 border-t border-[#222]">
                    <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider">Adres dostawy</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          {...register('firstName', { required: 'Imię jest wymagane' })}
                          placeholder="Imię *"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <input
                          {...register('lastName', { required: 'Nazwisko jest wymagane' })}
                          placeholder="Nazwisko *"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        {...register('street', { required: 'Ulica jest wymagana' })}
                        placeholder="Ulica *"
                        className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                      />
                      {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          {...register('houseNumber', { required: 'Nr domu/mieszkania wymagany' })}
                          placeholder="Nr domu / lokalu *"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.houseNumber && <p className="text-red-500 text-xs mt-1">{errors.houseNumber.message}</p>}
                      </div>
                      <div>
                        <input
                          {...register('postalCode', { required: 'Kod pocztowy wymagany' })}
                          placeholder="Kod pocztowy *"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          {...register('city', { required: 'Miasto jest wymagane' })}
                          placeholder="Miasto *"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                      </div>
                      <div>
                        <input
                          {...register('country', { required: 'Kraj jest wymagany' })}
                          placeholder="Kraj *"
                          defaultValue="Polska"
                          className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors"
                        />
                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[#222]">
                    <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider">Firma (Opcjonalnie)</h2>
                    <input {...register('companyName')} placeholder="Nazwa firmy" className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors mb-4" />
                    <input {...register('nip')} placeholder="NIP / VAT" className="w-full bg-[#111] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors" />
                  </div>
                </>
              ) : (
                <div className="pt-6 border-t border-[#222]">
                  <div className="border border-[#333] bg-[#111] p-4 rounded-sm text-sm text-gray-300">
                    Szybki checkout zapisze zamowienie na podstawie emaila, telefonu i wybranego paczkomatu.
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-6 border-t border-[#222]">
                <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider">Metoda dostawy</h2>

                {checkoutMode === 'standard' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className={`border p-4 rounded-sm cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${deliveryMethod === 'courier' ? 'border-white bg-[#1a1a1a]' : 'border-[#333] bg-[#111] hover:border-gray-500'}`}>
                      <input type="radio" name="delivery" value="courier" className="hidden" checked={deliveryMethod === 'courier'} onChange={() => setDeliveryMethod('courier')} />
                      <Truck size={24} />
                      <span className="font-bold uppercase tracking-widest text-sm">Kurier InPost</span>
                    </label>

                    <label className={`border p-4 rounded-sm cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${deliveryMethod === 'locker' ? 'border-white bg-[#1a1a1a]' : 'border-[#333] bg-[#111] hover:border-gray-500'}`}>
                      <input type="radio" name="delivery" value="locker" className="hidden" checked={deliveryMethod === 'locker'} onChange={() => setDeliveryMethod('locker')} />
                      <MapPin size={24} />
                      <span className="font-bold uppercase tracking-widest text-sm">Paczkomat InPost</span>
                    </label>
                  </div>
                ) : (
                  <div className="border border-white bg-[#1a1a1a] p-4 rounded-sm flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin size={22} />
                      <div>
                        <p className="font-bold uppercase tracking-widest text-sm">Paczkomat InPost</p>
                        <p className="text-xs text-gray-400">Jedyna metoda dostawy w szybkim checkoutcie.</p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white">Aktywne</span>
                  </div>
                )}

                {deliveryMethod === 'locker' && (
                  <div className="mt-4 p-4 border border-dashed border-[#444] bg-[#0a0a0a] rounded-sm">
                    {inpostPoint ? (
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <p className="font-bold text-green-500 flex items-center gap-2"><Check size={16} /> Wybrano punkt: {inpostPoint.id}</p>
                          <p className="text-sm text-gray-400 mt-1">{inpostPoint.address}, {inpostPoint.postalCode} {inpostPoint.city}</p>
                          {inpostPoint.name && <p className="text-xs text-gray-500">{inpostPoint.name}</p>}
                        </div>
                        <button type="button" onClick={() => setShowGeowidget(true)} className="text-xs underline uppercase font-bold text-gray-400 hover:text-white">Zmień</button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setShowGeowidget(true)} className="w-full bg-white text-black py-3 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
                        Wybierz paczkomat z mapy
                      </button>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-8 bg-white text-black py-4 font-montserrat font-black uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm disabled:opacity-50"
              >
                {loading ? 'Przetwarzanie...' : checkoutMode === 'quick' ? 'Przejdź do płatności - szybki checkout' : 'Przejdź do płatności'}
              </button>
            </form>
          )}
        </div>

        {/* Podsumowanie zamówienia */}
        <div className="bg-[#111] p-6 rounded-sm border border-[#222] h-fit">
          <h2 className="text-xl font-bold font-montserrat uppercase tracking-wider mb-6">Podsumowanie</h2>
          
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
            {items.map(item => (
              <div key={`${item.productId}-${item.variantId}`} className="flex items-center gap-4">
                <div className="relative">
                  <img src={item.image} alt={item.productName} className="w-16 h-16 object-cover rounded-sm bg-gray-800" />
                  <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{item.quantity}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold">{item.productName}</h3>
                  {item.size && <p className="text-xs text-gray-400">Rozmiar: {item.size}</p>}
                </div>
                <div className="text-sm font-bold">{(item.unitPrice * item.quantity).toFixed(2)} PLN</div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#333] pt-6 mb-6">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
                placeholder="Kod rabatowy" 
                className="flex-1 bg-[#0a0a0a] border border-[#333] p-3 rounded-sm focus:outline-none focus:border-white transition-colors uppercase"
              />
              <button 
                onClick={handleApplyPromo}
                className="bg-[#222] hover:bg-[#333] px-6 font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                Zastosuj
              </button>
            </div>
            {promoError && <p className="text-red-500 text-xs mt-2">{promoError}</p>}
          </div>

          <div className="space-y-3 text-sm border-t border-[#333] pt-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Suma częściowa</span>
              <span>{subtotal.toFixed(2)} PLN</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-500">
                <span>Rabat</span>
                <span>-{discount.toFixed(2)} PLN</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-400">Wysyłka</span>
              <span>{shipping.toFixed(2)} PLN</span>
            </div>
          </div>

          <div className="border-t border-[#333] pt-6 mt-6 flex justify-between items-center">
            <span className="text-xl font-bold font-montserrat uppercase tracking-wider">Razem</span>
            <span className="text-2xl font-bold">{total.toFixed(2)} PLN</span>
          </div>
        </div>

      </div>
    </div>
  );
}
