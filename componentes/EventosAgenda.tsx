'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { assetPath } from './assetPath';

const EVENTOS = [
  {
    id: 1,
    frecuencia: 'Todos los martes',
    titulo: 'CERTEZA Night Live Music',
    desc: 'Sesiones en vivo con cerveza fria, luces bajas y una mesa lista para quedarse toda la noche.',
    lugar: 'Bogotá',
    hora: 'Desde las 7:00 PM',
    imagen: assetPath('/CERTEZA Night _ Live Music.png'),
  },
  {
    id: 2,
    frecuencia: 'Cada fin de semana',
    titulo: 'CERTEZA Night Crowd Wide Shot',
    desc: 'El plan grande de la casa: barra encendida, mesas llenas y energia de rooftop para cerrar la semana.',
    lugar: 'Envigado',
    hora: 'Viernes y sábados, 8:00 PM',
    imagen: assetPath('/CERTEZA Night _ Crowd Wide Shot.png'),
  },
  {
    id: 3,
    frecuencia: 'Primer jueves de cada mes',
    titulo: 'CERTEZA Night Cheers Moment',
    desc: 'Una noche pensada para brindar: rondas compartidas, maridaje rapido y ambiente de celebración.',
    lugar: 'Medellín',
    hora: '8:30 PM',
    imagen: assetPath('/CERTEZA Night _ Cheers Moment.png'),
  },
  {
    id: 4,
    frecuencia: 'Último sábado de cada mes',
    titulo: 'CERTEZA Night Bartender Pour',
    desc: 'Cata guiada frente a barra con servicio especial, pours perfectos y foco total en la experiencia.',
    lugar: 'Cali',
    hora: '9:00 PM',
    imagen: assetPath('/CERTEZA Night _ Bartender Pour.png'),
  },
];

export default function EventosAgenda() {
  return (
    <section id="eventos" className="relative overflow-hidden bg-gradient-to-b from-black to-beer-dark py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/3 h-80 w-80 rounded-full bg-beer-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs tracking-[0.26em] text-beer-gold">PRÓXIMOS EVENTOS</p>
          <h2 className="text-4xl leading-none text-white sm:text-5xl md:text-6xl">
            Vive la Experiencia
            <span className="block text-cyan-300">CERTEZA</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {EVENTOS.map((evento, idx) => (
            <motion.div
              key={evento.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-beer-gold/40 hover:bg-white/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-beer-gold/0 via-white/0 to-cyan-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <div className="relative h-60 overflow-hidden">
                <Image
                  src={evento.imagen}
                  alt={evento.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex rounded-full border border-beer-gold/70 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-beer-gold backdrop-blur-sm">
                  {evento.frecuencia}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-white/70">{evento.lugar}</span>
                  <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">{evento.hora}</span>
                </div>
              </div>

              <div className="relative p-6 md:p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">{evento.titulo}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{evento.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-cyan-300">Cupo limitado cada edición</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-beer-gold px-4 py-2 text-xs font-bold text-black transition-all hover:bg-yellow-300"
                  >
                    Reservar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-beer-gold hover:bg-white/10"
          >
            Ver todos los eventos →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
