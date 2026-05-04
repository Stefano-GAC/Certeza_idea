import type { CSSProperties } from 'react';

const BEERS = [
  {
    id: 1,
    nombre: 'Le Dernier des Mojitos',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2024/03/ALAFUT_DernierMojitos_3D.png',
  },
  {
    id: 2,
    nombre: 'Coyloup',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2021/09/ALAFUT_Coyloup_3D-3.png',
  },
  {
    id: 3,
    nombre: 'British a l erable',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2018/08/ALAFUT_British-Erable_3D.png',
  },
  {
    id: 4,
    nombre: 'Mimosa Desperado',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2026/03/ALAFUT_MimosaDesperado_3D.png',
  },
  {
    id: 5,
    nombre: 'QV18',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2026/04/ALAFUT_QV18_3D.png',
  },
  {
    id: 6,
    nombre: 'Gloria',
    imagen: 'https://www.alafut.qc.ca/app/uploads/2023/07/ALAFU_Gloria_3D-1.png',
  },
];

export default function BeerGallery() {
  const LOOP_BEERS = [...BEERS, ...BEERS];

  return (
    <section id="cervezas" className="alafut-beers-section">
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
                <div className="alafut-beers-card">
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
