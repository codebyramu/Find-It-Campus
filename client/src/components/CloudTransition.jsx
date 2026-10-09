import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CloudTransition({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Each cloud slides in then back out
  // Left side clouds
  const lx1 = useTransform(scrollYProgress, [0, 0.5, 1], ['-100vw', '-10vw', '-100vw']);
  const lx2 = useTransform(scrollYProgress, [0, 0.45, 1], ['-100vw', '5vw', '-100vw']);
  const lx3 = useTransform(scrollYProgress, [0, 0.55, 1], ['-100vw', '-25vw', '-100vw']);
  const lx4 = useTransform(scrollYProgress, [0, 0.5, 1], ['-100vw', '15vw', '-100vw']);

  // Right side clouds
  const rx1 = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '10vw', '100vw']);
  const rx2 = useTransform(scrollYProgress, [0, 0.45, 1], ['100vw', '-5vw', '100vw']);
  const rx3 = useTransform(scrollYProgress, [0, 0.55, 1], ['100vw', '25vw', '100vw']);
  const rx4 = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '-15vw', '100vw']);

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
        style={{ x: lx1, opacity: op, bottom: '20%', left: 0 }}
        className="absolute"
      >
        <div style={{
          width: 700, height: 300,
          borderRadius: '50% 60% 50% 60%',
          background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(220,225,235,0.55) 0%, rgba(200,210,225,0.25) 50%, transparent 100%)',
          filter: 'blur(28px)',
        }} />
      </motion.div>

      {/* Medium wisp above */}
      <motion.div
        style={{ x: lx2, opacity: op }}
        className="absolute"
      >
        <div style={{
          width: 520, height: 200,
          borderRadius: '60% 40% 70% 30%',
          background: 'radial-gradient(ellipse 55% 45% at 55% 50%, rgba(210,218,230,0.45) 0%, rgba(190,205,220,0.2) 55%, transparent 100%)',
          filter: 'blur(36px)',
          marginTop: '12vh',
        }} />
      </motion.div>

      {/* Thin wisp lower */}
      <motion.div
        style={{ x: lx3, opacity: op }}
        className="absolute"
      >
        <div style={{
          width: 600, height: 160,
          borderRadius: '40% 60% 40% 60%',
          background: 'radial-gradient(ellipse 65% 40% at 50% 60%, rgba(200,212,228,0.4) 0%, transparent 100%)',
          filter: 'blur(48px)',
          marginTop: '32vh',
        }} />
      </motion.div>

      {/* Tiny floating puff */}
      <motion.div
        style={{ x: lx4, opacity: op }}
        className="absolute"
      >
        <div style={{
          width: 380, height: 140,
          borderRadius: '55% 45% 60% 40%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(215,222,235,0.38) 0%, transparent 100%)',
          filter: 'blur(32px)',
          marginTop: '6vh',
        }} />
      </motion.div>

      {/* ── RIGHT CLOUDS ── */}

      {/* Big fluffy puff */}
      <motion.div
        style={{ x: rx1, opacity: op }}
        className="absolute right-0"
      >
        <div style={{
          width: 700, height: 300,
          borderRadius: '60% 50% 60% 50%',
          background: 'radial-gradient(ellipse 60% 50% at 40% 50%, rgba(220,225,235,0.55) 0%, rgba(200,210,225,0.25) 50%, transparent 100%)',
          filter: 'blur(28px)',
          marginTop: '15vh',
        }} />
      </motion.div>

      {/* Medium wisp */}
      <motion.div
        style={{ x: rx2, opacity: op }}
        className="absolute right-0"
      >
        <div style={{
          width: 520, height: 200,
          borderRadius: '40% 60% 30% 70%',
          background: 'radial-gradient(ellipse 55% 45% at 45% 50%, rgba(210,218,230,0.45) 0%, rgba(190,205,220,0.2) 55%, transparent 100%)',
          filter: 'blur(36px)',
          marginTop: '5vh',
        }} />
      </motion.div>

      {/* Thin wisp lower */}
      <motion.div
        style={{ x: rx3, opacity: op }}
        className="absolute right-0"
      >
        <div style={{
          width: 600, height: 160,
          borderRadius: '60% 40% 60% 40%',
          background: 'radial-gradient(ellipse 65% 40% at 50% 40%, rgba(200,212,228,0.4) 0%, transparent 100%)',
          filter: 'blur(48px)',
          marginTop: '28vh',
        }} />
      </motion.div>

      {/* Tiny floating puff */}
      <motion.div
        style={{ x: rx4, opacity: op }}
        className="absolute right-0"
      >
        <div style={{
          width: 380, height: 140,
          borderRadius: '45% 55% 40% 60%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(215,222,235,0.38) 0%, transparent 100%)',
          filter: 'blur(32px)',
          marginTop: '20vh',
        }} />
      </motion.div>
    </div>
  );
}
