import React, { useEffect } from 'react';
import TaxSecpHero from '../components/tax-secp/TaxSecpHero';
import SecpServicesGrid from '../components/tax-secp/SecpServicesGrid';
import FbrTaxAdvisory from '../components/tax-secp/FbrTaxAdvisory';
import ComplianceChecklist from '../components/tax-secp/ComplianceChecklist';
import WorkplaceInquiryForm from '../components/workplace/WorkplaceInquiryForm';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';

export default function TaxSecpPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'SECP Registration & FBR Tax Advisory | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Hero */}
      <TaxSecpHero />

      {/* 2. Sub-component: SECP Secretarial & Corporate Grid */}
      <SecpServicesGrid />

      {/* 3. Sub-component: FBR Tax Services Grid */}
      <FbrTaxAdvisory />

      {/* 4. Sub-component: Statutory Compliance Roadmap */}
      <ComplianceChecklist />

      {/* 5. Sub-component: Corporate Consultation Form */}
      <WorkplaceInquiryForm preselectedTopic="Tax & SECP Advisory" />

      {/* 6. Sub-component: Direct Consultation CTA Banner */}
      <CourseInquiryCTA courseTitle="Tax & SECP Advisory" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
