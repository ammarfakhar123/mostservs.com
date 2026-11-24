import React from 'react';
import { Award, CheckCircle2, BookOpen, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { getCourseImage } from '../../assets/courses';

export default function CourseExplainedSection({ course, onOpenEnquiry }) {
  if (!course) return null;

  const courseTitle = course.shortTitle || course.title;

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Astutis [Course] Explained Editorial Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0F7BFF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Specification</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {courseTitle} Explained
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The {course.title} is an ideal academic and practical progression route into senior technical management. It equips learners with pivotal philosophies and practical methodologies in risk assessment, regulatory frameworks, and operational governance.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The qualification focuses on central units covering strategic risk mitigation, emergency planning, audit protocols, and safety management systems. It is mapped to international criteria and is widely recognised across multinational enterprises.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether studying online or in live interactive virtual classrooms, learners benefit from comprehensive digital workbooks, bite-sized learning modules, scenario-based practice questions, and direct tutor feedback.
            </p>

            {/* Designed by Experts Callout */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block mb-1">
                Designed by Experts for Working Practitioners
              </span>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Authored and reviewed by certified chartered practitioners with extensive field experience across industrial engineering, manufacturing, environmental safety, and enterprise technology.
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Photographic Showcase Card (Images instead of videos) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              {/* Photo Showcase */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={getCourseImage(course.slug, course.categorySlug)}
                  alt={`${courseTitle} practical training and assessment`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100 filter contrast-105 saturate-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.95) 100%)',
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0F7BFF] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Curriculum In Action
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-base sm:text-lg leading-snug">
                    Practical Workplace Competency
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Real workplace scenario mapping &amp; portfolio-based evaluation
                  </p>
                </div>
              </div>

              {/* Showcase Key Details */}
              <div className="p-6 bg-[#0B1324] text-white space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Real workplace hazard identification and control briefs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Comprehensive digital workbooks and study resources</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>Direct 1-on-1 tutor feedback on draft portfolio criteria</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>{course.awardingBody} Regulated</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`Course Syllabus & Curriculum: ${course.title}`)}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#0F7BFF] text-white text-xs font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
