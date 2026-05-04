'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-beer-gold/30 bg-black py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {/* Marca */}
          <div>
            <h3 className="mb-3 text-3xl font-black tracking-[0.14em] text-beer-gold">CERTEZA</h3>
            <p className="max-w-sm text-gray-300">
              Cervecería artesanal dedicada a crear experiencias únicas con ingredientes de primera calidad.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-beer-gold">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 transition hover:text-beer-gold">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cervezas" className="text-gray-300 transition hover:text-beer-gold">
                  Nuestras Cervezas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 transition hover:text-beer-gold">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-beer-gold">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@certeza.com</p>
              <p>+34 91 234 5678</p>
              <p>Madrid, Espana</p>
            </div>
          </div>
        </motion.div>

        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-beer-gold/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          <p>&copy; 2026 CERTEZA. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
