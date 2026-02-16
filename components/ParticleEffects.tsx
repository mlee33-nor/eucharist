'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleEffectsProps {
  globeRef: React.RefObject<any>;
  selectedMiracle: { lat: number; lng: number } | null;
}

export default function ParticleEffects({ globeRef, selectedMiracle }: ParticleEffectsProps) {
  const particleSystemRef = useRef<any>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!globeRef.current || !selectedMiracle) {
      // Clean up existing particles
      if (particleSystemRef.current && globeRef.current) {
        const scene = globeRef.current.scene();
        scene.remove(particleSystemRef.current);
        particleSystemRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const scene = globeRef.current.scene();

    // Clean up previous particle system
    if (particleSystemRef.current) {
      scene.remove(particleSystemRef.current);
    }

    // Convert lat/lng to 3D coordinates on globe surface
    const radius = 100; // Globe radius in Three.js units
    const phi = (90 - selectedMiracle.lat) * (Math.PI / 180);
    const theta = (selectedMiracle.lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    // Create particle system
    const particleCount = 100;
    const particles: any[] = [];

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Start at miracle location
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      // Holy gold color (RGB: 212, 175, 55)
      colors[i3] = 212 / 255;
      colors[i3 + 1] = 175 / 255;
      colors[i3 + 2] = 55 / 255;

      sizes[i] = Math.random() * 2 + 1;
      alphas[i] = 1.0;

      // Store particle metadata
      particles.push({
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: Math.random() * 0.8 + 0.2,
          z: (Math.random() - 0.5) * 0.5
        },
        lifetime: Math.random() * 2 + 1, // 1-3 seconds
        age: 0,
        spiralPhase: Math.random() * Math.PI * 2,
        spiralSpeed: Math.random() * 0.05 + 0.02
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particleSystemRef.current = particleSystem;
    scene.add(particleSystem);

    // Animation loop
    const animate = () => {
      if (!particleSystemRef.current) return;

      const positions = particleGeometry.attributes.position.array as Float32Array;
      const delta = 0.016; // ~60fps

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const particle = particles[i];

        particle.age += delta;

        // If particle is dead, reset it
        if (particle.age >= particle.lifetime) {
          positions[i3] = x;
          positions[i3 + 1] = y;
          positions[i3 + 2] = z;
          particle.age = 0;
          particle.spiralPhase = Math.random() * Math.PI * 2;
          continue;
        }

        // Update spiral motion
        particle.spiralPhase += particle.spiralSpeed;
        const spiralRadius = particle.age * 2;

        positions[i3] += particle.velocity.x + Math.cos(particle.spiralPhase) * 0.1;
        positions[i3 + 1] += particle.velocity.y;
        positions[i3 + 2] += particle.velocity.z + Math.sin(particle.spiralPhase) * 0.1;

        // Fade out over lifetime
        const lifeRatio = particle.age / particle.lifetime;
        particleMaterial.opacity = 0.8 * (1 - lifeRatio);
      }

      particleGeometry.attributes.position.needsUpdate = true;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (particleSystemRef.current) {
        scene.remove(particleSystemRef.current);
        particleSystemRef.current.geometry.dispose();
        particleSystemRef.current.material.dispose();
        particleSystemRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [globeRef, selectedMiracle]);

  return null; // This component doesn't render anything directly
}
