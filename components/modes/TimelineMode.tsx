'use client';

import { useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import { MapPin, ChevronRight, FlaskConical, Droplets, Eye, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineModeProps {
  miracles: Miracle[];
}

function getOrdinal(n: number): string {
  if (n === 21) return '21st';
  if (n === 22) return '22nd';
  if (n === 23) return '23rd';
  return `${n}th`;
}

function getMiracleType(miracle: Miracle): { label: string; color: string }[] {
  const tags: { label: string; color: string }[] = [];
  if (miracle.scientificEvidence && miracle.scientificEvidence.length > 0) {
    tags.push({ label: 'Scientific', color: 'bg-green-500/20 border-green-500/40 text-green-300' });
  }
  if (miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0) {
    tags.push({ label: 'Witnesses', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' });
  }
  if (miracle.images && miracle.images.length > 0) {
    tags.push({ label: 'Images', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300' });
  }
  return tags;
}

export default function TimelineMode({ miracles }: TimelineModeProps) {
  const router = useRouter();
  const [filterCentury, setFilterCentury] = useState<number | null>(null);
  const sectionRefs = useRef<Map<number, HTMLElement>>(new Map());

  // Group miracles by century, sorted newest first
  const centurySections = useMemo(() => {
    const grouped = new Map<number, Miracle[]>();

    miracles.forEach(miracle => {
      if (!miracle.year) return;
      const century = Math.ceil(miracle.year / 100);
      const list = grouped.get(century) || [];
      list.push(miracle);
      grouped.set(century, list);
    });

    // Sort miracles within each century by year (newest first)
    grouped.forEach((list) => {
      list.sort((a, b) => (b.year || 0) - (a.year || 0));
    });

    // Return centuries sorted newest first
    return Array.from(grouped.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([century, miracles]) => ({ century, miracles }));
  }, [miracles]);

  const displayedSections = useMemo(() => {
    if (filterCentury === null) return centurySections;
    return centurySections.filter(s => s.century === filterCentury);
  }, [centurySections, filterCentury]);

  const scrollToCentury = (century: number) => {
    const el = sectionRefs.current.get(century);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-amber-950/10 to-black overflow-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
            Historical Timeline
          </h1>
          <p className="text-amber-100/60">
            Journey through 2,000 years of Eucharistic miracles, from present day back to ancient times
          </p>
        </div>

        {/* Century Jump Nav */}
        <div className="flex flex-wrap gap-2 mb-8 sticky top-0 bg-black/80 backdrop-blur-md py-3 z-10 -mx-4 px-4 border-b border-amber-500/10">
          <button
            onClick={() => setFilterCentury(null)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-all border',
              filterCentury === null
                ? 'bg-amber-500/30 border-amber-500 text-amber-100'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-100/70 hover:bg-amber-500/20'
            )}
          >
            All
          </button>
          {centurySections.map(({ century, miracles: list }) => (
            <button
              key={century}
              onClick={() => {
                setFilterCentury(null);
                setTimeout(() => scrollToCentury(century), 50);
              }}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all border bg-amber-500/10 border-amber-500/30 text-amber-100/70 hover:bg-amber-500/20"
            >
              {getOrdinal(century)} <span className="text-amber-100/40">({list.length})</span>
            </button>
          ))}
        </div>

        {/* Timeline Sections */}
        <div className="space-y-12">
          {displayedSections.map(({ century, miracles: sectionMiracles }) => (
            <section
              key={century}
              ref={(el) => {
                if (el) sectionRefs.current.set(century, el);
                else sectionRefs.current.delete(century);
              }}
            >
              {/* Century Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="bg-amber-500 text-black rounded-xl px-4 py-2 font-bold text-lg">
                    {getOrdinal(century)} Century
                  </div>
                </div>
                <div className="flex-1 h-px bg-amber-500/20" />
                <span className="text-amber-100/40 text-sm flex-shrink-0">
                  {sectionMiracles.length} miracle{sectionMiracles.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Miracles in this century */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent" />

                <div className="space-y-4">
                  {sectionMiracles.map((miracle) => {
                    const tags = getMiracleType(miracle);
                    return (
                      <div key={miracle.id} className="relative pl-12 group">
                        {/* Timeline dot */}
                        <div className="absolute left-2 top-4 w-5 h-5 rounded-full bg-black border-2 border-amber-500 group-hover:border-amber-300 transition-colors flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:bg-amber-300 transition-colors" />
                        </div>

                        {/* Miracle card */}
                        <div
                          onClick={() => router.push(`/miracle/${miracle.id}`)}
                          className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all cursor-pointer group/card"
                        >
                          {/* Year + Location row */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-amber-400 tabular-nums">
                                {miracle.year}
                              </span>
                              <span className="text-xs text-amber-100/40 uppercase tracking-wide">AD</span>
                              <div className="flex items-center gap-1 text-amber-100/50">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="text-sm">{miracle.city}, {miracle.country}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-amber-500/40 group-hover/card:text-amber-400 group-hover/card:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                          </div>

                          {/* Miracle Name */}
                          <h3 className="text-base font-semibold text-amber-200 mb-2 leading-tight">
                            {miracle.name}
                          </h3>

                          {/* Description */}
                          {miracle.description && (
                            <p className="text-sm text-amber-100/60 line-clamp-2 mb-3">
                              {miracle.description}
                            </p>
                          )}

                          {/* Tags */}
                          {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className={cn(
                                    'px-2 py-0.5 rounded-full text-xs font-medium border',
                                    tag.color
                                  )}
                                >
                                  {tag.label}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

        {displayedSections.length === 0 && (
          <div className="text-center py-16 text-amber-100/40">
            No miracles found
          </div>
        )}
      </div>
    </div>
  );
}
