import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LiveFeed from './components/LiveFeed';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';
import { Toaster } from 'sonner';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grain-overlay min-h-screen bg-[#05060A] text-white selection:bg-[#C8FF00] selection:text-black antialiased overflow-x-clip relative">
      <Cursor />
      <ScrollProgress />
      <Toaster theme="dark" richColors />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar onReportClick={() => setIsModalOpen(true)} />
            <main>
              <Hero onReportClick={() => setIsModalOpen(true)} />
              <HowItWorks />
              <Dashboard />
              <LiveFeed onReportClick={() => setIsModalOpen(true)} />
            </main>
            <Footer />
            <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsModalOpen(true)}
              className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#C8FF00] text-black shadow-[0_10px_30px_rgba(200,255,0,0.3)] flex items-center justify-center cursor-pointer md:hidden"
            >
              <MessageSquarePlus className="h-6 w-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
