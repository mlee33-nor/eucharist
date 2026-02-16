'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-amber-950/20 to-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Cross/Chalice */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chalice */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]"
              fill="currentColor"
            >
              {/* Chalice Bowl */}
              <path d="M 20 20 Q 20 50 50 60 Q 80 50 80 20 Z" />
              {/* Stem */}
              <rect x="45" y="60" width="10" height="20" />
              {/* Base */}
              <ellipse cx="50" cy="85" rx="15" ry="5" />
              {/* Host above */}
              <circle cx="50" cy="15" r="8" className="text-amber-300" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            Eucharistic Miracles
          </h2>
          <p className="text-amber-100/60 text-sm">
            Loading sacred testimonies...
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-amber-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
