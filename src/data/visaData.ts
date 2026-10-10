/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VisaCategoryInfo, DocumentCheckItem, VisaApplicationRecord } from '../types/visa';

export const VISA_CATEGORIES: Record<string, VisaCategoryInfo> = {
  spouse: {
    id: 'spouse',
    title: 'Spouse Residence Visa',
    subtitle: 'Wife or Husband Sponsorship',
    description: 'Sponsor your husband or wife with streamlined GDRFA & ICP processing, digital residency issuance, and doorstep delivery.',
    minSalary: 4000,
    salaryNote: 'AED 4,000/month or AED 3,000 + company-provided housing (Male). AED 10,000/month for female sponsors.',
    validity: '2 Years (Linked to Sponsor Visa)',
    turnaroundTime: '3 – 5 Working Days',
    baseInsideFee: 2656,
    baseOutsideFee: 1376,
    eligibilityNotes: [
      'Valid attested marriage certificate translated into Arabic',
      'Valid Ejari tenancy contract or proof of residential title deed',
      'Sponsor must hold valid UAE residence visa and Emirates ID',
      'Medical fitness examination mandatory for ages 18+'
    ],
    keyRequirements: [
      'Attested Marriage Certificate',
      'Sponsor Salary Certificate / MOHRE Contract',
      'Ejari / Registered Tenancy Contract',
      'Original Passports (6+ months validity)'
    ]
  },
  children: {
    id: 'children',
    title: 'Children Residence Visa',
    subtitle: 'Sons & Daughters Sponsorship',
    description: 'Sponsor sons up to age 25 (or higher if studying) and unmarried daughters of any age under simplified family residency laws.',
    minSalary: 4000,
    salaryNote: 'AED 4,000/month or AED 3,000 with company accommodation',
    validity: '2 Years (Linked to Sponsor Visa)',
    turnaroundTime: '3 – 5 Working Days',
    baseInsideFee: 2383,
    baseOutsideFee: 1103,
    eligibilityNotes: [
      'Sons sponsored up to age 25 under updated UAE immigration reforms',
      'Unmarried daughters can be sponsored regardless of age',
      'Attested birth certificates indicating both parents names',
      'Children under 18 are exempt from medical fitness blood tests'
    ],
    keyRequirements: [
      'Attested Birth Certificate',
      'Sponsor Salary Certificate / Labor Contract',
      'Registered Ejari Tenancy Certificate',
      'Child Passport & White Background Photos'
    ]
  },
  parents: {
    id: 'parents',
    title: 'Parents Residence Visa',
    subtitle: 'Father & Mother Humanitarian Sponsorship',
    description: 'Sponsor both parents under GDRFA humanitarian dependency guidelines with specialized fast-track medical support.',
    minSalary: 10000,
    salaryNote: 'Minimum AED 10,000 monthly salary or AED 9,000 + housing. Both parents must be sponsored together unless deceased or legally separated.',
    validity: '1 Year Renewable',
    turnaroundTime: '5 – 7 Working Days',
    baseInsideFee: 3820,
    baseOutsideFee: 2450,
    eligibilityNotes: [
      'Must sponsor both parents simultaneously (proof of death/divorce required if only one)',
      'Proof of dependency and no sole caregiver in home country',
      'Minimum two-bedroom home verified through Ejari tenancy contract',
      'Refundable security deposit of approx. AED 2,020 per parent held by GDRFA'
    ],
    keyRequirements: [
      'Attested Relationship & Birth Certificates',
      'Two-Bedroom Ejari Tenancy Contract',
      'Salary Certificate (AED 10,000+ per month)',
      'Refundable GDRFA Security Deposit'
    ]
  },
  newborn: {
    id: 'newborn',
    title: 'Newborn Baby Visa',
    subtitle: 'Babies Born in the UAE',
    description: '120-day grace period from birth to issue residency visa without incurring overstay fines. Zero medical test required.',
    minSalary: 4000,
    salaryNote: 'Standard family sponsorship threshold applies',
    validity: '2 Years',
    turnaroundTime: '2 – 4 Working Days',
    baseInsideFee: 1850,
    baseOutsideFee: 1850,
    eligibilityNotes: [
      'Must be completed within 120 days from date of birth to avoid AED 50/day fines',
      'Attested UAE Ministry of Health birth certificate required',
      'Baby is exempt from medical examination and biometric fingerprints',
      'Both parents valid Emirates IDs and marriage certificate required'
    ],
    keyRequirements: [
      'MOHAP / DHA Attested Birth Certificate',
      'Attested Marriage Certificate',
      'Passports of Father & Mother',
      'Newborn Passport & Passport Photos'
    ]
  },
  domestic: {
    id: 'domestic',
    title: 'Domestic Worker Visa',
    subtitle: 'Nanny, Maid & Private Driver',
    description: 'Official Tadbeer & MOHRE compliant domestic worker sponsorship with comprehensive health insurance and contract issuance.',
    minSalary: 10000,
    salaryNote: 'AED 10,000+ monthly salary or Golden Visa holder exemption',
    validity: '2 Years',
    turnaroundTime: '4 – 6 Working Days',
    baseInsideFee: 4950,
    baseOutsideFee: 3400,
    eligibilityNotes: [
      'Requires unified MOHRE / Tadbeer domestic worker employment contract',
      'Mandatory basic health insurance coverage',
      'Full comprehensive medical fitness screening with hepatitis & pregnancy checks',
      'Sponsor must provide suitable private accommodation'
    ],
    keyRequirements: [
      'Tadbeer Labor Contract Package',
      'Sponsor Ejari & Bank Statements (3 months)',
      'Worker Passport & Police Clearance',
      'Pre-approval Entry Permit'
    ]
  }
};

