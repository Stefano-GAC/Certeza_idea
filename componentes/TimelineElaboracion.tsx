'use client';

import { motion } from 'framer-motion';

const PASOS = [
  { numero: 1, titulo: 'Selección', desc: 'Maltas premium 100% naturales' },
  { numero: 2, titulo: 'Maceración', desc: '3 horas de extracción perfecta' },
  { numero: 3, titulo: 'Cocción', desc: '90 min con lúpulo artesanal' },
  { numero: 4, titulo: 'Fermentación', desc: '2-3 semanas a temperatura controlada' },
  { numero: 5, titulo: 'Maduración', desc: 'Reposado en tanques de acero' },
  { numero: 6, titulo: 'Envasado', desc: 'Botella fresca lista para disfrutar' },
];

export default function TimelineElaboracion() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-black py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-beer-gold/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs tracking-[0.26em] text-cyan-300">NUESTRO PROCESO</p>
          <h2 className="text-4xl leading-none text-white sm:text-5xl md:text-6xl">
            De Grano a
            <span className="block text-beer-gold">Sorbo Perfecto</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {PASOS.map((paso, idx) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-[20px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-beer-gold/50 hover:bg-white/10 md:p-8">
                <div className="absolute -top-6 left-6 h-12 w-12 rounded-full bg-beer-gold flex items-center justify-center text-sm font-black text-black">
                  {paso.numero}
                </div>

                <div className="mt-2">
                  <h3 className="mb-2 text-xl font-bold text-white">{paso.titulo}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{paso.desc}</p>
                </div>

                <div className="pointer-events-none absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-r from-beer-gold to-cyan-300 transition-all duration-500 group-hover:w-full" />
              </div>

              {idx < PASOS.length - 1 && (
                <div className="invisible absolute -bottom-8 left-1/2 h-8 w-0.5 bg-gradient-to-b from-beer-gold/50 to-transparent md:visible md:-right-8 md:bottom-1/2 md:left-auto md:h-0.5 md:w-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
