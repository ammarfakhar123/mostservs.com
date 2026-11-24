import React from 'react';
import { Briefcase, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function CourseCareerProgression({ careerOpportunities, level, categoryName }) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#008AD2] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Career & Academic Growth
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Career Opportunities & Progression Pathway
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Graduates holding regulated UK and international qualifications gain recognized credentials that open doors to executive roles, international opportunities, and direct university top-up degrees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Target Job Roles */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Target Employment Roles
                </h3>
                <p className="text-xs text-slate-500">
                  Common career titles attained by holders of this qualification
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {careerOpportunities && careerOpportunities.length > 0 ? (
                careerOpportunities.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#F37021] shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{role}</span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-sm text-slate-600">
                  Industry roles in {categoryName || 'this sector'}.
                </div>
              )}
            </div>
          </div>

          {/* Academic Progression Ladder */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Academic Progression Ladder
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Regulated framework mapping to UK higher education
            </p>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#008AD2] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Level 3 / Foundation</h4>
                  <p className="text-xs text-slate-600">Equivalent to UK A-Levels / Foundation Diploma.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#008AD2] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Level 4 & 5 Diplomas</h4>
                  <p className="text-xs text-slate-600">Equivalent to 1st & 2nd Year of UK Bachelor's Degree.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F37021] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Level 6 Diploma</h4>
                  <p className="text-xs text-slate-600">Undergraduate Degree Final Year Equivalent / Bachelor's Top-Up.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F37021] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#C25410]">Level 7 Postgraduate Diploma</h4>
                  <p className="text-xs text-slate-700">Postgraduate Level / Direct progression to UK Master's Dissertation / MBA top-up.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
