'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { assetPath } from './assetPath';

const FOTOS = [
  { area: 'main', src: assetPath('/CERTEZA Trio _ Hero Poster.png'),         titulo: 'Tres razones para brindar', texto: 'Cada botella es una historia. Elige la tuya.' },
  { area: 's1',   src: assetPath('/CERTEZA IPA _ Neon City.png'),             titulo: 'IPA Neon City',             texto: 'Intensidad que enciende la noche.' },
  { area: 's2',   src: assetPath('/CERTEZA Lager _ Golden Splash.png'),       titulo: 'Lager Golden Splash',       texto: 'Frescura que no se negocia.' },
  { area: 'wide', src: assetPath('/CERTEZA Trio _ Rooftop Lifestyle.png'),    titulo: 'La cerveza del momento',    texto: 'Los mejores planes merecen la mejor cerveza.' },
  { area: 's3',   src: assetPath('/CERTEZA Stout _ Smoky Bar.png'),           titulo: 'Stout Smoky Bar',           texto: 'Chocolate, humo y caracter en cada sorbo.' },
  { area: 's4',   src: assetPath('/Cinematic Craft Beer 3.png'),              titulo: 'Artesanal de verdad',       texto: 'Elaborada con obsesion, servida con orgullo.' },
  { area: 's5',   src: assetPath('/Cinematic Craft Beer 4.png'),              titulo: 'Mas que una cerveza',       texto: 'Es la excusa perfecta para reunirse.' },
  { area: 's6',   src: assetPath('/CERTEZA Bottle _ Glass _ Luxury Bar.png'), titulo: 'Lujo en cada copa',         texto: 'Porque los detalles marcan la diferencia.' },
];

function FotoCell({ foto, index }: { foto: typeof FOTOS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group relative w-full h-full overflow-hidden"
    >
      <Image
        src={foto.src}
        alt={foto.titulo}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out p-4 md:p-6">
        <p className="text-beer-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold">CERTEZA</p>
        <h3 className="text-white text-base md:text-xl font-bold leading-tight mb-1">{foto.titulo}</h3>
        <p className="text-gray-300 text-xs md:text-sm leading-snug">{foto.texto}</p>
        <span className="mt-3 inline-block text-beer-gold text-[10px] tracking-widest uppercase border-b border-beer-gold pb-px">Ver mas</span>
      </div>
    </motion.div>
  );
}

export default function GaleriaFotos() {
  const byArea = Object.fromEntries(FOTOS.map((f) => [f.area, f]));

  return (
    <section id="galeria" className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 pt-20 pb-10 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
          Nuestra <span className="text-beer-gold">Galeria</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">Imagenes que cuentan lo que las palabras no pueden.</p>
        <div className="h-px w-24 bg-beer-gold mx-auto mt-6" />
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.5fr 1.5fr',
          gridTemplateRows: '210px 300px 190px',
          gridTemplateAreas: '"main main s1 s2" "main main wide s5" "s3 s4 wide s6"',
        }}
      >
        <div style={{ gridArea: 'main' }}><FotoCell foto={byArea['main']} index={0} /></div>
        <div style={{ gridArea: 's1' }}><FotoCell foto={byArea['s1']} index={1} /></div>
        <div style={{ gridArea: 's2' }}><FotoCell foto={byArea['s2']} index={2} /></div>
        <div style={{ gridArea: 'wide' }}><FotoCell foto={byArea['wide']} index={3} /></div>
        <div style={{ gridArea: 's3' }}><FotoCell foto={byArea['s3']} index={4} /></div>
        <div style={{ gridArea: 's4' }}><FotoCell foto={byArea['s4']} index={5} /></div>
        <div style={{ gridArea: 's5' }}><FotoCell foto={byArea['s5']} index={6} /></div>
        <div style={{ gridArea: 's6' }}><FotoCell foto={byArea['s6']} index={7} /></div>
      </div>
    </section>
  );
}
