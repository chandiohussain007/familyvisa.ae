/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2
} from 'lucide-react';
import conciergeImg from '../assets/images/concierge_doorstep_service_1791660958036.jpg';

interface DoorstepConciergeProps {
  initialQuoteData?: {
    totalPayable: number;
    dependentsCount: number;
    details: string;
  } | null;
}

export const DoorstepConcierge: React.FC<DoorstepConciergeProps> = ({ initialQuoteData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+971 50 ',
    email: '',
    emirate: 'Dubai',
    district: 'Dubai Downtown / Business Bay',
    serviceOption: 'full_doorstep',
    preferredDate: '2026-10-15',
    preferredSlot: 'morning'
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `VIP-FV-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingId(id);
    setBookingConfirmed(true);
  };

  return (
    <section id="concierge" className="py-16 md:py-24 bg-[#F8F6F0] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Eyebrow label: 11–12 px, Sans, Semibold, Tracked */}
          <div className="flex items-center gap-2 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B] mb-2">
            <span>White-Glove VIP Service</span>
            <span aria-hidden="true" className="text-[#C6A66B]/60">·</span>
            <span>All Emirates Doorstep Dispatch</span>
          </div>
          {/* Section heading: Desktop 42–52 px, Mobile 32–38 px, Serif, Regular */}
          <h2 className="font-serif font-normal text-[32px] sm:text-[36px] lg:text-[46px] leading-[1.15] text-[#103C35] tracking-[-0.01em]">
            VIP Doorstep Document & Medical Concierge
          </h2>
          {/* Body copy: Desktop 16–18 px, Mobile 16 px, Sans, Regular */}
          <p className="mt-2 font-sans font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[#202B36]/80">
            Never stand in lines at typing offices or medical fitness clinics. Our uniformed concierges and DHA-certified nurses visit your private residence or workplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual & Perks Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D2] bg-white shadow-2xs">
              <img
                src={conciergeImg}
                alt="Uniformed VIP concierge delivering family residency documents in Dubai"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] object-cover"
              />
              <div className="p-4 bg-white/95 border-t border-[#E8E2D2]">
                <span className="font-sans font-semibold text-[14px] text-[#103C35] block">
                  Secure Chain of Custody
                </span>
                <p className="font-sans text-[12px] text-[#202B36]/65 mt-0.5 leading-relaxed">
                  Original passports and Emirates ID cards transported in sealed biometric tamper-proof pouches.
                </p>
              </div>
            </div>

            {/* 3 VIP Pillars */}
            <div className="space-y-3">
              {[
                {
                  title: 'Doorstep Document Collection',
                  desc: 'We pick up your original attested documents, scan high-res copies, and return originals in under 2 hours.'
                },
                {
                  title: 'In-Home DHA Blood Test (Optional)',
                  desc: 'Certified DHA nursing staff dispatched to your villa or apartment for swift blood test and rapid clearance.'
                },
                {
                  title: 'Fast-Track Biometrics Escort',
                  desc: 'Dedicated concierge greets you at the ICP biometric booth with zero waiting time.'
                }
              ].map((perk, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E8E2D2] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-semibold text-[14px] text-[#103C35]">{perk.title}</h4>
                    <p className="font-sans text-[12px] text-[#202B36]/70 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Form / Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E8E2D2] p-6 sm:p-8 shadow-2xs">
              {!bookingConfirmed ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#E8E2D2] pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-semibold text-[19px] sm:text-[21px] text-[#103C35]">
                        Schedule Concierge Dispatch
                      </h3>
                      <span className="font-sans text-[12px] text-[#C6A66B] font-semibold">Priority 24h Confirmation</span>
                    </div>
                    {initialQuoteData && (
                      <div className="mt-2 p-3 rounded-lg bg-[#FAF8F3] border border-[#E8E2D2] font-sans text-xs flex justify-between items-center">
                        <span className="text-[#202B36]/70">Attached Calculator Quote:</span>
                        <span className="font-mono font-bold text-[#103C35]">
                          AED {initialQuoteData.totalPayable.toLocaleString()} ({initialQuoteData.dependentsCount} Applicants)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Full Name (Sponsor)</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mansoor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36] focus:outline-none focus:border-[#103C35]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Mobile (WhatsApp Updates)</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full font-sans text-xs font-mono bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36] focus:outline-none focus:border-[#103C35]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-sans text-[12px] font-medium text-[#202B36]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="sponsor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36] focus:outline-none focus:border-[#103C35]"
                    />
                  </div>

                  {/* Location Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Emirate</label>
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36]"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Community / Area</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Downtown Dubai / Palm Jumeirah"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36]"
                      />
                    </div>
                  </div>

                  {/* Service Package Selection */}
                  <div className="space-y-1">
                    <label className="font-sans text-[12px] font-medium text-[#202B36]">Concierge Package</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'full_doorstep', label: 'Full Doorstep Concierge' },
                        { id: 'vip_medical_home', label: 'In-Home DHA Blood Test' },
                        { id: 'express_document_courier', label: 'Passport Logistics Only' }
                      ].map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceOption: pkg.id })}
                          className={`p-2.5 font-sans text-xs text-left rounded-lg border transition-all ${
                            formData.serviceOption === pkg.id
                              ? 'bg-[#103C35] text-white border-[#103C35]'
                              : 'bg-[#FAF8F3] text-[#202B36] border-[#E8E2D2] hover:bg-[#F3EFE7]'
                          }`}
                        >
                          {pkg.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date and Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Preferred Collection Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[12px] font-medium text-[#202B36]">Time Window</label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full font-sans text-xs bg-[#FAF8F3] border border-[#E8E2D2] rounded-lg p-2.5 text-[#202B36]"
                      >
                        <option value="morning">Morning (09:00 AM – 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM – 04:00 PM)</option>
                        <option value="evening">Evening (04:00 PM – 08:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Button: 14–16 px Desktop, 15–16 px Mobile, Sans, Semibold */}
                  <button
                    type="submit"
                    className="w-full py-3.5 font-sans text-[15px] font-semibold text-white bg-[#103C35] hover:bg-[#164E45] rounded-lg transition-colors shadow-2xs"
                  >
                    Confirm VIP Concierge Dispatch
                  </button>
                </form>
              ) : (
                /* Confirmed Booking Voucher Card */
                <div className="space-y-6 text-center py-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">
                      Booking Confirmed
                    </span>
                    <h3 className="font-sans font-semibold text-[20px] text-[#103C35]">
                      VIP Dispatch Assigned: {bookingId}
                    </h3>
                    <p className="font-sans text-[13px] text-[#202B36]/65">
                      Our concierge coordinator will contact you at {formData.phone} within 45 minutes to confirm the arrival window.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#E8E2D2] font-sans text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#202B36]/60">Sponsor Name:</span>
                      <span className="font-semibold text-[#103C35]">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#202B36]/60">Pickup Location:</span>
                      <span className="text-[#202B36]">{formData.district}, {formData.emirate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#202B36]/60">Dispatch Date:</span>
                      <span className="text-[#202B36]">{formData.preferredDate} ({formData.preferredSlot})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#202B36]/60">Package:</span>
                      <span className="font-semibold text-emerald-900">
                        {formData.serviceOption.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="font-sans text-xs text-[#103C35] hover:underline font-semibold"
                  >
                    Schedule Another Pickup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
