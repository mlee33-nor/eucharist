'use client';

import { useState } from 'react';
import { Miracle } from '@/types/miracle';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryTabProps {
  miracle: Miracle;
}

export default function GalleryTab({ miracle }: GalleryTabProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const hasImages = miracle.images && miracle.images.length > 0;

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  if (!hasImages) {
    return (
      <div className="p-12 bg-white/5 rounded-lg border border-white/10 text-center">
        <p className="text-white/70">No images available for this miracle.</p>
        <p className="text-white/50 text-sm mt-2">
          Visit the source website to view photographs of this miracle.
        </p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % miracle.images!.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + miracle.images!.length) % miracle.images!.length);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Main Image */}
        <div
          className="relative rounded-lg overflow-hidden bg-black/30 aspect-video cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          {imageErrors.has(currentImageIndex) ? (
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <div className="text-center">
                <p className="text-lg mb-2">Image unavailable</p>
                <p className="text-sm">The external image could not be loaded</p>
              </div>
            </div>
          ) : (
            <img
              src={miracle.images![currentImageIndex]}
              alt={`${miracle.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              onError={() => handleImageError(currentImageIndex)}
              crossOrigin="anonymous"
            />
          )}

          {/* Navigation */}
          {miracle.images!.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 text-sm">
                {currentImageIndex + 1} / {miracle.images!.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {miracle.images!.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {miracle.images!.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex
                    ? 'border-holy-gold scale-105'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {imageErrors.has(idx) ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/30 text-white/30 text-xs">
                    Error
                  </div>
                ) : (
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(idx)}
                    crossOrigin="anonymous"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {imageErrors.has(currentImageIndex) ? (
                <div className="text-center text-white">
                  <p className="text-xl mb-2">Image unavailable</p>
                  <p className="text-sm text-white/70">The external image could not be loaded</p>
                </div>
              ) : (
                <img
                  src={miracle.images![currentImageIndex]}
                  alt={`${miracle.name} - Full size`}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                  onError={() => handleImageError(currentImageIndex)}
                  crossOrigin="anonymous"
                />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
