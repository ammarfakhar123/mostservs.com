import React from 'react';
import { BookOpen, FileCheck, Clock, Award, ShieldCheck } from 'lucide-react';

export default function CourseOverviewSection({ course }) {
  if (!course) return null;

  return (
    <section className="py-14 lg:py-18 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Course Overview
          </h2>
          <span className="text-xs font-bold text-[#0F7BFF] uppercase tracking-wider">
            Verified Specification
          </span>
        </div>

        {/* Astutis 3-Column Structured Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Column 1: UNITS */}
            <div className="p-6 sm:p-8 space-y-4">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                UNITS / MODULES
              </span>
              <div className="space-y-3">
                {course.modules && course.modules.length > 0 ? (
                  course.modules.slice(0, 3).map((m, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-slate-800">
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        {m.code || `Unit ${idx + 1}`}
                      </strong>
                      <span className="text-slate-600 leading-snug">{m.title}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-600">
                    Comprehensive modular syllabus covering core regulatory competencies.
                  </div>
                )}
                {course.modules && course.modules.length > 3 && (
                  <div className="text-xs text-[#0F7BFF] font-semibold pt-1">
                    + {course.modules.length - 3} additional units below
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: ASSESSMENTS */}
            <div className="p-6 sm:p-8 space-y-4">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                ASSESSMENTS
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-slate-800">
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Written Assignment / Open-Book
                  </strong>
                  <span className="text-slate-600 leading-snug">
                    Real workplace scenario analysis and criteria-mapped portfolio submission.
                  </span>
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Practical Evaluation
                  </strong>
                  <span className="text-slate-600 leading-snug">
                    Workplace risk profiling or technical project report evaluating organizational processes.
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: COURSE LENGTH */}
            <div className="p-6 sm:p-8 space-y-4">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
                COURSE LENGTH
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-slate-800">
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Virtual Classroom
                  </strong>
                  <span className="text-slate-600 leading-snug">
                    Scheduled evening/weekend blocks delivered across split weeks with interactive tutoring.
                  </span>
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Online Self-Paced
                  </strong>
                  <span className="text-slate-600 leading-snug">
                    Flexible study with 12 months access provided and continuous tutor support.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
