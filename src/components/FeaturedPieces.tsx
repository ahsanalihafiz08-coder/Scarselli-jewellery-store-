import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { FEATURED_PIECES, AtelierPiece, formatPiecePrice } from '../data/atelierData';

interface FeaturedPieceCardProps {
  piece: AtelierPiece;
  isSaved: boolean;
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  onToggleSave: (id: string) => void;
}

const FeaturedPieceCard: React.FC<FeaturedPieceCardProps> = React.memo(
  ({ piece, isSaved, onSelectPiece, onToggleSave }) => {
    const displayPrice = formatPiecePrice(piece);

    return (
      <div
        onClick={() => onSelectPiece(piece, 'detail')}
        className="group flex flex-col justify-between bg-white border border-slate-200/80 hover:border-slate-400/90 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer h-full"
      >
        {/* Visual Aspect Box */}
        <div
          onClick={() => onSelectPiece(piece, 'detail')}
          className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-100 mb-4 shadow-2xs cursor-pointer"
        >
          <img
            src={piece.image}
            alt={piece.title}
            width={600}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                target.src = `/images/atelier/${piece.id}.jpg`;
              }
            }}
          />

          {/* Wishlist Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(piece.id);
            }}
            className={`absolute top-3 right-3 p-2.5 rounded-full transition-all shadow-xs cursor-pointer z-10 ${
              isSaved
                ? 'bg-white text-rose-600 shadow-sm'
                : 'bg-white/90 hover:bg-white text-slate-500 hover:text-rose-600'
            }`}
            title={isSaved ? 'Saved to Wishlist' : 'Save Piece'}
            aria-label="Save to Wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? 'fill-rose-500 stroke-rose-500 text-rose-500' : ''
              }`}
            />
          </button>

          {/* Subtle Category Marker */}
          <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 text-[11px] tracking-[0.16em] uppercase font-semibold text-white px-2.5 py-1 rounded shadow-xs">
            {piece.category}
          </div>
        </div>

        {/* Information Area */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Title: Un-truncated, allows 2 clean lines */}
            <h3
              onClick={() => onSelectPiece(piece, 'detail')}
              className="text-lg sm:text-xl font-serif text-slate-900 font-normal leading-snug group-hover:text-[#8A682D] transition-colors min-h-[3rem] cursor-pointer"
            >
              {piece.title}
            </h3>

            {/* Description: clean sentence-case */}
            <p className="text-sm text-slate-600 font-light leading-relaxed mt-2 line-clamp-2">
              {piece.description}
            </p>

            {/* 2 Key Specifications */}
            <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium text-slate-800">{piece.specs.carat}</span>
              <span className="text-slate-300">·</span>
              <span>{piece.specs.metal}</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#8A682D] font-semibold">{piece.specs.color}</span>
            </div>

            <div className="mt-1 text-[11px] text-slate-400 font-light italic text-right">
              Specifications confirmed at viewing
            </div>
          </div>

          {/* Price */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Price</div>
              <div className="text-xl sm:text-2xl font-serif font-semibold text-slate-950 tabular-nums">
                {displayPrice}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectPiece(piece, 'detail')}
              className="h-[40px] md:h-auto py-0 md:py-2.5 px-2 md:px-3 rounded-[10px] md:rounded-full border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 text-xs md:text-[11px] uppercase tracking-normal md:tracking-wider font-semibold transition-colors text-center cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              View details
            </button>

            <button
              type="button"
              onClick={() => onSelectPiece(piece, 'booking')}
              className="h-[40px] md:h-auto py-0 md:py-2.5 px-2 md:px-3 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs md:text-[11px] uppercase tracking-normal md:tracking-wider font-semibold transition-colors text-center cursor-pointer shadow-2xs flex items-center justify-center whitespace-nowrap"
            >
              Book private viewing
            </button>
          </div>
        </div>
      </div>
    );
  }
);
FeaturedPieceCard.displayName = 'FeaturedPieceCard';

interface FeaturedPiecesProps {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const FeaturedPieces: React.FC<FeaturedPiecesProps> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive items per page: 1 on mobile, 2 on tablet, 3 on desktop
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // IntersectionObserver to only auto-advance when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(1, FEATURED_PIECES.length - itemsPerPage + 1);

  // Auto advance every 6 seconds if not paused and in view
  useEffect(() => {
    if (isPaused || !isInView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, isInView, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      ref={sectionRef}
      id="featured-pieces"
      className="pt-20 pb-28 sm:pb-36 lg:pb-40 bg-[#FFFFFF] border-b border-slate-200/80 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Fifth Avenue Atelier</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-[1.15]">
              FEATURED PIECES
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mt-3">
              A bespoke edit of our most celebrated master creations, each hand-sculpted in platinum and 18k gold with IGI &amp; GIA certified lab-grown diamonds.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured piece"
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured piece"
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden w-full touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {FEATURED_PIECES.map((piece) => (
              <div
                key={piece.id}
                className="px-2.5 sm:px-3.5 shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <FeaturedPieceCard
                  piece={piece}
                  isSaved={isSaved(piece.id)}
                  onSelectPiece={onSelectPiece}
                  onToggleSave={onToggleSave}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-slate-900'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
