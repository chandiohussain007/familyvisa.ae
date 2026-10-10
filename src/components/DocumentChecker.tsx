/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Stamp, 
  CheckSquare, 
  Square
} from 'lucide-react';
import { DOCUMENT_CHECKLIST } from '../data/visaData';
import { VisaCategoryKey } from '../types/visa';

export const DocumentChecker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VisaCategoryKey>('spouse');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'doc-passports': true,
    'doc-photos': true
  });

  const categoryDocs = DOCUMENT_CHECKLIST.filter(doc => 
    doc.requiredFor.includes(selectedCategory)
  );

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalRequired = categoryDocs.length;
  const readyCount = categoryDocs.filter(d => checkedDocs[d.id]).length;
  const percentage = Math.round((readyCount / totalRequired) * 100);

  return (
    <section id="documents" className="py-16 md:py-24 bg-[#F8F6F0] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Eyebrow label: 11–12 px, Sans, Semibold, Tracked */}
          <div className="flex items-center gap-2 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B] mb-2">
            <span>Pre-Application Readiness Auditor</span>
            <span aria-hidden="true" className="text-[#C6A66B]/60">·</span>
            <span>Zero Rejection Guarantee</span>
          </div>
          {/* Section heading: Desktop 42–52 px, Mobile 32–38 px, Serif, Regular */}
          <h2 className="font-serif font-normal text-[32px] sm:text-[36px] lg:text-[46px] leading-[1.15] text-[#103C35] tracking-[-0.01em]">
            Interactive Document Checker & Attestation Roadmap
          </h2>
          {/* Body copy: Desktop 16–18 px, Mobile 16 px, Sans, Regular */}
          <p className="mt-2 font-sans font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[#202B36]/80">
            Over 68% of family visa delays in Dubai occur due to non-attested marriage certificates or incorrect Ejari documentation. Audit your paperwork before filing with GDRFA.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="font-sans text-[12px] font-semibold text-[#202B36]/70 mr-2">Checklist for:</span>
          {[
            { id: 'spouse', label: 'Spouse Visa' },
            { id: 'children', label: 'Children Visa' },
            { id: 'parents', label: 'Parents Visa' },
            { id: 'newborn', label: 'Newborn Baby' },
            { id: 'domestic', label: 'Domestic Worker' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id as VisaCategoryKey)}
              className={`px-3.5 py-1.5 font-sans text-[13px] font-medium rounded-lg transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-[#103C35] text-white shadow-2xs'
                  : 'bg-white border border-[#E8E2D2] text-[#202B36] hover:border-[#103C35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Interactive Checklist */}
          <div className="lg:col-span-7 space-y-4">
            {/* Progress Meter */}
            <div className="p-4 bg-white rounded-xl border border-[#E8E2D2] flex items-center justify-between shadow-2xs">
              <div>
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#103C35]">
                  Documentation Readiness
                </span>
                <p className="font-sans text-[13px] text-[#202B36]/60">
                  {readyCount} of {totalRequired} documents verified ready
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold font-mono tabular-nums text-[#103C35]">
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {categoryDocs.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-white border-emerald-300 shadow-2xs'
                        : 'bg-[#FAF8F3] border-[#E8E2D2] hover:border-[#C6A66B]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#103C35]">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-800" />
                        ) : (
                          <Square className="w-5 h-5 text-[#94A3B8]" />
                        )}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-sans font-semibold text-[15px] ${isChecked ? 'text-[#103C35]' : 'text-[#202B36]'}`}>
                            {doc.name}
                          </h4>
                          {doc.needsMofaAttestation && (
                            <span className="font-sans text-[11px] font-semibold text-[#C6A66B] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E8E2D2]">
                              Attestation Required
                            </span>
                          )}
                        </div>

                        <p className="font-sans text-[13px] text-[#202B36]/80 leading-relaxed">
                          {doc.description}
                        </p>

                        <div className="pt-1.5 flex items-start gap-1.5 font-sans text-[12px] text-[#202B36]/65">
                          <span className="font-semibold text-[#C6A66B]">Guidance:</span>
                          <span>{doc.guidanceTip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): 4-Stage Attestation Roadmap */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white rounded-xl border border-[#E8E2D2] shadow-2xs space-y-6">
              <div className="flex items-center gap-2.5 border-b border-[#E8E2D2] pb-4">
                <Stamp className="w-5 h-5 text-[#103C35]" />
                <div>
                  <h3 className="font-sans font-semibold text-[19px] sm:text-[21px] text-[#103C35]">
                    Attestation Roadmap
                  </h3>
                  <p className="font-sans text-[13px] text-[#202B36]/60">For foreign marriage & birth certificates</p>
                </div>
              </div>

              {/* 4 Sequential Steps */}
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Home Country Notarization',
                    desc: 'Notary Public certification in the country where the certificate was originally issued.'
                  },
                  {
                    step: '02',
                    title: 'Ministry of Foreign Affairs (MoFA)',
                    desc: 'Authentication by the Ministry of External / Foreign Affairs in your home country.'
                  },
                  {
                    step: '03',
                    title: 'UAE Embassy Attestation',
                    desc: 'Verification and stamp by the UAE Embassy or Consulate located in your home country.'
                  },
                  {
                    step: '04',
                    title: 'UAE MoFA & Legal Arabic Translation',
                    desc: 'Final electronic seal by UAE MoFA in Dubai/Abu Dhabi and official Ministry of Justice Arabic translation.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-[13px]">
                    <span className="font-mono font-bold text-[#C6A66B] bg-[#FAF8F3] border border-[#E8E2D2] px-2 py-1 rounded">
                      {item.step}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-[#103C35]">{item.title}</h4>
                      <p className="text-[#202B36]/70 leading-relaxed text-[12px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Concierge Attestation Support Note */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] space-y-2">
                <span className="font-sans text-[13px] font-semibold text-[#103C35]">Don’t have MoFA stamps yet?</span>
                <p className="font-sans text-[12px] text-[#202B36]/70 leading-relaxed">
                  Our legal team handles door-to-door foreign certificate attestation for over 85 countries without requiring you to travel back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
