'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HERO_VIDEOS = ['/hero-video.mp4', '/hero-video-2.mp4'];
const CROSSFADE_MS = 1200;

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  // activeIndex = video actualmente visible (z-index alto)
  const [activeIndex, setActiveIndex] = useState(0);
  // isCrossfading = true durante la transición
  const [isCrossfading, setIsCrossfading] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const crossfadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndexRef = useRef(0);
  const isCrossfadingRef = useRef(false);

  const startCrossfade = () => {
    if (isCrossfadingRef.current) return;
    isCrossfadingRef.current = true;
    setIsCrossfading(true);

    const nextIndex = (activeIndexRef.current + 1) % HERO_VIDEOS.length;
    // Arranca el siguiente video desde el principio
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    crossfadeTimer.current = setTimeout(() => {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      isCrossfadingRef.current = false;
      setIsCrossfading(false);
    }, CROSSFADE_MS);
  };

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
    };
  }, []);

  return (
    <section id="inicio" className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 md:pt-20">
      {/* Video Background – Crossfade real con dos capas superpuestas */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        {HERO_VIDEOS.map((src, idx) => {
          const isActive = idx === activeIndex;
          const isIncoming = isCrossfading && idx !== activeIndex;
          // Opacidad: activo=1, entrante durante transición=1, resto=0
          const opacity = isActive || isIncoming ? 1 : 0;
          // z-index: el entrante va encima durante el crossfade para aparecer
          // sobre el saliente; fuera de transición el activo está arriba
          const zIndex = isCrossfading ? (isIncoming ? 2 : 1) : (isActive ? 2 : 1);

          return (
            <video
              key={src}
              ref={(el) => { videoRefs.current[idx] = el; }}
              autoPlay={idx === 0}
              muted
              playsInline
              preload="auto"
              onEnded={startCrossfade}
              aria-hidden="true"
              style={{
                opacity,
                zIndex,
                transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.04)',
                objectPosition: 'center',
                filter: 'brightness(0.88)',
              }}
            >
              <source src={src} type="video/mp4" />
            </video>
          );
        })}

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_34%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-black/10 to-black/45" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Contenido centrado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-5xl flex-col items-center justify-center px-4 pb-20 text-center md:min-h-[calc(100vh-5rem)] md:px-8"
      >
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isLoaded ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-8 h-1 w-20 origin-center bg-beer-gold"
        />

        <motion.h1
          className="mb-5 text-5xl font-bold leading-none text-beer-gold drop-shadow-lg sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          CERTEZA
        </motion.h1>

        <motion.p
          className="mb-3 text-xl font-light text-beer-light drop-shadow-md md:text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Cerveza Artesanal
        </motion.p>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-base text-gray-200 drop-shadow-md md:text-xl"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Espuma dorada, aroma intenso y un caracter que deja huella. Cada sorbo convierte el momento en una experiencia irresistible.
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#cervezas"
            whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-beer-gold px-8 py-4 font-bold text-beer-dark shadow-lg transition-all duration-300 hover:bg-yellow-300"
          >
            Explorar Cervezas
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.08, borderColor: '#d4af37', color: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-beer-gold px-8 py-4 font-bold text-beer-gold transition-all duration-300 hover:bg-black/20"
          >
            Contacto
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator - Animated chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 border-2 border-beer-gold rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-2 bg-beer-gold rounded-full"
            animate={{ y: [2, 6, 2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
