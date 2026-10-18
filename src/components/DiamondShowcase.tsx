import React, { useState } from 'react';
import { Eye, Sun, Sparkles, Layers } from 'lucide-react';

export const DiamondShowcase: React.FC = () => {
  const [activeFacet, setActiveFacet] = useState<'brilliance' | 'dispersion' | 'scintillation' | 'symmetry'>('brilliance');

  const facetDetails = {
    brilliance: {
      title: 'White Light Brilliance',
      description: 'The total amount of bright white light returned to the eye from both external facet reflections and internal light bounces through the diamond’s core.',
      metric: 'Refraction & Total Internal Reflection',
    },
    dispersion: {
      title: 'Spectral Dispersion (Fire)',
      description: 'The natural separation of white light into flashes of rainbow spectral colors as light bends through angled crown facets and prisms.',
      metric: 'Prismatic Color Breakdown',
    },
    scintillation: {
      title: 'Dynamic Scintillation',
      description: 'The lively dance of sparkling flashes and alternating patterns of brightness when the diamond or light source moves.',
      metric: 'Contrast & Sparkle Balance',
    },
    symmetry: {
      title: 'Geometric Symmetry',
      description: 'The exacting precision of facet intersections, table alignment, and proportion that ensures light returns upward rather than leaking through the base.',
      metric: 'Proportion & Angle Harmony',
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/60 relative overflow-hidden">
      {/* Subtle ice blue ambient refraction effect */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-3">
            <span>Visual Exploration</span>
            <span aria-hidden="true" className="text-[#C8A97E]">·</span>
            <span>Optical Physics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-5">
            BRILLIANCE IN EVERY FACET
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            A diamond's visual life is defined by how its cut facets welcome, bend, and release light. Explore the principles that create unforgettable optical brilliance.
          </p>
        </div>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Detailed Image Display */}
          <div className="lg:col-span-7">
            <div className="relative p-3 bg-white border border-slate-200 shadow-sm">
              <div className="aspect-4/3 overflow-hidden bg-slate-50 relative group">
                <img
                  src="/src/assets/images/exceptional_loose_diamond_1792162283943.jpg"
                  alt="Extreme macro study of diamond facet symmetry and optical light refraction"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient highlight overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-slate-200/90 py-1.5 px-3 text-[11px] tracking-wider uppercase text-slate-700 shadow-2xs font-medium">
                  Macro Optical Study
                </div>
              </div>

              <div className="pt-3 pb-1 px-3 flex items-center justify-between text-xs text-slate-500">
                <span>Natural Light Scintillation</span>
                <span>57-Facet Geometric Array</span>
              </div>
            </div>
          </div>

          {/* Interactive Facet Insight Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-xs tracking-[0.18em] uppercase text-[#B5925A] font-semibold block mb-2">
                Light Performance Principles
              </span>
              <h3 className="text-2xl font-serif text-slate-900 font-light mb-3">
                {facetDetails[activeFacet].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                {facetDetails[activeFacet].description}
              </p>
              
              <div className="p-3.5 bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Core Characteristic:</span>
                <span className="font-semibold text-slate-800">{facetDetails[activeFacet].metric}</span>
              </div>
            </div>

            {/* Interactive Selector Tabs */}
            <div className="space-y-2 pt-4 border-t border-slate-200">
              <span className="text-[11px] tracking-wider uppercase text-slate-500 font-medium block mb-2">
                Select Optical Component:
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveFacet('brilliance')}
                  className={`p-3 text-left border transition-all text-xs ${
                    activeFacet === 'brilliance'
                      ? 'bg-white border-slate-800 text-slate-950 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Brilliance</span>
                  </div>
                  <span className="text-[11px] text-slate-500 line-clamp-1">Reflected white light</span>
                </button>

                <button
                  onClick={() => setActiveFacet('dispersion')}
                  className={`p-3 text-left border transition-all text-xs ${
                    activeFacet === 'dispersion'
                      ? 'bg-white border-slate-800 text-slate-950 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Fire (Dispersion)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 line-clamp-1">Spectral rainbow flashes</span>
                </button>

                <button
                  onClick={() => setActiveFacet('scintillation')}
                  className={`p-3 text-left border transition-all text-xs ${
                    activeFacet === 'scintillation'
                      ? 'bg-white border-slate-800 text-slate-950 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-3.5 h-3.5 text-slate-700" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Scintillation</span>
                  </div>
                  <span className="text-[11px] text-slate-500 line-clamp-1">Flashes in motion</span>
                </button>

                <button
                  onClick={() => setActiveFacet('symmetry')}
                  className={`p-3 text-left border transition-all text-xs ${
                    activeFacet === 'symmetry'
                      ? 'bg-white border-slate-800 text-slate-950 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="w-3.5 h-3.5 text-slate-700" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Symmetry</span>
                  </div>
                  <span className="text-[11px] text-slate-500 line-clamp-1">Facet geometry alignment</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
