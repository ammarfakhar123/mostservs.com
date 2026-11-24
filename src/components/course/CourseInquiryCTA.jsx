import React from 'react';
import { MessageCircle, PhoneCall, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function CourseInquiryCTA({ courseTitle, onOpenEnquiry }) {
  const whatsappUrl = siteConfig.getWhatsAppInquiryLink(courseTitle || 'Professional Course');

  return (
    <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2">
              Admissions &amp; Enrolment Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Ready to Advance with {courseTitle || 'an Accredited Qualification'}?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Connect directly with our admissions advisors in Islamabad for confirmed fee schedules, eligibility verification, syllabus documents, and upcoming cohort start dates.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-400">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-slate-400" />
                <span>Islamabad Office: {siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#0098D4] hover:bg-[#0085BA] text-white font-semibold text-sm transition-colors text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry(courseTitle)}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer text-center"
            >
              <span>Submit Admissions Enquiry</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
