import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CloudTransition({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Each cloud slides in then back out
  // Left side clouds stay near the left (max ~30vw)
  const lx1 = useTransform(scrollYProgress, [0, 0.5, 1], ['-100vw', '-20vw', '-100vw']);
  const lx2 = useTransform(scrollYProgress, [0, 0.45, 1], ['-100vw', '-10vw', '-100vw']);
  const lx3 = useTransform(scrollYProgress, [0, 0.55, 1], ['-100vw', '-30vw', '-100vw']);
  const lx4 = useTransform(scrollYProgress, [0, 0.5, 1], ['-100vw', '-15vw', '-100vw']);

  // Right side clouds stay near the right (min ~70vw)
  const rx1 = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '20vw', '100vw']);
  const rx2 = useTransform(scrollYProgress, [0, 0.45, 1], ['100vw', '10vw', '100vw']);
  const rx3 = useTransform(scrollYProgress, [0, 0.55, 1], ['100vw', '30vw', '100vw']);
  const rx4 = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '15vw', '100vw']);

  // Cloud opacity — fade in, hold, fade out
  const op = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 0.85, 0.85, 0]);

  return (
    <div
      className="fixed inset-x-0 bottom-0 pointer-events-none z-30 overflow-hidden"
      style={{ height: '55vh' }}
    >
      {/* ── LEFT CLOUDS ── */}

      {/* Big fluffy puff */}
      <motion.div
        style={{ x: lx1, opacity: op, bottom: '-10%', left: 0 }}
        className="absolute"
      >
        <div style={{
          width: '80vw', height: '60vh',
          borderRadius: '50% 60% 50% 60%',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(220,230,250,0.8) 0%, rgba(200,210,230,0.4) 60%, transparent 100%)',
          filter: 'blur(35px)',
        }} />
      </motion.div>

      {/* Medium wisp above */}
      <motion.div
        style={{ x: lx2, opacity: op, bottom: '10%', left: '-10%' }}
        className="absolute"
      >
        <div style={{
          width: '60vw', height: '40vh',
          borderRadius: '60% 40% 70% 30%',
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(210,220,240,0.7) 0%, rgba(190,205,225,0.3) 60%, transparent 100%)',
          filter: 'blur(45px)',
        }} />
      </motion.div>

      {/* Thin wisp lower */}
      <motion.div
        style={{ x: lx3, opacity: op, bottom: '-5%', left: '10%' }}
        className="absolute"
      >
        <div style={{
          width: '70vw', height: '35vh',
          borderRadius: '40% 60% 40% 60%',
          background: 'radial-gradient(ellipse 65% 40% at 50% 50%, rgba(230,240,255,0.6) 0%, transparent 100%)',
          filter: 'blur(55px)',
        }} />
      </motion.div>

      {/* Tiny floating puff */}
      <motion.div
        style={{ x: lx4, opacity: op, bottom: '25%', left: '5%' }}
        className="absolute"
      >
        <div style={{
          width: '50vw', height: '30vh',
          borderRadius: '55% 45% 60% 40%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(215,225,245,0.5) 0%, transparent 100%)',
          filter: 'blur(40px)',
        }} />
      </motion.div>

      {/* ── RIGHT CLOUDS ── */}

      {/* Big fluffy puff */}
      <motion.div
        style={{ x: rx1, opacity: op, bottom: '-10%', right: 0 }}
        className="absolute"
      >
        <div style={{
          width: '80vw', height: '60vh',
          borderRadius: '60% 50% 60% 50%',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(220,230,250,0.8) 0%, rgba(200,210,230,0.4) 60%, transparent 100%)',
          filter: 'blur(35px)',
        }} />
      </motion.div>

      {/* Medium wisp */}
      <motion.div
        style={{ x: rx2, opacity: op, bottom: '5%', right: '-5%' }}
        className="absolute"
      >
        <div style={{
          width: '60vw', height: '40vh',
          borderRadius: '40% 60% 30% 70%',
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(210,220,240,0.7) 0%, rgba(190,205,225,0.3) 60%, transparent 100%)',
          filter: 'blur(45px)',
        }} />
      </motion.div>

      {/* Thin wisp lower */}
      <motion.div
        style={{ x: rx3, opacity: op, bottom: '-5%', right: '10%' }}
        className="absolute"
      >
        <div style={{
          width: '70vw', height: '35vh',
          borderRadius: '60% 40% 60% 40%',
          background: 'radial-gradient(ellipse 65% 40% at 50% 50%, rgba(230,240,255,0.6) 0%, transparent 100%)',
          filter: 'blur(55px)',
        }} />
      </motion.div>

      {/* Tiny floating puff */}
      <motion.div
        style={{ x: rx4, opacity: op, bottom: '20%', right: '5%' }}
        className="absolute"
      >
        <div style={{
          width: '50vw', height: '30vh',
          borderRadius: '45% 55% 40% 60%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(215,225,245,0.5) 0%, transparent 100%)',
          filter: 'blur(40px)',
        }} />
      </motion.div>
    </div>
  );
}
