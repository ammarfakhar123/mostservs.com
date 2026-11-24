import React from 'react';
import { GitCommit, ArrowRight, Award } from 'lucide-react';

export default function CategoryPathwayExplainer({ pathway }) {
  if (!pathway || !pathway.steps || pathway.steps.length === 0) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#008AD2] mb-3">
            Academic & Career Mapping
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {pathway.title || 'Qualification Progression Route'}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {pathway.description || 'Step-by-step career progression from foundational understanding up to postgraduate strategic management.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {pathway.steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#008AD2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F37021] bg-[#FFF7ED] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                    {step.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {index < pathway.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
