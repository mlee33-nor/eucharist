export interface Miracle {
  id: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  date: string;
  year?: number;
  description?: string;
  fullDescription?: string;  // Complete story from detail page
  images?: string[];         // Local image paths
  url: string;

  // Enhanced content fields (Phase 1)
  historicalContext?: string;
  scientificEvidence?: string[];  // Array of scientific findings
  witnessTestimonies?: {
    name: string;
    role: string;
    testimony: string;
  }[];
  timeline?: {
    date: string;
    event: string;
  }[];
  relatedMiracles?: string[];  // IDs of related miracles
  churchInfo?: {
    name: string;
    address: string;
    visitingHours?: string;
    website?: string;
  };

  // 3D model support
  model3D?: string;  // URL to .glb/.gltf file
}

// Enhanced image interface for future use
export interface MiracleImage {
  url: string;
  caption: string;
  credit?: string;
  type: 'historical' | 'modern' | 'scientific' | 'location';
}
