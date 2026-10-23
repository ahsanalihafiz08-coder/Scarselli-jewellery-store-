import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Heart, Search, Filter, Sparkles, X, ChevronDown, RotateCcw, Calendar, ArrowRight } from 'lucide-react';
import { ALL_COLLECTION_PIECES, AtelierPiece, formatPiecePrice } from '../data/atelierData';
import { STONE_SHAPES } from './StoneSelectionSection';

interface CollectionCardProps {
  piece: AtelierPiece;
  isSaved: boolean;
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  onToggleSave: (id: string) => void;
}

const CollectionProductCard: React.FC<CollectionCardProps> = React.memo(
  ({ piece, isSaved, onSelectPiece, onToggleSave }) => {
    const displayPrice = formatPiecePrice(piece);

    return (
      <div className="group flex flex-col justify-between bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-2xs hover:shadow-md">
        {/* Visual Image Container */}
        <div
          onClick={() => onSelectPiece(piece, 'detail')}
          className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-100 mb-4 shadow-2xs cursor-pointer"
        >
          <img
            src={piece.image}
            alt={piece.title}
            width={600}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                target.src = `/images/atelier/${piece.id}.jpg`;
              }
            }}
          />

          {/* Wishlist Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(piece.id);
            }}
            className={`absolute top-3 right-3 p-2.5 rounded-full transition-all shadow-xs cursor-pointer z-10 ${
              isSaved
                ? 'bg-white text-rose-600 shadow-sm'
                : 'bg-white/90 hover:bg-white text-slate-500 hover:text-rose-600'
            }`}
            title={isSaved ? 'Saved to Wishlist' : 'Save Piece'}
            aria-label="Save to Wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? 'fill-rose-500 stroke-rose-500 text-rose-500' : ''
              }`}
            />
          </button>

          {/* Category Label */}
          <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 text-[11px] tracking-[0.16em] uppercase font-semibold text-white px-2.5 py-1 rounded shadow-xs">
            {piece.category}
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Title: Un-truncated, allows 2 clean lines */}
            <h3
              onClick={() => onSelectPiece(piece, 'detail')}
              className="text-lg sm:text-xl font-serif text-slate-900 font-normal leading-snug group-hover:text-[#8A682D] transition-colors min-h-[3rem] cursor-pointer"
            >
              {piece.title}
            </h3>

            {/* Unique One-Sentence Description */}
            <p className="text-sm text-slate-600 font-light leading-relaxed mt-2 line-clamp-2">
              {piece.description}
            </p>

            {/* 2 Key Specifications */}
            <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium text-slate-900">{piece.specs.carat}</span>
              <span className="text-slate-300">·</span>
              <span>{piece.specs.metal}</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#8A682D] font-semibold">{piece.specs.color}</span>
            </div>

            <div className="mt-1 text-[11px] text-slate-400 font-light italic text-right">
              Specifications confirmed at viewing
            </div>
          </div>

          {/* Price */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Price</div>
              <div className="text-xl sm:text-2xl font-serif font-semibold text-slate-950 tabular-nums">
                {displayPrice}
              </div>
            </div>
          </div>

          {/* Action Buttons: "View details" (secondary) and "Book private viewing" (primary) */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectPiece(piece, 'detail')}
              className="h-[40px] md:h-auto py-0 md:py-2.5 px-2 md:px-3 rounded-[10px] md:rounded-full border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 text-xs md:text-[11px] uppercase tracking-normal md:tracking-wider font-semibold transition-colors text-center cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              View details
            </button>

            <button
              type="button"
              onClick={() => onSelectPiece(piece, 'booking')}
              className="h-[40px] md:h-auto py-0 md:py-2.5 px-2 md:px-3 rounded-[10px] md:rounded-full bg-slate-900 hover:bg-[#8A682D] text-white text-xs md:text-[11px] uppercase tracking-normal md:tracking-wider font-semibold transition-colors text-center cursor-pointer shadow-2xs flex items-center justify-center whitespace-nowrap"
            >
              Book private viewing
            </button>
          </div>
        </div>
      </div>
    );
  }
);
CollectionProductCard.displayName = 'CollectionProductCard';

interface TheCollectionProps {
  onSelectPiece: (piece: AtelierPiece, mode?: 'summary' | 'detail' | 'booking') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
  selectedShapeFilter?: string;
  onClearShapeFilter?: () => void;
}

