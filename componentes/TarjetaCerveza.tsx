'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Cerveza {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

export default function TarjetaCerveza({ beer }: { beer: Cerveza }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-shadow"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Imagen full-bleed */}
      <motion.div
        className="relative h-full w-full overflow-hidden"
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={beer.image}
          alt={beer.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/beer-placeholder.svg';
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isHovered
            ? `linear-gradient(to top, ${beer.color}B3, rgba(0,0,0,0.2))`
            : 'linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.15))',
        }}
      />

      {/* Información - Mejorada */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5"
        animate={{ translateY: isHovered ? 0 : 24, opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-beer-gold mb-1">{beer.name}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">{beer.description}</p>
      </motion.div>

      {/* Brillo y efecto al hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          background: isHovered ? 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)' : 'radial-gradient(circle at center, rgba(212, 175, 55, 0) 0%, transparent 70%)',
          border: isHovered ? '2px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(212, 175, 55, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
