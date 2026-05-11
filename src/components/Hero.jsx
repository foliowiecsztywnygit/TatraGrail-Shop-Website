import React, { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative w-full h-[100vh] min-h-[100svh] bg-black flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          /* 
            Kluczowe klasy dla idealnego croppingu na KAŻDYM urządzeniu:
            Wideo jest absolutnie wyśrodkowane (top-1/2 left-1/2, -translate), 
            zawsze zajmuje minimum 100% szerokości i wysokości kontenera, 
            a max-w-none pozwala mu naturalnie wyjść poza krawędzie ekranu (zostać uciętym).
          */
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover m-0 p-0"
        >
          <source src="/src/assets/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </div>

      {/* Content - Editorial alignment */}
      <div className="relative z-10 flex flex-col items-center text-center px-fluid-md w-full max-w-[1800px] mt-16 md:mt-0">
        <h1 className="text-white text-fluid-hero font-bold tracking-tighter leading-[0.9] mb-fluid-sm w-full">
          {t('hero.title_1')} <br/> {t('hero.title_2')}
        </h1>
        
        <p className="text-gray-300 text-fluid-sm tracking-widest mb-fluid-md max-w-2xl">
          {t('hero.subtitle')}
        </p>

        <a 
          href="#katalog" 
          className="metal-bg text-black px-fluid-md py-4 text-fluid-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  )
}
