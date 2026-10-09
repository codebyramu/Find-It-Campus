import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { AlertCircle, Sparkles, ArrowRight, ShieldCheck, Headphones, Badge as BadgeIcon, Droplet, Calculator, Coffee } from 'lucide-react';
import CloudTransition from './CloudTransition';

function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: 'easeOut', delay: 1 });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Hero() {
  const heroRef = useRef(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const feedItems = [
    { icon: <Headphones className="h-4 w-4"/>, bg: 'bg-[#C8FF00]', iconCol: 'text-black', label: 'AirPods matched to Rahul.', time: '2m ago' },
    { icon: <BadgeIcon className="h-4 w-4"/>, bg: 'bg-emerald-400', iconCol: 'text-black', label: 'ID Card returned at Security.', time: '5m ago' },
    { icon: <Droplet className="h-4 w-4"/>, bg: 'bg-blue-400/20', iconCol: 'text-blue-400', label: 'Water bottle found @ Canteen.', time: '12m ago' },
    { icon: <Calculator className="h-4 w-4"/>, bg: 'bg-white/10', iconCol: 'text-white', label: 'Calculator claimed, verified.', time: '18m ago' },
  ];

  const recentItems = [
    { icon: <Headphones className="h-6 w-6"/>, label: 'AirPods Pro', badge: 'Claimed', badgeClass: 'bg-[#C8FF00] text-black' },
    { icon: <BadgeIcon className="h-6 w-6"/>, label: 'ID Card', badge: 'Returned', badgeClass: 'bg-emerald-400 text-black' },
    { icon: <Coffee className="h-6 w-6"/>, label: 'Water Flask', badge: 'Pending', badgeClass: 'border border-white/20 text-white/70' },
  ];

  return (
    <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A]/95 via-[#05060A]/50 to-[#05060A]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/80 via-transparent to-[#05060A] pointer-events-none" />
      </div>

      {/* === BOTTOM-LEFT: Hero Content === */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-6 right-6 lg:right-auto lg:left-12 z-10 max-w-[560px]"
      >
        {/* Tagline badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 mb-5 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
          A smarter lost-and-found, for a safer campus.
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-[48px] md:text-[72px] leading-[0.95] font-bold tracking-tight text-white mb-5 flex flex-wrap gap-x-4">
          {["Find", "What", "Was", "Lost.", "Return", "What", "Was", "Found."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 + 0.5, duration: 0.6 }}
              className={word === "Return" ? "text-gradient" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ filter: 'blur(8px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[15px] md:text-[16px] leading-[1.6] text-white/60 mb-8"
        >
          AI-powered Lost &amp; Found ecosystem for campuses. No more WhatsApp forwards. Verified, trackable recovery in{' '}
          <span className="text-white font-semibold">&lt; 24hrs</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="h-[52px] px-8 rounded-full bg-white text-black font-bold text-[14px] flex items-center gap-2 hover:bg-[#C8FF00] transition-colors cursor-pointer shadow-lg shadow-white/10"
          >
            <AlertCircle className="h-4 w-4" /> I Lost Something
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="h-[52px] px-8 rounded-full bg-black/20 backdrop-blur-md border border-white/30 text-white font-semibold text-[14px] flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Sparkles className="h-4 w-4 text-[#C8FF00]" /> I Found Something
          </motion.button>
        </motion.div>

        {/* Stats Panel */}
        <motion.div variants={itemVariants} className="flex items-center justify-between rounded-[24px] bg-[#0A0D18]/60 backdrop-blur-md border border-white/10 p-5 w-full">
          {[
            { val: 1247, label: 'ITEMS', suffix: '' },
            { val: 89,   label: 'SUCCESS', suffix: '%' },
            { val: 12,   label: 'MATCH', suffix: 's' },
            { val: 50,   label: 'CAMPUSES', suffix: '+' },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-10 bg-white/10" />}
              <div className="flex-1 flex flex-col items-center justify-center px-2">
                <div className="text-[22px] md:text-[24px] font-bold tracking-tight text-white leading-none mb-1.5">
                  <Counter value={s.val} />{s.suffix}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 font-bold">{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* === RIGHT-MIDDLE: Live Activity Feed Card === */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 xl:right-12 top-1/2 z-10 w-full max-w-[420px] hidden lg:block"
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
        {/* Glowing border container */}
        <div className="rounded-[24px] border border-[#C8FF00] shadow-[0_0_30px_rgba(200,255,0,0.12)] p-5 md:p-6 bg-black/50 backdrop-blur-xl relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8FF00] to-transparent opacity-60" />

          {/* Live Activity Feed */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] tracking-[0.15em] font-bold text-white/50 uppercase">Live Activity Feed</span>
              <div className="flex items-center gap-1.5 text-[11px] text-[#C8FF00] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_8px_#C8FF00]" />
                Real-time
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {feedItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="flex items-center justify-between rounded-2xl bg-black/60 border border-white/10 hover:border-white/30 p-3 px-4 cursor-pointer group transition-all duration-300 hover:bg-black/80"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.iconCol}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white/95">{item.label}</div>
                      <div className="text-[11px] text-white/50">{item.time}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/70 transition-colors shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] tracking-[0.15em] font-bold text-white/50 uppercase">Recent Items</span>
              <div className="text-[11px] text-[#C8FF00] font-medium cursor-pointer hover:underline flex items-center gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {recentItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-black/60 border border-white/10 hover:border-white/30 p-4 flex flex-col items-center text-center cursor-pointer group transition-all"
                >
                  <div className="mb-3 text-white/80 group-hover:text-white group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-bold text-white mb-2">{item.label}</div>
                  <div className={`text-[9px] font-bold rounded-full px-2 py-0.5 w-fit mx-auto ${item.badgeClass}`}>
                    {item.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8FF00] to-transparent opacity-30" />
        </div>

        {/* Chain of Custody below the box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 rounded-2xl bg-gradient-to-r from-[#C8FF00] to-[#E2FF66] p-2 pr-5 flex items-center justify-between cursor-pointer shadow-[0_10px_30px_rgba(200,255,0,0.18)] group"
        >
          <div className="flex items-center gap-3">
            <div className="h-[44px] w-[44px] rounded-xl bg-black/10 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-500">
              <ShieldCheck className="h-5 w-5 text-black" />
            </div>
            <div className="flex flex-col py-1">
              <span className="text-[14px] font-extrabold text-black leading-tight uppercase tracking-wide">Chain of Custody</span>
              <span className="text-[11px] text-black/60 font-semibold">Every item is tracked &amp; verified</span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-[#C8FF00] transition-colors">
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>
        </motion.div>
      </motion.div>

      {/* Cloud scroll transition effect */}
      <CloudTransition heroRef={heroRef} />

    </section>
  );
}
