import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CloudTransition({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Left clouds: Start fully offscreen (-100%), move inward up to 30% (-70%)
  const leftX = useTransform(scrollYProgress, [0, 1], ['-100%', '-70%']);
  
  // Right clouds: Start fully offscreen (100%), move inward up to 30% (70%)
  const rightX = useTransform(scrollYProgress, [0, 1], ['100%', '70%']);

  // Opacity: starts at 0, peaks at middle of scroll, fades to 0 before finishing
  const op = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden flex items-end">
      {/* ── LEFT FOG ── */}
      <motion.div
        style={{ x: leftX, opacity: op }}
        className="absolute bottom-0 left-0 w-full h-[70vh]"
      >
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] blur-[60px]" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,255,0,0.08)_0%,_transparent_60%)] blur-[40px]" />
      </motion.div>

      {/* ── RIGHT FOG ── */}
      <motion.div
        style={{ x: rightX, opacity: op }}
        className="absolute bottom-0 right-0 w-full h-[70vh]"
      >
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] blur-[60px]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)] blur-[40px]" />
      </motion.div>
    </div>
  );
}
