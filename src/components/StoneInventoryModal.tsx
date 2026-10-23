import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, Mail, Award, Check, MessageSquare, Star } from 'lucide-react';
import { STONE_SHAPES, DiamondShapeIcon } from './StoneSelectionSection';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface StoneInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialShapeId?: string;
}

const RING_SIZES = [
  'US 4.0', 'US 4.5', 'US 5.0', 'US 5.5', 'US 6.0',
  'US 6.5', 'US 7.0', 'US 7.5', 'US 8.0', 'US 8.5',
  'US 9.0', 'US 9.5', 'US 10.0', 'Custom Size'
];

const DIAMOND_COLORS = [
  { name: 'D', tier: 'Collection Colorless', hex: '#FFFFFF', desc: 'Highest possible optical grade' },
  { name: 'E', tier: 'Collection Colorless', hex: '#FAFBFD', desc: 'Virtually identical to D' },
  { name: 'F', tier: 'Collection Colorless', hex: '#F5F7FA', desc: 'Top-tier pure brilliance' },
  { name: 'G-H', tier: 'Near Colorless', hex: '#F0F2F5', desc: 'Exceptional face-up white value' },
  { name: 'Fancy Intense Yellow', tier: 'Vibrant Canary', hex: '#FEE08B', desc: 'Rich golden canary saturation' },
  { name: 'Fancy Vivid Yellow', tier: 'Imperial Yellow', hex: '#FDBB2D', desc: 'Rare vivid royal brilliance' },
  { name: 'Fancy Intense Pink', tier: 'Argyle Rose', hex: '#FBB6CE', desc: 'Coveted romantic blush hue' },
];

const CARAT_WEIGHTS = ['1.00 ct', '1.50 ct', '2.00 ct', '2.50 ct', '3.00 ct', '4.00 ct', '5.00+ ct'];

const METALS = [
  { name: '18K Yellow Gold', color: 'bg-amber-100 border-amber-300 text-amber-900' },
  { name: '18K White Gold', color: 'bg-slate-100 border-slate-300 text-slate-800' },
  { name: '18K Rose Gold', color: 'bg-rose-100 border-rose-300 text-rose-900' },
  { name: 'Platinum 950', color: 'bg-slate-200 border-slate-400 text-slate-900' },
];

