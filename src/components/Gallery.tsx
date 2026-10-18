import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/jewelleryData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  onOpenEnquiry: (pieceTitle?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenEnquiry }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-3">
            <span>Visual Archive</span>
            <span aria-hidden="true" className="text-[#C8A97E]">·</span>
            <span>Fifth Avenue Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-5">
            LUXURY GALLERY
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            An editorial perspective on diamond jewellery craft, capturing the brilliance, fire, and sculptural forms of fine jewellery.
          </p>
        </div>

        {/* Filter Controls (Allowed functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'rings', label: 'Diamond Rings' },
            { id: 'necklaces', label: 'Necklaces' },
            { id: 'earrings', label: 'Earrings' },
            { id: 'loose', label: 'Loose Diamonds' },
            { id: 'exceptional', label: 'Exceptional Pieces' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-slate-900 text-white font-medium shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative bg-white border border-slate-200 cursor-pointer overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-white/90 text-slate-900 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100">
                <h3 className="text-base font-serif text-slate-900 font-normal tracking-wide group-hover:text-slate-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="bg-[#FAFBFD] border border-slate-200 max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 aspect-4/3 overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#B5925A] font-medium mb-1">
                    Editorial Archive
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 font-light mb-3">
                    {filteredItems[activeLightboxIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {filteredItems[activeLightboxIndex].caption}
                  </p>
                  
                  <div className="p-3 bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                    Archived piece from the Scarselli Fifth Avenue studio showcase.
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const title = filteredItems[activeLightboxIndex].title;
                      setActiveLightboxIndex(null);
                      onOpenEnquiry(title);
                    }}
                    className="w-full py-2.5 px-4 text-xs tracking-[0.15em] uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
                  >
                    Enquire About This Piece
                  </button>

                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <button
                      onClick={() =>
                        setActiveLightboxIndex(
                          (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-950 font-medium py-1 px-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      {activeLightboxIndex + 1} / {filteredItems.length}
                    </span>
                    <button
                      onClick={() =>
                        setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length)
                      }
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-950 font-medium py-1 px-2"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
