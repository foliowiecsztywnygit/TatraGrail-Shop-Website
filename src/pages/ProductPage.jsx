import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Plus, X } from 'lucide-react'
import { categoriesData } from '../data/products'
import { useCartStore } from '../store/cartStore'

// Proste SVG ikony płatności
const PaymentIcons = () => (

  <div className="flex space-x-3 opacity-60">
    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
      <text x="16" y="14" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">VISA</text>
    </svg>
    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
      <circle cx="12" cy="10" r="5" fill="#EB001B"/>
      <circle cx="20" cy="10" r="5" fill="#F79E1B" fillOpacity="0.8"/>
    </svg>
    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
      <text x="16" y="14" fill="white" fontSize="9" fontStyle="italic" fontWeight="bold" textAnchor="middle">PayPal</text>
    </svg>
  </div>
)

export default function ProductPage({ product }) {
  const { t, i18n } = useTranslation();
  const addItem = useCartStore(state => state.addItem);
  const openCart = useCartStore(state => state.openCart);
  
  // Stany wariantów i galerii dla głównego przedmiotu
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  
  // Stany bundla (1, 2, lub 3+1 gratis)
  const [bundleOption, setBundleOption] = useState(1); 
  const [imgIndex, setImgIndex] = useState(0);
  
  // Stan dodatkowych przedmiotów w bundlu
  const [extraBundleItems, setExtraBundleItems] = useState([]);
  
  // Stan modala wyboru produktu
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Stany akordeonów
  const [openAccordion, setOpenAccordion] = useState('details');

  const sizes = product.sizes || ['S', 'M', 'L', 'XL', 'XXL'];
  const allProducts = categoriesData.flatMap(cat => cat.products);

  const handleBundleOptionChange = (option) => {
    setBundleOption(option);
    const limit = option === 1 ? 0 : (option === 2 ? 1 : 3);
    setExtraBundleItems(prev => prev.slice(0, limit));
  };

  const openProductSelector = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleSelectProduct = (selectedProd) => {
    setExtraBundleItems(prev => [
      ...prev,
      {
        uid: Math.random().toString(36).substr(2, 9),
        product: selectedProd,
        color: selectedProd.colors[0],
        size: 'S'
      }
    ]);
    setIsModalOpen(false);
  };

  const removeExtraItem = (uid, e) => {
    e.stopPropagation();
    setExtraBundleItems(prev => prev.filter(item => item.uid !== uid));
  };

  const updateExtraItem = (uid, field, value) => {
    setExtraBundleItems(prev => prev.map(item => 
      item.uid === uid ? { ...item, [field]: value } : item
    ));
  };

  // Dynamiczne ceny
  const basePriceNum = parseFloat(product.price.replace(' PLN', ''));
  let finalPrice = basePriceNum;
  if (bundleOption === 2) finalPrice = (basePriceNum * 2) * 0.9;
  if (bundleOption === 3) finalPrice = (basePriceNum * 3); // 4 szt w cenie 3
  
  const formattedPrice = finalPrice.toFixed(2) + ' PLN';

  const nextImg = () => setImgIndex((prev) => (prev + 1) % product.images.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    // Dodaj główny przedmiot
    addItem({
      productId: product.id,
      variantId: `${selectedColor}-${selectedSize}`,
      size: selectedSize,
      quantity: 1, // Będziemy to uwzględniać jako pojedyncze itemy albo bundle. Dla uproszczenia dodajemy pojedynczo.
      unitPrice: basePriceNum,
      image: product.images[0],
      productName: product.title[i18n.language]
     });
 
     // Dodaj dodatkowe przedmioty z bundla
     extraBundleItems.forEach(item => {
       addItem({
         productId: item.product.id,
         variantId: `${item.color}-${item.size}`,
         size: item.size,
         quantity: 1,
         unitPrice: basePriceNum, // W uproszczeniu, w rzeczywistości może zależeć od logiki
         image: item.product.images[0],
         productName: item.product.title[i18n.language]
       });
     });

    openCart();
  };

  return (
    <div className="min-h-screen bg-white text-black pt-[100px] md:pt-[140px] pb-24">
      
      {/* Top Announcement Bar (PDP specific, opcjonalny) */}
      <div className="w-full bg-black text-white text-center py-2 mb-8 hidden md:block">
        <p className="text-xs tracking-widest uppercase font-bold">DARMOWA DOSTAWA POWYŻEJ 250 PLN ORAZ DARMOWE ZWROTY DO 30 DNI</p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Lewa Kolumna: Media */}
        <div className="relative">
          <div className="sticky top-[160px] w-full aspect-[3/4] bg-[#f5f5f5] flex items-center justify-center p-8 group">
            <img 
              src={product.images[imgIndex]} 
              alt={product.title} 
              className="w-full h-full object-contain"
            />
            
            {/* Nawigacja galerii */}
            {product.images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 p-2 bg-white/50 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextImg} className="absolute right-4 p-2 bg-white/50 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </button>
                <div className="absolute bottom-4 flex space-x-2">
                  {product.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIndex(i)} className={`w-2 h-2 rounded-full ${i === imgIndex ? 'bg-black' : 'bg-gray-400'}`}></button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Prawa Kolumna: Info */}
        <div className="flex flex-col text-left">
          
          {/* Nagłówek & Cena */}
          <h1 className="text-3xl md:text-5xl font-montserrat font-black uppercase tracking-wide mb-4">
            {product.title[i18n.language]}
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-8">{product.price}</p>

          {/* Social Proof */}
          <div className="flex items-center space-x-3 mb-8 bg-gray-50 p-3 border border-gray-200">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 border border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-800 border border-white"></div>
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-600">
              {t('pdp.social_proof', { count: Math.floor(Math.random() * 50) + 12 })}
            </span>
          </div>

          {/* Wariant Główny: Kolor */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-widest uppercase">{t('pdp.color')}: <span className="text-gray-500">{selectedColor}</span></span>
            </div>
            <div className="flex space-x-3">
              {product.colors.map(color => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'}`}
                  style={{ backgroundColor: color === '#000000' ? '#111' : color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Wariant Główny: Rozmiar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-widest uppercase">{t('pdp.size')}: <span className="text-gray-500">{selectedSize || ''}</span></span>
              <a href="#" className="text-xs font-bold tracking-widest underline text-gray-500 hover:text-black">{t('pdp.size_guide')}</a>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-xs font-bold tracking-widest border transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize === 'S' && <p className="text-red-500 text-xs font-bold tracking-widest mt-2">{t('pdp.low_stock')}</p>}
          </div>

          {/* Upsell / Bundles Section z wyborem sub-wariantów */}
          <div className="mb-10 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase block mb-4">WYBIERZ ZESTAW ZAPŁAĆ MNIEJ</span>
            
            {/* Opcja 1: Jeden przedmiot */}
            <div 
              className={`border cursor-pointer transition-all ${bundleOption === 1 ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
              onClick={() => handleBundleOptionChange(1)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundleOption === 1 ? 'border-black' : 'border-gray-300'}`}>
                    {bundleOption === 1 && <div className="w-2.5 h-2.5 bg-black rounded-full"></div>}
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-widest uppercase block">{t('pdp.bundle.one_item')}</span>
                    <span className="text-xs text-gray-500">{t('pdp.bundle.standard_price')}</span>
                  </div>
                </div>
                <span className="text-sm font-bold">{product.price}</span>
              </div>
            </div>

            {/* Opcja 2: Dwa przedmioty (-10%) z rozwijanym oknem wyboru drugiego */}
            <div 
              className={`border cursor-pointer transition-all relative ${bundleOption === 2 ? 'border-black border-2 bg-white' : 'border-gray-200 hover:border-gray-400'}`}
              onClick={() => handleBundleOptionChange(2)}
            >
              {bundleOption === 2 && (
                <div className="absolute -top-3 right-4 bg-black text-white text-[10px] font-bold px-2 py-1 tracking-widest z-10">
                  {t('pdp.bundle.most_popular')}
                </div>
              )}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundleOption === 2 ? 'border-black' : 'border-gray-300'}`}>
                    {bundleOption === 2 && <div className="w-2.5 h-2.5 bg-black rounded-full"></div>}
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-widest uppercase block">{t('pdp.bundle.two_items')}</span>
                    <span className="text-xs text-gray-500">{t('pdp.bundle.you_save')} {(basePriceNum * 2 * 0.1).toFixed(2)} PLN</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold block">{(basePriceNum * 2 * 0.9).toFixed(2)} PLN</span>
                  <span className="text-xs text-gray-400 line-through">{(basePriceNum * 2).toFixed(2)} PLN</span>
                </div>
              </div>

              {/* Sub-wybór dodatkowych przedmiotów widoczny tylko jeśli wybrano opcję 2 */}
              {bundleOption === 2 && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex flex-col space-y-4">
                  {extraBundleItems.map((item, index) => (
                    <div key={item.uid} className="flex items-start space-x-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0 relative">
                      <div className="w-20 h-24 bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center p-2">
                        <img src={item.product.images[0]} alt="Extra item" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold uppercase mb-2 block pr-6">{item.product.title[i18n.language]}</span>
                        <div className="flex space-x-2 mb-3">
                          <select 
                            value={item.color}
                            onChange={(e) => updateExtraItem(item.uid, 'color', e.target.value)}
                            className="border border-gray-300 text-xs py-1 px-2 uppercase bg-white cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.product.colors.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                          <select 
                            value={item.size}
                            onChange={(e) => updateExtraItem(item.uid, 'size', e.target.value)}
                            className="border border-gray-300 text-xs py-1 px-2 uppercase bg-white cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => removeExtraItem(item.uid, e)}
                        className="absolute top-0 right-0 p-1 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                        title="Usuń przedmiot"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                  {extraBundleItems.length < 1 && (
                    <button 
                      onClick={(e) => openProductSelector(e)}
                      className="w-full py-4 border-2 border-dashed border-gray-300 flex items-center justify-center space-x-2 text-gray-500 hover:text-black hover:border-black transition-colors"
                    >
                      <Plus size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">DODAJ DRUGI PRZEDMIOT</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Opcja 3: 3 + 1 Gratis */}
            <div 
              className={`border cursor-pointer transition-all ${bundleOption === 3 ? 'border-black border-2 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
              onClick={() => handleBundleOptionChange(3)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundleOption === 3 ? 'border-black' : 'border-gray-300'}`}>
                    {bundleOption === 3 && <div className="w-2.5 h-2.5 bg-black rounded-full"></div>}
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-widest uppercase block">{t('pdp.bundle.get_3_1_free')} <span className="bg-gray-200 text-black text-[10px] px-1 ml-1">{t('pdp.bundle.free_shipping')}</span></span>
                  </div>
                </div>
                <span className="text-sm font-bold">{(basePriceNum * 3).toFixed(2)} PLN</span>
              </div>

              {/* Sub-wybór dodatkowych przedmiotów widoczny tylko jeśli wybrano opcję 3 */}
              {bundleOption === 3 && (
                <div className="px-4 py-4 bg-gray-300/50 border-t border-gray-200 flex flex-col space-y-4">
                  {extraBundleItems.map((item, index) => (
                    <div key={item.uid} className="flex items-start space-x-4 border-b border-gray-300 pb-4 last:border-0 last:pb-0 relative">
                      <div className="w-20 h-24 bg-white border border-gray-200 flex-shrink-0 flex items-center justify-center p-2">
                        <img src={item.product.images[0]} alt="Extra item" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold uppercase mb-2 block pr-6">{item.product.title[i18n.language]}</span>
                        <div className="flex space-x-2 mb-3">
                          <select 
                            value={item.color}
                            onChange={(e) => updateExtraItem(item.uid, 'color', e.target.value)}
                            className="border border-gray-400 text-xs py-1 px-2 uppercase bg-transparent cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.product.colors.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                          <select 
                            value={item.size}
                            onChange={(e) => updateExtraItem(item.uid, 'size', e.target.value)}
                            className="border border-gray-400 text-xs py-1 px-2 uppercase bg-transparent cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => removeExtraItem(item.uid, e)}
                        className="absolute top-0 right-0 p-1 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition-colors"
                        title="Usuń przedmiot"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                  {extraBundleItems.length < 3 && (
                    <button 
                      onClick={(e) => openProductSelector(e)}
                      className="w-full py-4 border-2 border-dashed border-gray-400 flex items-center justify-center space-x-2 text-gray-600 hover:text-black hover:border-black transition-colors"
                    >
                      <Plus size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">DODAJ PRZEDMIOT ({extraBundleItems.length}/3)</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* CTA & Trust */}
          <div className="sticky bottom-0 left-0 w-full md:relative bg-white md:bg-transparent p-4 md:p-0 border-t md:border-t-0 border-gray-200 z-50 mb-8">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-5 text-sm font-bold tracking-widest uppercase transition-all ${selectedSize ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              disabled={!selectedSize}
            >
              {selectedSize ? `${t('pdp.add_to_cart')} - ${formattedPrice}` : t('pdp.select_options')}
            </button>
            <div className="hidden md:flex justify-center mt-4">
              <PaymentIcons />
            </div>
          </div>

          {/* Accordion Details */}
          <div className="border-t border-gray-200">
            {/* Opcja 1 */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                className="w-full flex justify-between items-center py-5 text-xs font-bold tracking-widest uppercase"
              >
                {t('pdp.accordion_details')}
                {openAccordion === 'details' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'details' && (
                <div className="pb-5 text-sm text-gray-600 leading-relaxed">
                  <p>{product.description[i18n.language]}</p>
                  {product.details && product.details[i18n.language] && (
                    <ul className="list-disc pl-5 mt-3 space-y-1">
                      {product.details[i18n.language].map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            
            {/* Opcja 2 */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'material' ? '' : 'material')}
                className="w-full flex justify-between items-center py-5 text-xs font-bold tracking-widest uppercase"
              >
                {t('pdp.accordion_material')}
                {openAccordion === 'material' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'material' && (
                <div className="pb-5 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {product.material[i18n.language]}
                </div>
              )}
            </div>

            {/* Opcja 3 */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                className="w-full flex justify-between items-center py-5 text-xs font-bold tracking-widest uppercase"
              >
                {t('pdp.accordion_shipping')}
                {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-5 text-sm text-gray-600 leading-relaxed">
                  <p>Wysyłka realizowana w ciągu 24-48 godzin roboczych.</p>
                  <p className="mt-2">Darmowe zwroty do 30 dni za pośrednictwem Paczkomatów InPost.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Product Selector Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div 
            className="bg-white w-full max-w-lg max-h-[80vh] flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold tracking-widest uppercase text-sm">{t('pdp.bundle.choose_product')}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 space-y-4 flex-grow">
              {allProducts.map(prod => (
                <div 
                  key={prod.id} 
                  className="flex items-center space-x-4 p-3 border border-gray-200 hover:border-black cursor-pointer transition-colors"
                  onClick={() => handleSelectProduct(prod)}
                >
                  <div className="w-20 h-24 bg-gray-100 flex-shrink-0 p-2 flex items-center justify-center">
                    <img src={prod.images[0]} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold uppercase mb-1">{prod.title[i18n.language]}</p>
                    <p className="text-xs text-gray-500">{prod.price}</p>
                  </div>
                  <div className="px-4">
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                      <Plus size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}