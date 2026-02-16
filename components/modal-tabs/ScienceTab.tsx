'use client';

import { Miracle } from '@/types/miracle';
import { Microscope, FlaskConical } from 'lucide-react';

interface ScienceTabProps {
  miracle: Miracle;
}

export default function ScienceTab({ miracle }: ScienceTabProps) {
  const hasScientificEvidence = miracle.scientificEvidence && miracle.scientificEvidence.length > 0;

  if (!hasScientificEvidence) {
    return (
      <div className="p-12 bg-white/5 rounded-lg border border-white/10 text-center">
        <Microscope className="w-12 h-12 text-white/30 mx-auto mb-4" />
        <p className="text-white/70">No scientific evidence documented for this miracle yet.</p>
        <p className="text-white/50 text-sm mt-2">
          Visit the source website for any available scientific analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8 text-holy-gold" />
        <h3 className="text-xl sm:text-2xl font-semibold text-holy-gold">Scientific Evidence</h3>
      </div>

      <div className="space-y-4">
        {miracle.scientificEvidence!.map((evidence, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 bg-white/5 rounded-lg border border-holy-blue/30"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-holy-gold/20 flex items-center justify-center text-holy-gold font-semibold">
                {idx + 1}
              </div>
              <p className="text-white/80 leading-relaxed">{evidence}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-holy-blue/10 rounded-lg border border-holy-blue/30">
        <p className="text-white/70 text-sm italic">
          Scientific analysis of Eucharistic miracles has been conducted by independent laboratories
          and medical professionals. Results have been documented and verified by the Catholic Church.
        </p>
      </div>
    </div>
  );
}
