/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type VisaCategoryKey = 'spouse' | 'children' | 'parents' | 'newborn' | 'domestic';

export interface VisaCategoryInfo {
  id: VisaCategoryKey;
  title: string;
  subtitle: string;
  description: string;
  minSalary: number;
  salaryNote: string;
  validity: string;
  turnaroundTime: string;
  baseInsideFee: number;
  baseOutsideFee: number;
  eligibilityNotes: string[];
  keyRequirements: string[];
}

export interface SponsorProfile {
  salary: number;
  accommodation: 'rented_ejari' | 'owned_property' | 'company_provided';
  gender: 'male' | 'female';
  professionCategory: 'skilled_professional' | 'business_partner' | 'general';
  isFirstTimeSponsor: boolean;
  residenceEmirate: 'dubai' | 'abu_dhabi' | 'sharjah' | 'other_emirate';
}

export interface DependentItem {
  id: string;
  relation: 'spouse' | 'son' | 'daughter' | 'father' | 'mother' | 'newborn' | 'maid';
  relationLabel: string;
  isInsideUae: boolean;
  age: number;
  isStudent?: boolean;
  isUnmarried?: boolean;
  isVipMedical: boolean;
  requiresStatusChange: boolean;
}

export interface FeeItemization {
  fileOpeningFee: number;
  entryPermitFee: number;
  statusChangeFee: number;
  medicalFitnessFee: number;
  emiratesIdFee: number;
  residenceStampingFee: number;
  refundableDeposit: number;
  serviceConciergeFee: number;
  courierDeliveryFee: number;
  subtotalGovt: number;
  subtotalServices: number;
  totalPayable: number;
}

export interface EligibilityAudit {
  isEligible: boolean;
  passedChecks: string[];
  warningIssues: string[];
  criticalErrors: string[];
  salaryDelta: number;
}

export interface DocumentCheckItem {
  id: string;
  name: string;
  description: string;
  category: 'sponsor' | 'dependent' | 'attestation';
  requiredFor: VisaCategoryKey[];
  isMandatory: boolean;
  needsMofaAttestation: boolean;
  guidanceTip: string;
}

export interface TrackingMilestone {
  stageNumber: number;
  title: string;
  authority: string;
  status: 'completed' | 'in_progress' | 'pending';
  timestamp?: string;
  description: string;
}

export interface VisaApplicationRecord {
  referenceNumber: string;
  sponsorName: string;
  dependentName: string;
  category: VisaCategoryKey;
  submissionDate: string;
  estimatedCompletion: string;
  currentStage: number;
  totalStages: number;
  statusLabel: string;
  milestones: TrackingMilestone[];
  entryPermitNumber?: string;
  emiratesIdTracking?: string;
}

export interface ConciergeBookingForm {
  fullName: string;
  email: string;
  phone: string;
  emirate: string;
  district: string;
  serviceType: 'full_doorstep' | 'vip_medical_home' | 'express_document_courier';
  preferredDate: string;
  preferredTimeSlot: string;
  specialRequests?: string;
}
