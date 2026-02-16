'use client';

import { useState, useMemo } from 'react';
import { Miracle } from '@/types/miracle';
import ComparisonTable from '@/components/comparison/ComparisonTable';
import { calculateSimilarity } from '@/lib/miracleComparison';
import { Plus, X, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonModeProps {
  miracles: Miracle[];
}

export default function ComparisonMode({ miracles }: ComparisonModeProps) {
  const [selectedMiracleIds, setSelectedMiracleIds] = useState<string[]>([]);

  const selectedMiracles = useMemo(() => {
    return selectedMiracleIds
      .map(id => miracles.find(m => m.id === id))
      .filter((m): m is Miracle => m !== undefined);
  }, [selectedMiracleIds, miracles]);

  // Sort miracles alphabetically for selection dropdown
  const sortedMiracles = useMemo(() => {
    return [...miracles].sort((a, b) => a.name.localeCompare(b.name));
  }, [miracles]);

  const availableMiracles = useMemo(() => {
    return sortedMiracles.filter(m => !selectedMiracleIds.includes(m.id));
  }, [sortedMiracles, selectedMiracleIds]);

  const similarityScores = useMemo(() => {
    if (selectedMiracles.length !== 2) return null;
    return calculateSimilarity(selectedMiracles[0], selectedMiracles[1]);
  }, [selectedMiracles]);

  const addMiracle = (miracleId: string) => {
    if (selectedMiracleIds.length < 4 && !selectedMiracleIds.includes(miracleId)) {
      setSelectedMiracleIds([...selectedMiracleIds, miracleId]);
    }
  };

  const removeMiracle = (miracleId: string) => {
    setSelectedMiracleIds(selectedMiracleIds.filter(id => id !== miracleId));
  };

  const clearAll = () => {
    setSelectedMiracleIds([]);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-amber-950/10 to-black p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
          ⚖️ Compare Miracles
        </h1>
        <p className="text-amber-100/60 mb-8">
          Select miracles to compare their evidence, timeline, and characteristics
        </p>

        {/* Selection Area */}
        <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Select Miracles to Compare
              <span className="text-sm text-amber-100/60 font-normal">
                ({selectedMiracleIds.length}/4)
              </span>
            </h3>
            {selectedMiracleIds.length > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-amber-100/60 hover:text-amber-100 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Selected Miracles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4">
            {Array.from({ length: 4 }).map((_, index) => {
              const miracle = selectedMiracles[index];

              return (
                <div
                  key={index}
                  className={cn(
                    'border-2 border-dashed rounded-lg p-4 min-h-[120px]',
                    miracle
                      ? 'border-amber-500/40 bg-amber-500/10'
                      : 'border-amber-500/20 bg-black/20'
                  )}
                >
                  {miracle ? (
                    <div className="relative h-full flex flex-col">
                      <button
                        onClick={() => removeMiracle(miracle.id)}
                        className="absolute -top-2 -right-2 w-8 h-8 sm:w-6 sm:h-6 min-w-touch min-h-touch bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center hover:bg-red-500/30 transition-colors"
                      >
                        <X className="w-5 h-5 sm:w-4 sm:h-4 text-red-300" />
                      </button>
                      <div className="flex-1">
                        <h4 className="text-amber-300 font-semibold text-sm mb-1">
                          {miracle.name}
                        </h4>
                        <p className="text-amber-100/60 text-xs">
                          {miracle.city}, {miracle.country}
                        </p>
                        {miracle.year && (
                          <p className="text-amber-100/40 text-xs mt-1">
                            {miracle.year} AD
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-amber-100/30">
                        <div className="w-8 h-8 border-2 border-dashed border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg">{index + 1}</span>
                        </div>
                        <p className="text-xs">Empty slot</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add Miracle Dropdown */}
          {selectedMiracleIds.length < 4 && (
            <div className="flex gap-2">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addMiracle(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="flex-1 px-4 py-3 sm:py-2 min-h-touch text-base sm:text-sm bg-black/40 border border-amber-500/30 rounded-lg text-amber-100 focus:border-amber-500 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a miracle to add...
                </option>
                {availableMiracles.map(miracle => (
                  <option key={miracle.id} value={miracle.id}>
                    {miracle.name} ({miracle.city}, {miracle.country})
                    {miracle.year && ` - ${miracle.year} AD`}
                  </option>
                ))}
              </select>
              <button
                disabled
                className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-100/40 cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          )}

          {/* Similarity Score */}
          {similarityScores !== null && (
            <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-amber-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-amber-100/80 text-sm">
                  Similarity Score
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-amber-400 transition-all duration-500"
                      style={{ width: `${similarityScores}%` }}
                    />
                  </div>
                  <span className="text-amber-300 font-bold text-lg">
                    {Math.round(similarityScores)}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedMiracles.length >= 2 ? (
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-300 mb-4">
              Comparison Results
            </h3>
            <ComparisonTable miracles={selectedMiracles} />
          </div>
        ) : (
          <div className="text-center py-16 bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl">
            <Scale className="w-16 h-16 text-amber-500/40 mx-auto mb-4" />
            <p className="text-xl text-amber-100/60 mb-2">
              Select at least 2 miracles to compare
            </p>
            <p className="text-sm text-amber-100/40">
              Choose miracles from the dropdown above to see detailed comparison
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
