'use client';

import { useEffect, useState } from 'react';
import { assetPath } from './assetPath';

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function WaffleIcon() {
  return (
    <div className="flex flex-col gap-[4px] transition-transform duration-200 group-hover:scale-110">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex gap-[4px]">
          {[0, 1, 2].map((col) => (
            <div key={col} className="h-[4px] w-[4px] rounded-full bg-beer-gold transition-colors duration-200 group-hover:bg-white" />
          ))}
        </div>
      ))}
    </div>
  );
}

function DotSeparator({ className = '' }: { className?: string }) {
  return <span className={`text-[5px] leading-none text-beer-gold/40 ${className}`}>&#9679;</span>;
}

function LargeLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center text-center leading-none transition-all duration-500 ${
        scrolled ? 'pointer-events-none -translate-y-2 scale-95 opacity-0' : 'translate-y-0 scale-100 opacity-100'
      }`}
    >
      <img
        src={assetPath('/CERTEZA Badge Logo _ Transparent.png')}
        alt="Certeza logo"
        className="h-full w-full object-contain drop-shadow-[0_5px_16px_rgba(0,0,0,0.42)]"
      />
    </div>
  );
}

function CompactLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ${
        scrolled ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-2 scale-95 opacity-0'
      }`}
    >
      <span className="text-[1rem] leading-none tracking-[0.2em] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
        CERTEZA
      </span>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconLinkClass = 'inline-flex items-center text-white/75 transition-all duration-200';
  const boxShellClass = 'group/box relative overflow-hidden border-r border-white/15';
  const boxCyanLayerClass = 'pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0 bg-cyan-300/95 transition-[height,opacity] duration-120 ease-out group-hover/box:h-full group-hover/box:opacity-0 group-hover/box:delay-120';
  const boxYellowLayerClass = 'pointer-events-none absolute inset-x-0 bottom-0 z-0 h-0 bg-beer-gold transition-[height] duration-220 delay-70 ease-out group-hover/box:h-full';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/60 shadow-[0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      {/* Desktop: navbar segmentado por cuadros */}
      <div className="hidden grid-cols-[72px_170px_170px_1fr_250px_86px_72px] border-y border-white/15 bg-black/20 md:grid">
        <div className={`${boxShellClass} flex items-center justify-center`}>
          <span className={boxYellowLayerClass} />
          <span className={boxCyanLayerClass} />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="group relative z-10 border-none bg-transparent p-1"
            aria-label="Abrir menu"
          >
            <WaffleIcon />
          </button>
        </div>

        <a
          href="#inicio"
          className={`${boxShellClass} flex items-center justify-center text-[0.82rem] tracking-[0.2em] text-white/85 transition-colors duration-150 hover:text-black`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className={boxYellowLayerClass} />
          <span className={boxCyanLayerClass} />
          <span className="relative z-10">MENU</span>
        </a>

        <a
          href="#cervezas"
          className={`${boxShellClass} flex items-center justify-center text-[0.82rem] tracking-[0.2em] text-white/85 transition-colors duration-150 hover:text-black`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className={boxYellowLayerClass} />
          <span className={boxCyanLayerClass} />
          <span className="relative z-10">BOOK</span>
        </a>

        <div className="relative flex h-[78px] items-center justify-center border-r border-white/15">
          <div className={`relative h-[62px] w-[180px] transition-all duration-500 ${scrolled ? 'h-[52px] w-[150px]' : 'h-[96px] w-[320px]'}`}>
            <LargeLogo scrolled={scrolled} />
            <CompactLogo scrolled={scrolled} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 border-r border-white/15 px-3">
          <a href="tel:+34912345678" className={iconLinkClass} title="Telefono" aria-label="Telefono">
            <IconPhone />
          </a>
          <DotSeparator />
          <a href="mailto:info@certeza.com" className={iconLinkClass} title="Email" aria-label="Email">
            <IconMail />
          </a>
          <DotSeparator />
          <a href="#" className={iconLinkClass} title="Facebook" aria-label="Facebook">
            <IconFacebook />
          </a>
          <DotSeparator />
          <a href="#" className={iconLinkClass} title="Instagram" aria-label="Instagram">
            <IconInstagram />
          </a>
        </div>

        <a
          href="#"
          className={`${boxShellClass} flex items-center justify-center text-[0.82rem] tracking-[0.18em] text-white/85 transition-colors duration-150 hover:text-black`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className={boxYellowLayerClass} />
          <span className={boxCyanLayerClass} />
          <span className="relative z-10">ES</span>
        </a>

        <button
          type="button"
          className={`${boxShellClass} flex items-center justify-center text-white/75 transition-colors duration-150 hover:text-black`}
          title="Buscar"
          aria-label="Buscar"
        >
          <span className={boxYellowLayerClass} />
          <span className={boxCyanLayerClass} />
          <span className="relative z-10">
            <IconSearch />
          </span>
        </button>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between border-y border-white/15 bg-black/30 px-4 py-3 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="group border-none bg-transparent p-1"
          aria-label="Abrir menu"
        >
          <WaffleIcon />
        </button>

        <div className="relative h-[54px] w-[180px]">
          <LargeLogo scrolled={scrolled} />
          <CompactLogo scrolled={scrolled} />
        </div>

        <button
          type="button"
          className="inline-flex items-center border-none bg-transparent p-1 text-white/75 transition-all duration-200 hover:scale-110 hover:text-beer-gold"
          title="Buscar"
          aria-label="Buscar"
        >
          <IconSearch />
        </button>
      </div>

      <div className="h-px origin-left bg-beer-gold/20 transition-transform duration-700" style={{ transform: scrolled ? 'scaleX(1)' : 'scaleX(0)' }} />

      <div
        className={`overflow-hidden border-t border-beer-gold/10 bg-black/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4">
          {[
            ['Inicio', '#inicio'],
            ['Cervezas', '#cervezas'],
            ['Contacto', '#contacto'],
            ['Book', '#cervezas'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-beer-gold/10 py-3 text-[1.55rem] tracking-[0.16em] text-white transition-all duration-200 hover:pl-2 hover:text-beer-gold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

