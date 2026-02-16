import { Miracle } from '@/types/miracle';

export interface CountryData {
  country: string;
  count: number;
  percentage: number;
}

export interface CenturyData {
  century: string;
  count: number;
  miracles: string[];
}

export interface EvidenceQuality {
  quality: 'High' | 'Medium' | 'Low';
  count: number;
  percentage: number;
}

// Group miracles by country
export function getMiraclesByCountry(miracles: Miracle[]): CountryData[] {
  const countryMap = new Map<string, number>();

  miracles.forEach(miracle => {
    const count = countryMap.get(miracle.country) || 0;
    countryMap.set(miracle.country, count + 1);
  });

  const total = miracles.length;
  const data = Array.from(countryMap.entries())
    .map(([country, count]) => ({
      country,
      count,
      percentage: (count / total) * 100
    }))
    .sort((a, b) => b.count - a.count);

  // Group smaller countries into "Others"
  const top10 = data.slice(0, 10);
  const others = data.slice(10);

  if (others.length > 0) {
    const othersCount = others.reduce((sum, item) => sum + item.count, 0);
    top10.push({
      country: 'Others',
      count: othersCount,
      percentage: (othersCount / total) * 100
    });
  }

  return top10;
}

// Group miracles by century
export function getMiraclesByCentury(miracles: Miracle[]): CenturyData[] {
  const centuryMap = new Map<number, string[]>();

  miracles.forEach(miracle => {
    if (!miracle.year) return;

    const century = Math.ceil(miracle.year / 100);
    const miracleList = centuryMap.get(century) || [];
    miracleList.push(miracle.name);
    centuryMap.set(century, miracleList);
  });

  return Array.from(centuryMap.entries())
    .map(([century, miracleNames]) => ({
      century: `${century}th`,
      count: miracleNames.length,
      miracles: miracleNames
    }))
    .sort((a, b) => parseInt(a.century) - parseInt(b.century));
}

// Calculate evidence quality score
export function getEvidenceQuality(miracles: Miracle[]): EvidenceQuality[] {
  let high = 0;
  let medium = 0;
  let low = 0;

  miracles.forEach(miracle => {
    let score = 0;

    // Check for scientific evidence
    if (miracle.scientificEvidence && miracle.scientificEvidence.length > 0) {
      score++;
    }

    // Check for witness testimonies
    if (miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0) {
      score++;
    }

    // Check for images
    if (miracle.images && miracle.images.length > 0) {
      score++;
    }

    if (score >= 3) high++;
    else if (score >= 2) medium++;
    else low++;
  });

  const total = miracles.length;
  return [
    { quality: 'High', count: high, percentage: (high / total) * 100 },
    { quality: 'Medium', count: medium, percentage: (medium / total) * 100 },
    { quality: 'Low', count: low, percentage: (low / total) * 100 }
  ].filter(item => item.count > 0);
}

// Get featured miracles
export function getFeaturedMiracles(miracles: Miracle[]) {
  // Most documented (highest evidence quality)
  const miraclesWithScore = miracles.map(m => {
    let score = 0;
    if (m.scientificEvidence?.length) score += m.scientificEvidence.length;
    if (m.witnessTestimonies?.length) score += m.witnessTestimonies.length;
    if (m.images?.length) score += m.images.length;
    if (m.fullDescription) score += 2;
    return { miracle: m, score };
  });

  const mostDocumented = miraclesWithScore
    .sort((a, b) => b.score - a.score)[0]?.miracle;

  // Oldest
  const oldest = miracles
    .filter(m => m.year)
    .sort((a, b) => (a.year || 0) - (b.year || 0))[0];

  // Most recent
  const mostRecent = miracles
    .filter(m => m.year)
    .sort((a, b) => (b.year || 0) - (a.year || 0))[0];

  // Most witnesses
  const mostWitnesses = miracles
    .filter(m => m.witnessTestimonies?.length)
    .sort((a, b) =>
      (b.witnessTestimonies?.length || 0) - (a.witnessTestimonies?.length || 0)
    )[0];

  return {
    mostDocumented,
    oldest,
    mostRecent,
    mostWitnesses
  };
}
