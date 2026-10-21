import React from 'react';
import { Heart } from 'lucide-react';
import { SUITES_9_PIECES, AtelierPiece } from '../data/atelierData';

interface CuratedSuites9Props {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const CuratedSuites9: React.FC<CuratedSuites9Props> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
}) => {
  return (
    <section id="curated-suites" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-4">
            CURATED SUITES & TIMEPIECES
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            A 9-piece collection of diamond anklets, suspended solitaire rings, and pavé watch bezels. Click any piece to view details and reservation options in the boutique popup.
          </p>
        </div>

        {/* Exactly 3 Cards per Single Line, placed closely together */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
          {SUITES_9_PIECES.map((piece) => {
            const saved = isSaved(piece.id);

            return (
              <div
                key={piece.id}
                onClick={() => onSelectPiece(piece, 'detail')}
                className="flex flex-col justify-between group cursor-pointer transition-all duration-300 p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-md"
              >
                {/* Rounded Corner Image Frame - compact proportions on mobile */}
                <div className="relative aspect-16/10 sm:aspect-4/3 overflow-hidden rounded-xl bg-slate-100 mb-2 sm:mb-3 shadow-2xs">
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
                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[10px] tracking-[0.16em] uppercase font-semibold text-slate-700 px-2 py-0.5 rounded shadow-2xs">
                    {piece.category}
                  </span>

                  {/* Active Save / Heart Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(piece.id);
                    }}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-xs transition-colors shadow-xs z-10 cursor-pointer ${
                      saved
                        ? 'bg-white text-rose-600'
                        : 'bg-white/85 text-slate-400 hover:text-rose-500 hover:bg-white'
                    }`}
                    title={saved ? 'Remove from Saved' : 'Save Piece'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-rose-500 stroke-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between px-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-serif font-normal text-slate-900 tracking-wide mb-1 group-hover:text-[#B5925A] transition-colors line-clamp-1">
                      {piece.title}
                    </h3>
                    
                    <div className="text-xs sm:text-sm font-serif font-semibold text-[#B5925A] mb-1 tabular-nums">
                      {piece.price}
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                      {piece.description}
                    </p>
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
