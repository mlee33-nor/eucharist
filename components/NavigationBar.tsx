'use client';

import { useState } from 'react';
import { Globe, BarChart3, FlaskConical, Calendar, Scale, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlobalSearch from './GlobalSearch';
import { Miracle } from '@/types/miracle';

export type ViewMode = 'globe' | 'analytics' | 'evidence' | 'timeline' | 'comparison';

interface NavigationBarProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  miracles: Miracle[];
}

const navItems = [
  { mode: 'globe' as ViewMode, icon: Globe, label: 'Globe' },
  { mode: 'analytics' as ViewMode, icon: BarChart3, label: 'Analytics' },
  { mode: 'evidence' as ViewMode, icon: FlaskConical, label: 'Evidence' },
  { mode: 'timeline' as ViewMode, icon: Calendar, label: 'Timeline' },
  { mode: 'comparison' as ViewMode, icon: Scale, label: 'Compare' },
];

export default function NavigationBar({ activeMode, onModeChange, miracles }: NavigationBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-amber-400">
                Eucharistic Miracles
              </h1>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              <GlobalSearch miracles={miracles} />
              <div className="flex items-center space-x-1">
              {navItems.map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => onModeChange(mode)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-3 min-h-touch rounded-lg transition-all duration-200',
                    'hover:bg-amber-500/10',
                    activeMode === mode
                      ? 'text-amber-400 bg-amber-500/20 border-b-2 border-amber-500'
                      : 'text-amber-100/70 hover:text-amber-100'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-amber-400 hover:text-amber-300 p-3 min-w-touch min-h-touch"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-amber-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => {
                    onModeChange(mode);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'flex items-center gap-3 w-full px-4 py-3 min-h-touch rounded-lg transition-all',
                    activeMode === mode
                      ? 'text-amber-400 bg-amber-500/20 border-l-4 border-amber-500'
                      : 'text-amber-100/70 hover:bg-amber-500/10 hover:text-amber-100'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16" />
    </>
  );
}
