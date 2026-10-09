import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, MapPin, ShieldCheck, Zap, TrendingUp, Clock, CheckCircle, Check, ArrowUpRight, Headphones, Badge as BadgeIcon, Coffee, Book, Key, Search } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const numTarget = parseInt(target.replace(/[^0-9]/g, ''));
    const increment = numTarget / (duration * 60);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{isInView ? count.toLocaleString() : '0'}{suffix}</span>;
}

const activity = [
  { icon: <Headphones className="h-4 w-4" />, title: 'AirPods Pro matched', sub: 'Rahul M. — Library 2F', time: '2m ago', status: 'Matched', statusCol: 'text-[#C8FF00] bg-[#C8FF00]/10 border-[#C8FF00]/20' },
  { icon: <BadgeIcon className="h-4 w-4" />, title: 'ID Card returned', sub: 'Priya S. — Security Desk', time: '18m ago', status: 'Returned', statusCol: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  { icon: <Coffee className="h-4 w-4" />, title: 'Water Flask claimed', sub: 'Arjun K. — Sports Block', time: '1h ago', status: 'Claimed', statusCol: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  { icon: <Book className="h-4 w-4" />, title: 'CLRS Textbook found', sub: 'Block A — Lab 204', time: '3h ago', status: 'Pending', statusCol: 'text-white/50 bg-white/5 border-white/10' },
  { icon: <Key className="h-4 w-4" />, title: 'KTM Bike Keys — verified', sub: 'Parking Lot — Slot 42', time: '5h ago', status: 'Verified', statusCol: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
];

const weeklyData = [
  { day: 'Mon', found: 18, lost: 12 },
  { day: 'Tue', found: 24, lost: 15 },
  { day: 'Wed', found: 31, lost: 20 },
  { day: 'Thu', found: 22, lost: 18 },
  { day: 'Fri', found: 38, lost: 25 },
  { day: 'Sat', found: 29, lost: 14 },
  { day: 'Sun', found: 16, lost: 9 },
];

const maxVal = Math.max(...weeklyData.map(d => d.found + d.lost));

const stats = [
  { label: 'Items Tracked', value: '1,247', suffix: '', icon: <Activity className="h-5 w-5" />, color: 'text-[#C8FF00]', bg: 'bg-[#C8FF00]/10', border: 'border-t-[#C8FF00]/30' },
  { label: 'Recovery Rate', value: '89', suffix: '%', icon: <TrendingUp className="h-5 w-5" />, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-t-emerald-400/30' },
  { label: 'Avg Match Time', value: '12', suffix: 's', icon: <Clock className="h-5 w-5" />, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-t-blue-400/30' },
  { label: 'Campuses Active', value: '50', suffix: '+', icon: <MapPin className="h-5 w-5" />, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-t-violet-400/30' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="text-[11px] tracking-[0.2em] font-bold text-[#C8FF00] mb-4">RECOVERY DASHBOARD</div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[32px] md:text-[52px] font-bold leading-[0.95] tracking-tight">
              Real-time campus<br />
              <span className="text-white/30">recovery intelligence.</span>
            </h2>
            <p className="text-[14px] text-white/50 max-w-[360px] leading-[1.7]">
              Every item, every hand-off, every match — tracked, verified, and visible in one command center.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-[24px] bg-[#0A0D14]/80 border border-white/[0.07] backdrop-blur-xl p-6 flex flex-col gap-4 group hover:border-white/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 border-t-2 ${s.border} cursor-pointer`}
            >
              <div className={`h-10 w-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${s.bg} ${s.color}`}>
                {s.icon}
              </div>
              <div>
                <div className={`text-[32px] font-bold tracking-tight ${s.color} leading-none mb-1`}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[12px] text-white/40 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main 2-col layout */}
        <div className="w-full h-px bg-white/5 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] bg-[#0A0D14]/80 border border-white/[0.07] backdrop-blur-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-[11px] tracking-[0.15em] font-bold text-white/40 uppercase">Recent Activity</div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[11px] text-[#C8FF00] font-medium flex items-center gap-1 hover:text-white transition-colors group">
                View All <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
            <div className="flex flex-col gap-1">
              {activity.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.06] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/60 group-hover:text-[#C8FF00] group-hover:border-[#C8FF00]/30 transition-colors duration-300">
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-white/90 truncate">{a.title}</div>
                    <div className="text-[11px] text-white/40 truncate">{a.sub}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${a.statusCol}`}>{a.status}</span>
                    <span className="text-[10px] text-white/30">{a.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Weekly Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] bg-[#0A0D14]/80 border border-white/[0.07] backdrop-blur-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-[11px] tracking-[0.15em] font-bold text-white/40 uppercase">Weekly Recovery</div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#C8FF00]" /> Found</span>
                <span className="flex items-center gap-1 text-white/40"><span className="h-2 w-2 rounded-full bg-white/20" /> Lost</span>
              </div>
            </div>
            <div className="flex items-end gap-2 h-[180px]">
              {weeklyData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col-reverse gap-1 items-center" style={{ height: 160 }}>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
                      style={{ height: `${(d.found / maxVal) * 100}%`, transformOrigin: 'bottom' }}
                      className="w-full bg-[#C8FF00]/80 rounded-t-lg"
                    />
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
                      style={{ height: `${(d.lost / maxVal) * 100}%`, transformOrigin: 'bottom' }}
                      className="w-full bg-white/10 rounded-t-lg"
                    />
                  </div>
                  <div className="text-[10px] text-white/30 font-medium">{d.day}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Search className="h-6 w-6" />,
              color: 'text-[#C8FF00]',
              bg: 'bg-[#C8FF00]/10',
              hoverGlow: 'hover:shadow-[0_20px_40px_rgba(200,255,0,0.08)]',
              tag: 'AI ENGINE',
              title: 'Neural Matching',
              desc: 'Vision embeddings compare lost vs found in under 12 seconds. 94% accuracy rate across all item categories.',
              extra: (
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#C8FF00] animate-pulse shadow-[0_0_6px_#C8FF00]" />
                  <span className="text-[11px] text-white/50">Model active — processing 3 matches</span>
                </div>
              )
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              color: 'text-blue-400',
              bg: 'bg-blue-400/10',
              hoverGlow: 'hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]',
              tag: 'GEO-TAGGED',
              title: 'Campus Zone Map',
              desc: 'Every item geo-pinned to exact block, floor, and bench. Security lockers auto-tagged on find.',
              extra: (
                <div className="mt-4 grid grid-cols-6 gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={`h-4 w-full rounded-sm ${ [2,5,7,11,14,17,20].includes(i) ? 'bg-[#C8FF00]/60' : i % 3 === 0 ? 'bg-blue-400/30' : 'bg-white/5' }`} />
                  ))}
                </div>
              )
            },
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              color: 'text-emerald-400',
              bg: 'bg-emerald-400/10',
              hoverGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]',
              tag: 'TRUST SYSTEM',
              title: 'Chain of Custody',
              desc: 'Every hand-off logged: Finder → Security → Verifier → Owner. Full audit trail, no gaps.',
              extra: (
                <div className="mt-4 flex items-center gap-0">
                  {['Finder', 'Security', 'Verify', 'Owner'].map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-1">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold ${ i < 3 ? 'bg-emerald-400 text-black' : 'bg-white/10 text-white/40' }`}>
                          {i < 3 ? <Check className="h-3 w-3" strokeWidth={3} /> : i + 1}
                        </div>
                        <span className="text-[9px] text-white/40">{step}</span>
                      </div>
                      {i < 3 && <div className={`flex-1 h-px mx-1 ${ i < 2 ? 'bg-emerald-400/50' : 'bg-white/10' }`} />}
                    </React.Fragment>
                  ))}
                </div>
              )
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
              className={`rounded-[24px] bg-[#0A0D14]/80 border border-white/[0.07] backdrop-blur-xl p-6 hover:border-white/30 hover:bg-[#0A0D14] transition-all duration-500 cursor-pointer group ${card.hoverGlow}`}
            >
              <div className={`h-12 w-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {card.icon}
              </div>
              <div className="text-[10px] tracking-[0.18em] font-bold text-white/30 mb-2">{card.tag}</div>
              <div className="text-[18px] font-bold text-white mb-2">{card.title}</div>
              <div className="text-[13px] text-white/50 leading-[1.7]">{card.desc}</div>
              {card.extra}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
