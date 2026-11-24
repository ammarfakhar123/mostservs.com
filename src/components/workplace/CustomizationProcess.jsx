import React from 'react';
import { Search, Sliders, Presentation, Award, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Training Needs & Risk Audit',
    description: 'We evaluate your organization’s operational hazards, regulatory obligations, and workforce skill gaps to define exact learning outcomes.'
  },
  {
    step: '02',
    icon: Sliders,
    title: 'Curriculum & Schedule Tailoring',
    description: 'Our senior instructional leads customize scenario case studies, practical simulations, and class timings around your operating shifts.'
  },
  {
    step: '03',
    icon: Presentation,
    title: 'Practitioner-Led Delivery',
    description: 'Training is delivered at your company premises, an executive venue, or via secure live virtual classroom by accredited industry trainers.'
  },
  {
    step: '04',
    icon: Award,
    title: 'Assessment & Verification Reporting',
    description: 'Comprehensive post-training reporting, management dashboards of employee performance, and official accredited certification dispatch.'
  }
];

export default function CustomizationProcess() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Our Delivery Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How We Tailor Training for Your Workforce
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A structured, 4-stage framework that guarantees high learner retention, operational compliance, and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center border border-[#FED7AA]/60">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
