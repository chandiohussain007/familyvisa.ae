/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  ArrowLeftRight, 
  Check, 
  Copy, 
  ExternalLink,
  ShieldAlert,
  UserCheck
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface SmartCalculatorProps {
  lang: Language;
}

export const SmartCalculator: React.FC<SmartCalculatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].calc;

  // Simple, friendly counters
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(0);
  const [parentCount, setParentCount] = useState<number>(0);
  const [newbornCount, setNewbornCount] = useState<number>(0);

  // Location selector: inside vs outside UAE
  const [isInsideUae, setIsInsideUae] = useState<boolean>(false);

  // First-time sponsor toggle
  const [isFirstTimeSponsor, setIsFirstTimeSponsor] = useState<boolean>(true);

  // VIP express medical toggle
  const [isVipMedical, setIsVipMedical] = useState<boolean>(false);

  // Monthly salary
  const [salary, setSalary] = useState<number>(8500);

  // Comparison modal state
  const [showAmerModal, setShowAmerModal] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Itemized fee schedule based on actual familyvisa.ae rates
  // Adult Outside: 1,376 (Entry 339, Medical 273, EID 354, Stamping 410)
  // Adult Inside: 2,656 (Entry 1,180, Status Change 670, Medical 273, EID 354, Stamping 410)
  // Child Outside: 1,103 (Entry 339, EID 354, Stamping 410 - no medical)
  // Child Inside: 2,383 (Entry 1,180, Status Change 670, EID 354, Stamping 410 - no medical)
  // Newborn: 1,850
  // File opening: 203 (if first time)
  const feeDetails = useMemo(() => {
    const medicalFeePerAdult = isVipMedical ? 750 : 273;
    const entryPermitAdult = isInsideUae ? 1180 : 339;
    const entryPermitChild = isInsideUae ? 1180 : 339;
    const statusChangeFee = isInsideUae ? 670 : 0;
    const eidFee = 354;
    const stampingFee = 410;
    const fileOpening = isFirstTimeSponsor ? 203 : 0;

    const adultPerPerson = entryPermitAdult + statusChangeFee + medicalFeePerAdult + eidFee + stampingFee;
    const childPerPerson = entryPermitChild + statusChangeFee + eidFee + stampingFee;
    const parentPerPerson = entryPermitAdult + statusChangeFee + medicalFeePerAdult + eidFee + stampingFee + 2020; // deposit
    const newbornPerPerson = 1850;

    const totalAdults = adultCount * adultPerPerson;
    const totalChildren = childCount * childPerPerson;
    const totalParents = parentCount * parentPerPerson;
    const totalNewborns = newbornCount * newbornPerPerson;

    const totalGovtFees = totalAdults + totalChildren + totalParents + totalNewborns + fileOpening;

    // Minimum salary validation
    let minSalaryRequired = 4000;
    if (parentCount > 0) minSalaryRequired = 10000;
    const isSalaryEligible = salary >= minSalaryRequired;

    return {
      medicalFeePerAdult,
      entryPermitAdult,
      entryPermitChild,
      statusChangeFee,
      eidFee,
      stampingFee,
      fileOpening,
      adultPerPerson,
      childPerPerson,
      parentPerPerson,
      newbornPerPerson,
      totalAdults,
      totalChildren,
      totalParents,
      totalNewborns,
      totalGovtFees,
      isSalaryEligible,
      minSalaryRequired
    };
  }, [adultCount, childCount, parentCount, newbornCount, isInsideUae, isFirstTimeSponsor, isVipMedical, salary]);

  // WhatsApp application launcher with pre-filled calculation
  const handleStartWhatsApp = () => {
    const summaryItems = [];
    if (adultCount > 0) summaryItems.push(`${adultCount} Adult(s)`);
    if (childCount > 0) summaryItems.push(`${childCount} Child(ren)`);
    if (parentCount > 0) summaryItems.push(`${parentCount} Parent(s)`);
    if (newbornCount > 0) summaryItems.push(`${newbornCount} Newborn(s)`);

    const locationText = isInsideUae ? 'Inside UAE' : 'Outside UAE';
    const message = lang === 'en'
      ? `Hello FamilyVisa.ae! I just calculated my family visa fees online:\n\n` +
        `• Dependents: ${summaryItems.join(', ')}\n` +
        `• Current Location: ${locationText}\n` +
        `• Sponsor Salary: AED ${salary.toLocaleString()}\n` +
        `• Total Government Fees: AED ${feeDetails.totalGovtFees.toLocaleString()}\n\n` +
        `I would like to start my application online. Please guide me with the next steps.`
      : `مرحباً FamilyVisa.ae! لقد قمت بحساب رسوم إقامة عائلتي عبر الموقع:\n\n` +
        `• الأفراد: ${summaryItems.join(', ')}\n` +
        `• مكان التواجد: ${isInsideUae ? 'داخل الدولة' : 'خارج الدولة'}\n` +
        `• الراتب: ${salary.toLocaleString()} درهم\n` +
        `• إجمالي الرسوم الحكومية: ${feeDetails.totalGovtFees.toLocaleString()} درهم\n\n` +
        `أرغب في بدء المعاملة عبر الإنترنت. يرجى إرشادي بالخطوات التالية.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971508219420?text=${encoded}`, '_blank');
  };

  const handleShare = () => {
    const shareText = `FamilyVisa.ae Estimate: AED ${feeDetails.totalGovtFees.toLocaleString()} for ${adultCount + childCount + parentCount + newbornCount} dependent(s).`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText} - https://www.familyvisa.ae/`);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#F8F6F0] border-b border-[#E8E2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B] mb-2">
            <span>{t.sectionTag}</span>
          </div>
          <h2 className="font-serif font-normal text-[32px] sm:text-[38px] lg:text-[46px] leading-[1.15] text-[#103C35] tracking-[-0.01em]">
            {t.sectionTitle}
          </h2>
          <p className="mt-2 font-sans font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[#202B36]/80">
            {t.sectionDesc}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Easy, Friendly Card-based Inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1 Card: Who are you sponsoring? */}
            <div className="p-6 bg-white rounded-2xl border border-[#E8E2D2] shadow-2xs space-y-4">
              <h3 className="font-sans font-semibold text-[17px] sm:text-[19px] text-[#103C35]">
                {t.whoSponsor}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Adult / Spouse Counter */}
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-between">
                  <div>
                    <span className="font-sans font-semibold text-[15px] text-[#202B36] flex items-center gap-2">
                      <span className="text-lg">🧍</span> {t.adultLabel}
                    </span>
                    <span className="font-sans text-[11px] text-[#202B36]/60">Age 18+ (Spouse/Adult)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setAdultCount(Math.max(0, adultCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D2] text-[#202B36] flex items-center justify-center hover:bg-[#F3EFE7] active:scale-95 transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-base w-5 text-center text-[#103C35]">{adultCount}</span>
                    <button
                      type="button"
                      onClick={() => setAdultCount(adultCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#103C35] text-white flex items-center justify-center hover:bg-[#164E45] active:scale-95 transition-all shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Child Counter */}
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-between">
                  <div>
                    <span className="font-sans font-semibold text-[15px] text-[#202B36] flex items-center gap-2">
                      <span className="text-lg">👶</span> {t.childLabel}
                    </span>
                    <span className="font-sans text-[11px] text-[#202B36]/60">Under 18 (Exempt Medical)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setChildCount(Math.max(0, childCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D2] text-[#202B36] flex items-center justify-center hover:bg-[#F3EFE7] active:scale-95 transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-base w-5 text-center text-[#103C35]">{childCount}</span>
                    <button
                      type="button"
                      onClick={() => setChildCount(childCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#103C35] text-white flex items-center justify-center hover:bg-[#164E45] active:scale-95 transition-all shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Parents Counter */}
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-between">
                  <div>
                    <span className="font-sans font-semibold text-[15px] text-[#202B36] flex items-center gap-2">
                      <span className="text-lg">👴👵</span> {t.parentsLabel}
                    </span>
                    <span className="font-sans text-[11px] text-[#202B36]/60">Father & Mother (Dep. deposit)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setParentCount(Math.max(0, parentCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D2] text-[#202B36] flex items-center justify-center hover:bg-[#F3EFE7] active:scale-95 transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-base w-5 text-center text-[#103C35]">{parentCount}</span>
                    <button
                      type="button"
                      onClick={() => setParentCount(parentCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#103C35] text-white flex items-center justify-center hover:bg-[#164E45] active:scale-95 transition-all shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Newborn Baby Counter */}
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E2D2] flex items-center justify-between">
                  <div>
                    <span className="font-sans font-semibold text-[15px] text-[#202B36] flex items-center gap-2">
                      <span className="text-lg">🍼</span> {t.newbornLabel}
                    </span>
                    <span className="font-sans text-[11px] text-[#202B36]/60">Born in UAE (&lt;120 Days)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setNewbornCount(Math.max(0, newbornCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D2] text-[#202B36] flex items-center justify-center hover:bg-[#F3EFE7] active:scale-95 transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-base w-5 text-center text-[#103C35]">{newbornCount}</span>
                    <button
                      type="button"
                      onClick={() => setNewbornCount(newbornCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#103C35] text-white flex items-center justify-center hover:bg-[#164E45] active:scale-95 transition-all shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 Card: Where are they currently located? */}
            <div className="p-6 bg-white rounded-2xl border border-[#E8E2D2] shadow-2xs space-y-4">
              <h3 className="font-sans font-semibold text-[17px] sm:text-[19px] text-[#103C35]">
                {t.locationQuestion}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setIsInsideUae(false)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    !isInsideUae
                      ? 'bg-[#103C35] text-white border-[#103C35] shadow-xs'
                      : 'bg-[#FAF8F3] text-[#202B36] border-[#E8E2D2] hover:bg-[#F3EFE7]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-semibold text-[15px]">{t.outsideUae}</span>
                    <span className="text-xl">✈️</span>
                  </div>
                  <p className={`font-sans text-[12px] leading-relaxed ${!isInsideUae ? 'text-white/80' : 'text-[#202B36]/60'}`}>
                    Standard entry permit issued first. Medical and Emirates ID completed upon arrival.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setIsInsideUae(true)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isInsideUae
                      ? 'bg-[#103C35] text-white border-[#103C35] shadow-xs'
                      : 'bg-[#FAF8F3] text-[#202B36] border-[#E8E2D2] hover:bg-[#F3EFE7]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-semibold text-[15px]">{t.insideUae}</span>
                    <span className="text-xl">🇦🇪</span>
                  </div>
                  <p className={`font-sans text-[12px] leading-relaxed ${isInsideUae ? 'text-white/80' : 'text-[#202B36]/60'}`}>
                    Includes mandatory in-country Status Change (AED 670) without exiting the UAE.
                  </p>
                </button>
              </div>
            </div>

            {/* Step 3 Card: Optional Checks (First-time & Salary) */}
            <div className="p-6 bg-white rounded-2xl border border-[#E8E2D2] shadow-2xs space-y-5">
              <h3 className="font-sans font-semibold text-[17px] sm:text-[19px] text-[#103C35]">
                3. Sponsor Eligibility Check
              </h3>

              {/* Salary Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-sans text-[12px] font-semibold text-[#202B36]">
                    {t.sponsorSalary}
                  </label>
                  <div className="font-mono text-[14px] font-bold text-[#103C35] bg-[#FAF8F3] px-3 py-1 rounded-md border border-[#E8E2D2]">
                    AED {salary.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="35000"
                  step="500"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E2D2] rounded-lg appearance-none cursor-pointer accent-[#103C35]"
                />
                <div className="flex items-center justify-between font-sans text-[11px] text-[#202B36]/60">
                  <span>Min AED 4,000 (Spouse/Child)</span>
                  <span>Min AED 10,000 (Parents)</span>
                </div>
              </div>

              {/* Eligibility verdict banner */}
              <div className={`p-3 rounded-lg border text-xs font-sans flex items-center gap-2.5 ${
                feeDetails.isSalaryEligible
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}>
                {feeDetails.isSalaryEligible ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Salary of AED {salary.toLocaleString()} meets official GDRFA sponsorship requirement.</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Salary is below required AED {feeDetails.minSalaryRequired.toLocaleString()} threshold. Special exemption review needed.</span>
                  </>
                )}
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2 border-t border-[#E8E2D2]">
                <label className="flex items-center gap-3 cursor-pointer text-xs font-sans text-[#202B36]">
                  <input
                    type="checkbox"
                    checked={isFirstTimeSponsor}
                    onChange={(e) => setIsFirstTimeSponsor(e.target.checked)}
                    className="w-4 h-4 rounded border-[#E8E2D2] text-[#103C35] focus:ring-0 accent-[#103C35]"
                  />
                  <span>{t.firstTimeSponsor}</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-xs font-sans text-[#202B36]">
                  <input
                    type="checkbox"
                    checked={isVipMedical}
                    onChange={(e) => setIsVipMedical(e.target.checked)}
                    className="w-4 h-4 rounded border-[#E8E2D2] text-[#103C35] focus:ring-0 accent-[#103C35]"
                  />
                  <span>Upgrade to VIP 4-Hour Smart Salem Medical Fitness (+AED 477/adult)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): The EXACT Card Breakdown as in User's Screenshot */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            {/* Header: VISA FEES BREAKDOWN in bold red/crimson */}
            <div className="text-left">
              <span className="font-sans font-bold text-[13px] tracking-wider text-[#DC2626] uppercase">
                {t.breakdownTitle}
              </span>
            </div>

            {/* Individual Breakdown Cards */}
            <div className="space-y-3">
              {/* Adult Card */}
              {adultCount > 0 && (
                <div className="bg-white rounded-2xl border border-[#E8E2D2] p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🧍</span>
                      <span className="font-sans font-bold text-[16px] text-[#202B36]">
                        {t.adultLabel} {adultCount > 1 ? `(×${adultCount})` : ''}
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[17px] text-[#DC2626]">
                      AED {feeDetails.totalAdults.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2 font-sans text-[13px] text-[#202B36]/80">
                    <div className="flex items-center justify-between">
                      <span>{t.entryPermit} {isInsideUae ? '(Inside)' : '(Outside)'}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.entryPermitAdult * adultCount).toLocaleString()}
                      </span>
                    </div>

                    {isInsideUae && (
                      <div className="flex items-center justify-between">
                        <span>{t.statusChange}</span>
                        <span className="font-mono font-medium text-[#202B36]">
                          AED {(feeDetails.statusChangeFee * adultCount).toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span>{t.medicalTest} {isVipMedical ? '(VIP 4h)' : '(Normal)'}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.medicalFeePerAdult * adultCount).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>{t.emiratesId}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.eidFee * adultCount).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>{t.visaStamping}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.stampingFee * adultCount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Child Card */}
              {childCount > 0 && (
                <div className="bg-white rounded-2xl border border-[#E8E2D2] p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base">👶</span>
                      <span className="font-sans font-bold text-[16px] text-[#202B36]">
                        {t.childLabel} {childCount > 1 ? `(×${childCount})` : ''}
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[17px] text-[#DC2626]">
                      AED {feeDetails.totalChildren.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2 font-sans text-[13px] text-[#202B36]/80">
                    <div className="flex items-center justify-between">
                      <span>{t.entryPermit} {isInsideUae ? '(Inside)' : '(Outside)'}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.entryPermitChild * childCount).toLocaleString()}
                      </span>
                    </div>

                    {isInsideUae && (
                      <div className="flex items-center justify-between">
                        <span>{t.statusChange}</span>
                        <span className="font-mono font-medium text-[#202B36]">
                          AED {(feeDetails.statusChangeFee * childCount).toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[#C6A66B] font-medium">
                      <span>{t.medicalTest}</span>
                      <span>Exempt (&lt;18)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>{t.emiratesId}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.eidFee * childCount).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>{t.visaStamping}</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {(feeDetails.stampingFee * childCount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Parents Card */}
              {parentCount > 0 && (
                <div className="bg-white rounded-2xl border border-[#E8E2D2] p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base">👴👵</span>
                      <span className="font-sans font-bold text-[16px] text-[#202B36]">
                        {t.parentsLabel} (×{parentCount})
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[17px] text-[#DC2626]">
                      AED {feeDetails.totalParents.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2 font-sans text-[13px] text-[#202B36]/80">
                    <div className="flex items-center justify-between">
                      <span>Entry, Status & Medical per Parent</span>
                      <span className="font-mono font-medium text-[#202B36]">
                        AED {((feeDetails.entryPermitAdult + (isInsideUae ? feeDetails.statusChangeFee : 0) + feeDetails.medicalFeePerAdult + feeDetails.eidFee + feeDetails.stampingFee) * parentCount).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#C6A66B]">
                      <span>Refundable GDRFA Deposit</span>
                      <span className="font-mono font-bold">AED {(2020 * parentCount).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Newborn Card */}
              {newbornCount > 0 && (
                <div className="bg-white rounded-2xl border border-[#E8E2D2] p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🍼</span>
                      <span className="font-sans font-bold text-[16px] text-[#202B36]">
                        {t.newbornLabel} (×{newbornCount})
                      </span>
                    </div>
                    <span className="font-sans font-bold text-[17px] text-[#DC2626]">
                      AED {feeDetails.totalNewborns.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[12px] text-[#202B36]/70">
                    Full digital residency stamping & Emirates ID within 120-day grace period.
                  </div>
                </div>
              )}

              {/* First Time File Opening Fee */}
              {isFirstTimeSponsor && (
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E8E2D2] flex items-center justify-between font-sans text-[13px]">
                  <span className="text-[#202B36]/80">GDRFA Family File Opening (1st Time)</span>
                  <span className="font-mono font-bold text-[#103C35]">AED 203</span>
                </div>
              )}
            </div>

            {/* Total Government Fees Banner (Exact look from screenshot: Dark with Gold Amount) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#202B36] text-white flex items-center justify-between shadow-md">
              <span className="font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-wide text-white">
                {t.totalGovtFees}
              </span>
              <span className="font-mono font-bold text-[20px] sm:text-[23px] text-[#E2B93B] tabular-nums">
                AED {feeDetails.totalGovtFees.toLocaleString()}
              </span>
            </div>

            {/* Button 1: Compare with AMER Center */}
            <button
              type="button"
              onClick={() => setShowAmerModal(true)}
              className="w-full py-3.5 px-4 rounded-2xl bg-white border border-[#E8E2D2] hover:border-[#DC2626] font-sans font-bold text-[14px] sm:text-[15px] text-[#DC2626] hover:bg-rose-50/40 transition-all flex items-center justify-center gap-2 shadow-2xs active:scale-[0.99]"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{t.compareAmer}</span>
            </button>

            {/* Button 2: WhatsApp Start Application Online (Green Button from screenshot) */}
            <button
              type="button"
              onClick={handleStartWhatsApp}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] font-sans font-bold text-[15px] sm:text-[16px] text-white transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.startWhatsapp}</span>
            </button>

            {/* Button 3: Share this estimate (Dark button from screenshot) */}
            <button
              type="button"
              onClick={handleShare}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#202B36] hover:bg-[#162029] font-sans font-bold text-[14px] sm:text-[15px] text-white transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
            >
              <Share2 className="w-4 h-4 text-white" />
              <span>{copiedToast ? '✓ Copied Quote Link!' : t.shareEstimate}</span>
            </button>

            {/* Google Rating Trust Badge */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs font-sans text-[#202B36]">
              {/* Colorful Google G */}
              <span className="font-bold text-[15px] text-blue-600">G</span>
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span className="font-semibold text-[#202B36]">{t.reviewsNote}</span>
            </div>

            {/* Small Footer Disclaimer */}
            <p className="font-sans text-[11px] text-[#202B36]/60 text-center leading-relaxed">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Compare with AMER Center Modal */}
      {showAmerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-[#E8E2D2] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E8E2D2] pb-4">
              <div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C6A66B]">
                  Official Comparison
                </span>
                <h3 className="font-serif font-normal text-[22px] text-[#103C35]">
                  AMER Center vs FamilyVisa.ae
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAmerModal(false)}
                className="font-sans text-xs font-medium text-[#202B36]/60 hover:text-[#103C35]"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 font-sans text-[13px]">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-[#DC2626]">Direct Walk-in AMER Center:</span>
                <ul className="space-y-1 text-slate-600 list-disc list-inside text-xs">
                  <li>Requires 3 to 4 in-person visits to physical typing branches.</li>
                  <li>Average wait time: 1.5 to 3 hours per queue.</li>
                  <li>Transportation and paid parking at Dubai municipal buildings.</li>
                  <li>No doorstep passport collection or home medical screening.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-bold text-[#103C35]">FamilyVisa.ae Online Concierge:</span>
                <ul className="space-y-1 text-emerald-800 list-disc list-inside text-xs">
                  <li>100% digital application submission directly from WhatsApp.</li>
                  <li>Zero queues or branch waiting.</li>
                  <li>Doorstep document collection and original passport return.</li>
                  <li>Dedicated case specialist tracking each step to card delivery.</li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowAmerModal(false);
                  handleStartWhatsApp();
                }}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] font-sans font-bold text-sm text-white flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Start on WhatsApp Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
