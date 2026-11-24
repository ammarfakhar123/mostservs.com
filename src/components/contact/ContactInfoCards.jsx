import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ContactInfoCards() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Head Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {siteConfig.address.suite}, {siteConfig.address.floor}, {siteConfig.address.building}, {siteConfig.address.area}, {siteConfig.address.city} {siteConfig.address.postalCode}, {siteConfig.address.country}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/80 mt-4 text-xs font-semibold text-[#F37021]">
              Twin City Plaza • I-8 Markaz
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#008AD2] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Phone Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Direct desk for qualification inquiries and corporate consultation:
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-base font-bold text-slate-900 hover:text-[#F37021] transition-colors block"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="pt-4 border-t border-slate-200/80 mt-4 text-xs font-semibold text-[#008AD2]">
              Official PTCL Landline
            </div>
          </div>

          {/* Card 3: WhatsApp Support */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0098D4]/10 text-[#0098D4] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                WhatsApp Lines
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Dedicated admissions & academic coordinators:
              </p>
              <div className="space-y-1 text-sm font-bold text-slate-900">
                <a
                  href="https://wa.me/923365555628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0098D4] transition-colors block"
                >
                  0336 5555628
                </a>
                <a
                  href="https://wa.me/923365555683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0098D4] transition-colors block"
                >
                  0336 5555683
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200/80 mt-4 text-xs font-semibold text-[#0098D4]">
              Instant Chat Available
            </div>
          </div>

          {/* Card 4: Email & Hours */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Hours & Email
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                {siteConfig.businessHours.days}:
                <span className="block font-semibold text-slate-800">{siteConfig.businessHours.hours} ({siteConfig.businessHours.timezone})</span>
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#F37021] transition-colors break-all block"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="pt-4 border-t border-slate-200/80 mt-4 text-xs font-semibold text-purple-700">
              Weekend Response via WhatsApp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
