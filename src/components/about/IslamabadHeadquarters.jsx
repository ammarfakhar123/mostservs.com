import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function IslamabadHeadquarters() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
                Physical Presence & Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Islamabad Headquarters
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating from the commercial hub of I-8 Markaz in Islamabad, our facility houses our academic admissions desk, student counseling suites, corporate training seminars, and verification records department.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Head Office Address:</strong>
                    <span>{siteConfig.address.suite}, {siteConfig.address.floor}, {siteConfig.address.building}, {siteConfig.address.area}, {siteConfig.address.city} {siteConfig.address.postalCode}, {siteConfig.address.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#008AD2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Admissions & Office Hours:</strong>
                    <span>{siteConfig.businessHours.days}: {siteConfig.businessHours.hours} ({siteConfig.businessHours.timezone})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Direct Landline:</strong>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-[#F37021] font-medium">{siteConfig.phoneDisplay}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-lg font-bold text-white mb-2">Visit Our Admissions Office</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Prospective learners, corporate HR representatives, and university delegations are welcome to visit our Islamabad campus for one-on-one qualification consultations.
                </p>

                <div className="space-y-3">
                  <a
                    href={siteConfig.getWhatsAppInquiryLink('Schedule Office Visit')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book Appointment on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors border border-white/15"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email {siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
