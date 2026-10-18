import React, { useMemo } from 'react';
import { X, Heart, Calendar, Trash2 } from 'lucide-react';
import { AtelierPiece } from '../data/atelierData';

interface SavedPiecesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedPieces: AtelierPiece[];
  onRemoveSaved: (id: string) => void;
  onSelectPiece: (piece: AtelierPiece) => void;
  onOpenBookingGeneral?: () => void;
}

export const SavedPiecesModal: React.FC<SavedPiecesModalProps> = ({
  isOpen,
  onClose,
  savedPieces,
  onRemoveSaved,
  onSelectPiece,
  onOpenBookingGeneral,
}) => {
  if (!isOpen) return null;

  // Calculate total combined price of all saved items
  const totalPrice = savedPieces.reduce((acc, piece) => {
    const num = parseInt(piece.price.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? acc : acc + num;
  }, 0);

  const formattedTotalPrice = totalPrice > 0
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalPrice)
    : 'Price Upon Request';

  const handleMainBooking = () => {
    onClose();
    if (onOpenBookingGeneral) {
      onOpenBookingGeneral();
    } else if (savedPieces.length > 0) {
      onSelectPiece(savedPieces[0]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center md:justify-end p-3 sm:p-4 md:p-0 pt-16 sm:pt-4 md:pt-0 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Wishlist popup: clean vertical layout on mobile, and vertically anchored to right side on desktop */}
      <div
        className="bg-[#FAFBFD] border border-slate-200/90 w-[calc(100vw-24px)] max-w-md md:max-w-[460px] md:h-full max-h-[85vh] md:max-h-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 md:zoom-in-100 md:slide-in-from-right duration-300 text-left rounded-2xl md:rounded-l-2xl md:rounded-r-none flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200/90 shrink-0 bg-[#FAFBFD]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-500 shrink-0">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-serif text-slate-900 font-medium truncate">
                Your Saved Pieces ({savedPieces.length})
              </h3>
              <p className="text-[10px] tracking-wider uppercase text-slate-400 font-medium truncate">
                Atelier Wishlist & Curated Selection
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Wishlist"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {savedPieces.length === 0 ? (
            <div className="py-16 text-center text-slate-500 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-300">
                <Heart className="w-6 h-6 stroke-1" />
              </div>
              <p className="text-sm font-light text-slate-700">You have not saved any pieces yet.</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Click the heart icon on any card in the catalog or archives to curate your private selection.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {savedPieces.map((piece) => (
                <div
                  key={piece.id}
                  onClick={() => {
                    onClose();
                    onSelectPiece(piece);
                  }}
                  className="flex items-center gap-3 p-2.5 sm:p-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-2xs group cursor-pointer"
                >
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover bg-slate-100 rounded-lg shrink-0 border border-slate-100"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80';
                      }
                    }}
                  />
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="text-xs sm:text-sm font-serif text-slate-900 truncate font-medium group-hover:text-[#B5925A] transition-colors leading-tight">
                      {piece.title}
                    </h4>
                    <div className="text-xs text-[#B5925A] font-semibold tabular-nums mt-0.5">
                      {piece.price}
                    </div>
                    <span className="text-[9px] uppercase text-slate-400 tracking-wider font-medium truncate block mt-0.5">
                      {piece.category}
                    </span>
                  </div>

                  {/* Only Remove Trash button (Individual BOOKING button removed as requested) */}
                  <div className="shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveSaved(piece.id);
                      }}
                      className="p-1.5 sm:p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Total Price and Single Main Booking Button */}
        {savedPieces.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-slate-200 shrink-0 space-y-3 shadow-lg">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 font-semibold truncate">
                Total Valuation ({savedPieces.length} {savedPieces.length === 1 ? 'Piece' : 'Pieces'})
              </span>
              <span className="text-base sm:text-xl font-serif font-bold text-[#B5925A] tabular-nums shrink-0">
                {formattedTotalPrice}
              </span>
            </div>

            {/* Single Main Booking Button */}
            <button
              type="button"
              onClick={handleMainBooking}
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full bg-slate-950 hover:bg-[#B5925A] text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group text-center"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6C687] group-hover:text-white transition-colors shrink-0" />
              <span className="truncate">Book Viewing For Saved Selection</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center font-light truncate">
              Private consultation at 580 Fifth Avenue, Suite 821, New York
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
