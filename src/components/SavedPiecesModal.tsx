import React, { useEffect } from 'react';
import { X, Heart, Trash2, Send, MapPin, Sparkles } from 'lucide-react';
import { AtelierPiece, formatPiecePrice } from '../data/atelierData';

interface SavedPiecesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedPieces: AtelierPiece[];
  onRemoveSaved: (id: string) => void;
  onSelectPiece: (piece: AtelierPiece) => void;
  onEnquireAboutSaved?: (savedPieces: AtelierPiece[]) => void;
}

export const SavedPiecesModal: React.FC<SavedPiecesModalProps> = ({
  isOpen,
  onClose,
  savedPieces,
  onRemoveSaved,
  onSelectPiece,
  onEnquireAboutSaved,
}) => {
  // Listen for ESC key and handle background scroll
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate total combined price of all saved items
  const totalPrice = savedPieces.reduce((acc, piece) => {
    const num = parseInt(piece.price.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? acc : acc + num;
  }, 0);

  const formattedTotalPrice =
    totalPrice > 0
      ? new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(totalPrice)
      : 'Price Upon Request';

  const handleEnquireClick = () => {
    onClose();
    if (onEnquireAboutSaved) {
      onEnquireAboutSaved(savedPieces);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center md:justify-end p-3 sm:p-4 md:p-0 pt-16 sm:pt-4 md:pt-0 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Wishlist Drawer: Anchored to right side on desktop, modal on mobile */}
      <div
        className="bg-[#FAFBFD] border-l border-slate-200/90 w-full max-w-md md:max-w-[460px] h-full max-h-[90vh] md:max-h-full overflow-hidden shadow-2xl relative animate-in md:slide-in-from-right duration-300 text-left rounded-2xl md:rounded-l-2xl md:rounded-r-none flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200/90 shrink-0 bg-[#FAFBFD]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200/70 flex items-center justify-center text-rose-500 shrink-0">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-serif text-slate-900 font-medium truncate">
                Saved Wishlist ({savedPieces.length})
              </h3>
              <p className="text-[10px] tracking-wider uppercase text-slate-500 font-medium truncate">
                Fifth Avenue Private Curation
              </p>
            </div>
          </div>

          <button
            type="button"
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
            <div className="py-20 text-center text-slate-500 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                <Heart className="w-7 h-7 stroke-1" />
              </div>
              <h4 className="text-base font-serif text-slate-800">Your Wishlist is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Click the heart icon on any piece across the collection to save items for your private showroom viewing.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedPieces.map((piece) => (
                <div
                  key={piece.id}
                  onClick={() => {
                    onClose();
                    onSelectPiece(piece);
                  }}
                  className="flex items-center gap-3.5 p-3 bg-white border border-slate-200 hover:border-slate-400 rounded-xl transition-all shadow-2xs group cursor-pointer"
                >
                  <img
                    src={piece.image}
                    alt={piece.title}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 object-cover bg-slate-100 rounded-lg shrink-0 border border-slate-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = `/images/atelier/${piece.id}.jpg`;
                      }
                    }}
                  />

                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="text-sm font-serif text-slate-900 truncate font-medium group-hover:text-[#8A682D] transition-colors leading-tight">
                      {piece.title}
                    </h4>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">Price</span>
                      <div className="text-sm font-serif text-slate-950 font-semibold tabular-nums">
                        {formatPiecePrice(piece)}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider font-medium truncate block mt-0.5">
                      {piece.specs.carat} · {piece.specs.metal}
                    </span>
                  </div>

                  {/* Remove Item Button */}
                  <div className="shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveSaved(piece.id);
                      }}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
                      title="Remove from wishlist"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Drawer Footer with Total and "Enquire about these pieces" button */}
        {savedPieces.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-slate-200 shrink-0 space-y-3.5 shadow-lg">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold truncate">
                Total Price ({savedPieces.length} {savedPieces.length === 1 ? 'Piece' : 'Pieces'})
              </span>
              <span className="text-xl font-serif font-bold text-slate-950 tabular-nums shrink-0">
                {formattedTotalPrice}
              </span>
            </div>

            {/* "Enquire about these pieces" Button */}
            <button
              type="button"
              onClick={handleEnquireClick}
              className="w-full h-11 max-h-[44px] md:h-auto py-2.5 md:py-3.5 px-6 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs uppercase tracking-[0.1em] md:tracking-[0.16em] font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group text-center"
            >
              <Send className="w-4 h-4 text-[#E6C687] group-hover:translate-x-0.5 transition-transform" />
              <span>Enquire about these pieces</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center font-light">
              <MapPin className="w-3.5 h-3.5 text-[#8A682D]" />
              <span>Presented at Suite 821, 580 Fifth Avenue, New York</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
