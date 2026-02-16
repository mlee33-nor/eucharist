'use client';

import { useState, useMemo } from 'react';
import { Miracle } from '@/types/miracle';
import EvidenceCard from '@/components/evidence/EvidenceCard';
import {
  EvidenceFilters,
  defaultFilters,
  applyFilters,
  getUniqueCountries,
  calculateEvidenceScore
} from '@/lib/evidenceFilters';
import { Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvidenceModeProps {
  miracles: Miracle[];
}

export default function EvidenceMode({ miracles }: EvidenceModeProps) {
  const [filters, setFilters] = useState<EvidenceFilters>(defaultFilters);
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState<'quality' | 'date' | 'name'>('quality');

  const countries = useMemo(() => getUniqueCountries(miracles), [miracles]);

  const filteredMiracles = useMemo(() => {
    let result = applyFilters(miracles, filters);

    // Sort
    switch (sortBy) {
      case 'quality':
        result.sort((a, b) => calculateEvidenceScore(b) - calculateEvidenceScore(a));
        break;
      case 'date':
        result.sort((a, b) => (b.year || 0) - (a.year || 0));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [miracles, filters, sortBy]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.hasDNA) count++;
    if (filters.hasTissue) count++;
    if (filters.hasBlood) count++;
    if (filters.hasPhotos) count++;
    if (filters.hasWitnesses) count++;
    if (filters.hasPublications) count++;
    if (filters.countries.length > 0) count++;
    if (filters.centuryRange[0] !== 8 || filters.centuryRange[1] !== 21) count++;
    return count;
  }, [filters]);

  const toggleFilter = (key: keyof EvidenceFilters) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-amber-950/10 to-black p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
            🔬 Scientific Evidence Explorer
          </h1>
          <p className="text-amber-100/60">
            Filter and explore miracles by scientific evidence and documentation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className={cn(
            'lg:col-span-1',
            !showFilters && 'hidden lg:block'
          )}>
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs">
                      {activeFilterCount}
                    </span>
                  )}
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-amber-100/60 hover:text-amber-100 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                )}
              </div>

              {/* Evidence Type Filters */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium text-amber-200 mb-2">Evidence Types</h4>

                {[
                  { key: 'hasDNA', label: 'DNA Analysis' },
                  { key: 'hasTissue', label: 'Tissue Analysis' },
                  { key: 'hasBlood', label: 'Blood Type ID' },
                  { key: 'hasPhotos', label: 'Has Photographs' },
                  { key: 'hasWitnesses', label: 'Witness Testimonies' },
                  { key: 'hasPublications', label: 'Scientific Publications' }
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-2 text-amber-100/80 hover:text-amber-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters[key as keyof EvidenceFilters] as boolean}
                      onChange={() => toggleFilter(key as keyof EvidenceFilters)}
                      className="w-4 h-4 rounded border-amber-500/30 bg-black/40 text-amber-500 focus:ring-amber-500/50"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>

              {/* Century Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-amber-200 mb-2">Century Range</h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="8"
                      max="21"
                      value={filters.centuryRange[0]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        centuryRange: [parseInt(e.target.value), prev.centuryRange[1]]
                      }))}
                      className="w-full px-3 py-2 bg-black/40 border border-amber-500/30 rounded text-amber-100 text-sm focus:border-amber-500 focus:outline-none"
                      placeholder="From"
                    />
                    <input
                      type="number"
                      min="8"
                      max="21"
                      value={filters.centuryRange[1]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        centuryRange: [prev.centuryRange[0], parseInt(e.target.value)]
                      }))}
                      className="w-full px-3 py-2 bg-black/40 border border-amber-500/30 rounded text-amber-100 text-sm focus:border-amber-500 focus:outline-none"
                      placeholder="To"
                    />
                  </div>
                  <p className="text-xs text-amber-100/40">
                    {filters.centuryRange[0]}th - {filters.centuryRange[1]}th centuries
                  </p>
                </div>
              </div>

              {/* Country Filter */}
              <div>
                <h4 className="text-sm font-medium text-amber-200 mb-2">Countries</h4>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {countries.map(country => (
                    <label
                      key={country}
                      className="flex items-center gap-2 text-amber-100/80 hover:text-amber-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.countries.includes(country)}
                        onChange={(e) => {
                          setFilters(prev => ({
                            ...prev,
                            countries: e.target.checked
                              ? [...prev.countries, country]
                              : prev.countries.filter(c => c !== country)
                          }));
                        }}
                        className="w-4 h-4 rounded border-amber-500/30 bg-black/40 text-amber-500 focus:ring-amber-500/50"
                      />
                      <span className="text-sm">{country}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-100 hover:bg-amber-500/30 transition-colors flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </button>
                <p className="text-amber-100/60">
                  Showing <span className="text-amber-400 font-semibold">{filteredMiracles.length}</span> of {miracles.length} miracles
                </p>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-amber-100/60">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-black/40 border border-amber-500/30 rounded text-amber-100 text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="quality">Evidence Quality</option>
                  <option value="date">Date (Newest)</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredMiracles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredMiracles.map(miracle => (
                  <EvidenceCard
                    key={miracle.id}
                    miracle={miracle}
                    onClick={() => {
                      // TODO: Open miracle detail modal/page
                      console.log('Open miracle:', miracle.name);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl">
                <p className="text-amber-100/40 text-lg">No miracles match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-100 hover:bg-amber-500/30 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
