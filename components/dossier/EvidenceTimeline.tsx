'use client';

import { Miracle } from '@/types/miracle';
import { Calendar, FlaskConical, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvidenceTimelineProps {
  miracle: Miracle;
}

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'discovery' | 'investigation' | 'scientific' | 'authentication' | 'publication';
}

export default function EvidenceTimeline({ miracle }: EvidenceTimelineProps) {
  // Generate timeline events from miracle data
  const events: TimelineEvent[] = [];

  // Discovery
  if (miracle.year) {
    events.push({
      year: miracle.year,
      title: 'Miracle Occurred',
      description: `The Eucharistic miracle manifested in ${miracle.city}, ${miracle.country}`,
      type: 'discovery'
    });
  }

  // Timeline events from miracle data
  if (miracle.timeline) {
    miracle.timeline.forEach(event => {
      const yearMatch = event.date.match(/\d{4}/);
      if (yearMatch) {
        events.push({
          year: parseInt(yearMatch[0]),
          title: event.event,
          description: event.date,
          type: 'investigation'
        });
      }
    });
  }

  // Scientific evidence
  if (miracle.scientificEvidence && miracle.scientificEvidence.length > 0) {
    // Try to extract years from scientific evidence
    miracle.scientificEvidence.forEach((evidence, index) => {
      const yearMatch = evidence.match(/\d{4}/);
      if (yearMatch) {
        events.push({
          year: parseInt(yearMatch[0]),
          title: 'Scientific Analysis',
          description: evidence,
          type: 'scientific'
        });
      }
    });
  }

  // Sort events chronologically
  events.sort((a, b) => a.year - b.year);

  const getEventIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'discovery':
        return Calendar;
      case 'investigation':
        return FileText;
      case 'scientific':
        return FlaskConical;
      case 'authentication':
        return CheckCircle2;
      case 'publication':
        return FileText;
      default:
        return Calendar;
    }
  };

  const getEventColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'discovery':
        return 'from-amber-500 to-amber-600';
      case 'investigation':
        return 'from-blue-500 to-blue-600';
      case 'scientific':
        return 'from-green-500 to-green-600';
      case 'authentication':
        return 'from-purple-500 to-purple-600';
      case 'publication':
        return 'from-indigo-500 to-indigo-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-8 text-amber-100/60">
        <p>No timeline data available</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent" />

      <div className="space-y-8">
        {events.map((event, index) => {
          const Icon = getEventIcon(event.type);
          const colorClass = getEventColor(event.type);

          return (
            <div
              key={index}
              className="relative pl-20 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Timeline Dot */}
              <div className={cn(
                'absolute left-5 top-2 w-7 h-7 rounded-full',
                'flex items-center justify-center',
                'border-4 border-black shadow-lg',
                'group-hover:scale-125 transition-transform',
                `bg-gradient-to-br ${colorClass}`
              )}>
                <Icon className="w-4 h-4 text-white" />
              </div>

              {/* Year Badge */}
              <div className="absolute left-0 top-0 text-right pr-2">
                <div className="text-lg font-bold text-amber-400">
                  {event.year}
                </div>
                <div className="text-xs text-amber-100/40">
                  AD
                </div>
              </div>

              {/* Event Card */}
              <div className={cn(
                'bg-black/40 backdrop-blur-sm border rounded-xl p-4',
                'hover:bg-amber-500/10 transition-all',
                `border-${event.type === 'scientific' ? 'green' : 'amber'}-500/20`,
                'hover:border-amber-500/60'
              )}>
                <h4 className="text-lg font-semibold text-amber-300 mb-1">
                  {event.title}
                </h4>
                <p className="text-sm text-amber-100/70">
                  {event.description}
                </p>
                <div className="mt-2">
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full',
                    event.type === 'discovery' && 'bg-amber-500/20 text-amber-300',
                    event.type === 'investigation' && 'bg-blue-500/20 text-blue-300',
                    event.type === 'scientific' && 'bg-green-500/20 text-green-300',
                    event.type === 'authentication' && 'bg-purple-500/20 text-purple-300',
                    event.type === 'publication' && 'bg-indigo-500/20 text-indigo-300'
                  )}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
