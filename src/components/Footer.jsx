import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import HighlandPattern from './HighlandPattern'

const brandLogoUrl = new URL('../../tatragraillogo.png', import.meta.url).href

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-[#222] pt-fluid-xl pb-fluid-sm px-fluid-sm text-white overflow-hidden">
      <HighlandPattern />
      
      <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-fluid-md mb-fluid-lg">
        
        {/* Brand / Statement */}
        <div className="md:col-span-2 pr-fluid-sm">
          <img 
            src={brandLogoUrl} 
            alt="TatraGrail" 
            className="h-16 md:h-20 mb-fluid-sm object-contain object-left" 
          />
          <p className="text-fluid-xs text-gray-400 max-w-md leading-relaxed uppercase tracking-widest">
            TATRAGRAIL, ASCENT AWAITS
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-fluid-xs font-bold tracking-widest mb-fluid-sm text-gray-200">{t('footer.info_title')}</h3>
          <ul className="space-y-4 text-fluid-xs text-gray-400 tracking-widest">
            <li><a href="/shipping-returns" className="metal-text-hover">{t('footer.links.shipping')}</a></li>
            <li><a href="/terms" className="metal-text-hover">{t('footer.links.terms')}</a></li>
            <li><a href="/privacy-policy" className="metal-text-hover">{t('footer.links.privacy')}</a></li>
            <li><a href="/contact" className="metal-text-hover">{t('footer.links.contact')}</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-fluid-xs font-bold tracking-widest mb-fluid-sm text-gray-200">{t('footer.newsletter.title')}</h3>
          <form className="flex border-b border-[#444] pb-3 metal-border-focus group" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('footer.newsletter.placeholder')} 
              className="w-full bg-transparent text-fluid-xs tracking-widest focus:outline-none placeholder-gray-500 text-white transition-colors group-hover:placeholder-gray-300"
              required 
            />
            <button type="submit" className="ml-3 text-gray-400 metal-text-hover hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </form>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="relative z-10 max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center text-[clamp(8px,1vw,10px)] text-gray-500 tracking-widest border-t border-[#333] pt-fluid-sm">
        <p>{t('footer.copyright')}</p>
        <a href="/contact" className="mt-4 text-zinc-400 transition-colors hover:text-white md:mt-0">
          {t('footer.links.contact')}
        </a>
      </div>
    </footer>
  )
}
