/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  activeSection, 
  lang, 
  onToggleLang 
}) => {
  const t = TRANSLATIONS[lang].nav;

  const handleWhatsappClick = () => {
    const text = encodeURIComponent(TRANSLATIONS[lang].whatsapp.advisorPrompt);
    window.open(`https://wa.me/971508219420?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E8E2D2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
            className="text-xl sm:text-2xl font-serif font-normal tracking-tight text-[#103C35] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            FamilyVisa<span className="text-[#C6A66B] italic font-serif">.ae</span>
          </a>

          {/* Zone 2: Navigation Links (Without Coin/Live Tracker) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[14px] lg:text-[15px] font-sans font-medium text-[#202B36]">
            <button
              onClick={() => onNavigate('calculator')}
              className={`hover:text-[#103C35] transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeSection === 'calculator' ? 'text-[#103C35] font-semibold border-b-2 border-[#C6A66B]' : ''
              }`}
            >
              {t.calculator}
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`hover:text-[#103C35] transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeSection === 'categories' ? 'text-[#103C35] font-semibold border-b-2 border-[#C6A66B]' : ''
              }`}
            >
              {t.categories}
            </button>
            <button
              onClick={() => onNavigate('documents')}
              className={`hover:text-[#103C35] transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeSection === 'documents' ? 'text-[#103C35] font-semibold border-b-2 border-[#C6A66B]' : ''
              }`}
            >
              {t.documents}
            </button>
            <button
              onClick={() => onNavigate('concierge')}
              className={`hover:text-[#103C35] transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                activeSection === 'concierge' ? 'text-[#103C35] font-semibold border-b-2 border-[#C6A66B]' : ''
              }`}
            >
              {t.concierge}
            </button>
          </nav>

          {/* Zone 3: Language Toggle & Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Switch Button */}
            <button
              type="button"
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#E8E2D2] bg-white text-xs font-sans font-semibold text-[#103C35] hover:bg-[#FAF8F3] hover:border-[#C6A66B] transition-colors"
              title="Change language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* WhatsApp Direct Header Button */}
            <button
              type="button"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-sans font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg transition-colors shadow-2xs whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.whatsappUs}</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>

            {/* Calculate Button */}
            <button
              onClick={() => onNavigate('calculator')}
              className="hidden lg:inline-flex px-4 py-2 text-xs font-sans font-semibold text-white bg-[#103C35] hover:bg-[#164E45] rounded-lg transition-colors whitespace-nowrap border border-[#103C35]"
            >
              {t.calculateFees}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
