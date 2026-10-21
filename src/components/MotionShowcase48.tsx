import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { MOTION_48_PIECES, AtelierPiece } from '../data/atelierData';

// Restored 48 local high-resolution atelier images
export const MOTION_48_DIRECT_IMAGES: string[] = MOTION_48_PIECES.map(p => p.image);

interface MotionShowcase48Props {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const MotionShowcase48: React.FC<MotionShowcase48Props> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true);

  // Performance optimization: pause continuous animation when offscreen to ensure lag-free 60fps desktop experience
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 24 pieces moving right in upper stream (mot-1 to mot-24)
  // 24 pieces moving left in lower stream (mot-25 to mot-48)
  const upperStream = MOTION_48_PIECES.slice(0, 24);
  const lowerStream = MOTION_48_PIECES.slice(24, 48);

  const renderCard = (piece: AtelierPiece, keySuffix: string) => {
    const saved = isSaved(piece.id);

    return (
      <div
        key={`${piece.id}-${keySuffix}`}
        onClick={() => onSelectPiece(piece, 'summary')}
        className="w-40 sm:w-52 md:w-60 lg:w-64 shrink-0 group cursor-pointer flex flex-col justify-between select-none"
        style={{ contain: 'layout paint' }}
      >
        {/* Photo in vertical rectangular format with rounded corner shapes */}
        <div className="relative aspect-3/4 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 shadow-xs sm:shadow-sm group-hover:shadow-md transition-shadow mb-1.5 sm:mb-2.5">
          <img
            src={piece.image}
            alt={piece.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="eager"
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

          {/* Active Save / Heart option */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(piece.id);
            }}
            className={`absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1 sm:p-1.5 rounded-full backdrop-blur-xs transition-colors shadow-xs z-10 cursor-pointer ${
              saved
                ? 'bg-white text-rose-600'
                : 'bg-white/85 text-slate-400 hover:text-rose-500 hover:bg-white'
            }`}
            title={saved ? 'Saved' : 'Save Piece'}
          >
            <Heart className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${saved ? 'fill-rose-500 stroke-rose-500' : ''}`} />
          </button>

          {/* Category Tag */}
          <span className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[8px] sm:text-[9px] tracking-wider uppercase px-1.5 sm:px-2 py-0.5 rounded font-medium">
            {piece.category}
          </span>
        </div>

        {/* Card Title & Price */}
        <div className="pt-0.5 sm:pt-1 flex items-baseline justify-between gap-2">
          <h4 className="text-[11px] sm:text-sm font-serif font-normal text-slate-900 tracking-wide line-clamp-1 group-hover:text-[#B5925A] transition-colors">
            {piece.title}
          </h4>

          <div className="text-[10px] sm:text-xs font-semibold text-[#B5925A] shrink-0 tabular-nums">
            {piece.price}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="motion-showcase"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-4">
          ATELIER HIGHLIGHTS IN MOTION
        </h2>
        <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
          Dual-directional continuous stream animation with vertical rectangular cards: upper cards moving right, lower cards moving left. Click any piece to open full reservation and details inside the popup.
        </p>
      </div>

      <div className="w-full relative space-y-8">
        {/* ROW 1: 24 Cards Moving Right */}
        <div className="overflow-hidden relative w-full isolate contain-paint">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5 px-6 flex items-center gap-2">
            <span>Upper Stream</span>
            <span className="text-[#C8A97E]">→</span>
            <span>24 Pieces Moving Right</span>
          </div>
          <div
            className="animate-marquee-right flex gap-4 sm:gap-4.5"
            style={{ animationPlayState: isInView ? 'running' : 'paused' }}
          >
            {[...upperStream, ...upperStream].map((piece, i) => renderCard(piece, `right-${i}`))}
          </div>
        </div>

        {/* ROW 2: 24 Cards Moving Left */}
        <div className="overflow-hidden relative w-full isolate contain-paint">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5 px-6 flex items-center gap-2">
            <span>Lower Stream</span>
            <span className="text-[#C8A97E]">←</span>
            <span>24 Pieces Moving Left</span>
          </div>
          <div
            className="animate-marquee-left flex gap-4 sm:gap-4.5"
            style={{ animationPlayState: isInView ? 'running' : 'paused' }}
          >
            {[...lowerStream, ...lowerStream].map((piece, i) => renderCard(piece, `left-${i}`))}
          </div>
        </div>

      </div>
    </section>
  );
};
