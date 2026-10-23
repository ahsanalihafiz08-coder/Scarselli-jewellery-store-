import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, Clock, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

/**
 * Testimonials & Proof Configuration
 * Enabled now that authentic Google Reviews are provided.
 */
export const TESTIMONIALS_CONFIG = {
  showRating: true,
  ratingSource: 'Google Reviews',
  ratingValue: '5.0',
};

// Google official brand icon for verified badge
const GoogleIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const CustomerTrust: React.FC = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const realGoogleReviews = [
    {
      id: 1,
      author: 'Kyle Boera',
      quote:
        'Davide did an excellent job I could not have asked for a better experience. Did everything I asked and was transparent the entire time. Sourced an amazing natural diamond to the exact specifications that I requested and executed the ring design perfectly. I highly highly recommend.',
    },
    {
      id: 2,
      author: 'G Pal',
      quote:
        'Davide made the entire experience of selecting and creating an engagement ring truly exceptional. From our first conversation, his professionalism and depth of knowledge stood out, and he...',
    },
    {
      id: 3,
      author: 'Dov Ginsburg',
      quote:
        'I had an amazing experience working with Scarselli Diamonds, especially with David. His professionalism and attention to detail made the entire process smooth and enjoyable. The...',
    },
    {
      id: 4,
      author: 'Ramzi Bishtawi',
      quote:
        'Davide helped me embark on the journey of purchasing an engagement ring and provided top notch service. I am most appreciative of his patience and expertise throughout the process...',
    },
    {
      id: 5,
      author: 'Eiley Stern',
      quote:
        "My husband and I have worked with Scarselli diamonds for a few jewelry needs, and we couldn't be happier with the results! Thank you Bruno and Scarselli team for being patient,...",
    },
    {
      id: 6,
      author: 'marc S',
      quote:
        'My wife and I had the pleasure of working with Davide over the course of a year and we purchased a diamond ring. He and the company are amazing to work with. He will never rush you...',
    },
    {
      id: 7,
      author: 'Charissa Mosca',
      quote:
        'Davide helped my significant other and I find the perfect diamond for my engagement ring. He answered all of my questions swiftly and was completely transparent about the...',
    },
    {
      id: 8,
      author: 'sweet curls',
      quote:
        'I came across Davide at Scarselli after speaking with a few other diamond suppliers. Davide was incredibly responsive. He answered all my questions, sent videos, images and ca...',
    },
    {
      id: 9,
      author: 'M Stewart',
      quote:
        'I first purchased a 5.5 carat fancy yellow diamond ring from Scarselli solely through email communication. They were very easy to work with and amenable to my needs including...',
    },
    {
      id: 10,
      author: 'Thomas Stelle',
      quote:
        'Davide and his team at Scarselli Diamonds made the process of creating my dream engagement ring for my fiancée incredibly easy and enjoyable. From start to finish they...',
    },
    {
      id: 11,
      author: 'Mark R',
      quote:
        'I knew Scarselli Diamonds had an excellent reputation, and that they specialized in colored diamonds of very high quality. Based on my experience, I can attest that their reputation is well...',
    },
  ];

  const displayedReviews = showAllReviews ? realGoogleReviews : realGoogleReviews.slice(0, 6);

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Impressions</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Fifth Avenue Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            TRUST &amp; PRIVATE SERVICE
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto mt-3">
            Every commission at Scarselli Atelier is met with discretion, personal attention, and transparent guidance on 580 Fifth Avenue.
          </p>
        </div>

        {/* Verified 5.0 Google Rating Banner */}
        {TESTIMONIALS_CONFIG.showRating && (
          <div className="mb-12 max-w-md mx-auto p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center shadow-2xs">
            <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-500" />
              ))}
            </div>
            <div className="text-2xl font-serif font-semibold text-slate-900 flex items-center justify-center gap-2">
              <span>{TESTIMONIALS_CONFIG.ratingValue} out of 5.0</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Verified {TESTIMONIALS_CONFIG.ratingSource} · 11 Reviews</span>
            </div>
          </div>
        )}

        {/* Grid of Real Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {displayedReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 hover:border-slate-400 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all duration-300 text-left"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                  ))}
                </div>

                {/* Exact Google Review Quote */}
                <p className="text-sm sm:text-[15px] text-slate-700 font-light leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Google Verified Badge */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-serif font-semibold text-slate-900">
                    {item.author}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">
                    <GoogleIcon className="w-3 h-3" />
                    <span>Google Review</span>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#8A682D] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {realGoogleReviews.length > 6 && (
          <div className="text-center mb-16">
            <button
              type="button"
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-800 hover:text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <span>{showAllReviews ? 'Show fewer reviews' : `View all ${realGoogleReviews.length} Google Reviews`}</span>
              {showAllReviews ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* 3 Credibility Info Pillars with readable text size (>= 14px / text-sm sm:text-base) */}
        <div className="p-8 sm:p-10 bg-[#FAFBFD] border border-slate-200/90 rounded-2xl shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#8A682D]">
                <MapPin className="w-5 h-5 text-[#8A682D]" />
              </div>
              <h4 className="text-sm sm:text-base tracking-wider uppercase font-semibold text-slate-900 font-serif">
                Fifth Avenue
              </h4>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Located at 580 Fifth Avenue in the center of New York's historic jewellery enclave.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800">
                <ShieldCheck className="w-5 h-5 text-sky-800" />
              </div>
              <h4 className="text-sm sm:text-base tracking-wider uppercase font-semibold text-slate-900 font-serif">
                Private Suite
              </h4>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Suite 821 offers discreet individual consultations in an exclusive private showroom.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                <Clock className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-sm sm:text-base tracking-wider uppercase font-semibold text-slate-900 font-serif">
                By Appointment
              </h4>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Dedicated, unhurried time devoted exclusively to your personal fine jewellery interests.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
