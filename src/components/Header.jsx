import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, ShoppingBag, Menu, X, LayoutGrid, Grid3X3 } from 'lucide-react'
import HighlandPattern from './HighlandPattern'
import { useViewContext } from '../context/ViewContext'
import { useCartStore } from '../store/cartStore'

const brandLogoUrl = new URL('../../tatragraillogo.png', import.meta.url).href

export default function Header() {
  const { t, i18n } = useTranslation();
  const { gridView, toggleGridView } = useViewContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemsCount = useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0));
  const openCart = useCartStore((state) => state.openCart);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

  const handleNavClick = (e, id) => {
    // If not on home page, go to home page first
    if (window.location.pathname !== '/') {
      window.location.href = id === 'top' ? '/' : `/#${id}`;
      return;
    }
    
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#222] overflow-visible transition-all duration-300">
      <HighlandPattern />
      
      <div className="relative z-10 flex flex-col w-full">
        {/* Top Bar */}
        <div className="bg-black text-white text-center py-2 border-b border-[#222] w-full">
          <p className="text-fluid-xs tracking-widest font-medium uppercase px-4 font-montserrat">
            <span className="text-green-500 mr-2">●</span> {t('header.topbar')}
          </p>
        </div>

        {/* Main Navigation */}
        <header className="w-full px-fluid-sm py-4 md:py-6 flex justify-between items-center text-white">
          
          {/* Left: Hamburger (Mobile) + Logo */}
          <div className="flex items-center space-x-4 md:space-x-12 shrink-0">
            {/* Hamburger icon for mobile only */}
            <button 
              className="lg:hidden text-white metal-text-hover"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a href="/" onClick={(e) => handleNavClick(e, 'top')} className="inline-block h-10 md:h-20 lg:h-24 shrink-0 cursor-pointer">
              <img 
                src={brandLogoUrl} 
                alt="TatraGrail" 
                className="h-full w-auto object-contain" 
              />
            </a>
          </div>
            
          {/* Center: Nav Links (Desktop Only) */}
          <nav className="hidden lg:flex space-x-8 text-center absolute left-1/2 -translate-x-1/2">
            <a href="/#drop01" onClick={(e) => handleNavClick(e, 'drop01')} className="text-fluid-base font-montserrat font-black tracking-widest metal-nav-link uppercase">{t('header.drop')}</a>
          </nav>

          {/* Right: Icons, Currency & Lang Switcher */}
          <div className="flex items-center space-x-4 md:space-x-8 shrink-0 font-montserrat">
            {/* Lang Switcher */}
            <button 
              onClick={toggleLanguage}
              className="text-fluid-sm font-bold tracking-widest metal-text-hover uppercase border border-[#333] px-2 py-1 rounded-sm"
            >
              {i18n.language === 'pl' ? 'EN' : 'PL'}
            </button>

            <div className="hidden md:block text-fluid-sm font-bold tracking-widest cursor-pointer metal-text-hover">
              PLN
            </div>
            
            {/* View Switcher instead of User icon */}
            <button className="metal-text-hover hidden sm:block" onClick={toggleGridView} title="Toggle View">
              {gridView === 'detailed' ? (
                <Grid3X3 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              ) : (
                <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              )}
            </button>

            <button className="metal-text-hover">
              <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            
            <button className="metal-text-hover relative" onClick={openCart}>
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              {cartItemsCount > 0 && (
                <span className="absolute -bottom-1 -right-1 md:-bottom-1.5 md:-right-1.5 text-[9px] md:text-[10px] bg-gray-300 text-black w-4 h-4 md:w-4.5 md:h-4.5 flex items-center justify-center rounded-full font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#222] flex flex-col p-4 space-y-6 text-white">
             <a href="/#drop01" onClick={(e) => handleNavClick(e, 'drop01')} className="text-lg font-montserrat font-black tracking-widest metal-text-hover uppercase">{t('header.drop')}</a>
             <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                <div className="text-sm font-bold tracking-widest">PLN</div>
                <button className="metal-text-hover flex items-center space-x-2" onClick={toggleGridView}>
                  {gridView === 'detailed' ? <Grid3X3 size={20} /> : <LayoutGrid size={20} />}
                  <span className="text-xs uppercase tracking-widest">WIDOK</span>
                </button>
             </div>
          </div>
        )}
      </div>
    </div>
  )
}
