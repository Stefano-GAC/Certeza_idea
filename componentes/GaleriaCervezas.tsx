'use client';

import { motion } from 'framer-motion';
import TarjetaCerveza from './TarjetaCerveza';

const BEERS = [
  {
    id: 1,
    name: 'IPA Dorada',
    description: 'Cerveza artesanal con aromas cítricos',
    image: '/beer1.jpg',
    color: '#cc5500',
  },
  {
    id: 2,
    name: 'Stout Oscura',
    description: 'Robusta con notas de chocolate y café',
    image: '/beer2.jpg',
    color: '#1a1a1a',
  },
  {
    id: 3,
    name: 'Lager Crisp',
    description: 'Refrescante y ligera para cualquier ocasión',
    image: '/beer3.jpg',
    color: '#f4d03f',
  },
  {
    id: 4,
    name: 'Porter Premium',
    description: 'Compleja con toques de malta tostada',
    image: '/beer4.jpg',
    color: '#2c2c2c',
  },
];

export default function BeerGallery() {
  return (
    <section id="cervezas" className="py-28 px-4 md:px-8 bg-beer-dark">
      <div className="max-w-7xl mx-auto">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-beer-gold mb-4">
            Nuestras Cervezas
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Seleccion premium de cerveza artesanal
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="h-1 w-32 bg-gradient-to-r from-beer-gold to-beer-amber mx-auto origin-center"
          ></motion.div>
        </motion.div>

        {/* Grid de cervezas - 2 columnas en mobile, 4 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {BEERS.map((beer, index) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <TarjetaCerveza beer={beer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
