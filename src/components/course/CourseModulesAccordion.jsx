import React, { useState } from 'react';
import { BookOpen, ChevronDown, Check, Layers } from 'lucide-react';

export default function CourseModulesAccordion({ modules, courseTitle }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!modules || modules.length === 0) return null;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#008AD2] mb-3">
            <Layers className="w-3.5 h-3.5" />
            Curriculum &amp; Structure
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Qualification Units &amp; Syllabus Breakdown
          </h2>
          <p className="mt-3 text-base text-slate-600">
            This programme comprises {modules.length} mandatory and specialist units carefully aligned with regulatory standards and professional industry competencies.
          </p>
        </div>

        <div className="max-w-4xl space-y-3">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={mod.code || index}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0F7BFF] shadow-md ring-1 ring-[#0F7BFF]/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="shrink-0 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {mod.code}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0F7BFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-slate-600 border-t border-slate-100">
                    <p className="mb-3 leading-relaxed">
                      This unit assesses theoretical knowledge and practical workplace application, focusing on real-world problem solving, analysis, and technical implementation.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80">
                      <div className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                        Key Competency Areas Covered:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0098D4] shrink-0" />
                          <span>Core principles, frameworks & compliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0098D4] shrink-0" />
                          <span>Applied scenario problem-solving</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0098D4] shrink-0" />
                          <span>Technical documentation & reporting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0098D4] shrink-0" />
                          <span>Evidence-based workplace portfolio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
