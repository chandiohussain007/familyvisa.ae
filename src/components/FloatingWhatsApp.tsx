/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].whatsapp;

  const handleClick = () => {
    const text = encodeURIComponent(t.advisorPrompt);
    window.open(`https://wa.me/971508219420?text=${text}`, '_blank');
  };

  return (
    <aside 
      aria-label="WhatsApp Contact Support"
      className="fixed bottom-6 end-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip Pill */}
      <div className="hidden sm:flex flex-col items-end bg-[#202B36] text-white px-3.5 py-1.5 rounded-full shadow-lg border border-[#334155] opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="font-sans text-[12px] font-semibold text-white">
          {t.floatingChat}
        </span>
        <span className="font-sans text-[10px] text-emerald-400 font-medium">
          {t.onlineNow}
        </span>
      </div>

      {/* Main Floating Button */}
      <button
        type="button"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all relative border-2 border-white"
        aria-label="Chat on WhatsApp with Visa Advisor"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        {/* Pulsing Green Indicator Dot */}
        <span className="absolute top-0 end-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />
      </button>
    </aside>
  );
};
