'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar, { ViewMode } from '@/components/NavigationBar';
import GlobeMode from '@/components/modes/GlobeMode';
import AnalyticsMode from '@/components/modes/AnalyticsMode';
import EvidenceMode from '@/components/modes/EvidenceMode';
import TimelineMode from '@/components/modes/TimelineMode';
import ComparisonMode from '@/components/modes/ComparisonMode';
import LoadingScreen from '@/components/LoadingScreen';
import { Miracle } from '@/types/miracle';

export default function Home() {
  const [miracles, setMiracles] = useState<Miracle[]>([]);
  const [activeMode, setActiveMode] = useState<ViewMode>('globe');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch miracles.json
    fetch('/miracles.json')
      .then(res => res.json())
      .then(data => {
        setMiracles(data);
        // Small delay for aesthetic loading
        setTimeout(() => setIsLoading(false), 800);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Navigation Bar */}
      <NavigationBar
        activeMode={activeMode}
        onModeChange={setActiveMode}
        miracles={miracles}
      />

      {/* Mode Views with Smooth Transitions */}
      <div className="absolute inset-0 top-16 safe-bottom">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {activeMode === 'globe' && <GlobeMode miracles={miracles} />}
            {activeMode === 'analytics' && <AnalyticsMode miracles={miracles} />}
            {activeMode === 'evidence' && <EvidenceMode miracles={miracles} />}
            {activeMode === 'timeline' && <TimelineMode miracles={miracles} />}
            {activeMode === 'comparison' && <ComparisonMode miracles={miracles} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
