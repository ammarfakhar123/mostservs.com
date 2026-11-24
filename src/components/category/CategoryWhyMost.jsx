import React from 'react';
import { CheckCircle2, ShieldCheck, GraduationCap, Building2, UserCheck } from 'lucide-react';

export default function CategoryWhyMost({ whyMost, categoryTitle }) {
  if (!whyMost || whyMost.length === 0) return null;

  const icons = [ShieldCheck, GraduationCap, Building2, UserCheck];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#C25410] mb-3">
            Why Choose MOST Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Advancing Your {categoryTitle || 'Professional'} Credentials
          </h2>
          <p className="mt-2 text-base text-slate-600">
            We provide structured academic guidance, official centre approvals, and rigorous internal quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyMost.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center mb-5 border border-[#FED7AA]/50">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
