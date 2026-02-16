import { Miracle } from '@/types/miracle';

export interface EvidenceFilters {
  hasDNA: boolean;
  hasTissue: boolean;
  hasBlood: boolean;
  hasPhotos: boolean;
  hasWitnesses: boolean;
  hasPublications: boolean;
  centuryRange: [number, number];
  countries: string[];
}

export const defaultFilters: EvidenceFilters = {
  hasDNA: false,
  hasTissue: false,
  hasBlood: false,
  hasPhotos: false,
  hasWitnesses: false,
  hasPublications: false,
  centuryRange: [8, 21],
  countries: []
};

// Check if miracle has DNA evidence
export const hasDNAEvidence = (miracle: Miracle): boolean => {
  return miracle.scientificEvidence?.some(e =>
    e.toLowerCase().includes('dna') ||
    e.toLowerCase().includes('genetic')
  ) || false;
};

// Check if miracle has tissue analysis
export const hasTissueAnalysis = (miracle: Miracle): boolean => {
  return miracle.scientificEvidence?.some(e =>
    e.toLowerCase().includes('tissue') ||
    e.toLowerCase().includes('cardiac') ||
    e.toLowerCase().includes('heart') ||
    e.toLowerCase().includes('muscle')
  ) || false;
};

// Check if miracle has blood type identification
export const hasBloodType = (miracle: Miracle): boolean => {
  return miracle.scientificEvidence?.some(e =>
    e.toLowerCase().includes('blood') ||
    e.toLowerCase().includes('ab+') ||
    e.toLowerCase().includes('ab positive')
  ) || false;
};

// Check if miracle has photographs
export const hasPhotographs = (miracle: Miracle): boolean => {
  return miracle.images !== undefined && miracle.images.length > 0;
};

// Check if miracle has witness testimonies
export const hasWitnessTestimonies = (miracle: Miracle): boolean => {
  return miracle.witnessTestimonies !== undefined &&
    miracle.witnessTestimonies.length > 0;
};

// Check if miracle has scientific publications
export const hasPublications = (miracle: Miracle): boolean => {
  return miracle.scientificEvidence !== undefined &&
    miracle.scientificEvidence.length > 0;
};

// Calculate evidence quality score (0-6)
export const calculateEvidenceScore = (miracle: Miracle): number => {
  let score = 0;
  if (hasDNAEvidence(miracle)) score++;
  if (hasTissueAnalysis(miracle)) score++;
  if (hasBloodType(miracle)) score++;
  if (hasPhotographs(miracle)) score++;
  if (hasWitnessTestimonies(miracle)) score++;
  if (hasPublications(miracle)) score++;
  return score;
};

// Apply filters to miracles
export const applyFilters = (
  miracles: Miracle[],
  filters: EvidenceFilters
): Miracle[] => {
  return miracles.filter(miracle => {
    // DNA filter
    if (filters.hasDNA && !hasDNAEvidence(miracle)) return false;

    // Tissue filter
    if (filters.hasTissue && !hasTissueAnalysis(miracle)) return false;

    // Blood filter
    if (filters.hasBlood && !hasBloodType(miracle)) return false;

    // Photos filter
    if (filters.hasPhotos && !hasPhotographs(miracle)) return false;

    // Witnesses filter
    if (filters.hasWitnesses && !hasWitnessTestimonies(miracle)) return false;

    // Publications filter
    if (filters.hasPublications && !hasPublications(miracle)) return false;

    // Century range filter
    if (miracle.year) {
      const century = Math.ceil(miracle.year / 100);
      if (century < filters.centuryRange[0] || century > filters.centuryRange[1]) {
        return false;
      }
    }

    // Country filter
    if (filters.countries.length > 0 &&
        !filters.countries.includes(miracle.country)) {
      return false;
    }

    return true;
  });
};

// Get unique countries from miracles
export const getUniqueCountries = (miracles: Miracle[]): string[] => {
  const countries = new Set(miracles.map(m => m.country));
  return Array.from(countries).sort();
};
