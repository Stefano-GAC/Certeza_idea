'use client';

import { useEffect, useState } from 'react';

export default function PantallaCarga() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minDuration = 2200;
    const start = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }

    return () => window.removeEventListener('load', hideLoader);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#e6d157]">
      <img
        src="/CERTEZA%20Badge%20Logo%20_%20Transparent.png"
        alt="Certeza cargando"
        className="loader-logo-bounce h-56 w-56 object-contain md:h-72 md:w-72"
      />
      <p className="mt-8 text-xl font-black tracking-[0.2em] text-black/80 md:text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
        LOADING
        <span className="ml-1 inline-flex w-8 justify-start" aria-hidden="true">
          <span className="loader-dot">.</span>
          <span className="loader-dot loader-dot-delay-1">.</span>
          <span className="loader-dot loader-dot-delay-2">.</span>
        </span>
      </p>
    </div>
  );
}