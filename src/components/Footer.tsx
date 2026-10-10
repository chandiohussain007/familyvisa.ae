/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#202B36] text-[#F8F6F0] py-14 border-t border-[#103C35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              className="text-2xl font-serif font-normal tracking-tight text-white inline-block"
            >
              FamilyVisa<span className="text-[#C6A66B] italic font-serif">.ae</span>
            </a>
            <p className="font-sans text-[13px] text-[#F8F6F0]/75 leading-relaxed max-w-sm">
              The premier digital concierge for UAE family residence visas, official GDRFA typing, DHA medical scheduling, and white-glove doorstep delivery.
            </p>
            <div className="font-sans text-[12px] text-[#F8F6F0]/65 space-y-1">
              <p>Business Bay & Downtown Hub, Dubai, United Arab Emirates</p>
              <p>Toll-Free Support: <span className="text-[#C6A66B] font-semibold">800-FAMILY (800-326-459)</span></p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3 font-sans">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C6A66B] block">
              Core Services
            </span>
            <ul className="space-y-2 text-[13px] text-[#F8F6F0]/85">
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-white transition-colors">
                  Fee & Eligibility Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Spouse & Children Visas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Parents Sponsorship
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Newborn UAE Residency
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Domestic Worker Visas
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-3 font-sans">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C6A66B] block">
              Tools & Guidance
            </span>
            <ul className="space-y-2 text-[13px] text-[#F8F6F0]/85">
              <li>
                <button onClick={() => onNavigate('documents')} className="hover:text-white transition-colors">
                  Document Auditor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('documents')} className="hover:text-white transition-colors">
                  MoFA Attestation Guide
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/971508219420"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Fast Support
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('concierge')} className="hover:text-white transition-colors">
                  VIP Doorstep Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Regulatory Channels */}
          <div className="space-y-3 font-sans">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C6A66B] block">
              Government Channels
            </span>
            <ul className="space-y-2 text-[13px] text-[#F8F6F0]/70">
              <li>GDRFA Dubai / Amer System</li>
              <li>ICP Federal Authority</li>
              <li>Dubai Health Authority (DHA)</li>
              <li>UAE Ministry of Human Resources (MOHRE)</li>
              <li>Dubai Land Department (Ejari)</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#103C35] font-sans text-[11px] text-[#F8F6F0]/60 space-y-3">
          <p className="leading-relaxed">
            Disclaimer: FamilyVisa.ae is an independent professional document clearing and concierge portal assisting residents with GDRFA Dubai and ICP immigration applications through authorized government typing channels. Official fees are determined by UAE authorities and subject to statutory updates.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#F8F6F0]/70">
            <span>© {new Date().getFullYear()} FamilyVisa.ae. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Security Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
