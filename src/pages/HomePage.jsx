import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AccreditationStrip from '../components/AccreditationStrip';
import LearningModes from '../components/LearningModes';
import ProgrammesSection from '../components/ProgrammesSection';
import ProvenAtScale from '../components/ProvenAtScale';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

export default function HomePage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = "MOST Services Pvt Ltd | Get Tomorrow's Skills Today!";
  }, []);

  return (
    <>
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <AccreditationStrip onOpenEnquiry={onOpenEnquiry} />
      <LearningModes onOpenEnquiry={onOpenEnquiry} />
      <ProgrammesSection onOpenEnquiry={onOpenEnquiry} />
      <ProvenAtScale onOpenEnquiry={onOpenEnquiry} />
      <Testimonials onOpenEnquiry={onOpenEnquiry} />
      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}
