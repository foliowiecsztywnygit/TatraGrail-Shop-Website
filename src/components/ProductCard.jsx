import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useViewContext } from '../context/ViewContext'

export default function ProductCard({ product }) {
  const { i18n } = useTranslation()
  const { gridView } = useViewContext()
  const [imgIndex, setImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval
    if (isHovered && product.images && product.images.length > 1) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % product.images.length);
      }, 3000)
    } else {
      setImgIndex(0)
    }
    return () => clearInterval(interval)
  }, [isHovered, product.images])

  const currentImage = product.images[imgIndex]
  const isMinimal = gridView === 'minimal'

  return (
    <a
      href={`/product/${product.slug || product.id}`}
      className="group block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={currentImage}
          alt={product.title[i18n.language]}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
        {product.saleActive ? (
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            <span className="bg-red-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {product.saleBadgeLabel || 'SALE'}
            </span>
            {product.discountPercent ? (
              <span className="bg-white/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                -{product.discountPercent}%
              </span>
            ) : null}
          </div>
        ) : null}
        {isHovered && product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-black/55 px-2 py-1">
            {product.images.map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/35'}`}></span>
            ))}
          </div>
        )}
      </div>
      <div className={`flex flex-col items-start text-left ${isMinimal ? 'mt-2 gap-1' : 'mt-3 gap-1.5'}`}>
        <span className={`font-medium uppercase leading-tight text-gray-100 ${isMinimal ? 'text-[11px] tracking-[0.18em]' : 'text-fluid-xs tracking-widest'}`}>
          {product.title[i18n.language]}
        </span>
        <div className={`flex flex-wrap items-center gap-2 ${isMinimal ? 'text-xs' : 'text-fluid-sm'}`}>
          <span className="text-gray-100">{product.salePrice || product.price}</span>
          {product.salePrice ? <span className="text-gray-500 line-through">{product.price}</span> : null}
        </div>
      </div>
    </a>
  )
}
