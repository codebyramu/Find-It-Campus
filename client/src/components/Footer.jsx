import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, MessageCircle, Briefcase, Mail, ArrowUpRight, Shield, Zap } from 'lucide-react';

const links = {
  Product: ['How It Works', 'Live Feed', 'Dashboard', 'AI Matching', 'Chain of Custody'],
  Institution: ['For Colleges', 'For Universities', 'Security Teams', 'Admin Portal', 'API Access'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#05060A]">

      {/* CTA Banner */}
      <div className="border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2 bg-[#C8FF00]/5 blur-[100px] rounded-full w-[400px] h-[200px] pointer-events-none" />
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] tracking-[0.2em] font-bold text-[#C8FF00] mb-3">GET STARTED</div>
            <h3 className="text-[28px] md:text-[40px] font-bold leading-[0.95] tracking-tight">
              Ready to transform your<br />
              campus lost &amp; found?
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-[52px] px-8 rounded-full bg-[#C8FF00] text-black font-bold text-[14px] hover:bg-white hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] transition-all duration-300 flex items-center gap-2 group">
              Request Demo <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-[52px] px-8 rounded-full border border-white/20 text-white font-semibold text-[14px] hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-xl bg-[#C8FF00] flex items-center justify-center">
                <Compass className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="font-bold text-[14px] tracking-tight">FIND-IT CAMPUS</div>
                <div className="text-[10px] tracking-[0.15em] text-white/40">RECOVERY OS</div>
              </div>
            </div>
            <p className="text-[13px] text-white/40 leading-[1.8] mb-6 max-w-[240px]">
              AI-powered lost &amp; found ecosystem built for modern campuses. Verified, trackable, trusted.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Globe className="h-4 w-4" />, label: 'GitHub' },
                { icon: <MessageCircle className="h-4 w-4" />, label: 'Twitter' },
                { icon: <Briefcase className="h-4 w-4" />, label: 'LinkedIn' },
                { icon: <Mail className="h-4 w-4" />, label: 'Email' },
              ].map((s, i) => (
                <motion.button key={i} aria-label={s.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                  {s.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-[11px] tracking-[0.15em] font-bold text-white/30 uppercase mb-5">{category}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-all duration-300">
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <span className="opacity-0 -translate-x-2 text-[#C8FF00] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/25">© 2026 Find-It Campus. All rights reserved.</div>
          <div className="flex items-center gap-4 text-[12px] text-white/25">
            <div className="flex items-center gap-1.5">
              <Shield className="h-3 w-3" /> SOC 2 Compliant
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Zap className="h-3 w-3" /> 99.9% Uptime
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Globe className="h-3 w-3" /> 50+ Campuses
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
