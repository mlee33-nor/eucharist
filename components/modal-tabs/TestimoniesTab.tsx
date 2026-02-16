'use client';

import { Miracle } from '@/types/miracle';
import { Quote } from 'lucide-react';

interface TestimoniesTabProps {
  miracle: Miracle;
}

export default function TestimoniesTab({ miracle }: TestimoniesTabProps) {
  const hasTestimonies = miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0;

  if (!hasTestimonies) {
    return (
      <div className="p-12 bg-white/5 rounded-lg border border-white/10 text-center">
        <Quote className="w-12 h-12 text-white/30 mx-auto mb-4" />
        <p className="text-white/70">No witness testimonies documented yet.</p>
        <p className="text-white/50 text-sm mt-2">
          Visit the source website for historical accounts and testimonies.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-holy-gold">Witness Testimonies</h3>

      <div className="space-y-6">
        {miracle.witnessTestimonies!.map((testimony, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/5 rounded-lg border border-white/10 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-holy-gold/20" />

            <div className="mb-4">
              <div className="text-lg font-semibold text-holy-gold">{testimony.name}</div>
              <div className="text-sm text-white/60">{testimony.role}</div>
            </div>

            <blockquote className="text-white/80 leading-relaxed italic border-l-4 border-holy-gold/50 pl-4">
              "{testimony.testimony}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
