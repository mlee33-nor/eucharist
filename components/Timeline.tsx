'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  minYear: number;
  maxYear: number;
  currentYear: number;
  onYearChange: (year: number) => void;
  miracleCount?: number;
  isActive: boolean;
  onToggle: () => void;
}

export default function Timeline({
  minYear,
  maxYear,
  currentYear,
  onYearChange,
  miracleCount = 0,
  isActive,
  onToggle
}: TimelineProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1); // 1x, 2x, 5x
  const [isExpanded, setIsExpanded] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && isActive) {
      const increment = 10; // Advance by decade
      const interval = 200 / playSpeed; // Speed multiplier

      intervalRef.current = setInterval(() => {
        onYearChange((prevYear) => {
          const nextYear = prevYear + increment;
          if (nextYear > maxYear) {
            setIsPlaying(false);
            return maxYear;
          }
          return nextYear;
        });
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isPlaying, isActive, playSpeed, maxYear, onYearChange]);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value, 10);
    onYearChange(year);
    setIsPlaying(false); // Stop playing when manually adjusting
  }, [onYearChange]);

  const togglePlay = () => {
    if (currentYear >= maxYear) {
      onYearChange(minYear); // Reset to beginning
    }
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    setPlaySpeed((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 5;
      return 1;
    });
  };

  // Generate century markers
  const centuryMarkers = [];
  for (let year = Math.ceil(minYear / 100) * 100; year <= maxYear; year += 100) {
    const position = ((year - minYear) / (maxYear - minYear)) * 100;
    centuryMarkers.push({ year, position });
  }

  if (!isActive) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={onToggle}
          className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all shadow-lg"
        >
          <Clock className="w-5 h-5 text-holy-gold" />
          <span className="font-semibold">Enable Timeline</span>
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-20 glass border-t border-white/10',
          isExpanded ? 'h-40' : 'h-16'
        )}
      >
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-8 left-1/2 -translate-x-1/2 p-2 glass rounded-t-lg hover:bg-white/10 transition-colors"
        >
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        {/* Close Timeline Button */}
        <button
          onClick={onToggle}
          className="absolute top-4 right-4 px-4 py-2 text-sm hover:bg-white/10 rounded-lg transition-colors"
        >
          Disable Timeline
        </button>

        <div className="container mx-auto px-6 py-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="p-3 bg-holy-gold text-black rounded-full hover:bg-holy-gold/90 transition-colors shadow-lg"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Speed Control */}
              <button
                onClick={cycleSpeed}
                className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm font-semibold"
              >
                {playSpeed}x
              </button>

              {/* Current Year Display */}
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-holy-gold" />
                <span className="text-3xl font-bold text-holy-gold tabular-nums">
                  {currentYear}
                </span>
                <span className="text-sm text-white/60">AD</span>
              </div>
            </div>

            {/* Miracle Count */}
            {isExpanded && (
              <div className="text-right">
                <div className="text-2xl font-bold text-holy-gold">{miracleCount}</div>
                <div className="text-xs text-white/60">
                  {miracleCount === 1 ? 'miracle' : 'miracles'} visible
                </div>
              </div>
            )}
          </div>

          {/* Slider Section */}
          {isExpanded && (
            <div className="flex-1 relative">
              {/* Century Markers */}
              <div className="absolute top-0 left-0 right-0 h-6 flex items-end">
                {centuryMarkers.map(({ year, position }) => (
                  <div
                    key={year}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="text-xs text-white/50 font-mono mb-1">
                      {year}
                    </div>
                    <div className="w-px h-2 bg-white/30" />
                  </div>
                ))}
              </div>

              {/* Slider */}
              <div className="absolute top-10 left-0 right-0">
                <input
                  type="range"
                  min={minYear}
                  max={maxYear}
                  value={currentYear}
                  onChange={handleSliderChange}
                  step="10"
                  className="timeline-slider w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right,
                      #d4af37 0%,
                      #d4af37 ${((currentYear - minYear) / (maxYear - minYear)) * 100}%,
                      rgba(255,255,255,0.1) ${((currentYear - minYear) / (maxYear - minYear)) * 100}%,
                      rgba(255,255,255,0.1) 100%)`
                  }}
                />
              </div>

              {/* Decade Markers (subtle dots) */}
              <div className="absolute top-10 left-0 right-0 pointer-events-none">
                {Array.from({ length: Math.floor((maxYear - minYear) / 10) + 1 }, (_, i) => {
                  const year = minYear + i * 10;
                  const position = ((year - minYear) / (maxYear - minYear)) * 100;
                  return (
                    <div
                      key={year}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        left: `${position}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
