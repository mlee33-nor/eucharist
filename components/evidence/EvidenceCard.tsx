'use client';

import { useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import {
  hasDNAEvidence,
  hasTissueAnalysis,
  hasBloodType,
  hasPhotographs,
  hasWitnessTestimonies,
  hasPublications,
  calculateEvidenceScore
} from '@/lib/evidenceFilters';
import { Check, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvidenceCardProps {
  miracle: Miracle;
  onClick?: () => void;
}

export default function EvidenceCard({ miracle, onClick }: EvidenceCardProps) {
  const router = useRouter();
  const evidenceScore = calculateEvidenceScore(miracle);
  const century = miracle.year ? Math.ceil(miracle.year / 100) : null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/miracle/${miracle.id}`);
    }
  };

  const badges = [
    { label: 'DNA', active: hasDNAEvidence(miracle) },
    { label: 'Tissue', active: hasTissueAnalysis(miracle) },
    { label: 'Blood', active: hasBloodType(miracle) },
    { label: 'Photos', active: hasPhotographs(miracle) },
    { label: 'Witnesses', active: hasWitnessTestimonies(miracle) },
    { label: 'Published', active: hasPublications(miracle) }
  ];

  return (
    <div
      onClick={handleClick}
      className={cn(
        'bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4',
        'hover:border-amber-500/60 hover:bg-amber-500/10 transition-all duration-200',
        'cursor-pointer group'
      )}
    >
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-amber-300 group-hover:text-amber-400 transition-colors">
          {miracle.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-amber-100/60 mt-1">
          <MapPin className="w-3 h-3" />
          <span>{miracle.city}, {miracle.country}</span>
        </div>
        {miracle.year && (
          <div className="flex items-center gap-2 text-sm text-amber-100/60 mt-1">
            <Calendar className="w-3 h-3" />
            <span>{miracle.year} AD</span>
            {century && (
              <span className="ml-2 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded text-xs text-amber-300">
                {century}th Century
              </span>
            )}
          </div>
        )}
      </div>

      {/* Evidence Score */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs text-amber-100/60 mb-1">
          <span>Evidence Quality</span>
          <span>{evidenceScore}/6</span>
        </div>
        <div className="w-full bg-amber-950/40 rounded-full h-2">
          <div
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              evidenceScore >= 5 ? 'bg-green-500' :
              evidenceScore >= 3 ? 'bg-amber-400' :
              'bg-red-500'
            )}
            style={{ width: `${(evidenceScore / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Evidence Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map(badge => (
          <span
            key={badge.label}
            className={cn(
              'px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1',
              badge.active
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-gray-500/10 text-gray-500 border border-gray-500/20'
            )}
          >
            {badge.active && <Check className="w-3 h-3" />}
            {badge.label}
          </span>
        ))}
      </div>

      {/* Witness Count */}
      {miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0 && (
        <div className="mt-3 text-xs text-amber-100/60">
          {miracle.witnessTestimonies.length} witness{miracle.witnessTestimonies.length !== 1 ? 'es' : ''}
        </div>
      )}
    </div>
  );
}
