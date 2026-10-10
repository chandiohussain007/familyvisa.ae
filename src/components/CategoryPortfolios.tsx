/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { VISA_CATEGORIES } from '../data/visaData';
import { VisaCategoryKey } from '../types/visa';
import familyLifestyleImg from '../assets/images/family_lifestyle_dubai_1791660969671.jpg';

interface CategoryPortfoliosProps {
  onSelectCategory: (categoryKey: VisaCategoryKey) => void;
}

export const CategoryPortfolios: React.FC<CategoryPortfoliosProps> = ({ onSelectCategory }) => {
  const [selectedKey, setSelectedKey] = useState<VisaCategoryKey>('spouse');

  const activeCategory = VISA_CATEGORIES[selectedKey];

  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAF8F3] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {/* Eyebrow label: 11–12 px, Sans, Semibold, Tracked */}
            <div className="flex items-center gap-2 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B] mb-2">
              <span>UAE Residency Portfolios</span>
              <span aria-hidden="true" className="text-[#C6A66B]/60">·</span>
              <span>GDRFA Regulations 2026</span>
            </div>
            {/* Section heading: Desktop 42–52 px, Mobile 32–38 px, Serif, Regular */}
            <h2 className="font-serif font-normal text-[32px] sm:text-[36px] lg:text-[46px] leading-[1.15] text-[#103C35] tracking-[-0.01em]">
              Sponsorship Pathways for Every Family Scenario
            </h2>
            {/* Body copy: Desktop 16–18 px, Mobile 16 px, Sans, Regular */}
            <p className="mt-2 font-sans font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[#202B36]/80">
              Select a sponsorship track to review specific salary benchmarks, required foreign document attestations, and turnaround timelines.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-lg border border-[#E8E2D2] self-start md:self-auto">
            {(Object.keys(VISA_CATEGORIES) as VisaCategoryKey[]).map((key) => {
              const item = VISA_CATEGORIES[key];
              const isActive = selectedKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedKey(key)}
                  className={`px-3.5 py-1.5 font-sans text-[13px] font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#103C35] text-white shadow-2xs'
                      : 'text-[#202B36] hover:text-[#103C35]'
                  }`}
                >
                  {item.title.replace(' Residence Visa', '').replace(' Visa', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Showcase Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: Detailed Category Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8E2D2] p-6 sm:p-8 space-y-6 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-3 font-sans text-xs text-[#202B36]/70">
                <span className="font-semibold text-[#103C35]">{activeCategory.subtitle}</span>
                <span aria-hidden="true" className="text-[#C6A66B]">·</span>
                <span>Turnaround: {activeCategory.turnaroundTime}</span>
                <span aria-hidden="true" className="text-[#C6A66B]">·</span>
                <span>Validity: {activeCategory.validity}</span>
              </div>

              {/* Card heading: Desktop 21–24 px, Mobile 19–22 px, Sans, Semibold */}
              <h3 className="font-sans font-semibold text-[20px] sm:text-[23px] text-[#103C35]">
                {activeCategory.title}
              </h3>

              <p className="font-sans text-[15px] text-[#202B36]/80 leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Salary & Housing Benchmark Callout */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] space-y-1.5">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#C6A66B]">
                  Minimum Sponsor Salary Benchmark
                </span>
                <p className="font-sans font-semibold text-[15px] text-[#103C35]">
                  {activeCategory.salaryNote}
                </p>
              </div>

              {/* Key Official Rules */}
              <div className="space-y-2 pt-2">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#202B36]">
                  Regulatory Prerequisites & Conditions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs text-[#202B36]/85">
                  {activeCategory.eligibilityNotes.map((note, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-md bg-[#FAF8F3] border border-[#E8E2D2]/60">
                      <span className="text-[#C6A66B] font-bold">·</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar (Buttons: 14–16 px Desktop, 15–16 px Mobile, Sans, Semibold) */}
            <div className="pt-6 border-t border-[#E8E2D2] flex flex-wrap items-center justify-between gap-4">
              <div className="font-sans text-xs text-[#202B36]/70">
                <span>Base Govt Fee inside UAE: </span>
                <span className="font-mono font-bold text-[#103C35]">AED {activeCategory.baseInsideFee.toLocaleString()}</span>
              </div>

              <button
                type="button"
                onClick={() => onSelectCategory(selectedKey)}
                className="inline-flex items-center gap-2 px-5 py-2.5 font-sans text-[14px] font-semibold text-white bg-[#103C35] hover:bg-[#164E45] rounded-lg transition-colors shadow-2xs"
              >
                <span>Calculate For {activeCategory.title.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A66B]" />
              </button>
            </div>
          </div>

          {/* Right: Visual Context & Attestation Preview */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E8E2D2] overflow-hidden shadow-2xs flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={familyLifestyleImg}
                alt="Family residence in Dubai"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103C35]/80 via-transparent to-transparent flex items-end p-4">
                <p className="font-sans text-xs text-[#F8F6F0] font-medium">
                  Direct submission to GDRFA Dubai & ICP Federal Authority
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#202B36] block">
                Primary Documentation Checklist:
              </span>
              <ul className="space-y-2 font-sans text-xs text-[#202B36]/80">
                {activeCategory.keyRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[12px] text-[#202B36]/60 pt-2 border-t border-[#E8E2D2]">
                Need help with home country Ministry of Foreign Affairs (MoFA) stamps? Our team provides full legal attestation assistance.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Category Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {(Object.keys(VISA_CATEGORIES) as VisaCategoryKey[]).map((key) => {
            const item = VISA_CATEGORIES[key];
            const isCurrent = selectedKey === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-[#103C35] shadow-xs'
                    : 'bg-white/80 border-[#E8E2D2] hover:bg-white hover:border-[#C6A66B]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-[14px] font-semibold text-[#103C35]">{item.title.split(' ')[0]}</span>
                  <span className="text-[12px] font-mono text-[#C6A66B] font-bold">AED {item.baseInsideFee}</span>
                </div>
                <p className="font-sans text-[12px] text-[#202B36]/65 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
