import React, { useRef } from 'react';
import { Heart } from 'lucide-react';
import { ARCHIVE_22_PIECES, AtelierPiece } from '../data/atelierData';

interface AtelierArchive22Props {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const AtelierArchive22: React.FC<AtelierArchive22Props> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(true);

  // Pause offscreen marquee on desktop to eliminate lag/freezing
  React.useEffect(() => {
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

  return (
    <section
      id="atelier-archive"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F4F6F9] border-b border-slate-200/80 overflow-hidden"
    >
      
      {/* Center-aligned Section Header & Description */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-3">
          22-PIECE ATELIER ARCHIVE
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed text-center">
          A continuous visual exploration of 22 singular diamond masterworks, solitaire rings, choker collars, and woven platinum bracelets.
        </p>
      </div>

      {/* Smooth Continuous Sliding Animation Track */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar relative w-full cursor-grab active:cursor-grabbing pb-4 isolate contain-paint"
      >
        <div
          className="animate-marquee flex gap-4 sm:gap-4.5 px-4 sm:px-6"
          style={{ animationPlayState: isInView ? 'running' : 'paused' }}
        >
          {/* Double array to create seamless infinite loop */}
          {[...ARCHIVE_22_PIECES, ...ARCHIVE_22_PIECES].map((piece, index) => {
            const saved = isSaved(piece.id);
            return (
              <div
                key={`${piece.id}-${index}`}
                onClick={() => onSelectPiece(piece, 'summary')}
                className="w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 group cursor-pointer flex flex-col justify-between"
                style={{ contain: 'layout paint' }}
              >
                {/* Rounded Corner Image Box - compact proportions on mobile */}
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 shadow-xs sm:shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />

                  {/* Heart / Save icon button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(piece.id);
                    }}
                    className={`absolute top-2.5 sm:top-3 right-2.5 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs z-10 cursor-pointer ${
                      saved
                        ? 'bg-white text-rose-600'
                        : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'
                    }`}
                    title={saved ? 'Saved' : 'Save Piece'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-rose-500 stroke-rose-500' : ''}`} />
                  </button>

                  <div className="absolute bottom-2 left-2 bg-slate-900/75 backdrop-blur-xs text-[9px] sm:text-[10px] tracking-wider uppercase text-white px-2 sm:px-2.5 py-0.5 rounded-full font-medium">
                    {piece.category}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 sm:pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-serif font-normal text-slate-900 tracking-wide line-clamp-1 group-hover:text-[#B5925A] transition-colors">
                      {piece.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-[#B5925A] mt-0.5 tabular-nums">
                      {piece.price}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-light mt-0.5 sm:mt-1 line-clamp-2 leading-relaxed">
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
