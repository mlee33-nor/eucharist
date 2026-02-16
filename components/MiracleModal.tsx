'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Miracle } from '@/types/miracle';
import GlassCard from '@/components/ui/GlassCard';
import MiracleTabs, { TabType } from '@/components/MiracleTabs';
import OverviewTab from '@/components/modal-tabs/OverviewTab';
import StoryTab from '@/components/modal-tabs/StoryTab';
import GalleryTab from '@/components/modal-tabs/GalleryTab';
import ScienceTab from '@/components/modal-tabs/ScienceTab';
import TestimoniesTab from '@/components/modal-tabs/TestimoniesTab';
import VisitTab from '@/components/modal-tabs/VisitTab';

interface MiracleModalProps {
  miracle: Miracle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MiracleModal({
  miracle,
  isOpen,
  onClose
}: MiracleModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Reset tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab('overview');
    }
  }, [isOpen, miracle]);

  if (!miracle) return null;

  // Determine available tabs based on miracle data
  const availableTabs: TabType[] = ['overview'];

  if (miracle.fullDescription || miracle.historicalContext || miracle.timeline) {
    availableTabs.push('story');
  }

  if (miracle.images && miracle.images.length > 0) {
    availableTabs.push('gallery');
  }

  if (miracle.scientificEvidence && miracle.scientificEvidence.length > 0) {
    availableTabs.push('science');
  }

  if (miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0) {
    availableTabs.push('testimonies');
  }

  availableTabs.push('visit'); // Always show visit tab

  if (miracle.model3D) {
    availableTabs.push('3d');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-4xl my-8"
            >
              <GlassCard className="relative max-h-[90vh] overflow-y-auto scrollbar-dark">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="sticky top-4 float-right p-2 rounded-lg bg-black/50 hover:bg-white/10 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="clear-both">
                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-6 text-holy-gold">
                    {miracle.name}
                  </h2>

                  {/* Tabs */}
                  <MiracleTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    availableTabs={availableTabs}
                    has3DModel={!!miracle.model3D}
                  />

                  {/* Tab Content */}
                  <div className="mt-6">
                    {activeTab === 'overview' && <OverviewTab miracle={miracle} />}
                    {activeTab === 'story' && <StoryTab miracle={miracle} />}
                    {activeTab === 'gallery' && <GalleryTab miracle={miracle} />}
                    {activeTab === 'science' && <ScienceTab miracle={miracle} />}
                    {activeTab === 'testimonies' && <TestimoniesTab miracle={miracle} />}
                    {activeTab === 'visit' && <VisitTab miracle={miracle} />}
                    {activeTab === '3d' && miracle.model3D && (
                      <div className="p-12 bg-white/5 rounded-lg border border-white/10 text-center">
                        <p className="text-white/70">3D Viewer coming soon...</p>
                        <p className="text-white/50 text-sm mt-2">
                          This feature will allow you to view and interact with a 3D model of this miracle.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
