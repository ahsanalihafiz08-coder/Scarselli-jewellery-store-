import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is a lab-grown diamond?',
      answer:
        'A lab-grown diamond is an authentic diamond created through advanced technological processes (CVD or HPHT) that replicate the natural subterranean diamond crystallization conditions. They possess the exact identical carbon crystal structure, physical hardness (10 on the Mohs scale), chemical formula, and refractive optical properties as mined diamonds. Scarselli exclusively curates Type IIa lab diamonds, the purest crystallization grade in gemology.',
    },
    {
      question: 'Are Scarselli lab diamonds certified by independent gemological laboratories?',
      answer:
        'Yes. Every diamond in the Scarselli collection is independently evaluated and certified by the International Gemological Institute (IGI) or Gemological Institute of America (GIA). Each stone is micro-laser inscribed with its individual certificate dossier number along the girdle, which can be viewed under a microscope at your private appointment and cross-referenced online.',
    },
    {
      question: 'How do shipping and insurance work?',
      answer:
        'All domestic and international jewellery deliveries are dispatched via insured, expedited white-glove courier service (such as FedEx Priority Overnight with armored transit). Shipments are fully insured for 100% of their appraised value until delivered with an adult signature. Alternatively, clients are welcome to take immediate possession at our 580 Fifth Avenue suite during their private appointment.',
    },
    {
      question: 'What is your ring resizing policy?',
      answer:
        'We offer complimentary bespoke ring sizing between US 4.0 and 10.0 on all Scarselli engagement rings and solitaire bands. Sizing can be arranged prior to collection or completed within our Fifth Avenue atelier following your initial viewing to guarantee an immaculate, tailored fit.',
    },
    {
      question: 'What is your warranty and returns policy?',
      answer:
        'Every Scarselli piece is accompanied by a lifetime craftsmanship warranty covering mounting structural integrity and prong inspections. Returns or exchanges for showroom inventory are accommodated within 14 days in unworn condition with original seals and laboratory documentation intact.',
    },
    {
      question: 'Do you create bespoke custom designs and commissions?',
      answer:
        'Yes. A significant portion of our Fifth Avenue atelier commissions are entirely bespoke. Bruno Scarselli collaborates with you to source specialized diamond carat weights or rare fancy shapes, followed by precision 3D CAD modeling, hand-carved platinum wax models, and individual bench setting tailored to your personal aesthetic.',
    },
    {
      question: 'How does a private viewing appointment work?',
      answer:
        'Private viewings take place inside Suite 821 at 580 Fifth Avenue in Manhattan. You are welcomed for an unhurried, private one-on-one consultation with Bruno Scarselli or a senior diamantaire. You will inspect selected loose diamonds and finished mountings under gemological lighting and 10x magnification without sales pressure.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Fifth Avenue Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mt-3">
            Answers regarding our certified lab-grown diamonds, bespoke design commissions, and private consultation policies.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-normal text-slate-900 group-hover:text-[#8A682D] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'border-slate-900 bg-slate-900 text-white rotate-180'
                        : 'border-slate-300 text-slate-500 group-hover:border-slate-900 group-hover:text-slate-900'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 sm:pr-12 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question CTA */}
        <div className="mt-12 text-center pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-sm text-slate-600 font-light">
            Have an unspoken inquiry or custom request?
          </span>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs uppercase tracking-wider font-semibold transition-colors bg-white shadow-2xs hover:shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask Bruno Scarselli Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
};
