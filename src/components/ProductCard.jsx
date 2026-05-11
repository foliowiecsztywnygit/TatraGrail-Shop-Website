import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useViewContext } from '../context/ViewContext'

export default function ProductCard({ product }) {
  const { i18n } = useTranslation();
  const { gridView } = useViewContext();
  const [imgIndex, setImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && product.images && product.images.length > 1) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % product.images.length);
      }, 3000);
    } else {
      setImgIndex(0); // Reset do głównego obrazka po opuszczeniu hovera
    }
    return () => clearInterval(interval);
  }, [isHovered, product.images]);

  const currentImage = product.images[imgIndex];
  const isMinimal = gridView === 'minimal';

  return (
    <a 
      href={`/product/${product.id}`} 
      className="group block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full bg-[#0a0a0a] overflow-hidden border border-[#222] relative flex items-center justify-center p-fluid-sm group-hover:border-[#444] transition-colors duration-500 ${isMinimal ? 'aspect-square mb-0' : 'aspect-[3/4] mb-fluid-sm'}`}>
        <img 
          src={currentImage} 
          alt={product.title[i18n.language]} 
          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out" 
        />
        {/* Wskaźnik liczby zdjęć tylko dla minimal view na hoverze */}
        {isMinimal && isHovered && product.images.length > 1 && (
          <div className="absolute bottom-2 right-2 flex space-x-1">
            {product.images.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? 'bg-white' : 'bg-gray-600'}`}></span>
            ))}
          </div>
        )}
      </div>
      
      {!isMinimal && (
        <div className="flex flex-col items-start text-left">
          <span className="text-fluid-xs tracking-widest font-medium mb-1 text-gray-100 metal-text-hover group-hover:metal-text-hover uppercase">
            {product.title[i18n.language]}
          </span>
          <span className="text-fluid-sm text-gray-500 mb-3">{product.price}</span>
          
          <div className="flex space-x-1.5">
            {product.colors.map((color, idx) => (
              <span 
                key={idx} 
                className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-[#444]"
                style={{ backgroundColor: color === '#000000' ? '#222' : color }}
              ></span>
            ))}
          </div>
        </div>
      )}
    </a>
  )
}