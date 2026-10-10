# FamilyVisa.ae — Ultra-Clean UAE Family Residence Visa Platform

A complete architectural redesign of FamilyVisa.ae into an ultra-clean, minimalist UAE government-services concierge. The platform replaces cluttered legacy portals with an intuitive, transparent experience featuring an instant eligibility and dynamic fee calculator, an interactive attestation and document checker, a live milestone tracking engine, and VIP doorstep concierge scheduling.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and aesthetic choices were confirmed through user alignment and will govern the redesign:

- **Aesthetic Direction**: Ultra-clean minimalist with soft slate (`#1E293B`, `#0F172A`) and warm neutral sand/desert dunes tones (`#FDFBF7`, `#F4EFEA`, `#C2A47E`). Eliminates generic AI gradients and mechanical slop in favor of high-trust, editorial Emirati elegance.
- **Primary Interactive Anchor**: A comprehensive Smart Visa Wizard with instant real-time salary/accommodation eligibility verification and dynamic itemized cost calculation across both In-UAE and Outside-UAE dependent tracks.
- **Category Scope**: Full suite of UAE family sponsorships supported:
  1. Spouse (Wife / Husband sponsorship with gender-specific rules)
  2. Dependent Children (Sons up to 25 / Daughters unmarried)
  3. Parents (Both parents dependency rules, 2-bedroom accommodation & refundable deposit)
  4. Newborns (Under 120 days post-birth in UAE, simplified medical exemption)
  5. Domestic Workers (Maids, nannies, private drivers under Tadbeer regulations)
- **Zero Mock Fallbacks**: Real UAE GDRFA / ICP fee schedules, authentic regulatory thresholds (AED 4,000 / AED 3,000 + accommodation for male sponsors; AED 10,000 for female sponsors; AED 10,000+ for parents), and functional state management for calculation, document auditing, and tracking.

---

### 1. Overview & Core Concept

- **What It Does**: FamilyVisa.ae is an all-in-one digital concierge for expatriates and residents in Dubai and the UAE looking to sponsor family members for residence visas. It demystifies complex government paperwork, computes exact official government fees and service charges, audits document readiness, and offers VIP doorstep medical and biometrics dispatch.
- **Target Audience / Persona**: UAE residents (professionals, business owners, investors, Golden Visa holders) seeking transparent, stress-free family residency processing without navigating physical typing centers or ambiguous pricing.
- **Key Value**: 100% price transparency with real-time fee breakdown (entry permit, change of status, medical test, Emirates ID, residence stamping), instant eligibility audit in 30 seconds, and end-to-end milestone visibility.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Interactive Visa Eligibility & Cost Calculator**:
   - The user selects sponsor profile (salary, accommodation status, sponsor gender).
   - The user configures dependents (count, relationship, currently inside UAE vs. outside UAE).
   - Real-time engine validates compliance against GDRFA/ICP rules and outputs a transparent, itemized invoice with government breakdown, deposit requirements, and estimated completion days.
2. **Interactive Document Checklist & Attestation Roadmap**:
   - Dynamic checklist generator based on nationality, marriage country, and dependent age.
   - Step-by-step guidance on Ministry of Foreign Affairs (MoFA) and UAE Embassy attestation steps.
   - Interactive document auditor simulation allowing residents to check their paperwork readiness before submission.
3. **Application Milestone Tracker**:
   - Live query interface with authentic UAE application numbers (e.g., `DXB-FV-84920` demo pre-filled).
   - Visual 5-stage progress indicator: *Application Lodged* → *Entry Permit Issued* → *VIP Medical Fitness* → *Emirates ID Biometrics* → *Digital Residence Visa & EID Delivery*.
4. **VIP Doorstep Concierge Booking**:
   - Appointment scheduler for doorstep document collection, in-home DHA medical blood test, and priority biometric escorts.

#### Visual Identity & Color Palette
In accordance with user selection, the platform adopts an **Ultra-Clean Minimalist** aesthetic influenced by modern architectural sand dunes, soft slate stone, and subtle camel/gold accents.

- **Canvas & Structural Neutrals**:
  - Background Canvas: `#FDFBF7` (Warm Pearl Alabaster, soft off-white canvas)
  - Card & Container Surface: `#FFFFFF` (Crisp white elevated structural cards)
  - Secondary Surface: `#F6F3ED` (Subtle warm sand contrast)
  - Hairline Borders: `#E8E2D8` (Warm stone divider line)
- **Typography & Deep Slates**:
  - Primary Headlines: `#0F172A` (Deep Slate Obsidian)
  - Body Copy: `#334155` (Slate Grey, 4.5:1+ contrast)
  - Muted Metadata & Guides: `#64748B` (Neutral stone grey)
