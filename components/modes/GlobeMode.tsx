'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import MiracleModal from '@/components/MiracleModal';
import Timeline from '@/components/Timeline';
import { Miracle } from '@/types/miracle';

// Dynamic import to avoid SSR issues with react-globe.gl
const GlobeComponent = dynamic(
  () => import('@/components/GlobeComponent'),
  { ssr: false }
);

interface GlobeModeProps {
  miracles: Miracle[];
}

export default function GlobeMode({ miracles }: GlobeModeProps) {
  const [selectedMiracle, setSelectedMiracle] = useState<Miracle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Timeline state
  const [isTimelineActive, setIsTimelineActive] = useState(false);
  const [currentYear, setCurrentYear] = useState(2024);

  // Calculate min/max years from miracles
  const { minYear, maxYear } = useMemo(() => {
    const years = miracles
      .map(m => m.year)
      .filter((year): year is number => year !== undefined && year !== null);

    return {
      minYear: years.length > 0 ? Math.min(...years) : 700,
      maxYear: years.length > 0 ? Math.max(...years) : 2024
    };
  }, [miracles]);

  // Filter miracles based on timeline
  const visibleMiracles = useMemo(() => {
    if (!isTimelineActive) return miracles;

    return miracles.filter(m => {
      if (!m.year) return false; // Hide miracles without year data
      return m.year <= currentYear;
    });
  }, [miracles, currentYear, isTimelineActive]);

  const handleMiracleSelect = (miracle: Miracle) => {
    setSelectedMiracle(miracle);
    setIsModalOpen(true);
  };

  const handleYearChange = (year: number | ((prev: number) => number)) => {
    if (typeof year === 'function') {
      setCurrentYear(prev => year(prev));
    } else {
      setCurrentYear(year);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-30 p-3 min-w-touch min-h-touch bg-black/50 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-holy-gold" />
      </button>

      {/* Sidebar */}
      <Sidebar
        miracles={visibleMiracles}
        onMiracleSelect={handleMiracleSelect}
        selectedMiracle={selectedMiracle}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Globe */}
      <div className="absolute inset-0">
        <GlobeComponent
          miracles={visibleMiracles}
          onMiracleClick={handleMiracleSelect}
          selectedMiracle={selectedMiracle}
        />
      </div>

      {/* Timeline */}
      <Timeline
        minYear={minYear}
        maxYear={maxYear}
        currentYear={currentYear}
        onYearChange={handleYearChange}
        miracleCount={visibleMiracles.length}
        isActive={isTimelineActive}
        onToggle={() => setIsTimelineActive(!isTimelineActive)}
      />

      {/* Modal */}
      <MiracleModal
        miracle={selectedMiracle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
