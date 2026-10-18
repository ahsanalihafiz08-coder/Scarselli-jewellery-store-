import React, { useState } from 'react';
import { Phone, MapPin, ExternalLink, Send, CheckCircle2, Shield, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    interest: 'Diamond Rings',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFBFD] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-slate-500 font-medium mb-3">
            <span>Boutique Information</span>
            <span aria-hidden="true" className="text-[#C8A97E]">·</span>
            <span>New York</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-5">
            CONTACT SCARSELLI
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            We welcome personal enquiries regarding our fine diamond collections and private showroom appointments on Fifth Avenue. Connect directly with Bruno Scarselli.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Business Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-slate-200 shadow-2xs space-y-7">
              <div>
                <h3 className="text-2xl font-serif text-slate-900 font-normal tracking-wide mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs tracking-wider uppercase text-[#B5925A] font-medium">
                  {BUSINESS_INFO.category}
                </p>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#B5925A]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                    Direct Telephone
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-lg font-semibold text-slate-900 hover:text-[#B5925A] transition-colors tabular-nums inline-block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click to call Bruno Scarselli directly.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#B5925A]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                    Private Email
                  </div>
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="text-base font-medium text-slate-900 hover:text-[#B5925A] transition-colors inline-block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#B5925A]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                    Fifth Avenue Showroom
                  </div>
                  <div className="text-sm font-medium text-slate-800 leading-relaxed mt-1">
                    {BUSINESS_INFO.addressLine1}<br />
                    {BUSINESS_INFO.addressLine2}<br />
                    {BUSINESS_INFO.country}
                  </div>

                  {/* Get Directions Link */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=580+Fifth+Avenue+Suite+821+New+York+New+York+10017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5925A] hover:text-[#9B7A44] transition-colors mt-3 py-1 group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Direct Channels: Email, Phone, WhatsApp */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] tracking-wider uppercase text-slate-400 font-medium mb-3">
                  Direct Channels
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 text-xs font-semibold transition-colors rounded-md"
                  >
                    <Mail className="w-4 h-4 text-slate-600" />
                    <span>Email Atelier</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-amber-50 text-[#B5925A] border border-amber-200 hover:bg-amber-100 text-xs font-semibold transition-colors rounded-md"
                  >
                    <Phone className="w-4 h-4 text-[#B5925A]" />
                    <span>Direct Call</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-semibold transition-colors rounded-md"
                  >
                    <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white border border-slate-200 shadow-2xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-[#B5925A]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 font-light">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, {formState.name || 'valued guest'}. Your enquiry regarding {formState.interest} has been recorded. Bruno Scarselli or our Fifth Avenue team will respond to {formState.contact}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', contact: '', interest: 'Diamond Rings', message: '' });
                      }}
                      className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <h3 className="text-xl font-serif text-slate-900 font-normal tracking-wide mb-1">
                      Send a Personal Message
                    </h3>
                    <p className="text-xs text-slate-500 font-light">
                      Please share your details and pieces of interest.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-detail" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1.5">
                        Phone or Email *
                      </label>
                      <input
                        id="contact-detail"
                        type="text"
                        required
                        value={formState.contact}
                        onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                        placeholder="e.g. +1 (917) 880-1797"
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1.5">
                      Collection of Interest
                    </label>
                    <select
                      id="contact-interest"
                      value={formState.interest}
                      onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                    >
                      <option value="22-Piece Atelier Archive">22-Piece Atelier Archive</option>
                      <option value="Curated Suites & Timepieces">Curated Suites & Timepieces</option>
                      <option value="36-Piece Atelier Catalog">36-Piece Atelier Catalog</option>
                      <option value="Highlights in Motion">Highlights in Motion</option>
                      <option value="Secondary Curated Suite">Secondary Curated Suite</option>
                      <option value="Diamond Rings">Diamond Rings</option>
                      <option value="Diamond Necklaces">Diamond Necklaces</option>
                      <option value="Loose Diamonds">Loose Diamonds</option>
                      <option value="Fifth Avenue Private Appointment">Fifth Avenue Private Appointment</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1.5">
                      Your Message or Preference
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please indicate diamond cut, setting preferences, or desired appointment times..."
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 rounded-full shadow-xs"
                  >
                    {loading ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Private Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-light">
                    You may also reach Bruno Scarselli immediately at <a href={BUSINESS_INFO.phoneHref} className="underline text-slate-800 font-semibold">{BUSINESS_INFO.phone}</a>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
        
        {/* Horizontally Expanded Google Maps Boutique Location Section */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#B5925A] mb-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Showroom Location</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                Visit Our Fifth Avenue Atelier
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                580 Fifth Avenue, Suite 821, New York, New York, 10017
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=580+Fifth+Avenue+Suite+821+New+York+New+York+10017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#B5925A] text-white text-xs tracking-wider uppercase font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Horizontally Expanded Map Frame */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="Scarselli Diamonds 580 Fifth Avenue Showroom Map - Expanded View"
              src="https://maps.google.com/maps?q=580+Fifth+Avenue,+Suite+821,+New+York,+New+York,+10017&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