- **Accents & Brand Identifiers**:
  - Primary Accent: `#A68052` (Desert Dune Camel Gold — subtle, luxurious, unostentatious)
  - Accent Hover / Active: `#8A673D` (Deep Sand Bronze)
  - Trust State (Valid / Success): `#15803D` (Subdued UAE Palm Green)
  - Notice / Alert: `#B45309` (Warm Amber Terracotta)

#### Typography & Hierarchy
- **Display Headings**: `Plus Jakarta Sans`, tight tracking (`tracking-tight`), `font-bold` and `font-semibold`.
- **Body & Controls**: `Plus Jakarta Sans` or system geometric sans, relaxed line-height for effortless readability.
- **Tabular Figures**: `tabular-nums` throughout all fee matrices, AED currency displays, and timeline dates.
- **Anti-Slop Discipline**:
  - No candy pill enclosures around static metadata (clean inline text with `·` separators).
  - No decorative code-comment syntax (`// 01`) or fake technical tags.
  - No pulsing green dots on static cards.
  - Strict Top Bar Contract: 1-line wordmark, 4 clean single-line navigation links, 1 primary action button (`Calculate Fees`).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Dynamic Calculation Engine vs. Static Lead Form**
  - *Chosen Approach*: Fully interactive, real-time client-side calculation engine with instant fee updates as users toggle family members, location status, and VIP options.
  - *Why*: Legacy visa agency sites conceal prices behind opaque contact forms. Instant transparency builds immediate trust and dramatically increases engagement.
  - *Alternatives Considered*: Hidden quote request form (discarded for poor UX and low trust).

- **Decision 2: Comprehensive Multi-Category Support**
  - *Chosen Approach*: Native support for all 5 official UAE sponsorship tracks (Spouse, Children, Parents, Newborns, Domestic Workers) with conditional fields (e.g. 2-bedroom tenancy requirement for parents, 120-day rule for newborns).
  - *Why*: Covers 100% of real expat scenarios rather than a narrow single-case calculator.

- **Decision 3: Integrated Live Application Tracker with Demo States**
  - *Chosen Approach*: Interactive tracker accepting real or sample tracking codes with actionable timeline milestones, download links for sample entry permits, and notification toggles.
  - *Why*: Demonstrates the end-to-end lifecycle beyond initial sales into post-submission peace of mind.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Bar Navigation                              │
│   [FamilyVisa.ae] ── [Calculator | Categories | Documents | Track] ── [Book VIP] │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                           Hero Section                                 │
│    Headline: UAE Family Residence Visas, Simplified & Transparent     │
│    Quick Selection Pill Tabs & Trust Proof (14,000+ Visas Issued)     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                   Interactive Visa Engine Core                         │
│  ┌───────────────────────────────┐  ┌────────────────────────────────┐  │
│  │ 1. Sponsor Eligibility Audit │  │ 2. Dynamic Fee Breakdown       │  │
│  │  - Monthly Salary Input (AED) │  │  - Government Fees (GDRFA/ICP) │  │
│  │  - Accommodation & Tenancy    │  │  - Entry Permit / Status Change│  │
│  │  - Sponsor Gender & Profession│  │  - Medical & Emirates ID Fees  │  │
│  │  - Inside vs Outside UAE      │  │  - Total AED & Export Summary  │  │
│  └───────────────────────────────┘  └────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│               Category Bento: 5 Sponsorship Portfolios                 │
│  [Spouse Visa] [Children Visa] [Parents Visa] [Newborn] [Domestic Aid]  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│           Document Readiness Checker & Attestation Roadmap             │
│   Interactive checklist with MoFA / Embassy verification checklists    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                Live Application Milestone Tracker                      │
│   Search DXB reference ──> Real-time 5-stage progress timeline         │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│             VIP Doorstep Concierge & Contact Lead Capture              │
│   Doorstep document pickup, home blood test & priority biometrics      │
└────────────────────────────────────────────────────────────────────────┘
```

#### Core State Management & Component Mapping
- `activeCategory`: Currently selected visa path (`'spouse' | 'children' | 'parents' | 'newborn' | 'maid'`).
- `sponsorProfile`: `{ salary: number, accommodationType: 'owned' | 'rented_ejari' | 'company', gender: 'male' | 'female', professionTier: 'skilled' | 'other' }`.
- `dependents`: Array of dependents with `{ id, relation, inUae, age, expressMedical, deliveryNeeded }`.
- `eligibilityResult`: Computed status with detailed breakdown of passing criteria and warning alerts (e.g. minimum salary shortage, parental deposit notice).
- `trackingState`: Search query, status payload, timeline checkpoints, and downloadable permit simulation.
- `vipBookingState`: Selected service date, emirate (Dubai, Abu Dhabi, Sharjah), address, and confirmation receipt.
