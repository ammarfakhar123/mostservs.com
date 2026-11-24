import React from 'react';
import { Laptop, Video, BookOpen, Building2, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const learningOptions = [
  {
    id: 'online',
    title: 'Online Learning',
    icon: Laptop,
    recommended: false,
    subtitle: 'On-demand, flexible, accessible, self-paced digital learning.',
    features: [
      'Complete the course around your personal work schedule',
      'Access the study portal anytime on desktop or mobile',
      'Electronic learning materials & assignment briefs',
      'Continuous tutor review and assignment feedback'
    ],
    ctaText: 'Enrol Online'
  },
  {
    id: 'virtual',
    title: 'Virtual Learning',
    icon: Video,
    recommended: true,
    subtitle: 'Live, interactive online training with an accredited tutor.',
    features: [
      'A structured classroom experience from home or workplace',
      'Live interactive lectures & group safety workshops',
      'Direct Q&A with experienced lead assessors',
      'Recorded sessions available for revision 24/7'
    ],
    ctaText: 'Join Next Cohort'
  },
  {
    id: 'distance',
    title: 'Distance Learning',
    icon: BookOpen,
    recommended: false,
    subtitle: 'Self-paced textbook learning with structured revision checkpoints.',
    features: [
      'Self-study at your own pace with comprehensive guides',
      'Digital resources hub for criteria mapping',
      'Formal progress checks to keep you on track',
      'One-on-one scheduled review clinics'
    ],
    ctaText: 'Enquire Distance'
  },
  {
    id: 'onsite',
    title: 'On-Site Learning',
    icon: Building2,
    recommended: false,
    subtitle: 'Train together in a collaborative, face-to-face or workplace setting.',
    features: [
      'Customised syllabi tailored to facility risks',
      'Choose from on-site premises or Islamabad centre',
      'Dedicated corporate account manager & reporting',
      'Exclusive group rates for corporate teams'
    ],
    ctaText: 'Contact Us'
  }
];

export default function CourseLearningOptions({ courseTitle, onOpenEnquiry }) {
  return (
    <section className="py-14 lg:py-18 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Astutis Section Header: "Learning options: 4" */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Learning options:
            </h2>
            <span className="w-8 h-8 rounded-full bg-[#102A43] text-white font-extrabold text-sm flex items-center justify-center">
              4
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Flexible Delivery Formats</span>
          </div>
        </div>

        {/* Astutis 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[#0F7BFF] mb-3">
                    <Icon className="w-5 h-5" />
                    <h3 className="text-base font-bold text-slate-900">
                      {opt.title}
                    </h3>
                  </div>

                  {opt.recommended ? (
                    <div className="text-xs font-bold text-[#E11D48] underline decoration-2 underline-offset-4 mb-2">
                      Highly Recommended.
                    </div>
                  ) : (
                    <div className="h-5 mb-1" />
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 min-h-[36px]">
                    {opt.subtitle}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    {opt.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0098D4] mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Tuition / Enrollment
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${opt.title} for ${courseTitle}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0F7BFF] hover:bg-[#0066E6] text-white text-xs font-bold transition-all shadow-btn-blue text-center cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <span>{opt.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
