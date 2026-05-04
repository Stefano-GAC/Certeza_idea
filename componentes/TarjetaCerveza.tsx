'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Cerveza {
  id: number;
  name: string;
  description: string;
  image: string;
  sideArt: string;
  color: string;
}

export default function TarjetaCerveza({ beer }: { beer: Cerveza }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative mx-auto h-[430px] w-full max-w-[320px] cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="pointer-events-none absolute inset-x-8 bottom-8 top-5 rounded-[2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent shadow-[0_26px_80px_rgba(0,0,0,0.55)]" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[20%] z-10 h-[220px] w-[150px] overflow-hidden rounded-[22px] opacity-0 shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
        animate={{
          opacity: isHovered ? 0.98 : 0,
          x: isHovered ? -146 : -40,
          y: isHovered ? -8 : 10,
          rotate: isHovered ? -9 : -2,
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          maskImage: 'linear-gradient(to left, transparent 0%, black 28%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 28%, black 100%)',
        }}
      >
        <Image src={beer.sideArt} alt="" fill className="object-cover" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[22%] z-10 h-[220px] w-[150px] overflow-hidden rounded-[22px] opacity-0 shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
        animate={{
          opacity: isHovered ? 0.98 : 0,
          x: isHovered ? 22 : -32,
          y: isHovered ? -2 : 10,
          rotate: isHovered ? 9 : 2,
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)',
        }}
      >
        <Image src={beer.sideArt} alt="" fill className="scale-x-[-1] object-cover" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-11 z-20 h-[278px] w-[190px] -translate-x-1/2 rounded-full blur-3xl"
        animate={{ opacity: isHovered ? 0.44 : 0.22, scale: isHovered ? 1.18 : 0.94 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(circle, ${beer.color}88 0%, transparent 72%)` }}
      />

      <motion.div
        className="relative z-30 mx-auto flex h-[310px] w-[190px] items-center justify-center"
        animate={{ y: isHovered ? -10 : 0, scale: isHovered ? 1.04 : 1 }}
        transition={{ duration: 0.35 }}
      >
        <Image
          src={beer.image}
          alt={beer.name}
          width={190}
          height={310}
          className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      <div className="pointer-events-none absolute left-1/2 top-[305px] z-10 h-7 w-40 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 rounded-[1.5rem] border border-white/10 bg-black/45 px-5 py-5 backdrop-blur-md"
        animate={{ translateY: isHovered ? -4 : 0, opacity: isHovered ? 1 : 0.92 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-beer-gold">{beer.name}</h3>
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">Arte expandido</span>
        </div>
        <p className="text-sm text-gray-200 line-clamp-2">{beer.description}</p>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-x-8 bottom-8 top-5 rounded-[2rem]"
        animate={{
          background: isHovered ? 'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 72%)' : 'radial-gradient(circle at center, rgba(212, 175, 55, 0) 0%, transparent 72%)',
          border: isHovered ? '1px solid rgba(212, 175, 55, 0.28)' : '1px solid rgba(212, 175, 55, 0.06)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
