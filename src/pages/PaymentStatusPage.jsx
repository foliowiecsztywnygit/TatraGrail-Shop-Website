import React, { useEffect, useState } from 'react';
import { useStripe, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '../store/cartStore';
import { navigateTo } from '../lib/navigation';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_mock');

function PaymentStatusContent() {
  const stripe = useStripe();
  const [message, setMessage] = useState('Sprawdzanie statusu płatności...');
  const [status, setStatus] = useState('processing');
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    const trackingToken = new URLSearchParams(window.location.search).get(
      'trackingToken'
    );

    if (!clientSecret) {
      setMessage('Brak danych płatności.');
      setStatus('error');
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Płatność zakończona sukcesem!');
          setStatus('success');
          clearCart(); // Wyczyść koszyk po udanej płatności
          
          if (trackingToken) {
            setTimeout(() => {
              navigateTo(`/tracking/${trackingToken}`);
            }, 3000);
          }
          break;
        case 'processing':
          setMessage('Twoja płatność jest przetwarzana.');
          setStatus('processing');
          break;
        case 'requires_payment_method':
          setMessage('Płatność nie powiodła się. Spróbuj innej metody.');
          setStatus('error');
          break;
        default:
          setMessage('Coś poszło nie tak.');
          setStatus('error');
          break;
      }
    });
  }, [stripe, clearCart]);

  return (
    <div className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
      <div className="bg-[#111] border border-[#222] p-8 rounded-sm text-center max-w-md w-full">
        <h1 className="text-2xl font-black uppercase tracking-widest font-montserrat mb-4">
          Status Płatności
        </h1>
        <p className={`text-lg mb-6 ${status === 'success' ? 'text-green-500' : status === 'error' ? 'text-red-500' : 'text-gray-400'}`}>
          {message}
        </p>
        
        {status === 'success' && (
          <p className="text-sm text-gray-500 mb-6">Zaraz zostaniesz przekierowany do strony śledzenia zamówienia...</p>
        )}

        {status === 'error' && (
          <button 
            onClick={() => navigateTo('/checkout')}
            className="w-full bg-white text-black py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm"
          >
            Wróć do Kasy
          </button>
        )}
      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentStatusContent />
    </Elements>
  );
}
