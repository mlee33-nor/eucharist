'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Miracle } from '@/types/miracle';
import EvidenceTimeline from '@/components/dossier/EvidenceTimeline';
import {
  ArrowLeft, MapPin, Calendar, Globe2, Church, Clock,
  Share2, Download, Scale, ExternalLink, Users,
  FlaskConical, FileText, Image as ImageIcon, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MiraclePage() {
  const params = useParams();
  const router = useRouter();
  const [miracle, setMiracle] = useState<Miracle | null>(null);
  const [relatedMiracles, setRelatedMiracles] = useState<Miracle[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'story' | 'evidence' | 'timeline' | 'witnesses' | 'visit'>('overview');

  useEffect(() => {
    // Load miracle data
    fetch('/miracles.json')
      .then(res => res.json())
      .then((miracles: Miracle[]) => {
        const found = miracles.find(m => m.id === params.id);
        if (found) {
          setMiracle(found);

          // Find related miracles (same country or century)
          const century = found.year ? Math.ceil(found.year / 100) : null;
          const related = miracles
            .filter(m =>
              m.id !== found.id &&
              (m.country === found.country ||
               (m.year && century && Math.ceil(m.year / 100) === century))
            )
            .slice(0, 3);
          setRelatedMiracles(related);
        }
      })
      .catch(console.error);
  }, [params.id]);

  if (!miracle) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading...</div>
      </div>
    );
  }

  const century = miracle.year ? Math.ceil(miracle.year / 100) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-950/10 to-black">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-amber-100/80 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Globe</span>
            </button>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors text-amber-100/80 hover:text-amber-400">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors text-amber-100/80 hover:text-amber-400">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <nav className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4">
                {[
                  { id: 'overview', label: 'Overview', icon: FileText },
                  { id: 'story', label: 'The Story', icon: FileText },
                  { id: 'evidence', label: 'Evidence', icon: FlaskConical },
                  { id: 'timeline', label: 'Timeline', icon: Calendar },
                  { id: 'witnesses', label: 'Witnesses', icon: Users },
                  { id: 'visit', label: 'Visit', icon: Church }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-left',
                      activeTab === id
                        ? 'bg-amber-500/20 text-amber-300 border-l-4 border-amber-500'
                        : 'text-amber-100/60 hover:bg-amber-500/10 hover:text-amber-100'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </nav>

              {/* Related Miracles */}
              {relatedMiracles.length > 0 && (
                <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 mt-4">
                  <h3 className="text-sm font-semibold text-amber-300 mb-3 uppercase tracking-wide">
                    Related Miracles
                  </h3>
                  <div className="space-y-2">
                    {relatedMiracles.map(related => (
                      <button
                        key={related.id}
                        onClick={() => router.push(`/miracle/${related.id}`)}
                        className="w-full text-left p-2 rounded-lg hover:bg-amber-500/10 transition-colors group"
                      >
                        <p className="text-sm text-amber-300 group-hover:text-amber-400 font-medium">
                          {related.name}
                        </p>
                        <p className="text-xs text-amber-100/40">
                          {related.city}, {related.country}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="relative">
              {/* Hero Image - Hidden until images are uploaded */}
              {false && miracle.images && miracle.images.length > 0 && (
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/40 border border-amber-500/20 mb-6">
                  <img
                    src={miracle.images[0]}
                    alt={miracle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Title & Meta */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
                  {miracle.name}
                </h1>

                <div className="flex flex-wrap gap-4 text-amber-100/80 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span>{miracle.city}, {miracle.country}</span>
                  </div>
                  {miracle.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-amber-500" />
                      <span>{miracle.year} AD</span>
                    </div>
                  )}
                  {century && (
                    <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-sm">
                      {century}th Century
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Facts */}
                <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-amber-300 mb-4">Quick Facts</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-amber-100/60 mb-1">Location</p>
                      <p className="text-amber-100 font-medium">{miracle.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-100/60 mb-1">Country</p>
                      <p className="text-amber-100 font-medium">{miracle.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-100/60 mb-1">Year</p>
                      <p className="text-amber-100 font-medium">{miracle.year || 'Unknown'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-100/60 mb-1">Scientific Evidence</p>
                      <p className="text-amber-100 font-medium">
                        {miracle.scientificEvidence?.length || 0} findings
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-100/60 mb-1">Witnesses</p>
                      <p className="text-amber-100 font-medium">
                        {miracle.witnessTestimonies?.length || 0} testimonies
                      </p>
                    </div>
                    {/* Images count - Hidden until images are uploaded */}
                    {false && (
                      <div>
                        <p className="text-sm text-amber-100/60 mb-1">Images</p>
                        <p className="text-amber-100 font-medium">
                          {miracle.images?.length || 0} photos
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {miracle.description && (
                  <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-amber-300 mb-4">Overview</h2>
                    <p className="text-amber-100/80 leading-relaxed">
                      {miracle.description}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'story' && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">The Complete Story</h2>
                {miracle.fullDescription ? (
                  <div className="prose prose-amber max-w-none">
                    <p className="text-amber-100/80 leading-relaxed whitespace-pre-wrap">
                      {miracle.fullDescription}
                    </p>
                  </div>
                ) : (
                  <p className="text-amber-100/60 italic">
                    Full story not yet available. Check back soon for complete details.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'evidence' && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <FlaskConical className="w-6 h-6" />
                  Scientific Evidence
                </h2>
                {miracle.scientificEvidence && miracle.scientificEvidence.length > 0 ? (
                  <ul className="space-y-3">
                    {miracle.scientificEvidence.map((evidence, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                      >
                        <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-100/80">{evidence}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-amber-100/60 italic">
                    No scientific evidence documented yet.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-6">Historical Timeline</h2>
                <EvidenceTimeline miracle={miracle} />
              </div>
            )}

            {activeTab === 'witnesses' && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Witness Testimonies
                </h2>
                {miracle.witnessTestimonies && miracle.witnessTestimonies.length > 0 ? (
                  <div className="space-y-4">
                    {miracle.witnessTestimonies.map((witness, index) => (
                      <div
                        key={index}
                        className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-amber-300">
                              {witness.name}
                            </h4>
                            <p className="text-sm text-amber-100/60">{witness.role}</p>
                          </div>
                        </div>
                        <p className="text-amber-100/80 italic">"{witness.testimony}"</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-amber-100/60 italic">
                    No witness testimonies documented yet.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'visit' && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <Church className="w-6 h-6" />
                  Visit Information
                </h2>
                {miracle.churchInfo ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-200 mb-1">Church Name</h4>
                      <p className="text-amber-100/80">{miracle.churchInfo.name}</p>
                    </div>
                    {miracle.churchInfo.address && (
                      <div>
                        <h4 className="text-sm font-semibold text-amber-200 mb-1">Address</h4>
                        <p className="text-amber-100/80">{miracle.churchInfo.address}</p>
                      </div>
                    )}
                    {miracle.churchInfo.visitingHours && (
                      <div>
                        <h4 className="text-sm font-semibold text-amber-200 mb-1 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Visiting Hours
                        </h4>
                        <p className="text-amber-100/80">{miracle.churchInfo.visitingHours}</p>
                      </div>
                    )}
                    {miracle.churchInfo.website && (
                      <div>
                        <a
                          href={miracle.churchInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <Globe2 className="w-4 h-4" />
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-amber-100/60 italic">
                    Visiting information not yet available. Please contact the local diocese for details.
                  </p>
                )}
              </div>
            )}

            {/* Image Gallery - Hidden until images are uploaded */}
            {false && miracle.images && miracle.images.length > 1 && (
              <div className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {miracle.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden bg-black/40 border border-amber-500/20 hover:border-amber-500/60 transition-all cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${miracle.name} - Image ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
