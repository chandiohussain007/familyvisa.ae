/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/visaData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const categories = ['All', 'Eligibility & Rules', 'Costs & Government Fees', 'Parents Sponsorship', 'Turnaround Time', 'Newborn Babies', 'Doorstep Concierge'];

  const filteredItems = FAQ_ITEMS.filter(item => {
    if (selectedTag === 'All') return true;
    return item.category === selectedTag;
  });

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F3] border-b border-[#E8E2D2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          {/* Eyebrow label: 11–12 px, Sans, Semibold, Tracked */}
          <div className="inline-flex items-center gap-1.5 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B] mb-2">
            <span>Regulatory Knowledge Base</span>
          </div>
          {/* Section heading: Desktop 42–52 px, Mobile 32–38 px, Serif, Regular */}
          <h2 className="font-serif font-normal text-[32px] sm:text-[36px] lg:text-[46px] leading-[1.15] text-[#103C35] tracking-[-0.01em]">
            Frequently Asked Questions
          </h2>
          {/* Body copy: Desktop 16–18 px, Mobile 16 px, Sans, Regular */}
          <p className="mt-2 font-sans font-normal text-[16px] leading-[1.65] text-[#202B36]/80">
            Answers to common questions regarding minimum salary rules, foreign certificate attestation, and GDRFA procedures.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedTag(cat)}
              className={`px-3 py-1 font-sans text-[12px] font-medium rounded-md transition-colors ${
                selectedTag === cat
                  ? 'bg-[#103C35] text-white'
                  : 'bg-white border border-[#E8E2D2] text-[#202B36] hover:text-[#103C35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E8E2D2] overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-sans text-[14px] sm:text-[15px] font-semibold text-[#103C35] hover:bg-[#FAF8F3] transition-colors"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C6A66B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#94A3B8] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 font-sans text-[13px] text-[#202B36]/85 leading-relaxed border-t border-[#F2ECE3] pt-3">
                    <p>{item.answer}</p>
                    <div className="mt-2.5 font-sans text-[11px] text-[#C6A66B] font-semibold">
                      Category: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
