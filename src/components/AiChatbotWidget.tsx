import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Heart, Phone, Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface AiChatbotWidgetProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenBooking: (topic?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  actions?: {
    label: string;
    type: 'booking' | 'call' | 'whatsapp' | 'catalog';
    payload?: string;
  }[];
}

// Authentic Original Brand WhatsApp SVG
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Original AI Diamond Concierge Sparkle Emblem
const AiSparkleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.627 12 12 0-6.373 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
  </svg>
);

export const AiChatbotWidget: React.FC<AiChatbotWidgetProps> = ({
  savedCount,
  onOpenSaved,
  onOpenBooking,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Welcome to Scarselli at 580 Fifth Avenue, Suite 821. I am your AI Diamond Concierge. How may I assist your exploration of our high jewelry suites, rare colored diamonds, or private showroom appointment today?',
      time: 'Just now',
      actions: [
        { label: 'Reserve Private Viewing', type: 'booking', payload: 'Private Showroom Viewing' },
        { label: 'Explore Atelier Catalog', type: 'catalog' },
      ],
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-scarselli-chatbot', handleOpen);
    return () => window.removeEventListener('open-scarselli-chatbot', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Comprehensive Website-Specific Response Engine
  const generateKnowledgeResponse = (userQuery: string): { text: string; actions?: ChatMessage['actions'] } => {
    const q = userQuery.toLowerCase();

    // 1. Private Appointment / Booking / Visiting Suite 821
    if (
      q.includes('book') ||
      q.includes('appointment') ||
      q.includes('visit') ||
      q.includes('viewing') ||
      q.includes('reserve') ||
      q.includes('hours')
    ) {
      return {
        text: `We would be delighted to welcome you to Scarselli for a private, dedicated one-on-one consultation in Suite 821, 580 Fifth Avenue, New York. Showroom viewings are hosted Monday through Saturday with dedicated slots (Morning 10–11:30 AM, Midday 11:30 AM–1 PM, Afternoon 2–3:30 PM, and Late Afternoon 4–5:30 PM). Would you like to reserve your preferred date now?`,
        actions: [
          { label: 'Reserve Private Viewing', type: 'booking', payload: 'Private Viewing Suite 821' },
          { label: 'Call Showroom Directly', type: 'call' },
        ],
      };
    }

    // 2. Rare Fancy Colored Diamonds
    if (
      q.includes('color') ||
      q.includes('yellow') ||
      q.includes('canary') ||
      q.includes('pink') ||
      q.includes('blue') ||
      q.includes('green') ||
      q.includes('fancy')
    ) {
      return {
        text: `Scarselli is globally celebrated for extraordinary natural fancy-colored diamonds. Our vault includes Canary Yellow Cushions (such as our signature 5.40 ct Fancy Intense Yellow), Oceanic Deep Blues (3.10 ct Radiant), Vivid Pink Pear Drops (3.85 ctw), and rare natural greens. Every colored stone possesses pure natural origin and full GIA laboratory certification.`,
        actions: [
          { label: 'Enquire on Colored Diamonds', type: 'booking', payload: 'Rare Colored Diamonds' },
          { label: 'WhatsApp Concierge', type: 'whatsapp' },
        ],
      };
    }

    // 3. Pricing / Costs / Diamond Budget
    if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('range') || q.includes('quote')) {
      return {
        text: `Our creations reflect supreme diamond quality and rare provenance:
• Diamond Eternity Bands & Adornments: $12,000 – $28,000
• Solitaire Engagement Rings & High Suites: $25,000 – $75,000+
• Rare Colored Diamonds & Museum High Jewelry: $80,000 – $250,000+
All custom bespoke commissions are quoted individually according to diamond weight, cut, and platinum setting.`,
        actions: [
          { label: 'Request Custom Quote', type: 'booking', payload: 'Price Quotation' },
          { label: 'Call Bruno Scarselli', type: 'call' },
        ],
      };
    }

    // 4. Physical Location / Showroom Address / Directions
    if (
      q.includes('location') ||
      q.includes('address') ||
      q.includes('where') ||
      q.includes('directions') ||
      q.includes('suite') ||
      q.includes('street')
    ) {
      return {
        text: `Our private boutique is located at 580 Fifth Avenue, Suite 821, New York, NY 10017 (between 47th & 48th Streets in the world-famous Manhattan Diamond Corridor). Showroom visits are by private appointment to ensure an unhurried, discrete consultation.`,
        actions: [
          { label: 'Directions on Google Maps', type: 'catalog' },
          { label: 'Book Appointment', type: 'booking', payload: 'Showroom Visit' },
        ],
      };
    }

    // 5. Atelier Catalog & Specific Collections
    if (
      q.includes('catalog') ||
      q.includes('collection') ||
      q.includes('pieces') ||
      q.includes('ring') ||
      q.includes('necklace') ||
      q.includes('earring') ||
      q.includes('bracelet') ||
      q.includes('suite')
    ) {
      return {
        text: `The Scarselli website features several curated collections:
1. 22-Piece Atelier Archive: Continuous archival exploration of solitaire rings, collars, and bracelets.
2. Curated Suites & Timepieces: 9 high horology suites, anklets, and pavé bezels.
3. 36-Piece Atelier Catalog: Filterable collection across Rings, Necklaces, Earrings, and Loose Diamonds.
4. Highlights in Motion: Kinetic 48-piece dual stream exhibition.
5. Secondary Curated Suite: 9 supplementary masterworks with Victorian clusters and bolo bracelets.`,
        actions: [
          { label: 'View Atelier Catalog', type: 'catalog' },
          { label: 'Schedule Viewing', type: 'booking', payload: 'Catalog Pieces' },
        ],
      };
    }

    // 6. Craftsmanship, GIA Certification, Quality, Ethics
    if (
      q.includes('craft') ||
      q.includes('gia') ||
      q.includes('certified') ||
      q.includes('conflict') ||
      q.includes('provenance') ||
      q.includes('quality') ||
      q.includes('ethics')
    ) {
      return {
        text: `Every Scarselli diamond adheres to our four core atelier standards:
1. Zero-Tolerance Pavilion Alignment: Maximum optical scintillation and light dispersion.
2. 100% Conflict-Free Provenance: Adherence to strict ethical sourcing and the Kimberley Process.
3. GIA & IGI Double Laboratory Certification: Official documentation with microscopic laser inscription.
4. Bespoke Fifth Avenue Mounting: Hand-forged solid platinum and 18K gold settings.`,
        actions: [
          { label: 'Book Consultation', type: 'booking', payload: 'Craftsmanship Consultation' },
          { label: 'Call Bruno Scarselli', type: 'call' },
        ],
      };
    }

    // 7. Contacting Bruno Scarselli / Telephone / Direct Reach
    if (
      q.includes('contact') ||
      q.includes('phone') ||
      q.includes('number') ||
      q.includes('email') ||
      q.includes('whatsapp') ||
      q.includes('bruno') ||
      q.includes('call')
    ) {
      return {
        text: `You can reach our Fifth Avenue atelier directly via:
• Telephone: ${BUSINESS_INFO.phone} (Direct line)
• WhatsApp Concierge: +1 (917) 880-1797
• Private Email: ${BUSINESS_INFO.email}
• Showroom: 580 Fifth Avenue, Suite 821, New York, NY 10017`,
        actions: [
          { label: `Call (${BUSINESS_INFO.phone})`, type: 'call' },
          { label: 'Chat on WhatsApp', type: 'whatsapp' },
        ],
      };
    }

    // 8. Custom Design, Sizing, Engagement Rings
    if (
      q.includes('custom') ||
      q.includes('bespoke') ||
      q.includes('sizing') ||
      q.includes('size') ||
      q.includes('engagement') ||
      q.includes('wedding')
    ) {
      return {
        text: `We specialize in bespoke engagement rings and custom commissions. Whether you have an exact diamond cut in mind (Asscher, Emerald, Cushion, Radiant, or Round Brilliant) or wish to remount a family heirloom, Bruno Scarselli works directly with you. Complimentary ring sizing and worldwide insured delivery are included with all pieces.`,
        actions: [
          { label: 'Discuss Custom Commission', type: 'booking', payload: 'Custom Engagement Ring' },
          { label: 'WhatsApp Concierge', type: 'whatsapp' },
        ],
      };
    }

    // Default Fallback with rich website-grounded summary
    return {
      text: `Scarselli presents fine diamond jewellery, rare fancy-colored diamonds, and high horology timepieces at 580 Fifth Avenue, Suite 821, New York. We invite you to explore our 22-Piece Archive, Curated Suites, and 36-Piece Catalog on this site, or book an unhurried boutique appointment.`,
      actions: [
        { label: 'Reserve Private Viewing', type: 'booking', payload: 'General Consultation' },
        { label: 'Call Showroom', type: 'call' },
        { label: 'Connect on WhatsApp', type: 'whatsapp' },
      ],
    };
  };

  const handleActionClick = (action: NonNullable<ChatMessage['actions']>[number]) => {
    if (action.type === 'booking') {
      onOpenBooking(action.payload);
    } else if (action.type === 'call') {
      window.location.href = BUSINESS_INFO.phoneHref;
    } else if (action.type === 'whatsapp') {
      window.open(BUSINESS_INFO.whatsappUrl, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'catalog') {
      const el = document.getElementById('atelier-catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendQuery = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userText = textToSend.trim();
    const newMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');

    setTimeout(() => {
      const botResponse = generateKnowledgeResponse(userText);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: botResponse.text,
          time: 'Just now',
          actions: botResponse.actions,
        },
      ]);
    }, 350);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendQuery(input);
  };

  return (
    <aside aria-label="Floating Concierge & Quick Brand Access" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      
      {/* Interactive AI Chatbot Window - fits neatly inside mobile screens without overflow */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-3 sm:static sm:inset-x-auto sm:bottom-auto w-auto sm:w-[410px] bg-[#FAFBFD] border border-slate-300 shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[520px] max-h-[82vh] sm:max-h-[85vh] z-50 animate-in fade-in slide-in-from-bottom-4 duration-200 text-left">
          
          {/* Chat Header */}
          <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#B5925A] flex items-center justify-center text-white shadow-xs shrink-0">
                <AiSparkleLogo className="w-4 h-4 text-white" />
              </div>
              <div className="truncate">
                <h4 className="text-xs font-serif font-medium tracking-wider uppercase text-white truncate">
                  Scarselli AI Concierge
                </h4>
                <p className="text-[10px] text-[#E6C687] font-medium tracking-wide truncate">
                  580 Fifth Ave, Suite 821 · Active
                </p>
              </div>
            </div>

            {/* Clearly Visible High-Contrast Close Button - fully visible and properly aligned */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-slate-800 hover:bg-rose-600 border border-slate-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shrink-0 ml-2.5 active:scale-95"
              aria-label="Close Chat Window"
              title="Close Chat"
            >
              <X className="w-4 h-4 text-white stroke-[2.5]" />
            </button>
          </div>

          {/* Quick Suggestion Pills */}
          <div className="px-3.5 py-2 bg-slate-100/90 border-b border-slate-200 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
            {[
              'Private Viewing',
              'Rare Colored Diamonds',
              'Atelier Catalog',
              'Pricing & Custom',
              'Contact Showroom',
            ].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleSendQuery(chip)}
                className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-semibold text-slate-700 bg-white hover:bg-slate-900 hover:text-white border border-slate-200 rounded-full shrink-0 transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAFBFD]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-slate-900 text-white rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-2xs'
                  }`}
                >
                  <p className="whitespace-pre-line break-words font-light">{m.text}</p>
                </div>

                {/* Contextual Action Buttons */}
                {m.sender === 'ai' && m.actions && m.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {m.actions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleActionClick(act)}
                        className="py-1 px-2.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-slate-100 hover:bg-[#B5925A] hover:text-white text-slate-800 border border-slate-300 transition-colors cursor-pointer shadow-2xs flex items-center gap-1"
                      >
                        {act.type === 'booking' && <Calendar className="w-3 h-3 text-[#B5925A] group-hover:text-white" />}
                        {act.type === 'call' && <Phone className="w-3 h-3 text-slate-600" />}
                        {act.type === 'whatsapp' && <WhatsAppIcon className="w-3 h-3 text-emerald-600" />}
                        {act.type === 'catalog' && <Sparkles className="w-3 h-3 text-sky-500" />}
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about diamonds, booking, pricing, suites..."
              className="flex-1 px-3.5 py-2 text-xs bg-[#FAFBFD] border border-slate-300 rounded-full focus:border-slate-800 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2.5 bg-slate-900 hover:bg-[#B5925A] text-white rounded-full transition-colors cursor-pointer shadow-xs shrink-0"
              title="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Buttons Dock:
          Strictly only correct direct channel icons (WhatsApp, AI Chatbot, phone)
          Facebook and Instagram icons removed from the bottom group */}
      <div className="flex flex-col gap-2.5 items-end">
        
        {/* Saved Items Button (if any items hearted) */}
        {savedCount > 0 && (
          <button
            onClick={onOpenSaved}
            className="flex items-center gap-2 px-3 py-2 bg-white border border-rose-200 text-rose-600 shadow-md hover:bg-rose-50 transition-all cursor-pointer animate-in zoom-in-95 rounded-full"
            title="View Saved Pieces"
          >
            <Heart className="w-4 h-4 fill-rose-500" />
            <span className="text-xs font-semibold tabular-nums">{savedCount}</span>
          </button>
        )}

        {/* 1. Phone Button with Original Color (#B5925A) */}
        <a
          href={BUSINESS_INFO.phoneHref}
          className="w-11 h-11 bg-white hover:bg-slate-50 text-[#B5925A] border border-[#B5925A]/40 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          title={`Call Bruno Scarselli (${BUSINESS_INFO.phone})`}
          aria-label="Call Bruno Scarselli"
        >
          <Phone className="w-5 h-5 text-[#B5925A]" />
        </a>

        {/* 2. WhatsApp Direct Access Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          title="WhatsApp Concierge"
          aria-label="WhatsApp Concierge"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </a>

        {/* 3. AI Chatbot Concierge Button - Displays only its original brand icon/logo without text */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border border-slate-700"
          title="Open AI Diamond Concierge"
          aria-label="AI Concierge"
        >
          <AiSparkleLogo className="w-5 h-5 text-[#B5925A]" />
        </button>

      </div>
    </aside>
  );
};