export const DOCUMENT_CHECKLIST: DocumentCheckItem[] = [
  {
    id: 'doc-marriage',
    name: 'Attested Marriage Certificate',
    description: 'Required for spouse visa. Must be attested by Ministry of Foreign Affairs (MoFA) in home country, UAE Embassy, and UAE MoFA.',
    category: 'attestation',
    requiredFor: ['spouse'],
    isMandatory: true,
    needsMofaAttestation: true,
    guidanceTip: 'If issued outside UAE, ensure official Arabic legal translation is appended after MoFA attestation.'
  },
  {
    id: 'doc-birth',
    name: 'Attested Birth Certificate',
    description: 'Required for children and parents. Must clearly state parents names and have MoFA attestation seal.',
    category: 'attestation',
    requiredFor: ['children', 'parents', 'newborn'],
    isMandatory: true,
    needsMofaAttestation: true,
    guidanceTip: 'For UAE-born babies, get the birth certificate attested by the UAE Ministry of Health and Prevention (MOHAP) and MoFA.'
  },
  {
    id: 'doc-ejari',
    name: 'Ejari / Tenancy Contract (Registered)',
    description: 'Official tenancy contract registered with Dubai Land Department (Ejari) or Title Deed. Minimum 2-bedroom for parents.',
    category: 'sponsor',
    requiredFor: ['spouse', 'children', 'parents', 'domestic'],
    isMandatory: true,
    needsMofaAttestation: false,
    guidanceTip: 'Must have active DEWA connection in sponsor or spouse name.'
  },
  {
    id: 'doc-salary',
    name: 'Salary Certificate / MOHRE Contract',
    description: 'Current salary certificate from employer (for government/freezone) or MOHRE labor contract showing minimum monthly salary.',
    category: 'sponsor',
    requiredFor: ['spouse', 'children', 'parents', 'newborn', 'domestic'],
    isMandatory: true,
    needsMofaAttestation: false,
    guidanceTip: 'Free Zone employees should obtain an electronic salary certificate addressed to GDRFA Dubai.'
  },
  {
    id: 'doc-passports',
    name: 'Original Passports (6+ Months Validity)',
    description: 'Passports of sponsor and all sponsored dependents with at least 6 months remaining validity.',
    category: 'dependent',
    requiredFor: ['spouse', 'children', 'parents', 'newborn', 'domestic'],
    isMandatory: true,
    needsMofaAttestation: false,
    guidanceTip: 'Scan all pages with past UAE entry stamps or existing residence visas if applicable.'
  },
  {
    id: 'doc-photos',
    name: 'Passport-Sized Color Photographs',
    description: 'High-resolution photographs with white background, formal attire, neutral expression, and no tinted glasses.',
    category: 'dependent',
    requiredFor: ['spouse', 'children', 'parents', 'newborn', 'domestic'],
    isMandatory: true,
    needsMofaAttestation: false,
    guidanceTip: 'Digital 300 DPI copies are accepted by Amer and GDRFA systems.'
  },
  {
    id: 'doc-bank',
    name: '3 Months Bank Statements',
    description: 'Stamped bank statements showing regular salary credit deposits for sponsor (mandatory for parents and female sponsors).',
    category: 'sponsor',
    requiredFor: ['parents', 'domestic'],
    isMandatory: true,
    needsMofaAttestation: false,
    guidanceTip: 'Must show salary amounts matching the employment contract exactly.'
  },
  {
    id: 'doc-dependency',
    name: 'Affidavit / Certificate of Dependency',
    description: 'Consular certificate certifying that parents are fully dependent on the UAE resident and have no alternate provider.',
    category: 'attestation',
    requiredFor: ['parents'],
    isMandatory: true,
    needsMofaAttestation: true,
    guidanceTip: 'Obtainable through your country consulate or Dubai Courts humanitarian committee.'
  }
];

