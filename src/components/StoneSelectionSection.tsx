import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Award } from 'lucide-react';

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

// Clean, high-precision luxury diamond vector renderings for each cut
export const DiamondShapeIcon: React.FC<{ shapeId: string; className?: string }> = ({
  shapeId,
  className = 'w-12 h-12',
}) => {
  switch (shapeId) {
    case 'round':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="44" strokeWidth="2.2" />
          <polygon points="40,26 60,26 74,40 74,60 60,74 40,74 26,60 26,40" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="50" y1="6" x2="50" y2="26" />
          <line x1="50" y1="74" x2="50" y2="94" />
          <line x1="6" y1="50" x2="26" y2="50" />
          <line x1="74" y1="50" x2="94" y2="50" />
          <line x1="19" y1="19" x2="33" y2="33" />
          <line x1="81" y1="19" x2="67" y2="33" />
          <line x1="19" y1="81" x2="33" y2="67" />
          <line x1="81" y1="81" x2="67" y2="67" />
          <circle cx="50" cy="50" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'princess':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="12" width="76" height="76" rx="1.5" strokeWidth="2.2" />
          <rect x="28" y="28" width="44" height="44" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="12" y1="12" x2="28" y2="28" />
          <line x1="88" y1="12" x2="72" y2="28" />
          <line x1="12" y1="88" x2="28" y2="72" />
          <line x1="88" y1="88" x2="72" y2="72" />
          <line x1="50" y1="12" x2="50" y2="28" />
          <line x1="50" y1="72" x2="50" y2="88" />
          <line x1="12" y1="50" x2="28" y2="50" />
          <line x1="72" y1="50" x2="88" y2="50" />
          <line x1="28" y1="28" x2="72" y2="72" strokeDasharray="2 2" stroke="#B5925A" strokeOpacity="0.6" />
          <line x1="72" y1="28" x2="28" y2="72" strokeDasharray="2 2" stroke="#B5925A" strokeOpacity="0.6" />
        </svg>
      );
    case 'radiant':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="26,10 74,10 90,26 90,74 74,90 26,90 10,74 10,26" strokeWidth="2.2" />
          <polygon points="34,22 66,22 78,34 78,66 66,78 34,78 22,66 22,34" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="26" y1="10" x2="34" y2="22" />
          <line x1="74" y1="10" x2="66" y2="22" />
          <line x1="90" y1="26" x2="78" y2="34" />
          <line x1="90" y1="74" x2="78" y2="66" />
          <line x1="74" y1="90" x2="66" y2="78" />
          <line x1="26" y1="90" x2="34" y2="78" />
          <line x1="10" y1="74" x2="22" y2="66" />
          <line x1="10" y1="26" x2="22" y2="34" />
          <circle cx="50" cy="50" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'asscher':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" strokeWidth="2.2" />
          <polygon points="35,22 65,22 78,35 78,65 65,78 35,78 22,65 22,35" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.6" />
          <polygon points="40,32 60,32 68,40 68,60 60,68 40,68 32,60 32,40" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="10" y1="30" x2="32" y2="40" />
          <line x1="30" y1="10" x2="40" y2="32" />
          <line x1="70" y1="10" x2="60" y2="32" />
          <line x1="90" y1="30" x2="68" y2="40" />
          <line x1="90" y1="70" x2="68" y2="60" />
          <line x1="70" y1="90" x2="60" y2="68" />
          <line x1="30" y1="90" x2="40" y2="68" />
          <line x1="10" y1="70" x2="32" y2="60" />
        </svg>
      );
    case 'cushion':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="14" width="72" height="72" rx="20" strokeWidth="2.2" />
          <rect x="28" y="28" width="44" height="44" rx="12" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="20" y1="20" x2="32" y2="32" />
          <line x1="80" y1="20" x2="68" y2="32" />
          <line x1="20" y1="80" x2="32" y2="68" />
          <line x1="80" y1="80" x2="68" y2="68" />
          <line x1="50" y1="14" x2="50" y2="28" />
          <line x1="50" y1="72" x2="50" y2="86" />
          <line x1="14" y1="50" x2="28" y2="50" />
          <line x1="72" y1="50" x2="86" y2="50" />
          <circle cx="50" cy="50" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'oval':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="50" cy="50" rx="34" ry="44" strokeWidth="2.2" />
          <ellipse cx="50" cy="50" rx="19" ry="25" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="50" y1="6" x2="50" y2="25" />
          <line x1="50" y1="75" x2="50" y2="94" />
          <line x1="16" y1="50" x2="31" y2="50" />
          <line x1="69" y1="50" x2="84" y2="50" />
          <line x1="26" y1="20" x2="38" y2="34" />
          <line x1="74" y1="20" x2="62" y2="34" />
          <line x1="26" y1="80" x2="38" y2="66" />
          <line x1="74" y1="80" x2="62" y2="66" />
          <circle cx="50" cy="50" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'emerald':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="28,8 72,8 86,22 86,78 72,92 28,92 14,78 14,22" strokeWidth="2.2" />
          <polygon points="32,18 68,18 78,28 78,72 68,82 32,82 22,72 22,28" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.6" />
          <polygon points="36,28 64,28 70,34 70,66 64,72 36,72 30,66 30,34" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="14" y1="22" x2="30" y2="34" />
          <line x1="86" y1="22" x2="70" y2="34" />
          <line x1="14" y1="78" x2="30" y2="66" />
          <line x1="86" y1="78" x2="70" y2="66" />
          <line x1="50" y1="28" x2="50" y2="72" strokeDasharray="3 3" stroke="#B5925A" strokeOpacity="0.6" />
        </svg>
      );
    case 'pear':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 8 C66 32 84 56 84 72 C84 84 69 92 50 92 C31 92 16 84 16 72 C16 56 34 32 50 8 Z" strokeWidth="2.2" />
          <path d="M50 28 C59 44 70 58 70 70 C70 77 61 82 50 82 C39 82 30 77 30 70 C30 58 41 44 50 28 Z" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="50" y1="8" x2="50" y2="28" />
          <line x1="50" y1="82" x2="50" y2="92" />
          <line x1="22" y1="65" x2="34" y2="68" />
          <line x1="78" y1="65" x2="66" y2="68" />
          <circle cx="50" cy="58" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'marquise':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 6 C78 30 84 50 84 50 C84 50 78 70 50 94 C22 70 16 50 16 50 C16 50 22 30 50 6 Z" strokeWidth="2.2" />
          <path d="M50 24 C66 38 70 50 70 50 C70 50 66 62 50 76 C34 62 30 50 30 50 C30 50 34 38 50 24 Z" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="50" y1="6" x2="50" y2="24" />
          <line x1="50" y1="76" x2="50" y2="94" />
          <line x1="16" y1="50" x2="30" y2="50" />
          <line x1="70" y1="50" x2="84" y2="50" />
          <circle cx="50" cy="50" r="2.5" fill="#B5925A" />
        </svg>
      );
    case 'heart':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 28 C42 12 18 10 14 30 C10 46 26 66 50 90 C74 66 90 46 86 30 C82 10 58 12 50 28 Z" strokeWidth="2.2" />
          <path d="M50 42 C44 30 26 28 24 40 C22 50 34 64 50 80 C66 64 78 50 76 40 C74 28 56 30 50 42 Z" stroke="#B5925A" fill="none" strokeWidth="1.8" />
          <line x1="50" y1="80" x2="50" y2="90" />
          <line x1="14" y1="30" x2="24" y2="40" />
          <line x1="86" y1="30" x2="76" y2="40" />
          <circle cx="50" cy="52" r="2.5" fill="#B5925A" />
        </svg>
      );
    default:
      return null;
  }
};

