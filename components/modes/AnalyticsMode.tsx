'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  getMiraclesByCountry,
  getMiraclesByCentury,
  getEvidenceQuality,
  getFeaturedMiracles
} from '@/lib/analyticsHelpers';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

interface AnalyticsModeProps {
  miracles: Miracle[];
}

const COLORS = [
  '#fbbf24', // gold
  '#60a5fa', // blue
  '#34d399', // green
  '#f472b6', // pink
  '#a78bfa', // purple
  '#fb923c', // orange
  '#2dd4bf', // teal
  '#f87171', // red
  '#818cf8', // indigo
  '#4ade80', // light green
  '#facc15', // yellow
];

export default function AnalyticsMode({ miracles }: AnalyticsModeProps) {
  const router = useRouter();
  const countryData = useMemo(() => getMiraclesByCountry(miracles), [miracles]);
  const centuryData = useMemo(() => getMiraclesByCentury(miracles), [miracles]);
  const evidenceData = useMemo(() => getEvidenceQuality(miracles), [miracles]);
  const featured = useMemo(() => getFeaturedMiracles(miracles), [miracles]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-amber-950/10 to-black p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
          📊 Analytics Dashboard
        </h1>
        <p className="text-amber-100/60 mb-8">
          Comprehensive analysis of {miracles.length} documented Eucharistic miracles
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Miracles by Country - Pie Chart */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              Miracles by Country
            </h3>
            <div style={{ outline: 'none' }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart style={{ outline: 'none' }}>
                  <Pie
                    data={countryData}
                    dataKey="count"
                    nameKey="country"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry: any) => `${entry.country}: ${entry.count}`}
                    isAnimationActive={false}
                    style={{ outline: 'none', cursor: 'default' }}
                  >
                    {countryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ outline: 'none' }} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                      borderRadius: '8px',
                      color: '#fbbf24'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Miracles by Century - Bar Chart */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              Miracles by Century
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={centuryData}>
                <XAxis
                  dataKey="century"
                  tick={{ fill: '#fde68a' }}
                  stroke="#fbbf24"
                />
                <YAxis
                  tick={{ fill: '#fde68a' }}
                  stroke="#fbbf24"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(251, 191, 36, 0.2)',
                    borderRadius: '8px',
                    color: '#fbbf24'
                  }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-black/90 border border-amber-500/20 rounded-lg p-3">
                          <p className="text-amber-400 font-semibold">{data.century} Century</p>
                          <p className="text-amber-100">Count: {data.count}</p>
                          <p className="text-amber-100/60 text-sm mt-1">
                            Examples: {data.miracles.slice(0, 2).join(', ')}
                            {data.miracles.length > 2 && '...'}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="count" fill="#fbbf24" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Evidence Quality Distribution */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              Evidence Quality Distribution
            </h3>
            <div style={{ outline: 'none' }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart style={{ outline: 'none' }}>
                  <Pie
                    data={evidenceData}
                    dataKey="count"
                    nameKey="quality"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    label={(entry: any) => `${entry.quality}: ${entry.count}`}
                    isAnimationActive={false}
                    style={{ outline: 'none', cursor: 'default' }}
                  >
                    {evidenceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.quality === 'High'
                            ? '#22c55e'
                            : entry.quality === 'Medium'
                            ? '#fbbf24'
                            : '#ef4444'
                        }
                        style={{ outline: 'none' }}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                      borderRadius: '8px',
                      color: '#fbbf24'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-amber-100/60">
              <p>• High: Scientific evidence + testimonies</p>
              <p>• Medium: One of the above</p>
              <p>• Low: Neither</p>
            </div>
          </div>

          {/* Featured Miracles Cards */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              Featured Miracles
            </h3>
            <div className="space-y-3">
              {featured.oldest && (
                <div
                  onClick={() => router.push(`/miracle/${featured.oldest!.id}`)}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-400 mt-1" />
                    <div>
                      <p className="text-amber-300 font-medium">Oldest</p>
                      <p className="text-amber-100">{featured.oldest.name}</p>
                      <p className="text-amber-100/60 text-sm">
                        {featured.oldest.year} AD
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {featured.mostRecent && (
                <div
                  onClick={() => router.push(`/miracle/${featured.mostRecent!.id}`)}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-400 mt-1" />
                    <div>
                      <p className="text-amber-300 font-medium">Most Recent</p>
                      <p className="text-amber-100">{featured.mostRecent.name}</p>
                      <p className="text-amber-100/60 text-sm">
                        {featured.mostRecent.year}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {featured.mostDocumented && (
                <div
                  onClick={() => router.push(`/miracle/${featured.mostDocumented!.id}`)}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 mt-1" />
                    <div>
                      <p className="text-amber-300 font-medium">Most Documented</p>
                      <p className="text-amber-100">{featured.mostDocumented.name}</p>
                      <p className="text-amber-100/60 text-sm">
                        {featured.mostDocumented.city}, {featured.mostDocumented.country}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {featured.mostWitnesses && (
                <div
                  onClick={() => router.push(`/miracle/${featured.mostWitnesses!.id}`)}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 hover:bg-amber-500/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-400 mt-1" />
                    <div>
                      <p className="text-amber-300 font-medium">Most Witnesses</p>
                      <p className="text-amber-100">{featured.mostWitnesses.name}</p>
                      <p className="text-amber-100/60 text-sm">
                        {featured.mostWitnesses.witnessTestimonies?.length} testimonies
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">{miracles.length}</p>
            <p className="text-amber-100/60 text-sm mt-1">Total Miracles</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">{countryData.length - 1}</p>
            <p className="text-amber-100/60 text-sm mt-1">Countries</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">{centuryData.length}</p>
            <p className="text-amber-100/60 text-sm mt-1">Centuries</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">
              {evidenceData.find(e => e.quality === 'High')?.count || 0}
            </p>
            <p className="text-amber-100/60 text-sm mt-1">High Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}
