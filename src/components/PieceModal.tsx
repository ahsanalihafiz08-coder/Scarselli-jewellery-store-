import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Check,
  Award,
  ZoomIn,
  ZoomOut,
  Camera,
  MessageCircle,
  Phone,
  Mail,
} from 'lucide-react';
import { AtelierPiece, formatPiecePrice, SHOW_PLACEHOLDERS } from '../data/atelierData';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface PieceModalProps {
  piece: AtelierPiece | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  initialMode?: 'summary' | 'detail' | 'booking';
  onPrevPiece?: () => void;
  onNextPiece?: () => void;
  hasPrevPiece?: boolean;
  hasNextPiece?: boolean;
}

export const PieceModal: React.FC<PieceModalProps> = ({
  piece,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  initialMode = 'detail',
  onPrevPiece,
  onNextPiece,
  hasPrevPiece = true,
  hasNextPiece = true,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    contact: '',
    date: '',
    notes: '',
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // Lock background scroll and listen to ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrevPiece) {
        onPrevPiece();
      } else if (e.key === 'ArrowRight' && onNextPiece) {
        onNextPiece();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Trap focus inside modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrevPiece, onNextPiece]);

  // Reset states when piece changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
    setBookingSubmitted(false);
    if (piece) {
      setBookingData((prev) => ({
        ...prev,
        notes: `Inquiry regarding ${piece.title} (${piece.specs.carat}, ${piece.specs.metal})`,
      }));
    }
  }, [piece?.id, isOpen]);

  if (!isOpen || !piece) return null;

  const displayPrice = formatPiecePrice(piece);

  // Gallery angles: 1) Master Studio Angle, 2) Side Profile Detail, 3) On-Hand Model View
  const baseGalleryAngles = [
    {
      id: 'main',
      label: 'Studio View',
      isPlaceholder: false,
      url: piece.image,
    },
    {
      id: 'angle-2',
      label: 'Side Profile',
      isPlaceholder: true,
      placeholderText: '[CLIENT TO PROVIDE: Side Angle & Gallery Detail Photo]',
    },
    {
      id: 'angle-3',
      label: 'On Model Hand',
      isPlaceholder: true,
      placeholderText: '[CLIENT TO PROVIDE: On-Model Hand Perspective Photo]',
    },
  ];

  const galleryAngles = SHOW_PLACEHOLDERS
    ? baseGalleryAngles
    : baseGalleryAngles.filter((item) => !item.isPlaceholder);

  const currentGalleryItem = galleryAngles[activeImageIndex] || galleryAngles[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const whatsappHref = `https://wa.me/19178801797?text=${encodeURIComponent(
    `Hello Scarselli, I would like to book a private viewing for "${piece.title}" (${displayPrice}) at 580 Fifth Avenue.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-[#FAFBFD] border border-slate-200 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200 text-left outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Sticky Header with Navigation Arrows and Actions */}
        <div className="sticky top-0 z-30 bg-[#FAFBFD]/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200/90 flex items-center justify-between rounded-t-2xl">
          
          {/* Previous / Next Piece Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onPrevPiece}
              disabled={!hasPrevPiece}
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Previous Piece"
              aria-label="Previous piece"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-slate-500">
              Piece Navigation
            </span>
            <button
              type="button"
              onClick={onNextPiece}
              disabled={!hasNextPiece}
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Next Piece"
              aria-label="Next piece"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right actions: Wishlist & Close */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(piece.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title={isSaved ? 'Remove from Wishlist' : 'Save to Wishlist'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 stroke-rose-500' : 'stroke-slate-500'}`} />
              <span className="hidden sm:inline font-medium">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close popup"
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-4 sm:p-8 space-y-8">
          
          {/* Top Section: Gallery & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Visual Gallery with Large Image & Thumbnails */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Large Image Container with Zoom */}
              <div
                className={`relative aspect-square overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
              >
                {!currentGalleryItem.isPlaceholder ? (
                  <img
                    src={piece.image}
                    alt={piece.title}
                    width={800}
                    height={800}
                    loading="eager"
                    className={`w-full h-full object-cover transition-transform duration-200 ${
                      isZoomed ? 'scale-225' : 'hover:scale-110'
                    }`}
                    style={
                      isZoomed
                        ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                        : undefined
                    }
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = `/images/atelier/${piece.id}.jpg`;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-50 border border-dashed border-slate-300">
                    <Camera className="w-8 h-8 text-slate-400 mb-2" />
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                      {currentGalleryItem.placeholderText}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      High-resolution studio photography to be provided for this perspective.
                    </p>
                  </div>
                )}

                {/* Zoom status indicator */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 pointer-events-none shadow-xs">
                  {isZoomed ? <ZoomOut className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
                  <span>{isZoomed ? 'Click to minimize' : 'Click / Hover to zoom'}</span>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold text-white px-2.5 py-1 rounded shadow-xs">
                  {piece.category}
                </div>
              </div>

              {/* Gallery Thumbnails (Only rendered when multiple views are available) */}
              {galleryAngles.length > 1 && (
                <div className="grid grid-cols-3 gap-2.5">
                  {galleryAngles.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveImageIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col items-center gap-1 ${
                        activeImageIndex === idx
                          ? 'border-slate-900 bg-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="w-full aspect-square rounded overflow-hidden bg-slate-100 flex items-center justify-center">
                        {!item.isPlaceholder ? (
                          <img
                            src={piece.image}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-600 font-medium truncate w-full text-center">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}

            </div>

            {/* Product Meta & Highlights */}
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
              
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8A682D] mb-1">
                  Scarselli Fifth Avenue
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif text-slate-900 font-light leading-snug">
                  {piece.title}
                </h1>

                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Price</div>
                  <div className="text-2xl sm:text-3xl font-serif text-slate-950 font-semibold mt-0.5 tabular-nums">
                    {displayPrice}
                  </div>
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed mt-3">
                  {piece.description}
                </p>
              </div>

              {/* Full Specifications Grid */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#8A682D]" />
                    <span>Gemological Specifications</span>
                  </div>
                  <span className="text-[11px] text-slate-400 italic">
                    Confirmed at viewing
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Mounting Metal</span>
                    <span className="text-slate-900 font-medium">{piece.specs.metal}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Carat Weight</span>
                    <span className="text-slate-900 font-medium">{piece.specs.carat}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Color Grade</span>
                    <span className="text-slate-900 font-medium">{piece.specs.color}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Clarity Grade</span>
                    <span className="text-slate-900 font-medium">{piece.specs.clarity}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Cut Grade</span>
                    <span className="text-slate-900 font-medium">{piece.specs.cut}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">Diamond Origin</span>
                    <span className="text-slate-900 font-medium">Lab-Grown Type IIa</span>
                  </div>
                </div>

                {/* Certification Note */}
                <div className="pt-2 flex items-start gap-2 text-xs text-slate-600">
                  <Award className="w-4 h-4 text-[#8A682D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Certification Note:</strong> Accompanied by official IGI / GIA laboratory grading dossier with microscopic laser inscription verification.
                  </p>
                </div>
              </div>

              {/* Direct Concierge Contact Strip */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 h-11 max-h-[44px] md:h-auto py-2.5 px-3 rounded-[10px] md:rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold tracking-normal md:tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A682D]" />
                  <span>Call Atelier</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-11 max-h-[44px] md:h-auto py-2.5 px-3 rounded-[10px] md:rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-normal md:tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Section: Short "Book private viewing" form pre-filled with product name */}
          <div className="pt-6 border-t border-slate-200">
            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
              
              <div className="border-b border-slate-100 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-serif text-slate-900 font-normal">
                    Book Private Viewing for "{piece.title}"
                  </h3>
                  <p className="text-xs text-slate-500">
                    Suite 821, 580 Fifth Avenue, New York · Dedicated private presentation
                  </p>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-[#8A682D] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-start sm:self-auto">
                  Complimentary Appointment
                </span>
              </div>

              {bookingSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-serif text-slate-900">
                    Viewing Scheduled
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{bookingData.fullName}</strong>. Your private consultation for "{piece.title}" on {bookingData.date || 'your requested date'} is registered. Bruno Scarselli or our Fifth Avenue team will confirm via {bookingData.contact}.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setBookingSubmitted(false)}
                      className="text-xs uppercase tracking-wider text-slate-700 underline hover:text-slate-950 font-medium cursor-pointer"
                    >
                      Schedule another appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.fullName}
                        onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                        placeholder="e.g. Victoria Sterling"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none"
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                      Piece &amp; Ring Sizing Notes
                    </label>
                    <textarea
                      rows={2}
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="e.g. Ring size 6.5, matching suite inquiry..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFBFD] border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-11 max-h-[44px] md:h-auto py-2.5 md:py-3.5 rounded-[10px] md:rounded-full text-xs uppercase tracking-[0.1em] md:tracking-[0.18em] font-semibold text-white bg-slate-900 hover:bg-[#8A682D] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#E6C687]" />
                      <span>Confirm Private Appointment for {piece.title}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
