import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ShieldCheck, MapPin, Phone, Star } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[820px] flex items-center justify-center overflow-hidden border-b border-slate-200/80 m-0 p-0 bg-slate-950"
    >
      {/* 
        OPTIONAL BACKGROUND VIDEO SUPPORT (Commented placeholder path as requested):
        To activate background video playback with the hero image as poster:
        
        <video
          src="https://res.cloudinary.com/o82tprxi/video/upload/v1792194612/Jewelry_box_opening_with_diamonds_20261016210610.mp4"
          poster="/src/assets/images/hero_diamond_solitaire_1792162281599.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
      */}

      {/* 1. Hero Image with Ken Burns slow subtle zoom animation, sharpened and brightened for diamond brilliance */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/src/assets/images/hero_diamond_solitaire_1792162281599.jpg"
          alt="Scarselli Masterwork Solitaire Diamond on Liquid Silk"
          className={`w-full h-full object-cover object-center animate-ken-burns filter brightness-[1.15] contrast-[1.12] saturate-[1.08] ${
            !isVisible ? 'animate-ken-burns-paused' : ''
          }`}
          loading="eager"
        />
      </div>

      {/* 2. Lighter luxury gradient overlay keeping the diamond clearly visible while preserving readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/25 to-slate-950/70 pointer-events-none" />

      {/* Subtle champagne radiance accentuating the diamond's fire */}
      <div className="absolute inset-0 bg-radial from-amber-300/15 via-transparent to-slate-950/35 pointer-events-none" />

      {/* 3. Headline, Description, and Action Buttons (No watermark behind heading) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center justify-center">

        {/* Small Elegant Monogram Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-white/30 mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
          <span className="text-xs sm:text-sm tracking-[0.22em] uppercase font-medium text-slate-200">
            Fifth Avenue Atelier · Suite 821
          </span>
        </div>

        {/* Main Headline with high-contrast text shadow for effortless legibility */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.12] mb-5 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          THE ART OF EXCEPTIONAL DIAMONDS
        </h1>

        {/* Supporting Description with crisp contrast */}
        <p className="text-[15px] sm:text-lg lg:text-xl text-slate-100 font-light leading-relaxed max-w-2xl mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          IGI &amp; GIA certified lab-grown diamonds and fine jewellery, presented by private appointment on Fifth Avenue.
        </p>

        {/* Two High-Contrast Buttons: Discover Collection (Solid) and Enquire (Outlined) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 w-full max-w-md sm:max-w-2xl mx-auto">
          {/* Button 1: Discover Collection - Solid high contrast, flexible desktop width with whitespace-nowrap */}
          <a
            href="#the-collection"
            className="w-full sm:w-auto sm:min-w-[270px] px-8 py-3.5 sm:h-14 rounded-full bg-white hover:bg-slate-100 text-slate-950 inline-flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase whitespace-nowrap select-none"
            title="Discover The Collection"
          >
            <Sparkles className="w-4 h-4 text-[#8A682D] shrink-0" />
            <span className="truncate">Discover Collection</span>
          </a>

          {/* Button 2: Enquire - Outlined high contrast, balanced desktop width */}
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto sm:min-w-[270px] px-8 py-3.5 sm:h-14 rounded-full border-2 border-white hover:border-[#E6C687] bg-white/15 hover:bg-white/25 text-white inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase whitespace-nowrap select-none"
            title="Enquire with Scarselli"
          >
            <Phone className="w-4 h-4 text-[#E6C687] shrink-0" />
            <span className="truncate">Enquire</span>
          </button>
        </div>

        {/* Reassurance Trust Strip - Minimum 14px, fully visible and clear */}
        <div className="pt-6 sm:pt-7 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2.5 text-sm sm:text-base text-white font-medium w-full text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#E6C687]" />
            <span>Private Consultation</span>
          </div>
          <span className="text-white/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-2 shrink-0">
            <MapPin className="w-4 h-4 text-[#E6C687]" />
            <span>580 Fifth Avenue Showroom</span>
          </div>
          <span className="text-white/40 hidden sm:inline">·</span>
          <div className="flex items-center gap-2 shrink-0">
            <Star className="w-4 h-4 text-[#E6C687] fill-[#E6C687]" />
            <span>5.0 ★ Google Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
