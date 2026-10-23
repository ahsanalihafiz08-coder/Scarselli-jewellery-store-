export interface CollectionItem {
  id: string;
  title: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'exceptional';
  shortDesc: string;
  longDesc: string;
  image: string;
  highlights: string[];
  dimensionsOrCut: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'loose' | 'exceptional';
  image: string;
  caption: string;
}

// DEVELOPER NOTE: Please confirm the official boutique contact email with the client.
// Changed from brunoo@scarselli.com to bruno@scarselli.com per Task Part 3 instructions.
export const BUSINESS_INFO = {
  name: 'Scarselli',
  category: 'Luxury Diamond Jewellery Boutique',
  phone: '+1 (917) 880-1797',
  phoneHref: 'tel:+19178801797',
  email: 'bruno@scarselli.com',
  emailHref: 'mailto:bruno@scarselli.com',
  // Official client-provided social & direct communication channels
  whatsappUrl: 'https://wa.me/19178801797?text=Hello%20Scarselli%2C%20I%20would%20like%20to%20enquire%20about%20your%20fine%20diamond%20jewellery.',
  instagramUrl: 'https://www.instagram.com/bruno.scarselli?srtk=dHZnZTJyd2t6a29q',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100057064495554',
  addressLine1: '580 Fifth Avenue, Suite 821',
  addressLine2: 'New York, NY 10017',
  country: 'United States',
  rating: '5.0',
  // NOTE: 580 Fifth Avenue is situated on the 47th St / 5th Ave corner; Google Maps occasionally resolves the postal centroid as 10036 while the official building mailing address is 10017.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=580+Fifth+Avenue+Suite+821+New+York+NY+10017',
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'diamond-rings',
    title: 'Diamond Rings',
    category: 'rings',
    shortDesc: 'Extraordinary solitaires, bespoke halo creations, and precision-set diamond bands crafted in platinum.',
    longDesc: 'Each diamond ring is individually curated to showcase stones of remarkable brilliance and fire. Set in hand-finished platinum mountings, every facet captures and refracts light with crystalline purity.',
    image: '/src/assets/images/collection_diamond_rings_1792162282751.jpg',
    highlights: ['Micro-pavé platinum band', 'Ideal cut optical symmetry', 'Refined low-profile setting'],
    dimensionsOrCut: 'Round Brilliant & Precision Step Cuts',
  },
  {
    id: 'diamond-necklaces',
    title: 'Diamond Necklaces',
    category: 'necklaces',
    shortDesc: 'Cascading diamond rivieras and sculpted diamond pendants designed to drape with fluid grace.',
    longDesc: 'Graduated diamonds linked by delicate platinum articulation, allowing effortless movement and continuous brilliance. Created for timeless evenings and life’s singular milestones.',
    image: '/src/assets/images/collection_diamond_necklace_1792162282937.jpg',
    highlights: ['Fluid platinum articulation', 'Graduated center motif', 'Seamless security clasp'],
    dimensionsOrCut: 'Oval & Round Brilliant Compositions',
  },
  {
    id: 'diamond-earrings',
    title: 'Diamond Earrings',
    category: 'earrings',
    shortDesc: 'Radiant drops, architectural chandeliers, and luminous solitaires designed to frame the face with light.',
    longDesc: 'Balanced perfectly for light refraction from every angle. Featuring matched radiant-cut and emerald-cut diamonds complemented by brilliant diamond halos.',
    image: '/src/assets/images/collection_diamond_earrings_1792162283621.jpg',
    highlights: ['Precision matched pairs', 'Luminous drop articulation', 'Secure platinum post backs'],
    dimensionsOrCut: 'Radiant & Round Brilliant Pairings',
  },
  {
    id: 'exceptional-diamond-pieces',
    title: 'Exceptional Diamond Pieces',
    category: 'exceptional',
    shortDesc: 'Rare loose diamonds of singular fire, bespoke high-jewellery commissions, and masterwork stones.',
    longDesc: 'A showcase of extraordinary stones displaying peerless optical geometry and rare brilliance. Reserved for bespoke commissions and connoisseurs of the world’s finest diamonds.',
    image: '/src/assets/images/exceptional_loose_diamond_1792162283943.jpg',
    highlights: ['Singular optical scintillation', 'Precision facet alignment', 'Fifth Avenue private viewing'],
    dimensionsOrCut: 'Masterwork Carat Selections',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Solitaire Brilliant Ring',
    category: 'rings',
    image: '/src/assets/images/hero_diamond_solitaire_1792162281599.jpg',
    caption: 'Brilliant round diamond solitaire resting on platinum and ivory silk, showing pristine facet symmetry.',
  },
  {
    id: 'gal-2',
    title: 'Flawless Facet Macro',
    category: 'loose',
    image: '/src/assets/images/exceptional_loose_diamond_1792162283943.jpg',
    caption: 'Close-up diamond study displaying internal fire, spectral dispersion, and geometric precision.',
  },
  {
    id: 'gal-3',
    title: 'Sculpted Diamond Collar',
    category: 'necklaces',
    image: '/src/assets/images/collection_diamond_necklace_1792162282937.jpg',
    caption: 'High-jewellery diamond necklace with cascading concentric motifs and oval focal stone.',
  },
  {
    id: 'gal-4',
    title: 'Radiant Diamond Drops',
    category: 'earrings',
    image: '/src/assets/images/collection_diamond_earrings_1792162283621.jpg',
    caption: 'Matched radiant-cut drop earrings suspended with micro-pavé geometric links.',
  },
  {
    id: 'gal-5',
    title: 'Emerald Cut Solitaire',
    category: 'rings',
    image: '/src/assets/images/gallery_emerald_cut_ring_1792162301426.jpg',
    caption: 'Step-cut emerald diamond showcasing hall-of-mirrors clarity in a tailored four-prong platinum mount.',
  },
  {
    id: 'gal-6',
    title: 'Classic Diamond Tennis Bracelet',
    category: 'exceptional',
    image: '/src/assets/images/gallery_diamond_tennis_bracelet_1792162301827.jpg',
    caption: 'Continuous line of uniform round brilliant diamonds set in hand-linked platinum bezels.',
  },
  {
    id: 'gal-7',
    title: 'Pear-Cut Diamond Pendant',
    category: 'necklaces',
    image: '/src/assets/images/gallery_diamond_pendant_1792162301921.jpg',
    caption: 'Teardrop pear diamond framed in a delicate micro-pavé halo on an ethereal platinum chain.',
  },
  {
    id: 'gal-8',
    title: 'Pedestal Solitaire Study',
    category: 'rings',
    image: '/src/assets/images/collection_diamond_rings_1792162282751.jpg',
    caption: 'Architectural presentation of an engagement ring on honed white marble and polished platinum.',
  },
];

export const CRAFTSMANSHIP_THEMES = [
  {
    title: 'Exceptional Detail',
    subtitle: 'Precision in Every Facet',
    description: 'Every facet of a fine diamond is calibrated to maximize the refraction of ambient light into crisp scintillation and pure spectral fire.',
  },
  {
    title: 'Timeless Design',
    subtitle: 'Fifth Avenue Sophistication',
    description: 'Enduring silhouettes conceived with proportion, balance, and quiet restraint that transcend fleeting fashion trends.',
  },
  {
    title: 'The Purity of Diamonds',
    subtitle: 'Identical Chemical & Optical Fire',
    description: 'Lab-grown diamonds possess the exact identical carbon crystal lattice, chemical composition, and refractive brilliance as mined diamonds, certified Type IIa.',
  },
  {
    title: 'Personal Enquiries',
    subtitle: 'Private Client Attention',
    description: 'Personalized private consultation at our 580 Fifth Avenue suite to address individual preferences with discretion and care.',
  },
];
