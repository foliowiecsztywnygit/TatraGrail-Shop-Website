import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Drop01Section from './components/Drop01Section'
import ProductPage from './pages/ProductPage'
import CartDrawer from './components/CartDrawer'
import CheckoutPage from './pages/CheckoutPage'
import TrackingPage from './pages/TrackingPage'
import PaymentStatusPage from './pages/PaymentStatusPage'
import DropGatePage from './pages/DropGatePage'
import { ViewProvider } from './context/ViewContext'
import { getProductById } from './data/products'

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [dropUnlocked, setDropUnlocked] = useState(() => !!localStorage.getItem('tatragrail-drop-token'));
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    // Prosty nasłuch na zmiany w URL dla Vanilla React bez react-router
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Nadpisanie pushState dla gładkiej nawigacji
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      onLocationChange();
    };

    window.addEventListener('popstate', onLocationChange);
    
    // Intercept a clicks
    const handleClick = (e) => {
      const a = e.target.closest('a');
      if (a && a.href && a.href.startsWith(window.location.origin) && !a.href.includes('#')) {
        e.preventDefault();
        const path = new URL(a.href).pathname;
        window.history.pushState({}, '', path);
        window.scrollTo(0,0);
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, []);

  const dropStartAt = import.meta.env.VITE_DROP_START_AT;
  const dropStartMs = dropStartAt ? new Date(dropStartAt).getTime() : null;
  const isDropLocked = Number.isFinite(dropStartMs) && now < dropStartMs && !dropUnlocked;
  const isBypassRoute = currentPath.startsWith('/tracking/') || currentPath === '/payment-status';

  // Prosty router
  let content;
  if (isDropLocked && !isBypassRoute) {
    content = <DropGatePage dropStartAt={dropStartAt} onUnlocked={() => setDropUnlocked(true)} />;
  } else if (currentPath.startsWith('/product/')) {
    const id = currentPath.split('/')[2];
    const product = getProductById(id);
    
    if (product) {
      content = <ProductPage product={product} />;
    } else {
      content = <div className="min-h-screen flex items-center justify-center pt-32 text-white">Product not found</div>;
    }
  } else if (currentPath === '/checkout') {
    content = <CheckoutPage />;
  } else if (currentPath === '/payment-status') {
    content = <PaymentStatusPage />;
  } else if (currentPath.startsWith('/tracking/')) {
    const token = currentPath.split('/')[2];
    content = <TrackingPage token={token} />;
  } else {
    // Home
    content = (
      <>
        <Drop01Section />
      </>
    );
  }

  return (
    <ViewProvider>
      <div className="font-sans antialiased text-black">
        <Header />
        <CartDrawer />
        <main>
          {content}
        </main>
        <Footer />
      </div>
    </ViewProvider>
  )
}
