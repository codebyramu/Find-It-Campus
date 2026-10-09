import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovered(true);
      }
    };
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ scale: isHovered ? 2 : 1, borderColor: isHovered ? '#C8FF00' : 'rgba(200, 255, 0, 0.4)' }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[9998] mix-blend-difference hidden md:block transition-colors duration-300"
      />
      {/* Inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C8FF00] pointer-events-none z-[9998] hidden md:block shadow-[0_0_6px_#C8FF00]"
      />
    </>
  );
}
