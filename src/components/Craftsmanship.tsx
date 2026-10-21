import React from 'react';
import { CRAFTSMANSHIP_THEMES } from '../data/jewelleryData';
import { Sparkles, Compass, Gem, MessageSquare } from 'lucide-react';

const icons = [Sparkles, Compass, Gem, MessageSquare];

export const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 lg:py-28 bg-[#F4F6F9] border-b border-slate-200/70 section-auto-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-3">
            <span>Guiding Principles</span>
            <span aria-hidden="true" className="text-[#C8A97E]">·</span>
            <span>Artistry & Proportion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-5">
            CRAFTSMANSHIP & ATTENTION TO DETAIL
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Fine diamond jewellery endures when every millimeter of metal, prong, and facet is shaped with patient purpose and unyielding standard.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_THEMES.map((theme, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={theme.title}
                className="p-8 bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-none bg-[#FAFBFD] border border-slate-200 flex items-center justify-center text-slate-700 mb-6">
                    <Icon className="w-4 h-4 text-[#B5925A]" />
                  </div>
                  
                  <div className="text-[11px] tracking-[0.16em] uppercase text-slate-400 font-medium mb-1">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-serif font-normal text-slate-900 tracking-wide mb-2">
                    {theme.title}
                  </h3>
                  
                  <div className="text-xs text-[#B5925A] font-medium tracking-wider mb-4">
                    {theme.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span>Scarselli Fine Jewellery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
