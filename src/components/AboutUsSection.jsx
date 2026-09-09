import React from 'react'
import HighlandPattern from './HighlandPattern'
import { ArrowRight } from 'lucide-react'

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.38-2.91 5.72-1.74 1.32-4.04 1.83-6.19 1.43-2.16-.39-4.09-1.68-5.23-3.48-1.15-1.8-1.45-4.04-.84-6.03.6-1.99 2.1-3.66 4.02-4.52 1.93-.85 4.16-.94 6.13-.26v4.11c-1.3-.4-2.73-.24-3.9.5-1.17.74-1.92 2.05-1.99 3.42-.08 1.38.54 2.75 1.62 3.58 1.08.84 2.54 1.12 3.86.74 1.31-.38 2.37-1.33 2.87-2.58.5-1.25.5-2.65.02-3.9V.02z" />
  </svg>
)

export default function AboutUsSection() {
  return (
    <section id="o-nas" className="relative w-full bg-[#0a0a0a] text-white overflow-hidden m-0 p-0">
      <HighlandPattern />

      <div className="relative z-10 m-0 p-0">
        <div className="pb-fluid-xl pt-0 m-0">

          {/* Divider */}
          <div className="w-full bg-black py-fluid-sm mb-fluid-md flex items-center justify-start px-fluid-sm m-0 border-y border-[#222]">
            <div className="flex items-center text-white">
              <h2 className="text-fluid-xl font-montserrat tracking-wide uppercase" style={{ fontWeight: 900 }}>
                O nas
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[1800px] mx-auto px-fluid-sm mt-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Box 1 */}
              <div className="flex flex-col bg-[#111] border border-[#333] p-6 rounded-2xl">
                <div className="w-full aspect-square bg-[#222] rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <img src="/o-nas/1.png" alt="100% made in Poland" className="absolute inset-0 w-full h-full object-cover bg-white" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-3">100% Made in Poland</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Z dumą informujemy, że wszystko było wyprodukowane w 100% w Polsce. Od projektu, przez dobór najwyższej jakości materiałów, aż po ostatni szew — wszystko dzieje się lokalnie, wspierając nasz rodzimy rynek.
                </p>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col bg-[#111] border border-[#333] p-6 rounded-2xl">
                <div className="w-full aspect-square bg-[#222] rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <img src="/o-nas/2.jpeg" alt="Góralski Vibe" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-3">Góralski Vibe</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  Jesteśmy w stałej współpracy z tiktokerami z niszy góralskiej. Łączymy streetwar z memami, klimatem oraz kulturą podhala bez tandetnych wzorów i napisów, no zależy jak kto co widzi ;)
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a href="https://www.tiktok.com/@mokasynek4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-black border border-[#333] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#222] transition-colors group">
                    <TikTokIcon className="w-4 h-4 text-white group-hover:text-zinc-300" />
                    <span>@mokasynek4</span>
                  </a>
                  <a href="https://www.tiktok.com/@cebula_sport_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-black border border-[#333] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#222] transition-colors group">
                    <TikTokIcon className="w-4 h-4 text-white group-hover:text-zinc-300" />
                    <span>@cebula_sport_official</span>
                  </a>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex flex-col bg-[#111] border border-[#333] p-6 rounded-2xl">
                <div className="w-full aspect-square bg-[#222] rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                  <img src="/o-nas/3.jpg" alt="Fundament Przyszłości" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-3">Fundament Przyszłości</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Wierzymy w ciągły i dynamiczny rozwój naszej marki. Każdy zrealizowany zakup to dla nas cegiełka, która służy jako solidny fundament do budowy kolejnych, jeszcze bardziej dopracowanych projektów.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
