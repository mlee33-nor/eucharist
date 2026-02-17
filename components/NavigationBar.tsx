'use client';

import { useState } from 'react';
import { Globe, BarChart3, FlaskConical, Calendar, Scale, Menu, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlobalSearch from './GlobalSearch';
import { Miracle } from '@/types/miracle';

function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-black/90 border border-amber-500/30 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-amber-500/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-amber-100/60 hover:text-amber-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carlo Image / Icon */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">✝</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-400">Carlo's Legacy</h2>
            <p className="text-amber-100/50 text-sm">Patron Saint of the Internet</p>
          </div>
        </div>

        <p className="text-amber-100/80 text-sm leading-relaxed mb-4">
          <span className="font-semibold text-amber-300">Saint Carlo Acutis (1991–2006)</span> was a young Italian with an extraordinary love for the Eucharist and remarkable computer skills. While still a teenager, he used his technical abilities to research and document over 130 Eucharistic miracles from around the world.
        </p>

        <p className="text-amber-100/80 text-sm leading-relaxed mb-4">
          Carlo created an international exhibition that has traveled to parishes and cathedrals across six continents, helping countless people deepen their faith in the Real Presence. He was beatified by Pope Francis in 2020 and canonized by Pope Leo XIV on September 7, 2025. He is known as the "Patron Saint of the Internet."
        </p>

        <blockquote className="border-l-2 border-amber-500 pl-4 my-5">
          <p className="text-amber-300 italic font-medium">
            "The Eucharist is my highway to heaven."
          </p>
          <p className="text-amber-100/40 text-xs mt-1">— Saint Carlo Acutis</p>
        </blockquote>

        <p className="text-amber-100/70 text-sm leading-relaxed">
          This explorer builds on Carlo's work, making his research digitally accessible and expandable. We currently feature <span className="text-amber-300 font-semibold">127 miracles from 22 countries</span>, with more being added as we continue his mission.
        </p>
      </div>
    </div>
  );
}

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
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <h1 className="text-xl font-bold text-amber-400">
                Eucharistic Miracles
              </h1>
              <button
                onClick={() => setShowAbout(true)}
                className="p-1.5 rounded-lg text-amber-400/50 hover:text-amber-400 hover:bg-amber-500/10 transition-all"
                title="About Carlo's Legacy"
              >
                <Info className="w-4 h-4" />
              </button>
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
