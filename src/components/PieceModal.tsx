import React, { useState } from 'react';
import { X, Heart, MessageCircle, Phone, Calendar, Check, Sparkles, Mail } from 'lucide-react';
import { AtelierPiece } from '../data/atelierData';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface PieceModalProps {
  piece: AtelierPiece | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  initialMode?: 'summary' | 'detail' | 'booking';
}

export const PieceModal: React.FC<PieceModalProps> = ({
  piece,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  initialMode = 'detail',
}) => {
  const [viewMode, setViewMode] = useState<'detail' | 'booking'>(
    initialMode === 'booking' ? 'booking' : 'detail'
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    contact: '',
    date: '',
    timeSlot: '11:00 AM - 12:30 PM',
    specialRequests: '',
  });

  // Reset view when new piece opens
  React.useEffect(() => {
    setViewMode(initialMode === 'booking' ? 'booking' : 'detail');
    setBookingSubmitted(false);
  }, [piece?.id, initialMode, isOpen]);

  if (!isOpen || !piece) return null;

  const whatsappHref = `https://wa.me/19178801797?text=${encodeURIComponent(
    `Hello Scarselli, I would like to enquire about "${piece.title}" (${piece.price}) located at 580 Fifth Avenue.`
  )}`;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAFBFD] border border-slate-200/90 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip with Category, Wishlist Heart and Close */}
        <div className="sticky top-0 z-20 bg-[#FAFBFD]/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#B5925A]">
              Scarselli Atelier
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">{piece.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Save Heart Button */}
            <button
              onClick={() => onToggleSave(piece.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save Item'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 stroke-rose-500' : 'stroke-slate-500'}`} />
              <span className="hidden sm:inline font-medium">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
              <img
                src={piece.image}
                alt={piece.title}
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = `/images/atelier/${piece.id}.jpg`;
                  }
                }}
              />
              <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs text-[10px] tracking-wider uppercase px-2 py-0.5 rounded text-slate-700 font-semibold border border-slate-200">
                580 Fifth Ave
              </div>
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal tracking-wide leading-snug">
                  {piece.title}
                </h3>
                <div className="text-base sm:text-lg font-serif text-[#B5925A] font-semibold mt-1 tabular-nums">
                  {piece.price}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5 break-words">
                  {piece.description}
                </p>
              </div>

              {/* View Details and Booking View Buttons placed correctly as primary action buttons with perfect alignment */}
              <div className="pt-3 border-t border-slate-200/80">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setViewMode('detail')}
                    className={`py-2.5 px-2 sm:px-4 rounded-full text-[11px] sm:text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-xs ${
                      viewMode === 'detail'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B5925A] shrink-0" />
                    <span className="truncate">View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode('booking')}
                    className={`py-2.5 px-2 sm:px-4 rounded-full text-[11px] sm:text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-xs ${
                      viewMode === 'booking'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">Booking View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View Details Content */}
          {viewMode === 'detail' && (
            <div className="pt-4 border-t border-slate-200 space-y-6 animate-in fade-in duration-200">
              {/* Atelier Curation Highlights */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#B5925A]" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900">
                    Atelier Curation Highlights
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {piece.curationHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Boutique Contact Options with exact round shape buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#B5925A]" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.emailHref}
                  className="flex-1 min-w-[160px] py-2.5 px-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Enquire Email</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Booking View Content */}
          {viewMode === 'booking' && (
            <div className="pt-4 border-t border-slate-200 space-y-6 animate-in fade-in duration-200">
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-2xs">
                {bookingSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif text-slate-900">
                      Private Appointment Scheduled
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold">{bookingData.fullName}</span>. Your private viewing for "{piece.title}" on {bookingData.date || 'your selected date'} at {bookingData.timeSlot} is confirmed. A concierge advisor will contact you at {bookingData.contact}.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setBookingSubmitted(false)}
                        className="text-xs uppercase tracking-wider text-slate-700 underline hover:text-slate-950 font-medium"
                      >
                        Modify Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-serif text-slate-900 font-normal">
                          Reserve a Private Boutique Viewing
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Suite 821, 580 Fifth Avenue · Dedicated one-on-one consultation
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#B5925A] bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
                        Complimentary
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.fullName}
                          onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                          Phone or Email *
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.contact}
                          onChange={(e) => setBookingData({ ...bookingData, contact: e.target.value })}
                          placeholder="+1 (917) 880-1797"
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                          Preferred Time Slot
                        </label>
                        <select
                          value={bookingData.timeSlot}
                          onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
                        >
                          <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning)</option>
                          <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM (Midday)</option>
                          <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM (Afternoon)</option>
                          <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM (Late Afternoon)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                        Special Requests / Ring Sizing / Custom Notes
                      </label>
                      <textarea
                        rows={2}
                        value={bookingData.specialRequests}
                        onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                        placeholder="e.g. Ring size 6.5, matching diamond necklace inquiry..."
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                    >
                      Confirm Private Appointment
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
