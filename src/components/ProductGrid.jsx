import React from 'react'
import { useTranslation } from 'react-i18next'
import HighlandPattern from './HighlandPattern'
import { ArrowRight } from 'lucide-react'
import { categoriesData } from '../data/products'
import ProductCard from './ProductCard'
import { useViewContext } from '../context/ViewContext'

export default function ProductGrid() {
  const { i18n } = useTranslation();
  const { gridView } = useViewContext();
  const visibleCategories = categoriesData.filter((c) => c.id !== 'drop01')

  return (
    <section id="katalog" className="relative w-full bg-[#0a0a0a] text-white overflow-hidden m-0 p-0">
      <HighlandPattern />
      
      <div className="relative z-10 m-0 p-0">
        {visibleCategories.map((category, index) => (
          <div key={category.id} id={category.id} className="pb-fluid-xl pt-0 m-0">
            
            {/* Divider */}
            <div className={`w-full bg-black py-fluid-sm mb-fluid-md flex items-center justify-start px-fluid-sm m-0 border-y border-[#222]`}>
              <div className="flex items-center space-x-fluid-sm text-white">
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
                <h2 className="text-fluid-xl font-montserrat tracking-wide uppercase" style={{ fontWeight: 900 }}>
                  {category.title[i18n.language]}
                </h2>
              </div>
            </div>

            {/* Grid */}
            <div className="max-w-[1800px] mx-auto px-fluid-sm">
              <div className={`grid gap-x-fluid-sm gap-y-fluid-md ${
                gridView === 'minimal' 
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6' // Gęsta siatka dla widoku minimalnego
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' // Duża siatka z tekstem
              }`}>
                {category.products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}
