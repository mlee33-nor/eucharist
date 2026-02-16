'use client';

import { Miracle } from '@/types/miracle';
import { compareMiracles, ComparisonRow } from '@/lib/miracleComparison';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonTableProps {
  miracles: Miracle[];
}

export default function ComparisonTable({ miracles }: ComparisonTableProps) {
  const rows = compareMiracles(miracles);

  const getCategoryColor = (category: ComparisonRow['category']) => {
    switch (category) {
      case 'basic':
        return 'bg-blue-500/10 border-blue-500/30';
      case 'evidence':
        return 'bg-green-500/10 border-green-500/30';
      case 'witness':
        return 'bg-purple-500/10 border-purple-500/30';
      case 'church':
        return 'bg-amber-500/10 border-amber-500/30';
      default:
        return 'bg-gray-500/10 border-gray-500/30';
    }
  };

  const getCategoryLabel = (category: ComparisonRow['category']) => {
    switch (category) {
      case 'basic':
        return 'Basic Information';
      case 'evidence':
        return 'Scientific Evidence';
      case 'witness':
        return 'Witness Testimonies';
      case 'church':
        return 'Church & Visiting';
      default:
        return '';
    }
  };

  // Group rows by category
  const groupedRows = rows.reduce((acc, row) => {
    if (!acc[row.category]) {
      acc[row.category] = [];
    }
    acc[row.category].push(row);
    return acc;
  }, {} as Record<string, ComparisonRow[]>);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-black/80 backdrop-blur-sm border border-amber-500/20 p-4 text-left">
              <span className="text-amber-300 font-semibold">Attribute</span>
            </th>
            {miracles.map((miracle, index) => (
              <th
                key={miracle.id}
                className="bg-black/60 backdrop-blur-sm border border-amber-500/20 p-4 min-w-[200px]"
              >
                <div className="text-amber-300 font-semibold text-left">
                  {miracle.name}
                </div>
                <div className="text-amber-100/60 text-xs font-normal text-left mt-1">
                  {miracle.city}, {miracle.country}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedRows).map(([category, categoryRows]) => (
            <React.Fragment key={category}>
              {/* Category Header */}
              <tr>
                <td
                  colSpan={miracles.length + 1}
                  className={cn(
                    'sticky left-0 border border-amber-500/20 p-3',
                    getCategoryColor(category as ComparisonRow['category'])
                  )}
                >
                  <span className="text-sm font-semibold text-amber-200 uppercase tracking-wide">
                    {getCategoryLabel(category as ComparisonRow['category'])}
                  </span>
                </td>
              </tr>

              {/* Category Rows */}
              {categoryRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="group hover:bg-amber-500/5">
                  <td className="sticky left-0 z-10 bg-black/80 backdrop-blur-sm border border-amber-500/20 p-4 font-medium text-amber-100/80">
                    {row.label}
                  </td>
                  {row.values.map((value, colIndex) => {
                    const isMatch = row.isMatch && row.isMatch[colIndex];
                    return (
                      <td
                        key={colIndex}
                        className={cn(
                          'border border-amber-500/20 p-4',
                          isMatch && miracles.length > 1
                            ? 'bg-green-500/20 border-green-500/40'
                            : 'bg-black/40'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {isMatch && miracles.length > 1 && (
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          )}
                          <span className="text-amber-100/90 text-sm">
                            {String(value)}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Import React for Fragment
import React from 'react';