export const DEMO_TRACKING_RECORDS: Record<string, VisaApplicationRecord> = {
  'DXB-FV-84920': {
    referenceNumber: 'DXB-FV-84920',
    sponsorName: 'Tariq Mansoor Al-Hashimi',
    dependentName: 'Fatima Al-Hashimi (Spouse)',
    category: 'spouse',
    submissionDate: '2026-10-04',
    estimatedCompletion: '2026-10-12',
    currentStage: 4,
    totalStages: 5,
    statusLabel: 'Emirates ID Biometrics Complete — Stamping In Progress',
    entryPermitNumber: '201/2026/894210',
    emiratesIdTracking: '784-1992-8921829-1',
    milestones: [
      {
        stageNumber: 1,
        title: 'Application & Document Audit Lodged',
        authority: 'FamilyVisa.ae Concierge Hub',
        status: 'completed',
        timestamp: 'Oct 04, 2026 · 10:15 AM',
        description: 'All documents verified against GDRFA standards. File opening fee processed.'
      },
      {
        stageNumber: 2,
        title: 'Entry Permit & Status Change Approved',
        authority: 'GDRFA Dubai / Amer System',
        status: 'completed',
        timestamp: 'Oct 06, 2026 · 02:40 PM',
        description: 'Digital electronic entry permit issued (Permit #201/2026/894210). Status change stamped inside UAE.'
      },
      {
        stageNumber: 3,
        title: 'VIP DHA Medical Fitness Examination',
        authority: 'Dubai Health Authority (Smart Salem)',
        status: 'completed',
        timestamp: 'Oct 08, 2026 · 11:30 AM',
        description: 'Blood test and chest X-ray cleared with zero health impediments. Medical fitness certificate verified.'
      },
      {
        stageNumber: 4,
        title: 'Emirates ID Biometrics & Typing',
        authority: 'Federal Authority for Identity & Citizenship (ICP)',
        status: 'completed',
        timestamp: 'Oct 09, 2026 · 04:15 PM',
        description: 'Biometric fingerprint capture validated. Digital residency permit under final electronic seal.'
      },
      {
        stageNumber: 5,
        title: 'Residence Stamping & Doorstep Card Delivery',
        authority: 'UAE ICP Courier Logistics',
        status: 'in_progress',
        timestamp: 'Estimated: Oct 12, 2026',
        description: 'Digital residence visa issued to UAE Pass. Physical Emirates ID card dispatched with courier.'
      }
    ]
  },
  'DXB-FV-31088': {
    referenceNumber: 'DXB-FV-31088',
    sponsorName: 'Alexander Hayes',
    dependentName: 'Leo Hayes (Son - Age 4)',
    category: 'children',
    submissionDate: '2026-10-08',
    estimatedCompletion: '2026-10-14',
    currentStage: 2,
    totalStages: 5,
    statusLabel: 'Entry Permit Issued — Awaiting Status Change',
    entryPermitNumber: '201/2026/331088',
    emiratesIdTracking: '784-2022-4410912-3',
    milestones: [
      {
        stageNumber: 1,
        title: 'Application & Document Audit Lodged',
        authority: 'FamilyVisa.ae Concierge Hub',
        status: 'completed',
        timestamp: 'Oct 08, 2026 · 09:00 AM',
        description: 'Birth certificate and Ejari successfully verified.'
      },
      {
        stageNumber: 2,
        title: 'Entry Permit Issued',
        authority: 'GDRFA Dubai',
        status: 'completed',
        timestamp: 'Oct 09, 2026 · 03:20 PM',
        description: 'Electronic entry permit issued. Dependent inside UAE awaiting status adjustment.'
      },
      {
        stageNumber: 3,
        title: 'Medical Fitness Examination',
        authority: 'Dubai Health Authority',
        status: 'completed',
        timestamp: 'Oct 10, 2026 · 09:30 AM',
        description: 'Child under 18 — automatically exempt from medical fitness test.'
      },
      {
        stageNumber: 4,
        title: 'Emirates ID Application Processing',
        authority: 'Federal Authority for Identity (ICP)',
        status: 'in_progress',
        timestamp: 'Oct 10, 2026',
        description: 'ICP electronic form typed. No fingerprints required for minors under 15.'
      },
      {
        stageNumber: 5,
        title: 'Digital Residency Issuance & Card Delivery',
        authority: 'ICP Logistics',
        status: 'pending',
        timestamp: 'Estimated: Oct 14, 2026',
        description: 'Final issuance pending.'
      }
    ]
  }
};

