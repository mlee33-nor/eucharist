'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { Miracle } from '@/types/miracle';

interface GlobeComponentProps {
  miracles: Miracle[];
  onMiracleClick: (miracle: Miracle) => void;
  selectedMiracle?: Miracle | null;
}

export default function GlobeComponent({
  miracles,
  onMiracleClick,
  selectedMiracle
}: GlobeComponentProps) {
  const globeEl = useRef<any>();
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredMiracle, setHoveredMiracle] = useState<Miracle | null>(null);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout>();

  // Auto-rotate controls
  useEffect(() => {
    if (!globeEl.current) return;

    const controls = globeEl.current.controls();
    if (!controls) return;

    const handleInteractionStart = () => {
      setAutoRotate(false);
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };

    const handleInteractionEnd = () => {
      // Resume auto-rotation after 5 seconds of inactivity
      autoRotateTimeoutRef.current = setTimeout(() => {
        setAutoRotate(true);
      }, 5000);
    };

    controls.addEventListener('start', handleInteractionStart);
    controls.addEventListener('end', handleInteractionEnd);

    return () => {
      controls.removeEventListener('start', handleInteractionStart);
      controls.removeEventListener('end', handleInteractionEnd);
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, []);

  // Apply auto-rotation (slower speed for better UX)
  useEffect(() => {
    if (!globeEl.current || !autoRotate) return;

    const controls = globeEl.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.2; // Reduced from 0.5 to 0.2 for easier pin interaction
    }

    return () => {
      if (controls) {
        controls.autoRotate = false;
      }
    };
  }, [autoRotate]);

  // Starfield removed per user request

  // Cinematic fly-to animation with multi-stage movement
  useEffect(() => {
    if (!globeEl.current || !selectedMiracle) return;

    // Stop auto-rotation when flying to a miracle
    setAutoRotate(false);

    const flyToMiracle = async () => {
      // Stage 1: Zoom out to global view
      await new Promise<void>((resolve) => {
        if (!globeEl.current) {
          resolve();
          return;
        }
        globeEl.current.pointOfView(
          {
            lat: selectedMiracle.lat,
            lng: selectedMiracle.lng,
            altitude: 2.5
          },
          800
        );
        setTimeout(resolve, 800);
      });

      // Stage 2: Rotate and position
      await new Promise<void>((resolve) => {
        if (!globeEl.current) {
          resolve();
          return;
        }
        globeEl.current.pointOfView(
          {
            lat: selectedMiracle.lat,
            lng: selectedMiracle.lng,
            altitude: 2.0
          },
          1000
        );
        setTimeout(resolve, 1000);
      });

      // Stage 3: Zoom in close to miracle
      if (!globeEl.current) return;
      globeEl.current.pointOfView(
        {
          lat: selectedMiracle.lat,
          lng: selectedMiracle.lng,
          altitude: 1.2
        },
        800
      );
    };

    flyToMiracle();
  }, [selectedMiracle]);

  // Handle point click
  const handlePointClick = useCallback((point: any) => {
    if (point) {
      onMiracleClick(point as Miracle);
    }
  }, [onMiracleClick]);

  // Handle point hover
  const handlePointHover = useCallback((point: any) => {
    setHoveredMiracle(point as Miracle | null);
  }, []);

  // Custom point label
  const pointLabel = useCallback((point: any) => {
    const miracle = point as Miracle;
    return `
      <div style="
        background: rgba(10, 10, 10, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 8px;
        padding: 12px;
        color: white;
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 250px;
      ">
        <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #d4af37;">
          ${miracle.name}
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
          ${miracle.city}, ${miracle.country}
        </div>
        <div style="font-size: 11px; opacity: 0.7; margin-top: 4px;">
          ${miracle.date}
        </div>
      </div>
    `;
  }, []);

  return (
    <div className="w-full h-full">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"

        // Globe appearance
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        // Atmosphere
        atmosphereColor="#4a90e2"
        atmosphereAltitude={0.15}

        // Points (miracles)
        pointsData={miracles}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointColor={() => '#d4af37'}
        pointAltitude={0.02}  // Raised slightly above globe surface
        pointRadius={0.6}     // Increased from 0.3 to 0.6 for better visibility and clickability
        pointLabel={pointLabel}

        // Interactivity
        onPointClick={handlePointClick}
        onPointHover={handlePointHover}
        enablePointerInteraction={true}  // Ensure pointer events are enabled

        // Performance optimizations
        pointsMerge={false}  // Changed to false for better click detection

        // Timeline transitions - smooth appearance/disappearance
        pointsTransitionDuration={1000}  // 1 second fade in/out

        // Camera
        animateIn={true}
      />

      {/* Particle Effects - Disabled per user request */}

      {/* Cursor indicator when hovering */}
      {hoveredMiracle && (
        <style>{`
          canvas { cursor: pointer !important; }
        `}</style>
      )}
    </div>
  );
}
