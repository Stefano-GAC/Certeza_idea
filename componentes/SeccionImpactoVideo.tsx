'use client';

import { motion } from 'framer-motion';
import { assetPath } from './assetPath';

export default function SeccionImpactoVideo() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-[#090909] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-beer-gold/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.09),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(212,175,55,0.13),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-[1fr_1.35fr] md:items-center md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <p className="mb-3 text-xs tracking-[0.26em] text-cyan-300">NUEVA EXPERIENCIA</p>
          <h2 className="mb-4 text-4xl leading-none text-white sm:text-5xl md:text-6xl">
            El Momento
            <span className="block text-beer-gold">Que Hace Boom</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
            Color, espuma y energia en una sola toma.
            Mira el video y deja que Certeza hable por si sola.
          </p>
          <a
            href="#contacto"
            className="mt-7 inline-flex rounded-full border border-beer-gold/70 px-6 py-3 text-sm tracking-[0.18em] text-beer-gold transition-all duration-300 hover:bg-beer-gold hover:text-black"
          >
            RESERVAR AHORA
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-black/50 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[24px] border border-cyan-300/25" />
            <video
              className="relative z-0 h-[340px] w-full rounded-[22px] object-cover md:h-[520px]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={assetPath('/1777889988869-bebe544a-47cc-458d-b1eb-6af7b9a5e332-1998211_0_ltx23_v__00393-audio.mp4')} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-5 left-6 z-30 rounded-full bg-black/55 px-3 py-1 text-[10px] tracking-[0.18em] text-white backdrop-blur">
              EXPERIENCIA CERTEZA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
