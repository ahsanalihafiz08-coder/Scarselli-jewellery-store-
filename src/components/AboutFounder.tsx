import React from 'react';
import { UserCheck, Calendar, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { SHOW_PLACEHOLDERS } from '../data/atelierData';

interface AboutFounderProps {
  onOpenBooking?: (topic?: string) => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenBooking }) => {
  const handleMeetAppointment = () => {
    if (onOpenBooking) {
      onOpenBooking('Private Consultation with Bruno Scarselli');
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Diamantaire</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Fifth Avenue Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            ABOUT BRUNO SCARSELLI
          </h2>
        </div>

        {/* Founder Showcase Card */}
        <div className={`mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm ${SHOW_PLACEHOLDERS ? 'max-w-5xl' : 'max-w-3xl'}`}>
          {SHOW_PLACEHOLDERS ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Placeholder */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-6 text-center group">
                  <div className="w-16 h-16 rounded-full bg-slate-200/70 border border-slate-300 flex items-center justify-center mb-4 text-slate-600 group-hover:scale-105 transition-transform">
                    <UserCheck className="w-8 h-8 text-[#8A682D]" />
                  </div>
                  <div className="text-xs sm:text-sm font-serif tracking-wider uppercase text-slate-800 font-semibold mb-2">
                    [CLIENT TO PROVIDE: Bruno Scarselli Portrait Photo]
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs">
                    580 Fifth Avenue, Suite 821, New York Showroom
                  </p>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold text-slate-700 px-2.5 py-1 rounded border border-slate-200">
                    Founder &amp; Diamantaire
                  </div>
                </div>
              </div>

              {/* Story & Heritage Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#8A682D] font-semibold">
                    A Legacy of Connoisseurship
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-light leading-snug">
                    Personal Guidance at the Highest Level of Fine Jewellery
                  </h3>
                </div>

                {/* 3-4 Line Story Placeholder */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A682D]">
                    [CLIENT TO PROVIDE: Bruno Scarselli Biography &amp; Atelier Heritage Story]
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    Bruno Scarselli personally guides every private viewing at 580 Fifth Avenue, offering transparent advice on certified lab-grown diamonds and bespoke platinum and gold mountings.
                  </p>
                </div>

                {/* Showroom Anchor */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-[#8A682D] shrink-0" />
                  <span>Private Consultations at Suite 821, 580 Fifth Avenue, New York, NY 10017</span>
                </div>

                {/* Signature-style Line */}
                <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif italic text-slate-900 font-normal tracking-wide">
                      Bruno Scarselli
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-medium mt-0.5">
                      Master Diamantaire &amp; Founder · Scarselli Atelier New York
                    </div>
                  </div>

                  {/* "Meet by appointment" button */}
                  <button
                    type="button"
                    onClick={handleMeetAppointment}
                    className="py-3 px-7 rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#E6C687]" />
                    <span>Meet by Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.18em] text-[#8A682D] font-semibold">
                  A Legacy of Connoisseurship
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-light leading-snug">
                  Personal Guidance at the Highest Level of Fine Jewellery
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
                Bruno Scarselli personally guides every private viewing at 580 Fifth Avenue, offering transparent advice on certified lab-grown diamonds and bespoke platinum and gold mountings.
              </p>

              {/* Showroom Anchor */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-[#8A682D] shrink-0" />
                <span>Private Consultations at Suite 821, 580 Fifth Avenue, New York, NY 10017</span>
              </div>

              {/* Signature-style Line */}
              <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between flex-wrap gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif italic text-slate-900 font-normal tracking-wide">
                    Bruno Scarselli
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-medium mt-0.5">
                    Master Diamantaire &amp; Founder · Scarselli Atelier New York
                  </div>
                </div>

                {/* "Meet by appointment" button */}
                <button
                  type="button"
                  onClick={handleMeetAppointment}
                  className="h-11 max-h-[44px] md:h-auto py-2.5 md:py-3 px-5 md:px-7 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs uppercase tracking-[0.1em] md:tracking-[0.16em] font-semibold transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E6C687]" />
                  <span>Meet by Appointment</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
