'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-lg p-4',
        onClick && 'cursor-pointer hover:bg-white/10 transition-colors',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
