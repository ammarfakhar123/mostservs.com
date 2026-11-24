import React from 'react';
import { FileSpreadsheet, ShieldCheck, Scale, CheckCircle2, AlertCircle } from 'lucide-react';

const fbrServices = [
  {
    title: 'National Tax Number (NTN) & Registration',
    desc: 'Registration of individual, AOP, and corporate NTN on the FBR IRIS portal, including biometric verification coordination.'
  },
  {
    title: 'Sales Tax Registration (STRN) & Provincial Tax',
    desc: 'FBR Sales Tax on goods registration, as well as provincial service tax registration with PRA (Punjab), SRB (Sindh), KPRA (KPK), and BRA (Balochistan).'
  },
  {
    title: 'Monthly & Annual Income Tax Filings',
    desc: 'Accurate tax return preparation for corporate entities and salaried/business individuals, guaranteeing Active Taxpayer List (ATL) status.'
  },
  {
    title: 'Withholding Tax (WHT) Statements',
    desc: 'Periodic compilation and electronic submission of withholding tax statements under Section 165 of the Income Tax Ordinance.'
  },
  {
    title: 'FBR Audit & Notice Representation',
    desc: 'Assisting companies in preparing documentation, responding to statutory audit inquiries, and contesting unlawful tax demands.'
  },
  {
    title: 'Tax Exemption Certificates',
    desc: 'Facilitating applications for tax reduction and exemption certificates under applicable clauses of the Income Tax Ordinance.'
  }
];

export default function FbrTaxAdvisory() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Federal Board of Revenue (FBR) Advisory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Corporate Taxation & Fiscal Compliance
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Professional tax counsel to minimize fiscal risks, maintain active FBR status, and leverage legal corporate deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fbrServices.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-[#F37021]/50 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center font-bold text-sm mb-4 border border-[#FED7AA]/60">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
