import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCardGrid from '../components/services/ServiceCardGrid';
import CorporatePartnership from '../components/services/CorporatePartnership';
import WorkplaceInquiryForm from '../components/workplace/WorkplaceInquiryForm';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';

export default function ServicesPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Corporate & Advisory Services | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Services Hero */}
      <ServicesHero />

      {/* 2. Sub-component: Service Cards Grid */}
      <ServiceCardGrid />

      {/* 3. Sub-component: Strategic Corporate Partnerships */}
      <CorporatePartnership />

      {/* 4. Sub-component: Corporate Inquiry Form */}
      <WorkplaceInquiryForm preselectedTopic="General Corporate Services" />

      {/* 5. Sub-component: Direct Consultation CTA Banner */}
      <CourseInquiryCTA courseTitle="Corporate Services" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
