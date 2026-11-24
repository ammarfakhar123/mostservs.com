import React from 'react';
import { CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ComplianceChecklist() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-[#0A1628] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-bold text-[#F37021] block mb-2">
              Corporate Governance Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Annual Statutory Compliance Calendar for Pakistani Companies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Every registered Private Limited (Pvt Ltd) company in Pakistan must maintain strict compliance to avoid disqualification, punitive fines, and winding-up notices from the registrar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Annual General Meeting (AGM):</strong>
                  <span className="text-slate-300">Must be conducted within 120 days from the close of the financial year.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Form A / Annual Return Filing:</strong>
                  <span className="text-slate-300">File within 30 days of the AGM date via the SECP e-services portal.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Annual Income Tax Return (FBR):</strong>
                  <span className="text-slate-300">Mandatory corporate return filing by December 31st each fiscal year.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Monthly Sales Tax Returns:</strong>
                  <span className="text-slate-300">Submitted by the 15th-18th of each following calendar month.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Need audit assistance or regular retainer support? Our corporate desk is based in Islamabad.
              </p>
              <a
                href={siteConfig.getWhatsAppInquiryLink('SECP & Tax Retainer')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Engage Corporate Retainer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
