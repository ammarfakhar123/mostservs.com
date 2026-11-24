import React, { useEffect } from 'react';
import WorkplaceHero from '../../components/workplace/WorkplaceHero';
import CustomizationProcess from '../../components/workplace/CustomizationProcess';
import EnterpriseBenefits from '../../components/workplace/EnterpriseBenefits';
import WorkplaceInquiryForm from '../../components/workplace/WorkplaceInquiryForm';
import WorkplaceFAQsList from '../../components/workplace/WorkplaceFAQsList';
import CourseInquiryCTA from '../../components/course/CourseInquiryCTA';

export default function CustomizedCoursesPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Customized Corporate Courses | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Hero */}
      <WorkplaceHero
        title="Customized Courses for Your Workforce"
        subtitle="Develop high-performing teams with accredited training tailored to your company's operational hazards, regulatory obligations, and technical standards."
        tag="Enterprise Workforce Solutions"
        currentBreadcrumb="Customized Courses"
      />

      {/* 2. Sub-component: 4-Stage Methodology */}
      <CustomizationProcess />

      {/* 3. Sub-component: Enterprise Benefits */}
      <EnterpriseBenefits />

      {/* 4. Sub-component: Corporate Inquiry Form */}
      <WorkplaceInquiryForm preselectedTopic="Customized Corporate Training" />

      {/* 5. Sub-component: Workplace FAQ */}
      <WorkplaceFAQsList />

      {/* 6. Sub-component: Bottom Consultation Banner */}
      <CourseInquiryCTA courseTitle="Customized Workplace Courses" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
