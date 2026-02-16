'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { Miracle } from '@/types/miracle';
import { cn } from '@/lib/utils';

interface SidebarProps {
  miracles: Miracle[];
  onMiracleSelect: (miracle: Miracle) => void;
  selectedMiracle?: Miracle | null;
}

export default function Sidebar({
  miracles,
  onMiracleSelect,
  selectedMiracle
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set());

  // Filter miracles based on search query
  const filteredMiracles = useMemo(() => {
    if (!searchQuery.trim()) return miracles;

    const query = searchQuery.toLowerCase();
    return miracles.filter(
      (miracle) =>
        miracle.name.toLowerCase().includes(query) ||
        miracle.city.toLowerCase().includes(query) ||
        miracle.country.toLowerCase().includes(query)
    );
  }, [miracles, searchQuery]);

  // Group miracles by country
  const miraclesByCountry = useMemo(() => {
    const grouped = new Map<string, Miracle[]>();

    filteredMiracles.forEach((miracle) => {
      const country = miracle.country || 'Unknown';
      if (!grouped.has(country)) {
        grouped.set(country, []);
      }
      grouped.get(country)!.push(miracle);
    });

    // Sort countries alphabetically
    return new Map(
      Array.from(grouped.entries()).sort((a, b) => a[0].localeCompare(b[0]))
    );
  }, [filteredMiracles]);

  const toggleCountry = (country: string) => {
    setExpandedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(country)) {
        next.delete(country);
      } else {
        next.add(country);
      }
      return next;
    });
  };

  // Auto-expand countries with search results
  useMemo(() => {
    if (searchQuery.trim()) {
      setExpandedCountries(new Set(miraclesByCountry.keys()));
    }
  }, [searchQuery, miraclesByCountry]);

  return (
    <motion.div
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-screen w-[400px] z-10 flex flex-col"
    >
      <div className="glass h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold mb-2 text-holy-gold">
            Eucharistic Miracles
          </h1>
          <p className="text-sm text-white/70">
            {miracles.length} miracles worldwide
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search by name, city, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-holy-gold/50 focus:border-holy-gold/50 transition-all"
            />
          </div>
        </div>

        {/* Miracle List */}
        <div className="flex-1 overflow-y-auto scrollbar-dark p-4 space-y-2">
          {miraclesByCountry.size === 0 ? (
            <div className="text-center text-white/50 py-8">
              No miracles found
            </div>
          ) : (
            Array.from(miraclesByCountry.entries()).map(([country, countryMiracles], index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Country Header */}
                <button
                  onClick={() => toggleCountry(country)}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors mb-2"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-holy-gold" />
                    <span className="font-semibold">{country}</span>
                    <span className="text-xs text-white/50">
                      ({countryMiracles.length})
                    </span>
                  </div>
                  <svg
                    className={cn(
                      'w-4 h-4 transition-transform',
                      expandedCountries.has(country) ? 'rotate-180' : ''
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Miracles in Country */}
                {expandedCountries.has(country) && (
                  <div className="space-y-1 ml-2 mb-2">
                    {countryMiracles.map((miracle) => (
                      <GlassCard
                        key={miracle.id}
                        onClick={() => onMiracleSelect(miracle)}
                        className={cn(
                          'p-3 transition-all',
                          selectedMiracle?.id === miracle.id
                            ? 'ring-2 ring-holy-gold bg-holy-gold/10'
                            : ''
                        )}
                      >
                        <div className="font-medium text-sm mb-1">
                          {miracle.name}
                        </div>
                        <div className="text-xs text-white/70">
                          {miracle.city}
                        </div>
                        <div className="text-xs text-white/50 mt-1">
                          {miracle.date}
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}
