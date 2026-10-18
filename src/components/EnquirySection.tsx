import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const EnquirySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ice-sheen border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative hairline metallic border styling */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-4">
          <span>Private Consultation</span>
          <span aria-hidden="true" className="text-[#C8A97E]">·</span>
          <span>New York City</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-6">
          DISCOVER YOUR NEXT EXTRAORDINARY PIECE
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Connect with Scarselli to explore fine diamond jewellery and discuss your enquiry.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C8A97E]" />
            <span>Call Scarselli</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-[0.16em] uppercase font-semibold text-slate-800 bg-white border border-slate-300 hover:border-[#B5925A] hover:bg-slate-50 transition-colors shadow-2xs group"
          >
            <Mail className="w-4 h-4 text-slate-600" />
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Telephone direct indicator */}
        <div className="mt-8 text-xs text-slate-500 tracking-wider">
          Direct Line: <a href={BUSINESS_INFO.phoneHref} className="font-semibold text-slate-800 hover:underline">{BUSINESS_INFO.phone}</a>
        </div>

      </div>
    </section>
  );
};
