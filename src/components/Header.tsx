import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface HeaderProps {
  onOpenEnquiry: (category?: string) => void;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEnquiry,
  savedCount = 0,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = window.scrollY > 40;
    setIsScrolled(lastScrolled);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          if (scrolled !== lastScrolled) {
            lastScrolled = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Collection', href: '#the-collection' },
    { label: 'Diamond Shapes', href: '#stone-selection' },
    { label: 'Featured Pieces', href: '#featured-pieces' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFBFD]/95 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)] shadow-xs'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent border-b-0 shadow-none'
        }`}
        style={
          !isScrolled
            ? { borderBottom: 'none', boxShadow: 'none' }
            : { borderBottom: '1px solid rgba(0,0,0,0.06)' }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 sm:h-20 flex items-center justify-between">
            
            {/* 1. SCARSELLI Serif Wordmark */}
            <div className="flex items-center shrink-0">
              <a
                href="#home"
                className="group flex flex-col justify-center"
              >
                <span
                  className={`text-xl sm:text-2xl font-serif tracking-[0.24em] font-normal uppercase transition-colors ${
                    isScrolled ? 'text-slate-900 group-hover:text-[#8A682D]' : 'text-white group-hover:text-[#E6C687] drop-shadow-md'
                  }`}
                >
                  {BUSINESS_INFO.name}
                </span>
                <span
                  className={`text-[9px] tracking-[0.28em] uppercase -mt-0.5 font-sans font-light transition-colors ${
                    isScrolled ? 'text-slate-500' : 'text-slate-200/90'
                  }`}
                >
                  580 Fifth Avenue · New York
                </span>
              </a>
            </div>

            {/* 2. Desktop Navigation Bar: Collection, Diamond Shapes, Catalog, About, Contact */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs xl:text-sm tracking-[0.14em] uppercase font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? 'text-slate-700 hover:text-[#8A682D]'
                      : 'text-white/95 hover:text-white drop-shadow-xs'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* 3. Action Group: Wishlist + Phone + "Book Private Viewing" Button */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              
              {/* Phone Icon */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105 cursor-pointer ${
                  isScrolled
                    ? 'border-slate-300 hover:border-[#8A682D] bg-white text-slate-700 hover:text-[#8A682D]'
                    : 'border-white/40 bg-slate-950/40 hover:bg-slate-900/70 text-white backdrop-blur-md'
                }`}
                title="Call 580 Fifth Avenue Showroom"
                aria-label="Call 580 Fifth Avenue Showroom"
              >
                <Phone className="w-4 h-4 text-[#B5925A]" />
              </a>

              {/* Wishlist Heart Icon */}
              <button
                type="button"
                onClick={onOpenSaved}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105 relative cursor-pointer ${
                  isScrolled
                    ? 'border-slate-300 hover:border-rose-400 bg-white text-slate-700 hover:text-rose-600'
                    : 'border-white/40 bg-slate-950/40 hover:bg-slate-900/70 text-white backdrop-blur-md'
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

              {/* Desktop CTA Button: Book Private Viewing */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Private Viewing Appointment')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B192C] hover:bg-[#1B3050] text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
                <span>Book Private Viewing</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Navigation Menu"
                className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                  isScrolled
                    ? 'border-slate-300 bg-white text-slate-800'
                    : 'border-white/40 bg-slate-950/40 text-white backdrop-blur-md'
                }`}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAFBFD] border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-serif tracking-[0.14em] uppercase text-slate-800 hover:text-[#8A682D] py-1 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('Private Viewing Appointment');
              }}
              className="w-full py-3 rounded-full bg-[#0B192C] hover:bg-[#1B3050] text-white text-xs font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6C687]" />
              <span>Book Private Viewing</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