interface StoneSelectionSectionProps {
  onOpenInventory: (shapeId?: string) => void;
}

export const StoneSelectionSection: React.FC<StoneSelectionSectionProps> = ({
  onOpenInventory,
}) => {
  return (
    <section id="stone-selection" className="py-14 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-100/30 via-sky-100/20 to-amber-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Certification badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-3.5 sm:mb-4 max-w-full">
          <Award className="w-3.5 h-3.5 text-[#B5925A] shrink-0" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold text-slate-800">
            IGI & GIA Certified Master Cuts
          </span>
          <span className="text-slate-300 hidden xs:inline">·</span>
          <span className="text-[10px] sm:text-[11px] text-[#B5925A] font-semibold">
            10 Signature Silhouettes
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-2.5 sm:mb-3 text-center px-2">
          LAB GROWN DIAMOND SHAPES
        </h2>

        {/* Exact Sub-heading strictly required by user */}
        <p className="text-sm sm:text-lg lg:text-xl text-slate-700 font-serif italic max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-3 text-center text-balance">
          “Choose from our wide range of IGI/GIA certified high-Quality Lab Grown Diamonds.”
        </p>

        {/* Centered certification guarantee text - Stars and 5.0 rating completely removed */}
        <div className="flex items-center justify-center text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-slate-600 font-serif">
            IGI & GIA Laboratory Diamond Certified
          </p>
        </div>

        {/* Row of 10 Clean Vector Stone Shapes - WITHOUT ANY SURROUNDING SQUARE BOXES OR CARD CONTAINERS */}
        {/* Mobile: neat 2 rows of 5; Desktop (lg+): all 10 aligned neatly in a single structured row without breaking into uneven lines */}
        <div className="w-full mb-10 sm:mb-14">
          <div className="grid grid-cols-5 lg:grid-cols-10 items-center justify-center gap-2 sm:gap-4 lg:gap-3 xl:gap-5 max-w-6xl mx-auto">
            {STONE_SHAPES.map((stone) => (
              <button
                key={stone.id}
                type="button"
                onClick={() => onOpenInventory(stone.id)}
                className="group flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-transparent border-none p-1 sm:p-2 outline-none focus:outline-none w-full"
                title={`Click to view ${stone.name} inventory`}
              >
                {/* Clean Vector Icon without any surrounding square box or card container */}
                <div className="w-10 h-10 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-115 text-slate-800 group-hover:text-[#B5925A]">
                  <DiamondShapeIcon shapeId={stone.id} className="w-full h-full drop-shadow-xs" />
                </div>

                {/* Stone Label */}
                <span className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs lg:text-sm font-serif tracking-wide text-slate-800 group-hover:text-[#B5925A] font-medium transition-colors truncate max-w-[64px] sm:max-w-none">
                  {stone.name}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-slate-400 font-mono mt-0.5">
                  {stone.ratio}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button: VIEW INVENTORY configured to open the inventory modal directly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenInventory('round')}
            className="w-full sm:w-auto min-w-[260px] py-3.5 sm:py-4 px-8 rounded-full bg-slate-950 hover:bg-[#B5925A] text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#E6C687] group-hover:text-white transition-colors" />
            <span>View Inventory</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Reassurance strip with clean text alignment and star icons */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-6 text-[11px] sm:text-xs text-slate-500 text-center px-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B5925A] shrink-0" />
            <span>100% Certified Type IIa Lab Grown</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>Custom Ring Sizing (US 4 – 10)</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>580 Fifth Avenue Atelier Showroom</span>
        </div>

      </div>
    </section>
  );
};
