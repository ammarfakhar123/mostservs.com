import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import AccreditationPartners from '../components/about/AccreditationPartners';
import CoreValues from '../components/about/CoreValues';
import IslamabadHeadquarters from '../components/about/IslamabadHeadquarters';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';

export default function AboutUsPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'About Us | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: About Hero */}
      <AboutHero />

      {/* 2. Sub-component: Mission & Vision */}
      <MissionVision />

      {/* 3. Sub-component: Regulated Awarding Partners */}
      <AccreditationPartners />

      {/* 4. Sub-component: Institutional Core Values */}
      <CoreValues />

      {/* 5. Sub-component: Islamabad Headquarters Profile */}
      <IslamabadHeadquarters />

      {/* 6. Sub-component: Direct Consultation CTA Banner */}
      <CourseInquiryCTA courseTitle="General Inquiry" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
