import React, { useState } from 'react';
import { ArrowUpRight, X, Sparkles, Check, Phone } from 'lucide-react';
import { COLLECTIONS, CollectionItem, BUSINESS_INFO } from '../data/jewelleryData';

interface CollectionsProps {
  onOpenEnquiry: (categoryTitle?: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onOpenEnquiry }) => {
  const [activeItem, setActiveItem] = useState<CollectionItem | null>(null);

  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#F4F6F9] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-3">
            <span>Curated Showcase</span>
            <span aria-hidden="true" className="text-[#C8A97E]">·</span>
            <span>Signature Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-5">
            SIGNATURE COLLECTIONS
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore our curated diamond jewellery disciplines, each designed to celebrate the extraordinary clarity, fire, and sculptural allure of fine diamonds.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {COLLECTIONS.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[#B5925A] font-medium mb-2">
                    {item.dimensionsOrCut}
                  </div>
                  <h3 className="text-xl font-serif font-normal text-slate-900 tracking-wide mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-6 line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Working Discover Button */}
                <button
                  onClick={() => setActiveItem(item)}
                  className="w-full py-2.5 px-4 text-xs tracking-[0.14em] uppercase font-medium text-slate-800 bg-[#FAFBFD] hover:bg-slate-900 hover:text-white border border-slate-200 transition-all flex items-center justify-center gap-1.5 group-hover:border-slate-900"
                >
                  <span>Discover</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Discover Detail Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-[#FAFBFD] border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xs transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="sm:col-span-5 aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="sm:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#B5925A] font-medium mb-1">
                    Signature Showcase
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 font-light mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 italic">
                    Focus: {activeItem.dimensionsOrCut}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-5">
                    {activeItem.longDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] tracking-wider uppercase font-semibold text-slate-700">
                      Showcase Attributes:
                    </span>
                    <ul className="space-y-1.5">
                      {activeItem.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-[#B5925A] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      const title = activeItem.title;
                      setActiveItem(null);
                      onOpenEnquiry(title);
                    }}
                    className="flex-1 py-2.5 px-4 text-xs tracking-[0.14em] uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
                  >
                    Enquire About {activeItem.title}
                  </button>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs tracking-[0.14em] uppercase font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B5925A]" />
                    Call Us
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
