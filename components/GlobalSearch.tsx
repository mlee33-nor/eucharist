'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import { Search, X, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlobalSearchProps {
  miracles: Miracle[];
}

export default function GlobalSearch({ miracles }: GlobalSearchProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Filter miracles based on search query
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    return miracles
      .filter(m =>
        m.name.toLowerCase().includes(lowerQuery) ||
        m.city.toLowerCase().includes(lowerQuery) ||
        m.country.toLowerCase().includes(lowerQuery) ||
        m.description?.toLowerCase().includes(lowerQuery) ||
        m.year?.toString().includes(query)
      )
      .slice(0, 5); // Show top 5 results
  }, [query, miracles]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectMiracle = (miracle: Miracle) => {
    router.push(`/miracle/${miracle.id}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-3 sm:py-2 min-h-touch bg-black/40 border border-amber-500/30 rounded-lg text-amber-100/80 hover:border-amber-500/60 hover:text-amber-100 transition-all"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:inline">Search miracles...</span>
        <kbd className="hidden md:inline px-2 py-0.5 text-xs bg-amber-500/20 border border-amber-500/30 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-start justify-center pt-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm sm:max-w-2xl mx-4 sm:mx-auto bg-black/90 border border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-500/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-amber-500/20">
              <Search className="w-5 h-5 text-amber-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, location, year, or description..."
                className="flex-1 bg-transparent text-amber-100 placeholder:text-amber-100/40 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-amber-500/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-amber-100/60" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((miracle) => (
                    <button
                      key={miracle.id}
                      onClick={() => handleSelectMiracle(miracle)}
                      className="w-full text-left p-4 sm:p-3 min-h-touch rounded-xl hover:bg-amber-500/10 transition-colors group"
                    >
                      <h4 className="text-lg font-semibold text-amber-300 group-hover:text-amber-400 mb-1">
                        {miracle.name}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-amber-100/60">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{miracle.city}, {miracle.country}</span>
                        </div>
                        {miracle.year && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{miracle.year} AD</span>
                          </div>
                        )}
                      </div>
                      {miracle.description && (
                        <p className="text-sm text-amber-100/50 mt-2 line-clamp-2">
                          {miracle.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center text-amber-100/40">
                  <Search className="w-12 h-12 mx-auto mb-2 opacity-20" />
                  <p>No miracles found matching "{query}"</p>
                </div>
              ) : (
                <div className="p-8 text-center text-amber-100/40">
                  <Search className="w-12 h-12 mx-auto mb-2 opacity-20" />
                  <p>Start typing to search miracles...</p>
                  <p className="text-xs mt-2">
                    Search by name, city, country, year, or keywords
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-amber-500/20 bg-black/40 flex items-center justify-between text-xs text-amber-100/40">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded">↑</kbd>
                  <kbd className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded">↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded">Enter</kbd>
                  <span>Select</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded">Esc</kbd>
                  <span>Close</span>
                </div>
              </div>
              <span>{results.length} of {miracles.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
