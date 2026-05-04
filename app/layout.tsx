import type { Metadata } from 'next';
import { Abril_Fatface } from 'next/font/google';
import './globals.css';

const abrilFont = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril',
});

export const metadata: Metadata = {
  title: 'Certeza - Cervecería Artesanal',
  description: 'Descubre nuestra cerveza artesanal con una experiencia visual unica',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${abrilFont.variable} bg-beer-dark text-beer-light`}>
        {children}
      </body>
    </html>
  );
}
