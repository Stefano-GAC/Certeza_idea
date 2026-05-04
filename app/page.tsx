'use client';

import Navbar from '@/componentes/Navbar';
import Heroe from '@/componentes/Heroe';
import GaleriaCervezas from '@/componentes/GaleriaCervezas';
import GaleriaFotos from '@/componentes/GaleriaFotos';
import Pie from '@/componentes/Pie';
import PantallaCarga from '@/componentes/PantallaCarga';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-beer-dark via-beer-dark to-black">
      <PantallaCarga />
      <Navbar />
      <Heroe />
      <GaleriaCervezas />
      <GaleriaFotos />
      <Pie />
    </main>
  );
}
