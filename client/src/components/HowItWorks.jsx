import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MapPin, Sparkles, UserCheck, Link2, ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'What was lost?',
      subtitle: 'AI Image + Description recognition',
      desc: "Vision model extracts object, color, brand, scratches, stickers. No more vague 'black bottle'.",
      icon: <Eye className="h-5 w-5" />,
      color: 'text-black',
      bg: 'bg-white',
      iconBg: 'bg-black text-white',
      numberColor: 'text-black/50'
    },
    {
      id: '02',
      title: 'Where was it found?',
      subtitle: 'Geo-tagged campus map pin',
      desc: "Exact block, floor, bench. Finder drops pin, system auto-tags security locker nearest.",
      icon: <MapPin className="h-5 w-5" />,
      color: 'text-white',
      bg: 'glass',
      iconBg: 'bg-white/10',
      numberColor: 'text-[#C8FF00]'
    },
    {
      id: '03',
      title: 'Who might own it?',
      subtitle: 'AI similarity matching',
      desc: "Embeddings compare lost vs found in < 12 sec. 94% accuracy, learns from campus slang.",
      icon: <Sparkles className="h-5 w-5" />,
      color: 'text-white',
      bg: 'glass',
      iconBg: 'bg-white/10',
      numberColor: 'text-[#C8FF00]'
    },
    {
      id: '04',
      title: 'Can they prove ownership?',
      subtitle: '3-step verification quiz',
      desc: "Ask unique questions only real owner knows. Upload bill/photo proof. Trust score.",
      icon: <UserCheck className="h-5 w-5" />,
      color: 'text-white',
      bg: 'glass',
      iconBg: 'bg-white/10',
      numberColor: 'text-[#C8FF00]'
    },
    {
      id: '05',
      title: 'Who handled it until return?',
      subtitle: 'Chain of Custody ledger',
      desc: "Every touch logged: finder → security → verifier → owner. No more 'where did it go?'.",
      icon: <Link2 className="h-5 w-5" />,
      color: 'text-white',
      bg: 'glass',
      iconBg: 'bg-white/10',
      numberColor: 'text-[#C8FF00]'
    }
  ];

  return (
    <section id="how" className="mx-auto max-w-[1280px] px-5 md:px-8 py-12 md:py-20 relative z-10">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="lg:sticky lg:top-[88px]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] tracking-[0.2em] font-bold text-[#C8FF00] mb-4">THE PROBLEM • THE SOLUTION</div>
          <h2 className="text-[36px] md:text-[56px] font-bold leading-[0.95] tracking-tight">
            From WhatsApp chaos to <span className="text-white/40">Campus Recovery OS.</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.7] text-white/60">
            <span className="text-white font-semibold">FIND-IT CAMPUS</span> is an AI-powered, intelligent Lost & Found ecosystem designed specifically for educational institutions.<br /><br />
            The problem is simple: <span className="text-white">A student loses something. Another student finds it. But there is no intelligent system connecting them safely and reliably.</span><br /><br />
            Today, students depend on WhatsApp groups, classmates, security guards, HODs, or word of mouth. We transform this fragmented process into a smart, verified, trackable and data-driven campus recovery network.
          </p>
          <div className="mt-6 flex gap-2">
            {['AI Matching', 'Geo-tagged', 'Verified Handover'].map((badge, i) => (
              <span key={i} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">{badge}</span>
            ))}
          </div>
        </motion.div>
        </div>
        
        <div className="space-y-4 relative pl-6">
          <div className="absolute left-0 top-8 bottom-8 w-px bg-white/5 z-0" />
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group w-full text-left rounded-[24px] border border-white/5 bg-[#05060A]/80 backdrop-blur-xl p-6 flex gap-5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02] relative"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-transparent group-hover:bg-[#C8FF00] transition-colors duration-500" />
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:bg-[#C8FF00]/10 group-hover:text-[#C8FF00] group-hover:border-[#C8FF00]/30 transition-colors duration-500">
                {step.icon}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8FF00]/60">{step.id}</span>
                  <span className="text-[16px] font-semibold text-white/90 group-hover:text-white transition-colors flex items-center gap-2">
                    {step.title}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300 text-[#C8FF00]">→</span>
                  </span>
                </div>
                <div className="text-[13px] mt-1.5 font-medium text-white/40">{step.subtitle}</div>
                <div className="text-[13px] mt-3 leading-[1.6] hidden md:block text-white/60">
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
