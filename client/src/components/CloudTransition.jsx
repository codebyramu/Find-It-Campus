import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CloudTransition({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Start fully offscreen left (-30vw). End fully visible at 0vw offset (which means it stretches 0 to 30vw).
  const leftX = useTransform(scrollYProgress, [0, 1], ['-30vw', '0vw']);
  
  // Start fully offscreen right (30vw). End fully visible at 0vw offset.
  const rightX = useTransform(scrollYProgress, [0, 1], ['30vw', '0vw']);

  // Opacity: Fade in initially, but fade to 0 completely before reaching max distance (around 80% scroll)
  const op = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.7, 0, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* ── LEFT FOG ── */}
      <motion.div
        style={{ x: leftX, opacity: op }}
        className="absolute bottom-0 left-0 w-[35vw] h-[70vh]"
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.3)_40%,_transparent_70%)] blur-[70px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,255,0,0.15)_0%,_transparent_60%)] blur-[80px]" />
      </motion.div>

      {/* ── RIGHT FOG ── */}
      <motion.div
        style={{ x: rightX, opacity: op }}
        className="absolute bottom-0 right-0 w-[35vw] h-[70vh]"
      >
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.3)_40%,_transparent_70%)] blur-[70px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,255,0,0.15)_0%,_transparent_60%)] blur-[80px]" />
      </motion.div>
    </div>
  );
}
