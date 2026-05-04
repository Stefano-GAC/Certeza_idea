'use client';

import Navbar from '@/componentes/Navbar';
import Heroe from '@/componentes/Heroe';
import GaleriaCervezas from '@/componentes/GaleriaCervezas';
import GaleriaFotos from '@/componentes/GaleriaFotos';
import SeccionImpactoVideo from '@/componentes/SeccionImpactoVideo';
import Pie from '@/componentes/Pie';
import PantallaCarga from '@/componentes/PantallaCarga';
import FloatingWhatsApp from '@/componentes/FloatingWhatsApp';
import CTAMovilFijo from '@/componentes/CTAMovilFijo';
import TimelineElaboracion from '@/componentes/TimelineElaboracion';
import EventosAgenda from '@/componentes/EventosAgenda';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-beer-dark via-beer-dark to-black">
      <PantallaCarga />
      <Navbar />
      <FloatingWhatsApp />
      <CTAMovilFijo />
      <Heroe />
      <GaleriaCervezas />
      <GaleriaFotos />
      <TimelineElaboracion />
      <EventosAgenda />
      <SeccionImpactoVideo />
      <Pie />
    </main>
  );
}
