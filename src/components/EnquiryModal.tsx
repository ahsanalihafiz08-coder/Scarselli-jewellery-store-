import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState(initialTopic || 'General Diamond Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setContact('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAFBFD] border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Enquiry Dialog"
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-[#B5925A]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-slate-900 font-light">
              Enquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Thank you, {name || 'valued guest'}. Your enquiry regarding {topic} has been safely noted. Our private showroom consultant will contact you shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#B5925A] font-semibold mb-1">
                Scarselli · Fifth Avenue
              </div>
              <h3 className="text-2xl font-serif text-slate-900 font-light">
                Private Diamond Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-light">
                Please complete the form below or call our showroom directly.
              </p>
            </div>

            <div>
              <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="modal-contact" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1">
                Phone Number or Email *
              </label>
              <input
                id="modal-contact"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Phone number or email"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="modal-topic" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1">
                Area of Interest
              </label>
              <input
                id="modal-topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-xs uppercase tracking-wider text-slate-600 font-medium mb-1">
                Message / Notes
              </label>
              <textarea
                id="modal-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specific diamond cut, timing, or private viewing requests..."
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-11 max-h-[44px] md:h-auto py-2.5 md:py-3.5 px-4 text-xs tracking-[0.1em] md:tracking-[0.14em] uppercase font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-[10px] md:rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-xs"
              >
                {submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#B5925A]" />
                <span>Prefer direct contact?</span>
                <a href={BUSINESS_INFO.phoneHref} className="font-semibold text-slate-800 underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
