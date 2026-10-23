import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StoneSelectionSection } from './components/StoneSelectionSection';
import { FeaturedPieces } from './components/FeaturedPieces';
import { TheCollection } from './components/TheCollection';
import { Craftsmanship } from './components/Craftsmanship';
import { CustomerTrust } from './components/CustomerTrust';
import { AboutFounder } from './components/AboutFounder';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PieceModal } from './components/PieceModal';
import { EnquiryModal } from './components/EnquiryModal';
import { SavedPiecesModal } from './components/SavedPiecesModal';
import { StoneInventoryModal } from './components/StoneInventoryModal';
import { PolicyModal, PolicyType } from './components/PolicyModals';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import {
  ALL_COLLECTION_PIECES,
  AtelierPiece,
} from './data/atelierData';

export default function App() {
  // Global modal state
  const [selectedPiece, setSelectedPiece] = useState<AtelierPiece | null>(null);
  const [modalMode, setModalMode] = useState<'summary' | 'detail' | 'booking'>('detail');
  const [isGeneralEnquiryOpen, setIsGeneralEnquiryOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState<string | undefined>(undefined);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [selectedShapeId, setSelectedShapeId] = useState('round');
  const [selectedShapeFilter, setSelectedShapeFilter] = useState<string>('');
  const [contactPrefill, setContactPrefill] = useState<{ message?: string; interest?: string }>({});
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  // Saved/Hearted items state with localStorage persistence
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('scarselli_saved_pieces');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('scarselli_saved_pieces', JSON.stringify(savedIds));
    } catch {
      // ignore
    }
  }, [savedIds]);

  // All pieces map for quick lookup
  const allPiecesMap = useMemo(() => {
    const map = new Map<string, AtelierPiece>();
    ALL_COLLECTION_PIECES.forEach((p) => {
      if (!map.has(p.id)) map.set(p.id, p);
    });
    return map;
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  const savedPiecesList = useMemo(() => {
    return savedIds
      .map((id) => allPiecesMap.get(id))
      .filter((p): p is AtelierPiece => Boolean(p));
  }, [savedIds, allPiecesMap]);

  const handleSelectPiece = useCallback(
    (piece: AtelierPiece, mode: 'summary' | 'detail' | 'booking' = 'detail') => {
      setSelectedPiece(piece);
      setModalMode(mode);
    },
    []
  );

  // Previous / Next piece cycling inside the popup
  const currentPieceIndex = useMemo(() => {
    if (!selectedPiece) return -1;
    return ALL_COLLECTION_PIECES.findIndex((p) => p.id === selectedPiece.id);
  }, [selectedPiece]);

  const handlePrevPiece = () => {
    if (currentPieceIndex === -1) return;
    const prevIndex =
      currentPieceIndex > 0 ? currentPieceIndex - 1 : ALL_COLLECTION_PIECES.length - 1;
    setSelectedPiece(ALL_COLLECTION_PIECES[prevIndex]);
  };

  const handleNextPiece = () => {
    if (currentPieceIndex === -1) return;
    const nextIndex =
      currentPieceIndex < ALL_COLLECTION_PIECES.length - 1 ? currentPieceIndex + 1 : 0;
    setSelectedPiece(ALL_COLLECTION_PIECES[nextIndex]);
  };

  const handleOpenGeneralEnquiry = (topic?: string) => {
    setEnquiryTopic(topic);
    setIsGeneralEnquiryOpen(true);
  };

  // Enquire about saved pieces fills the contact form and scrolls smoothly
  const handleEnquireAboutSaved = (pieces: AtelierPiece[]) => {
    setIsSavedModalOpen(false);
    const pieceList = pieces.map((p) => `• ${p.title} (${p.price}, ${p.specs.carat})`).join('\n');
    setContactPrefill({
      message: `Hello Bruno Scarselli,\n\nI would like to enquire about the following saved pieces from my wishlist:\n${pieceList}\n\nPlease let me know your availability for a private consultation at Suite 821.`,
      interest: 'Fifth Avenue Private Appointment',
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 font-sans selection:bg-[#E3EFF7] selection:text-[#17253B] relative">
      
      {/* 1. Navigation & Header with working Wishlist counter */}
      <Header
        onOpenEnquiry={handleOpenGeneralEnquiry}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
      />

      <main className="flex-1 pb-16">
        {/* 2. Hero Section (Dark Immersive) */}
        <Hero onOpenEnquiry={() => handleOpenGeneralEnquiry('Hero Enquire')} />

        {/* 3. Lab Grown Diamond Shapes Section (Soft Grey) */}
        <StoneSelectionSection
          onSelectShapeFilter={(shapeId) => {
            setSelectedShapeFilter(shapeId);
          }}
          onOpenInventory={(shapeId) => {
            if (shapeId) {
              setSelectedShapeId(shapeId);
              setSelectedShapeFilter(shapeId);
            }
            setIsInventoryOpen(true);
          }}
        />

        {/* 4. Featured Pieces (White) */}
        <FeaturedPieces
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* 5. The Collection (Soft Grey) */}
        <TheCollection
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
          selectedShapeFilter={selectedShapeFilter}
          onClearShapeFilter={() => setSelectedShapeFilter('')}
        />

        {/* 6. Craftsmanship Section (Deep Navy/Charcoal) */}
        <Craftsmanship />

        {/* 7. Testimonials & Proof (White) */}
        <CustomerTrust />

        {/* 8. About Bruno Scarselli Founder Section (Soft Grey) */}
        <AboutFounder onOpenBooking={(topic) => handleOpenGeneralEnquiry(topic)} />

        {/* 9. FAQ & Policies Accordion (White) */}
        <FaqSection />

        {/* 10. Contact & Showroom Section (Soft Grey) */}
        <ContactSection
          prefilledMessage={contactPrefill.message}
          prefilledInterest={contactPrefill.interest}
        />
      </main>

      {/* Luxury Footer (Slate) */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Product Popup (Zoom on click/hover, gallery thumbnails, specs, certification note, booking form, ESC/focus trap, prev/next arrows) */}
      <PieceModal
        piece={selectedPiece}
        isOpen={Boolean(selectedPiece)}
        onClose={() => setSelectedPiece(null)}
        isSaved={selectedPiece ? isSaved(selectedPiece.id) : false}
        onToggleSave={toggleSave}
        initialMode={modalMode}
        onPrevPiece={handlePrevPiece}
        onNextPiece={handleNextPiece}
        hasPrevPiece={true}
        hasNextPiece={true}
      />

      {/* General Boutique Enquiry Modal */}
      <EnquiryModal
        isOpen={isGeneralEnquiryOpen}
        onClose={() => setIsGeneralEnquiryOpen(false)}
        initialTopic={enquiryTopic}
      />

      {/* Saved Pieces / Wishlist Drawer with "Enquire about these pieces" button */}
      <SavedPiecesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedPieces={savedPiecesList}
        onRemoveSaved={toggleSave}
        onSelectPiece={(piece) => handleSelectPiece(piece, 'detail')}
        onEnquireAboutSaved={handleEnquireAboutSaved}
      />

      {/* Stone Inventory & Ring Sizing Modal */}
      <StoneInventoryModal
        isOpen={isInventoryOpen}
        onClose={() => setIsInventoryOpen(false)}
        initialShapeId={selectedShapeId}
      />

      {/* Legal & Policies Modals (Privacy, Terms, Shipping & Returns) */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Single Expanding Floating Contact Button (Call / WhatsApp / Email) */}
      <FloatingContactWidget />

    </div>
  );
}
