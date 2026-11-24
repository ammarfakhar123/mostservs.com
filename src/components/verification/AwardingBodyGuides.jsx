import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

const awardingBodies = [
  {
    name: 'OTHM Qualifications (UK)',
    badge: 'Ofqual Regulated',
    desc: 'All official OTHM certificates feature a verifiable QR code, security watermark, and unique learner identification number. Qualifications are regulated by the Office of Qualifications and Examinations Regulation (Ofqual) in England.',
    steps: [
      'Locate the QR Code printed on the lower left of your parchment certificate.',
      'Scan the QR code using any camera or smartphone to open the direct OTHM verification ledger.',
      'Alternatively, institutional verifiers can email info@othm.org.uk quoting the candidate Learner ID.'
    ]
  },
  {
    name: 'IOSH (Institution of Occupational Safety & Health)',
    badge: 'Global HSE Standard',
    desc: 'IOSH certificates for Managing Safely and Working Safely carry an individual certificate serial code and course provider number.',
    steps: [
      'Contact the IOSH Training Operations team with certificate holder name and certificate number.',
      'Employers can request automated confirmation of certificate authenticity directly through the IOSH member services portal.'
    ]
  },
  {
    name: 'AOSH Awarding Body',
    badge: 'International Certification',
    desc: 'AOSH certificates can be checked directly through their centralized global candidate registry using the certificate serial number.',
    steps: [
      'Visit the official AOSH verification portal.',
      'Enter the Certificate Number and Student Registration Code exactly as printed.',
      'Review matching candidate credentials and issuance date.'
    ]
  },
  {
    name: 'ICTQual AB',
    badge: 'Vocational Competency',
    desc: 'ICTQual parchment certificates and transcripts include unique verification seals for commercial and industrial employers.',
    steps: [
      'Access the ICTQual online credential search tool.',
      'Enter Candidate Roll Number and Verification PIN.',
      'Download an electronic certificate status verification report.'
    ]
  }
];

export default function AwardingBodyGuides() {
  return (
    <section id="awarding-bodies" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Direct Verification Portals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How to Verify Directly with Awarding Organizations
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Regulated qualifications provide complete independent transparency. Follow the steps below for official third-party validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardingBodies.map((body, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {body.name}
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#008AD2] border border-blue-100">
                    {body.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {body.desc}
                </p>

                <div className="space-y-2.5 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">
                    Verification Steps:
                  </div>
                  {body.steps.map((st, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