export const TheCollection: React.FC<TheCollectionProps> = ({
  onSelectPiece,
  isSaved,
  onToggleSave,
  selectedShapeFilter,
  onClearShapeFilter,
}) => {
  // Filter States
  const [activeCategory, setActiveCategory] = useState<string>('All Pieces');
  const [localShapeFilter, setLocalShapeFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('All');
  const [metalFilter, setMetalFilter] = useState<string>('All');
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>('All');
  const [searchInput, setSearchInput] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Debounce search input by 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput);
      setVisibleCount(12);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  const categories = [
    'All Pieces',
    'Rings',
    'Necklaces',
    'Earrings',
    'Bracelets',
    'Loose Diamonds',
  ];

  const stoneColors = ['All', 'White', 'Yellow', 'Pink', 'Blue', 'Green'];

  const metals = [
    'All',
    'Platinum 950',
    '18k White Gold',
    '18k Yellow Gold',
    '18k Rose Gold',
  ];

  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under $15,000', value: 'under-15k' },
    { label: '$15,000 – $30,000', value: '15k-30k' },
    { label: '$30,000 – $50,000', value: '30k-50k' },
    { label: 'Above $50,000', value: 'above-50k' },
  ];

  // Active shape filter from prop or local state
  const currentShape = selectedShapeFilter || localShapeFilter;

  // Check if any non-default filter is currently applied
  const isFiltered =
    activeCategory !== 'All Pieces' ||
    Boolean(currentShape) ||
    colorFilter !== 'All' ||
    metalFilter !== 'All' ||
    priceRangeFilter !== 'All' ||
    debouncedSearch.trim().length > 0;

  // Filter & Sort logic
  const filteredPieces = useMemo(() => {
    let result = ALL_COLLECTION_PIECES.filter((piece) => {
      // 1. Category match
      if (activeCategory !== 'All Pieces' && piece.category !== activeCategory) {
        return false;
      }

      // 2. Shape match
      if (currentShape && piece.shape !== currentShape) {
        return false;
      }

      // 3. Stone colour match
      if (colorFilter !== 'All') {
        const colorLower = (piece.specs.color || '').toLowerCase();
        const titleLower = piece.title.toLowerCase();
        const descLower = piece.description.toLowerCase();

        if (colorFilter === 'White') {
          const isWhite =
            colorLower.includes('d') ||
            colorLower.includes('e') ||
            colorLower.includes('f') ||
            colorLower.includes('g') ||
            colorLower.includes('colorless') ||
            colorLower.includes('white') ||
            (!colorLower.includes('yellow') &&
              !colorLower.includes('pink') &&
              !colorLower.includes('blue') &&
              !colorLower.includes('green'));
          if (!isWhite) return false;
        } else if (colorFilter === 'Yellow') {
          if (!colorLower.includes('yellow') && !titleLower.includes('yellow') && !descLower.includes('yellow')) {
            return false;
          }
        } else if (colorFilter === 'Pink') {
          if (!colorLower.includes('pink') && !titleLower.includes('pink') && !descLower.includes('pink')) {
            return false;
          }
        } else if (colorFilter === 'Blue') {
          if (!colorLower.includes('blue') && !titleLower.includes('blue') && !descLower.includes('blue') && !descLower.includes('sapphire')) {
            return false;
          }
        } else if (colorFilter === 'Green') {
          if (!colorLower.includes('green') && !titleLower.includes('green') && !descLower.includes('green') && !descLower.includes('emerald')) {
            return false;
          }
        }
      }

      // 4. Metal match
      if (metalFilter !== 'All' && piece.specs.metal !== metalFilter) {
        return false;
      }

      // 5. Price range match
      if (priceRangeFilter !== 'All') {
        const numPrice = parseInt(piece.price.replace(/[^0-9]/g, ''), 10) || 0;
        if (priceRangeFilter === 'under-15k' && numPrice >= 15000) return false;
        if (priceRangeFilter === '15k-30k' && (numPrice < 15000 || numPrice > 30000)) return false;
        if (priceRangeFilter === '30k-50k' && (numPrice < 30000 || numPrice > 50000)) return false;
        if (priceRangeFilter === 'above-50k' && numPrice <= 50000) return false;
      }

      // 6. Search query
      if (debouncedSearch.trim()) {
        const query = debouncedSearch.toLowerCase();
        const matchTitle = piece.title.toLowerCase().includes(query);
        const matchDesc = piece.description.toLowerCase().includes(query);
        const matchCarat = piece.specs.carat.toLowerCase().includes(query);
        const matchMetal = piece.specs.metal.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCarat && !matchMetal) {
          return false;
        }
      }

      return true;
    });

    // Sort order
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const pB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return pA - pB;
      });
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const pB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return pB - pA;
      });
    }

    return result;
  }, [activeCategory, currentShape, colorFilter, metalFilter, priceRangeFilter, debouncedSearch, sortBy]);

  const displayedPieces = filteredPieces.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPieces.length;

  const handleShapeChange = (shapeId: string) => {
    setLocalShapeFilter(shapeId);
    setVisibleCount(12);
    if (onClearShapeFilter && selectedShapeFilter) {
      onClearShapeFilter();
    }
  };

  const clearAllFilters = () => {
    setActiveCategory('All Pieces');
    setLocalShapeFilter('');
    setColorFilter('All');
    setMetalFilter('All');
    setPriceRangeFilter('All');
    setSearchInput('');
    setDebouncedSearch('');
    setSortBy('featured');
    setVisibleCount(12);
    if (onClearShapeFilter) onClearShapeFilter();
  };

  return (
    <section id="the-collection" className="pt-20 pb-32 sm:pb-40 lg:pb-48 bg-[#FAFBFD] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#8A682D] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fifth Avenue Showroom</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>All Unique Masterworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-[1.15]">
            THE COLLECTION
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mt-3">
            Explore our comprehensive catalogue of certified lab-grown diamond jewellery. Every piece is unique, hand-crafted to exacting Fifth Avenue standards, and available for private inspection.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-xs space-y-5">
          
          {/* 1. Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pb-4 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(12);
                }}
                className={`h-9 md:h-auto px-3.5 md:px-5 py-1.5 md:py-2 text-xs md:text-sm tracking-normal md:tracking-[0.12em] uppercase font-medium transition-all rounded-[10px] md:rounded-full cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2. Multi-Filter Strip: Shape, Stone Colour, Metal, Price Range, Search, Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-1">
            
            {/* Shape Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Diamond Shape
              </label>
              <div className="relative">
                <select
                  value={currentShape}
                  onChange={(e) => handleShapeChange(e.target.value)}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#8A682D] cursor-pointer font-medium"
                >
                  <option value="">All Shapes</option>
                  {STONE_SHAPES.map((shape) => (
                    <option key={shape.id} value={shape.id}>
                      {shape.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Stone Colour Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Stone Colour
              </label>
              <div className="relative">
                <select
                  value={colorFilter}
                  onChange={(e) => {
                    setColorFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#8A682D] cursor-pointer font-medium"
                >
                  {stoneColors.map((col) => (
                    <option key={col} value={col}>
                      {col === 'All' ? 'All Colours' : col}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Metal Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Metal
              </label>
              <div className="relative">
                <select
                  value={metalFilter}
                  onChange={(e) => {
                    setMetalFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#8A682D] cursor-pointer font-medium"
                >
                  {metals.map((m) => (
                    <option key={m} value={m}>
                      {m === 'All' ? 'All Metals' : m}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Price Range
              </label>
              <div className="relative">
                <select
                  value={priceRangeFilter}
                  onChange={(e) => {
                    setPriceRangeFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#8A682D] cursor-pointer font-medium"
                >
                  {priceRanges.map((pr) => (
                    <option key={pr.value} value={pr.value}>
                      {pr.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Sort Order
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#8A682D] cursor-pointer font-medium"
                >
                  <option value="featured">Featured Curation</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Search Input */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Keywords / Carat..."
                  className="w-full pl-8 pr-7 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#8A682D]"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setDebouncedSearch('');
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Result Count and Clear Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
            <div>
              Showing <strong className="text-slate-900">{displayedPieces.length}</strong> of{' '}
              <strong className="text-slate-900">{filteredPieces.length}</strong> creations
              {isFiltered && (
                <span className="text-amber-800 ml-1.5 font-medium">
                  (filtered results)
                </span>
              )}
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#8A682D] hover:text-[#5A421A] font-semibold hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear all filters</span>
              </button>
            )}
          </div>

        </div>

        {/* The Grid of Unique Pieces: Mobile is 1 large card or 2 cols, never 3 narrow columns */}
        {displayedPieces.length === 0 ? (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#8A682D] mx-auto mb-3" />
            <h3 className="text-xl font-serif text-slate-900 mb-2">No matching pieces found</h3>
            <p className="text-sm text-slate-500 mb-6">
              Adjust your search filters or browse all creations across our Fifth Avenue catalogue.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="h-11 max-h-[44px] md:h-auto px-5 md:px-6 py-2.5 rounded-[10px] md:rounded-full bg-slate-900 text-white text-xs tracking-normal md:tracking-wider uppercase font-medium hover:bg-[#8A682D] transition-colors cursor-pointer inline-flex items-center justify-center"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedPieces.map((piece) => (
              <CollectionProductCard
                key={piece.id}
                piece={piece}
                isSaved={isSaved(piece.id)}
                onSelectPiece={onSelectPiece}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        )}

        {/* Load More Button (12 items increment) */}
        {hasMore && (
          <div className="mt-10 sm:mt-16 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="h-11 max-h-[44px] md:h-auto px-6 md:px-10 py-2.5 md:py-3.5 rounded-[10px] md:rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-800 hover:text-white text-xs md:text-sm tracking-[0.1em] md:tracking-[0.16em] uppercase font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center justify-center"
            >
              Load More Pieces ({filteredPieces.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Bottom clearance spacer ensuring floating widget never overlaps bottom cards */}
        <div className="h-12 sm:h-16 w-full pointer-events-none" aria-hidden="true" />

      </div>
    </section>
  );
};
