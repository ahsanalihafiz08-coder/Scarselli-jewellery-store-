/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AtelierArchive22 } from './components/AtelierArchive22';
import { CuratedSuites9 } from './components/CuratedSuites9';
import { AtelierCatalog36 } from './components/AtelierCatalog36';
import { MotionShowcase48 } from './components/MotionShowcase48';
import { SecondaryCurated9 } from './components/SecondaryCurated9';
import { Craftsmanship } from './components/Craftsmanship';
import { CustomerTrust } from './components/CustomerTrust';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PieceModal } from './components/PieceModal';
import { EnquiryModal } from './components/EnquiryModal';
import { SavedPiecesModal } from './components/SavedPiecesModal';
import { AiChatbotWidget } from './components/AiChatbotWidget';
import { StoneSelectionSection } from './components/StoneSelectionSection';
import { StoneInventoryModal } from './components/StoneInventoryModal';
import {
  ARCHIVE_22_PIECES,
  SUITES_9_PIECES,
  CATALOG_36_PIECES,
  MOTION_48_PIECES,
  SECONDARY_9_PIECES,
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
    const all = [
      ...ARCHIVE_22_PIECES,
      ...SUITES_9_PIECES,
      ...CATALOG_36_PIECES,
      ...MOTION_48_PIECES,
      ...SECONDARY_9_PIECES,
    ];
    all.forEach((p) => {
      if (!map.has(p.id)) map.set(p.id, p);
    });
    return map;
  }, []);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const savedPiecesList = useMemo(() => {
    return savedIds
      .map((id) => allPiecesMap.get(id))
      .filter((p): p is AtelierPiece => Boolean(p));
  }, [savedIds, allPiecesMap]);

  const handleSelectPiece = (piece: AtelierPiece, mode: 'summary' | 'detail' | 'booking' = 'detail') => {
    setSelectedPiece(piece);
    setModalMode(mode);
  };

  const handleOpenGeneralEnquiry = (topic?: string) => {
    setEnquiryTopic(topic);
    setIsGeneralEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 font-sans selection:bg-[#E3EFF7] selection:text-[#17253B]">
      
      {/* 1. Navigation & Header (left-aligned smaller logo + 3-line layout structure) */}
      <Header
        onOpenEnquiry={handleOpenGeneralEnquiry}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenGeneralEnquiry('Hero Enquire')} />

        {/* 3. New Lab Grown Diamond Stone Selection Section */}
        <StoneSelectionSection
          onOpenInventory={(shapeId) => {
            if (shapeId) setSelectedShapeId(shapeId);
            setIsInventoryOpen(true);
          }}
        />

        {/* 4. 22-Piece Atelier Archive Section */}
        <AtelierArchive22
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* 5. Curated Suites & Timepieces Section */}
        <CuratedSuites9
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* 6. Atelier Catalog (36-Piece Section) */}
        <AtelierCatalog36
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* 7. Atelier Highlights in Motion */}
        <MotionShowcase48
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* 8. Secondary Curated Section */}
        <SecondaryCurated9
          onSelectPiece={handleSelectPiece}
          isSaved={isSaved}
          onToggleSave={toggleSave}
        />

        {/* Craftsmanship Principles */}
        <Craftsmanship />

        {/* Customer Trust & 5.0 Star Rating */}
        <CustomerTrust />

        {/* 9. Contact & Showroom Section */}
        <ContactSection />
      </main>

      {/* Luxury Footer with Original Icons and Verified Links */}
      <Footer />

      {/* Piece Modal (Summary mode or Detailed Curation & Booking mode) */}
      <PieceModal
        piece={selectedPiece}
        isOpen={Boolean(selectedPiece)}
        onClose={() => setSelectedPiece(null)}
        isSaved={selectedPiece ? isSaved(selectedPiece.id) : false}
        onToggleSave={toggleSave}
        initialMode={modalMode}
      />

      {/* General Boutique Enquiry Modal */}
      <EnquiryModal
        isOpen={isGeneralEnquiryOpen}
        onClose={() => setIsGeneralEnquiryOpen(false)}
        initialTopic={enquiryTopic}
      />

      {/* Saved Pieces / Wishlist Modal */}
      <SavedPiecesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedPieces={savedPiecesList}
        onRemoveSaved={toggleSave}
        onSelectPiece={(piece) => handleSelectPiece(piece, 'detail')}
        onOpenBookingGeneral={() => handleOpenGeneralEnquiry('Saved Pieces Curated Selection')}
      />

      {/* Stone Inventory & Ring Sizing Modal */}
      <StoneInventoryModal
        isOpen={isInventoryOpen}
        onClose={() => setIsInventoryOpen(false)}
        initialShapeId={selectedShapeId}
      />

      {/* Right-Side Floating Dock: AI Chatbot Concierge, WhatsApp, and Phone Access */}
      <AiChatbotWidget
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenBooking={(topic) => handleOpenGeneralEnquiry(topic)}
      />

    </div>
  );
}
