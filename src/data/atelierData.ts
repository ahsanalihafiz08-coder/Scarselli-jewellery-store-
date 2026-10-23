export interface DiamondSpecs {
  metal: 'Platinum 950' | '18k White Gold' | '18k Yellow Gold' | '18k Rose Gold';
  diamondType: 'Lab Grown (IGI & GIA Certified)';
  carat: string;
  color: string;
  clarity: string;
  cut: string;
  shape?: string;
}

export interface AtelierPiece {
  id: string;
  title: string;
  image: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Loose Diamonds';
  shape?: string;
  price: string;
  description: string;
  curationHighlights: string[];
  specs: DiamondSpecs;
}

/**
 * Global placeholder display configuration:
 * Set `SHOW_PLACEHOLDERS = true` to display placeholder blocks for client-provided assets.
 * When false, sections and modals render cleanly without placeholder boxes.
 */
export const SHOW_PLACEHOLDERS = false;

/**
 * Global pricing configuration:
 * Set `priceOnRequest: true` to switch all display prices across the boutique to "Price on request".
 */
export const ATELIER_CONFIG = {
  priceOnRequest: false,
  priceOnRequestText: 'Price on request',
};

export function formatPiecePrice(piece: AtelierPiece): string {
  if (ATELIER_CONFIG.priceOnRequest) {
    return ATELIER_CONFIG.priceOnRequestText;
  }
  return piece.price;
}

/**
 * 10 Hand-Curated Premier Featured Pieces for the luxury slider
 */
