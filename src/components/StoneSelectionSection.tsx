import React from 'react';
import { Award, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { SHOW_PLACEHOLDERS } from '../data/atelierData';

export interface StoneShape {
  id: string;
  name: string;
  ratio: string;
  description: string;
  cutBadge: string;
}

export const STONE_SHAPES: StoneShape[] = [
  { id: 'round', name: 'Round', ratio: '1.00', description: 'The timeless brilliant cut offering maximum fire and scintillation.', cutBadge: 'Ideal Brilliant' },
  { id: 'princess', name: 'Princess', ratio: '1.00', description: 'Sharp geometric angles with modern contemporary brilliance.', cutBadge: 'Square Brilliant' },
  { id: 'radiant', name: 'Radiant', ratio: '1.25', description: 'Cut corners paired with energetic, vibrant brilliant faceting.', cutBadge: 'Cut-Corner Brilliant' },
  { id: 'asscher', name: 'Asscher', ratio: '1.00', description: 'Vintage art deco step cut with dramatic concentric windmills.', cutBadge: 'Square Step Cut' },
  { id: 'cushion', name: 'Cushion', ratio: '1.08', description: 'Soft rounded pillow silhouette with romantic antique glow.', cutBadge: 'Modified Brilliant' },
  { id: 'oval', name: 'Oval', ratio: '1.35', description: 'Elongating graceful curve with exceptional surface brilliance.', cutBadge: 'Oval Brilliant' },
  { id: 'emerald', name: 'Emerald', ratio: '1.40', description: 'Architectural parallel step facets highlighting pure clarity.', cutBadge: 'Classic Step Cut' },
  { id: 'pear', name: 'Pear', ratio: '1.50', description: 'Dramatic teardrop fusion of round brilliance and marquise point.', cutBadge: 'Teardrop Brilliant' },
  { id: 'marquise', name: 'Marquise', ratio: '1.85', description: 'Regal navette silhouette maximizing perceived carat weight.', cutBadge: 'Navette Brilliant' },
  { id: 'heart', name: 'Heart', ratio: '1.00', description: 'The ultimate symbol of devotion with romantic curved lobes.', cutBadge: 'Heart Brilliant' },
];

// Clean, high-precision luxury diamond vector renderings with darker, crisp strokes
export const DiamondShapeIcon: React.FC<{ shapeId: string; className?: string }> = ({
  shapeId,
  className = 'w-14 h-14',
}) => {
  switch (shapeId) {
    case 'round':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="44" strokeWidth="2.6" />
          <polygon points="40,26 60,26 74,40 74,60 60,74 40,74 26,60 26,40" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="50" y1="6" x2="50" y2="26" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="50" y1="74" x2="50" y2="94" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="6" y1="50" x2="26" y2="50" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="74" y1="50" x2="94" y2="50" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="19" y1="19" x2="33" y2="33" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="81" y1="19" x2="67" y2="33" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="19" y1="81" x2="33" y2="67" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="81" y1="81" x2="67" y2="67" stroke="#8A682D" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="3" fill="#8A682D" />
        </svg>
      );
    case 'princess':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="12" width="76" height="76" rx="2" strokeWidth="2.6" />
          <rect x="28" y="28" width="44" height="44" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="12" y1="12" x2="28" y2="28" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="88" y1="12" x2="72" y2="28" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="12" y1="88" x2="28" y2="72" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="88" y1="88" x2="72" y2="72" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="50" y1="12" x2="50" y2="28" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="50" y1="72" x2="50" y2="88" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="12" y1="50" x2="28" y2="50" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="72" y1="50" x2="88" y2="50" stroke="#8A682D" strokeWidth="1.8" />
        </svg>
      );
    case 'radiant':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="26,10 74,10 90,26 90,74 74,90 26,90 10,74 10,26" strokeWidth="2.6" />
          <polygon points="34,22 66,22 78,34 78,66 66,78 34,78 22,66 22,34" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="26" y1="10" x2="34" y2="22" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="74" y1="10" x2="66" y2="22" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="90" y1="26" x2="78" y2="34" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="90" y1="74" x2="78" y2="66" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="74" y1="90" x2="66" y2="78" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="26" y1="90" x2="34" y2="78" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="10" y1="74" x2="22" y2="66" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="10" y1="26" x2="22" y2="34" stroke="#0F172A" strokeWidth="2.0" />
          <circle cx="50" cy="50" r="3" fill="#8A682D" />
        </svg>
      );
    case 'asscher':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" strokeWidth="2.6" />
          <polygon points="35,22 65,22 78,35 78,65 65,78 35,78 22,65 22,35" stroke="#0F172A" strokeOpacity="0.6" strokeWidth="1.8" />
          <polygon points="40,32 60,32 68,40 68,60 60,68 40,68 32,60 32,40" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="10" y1="30" x2="32" y2="40" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="30" y1="10" x2="40" y2="32" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="70" y1="10" x2="60" y2="32" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="90" y1="30" x2="68" y2="40" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="90" y1="70" x2="68" y2="60" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="70" y1="90" x2="60" y2="68" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="30" y1="90" x2="40" y2="68" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="10" y1="70" x2="32" y2="60" stroke="#8A682D" strokeWidth="1.8" />
        </svg>
      );
    case 'cushion':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="14" width="72" height="72" rx="22" strokeWidth="2.6" />
          <rect x="28" y="28" width="44" height="44" rx="14" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="20" y1="20" x2="32" y2="32" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="80" y1="20" x2="68" y2="32" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="20" y1="80" x2="32" y2="68" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="80" y1="80" x2="68" y2="68" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="50" y1="14" x2="50" y2="28" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="50" y1="72" x2="50" y2="86" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="14" y1="50" x2="28" y2="50" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="72" y1="50" x2="86" y2="50" stroke="#8A682D" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="3" fill="#8A682D" />
        </svg>
      );
    case 'oval':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="50" cy="50" rx="34" ry="44" strokeWidth="2.6" />
          <ellipse cx="50" cy="50" rx="20" ry="26" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="50" y1="6" x2="50" y2="24" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="50" y1="76" x2="50" y2="94" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="16" y1="50" x2="30" y2="50" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="70" y1="50" x2="84" y2="50" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="26" y1="20" x2="38" y2="34" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="74" y1="20" x2="62" y2="34" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="26" y1="80" x2="38" y2="66" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="74" y1="80" x2="62" y2="66" stroke="#8A682D" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="3" fill="#8A682D" />
        </svg>
      );
    case 'emerald':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="28,8 72,8 86,22 86,78 72,92 28,92 14,78 14,22" strokeWidth="2.6" />
          <polygon points="32,18 68,18 78,28 78,72 68,82 32,82 22,72 22,28" stroke="#0F172A" strokeOpacity="0.6" strokeWidth="1.8" />
          <polygon points="36,28 64,28 70,34 70,66 64,72 36,72 30,66 30,34" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="14" y1="22" x2="30" y2="34" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="86" y1="22" x2="70" y2="34" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="14" y1="78" x2="30" y2="66" stroke="#8A682D" strokeWidth="1.8" />
          <line x1="86" y1="78" x2="70" y2="66" stroke="#8A682D" strokeWidth="1.8" />
        </svg>
      );
    case 'pear':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 8 C66 32 84 56 84 72 C84 84 69 92 50 92 C31 92 16 84 16 72 C16 56 34 32 50 8 Z" strokeWidth="2.6" />
          <path d="M50 28 C59 44 70 58 70 70 C70 77 61 82 50 82 C39 82 30 77 30 70 C30 58 41 44 50 28 Z" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="50" y1="8" x2="50" y2="28" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="50" y1="82" x2="50" y2="92" stroke="#0F172A" strokeWidth="2.0" />
          <circle cx="50" cy="58" r="3" fill="#8A682D" />
        </svg>
      );
    case 'marquise':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 6 C78 30 84 50 84 50 C84 50 78 70 50 94 C22 70 16 50 16 50 C16 50 22 30 50 6 Z" strokeWidth="2.6" />
          <path d="M50 24 C66 38 70 50 70 50 C70 50 66 62 50 76 C34 62 30 50 30 50 C30 50 34 38 50 24 Z" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="50" y1="6" x2="50" y2="24" stroke="#0F172A" strokeWidth="2.0" />
          <line x1="50" y1="76" x2="50" y2="94" stroke="#0F172A" strokeWidth="2.0" />
          <circle cx="50" cy="50" r="3" fill="#8A682D" />
        </svg>
      );
    case 'heart':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 28 C42 12 18 10 14 30 C10 46 26 66 50 90 C74 66 90 46 86 30 C82 10 58 12 50 28 Z" strokeWidth="2.6" />
          <path d="M50 42 C44 30 26 28 24 40 C22 50 34 64 50 80 C66 64 78 50 76 40 C74 28 56 30 50 42 Z" stroke="#8A682D" fill="none" strokeWidth="2.0" />
          <line x1="50" y1="80" x2="50" y2="90" stroke="#0F172A" strokeWidth="2.0" />
          <circle cx="50" cy="52" r="3" fill="#8A682D" />
        </svg>
      );
    default:
      return null;
  }
};

