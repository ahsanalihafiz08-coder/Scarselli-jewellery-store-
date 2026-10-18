import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface HeaderProps {
  onOpenEnquiry: (category?: string) => void;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ savedCount = 0, onOpenSaved }) => {
  const [navPopupOpen, setNavPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll with requestAnimationFrame for 60fps lag-free desktop performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close popup if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setNavPopupOpen(false);
      }
    };
    if (navPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navPopupOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFBFD]/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center justify-between">
            
            {/* Top Brand Logo - Restored on left side for both mobile and desktop */}
            <div className="flex items-center shrink-0">
              <a
                href="#home"
                className={`text-xs sm:text-sm font-serif tracking-[0.24em] font-medium uppercase whitespace-nowrap transition-colors ${
                  isScrolled ? 'text-slate-900 hover:text-slate-700' : 'text-white hover:text-slate-200 drop-shadow-sm'
                }`}
              >
                {BUSINESS_INFO.name}
              </a>
            </div>

            {/* Trio of Action Icons visible by default: shifted slightly more to the right */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 ml-auto -mr-1.5 sm:mr-0">
              
              {/* 1. Clean Mobile/Phone Icon */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105 ${
                  isScrolled
                    ? 'border-slate-300 hover:border-[#B5925A] bg-white text-slate-700 hover:text-[#B5925A]'
                    : 'border-white/50 bg-slate-900/40 hover:bg-slate-900/70 text-white backdrop-blur-md'
                }`}
                title="Call Scarselli"
                aria-label="Call Scarselli"
              >
                <Phone className="w-4 h-4 text-[#B5925A]" />
              </a>

              {/* 2. Wishlist Heart Icon placed in the exact spot with proper spacing */}
              <button
                type="button"
                onClick={onOpenSaved}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105 relative cursor-pointer ${
                  isScrolled
                    ? 'border-slate-300 hover:border-rose-400 bg-white text-slate-700 hover:text-rose-600'
                    : 'border-white/50 bg-slate-900/40 hover:bg-slate-900/70 text-white backdrop-blur-md'
                }`}
                title="Wishlist / Saved Pieces"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    savedCount > 0 ? 'fill-rose-500 stroke-rose-500 text-rose-500' : ''
                  }`}
                />
                {savedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>

              {/* 3. Three-Line Menu Icon (opens popup right next to the menu icon) */}
              <div ref={menuContainerRef} className="relative">
                <button
                  type="button"
                  onClick={() => setNavPopupOpen(!navPopupOpen)}
                  aria-expanded={navPopupOpen}
                  aria-label="Site Navigation Menu"
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105 cursor-pointer ${
                    isScrolled
                      ? 'border-slate-300 hover:border-slate-800 bg-white text-slate-800'
                      : 'border-white/50 bg-slate-900/40 hover:bg-slate-900/70 text-white backdrop-blur-md'
                  }`}
                  title="Menu"
                >
                  {navPopupOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>

                {/* Three-Line Menu Popup: opens across top layout on desktop, opens above floating action buttons on mobile */}
                {navPopupOpen && (
                  <>
                    {/* Desktop Menu Popup: opens properly across top layout matching background video/hero area width */}
                    <div
                      className="hidden md:block fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
                      onClick={() => setNavPopupOpen(false)}
                    >
                      <div
                        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-full bg-[#FAFBFD] border border-slate-200/90 shadow-2xl rounded-2xl p-6 lg:p-8 text-left flex flex-col justify-between overflow-hidden relative animate-in slide-in-from-top-4 duration-200">
                          
                          {/* Desktop Menu Top Bar with close button positioned right above/aligned with 3-line menu */}
                          <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/90 shrink-0">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-serif tracking-[0.28em] font-semibold text-slate-900 uppercase">
                                {BUSINESS_INFO.name}
                              </span>
                              <span className="text-slate-300">·</span>
                              <span className="text-xs tracking-[0.2em] uppercase text-[#B5925A] font-medium">
                                Fifth Avenue Atelier · Suite 821
                              </span>
                              <span className="text-slate-300">·</span>
                              <span className="text-[11px] text-slate-500 font-light">
                                New York, NY 10017
                              </span>
                            </div>

                            {/* Close (Cross) button positioned right above the 3-line menu */}
                            <button
                              type="button"
                              onClick={() => setNavPopupOpen(false)}
                              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 shrink-0"
                              aria-label="Close Navigation"
                              title="Close Menu"
                            >
                              <X className="w-4 h-4 stroke-[2.5]" />
                            </button>
                          </div>

                          {/* Desktop Menu Main Body: 2 columns for navigation links + 1 column for Atelier Showroom */}
                          <div className="grid grid-cols-12 gap-6 items-center flex-1 py-4 overflow-hidden">
                            
                            {/* Navigation Links (01 to 09 in 2 balanced columns) */}
                            <div className="col-span-8 grid grid-cols-2 gap-2 pr-2">
                              {[
                                { num: '01', label: 'Home & Entrance', href: '#home', sub: 'Arrival & Welcome' },
                                { num: '02', label: 'Lab Grown Diamonds', href: '#stone-selection', sub: 'IGI/GIA Certified Shapes' },
                                { num: '03', label: 'Atelier Archive', href: '#atelier-archive', sub: '22 Masterworks' },
                                { num: '04', label: 'Curated Suites', href: '#curated-suites', sub: 'High Jewelry Collections' },
                                { num: '05', label: 'Atelier Catalog', href: '#atelier-catalog', sub: '36 Master Creations' },
                                { num: '06', label: 'Highlights in Motion', href: '#motion-showcase', sub: 'Dual Stream Gallery' },
                                { num: '07', label: 'Secondary Curated Suite', href: '#secondary-curated', sub: 'Distinctive Solitaires' },
                                { num: '08', label: 'Craftsmanship & Ethics', href: '#craftsmanship', sub: 'Master Cut Standards' },
                                { num: '09', label: 'Showroom & Contact', href: '#contact', sub: '580 Fifth Avenue, Suite 821' },
                              ].map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setNavPopupOpen(false);
                                    setTimeout(() => {
                                      const target = document.querySelector(item.href);
                                      if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                      }
                                    }, 60);
                                  }}
                                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/90 hover:shadow-2xs transition-all group cursor-pointer"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <span className="text-xs font-mono font-semibold text-[#B5925A] opacity-80 group-hover:opacity-100">
                                      {item.num}
                                    </span>
                                    <div className="min-w-0">
                                      <div className="text-xs lg:text-sm font-serif font-medium text-slate-800 group-hover:text-slate-950 truncate">
                                        {item.label}
                                      </div>
                                      <div className="text-[10px] text-slate-400 group-hover:text-slate-500 font-light truncate">
                                        {item.sub}
                                      </div>
                                    </div>
                                  </div>
                                  <span className="text-xs text-slate-400 group-hover:text-[#B5925A] group-hover:translate-x-1 transition-transform shrink-0 ml-1">
                                    →
                                  </span>
                                </a>
                              ))}
                            </div>

                            {/* Desktop Side Boutique Showcase */}
                            <div className="col-span-4 bg-white border border-slate-200/90 rounded-2xl p-5 space-y-3.5 shadow-2xs">
                              <div>
                                <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-semibold text-[#B5925A] bg-[#FAF6EC] px-2.5 py-0.5 rounded-full border border-[#B5925A]/30">
                                  <Sparkles className="w-3 h-3 text-[#B5925A]" />
                                  <span>Private Showroom</span>
                                </div>
                                <h4 className="text-sm font-serif font-bold text-slate-900 mt-2">
                                  580 Fifth Avenue, Suite 821
                                </h4>
                                <p className="text-xs text-slate-500 font-light mt-0.5">
                                  New York, NY 10017
                                </p>
                              </div>

                              <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Hours:</span>
                                  <span className="font-medium text-slate-800">Mon – Sat (10am – 5:30pm)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Direct Contact:</span>
                                  <span className="font-semibold text-slate-900">{BUSINESS_INFO.phone}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Certification:</span>
                                  <span className="text-[#B5925A] font-semibold">IGI / GIA Lab Grown</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 pt-1">
                                <a
                                  href={BUSINESS_INFO.phoneHref}
                                  className="py-2.5 px-3 text-center text-xs font-semibold text-slate-800 bg-[#FAFBFD] border border-slate-300 rounded-full hover:border-[#B5925A] hover:text-[#B5925A] transition-all"
                                >
                                  Call Atelier
                                </a>
                                <a
                                  href={BUSINESS_INFO.whatsappUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="py-2.5 px-3 text-center text-xs font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-xs"
                                >
                                  WhatsApp
                                </a>
                              </div>
                            </div>

                          </div>

                          {/* Desktop Menu Bottom Bar */}
                          <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 shrink-0">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#B5925A]" />
                              <span>Private consultation at 580 Fifth Avenue, Suite 821, New York</span>
                            </span>
                            <span className="text-[#B5925A] font-serif italic">
                              “The extraordinary beauty of fine diamonds.”
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile 3-Lines Menu Popup: opens ABOVE floating contact/action buttons, ensuring buttons remain below without overlapping awkwardly */}
                    <div
                      className="md:hidden fixed top-14 left-3 right-3 z-50 flex justify-center animate-in fade-in duration-200"
                      onClick={() => setNavPopupOpen(false)}
                    >
                      <div
                        className="w-full max-w-[340px] max-h-[calc(100dvh-200px)] bg-[#FAFBFD]/98 backdrop-blur-xl border border-slate-200/95 shadow-2xl rounded-2xl p-4 text-left flex flex-col justify-between overflow-y-auto animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div>
                          {/* Top Header of Mobile Menu */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-200/90 mb-3">
                            <div>
                              <span className="text-xs font-serif tracking-[0.22em] font-semibold text-slate-900 uppercase block">
                                {BUSINESS_INFO.name}
                              </span>
                              <span className="text-[10px] tracking-wider uppercase text-[#B5925A] font-medium">
                                Fifth Ave Atelier · Suite 821
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setNavPopupOpen(false)}
                              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Close Menu"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Navigation Links Grid for Mobile */}
                          <div className="space-y-1">
                            {[
                              { num: '01', label: 'Home & Entrance', href: '#home' },
                              { num: '02', label: 'Lab Grown Diamonds', href: '#stone-selection' },
                              { num: '03', label: 'Atelier Archive', href: '#atelier-archive' },
                              { num: '04', label: 'Curated Suites', href: '#curated-suites' },
                              { num: '05', label: 'Atelier Catalog', href: '#atelier-catalog' },
                              { num: '06', label: 'Highlights in Motion', href: '#motion-showcase' },
                              { num: '07', label: 'Secondary Curated Suite', href: '#secondary-curated' },
                              { num: '08', label: 'Craftsmanship & Ethics', href: '#craftsmanship' },
                              { num: '09', label: 'Showroom & Contact', href: '#contact' },
                            ].map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setNavPopupOpen(false);
                                  setTimeout(() => {
                                    const target = document.querySelector(item.href);
                                    if (target) {
                                      target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }, 60);
                                }}
                                className="flex items-center justify-between px-2.5 py-1.5 text-xs text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 rounded-lg transition-all group cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono text-[#B5925A] font-semibold">
                                    {item.num}
                                  </span>
                                  <span className="font-serif font-medium tracking-wide text-xs group-hover:text-slate-950 truncate">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-[11px] text-slate-400 group-hover:text-[#B5925A] group-hover:translate-x-0.5 transition-transform shrink-0">
                                  →
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Mobile bottom strip */}
                        <div className="pt-3 border-t border-slate-200/90 space-y-2 text-[11px] text-slate-600">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 font-medium truncate">
                              <MapPin className="w-3.5 h-3.5 text-[#B5925A] shrink-0" />
                              580 Fifth Ave, Suite 821
                            </span>
                            <span className="text-[#B5925A] font-semibold shrink-0">NYC 10017</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={BUSINESS_INFO.phoneHref}
                              className="py-1.5 text-center text-[10px] uppercase tracking-wider font-semibold text-slate-800 bg-white border border-slate-300 rounded-full"
                            >
                              Call Store
                            </a>
                            <a
                              href={BUSINESS_INFO.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-1.5 text-center text-[10px] uppercase tracking-wider font-semibold text-white bg-emerald-600 rounded-full"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                )}
              </div>

            </div>

          </div>
        </div>
      </header>
    </>
  );
};
