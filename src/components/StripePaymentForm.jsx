import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function StripePaymentForm({ returnUrl }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    // This point is only reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setError(error.message);
    } else {
      setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie.");
    }
    
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-6 bg-[#111] p-6 rounded-sm border border-[#222]">
      <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
      {error && <div className="text-red-500 mt-4 text-sm font-bold">{error}</div>}
      <button 
        disabled={isLoading || !stripe || !elements} 
        className="w-full mt-6 bg-white text-black py-4 font-montserrat font-black uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm disabled:opacity-50"
      >
        {isLoading ? 'Przetwarzanie...' : 'Zapłać'}
      </button>
    </form>
  );
}
