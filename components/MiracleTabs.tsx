'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Image as ImageIcon,
  Microscope,
  Users,
  MapPin as MapPinIcon,
  Box,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type TabType = 'overview' | 'story' | 'gallery' | 'science' | 'testimonies' | 'visit' | '3d';

interface Tab {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface MiracleTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  availableTabs?: TabType[];
  has3DModel?: boolean;
}

export default function MiracleTabs({
  activeTab,
  onTabChange,
  availableTabs,
  has3DModel = false
}: MiracleTabsProps) {
  const allTabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info className="w-4 h-4" />
    },
    {
      id: 'story',
      label: 'Story',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: <ImageIcon className="w-4 h-4" />
    },
    {
      id: 'science',
      label: 'Science',
      icon: <Microscope className="w-4 h-4" />
    },
    {
      id: 'testimonies',
      label: 'Testimonies',
      icon: <Users className="w-4 h-4" />
    },
    {
      id: 'visit',
      label: 'Visit',
      icon: <MapPinIcon className="w-4 h-4" />
    },
    {
      id: '3d',
      label: '3D View',
      icon: <Box className="w-4 h-4" />,
      disabled: !has3DModel
    }
  ];

  // Filter tabs if availableTabs is provided
  const tabs = availableTabs
    ? allTabs.filter(tab => availableTabs.includes(tab.id))
    : allTabs;

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-dark border-b border-white/10">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => !tab.disabled && onTabChange(tab.id)}
          disabled={tab.disabled}
          className={cn(
            'relative flex items-center gap-2 px-4 py-3 sm:py-2 min-h-touch rounded-lg transition-all whitespace-nowrap',
            'hover:bg-white/10',
            activeTab === tab.id
              ? 'text-holy-gold bg-white/10'
              : 'text-white/70',
            tab.disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {tab.icon}
          <span className="text-sm font-medium">{tab.label}</span>

          {/* Active indicator */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-holy-gold"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
