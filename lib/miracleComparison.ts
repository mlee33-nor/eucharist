import { Miracle } from '@/types/miracle';
import { hasBloodType, hasDNAEvidence, hasTissueAnalysis } from './evidenceFilters';

export interface ComparisonRow {
  label: string;
  category: 'basic' | 'evidence' | 'witness' | 'church';
  values: (string | number | boolean | null)[];
  isMatch?: boolean[];
}

export function compareMiracles(miracles: Miracle[]): ComparisonRow[] {
  const rows: ComparisonRow[] = [];

  // Basic Info
  rows.push({
    label: 'Name',
    category: 'basic',
    values: miracles.map(m => m.name)
  });

  rows.push({
    label: 'Location',
    category: 'basic',
    values: miracles.map(m => `${m.city}, ${m.country}`)
  });

  rows.push({
    label: 'Year',
    category: 'basic',
    values: miracles.map(m => m.year || 'Unknown'),
    isMatch: miracles.map((m, i) =>
      miracles.every(other => other.year === m.year)
    )
  });

  rows.push({
    label: 'Century',
    category: 'basic',
    values: miracles.map(m =>
      m.year ? `${Math.ceil(m.year / 100)}th` : 'Unknown'
    ),
    isMatch: miracles.map((m, i) => {
      const century = m.year ? Math.ceil(m.year / 100) : null;
      return miracles.every(other => {
        const otherCentury = other.year ? Math.ceil(other.year / 100) : null;
        return century === otherCentury;
      });
    })
  });

  rows.push({
    label: 'Country',
    category: 'basic',
    values: miracles.map(m => m.country),
    isMatch: miracles.map((m, i) =>
      miracles.every(other => other.country === m.country)
    )
  });

  // Evidence
  rows.push({
    label: 'DNA Evidence',
    category: 'evidence',
    values: miracles.map(m => hasDNAEvidence(m) ? 'Yes' : 'No'),
    isMatch: miracles.map((m, i) => {
      const has = hasDNAEvidence(m);
      return miracles.every(other => hasDNAEvidence(other) === has);
    })
  });

  rows.push({
    label: 'Tissue Analysis',
    category: 'evidence',
    values: miracles.map(m => hasTissueAnalysis(m) ? 'Yes' : 'No'),
    isMatch: miracles.map((m, i) => {
      const has = hasTissueAnalysis(m);
      return miracles.every(other => hasTissueAnalysis(other) === has);
    })
  });

  rows.push({
    label: 'Blood Type',
    category: 'evidence',
    values: miracles.map(m => {
      const evidence = m.scientificEvidence || [];
      const bloodEvidence = evidence.find(e =>
        e.toLowerCase().includes('ab') ||
        e.toLowerCase().includes('blood type')
      );
      if (bloodEvidence) {
        if (bloodEvidence.toLowerCase().includes('ab+') ||
            bloodEvidence.toLowerCase().includes('ab positive')) {
          return 'AB+';
        }
        return 'Analyzed';
      }
      return 'Not tested';
    }),
    isMatch: miracles.map((m, i, arr) => {
      const val = arr.map(miracle => {
        const evidence = miracle.scientificEvidence || [];
        return evidence.find(e =>
          e.toLowerCase().includes('ab+') ||
          e.toLowerCase().includes('ab positive')
        );
      });
      const allABPositive = val.every(v => v !== undefined);
      return allABPositive;
    })
  });

  rows.push({
    label: 'Photographs',
    category: 'evidence',
    values: miracles.map(m =>
      m.images && m.images.length > 0 ? `Yes (${m.images.length})` : 'No'
    )
  });

  // Witnesses
  rows.push({
    label: 'Witness Testimonies',
    category: 'witness',
    values: miracles.map(m =>
      m.witnessTestimonies && m.witnessTestimonies.length > 0
        ? `${m.witnessTestimonies.length} testimonies`
        : 'None documented'
    )
  });

  // Church Info
  rows.push({
    label: 'Church Name',
    category: 'church',
    values: miracles.map(m => m.churchInfo?.name || 'Not specified')
  });

  rows.push({
    label: 'Visiting Hours',
    category: 'church',
    values: miracles.map(m => m.churchInfo?.visitingHours || 'Contact church')
  });

  return rows;
}

export function calculateSimilarity(miracle1: Miracle, miracle2: Miracle): number {
  let matches = 0;
  let total = 0;

  // Same century?
  if (miracle1.year && miracle2.year) {
    total++;
    const century1 = Math.ceil(miracle1.year / 100);
    const century2 = Math.ceil(miracle2.year / 100);
    if (century1 === century2) matches++;
  }

  // Same country?
  total++;
  if (miracle1.country === miracle2.country) matches++;

  // Both have DNA evidence?
  total++;
  if (hasDNAEvidence(miracle1) && hasDNAEvidence(miracle2)) matches++;

  // Both have tissue analysis?
  total++;
  if (hasTissueAnalysis(miracle1) && hasTissueAnalysis(miracle2)) matches++;

  // Both have blood type?
  total++;
  if (hasBloodType(miracle1) && hasBloodType(miracle2)) matches++;

  // Both have images?
  total++;
  const hasImages1 = miracle1.images && miracle1.images.length > 0;
  const hasImages2 = miracle2.images && miracle2.images.length > 0;
  if (hasImages1 && hasImages2) matches++;

  return total > 0 ? (matches / total) * 100 : 0;
}
