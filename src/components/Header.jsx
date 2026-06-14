import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, ShoppingBag, Menu, X, LayoutGrid, Grid3X3 } from 'lucide-react'
import HighlandPattern from './HighlandPattern'
import { useViewContext } from '../context/ViewContext'
import { useCartStore } from '../store/cartStore'
import { navigateTo, navigateToHomeSection } from '../lib/navigation'
import { DEFAULT_STOREFRONT_SETTINGS } from '../lib/storefront'

const brandLogoUrl = new URL('../../tatragraillogo.png', import.meta.url).href

export default function Header({ currentPath = window.location.pathname, storefrontSettings = DEFAULT_STOREFRONT_SETTINGS }) {
  const { t, i18n } = useTranslation();
  const { gridView, toggleGridView } = useViewContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemsCount = useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0));
  const openCart = useCartStore((state) => state.openCart);
  const navLinks = [
    { href: '/', label: t('header.home') },
    { href: '/#drop01', label: t('header.drop'), sectionId: 'drop01' },
    { href: '/shipping-returns', label: t('header.shipping') },
    { href: '/contact', label: t('header.contact') }
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.sectionId) {
      navigateToHomeSection(link.sectionId);
      return;
    }

    navigateTo(link.href);
  };

  const isActiveLink = (link) => {
    if (link.sectionId) {
      return currentPath === '/';
    }

    return currentPath === link.href;
  };

  const topbarText = storefrontSettings.saleEnabled ? storefrontSettings.saleAnnouncement : t('header.topbar')
  const topbarClassName = storefrontSettings.saleEnabled
    ? 'bg-red-950 text-red-100'
    : 'bg-black text-white'
  const topbarDotClassName = storefrontSettings.saleEnabled ? 'text-red-400' : 'text-green-500'

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#222] overflow-visible transition-all duration-300">
      <HighlandPattern />
      
      <div className="relative z-10 flex flex-col w-full">
        {/* Top Bar */}
        <div className={`${topbarClassName} text-center py-2 border-b border-[#222] w-full`}>
          <p className="text-fluid-xs tracking-widest font-medium uppercase px-4 font-montserrat">
            <span className={`${topbarDotClassName} mr-2`}>●</span> {topbarText}
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

            <a href="/" onClick={(e) => handleNavClick(e, { href: '/' })} className="inline-block h-10 md:h-20 lg:h-24 shrink-0 cursor-pointer">
              <img 
                src={brandLogoUrl} 
                alt="TatraGrail" 
                className="h-full w-auto object-contain" 
              />
            </a>
          </div>
            
          {/* Center: Nav Links (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-6 text-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-[11px] font-montserrat font-black tracking-[0.22em] uppercase transition-colors ${isActiveLink(link) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
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
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => handleNavClick(e, link)}
                 className={`text-lg font-montserrat font-black tracking-widest uppercase transition-colors ${isActiveLink(link) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
               >
                 {link.label}
               </a>
             ))}
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
