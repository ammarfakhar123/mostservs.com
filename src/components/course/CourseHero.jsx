import React from 'react';
import { Award, FileText, Download, Play, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import Breadcrumb from '../layout/Breadcrumb';
import { siteConfig } from '../../data/siteConfig';

export default function CourseHero({ course, onOpenEnquiry }) {
  if (!course) return null;

  const whatsappUrl = siteConfig.getWhatsAppInquiryLink(course.title);

  return (
    <section className="bg-white pt-8 pb-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Qualifications', href: '/qualifications' },
            { label: course.categoryName, href: `/qualifications/${course.categorySlug}` },
            { label: course.shortTitle || course.title }
          ]}
          isDark={false}
        />

        {/* Astutis Accent Top Line */}
        <div className="w-14 h-1 bg-[#0F7BFF] mt-6 mb-4 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Astutis Course Header, Actions & Did You Know */}
          <div className="lg:col-span-8 space-y-5">
            {/* H1 Course Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {course.title}
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {course.overview}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The {course.shortTitle || course.title} is designed to apply to all industries across the globe. The international curriculum is engineered to equip practitioners with robust risk mitigation frameworks, technical competencies, and compliance management tools.
            </p>

            {/* Admissions note */}
            <div className="text-sm font-bold text-slate-900 pt-1">
              Admissions: <span className="text-[#0F7BFF]">Contact for Latest Fees &amp; Upcoming Cohorts</span>
            </div>

            {/* Astutis 4-Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`Download Course Guide: ${course.title}`)}
                className="px-4 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#0F7BFF]" />
                <span>Course Guide</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`Online Demo Request: ${course.title}`)}
                className="px-4 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <Play className="w-3.5 h-3.5 text-[#0F7BFF]" />
                <span>Online Demo</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`Make an Enquiry: ${course.title}`)}
                className="px-4 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#0F7BFF]" />
                <span>Make an Enquiry</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 cursor-pointer shadow-btn-blue"
              >
                <span>Apply / Enrol Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Astutis "Did you know?" Callout */}
            <div className="pt-6 border-t border-slate-200 space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Did you know?
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span>
                    Our <strong>all-inclusive course packages</strong> cover everything, from official study materials and tutor review to initial assignment registration.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span>
                    If you prefer, you can join <strong>structured live virtual evening cohorts</strong> or study 100% self-paced from desktop or mobile.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span>
                    We offer <strong>transparent guidance with zero hidden costs</strong>, just real value and accredited qualifications!
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Astutis Gold Learning Partner Badge & Key Facts Table */}
          <div className="lg:col-span-4 space-y-6">
            {/* Astutis Learning Partner Gold Badge */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#003882] text-white flex items-center justify-center font-bold shadow-xs">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase text-slate-900 tracking-wider">
                    {course.awardingBody}
                  </div>
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    LEARNING PARTNER GOLD
                  </div>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#0098D4] shrink-0" />
            </div>

            {/* Astutis Key Facts Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <div className="border-b border-slate-100 pb-3">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  DURATION
                </span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                  {course.duration || '6 to 9 Months (Flexible Access)'}
                </span>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  ENTRY REQUIREMENTS
                </span>
                <span className="text-xs sm:text-sm text-slate-700 mt-0.5 block leading-relaxed">
                  {course.entryRequirements || 'Open to candidates with relevant educational background or practical workplace supervisory experience.'}
                </span>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  ASSESSMENT METHOD
                </span>
                <span className="text-xs sm:text-sm text-slate-700 mt-0.5 block leading-relaxed">
                  {course.assessmentMethod || 'Assignment & portfolio-based workplace scenario assessment.'}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  ACCREDITATION STATUS
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0098D4] mt-0.5 block">
                  UK Ofqual Regulated • Internationally Recognised
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
