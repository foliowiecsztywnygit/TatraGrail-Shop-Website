import React from 'react'
import { useTranslation } from 'react-i18next'
import HighlandPattern from './HighlandPattern'
import { ArrowRight } from 'lucide-react'
import { categoriesData } from '../data/products'
import ProductCard from './ProductCard'
import { useViewContext } from '../context/ViewContext'

export default function Drop01Section() {
  const { i18n } = useTranslation()
  const { gridView } = useViewContext()

  const drop = categoriesData.find((c) => c.id === 'drop01')
  if (!drop) return null

  return (
    <section id="drop01" className="relative w-full bg-[#0a0a0a] text-white overflow-hidden m-0 p-0">
      <HighlandPattern />
      <div className="relative z-10 pb-fluid-xl pt-0 m-0">
        <div className="w-full bg-black py-fluid-sm mb-fluid-md flex items-center justify-start px-fluid-sm m-0 border-y border-[#222]">
          <div className="flex items-center space-x-fluid-sm text-white">
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
            <h2 className="text-fluid-xl font-montserrat tracking-wide uppercase" style={{ fontWeight: 900 }}>
              {drop.title[i18n.language]}
            </h2>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-fluid-sm">
          <div className={`grid gap-x-fluid-sm gap-y-fluid-md ${
            gridView === 'minimal' 
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {drop.products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

