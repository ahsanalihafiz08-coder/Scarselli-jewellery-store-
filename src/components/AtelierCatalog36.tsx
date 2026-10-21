import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { CATALOG_36_PIECES, AtelierPiece } from '../data/atelierData';

interface AtelierCatalog36Props {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const AtelierCatalog36: React.FC<AtelierCatalog36Props> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');

  const categories = [
    'All Works',
    'Diamond Rings',
    'Necklaces',
    'Earrings',
    'Loose Diamonds',
    'Exceptional Pieces',
  ];

  const filteredPieces = activeCategory === 'All Works'
    ? CATALOG_36_PIECES
    : CATALOG_36_PIECES.filter((p) => p.category === activeCategory);

  return (
    <section id="atelier-catalog" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/80 section-auto-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-4">
            ATELIER CATALOG
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore 36 master creations spanning rare fancy-colored diamonds, Asscher cuts, diamond choker collars, and timeless engagement rings. Click any piece to open reservation and details in the boutique popup.
          </p>
        </div>

        {/* Top Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium transition-all cursor-pointer rounded-full ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 36 Cards Grid - Exactly 3 cards per single line, placed closely together */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
          {filteredPieces.map((piece) => {
            const saved = isSaved(piece.id);

            return (
              <div
                key={piece.id}
                onClick={() => onSelectPiece(piece, 'detail')}
                className="flex flex-col justify-between group cursor-pointer transition-all duration-300 p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-md"
              >
                {/* Rounded Corner Image Frame */}
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-100 mb-3 shadow-2xs">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = `/images/atelier/${piece.id}.jpg`;
                      }
                    }}
                  />

                  {/* Category Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] tracking-[0.16em] uppercase font-semibold text-slate-700 px-2 py-0.5 rounded shadow-2xs">
                    {piece.category}
                  </div>

                  {/* Active Save / Heart Option */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(piece.id);
                    }}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-xs transition-colors shadow-xs z-10 cursor-pointer ${
                      saved
                        ? 'bg-white text-rose-600'
                        : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'
                    }`}
                    title={saved ? 'Remove from Saved' : 'Save Item'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-rose-500 stroke-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col justify-between px-1">
                  <div>
                    <h3 className="text-base font-serif font-normal text-slate-900 tracking-wide mb-1 group-hover:text-[#B5925A] transition-colors line-clamp-1">
                      {piece.title}
                    </h3>
                    <div className="text-sm font-serif font-semibold text-[#B5925A] mb-1.5 tabular-nums">
                      {piece.price}
                    </div>
                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                      {piece.description}
                    </p>
                  </div>

                  {/* Correct Action Buttons appearing outside popup content: View Details & Booking View */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPiece(piece, 'detail');
                      }}
                      className="flex-1 py-2 px-2 text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-800 transition-all cursor-pointer shadow-2xs text-center"
                    >
                      View Details
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPiece(piece, 'booking');
                      }}
                      className="flex-1 py-2 px-2 text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold rounded-full bg-slate-900 hover:bg-[#B5925A] text-white transition-all cursor-pointer shadow-2xs text-center"
                    >
                      Booking View
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
