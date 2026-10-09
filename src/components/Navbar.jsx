import React, { useEffect, useState } from 'react';
import { Compass, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(y < lastY || y < 100);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${ scrolled ? 'border-white/[0.08] bg-[#05060A]/90 backdrop-blur-xl' : 'border-transparent bg-transparent' }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 h-[64px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 15, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-9 w-9 rounded-xl bg-[#C8FF00] flex items-center justify-center text-black cursor-pointer shadow-[0_0_15px_rgba(200,255,0,0.15)] hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-shadow duration-300">
              <Compass className="h-5 w-5" />
            </motion.div>
            <div className="leading-none">
              <div className="font-bold tracking-tight text-[15px]">FIND-IT CAMPUS</div>
              <div className="text-[10px] tracking-[0.18em] text-white/50 font-medium">CAMPUS RECOVERY OS</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/60">
            {[['#how','How it works'],['#dashboard','Dashboard'],['#feed','Live Feed']].map(([href, label]) => (
              <a key={href} href={href} className="group relative hover:text-white transition-colors duration-300 py-2">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C8FF00] shadow-[0_0_8px_#C8FF00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <span className="h-4 w-px bg-white/10" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative h-9 px-4 rounded-full bg-white text-black font-semibold overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#C8FF00] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300">
                <Plus className="h-4 w-4" /> Report Found
              </span>
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden h-9 px-4 rounded-full bg-[#C8FF00] text-black text-[13px] font-bold shrink-0 cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,255,0,0.15)] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-shadow duration-300"
          >
            <Plus className="h-4 w-4" /> Report
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}
