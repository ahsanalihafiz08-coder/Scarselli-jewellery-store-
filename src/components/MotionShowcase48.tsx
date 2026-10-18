import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { MOTION_48_PIECES, AtelierPiece } from '../data/atelierData';

// Provided 48 direct image URLs specifically embedded for continuous animation streams
export const MOTION_48_DIRECT_IMAGES: string[] = [
  'https://i.ibb.co/Fbb82JQ9/Diamond-pendant-on-silk-surface-20261016212947.jpg',
  'https://i.ibb.co/RkBypqTq/Diamond-ring-on-silk-20261016212944.jpg',
  'https://i.ibb.co/B54xNZ43/Yellow-diamond-on-display-block-20261016212950.jpg',
  'https://i.ibb.co/tT2crBgG/Diamond-constellation-necklace-o-20261016213400.jpg',
  'https://i.ibb.co/DfRzz9bD/Engagement-ring-on-ceramic-plate-20261016213403.jpg',
  'https://i.ibb.co/9m03Bfpx/Diamond-ring-on-ceramic-plate-20261016213406.jpg',
  'https://i.ibb.co/vC9THs04/Diamond-cocktail-ring-on-fabric-20261016213414.jpg',
  'https://i.ibb.co/WWWTnfSz/Ring-resting-on-display-block-20261016213417.jpg',
  'https://i.ibb.co/67gbvsvT/Open-finger-ring-on-display-block-20261016213419.jpg',
  'https://i.ibb.co/5gK5SxpB/Diamond-necklace-draped-on-bust-20261016213424.jpg',
  'https://i.ibb.co/vCJXF09D/Diamond-lariat-necklace-on-bust-20261016213426.jpg',
  'https://i.ibb.co/CKRjJhVc/Diamond-sliding-on-platinum-chain-20261016213432.jpg',
  'https://i.ibb.co/qYrbTSfq/Cluster-ring-with-scattered-diam-20261016213434.jpg',
  'https://i.ibb.co/cKx0zWF2/Diamond-band-ring-on-background-20261016213438.jpg',
  'https://i.ibb.co/ZzBxsbkn/Diamond-hoop-earrings-on-silk-20261016213443.jpg',
  'https://i.ibb.co/Qvpb5PjR/Green-diamond-cocktail-ring-20261016212554.jpg',
  'https://i.ibb.co/6JDJMtx5/Platinum-necklace-with-diamond-p-20261016212558.jpg',
  'https://i.ibb.co/fzVVHkWV/Yellow-diamond-on-ceramic-stand-20261016212600.jpg',
  'https://i.ibb.co/S9R9K0c/Drop-earrings-with-diamonds-20261016212604.jpg',
  'https://i.ibb.co/Myd4Fbkx/Diamond-drop-earrings-on-satin-20261016212605.jpg',
  'https://i.ibb.co/jkHcCYnY/Diamond-engagement-ring-resting-20261016212607.jpg',
  'https://i.ibb.co/5hq4NqDv/Diamond-engagement-ring-resting-20261016212609.jpg',
  'https://i.ibb.co/Z6QW4k0g/Raw-fancy-color-diamond-cluster-20261016212613.jpg',
  'https://i.ibb.co/N2bySc11/Raw-fancy-color-diamond-cluster-20261016212615.jpg',
  'https://i.ibb.co/BKr9vtxz/Platinum-diamond-bangle-bracelet-20261016212619.jpg',
  'https://i.ibb.co/Ndp5V7Jq/Sapphire-ring-with-accent-diamonds-20261016212630.jpg',
  'https://i.ibb.co/Lz8pLjQ7/Diamond-necklace-on-display-block-20261016212647.jpg',
  'https://i.ibb.co/xx7fD8H/Pink-diamond-ring-on-tile-20261016212650.jpg',
  'https://i.ibb.co/21D2nL0z/Collection-of-colored-diamonds-20261016212655.jpg',
  'https://i.ibb.co/PzMJd1q5/Diamond-drop-earrings-on-surface-20261016212939.jpg',
  'https://i.ibb.co/dJ1ZrKLL/Bypass-ring-holding-two-diamonds-20261016212449.jpg',
  'https://i.ibb.co/Y45ppKwp/Bypass-ring-with-two-diamonds-20261016212453.jpg',
  'https://i.ibb.co/d0jKs4HZ/Diamond-drop-earrings-on-stand-20261016212455.jpg',
  'https://i.ibb.co/JFCzfWch/Diamond-drop-earrings-on-display-20261016212457.jpg',
  'https://i.ibb.co/bpHxgv3/Diamond-ring-on-leather-20261016212501.jpg',
  'https://i.ibb.co/KxPk9MDD/Pink-diamond-ring-photography-20261016212505.jpg',
  'https://i.ibb.co/NdVM8N32/Diamond-eternity-band-on-cloth-20261016212507.jpg',
  'https://i.ibb.co/4n4fyCY0/Blue-diamond-crystal-on-block-20261016212512.jpg',
  'https://i.ibb.co/MycD3BkG/Diamond-engagement-ring-on-surface-20261016212516.jpg',
  'https://i.ibb.co/vCYNMdnV/Diamond-cluster-stud-earrings-di-20261016212520.jpg',
  'https://i.ibb.co/d0p5XH4k/Diamond-cluster-stud-earrings-20261016212521.jpg',
  'https://i.ibb.co/mZq6b74/Yellow-diamond-ring-on-display-20261016212526.jpg',
  'https://i.ibb.co/67ZNMHCh/Diamond-gemstone-resting-on-silk-20261016212529.jpg',
  'https://i.ibb.co/YBsMfTJ3/Platinum-diamond-line-bracelet-20261016212534.jpg',
  'https://i.ibb.co/ds7yDD0v/Pink-diamond-ring-on-stone-20261016212537.jpg',
  'https://i.ibb.co/whb8JNXy/Pink-diamond-ring-on-stone-20261016212544.jpg',
  'https://i.ibb.co/xqXXXRN2/Diamond-solitaire-ring-on-cloth-20261016212547.jpg',
  'https://i.ibb.co/LXqDKtj4/Green-diamond-cocktail-ring-20261016212551.jpg',
];

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

  // 24 pieces moving right in upper stream (links 1 to 24)
  // 24 pieces moving left in lower stream (links 25 to 48)
  const upperStream = MOTION_48_PIECES.slice(0, 24).map((piece, i) => ({
    ...piece,
    image: MOTION_48_DIRECT_IMAGES[i] || piece.image,
  }));

  const lowerStream = MOTION_48_PIECES.slice(24, 48).map((piece, i) => ({
    ...piece,
    image: MOTION_48_DIRECT_IMAGES[24 + i] || piece.image,
  }));

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
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              const retryCount = Number(target.dataset.retry || '0');
              // Automatically retry if transient 503 Service Unavailable occurs
              if (retryCount < 2) {
                target.dataset.retry = String(retryCount + 1);
                setTimeout(() => {
                  target.src = piece.image;
                }, 600 * (retryCount + 1));
              } else if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80';
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
