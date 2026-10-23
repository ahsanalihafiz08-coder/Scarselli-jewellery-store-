import React, { useEffect } from 'react';
import { X, Shield, FileText, Truck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { SHOW_PLACEHOLDERS } from '../data/atelierData';

export type PolicyType = 'privacy' | 'terms' | 'shipping' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener('keydown', handleKey);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      badge: 'Client Confidentiality',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed text-left">
          {SHOW_PLACEHOLDERS && (
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-amber-900 font-medium text-xs">
              [CLIENT TO PROVIDE: Official Legal Privacy Policy for Scarselli fine jewellery boutique operating at 580 Fifth Avenue, Suite 821, New York, NY 10017]
            </div>
          )}
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            1. Information Collection &amp; Discretion
          </h4>
          <p>
            Scarselli collects personal contact details (such as your full name, email address, telephone number, and bespoke jewellery preferences) solely to facilitate private showroom viewings, process bespoke commissions, and respond to individual enquiries. We uphold the strictest standards of discretion.
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            2. Data Security &amp; Third Parties
          </h4>
          <p>
            Your confidential client details are never sold, traded, or shared with external advertising entities. Information is only disclosed to essential service providers (e.g. armored logistics couriers for delivery insurance or independent gemological laboratories such as IGI and GIA for stone registration).
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            3. Contact &amp; Data Rights
          </h4>
          <p>
            You may request the review, amendment, or deletion of your consultation history at any time by contacting Bruno Scarselli at {BUSINESS_INFO.email}.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      badge: 'Atelier Agreements',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed text-left">
          {SHOW_PLACEHOLDERS && (
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-amber-900 font-medium text-xs">
              [CLIENT TO PROVIDE: Official Terms of Service &amp; Purchase Agreement for fine lab-grown diamond jewellery]
            </div>
          )}
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            1. Pricing &amp; Quotations
          </h4>
          <p>
            Due to the fluctuating international market for rare large carat diamonds and precious platinum/gold metals, stated prices are subject to confirmation at the time of your private appointment or written quotation. Quotations remain valid for 7 calendar days.
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            2. Certification &amp; Authenticity
          </h4>
          <p>
            Every diamond piece is verified as certified Type IIa lab-grown diamond accompanied by official laboratory dossiers from IGI or GIA. The micro-laser inscription matches the accompanying physical certificate dossier handed over upon completion.
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            3. Bespoke Commissions
          </h4>
          <p>
            Custom design commissions require an initial non-refundable design &amp; stone reservation deposit prior to casting and hand-setting. Full terms are specified in the individual commission contract.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping, Delivery & Returns Policy',
      icon: Truck,
      badge: 'Insured White-Glove Transit',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed text-left">
          {SHOW_PLACEHOLDERS && (
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-amber-900 font-medium text-xs">
              [CLIENT TO PROVIDE: Detailed Shipping, Armored Transit Insurance, and Return Window Regulations]
            </div>
          )}
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            1. Armored Courier &amp; Transit Insurance
          </h4>
          <p>
            All shipments are dispatched with full transit insurance covering 100% of the piece's appraised value via specialized armored couriers (e.g. FedEx Priority Direct with adult signature and ID verification). Tracking is monitored continuously until hand delivery is executed.
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            2. Showroom Collection
          </h4>
          <p>
            Clients are welcome to schedule complimentary pickup at our private suite located at 580 Fifth Avenue, Suite 821, New York, NY 10017.
          </p>
          <h4 className="text-sm font-serif font-semibold text-slate-900 uppercase tracking-wider">
            3. 14-Day Returns &amp; Exchanges
          </h4>
          <p>
            Standard catalogue inventory in original unworn condition with intact security tags, original packaging, and unaltered IGI/GIA certificates may be returned within 14 calendar days of delivery. Bespoke, engraved, or modified custom creations are non-returnable.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAFBFD] border border-slate-200 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FAFBFD]/95 backdrop-blur-md px-5 sm:px-6 py-4 border-b border-slate-200 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
              <Icon className="w-4 h-4 text-[#8A682D]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif text-slate-900 font-medium">
                {current.title}
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A682D]">
                {current.badge}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {current.body}

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8A682D]" />
              <span>580 Fifth Avenue, Suite 821, New York, NY 10017</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
