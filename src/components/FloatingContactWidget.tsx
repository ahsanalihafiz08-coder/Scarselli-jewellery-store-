import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, Mail, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 md:right-8 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Expanded Quick Contact Popover */}
      {isOpen && (
        <div className="mb-3 w-64 bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200 text-left pointer-events-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#8A682D]">
                Fifth Avenue Concierge
              </div>
              <h4 className="text-sm font-serif text-slate-900 font-medium">
                Connect with Scarselli
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-800 rounded-full"
              aria-label="Close contact menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {/* 1. Phone Call */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center text-[#8A682D] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-900">Direct Call</div>
                <div className="text-[11px] text-slate-500 truncate">{BUSINESS_INFO.phone}</div>
              </div>
            </a>

            {/* 2. WhatsApp Direct */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-900">WhatsApp Chat</div>
                <div className="text-[11px] text-slate-500">Live consultation</div>
              </div>
            </a>

            {/* 3. Email Atelier */}
            <a
              href={BUSINESS_INFO.emailHref}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-900">Private Email</div>
                <div className="text-[11px] text-slate-500 truncate">{BUSINESS_INFO.email}</div>
              </div>
            </a>
          </div>

          <div className="pt-1 text-[10px] text-slate-400 text-center font-light">
            Suite 821, 580 Fifth Avenue, New York
          </div>
        </div>
      )}

      {/* ONE Main Floating Contact Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Contact Scarselli Concierge"
        className="pointer-events-auto flex items-center gap-2.5 py-3 px-5 rounded-full bg-slate-950 hover:bg-[#8A682D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 cursor-pointer group"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#E6C687] group-hover:scale-110 transition-transform" />
        <span className="text-xs uppercase tracking-[0.16em] font-semibold">
          {isOpen ? 'Close' : 'Contact'}
        </span>
      </button>
    </div>
  );
};
