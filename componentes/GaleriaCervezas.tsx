import type { CSSProperties } from 'react';
import { assetPath } from './assetPath';

interface Cerveza {
  id: number;
  nombre: string;
  imagen: string;
  fondo: string;
  ancho?: number;
  escalaFondo?: number;
  escalaLata?: number;
  escalaLataHover?: number;
}

const BEERS: Cerveza[] = [
  {
    id: 1,
    nombre: 'Mojito',
    imagen: assetPath('/latas/mojito.png'),
    fondo: assetPath('/latas/mojito2.png'),
    ancho: 278,
    escalaFondo: 1.44,
    escalaLata: 1.34,
    escalaLataHover: 1.4,
  },
  {
    id: 2,
    nombre: 'Lobos',
    imagen: assetPath('/latas/lobos.png'),
    fondo: assetPath('/latas/lobos2.png'),
    ancho: 278,
    escalaFondo: 1.44,
    escalaLata: 1.34,
    escalaLataHover: 1.4,
  },
  {
    id: 3,
    nombre: 'Perro Vaquero',
    imagen: assetPath('/latas/perrovaquero.png'),
    fondo: assetPath('/latas/perrovaquero2.png'),
    ancho: 278,
    escalaFondo: 1.44,
    escalaLata: 1.34,
    escalaLataHover: 1.4,
  },
  {
    id: 4,
    nombre: 'Limonada',
    imagen: assetPath('/latas/limonada.png'),
    fondo: assetPath('/latas/limonada2.png'),
    ancho: 278,
    escalaFondo: 1.44,
    escalaLata: 1.34,
    escalaLataHover: 1.4,
  },
  {
    id: 5,
    nombre: 'Danza',
    imagen: assetPath('/latas/danza.png'),
    fondo: assetPath('/latas/danza2.png'),
    ancho: 278,
    escalaFondo: 1.44,
    escalaLata: 1.34,
    escalaLataHover: 1.4,
  },
];

export default function BeerGallery() {
  const LOOP_BEERS = [...BEERS, ...BEERS];

  return (
    <section id="cervezas" className="alafut-beers-section">
      <div className="alafut-beers-heading-wrap">
        <h2 className="alafut-beers-heading" style={{ fontFamily: 'var(--font-heading)' }}>
          Ilustradas para mirar, creadas para brindar.
        </h2>
      </div>
      <div className="alafut-beers-shell">
        <div className="alafut-beers-window">
          <div
            className="alafut-beers-track alafut-beers-track--loop"
            style={{ '--beers-count': BEERS.length } as CSSProperties}
            role="list"
            aria-label="Carrusel de cervezas estilo Alafut"
          >
            {LOOP_BEERS.map((beer, idx) => (
              <article key={`${beer.id}-${idx}`} className="alafut-beers-slide" role="listitem" aria-label={beer.nombre}>
                <div
                  className="alafut-beers-card"
                  style={{
                    '--beer-can-width': `${beer.ancho ?? 220}px`,
                    '--beer-art-scale': beer.escalaFondo ?? 1.18,
                    '--beer-can-scale': beer.escalaLata ?? 1,
                    '--beer-can-hover-scale': beer.escalaLataHover ?? 1.035,
                  } as CSSProperties}
                >
                  <div className="alafut-beers-card-bg" aria-hidden="true">
                    <img src={beer.fondo} alt="" loading="lazy" />
                  </div>
                  <img className="alafut-beers-card-can" src={beer.imagen} alt={beer.nombre} loading="lazy" />
                  <div className="alafut-beers-card-shadow" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
