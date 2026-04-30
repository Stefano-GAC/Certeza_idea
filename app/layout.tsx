import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Certeza - Cervecería Artesanal',
  description: 'Descubre nuestras cervezas artesanales con animaciones dinámicas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-beer-dark text-beer-light">
        {children}
      </body>
    </html>
  );
}
