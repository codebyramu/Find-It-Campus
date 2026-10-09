import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => setStage(2), 1400);
    const t3 = setTimeout(() => setStage(3), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#05060A] flex flex-col items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8FF00]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/10 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#C8FF00] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00] shadow-[0_0_12px_#C8FF00]"></span>
          </span>
          SYSTEM: ACTIVE
        </motion.div>

        <div className="mb-6 relative">
          <motion.h1 
            initial={{ filter: "blur(10px)", y: 40, opacity: 0, scale: 0.95 }}
            animate={stage >= 1 ? { filter: "blur(0px)", y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[60px] md:text-[96px] font-extrabold leading-[0.95] tracking-tight uppercase relative z-10 glitch-text"
          >
            Find Items<br/>Instantly
          </motion.h1>
        </div>

        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={stage >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-[14px] md:text-[16px] text-white/60 max-w-[420px] leading-[1.6]"
          >
            {"The essential services platform for campuses. No WhatsApp forwards. No friction. No noise. Just the signal.".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={stage >= 2 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.4, delay: stage >= 2 ? i * 0.04 : 0 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <motion.button
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={stage >= 3 ? { scale: 1, opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(200,255,0,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="group relative h-14 px-10 rounded-full bg-white text-black font-bold text-[14px] tracking-wide flex items-center justify-center gap-3 overflow-hidden cursor-pointer transition-shadow"
        >
          <span className="relative z-10">START LOCATING</span>
          <motion.span 
            className="relative z-10"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            &rarr;
          </motion.span>
          <div className="absolute inset-0 bg-[#C8FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </motion.button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-10 text-[10px] font-bold tracking-widest text-white/30 uppercase"
      >
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
          FIND-IT CAMPUS
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white transition-colors cursor-pointer">THE SCIENCE</span>
          <span className="hover:text-white transition-colors cursor-pointer">COMPARISON</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
