'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

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
      className="relative h-96 rounded-lg overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Fondo con color */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: isHovered ? beer.color : '#1a1a1a',
        }}
      />

      {/* Contenedor de imagen */}
      <motion.div
        className="relative w-full h-80 flex items-center justify-center overflow-hidden"
        animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-32 h-48 sm:w-40 sm:h-56">
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isHovered ? 180 : 0, rotateX: isHovered ? 10 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: '1000px' }}
          >
            <img
              src={beer.image}
              alt={beer.name}
              className="w-full h-full object-contain filter drop-shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/beer-placeholder.svg';
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Información */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
        animate={{ translateY: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-beer-gold mb-2">{beer.name}</h3>
        <p className="text-sm text-gray-300">{beer.description}</p>
      </motion.div>

      {/* Brillo al hover */}
      <motion.div
        className="absolute inset-0 bg-white/0 pointer-events-none"
        animate={{
          background: isHovered ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)' : 'radial-gradient(circle at center, rgba(255,255,255,0) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
