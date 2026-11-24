import React from 'react';
import { ShieldCheck, HardHat, FileSpreadsheet, Lock, CheckCircle2 } from 'lucide-react';

const auditAreas = [
  {
    icon: HardHat,
    title: 'Occupational Health & Safety Audits',
    description: 'Comprehensive baseline workplace safety evaluations, hazard identification, and risk control measures conforming to local and international standards.',
    points: ['Site safety inspection reports', 'Machinery & fire safety protocols', 'Personal Protective Equipment (PPE) compliance']
  },
  {
    icon: Lock,
    title: 'Information Security & Data Integrity',
    description: 'Vulnerability assessment of corporate network architecture, staff phishing awareness audits, and data protection compliance.',
    points: ['Access control governance', 'Staff cyber security awareness drills', 'Incident response readiness']
  },
  {
    icon: ShieldCheck,
    title: 'Management Systems & ISO Alignment',
    description: 'Pre-audit gap analyses and implementation facilitation for international management standards including ISO 9001, ISO 45001, and ISO 14001.',
    points: ['Internal audit preparation', 'Documentation standardization', 'Corrective action roadmap']
  },
  {
    icon: FileSpreadsheet,
    title: 'Statutory Corporate Compliance Review',
    description: 'Auditing statutory SECP compliance, corporate filings, employee tax withholding records, and regulatory reporting alignment.',
    points: ['SECP annual filing verification', 'Withholding tax compliance check', 'Corporate governance documentation']
  }
];

export default function ConsultationAuditAreas() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
            Advisory Scopes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Core Consultation & Audit Domains
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Independent, practical consultancy delivered by certified practitioners and chartered professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {auditAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center mb-5 border border-[#FED7AA]/60">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-200/80 pt-4 text-xs sm:text-sm text-slate-700">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0098D4] shrink-0" />
                        <span>{pt}</span>
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
