import React from 'react';
import { Sparkles, ShieldCheck, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Pause offscreen video decoding to maintain smooth 60fps performance on desktop
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center overflow-hidden border-b border-slate-200/80 m-0 p-0"
    >
      {/* 1. Background Video Layer - Clean, visible without heavy overlay layers, muted */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/o82tprxi/video/upload/v1792194612/Jewelry_box_opening_with_diamonds_20261016210610.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle soft gradient scrim to ensure crystal-clear text readability while preserving video brilliance */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/25 to-slate-950/50 pointer-events-none" />

      {/* 2. Headline, Description, and Action Buttons directly over background video */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center flex flex-col items-center justify-center">

        {/* Main Headline placed directly over video with increased font size */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.12] mb-4 text-balance drop-shadow-lg">
          THE ART OF EXCEPTIONAL DIAMONDS
        </h1>

        {/* Supporting Description placed directly over video */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-light leading-relaxed max-w-2xl mb-8 drop-shadow-md">
          Discover the extraordinary brilliance of fine diamonds, thoughtfully presented for life's most meaningful moments.
        </p>

        {/* Main Buttons with sharper sides (rounded-md) - Strictly equal in size and width */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 mb-8">
          {/* Button 1: Discover Collection */}
          <a
            href="#curated-suites"
            className="w-56 sm:w-64 h-13 sm:h-14 rounded-md border border-white/80 bg-white/20 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md flex items-center justify-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer text-center"
            title="Discover Our Collection"
          >
            <Sparkles className="w-4 h-4 text-[#E6C687] group-hover:text-[#B5925A] transition-colors shrink-0" />
            <span className="text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
              Discover Collection
            </span>
          </a>

          {/* Button 2: Enquire Scarselli - Equal in size and width */}
          <button
            onClick={onOpenEnquiry}
            className="w-56 sm:w-64 h-13 sm:h-14 rounded-md border border-white/80 bg-slate-950/60 hover:bg-[#B5925A] text-white hover:border-[#B5925A] backdrop-blur-md flex items-center justify-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group text-center"
            title="Enquire with Scarselli"
          >
            <Phone className="w-4 h-4 text-[#E6C687] group-hover:text-white transition-colors shrink-0" />
            <span className="text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
              Enquire Scarselli
            </span>
          </button>
        </div>

        {/* Boutique Assurance Credentials - fully visible without truncation on all mobile screens */}
        <div className="pt-5 sm:pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 sm:gap-8 text-[11px] sm:text-xs text-white/95 w-full px-2 drop-shadow-md text-center">
          <div className="flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E6C687]" />
            <span>Private Consultation</span>
          </div>
          <span className="text-white/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>580 Fifth Avenue Showroom</span>
          </div>
          <span className="text-white/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#E6C687] font-semibold">5.0 ★</span>
            <span>Customer Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};
