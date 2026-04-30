'use client';

import Heroe from '@/componentes/Heroe';
import GaleriaCervezas from '@/componentes/GaleriaCervezas';
import Pie from '@/componentes/Pie';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-beer-dark via-beer-dark to-black">
      <Heroe />
      <GaleriaCervezas />
      <Pie />
    </main>
  );
}
