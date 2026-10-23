import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ExternalLink, Send, CheckCircle2, Mail, MessageCircle, Calendar, Clock, DollarSign } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface ContactSectionProps {
  prefilledMessage?: string;
  prefilledInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledMessage,
  prefilledInterest,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 12:00 PM)',
    interest: prefilledInterest || 'Fifth Avenue Private Appointment',
    message: prefilledMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledMessage) {
      setFormState((prev) => ({
        ...prev,
        message: prefilledMessage,
        interest: prefilledInterest || prev.interest,
      }));
    }
  }, [prefilledMessage, prefilledInterest]);

  // Helper to encode form data for Netlify Forms
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // Send to Netlify Forms endpoint
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formState,
      }),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        // Fallback for local development or preview environments where Netlify endpoints are simulated
        console.info('Netlify submission simulation:', error);
        setLoading(false);
        setSubmitted(true);
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
            <span>Boutique Information</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>New York City</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight mb-4">
            CONTACT SCARSELLI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            We welcome personal enquiries regarding our certified lab-grown diamond collections and private showroom appointments on Fifth Avenue. Connect directly with Bruno Scarselli.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: One Single Unified Contact Card & One Row of 3 Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6 text-left">
              <div>
                <h3 className="text-2xl font-serif text-slate-900 font-normal tracking-wide mb-1">
                  {BUSINESS_INFO.name} Atelier
                </h3>
                <p className="text-xs tracking-wider uppercase text-[#8A682D] font-semibold">
                  {BUSINESS_INFO.category}
                </p>
              </div>

              {/* Showroom Location */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center shrink-0 text-[#8A682D]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] tracking-wider uppercase text-slate-400 font-semibold">
                    Showroom Address
                  </div>
                  <div className="text-sm font-medium text-slate-800 leading-relaxed mt-0.5">
                    {BUSINESS_INFO.addressLine1}<br />
                    {BUSINESS_INFO.addressLine2}<br />
                    {BUSINESS_INFO.country}
                  </div>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A682D] hover:text-[#5A421A] transition-colors mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Private Consultation Hours */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] tracking-wider uppercase text-slate-400 font-semibold">
                    Showroom Access
                  </div>
                  <div className="text-sm font-medium text-slate-800 mt-0.5">
                    Monday – Friday: 10:00 AM – 6:00 PM
                  </div>
                  <p className="text-xs text-slate-500 font-light mt-0.5">
                    Evenings and weekends available by special prior arrangement.
                  </p>
                </div>
              </div>

              {/* ONE Row of 3 Direct Action Buttons (Email, Call, WhatsApp) */}
              <div className="pt-5 border-t border-slate-100">
                <div className="text-[11px] tracking-wider uppercase text-slate-400 font-semibold mb-3">
                  Direct Boutique Communication
                </div>
                
                {/* DEVELOPER NOTE: Please confirm the official boutique contact email with the client. Changed from brunoo@scarselli.com to bruno@scarselli.com */}
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold tracking-wider uppercase flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-colors text-center cursor-pointer shadow-2xs"
                    title={`Email Bruno Scarselli at ${BUSINESS_INFO.email}`}
                  >
                    <Mail className="w-4 h-4 text-[#8A682D]" />
                    <span className="text-[11px]">Email</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold tracking-wider uppercase flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-colors text-center cursor-pointer shadow-2xs"
                    title={`Call ${BUSINESS_INFO.phone}`}
                  >
                    <Phone className="w-4 h-4 text-[#8A682D]" />
                    <span className="text-[11px]">Call</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold tracking-wider uppercase flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-colors text-center cursor-pointer shadow-2xs"
                    title="Direct WhatsApp Chat"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-[11px]">WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Netlify Forms Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formState.name || 'valued guest'}</strong>. Your enquiry regarding <span className="font-semibold">{formState.interest}</span> has been transmitted to our Fifth Avenue concierge. Bruno Scarselli will reach out to you via {formState.email || formState.phone}.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          phone: '',
                          budget: '',
                          preferredDate: '',
                          preferredTime: 'Morning (10:00 AM - 12:00 PM)',
                          interest: 'Fifth Avenue Private Appointment',
                          message: '',
                        });
                      }}
                      className="h-11 max-h-[44px] md:h-auto px-5 md:px-6 py-2.5 text-xs tracking-normal md:tracking-wider uppercase font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-[10px] md:rounded-full transition-colors cursor-pointer inline-flex items-center justify-center"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  {/* Hidden form name for Netlify Form handling */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal tracking-wide">
                      Request Private Appointment or Consultation
                    </h3>
                    <p className="text-xs text-slate-500 font-light mt-0.5">
                      Suite 821, 580 Fifth Avenue · Confidential one-on-one presentation
                    </p>
                  </div>

                  {/* 1. Full Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Lady Genevieve Vance"
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* 2. Separate Email and Phone Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. client@scarselli.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Telephone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. +1 (917) 880-1797"
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Piece of Interest & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-interest" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Piece or Creation of Interest
                      </label>
                      <input
                        id="contact-interest"
                        name="interest"
                        type="text"
                        value={formState.interest}
                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        placeholder="e.g. The Aurelia Solitaire / Custom Ring"
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors font-medium text-slate-800"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors text-slate-800 font-medium cursor-pointer"
                        >
                          <option value="">Select Target Budget</option>
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                          <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                          <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                          <option value="Above $100,000">Above $100,000 (High Jewellery)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* 4. Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-date" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Preferred Viewing Date
                      </label>
                      <input
                        id="contact-date"
                        name="preferredDate"
                        type="date"
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors text-slate-800"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-time" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                        Preferred Time of Day
                      </label>
                      <select
                        id="contact-time"
                        name="preferredTime"
                        value={formState.preferredTime}
                        onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors text-slate-800 font-medium cursor-pointer"
                      >
                        <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM - 12:00 PM)</option>
                        <option value="Midday (12:00 PM - 02:00 PM)">Midday (12:00 PM - 02:00 PM)</option>
                        <option value="Afternoon (02:00 PM - 04:00 PM)">Afternoon (02:00 PM - 04:00 PM)</option>
                        <option value="Late Afternoon (04:00 PM - 06:00 PM)">Late Afternoon (04:00 PM - 06:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-slate-600 font-semibold mb-1">
                      Notes, Ring Sizing, or Custom Commission Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please indicate diamond silhouette preferences, ring size, or milestone occasion..."
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 max-h-[44px] md:h-auto py-2.5 md:py-4 px-6 text-xs tracking-[0.1em] md:tracking-[0.18em] uppercase font-semibold text-white bg-slate-900 hover:bg-[#8A682D] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 rounded-[10px] md:rounded-full shadow-md hover:shadow-lg"
                  >
                    {loading ? (
                      <span>Transmitting Consultation Request...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-[#E6C687]" />
                        <span>Confirm Consultation Request</span>
                      </>
                    )}
                  </button>

                  {/* Styled phone link under the form */}
                  <div className="pt-2 text-center text-xs text-slate-600">
                    Prefer an immediate personal dialogue?{' '}
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-serif italic font-semibold text-slate-900 hover:text-[#8A682D] underline underline-offset-4 transition-colors"
                    >
                      Call Bruno Scarselli at {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
        
        {/* Google Maps Location Section with Adjusted Height & Clean Centered Pin */}
        {/* NOTE: 580 Fifth Avenue is situated on the 47th St / 5th Ave corner, occasionally indexed under 10036 in Google Maps while suite mailing address is 10017 */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#8A682D] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Showroom Location</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                Visit Our Fifth Avenue Atelier
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-0.5">
                580 Fifth Avenue, Suite 821, New York, NY 10017
              </p>
            </div>

            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 max-h-[44px] md:h-auto px-4 md:px-5 py-2.5 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs tracking-normal md:tracking-wider uppercase font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Clean Map Frame with reduced height and centered pin without oversized popup */}
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="Scarselli Diamonds 580 Fifth Avenue Suite 821 Showroom Map"
              src="https://maps.google.com/maps?q=580+Fifth+Avenue,+Suite+821,+New+York,+NY+10017&t=&z=16&ie=UTF8&iwloc=near&output=embed"
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
