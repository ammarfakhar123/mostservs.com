import React from 'react';
import { ShieldCheck, Handshake, CheckCircle2, TrendingUp } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function CorporatePartnership() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
              Strategic Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Trusted Partner for Pakistani Enterprises & Educational Institutes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We collaborate with corporate organizations, engineering firms, government contractors, and educational centers to raise professional benchmarks and ensure full regulatory compliance.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Direct Awarding Body Center Status:</strong> Official approved delivery adhering to rigorous international standards.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Tailored Corporate MOUs:</strong> Scalable frameworks for continuous staff development and preferential cohort rates.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">End-to-End Governance:</strong> Transparent statutory reporting, attendance tracking, and verified certificates.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F37021]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F37021]/20 text-[#FB923C] flex items-center justify-center border border-[#F37021]/30">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Partner with MOST Services</h3>
                  <p className="text-xs text-slate-400">Institutional and corporate alliances</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you represent an academic academy seeking progression pathways or a corporate employer aiming to upskill 100+ technical personnel, our Islamabad headquarters is ready to design a collaborative framework.
              </p>

              <div className="border-t border-slate-800 pt-6 space-y-3 text-xs text-slate-300 mb-8">
                <div className="flex justify-between py-1">
                  <span>Headquarters:</span>
                  <span className="font-semibold text-white">Twin City Plaza, I-8 Markaz, Islamabad</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Advisory Phone:</span>
                  <span className="font-semibold text-white">{siteConfig.phoneDisplay}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Partnerships Email:</span>
                  <span className="font-semibold text-[#FB923C]">{siteConfig.email}</span>
                </div>
              </div>

              <a
                href={siteConfig.getWhatsAppInquiryLink('Corporate Partnership')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Initiate Partnership Discussion</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
