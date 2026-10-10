/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartCalculator } from './components/SmartCalculator';
import { CategoryPortfolios } from './components/CategoryPortfolios';
import { DocumentChecker } from './components/DocumentChecker';
import { DoorstepConcierge } from './components/DoorstepConcierge';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VisaCategoryKey } from './types/visa';
import { Language } from './data/translations';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [lang, setLang] = useState<Language>('en');
  const [selectedCategoryPreset, setSelectedCategoryPreset] = useState<VisaCategoryKey | null>(null);

  // Sync RTL and lang attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catKey: string) => {
    setSelectedCategoryPreset(catKey as VisaCategoryKey);
    scrollToSection('calculator');
  };

  return (
    <div 
      className="min-h-screen bg-[#F8F6F0] text-[#202B36] flex flex-col font-sans selection:bg-[#C6A66B]/25 selection:text-[#103C35] transition-all"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Strict Top Bar Contract Header with Language Switcher & WhatsApp */}
      <Navbar 
        onNavigate={scrollToSection} 
        activeSection={activeSection}
        lang={lang}
        onToggleLang={toggleLang}
      />

      <main className="flex-1">
        {/* Hero Section with Lifestyle Visual & Trust Strip */}
        <Hero
          onStartCalculator={() => scrollToSection('calculator')}
          onSelectCategory={handleCategorySelect}
          lang={lang}
        />

        {/* Primary Interactive Anchor: Card-Based Smart Visa Calculator Matching Screenshot */}
        <SmartCalculator
          lang={lang}
        />

        {/* UAE Sponsorship Category Bento Portfolios */}
        <CategoryPortfolios
          onSelectCategory={handleCategorySelect}
        />

        {/* Interactive Document Readiness Checker & Attestation Roadmap */}
        <DocumentChecker />

        {/* White-Glove VIP Doorstep Document & Medical Concierge */}
        <DoorstepConcierge />

        {/* Regulatory FAQ Section */}
        <FAQSection />
      </main>

      {/* Authoritative Regulatory Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating 24/7 WhatsApp Specialist Button */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
