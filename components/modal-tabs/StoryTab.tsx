'use client';

import { Miracle } from '@/types/miracle';
import { Clock } from 'lucide-react';

interface StoryTabProps {
  miracle: Miracle;
}

export default function StoryTab({ miracle }: StoryTabProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-holy-gold">The Miracle Story</h3>

      {/* Full Description */}
      {miracle.fullDescription ? (
        <div className="text-white/80 leading-relaxed space-y-4">
          {miracle.fullDescription.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-white/5 rounded-lg border border-white/10 text-center">
          <p className="text-white/70">
            The full story of this miracle is available at the source website.
          </p>
        </div>
      )}

      {/* Historical Context */}
      {miracle.historicalContext && (
        <div className="p-4 bg-holy-gold/10 rounded-lg border border-holy-gold/30">
          <h4 className="text-lg font-semibold mb-3 text-holy-gold">Historical Context</h4>
          <p className="text-white/80 leading-relaxed">{miracle.historicalContext}</p>
        </div>
      )}

      {/* Timeline */}
      {miracle.timeline && miracle.timeline.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-4 text-holy-gold flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Timeline of Events
          </h4>
          <div className="space-y-3">
            {miracle.timeline.map((event, idx) => (
              <div key={idx} className="flex gap-4 p-3 bg-white/5 rounded-lg">
                <div className="text-holy-gold font-semibold whitespace-nowrap">
                  {event.date}
                </div>
                <div className="text-white/80">{event.event}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
