import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const partners = [
  {
    name: 'OTHM Qualifications',
    type: 'Regulated UK Awarding Body',
    desc: 'Regulated by Ofqual (England), Qualifications Wales, and mapped to the Regulated Qualifications Framework (RQF).'
  },
  {
    name: 'IOSH',
    type: 'Chartered Body for Safety',
    desc: 'Institution of Occupational Safety and Health, the world’s chartered professional body for health and safety.'
  },
  {
    name: 'AOSH Awarding Body',
    type: 'International HSE Qualifications',
    desc: 'Delivering comprehensive occupational safety certifications recognized across regional energy and industrial sectors.'
  },
  {
    name: 'ICTQual AB',
    type: 'Vocational Certification',
    desc: 'Practical, workplace competency certifications designed for operational supervisors and technical staff.'
  }
];

export default function AccreditationPartners() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
            Centre Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Awarding Bodies & Regulatory Alignment
          </h2>
          <p className="mt-2 text-base text-slate-600">
            We operate in strict adherence to quality assurance standards established by regulated international awarding bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {p.name}
                </h3>
                <span className="text-xs font-bold text-[#F37021] block mb-3">
                  {p.type}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
