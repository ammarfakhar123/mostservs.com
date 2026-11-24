import React, { useEffect } from 'react';
import VerificationHero from '../components/verification/VerificationHero';
import VerificationForm from '../components/verification/VerificationForm';
import AwardingBodyGuides from '../components/verification/AwardingBodyGuides';
import FraudAlertNotice from '../components/verification/FraudAlertNotice';
import VerificationFAQ from '../components/verification/VerificationFAQ';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';

export default function CertificateVerificationPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Certificate Verification Registry | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Verification Hero */}
      <VerificationHero />

      {/* 2. Sub-component: Centre Verification Query Form */}
      <VerificationForm />

      {/* 3. Sub-component: Awarding Body Official Verification Guides */}
      <AwardingBodyGuides />

      {/* 4. Sub-component: Fraud & Fake Certificate Alert */}
      <FraudAlertNotice />

      {/* 5. Sub-component: Verification FAQ */}
      <VerificationFAQ />

      {/* 6. Sub-component: Bottom Consultation CTA Banner */}
      <CourseInquiryCTA courseTitle="Verification Services" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
