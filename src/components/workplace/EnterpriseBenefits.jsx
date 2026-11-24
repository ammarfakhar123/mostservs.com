import React from 'react';
import { DollarSign, ShieldAlert, Clock, UserCheck, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Reduced Operational Training Costs',
    description: 'Special tiered corporate group pricing with zero travel overheads when delivered directly at your site or virtually.'
  },
  {
    icon: ShieldAlert,
    title: 'Minimised Workplace Incidents & Legal Risk',
    description: 'Ensure statutory compliance with Pakistani labour laws and international health and safety mandates.'
  },
  {
    icon: Clock,
    title: 'Zero Downtime Scheduling',
    description: 'Split modular shifts, weekend delivery, or evening virtual cohorts designed not to disrupt core production schedules.'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Corporate Account Lead',
    description: 'Single point of contact managing scheduling, invoicing, registration logistics, and certificate delivery.'
  }
];

export default function EnterpriseBenefits() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
            Corporate Value Proposition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Why Enterprise Clients Choose MOST Services
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Measurable advantages for HR directors, safety managers, and department heads across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008AD2] flex items-center justify-center mb-5 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
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
