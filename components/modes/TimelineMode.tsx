'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import { getAllCenturies, CenturyInfo } from '@/lib/centuryContext';
import { MapPin, Calendar, Book, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineModeProps {
  miracles: Miracle[];
}

export default function TimelineMode({ miracles }: TimelineModeProps) {
  const router = useRouter();
  const [selectedCentury, setSelectedCentury] = useState<number | null>(null);
  const centuries = getAllCenturies();

  // Group miracles by century
  const miraclesByCentury = useMemo(() => {
    const grouped = new Map<number, Miracle[]>();

    miracles.forEach(miracle => {
      if (!miracle.year) return;
      const century = Math.ceil(miracle.year / 100);
      const list = grouped.get(century) || [];
      list.push(miracle);
      grouped.set(century, list);
    });

    // Sort miracles within each century by year
    grouped.forEach((list) => {
      list.sort((a, b) => (a.year || 0) - (b.year || 0));
    });

    return grouped;
  }, [miracles]);

  const selectedCenturyInfo = useMemo(() => {
    if (selectedCentury === null) return null;
    return centuries.find(c => c.century === selectedCentury) || null;
  }, [selectedCentury, centuries]);

  const selectedMiracles = useMemo(() => {
    if (selectedCentury === null) return [];
    return miraclesByCentury.get(selectedCentury) || [];
  }, [selectedCentury, miraclesByCentury]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-amber-950/10 to-black p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
          📅 Historical Timeline
        </h1>
        <p className="text-amber-100/60 mb-8">
          Explore miracles through the centuries with historical context
        </p>

        {/* Century Selector */}
        <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-amber-300 mb-4">
            Select Century
          </h3>
          <div className="flex flex-wrap gap-2">
            {centuries.map((century) => {
              const count = miraclesByCentury.get(century.century)?.length || 0;
              const isSelected = selectedCentury === century.century;

              return (
                <button
                  key={century.century}
                  onClick={() => setSelectedCentury(
                    isSelected ? null : century.century
                  )}
                  disabled={count === 0}
                  className={cn(
                    'px-4 py-2 rounded-lg transition-all duration-200',
                    'border font-medium relative',
                    count === 0
                      ? 'bg-gray-800/20 border-gray-700/20 text-gray-600 cursor-not-allowed'
                      : isSelected
                      ? 'bg-amber-500/30 border-amber-500 text-amber-100 shadow-lg shadow-amber-500/20'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-100/80 hover:bg-amber-500/20 hover:border-amber-500/50'
                  )}
                >
                  <div className="text-sm">
                    {century.century}{century.century === 21 ? 'st' : century.century === 20 ? 'th' : century.century === 13 ? 'th' : century.century === 12 ? 'th' : century.century === 11 ? 'th' : 'th'}
                  </div>
                  {count > 0 && (
                    <div className={cn(
                      'absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
                      isSelected
                        ? 'bg-amber-400 text-black'
                        : 'bg-amber-500/40 border border-amber-500/60 text-amber-100'
                    )}>
                      {count}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Century Context & Miracles */}
        {selectedCenturyInfo && (
          <div className="space-y-6">
            {/* Historical Context Panel */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Book className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-amber-300 mb-2">
                    {selectedCenturyInfo.title}
                  </h2>
                  <p className="text-lg text-amber-100/80 mb-4">
                    {selectedCenturyInfo.range}
                  </p>
                  <p className="text-amber-100/70 mb-4">
                    {selectedCenturyInfo.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wide">
                      Historical Events
                    </h4>
                    <ul className="space-y-1">
                      {selectedCenturyInfo.events.map((event, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-amber-100/60"
                        >
                          <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Miracles in this Century */}
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {selectedMiracles.length} Miracle{selectedMiracles.length !== 1 ? 's' : ''} in the {selectedCenturyInfo.century}{selectedCenturyInfo.century === 21 ? 'st' : 'th'} Century
              </h3>

              {selectedMiracles.length > 0 ? (
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent" />

                  <div className="space-y-6">
                    {selectedMiracles.map((miracle, index) => (
                      <div
                        key={miracle.id}
                        className="relative pl-20 group"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 top-3 w-5 h-5 rounded-full bg-amber-500 border-4 border-black shadow-lg shadow-amber-500/50 group-hover:scale-125 transition-transform" />

                        {/* Year Badge */}
                        <div className="absolute left-0 top-2 text-right">
                          <div className="text-lg font-bold text-amber-400">
                            {miracle.year}
                          </div>
                          <div className="text-xs text-amber-100/40">
                            AD
                          </div>
                        </div>

                        {/* Miracle Card */}
                        <div
                          onClick={() => router.push(`/miracle/${miracle.id}`)}
                          className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 hover:border-amber-500/60 hover:bg-amber-500/10 transition-all cursor-pointer"
                        >
                          <h4 className="text-lg font-semibold text-amber-300 mb-2">
                            {miracle.name}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-amber-100/60 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{miracle.city}, {miracle.country}</span>
                          </div>
                          {miracle.description && (
                            <p className="text-sm text-amber-100/70 line-clamp-2">
                              {miracle.description}
                            </p>
                          )}
                          {miracle.scientificEvidence && miracle.scientificEvidence.length > 0 && (
                            <div className="mt-2 flex items-center gap-2">
                              <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
                                Scientific Evidence
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                  <p className="text-amber-100/40">
                    No miracles documented in this century
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Century Selected State */}
        {!selectedCenturyInfo && (
          <div className="text-center py-16 bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl">
            <Calendar className="w-16 h-16 text-amber-500/40 mx-auto mb-4" />
            <p className="text-xl text-amber-100/60 mb-2">
              Select a century to explore
            </p>
            <p className="text-sm text-amber-100/40">
              Click on any century button above to view miracles and historical context
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