interface StoneSelectionSectionProps {
  onSelectShapeFilter?: (shapeId: string) => void;
  onOpenInventory?: (shapeId?: string) => void;
}

export const StoneSelectionSection: React.FC<StoneSelectionSectionProps> = ({
  onSelectShapeFilter,
  onOpenInventory,
}) => {
  const handleShapeClick = (shapeId: string) => {
    if (onSelectShapeFilter) {
      onSelectShapeFilter(shapeId);
    }
    const target = document.getElementById('the-collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewInventory = () => {
    const target = document.getElementById('the-collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenInventory) {
      onOpenInventory();
    }
  };

  return (
    <section id="stone-selection" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-100/30 via-sky-100/20 to-amber-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Single clean IGI & GIA badge (mentioned only ONCE in this section) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-4">
          <Award className="w-4 h-4 text-[#8A682D] shrink-0" />
          <span className="text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-slate-800">
            IGI &amp; GIA Certified Laboratory Diamonds
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-4">
          LAB GROWN DIAMOND SHAPES
        </h2>

        {/* Clean Luxury Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
          Explore ten signature silhouettes, each individually cut to maximize light refraction and spectral fire. Click any shape to view matching creations in the collection.
        </p>

        {/* Row of 10 Clean Vector Stone Shapes with larger icons and darker, crisp strokes */}
        <div className="w-full mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 items-center justify-center gap-4 sm:gap-6 lg:gap-3 xl:gap-4 max-w-6xl mx-auto">
            {STONE_SHAPES.map((stone) => (
              <button
                key={stone.id}
                type="button"
                onClick={() => handleShapeClick(stone.id)}
                title={`Filter collection by ${stone.name} shape (L/W ratio: ${stone.ratio})`}
                className="group flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-400 p-3.5 sm:p-4 rounded-xl shadow-2xs hover:shadow-sm outline-none w-full"
              >
                {/* Larger Shape Icon with Crisp Dark Strokes */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-slate-900">
                  <DiamondShapeIcon shapeId={stone.id} className="w-full h-full drop-shadow-xs" />
                </div>

                {/* Shape Label */}
                <span className="mt-2.5 text-sm sm:text-base font-serif tracking-wide text-slate-900 group-hover:text-[#8A682D] font-medium transition-colors">
                  {stone.name}
                </span>

                {/* Clearly Labeled L/W Ratio */}
                <span className="text-[11px] sm:text-xs text-slate-500 font-sans mt-0.5" title={`Length-to-width ratio: ${stone.ratio}`}>
                  {stone.ratio} L/W
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Placeholder Block for IGI / GIA Certificate Images (Hidden when SHOW_PLACEHOLDERS is false) */}
        {SHOW_PLACEHOLDERS && (
          <div className="mb-12 max-w-xl mx-auto p-5 rounded-2xl border border-dashed border-slate-300 bg-white/80 shadow-2xs text-center">
            <Award className="w-6 h-6 text-[#8A682D] mx-auto mb-2" />
            <div className="text-xs sm:text-sm uppercase tracking-[0.16em] text-slate-800 font-semibold mb-1">
              [CLIENT TO PROVIDE: IGI &amp; GIA Grading Certificate Sample Images]
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-light">
              Every lab-grown diamond is laser-inscribed and accompanied by an official grading dossier confirming carat, color, clarity, and optical precision.
            </p>
          </div>
        )}

        {/* Action Button: VIEW INVENTORY scrolls directly to The Collection */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleViewInventory}
            className="w-full sm:w-auto min-w-[260px] py-4 px-9 rounded-full bg-[#0B192C] hover:bg-[#1B3050] text-white font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#E6C687]" />
            <span>View Inventory In Collection</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Reassurance strip - Minimum 15px/16px, large and readable */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-7 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2.5 text-sm sm:text-base text-slate-700 font-medium text-center px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8A682D] shrink-0" />
            <span>100% Type IIa Lab-Grown Diamonds</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>Bespoke Ring Sizing (US 4 – 10)</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>580 Fifth Avenue Atelier Showroom</span>
        </div>

      </div>
    </section>
  );
};
