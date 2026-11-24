import React from 'react';
import { Shield, Sparkles, BookOpen, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Academic & Moral Integrity',
    desc: 'Uncompromising adherence to authentic assessment, anti-plagiarism protocols, and transparent verification without shortcuts.'
  },
  {
    icon: Sparkles,
    title: 'Professional Excellence',
    desc: 'Instruction delivered by seasoned industry consultants and certified practitioners with real-world sector experience.'
  },
  {
    icon: BookOpen,
    title: 'Educational Accessibility',
    desc: 'Flexible digital learning, evening cohorts, and weekend workshops tailored for working professionals and shift managers.'
  },
  {
    icon: Users,
    title: 'Learner-Centric Mentorship',
    desc: 'From initial admissions counseling to assignment draft reviews and graduation guidance, our team supports every student.'
  }
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Our Core Values
          </h2>
          <p className="mt-2 text-base text-slate-600">
            The institutional commitments that define every course, consultation, and corporate relationship at MOST Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center mb-5 border border-[#FED7AA]/60">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
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
