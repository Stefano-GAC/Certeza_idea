'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CTAMovilFijo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 block bg-gradient-to-t from-beer-dark to-transparent px-4 py-3 md:hidden"
    >
      <a
        href="#cervezas"
        className="block rounded-full bg-beer-gold px-6 py-3 text-center font-bold text-beer-dark shadow-lg transition-all duration-200 hover:bg-yellow-300 active:scale-95"
      >
        Pedir Ahora
      </a>
    </motion.div>
  );
}
