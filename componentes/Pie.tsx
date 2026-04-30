'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-beer-gold/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
        >
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-beer-gold mb-2">CERTEZA</h3>
            <p className="text-gray-400">Cervezas artesanales con pasión</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-beer-gold font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-beer-gold transition">Inicio</a></li>
              <li><a href="#" className="hover:text-beer-gold transition">Cervezas</a></li>
              <li><a href="#" className="hover:text-beer-gold transition">Contacto</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-beer-gold font-bold mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-start gap-4 text-gray-400">
              <a href="#" className="hover:text-beer-gold transition">Facebook</a>
              <a href="#" className="hover:text-beer-gold transition">Instagram</a>
              <a href="#" className="hover:text-beer-gold transition">Twitter</a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-beer-gold/10 text-center text-gray-500"
        >
          <p>&copy; 2024 Certeza - Cervecería Artesanal. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
