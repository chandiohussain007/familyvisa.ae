/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Clock, FileText, Sparkles } from 'lucide-react';
import heroFamilyImg from '../assets/images/hero_family_dubai_1791660945213.jpg';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onStartCalculator: () => void;
  onSelectCategory: (cat: string) => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onStartCalculator, onSelectCategory, lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E8E2D2] bg-gradient-to-b from-[#F8F6F0] via-[#FAF8F3] to-[#F3EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C6A66B]">
              <span>{t.eyebrow}</span>
            </div>

            {/* Hero Heading: Desktop 68–80 px, Mobile 42–50 px, Serif, Regular */}
            <h1 className="font-serif font-normal text-[42px] sm:text-[54px] lg:text-[74px] leading-[1.08] text-[#103C35] tracking-[-0.015em] [text-wrap:balance]">
              {t.title}
            </h1>

            {/* Body Copy: Desktop 16–18 px, Mobile 16 px, Sans, Regular */}
            <p className="font-sans font-normal text-[16px] lg:text-[18px] leading-[1.65] text-[#202B36]/85 max-w-2xl">
              {t.subtitle}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartCalculator}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-sans text-[15px] font-semibold text-white bg-[#103C35] hover:bg-[#164E45] border border-[#103C35] rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.99] whitespace-nowrap"
              >
                <span>{t.launchCalc}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
              </button>

              <button
                onClick={() => onSelectCategory('spouse')}
                className="inline-flex items-center justify-center px-5 py-3.5 font-sans text-[15px] font-semibold text-[#202B36] bg-[#FFFFFF] border border-[#E8E2D2] hover:border-[#C6A66B] rounded-lg transition-colors whitespace-nowrap shadow-2xs"
              >
                {t.exploreCat}
              </button>
            </div>

            {/* Quick Jump Buttons */}
            <div className="pt-2">
              <span className="font-sans text-[12px] font-medium text-[#202B36]/70 block mb-2">
                {lang === 'en' ? 'Quickly audit category requirements:' : 'استكشف متطلبات الفئات:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'spouse', label: lang === 'en' ? 'Spouse Visa' : 'إقامة الزوجة' },
                  { id: 'children', label: lang === 'en' ? 'Children' : 'الأبناء' },
                  { id: 'parents', label: lang === 'en' ? 'Parents' : 'الوالدين' },
                  { id: 'newborn', label: lang === 'en' ? 'Newborn' : 'المولود الجديد' },
                  { id: 'domestic', label: lang === 'en' ? 'Domestic Worker' : 'العمالة المساعدة' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectCategory(item.id)}
                    className="px-3.5 py-1.5 font-sans text-[13px] font-medium rounded-md bg-white border border-[#E8E2D2] text-[#202B36] hover:text-[#103C35] hover:border-[#C6A66B] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D2] bg-white shadow-md">
              <img
                src={heroFamilyImg}
                alt="Happy expatriate family living comfortably in modern Dubai residence"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="p-4 bg-[#FFFFFF]/95 backdrop-blur-sm border-t border-[#E8E2D2]">
                <div className="flex items-center justify-between text-xs text-[#202B36]">
                  <span className="font-sans font-semibold text-[#103C35]">
                    {lang === 'en' ? 'Family Residence in the Emirates' : 'لم شمل الأسرة في الإمارات'}
                  </span>
                  <span className="font-sans font-medium text-[#C6A66B]">GDRFA Verified Service</span>
                </div>
                <p className="font-sans text-[13px] text-[#202B36]/75 mt-1 leading-relaxed">
                  {lang === 'en' 
                    ? 'Over 14,000 expatriate families successfully reunited with official residence permits since 2018.'
                    : 'أكثر من 14,000 عائلة مقيمة حصلت على تصاريح الإقامة الرسمية بنجاح منذ 2018.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust & Metric Strip */}
        <div className="mt-14 pt-8 border-t border-[#E8E2D2] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C6A66B]">
              <ShieldCheck className="w-5 h-5 shrink-0 text-[#103C35]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">Compliance</span>
            </div>
            <p className="font-sans font-semibold text-[20px] text-[#103C35] tracking-tight">{t.complianceTitle}</p>
            <p className="font-sans text-[13px] text-[#202B36]/70">{t.complianceDesc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C6A66B]">
              <Clock className="w-5 h-5 shrink-0 text-[#103C35]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">Turnaround</span>
            </div>
            <p className="font-sans font-semibold text-[20px] text-[#103C35] tracking-tight">{t.turnaroundTitle}</p>
            <p className="font-sans text-[13px] text-[#202B36]/70">{t.turnaroundDesc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C6A66B]">
              <FileText className="w-5 h-5 shrink-0 text-[#103C35]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">Pricing</span>
            </div>
            <p className="font-sans font-semibold text-[20px] text-[#103C35] tracking-tight">{t.pricingTitle}</p>
            <p className="font-sans text-[13px] text-[#202B36]/70">{t.pricingDesc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C6A66B]">
              <Sparkles className="w-5 h-5 shrink-0 text-[#103C35]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">VIP Service</span>
            </div>
            <p className="font-sans font-semibold text-[20px] text-[#103C35] tracking-tight">{t.vipTitle}</p>
            <p className="font-sans text-[13px] text-[#202B36]/70">{t.vipDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
