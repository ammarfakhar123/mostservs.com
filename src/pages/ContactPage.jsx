import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import InteractiveContactForm from '../components/contact/InteractiveContactForm';
import DirectWhatsAppCard from '../components/contact/DirectWhatsAppCard';
import LocationMapCard from '../components/contact/LocationMapCard';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Admissions & Advisory | MOST Services Pvt Ltd';
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Sub-component: Contact Hero */}
      <ContactHero />

      {/* 2. Sub-component: 4 Contact Info Cards */}
      <ContactInfoCards />

      {/* 3. Sub-components: Form and Support Cards Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <InteractiveContactForm />
            </div>

            <div className="lg:col-span-5 space-y-8">
              <DirectWhatsAppCard />
              <LocationMapCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
