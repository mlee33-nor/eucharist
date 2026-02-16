'use client';

import { Miracle } from '@/types/miracle';
import { MapPin, Church, Clock, Globe } from 'lucide-react';

interface VisitTabProps {
  miracle: Miracle;
}

export default function VisitTab({ miracle }: VisitTabProps) {
  const hasChurchInfo = miracle.churchInfo !== undefined;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-holy-gold flex items-center gap-3">
        <Church className="w-7 h-7" />
        Visit This Miracle
      </h3>

      {/* Church Information */}
      {hasChurchInfo && (
        <div className="p-6 bg-white/5 rounded-lg border border-white/10 space-y-4">
          <div>
            <div className="text-sm text-white/60 mb-1">Church</div>
            <div className="text-lg font-semibold">{miracle.churchInfo!.name}</div>
          </div>

          {miracle.churchInfo!.address && (
            <div>
              <div className="text-sm text-white/60 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </div>
              <div className="text-white/80">{miracle.churchInfo!.address}</div>
            </div>
          )}

          {miracle.churchInfo!.visitingHours && (
            <div>
              <div className="text-sm text-white/60 mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Visiting Hours
              </div>
              <div className="text-white/80">{miracle.churchInfo!.visitingHours}</div>
            </div>
          )}

          {miracle.churchInfo!.website && (
            <div>
              <div className="text-sm text-white/60 mb-1 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Website
              </div>
              <a
                href={miracle.churchInfo!.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-holy-blue hover:underline"
              >
                {miracle.churchInfo!.website}
              </a>
            </div>
          )}
        </div>
      )}

      {/* Location Information */}
      <div className="p-6 bg-white/5 rounded-lg border border-white/10">
        <div className="text-lg font-semibold mb-4">Location</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5 text-holy-gold" />
            <span>{miracle.city}, {miracle.country}</span>
          </div>
          <div className="font-mono text-sm text-white/60">
            {miracle.lat.toFixed(6)}°, {miracle.lng.toFixed(6)}°
          </div>
        </div>

        <a
          href={`https://www.google.com/maps?q=${miracle.lat},${miracle.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-holy-blue text-white rounded-lg hover:bg-holy-blue/80 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>View on Google Maps</span>
        </a>
      </div>

      {!hasChurchInfo && (
        <div className="p-4 bg-holy-gold/10 rounded-lg border border-holy-gold/30">
          <p className="text-white/70 text-sm">
            Detailed visiting information is not yet available for this miracle.
            Please check the original source website for more information about visiting this site.
          </p>
        </div>
      )}
    </div>
  );
}