export const StoneInventoryModal: React.FC<StoneInventoryModalProps> = ({
  isOpen,
  onClose,
  initialShapeId = 'round',
}) => {
  const [selectedShapeId, setSelectedShapeId] = useState<string>(initialShapeId);
  const [selectedSize, setSelectedSize] = useState<string>('US 6.5');
  const [selectedColor, setSelectedColor] = useState<string>('D');
  const [selectedCarat, setSelectedCarat] = useState<string>('2.00 ct');
  const [selectedMetal, setSelectedMetal] = useState<string>('Platinum 950');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialShapeId) {
      setSelectedShapeId(initialShapeId);
    }
  }, [initialShapeId, isOpen]);

  if (!isOpen) return null;

  const activeShape = STONE_SHAPES.find((s) => s.id === selectedShapeId) || STONE_SHAPES[0];

  const enquiryMessage = `Hello Scarselli Atelier (580 Fifth Ave, Suite 821),
I would like to enquire about the following IGI/GIA Certified Lab Grown Diamond Inventory item:
- Stone Shape: ${activeShape.name} (${activeShape.cutBadge})
- Carat Weight: ${selectedCarat}
- Color Grade: ${selectedColor}
- Ring Size: ${selectedSize}
- Metal Setting: ${selectedMetal}
${customerName ? `- Name: ${customerName}` : ''}
${customerPhone ? `- Phone/Contact: ${customerPhone}` : ''}
${notes ? `- Custom Notes: ${notes}` : ''}`;

  const whatsappHref = `https://wa.me/19178801797?text=${encodeURIComponent(enquiryMessage)}`;
  const emailHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Inventory Enquiry: ${activeShape.name} Diamond (${selectedCarat}, ${selectedColor}, ${selectedSize})`
  )}&body=${encodeURIComponent(enquiryMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAFBFD] border border-slate-200/90 max-w-3xl w-full max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 bg-[#FAFBFD]/95 backdrop-blur-md px-5 sm:px-8 py-4 border-b border-slate-200/90 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#B5925A]/15 border border-[#B5925A]/40 flex items-center justify-center text-[#B5925A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-medium text-slate-900">
                Lab Grown Diamond Inventory & Custom Sizing
              </h3>
              <p className="text-[11px] text-[#B5925A] font-semibold tracking-wider uppercase">
                580 Fifth Avenue, Suite 821 · IGI / GIA Certified
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 space-y-7">
          
          {/* Step 1: Select Diamond Cut / Shape */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                1. Select Diamond Shape ({STONE_SHAPES.length} Certified Cuts)
              </label>
              <span className="text-xs text-[#B5925A] font-semibold font-serif">
                Selected: {activeShape.name}
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {STONE_SHAPES.map((stone) => {
                const isSelected = stone.id === selectedShapeId;
                return (
                  <button
                    key={stone.id}
                    type="button"
                    onClick={() => setSelectedShapeId(stone.id)}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#B5925A] shadow-xs ring-2 ring-[#B5925A]/30'
                        : 'bg-white/60 hover:bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center mb-1">
                      <DiamondShapeIcon shapeId={stone.id} className="w-full h-full" />
                    </div>
                    <span className="text-[10px] font-serif font-medium truncate w-full">
                      {stone.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Carat Weight */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                2. Carat Weight
              </label>
              <span className="text-xs text-[#B5925A] font-semibold">
                {selectedCarat}
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {CARAT_WEIGHTS.map((carat) => (
                <button
                  key={carat}
                  type="button"
                  onClick={() => setSelectedCarat(carat)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                    selectedCarat === carat
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {carat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Select Diamond Color Grade */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                3. Diamond Color Grade
              </label>
              <span className="text-xs text-[#B5925A] font-semibold">
                {selectedColor}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DIAMOND_COLORS.map((col) => (
                <button
                  key={col.name}
                  type="button"
                  onClick={() => setSelectedColor(col.name)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                    selectedColor === col.name
                      ? 'bg-white border-[#B5925A] shadow-xs ring-2 ring-[#B5925A]/30'
                      : 'bg-white/70 hover:bg-white border-slate-200'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-slate-300 shrink-0 mt-0.5 shadow-2xs"
                    style={{ backgroundColor: col.hex }}
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-900">
                      {col.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-light truncate">
                      {col.tier}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Ring Size & Metal Setting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Ring Sizing */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                  4. Ring Size
                </label>
                <span className="text-xs text-[#B5925A] font-semibold">
                  {selectedSize}
                </span>
              </div>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-3 text-xs bg-white border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none transition-colors"
              >
                {RING_SIZES.map((sz) => (
                  <option key={sz} value={sz}>{sz}</option>
                ))}
              </select>
              <p className="text-[10px] text-slate-500 mt-1 font-light">
                Complimentary bespoke sizing provided at our Fifth Avenue showroom.
              </p>
            </div>

            {/* Precious Metal */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                  5. Metal Setting
                </label>
                <span className="text-xs text-[#B5925A] font-semibold">
                  {selectedMetal}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {METALS.map((m) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => setSelectedMetal(m.name)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      selectedMetal === m.name
                        ? 'bg-white border-[#B5925A] shadow-xs font-semibold text-slate-900 ring-2 ring-[#B5925A]/30'
                        : 'bg-white/60 hover:bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Specification Summary Card with Star Icons and Rating Formatting */}
          <div className="bg-[#FAF6EC] border border-[#B5925A]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#B5925A]/30 p-2 shrink-0 flex items-center justify-center shadow-xs">
                <DiamondShapeIcon shapeId={activeShape.id} className="w-full h-full" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-serif font-bold text-slate-900">
                    {selectedCarat} {activeShape.name} Brilliant
                  </h4>
                  <span className="text-[10px] uppercase font-semibold text-[#B5925A] bg-white px-2 py-0.5 rounded-full border border-[#B5925A]/30">
                    IGI / GIA Certified
                  </span>
                  <div className="inline-flex items-center gap-0.5 text-[#B5925A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#B5925A] stroke-[#B5925A]" />
                    ))}
                    <span className="text-[11px] font-semibold text-slate-800 ml-1">5.0 ★</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  Color: <strong className="text-slate-900">{selectedColor}</strong> · Size: <strong className="text-slate-900">{selectedSize}</strong> · Setting: <strong className="text-slate-900">{selectedMetal}</strong>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 font-light">
                  580 Fifth Avenue, Suite 821, New York, New York, 10017
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-white/90 px-3 py-1.5 rounded-full border border-emerald-200 shrink-0 self-start sm:self-auto">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Available for Immediate Reserve</span>
            </div>
          </div>

          {/* Optional Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Victoria Sterling"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-slate-600 mb-1">
                Phone Number or Email (Optional)
              </label>
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+1 (917) 880-1797"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-slate-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Direct Action Buttons - Clean curved/rounded corners */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Enquiry Button */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 max-h-[44px] md:h-auto py-2.5 md:py-3.5 px-6 rounded-[10px] md:rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-[0.1em] md:tracking-[0.16em] font-semibold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Enquire via WhatsApp</span>
              </a>

              {/* Email Atelier Button */}
              <a
                href={emailHref}
                className="h-11 max-h-[44px] md:h-auto py-2.5 md:py-3.5 px-6 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-[0.1em] md:tracking-[0.16em] font-semibold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#E6C687]" />
                <span>Enquire via Email</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center font-light pt-1">
              Direct consultation with Bruno Scarselli at <a href={BUSINESS_INFO.phoneHref} className="underline text-slate-800 font-semibold">{BUSINESS_INFO.phone}</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
