/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    calculator: string;
    categories: string;
    documents: string;
    concierge: string;
    calculateFees: string;
    whatsappUs: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    launchCalc: string;
    exploreCat: string;
    complianceTitle: string;
    complianceDesc: string;
    turnaroundTitle: string;
    turnaroundDesc: string;
    pricingTitle: string;
    pricingDesc: string;
    vipTitle: string;
    vipDesc: string;
  };
  calc: {
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    whoSponsor: string;
    locationQuestion: string;
    insideUae: string;
    outsideUae: string;
    firstTimeSponsor: string;
    sponsorSalary: string;
    breakdownTitle: string;
    adultLabel: string;
    childLabel: string;
    parentsLabel: string;
    newbornLabel: string;
    entryPermit: string;
    medicalTest: string;
    emiratesId: string;
    visaStamping: string;
    statusChange: string;
    totalGovtFees: string;
    compareAmer: string;
    startWhatsapp: string;
    shareEstimate: string;
    reviewsNote: string;
    disclaimer: string;
  };
  whatsapp: {
    floatingChat: string;
    onlineNow: string;
    advisorPrompt: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      calculator: 'Fee Calculator',
      categories: 'Visa Categories',
      documents: 'Document Checker',
      concierge: 'VIP Concierge',
      calculateFees: 'Calculate Fees',
      whatsappUs: 'WhatsApp Advisor'
    },
    hero: {
      eyebrow: 'Official GDRFA & Amer Processing Hub · Dubai & The Emirates',
      title: 'UAE Family Residence Visas, Simplified & Truly Transparent.',
      subtitle: 'Calculate exact government fees in 30 seconds, audit sponsor salary eligibility, and initiate your family visa via WhatsApp or VIP concierge.',
      launchCalc: 'Launch Smart Visa Calculator',
      exploreCat: 'Explore Visa Categories',
      complianceTitle: '100% GDRFA & ICP',
      complianceDesc: 'Direct integration with Amer typing channels.',
      turnaroundTitle: '3 – 5 Working Days',
      turnaroundDesc: 'Express VIP medical & biometrics options.',
      pricingTitle: 'Zero Hidden Markups',
      pricingDesc: 'Itemized government fees published openly.',
      vipTitle: 'White-Glove Courier',
      vipDesc: 'Home blood tests and card hand-delivery.'
    },
    calc: {
      sectionTag: 'Interactive Visa Fees Calculator · 2026 GDRFA Schedule',
      sectionTitle: 'Calculate UAE Family Visa Fees',
      sectionDesc: 'Select your family members and where they currently are to see the instant official government fee breakdown.',
      whoSponsor: '1. Who are you sponsoring?',
      locationQuestion: '2. Are your dependents currently inside or outside the UAE?',
      insideUae: 'Inside UAE (Visitor / Tourist)',
      outsideUae: 'Outside UAE (In Home Country)',
      firstTimeSponsor: 'First-time sponsor in Dubai? (Includes AED 203 file opening fee)',
      sponsorSalary: 'Sponsor Monthly Salary (AED)',
      breakdownTitle: 'VISA FEES BREAKDOWN',
      adultLabel: 'Adult / Spouse',
      childLabel: 'Child',
      parentsLabel: 'Parents',
      newbornLabel: 'Newborn Baby',
      entryPermit: 'Entry Permit',
      medicalTest: 'Medical Fitness Test',
      emiratesId: 'Emirates ID – 2 Years',
      visaStamping: 'Digital Residency Stamping',
      statusChange: 'In-Country Status Change',
      totalGovtFees: 'TOTAL GOVERNMENT FEES',
      compareAmer: 'Compare with AMER Center',
      startWhatsapp: 'Start My Application Online',
      shareEstimate: 'Share this estimate',
      reviewsNote: '4.9 · 625 Google reviews',
      disclaimer: 'This estimate is for information only. For the actual price, please contact us.'
    },
    whatsapp: {
      floatingChat: 'Chat on WhatsApp',
      onlineNow: 'Online · Official Visa Specialist',
      advisorPrompt: 'Hello FamilyVisa.ae, I would like to get assistance sponsoring my family in the UAE.'
    }
  },
  ar: {
    nav: {
      calculator: 'حاسبة الرسوم',
      categories: 'أنواع الإقامات',
      documents: 'فحص المستندات',
      concierge: 'خدمة كبار الشخصيات',
      calculateFees: 'احسب الرسوم',
      whatsappUs: 'محادثة واتساب'
    },
    hero: {
      eyebrow: 'المركز المعتمد لمعاملات الإقامة · دبي والإمارات',
      title: 'إقامة العائلة في دولة الإمارات، بكل سهولة وشفافية مطلقة.',
      subtitle: 'احسب الرسوم الحكومية الرسمية بدقة في 30 ثانية، وتحقق من استيفاء شروط الراتب، وابدأ معاملتك فوراً عبر واتساب أو خدمة التوصيل المنزلي.',
      launchCalc: 'ابدأ حاسبة الإقامة الذكية',
      exploreCat: 'استعراض فئات التأشيرات',
      complianceTitle: '100% معتمد من آمر وإقامة دبي',
      complianceDesc: 'ربط مباشر بأنظمة الإدارة العامة للإقامة وشؤون الأجانب.',
      turnaroundTitle: '3 – 5 أيام عمل',
      turnaroundDesc: 'خيارات الفحص الطبي السريع والبصمة الفورية.',
      pricingTitle: 'بدون رسوم خفية',
      pricingDesc: 'تفصيل كامل لرسوم الطباعة والرسوم الحكومية.',
      vipTitle: 'خدمة كبار الشخصيات',
      vipDesc: 'سحب العينات في المنزل وتوصيل بطاقة الهوية إلى بابك.'
    },
    calc: {
      sectionTag: 'حاسبة رسوم الإقامة التفاعلية · جدول رسوم 2026',
      sectionTitle: 'حاسبة رسوم إقامة العائلة في دبي',
      sectionDesc: 'اختر أفراد عائلتك ومكان تواجدهم الحالي للحصول على كشف تفصيلي فوري بالرسوم الحكومية الرسمية.',
      whoSponsor: '1. من ترغب في استقدامه أو كفالته؟',
      locationQuestion: '2. هل المرافقون متواجدون داخل الدولة أم خارجها؟',
      insideUae: 'داخل الدولة (تأشيرة زيارة / سياحة)',
      outsideUae: 'خارج الدولة (في بلدهم الأصلي)',
      firstTimeSponsor: 'أول مرة تكفل عائلتك في دبي؟ (تشمل رسوم فتح الملف 203 دراهم)',
      sponsorSalary: 'الراتب الشهري للكفيل (بالدرهم الإماراتي)',
      breakdownTitle: 'تفاصيل الرسوم الحكومية الرسمية',
      adultLabel: 'شخص بالغ / الزوجة',
      childLabel: 'الأبناء',
      parentsLabel: 'الوالدين',
      newbornLabel: 'المولود الجديد',
      entryPermit: 'إذن الدخول الرسمي',
      medicalTest: 'الفحص الطبي للياقة الصحية',
      emiratesId: 'الهوية الإماراتية – سنتان',
      visaStamping: 'تثبيت الإقامة الرقمية',
      statusChange: 'تعديل الوضع داخل الدولة',
      totalGovtFees: 'إجمالي الرسوم الحكومية الرسمية',
      compareAmer: 'مقارنة مع مركز آمر الرسمي',
      startWhatsapp: 'ابدأ معاملتي الآن عبر واتساب',
      shareEstimate: 'مشاركة هذا التقدير',
      reviewsNote: 'تقييم 4.9 · أكثر من 625 تقييم في جوجل',
      disclaimer: 'هذا التقدير للأغراض الإرشادية. للحصول على العرض النهائي، يرجى التواصل معنا.'
    },
    whatsapp: {
      floatingChat: 'تحدث معنا عبر واتساب',
      onlineNow: 'متصل الآن · مستشار الإقامة المعتمد',
      advisorPrompt: 'مرحباً، أود الاستفسار والبدء في استخراج إقامة عائلية في الإمارات.'
    }
  }
};
