import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MapPin, ArrowUpRight, Headphones, Badge as BadgeIcon, Droplet, Calculator, Coffee, Book, Key, Shirt, Glasses, Sparkles, ChevronDown } from 'lucide-react';

const feedData = [
  {
    id: 1,
    type: 'FOUND',
    time: '4m ago',
    icon: <Headphones className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-violet-500/20 to-blue-500/20',
    title: 'AirPods Pro 2nd Gen',
    location: 'Library 2F',
    category: 'Electronics',
    desc: 'White case with small scratch on lid, found near charging station. Left earbud at 80%.',
    status: 'ready',
    match: '94%',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    type: 'LOST',
    time: '12m ago',
    icon: <BadgeIcon className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    title: 'NITK ID Card + Lanyard',
    location: 'Canteen Block',
    category: 'ID Cards',
    desc: 'Blue lanyard, ID no. 21CS... Photo slightly faded. Urgent needed for exam entry tomorrow.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1594968973184-9040a5ac79e0?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    type: 'FOUND',
    time: '27m ago',
    icon: <Coffee className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    title: 'HydroFlask Black 1L',
    location: 'Sports Complex',
    category: 'Bottles',
    desc: 'Black metal bottle with NITK sticker, few dents. Full of water when found.',
    status: 'open',
    match: '76%',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    type: 'LOST',
    time: '1h ago',
    icon: <Book className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    title: 'Data Structures Textbook',
    location: 'Block A - Lab 204',
    category: 'Books',
    desc: "CLRS 3rd edition, name written on first page 'Vikram', highlighted chapter 12.",
    status: 'verifying',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    type: 'FOUND',
    time: '2h ago',
    icon: <Key className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-yellow-500/20 to-amber-500/20',
    title: 'Bike Keys - KTM',
    location: 'Parking Lot',
    category: 'Keys',
    desc: '2 keys with KTM keychain + small Ganesh idol. Found on ground near slot 42.',
    status: 'ready',
    match: '88%',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 6,
    type: 'LOST',
    time: '3h ago',
    icon: <Shirt className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-zinc-500/20 to-neutral-500/20',
    title: 'Grey Hoodie - Nike',
    location: 'Auditorium',
    category: 'Apparel',
    desc: 'Medium size, small coffee stain on cuff. Left after fest rehearsal.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 7,
    type: 'FOUND',
    time: '5h ago',
    icon: <Calculator className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20',
    title: 'Scientific Calculator FX-991EX',
    location: 'Block C - Room 301',
    category: 'Electronics',
    desc: 'Found under the last desk. No cover, scratches on back.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 8,
    type: 'LOST',
    time: '1d ago',
    icon: <Glasses className="w-20 h-20" />,
    bg: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20',
    title: 'Reading Glasses - Lenskart',
    location: 'Main Gate',
    category: 'Accessories',
    desc: 'Black frame, blue light filter lenses. Lost near the security check.',
    status: 'closed',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop',
  }
];

export default function LiveFeed() {
  const [filter, setFilter] = useState('All');
  
  return (
    <section id="feed" className="mx-auto max-w-[1280px] px-5 md:px-8 py-12 md:py-24 overflow-hidden relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-end justify-between gap-4 mb-8 w-full"
      >
        <div>
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-tight leading-[0.95]">Live Recovery Feed</h2>
          <p className="text-[13px] md:text-[14px] text-white/50 mt-3 font-medium">Real campus items • AI sorted • Verified custody</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            <input 
              placeholder="Search AirPods, ID card, bottle..." 
              className="h-11 w-[180px] md:w-[320px] max-w-[55vw] rounded-full bg-[#0A0D18]/80 backdrop-blur-xl border border-white/10 pl-9 pr-4 text-[13px] outline-none placeholder:text-white/40 focus:border-[#C8FF00]/40 focus:bg-white/[0.04] transition-colors" 
            />
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
            <Filter className="h-4 w-4 text-white/70" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="h-11 px-5 rounded-full bg-[#C8FF00] text-black font-semibold text-[13px] hover:bg-[#d4ff33] flex items-center justify-center shrink-0 transition-colors shadow-[0_0_20px_rgba(200,255,0,0.2)]">
            Report Lost Item
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-4 mb-8 w-full"
      >
        <div className="flex gap-2 p-1 rounded-full bg-white/[0.04] border border-white/10 w-fit">
          {['All', 'Lost', 'Found'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`h-8 px-4 rounded-full text-[12px] font-semibold transition cursor-pointer ${filter === f ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto -mx-5 px-5 md:mx-0 md:px-0 pb-1">
          {['All', 'Electronics', 'ID Cards', 'Books', 'Bottles', 'Keys', 'Apparel'].map((cat, i) => (
            <button 
              key={cat}
              className={`h-8 px-3 rounded-full border text-[11px] font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors ${i === 0 ? 'bg-[#C8FF00] text-black border-[#C8FF00]' : 'bg-[#05060A]/60 border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        layout 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <AnimatePresence>
          {feedData.filter(item => filter === 'All' || item.type === filter.toUpperCase()).map((item, i) => (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              key={item.id}
              className="text-left group rounded-[24px] bg-[#05060A]/90 border border-white/5 hover:border-white/20 hover:shadow-[0_-2px_0_0_rgba(200,255,0,0.4),0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden shadow-2xl relative"
            >
              <div className={`h-[110px] ${item.bg} relative p-5 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05060A]/90 z-0"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div className={`text-[10px] tracking-widest font-bold px-3 py-1.5 rounded-full border ${item.type === 'FOUND' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {item.type}
                  </div>
                  <div className="text-[10px] px-2 py-1 rounded-full bg-black/30 border border-white/10 text-white/60">
                    {item.time}
                  </div>
                </div>
                <div className="absolute -right-2 -bottom-6 text-[64px] opacity-20 group-hover:opacity-30 transition select-none">
                  {item.icon}
                </div>
                {item.match && (
                  <div className="absolute left-4 bottom-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-white text-black flex items-center justify-center">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#C8FF00] text-black">
                      AI {item.match}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[14px] leading-tight truncate">{item.title}</div>
                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-white/50">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{item.location} • {item.category}</span>
                    </div>
                  </div>
                  {item.image && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                <div className="mt-3 text-[12px] leading-[1.5] text-white/60 line-clamp-2">
                  {item.desc}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className={`text-[10px] px-2 py-1 rounded-full border ${item.status === 'ready' ? 'bg-blue-500/10 border-blue-400/20 text-blue-300' : item.status === 'open' ? 'bg-white/5 border-white/10 text-white/50' : 'bg-white/5 border-white/10 text-white/50'}`}>
                    {item.status}
                  </span>
                  <span className="text-[11px] text-white/40 flex items-center gap-1 group-hover:text-white transition">
                    View <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/60 text-[13px] font-semibold hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
          Load More Items
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
