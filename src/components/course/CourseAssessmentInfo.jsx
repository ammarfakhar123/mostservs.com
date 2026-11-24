import React from 'react';
import { FileCheck, Shield, CheckCircle, Award } from 'lucide-react';

export default function CourseAssessmentInfo({ assessmentMethod, awardingBody }) {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0098D4]">
              <FileCheck className="w-3.5 h-3.5" />
              Examination & Assessment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Transparent, Evidence-Based Assessment
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Assessment for this qualification is conducted through rigorous practical coursework, professional assignment portfolios, and workplace scenario tasks designed to evaluate tangible competency rather than rote memorization.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Assessment Format
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {assessmentMethod || "Assignment and portfolio-based evaluation submitted per unit. All units must satisfy designated learning outcomes and assessment criteria."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <Shield className="w-5 h-5 text-[#008AD2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Internal Moderation & External Quality Assurance
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Student work undergoes comprehensive Internal Quality Assurance (IQA) by MOST Services academic leads before external sample auditing and certificate issuance by {awardingBody || "the awarding organization"}.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <Award className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Draft Review & Constructive Feedback
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Candidates receive formative tutor feedback on draft submissions to guarantee academic alignment prior to final grading and certification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-[#0A1628] text-white p-8 rounded-2xl border border-slate-800 shadow-xl">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F37021] block mb-2">
                Quality Assurance Guarantee
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                Regulated Awarding Standards
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                All assessments conform strictly to approved regulatory frameworks. We maintain zero-tolerance for plagiarism and guarantee ethical academic progression.
              </p>

              <div className="border-t border-slate-800 pt-6 space-y-3 text-xs text-slate-400">
                <div className="flex justify-between items-center py-1">
                  <span>Grading Scale:</span>
                  <span className="font-bold text-white">Pass / Refer</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Plagiarism Scanning:</span>
                  <span className="font-bold text-white">Mandatory Electronic Scan</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Certificate Dispatch:</span>
                  <span className="font-bold text-white">Direct from Awarding Body</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Online Verification:</span>
                  <span className="font-bold text-[#38BDF8]">Official Portal Verifiable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
