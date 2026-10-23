import React from 'react';
import { CRAFTSMANSHIP_THEMES } from '../data/jewelleryData';
import { Sparkles, Compass, Gem, MessageSquare, Hammer } from 'lucide-react';
import { SHOW_PLACEHOLDERS } from '../data/atelierData';

const icons = [Sparkles, Compass, Gem, MessageSquare];

export const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 lg:py-28 bg-[#09121F] text-white border-y border-slate-800 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#E6C687] font-semibold mb-3">
            <span>Guiding Principles</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Artistry &amp; Proportion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-5">
            CRAFTSMANSHIP &amp; ATTENTION TO DETAIL
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Fine diamond jewellery endures when every millimeter of metal, claw, and facet is shaped with patient purpose and unyielding standard on Fifth Avenue.
          </p>
        </div>

        {/* Workshop Image Slot + Atelier Visual Feature */}
        <div className="mb-14 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0E1A2D] shadow-2xl">
          {SHOW_PLACEHOLDERS ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Workshop Photo Placeholder */}
              <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-96 bg-[#070D18] flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-slate-800 group">
                <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-[#E6C687]/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Hammer className="w-7 h-7 text-[#E6C687]" />
                </div>
                <div className="text-xs sm:text-sm font-serif tracking-[0.16em] uppercase text-[#E6C687] font-semibold mb-2">
                  [CLIENT TO PROVIDE: Fifth Avenue Workshop &amp; Diamond Polishing Photograph]
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed">
                  Hand-setting, microscope prong alignment, and precision ultrasonic polish at our 580 Fifth Avenue atelier suite.
                </p>
              </div>

              {/* Atelier Standards Description */}
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#E6C687] block">
                  The Master’s Bench
                </span>
                <h3 className="text-2xl font-serif text-white font-light leading-snug">
                  Precision Handcrafted in Platinum &amp; Gold
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Every setting is engineered specifically for the individual light refraction of its certified Type IIa lab diamond, ensuring flawless light passage through each pavilion and table.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-[#E6C687] font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#E6C687]" />
                  <span>Individually Hand-Finished in New York</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-[#E6C687]/40 flex items-center justify-center mx-auto mb-2 text-[#E6C687]">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#E6C687] block">
                The Master’s Bench · 580 Fifth Avenue
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light leading-snug">
                Precision Handcrafted in Platinum &amp; Gold
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Every setting is engineered specifically for the individual light refraction of its certified Type IIa lab diamond, ensuring flawless light passage through each pavilion and table. Hand-setting, microscope prong alignment, and precision finishing are conducted on Fifth Avenue.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#E6C687] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#E6C687]" />
                <span>Individually Hand-Finished in New York</span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Cards Grid with subtle hover lift and larger icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_THEMES.map((theme, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={theme.title}
                className="p-8 bg-[#0E1A2D] border border-slate-700/80 hover:border-[#E6C687]/60 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1.5 group cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#16253E] border border-slate-700 flex items-center justify-center text-[#E6C687] mb-6 group-hover:border-[#E6C687]/50 transition-colors">
                    <Icon className="w-5 h-5 text-[#E6C687]" />
                  </div>
                  
                  <div className="text-[11px] tracking-[0.2em] uppercase text-slate-400 font-semibold mb-1">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-serif font-normal text-white tracking-wide mb-2">
                    {theme.title}
                  </h3>
                  
                  <div className="text-xs text-[#E6C687] font-semibold tracking-wider mb-4">
                    {theme.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
