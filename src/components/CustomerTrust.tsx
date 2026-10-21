import React from 'react';
import { Star, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const CustomerTrust: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/60 section-auto-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 bg-white border border-slate-200/80 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Highlight */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 text-2xl sm:text-3xl text-[#B5925A] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#B5925A] stroke-[#B5925A]" />
                ))}
              </div>
              
              <div className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight font-light mb-1">
                {BUSINESS_INFO.rating} ★
              </div>
              
              <div className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-slate-600">
                Customer Rating
              </div>
              
              <p className="text-xs text-slate-500 font-light mt-3 max-w-sm">
                Reflecting an uncompromised commitment to exceptional diamond jewellery presentation and private client service.
              </p>
            </div>

            {/* Credibility Pillars */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:pl-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                  <MapPin className="w-4 h-4 text-[#B5925A]" />
                </div>
                <h4 className="text-xs tracking-wider uppercase font-semibold text-slate-900">
                  Fifth Avenue
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Located at 580 Fifth Avenue in the heart of New York's historic jewellery enclave.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-sky-800" />
                </div>
                <h4 className="text-xs tracking-wider uppercase font-semibold text-slate-900">
                  Private Suite
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Suite 821 offers discreet individual consultations in an exclusive gallery environment.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                  <Clock className="w-4 h-4 text-slate-700" />
                </div>
                <h4 className="text-xs tracking-wider uppercase font-semibold text-slate-900">
                  By Appointment
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Dedicated, unhurried time devoted to your personal diamond jewellery interests.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