export const FAQ_ITEMS = [
  {
    category: 'Eligibility & Rules',
    question: 'Can a female expatriate resident sponsor her husband and children?',
    answer: 'Yes. Under UAE immigration rules, a female resident can sponsor her husband and children if she earns a minimum monthly salary of AED 10,000 (or AED 8,000 plus accommodation) and holds a skilled profession category (such as engineer, doctor, teacher, or administrative executive) or has special approval from GDRFA.'
  },
  {
    category: 'Costs & Government Fees',
    question: 'Why does a visa cost more when the dependent is already inside the UAE?',
    answer: 'When a dependent is inside the country on a tourist or visit visa, the UAE government charges a mandatory "Change of Status" fee (AED 650 to AED 680) to transfer their immigration file from visitor status to residence status without requiring them to physically exit and re-enter the country.'
  },
  {
    category: 'Parents Sponsorship',
    question: 'Can I sponsor only one of my parents in Dubai?',
    answer: 'Under standard GDRFA regulations, both parents must be sponsored together to ensure full humanitarian care. Sponsoring a single parent is only permitted in exceptional cases with official documentation proving the other parent is deceased, legally divorced, or has a severe medical reason preventing travel.'
  },
  {
    category: 'Turnaround Time',
    question: 'How fast is the complete family visa process from start to finish?',
    answer: 'With our streamlined digital concierge, the entry permit is typically issued within 24 to 48 hours. Medical fitness test results take 4 hours (VIP) to 24 hours (Standard). Emirates ID typing and digital residency stamping complete within 3 to 5 working days overall.'
  },
  {
    category: 'Newborn Babies',
    question: 'How long do I have to sponsor a baby born in Dubai or Abu Dhabi?',
    answer: 'Parents have a strict 120-day grace period from the baby\'s date of birth to complete passport issuance and family residency stamping. Exceeding 120 days incurs an overstay fine of AED 50 per day plus administrative penalties.'
  },
  {
    category: 'Doorstep Concierge',
    question: 'What is included in the VIP Doorstep Concierge service?',
    answer: 'Our VIP Concierge provides at-home document collection, door-to-door escort to smart biometric booths with zero queueing, DHA-certified medical nursing teams dispatched to your residence or office for blood collection, and hand-delivery of the original physical Emirates ID cards.'
  }
];
