'use client';

import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Miracle } from '@/types/miracle';

interface OverviewTabProps {
  miracle: Miracle;
}

export default function OverviewTab({ miracle }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Location */}
      <div className="flex items-center gap-2 text-white/80">
        <MapPin className="w-5 h-5 text-holy-blue" />
        <span className="text-lg">
          {miracle.city}, {miracle.country}
        </span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-white/70">
        <Calendar className="w-5 h-5 text-holy-blue" />
        <span>{miracle.date}</span>
      </div>

      {/* Main Image */}
      {miracle.images && miracle.images.length > 0 && (
        <div className="rounded-lg overflow-hidden bg-black/30 aspect-video">
          <img
            src={miracle.images[0]}
            alt={miracle.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="p-4 bg-white/5 rounded-lg border border-holy-gold/30">
        <h3 className="text-lg font-semibold mb-3 text-holy-gold">About This Miracle</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          {miracle.fullDescription || (
            <>
              The Eucharistic Miracle of <strong>{miracle.city}</strong> occurred in{' '}
              <strong>{miracle.date}</strong>. This is one of{' '}
              {miracle.country === 'Italy' ? 'many miraculous events' : 'the documented Eucharistic miracles'}{' '}
              from <strong>{miracle.country}</strong>.
            </>
          )}
        </p>
        {!miracle.fullDescription && (
          <p className="text-white/70 text-sm italic">
            Click "View Original Source" below to read the full account of this miracle, including historical details,
            witness testimonies, and photographs from the official Eucharistic Miracles exhibition.
          </p>
        )}
      </div>

      {/* Coordinates */}
      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
        <div className="text-sm text-white/60 mb-1">Coordinates</div>
        <div className="font-mono text-sm">
          {miracle.lat.toFixed(4)}°, {miracle.lng.toFixed(4)}°
        </div>
      </div>

      {/* External Link */}
      <a
        href={miracle.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-holy-gold text-black font-semibold rounded-lg hover:bg-holy-gold/90 transition-colors"
      >
        <span>View Original Source</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
