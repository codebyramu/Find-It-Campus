import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export default function ReportModal({ isOpen, onClose }) {
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [dontRemember, setDontRemember] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!desc.trim()) {
      toast.error("Please describe the issue first.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setDesc('');
        setTime('');
        setDontRemember(false);
        onClose();
      }, 1000);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121525] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative overflow-hidden"
          >
            <h2 className="text-[20px] font-bold text-white mb-2">Spotted Something?</h2>
            <p className="text-[13px] text-white/60 mb-5">Send a message directly to the finder or report a problem.</p>
            
            <textarea 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Describe what you spotted or the issue..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3 text-[13px] text-white outline-none focus:border-[#C8FF00]/40 transition-colors resize-none h-[100px] mb-4"
            />
            
            <div className="mb-6">
              <label className="block text-[12px] text-white/70 mb-2 font-medium">When did you last see it?</label>
              <input 
                type="text" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={dontRemember}
                placeholder="e.g. 10 mins ago near canteen"
                className={`w-full bg-white/[0.03] border border-white/10 rounded-xl p-3 text-[13px] text-white outline-none focus:border-[#C8FF00]/40 transition-colors mb-3 ${dontRemember ? 'opacity-50' : 'opacity-100'}`}
              />
              <label className="flex items-center gap-2 text-[12px] text-white/70 cursor-pointer w-fit">
                <input 
                  type="checkbox" 
                  checked={dontRemember}
                  onChange={(e) => setDontRemember(e.target.checked)}
                  className="accent-[#C8FF00] rounded bg-white/10 border-white/20 focus:ring-2 focus:ring-[#C8FF00]/50 focus:outline-none"
                /> 
                I don't remember
              </label>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button 
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={sending || sent}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${sent ? 'bg-emerald-400 text-black' : 'bg-[#C8FF00] text-black hover:brightness-110'} disabled:opacity-70`}
              >
                {sent ? "Sent!" : sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
