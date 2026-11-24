import React, { useEffect } from 'react';
import WorkplaceHero from '../../components/workplace/WorkplaceHero';
import WorkplaceFAQsList from '../../components/workplace/WorkplaceFAQsList';
import EnterpriseBenefits from '../../components/workplace/EnterpriseBenefits';
import CourseInquiryCTA from '../../components/course/CourseInquiryCTA';

export default function WorkplaceFAQsPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Workplace Training FAQs | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      <WorkplaceHero
        title="Workplace Training Frequently Asked Questions"
        subtitle="Clear answers on our enterprise delivery models, corporate billing, accreditation standards, and customized curriculum design."
        tag="Help & Knowledge Base"
        currentBreadcrumb="Workplace FAQs"
      />

      <WorkplaceFAQsList />

      <EnterpriseBenefits />

      <CourseInquiryCTA courseTitle="Workplace Training FAQs" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
