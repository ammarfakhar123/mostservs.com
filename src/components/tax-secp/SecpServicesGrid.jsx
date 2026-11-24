import React from 'react';
import { Building, FileCheck, RefreshCw, Users, ShieldAlert, Check } from 'lucide-react';

const secpServices = [
  {
    icon: Building,
    title: 'Company Incorporation & Registration',
    desc: 'Name reservation, drafting Memorandum & Articles of Association, digital signature setup, and certificate of incorporation for Pvt Ltd, SMC, and LLPs.',
    details: ['Name reservation & search', 'Memorandum & Articles drafting', 'Digital signature token creation', 'SECP Incorporation Certificate']
  },
  {
    icon: FileCheck,
    title: 'Annual Statutory Return Filings',
    desc: 'Timely preparation and digital e-filing of mandatory annual corporate returns to maintain active compliant standing with SECP.',
    details: ['Form A / Form B annual return', 'Form 29 (Particulars of Directors)', 'Statutory financial statement submission', 'Avoidance of late filing penalties']
  },
  {
    icon: RefreshCw,
    title: 'Corporate Secretarial Modifications',
    desc: 'Handling formal organizational changes, director appointments/resignations, registered office transfers, and share transfers.',
    details: ['Addition / Resignation of Directors', 'Transfer & allotment of shares', 'Registered office address change', 'Alteration of Object Clause']
  },
  {
    icon: Users,
    title: 'Capital Restructuring & Shareholder Changes',
    desc: 'Assistance with increasing authorized and paid-up capital, drafting board resolutions, and updating SECP records.',
    details: ['Authorized share capital increase', 'Paid-up capital enhancement', 'Issuance of share certificates', 'Board resolution documentation']
  }
];

export default function SecpServicesGrid() {
  return (
    <section id="secp-services" className="py-16 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
            Securities & Exchange Commission of Pakistan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            SECP Corporate Legal & Secretarial Advisory
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Professional representation ensuring your enterprise complies with the Companies Act 2017 and SECP corporate governance regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secpServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-[#008AD2]/50 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008AD2] flex items-center justify-center mb-5 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/80 pt-4 text-xs sm:text-sm text-slate-700">
                    {svc.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0098D4] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