export const FEATURED_PIECES: AtelierPiece[] = [
  {
    "id": "arch-1",
    "title": "The Aurelia Martini Studs",
    "image": "https://i.ibb.co/4RKj8TBV/Stud-earrings-with-diamonds-20261021062205.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$12,500",
    "description": "Signature three-prong martini stud earrings set in high-polish Platinum 950 for a low-profile, secure fit against the earlobe.",
    "curationHighlights": [
      "Lab-Grown Type IIa Diamond",
      "Platinum 950 Hand-Finished Setting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-3",
    "title": "The Eterna Low-Profile Solitaire",
    "image": "https://i.ibb.co/JNSwFsP/Diamond-engagement-ring-on-beige-20261021062021.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,500",
    "description": "Classic round brilliant solitaire ring set with delicate claw prongs upon an unadorned platinum knife-edge band.",
    "curationHighlights": [
      "Lab-Grown Type IIa Diamond",
      "Four Delicate Claw Prongs",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.65 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-8",
    "title": "The Vivienne Two-Stone Bypass Ring",
    "image": "https://i.ibb.co/S48C7gpD/Two-stone-ring-on-gold-band-20261021061917.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$22,500",
    "description": "Warm 18k yellow gold bypass band holding two round brilliant diamonds in an asymmetric open balance.",
    "curationHighlights": [
      "Solid 18k Yellow Gold Mounting",
      "Dual Focal Brilliant Diamonds",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-14",
    "title": "The Bianca Royal Sapphire Studs",
    "image": "https://i.ibb.co/YBRbZCQR/Sapphire-blue-gemstone-stud-earr-20261021061646.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$21,000",
    "description": "Luminous royal blue sapphire solitaires set in platinum four-prong baskets with screw-back luxury posts.",
    "curationHighlights": [
      "Fine Royal Blue Sapphires",
      "Platinum 950 Four-Prong Posts",
      "Accompanied by Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "Deep Royal Blue",
      "clarity": "VVS Clarity",
      "cut": "Round Brilliant",
      "shape": "round"
    }
  },
  {
    "id": "arch-21",
    "title": "The Francesca Adjustable Bolo Bracelet",
    "image": "https://i.ibb.co/MkWjZG5R/Diamond-bolo-bracelet-on-silk-20261021061325.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$24,500",
    "description": "Continuous line of brilliant diamonds anchored by an adjustable platinum drawstring bolo bead with tassel ends.",
    "curationHighlights": [
      "Adjustable Drawstring Slider",
      "Flexible Wrist Ergonomics",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-4",
    "title": "The Lucia Hexagonal Pavé Hoops",
    "image": "https://i.ibb.co/qLBbk5R9/Hexagonal-hoop-earrings-on-cloth-20261021061302.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$14,500",
    "description": "Geometric six-sided huggie hoop earrings bordered by hand-set micro-diamonds on both interior and exterior facets.",
    "curationHighlights": [
      "Distinctive Hexagonal Profile",
      "Precision Click Closure",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.75 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-9",
    "title": "The Rosalind Negative-Space Ring",
    "image": "https://i.ibb.co/TxS2KyGc/Diamond-ring-with-open-space-20261021061246.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$31,000",
    "description": "Modern open-space band where floating diamonds appear suspended in mid-air between parallel platinum rails.",
    "curationHighlights": [
      "Architectural Floating Setting",
      "Negative Space Design",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-8",
    "title": "The Zephyrine Low-Profile Solitaire",
    "image": "https://i.ibb.co/WvmcZkJy/Ring-on-silver-display-block-20261021061037.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,000",
    "description": "Clean low-set basket ring designed to sit flush alongside wedding bands on a high-polish silver display.",
    "curationHighlights": [
      "Flush-Fit Basket Engineering",
      "Ideal Proportioned Table",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.65 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-14",
    "title": "The Flora Victorian Cluster Ring",
    "image": "https://i.ibb.co/V0VsM80N/Victorian-inspired-cluster-ring-20261021060958.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,000",
    "description": "Vintage floral ring showcasing a central round diamond encircled by eight petal-set companion stones with milgrain accents.",
    "curationHighlights": [
      "Victorian Flower Head Setting",
      "Fine Milgrain Details",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-23",
    "title": "The Odette Shared-Prong Eternity Band",
    "image": "https://i.ibb.co/PZv63SJZ/Diamond-band-ring-displayed-20261021060929.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$24,000",
    "description": "Seamless platinum band featuring shared-prong settings that maximize the exposed surface of each calibrated diamond.",
    "curationHighlights": [
      "Shared-Prong Geometry",
      "Full 360-Degree Fire",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  }
];

/**
 * The unified complete collection of all 124 unique creations (Rings, Necklaces, Earrings, Bracelets, Loose Diamonds)
 */
export const ALL_COLLECTION_PIECES: AtelierPiece[] = [
  {
    "id": "arch-1",
    "title": "The Aurelia Martini Studs",
    "image": "https://i.ibb.co/4RKj8TBV/Stud-earrings-with-diamonds-20261021062205.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$12,500",
    "description": "Signature three-prong martini stud earrings set in high-polish Platinum 950 for a low-profile, secure fit against the earlobe.",
    "curationHighlights": [
      "Lab-Grown Type IIa Diamond",
      "Platinum 950 Hand-Finished Setting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-2",
    "title": "The Celeste Bezel Studs",
    "image": "https://i.ibb.co/LX85YDL2/Diamond-stud-earrings-on-surface-20261021062157.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$14,200",
    "description": "Minimalist bezel-framed round brilliant diamond stud earrings mounted in smooth Platinum 950 for an understated silhouette.",
    "curationHighlights": [
      "Lab-Grown Type IIa Diamond",
      "Platinum 950 Flush Bezel Mounting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-3",
    "title": "The Eterna Low-Profile Solitaire",
    "image": "https://i.ibb.co/JNSwFsP/Diamond-engagement-ring-on-beige-20261021062021.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,500",
    "description": "Classic round brilliant solitaire ring set with delicate claw prongs upon an unadorned platinum knife-edge band.",
    "curationHighlights": [
      "Lab-Grown Type IIa Diamond",
      "Four Delicate Claw Prongs",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.65 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-4",
    "title": "The Royal Sapphire & Diamond Parure",
    "image": "https://i.ibb.co/DHW166XK/Sapphire-jewelry-set-displayed-20261021062015.jpg",
    "category": "Earrings",
    "shape": "oval",
    "price": "$38,000",
    "description": "Regal fine jewellery suite featuring deep cushion-cut Ceylon sapphires framed by sparkling round diamond halo mountings.",
    "curationHighlights": [
      "Fine Sapphire & Certified Lab Diamond Accents",
      "Platinum 950 Hand-Set Mountings",
      "Grading Report & Authenticity Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.50 ctw",
      "color": "Royal Velvet Blue",
      "clarity": "Eye Clean",
      "cut": "Custom Brilliant Cut",
      "shape": "oval"
    }
  },
  {
    "id": "arch-5",
    "title": "The Seraphina Channel Eternity Band",
    "image": "https://i.ibb.co/39Q7pyrX/Platinum-diamond-eternity-weddin-20261021062007.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$19,500",
    "description": "Continuous ring of calibrated round brilliant diamonds securely recessed between protective platinum channel borders.",
    "curationHighlights": [
      "Full Channel Platinum Mounting",
      "Calibrated Matching Brilliant Stones",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-6",
    "title": "The Solstice Bridal Ring Duo",
    "image": "https://i.ibb.co/5gMCH1CP/Wedding-ring-set-on-backdrop-20261021062000.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$34,000",
    "description": "Harmonious wedding set combining a solitaire diamond engagement ring with a contoured pavé-set companion band.",
    "curationHighlights": [
      "Coordinated Bridal Set",
      "Interlocking Platinum Curves",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-7",
    "title": "The Genevieve Multi-Band Stacking Ring",
    "image": "https://i.ibb.co/9mFmH414/Diamond-rings-on-backdrop-20261021061929.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$26,000",
    "description": "Sculptural multi-row statement ring featuring staggered pavé ribbons of brilliant-cut diamonds across a dimensional platinum frame.",
    "curationHighlights": [
      "Multi-Row Stacking Silhouette",
      "Platinum 950 Micro-Pavé Craftsmanship",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-8",
    "title": "The Vivienne Two-Stone Bypass Ring",
    "image": "https://i.ibb.co/S48C7gpD/Two-stone-ring-on-gold-band-20261021061917.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$22,500",
    "description": "Warm 18k yellow gold bypass band holding two round brilliant diamonds in an asymmetric open balance.",
    "curationHighlights": [
      "Solid 18k Yellow Gold Mounting",
      "Dual Focal Brilliant Diamonds",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-9",
    "title": "The Isadora Toi et Moi Duo",
    "image": "https://i.ibb.co/mCJjfGmB/Toi-et-Moi-ring-displayed-20261021061916.jpg",
    "category": "Rings",
    "shape": "pear",
    "price": "$29,500",
    "description": "Expressive platinum toi-et-moi ring juxtaposing a teardrop pear diamond with a brilliant round companion stone.",
    "curationHighlights": [
      "Iconic Toi et Moi Sentiment",
      "Pear & Round Matched Pair",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "pear"
    }
  },
  {
    "id": "arch-10",
    "title": "The Juliette Dangling Solitaire Ring",
    "image": "https://i.ibb.co/1GDn6K52/Gold-ring-with-diamond-drop-20261021061822.jpg",
    "category": "Rings",
    "shape": "pear",
    "price": "$18,500",
    "description": "Polished 18k yellow gold band suspending a free-swinging pear diamond charm that shimmers with every gesture.",
    "curationHighlights": [
      "Solid 18k Yellow Gold Architecture",
      "Dangling Diamond Drop Motif",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.75 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "pear"
    }
  },
  {
    "id": "arch-11",
    "title": "The Marcella Scalloped Eternity Band",
    "image": "https://i.ibb.co/Q7MgB9jv/Diamond-eternity-band-on-silk-20261021061759.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$17,000",
    "description": "Delicately scalloped platinum band pavé-encrusted with uniform diamonds around the full circumference.",
    "curationHighlights": [
      "Full Eternity Scalloped Profile",
      "Micro-Pavé Precision Finish",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-12",
    "title": "The Helena Pigeon Blood Ruby Ring",
    "image": "https://i.ibb.co/xqdYG5xQ/Ruby-ring-on-stone-block-20261021061753.jpg",
    "category": "Rings",
    "shape": "oval",
    "price": "$45,000",
    "description": "Vivid red oval ruby held in a high-polished four-prong platinum mounting and flanked by tapered diamond shoulders.",
    "curationHighlights": [
      "Certified Vivid Pigeon Blood Ruby",
      "Platinum 950 Hand-Made Basket",
      "Laboratory Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.40 ct",
      "color": "Vivid Pigeon Blood Red",
      "clarity": "Fine Gem Grade",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "arch-13",
    "title": "The Simone Emerald & Diamond Drops",
    "image": "https://i.ibb.co/bRvctqCY/Emerald-and-diamond-drop-earrings-20261021061653.jpg",
    "category": "Earrings",
    "shape": "emerald",
    "price": "$42,000",
    "description": "Graceful evening drop earrings suspending glowing octagonal emeralds connected by graduated round brilliant diamonds.",
    "curationHighlights": [
      "Vivid Green Natural Emeralds",
      "Brilliant Diamond Connectors",
      "Accompanied by Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.20 ctw",
      "color": "Vivid Forest Green",
      "clarity": "Transparent Fine",
      "cut": "Emerald Cut",
      "shape": "emerald"
    }
  },
  {
    "id": "arch-14",
    "title": "The Bianca Royal Sapphire Studs",
    "image": "https://i.ibb.co/YBRbZCQR/Sapphire-blue-gemstone-stud-earr-20261021061646.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$21,000",
    "description": "Luminous royal blue sapphire solitaires set in platinum four-prong baskets with screw-back luxury posts.",
    "curationHighlights": [
      "Fine Royal Blue Sapphires",
      "Platinum 950 Four-Prong Posts",
      "Accompanied by Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "Deep Royal Blue",
      "clarity": "VVS Clarity",
      "cut": "Round Brilliant",
      "shape": "round"
    }
  },
  {
    "id": "arch-15",
    "title": "The Callista Pavé Cross Earrings",
    "image": "https://i.ibb.co/n8zx6qDS/Cross-shaped-diamond-earrings-20261021061637.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$13,500",
    "description": "Architectural Latin cross motif earrings completely covered with brilliant micro-pavé diamonds in Platinum 950.",
    "curationHighlights": [
      "Graphic Cross Silhouette",
      "Hand-Set Micro-Pavé Field",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-16",
    "title": "The Ophelia Four-Prong Basket Studs",
    "image": "https://i.ibb.co/tpZcxL5x/Diamond-stud-earrings-on-surface-20261021061627.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$15,800",
    "description": "Matched pair of round brilliant diamonds resting in classic four-prong open wire baskets for maximum pavilion exposure.",
    "curationHighlights": [
      "Open-Wire Basket Mountings",
      "Optically Matched Lab Diamonds",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.00 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-17",
    "title": "The Astrid Marquise Sapphire Ring",
    "image": "https://i.ibb.co/zT8XcRZS/Marquise-sapphire-ring-on-tile-20261021061451.jpg",
    "category": "Rings",
    "shape": "marquise",
    "price": "$27,000",
    "description": "Elongated marquise-cut midnight blue sapphire framed by tapered baguette diamonds on a polished platinum band.",
    "curationHighlights": [
      "Marquise Sapphire Focal Stone",
      "Tapered Baguette Diamond Shoulders",
      "Accompanied by Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.90 ct",
      "color": "Midnight Blue",
      "clarity": "Eye Clean",
      "cut": "Marquise Brilliant",
      "shape": "marquise"
    }
  },
  {
    "id": "arch-18",
    "title": "The Cassia D-Flawless Specimen",
    "image": "https://i.ibb.co/4gfzV82D/Diamond-resting-on-silk-cloth-20261021061335.jpg",
    "category": "Loose Diamonds",
    "shape": "round",
    "price": "$24,000",
    "description": "Unmounted round brilliant diamond specimen resting on neutral silk to display its fire and pavilion symmetry.",
    "curationHighlights": [
      "Unmounted Investment Grade Diamond",
      "Hearts & Arrows Precision Optics",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ct",
      "color": "D (Colorless)",
      "clarity": "Flawless",
      "cut": "Hearts & Arrows Ideal",
      "shape": "round"
    }
  },
  {
    "id": "arch-19",
    "title": "The Delphine Open Lattice Band",
    "image": "https://i.ibb.co/7B44xry/Diamond-lattice-ring-on-dish-20261021061332.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$16,500",
    "description": "Wide platinum band patterned with an intricate openwork diamond lattice that glimmers against the skin.",
    "curationHighlights": [
      "Openwork Geometric Lattice",
      "Breathable Ergonomic Fit",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-20",
    "title": "The Eléonore Graduated Collar",
    "image": "https://i.ibb.co/Y4m66MCf/Diamond-choker-necklace-on-silk-20261021061330.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$68,000",
    "description": "Fluid graduated choker necklace set with brilliant round diamonds that contour smoothly around the collarbone.",
    "curationHighlights": [
      "High-Jewellery Graduated Line",
      "Seamless Hand-Linked Platinum Links",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "14.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-21",
    "title": "The Francesca Adjustable Bolo Bracelet",
    "image": "https://i.ibb.co/MkWjZG5R/Diamond-bolo-bracelet-on-silk-20261021061325.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$24,500",
    "description": "Continuous line of brilliant diamonds anchored by an adjustable platinum drawstring bolo bead with tassel ends.",
    "curationHighlights": [
      "Adjustable Drawstring Slider",
      "Flexible Wrist Ergonomics",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "arch-22",
    "title": "The Giselle Riviera Tennis Bracelet",
    "image": "https://i.ibb.co/jvKgFm5G/Diamond-bracelet-on-ivory-silk-20261021061316.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$32,000",
    "description": "Classic four-prong tennis bracelet with uniform round brilliant diamonds linked in high-polish platinum.",
    "curationHighlights": [
      "Four-Prong Individual Links",
      "Concealed Double-Safety Clasp",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "7.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-1",
    "title": "The Héloïse Fancy Yellow Bypass Ring",
    "image": "https://i.ibb.co/3mkZ2Mkf/Bypass-ring-with-yellow-diamond-20261021061312.jpg",
    "category": "Rings",
    "shape": "radiant",
    "price": "$35,000",
    "description": "Asymmetric crossover ring showcasing a vibrant fancy yellow cushion diamond paired with an icy white companion stone.",
    "curationHighlights": [
      "Fancy Vivid Yellow Main Stone",
      "18k Yellow Gold & Platinum Mount",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ctw",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS2",
      "cut": "Radiant Cut",
      "shape": "radiant"
    }
  },
  {
    "id": "suite-2",
    "title": "The Inès Split-Shank Pavé Ring",
    "image": "https://i.ibb.co/7d37D7bs/Split-band-ring-featuring-diamonds-20261021061311.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$23,000",
    "description": "Round brilliant center stone elevated above dual pavé-set split shoulders that frame the finger with light.",
    "curationHighlights": [
      "Architectural Split Shoulders",
      "Micro-Pavé Accents",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-3",
    "title": "The Katrina Cushion Cathedral Ring",
    "image": "https://i.ibb.co/7tMQsrCw/Ring-on-display-pad-20261021061307.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$29,000",
    "description": "Pillow-cut cushion diamond suspended in an elegant cathedral basket with discreet under-halo diamonds.",
    "curationHighlights": [
      "Romantic Cushion Silhouette",
      "Cathedral Arch Architecture",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Modified Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "suite-4",
    "title": "The Lucia Hexagonal Pavé Hoops",
    "image": "https://i.ibb.co/qLBbk5R9/Hexagonal-hoop-earrings-on-cloth-20261021061302.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$14,500",
    "description": "Geometric six-sided huggie hoop earrings bordered by hand-set micro-diamonds on both interior and exterior facets.",
    "curationHighlights": [
      "Distinctive Hexagonal Profile",
      "Precision Click Closure",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.75 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-5",
    "title": "The Mathilde Slate Halo Solitaire",
    "image": "https://i.ibb.co/3ZFXW3t/Diamond-ring-on-slate-tile-20261021061258.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$27,500",
    "description": "Round center stone nestled inside a delicate micro-pavé halo on a mirror-polished platinum shank.",
    "curationHighlights": [
      "Micro-Pavé Halo Accent",
      "Flawless Polish Finish",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-6",
    "title": "The Noémie Knife-Edge Solitaire",
    "image": "https://i.ibb.co/W4WWtHB0/Platinum-ring-on-linen-surface-20261021061255.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$25,000",
    "description": "Crisp knife-edge platinum shank converging toward four refined claws cradling an unblemished brilliant diamond.",
    "curationHighlights": [
      "Knife-Edge Band Contour",
      "Internally Flawless Center Stone",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.30 ct",
      "color": "D (Colorless)",
      "clarity": "IF",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-7",
    "title": "The Octavia Platinum Mesh Ribbon Bracelet",
    "image": "https://i.ibb.co/HcYkbhK/Diamond-mesh-ribbon-bracelet-res-20261021061250.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$39,000",
    "description": "Silken woven platinum mesh strap embellished with flush diamond stations that flexes like fabric across the wrist.",
    "curationHighlights": [
      "Supple Platinum Mesh Weave",
      "Flush Diamond Accents",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "5.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-8",
    "title": "The Penelope Diamond Link Ribbon Bracelet",
    "image": "https://i.ibb.co/7t5sTq1t/Diamond-platinum-mesh-ribbon-bra-20261021061248.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$41,000",
    "description": "Multi-row articulated mesh band forged in dense Platinum 950, securing with a concealed box clasp.",
    "curationHighlights": [
      "Dense Platinum Link Construction",
      "Integrated Safety Lock",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "6.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "suite-9",
    "title": "The Rosalind Negative-Space Ring",
    "image": "https://i.ibb.co/TxS2KyGc/Diamond-ring-with-open-space-20261021061246.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$31,000",
    "description": "Modern open-space band where floating diamonds appear suspended in mid-air between parallel platinum rails.",
    "curationHighlights": [
      "Architectural Floating Setting",
      "Negative Space Design",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-1",
    "title": "The Sabine Pear Silhouette Drops",
    "image": "https://i.ibb.co/QvhKMy88/Diamond-earrings-on-white-silk-20261021061242.jpg",
    "category": "Earrings",
    "shape": "pear",
    "price": "$17,500",
    "description": "Graceful evening earrings suspending teardrop diamonds from slender diamond-set platinum earwires.",
    "curationHighlights": [
      "Pear Brilliant Focal Drops",
      "Flexible Platinum Drop Wires",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "cat-2",
    "title": "The Therese Silk-Layed Teardrop Drops",
    "image": "https://i.ibb.co/1t1wCD2Y/Diamond-earrings-on-silk-20261021061240.jpg",
    "category": "Earrings",
    "shape": "pear",
    "price": "$18,800",
    "description": "Scintillating pear-cut diamonds suspended from linear diamond bars designed to catch flickering candlelight.",
    "curationHighlights": [
      "Slender Linear Drop Bar",
      "Matched Lab-Grown Pears",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "cat-3",
    "title": "The Ursula Hexagonal Geometric Ring",
    "image": "https://i.ibb.co/ZRHJRzd3/Hexagon-diamond-ring-on-tray-20261021061239.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$22,000",
    "description": "Bold hexagonal halo framing a central brilliant-cut diamond over an architectural plateau.",
    "curationHighlights": [
      "Modern Hexagonal Halo",
      "Geometric Platinum Plateau",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.10 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-4",
    "title": "The Victoria Bezel Solitaire",
    "image": "https://i.ibb.co/zWYy5yzW/Platinum-ring-on-concrete-block-20261021061116.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$26,500",
    "description": "Protective platinum bezel encircling a round brilliant diamond upon a substantial architectural band.",
    "curationHighlights": [
      "Full Platinum Bezel Rim",
      "Substantial Solid Shank",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-5",
    "title": "The Willa Classic Six-Prong Ring",
    "image": "https://i.ibb.co/DHZBmSZn/Diamond-ring-on-limestone-slab-20261021061110.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$33,000",
    "description": "Time-honored six-prong crown securing an exceptional round brilliant diamond above a tapered band.",
    "curationHighlights": [
      "Six-Prong Heritage Crown",
      "Tapered Comfort-Fit Band",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-6",
    "title": "The Xanthe Dish-Cradled Solitaire",
    "image": "https://i.ibb.co/BVQKF7fh/Diamond-ring-on-ceramic-dish-20261021061104.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$20,500",
    "description": "Petite claw prongs rising from a sleek mirror-finished platinum band to highlight a bright center stone.",
    "curationHighlights": [
      "Low-Set Wire Basket",
      "High-Luster Platinum Finish",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.90 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-7",
    "title": "The Yvaine Tension-Set Floating Ring",
    "image": "https://i.ibb.co/qLTq8tjb/Diamond-ring-suspended-between-p-20261021061054.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$24,000",
    "description": "Brilliant diamond suspended by opposing tension arms of solid platinum, letting light penetrate unobstructed.",
    "curationHighlights": [
      "Tension Suspension Design",
      "Unobscured 360-Degree Light",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.20 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-8",
    "title": "The Zephyrine Low-Profile Solitaire",
    "image": "https://i.ibb.co/WvmcZkJy/Ring-on-silver-display-block-20261021061037.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,000",
    "description": "Clean low-set basket ring designed to sit flush alongside wedding bands on a high-polish silver display.",
    "curationHighlights": [
      "Flush-Fit Basket Engineering",
      "Ideal Proportioned Table",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.65 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-9",
    "title": "The Adelaide Deco Cocktail Ring",
    "image": "https://i.ibb.co/pv09GFb8/Diamond-cocktail-ring-on-fabric-20261021061023.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$37,000",
    "description": "Elaborate cocktail ring boasting stepped diamond halos and geometric openwork inspired by 1920s Fifth Avenue.",
    "curationHighlights": [
      "Art Deco Geometric Geometry",
      "Multi-Tiered Diamond Plateau",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-10",
    "title": "The Beatrice Diamond Bezel Watch Cuff",
    "image": "https://i.ibb.co/1GY9HHrJ/Diamond-encrusted-watch-bezel-on-20261021061015.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$45,000",
    "description": "Luxurious timepiece cuff ringed with double pavé diamond halos and integrated into a fluid platinum bracelet.",
    "curationHighlights": [
      "Diamond-Encrusted Bezel",
      "Hand-Finished Platinum Bracelet Link",
      "Accompanied by Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-11",
    "title": "The Cordelia Bridge-Suspension Ring",
    "image": "https://i.ibb.co/0pLxrqT1/Diamond-ring-suspended-between-p-20261021061010.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$34,500",
    "description": "Substantial round brilliant stone hovering between heavy platinum bridge terminals for an airy architectural profile.",
    "curationHighlights": [
      "Bridge Suspension Mount",
      "Thick Platinum Shoulders",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.00 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-12",
    "title": "The Diana Satin-Cushioned Solitaire",
    "image": "https://i.ibb.co/rKp29dHL/Diamond-engagement-ring-on-satin-20261021061007.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$31,500",
    "description": "Graceful tapered band lifting an optical brilliant round diamond in an elevated four-prong trellis cradle.",
    "curationHighlights": [
      "Trellis Prong Weave",
      "High-Polish Tapered Shank",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.75 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-13",
    "title": "The Evangeline Pear Cluster Drops",
    "image": "https://i.ibb.co/kVFyzH7v/Diamond-drop-earrings-on-silk-20261021061003.jpg",
    "category": "Earrings",
    "shape": "pear",
    "price": "$21,000",
    "description": "Dangling drop earrings uniting a cluster of brilliant round stones with an expressive teardrop pear terminal.",
    "curationHighlights": [
      "Graduated Drop Assembly",
      "Secure Platinum Leverbacks",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "cat-14",
    "title": "The Flora Victorian Cluster Ring",
    "image": "https://i.ibb.co/V0VsM80N/Victorian-inspired-cluster-ring-20261021060958.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,000",
    "description": "Vintage floral ring showcasing a central round diamond encircled by eight petal-set companion stones with milgrain accents.",
    "curationHighlights": [
      "Victorian Flower Head Setting",
      "Fine Milgrain Details",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-15",
    "title": "The Guinevere Antique Floral Cluster",
    "image": "https://i.ibb.co/ymcdxSDY/Victorian-inspired-cluster-ring-20261021060951.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$26,000",
    "description": "Romantic blossom-inspired cluster ring crafted in platinum with open back-wire work for pure light passage.",
    "curationHighlights": [
      "Floral Blossom Basket",
      "Open Wire Under-Gallery",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-16",
    "title": "The Honorine Diamond Ear Cuff",
    "image": "https://i.ibb.co/hRnP7yjw/Diamond-ear-cuff-on-fabric-20261021060949.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$8,900",
    "description": "Non-pierced curved platinum band set with sparkling micro-diamonds designed to hug the middle cartilage of the ear.",
    "curationHighlights": [
      "No-Piercing Flexible Grip",
      "Smooth Rounded Platinum Rim",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.10 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-17",
    "title": "The Illyria Satin Ear Climber",
    "image": "https://i.ibb.co/bMCBS96F/Diamond-ear-cuff-on-satin-20261021060947.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$9,800",
    "description": "Ergonomic graduated diamond ear climber curving naturally up the lobe with a comfortable spring-wire grip.",
    "curationHighlights": [
      "Graduated Ascending Curve",
      "Spring Wire Backing",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.30 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-18",
    "title": "The Jacqueline Pavé Solitaire Ring",
    "image": "https://i.ibb.co/3m3VwVM5/Diamond-ring-on-backdrop-20261021060944.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$27,000",
    "description": "Round brilliant center stone poised atop a slender band paved halfway with micro-diamonds on a deep studio backdrop.",
    "curationHighlights": [
      "Half-Eternity Pavé Shank",
      "Petite Talon Claws",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-19",
    "title": "The Kallisto Princess Cut Solitaire",
    "image": "https://i.ibb.co/d0DMNk0m/Diamond-ring-with-princess-cut-s-20261021060938.jpg",
    "category": "Rings",
    "shape": "princess",
    "price": "$25,500",
    "description": "Geometric square princess-cut diamond gripped by four protective chevron corner v-prongs in platinum.",
    "curationHighlights": [
      "V-Prong Chevron Protection",
      "Modern Square Faceting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Princess Brilliant",
      "shape": "princess"
    }
  },
  {
    "id": "cat-20",
    "title": "The Lavinia D-Flawless Master Cut",
    "image": "https://i.ibb.co/7JDqmNfm/Diamond-on-display-tray-20261021060941.jpg",
    "category": "Loose Diamonds",
    "shape": "round",
    "price": "$27,000",
    "description": "Loose round brilliant Type IIa diamond presented in a velvet evaluation tray to show off supreme crystal clarity.",
    "curationHighlights": [
      "Unset Master Stone",
      "Type IIa Chemical Purity",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ct",
      "color": "D (Colorless)",
      "clarity": "Flawless",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-21",
    "title": "The Mirabelle Medium Pavé Hoops",
    "image": "https://i.ibb.co/qFsmpsqJ/Diamond-hoop-earrings-on-cloth-20261021060935.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$12,800",
    "description": "Medium circular hoop earrings set with micro-pavé diamonds along the forward-facing perimeter.",
    "curationHighlights": [
      "Seamless Hidden Click Post",
      "Forward-Facing Brilliance",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-22",
    "title": "The Nicolette Oval Hoops",
    "image": "https://i.ibb.co/FbY090vC/Diamond-hoop-earrings-on-silk-20261021060933.jpg",
    "category": "Earrings",
    "shape": "oval",
    "price": "$15,500",
    "description": "Elongated oval hoop earrings lined inside and out with brilliant diamonds to maintain sparkle from every angle.",
    "curationHighlights": [
      "Inside-Out Pavé Technique",
      "Elongating Oval Shape",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.00 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "cat-23",
    "title": "The Odette Shared-Prong Eternity Band",
    "image": "https://i.ibb.co/PZv63SJZ/Diamond-band-ring-displayed-20261021060929.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$24,000",
    "description": "Seamless platinum band featuring shared-prong settings that maximize the exposed surface of each calibrated diamond.",
    "curationHighlights": [
      "Shared-Prong Geometry",
      "Full 360-Degree Fire",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-24",
    "title": "The Paulina Floating Solitaire Pendant",
    "image": "https://i.ibb.co/FLWJFTJw/Diamond-sliding-on-platinum-chain-20261021060927.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$14,000",
    "description": "Bezel-drilled round diamond gliding freely along a delicate platinum cable chain for minimal weight and maximum spark.",
    "curationHighlights": [
      "Free-Sliding Bezel Setting",
      "Fine Platinum Cable Chain",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.50 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-25",
    "title": "The Quenby Ceramic Blossom Ring",
    "image": "https://i.ibb.co/RpwTt64y/Diamond-cluster-ring-on-ceramic-20261021060924.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$21,500",
    "description": "Intricate tiered cluster of glittering diamonds arranged in concentric floral petals on a polished platinum base.",
    "curationHighlights": [
      "Concentric Tiered Halo",
      "Comfort Dome Silhouette",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-26",
    "title": "The Roxane Graduated Riviera Necklace",
    "image": "https://i.ibb.co/5Xp4LWhy/Diamond-necklace-draped-on-bust-20261021060920.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$58,000",
    "description": "Dramatic high-jewellery riviera necklace with graduated round diamonds culminating in a substantial center stone on display.",
    "curationHighlights": [
      "Graduated Symmetrical Line",
      "Three-Prong Linked Mountings",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "11.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-27",
    "title": "The Sylvia Y-Drop Lariat",
    "image": "https://i.ibb.co/h3CYq6h/Diamond-lariat-necklace-on-bust-20261021060918.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$23,000",
    "description": "Sensual Y-silhouette lariat necklace adorned with diamond stations and terminating in a dangling pear diamond drop.",
    "curationHighlights": [
      "Modern Lariat Drop Form",
      "Adjustable Platinum Slide",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Teardrop Brilliant",
      "shape": "round"
    }
  },
  {
    "id": "cat-28",
    "title": "The Talia Open-Finger Bypass Ring",
    "image": "https://i.ibb.co/N2xptVjv/Open-finger-ring-on-display-block-20261021060915.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$25,000",
    "description": "Contemporary open-finger band spanning two diamond clusters that embrace the knuckle with modern finesse.",
    "curationHighlights": [
      "Open Architecture Bypass",
      "Twin Balanced Clusters",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-29",
    "title": "The Valeria Block-Resting Solitaire",
    "image": "https://i.ibb.co/JjtDLmLJ/Ring-resting-on-display-block-20261021060914.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$31,000",
    "description": "High-set solitaire ring mounted on a tapered platinum band that allows maximum ambient light into the diamond pavilion.",
    "curationHighlights": [
      "Open High-Elevation Basket",
      "Tapered Mirror Shank",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-30",
    "title": "The Winslet Dome Cluster Cocktail Ring",
    "image": "https://i.ibb.co/67Ywqr5r/Diamond-cocktail-ring-on-fabric-20261021060909.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$39,500",
    "description": "Opulent bombé dome cocktail ring covered in a shimmering carpet of brilliant pavé diamonds.",
    "curationHighlights": [
      "Curved Bombé Architecture",
      "Full Micro-Pavé Encrustation",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-31",
    "title": "The Ximena Satin-Laid Tennis Line",
    "image": "https://i.ibb.co/21KYqZ3P/Diamond-tennis-bracelet-on-satin-20261021060900.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$34,000",
    "description": "Flexible platinum line bracelet linked by four-prong baskets holding brilliant round diamonds of uniform diameter.",
    "curationHighlights": [
      "Uniform Calibrated Line",
      "Concealed Safety Box Clasp",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "7.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-32",
    "title": "The Yasmin Fluted Shank Engagement Ring",
    "image": "https://i.ibb.co/gcbJvRF/Diamond-ring-on-gray-surface-20261021060855.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$29,000",
    "description": "Fine fluted engraving along the platinum band draws focus toward a pristine round brilliant centerpiece.",
    "curationHighlights": [
      "Hand-Carved Fluted Detail",
      "Four Classic Talon Claws",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-33",
    "title": "The Zenaida Fancy Vivid Yellow Cushion Cut",
    "image": "https://i.ibb.co/TDYT5Cf8/Yellow-diamond-gemstone-on-display-20261021060848.jpg",
    "category": "Loose Diamonds",
    "shape": "cushion",
    "price": "$28,000",
    "description": "Spectacular loose fancy vivid yellow diamond displaying deep canary saturation and radiant facet patterning.",
    "curationHighlights": [
      "Fancy Vivid Yellow Saturation",
      "High Dispersion Cushion Cut",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS1",
      "cut": "Modified Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "cat-34",
    "title": "The Amara Crown-Set Studs",
    "image": "https://i.ibb.co/XkG4mHVb/Diamond-stud-earrings-on-cloth-20261021060851.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$16,500",
    "description": "Round brilliant diamond studs held in regal eight-prong crown coronets for extra security and vintage allure.",
    "curationHighlights": [
      "Eight-Prong Coronet Mount",
      "Heavy Friction Backings",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.00 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-35",
    "title": "The Bellerose Bezel Solitaire Pendant",
    "image": "https://i.ibb.co/hxCjN9hf/Diamond-pendant-on-silk-surface-20261021060844.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$15,000",
    "description": "Round brilliant diamond encircled by a razor-thin platinum rim on a whisper-light wheat chain.",
    "curationHighlights": [
      "Minimalist Bezel Edge",
      "Fine Platinum Wheat Chain",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.60 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "cat-36",
    "title": "The Corisande Fancy Light Pink Cushion Ring",
    "image": "https://i.ibb.co/FPf6KqB/Pink-diamond-ring-on-fabric-20261021060841.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$46,000",
    "description": "Rare fancy light pink cushion diamond set in rose gold prongs and framed by a halo of micro-pavé white diamonds.",
    "curationHighlights": [
      "Certified Fancy Light Pink Diamond",
      "18k Rose Gold Inner Basket",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Rose Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ct",
      "color": "Fancy Light Pink",
      "clarity": "VVS1",
      "cut": "Modified Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-1",
    "title": "The Daphne Scalloped Band Ring",
    "image": "https://i.ibb.co/4ZGGKrgt/Diamond-ring-on-silk-20261021060838.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$23,500",
    "description": "Sparkling round center diamond crowned over a delicate scalloped diamond band on crisp white silk.",
    "curationHighlights": [
      "Scalloped French-Pavé Shank",
      "Petite Under-Gallery Detail",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.20 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-2",
    "title": "The Emmeline Linear Diamond Drops",
    "image": "https://i.ibb.co/n8kP9m9W/Diamond-drop-earrings-on-surface-20261021060834.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$16,000",
    "description": "Vertical drop earrings featuring alternating round diamonds linked together to produce liquid sway.",
    "curationHighlights": [
      "Flexible Vertical Line",
      "Featherlight Weight Balance",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.00 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-3",
    "title": "The Fleur Cascading Teardrop Drops",
    "image": "https://i.ibb.co/xSKYjywj/Diamond-drop-earrings-lying-flat-20261021060832.jpg",
    "category": "Earrings",
    "shape": "pear",
    "price": "$19,000",
    "description": "Matched teardrop diamonds suspended from diamond studs, photographed resting flat on a satin surface.",
    "curationHighlights": [
      "Teardrop Terminal Stones",
      "Secure Platinum Posts",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "mot-4",
    "title": "The Gabrielle Fancy Intense Yellow Cushion Specimen",
    "image": "https://i.ibb.co/rR958X8f/Yellow-diamond-on-display-tray-20261021060829.jpg",
    "category": "Loose Diamonds",
    "shape": "cushion",
    "price": "$31,000",
    "description": "Vibrant fancy intense yellow cushion diamond loose in a display tray, showing rich golden tone and fire.",
    "curationHighlights": [
      "Fancy Intense Yellow Grade",
      "Exceptional Golden Radiance",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ct",
      "color": "Fancy Intense Yellow",
      "clarity": "VVS1",
      "cut": "Modified Cushion",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-5",
    "title": "The Harmonia Fancy Intense Pink Tile Ring",
    "image": "https://i.ibb.co/sdqYRjZ4/Pink-diamond-ring-on-tile-20261021060823.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$52,000",
    "description": "Exquisite fancy intense pink diamond set in a rose gold basket on a modern architectural tile backdrop.",
    "curationHighlights": [
      "Fancy Intense Pink Center",
      "18k Rose Gold Basket",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Rose Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ct",
      "color": "Fancy Intense Pink",
      "clarity": "VVS2",
      "cut": "Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-6",
    "title": "The Isolde Ceylon Sapphire Halo Ring",
    "image": "https://i.ibb.co/wZT28KQ3/Sapphire-ring-with-accent-diamonds-20261021060818.jpg",
    "category": "Rings",
    "shape": "oval",
    "price": "$26,500",
    "description": "Royal Ceylon blue oval sapphire accented by brilliant round diamond shoulders on a solid platinum mount.",
    "curationHighlights": [
      "Fine Ceylon Blue Sapphire",
      "Diamond Side Accents",
      "Accompanied by Gemological Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ct",
      "color": "Royal Velvet Blue",
      "clarity": "Eye Clean",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "mot-7",
    "title": "The Jessamine Structured Platinum Bangle",
    "image": "https://i.ibb.co/3mxyzTLf/Platinum-diamond-bangle-on-silk-20261021060812.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$28,000",
    "description": "Hinged oval bangle in polished Platinum 950 pavé-set across the top bar with brilliant diamonds.",
    "curationHighlights": [
      "Rigid Ergonomic Oval Bangle",
      "Concealed Side Hinge Clasp",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-8",
    "title": "The Katarina Fancy Color Rough Specimen",
    "image": "https://i.ibb.co/GfTgzQVS/Raw-fancy-color-diamond-cluster-20261021060808.jpg",
    "category": "Loose Diamonds",
    "shape": "round",
    "price": "$18,500",
    "description": "Cluster of natural fancy-colored rough diamond specimens illustrating raw crystalline growth habits.",
    "curationHighlights": [
      "Raw Mineral Crystalline Habit",
      "Natural Fancy Color Specimen",
      "Accompanied by Geological Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "4.40 ct",
      "color": "Fancy Multi-Color",
      "clarity": "Natural Specimen",
      "cut": "Rough Crystalline",
      "shape": "round"
    }
  },
  {
    "id": "mot-9",
    "title": "The Leonora Compass-Prong Solitaire",
    "image": "https://i.ibb.co/m5nBZt2j/Diamond-engagement-ring-resting-20261021060806.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$29,500",
    "description": "Round brilliant diamond held by four north-south-east-west compass prongs above an unadorned platinum band.",
    "curationHighlights": [
      "North-South Compass Prongs",
      "Tapered Band Profile",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-10",
    "title": "The Margaux Hidden Halo Solitaire",
    "image": "https://i.ibb.co/8Dz1Yjp3/Diamond-engagement-ring-resting-20261021060804.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$30,500",
    "description": "Brilliant diamond solitaire ring concealing a secret micro-pavé collar beneath the primary platinum claws.",
    "curationHighlights": [
      "Discreet Hidden Halo Collar",
      "Low-Profile Claw Setting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-11",
    "title": "The Nerissa Chandelier Drops",
    "image": "https://i.ibb.co/ksChHwYQ/Drop-earrings-with-diamonds-20261021060752.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$21,500",
    "description": "Cascading diamond earrings engineered with multi-tier links that sparkle in rhythm with the wearer.",
    "curationHighlights": [
      "Multi-Tier Link Mobility",
      "Secure Post Friction Fit",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-12",
    "title": "The Oriana Platinum Pendant Necklace",
    "image": "https://i.ibb.co/Kj5gQVRS/Platinum-necklace-with-diamond-p-20261021060749.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$18,000",
    "description": "Solitaire round diamond framed by an open platinum geometric pendant on a delicate chain.",
    "curationHighlights": [
      "Geometric Drop Bail",
      "Solid Platinum Trace Chain",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.80 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-13",
    "title": "The Philomela Art Deco Drops",
    "image": "https://i.ibb.co/15jT9XV/Diamond-drop-earrings-on-satin-20261021060740.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$22,500",
    "description": "Elongated drop earrings featuring stepped geometric diamond motifs resting against dark satin fabric.",
    "curationHighlights": [
      "Stepped Deco Geometry",
      "Fine Milgrain Edge Work",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-14",
    "title": "The Raphaelle Fancy Vivid Green Cocktail Ring",
    "image": "https://i.ibb.co/nsfMCmPS/Green-diamond-cocktail-ring-20261021060733.jpg",
    "category": "Rings",
    "shape": "radiant",
    "price": "$48,000",
    "description": "Striking cocktail ring featuring a rare fancy vivid green radiant diamond surrounded by pavé halos.",
    "curationHighlights": [
      "Rare Fancy Vivid Green Center",
      "Dual White Diamond Halo",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ct",
      "color": "Fancy Vivid Green",
      "clarity": "VVS2",
      "cut": "Radiant Cut",
      "shape": "radiant"
    }
  },
  {
    "id": "mot-15",
    "title": "The Serena Fancy Purplish Pink Ring",
    "image": "https://i.ibb.co/TMz5KCXG/Pink-diamond-ring-on-stone-20261021060728.jpg",
    "category": "Rings",
    "shape": "oval",
    "price": "$49,000",
    "description": "Oval fancy purplish pink diamond resting in an 18k rose gold mounting over an organic stone slab.",
    "curationHighlights": [
      "Rare Purplish Pink Undertone",
      "18k Rose Gold Setting",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Rose Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.10 ct",
      "color": "Fancy Purplish Pink",
      "clarity": "VVS1",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "mot-16",
    "title": "The Theodora Platinum Line Bracelet",
    "image": "https://i.ibb.co/XfxrrCGb/Platinum-diamond-line-bracelet-20261021060724.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$30,000",
    "description": "Sleek continuous diamond line bracelet engineered with low-profile four-prong platinum box links.",
    "curationHighlights": [
      "Low-Profile Box Links",
      "Dual-Latching Hidden Clasp",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "6.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-17",
    "title": "The Undine Fancy Deep Yellow Radiant Ring",
    "image": "https://i.ibb.co/qFJKXcVg/Yellow-diamond-ring-on-display-20261021060716.jpg",
    "category": "Rings",
    "shape": "radiant",
    "price": "$36,000",
    "description": "Fancy deep yellow radiant diamond mounted in solid 18k yellow gold claws with trapezoid side stones.",
    "curationHighlights": [
      "Fancy Deep Yellow Center",
      "Trapezoid Diamond Side Stones",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.90 ct",
      "color": "Fancy Deep Yellow",
      "clarity": "VVS2",
      "cut": "Cut-Corner Radiant",
      "shape": "radiant"
    }
  },
  {
    "id": "mot-18",
    "title": "The Vespera Floral Cluster Studs",
    "image": "https://i.ibb.co/qLkJ4wQH/Diamond-cluster-stud-earrings-di-20261021060713.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$13,800",
    "description": "Floral cluster stud earrings combining round diamonds in a blooming bouquet silhouette.",
    "curationHighlights": [
      "Seven-Stone Flower Pattern",
      "Sturdy Threaded Posts",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-19",
    "title": "The Wisteria Emerald Cut Solitaire",
    "image": "https://i.ibb.co/SHRfG3Y/Emerald-cut-diamond-engagement-ring-20261021060712.jpg",
    "category": "Rings",
    "shape": "emerald",
    "price": "$34,000",
    "description": "Architectural emerald-cut diamond showcasing clear parallel step facets and cut corners in platinum.",
    "curationHighlights": [
      "Parallel Step Facets",
      "Clean Cut-Corner Proportions",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.85 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Classic Step Cut",
      "shape": "emerald"
    }
  },
  {
    "id": "mot-20",
    "title": "The Xylia East-West Eternity Band",
    "image": "https://i.ibb.co/nN2MHHvR/Diamond-eternity-band-on-cloth-20261021060707.jpg",
    "category": "Rings",
    "shape": "oval",
    "price": "$21,500",
    "description": "Continuous platinum eternity band featuring calibrated oval diamonds aligned east-west across the finger.",
    "curationHighlights": [
      "East-West Diamond Alignment",
      "Full Eternity Coverage",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.40 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "mot-21",
    "title": "The Yara Bezel-Set Eternity Band",
    "image": "https://i.ibb.co/RpcZgJ7C/Diamond-eternity-band-resting-20261021060702.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$20,000",
    "description": "Full eternity ring with individual platinum bezels surrounding each round brilliant stone for snag-free comfort.",
    "curationHighlights": [
      "Individual Protective Bezels",
      "Snag-Free Smooth Contour",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-22",
    "title": "The Zephyra Fancy Pink Solitaire Ring",
    "image": "https://i.ibb.co/sp8Lrbg3/Pink-diamond-ring-photography-20261021060658.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$44,000",
    "description": "Vibrant fancy pink round diamond mounted in a warm rose gold head with micro-pavé platinum band.",
    "curationHighlights": [
      "Fancy Pink Certified Diamond",
      "Two-Tone Platinum & Rose Gold",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Rose Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.30 ct",
      "color": "Fancy Pink",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-23",
    "title": "The Althea Modern Bezel Solitaire",
    "image": "https://i.ibb.co/04GwM6X/Diamond-ring-on-leather-20261021060655.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$27,500",
    "description": "Round diamond floating inside an open bezel collar set upon a brushed leather presentation mount.",
    "curationHighlights": [
      "Flush Bezel Frame",
      "Subtle Matte Undertones",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-24",
    "title": "The Briseis Linear Pavé Drops",
    "image": "https://i.ibb.co/6RYKxrcr/Diamond-drop-earrings-on-display-20261021060651.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$15,000",
    "description": "Slender diamond drop earrings featuring graduated round stones suspended on a black display stand.",
    "curationHighlights": [
      "Slender Linear Mobility",
      "High-Mobility Platinum Links",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.80 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-25",
    "title": "The Cressida Dual-Brilliant Bypass Ring",
    "image": "https://i.ibb.co/6JyZqY8d/Bypass-ring-holding-two-diamonds-20261021060645.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$24,000",
    "description": "Graceful bypass ring holding two round brilliant diamonds that twist gently past one another.",
    "curationHighlights": [
      "Graceful Curving Bypass",
      "Twin Balanced Solitaires",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.20 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-26",
    "title": "The Damaris Pear & Oval Toi et Moi",
    "image": "https://i.ibb.co/FkMkY4v5/Bypass-ring-with-two-diamonds-20261021060643.jpg",
    "category": "Rings",
    "shape": "pear",
    "price": "$29,000",
    "description": "Sophisticated two-stone ring bringing a teardrop pear diamond together with a brilliant oval partner.",
    "curationHighlights": [
      "Pear & Oval Dual Silhouette",
      "Curved Platinum Shank",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.65 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "mot-27",
    "title": "The Electra Natural Octahedron Yellow Diamond",
    "image": "https://i.ibb.co/5xBkVxMg/Yellow-diamond-crystal-on-base-20261021060640.jpg",
    "category": "Loose Diamonds",
    "shape": "radiant",
    "price": "$33,000",
    "description": "Uncut fancy vivid yellow diamond crystal resting upon an acrylic museum base.",
    "curationHighlights": [
      "Natural Mineral Crystal Form",
      "Deep Canary Color Saturation",
      "Accompanied by Mineral Certificate"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "Natural Mineral Crystal",
      "cut": "Natural Octahedron",
      "shape": "radiant"
    }
  },
  {
    "id": "mot-28",
    "title": "The Fiorella Fancy Intense Yellow Cushion Ring",
    "image": "https://i.ibb.co/nqdKd7Pr/Yellow-diamond-on-slate-slab-20261021060638.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$38,000",
    "description": "Canary yellow cushion diamond held in an 18k yellow gold cup on an earthy slate slab.",
    "curationHighlights": [
      "Golden Canary Center",
      "18k Gold Inner Basket",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ct",
      "color": "Fancy Intense Yellow",
      "clarity": "VVS1",
      "cut": "Modified Cushion",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-29",
    "title": "The Galatea Solid Platinum Diamond Collar",
    "image": "https://i.ibb.co/bMsDQMyZ/Platinum-choker-necklace-with-di-20261021060635.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$48,000",
    "description": "Architectural rigid platinum collar necklace centered with a brilliant floating diamond station.",
    "curationHighlights": [
      "Rigid Platinum Collar Form",
      "Tension-Suspended Center Gem",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-30",
    "title": "The Hesperia Curved Wedding Band",
    "image": "https://i.ibb.co/2z3Zg78/Diamond-wedding-band-on-satin-20261021060631.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$12,500",
    "description": "Gently contoured platinum band paved with diamonds, designed to hug large solitaires on satin.",
    "curationHighlights": [
      "Contoured Solitaire Nesting",
      "Micro-Pavé Setting",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-31",
    "title": "The Iolanthe Channel Wedding Band",
    "image": "https://i.ibb.co/67Ls3HXW/Platinum-wedding-band-with-diamonds-20261021060630.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$14,500",
    "description": "Heavy platinum wedding band featuring inset square step-cut diamonds recessed along the central channel.",
    "curationHighlights": [
      "Durable Flush Channel",
      "Solid Platinum Comfort Band",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.10 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Channel Step Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-32",
    "title": "The Jessamyn Fancy Green Radiant Ring",
    "image": "https://i.ibb.co/fdrNXhHx/Green-diamond-ring-on-dish-20261021060627.jpg",
    "category": "Rings",
    "shape": "radiant",
    "price": "$42,000",
    "description": "Extremely rare fancy green radiant-cut diamond poised above a shallow porcelain dish.",
    "curationHighlights": [
      "Rare Green Color Center",
      "Four Platinum Corner Prongs",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ct",
      "color": "Fancy Vivid Green",
      "clarity": "VVS2",
      "cut": "Radiant Cut",
      "shape": "radiant"
    }
  },
  {
    "id": "mot-33",
    "title": "The Kassandra Brutalist Solitaire",
    "image": "https://i.ibb.co/XkzYhjpj/Diamond-ring-on-concrete-block-20261021060622.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$26,000",
    "description": "Industrial-inspired solid platinum band securing a round brilliant diamond with bold corner pillars.",
    "curationHighlights": [
      "Geometric Pillar Mount",
      "Heavyweight Platinum Body",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.30 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-34",
    "title": "The Lorelei Silk-Draped Chandelier Drops",
    "image": "https://i.ibb.co/jPgzPGP1/Diamond-chandelier-earrings-on-silk-20261021060612.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$24,500",
    "description": "Elaborate diamond chandelier earrings with delicate cascading fringe photographed against cream silk.",
    "curationHighlights": [
      "Cascading Diamond Fringe",
      "Featherlight Platinum Meshwork",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-35",
    "title": "The Melisande Tiered Chandelier Drops",
    "image": "https://i.ibb.co/C3zbVkXp/Diamond-chandelier-earrings-on-c-20261021060615.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$26,000",
    "description": "Three-tiered diamond drops shimmering with graduated brilliant cuts for opulent gala evenings.",
    "curationHighlights": [
      "Three-Tier Graduated Silhouette",
      "Secure Post Friction Fit",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.40 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-36",
    "title": "The Nereida Fancy Yellow Cushion Solitaire",
    "image": "https://i.ibb.co/0yW7VFJL/Yellow-diamond-ring-resting-20261021060610.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$34,500",
    "description": "Warm fancy yellow cushion diamond set into an 18k yellow gold basket on an unadorned platinum band.",
    "curationHighlights": [
      "Two-Tone Gold & Platinum Build",
      "Canary Color Saturation",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS2",
      "cut": "Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-37",
    "title": "The Ondine Fancy Deep Blue Diamond Pendant",
    "image": "https://i.ibb.co/wZ0JXyFM/Blue-diamond-pendant-necklace-lying-20261021060607.jpg",
    "category": "Necklaces",
    "shape": "pear",
    "price": "$45,000",
    "description": "Spectacular fancy deep blue pear diamond pendant suspended from a slender platinum diamond-accented bail.",
    "curationHighlights": [
      "Rare Deep Ocean Blue Color",
      "Platinum Diamond-Paved Bail",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ct",
      "color": "Fancy Deep Blue",
      "clarity": "VVS1",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "mot-38",
    "title": "The Persephone Asscher Cut Diamond Studs",
    "image": "https://i.ibb.co/Rkc4VfdN/Asscher-cut-diamond-on-studio-block-20261021060602.jpg",
    "category": "Earrings",
    "shape": "asscher",
    "price": "$22,000",
    "description": "Matched pair of square asscher-cut diamonds exhibiting mesmerizing concentric windmill step facets.",
    "curationHighlights": [
      "Asscher Windmill Pattern",
      "Four-Corner V-Prongs",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Square Step Cut",
      "shape": "asscher"
    }
  },
  {
    "id": "mot-39",
    "title": "The Quiterie Micro-Prong Tennis Bracelet",
    "image": "https://i.ibb.co/3G8LPk3/Diamond-tennis-bracelet-on-satin-20261021060558.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$27,000",
    "description": "Classic tennis bracelet with round brilliant diamonds secured by delicate shared micro-prongs on satin.",
    "curationHighlights": [
      "Shared Micro-Prong Row",
      "Flexible Platinum Links",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "5.75 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-40",
    "title": "The Rhiannon Seamless Line Bracelet",
    "image": "https://i.ibb.co/pj0hqj35/Diamond-tennis-bracelet-on-satin-20261021060553.jpg",
    "category": "Bracelets",
    "shape": "round",
    "price": "$29,000",
    "description": "Uniform diamond tennis bracelet featuring four-claw link housings that drape naturally around the wrist.",
    "curationHighlights": [
      "Four-Claw Individual Casings",
      "Double Safety Clasp Catch",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "6.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-41",
    "title": "The Sybilla Fancy Intense Green Solitaire",
    "image": "https://i.ibb.co/MD5N61dM/Green-diamond-ring-on-stone-20261021060549.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$44,000",
    "description": "Radiant fancy intense green diamond perched in a platinum basket over rough architectural stone.",
    "curationHighlights": [
      "Intense Natural Green Shade",
      "High-Profile Platinum Basket",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.90 ct",
      "color": "Fancy Intense Green",
      "clarity": "VVS2",
      "cut": "Modified Cushion",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-42",
    "title": "The Titania Three-Stone Past Present Future Ring",
    "image": "https://i.ibb.co/5gVktLn2/Three-stone-diamond-ring-on-fabric-20261021060546.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$28,500",
    "description": "Three-stone ring signifying past, present, and future with graduated round brilliant diamonds in platinum.",
    "curationHighlights": [
      "Graduated Trio Symmetry",
      "Shared Wire Trellis Basket",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.70 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-43",
    "title": "The Vittoria Fancy Yellow Radiant Crystal",
    "image": "https://i.ibb.co/V0wv369x/Yellow-diamond-crystal-on-display-20261021060543.jpg",
    "category": "Loose Diamonds",
    "shape": "radiant",
    "price": "$36,000",
    "description": "Exceptional loose fancy vivid yellow diamond crystal displaying intense golden color and razor-sharp table facets.",
    "curationHighlights": [
      "Vivid Canary Hue",
      "Ideal Optical Symmetry",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.50 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS1",
      "cut": "Cut-Corner Radiant",
      "shape": "radiant"
    }
  },
  {
    "id": "mot-44",
    "title": "The Zeuxis Purplish Pink Diamond Solitaire",
    "image": "https://i.ibb.co/CktFqjY/Purple-pink-diamond-ring-resting-20261021060540.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$51,000",
    "description": "Rare fancy deep purplish pink cushion diamond mounted in rose gold prongs with diamond-lined shoulders.",
    "curationHighlights": [
      "Deep Purplish Pink Hue",
      "18k Rose Gold Claws",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Rose Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.40 ct",
      "color": "Fancy Purplish Pink",
      "clarity": "VVS1",
      "cut": "Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "mot-45",
    "title": "The Alethea Studio Solitaire Ring",
    "image": "https://i.ibb.co/Kz90KB2d/Diamond-ring-on-surface-20261021060536.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$26,000",
    "description": "Round brilliant diamond lifted on a classic tapered platinum band, photographed on a studio stage.",
    "curationHighlights": [
      "Classic Knife-Edge Taper",
      "Polished Platinum Four Claws",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.35 ct",
      "color": "D (Colorless)",
      "clarity": "VS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-46",
    "title": "The Belladonna Platinum Bezel Studs",
    "image": "https://i.ibb.co/RGRKmcdk/Diamond-stud-earrings-on-cloth-20261021060532.jpg",
    "category": "Earrings",
    "shape": "round",
    "price": "$14,800",
    "description": "Round brilliant diamonds enclosed in platinum tube bezels resting against woven cloth.",
    "curationHighlights": [
      "Tube Bezel Mounting",
      "Comfort-Fit Friction Posts",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.70 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "mot-47",
    "title": "The Cypriana Fancy Yellow Oval Gemstone",
    "image": "https://i.ibb.co/Q336nhVW/Yellow-diamond-gemstone-on-block-20261021060528.jpg",
    "category": "Loose Diamonds",
    "shape": "oval",
    "price": "$27,500",
    "description": "Unmounted oval cut fancy vivid yellow diamond displayed on an acrylic block for clarity grading.",
    "curationHighlights": [
      "Oval Brilliant Faceting",
      "Fancy Vivid Yellow Saturation",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.60 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS1",
      "cut": "Oval Brilliant",
      "shape": "oval"
    }
  },
  {
    "id": "mot-48",
    "title": "The Deirdre Solitaire Pendant Drop",
    "image": "https://i.ibb.co/WNdXs14p/Platinum-necklace-with-diamond-p-20261021060525.jpg",
    "category": "Necklaces",
    "shape": "round",
    "price": "$17,500",
    "description": "Solitaire round brilliant diamond hanging from a four-prong wire basket attached to a platinum trace chain.",
    "curationHighlights": [
      "Four-Prong Wire Basket",
      "Fine Platinum Trace Chain",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "1.75 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "sec-1",
    "title": "The Elysia Deep Blue Diamond Solitaire Ring",
    "image": "https://i.ibb.co/p6sddcCV/Blue-diamond-ring-on-slab-20261021060520.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$54,000",
    "description": "Majestic fancy deep blue cushion diamond mounted on a solid platinum band resting on an architectural slab.",
    "curationHighlights": [
      "Rare Deep Ocean Blue Color",
      "Platinum Four-Prong Mount",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.10 ct",
      "color": "Fancy Deep Blue",
      "clarity": "VVS1",
      "cut": "Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "sec-2",
    "title": "The Faustine Intense Blue Diamond Halo Ring",
    "image": "https://i.ibb.co/LD65pn16/Blue-diamond-ring-on-stone-20261021060518.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$49,000",
    "description": "Fancy intense blue round diamond encircled by a halo of micro-pavé white diamonds on a rough stone plinth.",
    "curationHighlights": [
      "Intense Blue Primary Stone",
      "Contrasting White Halo",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.80 ct",
      "color": "Fancy Intense Blue",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "sec-3",
    "title": "The Gloriana Silk-Ribbon Eternity Band",
    "image": "https://i.ibb.co/zhMYJ0vz/Diamond-ring-on-silk-band-20261021060516.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$16,000",
    "description": "Full eternity ring set with round diamonds photographed resting on a coiled white silk band.",
    "curationHighlights": [
      "Shared-Prong Pavé Row",
      "Continuous 360 Sparkle",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.50 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "sec-4",
    "title": "The Hyacinthe Fancy Vivid Green Crystal",
    "image": "https://i.ibb.co/6RpRJ6Wf/Green-diamond-crystal-on-slate-20261021060505.jpg",
    "category": "Loose Diamonds",
    "shape": "radiant",
    "price": "$46,000",
    "description": "Unmounted fancy vivid green diamond crystal showcasing emerald-like natural saturation on slate.",
    "curationHighlights": [
      "Vivid Green Crystal Hue",
      "Unset Investment Specimen",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.40 ct",
      "color": "Fancy Vivid Green",
      "clarity": "VVS1",
      "cut": "Radiant Cut",
      "shape": "radiant"
    }
  },
  {
    "id": "sec-5",
    "title": "The Irene Flat-Lain Diamond Drops",
    "image": "https://i.ibb.co/jmnZ90y/Diamond-drop-earrings-lying-flat-20261021060502.jpg",
    "category": "Earrings",
    "shape": "pear",
    "price": "$18,500",
    "description": "Teardrop diamond drops photographed lying flat to reveal their precision platinum hinge mechanics.",
    "curationHighlights": [
      "Teardrop Terminal Stones",
      "Hinged Platinum Earwire",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.30 ctw",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Teardrop Brilliant",
      "shape": "pear"
    }
  },
  {
    "id": "sec-6",
    "title": "The Jocasta Fabric-Fold Cathedral Ring",
    "image": "https://i.ibb.co/FbFf1nqQ/Diamond-ring-on-fabric-fold-20261021060459.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$32,000",
    "description": "High cathedral solitaire ring nestling an ideal-cut round diamond amidst soft fabric folds.",
    "curationHighlights": [
      "Sweeping Cathedral Arches",
      "Four-Prong Secure Head",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.90 ct",
      "color": "D (Colorless)",
      "clarity": "VVS2",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  },
  {
    "id": "sec-7",
    "title": "The Lysandra Fancy Vivid Yellow Asscher Cut",
    "image": "https://i.ibb.co/XfSgf2Kj/Yellow-diamond-on-display-tray-20261021060456.jpg",
    "category": "Loose Diamonds",
    "shape": "asscher",
    "price": "$34,000",
    "description": "Unmounted fancy vivid yellow asscher diamond loose on a display tray showing square step-cut facets.",
    "curationHighlights": [
      "Fancy Vivid Yellow Saturation",
      "Asscher Step Cut Facets",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.20 ct",
      "color": "Fancy Vivid Yellow",
      "clarity": "VVS1",
      "cut": "Square Step Cut",
      "shape": "asscher"
    }
  },
  {
    "id": "sec-8",
    "title": "The Morrigan Fancy Yellow Solitaire Ring",
    "image": "https://i.ibb.co/Kpxz1V4L/Yellow-diamond-on-tray-20261021060454.jpg",
    "category": "Rings",
    "shape": "cushion",
    "price": "$37,500",
    "description": "Deep canary yellow cushion diamond set in yellow gold claws over a polished platinum band.",
    "curationHighlights": [
      "Canary Yellow Center Gem",
      "18k Yellow Gold Claws",
      "Accompanied by GIA Dossier"
    ],
    "specs": {
      "metal": "18k Yellow Gold",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "3.00 ct",
      "color": "Fancy Intense Yellow",
      "clarity": "VVS1",
      "cut": "Cushion Brilliant",
      "shape": "cushion"
    }
  },
  {
    "id": "sec-9",
    "title": "The Nephele Delicate Six-Prong Ring",
    "image": "https://i.ibb.co/FqCWykrC/Diamond-ring-on-silk-fabric-20261021060452.jpg",
    "category": "Rings",
    "shape": "round",
    "price": "$31,000",
    "description": "Classic round brilliant diamond mounted in a delicate six-prong crown resting gracefully on textured silk.",
    "curationHighlights": [
      "Six-Prong Heritage Basket",
      "Comfort-Fit Rounded Shank",
      "Accompanied by IGI / GIA Dossier"
    ],
    "specs": {
      "metal": "Platinum 950",
      "diamondType": "Lab Grown (IGI & GIA Certified)",
      "carat": "2.75 ct",
      "color": "D (Colorless)",
      "clarity": "VVS1",
      "cut": "Ideal Cut",
      "shape": "round"
    }
  }
];

export const ARCHIVE_22_PIECES: AtelierPiece[] = ALL_COLLECTION_PIECES.filter(p => p.id.startsWith("arch-"));
export const SUITES_9_PIECES: AtelierPiece[] = ALL_COLLECTION_PIECES.filter(p => p.id.startsWith("suite-"));
export const CATALOG_36_PIECES: AtelierPiece[] = ALL_COLLECTION_PIECES.filter(p => p.id.startsWith("cat-"));
export const MOTION_48_PIECES: AtelierPiece[] = ALL_COLLECTION_PIECES.filter(p => p.id.startsWith("mot-"));
export const SECONDARY_9_PIECES: AtelierPiece[] = ALL_COLLECTION_PIECES.filter(p => p.id.startsWith("sec-"));
