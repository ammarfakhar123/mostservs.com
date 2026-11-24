import React, { useEffect } from 'react';
import WorkplaceHero from '../../components/workplace/WorkplaceHero';
import ConsultationAuditAreas from '../../components/workplace/ConsultationAuditAreas';
import EnterpriseBenefits from '../../components/workplace/EnterpriseBenefits';
import WorkplaceInquiryForm from '../../components/workplace/WorkplaceInquiryForm';
import CourseInquiryCTA from '../../components/course/CourseInquiryCTA';

export default function ConsultationServicesPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Corporate Consultation Services | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Hero */}
      <WorkplaceHero
        title="Helping You Train & Protect Your Staff"
        subtitle="Independent, practical consultancy and gap analysis provided by chartered practitioners to ensure workplace safety, IT integrity, and regulatory compliance."
        tag="Advisory & Auditing Services"
        currentBreadcrumb="Consultation Services"
      />

      {/* 2. Sub-component: 4 Core Audit Domains */}
      <ConsultationAuditAreas />

      {/* 3. Sub-component: Enterprise Benefits */}
      <EnterpriseBenefits />

      {/* 4. Sub-component: Corporate Proposal Form */}
      <WorkplaceInquiryForm preselectedTopic="Workplace Consultation & Audit" />

      {/* 5. Sub-component: Bottom Consultation Banner */}
      <CourseInquiryCTA courseTitle="Corporate Consultation" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
